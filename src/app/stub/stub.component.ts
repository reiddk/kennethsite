import { Component, OnInit, Input } from '@angular/core';
import { StorageService, bookInfo } from '../services/storage.service';
import { Router } from '@angular/router';
declare let ga: Function;

@Component({
  selector: 'app-stub',
  templateUrl: './stub.component.html',
  styleUrls: ['./stub.component.scss']
})
export class StubComponent implements OnInit {

    @Input() bookIndex: number = -1;
    @Input() BookInfo: bookInfo = null;
    bookParsed: string = '';
    pageNum: number = 1;

    constructor(private storageService: StorageService,
        private router: Router) { }

    reroute(title: string) {
        const getPage = this.storageService.getPageForBook(title);
        this.router.navigateByUrl(`/book/${title.replace(/\s/g, '-')}/${getPage}`);
    }

    downloadedBook() {
        console.log(this.BookInfo.bookTitle);
        ga('send', 'event', 'book-download', this.BookInfo.bookTitle);
    }

    ngOnInit() {
        if (this.BookInfo && this.BookInfo.bookTitle) {
            const tempPageNum = this.storageService.getPageForBook(this.BookInfo.bookTitle);
            this.bookParsed = this.BookInfo.bookTitle.replace(/\s/g, '-');
            if (tempPageNum) {
                this.pageNum = Number(tempPageNum);
            }
        }
    }

}
