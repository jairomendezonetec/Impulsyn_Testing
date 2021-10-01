(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["change-password-change-password-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/change-password/change-password.page.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/change-password/change-password.page.html ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-header [showBackButton]=\"showBackButton\" [title]=\"'changePass.title'\" (backButtonClick)=\"goBack()\"></app-header>\n\n<ion-content class=\"ion-padding\">\n  <div class=\"flex-container\">\n    <form [formGroup]=\"formGroup\">\n      <ion-row class=\"flex-item\">\n        <ion-col size=\"12\" class=\"ion-text-center\">\n          <div class=\"screen-big-title\" color=\"secondary\">{{ 'changePass.title2' | translate }}</div>\n        </ion-col>\n      </ion-row>\n      <ion-row class=\"flex-item ion-justify-content-center ion-padding-bottom ion-margin-bottom\">\n        <div class=\"pr col-xs-10 col-sm-8 col-lg-6\">\n          <ion-item lines=\"full\" class=\"ion-margin\">\n            <ion-label appPlatformMode>{{'formFields.currentPass' | translate}}</ion-label>\n            <ion-input\n              [type]=\"seePassword ? 'text' : 'password'\"\n              name=\"password\"\n              [formControlName]=\"'password'\"\n              required\n              maxlength=\"25\"\n              data-test=\"password-input\"\n              class=\"pass-input\"\n            ></ion-input>\n            <app-icon-clicked\n              color=\"secondary\"\n              class=\"extrabig-size icon-input-end\"\n              (buttonClick)=\"onSeePassword($event)\"\n              [iconNameInitial]=\"'eye-outline'\"\n              [iconNameTapped]=\"'eye-off-outline'\"\n            ></app-icon-clicked>\n          </ion-item>\n          <app-show-errors [control]=\"formGroup.controls['password']\"></app-show-errors>\n        </div>\n        <div class=\"pr col-xs-10 col-sm-8 col-lg-6\">\n          <ion-item lines=\"full\" class=\"ion-margin\">\n            <ion-label appPlatformMode>{{'formFields.newPass' | translate}}</ion-label>\n            <ion-input\n              [type]=\"seeNewPassword ? 'text' : 'password'\"\n              name=\"password\"\n              [formControlName]=\"'newPassword'\"\n              required\n              maxlength=\"25\"\n              data-test=\"password-input\"\n            ></ion-input>\n            <app-icon-clicked\n              color=\"secondary\"\n              class=\"extrabig-size icon-input-end\"\n              (buttonClick)=\"onSeeNewPassword($event)\"\n              [iconNameInitial]=\"'eye-outline'\"\n              [iconNameTapped]=\"'eye-off-outline'\"\n            ></app-icon-clicked>\n          </ion-item>\n          <app-show-errors [control]=\"formGroup.controls['newPassword']\"></app-show-errors>\n        </div>\n      </ion-row>\n      <app-action-button (actionButtonClick)=\"changePass()\" [buttonText]=\"'buttons.accept'\"></app-action-button>\n    </form>\n  </div>\n</ion-content>\n");

/***/ }),

/***/ "./src/app/change-password/change-password-routing.module.ts":
/*!*******************************************************************!*\
  !*** ./src/app/change-password/change-password-routing.module.ts ***!
  \*******************************************************************/
/*! exports provided: ChangePasswordPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChangePasswordPageRoutingModule", function() { return ChangePasswordPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _change_password_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./change-password.page */ "./src/app/change-password/change-password.page.ts");




var routes = [
    {
        path: '',
        component: _change_password_page__WEBPACK_IMPORTED_MODULE_3__["ChangePasswordPage"],
    },
];
var ChangePasswordPageRoutingModule = /** @class */ (function () {
    function ChangePasswordPageRoutingModule() {
    }
    ChangePasswordPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], ChangePasswordPageRoutingModule);
    return ChangePasswordPageRoutingModule;
}());



/***/ }),

/***/ "./src/app/change-password/change-password.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/change-password/change-password.module.ts ***!
  \***********************************************************/
/*! exports provided: ChangePasswordPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChangePasswordPageModule", function() { return ChangePasswordPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _change_password_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./change-password-routing.module */ "./src/app/change-password/change-password-routing.module.ts");
/* harmony import */ var _change_password_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./change-password.page */ "./src/app/change-password/change-password.page.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../@shared/shared.module */ "./src/app/@shared/shared.module.ts");





var ChangePasswordPageModule = /** @class */ (function () {
    function ChangePasswordPageModule() {
    }
    ChangePasswordPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"], _change_password_routing_module__WEBPACK_IMPORTED_MODULE_2__["ChangePasswordPageRoutingModule"]],
            declarations: [_change_password_page__WEBPACK_IMPORTED_MODULE_3__["ChangePasswordPage"]],
        })
    ], ChangePasswordPageModule);
    return ChangePasswordPageModule;
}());



/***/ }),

/***/ "./src/app/change-password/change-password.page.scss":
/*!***********************************************************!*\
  !*** ./src/app/change-password/change-password.page.scss ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".flex-vertical-space .flex-container {\n  justify-content: start;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2hhbmdlLXBhc3N3b3JkL2NoYW5nZS1wYXNzd29yZC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxzQkFBQTtBQUNGIiwiZmlsZSI6InNyYy9hcHAvY2hhbmdlLXBhc3N3b3JkL2NoYW5nZS1wYXNzd29yZC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZmxleC12ZXJ0aWNhbC1zcGFjZSAuZmxleC1jb250YWluZXIge1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHN0YXJ0O1xufVxuIl19 */");

