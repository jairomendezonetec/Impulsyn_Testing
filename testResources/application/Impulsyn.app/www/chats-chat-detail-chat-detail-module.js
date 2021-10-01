(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["chats-chat-detail-chat-detail-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/chats/chat-detail/chat-detail.page.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/chats/chat-detail/chat-detail.page.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-header\n  [showBackButton]=\"showBackButton\"\n  [title]=\"otherParticipant ? otherParticipant.complete_name : otherParticipantCompleteName | translate\"\n  (backButtonClick)=\"goBack()\"\n>\n</app-header>\n\n<ion-content class=\"item-list\">\n  <div class=\"chat-container\">\n    <div #chatContainer class=\"messages-container\">\n      <div *ngIf=\"showInfiniteScroll\" class=\"loading-spinner\">\n        <ion-spinner color=\"secondary\"></ion-spinner>\n      </div>\n      <div #chatLoaderTop></div>\n\n      <app-chat-message\n        *ngFor=\"let message of currentMessageList?.messages; trackBy: trackByMessages\"\n        [message]=\"message\"\n      >\n      </app-chat-message>\n    </div>\n\n    <!-- Footer -->\n    <div class=\"user-chat-footer\">\n      <div *ngIf=\"isNotConnected\" class=\"small-size\">{{'chats.notConnectedWarning'| translate}}</div>\n      <ion-textarea\n        class=\"chat-textarea\"\n        rows=\"1\"\n        name=\"message\"\n        [placeholder]=\"'chats.writeMessage' | translate\"\n        [(ngModel)]=\"newMessage\"\n        [autosize]=\"newMessage\"\n        *ngIf=\"!isNotConnected\"\n      ></ion-textarea>\n\n      <!-- Send button -->\n      <ion-icon\n        *ngIf=\"!isNotConnected\"\n        name=\"send-outline\"\n        color=\"secondary\"\n        class=\"chat-button\"\n        (click)=\"createMessage()\"\n      ></ion-icon>\n    </div>\n  </div>\n</ion-content>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/chats/components/chat-message/chat-message.component.html":
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/chats/components/chat-message/chat-message.component.html ***!
  \*****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"item-profile item-message\">\n  <img *ngIf=\"message\" class=\"sender-image\" [src]=\"message.sender?.photo\" (click)=\"goToUserProfile()\" />\n\n  <div class=\"message-data\">\n    <div class=\"chat-message-info message-text col-xs-10 col-md-10\">\n      <span class=\"chat-message-info-title regular-small-size bold\">{{ message.sender?.complete_name }}</span>\n      <span class=\"small-size pre-wrap\">{{ message.message }}</span>\n    </div>\n    <div color=\"grey\" class=\"message-date regular-small-size\">\n      {{ message.creation_date_literal }}\n    </div>\n  </div>\n</div>\n");

/***/ }),

/***/ "./src/app/chats/chat-detail/chat-detail-routing.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/chats/chat-detail/chat-detail-routing.module.ts ***!
  \*****************************************************************/
/*! exports provided: ChatDetailPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatDetailPageRoutingModule", function() { return ChatDetailPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _chat_detail_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./chat-detail.page */ "./src/app/chats/chat-detail/chat-detail.page.ts");




var routes = [
    {
        path: '',
        component: _chat_detail_page__WEBPACK_IMPORTED_MODULE_3__["ChatDetailPage"],
    },
];
var ChatDetailPageRoutingModule = /** @class */ (function () {
    function ChatDetailPageRoutingModule() {
    }
    ChatDetailPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], ChatDetailPageRoutingModule);
    return ChatDetailPageRoutingModule;
}());



/***/ }),

/***/ "./src/app/chats/chat-detail/chat-detail.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/chats/chat-detail/chat-detail.module.ts ***!
  \*********************************************************/
