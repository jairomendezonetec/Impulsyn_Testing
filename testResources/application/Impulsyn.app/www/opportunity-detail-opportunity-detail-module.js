(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["opportunity-detail-opportunity-detail-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/opportunity-detail/opportunity-detail.page.html":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/opportunity-detail/opportunity-detail.page.html ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-header [showBackButton]=\"true\" [title]=\"'opportunity.title'\" (backButtonClick)=\"goBack()\"></app-header>\n\n<ion-content>\n  <div class=\"item-profile\">\n    <app-opportunity-item [info]=\"jobOffer\" [hasPhoto]=\"true\" (itemClick)=\"onItemClick($event)\"> </app-opportunity-item>\n  </div>\n  <ion-grid class=\"regular-small-size ion-padding ion-margin\">\n    <ion-row *ngIf=\"jobOffer.description\">\n      <ion-col>\n        <ion-text>\n          <span class=\"bold\">{{ 'formFields.description' | translate}}</span>\n          <p class=\"respectLineJumps\">{{jobOffer.description}}</p>\n        </ion-text>\n      </ion-col>\n    </ion-row>\n    <ion-row *ngIf=\"jobOffer.responsibilities\">\n      <ion-col>\n        <ion-text>\n          <span class=\"bold\">{{ 'formFields.responsibilities' | translate}}</span>\n          <p class=\"respectLineJumps\">{{ jobOffer.responsibilities }}</p>\n        </ion-text>\n      </ion-col>\n    </ion-row>\n    <ion-row *ngIf=\"jobOffer.requirements\">\n      <ion-col>\n        <ion-text>\n          <span class=\"bold\">{{ 'formFields.requirements' | translate}}</span>\n          <p class=\"respectLineJumps\">{{ jobOffer.requirements }}</p>\n        </ion-text>\n      </ion-col>\n    </ion-row>\n    <ion-row *ngIf=\"jobOffer.work_area\">\n      <ion-col>\n        <ion-text>\n          <span class=\"bold\">{{ 'formFields.workArea' | translate}}</span>\n          <p>{{'workArea.' + jobOffer.work_area?.name | translate}}</p>\n        </ion-text>\n      </ion-col>\n    </ion-row>\n    <ion-row *ngIf=\"jobOffer.sports.length > 0\">\n      <ion-col>\n        <ion-text>\n          <span class=\"bold\">{{ 'sports.sportRelatedDetail' | translate}}</span>\n          <p>\n            <span *ngFor=\"let item of jobOffer.sports; index as i\">\n              {{ 'sports.' + item.name | translate }}{{(i === jobOffer.sports.length - 1) ? '' : ','}}\n            </span>\n          </p>\n        </ion-text>\n      </ion-col>\n    </ion-row>\n    <ion-row *ngIf=\"jobOffer.opportunity_type\">\n      <ion-col>\n        <ion-text>\n          <span class=\"bold\">{{ 'formFields.opportunityType' | translate}}</span>\n          <p>{{'opportunityType.' + jobOffer.opportunity_type?.name | translate}}</p>\n        </ion-text>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n<ion-footer *ngIf=\"!editable\">\n  <ion-grid class=\"buttons-line footer-grid\">\n    <ion-row class=\"flex-row\">\n      <div class=\"col-xs-6 ion-justify-content-center\" *ngIf=\"!isRequested\">\n        <ion-button color=\"secondary\" (click)=\"onRequestButtonClick()\"\n          >{{'pageDetail.requestButton' | translate}}</ion-button\n        >\n      </div>\n      <div class=\"col-xs-6 ion-justify-content-center\" *ngIf=\"isRequested\">\n        <ion-button color=\"secondary\">{{'pageDetail.requestedButton' | translate}}</ion-button>\n      </div>\n      <div class=\"col-xs-6 ion-justify-content-center\">\n        <ion-button class=\"secondary-button with-icon-end\" (click)=\"onFavouriteButtonClick()\"\n          >{{ 'pageDetail.favoriteButton' | translate}}\n          <ion-icon name=\"{{(isFavourite)?'heart': 'heart-outline'}}\" color=\"secondary\"></ion-icon>\n        </ion-button>\n      </div>\n    </ion-row>\n  </ion-grid>\n</ion-footer>\n");

/***/ }),

/***/ "./src/app/opportunity-detail/opportunity-detail-routing.module.ts":
/*!*************************************************************************!*\
  !*** ./src/app/opportunity-detail/opportunity-detail-routing.module.ts ***!
  \*************************************************************************/
/*! exports provided: OpportunityDetailPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OpportunityDetailPageRoutingModule", function() { return OpportunityDetailPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _opportunity_detail_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./opportunity-detail.page */ "./src/app/opportunity-detail/opportunity-detail.page.ts");




var routes = [
    {
        path: '',
        component: _opportunity_detail_page__WEBPACK_IMPORTED_MODULE_3__["OpportunityDetailPage"],
    },
];
var OpportunityDetailPageRoutingModule = /** @class */ (function () {
    function OpportunityDetailPageRoutingModule() {
    }
    OpportunityDetailPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], OpportunityDetailPageRoutingModule);
    return OpportunityDetailPageRoutingModule;
}());



