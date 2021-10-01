(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["forgot-password-flow-forgot-password-forgot-password-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/forgot-password-flow/forgot-password/forgot-password.page.html":
/*!**********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/forgot-password-flow/forgot-password/forgot-password.page.html ***!
  \**********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-header [showBackButton]=\"showBackButton\" [titleImage]=\"logoPath\" (backButtonClick)=\"goBack()\"></app-header>\n\n<ion-content class=\"ion-padding background-with-dark-color\">\n  <form [formGroup]=\"formGroup\">\n    <div class=\"flex-container-vertical ion-margin-bottom ion-padding-bottom\">\n      <ion-row class=\"flex-item\">\n        <ion-col size=\"12\" class=\"ion-text-center\">\n          <div class=\"screen-extrabig-title\" [innerHTML]=\"'forgotPassword.title' | translate\"></div>\n        </ion-col>\n      </ion-row>\n      <ion-row class=\"flex-item ion-padding-vertical ion-margin-vertical\">\n        <ion-col size=\"12\" class=\"ion-text-center\">\n          <span class=\"small-size ion-text-center ion-margin-top\">{{ 'forgotPassword.codeMessage' | translate }}</span>\n        </ion-col>\n      </ion-row>\n      <div class=\"flex-justify-content-center\">\n        <div class=\"pr col-xs-10 col-sm-8 col-lg-6\">\n          <ion-item lines=\"full\" class=\"ion-margin-bottom ion-margin-top input-background\">\n            <ion-label appPlatformMode>{{'formFields.email' | translate}}</ion-label>\n            <ion-input\n              type=\"email\"\n              inputmode=\"email\"\n              autocomplete=\"off\"\n              [formControlName]=\"'email'\"\n              required\n              data-test=\"forgot-password-email-input\"\n            ></ion-input>\n          </ion-item>\n          <app-show-errors [control]=\"formGroup.controls['email']\"></app-show-errors>\n        </div>\n      </div>\n    </div>\n    <app-action-button (actionButtonClick)=\"onForgotPassword()\" [buttonText]=\"'next'\"></app-action-button>\n  </form>\n</ion-content>\n");

/***/ }),

/***/ "./src/app/forgot-password-flow/forgot-password/forgot-password-routing.module.ts":
/*!****************************************************************************************!*\
  !*** ./src/app/forgot-password-flow/forgot-password/forgot-password-routing.module.ts ***!
  \****************************************************************************************/
/*! exports provided: ForgotPasswordPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForgotPasswordPageRoutingModule", function() { return ForgotPasswordPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _forgot_password_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./forgot-password.page */ "./src/app/forgot-password-flow/forgot-password/forgot-password.page.ts");




var routes = [
    {
        path: '',
        component: _forgot_password_page__WEBPACK_IMPORTED_MODULE_3__["ForgotPasswordPage"],
    },
];
var ForgotPasswordPageRoutingModule = /** @class */ (function () {
    function ForgotPasswordPageRoutingModule() {
    }
    ForgotPasswordPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], ForgotPasswordPageRoutingModule);
    return ForgotPasswordPageRoutingModule;
}());



/***/ }),

/***/ "./src/app/forgot-password-flow/forgot-password/forgot-password.module.ts":
/*!********************************************************************************!*\
  !*** ./src/app/forgot-password-flow/forgot-password/forgot-password.module.ts ***!
  \********************************************************************************/
/*! exports provided: ForgotPasswordPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForgotPasswordPageModule", function() { return ForgotPasswordPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _forgot_password_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./forgot-password-routing.module */ "./src/app/forgot-password-flow/forgot-password/forgot-password-routing.module.ts");
/* harmony import */ var _forgot_password_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./forgot-password.page */ "./src/app/forgot-password-flow/forgot-password/forgot-password.page.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../@shared/shared.module */ "./src/app/@shared/shared.module.ts");





var ForgotPasswordPageModule = /** @class */ (function () {
    function ForgotPasswordPageModule() {
    }
    ForgotPasswordPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"], _forgot_password_routing_module__WEBPACK_IMPORTED_MODULE_2__["ForgotPasswordPageRoutingModule"]],
            declarations: [_forgot_password_page__WEBPACK_IMPORTED_MODULE_3__["ForgotPasswordPage"]],
        })
    ], ForgotPasswordPageModule);
    return ForgotPasswordPageModule;
}());



