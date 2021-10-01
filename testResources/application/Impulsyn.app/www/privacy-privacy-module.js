(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["privacy-privacy-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/privacy/privacy.page.html":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/privacy/privacy.page.html ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-header [showBackButton]=\"showBackButton\" [title]=\"'settings.privacy'\" (backButtonClick)=\"goBack()\"></app-header>\n\n<ion-content class=\"ion-padding\">\n  <div class=\"flex-container\">\n    <form *ngIf=\"formGroup\" [formGroup]=\"formGroup\">\n      <ion-row class=\"flex-item\">\n        <ion-col size=\"12\" class=\"ion-text-center\">\n          <div class=\"screen-big-title\" color=\"secondary\">{{ 'privacy.title' | translate }}</div>\n        </ion-col>\n      </ion-row>\n\n      <ion-list class=\"ion-padding-vertical ion-margin-vertical\">\n        <ion-radio-group [formControlName]=\"'privacy'\">\n          <ion-item class=\"ion-no-border\">\n            <ion-label>{{ 'privacy.public'| translate }}</ion-label>\n            <ion-radio slot=\"start\" [value]=\"'public'\"></ion-radio>\n            <ion-icon\n              name=\"help-circle-outline\"\n              class=\"big-size icon-end\"\n              (click)=\"presentPopover($event,1)\"\n            ></ion-icon>\n          </ion-item>\n          <ion-item class=\"ion-no-border\">\n            <ion-label>{{ 'privacy.private' | translate }}</ion-label>\n            <ion-radio slot=\"start\" [value]=\"'private'\"></ion-radio>\n            <ion-icon\n              name=\"help-circle-outline\"\n              class=\"big-size icon-end\"\n              (click)=\"presentPopover($event,2)\"\n            ></ion-icon>\n          </ion-item>\n        </ion-radio-group>\n      </ion-list>\n      <app-action-button (actionButtonClick)=\"changePrivacy()\" [buttonText]=\"'buttons.save'\"></app-action-button>\n    </form>\n  </div>\n</ion-content>\n");

/***/ }),

/***/ "./src/app/privacy/privacy-routing.module.ts":
/*!***************************************************!*\
  !*** ./src/app/privacy/privacy-routing.module.ts ***!
  \***************************************************/
/*! exports provided: PrivacyPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PrivacyPageRoutingModule", function() { return PrivacyPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _privacy_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./privacy.page */ "./src/app/privacy/privacy.page.ts");




var routes = [
    {
        path: '',
        component: _privacy_page__WEBPACK_IMPORTED_MODULE_3__["PrivacyPage"],
    },
];
var PrivacyPageRoutingModule = /** @class */ (function () {
    function PrivacyPageRoutingModule() {
    }
    PrivacyPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], PrivacyPageRoutingModule);
    return PrivacyPageRoutingModule;
}());



/***/ }),

/***/ "./src/app/privacy/privacy.module.ts":
/*!*******************************************!*\
  !*** ./src/app/privacy/privacy.module.ts ***!
  \*******************************************/
/*! exports provided: PrivacyPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PrivacyPageModule", function() { return PrivacyPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _privacy_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./privacy-routing.module */ "./src/app/privacy/privacy-routing.module.ts");
/* harmony import */ var _privacy_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./privacy.page */ "./src/app/privacy/privacy.page.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../@shared/shared.module */ "./src/app/@shared/shared.module.ts");





var PrivacyPageModule = /** @class */ (function () {
    function PrivacyPageModule() {
    }
    PrivacyPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"], _privacy_routing_module__WEBPACK_IMPORTED_MODULE_2__["PrivacyPageRoutingModule"]],
            declarations: [_privacy_page__WEBPACK_IMPORTED_MODULE_3__["PrivacyPage"]],
        })
    ], PrivacyPageModule);
    return PrivacyPageModule;
}());



/***/ }),

/***/ "./src/app/privacy/privacy.page.scss":
/*!*******************************************!*\
  !*** ./src/app/privacy/privacy.page.scss ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-icon {\n  z-index: 2;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJpdmFjeS9wcml2YWN5LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFVBQUE7QUFDRiIsImZpbGUiOiJzcmMvYXBwL3ByaXZhY3kvcHJpdmFjeS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24taWNvbiB7XG4gIHotaW5kZXg6IDI7XG59XG4iXX0= */");

