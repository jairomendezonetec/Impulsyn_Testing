(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["manage-admins-page-manage-admins-page-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/manage-admins-page/components/item-suggestion/item-admin.component.html":
/*!*******************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/manage-admins-page/components/item-suggestion/item-admin.component.html ***!
  \*******************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"item-profile\">\n  <app-image-item [imageProfile]=\"info.photo\"></app-image-item>\n  <div class=\"avatar-text col-xs-7 col-md-7\">\n    <span class=\"small-size ion-text-capitalize\">{{ info.complete_name }}</span>\n    <span class=\"small-size\">{{ info.occupation }}</span>\n    <span class=\"small-size\" *ngIf=\"hasLocation\">\n      {{ userLocation }}\n    </span>\n  </div>\n  <div class=\"col-xs-3 col-md-3\">\n    <ion-icon *ngIf=\"canDelete\" name=\"trash\" class=\"icon\" (click)=\"removeAdmin()\"></ion-icon>\n  </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/manage-admins-page/manage-admins-page.page.html":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/manage-admins-page/manage-admins-page.page.html ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-header\n  [title]=\"'organizationProfile.manageAdmin' | translate\"\n  [showBackButton]=\"showBackButton\"\n  (backButtonClick)=\"goBack()\"\n>\n</app-header>\n\n<ion-content class=\"item-list\">\n  <div\n    color=\"secondary\"\n    (click)=\"goToInvitePage()\"\n    class=\"flex-compatible ion-align-items-center marginBottom ion-padding-vertical w100 background-white ion-text-start\"\n  >\n    <span class=\"bold ion-padding-start regular-size\"\n      >{{ \"organizationProfile.administratorsPage.invite\" | translate}}</span\n    >\n    <ion-icon name=\"chevron-forward-outline\" class=\"extrabig-size\"></ion-icon>\n  </div>\n\n  <div\n    *ngIf=\"pageAdministrators.length > 0\"\n    color=\"secondary\"\n    class=\"marginBottom flex-compatible ion-align-items-center ion-padding-vertical w100 ion-text-start\"\n  >\n    <span class=\"bold ion-padding-start regular-size\"\n      >{{ \"organizationProfile.administratorsPage.title\" | translate}}</span\n    >\n  </div>\n  <div *ngFor=\"let item of pageAdministrators\">\n    <app-item-admin [info]=\"item\" [canDelete]=\"pageAdministrators.length > 1\" (removeAdminEv)=\"removeAdmin($event)\">\n    </app-item-admin>\n  </div>\n</ion-content>\n");

/***/ }),

/***/ "./src/app/manage-admins-page/components/item-suggestion/item-admin.component.scss":
/*!*****************************************************************************************!*\
  !*** ./src/app/manage-admins-page/components/item-suggestion/item-admin.component.scss ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21hbmFnZS1hZG1pbnMtcGFnZS9jb21wb25lbnRzL2l0ZW0tc3VnZ2VzdGlvbi9pdGVtLWFkbWluLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/manage-admins-page/components/item-suggestion/item-admin.component.ts":
/*!***************************************************************************************!*\
  !*** ./src/app/manage-admins-page/components/item-suggestion/item-admin.component.ts ***!
  \***************************************************************************************/
/*! exports provided: ItemAdminComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItemAdminComponent", function() { return ItemAdminComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _global_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../@global/utils */ "./src/app/@global/utils.ts");



var ItemAdminComponent = /** @class */ (function () {
    function ItemAdminComponent() {
        this.canDelete = false;
        this.removeAdminEv = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    ItemAdminComponent.prototype.ngOnInit = function () { };
    ItemAdminComponent.prototype.ngOnChanges = function (changes) {
        var _a;
        if ((_a = changes['info']) === null || _a === void 0 ? void 0 : _a.currentValue) {
            this.hasLocation = !!this.info.country;
            if (this.hasLocation) {
                this.userLocation = _global_utils__WEBPACK_IMPORTED_MODULE_2__["Utils"].generateUserFriendlyLocation(this.info.country, this.info.region, this.info.city, this.info.province, this.info.region_name);
            }
        }
    };
    ItemAdminComponent.prototype.removeAdmin = function () {
        this.removeAdminEv.emit(this.info);
    };
    ItemAdminComponent.ctorParameters = function () { return []; };
    ItemAdminComponent.propDecorators = {
        info: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
        canDelete: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
        removeAdminEv: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] }]
    };
    ItemAdminComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-item-admin',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./item-admin.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/manage-admins-page/components/item-suggestion/item-admin.component.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./item-admin.component.scss */ "./src/app/manage-admins-page/components/item-suggestion/item-admin.component.scss")).default]
        })
    ], ItemAdminComponent);
    return ItemAdminComponent;
}());



/***/ }),