/***/ }),

/***/ "./src/app/forgot-password-flow/forgot-password/forgot-password.page.scss":
/*!********************************************************************************!*\
  !*** ./src/app/forgot-password-flow/forgot-password/forgot-password.page.scss ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2ZvcmdvdC1wYXNzd29yZC1mbG93L2ZvcmdvdC1wYXNzd29yZC9mb3Jnb3QtcGFzc3dvcmQucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/forgot-password-flow/forgot-password/forgot-password.page.ts":
/*!******************************************************************************!*\
  !*** ./src/app/forgot-password-flow/forgot-password/forgot-password.page.ts ***!
  \******************************************************************************/
/*! exports provided: ForgotPasswordPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForgotPasswordPage", function() { return ForgotPasswordPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngxs/store */ "./node_modules/@ngxs/store/__ivy_ngcc__/fesm2015/ngxs-store.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _store_auth_auth_actions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../@store/auth/auth.actions */ "./src/app/@store/auth/auth.actions.ts");
/* harmony import */ var _base_base_page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../base/base.page */ "./src/app/base/base.page.ts");
/* harmony import */ var _core_navigation_extras_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../@core/navigation-extras.service */ "./src/app/@core/navigation-extras.service.ts");
/* harmony import */ var _global_constants__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../@global/constants */ "./src/app/@global/constants.ts");
/* harmony import */ var _core_utils_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../@core/utils.service */ "./src/app/@core/utils.service.ts");












var ForgotPasswordPage = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(ForgotPasswordPage, _super);
    function ForgotPasswordPage(location, router, store, utilsService, formBuilder, navigationExtrasService) {
        var _this = _super.call(this, location, router, store, utilsService) || this;
        _this.formBuilder = formBuilder;
        _this.navigationExtrasService = navigationExtrasService;
        return _this;
    }
    ForgotPasswordPage.prototype.ngOnInit = function () {
        var _a;
        this.username = (_a = this.navigationExtrasService.getExtras()) === null || _a === void 0 ? void 0 : _a.username;
        this.initForm();
    };
    ForgotPasswordPage.prototype.initForm = function () {
        this.formGroup = this.formBuilder.group({
            email: [
                this.username || '',
                [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(_global_constants__WEBPACK_IMPORTED_MODULE_10__["Constants"].MAX_LENGTH_USERNAME_COGNITO)],
            ],
        });
    };
    ForgotPasswordPage.prototype.onForgotPassword = function () {
        var _this = this;
        if (this.utilsService.isValidForm(this.formGroup, 'formValidations.checkEmail')) {
            this.store
                .dispatch(new _store_auth_auth_actions__WEBPACK_IMPORTED_MODULE_7__["ForgotPassword"]({
                username: this.formGroup.get('email').value,
            }))
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["take"])(1))
                .subscribe(function () {
                _this.navigationExtrasService.setExtras({ username: _this.formGroup.get('email').value });
                _this.router.navigate(['/forgot-password-submit']);
            }, function (error) {
                console.log(error);
            });
        }
    };
    ForgotPasswordPage.ctorParameters = function () { return [
        { type: _angular_common__WEBPACK_IMPORTED_MODULE_4__["Location"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: _ngxs_store__WEBPACK_IMPORTED_MODULE_5__["Store"] },
        { type: _core_utils_service__WEBPACK_IMPORTED_MODULE_11__["UtilsService"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
        { type: _core_navigation_extras_service__WEBPACK_IMPORTED_MODULE_9__["NavigationExtrasService"] }
    ]; };
    ForgotPasswordPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-forgot-password',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./forgot-password.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/forgot-password-flow/forgot-password/forgot-password.page.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./forgot-password.page.scss */ "./src/app/forgot-password-flow/forgot-password/forgot-password.page.scss")).default]
        })
    ], ForgotPasswordPage);
    return ForgotPasswordPage;
}(_base_base_page__WEBPACK_IMPORTED_MODULE_8__["BasePage"]));



/***/ })

}]);
//# sourceMappingURL=forgot-password-flow-forgot-password-forgot-password-module.js.map