import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { Subscription, interval } from 'rxjs';
import { Location, LocationStrategy, PathLocationStrategy } from '@angular/common';
import { StorageService, bookInfo } from '../services/storage.service';
import { ActivatedRoute } from '@angular/router';
import { PdfViewerComponent } from 'ng2-pdf-viewer';
declare let ga: Function;

@Component({
    selector: 'app-book-view',
    providers: [Location, { provide: LocationStrategy, useClass: PathLocationStrategy }],
    templateUrl: './book-view.component.html',
    styleUrls: ['./book-view.component.scss']
})
export class BookViewComponent implements OnInit, OnDestroy {

    @ViewChild(PdfViewerComponent, { static: true }) private pdfComponent: PdfViewerComponent;

    bookInfoSub: Subscription;
    routerSub: Subscription;
    regIntervalSub: Subscription;
    bookInfos: bookInfo[] = [];
    pdfSource: string = '';
    loadingBookSource: string = '';
    pdfName: string = '';
    pdfPage: number = 1;
    pdfUpdated: string = '';
    zoom: number = 1;
    stringToSearch: string = '';
    numberOfPages: number = 25;
    loadingBook: boolean = true;
    mobileShow: boolean = false;
    bookURLname: string = '';
    warning: string = '';
    loadingPercentage: string = '0%';
    warningShow: boolean = true;

    constructor(private storageService: StorageService, private route: ActivatedRoute, private location: Location) { }

    search() {
        const stringToSearch = this.stringToSearch;
        this.pdfComponent.pdfFindController.executeCommand('findagain', {
            caseSensitive: false, findPrevious: undefined, highlightAll: true, phraseSearch: true, query: stringToSearch
        });
    }

    nextPrevPage(num) {
        if (this.pdfPage + num > 0 && this.pdfPage + num <= this.numberOfPages) {
            this.pdfPage += num;
        }
    }

    onProgress($event) {
        if ($event && $event.loaded && $event.total) {
            this.loadingPercentage = `${Math.round($event.loaded/$event.total * 100)}%`;
        }
    }

    pdfInfo(event) {
        this.numberOfPages = event.numPages;
        this.loadingBook = false;
    }

    downloadedBook() {
        ga('send', 'event', 'book-download', this.pdfName);
    }

    getPdfInfoFromRoute() {
        if (this.bookInfos && this.bookInfos.length && this.pdfName && this.pdfPage) {
            const book: bookInfo = this.bookInfos.find(val => {
                return val.bookTitle === this.pdfName;
            });
            if (this.regIntervalSub) {
                this.regIntervalSub.unsubscribe();
            }
            if (!book) {
                return;
            }
            if (book.bookUrl) {
                this.pdfSource = book.bookUrl;
            } else {
                return;
            }
            if (book.warning) {
                this.warning = book.warning;
                setTimeout(() => {
                    this.warningShow = false;
                }, 10000);
            }
            if (book.lastModifiedDate) {
                this.pdfUpdated = book.lastModifiedDate;
            }
            this.regIntervalSub = interval(500).subscribe(() => {
                if (this.storageService.getPageForBook(book.bookTitle) !== this.pdfPage.toString()) {
                  ga('set', 'page', `/book/${book.bookTitle.replace(/\s/g, '-')}/${this.pdfPage.toString()}`);
                  ga('send', 'pageview');
                }
                this.storageService.setPageForBook(book.bookTitle, this.pdfPage.toString());
                this.location.go(`/book/${book.bookTitle.replace(/\s/g, '-')}/${this.pdfPage.toString()}`);
            });
        }
    }

    ngOnInit() {
        this.bookInfos = this.storageService.booksToInfo;
        this.bookInfoSub = this.storageService.getupdatedBooksInfo().subscribe(out => {
            this.bookInfos = out;
            this.getPdfInfoFromRoute();
        });
        this.routerSub = this.route.url.subscribe(out => {
            if (out.length === 3) {
                this.pdfName = out[1].path.replace(/\-/g, ' ');
                this.bookURLname = out[1].path;
                this.pdfPage = Number(out[2].path);
                this.loadingBookSource = `/assets/${out[1].path}${this.pdfPage-1}.pdf`;
                ga('set', 'page', `/book/${this.pdfName}/${this.pdfPage}`);
                ga('send', 'pageview');
                this.storageService.setPageForBook(this.pdfName, this.pdfPage.toString());
                this.getPdfInfoFromRoute();
            }
        });
  }

    ngOnDestroy() {
        if (this.bookInfoSub) {
            this.bookInfoSub.unsubscribe();
        }
        if (this.routerSub) {
            this.routerSub.unsubscribe();
        }
        if (this.regIntervalSub) {
            this.regIntervalSub.unsubscribe();
        }

    }

}