/***/ "./src/app/manage-admins-page/components/item-suggestion/item-admin.module.ts":
/*!************************************************************************************!*\
  !*** ./src/app/manage-admins-page/components/item-suggestion/item-admin.module.ts ***!
  \************************************************************************************/
/*! exports provided: ItemAdminModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItemAdminModule", function() { return ItemAdminModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _item_admin_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./item-admin.component */ "./src/app/manage-admins-page/components/item-suggestion/item-admin.component.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
/* harmony import */ var _shared_components_image_item_image_item_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../@shared/components/image-item/image-item.module */ "./src/app/@shared/components/image-item/image-item.module.ts");







var ItemAdminModule = /** @class */ (function () {
    function ItemAdminModule() {
    }
    ItemAdminModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_item_admin_component__WEBPACK_IMPORTED_MODULE_3__["ItemAdminComponent"]],
            imports: [_ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateModule"].forChild(), _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _shared_components_image_item_image_item_module__WEBPACK_IMPORTED_MODULE_6__["ImageItemModule"]],
            exports: [_item_admin_component__WEBPACK_IMPORTED_MODULE_3__["ItemAdminComponent"]],
        })
    ], ItemAdminModule);
    return ItemAdminModule;
}());



/***/ }),

/***/ "./src/app/manage-admins-page/manage-admins-page-routing.module.ts":
/*!*************************************************************************!*\
  !*** ./src/app/manage-admins-page/manage-admins-page-routing.module.ts ***!
  \*************************************************************************/
/*! exports provided: ManageAdminsPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManageAdminsPageRoutingModule", function() { return ManageAdminsPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _manage_admins_page_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./manage-admins-page.page */ "./src/app/manage-admins-page/manage-admins-page.page.ts");




var routes = [
    {
        path: '',
        component: _manage_admins_page_page__WEBPACK_IMPORTED_MODULE_3__["ManageAdminsPage"],
    },
    {
        path: 'invite',
        loadChildren: function () { return __webpack_require__.e(/*! import() | invite-invite-module */ "invite-invite-module").then(__webpack_require__.bind(null, /*! ./invite/invite.module */ "./src/app/manage-admins-page/invite/invite.module.ts")).then(function (m) { return m.InvitePageModule; }); },
    },
];
var ManageAdminsPageRoutingModule = /** @class */ (function () {
    function ManageAdminsPageRoutingModule() {
    }
    ManageAdminsPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], ManageAdminsPageRoutingModule);
    return ManageAdminsPageRoutingModule;
}());



/***/ }),

/***/ "./src/app/manage-admins-page/manage-admins-page.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/manage-admins-page/manage-admins-page.module.ts ***!
  \*****************************************************************/
/*! exports provided: ManageAdminsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManageAdminsPageModule", function() { return ManageAdminsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _manage_admins_page_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./manage-admins-page-routing.module */ "./src/app/manage-admins-page/manage-admins-page-routing.module.ts");
/* harmony import */ var _manage_admins_page_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./manage-admins-page.page */ "./src/app/manage-admins-page/manage-admins-page.page.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../@shared/shared.module */ "./src/app/@shared/shared.module.ts");
/* harmony import */ var _components_item_suggestion_item_admin_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/item-suggestion/item-admin.module */ "./src/app/manage-admins-page/components/item-suggestion/item-admin.module.ts");






var ManageAdminsPageModule = /** @class */ (function () {
    function ManageAdminsPageModule() {
    }
    ManageAdminsPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"], _manage_admins_page_routing_module__WEBPACK_IMPORTED_MODULE_2__["ManageAdminsPageRoutingModule"], _components_item_suggestion_item_admin_module__WEBPACK_IMPORTED_MODULE_5__["ItemAdminModule"]],
            declarations: [_manage_admins_page_page__WEBPACK_IMPORTED_MODULE_3__["ManageAdminsPage"]],
        })
    ], ManageAdminsPageModule);
    return ManageAdminsPageModule;
}());



/***/ }),

/***/ "./src/app/manage-admins-page/manage-admins-page.page.scss":
/*!*****************************************************************!*\
  !*** ./src/app/manage-admins-page/manage-admins-page.page.scss ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".editIcon {\n  position: absolute;\n  right: 10px;\n  top: 4px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFuYWdlLWFkbWlucy1wYWdlL21hbmFnZS1hZG1pbnMtcGFnZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxRQUFBO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9tYW5hZ2UtYWRtaW5zLXBhZ2UvbWFuYWdlLWFkbWlucy1wYWdlLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5lZGl0SWNvbiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDEwcHg7XG4gIHRvcDogNHB4O1xufVxuIl19 */");

/***/ }),

/***/ "./src/app/manage-admins-page/manage-admins-page.page.ts":
/*!***************************************************************!*\
  !*** ./src/app/manage-admins-page/manage-admins-page.page.ts ***!
  \***************************************************************/
