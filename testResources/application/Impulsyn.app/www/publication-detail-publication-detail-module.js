(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["publication-detail-publication-detail-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/publication-detail/publication-detail.page.html":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/publication-detail/publication-detail.page.html ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-header\n  [showBackButton]=\"true\"\n  [title]=\"'publicationDetailPage.title'\"\n  (backButtonClick)=\"goBack()\"\n  [actionIconList]=\"[headerIcon]\"\n  (actionIconListClick)=\"onHeaderIconClick($event)\"\n></app-header>\n\n<ion-content>\n  <div style=\"height: 100%; overflow: hidden\" id=\"detailPublication\">\n    <div class=\"size-100\">\n      <div class=\"publication-container\" *ngIf=\"publication\">\n        <app-publication\n          [i]=\"0\"\n          *ngIf=\"!isEmpty()\"\n          [buttonList]=\"buttonList\"\n          [publication]=\"publication\"\n          (buttonClick)=\"onPublicationButtonClick($event)\"\n          (showCommentsList)=\"showCommentsList($event)\"\n          (showLikesList)=\"showLikesList($event)\"\n          [userPhoto]=\"publication.publisher.photo\"\n          [isDetail]=\"true\"\n        ></app-publication>\n      </div>\n    </div>\n  </div>\n</ion-content>\n");

/***/ }),

/***/ "./src/app/publication-detail/publication-detail-routing.module.ts":
/*!*************************************************************************!*\
  !*** ./src/app/publication-detail/publication-detail-routing.module.ts ***!
  \*************************************************************************/
/*! exports provided: PublicationDetailPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PublicationDetailPageRoutingModule", function() { return PublicationDetailPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _publication_detail_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./publication-detail.page */ "./src/app/publication-detail/publication-detail.page.ts");




var routes = [
    {
        path: '',
        component: _publication_detail_page__WEBPACK_IMPORTED_MODULE_3__["PublicationDetailPage"],
    },
];
var PublicationDetailPageRoutingModule = /** @class */ (function () {
    function PublicationDetailPageRoutingModule() {
    }
    PublicationDetailPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], PublicationDetailPageRoutingModule);
    return PublicationDetailPageRoutingModule;
}());



/***/ }),

/***/ "./src/app/publication-detail/publication-detail.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/publication-detail/publication-detail.module.ts ***!
  \*****************************************************************/
/*! exports provided: PublicationDetailPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PublicationDetailPageModule", function() { return PublicationDetailPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _publication_detail_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./publication-detail-routing.module */ "./src/app/publication-detail/publication-detail-routing.module.ts");
/* harmony import */ var _publication_detail_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./publication-detail.page */ "./src/app/publication-detail/publication-detail.page.ts");
/* harmony import */ var _timeline_components_publication_publication_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../timeline/components/publication/publication.module */ "./src/app/timeline/components/publication/publication.module.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../@shared/shared.module */ "./src/app/@shared/shared.module.ts");






var PublicationDetailPageModule = /** @class */ (function () {
    function PublicationDetailPageModule() {
    }
    PublicationDetailPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"], _timeline_components_publication_publication_module__WEBPACK_IMPORTED_MODULE_4__["PublicationModule"], _publication_detail_routing_module__WEBPACK_IMPORTED_MODULE_2__["PublicationDetailPageRoutingModule"]],
            declarations: [_publication_detail_page__WEBPACK_IMPORTED_MODULE_3__["PublicationDetailPage"]],
        })
    ], PublicationDetailPageModule);
    return PublicationDetailPageModule;
}());



/***/ }),

/***/ "./src/app/publication-detail/publication-detail.page.scss":
/*!*****************************************************************!*\
  !*** ./src/app/publication-detail/publication-detail.page.scss ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3B1YmxpY2F0aW9uLWRldGFpbC9wdWJsaWNhdGlvbi1kZXRhaWwucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/publication-detail/publication-detail.page.ts":
/*!***************************************************************!*\
  !*** ./src/app/publication-detail/publication-detail.page.ts ***!
  \***************************************************************/
