(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tabnav-tabnav-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/tabnav/tabnav.page.html":
/*!*******************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tabnav/tabnav.page.html ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-header\n  [showBackButton]=\"false\"\n  [titleImage]=\"titleImage\"\n  [menuImage]=\"(userInfo$ | async)?.photo\"\n  [actionIconList]=\"actionIconList\"\n  (actionIconListClick)=\"listenIconClick($event)\"\n></app-header>\n\n<ion-content>\n  <ion-tabs #tabs (ionTabsWillChange)=\"onTabEnter($event)\">\n    <ion-tab-bar slot=\"bottom\">\n      <ion-tab-button tab=\"timeline\" layout=\"icon-top\">\n        <ion-icon name=\"home-outline\"></ion-icon>\n        <ion-label>{{'tabs.tab1' | translate}}</ion-label>\n      </ion-tab-button>\n\n      <ion-tab-button tab=\"networking\" layout=\"icon-top\">\n        <ion-icon name=\"people-outline\"></ion-icon>\n        <ion-label>{{'tabs.tab2' | translate}}</ion-label>\n      </ion-tab-button>\n\n      <ion-tab-button tab=\"opportunities\" layout=\"icon-top\">\n        <ion-icon name=\"briefcase-outline\"></ion-icon>\n        <ion-label>{{'tabs.tab3' | translate}}</ion-label>\n      </ion-tab-button>\n\n      <ion-tab-button tab=\"notifications\" layout=\"icon-top\">\n        <ion-icon name=\"notifications-outline\"></ion-icon>\n        <ion-label>{{'tabs.tab4' | translate}}</ion-label>\n        <ion-badge *ngIf=\"notificationList.total_unread_count > 0\"> {{notificationList.total_unread_count}}</ion-badge>\n      </ion-tab-button>\n\n      <ion-tab-button tab=\"academics\" layout=\"icon-top\">\n        <ion-icon name=\"school-outline\"></ion-icon>\n        <ion-label>{{'tabs.tab5' | translate}}</ion-label>\n      </ion-tab-button>\n    </ion-tab-bar>\n  </ion-tabs>\n</ion-content>\n");

/***/ }),

/***/ "./src/app/tabnav/tabnav-routing.module.ts":
/*!*************************************************!*\
  !*** ./src/app/tabnav/tabnav-routing.module.ts ***!
  \*************************************************/
/*! exports provided: TabnavPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabnavPageRoutingModule", function() { return TabnavPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _tabnav_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tabnav.page */ "./src/app/tabnav/tabnav.page.ts");




var routes = [
    {
        path: '',
        component: _tabnav_page__WEBPACK_IMPORTED_MODULE_3__["TabnavPage"],
        children: [
            {
                path: 'timeline',
                loadChildren: function () { return Promise.all(/*! import() | timeline-timeline-module */[__webpack_require__.e("default~publication-detail-publication-detail-module~timeline-timeline-module"), __webpack_require__.e("timeline-timeline-module")]).then(__webpack_require__.bind(null, /*! ../timeline/timeline.module */ "./src/app/timeline/timeline.module.ts")).then(function (m) { return m.TimelinePageModule; }); },
            },
            {
                path: 'networking',
                loadChildren: function () { return Promise.all(/*! import() | networking-networking-module */[__webpack_require__.e("common"), __webpack_require__.e("networking-networking-module")]).then(__webpack_require__.bind(null, /*! ../networking/networking.module */ "./src/app/networking/networking.module.ts")).then(function (m) { return m.NetworkingPageModule; }); },
            },
            {
                path: 'opportunities',
                loadChildren: function () { return __webpack_require__.e(/*! import() | opportunities-opportunities-module */ "opportunities-opportunities-module").then(__webpack_require__.bind(null, /*! ../opportunities/opportunities.module */ "./src/app/opportunities/opportunities.module.ts")).then(function (m) { return m.OpportunitiesPageModule; }); },
            },
            {
                path: 'notifications',
                loadChildren: function () { return __webpack_require__.e(/*! import() | notifications-notifications-module */ "notifications-notifications-module").then(__webpack_require__.bind(null, /*! ../notifications/notifications.module */ "./src/app/notifications/notifications.module.ts")).then(function (m) { return m.NotificationsPageModule; }); },
            },
            {
                path: 'academics',
                loadChildren: function () { return __webpack_require__.e(/*! import() | academics-academics-module */ "academics-academics-module").then(__webpack_require__.bind(null, /*! ../academics/academics.module */ "./src/app/academics/academics.module.ts")).then(function (m) { return m.AcademicsPageModule; }); },
            },
            {
                path: '',
                redirectTo: 'timeline',
                pathMatch: 'full',
            },
        ],
    },
];
var TabnavPageRoutingModule = /** @class */ (function () {
    function TabnavPageRoutingModule() {
    }
    TabnavPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], TabnavPageRoutingModule);
    return TabnavPageRoutingModule;
}());



