(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["academic-program-detail-academic-program-detail-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/academic-program-detail/academic-program-detail.page.html":
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/academic-program-detail/academic-program-detail.page.html ***!
  \*****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-header [showBackButton]=\"true\" [title]=\"'academicProgram.title'\" (backButtonClick)=\"goBack()\"></app-header>\n\n<ion-content>\n  <div class=\"item-profile\">\n    <app-academic-item [program]=\"program\" (itemClick)=\"onItemClick($event)\" [hasPhoto]=\"true\"> </app-academic-item>\n  </div>\n  <ion-grid class=\"regular-small-size ion-padding ion-margin\">\n    <ion-row *ngIf=\"program.description\">\n      <ion-col>\n        <ion-text>\n          <span class=\"bold\">{{ 'formFields.description' | translate}}</span>\n          <p class=\"respectLineJumps\">{{program.description}}</p>\n        </ion-text>\n      </ion-col>\n    </ion-row>\n    <ion-row *ngIf=\"program.academic_type\">\n      <ion-col>\n        <ion-text>\n          <span class=\"bold\">{{ 'formFields.academicType' | translate}}</span>\n          <p>{{'academicType.' + program.academic_type?.name | translate}}</p>\n        </ion-text>\n      </ion-col>\n    </ion-row>\n    <ion-row *ngIf=\"program.study_area\">\n      <ion-col>\n        <ion-text>\n          <span class=\"bold\">{{ 'formFields.studyArea' | translate}}</span>\n          <p>{{'studyArea.' + program.study_area?.name | translate}}</p>\n        </ion-text>\n      </ion-col>\n    </ion-row>\n    <!--    <ion-row *ngIf=\"program.sport\">-->\n    <!--      <ion-col>-->\n    <!--        <ion-text>-->\n    <!--          <span class=\"bold\">{{ 'formFields.sport' | translate}}</span>-->\n    <!--          <a href=\"{{program.sport}}\">{{program.sport}}</a>-->\n    <!--        </ion-text>-->\n    <!--      </ion-col>-->\n    <!--    </ion-row>-->\n    <ion-row *ngIf=\"program.modality\">\n      <ion-col>\n        <ion-text>\n          <span class=\"bold\">{{ 'formFields.modality' | translate}}</span>\n          <p>{{'academicModality.' + program.modality?.name | translate}}</p>\n        </ion-text>\n      </ion-col>\n    </ion-row>\n    <ion-row *ngIf=\"program.language\">\n      <ion-col>\n        <ion-text>\n          <span class=\"bold\">{{ 'formFields.language' | translate}}</span>\n          <p>{{'languageList.' + program.language?.name | translate}}</p>\n        </ion-text>\n      </ion-col>\n    </ion-row>\n    <ion-row *ngIf=\"program.sports.length > 0\">\n      <ion-col>\n        <ion-text>\n          <span class=\"bold\">{{ 'sports.sportRelatedDetail' | translate}}</span>\n          <p>\n            <span *ngFor=\"let item of program.sports; index as i\">\n              {{ 'sports.' + item.name | translate }}{{(i === program.sports.length - 1) ? '' : ','}}\n            </span>\n          </p>\n        </ion-text>\n      </ion-col>\n    </ion-row>\n    <ion-row *ngIf=\"program.start_date && program.end_date\">\n      <ion-col>\n        <ion-text>\n          <span class=\"bold\">{{ 'formFields.date' | translate}}</span>\n          <p>\n            {{ program.friendly_start_date.month | translate }} {{ program.friendly_start_date.year }} {{' - ' +\n            (program.friendly_end_date.month | translate) + ' ' + program.friendly_end_date.year }}\n          </p>\n        </ion-text>\n      </ion-col>\n    </ion-row>\n    <ion-row *ngIf=\"program.start_date && !program.end_date\">\n      <ion-col>\n        <ion-text>\n          <span class=\"bold\">{{ 'formFields.startDate' | translate}}</span>\n          <p>{{ program.friendly_start_date.month | translate }} {{ program.friendly_start_date.year }}</p>\n        </ion-text>\n      </ion-col>\n    </ion-row>\n    <!--    <ion-row *ngIf=\"program.price\">-->\n    <!--      <ion-col>-->\n    <!--        <ion-text>-->\n    <!--          <span class=\"bold\">{{ 'formFields.price' | translate}}</span>-->\n    <!--          <p>{{program.price}}</p>-->\n    <!--        </ion-text>-->\n    <!--      </ion-col>-->\n    <!--    </ion-row>-->\n    <ion-row *ngIf=\"program.brochure\">\n      <ion-col>\n        <div class=\"brochure-link bold\" (click)=\"openLink(program.brochure)\">\n          <span>{{ 'formFields.downloadBrochure' | translate}}</span>\n          <ion-icon name=\"cloud-download-outline\" class=\"download-brochure-icon\"></ion-icon>\n        </div>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n<ion-footer *ngIf=\"!editable\">\n  <ion-grid class=\"buttons-line footer-grid\">\n    <ion-row class=\"flex-row\">\n      <div class=\"col-xs-6 ion-justify-content-center\" *ngIf=\"!isRequested\">\n        <ion-button color=\"secondary\" (click)=\"onRequestButtonClick()\"\n          >{{'pageDetail.requestInfoButton' | translate}}</ion-button\n        >\n      </div>\n      <div class=\"col-xs-6 ion-justify-content-center\" *ngIf=\"isRequested\">\n        <ion-button color=\"secondary\">{{'pageDetail.requestedButton' | translate}}</ion-button>\n      </div>\n      <div class=\"col-xs-6 ion-justify-content-center\">\n        <ion-button class=\"secondary-button with-icon-end\" (click)=\"onFavouriteButtonClick()\"\n          >{{ 'pageDetail.favoriteButton' | translate}}\n          <ion-icon name=\"{{(isFavourite)?'heart': 'heart-outline'}}\" color=\"secondary\"></ion-icon>\n        </ion-button>\n      </div>\n    </ion-row>\n  </ion-grid>\n</ion-footer>\n");

/***/ }),

