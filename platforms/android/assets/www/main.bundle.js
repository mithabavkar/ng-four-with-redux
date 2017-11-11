webpackJsonp(["main"],{

/***/ "../../../../../src lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	return new Promise(function(resolve, reject) { reject(new Error("Cannot find module '" + req + "'.")); });
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src lazy recursive";

/***/ }),

/***/ "../../../../../src/app/accounts/current-account/current-account.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row spacer-left-right-15px\">\n  <div class=\"col spacer-15px main-container-box-shadow\">\n    <button type=\"button\" \n      class=\"btn btn-lg btn-block btn-primary toggle-card-header {{isCollapsed ? 'primary-bg-color' : 'transparent-bg-color'}}\" \n      (click)=\"isCollapsed = !isCollapsed\"\n      [attr.aria-expanded]=\"!isCollapsed\" \n      aria-controls=\"collapseExample\">\n      <div class=\"row\">\n        <div class=\"col-1 rupee-style\"><i class=\"fa fa-inr\"></i></div>\n        <div class=\"col-10 title-account\">Current Account</div>\n        <div class=\"col-1 arrow-style\"><i class=\"{{isCollapsed ? 'fa fa-angle-right' : 'fa fa-angle-down'}}\"></i></div>\n      </div>\n    </button>\n    <div id=\"collapseExample\" [ngbCollapse]=\"isCollapsed\">\n      <div class=\"card\">\n        <div class=\"card-body\">\n          <div class=\"row account-info-style\" style=\"margin:0px;\">\n            <div class=\"col-11 account-detail-info\">You do not have any Current Account.</div>\n            <div class=\"col-1 arrow-style\" style=\"right: -10px;\"><i class=\"fa fa-angle-right\"></i></div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/accounts/current-account/current-account.component.less":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".spacer-15px {\n  margin: 15px;\n}\n.spacer-left-right-15px {\n  padding: 0 15px;\n}\n.toggle-card-header {\n  border-color: #32465A;\n  padding: 6px 12px;\n  border-radius: 2px;\n}\n.main-container-box-shadow {\n  box-shadow: 0px 3px 5px 0px #cccaca;\n}\n.title-account {\n  font-size: 16px;\n  font-weight: bold;\n}\n.rupee-style {\n  font-size: 16px;\n  left: 5px;\n}\n.arrow-style {\n  font-size: 16px;\n  right: 5px;\n  top: 3px;\n}\n.primary-bg-color {\n  background-color: #32465A;\n  border-color: #32465A;\n  color: #fff;\n}\n.transparent-bg-color {\n  background-color: #fff;\n  border-color: #fff;\n  color: #32465A;\n}\n.card {\n  border-radius: 0;\n  border: transparent;\n  height: 40px;\n}\n.card-body {\n  padding: 0 5px;\n}\n.account-info-style {\n  margin: 0px;\n  top: 5px;\n  position: relative;\n}\n.account-number-style {\n  left: 6px;\n  font-size: 16px;\n  font-weight: bold;\n}\n.account-detail-info {\n  font-size: 13px;\n  top: 5px;\n  left: 5px;\n}\n.btn-primary:focus {\n  box-shadow: none;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/accounts/current-account/current-account.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CurrentAccountComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CurrentAccountComponent = (function () {
    function CurrentAccountComponent() {
        this.isCollapsed = true;
    }
    CurrentAccountComponent.prototype.ngOnInit = function () {
    };
    return CurrentAccountComponent;
}());
CurrentAccountComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'current-account',
        template: __webpack_require__("../../../../../src/app/accounts/current-account/current-account.component.html"),
        styles: [__webpack_require__("../../../../../src/app/accounts/current-account/current-account.component.less")]
    }),
    __metadata("design:paramtypes", [])
], CurrentAccountComponent);

//# sourceMappingURL=D:/Creativity/ng-four/ngCordova/src/current-account.component.js.map

/***/ }),

/***/ "../../../../../src/app/accounts/saving-account/saving-account.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row spacer-left-right-15px\">\n  <div class=\"col spacer-15px main-container-box-shadow\">\n    <button type=\"button\" \n      class=\"btn btn-lg btn-block btn-primary toggle-card-header {{isCollapsed ? 'primary-bg-color' : 'transparent-bg-color'}}\" \n      (click)=\"isCollapsed = !isCollapsed\"\n      [attr.aria-expanded]=\"!isCollapsed\" \n      aria-controls=\"collapseExample\">\n      <div class=\"row\">\n        <div class=\"col-1 rupee-style\"><i class=\"fa fa-inr\"></i></div>\n        <div class=\"col-10 title-account\">Savings Account</div>\n        <div class=\"col-1 arrow-style\"><i class=\"{{isCollapsed ? 'fa fa-angle-right' : 'fa fa-angle-down'}}\"></i></div>\n      </div>\n    </button>\n    <div id=\"collapseExample\" [ngbCollapse]=\"isCollapsed\">\n      <div class=\"card\">\n        <div class=\"card-body\">\n          <div class=\"row account-info-style\" style=\"margin:0px;\">\n            <div class=\"col-11 account-number-style\">1234567890</div>\n            <div class=\"col-1 arrow-style\" style=\"right: -10px;\"><i class=\"fa fa-angle-right\"></i></div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/accounts/saving-account/saving-account.component.less":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".spacer-15px {\n  margin: 15px;\n}\n.spacer-left-right-15px {\n  padding: 0 15px;\n}\n.toggle-card-header {\n  border-color: #32465A;\n  padding: 6px 12px;\n  border-radius: 2px;\n}\n.main-container-box-shadow {\n  box-shadow: 0px 3px 5px 0px #cccaca;\n}\n.title-account {\n  font-size: 16px;\n  font-weight: bold;\n}\n.rupee-style {\n  font-size: 16px;\n  left: 5px;\n}\n.arrow-style {\n  font-size: 16px;\n  right: 5px;\n  top: 3px;\n}\n.primary-bg-color {\n  background-color: #32465A;\n  border-color: #32465A;\n  color: #fff;\n}\n.transparent-bg-color {\n  background-color: #fff;\n  border-color: #fff;\n  color: #32465A;\n}\n.card {\n  border-radius: 0;\n  border: transparent;\n  height: 40px;\n}\n.card-body {\n  padding: 0 5px;\n}\n.account-info-style {\n  margin: 0px;\n  top: 5px;\n  position: relative;\n}\n.account-number-style {\n  left: 6px;\n  font-size: 16px;\n  font-weight: bold;\n}\n.btn-primary:focus {\n  box-shadow: none;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/accounts/saving-account/saving-account.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SavingAccountComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SavingAccountComponent = (function () {
    function SavingAccountComponent() {
        this.isCollapsed = false;
    }
    SavingAccountComponent.prototype.ngOnInit = function () {
    };
    return SavingAccountComponent;
}());
SavingAccountComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'saving-account',
        template: __webpack_require__("../../../../../src/app/accounts/saving-account/saving-account.component.html"),
        styles: [__webpack_require__("../../../../../src/app/accounts/saving-account/saving-account.component.less")]
    }),
    __metadata("design:paramtypes", [])
], SavingAccountComponent);