/*! exports provided: ChatDetailPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatDetailPageModule", function() { return ChatDetailPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _chat_detail_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./chat-detail-routing.module */ "./src/app/chats/chat-detail/chat-detail-routing.module.ts");
/* harmony import */ var _chat_detail_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./chat-detail.page */ "./src/app/chats/chat-detail/chat-detail.page.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../@shared/shared.module */ "./src/app/@shared/shared.module.ts");
/* harmony import */ var _components_chat_message_chat_message_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/chat-message/chat-message.module */ "./src/app/chats/components/chat-message/chat-message.module.ts");






var ChatDetailPageModule = /** @class */ (function () {
    function ChatDetailPageModule() {
    }
    ChatDetailPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"], _chat_detail_routing_module__WEBPACK_IMPORTED_MODULE_2__["ChatDetailPageRoutingModule"], _components_chat_message_chat_message_module__WEBPACK_IMPORTED_MODULE_5__["ChatMessageModule"]],
            declarations: [_chat_detail_page__WEBPACK_IMPORTED_MODULE_3__["ChatDetailPage"]],
        })
    ], ChatDetailPageModule);
    return ChatDetailPageModule;
}());



/***/ }),

/***/ "./src/app/chats/chat-detail/chat-detail.page.scss":
/*!*********************************************************!*\
  !*** ./src/app/chats/chat-detail/chat-detail.page.scss ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".chat-container {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n}\n.chat-container .messages-container {\n  flex: 1 1 auto;\n  overflow: hidden;\n  overflow-y: auto;\n}\n.chat-container .user-chat-footer {\n  flex: 0 1 auto;\n  padding: 10px;\n  display: flex;\n  justify-content: space-between;\n  box-sizing: content-box;\n  align-items: center;\n  border-top: 1px solid var(--ion-color-medium);\n  background-color: var(--ion-background-color);\n}\n.chat-container .user-chat-footer .chat-textarea {\n  margin-right: 10px;\n  background-color: white;\n  border-radius: 5px;\n  margin-top: 0;\n}\n.chat-container .user-chat-footer .chat-button {\n  font-size: 25px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2hhdHMvY2hhdC1kZXRhaWwvY2hhdC1kZXRhaWwucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsWUFBQTtBQUNGO0FBQ0U7RUFDRSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtBQUNKO0FBRUU7RUFDRSxjQUFBO0VBQ0EsYUFBQTtFQUNBLGFBQUE7RUFDQSw4QkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSw2Q0FBQTtFQUNBLDZDQUFBO0FBQUo7QUFFSTtFQUNFLGtCQUFBO0VBQ0EsdUJBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7QUFBTjtBQUdJO0VBQ0UsZUFBQTtBQUROIiwiZmlsZSI6InNyYy9hcHAvY2hhdHMvY2hhdC1kZXRhaWwvY2hhdC1kZXRhaWwucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNoYXQtY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgaGVpZ2h0OiAxMDAlO1xuXG4gIC5tZXNzYWdlcy1jb250YWluZXIge1xuICAgIGZsZXg6IDEgMSBhdXRvO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgb3ZlcmZsb3cteTogYXV0bztcbiAgfVxuXG4gIC51c2VyLWNoYXQtZm9vdGVyIHtcbiAgICBmbGV4OiAwIDEgYXV0bztcbiAgICBwYWRkaW5nOiAxMHB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIGJveC1zaXppbmc6IGNvbnRlbnQtYm94O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIHZhcigtLWlvbi1jb2xvci1tZWRpdW0pO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yKTtcblxuICAgIC5jaGF0LXRleHRhcmVhIHtcbiAgICAgIG1hcmdpbi1yaWdodDogMTBweDtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgICAgbWFyZ2luLXRvcDogMDtcbiAgICB9XG5cbiAgICAuY2hhdC1idXR0b24ge1xuICAgICAgZm9udC1zaXplOiAyNXB4O1xuICAgIH1cbiAgfVxufVxuIl19 */");

/***/ }),

/***/ "./src/app/chats/chat-detail/chat-detail.page.ts":
/*!*******************************************************!*\
  !*** ./src/app/chats/chat-detail/chat-detail.page.ts ***!
  \*******************************************************/