/***/ "./src/app/academic-program-detail/academic-program-detail-routing.module.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/academic-program-detail/academic-program-detail-routing.module.ts ***!
  \***********************************************************************************/
/*! exports provided: AcademicProgramDetailPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AcademicProgramDetailPageRoutingModule", function() { return AcademicProgramDetailPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _academic_program_detail_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./academic-program-detail.page */ "./src/app/academic-program-detail/academic-program-detail.page.ts");




var routes = [
    {
        path: '',
        component: _academic_program_detail_page__WEBPACK_IMPORTED_MODULE_3__["AcademicProgramDetailPage"],
    },
];
var AcademicProgramDetailPageRoutingModule = /** @class */ (function () {
    function AcademicProgramDetailPageRoutingModule() {
    }
    AcademicProgramDetailPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], AcademicProgramDetailPageRoutingModule);
    return AcademicProgramDetailPageRoutingModule;
}());



/***/ }),

/***/ "./src/app/academic-program-detail/academic-program-detail.module.ts":
/*!***************************************************************************!*\
  !*** ./src/app/academic-program-detail/academic-program-detail.module.ts ***!
  \***************************************************************************/
/*! exports provided: AcademicProgramDetailPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AcademicProgramDetailPageModule", function() { return AcademicProgramDetailPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _academic_program_detail_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./academic-program-detail-routing.module */ "./src/app/academic-program-detail/academic-program-detail-routing.module.ts");
/* harmony import */ var _academic_program_detail_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./academic-program-detail.page */ "./src/app/academic-program-detail/academic-program-detail.page.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../@shared/shared.module */ "./src/app/@shared/shared.module.ts");
/* harmony import */ var _shared_components_request_message_modal_request_message_modal_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../@shared/components/request-message-modal/request-message-modal.module */ "./src/app/@shared/components/request-message-modal/request-message-modal.module.ts");






var AcademicProgramDetailPageModule = /** @class */ (function () {
    function AcademicProgramDetailPageModule() {
    }
    AcademicProgramDetailPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"], _academic_program_detail_routing_module__WEBPACK_IMPORTED_MODULE_2__["AcademicProgramDetailPageRoutingModule"], _shared_components_request_message_modal_request_message_modal_module__WEBPACK_IMPORTED_MODULE_5__["RequestMessageModalModule"]],
            declarations: [_academic_program_detail_page__WEBPACK_IMPORTED_MODULE_3__["AcademicProgramDetailPage"]],
        })
    ], AcademicProgramDetailPageModule);
    return AcademicProgramDetailPageModule;
}());



/***/ }),