//# sourceMappingURL=D:/Creativity/ng-four/ngCordova/src/saving-account.component.js.map

/***/ }),

/***/ "../../../../../src/app/actions/image-capture-action.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CAPTURE_PICTURES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return captureImageAction; });
var CAPTURE_PICTURES = '[Side-bar] Camera Action';
var captureImageAction = (function () {
    function captureImageAction(payload) {
        this.payload = payload;
        this.type = CAPTURE_PICTURES;
    }
    return captureImageAction;
}());

//# sourceMappingURL=D:/Creativity/ng-four/ngCordova/src/image-capture-action.js.map

/***/ }),

/***/ "../../../../../src/app/actions/menu-action.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return OPEN_SIDENAV; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CLOSE_SIDENAV; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return OpenSidenavAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return CloseSidenavAction; });
var OPEN_SIDENAV = '[Layout] Open Sidenav';
var CLOSE_SIDENAV = '[Layout] Close Sidenav';
var OpenSidenavAction = (function () {
    function OpenSidenavAction() {
        this.type = OPEN_SIDENAV;
    }
    return OpenSidenavAction;
}());

var CloseSidenavAction = (function () {
    function CloseSidenavAction() {
        this.type = CLOSE_SIDENAV;
    }
    return CloseSidenavAction;
}());

// import {Action} from '@ngrx/store'; 
// /* Layout actions are defined here */
// export const LayoutActionTypes = {
//     OPEN_MODAL: '[global-home-page] Open modal', 
//     CLOSE_MODAL: '[global-home-page] Close modal'
// }; 
// /* Modal actions */ 
// export class OpenModalAction implements Action { 
//     type = LayoutActionTypes.OPEN_MODAL; 
//     constructor(public payload:string) { } 
// }
// export class CloseModalAction implements Action { 
//     type = LayoutActionTypes.CLOSE_MODAL;
//     constructor(public payload:string) { } 
// }
// export type LayoutActions = CloseModalAction | OpenModalAction 
//# sourceMappingURL=D:/Creativity/ng-four/ngCordova/src/menu-action.js.map

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\r\n<!-- Routed views go here -->"

/***/ }),

/***/ "../../../../../src/app/app.component.less":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppComponent = (function () {
    function AppComponent() {
    }
    AppComponent.prototype.ngOnInit = function () {
        document.addEventListener("deviceready", onDeviceReady, false);
        function onDeviceReady() {
            console.log('Using Cordova plugins with Angular 2. Cordova platform : ' + navigator.platform);
        }
    };
    return AppComponent;
}());
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.less")],
        changeDetection: __WEBPACK_IMPORTED_MODULE_0__angular_core__["k" /* ChangeDetectionStrategy */].OnPush
    }),
    __metadata("design:paramtypes", [])
], AppComponent);

//# sourceMappingURL=D:/Creativity/ng-four/ngCordova/src/app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_routing__ = __webpack_require__("../../../../../src/app/app.routing.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ngrx_store__ = __webpack_require__("../../../../@ngrx/store/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ngrx_router_store__ = __webpack_require__("../../../../@ngrx/router-store/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ngrx_store_devtools__ = __webpack_require__("../../../../@ngrx/store-devtools/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__reducers__ = __webpack_require__("../../../../../src/app/reducers/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__home_home_component__ = __webpack_require__("../../../../../src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__header_header_component__ = __webpack_require__("../../../../../src/app/header/header.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__footer_footer_component__ = __webpack_require__("../../../../../src/app/footer/footer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__global_home_page_global_home_page_component__ = __webpack_require__("../../../../../src/app/global-home-page/global-home-page.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__side_bar_side_bar_component__ = __webpack_require__("../../../../../src/app/side-bar/side-bar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__services_global_shared_service_service__ = __webpack_require__("../../../../../src/app/services/global-shared-service.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__accounts_saving_account_saving_account_component__ = __webpack_require__("../../../../../src/app/accounts/saving-account/saving-account.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__accounts_current_account_current_account_component__ = __webpack_require__("../../../../../src/app/accounts/current-account/current-account.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