/*! exports provided: PublicationDetailPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PublicationDetailPage", function() { return PublicationDetailPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _base_base_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../base/base.page */ "./src/app/base/base.page.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngxs/store */ "./node_modules/@ngxs/store/__ivy_ngcc__/fesm2015/ngxs-store.js");
/* harmony import */ var _core_utils_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../@core/utils.service */ "./src/app/@core/utils.service.ts");
/* harmony import */ var _store_timeline_timeline_state__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../@store/timeline/timeline.state */ "./src/app/@store/timeline/timeline.state.ts");
/* harmony import */ var _store_timeline_timeline_actions__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../@store/timeline/timeline.actions */ "./src/app/@store/timeline/timeline.actions.ts");
/* harmony import */ var _global_utils__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../@global/utils */ "./src/app/@global/utils.ts");
/* harmony import */ var _timeline_enum_ion_sheet_type__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../timeline/enum/ion-sheet-type */ "./src/app/timeline/enum/ion-sheet-type.ts");
/* harmony import */ var _global_constants__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../@global/constants */ "./src/app/@global/constants.ts");
/* harmony import */ var _store_user_user_state__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../@store/user/user.state */ "./src/app/@store/user/user.state.ts");
/* harmony import */ var _core_social_sharing_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../@core/social-sharing.service */ "./src/app/@core/social-sharing.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
/* harmony import */ var _store_profiles_profiles_actions__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../@store/profiles/profiles.actions */ "./src/app/@store/profiles/profiles.actions.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var src_app_store_pages_pages_state__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! src/app/@store/pages/pages.state */ "./src/app/@store/pages/pages.state.ts");
/* harmony import */ var _profiles_organization_organization_profile_components_popover_header_popover_header_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../profiles/organization/organization-profile/components/popover-header/popover-header.component */ "./src/app/profiles/organization/organization-profile/components/popover-header/popover-header.component.ts");
/* harmony import */ var _store_posts_posts_actions__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../@store/posts/posts.actions */ "./src/app/@store/posts/posts.actions.ts");






















