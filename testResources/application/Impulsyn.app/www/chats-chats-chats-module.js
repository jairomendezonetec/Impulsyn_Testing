(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["chats-chats-chats-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/chats/chats/chats.page.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/chats/chats/chats.page.html ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-header [showBackButton]=\"showBackButton\" [title]=\"'messages.title' | translate\" (backButtonClick)=\"goBack()\">\n</app-header>\n\n<ion-content class=\"item-list\">\n  <ion-refresher slot=\"fixed\" (ionRefresh)=\"doRefresh($event)\">\n    <ion-refresher-content></ion-refresher-content>\n  </ion-refresher>\n  <app-chat-list-item\n    *ngFor=\"let chat of chatsData.chats\"\n    [chat]=\"chat\"\n    (photoClick)=\"goToUserProfile($event)\"\n    (chatClick)=\"goToChatDetail($event)\"\n  >\n  </app-chat-list-item>\n  <app-empty-message\n    *ngIf=\"!chatsData.chats || chatsData.chats.length === 0\"\n    [text]=\"'messages.noMessages'\"\n    [iconName]=\"'file-tray-outline'\"\n  ></app-empty-message>\n  <ion-infinite-scroll (ionInfinite)=\"getNextChats($event)\" *ngIf=\"showInfiniteScroll\">\n    <ion-infinite-scroll-content> </ion-infinite-scroll-content>\n  </ion-infinite-scroll>\n</ion-content>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/chats/components/chat-list-item/chat-list-item.component.html":
/*!*********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/chats/components/chat-list-item/chat-list-item.component.html ***!
  \*********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div\n  class=\"item-profile\"\n  [ngClass]=\"{ 'chat-not-readed': chat.total_unread_messages_count > 0 }\"\n  (click)=\"onChatClick()\"\n>\n  <div class=\"chat-user-image-container\">\n    <img\n      *ngIf=\"otherParticipant\"\n      class=\"chat-user-image\"\n      [src]=\"otherParticipant.photo\"\n      (click)=\"onPhotoClick($event)\"\n    />\n    <ion-badge *ngIf=\"chat.total_unread_messages_count > 0\" class=\"unread-messages\">\n      {{ chat.total_unread_messages_count }}</ion-badge\n    >\n  </div>\n\n  <div class=\"chat-data\">\n    <div class=\"chat-message-info avatar-text col-xs-10 four-lines col-md-10\">\n      <span class=\"regular-small-size\">{{ otherParticipant.complete_name }}</span>\n      <span class=\"small-size\"\n        >{{ isLastMessageFromOwnUser ? ('you' | translate) + ': ' : '' }}{{ chat.last_message.message }}</span\n      >\n    </div>\n    <div color=\"grey\" class=\"chat-message-date regular-small-size\">\n      {{ chat.last_message.creation_date_literal }}\n    </div>\n  </div>\n</div>\n");

/***/ }),

/***/ "./src/app/chats/chats/chats-routing.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/chats/chats/chats-routing.module.ts ***!
  \*****************************************************/
/*! exports provided: ChatsPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatsPageRoutingModule", function() { return ChatsPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _chats_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./chats.page */ "./src/app/chats/chats/chats.page.ts");




var routes = [
    {
        path: '',
        component: _chats_page__WEBPACK_IMPORTED_MODULE_3__["ChatsPage"],
    },
];
var ChatsPageRoutingModule = /** @class */ (function () {
    function ChatsPageRoutingModule() {
    }
    ChatsPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], ChatsPageRoutingModule);
    return ChatsPageRoutingModule;
}());



/***/ }),

/***/ "./src/app/chats/chats/chats.module.ts":
/*!*********************************************!*\
  !*** ./src/app/chats/chats/chats.module.ts ***!
  \*********************************************/