/***/ }),

/***/ "./src/app/tabnav/tabnav.module.ts":
/*!*****************************************!*\
  !*** ./src/app/tabnav/tabnav.module.ts ***!
  \*****************************************/
/*! exports provided: TabnavPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabnavPageModule", function() { return TabnavPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _tabnav_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tabnav-routing.module */ "./src/app/tabnav/tabnav-routing.module.ts");
/* harmony import */ var _tabnav_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tabnav.page */ "./src/app/tabnav/tabnav.page.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../@shared/shared.module */ "./src/app/@shared/shared.module.ts");





var TabnavPageModule = /** @class */ (function () {
    function TabnavPageModule() {
    }
    TabnavPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"], _tabnav_routing_module__WEBPACK_IMPORTED_MODULE_2__["TabnavPageRoutingModule"]],
            declarations: [_tabnav_page__WEBPACK_IMPORTED_MODULE_3__["TabnavPage"]],
        })
    ], TabnavPageModule);
    return TabnavPageModule;
}());



/***/ }),

/***/ "./src/app/tabnav/tabnav.page.scss":
/*!*****************************************!*\
  !*** ./src/app/tabnav/tabnav.page.scss ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-tab-button {\n  --color: var(--ion-color-primary-contrast);\n  --color-selected: var(--ion-color-secondary);\n}\n\nion-tab-bar {\n  position: relative;\n  width: 100%;\n  margin: 0 auto;\n  --background: var(--ion-color-primary);\n}\n\nion-badge {\n  color: white;\n  --background: var(--ion-color-danger-shade);\n  font-size: 1.2rem;\n  font-size: 0.8em;\n  padding: 5px;\n  margin-left: -5px;\n}\n\n@media (max-width: 576px) {\n  .md ion-tab-button {\n    --padding-end: 6px;\n    --padding-start: 6px;\n  }\n\n  ion-label {\n    font-size: 10px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGFibmF2L3RhYm5hdi5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSwwQ0FBQTtFQUNBLDRDQUFBO0FBQ0Y7O0FBQ0E7RUFDRSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxjQUFBO0VBQ0Esc0NBQUE7QUFFRjs7QUFDQTtFQUNFLFlBQUE7RUFDQSwyQ0FBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7QUFFRjs7QUFDQTtFQUVJO0lBQ0Usa0JBQUE7SUFDQSxvQkFBQTtFQUNKOztFQUVBO0lBQ0UsZUFBQTtFQUNGO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC90YWJuYXYvdGFibmF2LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi10YWItYnV0dG9uIHtcbiAgLS1jb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnktY29udHJhc3QpO1xuICAtLWNvbG9yLXNlbGVjdGVkOiB2YXIoLS1pb24tY29sb3Itc2Vjb25kYXJ5KTtcbn1cbmlvbi10YWItYmFyIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIC0tYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xufVxuXG5pb24tYmFkZ2Uge1xuICBjb2xvcjogd2hpdGU7XG4gIC0tYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLWRhbmdlci1zaGFkZSk7XG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xuICBmb250LXNpemU6IDAuOGVtO1xuICBwYWRkaW5nOiA1cHg7XG4gIG1hcmdpbi1sZWZ0OiAtNXB4O1xufVxuXG5AbWVkaWEgKG1heC13aWR0aDogNTc2cHgpIHtcbiAgLm1kIHtcbiAgICBpb24tdGFiLWJ1dHRvbiB7XG4gICAgICAtLXBhZGRpbmctZW5kOiA2cHg7XG4gICAgICAtLXBhZGRpbmctc3RhcnQ6IDZweDtcbiAgICB9XG4gIH1cbiAgaW9uLWxhYmVsIHtcbiAgICBmb250LXNpemU6IDEwcHg7XG4gIH1cbn1cbiJdfQ== */");

/***/ }),

/***/ "./src/app/tabnav/tabnav.page.ts":
/*!***************************************!*\
  !*** ./src/app/tabnav/tabnav.page.ts ***!
  \***************************************/
