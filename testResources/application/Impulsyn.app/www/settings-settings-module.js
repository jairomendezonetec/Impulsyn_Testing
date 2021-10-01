(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["settings-settings-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/settings/settings.page.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/settings/settings.page.html ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-header [showBackButton]=\"showBackButton\" [title]=\"'menu.settings'\" (backButtonClick)=\"goBack()\"></app-header>\n\n<ion-content>\n  <ion-list>\n    <ion-item [routerLink]=\"['/select-language']\">\n      <ion-label>\n        <ion-icon name=\"at-outline\"></ion-icon>\n        {{ 'settings.language' | translate }}\n      </ion-label>\n    </ion-item>\n    <ion-item [routerLink]=\"['/change-password']\">\n      <ion-label> <ion-icon name=\"key-outline\"></ion-icon>{{ 'settings.changePassword' | translate }} </ion-label>\n    </ion-item>\n    <ion-item [routerLink]=\"['/edit-user-info']\">\n      <ion-label> <ion-icon name=\"pencil\"></ion-icon>{{ 'settings.editProfile' | translate }} </ion-label>\n    </ion-item>\n    <ion-item [routerLink]=\"['/privacy']\">\n      <ion-label> <ion-icon name=\"shield-checkmark-outline\"></ion-icon>{{ 'settings.privacy' | translate }} </ion-label>\n    </ion-item>\n    <ion-item [routerLink]=\"['/manage-notifications']\">\n      <ion-label>\n        <ion-icon name=\"notifications-outline\"></ion-icon>{{ 'settings.notifications' | translate }}\n      </ion-label>\n    </ion-item>\n    <ion-item [routerLink]=\"['/legal-data-options']\">\n      <ion-label>\n        <ion-icon name=\"information-circle-outline\"></ion-icon>{{ 'legalDataOptions.title' | translate }}\n      </ion-label>\n    </ion-item>\n    <ion-item (click)=\"signOut()\">\n      <ion-label> <ion-icon name=\"log-out-outline\"></ion-icon>{{ 'menu.logOut' | translate }} </ion-label>\n    </ion-item>\n  </ion-list>\n</ion-content>\n");

/***/ }),

/***/ "./src/app/settings/settings-routing.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/settings/settings-routing.module.ts ***!
  \*****************************************************/
/*! exports provided: SettingsPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingsPageRoutingModule", function() { return SettingsPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _settings_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./settings.page */ "./src/app/settings/settings.page.ts");




var routes = [
    {
        path: '',
        component: _settings_page__WEBPACK_IMPORTED_MODULE_3__["SettingsPage"],
    },
];
var SettingsPageRoutingModule = /** @class */ (function () {
    function SettingsPageRoutingModule() {
    }
    SettingsPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], SettingsPageRoutingModule);
    return SettingsPageRoutingModule;
}());



/***/ }),

/***/ "./src/app/settings/settings.module.ts":
/*!*********************************************!*\
  !*** ./src/app/settings/settings.module.ts ***!
  \*********************************************/
/*! exports provided: SettingsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingsPageModule", function() { return SettingsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _settings_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./settings-routing.module */ "./src/app/settings/settings-routing.module.ts");
/* harmony import */ var _settings_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./settings.page */ "./src/app/settings/settings.page.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../@shared/shared.module */ "./src/app/@shared/shared.module.ts");





var SettingsPageModule = /** @class */ (function () {
    function SettingsPageModule() {
    }
    SettingsPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"], _settings_routing_module__WEBPACK_IMPORTED_MODULE_2__["SettingsPageRoutingModule"]],
            declarations: [_settings_page__WEBPACK_IMPORTED_MODULE_3__["SettingsPage"]],
        })
    ], SettingsPageModule);
    return SettingsPageModule;
}());



/***/ }),

/***/ "./src/app/settings/settings.page.scss":
/*!*********************************************!*\
  !*** ./src/app/settings/settings.page.scss ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-item {\n  --padding-start: 0;\n  position: relative;\n}\nion-item ion-icon {\n  position: absolute;\n  left: 15px;\n  top: 15px;\n  font-size: 20px;\n}\nion-item ion-label {\n  padding-left: 50px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2V0dGluZ3Mvc2V0dGluZ3MucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQUE7RUFDQSxrQkFBQTtBQUNGO0FBQUU7RUFDRSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxTQUFBO0VBQ0EsZUFBQTtBQUVKO0FBQUU7RUFDRSxrQkFBQTtBQUVKIiwiZmlsZSI6InNyYy9hcHAvc2V0dGluZ3Mvc2V0dGluZ3MucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWl0ZW0ge1xuICAtLXBhZGRpbmctc3RhcnQ6IDA7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgaW9uLWljb24ge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBsZWZ0OiAxNXB4O1xuICAgIHRvcDogMTVweDtcbiAgICBmb250LXNpemU6IDIwcHg7XG4gIH1cbiAgaW9uLWxhYmVsIHtcbiAgICBwYWRkaW5nLWxlZnQ6IDUwcHg7XG4gIH1cbn1cbiJdfQ== */");

