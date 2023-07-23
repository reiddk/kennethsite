(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"\" >\n  <nav class=\"navbar navbar-expand-md fixed-top navbar-dark bg-dark\">\n    <a class=\"navbar-brand clickable\" (click)=\"reroute('/')\"><span *ngIf=\"atHome\">Kenneth Kuttler</span><i *ngIf=\"!atHome\" class=\"arrow left white\"></i></a><a href=\"/\" style=\"display:none;\"></a>\n    <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" (click)=\"showDropDown = !showDropDown\" data-target=\"#navbarSupportedContent\" aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\"><span class=\"navbar-toggler-icon\"></span></button>\n    <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\" [ngClass]=\"{'show':showDropDown}\">\n      <ul class=\"navbar-nav mr-auto\">\n        <li class=\"nav-item clickable\"><a class=\"nav-link\" (click)=\"reroute('/')\">Home</a></li>\n        <li class=\"nav-item dropdown\">\n          <span class=\"nav-link clickable\" id=\"navbarDropdown\" (click)=\"showDropDown = !showDropDown\" role=\"button\">Books <i class=\"fa fa-sort-desc\" aria-hidden=\"true\"></i></span>\n          <div class=\"dropdown-menu d-none d-md-block\" [ngClass]=\"{'showDropDown':showDropDown}\" aria-labelledby=\"navbarDropdown\">\n            <a class=\"dropdown-item clickable\" *ngFor=\"let book of bookInfos\" (click)=\"reroute(book.bookTitle, true)\">{{book.bookTitle}}</a>\n          </div>\n          <div class=\"d-md-none dropdown-menu showDropDown\" aria-labelledby=\"navbarDropdown\">\n            <a class=\"dropdown-item clickable\" *ngFor=\"let book of bookInfos\" (click)=\"reroute(book.bookTitle, true)\">{{book.bookTitle}}</a>\n          </div>\n        </li>\n      </ul>\n    </div>\n  </nav>\n  <ngx-loading-bar></ngx-loading-bar>\n  <div class=\"router-wrapper\">\n    <router-outlet></router-outlet>\n  </div>\n\n  <notifier-container></notifier-container>\n  <div class=\"cookie-agreement\" *ngIf=\"!agreedToCookie\">\n    <div class=\"\">This website uses cookies to improve the user experience</div>\n    <div class=\"\">\n      <button type=\"button\" class=\"btn btn-primary\" (click)=\"setAgreedToCookies()\">Agree</button>\n    </div>\n  </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/book-view/book-view.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/book-view/book-view.component.html ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\" >\n  <div class=\"navigationbar-wrapper\">\n    <div class=\"cell-one\">\n      <div class=\"navbar-brand\">&nbsp;&nbsp;{{pdfName}}</div>\n      <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\" aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\" (click)=\"mobileShow=!mobileShow\">\n        <span class=\"navbar-toggler-icon\"></span>\n      </button></div>\n\n    <div class=\"cell-two\" id=\"navbarSupportedContent\" [ngClass]=\"{'show':mobileShow}\">\n      <ul class=\"navigation-wrapper\">\n        <li class=\"navigation-item num-pages\" *ngIf=\"numberOfPages\">\n          {{pdfPage}}/{{numberOfPages}}\n        </li>\n        <li class=\"navigation-item\" style=\"flex:2;\">\n          <a class=\"download-pdf\" target=\"_blank\" href=\"{{pdfSource}}\" (click)=\"downloadedBook()\" download>Download <span class=\"pdf-word\">PDF</span></a>\n        </li>\n        <li class=\"navigation-item search-wrapper\">\n          <div style=\"flex:3;\"><input style=\"width:100%;\" [(ngModel)]=\"stringToSearch\" (keyup.enter)=\"search()\" class=\"form-control mr-sm-2 search-input-elem\" type=\"search\" placeholder=\"Search\" aria-label=\"Search\"></div>\n          <div style=\"flex:1;\"><button  style=\"width:100%;\" class=\"btn btn-outline-success my-2 my-sm-0 search-button-elem\" type=\"submit\" (click)=\"search()\">Search</button></div>\n        </li>\n        <li class=\"navigation-item clickable left-arrow\" [ngStyle]=\"{opacity: loadingBook?0:1}\" (click)=\"nextPrevPage(-1)\"><i class=\"arrow left black\"></i><span class=\"prev-span\">Prev</span><a href=\"/{{bookURLname}}/{{pdfPage-1}}\"></a></li>\n        <li class=\"navigation-item clickable right-arrow\"[ngStyle]=\"{opacity: loadingBook?0:1}\" (click)=\"nextPrevPage(1)\"><span  class=\"next-span\">Next</span><i class=\"arrow right black\"></i><a href=\"/{{bookURLname}}/{{pdfPage+1}}\"></a></li>\n        <li class=\"navigation-item\" style=\"position:relative;width:60px;\">\n          <div class=\"loading-progress-container\" *ngIf=\"loadingBook\">\n            <div class=\"loading-progress\" [ngStyle]=\"{width: loadingPercentage}\"></div>\n          </div>\n          <div class=\"loading-percent\" *ngIf=\"loadingBook\">{{loadingPercentage}}</div>\n          <div *ngIf=\"!loadingBook\" ><button class=\"btn copy-link\" title=\"Click here to copy the link to this page\" [ngStyle]=\"{color: linkCopiedText==='Copy Link'?'black':'green'}\" (click)=\"copyLink()\">{{linkCopiedText}}</button></div>\n        </li>\n      </ul>\n    </div>\n  </div>\n  <div ng-if=\"warning\" class=\"warning\" [ngClass]=\"{'warning-show': warningShow}\">{{warning}}</div>\n  <div *ngIf=\"loadingBook\"> \n    <pdf-viewer [zoom]=\"zoom\" [original-size]=\"false\" [autoresize]=\"true\" [show-all]=\"true\" [src]=\"loadingBookSource\" [render-text]=\"true\" [stick-to-page]=\"true\"></pdf-viewer>\n  </div>\n  <div class=\"\">\n    <pdf-viewer (on-progress)=\"onProgress($event)\" [original-size]=\"false\" (after-load-complete)=\"pdfInfo($event)\" [zoom]=\"zoom\" [original-size]=\"false\" [autoresize]=\"true\" [(page)]=\"pdfPage\" [show-all]=\"true\" [src]=\"pdfSource\" [render-text]=\"true\" [stick-to-page]=\"true\" [external-link-target]=\"'blank'\"></pdf-viewer>\n  </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\" style=\"margin-top:100px;\">\n  <div class=\"row site-intro\">\n    <h4>This is the personal website of Dr. Kenneth Kuttler. You can download these books as a PDF, or read them online without downloading.</h4>\n    <h5>If you have questions send me an email at <a href=\"matilto:klkuttler@gmail.com\">klkuttler@gmail.com</a></h5>\n  </div>\n  <div class=\"container\" *ngIf=\"bookInfos && bookInfos.length\">\n    <div class=\"row\">\n      <div class=\"col-sm-4\" *ngFor=\"let stub of bookInfos\" style=\"border-bottom: solid grey 1px;\">\n        <app-stub [BookInfo]=\"stub\"></app-stub>\n      </div>\n    </div>\n  </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/stub/stub.component.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/stub/stub.component.html ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"row\" style=\"margin:5px 0px;\">\n  <div class=\"col-8 offset-2\">\n    <div class=\"book-stub draw-border noselect\" style=\"padding:5px 10px;\" (click)=\"reroute(BookInfo.bookTitle)\">\n      <div class=\"book-cover\" *ngIf=\"BookInfo.bookCover\">\n        <img src=\"{{BookInfo.bookCover}}\"/>\n      </div>\n      <div class=\"book-title\">\n        <a href=\"/{{bookParsed}}/1\" disabled></a>{{BookInfo.bookTitle}}\n      </div>\n      \n    \n    </div>\n    <div class=\"currently-at\" *ngIf=\"pageNum !== 1\">Currently on page {{pageNum}}</div>\n  </div>\n  <div class=\"col-12 book-options\">\n    <div class=\"row\">\n      <div [ngClass]=\"{'col-12': !BookInfo.purchaseLink, 'col-5': BookInfo.purchaseLink}\" style=\"text-align:center;\"><a target=\"_blank\" href=\"{{BookInfo.bookUrl}}\" (click)=\"downloadedBook()\" download>Download PDF</a></div>\n      <div class=\"col-2\" *ngIf=\"BookInfo.purchaseLink\">OR</div>\n      <div class=\"col-5\" style=\"text-align:left;\" *ngIf=\"BookInfo.purchaseLink\"><a href=\"{{BookInfo.purchaseLink}}\">{{BookInfo.purchaseMessage}}</a></div>  \n    </div>\n  </div>\n</div>\n");

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _book_view_book_view_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./book-view/book-view.component */ "./src/app/book-view/book-view.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");