/***/ }),

/***/ "./src/app/opportunity-detail/opportunity-detail.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/opportunity-detail/opportunity-detail.module.ts ***!
  \*****************************************************************/
/*! exports provided: OpportunityDetailPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OpportunityDetailPageModule", function() { return OpportunityDetailPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _opportunity_detail_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./opportunity-detail-routing.module */ "./src/app/opportunity-detail/opportunity-detail-routing.module.ts");
/* harmony import */ var _opportunity_detail_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./opportunity-detail.page */ "./src/app/opportunity-detail/opportunity-detail.page.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../@shared/shared.module */ "./src/app/@shared/shared.module.ts");
/* harmony import */ var _shared_components_request_message_modal_request_message_modal_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../@shared/components/request-message-modal/request-message-modal.module */ "./src/app/@shared/components/request-message-modal/request-message-modal.module.ts");






var OpportunityDetailPageModule = /** @class */ (function () {
    function OpportunityDetailPageModule() {
    }
    OpportunityDetailPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"], _opportunity_detail_routing_module__WEBPACK_IMPORTED_MODULE_2__["OpportunityDetailPageRoutingModule"], _shared_components_request_message_modal_request_message_modal_module__WEBPACK_IMPORTED_MODULE_5__["RequestMessageModalModule"]],
            declarations: [_opportunity_detail_page__WEBPACK_IMPORTED_MODULE_3__["OpportunityDetailPage"]],
        })
    ], OpportunityDetailPageModule);
    return OpportunityDetailPageModule;
}());



/***/ }),

/***/ "./src/app/opportunity-detail/opportunity-detail.page.scss":
/*!*****************************************************************!*\
  !*** ./src/app/opportunity-detail/opportunity-detail.page.scss ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL29wcG9ydHVuaXR5LWRldGFpbC9vcHBvcnR1bml0eS1kZXRhaWwucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/opportunity-detail/opportunity-detail.page.ts":
/*!***************************************************************!*\
  !*** ./src/app/opportunity-detail/opportunity-detail.page.ts ***!
  \***************************************************************/
/*! exports provided: OpportunityDetailPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OpportunityDetailPage", function() { return OpportunityDetailPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _base_base_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../base/base.page */ "./src/app/base/base.page.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngxs/store */ "./node_modules/@ngxs/store/__ivy_ngcc__/fesm2015/ngxs-store.js");
/* harmony import */ var _core_utils_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../@core/utils.service */ "./src/app/@core/utils.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _store_job_offers_job_offers_state__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../@store/job-offers/job-offers.state */ "./src/app/@store/job-offers/job-offers.state.ts");
/* harmony import */ var _store_job_offers_job_offers_actions__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../@store/job-offers/job-offers.actions */ "./src/app/@store/job-offers/job-offers.actions.ts");
/* harmony import */ var _global_utils__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../@global/utils */ "./src/app/@global/utils.ts");
/* harmony import */ var _shared_components_request_message_modal_request_message_modal_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../@shared/components/request-message-modal/request-message-modal.component */ "./src/app/@shared/components/request-message-modal/request-message-modal.component.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _core_inform_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../@core/inform.service */ "./src/app/@core/inform.service.ts");