/***/ }),

/***/ "./src/app/privacy/privacy.page.ts":
/*!*****************************************!*\
  !*** ./src/app/privacy/privacy.page.ts ***!
  \*****************************************/
/*! exports provided: PrivacyPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PrivacyPage", function() { return PrivacyPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _base_base_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../base/base.page */ "./src/app/base/base.page.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngxs/store */ "./node_modules/@ngxs/store/__ivy_ngcc__/fesm2015/ngxs-store.js");
/* harmony import */ var _core_utils_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../@core/utils.service */ "./src/app/@core/utils.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _shared_components_info_popover_info_popover_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../@shared/components/info-popover/info-popover.component */ "./src/app/@shared/components/info-popover/info-popover.component.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
/* harmony import */ var _store_user_user_state__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../@store/user/user.state */ "./src/app/@store/user/user.state.ts");
/* harmony import */ var _global_utils__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../@global/utils */ "./src/app/@global/utils.ts");
/* harmony import */ var _store_user_user_actions__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../@store/user/user.actions */ "./src/app/@store/user/user.actions.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");















var PrivacyPage = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(PrivacyPage, _super);
    function PrivacyPage(location, router, store, utilsService, formBuilder, popoverController, translateService) {
        var _this = _super.call(this, location, router, store, utilsService) || this;
        _this.formBuilder = formBuilder;
        _this.popoverController = popoverController;
        _this.translateService = translateService;
        return _this;
    }
    PrivacyPage.prototype.ngOnInit = function () {
        var _this = this;
        var _a;
        this.getUserInfoSubscription$ = this.store.select(_store_user_user_state__WEBPACK_IMPORTED_MODULE_11__["UserState"].getUserInfo).subscribe(function (data) {
            _this.userInfo = _global_utils__WEBPACK_IMPORTED_MODULE_12__["Utils"].copyObject(data);
        });
        this.formGroup = this.formBuilder.group({
            privacy: [((_a = this.userInfo) === null || _a === void 0 ? void 0 : _a.private_profile) ? 'private' : 'public', _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required],
        });
    };
    PrivacyPage.prototype.presentPopover = function ($event, option) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var text, popover;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        text = this.translateService.instant("privacy.info" + option);
                        return [4 /*yield*/, this.popoverController.create({
                                event: $event,
                                component: _shared_components_info_popover_info_popover_component__WEBPACK_IMPORTED_MODULE_8__["InfoPopoverComponent"],
                                cssClass: 'custom-alert',
                                translucent: true,
                                componentProps: { text: text },
                            })];
                    case 1:
                        popover = _a.sent();
                        return [4 /*yield*/, popover.present()];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    PrivacyPage.prototype.changePrivacy = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var data;
            var _this = this;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                data = { private_profile: this.formGroup.get('privacy').value !== 'public' };
                this.store
                    .dispatch(new _store_user_user_actions__WEBPACK_IMPORTED_MODULE_13__["SetUserInfo"]({ userInfo: data }))
                    .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_14__["take"])(1))
                    .subscribe(function () {
                    _this.goBack();
                }, function (error) {
                    console.log(error);
                });
                return [2 /*return*/];
            });
        });
    };
    PrivacyPage.prototype.ngOnDestroy = function () {
        this.disconnectObservers();
    };
    PrivacyPage.prototype.disconnectObservers = function () {
        this.getUserInfoSubscription$.unsubscribe();
    };
    PrivacyPage.ctorParameters = function () { return [
        { type: _angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
        { type: _ngxs_store__WEBPACK_IMPORTED_MODULE_5__["Store"] },
        { type: _core_utils_service__WEBPACK_IMPORTED_MODULE_6__["UtilsService"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormBuilder"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__["PopoverController"] },
        { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__["TranslateService"] }
    ]; };
    PrivacyPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-privacy',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./privacy.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/privacy/privacy.page.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./privacy.page.scss */ "./src/app/privacy/privacy.page.scss")).default]
        })
    ], PrivacyPage);
    return PrivacyPage;
}(_base_base_page__WEBPACK_IMPORTED_MODULE_2__["BasePage"]));



/***/ })

}]);
//# sourceMappingURL=privacy-privacy-module.js.map