(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["select-language-select-language-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/select-language/select-language.page.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/select-language/select-language.page.html ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-header [showBackButton]=\"showBackButton\" [title]=\"'settings.language'\" (backButtonClick)=\"goBack()\"></app-header>\n\n<ion-content class=\"ion-padding\">\n  <div class=\"flex-container\">\n    <form *ngIf=\"formGroup\" [formGroup]=\"formGroup\">\n      <ion-row class=\"flex-item\">\n        <ion-col size=\"12\" class=\"ion-text-center\">\n          <div class=\"screen-big-title\" color=\"secondary\">{{ 'settings.selectLanguage' | translate }}</div>\n        </ion-col>\n      </ion-row>\n\n      <ion-list class=\"ion-padding-vertical ion-margin-vertical\">\n        <ion-radio-group [formControlName]=\"'language'\">\n          <ion-item *ngFor=\"let language of languageList\" class=\"ion-no-border\">\n            <ion-label>{{ 'language.' + language | translate }}</ion-label>\n            <ion-radio slot=\"start\" [value]=\"language\"></ion-radio>\n          </ion-item>\n        </ion-radio-group>\n      </ion-list>\n      <app-action-button (actionButtonClick)=\"changeLanguage()\" [buttonText]=\"'buttons.save'\"></app-action-button>\n    </form>\n  </div>\n</ion-content>\n");

/***/ }),

/***/ "./src/app/select-language/select-language-routing.module.ts":
/*!*******************************************************************!*\
  !*** ./src/app/select-language/select-language-routing.module.ts ***!
  \*******************************************************************/
/*! exports provided: SelectLanguagePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectLanguagePageRoutingModule", function() { return SelectLanguagePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _select_language_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./select-language.page */ "./src/app/select-language/select-language.page.ts");




var routes = [
    {
        path: '',
        component: _select_language_page__WEBPACK_IMPORTED_MODULE_3__["SelectLanguagePage"],
    },
];
var SelectLanguagePageRoutingModule = /** @class */ (function () {
    function SelectLanguagePageRoutingModule() {
    }
    SelectLanguagePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], SelectLanguagePageRoutingModule);
    return SelectLanguagePageRoutingModule;
}());



/***/ }),

/***/ "./src/app/select-language/select-language.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/select-language/select-language.module.ts ***!
  \***********************************************************/
/*! exports provided: SelectLanguagePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectLanguagePageModule", function() { return SelectLanguagePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _select_language_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./select-language-routing.module */ "./src/app/select-language/select-language-routing.module.ts");
/* harmony import */ var _select_language_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./select-language.page */ "./src/app/select-language/select-language.page.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../@shared/shared.module */ "./src/app/@shared/shared.module.ts");





var SelectLanguagePageModule = /** @class */ (function () {
    function SelectLanguagePageModule() {
    }
    SelectLanguagePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"], _select_language_routing_module__WEBPACK_IMPORTED_MODULE_2__["SelectLanguagePageRoutingModule"]],
            declarations: [_select_language_page__WEBPACK_IMPORTED_MODULE_3__["SelectLanguagePage"]],
        })
    ], SelectLanguagePageModule);
    return SelectLanguagePageModule;
}());



/***/ }),

/***/ "./src/app/select-language/select-language.page.scss":
/*!***********************************************************!*\
  !*** ./src/app/select-language/select-language.page.scss ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NlbGVjdC1sYW5ndWFnZS9zZWxlY3QtbGFuZ3VhZ2UucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/select-language/select-language.page.ts":
/*!*********************************************************!*\
  !*** ./src/app/select-language/select-language.page.ts ***!
  \*********************************************************/
/*! exports provided: SelectLanguagePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectLanguagePage", function() { return SelectLanguagePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _base_base_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../base/base.page */ "./src/app/base/base.page.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngxs/store */ "./node_modules/@ngxs/store/__ivy_ngcc__/fesm2015/ngxs-store.js");
/* harmony import */ var _core_utils_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../@core/utils.service */ "./src/app/@core/utils.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _env_environment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @env/environment */ "./src/environments/environment.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _core_storage_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../@core/storage.service */ "./src/app/@core/storage.service.ts");
/* harmony import */ var _store_user_user_actions__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../@store/user/user.actions */ "./src/app/@store/user/user.actions.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");













var SelectLanguagePage = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(SelectLanguagePage, _super);
    function SelectLanguagePage(location, router, store, utilsService, formBuilder, translate, storage) {
        var _this = _super.call(this, location, router, store, utilsService) || this;
        _this.formBuilder = formBuilder;
        _this.translate = translate;
        _this.storage = storage;
        _this.languageList = _env_environment__WEBPACK_IMPORTED_MODULE_7__["environment"].supportedLanguages;
        return _this;
    }
    SelectLanguagePage.prototype.ngOnInit = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.initForm()];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    SelectLanguagePage.prototype.initForm = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var currentLang, _a;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this.translate.currentLang;
                        if (_a) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.storage.getLanguage()];
                    case 1:
                        _a = (_b.sent());
                        _b.label = 2;
                    case 2:
                        currentLang = _a || this.translate.getBrowserLang();
                        this.formGroup = this.formBuilder.group({
                            language: [currentLang, _angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].required],
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    SelectLanguagePage.prototype.changeLanguage = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var language;
            var _this = this;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        language = this.formGroup.get('language').value;
                        return [4 /*yield*/, this.utilsService.setLanguage(language)];
                    case 1:
                        _a.sent();
                        this.store
                            .dispatch(new _store_user_user_actions__WEBPACK_IMPORTED_MODULE_11__["SetUserInfo"]({ userInfo: { language: language } }))
                            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_12__["take"])(1))
                            .subscribe(function () {
                            _this.goBack();
                        }, function (error) {
                            console.log(error);
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    SelectLanguagePage.ctorParameters = function () { return [
        { type: _angular_common__WEBPACK_IMPORTED_MODULE_6__["Location"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: _ngxs_store__WEBPACK_IMPORTED_MODULE_4__["Store"] },
        { type: _core_utils_service__WEBPACK_IMPORTED_MODULE_5__["UtilsService"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormBuilder"] },
        { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslateService"] },
        { type: _core_storage_service__WEBPACK_IMPORTED_MODULE_10__["StorageService"] }
    ]; };
    SelectLanguagePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-select-language',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./select-language.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/select-language/select-language.page.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./select-language.page.scss */ "./src/app/select-language/select-language.page.scss")).default]
        })
    ], SelectLanguagePage);
    return SelectLanguagePage;
}(_base_base_page__WEBPACK_IMPORTED_MODULE_2__["BasePage"]));



/***/ })

}]);
//# sourceMappingURL=select-language-select-language-module.js.map