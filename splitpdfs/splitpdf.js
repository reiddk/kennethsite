"use strict";
const { PDFDocument, StandardFonts, rgb } = require('pdf-lib');
const fs = require('fs');
const fetch = require('node-fetch');
const { exec } = require("child_process");




let booksToInfo = [
    {
        bookTitle: 'One Variable Advanced Calculus',
        bookUrl: 'https://kennethbooks.s3.us-east-2.amazonaws.com/books/AdvancedCalculusSV/AdvancedCalculusSV.pdf',
        lastModifiedDate: ''
    },
    {
        bookTitle: 'Real and Abstract Analysis',
        bookUrl: 'https://kennethbooks.s3.us-east-2.amazonaws.com/books/Analysis/Analysis.pdf',
        lastModifiedDate: ''
    },
    {
        bookTitle: 'Calculus of One and Many Variables',
        bookUrl: 'https://kennethbooks.s3.us-east-2.amazonaws.com/books/CalculusOneAndManyVariables/CalculusOneAndManyVariables.pdf',
        lastModifiedDate: ''
    },
    {
        bookTitle: 'Calculus of Real and Complex Variables',
        bookUrl: 'https://kennethbooks.s3.us-east-2.amazonaws.com/books/ComplexAnalysis/ComplexAnalysis.pdf',
        lastModifiedDate: ''
    },
    {
        bookTitle: 'Elementary Linear Algebra',
        bookUrl: 'https://kennethbooks.s3.us-east-2.amazonaws.com/books/ElementaryLinearAlgebra/ElementaryLinearAlgebra.pdf',
        lastModifiedDate: ''
    },
    {
        bookTitle: 'Engineering Math',
        bookUrl: 'https://kennethbooks.s3.us-east-2.amazonaws.com/books/EngineeringMath/EngineeringMath.pdf',
        lastModifiedDate: ''
    },
    {
        bookTitle: 'Linear Algebra And Analysis',
        bookUrl: 'https://kennethbooks.s3.us-east-2.amazonaws.com/books/LinearAlgebraAndAnalysis/LinearAlgebraAndAnalysis.pdf',
        lastModifiedDate: ''
    },
    {
        bookTitle: 'Linear Algebra, Theory And Applications',
        bookUrl: 'https://kennethbooks.s3.us-east-2.amazonaws.com/books/Linearalgebra/Linearalgebra.pdf',
        lastModifiedDate: ''
    },
    {
        bookTitle: 'Topics In Analysis',
        bookUrl: 'https://kennethbooks.s3.us-east-2.amazonaws.com/books/TopicsInAnalysis/TopicsInAnalysis.pdf',
        lastModifiedDate: ''
    }
];

let folderLoc = './';
if (fs.existsSync('../dist/kennethsite/assets')) {
    folderLoc = '../dist/kennethsite/assets';
}

async function processBook(pdfDoc, bookInfo) {
    const pages = pdfDoc.getPages();
    for (let i = 0; i < pages.length; i++) {
        const pdfDoc2 = await PDFDocument.create();
        const [pageToAdd] = await pdfDoc2.copyPages(pdfDoc, [i]);
        pdfDoc2.addPage(pageToAdd);
        const pdfBytes = await pdfDoc2.save();
        await new Promise((resolve, reject) => {
            fs.writeFile(folderLoc + '/' + bookInfo.bookTitle.replace(/\s/g, '-') + String(i) + '.pdf', pdfBytes, (error) => {
                if (error) {
                    reject(error);
                }
                resolve();
            });
        }).catch(e => console.log(e));
        
        await new Promise((resolve, reject) => {
            exec(`pdftohtml -enc UTF-8 -noframes ${folderLoc + '/' + bookInfo.bookTitle.replace(/\s/g, '-') + String(i) + '.pdf'} ${folderLoc + '/' + bookInfo.bookTitle.replace(/\s/g, '-') + String(i) + '.html'}`, (error, stdout, stderr) => {    
                if (error) {
                    console.log(`error: ${error.message}`);
                }
                if (stderr) {
                    console.log(`stderr: ${stderr}`);
                }
                resolve();
            });
        });

    }


}

async function processData() {

    for (let book of booksToInfo) {
        const existingPdfBytes = await fetch(book.bookUrl).then(res => res.arrayBuffer()).catch(e => { console.log(e); return null; });
        if (!existingPdfBytes) {
            continue;
        }
        const pdfDoc = await PDFDocument.load(existingPdfBytes).catch(e => { console.log(e); return null; });
        if (!pdfDoc) {
            continue;
        }
        await processBook(pdfDoc, book).catch(e => console.log(e));
    }

}

processData();