const routes = [
    { path: '', component: _home_home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"] },
    { path: 'book/:book/:page', component: _book_view_book_view_component__WEBPACK_IMPORTED_MODULE_3__["BookViewComponent"] }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".cookie-agreement {\n  position: fixed;\n  bottom: 0px;\n  right: 0px;\n  left: 0px;\n  z-index: 100;\n  padding: 5px;\n  text-align: center;\n  background-color: #eaeaea;\n  border: solid grey 1px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9yZWlka3V0dGxlci9yZXBvcy9rZW5uZXRoc2l0ZS9zcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZUFBQTtFQUNBLFdBQUE7RUFDQSxVQUFBO0VBQ0EsU0FBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtFQUNBLHNCQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29va2llLWFncmVlbWVudCB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgYm90dG9tOiAwcHg7XG4gIHJpZ2h0OiAwcHg7XG4gIGxlZnQ6IDBweDtcbiAgei1pbmRleDogMTAwO1xuICBwYWRkaW5nOiA1cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VhZWFlYTtcbiAgYm9yZGVyOiBzb2xpZCBncmV5IDFweDtcbn1cbiIsIi5jb29raWUtYWdyZWVtZW50IHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICBib3R0b206IDBweDtcbiAgcmlnaHQ6IDBweDtcbiAgbGVmdDogMHB4O1xuICB6LWluZGV4OiAxMDA7XG4gIHBhZGRpbmc6IDVweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWFlYWVhO1xuICBib3JkZXI6IHNvbGlkIGdyZXkgMXB4O1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_storage_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services/storage.service */ "./src/app/services/storage.service.ts");
/* harmony import */ var _services_httpClient_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./services/httpClient.service */ "./src/app/services/httpClient.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");





let AppComponent = class AppComponent {
    constructor(storageService, httpService, route, router) {
        this.storageService = storageService;
        this.httpService = httpService;
        this.route = route;
        this.router = router;
        this.title = 'kennethsite';
        this.showDropDown = false;
        this.bookInfos = [];
        this.currentBookTitle = '';
        this.agreedToCookie = false;
        this.atHome = true;
    }
    reroute(url, isBook = false) {
        this.showDropDown = false;
        if (isBook) {
            const getPage = this.storageService.getPageForBook(url);
            this.router.navigateByUrl(`/book/${url.replace(/\s/g, '-')}/${getPage}`);
        }
        else {
            this.router.navigateByUrl(url);
        }
    }
    setAgreedToCookies() {
        this.agreedToCookie = true;
        this.storageService.setAgreedToCookies();
    }
    ngOnInit() {
        this.newPageSub = this.router.events.subscribe(event => {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_4__["NavigationEnd"]) {
                gtag('set', 'page', event.urlAfterRedirects);
                gtag('send', 'pageview');
                if (event.url === "/") {
                    this.atHome = true;
                }
                else {
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
            }
            else {
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
};
AppComponent.ctorParameters = () => [
    { type: _services_storage_service__WEBPACK_IMPORTED_MODULE_2__["StorageService"] },
    { type: _services_httpClient_service__WEBPACK_IMPORTED_MODULE_3__["HttpClientService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
];
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")).default]
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_httpClient_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./services/httpClient.service */ "./src/app/services/httpClient.service.ts");
/* harmony import */ var _services_notification_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./services/notification.service */ "./src/app/services/notification.service.ts");
/* harmony import */ var _services_storage_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./services/storage.service */ "./src/app/services/storage.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var angular_notifier__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! angular-notifier */ "./node_modules/angular-notifier/fesm2015/angular-notifier.js");
/* harmony import */ var _ngx_loading_bar_http_client__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngx-loading-bar/http-client */ "./node_modules/@ngx-loading-bar/http-client/fesm2015/ngx-loading-bar-http-client.js");
/* harmony import */ var ng2_pdf_viewer__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ng2-pdf-viewer */ "./node_modules/ng2-pdf-viewer/fesm2015/ng2-pdf-viewer.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _stub_stub_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./stub/stub.component */ "./src/app/stub/stub.component.ts");
/* harmony import */ var _book_view_book_view_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./book-view/book-view.component */ "./src/app/book-view/book-view.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
















const customNotifierOptions = {
    position: {
        horizontal: {
            position: 'left',
            distance: 12
        },
        vertical: {
            position: 'bottom',
            distance: 12,
            gap: 10
        }
    },
    theme: 'material',
    behaviour: {
        autoHide: 10000,
        onClick: 'hide',
        onMouseover: 'pauseAutoHide',
        showDismissButton: true,
        stacking: 4
    },
    animations: {
        enabled: true,
        show: {
            preset: 'slide',
            speed: 300,
            easing: 'ease'
        },
        hide: {
            preset: 'fade',
            speed: 300,
            easing: 'ease',
            offset: 50
        },
        shift: {
            speed: 300,
            easing: 'ease'
        },
        overlap: 150
    }
};
let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_12__["AppComponent"],
            _stub_stub_component__WEBPACK_IMPORTED_MODULE_13__["StubComponent"],
            _book_view_book_view_component__WEBPACK_IMPORTED_MODULE_14__["BookViewComponent"],
            _home_home_component__WEBPACK_IMPORTED_MODULE_15__["HomeComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_11__["AppRoutingModule"],
            angular_notifier__WEBPACK_IMPORTED_MODULE_7__["NotifierModule"].withConfig(customNotifierOptions),
            _ngx_loading_bar_http_client__WEBPACK_IMPORTED_MODULE_8__["LoadingBarHttpClientModule"],
            ng2_pdf_viewer__WEBPACK_IMPORTED_MODULE_9__["PdfViewerModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"]
        ],
        providers: [_services_storage_service__WEBPACK_IMPORTED_MODULE_5__["StorageService"], _services_notification_service__WEBPACK_IMPORTED_MODULE_4__["NotificationService"], _services_httpClient_service__WEBPACK_IMPORTED_MODULE_3__["HttpClientService"]],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_12__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/book-view/book-view.component.scss":
/*!****************************************************!*\
  !*** ./src/app/book-view/book-view.component.scss ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("pdf-viewer {\n  display: block;\n  height: 100vh;\n}\n\n.lds-hourglass {\n  display: inline-block;\n  position: relative;\n  width: 80px;\n  height: 80px;\n}\n\n.lds-hourglass:after {\n  content: \" \";\n  display: block;\n  border-radius: 50%;\n  width: 0;\n  height: 0;\n  margin: 8px;\n  box-sizing: border-box;\n  border: 32px solid #000;\n  border-color: #000 transparent #000 transparent;\n  -webkit-animation: lds-hourglass 1.2s infinite;\n          animation: lds-hourglass 1.2s infinite;\n}\n\n@-webkit-keyframes lds-hourglass {\n  0% {\n    transform: rotate(0);\n    -webkit-animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);\n            animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);\n  }\n  50% {\n    transform: rotate(900deg);\n    -webkit-animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);\n            animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);\n  }\n  100% {\n    transform: rotate(1800deg);\n  }\n}\n\n@keyframes lds-hourglass {\n  0% {\n    transform: rotate(0);\n    -webkit-animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);\n            animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);\n  }\n  50% {\n    transform: rotate(900deg);\n    -webkit-animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);\n            animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);\n  }\n  100% {\n    transform: rotate(1800deg);\n  }\n}\n\n.warning {\n  color: red;\n  text-align: center;\n  position: absolute;\n  z-index: 10;\n  max-width: 500px;\n  width: 50%;\n  left: 25%;\n  font-size: 10px;\n  background: #f8f9fa;\n  border-radius: 10px;\n  padding-top: 10px;\n  margin-top: -9px;\n  transition: max-height 2s cubic-bezier(0, 1, 0, 1);\n  max-height: 0px;\n  overflow-y: hidden;\n}\n\n.warning-show {\n  max-height: 150px;\n}\n\n.loading-progress-container {\n  width: 60px;\n  height: 6px;\n  border: 1px black solid;\n  position: absolute;\n  top: 0px;\n}\n\n.loading-progress {\n  width: 0%;\n  background-color: black;\n  height: 5px;\n}\n\n.loading-percent {\n  font-weight: bold;\n  text-align: center;\n  width: 60px;\n  padding: 5px;\n}\n\n.navigationbar-wrapper {\n  background-color: #f8f9fa;\n  display: flex;\n}\n\n.cell-one {\n  flex: 1;\n  height: 60px;\n}\n\n@media (max-width: 768px) {\n  .cell-one {\n    height: 45px;\n  }\n}\n\n.cell-two {\n  flex: 3;\n}\n\n@media (max-width: 768px) {\n  .cell-two {\n    height: 45px;\n  }\n}\n\n.navigation-wrapper {\n  list-style: none;\n  display: flex;\n  margin: 0px;\n  align-items: center;\n  justify-content: center;\n}\n\n@media (max-width: 768px) {\n  .navigation-wrapper {\n    height: 45px;\n  }\n}\n\n@media (max-width: 575px) {\n  .navigation-wrapper {\n    padding-left: 0px;\n  }\n}\n\n.navigation-item {\n  flex: 1;\n  text-align: center;\n  padding: 0px 2px;\n}\n\n.search-wrapper {\n  flex: 3;\n  display: flex;\n}\n\n@media (max-width: 575px) {\n  .search-wrapper {\n    flex: 6;\n  }\n}\n\n@media (max-width: 580px) {\n  .left-arrow {\n    display: none;\n  }\n}\n\n@media (max-width: 580px) {\n  .right-arrow {\n    display: none;\n  }\n}\n\n@media (max-width: 580px) {\n  .pdf-word {\n    display: none;\n  }\n}\n\n.prev-span {\n  font-size: 12px;\n  font-weight: bold;\n}\n\n@media (max-width: 630px) {\n  .prev-span {\n    font-size: 10px;\n  }\n}\n\n.next-span {\n  font-size: 12px;\n  font-weight: bold;\n}\n\n@media (max-width: 630px) {\n  .next-span {\n    font-size: 10px;\n  }\n}\n\n.navigation-container {\n  margin-top: 53px;\n}\n\n@media (max-width: 768px) {\n  .navigation-container {\n    font-size: 12px;\n  }\n}\n\n@media (max-width: 630px) {\n  .navigation-container {\n    font-size: 10px;\n  }\n}\n\n.container {\n  margin-top: 57px;\n}\n\n@media (min-width: 768px) {\n  .container {\n    max-width: 925px;\n    padding: 0px;\n  }\n}\n\n@media (max-width: 768px) {\n  .container {\n    max-width: 700px;\n    padding: 0px;\n  }\n}\n\n@media (max-width: 715px) {\n  .container {\n    margin-top: 40px;\n    position: fixed;\n  }\n}\n\n@media (max-width: 768px) {\n  .navbar-brand {\n    font-size: 12px;\n  }\n}\n\n@media (max-width: 630px) {\n  .navbar-brand {\n    font-size: 10px;\n  }\n}\n\n@media (max-width: 768px) {\n  .search-button-elem {\n    padding: 2px;\n    font-size: 12px;\n  }\n}\n\n@media (max-width: 630px) {\n  .search-button-elem {\n    font-size: 10px;\n  }\n}\n\n@media (max-width: 768px) {\n  .search-input-elem {\n    padding: 2px;\n    font-size: 12px;\n    height: 26px;\n  }\n}\n\n@media (max-width: 630px) {\n  .search-input-elem {\n    font-size: 10px;\n  }\n}\n\n@media (max-width: 575px) {\n  .search-input-elem {\n    margin-top: 5px;\n  }\n}\n\n@media (max-width: 768px) {\n  .download-pdf {\n    font-size: 12px;\n  }\n}\n\n@media (max-width: 630px) {\n  .download-pdf {\n    font-size: 10px;\n  }\n}\n\n@media (max-width: 768px) {\n  .num-pages {\n    font-size: 12px;\n  }\n}\n\n@media (max-width: 630px) {\n  .num-pages {\n    font-size: 10px;\n  }\n}\n\n@media (max-width: 445px) {\n  .num-pages {\n    display: none;\n  }\n}\n\n.navbar-brand {\n  white-space: initial;\n  font-size: 15px;\n  line-height: 1;\n}\n\n@media (max-width: 768px) {\n  .navbar-brand {\n    font-size: 12px;\n  }\n}\n\n.copy-link {\n  line-height: 1;\n  font-size: 12px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9yZWlka3V0dGxlci9yZXBvcy9rZW5uZXRoc2l0ZS9zcmMvYXBwL2Jvb2stdmlldy9ib29rLXZpZXcuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2Jvb2stdmlldy9ib29rLXZpZXcuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxjQUFBO0VBQ0EsYUFBQTtBQ0NGOztBRENBO0VBQ0UscUJBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FDRUY7O0FEQ0E7RUFDRSxZQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtFQUNBLCtDQUFBO0VBQ0EsOENBQUE7VUFBQSxzQ0FBQTtBQ0VGOztBRENBO0VBQ0U7SUFDRSxvQkFBQTtJQUNBLHlFQUFBO1lBQUEsaUVBQUE7RUNFRjtFRENBO0lBQ0UseUJBQUE7SUFDQSxzRUFBQTtZQUFBLDhEQUFBO0VDQ0Y7RURFQTtJQUNFLDBCQUFBO0VDQUY7QUFDRjs7QURiQTtFQUNFO0lBQ0Usb0JBQUE7SUFDQSx5RUFBQTtZQUFBLGlFQUFBO0VDRUY7RURDQTtJQUNFLHlCQUFBO0lBQ0Esc0VBQUE7WUFBQSw4REFBQTtFQ0NGO0VERUE7SUFDRSwwQkFBQTtFQ0FGO0FBQ0Y7O0FERUE7RUFDRSxVQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLFVBQUE7RUFDQSxTQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0RBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7QUNBRjs7QURHQTtFQUNFLGlCQUFBO0FDQUY7O0FERUE7RUFDRSxXQUFBO0VBQ0EsV0FBQTtFQUNBLHVCQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0FDQ0Y7O0FEQ0E7RUFDRSxTQUFBO0VBQ0EsdUJBQUE7RUFDQSxXQUFBO0FDRUY7O0FEQUE7RUFDRSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUNHRjs7QURBQTtFQUNFLHlCQUFBO0VBQ0EsYUFBQTtBQ0dGOztBRERBO0VBQ0UsT0FBQTtFQUNBLFlBQUE7QUNJRjs7QURIRTtFQUhGO0lBSUksWUFBQTtFQ01GO0FBQ0Y7O0FESkE7RUFDRSxPQUFBO0FDT0Y7O0FETkU7RUFGRjtJQUdJLFlBQUE7RUNTRjtBQUNGOztBRFBBO0VBQ0UsZ0JBQUE7RUFFQSxhQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7QUNVRjs7QURURTtFQVBGO0lBUUksWUFBQTtFQ1lGO0FBQ0Y7O0FEWEU7RUFWRjtJQVdJLGlCQUFBO0VDY0Y7QUFDRjs7QURaQTtFQUNFLE9BQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0FDZUY7O0FEYkE7RUFDRSxPQUFBO0VBQ0EsYUFBQTtBQ2dCRjs7QURmRTtFQUhGO0lBSUksT0FBQTtFQ2tCRjtBQUNGOztBRGZFO0VBREY7SUFFSSxhQUFBO0VDbUJGO0FBQ0Y7O0FEaEJFO0VBREY7SUFFSSxhQUFBO0VDb0JGO0FBQ0Y7O0FEakJFO0VBREY7SUFFSSxhQUFBO0VDcUJGO0FBQ0Y7O0FEbkJBO0VBQ0UsZUFBQTtFQUNBLGlCQUFBO0FDc0JGOztBRHJCRTtFQUhGO0lBSUksZUFBQTtFQ3dCRjtBQUNGOztBRHRCQTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtBQ3lCRjs7QUR4QkU7RUFIRjtJQUlJLGVBQUE7RUMyQkY7QUFDRjs7QUR6QkE7RUFDRSxnQkFBQTtBQzRCRjs7QUQzQkU7RUFGRjtJQUdJLGVBQUE7RUM4QkY7QUFDRjs7QUQ3QkU7RUFMRjtJQU1JLGVBQUE7RUNnQ0Y7QUFDRjs7QUQ5QkE7RUFDRSxnQkFBQTtBQ2lDRjs7QURoQ0U7RUFGRjtJQUdJLGdCQUFBO0lBQ0EsWUFBQTtFQ21DRjtBQUNGOztBRGxDRTtFQU5GO0lBT0ksZ0JBQUE7SUFDQSxZQUFBO0VDcUNGO0FBQ0Y7O0FEcENFO0VBVkY7SUFXSSxnQkFBQTtJQUNBLGVBQUE7RUN1Q0Y7QUFDRjs7QURuQ0U7RUFERjtJQUVJLGVBQUE7RUN1Q0Y7QUFDRjs7QUR0Q0U7RUFKRjtJQUtJLGVBQUE7RUN5Q0Y7QUFDRjs7QUR0Q0U7RUFERjtJQUVJLFlBQUE7SUFDQSxlQUFBO0VDMENGO0FBQ0Y7O0FEekNFO0VBTEY7SUFNSSxlQUFBO0VDNENGO0FBQ0Y7O0FEekNFO0VBREY7SUFFSSxZQUFBO0lBQ0EsZUFBQTtJQUNBLFlBQUE7RUM2Q0Y7QUFDRjs7QUQ1Q0U7RUFORjtJQU9JLGVBQUE7RUMrQ0Y7QUFDRjs7QUQ5Q0U7RUFURjtJQVVJLGVBQUE7RUNpREY7QUFDRjs7QUQ5Q0U7RUFERjtJQUVJLGVBQUE7RUNrREY7QUFDRjs7QURqREU7RUFKRjtJQUtJLGVBQUE7RUNvREY7QUFDRjs7QURqREU7RUFERjtJQUVJLGVBQUE7RUNxREY7QUFDRjs7QURwREU7RUFKRjtJQUtJLGVBQUE7RUN1REY7QUFDRjs7QUR0REU7RUFQRjtJQVFJLGFBQUE7RUN5REY7QUFDRjs7QUR0REE7RUFDRSxvQkFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0FDeURGOztBRHhERTtFQUpGO0lBTU0sZUFBQTtFQzBESjtBQUNGOztBRHZEQTtFQUNFLGNBQUE7RUFDQSxlQUFBO0FDMERGIiwiZmlsZSI6InNyYy9hcHAvYm9vay12aWV3L2Jvb2stdmlldy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbInBkZi12aWV3ZXIge1xuICBkaXNwbGF5OiBibG9jaztcbiAgaGVpZ2h0OiAxMDB2aDtcbn1cbi5sZHMtaG91cmdsYXNzIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHdpZHRoOiA4MHB4O1xuICBoZWlnaHQ6IDgwcHg7XG59XG5cbi5sZHMtaG91cmdsYXNzOmFmdGVyIHtcbiAgY29udGVudDogXCIgXCI7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIHdpZHRoOiAwO1xuICBoZWlnaHQ6IDA7XG4gIG1hcmdpbjogOHB4O1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBib3JkZXI6IDMycHggc29saWQgIzAwMDtcbiAgYm9yZGVyLWNvbG9yOiAjMDAwIHRyYW5zcGFyZW50ICMwMDAgdHJhbnNwYXJlbnQ7XG4gIGFuaW1hdGlvbjogbGRzLWhvdXJnbGFzcyAxLjJzIGluZmluaXRlO1xufVxuXG5Aa2V5ZnJhbWVzIGxkcy1ob3VyZ2xhc3Mge1xuICAwJSB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMCk7XG4gICAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuNTUsIDAuMDU1LCAwLjY3NSwgMC4xOSk7XG4gIH1cblxuICA1MCUge1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDkwMGRlZyk7XG4gICAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuMjE1LCAwLjYxLCAwLjM1NSwgMSk7XG4gIH1cblxuICAxMDAlIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgxODAwZGVnKTtcbiAgfVxufVxuLndhcm5pbmcge1xuICBjb2xvcjogcmVkO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgei1pbmRleDogMTA7XG4gIG1heC13aWR0aDogNTAwcHg7XG4gIHdpZHRoOiA1MCU7XG4gIGxlZnQ6IDI1JTtcbiAgZm9udC1zaXplOiAxMHB4O1xuICBiYWNrZ3JvdW5kOiAjZjhmOWZhO1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBwYWRkaW5nLXRvcDogMTBweDtcbiAgbWFyZ2luLXRvcDogLTlweDtcbiAgdHJhbnNpdGlvbjogbWF4LWhlaWdodCAycyBjdWJpYy1iZXppZXIoMCwgMSwgMCwgMSk7XG4gIG1heC1oZWlnaHQ6IDBweDtcbiAgb3ZlcmZsb3cteTogaGlkZGVuO1xufVxuXG4ud2FybmluZy1zaG93IHtcbiAgbWF4LWhlaWdodDogMTUwcHg7XG59XG4ubG9hZGluZy1wcm9ncmVzcy1jb250YWluZXIge1xuICB3aWR0aDo2MHB4O1xuICBoZWlnaHQ6NnB4O1xuICBib3JkZXI6IDFweCBibGFjayBzb2xpZDtcbiAgcG9zaXRpb246YWJzb2x1dGU7XG4gIHRvcDogMHB4O1xufVxuLmxvYWRpbmctcHJvZ3Jlc3Mge1xuICB3aWR0aDogMCU7XG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xuICBoZWlnaHQ6IDVweDtcbn1cbi5sb2FkaW5nLXBlcmNlbnQge1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB3aWR0aDogNjBweDtcbiAgcGFkZGluZzogNXB4O1xufVxuXG4ubmF2aWdhdGlvbmJhci13cmFwcGVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjojZjhmOWZhO1xuICBkaXNwbGF5OmZsZXg7XG59XG4uY2VsbC1vbmUge1xuICBmbGV4OiAxO1xuICBoZWlnaHQ6IDYwcHg7XG4gIEBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xuICAgIGhlaWdodDo0NXB4O1xuICB9XG59XG4uY2VsbC10d28ge1xuICBmbGV4OiAzO1xuICBAbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgICBoZWlnaHQ6NDVweDtcbiAgfVxufVxuLm5hdmlnYXRpb24td3JhcHBlciB7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG4gIGRpc3BsYXk6IC13ZWJraXQtYm94O1xuICBkaXNwbGF5OiBmbGV4O1xuICBtYXJnaW46IDBweDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIEBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xuICAgIGhlaWdodDo0NXB4O1xuICB9XG4gIEBtZWRpYSAobWF4LXdpZHRoOiA1NzVweCkge1xuICAgIHBhZGRpbmctbGVmdDowcHg7XG4gIH1cbn1cbi5uYXZpZ2F0aW9uLWl0ZW0ge1xuICBmbGV4OiAxO1xuICB0ZXh0LWFsaWduOmNlbnRlcjtcbiAgcGFkZGluZzowcHggMnB4O1xufVxuLnNlYXJjaC13cmFwcGVyIHtcbiAgZmxleDozO1xuICBkaXNwbGF5OmZsZXg7XG4gIEBtZWRpYSAobWF4LXdpZHRoOiA1NzVweCkge1xuICAgIGZsZXg6NjtcbiAgfVxufVxuLmxlZnQtYXJyb3cge1xuICBAbWVkaWEgKG1heC13aWR0aDogNTgwcHgpIHtcbiAgICBkaXNwbGF5Om5vbmU7XG4gIH0gXG59XG4ucmlnaHQtYXJyb3cge1xuICBAbWVkaWEgKG1heC13aWR0aDogNTgwcHgpIHtcbiAgICBkaXNwbGF5Om5vbmU7XG4gIH1cbn1cbi5wZGYtd29yZCB7XG4gIEBtZWRpYSAobWF4LXdpZHRoOiA1ODBweCkge1xuICAgIGRpc3BsYXk6bm9uZTtcbiAgfVxufVxuLnByZXYtc3BhbiB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIEBtZWRpYSAobWF4LXdpZHRoOiA2MzBweCkge1xuICAgIGZvbnQtc2l6ZToxMHB4O1xuICB9XG59XG4ubmV4dC1zcGFuIHtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgQG1lZGlhIChtYXgtd2lkdGg6IDYzMHB4KSB7XG4gICAgZm9udC1zaXplOjEwcHg7XG4gIH1cbn1cbi5uYXZpZ2F0aW9uLWNvbnRhaW5lciB7XG4gIG1hcmdpbi10b3A6NTNweDtcbiAgQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gICAgZm9udC1zaXplOjEycHg7XG4gIH1cbiAgQG1lZGlhIChtYXgtd2lkdGg6IDYzMHB4KSB7XG4gICAgZm9udC1zaXplOjEwcHg7XG4gIH0gXG59XG4uY29udGFpbmVyIHtcbiAgbWFyZ2luLXRvcDo1N3B4O1xuICBAbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcbiAgICBtYXgtd2lkdGg6OTI1cHg7XG4gICAgcGFkZGluZzowcHg7XG4gIH1cbiAgQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gICAgbWF4LXdpZHRoOjcwMHB4O1xuICAgIHBhZGRpbmc6MHB4O1xuICB9XG4gIEBtZWRpYSAobWF4LXdpZHRoOiA3MTVweCkge1xuICAgIG1hcmdpbi10b3A6IDQwcHg7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICB9XG4gIFxufVxuLm5hdmJhci1icmFuZCB7XG4gIEBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xuICAgIGZvbnQtc2l6ZToxMnB4O1xuICB9XG4gIEBtZWRpYSAobWF4LXdpZHRoOiA2MzBweCkge1xuICAgIGZvbnQtc2l6ZToxMHB4O1xuICB9IFxufVxuLnNlYXJjaC1idXR0b24tZWxlbSB7XG4gIEBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xuICAgIHBhZGRpbmc6MnB4O1xuICAgIGZvbnQtc2l6ZToxMnB4O1xuICB9XG4gIEBtZWRpYSAobWF4LXdpZHRoOiA2MzBweCkge1xuICAgIGZvbnQtc2l6ZToxMHB4O1xuICB9XG59XG4uc2VhcmNoLWlucHV0LWVsZW0ge1xuICBAbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgICBwYWRkaW5nOjJweDtcbiAgICBmb250LXNpemU6MTJweDtcbiAgICBoZWlnaHQ6IDI2cHg7XG4gIH1cbiAgQG1lZGlhIChtYXgtd2lkdGg6IDYzMHB4KSB7XG4gICAgZm9udC1zaXplOjEwcHg7XG4gIH1cbiAgQG1lZGlhIChtYXgtd2lkdGg6IDU3NXB4KSB7XG4gICAgbWFyZ2luLXRvcDo1cHg7XG4gIH1cbn1cbi5kb3dubG9hZC1wZGYge1xuICBAbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgICBmb250LXNpemU6MTJweDtcbiAgfVxuICBAbWVkaWEgKG1heC13aWR0aDogNjMwcHgpIHtcbiAgICBmb250LXNpemU6MTBweDtcbiAgfVxufVxuLm51bS1wYWdlcyB7XG4gIEBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xuICAgIGZvbnQtc2l6ZToxMnB4O1xuICB9XG4gIEBtZWRpYSAobWF4LXdpZHRoOiA2MzBweCkge1xuICAgIGZvbnQtc2l6ZToxMHB4O1xuICB9XG4gIEBtZWRpYSAobWF4LXdpZHRoOiA0NDVweCkge1xuICAgIGRpc3BsYXk6bm9uZTtcbiAgfVxufVxuXG4ubmF2YmFyLWJyYW5kIHtcbiAgd2hpdGUtc3BhY2U6IGluaXRpYWw7XG4gIGZvbnQtc2l6ZToxNXB4O1xuICBsaW5lLWhlaWdodDogMTtcbiAgQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KVxuICB7XG4gICAgICBmb250LXNpemU6MTJweDtcbiAgfVxufSBcblxuLmNvcHktbGluayB7XG4gIGxpbmUtaGVpZ2h0OiAxO1xuICBmb250LXNpemU6IDEycHg7XG59IiwicGRmLXZpZXdlciB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBoZWlnaHQ6IDEwMHZoO1xufVxuXG4ubGRzLWhvdXJnbGFzcyB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB3aWR0aDogODBweDtcbiAgaGVpZ2h0OiA4MHB4O1xufVxuXG4ubGRzLWhvdXJnbGFzczphZnRlciB7XG4gIGNvbnRlbnQ6IFwiIFwiO1xuICBkaXNwbGF5OiBibG9jaztcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICB3aWR0aDogMDtcbiAgaGVpZ2h0OiAwO1xuICBtYXJnaW46IDhweDtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgYm9yZGVyOiAzMnB4IHNvbGlkICMwMDA7XG4gIGJvcmRlci1jb2xvcjogIzAwMCB0cmFuc3BhcmVudCAjMDAwIHRyYW5zcGFyZW50O1xuICBhbmltYXRpb246IGxkcy1ob3VyZ2xhc3MgMS4ycyBpbmZpbml0ZTtcbn1cblxuQGtleWZyYW1lcyBsZHMtaG91cmdsYXNzIHtcbiAgMCUge1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDApO1xuICAgIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjU1LCAwLjA1NSwgMC42NzUsIDAuMTkpO1xuICB9XG4gIDUwJSB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoOTAwZGVnKTtcbiAgICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC4yMTUsIDAuNjEsIDAuMzU1LCAxKTtcbiAgfVxuICAxMDAlIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgxODAwZGVnKTtcbiAgfVxufVxuLndhcm5pbmcge1xuICBjb2xvcjogcmVkO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgei1pbmRleDogMTA7XG4gIG1heC13aWR0aDogNTAwcHg7XG4gIHdpZHRoOiA1MCU7XG4gIGxlZnQ6IDI1JTtcbiAgZm9udC1zaXplOiAxMHB4O1xuICBiYWNrZ3JvdW5kOiAjZjhmOWZhO1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBwYWRkaW5nLXRvcDogMTBweDtcbiAgbWFyZ2luLXRvcDogLTlweDtcbiAgdHJhbnNpdGlvbjogbWF4LWhlaWdodCAycyBjdWJpYy1iZXppZXIoMCwgMSwgMCwgMSk7XG4gIG1heC1oZWlnaHQ6IDBweDtcbiAgb3ZlcmZsb3cteTogaGlkZGVuO1xufVxuXG4ud2FybmluZy1zaG93IHtcbiAgbWF4LWhlaWdodDogMTUwcHg7XG59XG5cbi5sb2FkaW5nLXByb2dyZXNzLWNvbnRhaW5lciB7XG4gIHdpZHRoOiA2MHB4O1xuICBoZWlnaHQ6IDZweDtcbiAgYm9yZGVyOiAxcHggYmxhY2sgc29saWQ7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwcHg7XG59XG5cbi5sb2FkaW5nLXByb2dyZXNzIHtcbiAgd2lkdGg6IDAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbiAgaGVpZ2h0OiA1cHg7XG59XG5cbi5sb2FkaW5nLXBlcmNlbnQge1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB3aWR0aDogNjBweDtcbiAgcGFkZGluZzogNXB4O1xufVxuXG4ubmF2aWdhdGlvbmJhci13cmFwcGVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y4ZjlmYTtcbiAgZGlzcGxheTogZmxleDtcbn1cblxuLmNlbGwtb25lIHtcbiAgZmxleDogMTtcbiAgaGVpZ2h0OiA2MHB4O1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gIC5jZWxsLW9uZSB7XG4gICAgaGVpZ2h0OiA0NXB4O1xuICB9XG59XG5cbi5jZWxsLXR3byB7XG4gIGZsZXg6IDM7XG59XG5AbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgLmNlbGwtdHdvIHtcbiAgICBoZWlnaHQ6IDQ1cHg7XG4gIH1cbn1cblxuLm5hdmlnYXRpb24td3JhcHBlciB7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG4gIGRpc3BsYXk6IC13ZWJraXQtYm94O1xuICBkaXNwbGF5OiBmbGV4O1xuICBtYXJnaW46IDBweDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5AbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgLm5hdmlnYXRpb24td3JhcHBlciB7XG4gICAgaGVpZ2h0OiA0NXB4O1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogNTc1cHgpIHtcbiAgLm5hdmlnYXRpb24td3JhcHBlciB7XG4gICAgcGFkZGluZy1sZWZ0OiAwcHg7XG4gIH1cbn1cblxuLm5hdmlnYXRpb24taXRlbSB7XG4gIGZsZXg6IDE7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcGFkZGluZzogMHB4IDJweDtcbn1cblxuLnNlYXJjaC13cmFwcGVyIHtcbiAgZmxleDogMztcbiAgZGlzcGxheTogZmxleDtcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA1NzVweCkge1xuICAuc2VhcmNoLXdyYXBwZXIge1xuICAgIGZsZXg6IDY7XG4gIH1cbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDU4MHB4KSB7XG4gIC5sZWZ0LWFycm93IHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA1ODBweCkge1xuICAucmlnaHQtYXJyb3cge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDU4MHB4KSB7XG4gIC5wZGYtd29yZCB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxufVxuXG4ucHJldi1zcGFuIHtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA2MzBweCkge1xuICAucHJldi1zcGFuIHtcbiAgICBmb250LXNpemU6IDEwcHg7XG4gIH1cbn1cblxuLm5leHQtc3BhbiB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5AbWVkaWEgKG1heC13aWR0aDogNjMwcHgpIHtcbiAgLm5leHQtc3BhbiB7XG4gICAgZm9udC1zaXplOiAxMHB4O1xuICB9XG59XG5cbi5uYXZpZ2F0aW9uLWNvbnRhaW5lciB7XG4gIG1hcmdpbi10b3A6IDUzcHg7XG59XG5AbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgLm5hdmlnYXRpb24tY29udGFpbmVyIHtcbiAgICBmb250LXNpemU6IDEycHg7XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA2MzBweCkge1xuICAubmF2aWdhdGlvbi1jb250YWluZXIge1xuICAgIGZvbnQtc2l6ZTogMTBweDtcbiAgfVxufVxuXG4uY29udGFpbmVyIHtcbiAgbWFyZ2luLXRvcDogNTdweDtcbn1cbkBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkge1xuICAuY29udGFpbmVyIHtcbiAgICBtYXgtd2lkdGg6IDkyNXB4O1xuICAgIHBhZGRpbmc6IDBweDtcbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gIC5jb250YWluZXIge1xuICAgIG1heC13aWR0aDogNzAwcHg7XG4gICAgcGFkZGluZzogMHB4O1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogNzE1cHgpIHtcbiAgLmNvbnRhaW5lciB7XG4gICAgbWFyZ2luLXRvcDogNDBweDtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gIH1cbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gIC5uYXZiYXItYnJhbmQge1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDYzMHB4KSB7XG4gIC5uYXZiYXItYnJhbmQge1xuICAgIGZvbnQtc2l6ZTogMTBweDtcbiAgfVxufVxuXG5AbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgLnNlYXJjaC1idXR0b24tZWxlbSB7XG4gICAgcGFkZGluZzogMnB4O1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDYzMHB4KSB7XG4gIC5zZWFyY2gtYnV0dG9uLWVsZW0ge1xuICAgIGZvbnQtc2l6ZTogMTBweDtcbiAgfVxufVxuXG5AbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgLnNlYXJjaC1pbnB1dC1lbGVtIHtcbiAgICBwYWRkaW5nOiAycHg7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICAgIGhlaWdodDogMjZweDtcbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDYzMHB4KSB7XG4gIC5zZWFyY2gtaW5wdXQtZWxlbSB7XG4gICAgZm9udC1zaXplOiAxMHB4O1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogNTc1cHgpIHtcbiAgLnNlYXJjaC1pbnB1dC1lbGVtIHtcbiAgICBtYXJnaW4tdG9wOiA1cHg7XG4gIH1cbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gIC5kb3dubG9hZC1wZGYge1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDYzMHB4KSB7XG4gIC5kb3dubG9hZC1wZGYge1xuICAgIGZvbnQtc2l6ZTogMTBweDtcbiAgfVxufVxuXG5AbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgLm51bS1wYWdlcyB7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogNjMwcHgpIHtcbiAgLm51bS1wYWdlcyB7XG4gICAgZm9udC1zaXplOiAxMHB4O1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogNDQ1cHgpIHtcbiAgLm51bS1wYWdlcyB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxufVxuXG4ubmF2YmFyLWJyYW5kIHtcbiAgd2hpdGUtc3BhY2U6IGluaXRpYWw7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgbGluZS1oZWlnaHQ6IDE7XG59XG5AbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgLm5hdmJhci1icmFuZCB7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICB9XG59XG5cbi5jb3B5LWxpbmsge1xuICBsaW5lLWhlaWdodDogMTtcbiAgZm9udC1zaXplOiAxMnB4O1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/book-view/book-view.component.ts":
/*!**************************************************!*\
  !*** ./src/app/book-view/book-view.component.ts ***!
  \**************************************************/
/*! exports provided: BookViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BookViewComponent", function() { return BookViewComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _services_storage_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/storage.service */ "./src/app/services/storage.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var ng2_pdf_viewer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng2-pdf-viewer */ "./node_modules/ng2-pdf-viewer/fesm2015/ng2-pdf-viewer.js");







let BookViewComponent = class BookViewComponent {
    constructor(storageService, route, location) {
        this.storageService = storageService;
        this.route = route;
        this.location = location;
        this.bookInfos = [];
        this.pdfSource = '';
        this.loadingBookSource = '';
        this.pdfName = '';
        this.pdfPage = 1;
        this.pdfUpdated = '';
        this.zoom = 1;
        this.stringToSearch = '';
        this.numberOfPages = 1;
        this.loadingBook = true;
        this.mobileShow = false;
        this.bookURLname = '';
        this.warning = '';
        this.loadingPercentage = '0%';
        this.linkCopiedText = 'Copy Link';
        this.warningShow = true;
    }
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
            this.loadingPercentage = `${Math.round($event.loaded / $event.total * 100)}%`;
        }
    }
    pdfInfo(event) {
        this.numberOfPages = event.numPages;
        this.loadingBook = false;
    }
    downloadedBook() {
        gtag('send', 'event', 'book-download', this.pdfName);
    }
    linkCopied() {
        this.linkCopiedText = 'Link was copied!';
        setTimeout(() => {
            this.linkCopiedText = 'Copy Link';
        }, 3000);
    }
    fallbackCopyTextToClipboard(text) {
        var textArea = document.createElement("textarea");
        textArea.value = text;
        // Avoid scrolling to bottom
        textArea.style.top = "0";
        textArea.style.left = "0";
        textArea.style.position = "fixed";
        document.body.appendChild(textArea);
        textArea.focus();
        textArea.select();
        try {
            var successful = document.execCommand('copy');
            var msg = successful ? 'successful' : 'unsuccessful';
            this.linkCopied();
        }
        catch (err) {
            console.error('Fallback: Oops, unable to copy', err);
        }
        document.body.removeChild(textArea);
    }
    copyTextToClipboard(text) {
        if (!navigator.clipboard) {
            this.fallbackCopyTextToClipboard(text);
            return;
        }
        navigator.clipboard.writeText(text).then(() => {
            this.linkCopied();
        }, function (err) {
            console.error('Async: Could not copy text: ', err);
        });
    }
    copyLink() {
        this.copyTextToClipboard(location.href);
    }
    getPdfInfoFromRoute() {
        if (this.bookInfos && this.bookInfos.length && this.pdfName && this.pdfPage) {
            const book = this.bookInfos.find(val => {
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
            }
            else {
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
            this.regIntervalSub = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["interval"])(500).subscribe(() => {
                if (this.storageService.getPageForBook(book.bookTitle) !== this.pdfPage.toString()) {
                    gtag('set', 'page_path', `/book/${book.bookTitle.replace(/\s/g, '-')}/${this.pdfPage.toString()}`);
                    gtag('event', 'page_view');
                }
                this.storageService.setPageForBook(book.bookTitle, this.pdfPage.toString());
                this.location.go(`/book/${book.bookTitle.replace(/\s/g, '-')}/${this.pdfPage.toString()}`);
            });
        }
    }
    setPdfPage(pageNum, count = 0) {
        if (count >= 50) {
            this.pdfPage = 1;
            return;
        }
        if (pageNum > this.numberOfPages) {
            setTimeout(() => {
                this.setPdfPage(pageNum, count + 1);
            }, 250);
            return;
        }
        this.pdfPage = pageNum;
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
                this.setPdfPage(Number(out[2].path));
                this.loadingBookSource = `/assets/${out[1].path}${this.pdfPage - 1}.pdf`;
                gtag('set', 'page_path', `/book/${this.pdfName}/${this.pdfPage}`);
                gtag('event', 'page_view');
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
};
BookViewComponent.ctorParameters = () => [
    { type: _services_storage_service__WEBPACK_IMPORTED_MODULE_4__["StorageService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(ng2_pdf_viewer__WEBPACK_IMPORTED_MODULE_6__["PdfViewerComponent"], { static: true })
], BookViewComponent.prototype, "pdfComponent", void 0);
BookViewComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-book-view',
        providers: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"], { provide: _angular_common__WEBPACK_IMPORTED_MODULE_3__["LocationStrategy"], useClass: _angular_common__WEBPACK_IMPORTED_MODULE_3__["PathLocationStrategy"] }],
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./book-view.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/book-view/book-view.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./book-view.component.scss */ "./src/app/book-view/book-view.component.scss")).default]
    })
], BookViewComponent);



