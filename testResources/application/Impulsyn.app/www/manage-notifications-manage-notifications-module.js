(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["manage-notifications-manage-notifications-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/manage-notifications/manage-notifications.page.html":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/manage-notifications/manage-notifications.page.html ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-header\n  [showBackButton]=\"showBackButton\"\n  [title]=\"'settings.notifications'\"\n  (backButtonClick)=\"goBack()\"\n></app-header>\n\n<ion-content class=\"ion-padding\">\n  <div class=\"flex-container\">\n    <form *ngIf=\"formGroup\" [formGroup]=\"formGroup\">\n      <ion-row class=\"flex-item\">\n        <ion-col size=\"12\" class=\"ion-text-center\">\n          <div class=\"screen-big-title\" color=\"secondary\">{{ 'manageNotifications.title' | translate }}</div>\n        </ion-col>\n      </ion-row>\n\n      <div class=\"flex-justify-content-center\">\n        <div class=\"pr col-xs-12 col-sm-8 col-lg-6\">\n          <ion-item lines=\"full\" class=\"ion-margin ion-no-border\">\n            <ion-label class=\"regular-size\">{{ 'manageNotifications.push' | translate }}</ion-label>\n            <ion-toggle\n              slot=\"end\"\n              name=\"all\"\n              color=\"secondary\"\n              [formControlName]=\"'push_notifications'\"\n              (ionChange)=\"changePush()\"\n            ></ion-toggle>\n          </ion-item>\n        </div>\n      </div>\n      <div class=\"flex-justify-content-center\">\n        <div class=\"pr col-xs-12 col-sm-8 col-lg-6\">\n          <ion-item lines=\"full\" class=\"ion-margin ion-no-border\">\n            <ion-label class=\"regular-size\">{{ 'manageNotifications.email' | translate }}</ion-label>\n            <ion-toggle\n              slot=\"end\"\n              name=\"all\"\n              color=\"secondary\"\n              [formControlName]=\"'email_notifications'\"\n              (ionChange)=\"changeEmail()\"\n            ></ion-toggle>\n          </ion-item>\n        </div>\n      </div>\n    </form>\n  </div>\n</ion-content>\n");

/***/ }),

/***/ "./src/app/manage-notifications/manage-notifications-routing.module.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/manage-notifications/manage-notifications-routing.module.ts ***!
  \*****************************************************************************/
/*! exports provided: ManageNotificationsPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManageNotificationsPageRoutingModule", function() { return ManageNotificationsPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _manage_notifications_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./manage-notifications.page */ "./src/app/manage-notifications/manage-notifications.page.ts");




var routes = [
    {
        path: '',
        component: _manage_notifications_page__WEBPACK_IMPORTED_MODULE_3__["ManageNotificationsPage"],
    },
];
var ManageNotificationsPageRoutingModule = /** @class */ (function () {
    function ManageNotificationsPageRoutingModule() {
    }
    ManageNotificationsPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], ManageNotificationsPageRoutingModule);
    return ManageNotificationsPageRoutingModule;
}());



/***/ }),

/***/ "./src/app/manage-notifications/manage-notifications.module.ts":
/*!*********************************************************************!*\
  !*** ./src/app/manage-notifications/manage-notifications.module.ts ***!
  \*********************************************************************/
/*! exports provided: ManageNotificationsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManageNotificationsPageModule", function() { return ManageNotificationsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _manage_notifications_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./manage-notifications-routing.module */ "./src/app/manage-notifications/manage-notifications-routing.module.ts");
/* harmony import */ var _manage_notifications_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./manage-notifications.page */ "./src/app/manage-notifications/manage-notifications.page.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../@shared/shared.module */ "./src/app/@shared/shared.module.ts");





var ManageNotificationsPageModule = /** @class */ (function () {
    function ManageNotificationsPageModule() {
    }
    ManageNotificationsPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"], _manage_notifications_routing_module__WEBPACK_IMPORTED_MODULE_2__["ManageNotificationsPageRoutingModule"]],
            declarations: [_manage_notifications_page__WEBPACK_IMPORTED_MODULE_3__["ManageNotificationsPage"]],
        })
    ], ManageNotificationsPageModule);
    return ManageNotificationsPageModule;
}());