/***/ "./src/app/academic-program-detail/academic-program-detail.page.scss":
/*!***************************************************************************!*\
  !*** ./src/app/academic-program-detail/academic-program-detail.page.scss ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".brochure-link {\n  text-decoration: none;\n  color: var(--ion-color-secondary);\n  display: flex;\n  align-items: center;\n}\n.brochure-link .download-brochure-icon {\n  margin-left: 3px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWNhZGVtaWMtcHJvZ3JhbS1kZXRhaWwvYWNhZGVtaWMtcHJvZ3JhbS1kZXRhaWwucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UscUJBQUE7RUFDQSxpQ0FBQTtFQUVBLGFBQUE7RUFDQSxtQkFBQTtBQUFGO0FBRUU7RUFDRSxnQkFBQTtBQUFKIiwiZmlsZSI6InNyYy9hcHAvYWNhZGVtaWMtcHJvZ3JhbS1kZXRhaWwvYWNhZGVtaWMtcHJvZ3JhbS1kZXRhaWwucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJyb2NodXJlLWxpbmsge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3Itc2Vjb25kYXJ5KTtcblxuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuXG4gIC5kb3dubG9hZC1icm9jaHVyZS1pY29uIHtcbiAgICBtYXJnaW4tbGVmdDogM3B4O1xuICB9XG59XG4iXX0= */");

/***/ }),

/***/ "./src/app/academic-program-detail/academic-program-detail.page.ts":
/*!*************************************************************************!*\
  !*** ./src/app/academic-program-detail/academic-program-detail.page.ts ***!
  \*************************************************************************/
/*! exports provided: AcademicProgramDetailPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AcademicProgramDetailPage", function() { return AcademicProgramDetailPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _base_base_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../base/base.page */ "./src/app/base/base.page.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngxs/store */ "./node_modules/@ngxs/store/__ivy_ngcc__/fesm2015/ngxs-store.js");
/* harmony import */ var _core_utils_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../@core/utils.service */ "./src/app/@core/utils.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _store_academic_programs_academic_programs_state__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../@store/academic-programs/academic-programs.state */ "./src/app/@store/academic-programs/academic-programs.state.ts");
/* harmony import */ var _store_academic_programs_academic_programs_actions__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../@store/academic-programs/academic-programs.actions */ "./src/app/@store/academic-programs/academic-programs.actions.ts");
/* harmony import */ var _global_utils__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../@global/utils */ "./src/app/@global/utils.ts");
/* harmony import */ var _shared_components_request_message_modal_request_message_modal_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../@shared/components/request-message-modal/request-message-modal.component */ "./src/app/@shared/components/request-message-modal/request-message-modal.component.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _core_inform_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../@core/inform.service */ "./src/app/@core/inform.service.ts");