/***/ }),

/***/ "./src/app/config/resource.config.ts":
/*!*******************************************!*\
  !*** ./src/app/config/resource.config.ts ***!
  \*******************************************/
/*! exports provided: ResourceConfig */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResourceConfig", function() { return ResourceConfig; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

const ResourceConfig = {
    Status200: {
        title: 'STATUS CODE: 200',
        desc: 'OK All requested data was received.'
    },
    Status204: {
        title: 'STATUS CODE: 204',
        desc: 'No Content'
    },
    Status206: {
        title: 'STATUS CODE: 206 ',
        desc: 'Partial Content'
    },
    Status400: {
        title: 'STATUS CODE: BadRequest 400 ',
        desc: 'BadRequest 400'
    },
    Status401: {
        title: '401- Unauthorized',
        desc: ''
    },
    Status440: {
        title: '440- Session Expired',
        desc: ''
    },
    Status500: {
        title: 'STATUS CODE: Internal Server Error 500',
        desc: 'Server Error'
    },
    Status503: {
        title: 'STATUS CODE: 503 Service Unavailable',
        desc: 'Server is Unavailable.'
    },
    StatusUnreachable: {
        title: 'STATUS  CODE: Host Unreachable',
        desc: ''
    }
};


/***/ }),

/***/ "./src/app/home/home.component.scss":
/*!******************************************!*\
  !*** ./src/app/home/home.component.scss ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".site-intro {\n  max-width: 720px;\n  margin-left: auto;\n  margin-right: auto;\n  margin-bottom: 40px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9yZWlka3V0dGxlci9yZXBvcy9rZW5uZXRoc2l0ZS9zcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7QUNDRiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zaXRlLWludHJvIHtcbiAgbWF4LXdpZHRoOiA3MjBweDtcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gIG1hcmdpbi1yaWdodDogYXV0bztcbiAgbWFyZ2luLWJvdHRvbTogNDBweDtcbn1cbiIsIi5zaXRlLWludHJvIHtcbiAgbWF4LXdpZHRoOiA3MjBweDtcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gIG1hcmdpbi1yaWdodDogYXV0bztcbiAgbWFyZ2luLWJvdHRvbTogNDBweDtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_storage_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/storage.service */ "./src/app/services/storage.service.ts");



