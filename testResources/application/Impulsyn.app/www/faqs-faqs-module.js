(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["faqs-faqs-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/faqs/content-faqs-modal/content-faqs-modal.component.html":
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/faqs/content-faqs-modal/content-faqs-modal.component.html ***!
  \*****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-header [showBackButton]=\"true\" [titleImage]=\"logoPath\" (backButtonClick)=\"goBack()\"></app-header>\n<ion-content class=\"ion-padding\">\n  <ion-row class=\"flex-item\">\n    <ion-col size=\"12\" class=\"ion-text-center\">\n      <div class=\"screen-big-title\" color=\"secondary\">{{ 'faqs.option' + option | translate }}</div>\n    </ion-col>\n  </ion-row>\n  <ion-row class=\"flex-item\">\n    <ion-col size=\"12\" class=\"ion-text-start\">\n      <div class=\"regular-small-size\" [innerHTML]=\"'faqs.option' + option + 'text' | translate\"></div>\n    </ion-col>\n  </ion-row>\n</ion-content>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/faqs/faqs.page.html":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/faqs/faqs.page.html ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-header [showBackButton]=\"showBackButton\" [title]=\"'faqs.title'\" (backButtonClick)=\"goBack()\"></app-header>\n\n<ion-content>\n  <ion-list>\n    <ion-item *ngFor=\"let item of [].constructor(faqsOptionsMenu); index as i\" (click)=\"goOption(i+1)\">\n      <ion-label>{{ 'faqs.option' + (i+1) | translate }} </ion-label>\n    </ion-item>\n  </ion-list>\n</ion-content>\n");

/***/ }),

/***/ "./src/app/faqs/content-faqs-modal/content-faqs-modal.component.scss":
/*!***************************************************************************!*\
  !*** ./src/app/faqs/content-faqs-modal/content-faqs-modal.component.scss ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2ZhcXMvY29udGVudC1mYXFzLW1vZGFsL2NvbnRlbnQtZmFxcy1tb2RhbC5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/faqs/content-faqs-modal/content-faqs-modal.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/faqs/content-faqs-modal/content-faqs-modal.component.ts ***!
  \*************************************************************************/
/*! exports provided: ContentFaqsModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContentFaqsModalComponent", function() { return ContentFaqsModalComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _global_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../@global/constants */ "./src/app/@global/constants.ts");




var ContentFaqsModalComponent = /** @class */ (function () {
    function ContentFaqsModalComponent(modalController) {
        this.modalController = modalController;
        this.logoPath = _global_constants__WEBPACK_IMPORTED_MODULE_3__["Constants"].LOGO_PATH;
    }
    ContentFaqsModalComponent.prototype.ngOnInit = function () { };
    ContentFaqsModalComponent.prototype.goBack = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.modalController.dismiss()];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    ContentFaqsModalComponent.ctorParameters = function () { return [
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"] }
    ]; };
    ContentFaqsModalComponent.propDecorators = {
        option: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }]
    };
    ContentFaqsModalComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-content-faqs-modal',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./content-faqs-modal.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/faqs/content-faqs-modal/content-faqs-modal.component.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./content-faqs-modal.component.scss */ "./src/app/faqs/content-faqs-modal/content-faqs-modal.component.scss")).default]
        })
    ], ContentFaqsModalComponent);
    return ContentFaqsModalComponent;
}());



/***/ }),

/***/ "./src/app/faqs/content-faqs-modal/content-faqs-modal.module.ts":
/*!**********************************************************************!*\
  !*** ./src/app/faqs/content-faqs-modal/content-faqs-modal.module.ts ***!
  \**********************************************************************/
/*! exports provided: ContentFaqsModalModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContentFaqsModalModule", function() { return ContentFaqsModalModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _content_faqs_modal_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./content-faqs-modal.component */ "./src/app/faqs/content-faqs-modal/content-faqs-modal.component.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../@shared/shared.module */ "./src/app/@shared/shared.module.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");





var ContentFaqsModalModule = /** @class */ (function () {
    function ContentFaqsModalModule() {
    }
    ContentFaqsModalModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_content_faqs_modal_component__WEBPACK_IMPORTED_MODULE_2__["ContentFaqsModalComponent"]],
            imports: [_shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateModule"].forChild()],
            exports: [_content_faqs_modal_component__WEBPACK_IMPORTED_MODULE_2__["ContentFaqsModalComponent"]],
        })
    ], ContentFaqsModalModule);
    return ContentFaqsModalModule;
}());