/*! exports provided: ChatDetailPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatDetailPage", function() { return ChatDetailPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _base_base_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../base/base.page */ "./src/app/base/base.page.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngxs/store */ "./node_modules/@ngxs/store/__ivy_ngcc__/fesm2015/ngxs-store.js");
/* harmony import */ var _core_utils_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../@core/utils.service */ "./src/app/@core/utils.service.ts");
/* harmony import */ var _store_chats_chats_actions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../@store/chats/chats.actions */ "./src/app/@store/chats/chats.actions.ts");
/* harmony import */ var _global_constants__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../@global/constants */ "./src/app/@global/constants.ts");
/* harmony import */ var _store_chats_chats_state__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../@store/chats/chats.state */ "./src/app/@store/chats/chats.state.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _store_auth_auth_state__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../@store/auth/auth.state */ "./src/app/@store/auth/auth.state.ts");
/* harmony import */ var _store_profiles_profiles_state__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../@store/profiles/profiles.state */ "./src/app/@store/profiles/profiles.state.ts");
/* harmony import */ var _profiles_user_user_profile_user_profile_page__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../profiles/user/user-profile/user-profile.page */ "./src/app/profiles/user/user-profile/user-profile.page.ts");
/* harmony import */ var _store_profiles_profiles_actions__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../@store/profiles/profiles.actions */ "./src/app/@store/profiles/profiles.actions.ts");