var OpportunityDetailPage = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(OpportunityDetailPage, _super);
    function OpportunityDetailPage(location, router, store, utilsService, route, modalController, informService) {
        var _this = _super.call(this, location, router, store, utilsService) || this;
        _this.route = route;
        _this.modalController = modalController;
        _this.informService = informService;
        _this.favourites = [];
        _this.requests = [];
        _this.isFavourite = false;
        _this.isRequested = false;
        return _this;
    }
    OpportunityDetailPage.prototype.ngOnInit = function () {
        var _this = this;
        this.jobOfferId = this.route.snapshot.params['id'];
        this.jobOfferSub = this.store.select(_store_job_offers_job_offers_state__WEBPACK_IMPORTED_MODULE_8__["JobOffersState"].getCurrentJobOffer).subscribe(function (res) {
            var _a;
            if (!res) {
                return;
            }
            _this.jobOffer = res;
            _this.editable = (_a = _this.jobOffer) === null || _a === void 0 ? void 0 : _a.own;
            _this.isFavouriteLogic();
            _this.isRequestedLogic();
        });
    };
    OpportunityDetailPage.prototype.isRequestedLogic = function () {
        var _this = this;
        this.store.dispatch(new _store_job_offers_job_offers_actions__WEBPACK_IMPORTED_MODULE_9__["GetJobOffersRequested"]());
        this.requestsSub = this.store.select(_store_job_offers_job_offers_state__WEBPACK_IMPORTED_MODULE_8__["JobOffersState"].getJobOffersRequested).subscribe(function (data) {
            if (!data) {
                return;
            }
            _this.requests = data;
            _this.isRequested = _this.searchInRequests();
        });
    };
    OpportunityDetailPage.prototype.isFavouriteLogic = function () {
        var _this = this;
        this.store.dispatch(new _store_job_offers_job_offers_actions__WEBPACK_IMPORTED_MODULE_9__["GetJobOffersFavourites"]());
        this.favouriteSub = this.store.select(_store_job_offers_job_offers_state__WEBPACK_IMPORTED_MODULE_8__["JobOffersState"].getJobOffersFavourites).subscribe(function (data) {
            if (!data) {
                return;
            }
            _this.favourites = data;
            _this.isFavourite = _this.searchInFavourites();
        });
    };
    OpportunityDetailPage.prototype.searchInRequests = function () {
        return _global_utils__WEBPACK_IMPORTED_MODULE_10__["Utils"].isItemOnList(this.requests, this.jobOfferId);
    };
    OpportunityDetailPage.prototype.searchInFavourites = function () {
        return _global_utils__WEBPACK_IMPORTED_MODULE_10__["Utils"].isItemOnList(this.favourites, this.jobOfferId);
    };
    OpportunityDetailPage.prototype.onRequestButtonClick = function () {
        if (this.jobOffer.contact_email) {
            this.openRequestModal();
        }
        else if (this.jobOffer.website) {
            // Open web
            this.utilsService.openLink(this.jobOffer.website);
        }
    };
    OpportunityDetailPage.prototype.openRequestModal = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var modal;
            var _this = this;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.modalController.create({
                            component: _shared_components_request_message_modal_request_message_modal_component__WEBPACK_IMPORTED_MODULE_11__["RequestMessageModalComponent"],
                            componentProps: {
                                type: 'opportunity',
                            },
                        })];
                    case 1:
                        modal = _a.sent();
                        modal.onDidDismiss().then(function (response) {
                            if (response.data) {
                                console.dir(response.data);
                                var modalFormData = {
                                    message: response.data.message,
                                    contact_email: response.data.contactEmail,
                                    contact_phone: response.data.contactPhone,
                                    contact_name: response.data.name,
                                    surname: response.data.surname,
                                };
                                _this.store
                                    .dispatch(new _store_job_offers_job_offers_actions__WEBPACK_IMPORTED_MODULE_9__["RequestEmailJobOffer"]({
                                    id: _this.jobOffer.id,
                                    input: modalFormData,
                                    jobOffer: _this.jobOffer,
                                    resume: response.data.resume,
                                }))
                                    .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_12__["take"])(1))
                                    .subscribe(function () {
                                    _this.informService.showInfo('requestSuccess');
                                    _this.isRequested = true;
                                });
                            }
                        });
                        return [4 /*yield*/, modal.present()];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    OpportunityDetailPage.prototype.onFavouriteButtonClick = function () {
        if (this.isFavourite) {
            this.store.dispatch(new _store_job_offers_job_offers_actions__WEBPACK_IMPORTED_MODULE_9__["DeleteJobOfferFavourite"](this.jobOffer.id));
        }
        else {
            this.store.dispatch(new _store_job_offers_job_offers_actions__WEBPACK_IMPORTED_MODULE_9__["AddJobOfferFavourite"](this.jobOffer));
        }
    };
    OpportunityDetailPage.prototype.disconnectObservers = function () {
        if (this.jobOfferSub) {
            this.jobOfferSub.unsubscribe();
        }
        if (this.requestsSub) {
            this.requestsSub.unsubscribe();
        }
        if (this.favouriteSub) {
            this.favouriteSub.unsubscribe();
        }
    };
    OpportunityDetailPage.prototype.onItemClick = function ($event) {
        this.router.navigate([
            'organization-profile',
            this.store.selectSnapshot(_store_job_offers_job_offers_state__WEBPACK_IMPORTED_MODULE_8__["JobOffersState"].getCurrentJobOffer).organization_id,
        ]);
    };
    OpportunityDetailPage.prototype.ngOnDestroy = function () {
        this.disconnectObservers();
    };
    OpportunityDetailPage.ctorParameters = function () { return [
        { type: _angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
        { type: _ngxs_store__WEBPACK_IMPORTED_MODULE_5__["Store"] },
        { type: _core_utils_service__WEBPACK_IMPORTED_MODULE_6__["UtilsService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["ModalController"] },
        { type: _core_inform_service__WEBPACK_IMPORTED_MODULE_13__["InformService"] }
    ]; };
    OpportunityDetailPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-opportunity-detail',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./opportunity-detail.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/opportunity-detail/opportunity-detail.page.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./opportunity-detail.page.scss */ "./src/app/opportunity-detail/opportunity-detail.page.scss")).default]
        })
    ], OpportunityDetailPage);
    return OpportunityDetailPage;
}(_base_base_page__WEBPACK_IMPORTED_MODULE_2__["BasePage"]));



/***/ })

}]);
//# sourceMappingURL=opportunity-detail-opportunity-detail-module.js.map