let HomeComponent = class HomeComponent {
    constructor(storageService) {
        this.storageService = storageService;
        this.bookInfos = [];
    }
    ngOnInit() {
        this.bookInfos = this.storageService.booksToInfo;
        this.updateBookInfo = this.storageService.getupdatedBooksInfo().subscribe(out => {
            this.bookInfos = out;
        });
    }
    ngOnDestroy() {
        if (this.updateBookInfo) {
            this.updateBookInfo.unsubscribe();
        }
    }
};
HomeComponent.ctorParameters = () => [
    { type: _services_storage_service__WEBPACK_IMPORTED_MODULE_2__["StorageService"] }
];
HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-home',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./home.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./home.component.scss */ "./src/app/home/home.component.scss")).default]
    })
], HomeComponent);



/***/ }),

/***/ "./src/app/services/httpClient.service.ts":
/*!************************************************!*\
  !*** ./src/app/services/httpClient.service.ts ***!
  \************************************************/
/*! exports provided: HttpClientService, Error */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpClientService", function() { return HttpClientService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Error", function() { return Error; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _config_resource_config__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../config/resource.config */ "./src/app/config/resource.config.ts");
/* harmony import */ var _notification_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./notification.service */ "./src/app/services/notification.service.ts");
/* harmony import */ var _storage_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./storage.service */ "./src/app/services/storage.service.ts");