var AcademicProgramDetailPage = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(AcademicProgramDetailPage, _super);
    function AcademicProgramDetailPage(location, router, store, utilsService, route, modalController, informService) {
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
    AcademicProgramDetailPage.prototype.ngOnInit = function () {
        this.programId = this.route.snapshot.params['id'];
        this.subscribeToAcademicProgram();
    };
    AcademicProgramDetailPage.prototype.subscribeToAcademicProgram = function () {
        var _this = this;
        this.academicProgramSub = this.store
            .select(_store_academic_programs_academic_programs_state__WEBPACK_IMPORTED_MODULE_8__["AcademicProgramsState"].getCurrentAcademicProgram)
            .subscribe(function (res) {
            var _a;
            if (!res) {
                return;
            }
            _this.program = res;
            _this.editable = (_a = _this.program) === null || _a === void 0 ? void 0 : _a.own;
            _this.isFavouriteLogic();
            _this.isRequestedLogic();
        });
    };
    AcademicProgramDetailPage.prototype.isRequestedLogic = function () {
        var _this = this;
        this.store.dispatch(new _store_academic_programs_academic_programs_actions__WEBPACK_IMPORTED_MODULE_9__["GetAcademicProgramsRequested"]());
        this.requestsSub = this.store.select(_store_academic_programs_academic_programs_state__WEBPACK_IMPORTED_MODULE_8__["AcademicProgramsState"].getAcademicProgramsRequested).subscribe(function (data) {
            if (!data) {
                return;
            }
            _this.requests = data;
            _this.isRequested = _this.searchInRequests();
        });
    };
    AcademicProgramDetailPage.prototype.isFavouriteLogic = function () {
        var _this = this;
        this.store.dispatch(new _store_academic_programs_academic_programs_actions__WEBPACK_IMPORTED_MODULE_9__["GetAcademicProgramsFavourites"]());
        this.favouriteSub = this.store.select(_store_academic_programs_academic_programs_state__WEBPACK_IMPORTED_MODULE_8__["AcademicProgramsState"].getAcademicProgramsFavourites).subscribe(function (data) {
            if (!data) {
                return;
            }
            _this.favourites = data;
            _this.isFavourite = _this.searchInFavourites();
        });
    };
    AcademicProgramDetailPage.prototype.searchInRequests = function () {
        return _global_utils__WEBPACK_IMPORTED_MODULE_10__["Utils"].isItemOnList(this.requests, this.programId);
    };
    AcademicProgramDetailPage.prototype.searchInFavourites = function () {
        return _global_utils__WEBPACK_IMPORTED_MODULE_10__["Utils"].isItemOnList(this.favourites, this.programId);
    };
    AcademicProgramDetailPage.prototype.onRequestButtonClick = function () {
        if (this.program.contact_email) {
            this.openRequestModal();
        }
        else if (this.program.website) {
            // Open web
            this.utilsService.openLink(this.program.website);
        }
    };
    AcademicProgramDetailPage.prototype.openRequestModal = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var modal;
            var _this = this;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.modalController.create({
                            component: _shared_components_request_message_modal_request_message_modal_component__WEBPACK_IMPORTED_MODULE_11__["RequestMessageModalComponent"],
                            componentProps: {
                                type: 'academic',
                            },
                        })];
                    case 1:
                        modal = _a.sent();
                        modal.onDidDismiss().then(function (response) {
                            if (response.data) {
                                console.dir(response.data);
                                var modaFormData = {
                                    message: response.data.message,
                                    contact_email: response.data.contactEmail,
                                    contact_phone: response.data.contactPhone,
                                    contact_name: response.data.name,
                                    surname: response.data.surname,
                                };
                                _this.store
                                    .dispatch(new _store_academic_programs_academic_programs_actions__WEBPACK_IMPORTED_MODULE_9__["RequestEmailAcademicProgram"]({
                                    id: _this.program.id,
                                    input: modaFormData,
                                    program: _this.program,
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
    AcademicProgramDetailPage.prototype.onFavouriteButtonClick = function () {
        if (this.isFavourite) {
            this.store.dispatch(new _store_academic_programs_academic_programs_actions__WEBPACK_IMPORTED_MODULE_9__["DeleteAcademicProgramsFavourite"](this.program.id));
        }
        else {
            this.store.dispatch(new _store_academic_programs_academic_programs_actions__WEBPACK_IMPORTED_MODULE_9__["AddFavouriteAcademicProgram"](this.program));
        }
    };
    AcademicProgramDetailPage.prototype.openLink = function (url) {
        this.utilsService.openLink(url);
    };
    AcademicProgramDetailPage.prototype.disconnectObservers = function () {
        if (this.academicProgramSub) {
            this.academicProgramSub.unsubscribe();
        }
        if (this.requestsSub) {
            this.requestsSub.unsubscribe();
        }
        if (this.favouriteSub) {
            this.favouriteSub.unsubscribe();
        }
    };
    AcademicProgramDetailPage.prototype.onItemClick = function ($event) {
        this.router.navigate([
            'organization-profile',
            this.store.selectSnapshot(_store_academic_programs_academic_programs_state__WEBPACK_IMPORTED_MODULE_8__["AcademicProgramsState"].getCurrentAcademicProgram).organization_id,
        ]);
    };
    AcademicProgramDetailPage.prototype.ngOnDestroy = function () {
        this.disconnectObservers();
    };
    AcademicProgramDetailPage.ctorParameters = function () { return [
        { type: _angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
        { type: _ngxs_store__WEBPACK_IMPORTED_MODULE_5__["Store"] },
        { type: _core_utils_service__WEBPACK_IMPORTED_MODULE_6__["UtilsService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["ModalController"] },
        { type: _core_inform_service__WEBPACK_IMPORTED_MODULE_13__["InformService"] }
    ]; };
    AcademicProgramDetailPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-academic-program-detail',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./academic-program-detail.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/academic-program-detail/academic-program-detail.page.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./academic-program-detail.page.scss */ "./src/app/academic-program-detail/academic-program-detail.page.scss")).default]
        })
    ], AcademicProgramDetailPage);
    return AcademicProgramDetailPage;
}(_base_base_page__WEBPACK_IMPORTED_MODULE_2__["BasePage"]));



/***/ })

}]);
//# sourceMappingURL=academic-program-detail-academic-program-detail-module.js.map