/***/ }),

/***/ "./src/app/change-password/change-password.page.ts":
/*!*********************************************************!*\
  !*** ./src/app/change-password/change-password.page.ts ***!
  \*********************************************************/
/*! exports provided: ChangePasswordPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChangePasswordPage", function() { return ChangePasswordPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngxs/store */ "./node_modules/@ngxs/store/__ivy_ngcc__/fesm2015/ngxs-store.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _shared_validators_form_custom_validators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../@shared/validators/form-custom-validators */ "./src/app/@shared/validators/form-custom-validators.ts");
/* harmony import */ var _store_auth_auth_actions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../@store/auth/auth.actions */ "./src/app/@store/auth/auth.actions.ts");
/* harmony import */ var _base_base_page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../base/base.page */ "./src/app/base/base.page.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _core_utils_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../@core/utils.service */ "./src/app/@core/utils.service.ts");
/* harmony import */ var _global_constants__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../@global/constants */ "./src/app/@global/constants.ts");
/* harmony import */ var _core_inform_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../@core/inform.service */ "./src/app/@core/inform.service.ts");
/* harmony import */ var _store_user_user_state__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../@store/user/user.state */ "./src/app/@store/user/user.state.ts");
/* harmony import */ var _core_storage_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../@core/storage.service */ "./src/app/@core/storage.service.ts");
/* harmony import */ var _login_model_credentials__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../login/model/credentials */ "./src/app/login/model/credentials.ts");
















var ChangePasswordPage = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(ChangePasswordPage, _super);
    function ChangePasswordPage(router, location, store, utilsService, formBuilder, actions, informService, storage) {
        var _this = _super.call(this, location, router, store, utilsService) || this;
        _this.formBuilder = formBuilder;
        _this.actions = actions;
        _this.informService = informService;
        _this.storage = storage;
        _this.seePassword = false;
        _this.seeNewPassword = false;
        return _this;
    }
    ChangePasswordPage.prototype.ngOnInit = function () {
        this.initForm();
        this.actions.pipe(Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_4__["ofActionSuccessful"])(_store_auth_auth_actions__WEBPACK_IMPORTED_MODULE_7__["ChangeUserPassword"])).subscribe(function (data) {
            console.log('Data from aws');
            console.dir(data);
        });
    };
    ChangePasswordPage.prototype.initForm = function () {
        this.formGroup = this.formBuilder.group({
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            newPassword: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _shared_validators_form_custom_validators__WEBPACK_IMPORTED_MODULE_6__["FormCustomValidators"].validatePassPattern]],
        });
    };
    ChangePasswordPage.prototype.onSeePassword = function ($event) {
        this.seePassword = !this.seePassword;
    };
    ChangePasswordPage.prototype.onSeeNewPassword = function ($event) {
        this.seeNewPassword = !this.seeNewPassword;
    };
    ChangePasswordPage.prototype.changePass = function () {
        var _this = this;
        if (this.utilsService.isValidForm(this.formGroup)) {
            this.store
                .dispatch(new _store_auth_auth_actions__WEBPACK_IMPORTED_MODULE_7__["ChangeUserPassword"]({
                user: null,
                oldPassword: this.formGroup.get('password').value,
                newPassword: this.formGroup.get('newPassword').value,
            }))
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["take"])(1))
                .subscribe(function () {
                _this.informService.showInfo('formValidations.changePassSuccess');
                _this.setUserCredentials(_this.store.selectSnapshot(_store_user_user_state__WEBPACK_IMPORTED_MODULE_13__["UserState"].getUserInfo).email, _this.formGroup.get('newPassword').value);
                _this.router.navigate([_global_constants__WEBPACK_IMPORTED_MODULE_11__["Constants"].FIRST_PAGE_AFTER_LOGIN]);
            }, function (error) {
                console.log(error);
            });
        }
    };
    ChangePasswordPage.prototype.setUserCredentials = function (username, password) {
        var userCredentials = new _login_model_credentials__WEBPACK_IMPORTED_MODULE_15__["CredentialsModel"](username, password);
        this.storage.setCredentials(userCredentials);
    };
    ChangePasswordPage.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: _angular_common__WEBPACK_IMPORTED_MODULE_9__["Location"] },
        { type: _ngxs_store__WEBPACK_IMPORTED_MODULE_4__["Store"] },
        { type: _core_utils_service__WEBPACK_IMPORTED_MODULE_10__["UtilsService"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
        { type: _ngxs_store__WEBPACK_IMPORTED_MODULE_4__["Actions"] },
        { type: _core_inform_service__WEBPACK_IMPORTED_MODULE_12__["InformService"] },
        { type: _core_storage_service__WEBPACK_IMPORTED_MODULE_14__["StorageService"] }
    ]; };
    ChangePasswordPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-change-password',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./change-password.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/change-password/change-password.page.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./change-password.page.scss */ "./src/app/change-password/change-password.page.scss")).default]
        })
    ], ChangePasswordPage);
    return ChangePasswordPage;
}(_base_base_page__WEBPACK_IMPORTED_MODULE_8__["BasePage"]));



/***/ })

}]);
//# sourceMappingURL=change-password-change-password-module.js.map