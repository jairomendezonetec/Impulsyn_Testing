(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["notifications-notifications-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/notifications/item-notification/item-notification.component.html":
/*!************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/notifications/item-notification/item-notification.component.html ***!
  \************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"item-profile\" [ngClass]=\"{ 'notification-not-readed': !notification.read }\" (click)=\"onNotificationClick()\">\n  <app-image-item [imageProfile]=\"notification.sender?.photo\" (imageClick)=\"onImageClick()\"></app-image-item>\n  <div class=\"notification-text col-xs-9\">\n    <span class=\"ion-margin-start small-size notification-lines\">{{ notification.message }}</span>\n  </div>\n  <div class=\"avatar-text col-xs-3\">\n    <span class=\"extra-small-size date\" color=\"secondary\">{{ notification.creation_date }}</span>\n  </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/notifications/notifications.page.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/notifications/notifications.page.html ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content>\n  <app-empty-message\n    *ngIf=\"!notificationList || notificationList?.notifications?.length <= 0\"\n    [text]=\"'notificationsPage.noNotifications'\"\n    [iconName]=\"'alert-circle-outline'\"\n  ></app-empty-message>\n  <div\n    *ngIf=\"notificationList?.notifications?.length > 0 && existUnreadNotification()\"\n    class=\"ion-text-end ion-padding\"\n  >\n    <a href=\"#\" (click)=\"markAsReadAll($event)\" class=\"regular-small-size\"\n      >{{ 'notificationsPage.markAsRead' | translate}}</a\n    >\n  </div>\n  <ion-list>\n    <div *ngFor=\"let item of notificationList?.notifications\">\n      <app-item-notification [info]=\"item\"></app-item-notification>\n    </div>\n  </ion-list>\n  <ion-infinite-scroll (ionInfinite)=\"getNextNotifications($event)\" *ngIf=\"!hideInfiniteScroll\">\n    <ion-infinite-scroll-content> </ion-infinite-scroll-content>\n  </ion-infinite-scroll>\n</ion-content>\n");

/***/ }),

/***/ "./src/app/notifications/item-notification/item-notification.component.scss":
/*!**********************************************************************************!*\
  !*** ./src/app/notifications/item-notification/item-notification.component.scss ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".item-profile.notification-not-readed {\n  background: var(--notification-not-readed);\n}\n.item-profile.notification-not-readed span {\n  font-weight: 600;\n}\n.item-profile.notification-not-readed .date {\n  color: var(--ion-color-dark);\n}\n.item-profile .date {\n  color: var(--ion-color-secondary);\n}\n.item-profile .notification-text {\n  overflow: hidden;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbm90aWZpY2F0aW9ucy9pdGVtLW5vdGlmaWNhdGlvbi9pdGVtLW5vdGlmaWNhdGlvbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDRTtFQUNFLDBDQUFBO0FBQUo7QUFDSTtFQUNFLGdCQUFBO0FBQ047QUFDSTtFQUNFLDRCQUFBO0FBQ047QUFFRTtFQUNFLGlDQUFBO0FBQUo7QUFHRTtFQUNFLGdCQUFBO0FBREoiLCJmaWxlIjoic3JjL2FwcC9ub3RpZmljYXRpb25zL2l0ZW0tbm90aWZpY2F0aW9uL2l0ZW0tbm90aWZpY2F0aW9uLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLml0ZW0tcHJvZmlsZSB7XG4gICYubm90aWZpY2F0aW9uLW5vdC1yZWFkZWQge1xuICAgIGJhY2tncm91bmQ6IHZhcigtLW5vdGlmaWNhdGlvbi1ub3QtcmVhZGVkKTtcbiAgICBzcGFuIHtcbiAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgfVxuICAgIC5kYXRlIHtcbiAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFyayk7XG4gICAgfVxuICB9XG4gIC5kYXRlIHtcbiAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXNlY29uZGFyeSk7XG4gIH1cblxuICAubm90aWZpY2F0aW9uLXRleHQge1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gIH1cbn1cbiJdfQ== */");

/***/ }),

/***/ "./src/app/notifications/item-notification/item-notification.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/notifications/item-notification/item-notification.component.ts ***!
  \********************************************************************************/
/*! exports provided: ItemNotificationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItemNotificationComponent", function() { return ItemNotificationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_core_utils_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/@core/utils.service */ "./src/app/@core/utils.service.ts");
/* harmony import */ var src_app_shared_enums_publisher_type__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/@shared/enums/publisher-type */ "./src/app/@shared/enums/publisher-type.ts");
/* harmony import */ var _core_push_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../@core/push.service */ "./src/app/@core/push.service.ts");
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngxs/store */ "./node_modules/@ngxs/store/__ivy_ngcc__/fesm2015/ngxs-store.js");
/* harmony import */ var _store_notifications_notifications_actions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../@store/notifications/notifications.actions */ "./src/app/@store/notifications/notifications.actions.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
/* harmony import */ var _global_utils__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../@global/utils */ "./src/app/@global/utils.ts");