var ChatDetailPage = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(ChatDetailPage, _super);
    function ChatDetailPage(router, location, store, utilsService, route) {
        var _this = _super.call(this, location, router, store, utilsService) || this;
        _this.route = route;
        return _this;
    }
    Object.defineProperty(ChatDetailPage.prototype, "chatContainerContent", {
        set: function (content) {
            if (content) {
                this.chatContainer = content;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ChatDetailPage.prototype, "chatLoaderTopcontent", {
        set: function (content) {
            if (content) {
                this.chatLoaderTop = content;
                this.initLoaderIntersector();
            }
        },
        enumerable: false,
        configurable: true
    });
    ChatDetailPage.prototype.ngOnInit = function () {
        var _a, _b;
        this.chatId = this.route.snapshot.params['id'];
        if (this.chatId) {
            this.loadChatMessageList();
        }
        else {
            this.otherParticipantId = (_a = this.route.snapshot.queryParams) === null || _a === void 0 ? void 0 : _a.userId;
            this.otherParticipantCompleteName = (_b = this.route.snapshot.queryParams) === null || _b === void 0 ? void 0 : _b.completeName;
            this.store.dispatch(new _store_profiles_profiles_actions__WEBPACK_IMPORTED_MODULE_14__["IsConnectedWithUser"]({ id: this.otherParticipantId }));
            this.loadChatMessageListByUserId();
        }
        this.subscribeToCurrentChat();
        this.subscribeToIsConnectedWithUser();
    };
    ChatDetailPage.prototype.subscribeToIsConnectedWithUser = function () {
        var _this = this;
        this.profilePublicInfo$ = this.store.select(_store_profiles_profiles_state__WEBPACK_IMPORTED_MODULE_12__["ProfilesState"].isConnectedWithUser).subscribe(function (result) {
            _this.isNotConnected = result !== _profiles_user_user_profile_user_profile_page__WEBPACK_IMPORTED_MODULE_13__["USER_CONNECTION_STATUS"].CONNECTED;
        });
    };
    ChatDetailPage.prototype.loadChatMessageList = function () {
        var _this = this;
        this.store
            .dispatch(new _store_chats_chats_actions__WEBPACK_IMPORTED_MODULE_7__["GetChatMessageList"]({ id: this.chatId, input: { limit: _global_constants__WEBPACK_IMPORTED_MODULE_8__["Constants"].CHAT_MESSAGES_LOAD_LIMIT } }))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["take"])(1))
            .subscribe(function () {
            _this.scrollToBottom();
            _this.setChatMessagesAsRead();
        });
    };
    ChatDetailPage.prototype.loadChatMessageListByUserId = function () {
        var _this = this;
        this.store
            .dispatch(new _store_chats_chats_actions__WEBPACK_IMPORTED_MODULE_7__["GetChatMessageListByUserId"]({
            id: this.otherParticipantId,
            input: { limit: _global_constants__WEBPACK_IMPORTED_MODULE_8__["Constants"].CHAT_MESSAGES_LOAD_LIMIT },
        }))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["take"])(1))
            .subscribe(function () {
            _this.scrollToBottom();
            _this.setChatMessagesAsRead();
        });
    };
    ChatDetailPage.prototype.setChatMessagesAsRead = function () {
        if (this.currentMessageList.chatId) {
            this.store.dispatch(new _store_chats_chats_actions__WEBPACK_IMPORTED_MODULE_7__["SetChatMessagesAsRead"](this.currentMessageList.chatId));
        }
    };
    ChatDetailPage.prototype.subscribeToCurrentChat = function () {
        var _this = this;
        this.currentChatSubscription = this.store.select(_store_chats_chats_state__WEBPACK_IMPORTED_MODULE_9__["ChatsState"].getCurrentChat).subscribe(function (data) {
            if (!data) {
                return;
            }
            _this.currentMessageList = data;
            _this.otherParticipant = _this.getOtherParticipant(data.participants);
            _this.showInfiniteScroll = data.page < data.total_pages;
            if (_this.otherParticipant) {
                _this.store.dispatch(new _store_profiles_profiles_actions__WEBPACK_IMPORTED_MODULE_14__["IsConnectedWithUser"]({ id: _this.otherParticipant.id }));
            }
        });
    };
    ChatDetailPage.prototype.loadNextChatMessageList = function (event) {
        var _this = this;
        var nextPage = this.currentMessageList.page + 1;
        if (nextPage <= this.currentMessageList.total_pages) {
            var previousScrollHeight_1 = this.chatContainer.nativeElement.scrollHeight;
            this.store
                .dispatch(new _store_chats_chats_actions__WEBPACK_IMPORTED_MODULE_7__["AddNextChatMessageList"]({
                id: this.chatId,
                input: { page: nextPage, limit: _global_constants__WEBPACK_IMPORTED_MODULE_8__["Constants"].CHAT_MESSAGES_LOAD_LIMIT },
            }))
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["take"])(1))
                .subscribe(function () {
                if (event) {
                    event.target.complete();
                }
                _this.keepScroll(previousScrollHeight_1);
            });
        }
    };
    ChatDetailPage.prototype.initLoaderIntersector = function () {
        var _this = this;
        this.loaderTopObserver = new IntersectionObserver(function (_a) {
            var _b = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__read"])(_a, 1), entry = _b[0];
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this, void 0, void 0, function () {
                return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_c) {
                    if (entry && entry.isIntersecting) {
                        this.loadNextChatMessageList();
                    }
                    return [2 /*return*/];
                });
            });
        });
        this.loaderTopObserver.observe(this.chatLoaderTop.nativeElement);
    };
    ChatDetailPage.prototype.getOtherParticipant = function (participants) {
        var _this = this;
        return participants.find(function (user) { return user.id !== _this.store.selectSnapshot(_store_auth_auth_state__WEBPACK_IMPORTED_MODULE_11__["AuthState"].getUserId); });
    };
    ChatDetailPage.prototype.createMessage = function () {
        var _this = this;
        this.store
            .dispatch(new _store_chats_chats_actions__WEBPACK_IMPORTED_MODULE_7__["CreateMessage"]({
            receiverId: this.chatId ? this.otherParticipant.id : this.otherParticipantId,
            message: this.newMessage,
        }))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["take"])(1))
            .subscribe(function () {
            _this.scrollToBottom();
        });
        this.newMessage = '';
    };
    ChatDetailPage.prototype.scrollToBottom = function () {
        this.chatContainer.nativeElement.scrollTop = this.chatContainer.nativeElement.scrollHeight;
    };
    ChatDetailPage.prototype.keepScroll = function (previousScrollHeight) {
        this.chatContainer.nativeElement.scrollTop += this.chatContainer.nativeElement.scrollHeight - previousScrollHeight;
    };
    ChatDetailPage.prototype.trackByMessages = function (index, item) {
        return item.id;
    };
    ChatDetailPage.prototype.disconnectObservers = function () {
        if (this.currentChatSubscription) {
            this.currentChatSubscription.unsubscribe();
        }
        if (this.subscriptionContacts) {
            this.subscriptionContacts.unsubscribe();
        }
        if (this.profilePublicInfo$) {
            this.profilePublicInfo$.unsubscribe();
        }
    };
    ChatDetailPage.prototype.ngOnDestroy = function () {
        this.disconnectObservers();
    };
    ChatDetailPage.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: _angular_common__WEBPACK_IMPORTED_MODULE_4__["Location"] },
        { type: _ngxs_store__WEBPACK_IMPORTED_MODULE_5__["Store"] },
        { type: _core_utils_service__WEBPACK_IMPORTED_MODULE_6__["UtilsService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }
    ]; };
    ChatDetailPage.propDecorators = {
        chatContainerContent: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"], args: ['chatContainer', { static: false },] }],
        chatLoaderTopcontent: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"], args: ['chatLoaderTop', { static: false },] }]
    };
    ChatDetailPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-chat-detail',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./chat-detail.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/chats/chat-detail/chat-detail.page.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./chat-detail.page.scss */ "./src/app/chats/chat-detail/chat-detail.page.scss")).default]
        })
    ], ChatDetailPage);
    return ChatDetailPage;
}(_base_base_page__WEBPACK_IMPORTED_MODULE_2__["BasePage"]));