//import {metaReducer} from "./reducers/index";









var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_9__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_10__home_home_component__["a" /* HomeComponent */],
            __WEBPACK_IMPORTED_MODULE_11__header_header_component__["a" /* HeaderComponent */],
            __WEBPACK_IMPORTED_MODULE_12__footer_footer_component__["a" /* FooterComponent */],
            __WEBPACK_IMPORTED_MODULE_13__global_home_page_global_home_page_component__["a" /* GlobalHomePageComponent */],
            __WEBPACK_IMPORTED_MODULE_14__side_bar_side_bar_component__["a" /* SideBarComponent */],
            __WEBPACK_IMPORTED_MODULE_16__accounts_saving_account_saving_account_component__["a" /* SavingAccountComponent */],
            __WEBPACK_IMPORTED_MODULE_17__accounts_current_account_current_account_component__["a" /* CurrentAccountComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_7__ng_bootstrap_ng_bootstrap__["a" /* NgbModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__app_routing__["a" /* routing */],
            __WEBPACK_IMPORTED_MODULE_4__ngrx_store__["g" /* StoreModule */].provideStore(__WEBPACK_IMPORTED_MODULE_8__reducers__["c" /* reducer */]),
            __WEBPACK_IMPORTED_MODULE_5__ngrx_router_store__["a" /* RouterStoreModule */].connectRouter(),
            __WEBPACK_IMPORTED_MODULE_6__ngrx_store_devtools__["a" /* StoreDevtoolsModule */].instrumentOnlyWithExtension()
            // RouterModule.forRoot(
            //   appRoutes,
            //   { enableTracing: true, // <-- debugging purposes only
            //     useHash: true } 
            // )
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_15__services_global_shared_service_service__["a" /* GlobalSharedServiceService */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_9__app_component__["a" /* AppComponent */]],
        schemas: [__WEBPACK_IMPORTED_MODULE_0__angular_core__["j" /* CUSTOM_ELEMENTS_SCHEMA */]]
    })
], AppModule);

//# sourceMappingURL=D:/Creativity/ng-four/ngCordova/src/app.module.js.map

/***/ }),

/***/ "../../../../../src/app/app.routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return routing; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__global_home_page_global_home_page_component__ = __webpack_require__("../../../../../src/app/global-home-page/global-home-page.component.ts");


var APP_ROUTE = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: __WEBPACK_IMPORTED_MODULE_1__global_home_page_global_home_page_component__["a" /* GlobalHomePageComponent */], data: { title: 'Home Page' } }
];
var routing = __WEBPACK_IMPORTED_MODULE_0__angular_router__["c" /* RouterModule */].forRoot(APP_ROUTE, { enableTracing: true });
//# sourceMappingURL=D:/Creativity/ng-four/ngCordova/src/app.routing.js.map

/***/ }),

/***/ "../../../../../src/app/footer/footer.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".footer-main-section-style{position: fixed;bottom: 0;width: 100%;text-align: center;background-color: #fff;}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/footer/footer.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"openMenuBar\" class=\"footer-main-section-style\">\n  <p>\n    footer works!\n  </p>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/footer/footer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_global_shared_service_service__ = __webpack_require__("../../../../../src/app/services/global-shared-service.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var FooterComponent = (function () {
    function FooterComponent() {
        this.openMenuBar = false;
    }
    FooterComponent.prototype.ngOnInit = function () { };
    return FooterComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", Object)
], FooterComponent.prototype, "openMenuBar", void 0);
FooterComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'footer',
        template: __webpack_require__("../../../../../src/app/footer/footer.component.html"),
        styles: [__webpack_require__("../../../../../src/app/footer/footer.component.css")],
        providers: [__WEBPACK_IMPORTED_MODULE_1__services_global_shared_service_service__["a" /* GlobalSharedServiceService */]]
    }),
    __metadata("design:paramtypes", [])
], FooterComponent);

//# sourceMappingURL=D:/Creativity/ng-four/ngCordova/src/footer.component.js.map

/***/ }),

/***/ "../../../../../src/app/global-home-page/global-home-page.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/global-home-page/global-home-page.component.html":
/***/ (function(module, exports) {

module.exports = "<header (openMenu)=\"openSidenav()\" [openMenuBar]=\"!sidebarNavigation\"></header>\n<side-bar [openNavBar]=\"sidebarNavigation\"></side-bar>\n<div class=\"container-fluid\" style=\"top:50px;position: relative;\" *ngIf=\"!sidebarNavigation\">\n  <home></home>\n</div>\n<footer [openMenuBar]=\"!sidebarNavigation\"></footer>"

/***/ }),