let HttpClientService = class HttpClientService {
    constructor(storageService, http, notificationService) {
        this.storageService = storageService;
        this.http = http;
        this.notificationService = notificationService;
        this.sessionKey = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](null);
        this.showError = true;
    }
    setSessionKey(value) {
        this.sessionKey.next(value);
    }
    post(serviceUrl, params = '', yardDates, block = true, version = '', contentType = 1, isSecured = true) {
        const url = _environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].bookLocation + version + serviceUrl;
        if (!this.storageService.currentlyRequestingUrl[url] || !block) {
            this.storageService.currentlyRequestingUrl[url] = true;
            return this.http.post(url, yardDates)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((res) => {
                this.storageService.currentlyRequestingUrl[url] = false;
                return res;
            }))
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(err => {
                this.storageService.currentlyRequestingUrl[url] = false;
                return this.handleError(err);
            }));
        }
        else {
            return null;
        }
    }
    get(serviceUrl, params = '', version = '', absolute = false) {
        let url = _environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].bookLocation + version + serviceUrl;
        if (absolute) {
            url = serviceUrl;
        }
        if (!this.storageService.currentlyRequestingUrl[url]) {
            this.storageService.currentlyRequestingUrl[url] = true;
            return this.http.get(url)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((res) => {
                this.storageService.currentlyRequestingUrl[url] = false;
                return res;
            }))
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(err => {
                this.storageService.currentlyRequestingUrl[url] = false;
                return this.handleError(err);
            }));
        }
        else {
            return null;
        }
    }
    handleError(error) {
        if (!this.showError) {
            return;
        }
        else {
            this.showError = false;
            Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["interval"])(1000).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1)).subscribe(out => {
                this.showError = true;
            });
        }
        const erros = [];
        const errorMessage = (error && error.error && error.error.message) ? error.error.message : null;
        switch (error.status) {
            case 0:
                this.notificationService.showError((errorMessage) ? "" : _config_resource_config__WEBPACK_IMPORTED_MODULE_6__["ResourceConfig"].StatusUnreachable.desc, (errorMessage) ? errorMessage : _config_resource_config__WEBPACK_IMPORTED_MODULE_6__["ResourceConfig"].StatusUnreachable.title);
                break;
            case 400:
                this.notificationService.showError((errorMessage) ? "" : _config_resource_config__WEBPACK_IMPORTED_MODULE_6__["ResourceConfig"].Status400.desc, (errorMessage) ? errorMessage : _config_resource_config__WEBPACK_IMPORTED_MODULE_6__["ResourceConfig"].Status400.title);
                break;
            case 401:
                this.storageService.error401Called = true;
                setTimeout(() => {
                    this.storageService.error401Called = false;
                }, 3000);
                this.notificationService.showError((errorMessage) ? "" : _config_resource_config__WEBPACK_IMPORTED_MODULE_6__["ResourceConfig"].Status401.desc, (errorMessage) ? errorMessage : _config_resource_config__WEBPACK_IMPORTED_MODULE_6__["ResourceConfig"].Status401.title);
                break;
            case 440:
                this.notificationService.showError((errorMessage) ? "" : _config_resource_config__WEBPACK_IMPORTED_MODULE_6__["ResourceConfig"].Status440.desc, (errorMessage) ? errorMessage : _config_resource_config__WEBPACK_IMPORTED_MODULE_6__["ResourceConfig"].Status440.title);
                break;
            case 500:
                this.notificationService.showError((errorMessage) ? "" : _config_resource_config__WEBPACK_IMPORTED_MODULE_6__["ResourceConfig"].Status500.desc, (errorMessage) ? errorMessage : _config_resource_config__WEBPACK_IMPORTED_MODULE_6__["ResourceConfig"].Status500.title);
                break;
            case 503:
                this.notificationService.showError((errorMessage) ? "" : _config_resource_config__WEBPACK_IMPORTED_MODULE_6__["ResourceConfig"].Status503.desc, (errorMessage) ? errorMessage : _config_resource_config__WEBPACK_IMPORTED_MODULE_6__["ResourceConfig"].Status503.title);
                break;
            default:
                this.notificationService.showError('Error', 'Something went wrong');
                break;
        }
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(new Error(error.status, ''));
    }
    ngOnDestroy() {
    }
};
HttpClientService.ctorParameters = () => [
    { type: _storage_service__WEBPACK_IMPORTED_MODULE_8__["StorageService"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] },
    { type: _notification_service__WEBPACK_IMPORTED_MODULE_7__["NotificationService"] }
];
HttpClientService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], HttpClientService);