/***/ }),

/***/ "./src/app/chats/components/chat-message/chat-message.component.scss":
/*!***************************************************************************!*\
  !*** ./src/app/chats/components/chat-message/chat-message.component.scss ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".item-message {\n  margin-bottom: 0;\n}\n.item-message.read {\n  background: var(--ion-color-primary-contrast);\n}\n.item-message.unread {\n  background: rgba(120, 184, 166, 0.3);\n}\n.item-message .sender-image {\n  flex: 0 0 auto;\n  align-self: flex-start;\n  border-radius: 50%;\n  border: 1px solid var(--ion-color-secondary);\n  width: 20px;\n  height: 20px;\n  overflow: hidden;\n  padding: 1px;\n  -o-object-fit: cover;\n     object-fit: cover;\n}\n.item-message .message-text {\n  display: flex;\n  flex-direction: column;\n  padding-left: 10px;\n}\n.item-message .message-data {\n  flex: 1 1 auto;\n  align-self: flex-start;\n}\n.item-message .message-data .chat-message-info {\n  flex: 1 1 auto;\n}\n.item-message .message-data .chat-message-info .chat-message-info-title {\n  margin-bottom: 5px;\n}\n.item-message .message-data .message-date {\n  flex: 1 0 auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2hhdHMvY29tcG9uZW50cy9jaGF0LW1lc3NhZ2UvY2hhdC1tZXNzYWdlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0JBQUE7QUFDRjtBQUNFO0VBQ0UsNkNBQUE7QUFDSjtBQUVFO0VBQ0Usb0NBQUE7QUFBSjtBQUdFO0VBQ0UsY0FBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSw0Q0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0VBQ0Esb0JBQUE7S0FBQSxpQkFBQTtBQURKO0FBSUU7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtBQUZKO0FBS0U7RUFDRSxjQUFBO0VBQ0Esc0JBQUE7QUFISjtBQUtJO0VBQ0UsY0FBQTtBQUhOO0FBS007RUFDRSxrQkFBQTtBQUhSO0FBT0k7RUFDRSxjQUFBO0FBTE4iLCJmaWxlIjoic3JjL2FwcC9jaGF0cy9jb21wb25lbnRzL2NoYXQtbWVzc2FnZS9jaGF0LW1lc3NhZ2UuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaXRlbS1tZXNzYWdlIHtcbiAgbWFyZ2luLWJvdHRvbTogMDtcblxuICAmLnJlYWQge1xuICAgIGJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5LWNvbnRyYXN0KTtcbiAgfVxuXG4gICYudW5yZWFkIHtcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDEyMCwgMTg0LCAxNjYsIDAuMyk7XG4gIH1cblxuICAuc2VuZGVyLWltYWdlIHtcbiAgICBmbGV4OiAwIDAgYXV0bztcbiAgICBhbGlnbi1zZWxmOiBmbGV4LXN0YXJ0O1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1pb24tY29sb3Itc2Vjb25kYXJ5KTtcbiAgICB3aWR0aDogMjBweDtcbiAgICBoZWlnaHQ6IDIwcHg7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICBwYWRkaW5nOiAxcHg7XG4gICAgb2JqZWN0LWZpdDogY292ZXI7XG4gIH1cblxuICAubWVzc2FnZS10ZXh0IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xuICB9XG5cbiAgLm1lc3NhZ2UtZGF0YSB7XG4gICAgZmxleDogMSAxIGF1dG87XG4gICAgYWxpZ24tc2VsZjogZmxleC1zdGFydDtcblxuICAgIC5jaGF0LW1lc3NhZ2UtaW5mbyB7XG4gICAgICBmbGV4OiAxIDEgYXV0bztcblxuICAgICAgLmNoYXQtbWVzc2FnZS1pbmZvLXRpdGxlIHtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogNXB4O1xuICAgICAgfVxuICAgIH1cblxuICAgIC5tZXNzYWdlLWRhdGUge1xuICAgICAgZmxleDogMSAwIGF1dG87XG4gICAgfVxuICB9XG59XG4iXX0= */");