var ItemNotificationComponent = /** @class */ (function () {
    function ItemNotificationComponent(utilsService, pushService, store, translateService) {
        this.utilsService = utilsService;
        this.pushService = pushService;
        this.store = store;
        this.translateService = translateService;
    }
    ItemNotificationComponent.prototype.ngOnInit = function () { };
    ItemNotificationComponent.prototype.ngOnChanges = function (changes) {
        var _a, _b, _c;
        if ((_a = changes['info']) === null || _a === void 0 ? void 0 : _a.currentValue) {
            this.notification = _global_utils__WEBPACK_IMPORTED_MODULE_8__["Utils"].copyObject((_b = changes['info']) === null || _b === void 0 ? void 0 : _b.currentValue);
            this.notification.message = this.composeNotificationMessage((_c = changes['info']) === null || _c === void 0 ? void 0 : _c.currentValue);
        }
    };
    ItemNotificationComponent.prototype.onImageClick = function () {
        this.utilsService.goProfile(this.info.sender.id, src_app_shared_enums_publisher_type__WEBPACK_IMPORTED_MODULE_3__["PUBLISHER_TYPE"].USER);
    };
    ItemNotificationComponent.prototype.onNotificationClick = function () {
        if (!this.info.read) {
            this.store.dispatch(new _store_notifications_notifications_actions__WEBPACK_IMPORTED_MODULE_6__["MarkAsRead"](this.info.id));
        }
        this.pushService.processCustomAction(this.info.additional_data);
    };
    ItemNotificationComponent.prototype.composeNotificationMessage = function (notification) {
        var messageKey = "notificationMessages." + notification.notification_data.action;
        var params = {};
        for (var i = 0; i < notification.notification_data.params.length; i++) {
            params["param" + (i + 1)] = notification.notification_data.params[i];
        }
        return this.translateService.instant(messageKey, params);
    };
    ItemNotificationComponent.ctorParameters = function () { return [
        { type: src_app_core_utils_service__WEBPACK_IMPORTED_MODULE_2__["UtilsService"] },
        { type: _core_push_service__WEBPACK_IMPORTED_MODULE_4__["PushService"] },
        { type: _ngxs_store__WEBPACK_IMPORTED_MODULE_5__["Store"] },
        { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateService"] }
    ]; };
    ItemNotificationComponent.propDecorators = {
        info: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }]
    };
    ItemNotificationComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-item-notification',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./item-notification.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/notifications/item-notification/item-notification.component.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./item-notification.component.scss */ "./src/app/notifications/item-notification/item-notification.component.scss")).default]
        })
    ], ItemNotificationComponent);
    return ItemNotificationComponent;
}());



/***/ }),

/***/ "./src/app/notifications/item-notification/item-notification.module.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/notifications/item-notification/item-notification.module.ts ***!
  \*****************************************************************************/
/*! exports provided: ItemNotificationComponentModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItemNotificationComponentModule", function() { return ItemNotificationComponentModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
/* harmony import */ var _item_notification_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./item-notification.component */ "./src/app/notifications/item-notification/item-notification.component.ts");
/* harmony import */ var src_app_shared_components_image_item_image_item_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/@shared/components/image-item/image-item.module */ "./src/app/@shared/components/image-item/image-item.module.ts");







var ItemNotificationComponentModule = /** @class */ (function () {
    function ItemNotificationComponentModule() {
    }
    ItemNotificationComponentModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_item_notification_component__WEBPACK_IMPORTED_MODULE_5__["ItemNotificationComponent"]],
            imports: [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateModule"].forChild(), _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], src_app_shared_components_image_item_image_item_module__WEBPACK_IMPORTED_MODULE_6__["ImageItemModule"]],
            exports: [_item_notification_component__WEBPACK_IMPORTED_MODULE_5__["ItemNotificationComponent"]],
        })
    ], ItemNotificationComponentModule);
    return ItemNotificationComponentModule;
}());



/***/ }),

/***/ "./src/app/notifications/notifications-routing.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/notifications/notifications-routing.module.ts ***!
  \***************************************************************/
/*! exports provided: NotificationsPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationsPageRoutingModule", function() { return NotificationsPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _notifications_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./notifications.page */ "./src/app/notifications/notifications.page.ts");




var routes = [
    {
        path: '',
        component: _notifications_page__WEBPACK_IMPORTED_MODULE_3__["NotificationsPage"],
    },
];
var NotificationsPageRoutingModule = /** @class */ (function () {
    function NotificationsPageRoutingModule() {
    }
    NotificationsPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], NotificationsPageRoutingModule);
    return NotificationsPageRoutingModule;
}());



/***/ }),

/***/ "./src/app/notifications/notifications.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/notifications/notifications.module.ts ***!
  \*******************************************************/