/***/ }),

/***/ "./src/app/manage-notifications/manage-notifications.page.scss":
/*!*********************************************************************!*\
  !*** ./src/app/manage-notifications/manage-notifications.page.scss ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21hbmFnZS1ub3RpZmljYXRpb25zL21hbmFnZS1ub3RpZmljYXRpb25zLnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/manage-notifications/manage-notifications.page.ts":
/*!*******************************************************************!*\
  !*** ./src/app/manage-notifications/manage-notifications.page.ts ***!
  \*******************************************************************/
/*! exports provided: ManageNotificationsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManageNotificationsPage", function() { return ManageNotificationsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _base_base_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../base/base.page */ "./src/app/base/base.page.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngxs/store */ "./node_modules/@ngxs/store/__ivy_ngcc__/fesm2015/ngxs-store.js");
/* harmony import */ var _core_utils_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../@core/utils.service */ "./src/app/@core/utils.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _store_user_user_state__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../@store/user/user.state */ "./src/app/@store/user/user.state.ts");
/* harmony import */ var _store_user_user_actions__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../@store/user/user.actions */ "./src/app/@store/user/user.actions.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var src_app_core_push_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/@core/push.service */ "./src/app/@core/push.service.ts");












var ManageNotificationsPage = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(ManageNotificationsPage, _super);
    function ManageNotificationsPage(location, router, store, utilsService, pushService) {
        var _this = _super.call(this, location, router, store, utilsService) || this;
        _this.pushService = pushService;
        return _this;
    }
    ManageNotificationsPage.prototype.ngOnInit = function () {
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
    ManageNotificationsPage.prototype.initForm = function () {
        var _a, _b;
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_c) {
                this.formGroup = new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormGroup"]({
                    push_notifications: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"]((_a = this.store.selectSnapshot(_store_user_user_state__WEBPACK_IMPORTED_MODULE_8__["UserState"].getUserInfo)) === null || _a === void 0 ? void 0 : _a.push_notifications),
                    email_notifications: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"]((_b = this.store.selectSnapshot(_store_user_user_state__WEBPACK_IMPORTED_MODULE_8__["UserState"].getUserInfo)) === null || _b === void 0 ? void 0 : _b.email_notifications),
                });
                return [2 /*return*/];
            });
        });
    };
    ManageNotificationsPage.prototype.changePush = function () {
        var active = this.formGroup.get('push_notifications').value;
        if (active) {
            this.pushService.activatePush();
        }
        else {
            this.pushService.desactivatePush();
        }
        this.store
            .dispatch(new _store_user_user_actions__WEBPACK_IMPORTED_MODULE_9__["UpdatePushNotificationsStatus"](active))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["take"])(1))
            .subscribe(function () { }, function (error) {
            console.log(error);
        });
    };
    ManageNotificationsPage.prototype.changeEmail = function () {
        var active = this.formGroup.get('email_notifications').value;
        this.store
            .dispatch(new _store_user_user_actions__WEBPACK_IMPORTED_MODULE_9__["UpdateEmailNotificationsStatus"](active))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["take"])(1))
            .subscribe(function () { }, function (error) {
            console.log(error);
        });
    };
    ManageNotificationsPage.ctorParameters = function () { return [
        { type: _angular_common__WEBPACK_IMPORTED_MODULE_6__["Location"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: _ngxs_store__WEBPACK_IMPORTED_MODULE_4__["Store"] },
        { type: _core_utils_service__WEBPACK_IMPORTED_MODULE_5__["UtilsService"] },
        { type: src_app_core_push_service__WEBPACK_IMPORTED_MODULE_11__["PushService"] }
    ]; };
    ManageNotificationsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-manage-notifications',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./manage-notifications.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/manage-notifications/manage-notifications.page.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./manage-notifications.page.scss */ "./src/app/manage-notifications/manage-notifications.page.scss")).default]
        })
    ], ManageNotificationsPage);
    return ManageNotificationsPage;
}(_base_base_page__WEBPACK_IMPORTED_MODULE_2__["BasePage"]));



/***/ })

}]);
//# sourceMappingURL=manage-notifications-manage-notifications-module.js.map