/*! exports provided: ChatsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatsPageModule", function() { return ChatsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _chats_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./chats-routing.module */ "./src/app/chats/chats/chats-routing.module.ts");
/* harmony import */ var _chats_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./chats.page */ "./src/app/chats/chats/chats.page.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../@shared/shared.module */ "./src/app/@shared/shared.module.ts");
/* harmony import */ var _components_chat_list_item_chat_list_item_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/chat-list-item/chat-list-item.module */ "./src/app/chats/components/chat-list-item/chat-list-item.module.ts");






var ChatsPageModule = /** @class */ (function () {
    function ChatsPageModule() {
    }
    ChatsPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"], _chats_routing_module__WEBPACK_IMPORTED_MODULE_2__["ChatsPageRoutingModule"], _components_chat_list_item_chat_list_item_module__WEBPACK_IMPORTED_MODULE_5__["ChatListItemModule"]],
            declarations: [_chats_page__WEBPACK_IMPORTED_MODULE_3__["ChatsPage"]],
        })
    ], ChatsPageModule);
    return ChatsPageModule;
}());



/***/ }),

/***/ "./src/app/chats/chats/chats.page.scss":
/*!*********************************************!*\
  !*** ./src/app/chats/chats/chats.page.scss ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NoYXRzL2NoYXRzL2NoYXRzLnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/chats/chats/chats.page.ts":
/*!*******************************************!*\
  !*** ./src/app/chats/chats/chats.page.ts ***!
  \*******************************************/
/*! exports provided: ChatsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatsPage", function() { return ChatsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _base_base_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../base/base.page */ "./src/app/base/base.page.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngxs/store */ "./node_modules/@ngxs/store/__ivy_ngcc__/fesm2015/ngxs-store.js");
/* harmony import */ var _core_utils_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../@core/utils.service */ "./src/app/@core/utils.service.ts");
/* harmony import */ var _store_chats_chats_state__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../@store/chats/chats.state */ "./src/app/@store/chats/chats.state.ts");
/* harmony import */ var _store_chats_chats_actions__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../@store/chats/chats.actions */ "./src/app/@store/chats/chats.actions.ts");
/* harmony import */ var _global_constants__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../@global/constants */ "./src/app/@global/constants.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");











var ChatsPage = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(ChatsPage, _super);
    function ChatsPage(router, location, store, utilsService) {
        var _this = _super.call(this, location, router, store, utilsService) || this;
        _this.showInfiniteScroll = true;
        return _this;
    }
    ChatsPage.prototype.ngOnInit = function () {
        this.subscribeToChatList();
    };
    ChatsPage.prototype.doIonViewWillEnter = function () {
        this.loadChatList();
    };
    ChatsPage.prototype.loadChatList = function () {
        this.store.dispatch(new _store_chats_chats_actions__WEBPACK_IMPORTED_MODULE_8__["GetUserChatList"]({ limit: _global_constants__WEBPACK_IMPORTED_MODULE_9__["Constants"].CHAT_LOAD_LIMIT }));
    };
    ChatsPage.prototype.doRefresh = function (event) {
        var subscription = this.store.dispatch(new _store_chats_chats_actions__WEBPACK_IMPORTED_MODULE_8__["GetUserChatList"]({ limit: _global_constants__WEBPACK_IMPORTED_MODULE_9__["Constants"].CHAT_LOAD_LIMIT })).subscribe(function () {
            subscription.unsubscribe();
            event.target.complete();
        }, function (error) {
            subscription.unsubscribe();
            event.target.complete();
        });
    };
    ChatsPage.prototype.subscribeToChatList = function () {
        var _this = this;
        this.chatListSubscription = this.store.select(_store_chats_chats_state__WEBPACK_IMPORTED_MODULE_7__["ChatsState"].getChatList).subscribe(function (data) {
            _this.chatsData = data;
            _this.showInfiniteScroll = data.page < data.total_pages;
        });
    };
    ChatsPage.prototype.getNextChats = function (event) {
        var nextPage = this.chatsData.page + 1;
        if (nextPage <= this.chatsData.total_pages) {
            this.store
                .dispatch(new _store_chats_chats_actions__WEBPACK_IMPORTED_MODULE_8__["AddNextUserChatList"]({ page: nextPage, limit: _global_constants__WEBPACK_IMPORTED_MODULE_9__["Constants"].CHAT_LOAD_LIMIT }))
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["take"])(1))
                .subscribe(function () {
                event.target.complete();
            });
        }
    };
    ChatsPage.prototype.goToChatDetail = function (chatId) {
        this.router.navigate(['/chat-detail', chatId]);
    };
    ChatsPage.prototype.goToUserProfile = function (userId) {
        this.router.navigate(['/user-profile', userId]);
    };
    ChatsPage.prototype.disconnectObservers = function () {
        if (this.chatListSubscription) {
            this.chatListSubscription.unsubscribe();
        }
    };
    ChatsPage.prototype.ngOnDestroy = function () {
        this.disconnectObservers();
    };
    ChatsPage.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: _angular_common__WEBPACK_IMPORTED_MODULE_4__["Location"] },
        { type: _ngxs_store__WEBPACK_IMPORTED_MODULE_5__["Store"] },
        { type: _core_utils_service__WEBPACK_IMPORTED_MODULE_6__["UtilsService"] }
    ]; };
    ChatsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-chats',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./chats.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/chats/chats/chats.page.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./chats.page.scss */ "./src/app/chats/chats/chats.page.scss")).default]
        })
    ], ChatsPage);
    return ChatsPage;
}(_base_base_page__WEBPACK_IMPORTED_MODULE_2__["BasePage"]));