/***/ "../../../../../src/app/global-home-page/global-home-page.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GlobalHomePageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_let__ = __webpack_require__("../../../../rxjs/add/operator/let.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_let___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_let__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngrx_store__ = __webpack_require__("../../../../@ngrx/store/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__reducers__ = __webpack_require__("../../../../../src/app/reducers/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__actions_menu_action__ = __webpack_require__("../../../../../src/app/actions/menu-action.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var GlobalHomePageComponent = (function () {
    function GlobalHomePageComponent(store) {
        var _this = this;
        this.store = store;
        /**
         * Selectors can be applied with the `select` operator which passes the state
         * tree to the provided selector
         */
        //this.showSidenav$ = this.store.select(fromRoot.getShowSidenav);
        setTimeout(function () {
            store.select(__WEBPACK_IMPORTED_MODULE_3__reducers__["b" /* getShowSidenav */])
                .subscribe(function (val) {
                return _this.sidebarNavigation = val;
            });
        }, 3000);
    }
    GlobalHomePageComponent.prototype.ngOnInit = function () {
        console.log('this');
    };
    GlobalHomePageComponent.prototype.openSidenav = function () {
        if (this.sidebarNavigation) {
            this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_4__actions_menu_action__["b" /* CloseSidenavAction */]());
        }
        else {
            this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_4__actions_menu_action__["d" /* OpenSidenavAction */]());
        }
    };
    GlobalHomePageComponent.prototype.closeSideNav = function () {
        this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_4__actions_menu_action__["b" /* CloseSidenavAction */]());
    };
    return GlobalHomePageComponent;
}());
GlobalHomePageComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'global-home-page',
        template: __webpack_require__("../../../../../src/app/global-home-page/global-home-page.component.html"),
        styles: [__webpack_require__("../../../../../src/app/global-home-page/global-home-page.component.css")],
        changeDetection: __WEBPACK_IMPORTED_MODULE_0__angular_core__["k" /* ChangeDetectionStrategy */].OnPush
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__ngrx_store__["f" /* Store */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__ngrx_store__["f" /* Store */]) === "function" && _a || Object])
], GlobalHomePageComponent);

var _a;
//# sourceMappingURL=D:/Creativity/ng-four/ngCordova/src/global-home-page.component.js.map

/***/ }),

/***/ "../../../../../src/app/header/header.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".nav-bar-main-block-style{\r\n    height: 30px;\r\n    margin: 10px 0;\r\n    background: #fff;\r\n    /*border-bottom: 1px solid #c6d0da;*/\r\n}\r\n\r\n.menu-icon-style{\r\n    margin-left: 15px;\r\n    font-size: 30px;\r\n    color: #5f6f81;\r\n}\r\n\r\n.menu-icon-block{\r\n    width: 55px;\r\n    height: 50px;\r\n    margin-top: -10px;\r\n    padding-top: 10px;\r\n    border-right: 1px solid #c6d0da;\r\n}\r\n\r\n.menu-icon-v-style{\r\n    margin-left: 22px;\r\n    font-size: 30px;\r\n    color:#5993cd;\r\n}\r\n\r\n.nav-bar-block-style{\r\n    border-right: 1px solid #c6d0da;\r\n    margin: -10px 0;\r\n    padding-top: 10px;\r\n}\r\n\r\n.title-style{\r\n    left:10px;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/header/header.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row nav-bar-main-block-style\">\n    <div class=\"col-2 nav-bar-block-style\" (click)=\"openMenu.emit()\">\n      <i class=\"fa fa-bars menu-icon-style\" aria-hidden=\"true\" *ngIf=\"openMenuBar\"></i>\n      <i class=\"fa fa-ellipsis-v menu-icon-v-style\" aria-hidden=\"true\" *ngIf=\"!openMenuBar\"></i>\n    </div>\n    <div class=\"col title-style\">\n      <h3>\n        Bank\n      </h3>\n    </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/header/header.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

// import * as fromRoot from '../reducers/index';
// import * as menu from '../actions/menu-action';
var HeaderComponent = (function () {
    function HeaderComponent() {
        this.openMenu = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
        this.openMenuBar = false;
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    return HeaderComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["U" /* Output */])(),
    __metadata("design:type", Object)
], HeaderComponent.prototype, "openMenu", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", Object)
], HeaderComponent.prototype, "openMenuBar", void 0);
HeaderComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'header',
        template: __webpack_require__("../../../../../src/app/header/header.component.html"),
        styles: [__webpack_require__("../../../../../src/app/header/header.component.css")]
    }),
    __metadata("design:paramtypes", [])
], HeaderComponent);

//# sourceMappingURL=D:/Creativity/ng-four/ngCordova/src/header.component.js.map

/***/ }),