class Error {
    constructor(key, description) {
        this.errors = [];
        this.key = key;
        this.description = description;
    }
}


/***/ }),

/***/ "./src/app/services/notification.service.ts":
/*!**************************************************!*\
  !*** ./src/app/services/notification.service.ts ***!
  \**************************************************/
/*! exports provided: NotificationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationService", function() { return NotificationService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var angular_notifier__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angular-notifier */ "./node_modules/angular-notifier/fesm2015/angular-notifier.js");




let NotificationService = class NotificationService {
    constructor(notifier, componentFactoryResolver, ngZone, appRef) {
        this.componentFactoryResolver = componentFactoryResolver;
        this.ngZone = ngZone;
        this.appRef = appRef;
        this.notifier = notifier;
    }
    /**
  * Hide oldest notification
  */
    hideOldestNotification() {
        this.notifier.hideOldest();
    }
    showNotification() {
        this.notifier.notify('error', 'This is not good!');
    }
    showWarning(message, title) {
        this.notifier.notify('warning', title + ": " + message);
    }
    showError(message, title) {
        console.log('->', message);
        this.notifier.notify('error', title + ": " + message);
    }
    showSuccess(message, title) {
        this.notifier.notify('success', title + ": " + message);
    }
    showInfo(message, title) {
        this.notifier.notify('info', title + ": " + message);
    }
};
NotificationService.ctorParameters = () => [
    { type: angular_notifier__WEBPACK_IMPORTED_MODULE_2__["NotifierService"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ComponentFactoryResolver"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ApplicationRef"] }
];
NotificationService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], NotificationService);



