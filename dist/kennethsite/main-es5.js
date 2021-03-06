function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
  /*!**************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
    \**************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAppComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"container\">\r\n  <nav class=\"navbar navbar-expand-md fixed-top navbar-dark bg-dark\">\r\n    <a class=\"navbar-brand clickable\" (click)=\"reroute('/')\"><span *ngIf=\"atHome\">Kenneth Kuttler</span><i *ngIf=\"!atHome\" class=\"arrow left white\"></i></a><a href=\"/\" style=\"display:none;\"></a>\r\n    <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" (click)=\"showDropDown = !showDropDown\" data-target=\"#navbarSupportedContent\" aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\"><span class=\"navbar-toggler-icon\"></span></button>\r\n    <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\" [ngClass]=\"{'show':showDropDown}\">\r\n      <ul class=\"navbar-nav mr-auto\">\r\n        <li class=\"nav-item clickable\"><a class=\"nav-link\" (click)=\"reroute('/')\">Home</a></li>\r\n        <li class=\"nav-item dropdown\">\r\n          <span class=\"nav-link clickable\" id=\"navbarDropdown\" (click)=\"showDropDown = !showDropDown\" role=\"button\">Books <i class=\"fa fa-sort-desc\" aria-hidden=\"true\"></i></span>\r\n          <div class=\"dropdown-menu d-none d-md-block\" [ngClass]=\"{'showDropDown':showDropDown}\" aria-labelledby=\"navbarDropdown\">\r\n            <a class=\"dropdown-item clickable\" *ngFor=\"let book of bookInfos\" (click)=\"reroute(book.bookTitle, true)\">{{book.bookTitle}}</a>\r\n          </div>\r\n          <div class=\"d-md-none dropdown-menu showDropDown\" aria-labelledby=\"navbarDropdown\">\r\n            <a class=\"dropdown-item clickable\" *ngFor=\"let book of bookInfos\" (click)=\"reroute(book.bookTitle, true)\">{{book.bookTitle}}</a>\r\n          </div>\r\n        </li>\r\n      </ul>\r\n    </div>\r\n  </nav>\r\n  <ngx-loading-bar></ngx-loading-bar>\r\n\r\n  <router-outlet></router-outlet>\r\n\r\n  <notifier-container></notifier-container>\r\n  <div class=\"cookie-agreement\" *ngIf=\"!agreedToCookie\">\r\n    <div class=\"\">This website uses cookies to improve the user experience</div>\r\n    <div class=\"\">\r\n      <button type=\"button\" class=\"btn btn-primary\" (click)=\"setAgreedToCookies()\">Agree</button>\r\n    </div>\r\n  </div>\r\n</div>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/book-view/book-view.component.html":
  /*!******************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/book-view/book-view.component.html ***!
    \******************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppBookViewBookViewComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"container\" style=\"margin-top:100px;\">\r\n  <nav class=\"navbar navbar-expand-lg navbar-light bg-light\">\r\n    <a class=\"navbar-brand\">{{pdfName}}</a>\r\n    <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\" aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\" (click)=\"mobileShow=!mobileShow\">\r\n      <span class=\"navbar-toggler-icon\"></span>\r\n    </button>\r\n\r\n    <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\" [ngClass]=\"{'show':mobileShow}\">\r\n      <ul class=\"navbar-nav mr-auto\">\r\n        <li class=\"nav-item\" *ngIf=\"numberOfPages\">\r\n          {{pdfPage}}/{{numberOfPages}}&nbsp;&nbsp;\r\n        </li>\r\n        <li class=\"nav-item\">\r\n          <a target=\"_blank\" href=\"{{pdfSource}}\" (click)=\"downloadedBook()\" download>Download PDF</a>\r\n        </li>\r\n      </ul>\r\n      <ul class=\"navbar-nav mr-auto\">\r\n        <li class=\"form-inline my-2 my-lg-0\">\r\n          <input [(ngModel)]=\"stringToSearch\" (keyup.enter)=\"search()\" class=\"form-control mr-sm-2\" type=\"search\" placeholder=\"Search\" aria-label=\"Search\">\r\n          <button class=\"btn btn-outline-success my-2 my-sm-0\" type=\"submit\" (click)=\"search()\">Search</button>\r\n        </li>\r\n        <li class=\"form-inline my-2 my-lg-0\" *ngIf=\"loadingBook\">\r\n          <div class=\"lds-hourglass\"></div>\r\n        </li>\r\n        <li class=\"form-inline my-2 my-lg-0\">&nbsp;</li>\r\n        <li class=\"form-inline my-2 my-lg-0 clickable\" (click)=\"nextPrevPage(-1)\"><i class=\"arrow left black\"></i><span>Prev&nbsp;&nbsp;</span><a href=\"/{{bookURLname}}/{{pdfPage-1}}\"></a></li>\r\n        <li class=\"form-inline my-2 my-lg-0 clickable\" (click)=\"nextPrevPage(1)\"><span>&nbsp;&nbsp;Next</span><i class=\"arrow right black\"></i><a href=\"/{{bookURLname}}/{{pdfPage+1}}\"></a></li>\r\n      </ul>\r\n    </div>\r\n  </nav>\r\n  <div *ngIf=\"loadingBook\">\r\n    <pdf-viewer [zoom]=\"zoom\" [original-size]=\"false\" [autoresize]=\"true\" [show-all]=\"true\" [src]=\"loadingBookSource\" [render-text]=\"true\" [stick-to-page]=\"true\"></pdf-viewer>\r\n  </div>\r\n  <div style=\"{'display':(loadingBook)?'none':'block'}\">\r\n    <pdf-viewer (after-load-complete)=\"pdfInfo($event)\" [zoom]=\"zoom\" [original-size]=\"false\" [autoresize]=\"true\" [(page)]=\"pdfPage\" [show-all]=\"true\" [src]=\"pdfSource\" [render-text]=\"true\" [stick-to-page]=\"true\" [external-link-target]=\"'blank'\"></pdf-viewer>\r\n  </div>\r\n</div>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html":
  /*!********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html ***!
    \********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppHomeHomeComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"container\" style=\"margin-top:100px;\">\r\n  <div class=\"row\">\r\n    <h4>This is the personal website of Dr. Kenneth Kuttler. You can download these books as a PDF, or read them online without downloading. <br />If you view the books online the website will keep track of where you were at in each respective book so you can come back and continue reading where you left off.</h4>\r\n    <h5>If you have questions send me an email at <a href=\"matilto:klkuttler@gmail.com\">klkuttler@gmail.com</a></h5>\r\n  </div>\r\n  <div class=\"container\" *ngIf=\"bookInfos && bookInfos.length\">\r\n    <div class=\"row\">\r\n      <div class=\"col-sm-4\" *ngFor=\"let stub of bookInfos\" style=\"border-bottom: solid grey 1px;\">\r\n        <app-stub [BookInfo]=\"stub\"></app-stub>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/stub/stub.component.html":
  /*!********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/stub/stub.component.html ***!
    \********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppStubStubComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"row\" style=\"margin:5px 0px;\">\r\n  <div class=\"col-9 \">\r\n    <h3 class=\"book-stub draw-border noselect\" style=\"padding:5px 10px;\" (click)=\"reroute(BookInfo.bookTitle)\"><a href=\"/{{bookParsed}}/1\" disabled></a>{{BookInfo.bookTitle}}</h3>\r\n    <h5 *ngIf=\"pageNum !== 1\">Currently at page {{pageNum}}</h5>\r\n    <div class=\"col-3\" style=\"padding: 10px;\"><a target=\"_blank\" href=\"{{BookInfo.bookUrl}}\" (click)=\"downloadedBook()\" download>Download PDF</a></div>\r\n  </div>\r\n</div>\r\n";
    /***/
  },

  /***/
  "./node_modules/tslib/tslib.es6.js":
  /*!*****************************************!*\
    !*** ./node_modules/tslib/tslib.es6.js ***!
    \*****************************************/

  /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */

  /***/
  function node_modulesTslibTslibEs6Js(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__extends", function () {
      return __extends;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__assign", function () {
      return _assign;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__rest", function () {
      return __rest;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__decorate", function () {
      return __decorate;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__param", function () {
      return __param;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__metadata", function () {
      return __metadata;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__awaiter", function () {
      return __awaiter;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__generator", function () {
      return __generator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__exportStar", function () {
      return __exportStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__values", function () {
      return __values;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__read", function () {
      return __read;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spread", function () {
      return __spread;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spreadArrays", function () {
      return __spreadArrays;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__await", function () {
      return __await;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function () {
      return __asyncGenerator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function () {
      return __asyncDelegator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncValues", function () {
      return __asyncValues;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function () {
      return __makeTemplateObject;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importStar", function () {
      return __importStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importDefault", function () {
      return __importDefault;
    });
    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0
    
    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.
    
    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */

    /* global Reflect, Promise */


    var _extendStatics = function extendStatics(d, b) {
      _extendStatics = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function (d, b) {
        d.__proto__ = b;
      } || function (d, b) {
        for (var p in b) {
          if (b.hasOwnProperty(p)) d[p] = b[p];
        }
      };

      return _extendStatics(d, b);
    };

    function __extends(d, b) {
      _extendStatics(d, b);

      function __() {
        this.constructor = d;
      }

      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var _assign = function __assign() {
      _assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];

          for (var p in s) {
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
          }
        }

        return t;
      };

      return _assign.apply(this, arguments);
    };

    function __rest(s, e) {
      var t = {};

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
      }

      if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
      }
      return t;
    }

    function __decorate(decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
      return function (target, key) {
        decorator(target, key, paramIndex);
      };
    }

    function __metadata(metadataKey, metadataValue) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __awaiter(thisArg, _arguments, P, generator) {
      return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }

        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }

        function step(result) {
          result.done ? resolve(result.value) : new P(function (resolve) {
            resolve(result.value);
          }).then(fulfilled, rejected);
        }

        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    }

    function __generator(thisArg, body) {
      var _ = {
        label: 0,
        sent: function sent() {
          if (t[0] & 1) throw t[1];
          return t[1];
        },
        trys: [],
        ops: []
      },
          f,
          y,
          t,
          g;
      return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
      }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
        return this;
      }), g;

      function verb(n) {
        return function (v) {
          return step([n, v]);
        };
      }

      function step(op) {
        if (f) throw new TypeError("Generator is already executing.");

        while (_) {
          try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];

            switch (op[0]) {
              case 0:
              case 1:
                t = op;
                break;

              case 4:
                _.label++;
                return {
                  value: op[1],
                  done: false
                };

              case 5:
                _.label++;
                y = op[1];
                op = [0];
                continue;

              case 7:
                op = _.ops.pop();

                _.trys.pop();

                continue;

              default:
                if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                  _ = 0;
                  continue;
                }

                if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                  _.label = op[1];
                  break;
                }

                if (op[0] === 6 && _.label < t[1]) {
                  _.label = t[1];
                  t = op;
                  break;
                }

                if (t && _.label < t[2]) {
                  _.label = t[2];

                  _.ops.push(op);

                  break;
                }

                if (t[2]) _.ops.pop();

                _.trys.pop();

                continue;
            }

            op = body.call(thisArg, _);
          } catch (e) {
            op = [6, e];
            y = 0;
          } finally {
            f = t = 0;
          }
        }

        if (op[0] & 5) throw op[1];
        return {
          value: op[0] ? op[1] : void 0,
          done: true
        };
      }
    }

    function __exportStar(m, exports) {
      for (var p in m) {
        if (!exports.hasOwnProperty(p)) exports[p] = m[p];
      }
    }

    function __values(o) {
      var m = typeof Symbol === "function" && o[Symbol.iterator],
          i = 0;
      if (m) return m.call(o);
      return {
        next: function next() {
          if (o && i >= o.length) o = void 0;
          return {
            value: o && o[i++],
            done: !o
          };
        }
      };
    }

    function __read(o, n) {
      var m = typeof Symbol === "function" && o[Symbol.iterator];
      if (!m) return o;
      var i = m.call(o),
          r,
          ar = [],
          e;

      try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) {
          ar.push(r.value);
        }
      } catch (error) {
        e = {
          error: error
        };
      } finally {
        try {
          if (r && !r.done && (m = i["return"])) m.call(i);
        } finally {
          if (e) throw e.error;
        }
      }

      return ar;
    }

    function __spread() {
      for (var ar = [], i = 0; i < arguments.length; i++) {
        ar = ar.concat(__read(arguments[i]));
      }

      return ar;
    }

    function __spreadArrays() {
      for (var s = 0, i = 0, il = arguments.length; i < il; i++) {
        s += arguments[i].length;
      }

      for (var r = Array(s), k = 0, i = 0; i < il; i++) {
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) {
          r[k] = a[j];
        }
      }

      return r;
    }

    ;

    function __await(v) {
      return this instanceof __await ? (this.v = v, this) : new __await(v);
    }

    function __asyncGenerator(thisArg, _arguments, generator) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var g = generator.apply(thisArg, _arguments || []),
          i,
          q = [];
      return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i;

      function verb(n) {
        if (g[n]) i[n] = function (v) {
          return new Promise(function (a, b) {
            q.push([n, v, a, b]) > 1 || resume(n, v);
          });
        };
      }

      function resume(n, v) {
        try {
          step(g[n](v));
        } catch (e) {
          settle(q[0][3], e);
        }
      }

      function step(r) {
        r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
      }

      function fulfill(value) {
        resume("next", value);
      }

      function reject(value) {
        resume("throw", value);
      }

      function settle(f, v) {
        if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
      }
    }

    function __asyncDelegator(o) {
      var i, p;
      return i = {}, verb("next"), verb("throw", function (e) {
        throw e;
      }), verb("return"), i[Symbol.iterator] = function () {
        return this;
      }, i;

      function verb(n, f) {
        i[n] = o[n] ? function (v) {
          return (p = !p) ? {
            value: __await(o[n](v)),
            done: n === "return"
          } : f ? f(v) : v;
        } : f;
      }
    }

    function __asyncValues(o) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var m = o[Symbol.asyncIterator],
          i;
      return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i);

      function verb(n) {
        i[n] = o[n] && function (v) {
          return new Promise(function (resolve, reject) {
            v = o[n](v), settle(resolve, reject, v.done, v.value);
          });
        };
      }

      function settle(resolve, reject, d, v) {
        Promise.resolve(v).then(function (v) {
          resolve({
            value: v,
            done: d
          });
        }, reject);
      }
    }

    function __makeTemplateObject(cooked, raw) {
      if (Object.defineProperty) {
        Object.defineProperty(cooked, "raw", {
          value: raw
        });
      } else {
        cooked.raw = raw;
      }

      return cooked;
    }

    ;

    function __importStar(mod) {
      if (mod && mod.__esModule) return mod;
      var result = {};
      if (mod != null) for (var k in mod) {
        if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
      }
      result.default = mod;
      return result;
    }

    function __importDefault(mod) {
      return mod && mod.__esModule ? mod : {
        default: mod
      };
    }
    /***/

  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _book_view_book_view_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./book-view/book-view.component */
    "./src/app/book-view/book-view.component.ts");
    /* harmony import */


    var _home_home_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./home/home.component */
    "./src/app/home/home.component.ts");

    var routes = [{
      path: '',
      component: _home_home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"]
    }, {
      path: 'book/:book/:page',
      component: _book_view_book_view_component__WEBPACK_IMPORTED_MODULE_3__["BookViewComponent"]
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], AppRoutingModule);
    /***/
  },

  /***/
  "./src/app/app.component.scss":
  /*!************************************!*\
    !*** ./src/app/app.component.scss ***!
    \************************************/

  /*! exports provided: default */

  /***/
  function srcAppAppComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".cookie-agreement {\n  position: fixed;\n  bottom: 0px;\n  right: 0px;\n  left: 0px;\n  z-index: 100;\n  padding: 5px;\n  text-align: center;\n  background-color: #eaeaea;\n  border: solid grey 1px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQzpcXFVzZXJzXFxyZWlka1xcRG9jdW1lbnRzXFxyZXBvc1xca2VubmV0aHNpdGUvc3JjXFxhcHBcXGFwcC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZUFBQTtFQUNBLFdBQUE7RUFDQSxVQUFBO0VBQ0EsU0FBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtFQUNBLHNCQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29va2llLWFncmVlbWVudCB7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIGJvdHRvbTogMHB4O1xyXG4gIHJpZ2h0OiAwcHg7XHJcbiAgbGVmdDogMHB4O1xyXG4gIHotaW5kZXg6IDEwMDtcclxuICBwYWRkaW5nOiA1cHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNlYWVhZWE7XHJcbiAgYm9yZGVyOiBzb2xpZCBncmV5IDFweDtcclxufVxyXG4iLCIuY29va2llLWFncmVlbWVudCB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgYm90dG9tOiAwcHg7XG4gIHJpZ2h0OiAwcHg7XG4gIGxlZnQ6IDBweDtcbiAgei1pbmRleDogMTAwO1xuICBwYWRkaW5nOiA1cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VhZWFlYTtcbiAgYm9yZGVyOiBzb2xpZCBncmV5IDFweDtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _services_storage_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./services/storage.service */
    "./src/app/services/storage.service.ts");
    /* harmony import */


    var _services_httpClient_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./services/httpClient.service */
    "./src/app/services/httpClient.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var AppComponent =
    /*#__PURE__*/
    function () {
      function AppComponent(storageService, httpService, route, router) {
        _classCallCheck(this, AppComponent);

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

      _createClass(AppComponent, [{
        key: "reroute",
        value: function reroute(url) {
          var isBook = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
          this.showDropDown = false;

          if (isBook) {
            var getPage = this.storageService.getPageForBook(url);
            this.router.navigateByUrl("/book/".concat(url.replace(/\s/g, '-'), "/").concat(getPage));
          } else {
            this.router.navigateByUrl(url);
          }
        }
      }, {
        key: "setAgreedToCookies",
        value: function setAgreedToCookies() {
          this.agreedToCookie = true;
          this.storageService.setAgreedToCookies();
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          this.newPageSub = this.router.events.subscribe(function (event) {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_4__["NavigationEnd"]) {
              ga('set', 'page', event.urlAfterRedirects);
              ga('send', 'pageview');

              if (event.url === "/") {
                _this.atHome = true;
              } else {
                _this.atHome = false;
              }
            }
          });
          this.bookInfos = this.storageService.booksToInfo;
          this.updateBookInfo = this.storageService.getupdatedBooksInfo().subscribe(function (out) {
            _this.bookInfos = out;
          });
          this.routerSub = this.route.url.subscribe(function (out) {
            if (out.length === 3 && out[0] && out[0].path && out[0].path === 'book') {
              _this.currentBookTitle = out[1].path.replace(/\-/g, ' ');
            } else {
              _this.currentBookTitle = '';
            }
          });
          this.agreedToCookie = this.storageService.getAgreedToCookies();
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
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
      }]);

      return AppComponent;
    }();

    AppComponent.ctorParameters = function () {
      return [{
        type: _services_storage_service__WEBPACK_IMPORTED_MODULE_2__["StorageService"]
      }, {
        type: _services_httpClient_service__WEBPACK_IMPORTED_MODULE_3__["HttpClientService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
      }];
    };

    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-root',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./app.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./app.component.scss */
      "./src/app/app.component.scss")).default]
    })], AppComponent);
    /***/
  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _services_httpClient_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./services/httpClient.service */
    "./src/app/services/httpClient.service.ts");
    /* harmony import */


    var _services_notification_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./services/notification.service */
    "./src/app/services/notification.service.ts");
    /* harmony import */


    var _services_storage_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./services/storage.service */
    "./src/app/services/storage.service.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var angular_notifier__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! angular-notifier */
    "./node_modules/angular-notifier/fesm2015/angular-notifier.js");
    /* harmony import */


    var _ngx_loading_bar_http_client__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @ngx-loading-bar/http-client */
    "./node_modules/@ngx-loading-bar/http-client/fesm2015/ngx-loading-bar-http-client.js");
    /* harmony import */


    var ng2_pdf_viewer__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ng2-pdf-viewer */
    "./node_modules/ng2-pdf-viewer/fesm2015/ng2-pdf-viewer.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _stub_stub_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./stub/stub.component */
    "./src/app/stub/stub.component.ts");
    /* harmony import */


    var _book_view_book_view_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./book-view/book-view.component */
    "./src/app/book-view/book-view.component.ts");
    /* harmony import */


    var _home_home_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ./home/home.component */
    "./src/app/home/home.component.ts");

    var customNotifierOptions = {
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

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
      declarations: [_app_component__WEBPACK_IMPORTED_MODULE_12__["AppComponent"], _stub_stub_component__WEBPACK_IMPORTED_MODULE_13__["StubComponent"], _book_view_book_view_component__WEBPACK_IMPORTED_MODULE_14__["BookViewComponent"], _home_home_component__WEBPACK_IMPORTED_MODULE_15__["HomeComponent"]],
      imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_11__["AppRoutingModule"], angular_notifier__WEBPACK_IMPORTED_MODULE_7__["NotifierModule"].withConfig(customNotifierOptions), _ngx_loading_bar_http_client__WEBPACK_IMPORTED_MODULE_8__["LoadingBarHttpClientModule"], ng2_pdf_viewer__WEBPACK_IMPORTED_MODULE_9__["PdfViewerModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"]],
      providers: [_services_storage_service__WEBPACK_IMPORTED_MODULE_5__["StorageService"], _services_notification_service__WEBPACK_IMPORTED_MODULE_4__["NotificationService"], _services_httpClient_service__WEBPACK_IMPORTED_MODULE_3__["HttpClientService"]],
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_12__["AppComponent"]]
    })], AppModule);
    /***/
  },

  /***/
  "./src/app/book-view/book-view.component.scss":
  /*!****************************************************!*\
    !*** ./src/app/book-view/book-view.component.scss ***!
    \****************************************************/

  /*! exports provided: default */

  /***/
  function srcAppBookViewBookViewComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "pdf-viewer {\n  display: block;\n  height: 100vh;\n}\n\n.lds-hourglass {\n  display: inline-block;\n  position: relative;\n  width: 80px;\n  height: 80px;\n}\n\n.lds-hourglass:after {\n  content: \" \";\n  display: block;\n  border-radius: 50%;\n  width: 0;\n  height: 0;\n  margin: 8px;\n  box-sizing: border-box;\n  border: 32px solid #000;\n  border-color: #000 transparent #000 transparent;\n  -webkit-animation: lds-hourglass 1.2s infinite;\n          animation: lds-hourglass 1.2s infinite;\n}\n\n@-webkit-keyframes lds-hourglass {\n  0% {\n    -webkit-transform: rotate(0);\n            transform: rotate(0);\n    -webkit-animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);\n            animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);\n  }\n  50% {\n    -webkit-transform: rotate(900deg);\n            transform: rotate(900deg);\n    -webkit-animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);\n            animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);\n  }\n  100% {\n    -webkit-transform: rotate(1800deg);\n            transform: rotate(1800deg);\n  }\n}\n\n@keyframes lds-hourglass {\n  0% {\n    -webkit-transform: rotate(0);\n            transform: rotate(0);\n    -webkit-animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);\n            animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);\n  }\n  50% {\n    -webkit-transform: rotate(900deg);\n            transform: rotate(900deg);\n    -webkit-animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);\n            animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);\n  }\n  100% {\n    -webkit-transform: rotate(1800deg);\n            transform: rotate(1800deg);\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYm9vay12aWV3L0M6XFxVc2Vyc1xccmVpZGtcXERvY3VtZW50c1xccmVwb3NcXGtlbm5ldGhzaXRlL3NyY1xcYXBwXFxib29rLXZpZXdcXGJvb2stdmlldy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvYm9vay12aWV3L2Jvb2stdmlldy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGNBQUE7RUFDQSxhQUFBO0FDQ0Y7O0FEQ0E7RUFDRSxxQkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUNFRjs7QURDQTtFQUNFLFlBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0VBQ0EsK0NBQUE7RUFDQSw4Q0FBQTtVQUFBLHNDQUFBO0FDRUY7O0FEQ0E7RUFDRTtJQUNFLDRCQUFBO1lBQUEsb0JBQUE7SUFDQSx5RUFBQTtZQUFBLGlFQUFBO0VDRUY7RURDQTtJQUNFLGlDQUFBO1lBQUEseUJBQUE7SUFDQSxzRUFBQTtZQUFBLDhEQUFBO0VDQ0Y7RURFQTtJQUNFLGtDQUFBO1lBQUEsMEJBQUE7RUNBRjtBQUNGOztBRGJBO0VBQ0U7SUFDRSw0QkFBQTtZQUFBLG9CQUFBO0lBQ0EseUVBQUE7WUFBQSxpRUFBQTtFQ0VGO0VEQ0E7SUFDRSxpQ0FBQTtZQUFBLHlCQUFBO0lBQ0Esc0VBQUE7WUFBQSw4REFBQTtFQ0NGO0VERUE7SUFDRSxrQ0FBQTtZQUFBLDBCQUFBO0VDQUY7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2Jvb2stdmlldy9ib29rLXZpZXcuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJwZGYtdmlld2VyIHtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBoZWlnaHQ6IDEwMHZoO1xyXG59XHJcbi5sZHMtaG91cmdsYXNzIHtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHdpZHRoOiA4MHB4O1xyXG4gIGhlaWdodDogODBweDtcclxufVxyXG5cclxuLmxkcy1ob3VyZ2xhc3M6YWZ0ZXIge1xyXG4gIGNvbnRlbnQ6IFwiIFwiO1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICB3aWR0aDogMDtcclxuICBoZWlnaHQ6IDA7XHJcbiAgbWFyZ2luOiA4cHg7XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICBib3JkZXI6IDMycHggc29saWQgIzAwMDtcclxuICBib3JkZXItY29sb3I6ICMwMDAgdHJhbnNwYXJlbnQgIzAwMCB0cmFuc3BhcmVudDtcclxuICBhbmltYXRpb246IGxkcy1ob3VyZ2xhc3MgMS4ycyBpbmZpbml0ZTtcclxufVxyXG5cclxuQGtleWZyYW1lcyBsZHMtaG91cmdsYXNzIHtcclxuICAwJSB7XHJcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwKTtcclxuICAgIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjU1LCAwLjA1NSwgMC42NzUsIDAuMTkpO1xyXG4gIH1cclxuXHJcbiAgNTAlIHtcclxuICAgIHRyYW5zZm9ybTogcm90YXRlKDkwMGRlZyk7XHJcbiAgICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC4yMTUsIDAuNjEsIDAuMzU1LCAxKTtcclxuICB9XHJcblxyXG4gIDEwMCUge1xyXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMTgwMGRlZyk7XHJcbiAgfVxyXG59XHJcbiIsInBkZi12aWV3ZXIge1xuICBkaXNwbGF5OiBibG9jaztcbiAgaGVpZ2h0OiAxMDB2aDtcbn1cblxuLmxkcy1ob3VyZ2xhc3Mge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgd2lkdGg6IDgwcHg7XG4gIGhlaWdodDogODBweDtcbn1cblxuLmxkcy1ob3VyZ2xhc3M6YWZ0ZXIge1xuICBjb250ZW50OiBcIiBcIjtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgd2lkdGg6IDA7XG4gIGhlaWdodDogMDtcbiAgbWFyZ2luOiA4cHg7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIGJvcmRlcjogMzJweCBzb2xpZCAjMDAwO1xuICBib3JkZXItY29sb3I6ICMwMDAgdHJhbnNwYXJlbnQgIzAwMCB0cmFuc3BhcmVudDtcbiAgYW5pbWF0aW9uOiBsZHMtaG91cmdsYXNzIDEuMnMgaW5maW5pdGU7XG59XG5cbkBrZXlmcmFtZXMgbGRzLWhvdXJnbGFzcyB7XG4gIDAlIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwKTtcbiAgICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC41NSwgMC4wNTUsIDAuNjc1LCAwLjE5KTtcbiAgfVxuICA1MCUge1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDkwMGRlZyk7XG4gICAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuMjE1LCAwLjYxLCAwLjM1NSwgMSk7XG4gIH1cbiAgMTAwJSB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMTgwMGRlZyk7XG4gIH1cbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/book-view/book-view.component.ts":
  /*!**************************************************!*\
    !*** ./src/app/book-view/book-view.component.ts ***!
    \**************************************************/

  /*! exports provided: BookViewComponent */

  /***/
  function srcAppBookViewBookViewComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BookViewComponent", function () {
      return BookViewComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _services_storage_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../services/storage.service */
    "./src/app/services/storage.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var ng2_pdf_viewer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ng2-pdf-viewer */
    "./node_modules/ng2-pdf-viewer/fesm2015/ng2-pdf-viewer.js");

    var BookViewComponent =
    /*#__PURE__*/
    function () {
      function BookViewComponent(storageService, route, location) {
        _classCallCheck(this, BookViewComponent);

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
        this.numberOfPages = 25;
        this.loadingBook = true;
        this.mobileShow = false;
        this.bookURLname = '';
      }

      _createClass(BookViewComponent, [{
        key: "search",
        value: function search() {
          var stringToSearch = this.stringToSearch;
          this.pdfComponent.pdfFindController.executeCommand('find', {
            caseSensitive: false,
            findPrevious: undefined,
            highlightAll: true,
            phraseSearch: true,
            query: stringToSearch
          });
        }
      }, {
        key: "nextPrevPage",
        value: function nextPrevPage(num) {
          if (this.pdfPage + num > 0 && this.pdfPage + num <= this.numberOfPages) {
            this.pdfPage += num;
          }
        }
      }, {
        key: "pdfInfo",
        value: function pdfInfo(event) {
          this.numberOfPages = event.numPages;
          this.loadingBook = false;
        }
      }, {
        key: "downloadedBook",
        value: function downloadedBook() {
          ga('send', 'event', 'book-download', this.pdfName);
        }
      }, {
        key: "getPdfInfoFromRoute",
        value: function getPdfInfoFromRoute() {
          var _this2 = this;

          if (this.bookInfos && this.bookInfos.length && this.pdfName && this.pdfPage) {
            var book = this.bookInfos.find(function (val) {
              return val.bookTitle === _this2.pdfName;
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

            if (book.lastModifiedDate) {
              this.pdfUpdated = book.lastModifiedDate;
            }

            this.regIntervalSub = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["interval"])(500).subscribe(function () {
              if (_this2.storageService.getPageForBook(book.bookTitle) !== _this2.pdfPage.toString()) {
                ga('set', 'page', "/book/".concat(book.bookTitle.replace(/\s/g, '-'), "/").concat(_this2.pdfPage.toString()));
                ga('send', 'pageview');
              }

              _this2.storageService.setPageForBook(book.bookTitle, _this2.pdfPage.toString());

              _this2.location.go("/book/".concat(book.bookTitle.replace(/\s/g, '-'), "/").concat(_this2.pdfPage.toString()));
            });
          }
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this3 = this;

          this.bookInfos = this.storageService.booksToInfo;
          this.bookInfoSub = this.storageService.getupdatedBooksInfo().subscribe(function (out) {
            _this3.bookInfos = out;

            _this3.getPdfInfoFromRoute();
          });
          this.routerSub = this.route.url.subscribe(function (out) {
            if (out.length === 3) {
              _this3.pdfName = out[1].path.replace(/\-/g, ' ');
              _this3.bookURLname = out[1].path;
              _this3.pdfPage = Number(out[2].path);
              _this3.loadingBookSource = "/assets/".concat(out[1].path).concat(_this3.pdfPage - 1, ".pdf");
              ga('set', 'page', "/book/".concat(_this3.pdfName, "/").concat(_this3.pdfPage));
              ga('send', 'pageview');

              _this3.storageService.setPageForBook(_this3.pdfName, _this3.pdfPage.toString());

              _this3.getPdfInfoFromRoute();
            }
          });
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
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
      }]);

      return BookViewComponent;
    }();

    BookViewComponent.ctorParameters = function () {
      return [{
        type: _services_storage_service__WEBPACK_IMPORTED_MODULE_4__["StorageService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]
      }, {
        type: _angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(ng2_pdf_viewer__WEBPACK_IMPORTED_MODULE_6__["PdfViewerComponent"], {
      static: false
    })], BookViewComponent.prototype, "pdfComponent", void 0);
    BookViewComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-book-view',
      providers: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"], {
        provide: _angular_common__WEBPACK_IMPORTED_MODULE_3__["LocationStrategy"],
        useClass: _angular_common__WEBPACK_IMPORTED_MODULE_3__["PathLocationStrategy"]
      }],
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./book-view.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/book-view/book-view.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./book-view.component.scss */
      "./src/app/book-view/book-view.component.scss")).default]
    })], BookViewComponent);
    /***/
  },

  /***/
  "./src/app/config/resource.config.ts":
  /*!*******************************************!*\
    !*** ./src/app/config/resource.config.ts ***!
    \*******************************************/

  /*! exports provided: ResourceConfig */

  /***/
  function srcAppConfigResourceConfigTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ResourceConfig", function () {
      return ResourceConfig;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    var ResourceConfig = {
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
    /***/
  },

  /***/
  "./src/app/home/home.component.scss":
  /*!******************************************!*\
    !*** ./src/app/home/home.component.scss ***!
    \******************************************/

  /*! exports provided: default */

  /***/
  function srcAppHomeHomeComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/home/home.component.ts":
  /*!****************************************!*\
    !*** ./src/app/home/home.component.ts ***!
    \****************************************/

  /*! exports provided: HomeComponent */

  /***/
  function srcAppHomeHomeComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomeComponent", function () {
      return HomeComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _services_storage_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../services/storage.service */
    "./src/app/services/storage.service.ts");

    var HomeComponent =
    /*#__PURE__*/
    function () {
      function HomeComponent(storageService) {
        _classCallCheck(this, HomeComponent);

        this.storageService = storageService;
        this.bookInfos = [];
      }

      _createClass(HomeComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this4 = this;

          this.bookInfos = this.storageService.booksToInfo;
          this.updateBookInfo = this.storageService.getupdatedBooksInfo().subscribe(function (out) {
            _this4.bookInfos = out;
          });
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          if (this.updateBookInfo) {
            this.updateBookInfo.unsubscribe();
          }
        }
      }]);

      return HomeComponent;
    }();

    HomeComponent.ctorParameters = function () {
      return [{
        type: _services_storage_service__WEBPACK_IMPORTED_MODULE_2__["StorageService"]
      }];
    };

    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-home',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./home.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./home.component.scss */
      "./src/app/home/home.component.scss")).default]
    })], HomeComponent);
    /***/
  },

  /***/
  "./src/app/services/httpClient.service.ts":
  /*!************************************************!*\
    !*** ./src/app/services/httpClient.service.ts ***!
    \************************************************/

  /*! exports provided: HttpClientService, Error */

  /***/
  function srcAppServicesHttpClientServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HttpClientService", function () {
      return HttpClientService;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Error", function () {
      return Error;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _config_resource_config__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../config/resource.config */
    "./src/app/config/resource.config.ts");
    /* harmony import */


    var _notification_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./notification.service */
    "./src/app/services/notification.service.ts");
    /* harmony import */


    var _storage_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./storage.service */
    "./src/app/services/storage.service.ts");

    var HttpClientService =
    /*#__PURE__*/
    function () {
      function HttpClientService(storageService, http, notificationService) {
        _classCallCheck(this, HttpClientService);

        this.storageService = storageService;
        this.http = http;
        this.notificationService = notificationService;
        this.sessionKey = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](null);
        this.showError = true;
      }

      _createClass(HttpClientService, [{
        key: "setSessionKey",
        value: function setSessionKey(value) {
          this.sessionKey.next(value);
        }
      }, {
        key: "post",
        value: function post(serviceUrl) {
          var _this5 = this;

          var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
          var yardDates = arguments.length > 2 ? arguments[2] : undefined;
          var block = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : true;
          var version = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : '';
          var contentType = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : 1;
          var isSecured = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : true;
          var url = _environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].bookLocation + version + serviceUrl;

          if (!this.storageService.currentlyRequestingUrl[url] || !block) {
            this.storageService.currentlyRequestingUrl[url] = true;
            return this.http.post(url, yardDates).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) {
              _this5.storageService.currentlyRequestingUrl[url] = false;
              return res;
            })).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (err) {
              _this5.storageService.currentlyRequestingUrl[url] = false;
              return _this5.handleError(err);
            }));
          } else {
            return null;
          }
        }
      }, {
        key: "get",
        value: function get(serviceUrl) {
          var _this6 = this;

          var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
          var version = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';
          var absolute = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
          var url = _environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].bookLocation + version + serviceUrl;

          if (absolute) {
            url = serviceUrl;
          }

          if (!this.storageService.currentlyRequestingUrl[url]) {
            this.storageService.currentlyRequestingUrl[url] = true;
            return this.http.get(url).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) {
              _this6.storageService.currentlyRequestingUrl[url] = false;
              return res;
            })).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (err) {
              _this6.storageService.currentlyRequestingUrl[url] = false;
              return _this6.handleError(err);
            }));
          } else {
            return null;
          }
        }
      }, {
        key: "handleError",
        value: function handleError(error) {
          var _this7 = this;

          if (!this.showError) {
            return;
          } else {
            this.showError = false;
            Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["interval"])(1000).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1)).subscribe(function (out) {
              _this7.showError = true;
            });
          }

          var erros = [];
          var errorMessage = error && error.error && error.error.message ? error.error.message : null;

          switch (error.status) {
            case 0:
              this.notificationService.showError(errorMessage ? "" : _config_resource_config__WEBPACK_IMPORTED_MODULE_6__["ResourceConfig"].StatusUnreachable.desc, errorMessage ? errorMessage : _config_resource_config__WEBPACK_IMPORTED_MODULE_6__["ResourceConfig"].StatusUnreachable.title);
              break;

            case 400:
              this.notificationService.showError(errorMessage ? "" : _config_resource_config__WEBPACK_IMPORTED_MODULE_6__["ResourceConfig"].Status400.desc, errorMessage ? errorMessage : _config_resource_config__WEBPACK_IMPORTED_MODULE_6__["ResourceConfig"].Status400.title);
              break;

            case 401:
              this.storageService.error401Called = true;
              setTimeout(function () {
                _this7.storageService.error401Called = false;
              }, 3000);
              this.notificationService.showError(errorMessage ? "" : _config_resource_config__WEBPACK_IMPORTED_MODULE_6__["ResourceConfig"].Status401.desc, errorMessage ? errorMessage : _config_resource_config__WEBPACK_IMPORTED_MODULE_6__["ResourceConfig"].Status401.title);
              break;

            case 440:
              this.notificationService.showError(errorMessage ? "" : _config_resource_config__WEBPACK_IMPORTED_MODULE_6__["ResourceConfig"].Status440.desc, errorMessage ? errorMessage : _config_resource_config__WEBPACK_IMPORTED_MODULE_6__["ResourceConfig"].Status440.title);
              break;

            case 500:
              this.notificationService.showError(errorMessage ? "" : _config_resource_config__WEBPACK_IMPORTED_MODULE_6__["ResourceConfig"].Status500.desc, errorMessage ? errorMessage : _config_resource_config__WEBPACK_IMPORTED_MODULE_6__["ResourceConfig"].Status500.title);
              break;

            case 503:
              this.notificationService.showError(errorMessage ? "" : _config_resource_config__WEBPACK_IMPORTED_MODULE_6__["ResourceConfig"].Status503.desc, errorMessage ? errorMessage : _config_resource_config__WEBPACK_IMPORTED_MODULE_6__["ResourceConfig"].Status503.title);
              break;

            default:
              this.notificationService.showError('Error', 'Something went wrong');
              break;
          }

          return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(new Error(error.status, ''));
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {}
      }]);

      return HttpClientService;
    }();

    HttpClientService.ctorParameters = function () {
      return [{
        type: _storage_service__WEBPACK_IMPORTED_MODULE_8__["StorageService"]
      }, {
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]
      }, {
        type: _notification_service__WEBPACK_IMPORTED_MODULE_7__["NotificationService"]
      }];
    };

    HttpClientService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()], HttpClientService);

    var Error = function Error(key, description) {
      _classCallCheck(this, Error);

      this.errors = [];
      this.key = key;
      this.description = description;
    };
    /***/

  },

  /***/
  "./src/app/services/notification.service.ts":
  /*!**************************************************!*\
    !*** ./src/app/services/notification.service.ts ***!
    \**************************************************/

  /*! exports provided: NotificationService */

  /***/
  function srcAppServicesNotificationServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NotificationService", function () {
      return NotificationService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var angular_notifier__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! angular-notifier */
    "./node_modules/angular-notifier/fesm2015/angular-notifier.js");

    var NotificationService =
    /*#__PURE__*/
    function () {
      function NotificationService(notifier, componentFactoryResolver, ngZone, appRef) {
        _classCallCheck(this, NotificationService);

        this.componentFactoryResolver = componentFactoryResolver;
        this.ngZone = ngZone;
        this.appRef = appRef;
        this.notifier = notifier;
      }
      /**
      * Hide oldest notification
      */


      _createClass(NotificationService, [{
        key: "hideOldestNotification",
        value: function hideOldestNotification() {
          this.notifier.hideOldest();
        }
      }, {
        key: "showNotification",
        value: function showNotification() {
          this.notifier.notify('error', 'This is not good!');
        }
      }, {
        key: "showWarning",
        value: function showWarning(message, title) {
          this.notifier.notify('warning', title + ": " + message);
        }
      }, {
        key: "showError",
        value: function showError(message, title) {
          console.log('->', message);
          this.notifier.notify('error', title + ": " + message);
        }
      }, {
        key: "showSuccess",
        value: function showSuccess(message, title) {
          this.notifier.notify('success', title + ": " + message);
        }
      }, {
        key: "showInfo",
        value: function showInfo(message, title) {
          this.notifier.notify('info', title + ": " + message);
        }
      }]);

      return NotificationService;
    }();

    NotificationService.ctorParameters = function () {
      return [{
        type: angular_notifier__WEBPACK_IMPORTED_MODULE_2__["NotifierService"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ComponentFactoryResolver"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ApplicationRef"]
      }];
    };

    NotificationService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()], NotificationService);
    /***/
  },

  /***/
  "./src/app/services/storage.service.ts":
  /*!*********************************************!*\
    !*** ./src/app/services/storage.service.ts ***!
    \*********************************************/

  /*! exports provided: StorageService */

  /***/
  function srcAppServicesStorageServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "StorageService", function () {
      return StorageService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");

    var StorageService =
    /*#__PURE__*/
    function () {
      function StorageService() {
        _classCallCheck(this, StorageService);

        this.currentlyRequestingUrl = {};
        this.error401Called = false;
        this.updatedBooksInfo = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.booksToInfo = [{
          bookTitle: 'One Variable Advanced Calculus',
          bookUrl: 'https://kennethbooks.s3.us-east-2.amazonaws.com/books/AdvancedCalculusSV/AdvancedCalculusSV.pdf',
          lastModifiedDate: ''
        }, {
          bookTitle: 'Real and Abstract Analysis',
          bookUrl: 'https://kennethbooks.s3.us-east-2.amazonaws.com/books/Analysis/Analysis.pdf',
          lastModifiedDate: ''
        }, {
          bookTitle: 'Calculus of One and Many Variables',
          bookUrl: 'https://kennethbooks.s3.us-east-2.amazonaws.com/books/CalculusOneAndManyVariables/CalculusOneAndManyVariables.pdf',
          lastModifiedDate: ''
        }, {
          bookTitle: 'Calculus of Real and Complex Variables',
          bookUrl: 'https://kennethbooks.s3.us-east-2.amazonaws.com/books/ComplexAnalysis/ComplexAnalysis.pdf',
          lastModifiedDate: ''
        }, {
          bookTitle: 'Elementary Linear Algebra',
          bookUrl: 'https://kennethbooks.s3.us-east-2.amazonaws.com/books/ElementaryLinearAlgebra/ElementaryLinearAlgebra.pdf',
          lastModifiedDate: ''
        }, {
          bookTitle: 'Engineering Math',
          bookUrl: 'https://kennethbooks.s3.us-east-2.amazonaws.com/books/EngineeringMath/EngineeringMath.pdf',
          lastModifiedDate: ''
        }, {
          bookTitle: 'Linear Algebra And Analysis',
          bookUrl: 'https://kennethbooks.s3.us-east-2.amazonaws.com/books/LinearAlgebraAndAnalysis/LinearAlgebraAndAnalysis.pdf',
          lastModifiedDate: ''
        }, {
          bookTitle: 'Linear Algebra, Theory And Applications',
          bookUrl: 'https://kennethbooks.s3.us-east-2.amazonaws.com/books/Linearalgebra/Linearalgebra.pdf',
          lastModifiedDate: ''
        }, {
          bookTitle: 'Topics In Analysis',
          bookUrl: 'https://kennethbooks.s3.us-east-2.amazonaws.com/books/TopicsInAnalysis/TopicsInAnalysis.pdf',
          lastModifiedDate: ''
        }];
      }

      _createClass(StorageService, [{
        key: "setAgreedToCookies",
        value: function setAgreedToCookies() {
          localStorage.setItem('cookies', '1');
        }
      }, {
        key: "getAgreedToCookies",
        value: function getAgreedToCookies() {
          var agreed = localStorage.getItem('cookies');

          if (agreed !== null) {
            return true;
          } else {
            return false;
          }
        }
      }, {
        key: "getupdatedBooksInfo",
        value: function getupdatedBooksInfo() {
          return this.updatedBooksInfo;
        }
      }, {
        key: "setupdatedBooksInfo",
        value: function setupdatedBooksInfo(nextBookInfo) {
          this.booksToInfo = nextBookInfo;
          this.updatedBooksInfo.next(nextBookInfo);
        }
      }, {
        key: "getPageForBook",
        value: function getPageForBook(book) {
          var out = localStorage.getItem(book);

          if (out !== null) {
            return out;
          } else {
            return '1';
          }
        }
      }, {
        key: "setPageForBook",
        value: function setPageForBook(book, page) {
          localStorage.setItem(book, page);
        }
      }]);

      return StorageService;
    }();

    StorageService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()], StorageService);
    ;
    /***/
  },

  /***/
  "./src/app/stub/stub.component.scss":
  /*!******************************************!*\
    !*** ./src/app/stub/stub.component.scss ***!
    \******************************************/

  /*! exports provided: default */

  /***/
  function srcAppStubStubComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".book-stub {\n  position: relative;\n  border: solid grey 1px;\n  background-color: #e6e6e6;\n  cursor: pointer;\n}\n\n.draw-border {\n  box-shadow: inset 0 0 0 4px black;\n  color: black;\n  -webkit-transition: color 0.5s 0.1666666667s;\n  transition: color 0.5s 0.1666666667s;\n  position: relative;\n  max-width: 100%;\n}\n\n.draw-border::before, .draw-border::after {\n  border: 0 solid transparent;\n  box-sizing: border-box;\n  content: \"\";\n  pointer-events: none;\n  position: absolute;\n  width: 0;\n  height: 0;\n  bottom: 0;\n  right: 0;\n}\n\n.draw-border::before {\n  border-bottom-width: 4px;\n  border-left-width: 4px;\n}\n\n.draw-border::after {\n  border-top-width: 4px;\n  border-right-width: 4px;\n}\n\n.draw-border:hover {\n  color: #8798ec;\n}\n\n.draw-border:hover::before, .draw-border:hover::after {\n  border-color: #8798ec;\n  -webkit-transition: border-color 0s, width 0.5s, height 0.5s;\n  transition: border-color 0s, width 0.5s, height 0.5s;\n  width: 100%;\n  height: 100%;\n}\n\n.draw-border:hover::before {\n  -webkit-transition-delay: 0s, 0s, 0.5s;\n          transition-delay: 0s, 0s, 0.5s;\n}\n\n.draw-border:hover::after {\n  -webkit-transition-delay: 0s, 0.5s, 0s;\n          transition-delay: 0s, 0.5s, 0s;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc3R1Yi9DOlxcVXNlcnNcXHJlaWRrXFxEb2N1bWVudHNcXHJlcG9zXFxrZW5uZXRoc2l0ZS9zcmNcXGFwcFxcc3R1Ylxcc3R1Yi5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvc3R1Yi9zdHViLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQUE7RUFDQSxzQkFBQTtFQUNBLHlCQUFBO0VBQ0EsZUFBQTtBQ0NGOztBRHlEQTtFQXRERSxpQ0FBQTtFQUNBLFlBc0Q0QjtFQXJENUIsNENBQUE7RUFBQSxvQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtBQ0NGOztBRENFO0VBRUUsMkJBQUE7RUFDQSxzQkFBQTtFQUNBLFdBQUE7RUFDQSxvQkFBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxTQUFBO0VBQ0EsUUFBQTtBQ0FKOztBREdFO0VBR0Usd0JBaUMwQztFQWhDMUMsc0JBZ0MwQztBQ25DOUM7O0FETUU7RUFHRSxxQkEwQjBDO0VBekIxQyx1QkF5QjBDO0FDL0I5Qzs7QURTRTtFQUNFLGNBcUJpQztBQzVCckM7O0FEU0k7RUFFRSxxQkFpQitCO0VBaEIvQiw0REFBQTtFQUFBLG9EQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUNSTjs7QURXSTtFQUNFLHNDQUFBO1VBQUEsOEJBQUE7QUNUTjs7QURZSTtFQUNFLHNDQUFBO1VBQUEsOEJBQUE7QUNWTiIsImZpbGUiOiJzcmMvYXBwL3N0dWIvc3R1Yi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5ib29rLXN0dWIge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBib3JkZXI6IHNvbGlkIGdyZXkgMXB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNlNmU2ZTY7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG5AbWl4aW4gYnRuLWJvcmRlci1kcmF3aW5nKCRjb2xvcjogYmxhY2ssICRob3ZlcjogYmxhY2ssICR3aWR0aDogMXB4LCAkdmVydGljYWw6IHRvcCwgJGhvcml6b250YWw6IGxlZnQsICRkdXJhdGlvbjogMC41cykge1xyXG4gIGJveC1zaGFkb3c6IGluc2V0IDAgMCAwICR3aWR0aCAkY29sb3I7XHJcbiAgY29sb3I6ICRjb2xvcjtcclxuICB0cmFuc2l0aW9uOiBjb2xvciAkZHVyYXRpb24gJGR1cmF0aW9uLzM7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIG1heC13aWR0aDoxMDAlO1xyXG5cclxuICAmOjpiZWZvcmUsXHJcbiAgJjo6YWZ0ZXIge1xyXG4gICAgYm9yZGVyOiAwIHNvbGlkIHRyYW5zcGFyZW50O1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIGNvbnRlbnQ6ICcnO1xyXG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB3aWR0aDogMDtcclxuICAgIGhlaWdodDogMDtcclxuICAgICN7JHZlcnRpY2FsfTogMDtcclxuICAgICN7JGhvcml6b250YWx9OiAwO1xyXG4gIH1cclxuXHJcbiAgJjo6YmVmb3JlIHtcclxuICAgICRoLXNpZGU6IGlmKCRob3Jpem9udGFsID09ICdsZWZ0JywgJ3JpZ2h0JywgJ2xlZnQnKTtcclxuXHJcbiAgICBib3JkZXItI3skdmVydGljYWx9LXdpZHRoOiAkd2lkdGg7XHJcbiAgICBib3JkZXItI3skaC1zaWRlfS13aWR0aDogJHdpZHRoO1xyXG4gIH1cclxuXHJcbiAgJjo6YWZ0ZXIge1xyXG4gICAgJHYtc2lkZTogaWYoJHZlcnRpY2FsID09ICd0b3AnLCAnYm90dG9tJywgJ3RvcCcpO1xyXG5cclxuICAgIGJvcmRlci0jeyR2LXNpZGV9LXdpZHRoOiAkd2lkdGg7XHJcbiAgICBib3JkZXItI3skaG9yaXpvbnRhbH0td2lkdGg6ICR3aWR0aDtcclxuICB9XHJcblxyXG4gICY6aG92ZXIge1xyXG4gICAgY29sb3I6ICRob3ZlcjtcclxuXHJcbiAgICAmOjpiZWZvcmUsXHJcbiAgICAmOjphZnRlciB7XHJcbiAgICAgIGJvcmRlci1jb2xvcjogJGhvdmVyO1xyXG4gICAgICB0cmFuc2l0aW9uOiBib3JkZXItY29sb3IgMHMsIHdpZHRoICRkdXJhdGlvbiwgaGVpZ2h0ICRkdXJhdGlvbjtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgIGhlaWdodDogMTAwJTtcclxuICAgIH1cclxuXHJcbiAgICAmOjpiZWZvcmUge1xyXG4gICAgICB0cmFuc2l0aW9uLWRlbGF5OiAwcywgMHMsICRkdXJhdGlvbjtcclxuICAgIH1cclxuXHJcbiAgICAmOjphZnRlciB7XHJcbiAgICAgIHRyYW5zaXRpb24tZGVsYXk6IDBzLCAkZHVyYXRpb24sIDBzO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuLmRyYXctYm9yZGVyIHtcclxuICBAaW5jbHVkZSBidG4tYm9yZGVyLWRyYXdpbmcoYmxhY2ssICM4Nzk4ZWMsIDRweCwgYm90dG9tLCByaWdodCk7XHJcbn1cclxuIiwiLmJvb2stc3R1YiB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgYm9yZGVyOiBzb2xpZCBncmV5IDFweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2U2ZTZlNjtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uZHJhdy1ib3JkZXIge1xuICBib3gtc2hhZG93OiBpbnNldCAwIDAgMCA0cHggYmxhY2s7XG4gIGNvbG9yOiBibGFjaztcbiAgdHJhbnNpdGlvbjogY29sb3IgMC41cyAwLjE2NjY2NjY2NjdzO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG1heC13aWR0aDogMTAwJTtcbn1cbi5kcmF3LWJvcmRlcjo6YmVmb3JlLCAuZHJhdy1ib3JkZXI6OmFmdGVyIHtcbiAgYm9yZGVyOiAwIHNvbGlkIHRyYW5zcGFyZW50O1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBjb250ZW50OiBcIlwiO1xuICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMDtcbiAgaGVpZ2h0OiAwO1xuICBib3R0b206IDA7XG4gIHJpZ2h0OiAwO1xufVxuLmRyYXctYm9yZGVyOjpiZWZvcmUge1xuICBib3JkZXItYm90dG9tLXdpZHRoOiA0cHg7XG4gIGJvcmRlci1sZWZ0LXdpZHRoOiA0cHg7XG59XG4uZHJhdy1ib3JkZXI6OmFmdGVyIHtcbiAgYm9yZGVyLXRvcC13aWR0aDogNHB4O1xuICBib3JkZXItcmlnaHQtd2lkdGg6IDRweDtcbn1cbi5kcmF3LWJvcmRlcjpob3ZlciB7XG4gIGNvbG9yOiAjODc5OGVjO1xufVxuLmRyYXctYm9yZGVyOmhvdmVyOjpiZWZvcmUsIC5kcmF3LWJvcmRlcjpob3Zlcjo6YWZ0ZXIge1xuICBib3JkZXItY29sb3I6ICM4Nzk4ZWM7XG4gIHRyYW5zaXRpb246IGJvcmRlci1jb2xvciAwcywgd2lkdGggMC41cywgaGVpZ2h0IDAuNXM7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG59XG4uZHJhdy1ib3JkZXI6aG92ZXI6OmJlZm9yZSB7XG4gIHRyYW5zaXRpb24tZGVsYXk6IDBzLCAwcywgMC41cztcbn1cbi5kcmF3LWJvcmRlcjpob3Zlcjo6YWZ0ZXIge1xuICB0cmFuc2l0aW9uLWRlbGF5OiAwcywgMC41cywgMHM7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/stub/stub.component.ts":
  /*!****************************************!*\
    !*** ./src/app/stub/stub.component.ts ***!
    \****************************************/

  /*! exports provided: StubComponent */

  /***/
  function srcAppStubStubComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "StubComponent", function () {
      return StubComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _services_storage_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../services/storage.service */
    "./src/app/services/storage.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var StubComponent =
    /*#__PURE__*/
    function () {
      function StubComponent(storageService, router) {
        _classCallCheck(this, StubComponent);

        this.storageService = storageService;
        this.router = router;
        this.bookIndex = -1;
        this.BookInfo = null;
        this.bookParsed = '';
        this.pageNum = 1;
      }

      _createClass(StubComponent, [{
        key: "reroute",
        value: function reroute(title) {
          var getPage = this.storageService.getPageForBook(title);
          this.router.navigateByUrl("/book/".concat(title.replace(/\s/g, '-'), "/").concat(getPage));
        }
      }, {
        key: "downloadedBook",
        value: function downloadedBook() {
          console.log(this.BookInfo.bookTitle);
          ga('send', 'event', 'book-download', this.BookInfo.bookTitle);
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          if (this.BookInfo && this.BookInfo.bookTitle) {
            var tempPageNum = this.storageService.getPageForBook(this.BookInfo.bookTitle);
            this.bookParsed = this.BookInfo.bookTitle.replace(/\s/g, '-');

            if (tempPageNum) {
              this.pageNum = Number(tempPageNum);
            }
          }
        }
      }]);

      return StubComponent;
    }();

    StubComponent.ctorParameters = function () {
      return [{
        type: _services_storage_service__WEBPACK_IMPORTED_MODULE_2__["StorageService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], StubComponent.prototype, "bookIndex", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], StubComponent.prototype, "BookInfo", void 0);
    StubComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-stub',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./stub.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/stub/stub.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./stub.component.scss */
      "./src/app/stub/stub.component.scss")).default]
    })], StubComponent);
    /***/
  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js"); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false,
      bookLocation: 'https://kennethbooks.s3.us-east-2.amazonaws.com/books/'
    };
    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/platform-browser-dynamic */
    "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
    }

    Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"]).catch(function (err) {
      return console.error(err);
    });
    /***/
  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! C:\Users\reidk\Documents\repos\kennethsite\src\main.ts */
    "./src/main.ts");
    /***/
  },

  /***/
  1:
  /*!**********************!*\
    !*** zlib (ignored) ***!
    \**********************/

  /*! no static exports found */

  /***/
  function _(module, exports) {
    /* (ignored) */

    /***/
  },

  /***/
  2:
  /*!********************!*\
    !*** fs (ignored) ***!
    \********************/

  /*! no static exports found */

  /***/
  function _(module, exports) {
    /* (ignored) */

    /***/
  },

  /***/
  3:
  /*!**********************!*\
    !*** http (ignored) ***!
    \**********************/

  /*! no static exports found */

  /***/
  function _(module, exports) {
    /* (ignored) */

    /***/
  },

  /***/
  4:
  /*!***********************!*\
    !*** https (ignored) ***!
    \***********************/

  /*! no static exports found */

  /***/
  function _(module, exports) {
    /* (ignored) */

    /***/
  },

  /***/
  5:
  /*!*********************!*\
    !*** url (ignored) ***!
    \*********************/

  /*! no static exports found */

  /***/
  function _(module, exports) {
    /* (ignored) */

    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map