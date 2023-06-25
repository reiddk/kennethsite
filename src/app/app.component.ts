import { Component, OnInit, OnDestroy } from '@angular/core';
import { StorageService, bookInfo } from './services/storage.service';
import { HttpClientService } from './services/httpClient.service';
import { Subscription } from 'rxjs';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
declare let ga: Function;
declare let gtag: Function;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
    title = 'kennethsite';
    showDropDown: boolean = false;
    bookInfos: bookInfo[] = [];
    updateBookInfo: Subscription;
    routerSub: Subscription;
    currentBookTitle: string = '';
    newPageSub: Subscription;
    agreedToCookie: boolean = false;
    atHome: boolean = true;

    constructor(private storageService: StorageService,
        private httpService: HttpClientService,
        private route: ActivatedRoute,
        private router: Router) { }

    reroute(url: string, isBook: boolean = false) {
        this.showDropDown = false;
        if (isBook) {
            const getPage = this.storageService.getPageForBook(url);
            this.router.navigateByUrl(`/book/${url.replace(/\s/g, '-')}/${getPage}`);
        } else {
            this.router.navigateByUrl(url);
        }
    }

    setAgreedToCookies() {
        this.agreedToCookie = true;
        this.storageService.setAgreedToCookies();
    }

    ngOnInit() {
        this.newPageSub = this.router.events.subscribe(event => {
            if (event instanceof NavigationEnd) {
                gtag('set', 'page', event.urlAfterRedirects);
                gtag('send', 'pageview');
                if (event.url === "/") {
                    this.atHome = true;
                } else {
                    this.atHome = false;
                }
            }
        });
        this.bookInfos = this.storageService.booksToInfo;
        this.updateBookInfo = this.storageService.getupdatedBooksInfo().subscribe(out => {
            this.bookInfos = out;
        });

        this.routerSub = this.route.url.subscribe(out => {
            if (out.length === 3 && out[0] && out[0].path && out[0].path === 'book') {
                this.currentBookTitle = out[1].path.replace(/\-/g, ' ');
            } else {
                this.currentBookTitle = '';
            }
        });
        this.agreedToCookie = this.storageService.getAgreedToCookies();
    }

    ngOnDestroy() {
        if (this.updateBookInfo) {
            this.updateBookInfo.unsubscribe();
        }
        if (this.routerSub) {
            this.routerSub.unsubscribe();
        }
        if (this.newPageSub) {
            this.newPageSub.unsubscribe();
        }
    }
}