/***/ }),

/***/ "./src/app/services/storage.service.ts":
/*!*********************************************!*\
  !*** ./src/app/services/storage.service.ts ***!
  \*********************************************/
/*! exports provided: StorageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StorageService", function() { return StorageService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");



let StorageService = class StorageService {
    constructor() {
        this.currentlyRequestingUrl = {};
        this.error401Called = false;
        this.updatedBooksInfo = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.booksToInfo = [
            {
                bookTitle: 'One Variable Advanced Calculus',
                bookUrl: 'https://kennethbooks.s3.us-east-2.amazonaws.com/books/AdvancedCalculusSV/AdvancedCalculusSV.pdf',
                lastModifiedDate: '',
                bookCover: 'https://kennethbooks.s3.us-east-2.amazonaws.com/cover/single-variable-advanced.jpg',
                purchaseLink: 'https://www.amazon.com/dp/B09GZM9JMR?ref_=pe_3052080_397514860',
                purchaseMessage: 'Purchase a physical copy'
            },
            {
                bookTitle: 'Real and Abstract Analysis',
                bookUrl: 'https://kennethbooks.s3.us-east-2.amazonaws.com/books/Analysis/Analysis.pdf',
                lastModifiedDate: ''
            },
            {
                bookTitle: 'Calculus of One and Many Variables',
                bookUrl: 'https://kennethbooks.s3.us-east-2.amazonaws.com/books/CalculusOneAndManyVariables/CalculusOneAndManyVariables.pdf',
                lastModifiedDate: '',
                bookCover: 'https://kennethbooks.s3.us-east-2.amazonaws.com/cover/calculus-one-many.jpg',
                purchaseLink: 'https://www.amazon.com/dp/B09JJGWSP6?ref_=pe_3052080_397514860',
                purchaseMessage: 'Purchase a physical copy'
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
                lastModifiedDate: '',
                warning: 'It is best to avoid the Topics in Analysis collection unless  you are interested in something which is only found there. Most things of interest are presented better in the other books.'
            },
            {
                bookTitle: 'Interrogation of Hiroshi Oshima',
                bookUrl: 'https://kennethbooks.s3.us-east-2.amazonaws.com/books/OshimaInterrogation/OshimaInterogation+(1).pdf',
                lastModifiedDate: ''
            }
        ];
    }
    setAgreedToCookies() {
        localStorage.setItem('cookies', '1');
    }
    getAgreedToCookies() {
        const agreed = localStorage.getItem('cookies');
        if (agreed !== null) {
            return true;
        }
        else {
            return false;
        }
    }
    getupdatedBooksInfo() {
        return this.updatedBooksInfo;
    }
    setupdatedBooksInfo(nextBookInfo) {
        this.booksToInfo = nextBookInfo;
        this.updatedBooksInfo.next(nextBookInfo);
    }
    getPageForBook(book) {
        const out = localStorage.getItem(book);
        if (out !== null) {
            return out;
        }
        else {
            return '1';
        }
    }
    setPageForBook(book, page) {
        localStorage.setItem(book, page);
    }
};
StorageService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], StorageService);

;


/***/ }),