/***/ }),

/***/ "./src/app/chats/components/chat-list-item/chat-list-item.component.scss":
/*!*******************************************************************************!*\
  !*** ./src/app/chats/components/chat-list-item/chat-list-item.component.scss ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".item-profile {\n  position: relative;\n  padding: 10px 16px;\n  margin-bottom: 1px;\n  width: 100%;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: start;\n}\n.item-profile.read {\n  background: var(--ion-color-primary-contrast);\n}\n.item-profile.unread {\n  background: rgba(120, 184, 166, 0.3);\n}\n.item-profile .avatar-image {\n  border-radius: 50%;\n  border: 2px solid var(--ion-color-secondary);\n  width: 64px;\n  height: 64px;\n  overflow: hidden;\n  padding: 1px;\n  margin-right: 16px;\n  -o-object-fit: cover;\n     object-fit: cover;\n}\n.item-profile > div {\n  display: flex;\n  flex-direction: row;\n}\n.item-profile .avatar-text {\n  flex-direction: column;\n}\n.chat-user-image-container {\n  position: relative;\n  flex: 1 0 auto;\n}\n.chat-user-image-container .chat-user-image {\n  border-radius: 50%;\n  border: 2px solid var(--ion-color-secondary);\n  height: 64px;\n  width: 64px;\n  -o-object-fit: cover;\n     object-fit: cover;\n}\n.chat-user-image-container .unread-messages {\n  position: absolute;\n  color: white;\n  --background: var(--ion-color-danger-shade);\n  font-size: 0.8em;\n  padding: 5px;\n  margin-left: -5px;\n}\n.chat-data {\n  display: flex;\n  flex: 1 1 auto;\n  justify-content: space-between;\n  width: 100%;\n}\n.chat-data .chat-message-info {\n  flex: 1 1 auto;\n}\n.chat-data .chat-message-date {\n  flex: 1 0 auto;\n}\n.chat-not-readed {\n  background: var(--notification-not-readed);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2hhdHMvY29tcG9uZW50cy9jaGF0LWxpc3QtaXRlbS9jaGF0LWxpc3QtaXRlbS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLHNCQUFBO0FBQ0Y7QUFBRTtFQUNFLDZDQUFBO0FBRUo7QUFBRTtFQUNFLG9DQUFBO0FBRUo7QUFBRTtFQUNFLGtCQUFBO0VBQ0EsNENBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0Esb0JBQUE7S0FBQSxpQkFBQTtBQUVKO0FBQUU7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7QUFFSjtBQUFFO0VBQ0Usc0JBQUE7QUFFSjtBQUVBO0VBQ0Usa0JBQUE7RUFDQSxjQUFBO0FBQ0Y7QUFDRTtFQUNFLGtCQUFBO0VBQ0EsNENBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLG9CQUFBO0tBQUEsaUJBQUE7QUFDSjtBQUVFO0VBQ0Usa0JBQUE7RUFDQSxZQUFBO0VBQ0EsMkNBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtBQUFKO0FBSUE7RUFDRSxhQUFBO0VBQ0EsY0FBQTtFQUNBLDhCQUFBO0VBQ0EsV0FBQTtBQURGO0FBR0U7RUFDRSxjQUFBO0FBREo7QUFJRTtFQUNFLGNBQUE7QUFGSjtBQU1BO0VBQ0UsMENBQUE7QUFIRiIsImZpbGUiOiJzcmMvYXBwL2NoYXRzL2NvbXBvbmVudHMvY2hhdC1saXN0LWl0ZW0vY2hhdC1saXN0LWl0ZW0uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaXRlbS1wcm9maWxlIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBwYWRkaW5nOiAxMHB4IDE2cHg7XG4gIG1hcmdpbi1ib3R0b206IDFweDtcbiAgd2lkdGg6IDEwMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogc3RhcnQ7XG4gICYucmVhZCB7XG4gICAgYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXByaW1hcnktY29udHJhc3QpO1xuICB9XG4gICYudW5yZWFkIHtcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDEyMCwgMTg0LCAxNjYsIDAuMyk7XG4gIH1cbiAgLmF2YXRhci1pbWFnZSB7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLWlvbi1jb2xvci1zZWNvbmRhcnkpO1xuICAgIHdpZHRoOiA2NHB4O1xuICAgIGhlaWdodDogNjRweDtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIHBhZGRpbmc6IDFweDtcbiAgICBtYXJnaW4tcmlnaHQ6IDE2cHg7XG4gICAgb2JqZWN0LWZpdDogY292ZXI7XG4gIH1cbiAgPiBkaXYge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgfVxuICAuYXZhdGFyLXRleHQge1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIH1cbn1cblxuLmNoYXQtdXNlci1pbWFnZS1jb250YWluZXIge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGZsZXg6IDEgMCBhdXRvO1xuXG4gIC5jaGF0LXVzZXItaW1hZ2Uge1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1pb24tY29sb3Itc2Vjb25kYXJ5KTtcbiAgICBoZWlnaHQ6IDY0cHg7XG4gICAgd2lkdGg6IDY0cHg7XG4gICAgb2JqZWN0LWZpdDogY292ZXI7XG4gIH1cblxuICAudW5yZWFkLW1lc3NhZ2VzIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIC0tYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLWRhbmdlci1zaGFkZSk7XG4gICAgZm9udC1zaXplOiAwLjhlbTtcbiAgICBwYWRkaW5nOiA1cHg7XG4gICAgbWFyZ2luLWxlZnQ6IC01cHg7XG4gIH1cbn1cblxuLmNoYXQtZGF0YSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXg6IDEgMSBhdXRvO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIHdpZHRoOiAxMDAlO1xuXG4gIC5jaGF0LW1lc3NhZ2UtaW5mbyB7XG4gICAgZmxleDogMSAxIGF1dG87XG4gIH1cblxuICAuY2hhdC1tZXNzYWdlLWRhdGUge1xuICAgIGZsZXg6IDEgMCBhdXRvO1xuICB9XG59XG5cbi5jaGF0LW5vdC1yZWFkZWQge1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1ub3RpZmljYXRpb24tbm90LXJlYWRlZCk7XG59XG4iXX0= */");