/***/ }),

/***/ "./src/app/chats/components/chat-message/chat-message.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/chats/components/chat-message/chat-message.component.ts ***!
  \*************************************************************************/
/*! exports provided: ChatMessageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatMessageComponent", function() { return ChatMessageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");



var ChatMessageComponent = /** @class */ (function () {
    function ChatMessageComponent(router) {
        this.router = router;
    }
    ChatMessageComponent.prototype.ngOnInit = function () { };
    ChatMessageComponent.prototype.goToUserProfile = function () {
        this.router.navigate(['/user-profile', this.message.sender.id]);
    };
    ChatMessageComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
    ]; };
    ChatMessageComponent.propDecorators = {
        message: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }]
    };
    ChatMessageComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-chat-message',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./chat-message.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/chats/components/chat-message/chat-message.component.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./chat-message.component.scss */ "./src/app/chats/components/chat-message/chat-message.component.scss")).default]
        })
    ], ChatMessageComponent);
    return ChatMessageComponent;
}());



/***/ }),

/***/ "./src/app/chats/components/chat-message/chat-message.module.ts":
/*!**********************************************************************!*\
  !*** ./src/app/chats/components/chat-message/chat-message.module.ts ***!
  \**********************************************************************/
/*! exports provided: ChatMessageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatMessageModule", function() { return ChatMessageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
/* harmony import */ var _chat_message_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./chat-message.component */ "./src/app/chats/components/chat-message/chat-message.component.ts");






var ChatMessageModule = /** @class */ (function () {
    function ChatMessageModule() {
    }
    ChatMessageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_chat_message_component__WEBPACK_IMPORTED_MODULE_5__["ChatMessageComponent"]],
            imports: [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateModule"].forChild(), _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]],
            exports: [_chat_message_component__WEBPACK_IMPORTED_MODULE_5__["ChatMessageComponent"]],
        })
    ], ChatMessageModule);
    return ChatMessageModule;
}());



/***/ })

}]);
//# sourceMappingURL=chats-chat-detail-chat-detail-module.js.map