/***/ "./src/app/stub/stub.component.scss":
/*!******************************************!*\
  !*** ./src/app/stub/stub.component.scss ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".book-stub {\n  position: relative;\n  border: solid grey 1px;\n  background-color: #e6e6e6;\n  cursor: pointer;\n}\n\n.draw-border {\n  box-shadow: inset 0 0 0 1px black;\n  color: black;\n  transition: color 0.5s 0.1666666667s;\n  position: relative;\n  max-width: 100%;\n}\n\n.draw-border::before, .draw-border::after {\n  border: 0 solid transparent;\n  box-sizing: border-box;\n  content: \"\";\n  pointer-events: none;\n  position: absolute;\n  width: 0;\n  height: 0;\n  bottom: 0;\n  right: 0;\n}\n\n.draw-border::before {\n  border-bottom-width: 1px;\n  border-left-width: 1px;\n}\n\n.draw-border::after {\n  border-top-width: 1px;\n  border-right-width: 1px;\n}\n\n.draw-border:hover {\n  color: #8798ec;\n}\n\n.draw-border:hover::before, .draw-border:hover::after {\n  border-color: #8798ec;\n  transition: border-color 0s, width 0.5s, height 0.5s;\n  width: 100%;\n  height: 100%;\n}\n\n.draw-border:hover::before {\n  transition-delay: 0s, 0s, 0.5s;\n}\n\n.draw-border:hover::after {\n  transition-delay: 0s, 0.5s, 0s;\n}\n\n.book-cover img {\n  width: 100%;\n}\n\n.book-title {\n  text-align: center;\n}\n\n.currently-at {\n  text-align: center;\n  font-size: 12px;\n  font-style: italic;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9yZWlka3V0dGxlci9yZXBvcy9rZW5uZXRoc2l0ZS9zcmMvYXBwL3N0dWIvc3R1Yi5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvc3R1Yi9zdHViLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQUE7RUFDQSxzQkFBQTtFQUNBLHlCQUFBO0VBQ0EsZUFBQTtBQ0NGOztBRGdFQTtFQXRERSxpQ0FBQTtFQUNBLFlBc0Q0QjtFQXJENUIsb0NBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7QUNORjs7QURRRTtFQUVFLDJCQUFBO0VBQ0Esc0JBQUE7RUFDQSxXQUFBO0VBQ0Esb0JBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsU0FBQTtFQUNBLFFBQUE7QUNQSjs7QURVRTtFQUdFLHdCQWlDMEM7RUFoQzFDLHNCQWdDMEM7QUMxQzlDOztBRGFFO0VBR0UscUJBMEIwQztFQXpCMUMsdUJBeUIwQztBQ3RDOUM7O0FEZ0JFO0VBQ0UsY0FxQmlDO0FDbkNyQzs7QURnQkk7RUFFRSxxQkFpQitCO0VBaEIvQixvREFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FDZk47O0FEa0JJO0VBQ0UsOEJBQUE7QUNoQk47O0FEbUJJO0VBQ0UsOEJBQUE7QUNqQk47O0FEMkJFO0VBQ0UsV0FBQTtBQ3hCSjs7QUQ0QkE7RUFDRSxrQkFBQTtBQ3pCRjs7QUQrQkE7RUFDRSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtBQzVCRiIsImZpbGUiOiJzcmMvYXBwL3N0dWIvc3R1Yi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5ib29rLXN0dWIge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGJvcmRlcjogc29saWQgZ3JleSAxcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlNmU2ZTY7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuQG1peGluIGJ0bi1ib3JkZXItZHJhd2luZyhcbiAgJGNvbG9yOiBibGFjayxcbiAgJGhvdmVyOiBibGFjayxcbiAgJHdpZHRoOiAxcHgsXG4gICR2ZXJ0aWNhbDogdG9wLFxuICAkaG9yaXpvbnRhbDogbGVmdCxcbiAgJGR1cmF0aW9uOiAwLjVzXG4pIHtcbiAgYm94LXNoYWRvdzogaW5zZXQgMCAwIDAgJHdpZHRoICRjb2xvcjtcbiAgY29sb3I6ICRjb2xvcjtcbiAgdHJhbnNpdGlvbjogY29sb3IgJGR1cmF0aW9uICRkdXJhdGlvbi8zO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG1heC13aWR0aDogMTAwJTtcblxuICAmOjpiZWZvcmUsXG4gICY6OmFmdGVyIHtcbiAgICBib3JkZXI6IDAgc29saWQgdHJhbnNwYXJlbnQ7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICBjb250ZW50OiBcIlwiO1xuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB3aWR0aDogMDtcbiAgICBoZWlnaHQ6IDA7XG4gICAgI3skdmVydGljYWx9OiAwO1xuICAgICN7JGhvcml6b250YWx9OiAwO1xuICB9XG5cbiAgJjo6YmVmb3JlIHtcbiAgICAkaC1zaWRlOiBpZigkaG9yaXpvbnRhbCA9PSBcImxlZnRcIiwgXCJyaWdodFwiLCBcImxlZnRcIik7XG5cbiAgICBib3JkZXItI3skdmVydGljYWx9LXdpZHRoOiAkd2lkdGg7XG4gICAgYm9yZGVyLSN7JGgtc2lkZX0td2lkdGg6ICR3aWR0aDtcbiAgfVxuXG4gICY6OmFmdGVyIHtcbiAgICAkdi1zaWRlOiBpZigkdmVydGljYWwgPT0gXCJ0b3BcIiwgXCJib3R0b21cIiwgXCJ0b3BcIik7XG5cbiAgICBib3JkZXItI3skdi1zaWRlfS13aWR0aDogJHdpZHRoO1xuICAgIGJvcmRlci0jeyRob3Jpem9udGFsfS13aWR0aDogJHdpZHRoO1xuICB9XG5cbiAgJjpob3ZlciB7XG4gICAgY29sb3I6ICRob3ZlcjtcblxuICAgICY6OmJlZm9yZSxcbiAgICAmOjphZnRlciB7XG4gICAgICBib3JkZXItY29sb3I6ICRob3ZlcjtcbiAgICAgIHRyYW5zaXRpb246IGJvcmRlci1jb2xvciAwcywgd2lkdGggJGR1cmF0aW9uLCBoZWlnaHQgJGR1cmF0aW9uO1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgfVxuXG4gICAgJjo6YmVmb3JlIHtcbiAgICAgIHRyYW5zaXRpb24tZGVsYXk6IDBzLCAwcywgJGR1cmF0aW9uO1xuICAgIH1cblxuICAgICY6OmFmdGVyIHtcbiAgICAgIHRyYW5zaXRpb24tZGVsYXk6IDBzLCAkZHVyYXRpb24sIDBzO1xuICAgIH1cbiAgfVxufVxuXG4uZHJhdy1ib3JkZXIge1xuICBAaW5jbHVkZSBidG4tYm9yZGVyLWRyYXdpbmcoYmxhY2ssICM4Nzk4ZWMsIDFweCwgYm90dG9tLCByaWdodCk7XG59XG5cbi5ib29rLWNvdmVyIHtcbiAgaW1nIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxufVxuXG4uYm9vay10aXRsZSB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmJvb2stb3B0aW9ucyB7XG59XG5cbi5jdXJyZW50bHktYXQge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgZm9udC1zdHlsZTogaXRhbGljO1xufVxuIiwiLmJvb2stc3R1YiB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgYm9yZGVyOiBzb2xpZCBncmV5IDFweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2U2ZTZlNjtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uZHJhdy1ib3JkZXIge1xuICBib3gtc2hhZG93OiBpbnNldCAwIDAgMCAxcHggYmxhY2s7XG4gIGNvbG9yOiBibGFjaztcbiAgdHJhbnNpdGlvbjogY29sb3IgMC41cyAwLjE2NjY2NjY2NjdzO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG1heC13aWR0aDogMTAwJTtcbn1cbi5kcmF3LWJvcmRlcjo6YmVmb3JlLCAuZHJhdy1ib3JkZXI6OmFmdGVyIHtcbiAgYm9yZGVyOiAwIHNvbGlkIHRyYW5zcGFyZW50O1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBjb250ZW50OiBcIlwiO1xuICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMDtcbiAgaGVpZ2h0OiAwO1xuICBib3R0b206IDA7XG4gIHJpZ2h0OiAwO1xufVxuLmRyYXctYm9yZGVyOjpiZWZvcmUge1xuICBib3JkZXItYm90dG9tLXdpZHRoOiAxcHg7XG4gIGJvcmRlci1sZWZ0LXdpZHRoOiAxcHg7XG59XG4uZHJhdy1ib3JkZXI6OmFmdGVyIHtcbiAgYm9yZGVyLXRvcC13aWR0aDogMXB4O1xuICBib3JkZXItcmlnaHQtd2lkdGg6IDFweDtcbn1cbi5kcmF3LWJvcmRlcjpob3ZlciB7XG4gIGNvbG9yOiAjODc5OGVjO1xufVxuLmRyYXctYm9yZGVyOmhvdmVyOjpiZWZvcmUsIC5kcmF3LWJvcmRlcjpob3Zlcjo6YWZ0ZXIge1xuICBib3JkZXItY29sb3I6ICM4Nzk4ZWM7XG4gIHRyYW5zaXRpb246IGJvcmRlci1jb2xvciAwcywgd2lkdGggMC41cywgaGVpZ2h0IDAuNXM7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG59XG4uZHJhdy1ib3JkZXI6aG92ZXI6OmJlZm9yZSB7XG4gIHRyYW5zaXRpb24tZGVsYXk6IDBzLCAwcywgMC41cztcbn1cbi5kcmF3LWJvcmRlcjpob3Zlcjo6YWZ0ZXIge1xuICB0cmFuc2l0aW9uLWRlbGF5OiAwcywgMC41cywgMHM7XG59XG5cbi5ib29rLWNvdmVyIGltZyB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4uYm9vay10aXRsZSB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmN1cnJlbnRseS1hdCB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBmb250LXN0eWxlOiBpdGFsaWM7XG59Il19 */");

/***/ }),

/***/ "./src/app/stub/stub.component.ts":
/*!****************************************!*\
  !*** ./src/app/stub/stub.component.ts ***!
  \****************************************/
/*! exports provided: StubComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StubComponent", function() { return StubComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_storage_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/storage.service */ "./src/app/services/storage.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");




let StubComponent = class StubComponent {
    constructor(storageService, router) {
        this.storageService = storageService;
        this.router = router;
        this.bookIndex = -1;
        this.BookInfo = null;
        this.bookParsed = '';
        this.pageNum = 1;
    }
    reroute(title) {
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
};
StubComponent.ctorParameters = () => [
    { type: _services_storage_service__WEBPACK_IMPORTED_MODULE_2__["StorageService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], StubComponent.prototype, "bookIndex", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], StubComponent.prototype, "BookInfo", void 0);
StubComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-stub',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./stub.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/stub/stub.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./stub.component.scss */ "./src/app/stub/stub.component.scss")).default]
    })
], StubComponent);



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const environment = {
    production: false,
    bookLocation: 'https://kennethbooks.s3.us-east-2.amazonaws.com/books/'
};


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var zone_js_dist_zone__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! zone.js/dist/zone */ "./node_modules/zone.js/dist/zone-evergreen.js");
/* harmony import */ var zone_js_dist_zone__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(zone_js_dist_zone__WEBPACK_IMPORTED_MODULE_5__);






if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/reidkuttler/repos/kennethsite/src/main.ts */"./src/main.ts");


/***/ }),

/***/ 1:
/*!**********************!*\
  !*** zlib (ignored) ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 2:
/*!********************!*\
  !*** fs (ignored) ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 3:
/*!**********************!*\
  !*** http (ignored) ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 4:
/*!***********************!*\
  !*** https (ignored) ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 5:
/*!*********************!*\
  !*** url (ignored) ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map