/***/ "../../../../../src/app/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"!opened\" style=\"border-top: 1px solid #c6d0da;\">\n  <!--<saving-account></saving-account>\n  <current-account></current-account>-->\n  <div class=\"row\" style=\"margin: 15px 0px 0px;height: 50px;\">\n    <div class=\"col-6\" style=\"text-align: center;\">\n      <span style=\"color:#32465A;\">Saving Account</span>\n    </div>\n    <div class=\"col\" style=\"text-align: center;\">\n      <!--<span style=\"color:#32465A;\"><i class=\"fa fa-inr\"></i>  <b>12,000</b></span>-->\n      <span style=\"font-size: 18px;\"><b>1234567890</b></span>\n    </div>\n  </div>\n\n  <div class=\"row\" style=\"margin: 0px;height: 50px;\">\n    <div class=\"col\" style=\"text-align: center;\">\n        <span style=\"color:#32465A;font-size: 25px;\"><i class=\"fa fa-inr\"></i>  <b>12,000</b></span>\n    </div>\n  </div>\n\n  <div class=\"row menu-main-block-style\" style=\"border-bottom: 1px solid #fff;\">\n    <div class=\"col-6 menu-contain-center\" style=\"border-right: 1px solid #fff;\">\n      <div><i class=\"menu-icon fa fa-inr\"></i></div>\n      <div><span>Account</span></div>\n    </div>\n    <div class=\"col menu-contain-center\">\n        <div><i class=\"menu-icon fa fa-random\"></i></div>\n        <div><span>Transfer</span></div>\n    </div>\n  </div>\n  <div class=\"row menu-main-block-style\" style=\"border-bottom: 1px solid #fff;\">\n    <div class=\"col-6 menu-contain-center\" style=\"border-right: 1px solid #fff;\">\n      <div><i class=\"menu-icon fa fa-suitcase\"></i></div>\n      <div><span>Investment</span></div>\n    </div>\n    <div class=\"col menu-contain-center\">\n        <div><i class=\"menu-icon fa fa-street-view\"></i></div>\n        <div><span>Insurance</span></div>\n    </div>\n  </div>\n  <div class=\"row menu-main-block-style\">\n    <div class=\"col-6 menu-contain-center\" style=\"border-right: 1px solid #fff;\">\n      <div><i class=\"menu-icon fa fa-key\"></i></div>\n      <div><span>Security</span></div>\n    </div>\n    <div class=\"col menu-contain-center\">\n        <div><i class=\"menu-icon fa fa-credit-card\"></i></div>\n        <div><span>Credit Card</span></div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/home/home.component.less":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".menu-main-block-style {\n  margin: 0px;\n  height: 100px;\n  background-color: #32465A;\n  color: #fff;\n  vertical-align: middle;\n  text-align: center;\n  content: '';\n}\n.menu-contain-center {\n  margin: auto;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  right: 0;\n}\n.menu-icon {\n  font-size: 2.3em;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_global_shared_service_service__ = __webpack_require__("../../../../../src/app/services/global-shared-service.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomeComponent = (function () {
    //private opened: boolean;
    function HomeComponent(globalService) {
        this.globalService = globalService;
        //console.log('home ='+this.globalService.opened);
        // globalService.Enabled.subscribe(val => {
        //      this.opened = val; 
        //      console.log(`home: ${this.opened}`); 
        // });
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    return HomeComponent;
}());
HomeComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'home',
        template: __webpack_require__("../../../../../src/app/home/home.component.html"),
        styles: [__webpack_require__("../../../../../src/app/home/home.component.less")],
        providers: [__WEBPACK_IMPORTED_MODULE_1__services_global_shared_service_service__["a" /* GlobalSharedServiceService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_global_shared_service_service__["a" /* GlobalSharedServiceService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_global_shared_service_service__["a" /* GlobalSharedServiceService */]) === "function" && _a || Object])
], HomeComponent);

var _a;
//# sourceMappingURL=D:/Creativity/ng-four/ngCordova/src/home.component.js.map

/***/ }),

/***/ "../../../../../src/app/reducers/image-capture-reducer.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["b"] = reducer;
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getImageCaptureReducer; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__actions_image_capture_action__ = __webpack_require__("../../../../../src/app/actions/image-capture-action.ts");

var initialState = {
    captureCameraPicture: null,
};
function reducer(state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        case __WEBPACK_IMPORTED_MODULE_0__actions_image_capture_action__["a" /* CAPTURE_PICTURES */]:
            return Object.assign({}, state, { 'captureCameraPicture': action.payload });
        default:
            return state;
    }
}
var getImageCaptureReducer = function (state) { return state.captureCameraPicture; };
//# sourceMappingURL=D:/Creativity/ng-four/ngCordova/src/image-capture-reducer.js.map

/***/ }),

/***/ "../../../../../src/app/reducers/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["c"] = reducer;
/* unused harmony export getLayoutState */
/* unused harmony export getImage */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return getShowSidenav; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getImageCapture; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_reselect__ = __webpack_require__("../../../../reselect/lib/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_reselect___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_reselect__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngrx_router_store__ = __webpack_require__("../../../../@ngrx/router-store/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngrx_core_compose__ = __webpack_require__("../../../../@ngrx/core/compose.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngrx_core_compose___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__ngrx_core_compose__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ngrx_store_freeze__ = __webpack_require__("../../../../ngrx-store-freeze/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ngrx_store_freeze___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_ngrx_store_freeze__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ngrx_store__ = __webpack_require__("../../../../@ngrx/store/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__menu_reducer__ = __webpack_require__("../../../../../src/app/reducers/menu-reducer.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__image_capture_reducer__ = __webpack_require__("../../../../../src/app/reducers/image-capture-reducer.ts");








var reducers = {
    image: __WEBPACK_IMPORTED_MODULE_7__image_capture_reducer__["b" /* reducer */],
    layout: __WEBPACK_IMPORTED_MODULE_6__menu_reducer__["b" /* reducer */],
    router: __WEBPACK_IMPORTED_MODULE_1__ngrx_router_store__["b" /* routerReducer */],
};
var developmentReducer = Object(__WEBPACK_IMPORTED_MODULE_3__ngrx_core_compose__["compose"])(__WEBPACK_IMPORTED_MODULE_4_ngrx_store_freeze__["storeFreeze"], __WEBPACK_IMPORTED_MODULE_5__ngrx_store__["h" /* combineReducers */])(reducers);
var productionReducer = Object(__WEBPACK_IMPORTED_MODULE_5__ngrx_store__["h" /* combineReducers */])(reducers);
function reducer(state, action) {
    if (__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].production) {
        return productionReducer(state, action);
    }
    else {
        return developmentReducer(state, action);
    }
}
/**
 * Layout Reducers
 */
var getLayoutState = function (state) { return state.layout; };
var getImage = function (state) { return state.image; };
var getShowSidenav = Object(__WEBPACK_IMPORTED_MODULE_0_reselect__["createSelector"])(getLayoutState, __WEBPACK_IMPORTED_MODULE_6__menu_reducer__["a" /* getShowSidenav */]);
var getImageCapture = Object(__WEBPACK_IMPORTED_MODULE_0_reselect__["createSelector"])(getImage, __WEBPACK_IMPORTED_MODULE_7__image_capture_reducer__["a" /* getImageCaptureReducer */]);
// /* Import createSelector from reselect to make selection of different parts of the state fast efficient */ 
// import { createSelector } from 'reselect';
// /* Import the store logger to log all the actions to the console */ 
// //import {storeLogger} from "ngrx-store-logger"; 
// /* Import the layout state */ 
// import * as fromLayout from "./menu-reducer";
// import {compose} from "@ngrx/core"; 
// import {combineReducers} from "@ngrx/store";
// export interface AppState { 
//     layout: fromLayout.IMenuState
// }
// export const reducers = {
//     layout: fromLayout.reducer 
// };
// const developmentReducer:Function = compose(combineReducers)(reducers); 
// export function metaReducer(state: any, action: any) { 
//     return developmentReducer(state, action); 
// }
// /** * Layout selectors */ 
// export const getLayoutState = (state: AppState) => state.layout;
// export const getLayoutOpenedModalName = createSelector(getLayoutState , fromLayout.getOpenedModalName); 
//# sourceMappingURL=D:/Creativity/ng-four/ngCordova/src/index.js.map

/***/ }),