var PublicationDetailPage = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(PublicationDetailPage, _super);
    function PublicationDetailPage(router, location, store, utilsService, route, socialShare, alertController, translateService, popoverController) {
        var _this = _super.call(this, location, router, store, utilsService) || this;
        _this.route = route;
        _this.socialShare = socialShare;
        _this.alertController = alertController;
        _this.translateService = translateService;
        _this.popoverController = popoverController;
        _this.publication = null;
        _this.isOwner = false;
        _this.buttonList = _global_constants__WEBPACK_IMPORTED_MODULE_11__["Constants"].PUBLICATION_BUTTONS;
        _this.items = null;
        return _this;
    }
    PublicationDetailPage.prototype.ngOnInit = function () {
        this.subscribeToPublication();
    };
    PublicationDetailPage.prototype.ionViewWillEnter = function () {
        var _a;
        this.profileImage = (_a = this.store.selectSnapshot(_store_user_user_state__WEBPACK_IMPORTED_MODULE_12__["UserState"].getUserInfo)) === null || _a === void 0 ? void 0 : _a.photo;
        this.publicationId = this.route.snapshot.params['id'];
        this.loadPublication();
        this.store.dispatch(new _store_posts_posts_actions__WEBPACK_IMPORTED_MODULE_20__["SetFocusOnPublication"](false));
    };
    PublicationDetailPage.prototype.loadPublication = function () {
        this.store.dispatch(new _store_timeline_timeline_actions__WEBPACK_IMPORTED_MODULE_8__["GetPublicationDetail"]({ id: this.publicationId }));
    };
    PublicationDetailPage.prototype.subscribeToPublication = function () {
        var _this = this;
        this.subscription$ = this.publication$.subscribe(function (data) {
            var _a;
            _this.publication = data;
            _this.userId = (_a = _this.store.selectSnapshot(_store_user_user_state__WEBPACK_IMPORTED_MODULE_12__["UserState"].getUserInfo)) === null || _a === void 0 ? void 0 : _a.id;
            _this.isOwner = _this.isPublicationOwner();
            _this.headerIcon = {
                name: _this.isOwner ? 'ellipsis-vertical' : '',
            };
        });
    };
    PublicationDetailPage.prototype.onHeaderIconClick = function ($event) {
        if (this.isOwner) {
            this.showPopover($event);
        }
    };
    PublicationDetailPage.prototype.showPopover = function (params) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var items, popover;
            var _this = this;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        items = [
                            {
                                text: 'publicationDetailPage.delete',
                                color: 'danger',
                            },
                        ];
                        return [4 /*yield*/, this.popoverController.create({
                                event: params.event,
                                component: _profiles_organization_organization_profile_components_popover_header_popover_header_component__WEBPACK_IMPORTED_MODULE_19__["PopoverHeaderComponent"],
                                componentProps: { items: items },
                                cssClass: 'menu-popover',
                                translucent: true,
                            })];
                    case 1:
                        popover = _a.sent();
                        popover.onDidDismiss().then(function (result) {
                            if (result.data === 0) {
                                _this.deletePublication(_this.publicationId);
                            }
                        });
                        return [4 /*yield*/, popover.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    PublicationDetailPage.prototype.ngOnDestroy = function () {
        this.publication = null;
        this.store.dispatch(new _store_timeline_timeline_actions__WEBPACK_IMPORTED_MODULE_8__["SetPublication"](null));
        this.disconnectObservers();
    };
    PublicationDetailPage.prototype.isPublicationOwner = function () {
        var _a, _b, _c, _d;
        var userPageIds = this.store.selectSnapshot(src_app_store_pages_pages_state__WEBPACK_IMPORTED_MODULE_18__["PagesState"].getUserPageList).map(function (el) { return el.id; });
        return ((_b = (_a = this.publication) === null || _a === void 0 ? void 0 : _a.publisher) === null || _b === void 0 ? void 0 : _b.id) === this.userId || userPageIds.includes((_d = (_c = this.publication) === null || _c === void 0 ? void 0 : _c.publisher) === null || _d === void 0 ? void 0 : _d.id);
    };
    PublicationDetailPage.prototype.disconnectObservers = function () {
        if (this.subscription$) {
            this.subscription$.unsubscribe();
        }
    };
    PublicationDetailPage.prototype.onPublicationButtonClick = function ($event) {
        var buttonPosition = $event.buttonPosition;
        var publicationId = $event.publicationId;
        this.publicationId = publicationId;
        switch (buttonPosition) {
            case 0: // likes
                this.changeLikeStatus(publicationId);
                break;
            case 1: // comments
                this.showCommentsList(publicationId);
                break;
            case 2: // share outside
                this.socialShare.sharePublication(publicationId);
                break;
            // case 3: // share on impulsyn
            //   break;
        }
    };
    PublicationDetailPage.prototype.changeLikeStatus = function (publicationId) {
        this.store.dispatch(new _store_timeline_timeline_actions__WEBPACK_IMPORTED_MODULE_8__["ChangeLikeStatus"]({ id: publicationId, like: !this.publication.like }));
    };
    PublicationDetailPage.prototype.showLikesList = function (publicationId) {
        this.publicationId = publicationId;
        this.utilsService.openIonSheet(_timeline_enum_ion_sheet_type__WEBPACK_IMPORTED_MODULE_10__["ION_SHEET_TYPE"].LIKES, this.publicationId);
    };
    PublicationDetailPage.prototype.showCommentsList = function (publicationId) {
        this.publicationId = publicationId;
        this.utilsService.openIonSheet(_timeline_enum_ion_sheet_type__WEBPACK_IMPORTED_MODULE_10__["ION_SHEET_TYPE"].COMMENTS, this.publicationId);
    };
    PublicationDetailPage.prototype.deletePublication = function (publicationId) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var message, alert;
            var _this = this;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.translateService.get('publicationDetailPage.deleteConfirm').toPromise()];
                    case 1:
                        message = _a.sent();
                        return [4 /*yield*/, this.alertController.create({
                                cssClass: 'custom-alert',
                                message: message,
                                buttons: [
                                    {
                                        text: this.translateService.instant("buttons.cancel"),
                                        role: 'cancel',
                                        cssClass: 'secondary',
                                        handler: function () {
                                            // do nothing
                                        },
                                    },
                                    {
                                        text: this.translateService.instant("buttons.accept"),
                                        handler: function () {
                                            _this.store
                                                .dispatch(new _store_profiles_profiles_actions__WEBPACK_IMPORTED_MODULE_16__["DeletePublication"](publicationId))
                                                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_17__["take"])(1))
                                                .subscribe(function () {
                                                _this.goBack();
                                            });
                                        },
                                    },
                                ],
                            })];
                    case 2:
                        alert = _a.sent();
                        return [4 /*yield*/, alert.present()];
                    case 3:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    PublicationDetailPage.prototype.isEmpty = function () {
        return _global_utils__WEBPACK_IMPORTED_MODULE_9__["Utils"].isEmpty(this.publication);
    };
    PublicationDetailPage.prototype.newComment = function (comment) {
        this.store.dispatch(new _store_timeline_timeline_actions__WEBPACK_IMPORTED_MODULE_8__["AddComment"](comment, this.publicationId));
    };
    PublicationDetailPage.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _angular_common__WEBPACK_IMPORTED_MODULE_4__["Location"] },
        { type: _ngxs_store__WEBPACK_IMPORTED_MODULE_5__["Store"] },
        { type: _core_utils_service__WEBPACK_IMPORTED_MODULE_6__["UtilsService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
        { type: _core_social_sharing_service__WEBPACK_IMPORTED_MODULE_13__["SocialSharingService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_14__["AlertController"] },
        { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_15__["TranslateService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_14__["PopoverController"] }
    ]; };
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_5__["Select"])(_store_timeline_timeline_state__WEBPACK_IMPORTED_MODULE_7__["TimelineState"].getPublication)
    ], PublicationDetailPage.prototype, "publication$", void 0);
    PublicationDetailPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-publication-detail',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./publication-detail.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/publication-detail/publication-detail.page.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./publication-detail.page.scss */ "./src/app/publication-detail/publication-detail.page.scss")).default]
        })
    ], PublicationDetailPage);
    return PublicationDetailPage;
}(_base_base_page__WEBPACK_IMPORTED_MODULE_3__["BasePage"]));



/***/ })

}]);
//# sourceMappingURL=publication-detail-publication-detail-module.js.map