/***/ }),

/***/ "./src/app/chats/components/chat-list-item/chat-list-item.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/chats/components/chat-list-item/chat-list-item.component.ts ***!
  \*****************************************************************************/
/*! exports provided: ChatListItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatListItemComponent", function() { return ChatListItemComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngxs/store */ "./node_modules/@ngxs/store/__ivy_ngcc__/fesm2015/ngxs-store.js");
/* harmony import */ var _store_auth_auth_state__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../@store/auth/auth.state */ "./src/app/@store/auth/auth.state.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");





var ChatListItemComponent = /** @class */ (function () {
    function ChatListItemComponent(store, router) {
        this.store = store;
        this.router = router;
        this.photoClick = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.chatClick = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    ChatListItemComponent.prototype.ngOnInit = function () { };
    ChatListItemComponent.prototype.ngOnChanges = function (changes) {
        var _a, _b;
        if (changes.chat) {
            this.otherParticipant = this.getOtherParticipant(changes.chat.currentValue.participants);
            this.isLastMessageFromOwnUser =
                ((_b = (_a = changes.chat.currentValue.last_message) === null || _a === void 0 ? void 0 : _a.sender) === null || _b === void 0 ? void 0 : _b.id) === this.store.selectSnapshot(_store_auth_auth_state__WEBPACK_IMPORTED_MODULE_3__["AuthState"].getUserId);
        }
    };
    ChatListItemComponent.prototype.getOtherParticipant = function (participants) {
        var _this = this;
        return participants.find(function (user) { return user.id !== _this.store.selectSnapshot(_store_auth_auth_state__WEBPACK_IMPORTED_MODULE_3__["AuthState"].getUserId); });
    };
    ChatListItemComponent.prototype.onChatClick = function () {
        this.chatClick.emit(this.chat.id);
    };
    ChatListItemComponent.prototype.onPhotoClick = function (event) {
        event.stopPropagation();
        this.photoClick.emit(this.otherParticipant.id);
    };
    ChatListItemComponent.ctorParameters = function () { return [
        { type: _ngxs_store__WEBPACK_IMPORTED_MODULE_2__["Store"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
    ]; };
    ChatListItemComponent.propDecorators = {
        chat: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
        photoClick: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] }],
        chatClick: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] }]
    };
    ChatListItemComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-chat-list-item',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./chat-list-item.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/chats/components/chat-list-item/chat-list-item.component.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./chat-list-item.component.scss */ "./src/app/chats/components/chat-list-item/chat-list-item.component.scss")).default]
        })
    ], ChatListItemComponent);
    return ChatListItemComponent;
}());