/***/ "../../../../../src/app/reducers/menu-reducer.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["b"] = reducer;
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getShowSidenav; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__actions_menu_action__ = __webpack_require__("../../../../../src/app/actions/menu-action.ts");

var initialState = {
    showSidenav: false,
};
function reducer(state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        case __WEBPACK_IMPORTED_MODULE_0__actions_menu_action__["a" /* CLOSE_SIDENAV */]:
            return {
                showSidenav: false
            };
        case __WEBPACK_IMPORTED_MODULE_0__actions_menu_action__["c" /* OPEN_SIDENAV */]:
            return {
                showSidenav: true
            };
        default:
            return state;
    }
}
var getShowSidenav = function (state) { return state.showSidenav; };
// import * as menu from '../actions/menu-action';
// export interface IMenuState { 
//     /* The description of the different parts of the layout go here */
//     openedModalName:string;
// } 
// const initialState: IMenuState = {
//      /* The initial values of the layout state will be initialized here */
//      openedModalName: null 
// }; 
// /* The reducer of the layout state. Each time an action for the layout is dispatched, 
// it will create a new state for the layout. */ 
// export function reducer(state = initialState, action: menu.LayoutActions): IMenuState { 
//     switch (action.type) { 
//         case menu.LayoutActionTypes.OPEN_MODAL: {
//              const name = action.payload; 
//              return Object.assign({}, state, { openedModalName:name }); 
//             }
//         case menu.LayoutActionTypes.CLOSE_MODAL: {
//              return Object.assign({}, state, { openedModalName:null }); 
//             }
//         default: return state; 
//     }
//  }
// export const getOpenedModalName = (state:IMenuState) => state.openedModalName; 
//# sourceMappingURL=D:/Creativity/ng-four/ngCordova/src/menu-reducer.js.map

/***/ }),

/***/ "../../../../../src/app/services/global-shared-service.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GlobalSharedServiceService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__ = __webpack_require__("../../../../rxjs/Subject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_BehaviorSubject__ = __webpack_require__("../../../../rxjs/BehaviorSubject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_BehaviorSubject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_BehaviorSubject__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var GlobalSharedServiceService = (function () {
    function GlobalSharedServiceService() {
        this._sideMenu = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__["Subject"]();
        this.username = new __WEBPACK_IMPORTED_MODULE_2_rxjs_BehaviorSubject__["BehaviorSubject"](false);
        // Observable string streams
        this.caseNumber$ = this.username.asObservable();
        //private _sideMenu = new Subject<boolean>();
        //public opened :any;
        //myMethod$: Observable<any>;
        // private myMethodSubject = new Subject<any>();
        // myMethod$ = this.myMethodSubject.asObservable();
        // //get Enabled() { return this._sideMenu.asObservable(); }
        // // SetEnabled(value: boolean) {
        // //   this._sideMenu.next(value);
        // //   console.log(`service: ${value}`);
        // // }
        //  myMethod(data) {
        //    window['menu']=data;
        //       console.log(data); // I have data! Let's return it so subscribers can use it!
        //       // we can do stuff with data if we want
        //       this.myMethodSubject.next(data);
        //   }
        //   getValue() {
        //       return window['menu'];
        //   }
        // constructor() { 
        // }
    }
    GlobalSharedServiceService.prototype.getData = function () {
        return this.username.asObservable();
    };
    // Service message commands
    GlobalSharedServiceService.prototype.setData = function (data) {
        this.username.next(data);
    };
    return GlobalSharedServiceService;
}());
GlobalSharedServiceService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])()
], GlobalSharedServiceService);

//# sourceMappingURL=D:/Creativity/ng-four/ngCordova/src/global-shared-service.service.js.map

/***/ }),