/*! exports provided: TabnavPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabnavPage", function() { return TabnavPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _base_base_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../base/base.page */ "./src/app/base/base.page.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _global_constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../@global/constants */ "./src/app/@global/constants.ts");
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngxs/store */ "./node_modules/@ngxs/store/__ivy_ngcc__/fesm2015/ngxs-store.js");
/* harmony import */ var _core_utils_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../@core/utils.service */ "./src/app/@core/utils.service.ts");
/* harmony import */ var _core_push_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../@core/push.service */ "./src/app/@core/push.service.ts");
/* harmony import */ var _store_notifications_notifications_state__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../@store/notifications/notifications.state */ "./src/app/@store/notifications/notifications.state.ts");
/* harmony import */ var _core_navigation_extras_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../@core/navigation-extras.service */ "./src/app/@core/navigation-extras.service.ts");
/* harmony import */ var _store_chats_chats_state__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../@store/chats/chats.state */ "./src/app/@store/chats/chats.state.ts");
/* harmony import */ var _global_utils__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../@global/utils */ "./src/app/@global/utils.ts");













var MAIL_ICON = 'mail-outline';
var TabnavPage = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(TabnavPage, _super);
    function TabnavPage(location, router, store, utilsService, pushService, navigationExtrasService) {
        var _this = _super.call(this, location, router, store, utilsService) || this;
        _this.pushService = pushService;
        _this.navigationExtrasService = navigationExtrasService;
        _this.titleImage = _global_constants__WEBPACK_IMPORTED_MODULE_5__["Constants"].LOGO_PATH;
        _this.actionIconList = [{ name: 'search' }, { name: MAIL_ICON }];
        _this.pushService.initPush();
        return _this;
    }
    TabnavPage.prototype.ngOnInit = function () {
        this.subscribeToNotifications();
        this.subscribeToChatList();
    };
    TabnavPage.prototype.doIonViewWillEnter = function () {
        this.onTabEnter(this.tabs.getSelected());
    };
    TabnavPage.prototype.onTabEnter = function (tab) {
        this.utilsService.publishTabNavEnterEvent(tab.tab || tab);
    };
    TabnavPage.prototype.listenIconClick = function ($event) {
        if ($event.index === 0) {
            this.navigationExtrasService.setExtras({ origin: this.router.url });
            this.router.navigate(['/search']);
        }
        else {
            this.router.navigate(['/messages']);
        }
    };
    TabnavPage.prototype.subscribeToNotifications = function () {
        var _this = this;
        this.notificationsSubscription = this.store.select(_store_notifications_notifications_state__WEBPACK_IMPORTED_MODULE_9__["NotificationsState"].getUserNotifications).subscribe(function (data) {
            _this.notificationList = data;
        });
    };
    TabnavPage.prototype.subscribeToChatList = function () {
        var _this = this;
        this.chatListSubscription = this.store.select(_store_chats_chats_state__WEBPACK_IMPORTED_MODULE_11__["ChatsState"].getChatList).subscribe(function (data) {
            var iconMailIndex = _this.actionIconList.findIndex(function (icon) { return icon.name === MAIL_ICON; });
            _this.actionIconList[iconMailIndex]['badge'] = _global_utils__WEBPACK_IMPORTED_MODULE_12__["Utils"].getBadgeValue(data.total_unread_count);
        });
    };
    TabnavPage.prototype.disconnectObservers = function () {
        if (this.notificationsSubscription) {
            this.notificationsSubscription.unsubscribe();
        }
        if (this.chatListSubscription) {
            this.chatListSubscription.unsubscribe();
        }
    };
    TabnavPage.prototype.ngOnDestroy = function () {
        this.disconnectObservers();
    };
    TabnavPage.ctorParameters = function () { return [
        { type: _angular_common__WEBPACK_IMPORTED_MODULE_4__["Location"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: _ngxs_store__WEBPACK_IMPORTED_MODULE_6__["Store"] },
        { type: _core_utils_service__WEBPACK_IMPORTED_MODULE_7__["UtilsService"] },
        { type: _core_push_service__WEBPACK_IMPORTED_MODULE_8__["PushService"] },
        { type: _core_navigation_extras_service__WEBPACK_IMPORTED_MODULE_10__["NavigationExtrasService"] }
    ]; };
    TabnavPage.propDecorators = {
        tabs: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"], args: ['tabs', { static: false },] }]
    };
    TabnavPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-tabnav',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./tabnav.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/tabnav/tabnav.page.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./tabnav.page.scss */ "./src/app/tabnav/tabnav.page.scss")).default]
        })
    ], TabnavPage);
    return TabnavPage;
}(_base_base_page__WEBPACK_IMPORTED_MODULE_2__["BasePage"]));



/***/ })

}]);
//# sourceMappingURL=tabnav-tabnav-module.js.map