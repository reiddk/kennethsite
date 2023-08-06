
import { Injectable } from '@angular/core';
import { Observable, Subject, interval } from 'rxjs';
import { take } from 'rxjs/operators';

export interface bookInfo {
    bookTitle: string;
    bookUrl: string;
    lastModifiedDate?: string;
    bookCover?: string;
    purchaseLink?: string;
    purchaseMessage?: string;
    warning?: string;
}

@Injectable()
export class StorageService {
    currentlyRequestingUrl = {};
    error401Called: boolean = false;
    updatedBooksInfo = new Subject<bookInfo[]>();
    booksToInfo: bookInfo[] = [
        {
            bookTitle: 'One Variable Advanced Calculus',
            bookUrl: 'https://d2orq2otfnmxdd.cloudfront.net/books/AdvancedCalculusSV/AdvancedCalculusSV.pdf',
            lastModifiedDate: '',
            bookCover: 'https://d2orq2otfnmxdd.cloudfront.net/cover/single-variable-advanced.jpg',
            purchaseLink: 'https://www.amazon.com/dp/B09GZM9JMR?ref_=pe_3052080_397514860',
            purchaseMessage: 'Purchase a physical copy'
        },
        {
            bookTitle: 'Real and Abstract Analysis',
            bookUrl: 'https://d2orq2otfnmxdd.cloudfront.net/books/Analysis/Analysis.pdf',
            lastModifiedDate: ''
        },
        {
            bookTitle: 'Calculus of One and Many Variables',
            bookUrl: 'https://d2orq2otfnmxdd.cloudfront.net/books/CalculusOneAndManyVariables/CalculusOneAndManyVariables.pdf',
            lastModifiedDate: '',
            bookCover: 'https://d2orq2otfnmxdd.cloudfront.net/cover/calculus-one-many.jpg',
            purchaseLink: 'https://www.amazon.com/dp/B09JJGWSP6?ref_=pe_3052080_397514860',
            purchaseMessage: 'Purchase a physical copy'
        },
        {
            bookTitle: 'Calculus of Real and Complex Variables',
            bookUrl: 'https://d2orq2otfnmxdd.cloudfront.net/books/ComplexAnalysis/ComplexAnalysis.pdf',
            lastModifiedDate: ''
        },
        {
            bookTitle: 'Elementary Linear Algebra',
            bookUrl: 'https://d2orq2otfnmxdd.cloudfront.net/books/ElementaryLinearAlgebra/ElementaryLinearAlgebra.pdf',
            lastModifiedDate: '',
            bookCover: 'https://d2orq2otfnmxdd.cloudfront.net/cover/linear-algebra.jpg',
            purchaseLink: 'https://www.amazon.com/dp/B09FC8CLFK?ref_=pe_3052080_397514860',
            purchaseMessage: 'Purchase a physical copy'
        },
        {
            bookTitle: 'Engineering Math',
            bookUrl: 'https://d2orq2otfnmxdd.cloudfront.net/books/EngineeringMath/EngineeringMath.pdf',
            lastModifiedDate: ''
        },
        {
            bookTitle: 'Linear Algebra And Analysis',
            bookUrl: 'https://d2orq2otfnmxdd.cloudfront.net/books/LinearAlgebraAndAnalysis/LinearAlgebraAndAnalysis.pdf',
            lastModifiedDate: ''
        },
        {
            bookTitle: 'Linear Algebra, Theory And Applications',
            bookUrl: 'https://d2orq2otfnmxdd.cloudfront.net/books/Linearalgebra/Linearalgebra.pdf',
            lastModifiedDate: ''
        },
        {
            bookTitle: 'Topics In Analysis',
            bookUrl: 'https://d2orq2otfnmxdd.cloudfront.net/books/TopicsInAnalysis/TopicsInAnalysis.pdf',
            lastModifiedDate: '',
            warning: 'It is best to avoid the Topics in Analysis collection unless  you are interested in something which is only found there. Most things of interest are presented better in the other books.'
        },
        {
            bookTitle: 'Interrogation of Hiroshi Oshima',
            bookUrl: 'https://d2orq2otfnmxdd.cloudfront.net/books/OshimaInterrogation/OshimaInterogation+(1).pdf',
            lastModifiedDate: ''
        }
    ];

    setAgreedToCookies() {
        localStorage.setItem('cookies', '1');
    }

    getAgreedToCookies() {
        const agreed = localStorage.getItem('cookies');
        if (agreed !== null) {
            return true;
        } else {
            return false;
        }
    }

    getupdatedBooksInfo(): Observable<bookInfo[]> {
        return this.updatedBooksInfo;
    }

    setupdatedBooksInfo(nextBookInfo: bookInfo[]): void {
        this.booksToInfo = nextBookInfo;
        this.updatedBooksInfo.next(nextBookInfo)
    }

    getPageForBook(book: string) {
        const out = localStorage.getItem(book);
        if (out !== null) {
            return out;
        } else {
            return '1';
        }
    }

    setPageForBook(book: string, page: string) {
        localStorage.setItem(book, page);
    }

};