/*! exports provided: NotificationsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationsPageModule", function() { return NotificationsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _notifications_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./notifications-routing.module */ "./src/app/notifications/notifications-routing.module.ts");
/* harmony import */ var _notifications_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./notifications.page */ "./src/app/notifications/notifications.page.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../@shared/shared.module */ "./src/app/@shared/shared.module.ts");
/* harmony import */ var _item_notification_item_notification_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./item-notification/item-notification.module */ "./src/app/notifications/item-notification/item-notification.module.ts");






var NotificationsPageModule = /** @class */ (function () {
    function NotificationsPageModule() {
    }
    NotificationsPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"], _notifications_routing_module__WEBPACK_IMPORTED_MODULE_2__["NotificationsPageRoutingModule"], _item_notification_item_notification_module__WEBPACK_IMPORTED_MODULE_5__["ItemNotificationComponentModule"]],
            declarations: [_notifications_page__WEBPACK_IMPORTED_MODULE_3__["NotificationsPage"]],
        })
    ], NotificationsPageModule);
    return NotificationsPageModule;
}());



/***/ }),

/***/ "./src/app/notifications/notifications.page.scss":
/*!*******************************************************!*\
  !*** ./src/app/notifications/notifications.page.scss ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL25vdGlmaWNhdGlvbnMvbm90aWZpY2F0aW9ucy5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/notifications/notifications.page.ts":
/*!*****************************************************!*\
  !*** ./src/app/notifications/notifications.page.ts ***!
  \*****************************************************/
/*! exports provided: NotificationsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationsPage", function() { return NotificationsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngxs/store */ "./node_modules/@ngxs/store/__ivy_ngcc__/fesm2015/ngxs-store.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _global_constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../@global/constants */ "./src/app/@global/constants.ts");
/* harmony import */ var _store_notifications_notifications_actions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../@store/notifications/notifications.actions */ "./src/app/@store/notifications/notifications.actions.ts");
/* harmony import */ var _store_notifications_notifications_state__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../@store/notifications/notifications.state */ "./src/app/@store/notifications/notifications.state.ts");







var NotificationsPage = /** @class */ (function () {
    function NotificationsPage(store) {
        this.store = store;
        this.hideInfiniteScroll = false;
    }
    NotificationsPage.prototype.ngOnInit = function () {
        this.subscribeToNotifications();
    };
    NotificationsPage.prototype.ionViewWillEnter = function () {
        this.hideInfiniteScroll = false;
        this.store.dispatch(new _store_notifications_notifications_actions__WEBPACK_IMPORTED_MODULE_5__["GetUserNotifications"]({ limit: _global_constants__WEBPACK_IMPORTED_MODULE_4__["Constants"].NOTIFICATION_LOAD_LIMIT_NOTIFICATIONS }));
    };
    NotificationsPage.prototype.markAsReadAll = function (event) {
        event.preventDefault();
        this.store.dispatch(new _store_notifications_notifications_actions__WEBPACK_IMPORTED_MODULE_5__["MarkAllAsRead"]());
    };
    NotificationsPage.prototype.existUnreadNotification = function () {
        return this.notificationList.notifications.find(function (notification) { return notification.read === false; });
    };
    NotificationsPage.prototype.getNextNotifications = function (event) {
        var nextPage = this.notificationList.page + 1;
        if (nextPage <= this.notificationList.total_pages) {
            this.store
                .dispatch(new _store_notifications_notifications_actions__WEBPACK_IMPORTED_MODULE_5__["GetNextNotificationsPage"]({ page: nextPage, limit: _global_constants__WEBPACK_IMPORTED_MODULE_4__["Constants"].NOTIFICATION_LOAD_LIMIT_NOTIFICATIONS }))
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1))
                .subscribe(function () {
                event.target.complete();
            });
        }
        else {
            this.hideInfiniteScroll = true;
        }
    };
    NotificationsPage.prototype.subscribeToNotifications = function () {
        var _this = this;
        this.notificationsSubscription = this.store
            .select(_store_notifications_notifications_state__WEBPACK_IMPORTED_MODULE_6__["NotificationsState"].getUserNotifications)
            .subscribe(function (data) { return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this, void 0, void 0, function () {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                this.notificationList = data;
                return [2 /*return*/];
            });
        }); });
    };
    NotificationsPage.prototype.disconnectObservers = function () {
        if (this.notificationsSubscription) {
            this.notificationsSubscription.unsubscribe();
        }
    };
    NotificationsPage.prototype.ngOnDestroy = function () {
        this.disconnectObservers();
    };
    NotificationsPage.ctorParameters = function () { return [
        { type: _ngxs_store__WEBPACK_IMPORTED_MODULE_2__["Store"] }
    ]; };
    NotificationsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-notifications',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./notifications.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/notifications/notifications.page.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./notifications.page.scss */ "./src/app/notifications/notifications.page.scss")).default]
        })
    ], NotificationsPage);
    return NotificationsPage;
}());



/***/ })

}]);
//# sourceMappingURL=notifications-notifications-module.js.map