/***/ "../../../../../src/app/side-bar/side-bar.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"openNavBar\">\r\n  <div class=\"row menu-section\">\r\n    <div class=\"col-sm menu-wrapper\">\r\n      <div class=\"menu-scrollbar\">\r\n        <ul class=\"menu-block\">\r\n          <li>\r\n            <div class=\"user-img-block-style\">\r\n                <!--<img class=\"user-img-style\" #fileInput [src]=\"customerPic || 'assets/bhushan.jpg'\"/>-->\r\n                <img class=\"user-img-style\" [hidden]=\"staticImageHide\" src=\"assets/bhushan.jpg\"/>\r\n                <img class=\"user-img-style\" #fileInput [hidden]=\"dynamicImageHide\" [src]=\"customerPic\"/>\r\n            </div>\r\n            <div class=\"camera-style\" placement=\"bottom\" [ngbPopover]=\"popContent\" #p=\"ngbPopover\" popoverTitle=\"\">\r\n              <i class=\"fa fa-camera\" aria-hidden=\"true\"></i>\r\n            </div>\r\n            <ng-template #popContent>\r\n              <div style=\"height: 30px;background-color: #fff;text-align: center;\" (touchend)=\"onCapturePic($event)\">Take Picture</div>\r\n              <div style=\"height: 30px;background-color: #fff;text-align: center;\" (touchend)=\"onChoosePic($event)\">Choose Picture</div>\r\n            </ng-template>\r\n            <div class=\"user-info-block-style\">\r\n              <div class=\"user-name-style\"><b>Bhushan Mithabavkar</b></div>\r\n              <div class=\"user-loged-time-style\"><i>Last logged in 20<sup>th</sup> October 2017</i></div>\r\n            </div>\r\n          </li>\r\n          \r\n          <!--<li style=\"border-top: 1px solid #c6d0da;\">\r\n            <div style=\"width: 15%;\">\r\n                <i class=\"fa fa-home menu-icon-style\"></i>\r\n            </div>\r\n            <div style=\"width: 75%;\">\r\n              Home\r\n            </div>\r\n          </li>-->\r\n          <li class=\"menu-li-border-top-style\">\r\n            <div class=\"menu-icon-block-width\">\r\n                <i class=\"fa fa-usd menu-icon-style\"></i>\r\n            </div>\r\n            <div class=\"menu-text-block-width\">\r\n              Account\r\n            </div>\r\n          </li>\r\n          <li class=\"menu-li-border-top-style\">\r\n            <div class=\"menu-icon-block-width\">\r\n                <i class=\"fa fa-calculator menu-icon-style\"></i>\r\n            </div>\r\n            <div class=\"menu-text-block-width\">\r\n              Bill Payments\r\n            </div>\r\n          </li>\r\n          <!--<li class=\"menu-li-border-top-style\">\r\n            <div class=\"menu-icon-block-width\">\r\n                <i class=\"fa fa-suitcase menu-icon-style\"></i>\r\n            </div>\r\n            <div class=\"menu-text-block-width\">\r\n              Investment\r\n            </div>\r\n          </li>\r\n          <li class=\"menu-li-border-top-style\">\r\n            <div class=\"menu-icon-block-width\">\r\n                <i class=\"fa fa-street-view menu-icon-style\"></i>\r\n            </div>\r\n            <div class=\"menu-text-block-width\">\r\n              Insurance\r\n            </div>\r\n          </li>-->\r\n          <li class=\"menu-li-border-top-style\">\r\n            <div class=\"menu-icon-block-width\">\r\n                <i class=\"fa fa-envelope-o menu-icon-style\"></i>\r\n            </div>\r\n            <div class=\"menu-text-block-width\">\r\n              Messages <span class=\"badge badge-success\">9</span>\r\n            </div>\r\n          </li>\r\n          <li class=\"menu-li-border-top-style\">\r\n            <div class=\"menu-icon-block-width\">\r\n                <i class=\"fa fa-map-marker menu-icon-style\"></i>\r\n            </div>\r\n            <div class=\"menu-text-block-width\">\r\n              Branch\r\n            </div>\r\n          </li>\r\n          <li class=\"menu-li-border-top-style\">\r\n            <div class=\"menu-icon-block-width\">\r\n                <i class=\"fa fa-phone menu-icon-style\"></i>\r\n            </div>\r\n            <div class=\"menu-text-block-width\">\r\n              Contact Us\r\n            </div>\r\n          </li>\r\n          <li class=\"menu-li-border-top-style\">\r\n            <div class=\"menu-icon-block-width\">\r\n                <i class=\"fa fa-cog menu-icon-style\"></i>\r\n            </div>\r\n            <div class=\"menu-text-block-width\">\r\n              Settings\r\n            </div>\r\n          </li>\r\n          <li class=\"menu-li-border-top-style\">\r\n            <div class=\"menu-icon-block-width\">\r\n                <i class=\"fa fa-share menu-icon-style\"></i>\r\n            </div>\r\n            <div class=\"menu-text-block-width\">\r\n              Log Out\r\n            </div>\r\n          </li>\r\n        </ul>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"version-detail-block\">\r\n    <span>copyrights <i class=\"fa fa-copyright\"></i> Bank - V 0.0.1</span>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/side-bar/side-bar.component.less":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".menu-section {\n  margin-left: 0px;\n  margin-right: 0px;\n  height: 500px;\n  transition: all 0.3s;\n}\n.menu-wrapper {\n  overflow: hidden;\n  top: 50px;\n  border-top: 1px solid #c6d0da;\n  background: white;\n  transition: all 0.3s;\n}\n.menu-scrollbar {\n  position: absolute;\n  overflow-y: scroll;\n  width: 370px;\n  height: 100%;\n}\n.menu-block[_ngcontent-c3] {\n  border-bottom: 1px solid #c6d0da;\n  text-align: left;\n  font-size: 18px;\n}\n.menu-scrollbar > ul {\n  margin: 0;\n  padding: 0;\n  background: white;\n  color: #5f6f81;\n  list-style: none;\n  text-transform: none;\n  font-weight: 300;\n  font-family: 'Lato', Arial, sans-serif;\n  line-height: 60px;\n}\n.menu-block > li {\n  display: -webkit-box;\n}\n.menu-icon-style {\n  font-size: 20px;\n  color: #5f6f81;\n  text-decoration: none;\n  cursor: pointer;\n  margin-left: 15px;\n}\n.menu-icon-block-width {\n  width: 15%;\n}\n.menu-text-block-width {\n  width: 75%;\n}\n.menu-li-border-top-style {\n  border-top: 1px solid #c6d0da;\n}\n.user-img-block-style {\n  width: 24%;\n  margin: 5px;\n}\n.user-info-block-style {\n  width: 60%;\n  margin-left: 10px;\n}\n.user-name-style {\n  height: 22px;\n  margin-top: 5px;\n  font-size: 15px;\n}\n.user-loged-time-style {\n  height: 20px;\n  font-size: 12px;\n}\n.user-img-style {\n  background-repeat: no-repeat;\n  background-position: 50%;\n  border-radius: 50%;\n  width: 80px;\n  height: 80px;\n  box-shadow: 2px 2px 5px 0px #000000;\n}\n.version-detail-block {\n  position: fixed;\n  bottom: 0;\n  text-align: center;\n  width: 100%;\n  height: 25px;\n  box-shadow: 10px 10px 21px 8px black;\n}\n.version-detail-block span {\n  font-size: 12px;\n}\n.camera-style {\n  height: 50px;\n  margin-left: -31px;\n  margin-top: 36px;\n  width: 25px;\n  font-size: 23px;\n  color: black;\n}\n.popover-body {\n  height: 70px;\n  width: 100px;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/side-bar/side-bar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SideBarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_let__ = __webpack_require__("../../../../rxjs/add/operator/let.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_let___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_let__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngrx_store__ = __webpack_require__("../../../../@ngrx/store/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__reducers__ = __webpack_require__("../../../../../src/app/reducers/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__actions_image_capture_action__ = __webpack_require__("../../../../../src/app/actions/image-capture-action.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var SideBarComponent = (function () {
    function SideBarComponent(store) {
        var _this = this;
        this.store = store;
        this.openNavBar = false;
        this.staticImageHide = false;
        this.dynamicImageHide = true;
        console.log('Hi hh' + this.openNavBar);
        setTimeout(function () {
            store.select(__WEBPACK_IMPORTED_MODULE_4__reducers__["a" /* getImageCapture */])
                .subscribe(function (val) {
                return _this.customerPic = val ? val : false;
            });
        }, 100);
    }
    SideBarComponent.prototype.ngOnInit = function () {
        console.log('Hi side =' + this.openNavBar);
    };
    SideBarComponent.prototype.onCapturePic = function (event) {
        console.log('on camera method called = ' + navigator);
        var imageData = 'asdasd';
        navigator.camera.getPicture(this.onSuccess.bind(this), this.onFail.bind(this), {
            quality: 100,
            allowEdit: true,
            destinationType: Camera.DestinationType.DATA_URL,
            correctOrientation: true
        });
    };
    SideBarComponent.prototype.onChoosePic = function (event) {
        navigator.camera.getPicture(this.onSuccess.bind(this), this.onFail.bind(this), {
            quality: 100,
            allowEdit: true,
            sourceType: Camera.PictureSourceType.PHOTOLIBRARY,
            mediaType: Camera.MediaType.PICTURE,
            destinationType: Camera.DestinationType.DATA_URL,
            correctOrientation: true
        });
    };
    SideBarComponent.prototype.onSuccess = function (imageData) {
        console.log('message = ' + imageData);
        this.customerPic = '';
        this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_5__actions_image_capture_action__["b" /* captureImageAction */]("data:image/jpeg;base64," + imageData));
        this.staticImageHide = true;
        this.dynamicImageHide = false;
        //this.customerPic = "data:image/jpeg;base64,"+imageData;
        this.popover.close();
    };
    SideBarComponent.prototype.onFail = function (message) {
        console.log('message = ' + message);
        this.popover.close();
    };
    return SideBarComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", Object)
], SideBarComponent.prototype, "openNavBar", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", Object)
], SideBarComponent.prototype, "customerPic", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", Object)
], SideBarComponent.prototype, "staticImageHide", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", Object)
], SideBarComponent.prototype, "dynamicImageHide", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_17" /* ViewChild */])('p'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__["b" /* NgbPopover */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__["b" /* NgbPopover */]) === "function" && _a || Object)
], SideBarComponent.prototype, "popover", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_17" /* ViewChild */])('fileInput'),
    __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ElementRef */]) === "function" && _b || Object)
], SideBarComponent.prototype, "fileInput", void 0);
SideBarComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'side-bar',
        template: __webpack_require__("../../../../../src/app/side-bar/side-bar.component.html"),
        styles: [__webpack_require__("../../../../../src/app/side-bar/side-bar.component.less")],
        changeDetection: __WEBPACK_IMPORTED_MODULE_0__angular_core__["k" /* ChangeDetectionStrategy */].OnPush
    }),
    __metadata("design:paramtypes", [typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__ngrx_store__["f" /* Store */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__ngrx_store__["f" /* Store */]) === "function" && _c || Object])
], SideBarComponent);

var _a, _b, _c;
//# sourceMappingURL=D:/Creativity/ng-four/ngCordova/src/side-bar.component.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=D:/Creativity/ng-four/ngCordova/src/environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_24" /* enableProdMode */])();
}
//document.addEventListener("deviceready", ()=> { platformBrowserDynamic().bootstrapModule(AppModule) }, false);
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=D:/Creativity/ng-four/ngCordova/src/main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map