/***/ }),

/***/ "./src/app/faqs/faqs-routing.module.ts":
/*!*********************************************!*\
  !*** ./src/app/faqs/faqs-routing.module.ts ***!
  \*********************************************/
/*! exports provided: FaqsPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FaqsPageRoutingModule", function() { return FaqsPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _faqs_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./faqs.page */ "./src/app/faqs/faqs.page.ts");




var routes = [
    {
        path: '',
        component: _faqs_page__WEBPACK_IMPORTED_MODULE_3__["FaqsPage"],
    },
];
var FaqsPageRoutingModule = /** @class */ (function () {
    function FaqsPageRoutingModule() {
    }
    FaqsPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], FaqsPageRoutingModule);
    return FaqsPageRoutingModule;
}());



/***/ }),

/***/ "./src/app/faqs/faqs.module.ts":
/*!*************************************!*\
  !*** ./src/app/faqs/faqs.module.ts ***!
  \*************************************/
/*! exports provided: FaqsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FaqsPageModule", function() { return FaqsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _faqs_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./faqs-routing.module */ "./src/app/faqs/faqs-routing.module.ts");
/* harmony import */ var _faqs_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./faqs.page */ "./src/app/faqs/faqs.page.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../@shared/shared.module */ "./src/app/@shared/shared.module.ts");
/* harmony import */ var _content_faqs_modal_content_faqs_modal_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./content-faqs-modal/content-faqs-modal.module */ "./src/app/faqs/content-faqs-modal/content-faqs-modal.module.ts");






var FaqsPageModule = /** @class */ (function () {
    function FaqsPageModule() {
    }
    FaqsPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"], _faqs_routing_module__WEBPACK_IMPORTED_MODULE_2__["FaqsPageRoutingModule"], _content_faqs_modal_content_faqs_modal_module__WEBPACK_IMPORTED_MODULE_5__["ContentFaqsModalModule"]],
            declarations: [_faqs_page__WEBPACK_IMPORTED_MODULE_3__["FaqsPage"]],
        })
    ], FaqsPageModule);
    return FaqsPageModule;
}());



/***/ }),

/***/ "./src/app/faqs/faqs.page.scss":
/*!*************************************!*\
  !*** ./src/app/faqs/faqs.page.scss ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2ZhcXMvZmFxcy5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/faqs/faqs.page.ts":
/*!***********************************!*\
  !*** ./src/app/faqs/faqs.page.ts ***!
  \***********************************/
/*! exports provided: FaqsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FaqsPage", function() { return FaqsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _base_base_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../base/base.page */ "./src/app/base/base.page.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngxs/store */ "./node_modules/@ngxs/store/__ivy_ngcc__/fesm2015/ngxs-store.js");
/* harmony import */ var _core_utils_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../@core/utils.service */ "./src/app/@core/utils.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _content_faqs_modal_content_faqs_modal_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./content-faqs-modal/content-faqs-modal.component */ "./src/app/faqs/content-faqs-modal/content-faqs-modal.component.ts");









var FaqsPage = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(FaqsPage, _super);
    function FaqsPage(location, router, store, utilsService, modalController) {
        var _this = _super.call(this, location, router, store, utilsService) || this;
        _this.modalController = modalController;
        _this.faqsOptionsMenu = 16;
        return _this;
    }
    FaqsPage.prototype.ngOnInit = function () { };
    FaqsPage.prototype.goOption = function (option) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var modal;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.modalController.create({
                            component: _content_faqs_modal_content_faqs_modal_component__WEBPACK_IMPORTED_MODULE_8__["ContentFaqsModalComponent"],
                            componentProps: {
                                option: option,
                            },
                        })];
                    case 1:
                        modal = _a.sent();
                        return [4 /*yield*/, modal.present()];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    FaqsPage.ctorParameters = function () { return [
        { type: _angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
        { type: _ngxs_store__WEBPACK_IMPORTED_MODULE_5__["Store"] },
        { type: _core_utils_service__WEBPACK_IMPORTED_MODULE_6__["UtilsService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["ModalController"] }
    ]; };
    FaqsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-faqs',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./faqs.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/faqs/faqs.page.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./faqs.page.scss */ "./src/app/faqs/faqs.page.scss")).default]
        })
    ], FaqsPage);
    return FaqsPage;
}(_base_base_page__WEBPACK_IMPORTED_MODULE_2__["BasePage"]));



/***/ })

}]);
//# sourceMappingURL=faqs-faqs-module.js.map