/*! exports provided: ManageAdminsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManageAdminsPage", function() { return ManageAdminsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _base_base_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../base/base.page */ "./src/app/base/base.page.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngxs/store */ "./node_modules/@ngxs/store/__ivy_ngcc__/fesm2015/ngxs-store.js");
/* harmony import */ var _core_utils_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../@core/utils.service */ "./src/app/@core/utils.service.ts");
/* harmony import */ var _store_pages_pages_actions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../@store/pages/pages.actions */ "./src/app/@store/pages/pages.actions.ts");
/* harmony import */ var _store_pages_pages_state__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../@store/pages/pages.state */ "./src/app/@store/pages/pages.state.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
/* harmony import */ var _store_user_user_state__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../@store/user/user.state */ "./src/app/@store/user/user.state.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");













var ManageAdminsPage = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(ManageAdminsPage, _super);
    function ManageAdminsPage(router, location, store, utilsService, route, alertController, translateService) {
        var _this = _super.call(this, location, router, store, utilsService) || this;
        _this.route = route;
        _this.alertController = alertController;
        _this.translateService = translateService;
        _this.pageAdministrators = [];
        return _this;
    }
    ManageAdminsPage.prototype.ngOnInit = function () {
        var _a;
        this.profileId = this.route.snapshot.params['profileId'];
        this.userId = (_a = this.store.selectSnapshot(_store_user_user_state__WEBPACK_IMPORTED_MODULE_11__["UserState"].getUserInfo)) === null || _a === void 0 ? void 0 : _a.id;
        this.store.dispatch(new _store_pages_pages_actions__WEBPACK_IMPORTED_MODULE_7__["GetPageAdministrators"]({ id: this.profileId }));
        this.subscribeToPageAdministrators();
    };
    ManageAdminsPage.prototype.goToInvitePage = function () {
        this.router.navigate(['./invite'], { relativeTo: this.route });
    };
    ManageAdminsPage.prototype.removeAdmin = function (event) {
        this.showDeleteConfirm(event);
    };
    ManageAdminsPage.prototype.subscribeToPageAdministrators = function () {
        var _this = this;
        this.pageAdministratorsSubscription$ = this.store
            .select(_store_pages_pages_state__WEBPACK_IMPORTED_MODULE_8__["PagesState"].getPageAdministrators)
            .subscribe(function (data) {
            _this.pageAdministrators = data;
        });
    };
    ManageAdminsPage.prototype.disconnectObservers = function () {
        if (this.pageAdministratorsSubscription$) {
            this.pageAdministratorsSubscription$.unsubscribe();
        }
    };
    ManageAdminsPage.prototype.showDeleteConfirm = function (user) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var message, itSelf, alert;
            var _this = this;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        message = '';
                        if (!(user.id === this.userId)) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.translateService.get('organizationProfile.administratorsPage.deleteAdminOwn').toPromise()];
                    case 1:
                        message = _a.sent();
                        itSelf = true;
                        return [3 /*break*/, 4];
                    case 2: return [4 /*yield*/, this.translateService.get('organizationProfile.administratorsPage.deleteAdmin').toPromise()];
                    case 3:
                        message = _a.sent();
                        itSelf = false;
                        _a.label = 4;
                    case 4: return [4 /*yield*/, this.alertController.create({
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
                                            .dispatch(new _store_pages_pages_actions__WEBPACK_IMPORTED_MODULE_7__["DeletePageAdministrator"]({
                                            organizationId: _this.profileId,
                                            userId: user.id,
                                        }))
                                            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_12__["take"])(1))
                                            .subscribe(function () {
                                            // go home
                                            if (itSelf) {
                                                _this.router.navigate(['/tabnav']);
                                            }
                                        });
                                    },
                                },
                            ],
                        })];
                    case 5:
                        alert = _a.sent();
                        return [4 /*yield*/, alert.present()];
                    case 6:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    ManageAdminsPage.prototype.ngOnDestroy = function () {
        this.disconnectObservers();
    };
    ManageAdminsPage.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: _angular_common__WEBPACK_IMPORTED_MODULE_4__["Location"] },
        { type: _ngxs_store__WEBPACK_IMPORTED_MODULE_5__["Store"] },
        { type: _core_utils_service__WEBPACK_IMPORTED_MODULE_6__["UtilsService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__["AlertController"] },
        { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__["TranslateService"] }
    ]; };
    ManageAdminsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-manage-admins-page',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./manage-admins-page.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/manage-admins-page/manage-admins-page.page.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./manage-admins-page.page.scss */ "./src/app/manage-admins-page/manage-admins-page.page.scss")).default]
        })
    ], ManageAdminsPage);
    return ManageAdminsPage;
}(_base_base_page__WEBPACK_IMPORTED_MODULE_2__["BasePage"]));



/***/ })

}]);
//# sourceMappingURL=manage-admins-page-manage-admins-page-module.js.map