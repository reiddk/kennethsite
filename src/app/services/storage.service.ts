
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
}

@Injectable()
export class StorageService {
    currentlyRequestingUrl = {};
    error401Called: boolean = false;
    updatedBooksInfo = new Subject<bookInfo[]>();
    booksToInfo: bookInfo[] = [
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
            lastModifiedDate: '',
            bookCover: 'https://kennethbooks.s3.us-east-2.amazonaws.com/cover/linear-algebra.jpg',
            purchaseLink: 'https://www.amazon.com/dp/B09FC8CLFK?ref_=pe_3052080_397514860',
            purchaseMessage: 'Purchase a physical copy'
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