/***/ }),

/***/ "./src/app/chats/components/chat-list-item/chat-list-item.module.ts":
/*!**************************************************************************!*\
  !*** ./src/app/chats/components/chat-list-item/chat-list-item.module.ts ***!
  \**************************************************************************/
/*! exports provided: ChatListItemModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatListItemModule", function() { return ChatListItemModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
/* harmony import */ var _chat_list_item_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./chat-list-item.component */ "./src/app/chats/components/chat-list-item/chat-list-item.component.ts");
/* harmony import */ var _shared_components_image_item_image_item_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../@shared/components/image-item/image-item.module */ "./src/app/@shared/components/image-item/image-item.module.ts");







var ChatListItemModule = /** @class */ (function () {
    function ChatListItemModule() {
    }
    ChatListItemModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_chat_list_item_component__WEBPACK_IMPORTED_MODULE_5__["ChatListItemComponent"]],
            imports: [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateModule"].forChild(), _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _shared_components_image_item_image_item_module__WEBPACK_IMPORTED_MODULE_6__["ImageItemModule"]],
            exports: [_chat_list_item_component__WEBPACK_IMPORTED_MODULE_5__["ChatListItemComponent"]],
        })
    ], ChatListItemModule);
    return ChatListItemModule;
}());



/***/ })

}]);
//# sourceMappingURL=chats-chats-chats-module.js.map