/***/ }),

/***/ "./src/app/settings/settings.page.ts":
/*!*******************************************!*\
  !*** ./src/app/settings/settings.page.ts ***!
  \*******************************************/
/*! exports provided: SettingsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingsPage", function() { return SettingsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngxs/store */ "./node_modules/@ngxs/store/__ivy_ngcc__/fesm2015/ngxs-store.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _core_utils_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../@core/utils.service */ "./src/app/@core/utils.service.ts");
/* harmony import */ var _base_base_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../base/base.page */ "./src/app/base/base.page.ts");
/* harmony import */ var _global_constants__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../@global/constants */ "./src/app/@global/constants.ts");
/* harmony import */ var _store_auth_auth_state__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../@store/auth/auth.state */ "./src/app/@store/auth/auth.state.ts");
/* harmony import */ var _store_auth_auth_actions__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../@store/auth/auth.actions */ "./src/app/@store/auth/auth.actions.ts");
/* harmony import */ var _core_analytics_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../@core/analytics.service */ "./src/app/@core/analytics.service.ts");
/* harmony import */ var _core_google_analytics_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../@core/google-analytics.service */ "./src/app/@core/google-analytics.service.ts");
/* harmony import */ var _core_navigation_extras_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../@core/navigation-extras.service */ "./src/app/@core/navigation-extras.service.ts");
/* harmony import */ var _core_push_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../@core/push.service */ "./src/app/@core/push.service.ts");














var SettingsPage = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(SettingsPage, _super);
    function SettingsPage(router, location, store, utilsService, analyticsService, navigationExtrasService, googleAnalyticsService, pushService) {
        var _this = _super.call(this, location, router, store, utilsService) || this;
        _this.analyticsService = analyticsService;
        _this.navigationExtrasService = navigationExtrasService;
        _this.googleAnalyticsService = googleAnalyticsService;
        _this.pushService = pushService;
        return _this;
    }
    SettingsPage.prototype.ngOnInit = function () { };
    SettingsPage.prototype.signOut = function () {
        // pinpoint
        this.analyticsService.record(_global_constants__WEBPACK_IMPORTED_MODULE_7__["Constants"].USER_LOGGED_OUT_EVENT, {
            userId: this.store.selectSnapshot(_store_auth_auth_state__WEBPACK_IMPORTED_MODULE_8__["AuthState"].getUserId),
        });
        // google analytics
        this.googleAnalyticsService.userSignOut();
        // turn off push notifications
        this.pushService.setExternalUserId('null');
        this.store.dispatch(new _store_auth_auth_actions__WEBPACK_IMPORTED_MODULE_9__["SignOut"]());
        this.navigationExtrasService.setExtras({ showGoBack: false });
        this.router.navigate(['/login']);
    };
    SettingsPage.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _angular_common__WEBPACK_IMPORTED_MODULE_4__["Location"] },
        { type: _ngxs_store__WEBPACK_IMPORTED_MODULE_3__["Store"] },
        { type: _core_utils_service__WEBPACK_IMPORTED_MODULE_5__["UtilsService"] },
        { type: _core_analytics_service__WEBPACK_IMPORTED_MODULE_10__["AnalyticsService"] },
        { type: _core_navigation_extras_service__WEBPACK_IMPORTED_MODULE_12__["NavigationExtrasService"] },
        { type: _core_google_analytics_service__WEBPACK_IMPORTED_MODULE_11__["GoogleAnalyticsService"] },
        { type: _core_push_service__WEBPACK_IMPORTED_MODULE_13__["PushService"] }
    ]; };
    SettingsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-settings',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./settings.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/settings/settings.page.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./settings.page.scss */ "./src/app/settings/settings.page.scss")).default]
        })
    ], SettingsPage);
    return SettingsPage;
}(_base_base_page__WEBPACK_IMPORTED_MODULE_6__["BasePage"]));



/***/ })

}]);
//# sourceMappingURL=settings-settings-module.js.map