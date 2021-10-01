(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["opportunity-opportunity-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/opportunity/opportunity.page.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/opportunity/opportunity.page.html ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-header [title]=\"'opportunity.title' | translate\" [showBackButton]=\"showBackButton\" (backButtonClick)=\"goBack()\">\n</app-header>\n<ion-content>\n  <ion-grid class=\"flex-container\">\n    <form *ngIf=\"formGroup\" [formGroup]=\"formGroup\">\n      <div class=\"flex-justify-content-center\">\n        <div class=\"pr col-xs-12 col-sm-8 col-lg-6\">\n          <ion-item lines=\"full\" class=\"ion-margin\">\n            <ion-label appPlatformMode>{{'formFields.title' | translate}}</ion-label>\n            <ion-input type=\"text\" inputmode=\"text\" autocomplete=\"off\" [formControlName]=\"'title'\" required></ion-input>\n          </ion-item>\n          <app-show-errors [control]=\"formGroup.controls['title']\"></app-show-errors>\n        </div>\n      </div>\n      <div class=\"flex-justify-content-center\">\n        <div class=\"pr col-xs-12 col-sm-8 col-lg-6\">\n          <ion-item lines=\"full\" class=\"ion-margin\">\n            <ion-label appPlatformMode>{{'formFields.description' | translate}}</ion-label>\n            <ion-textarea\n              type=\"text\"\n              inputmode=\"text\"\n              rows=\"8\"\n              [maxlength]=\"maxlength\"\n              [formControlName]=\"'description'\"\n            ></ion-textarea>\n          </ion-item>\n          <app-show-errors [control]=\"formGroup.controls['description']\"></app-show-errors>\n        </div>\n      </div>\n\n      <div class=\"flex-justify-content-center\">\n        <div class=\"pr col-xs-12 col-sm-8 col-lg-6\">\n          <ion-item lines=\"full\" class=\"ion-margin\">\n            <ion-label appPlatformMode>{{'formFields.responsibilities' | translate}}</ion-label>\n            <ion-textarea\n              type=\"text\"\n              inputmode=\"text\"\n              rows=\"8\"\n              [maxlength]=\"maxlength\"\n              [formControlName]=\"'responsibilities'\"\n            ></ion-textarea>\n          </ion-item>\n          <app-show-errors [control]=\"formGroup.controls['responsibilities']\"></app-show-errors>\n        </div>\n      </div>\n\n      <div class=\"flex-justify-content-center\">\n        <div class=\"pr col-xs-12 col-sm-8 col-lg-6\">\n          <ion-item lines=\"full\" class=\"ion-margin\">\n            <ion-label appPlatformMode>{{'formFields.requirements' | translate}}</ion-label>\n            <ion-textarea\n              type=\"text\"\n              inputmode=\"text\"\n              rows=\"8\"\n              [maxlength]=\"maxlength\"\n              [formControlName]=\"'requirements'\"\n            ></ion-textarea>\n          </ion-item>\n          <app-show-errors [control]=\"formGroup.controls['requirements']\"></app-show-errors>\n        </div>\n      </div>\n\n      <div class=\"flex-justify-content-center\">\n        <div class=\"pr col-xs-12 col-sm-8 col-lg-6\">\n          <ion-item lines=\"full\" class=\"ion-margin\">\n            <ion-label appPlatformMode>{{'formFields.workArea' | translate}}</ion-label>\n            <ion-select\n              interface=\"action-sheet\"\n              formControlName=\"work_area\"\n              class=\"custom-alert\"\n              okText=\"{{ 'buttons.accept' | translate }}\"\n              cancelText=\"{{ 'buttons.cancel' | translate }}\"\n              [interfaceOptions]=\"customActionSheetWorkAreaOptions\"\n            >\n              <ion-select-option *ngFor=\"let workArea of workAreaList\" [value]=\"workArea.id\">\n                {{ 'workArea.' + workArea.name | translate }}</ion-select-option\n              >\n            </ion-select>\n          </ion-item>\n          <app-show-errors [control]=\"formGroup.controls['work_area']\"></app-show-errors>\n        </div>\n      </div>\n      <!--sports-->\n      <div class=\"flex-justify-content-center ion-margin\" *ngIf=\"!hasSport\">\n        <div class=\"pr col-xs-12 col-sm-8 col-lg-6 ion-text-center flex-compatible ion-align-items-center\">\n          <div\n            class=\"pr col-xs-12 col-sm-8 col-lg-6 ion-text-start flex-compatible ion-margin-start ion-align-items-center\"\n          >\n            <span>{{'sports.sportRelated' | translate}}</span>\n          </div>\n          <div\n            class=\"pr col-xs-12 col-sm-8 col-lg-6 ion-text-center flex-compatible ion-margin-start ion-align-items-center\"\n          >\n            <ion-button class=\"secondary-button\" (click)=\"openSportsModal()\"\n              >{{'editProfile.select' | translate}}\n            </ion-button>\n          </div>\n        </div>\n      </div>\n      <ion-row class=\"flex-justify-content-center ion-margin sports\" *ngIf=\"hasSport\">\n        <div\n          class=\"pr col-xs-12 col-sm-8 col-lg-6 ion-text-start flex-container-vertical ion-align-items-start ion-padding-end\"\n        >\n          <ion-icon name=\"pencil\" class=\"extrabig-size editIcon\" (click)=\"openSportsModal()\"></ion-icon>\n          <div\n            class=\"pr col-xs-12 col-sm-8 col-lg-6 ion-text-start flex-compatible ion-margin-start ion-align-items-center\"\n          >\n            <span>{{'sports.sportRelated' | translate}}</span>\n          </div>\n          <div class=\"pr col-xs-11 col-sm-12 ion-text-start ion-margin-start ion-padding-end sportsListDetail\">\n            <span\n              *ngFor=\"let item of sportsList; index as i\"\n              color=\"grey\"\n              class=\"regular-size ion-padding-end userLocation\"\n            >\n              {{ 'sports.' + item.name | translate }}{{(i === sportsList.length - 1) ? '' : ','}}\n            </span>\n          </div>\n        </div>\n      </ion-row>\n      <div class=\"flex-justify-content-center\">\n        <div class=\"pr col-xs-12 col-sm-8 col-lg-6\">\n          <ion-item lines=\"full\" class=\"ion-margin\">\n            <ion-label appPlatformMode>{{'formFields.opportunityType' | translate}}</ion-label>\n            <ion-select\n              interface=\"action-sheet\"\n              formControlName=\"opportunity_type\"\n              class=\"custom-alert\"\n              okText=\"{{ 'buttons.accept' | translate }}\"\n              cancelText=\"{{ 'buttons.cancel' | translate }}\"\n              [interfaceOptions]=\"customActionSheetOpportunityTypeOptions\"\n            >\n              <ion-select-option *ngFor=\"let opportunityType of opportunityTypeList\" [value]=\"opportunityType.id\">\n                {{ 'opportunityType.' + opportunityType.name | translate }}</ion-select-option\n              >\n            </ion-select>\n          </ion-item>\n          <app-show-errors [control]=\"formGroup.controls['opportunity_type']\"></app-show-errors>\n        </div>\n      </div>\n      <!--<div class=\"flex-justify-content-center\">\n        <div class=\"pr col-xs-12 col-sm-8 col-lg-6\">\n          <ion-item lines=\"full\" class=\"ion-margin\">\n            <ion-label appPlatformMode>{{'formFields.language' | translate}}</ion-label>\n            <ion-input type=\"text\" inputmode=\"text\" autocomplete=\"off\" [formControlName]=\"'language'\"> </ion-input>\n          </ion-item>\n          <app-show-errors [control]=\"formGroup.controls['language']\"></app-show-errors>\n        </div>\n      </div>\n      <div class=\"flex-justify-content-center\">\n        <div class=\"pr col-xs-12 col-sm-8 col-lg-6\">\n          <ion-item lines=\"full\" class=\"ion-margin\">\n            <ion-label appPlatformMode>{{'formFields.salaryRange' | translate}}</ion-label>\n            <ion-input type=\"text\" inputmode=\"numeric\" autocomplete=\"off\" [formControlName]=\"'salary_range'\">\n            </ion-input>\n          </ion-item>\n          <app-show-errors [control]=\"formGroup.controls['salary_range']\"></app-show-errors>\n        </div>\n      </div>\n      <div class=\"flex-justify-content-center\">\n        <div class=\"pr col-xs-12 col-sm-8 col-lg-6\">\n          <ion-item lines=\"full\" class=\"ion-margin\">\n            <ion-label appPlatformMode>{{'formFields.website' | translate}}</ion-label>\n            <ion-input type=\"text\" inputmode=\"text\" autocomplete=\"off\" [formControlName]=\"'website'\"> </ion-input>\n          </ion-item>\n          <app-show-errors [control]=\"formGroup.controls['website']\"></app-show-errors>\n        </div>\n      </div>\n      <div class=\"flex-justify-content-center\">\n        <div class=\"pr col-xs-12 col-sm-8 col-lg-6\">\n          <ion-item lines=\"full\" class=\"ion-margin\">\n            <ion-label appPlatformMode>{{'formFields.experienceRange' | translate}}</ion-label>\n            <ion-input type=\"text\" inputmode=\"text\" autocomplete=\"off\" [formControlName]=\"'experienced_range'\">\n            </ion-input>\n          </ion-item>\n          <app-show-errors [control]=\"formGroup.controls['experienced_range']\"></app-show-errors>\n        </div>\n      </div>-->\n\n      <!-- Location -->\n      <ion-row class=\"flex-justify-content-center ion-margin ion-padding-bottom location\" *ngIf=\"hasLocation\">\n        <div class=\"pr col-xs-12 col-sm-8 col-lg-6 ion-text-start flex-container-vertical ion-align-items-start\">\n          <ion-icon name=\"pencil\" class=\"extrabig-size editIcon\" [routerLink]=\"'/select-program-location'\"></ion-icon>\n          <div\n            class=\"pr col-xs-12 col-sm-12 col-lg-6 ion-text-center flex-compatible ion-margin-start ion-align-items-center\"\n          >\n            <span>{{'editProfile.location' | translate}}</span>\n          </div>\n          <div class=\"pr col-xs-11 col-sm-12 flex-compatible ion-margin-start ion-align-items-center\">\n            <span color=\"grey\" class=\"regular-size ion-padding-end userLocation\">{{ opportunityLocation }}</span>\n          </div>\n        </div>\n      </ion-row>\n      <div class=\"flex-justify-content-center ion-margin ion-padding-bottom\" *ngIf=\"!hasLocation\">\n        <div class=\"pr col-xs-12 col-sm-8 col-lg-6 ion-text-center flex-compatible ion-align-items-center\">\n          <div\n            class=\"pr col-xs-12 col-sm-6 col-lg-6 ion-text-center flex-compatible ion-margin-start ion-align-items-center\"\n          >\n            <span>{{'editProfile.location' | translate}}</span>\n          </div>\n          <div\n            class=\"pr col-xs-12 col-sm-6 col-lg-6 ion-text-center flex-compatible ion-margin-start ion-align-items-center\"\n          >\n            <ion-button class=\"secondary-button\" [routerLink]=\"'/select-program-location'\"\n              >{{'editProfile.select' | translate}}\n            </ion-button>\n          </div>\n        </div>\n      </div>\n      <div class=\"flex-justify-content-center ion-margin ion-padding-top\">\n        <div class=\"pr col-xs-12 col-sm-8 col-lg-6 ion-text-start flex-compatible ion-margin-start\">\n          <span color=\"secondary\" class=\"bold\">{{'opportunity.requestOpportunityTitle' | translate}}</span>\n        </div>\n      </div>\n      <div class=\"flex-justify-content-center\">\n        <div class=\"pr col-xs-12 col-sm-8 col-lg-6\">\n          <ion-item class=\"ion-no-border apply-checkbox\">\n            <ion-checkbox\n              formControlName=\"check_email\"\n              color=\"secondary\"\n              (ionChange)=\"setOptionSelected(1)\"\n            ></ion-checkbox>\n            <ion-label>{{ 'opportunity.email' | translate }}</ion-label>\n          </ion-item>\n          <ion-item lines=\"full\" class=\"ion-margin\">\n            <ion-label appPlatformMode>{{'formFields.contact_email' | translate}}</ion-label>\n            <ion-input\n              type=\"email\"\n              inputmode=\"email\"\n              [disabled]=\"true\"\n              autocomplete=\"off\"\n              [formControlName]=\"'contact_email'\"\n            >\n            </ion-input>\n          </ion-item>\n          <app-show-errors [control]=\"formGroup.controls['contact_email']\"></app-show-errors>\n        </div>\n      </div>\n      <div class=\"ion-margin-bottom flex-justify-content-center\">\n        <div class=\"pr col-xs-12 col-sm-8 col-lg-6\">\n          <ion-item class=\"ion-no-border apply-checkbox\">\n            <ion-checkbox\n              formControlName=\"check_website\"\n              color=\"secondary\"\n              (ionChange)=\"setOptionSelected(2)\"\n            ></ion-checkbox>\n            <ion-label>{{ 'opportunity.website' | translate }}</ion-label>\n          </ion-item>\n          <ion-item lines=\"full\" class=\"ion-margin\">\n            <ion-label appPlatformMode>{{'formFields.website' | translate}}</ion-label>\n            <ion-input type=\"text\" [disabled]=\"true\" inputmode=\"text\" autocomplete=\"off\" [formControlName]=\"'website'\">\n            </ion-input>\n          </ion-item>\n          <app-show-errors [control]=\"formGroup.controls['website']\"></app-show-errors>\n        </div>\n      </div>\n      <app-action-button\n        class=\"ion-margin-top ion-padding-vertical\"\n        (actionButtonClick)=\"saveOpportunity()\"\n        [buttonText]=\"'buttons.post'\"\n      ></app-action-button>\n    </form>\n  </ion-grid>\n</ion-content>\n");

/***/ }),

/***/ "./src/app/opportunity/opportunity-routing.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/opportunity/opportunity-routing.module.ts ***!
  \***********************************************************/
/*! exports provided: OpportunityPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OpportunityPageRoutingModule", function() { return OpportunityPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _opportunity_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./opportunity.page */ "./src/app/opportunity/opportunity.page.ts");




var routes = [
    {
        path: '',
        component: _opportunity_page__WEBPACK_IMPORTED_MODULE_3__["OpportunityPage"],
    },
];
var OpportunityPageRoutingModule = /** @class */ (function () {
    function OpportunityPageRoutingModule() {
    }
    OpportunityPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], OpportunityPageRoutingModule);
    return OpportunityPageRoutingModule;
}());



/***/ }),

/***/ "./src/app/opportunity/opportunity.module.ts":
/*!***************************************************!*\
  !*** ./src/app/opportunity/opportunity.module.ts ***!
  \***************************************************/
/*! exports provided: OpportunityPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OpportunityPageModule", function() { return OpportunityPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _opportunity_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./opportunity-routing.module */ "./src/app/opportunity/opportunity-routing.module.ts");
/* harmony import */ var _opportunity_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./opportunity.page */ "./src/app/opportunity/opportunity.page.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../@shared/shared.module */ "./src/app/@shared/shared.module.ts");





var OpportunityPageModule = /** @class */ (function () {
    function OpportunityPageModule() {
    }
    OpportunityPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"], _opportunity_routing_module__WEBPACK_IMPORTED_MODULE_2__["OpportunityPageRoutingModule"]],
            declarations: [_opportunity_page__WEBPACK_IMPORTED_MODULE_3__["OpportunityPage"]],
        })
    ], OpportunityPageModule);
    return OpportunityPageModule;
}());



/***/ }),

/***/ "./src/app/opportunity/opportunity.page.scss":
/*!***************************************************!*\
  !*** ./src/app/opportunity/opportunity.page.scss ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".apply-checkbox ion-label {\n  margin-left: 10px;\n  white-space: normal;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvb3Bwb3J0dW5pdHkvb3Bwb3J0dW5pdHkucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNFO0VBQ0UsaUJBQUE7RUFDQSxtQkFBQTtBQUFKIiwiZmlsZSI6InNyYy9hcHAvb3Bwb3J0dW5pdHkvb3Bwb3J0dW5pdHkucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmFwcGx5LWNoZWNrYm94IHtcbiAgaW9uLWxhYmVsIHtcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcbiAgICB3aGl0ZS1zcGFjZTogbm9ybWFsO1xuICB9XG59XG4iXX0= */");

/***/ }),

/***/ "./src/app/opportunity/opportunity.page.ts":
/*!*************************************************!*\
  !*** ./src/app/opportunity/opportunity.page.ts ***!
  \*************************************************/
/*! exports provided: OpportunityPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OpportunityPage", function() { return OpportunityPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _base_base_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../base/base.page */ "./src/app/base/base.page.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngxs/store */ "./node_modules/@ngxs/store/__ivy_ngcc__/fesm2015/ngxs-store.js");
/* harmony import */ var _core_utils_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../@core/utils.service */ "./src/app/@core/utils.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
/* harmony import */ var _core_navigation_extras_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../@core/navigation-extras.service */ "./src/app/@core/navigation-extras.service.ts");
/* harmony import */ var _global_constants__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../@global/constants */ "./src/app/@global/constants.ts");
/* harmony import */ var _global_utils__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../@global/utils */ "./src/app/@global/utils.ts");
/* harmony import */ var _store_job_offers_job_offers_actions__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../@store/job-offers/job-offers.actions */ "./src/app/@store/job-offers/job-offers.actions.ts");
/* harmony import */ var _store_global_info_global_info_state__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../@store/global-info/global-info.state */ "./src/app/@store/global-info/global-info.state.ts");
/* harmony import */ var _store_global_info_global_info_actions__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../@store/global-info/global-info.actions */ "./src/app/@store/global-info/global-info.actions.ts");
/* harmony import */ var _core_inform_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../@core/inform.service */ "./src/app/@core/inform.service.ts");
/* harmony import */ var _shared_components_sports_modal_sports_modal_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../@shared/components/sports-modal/sports-modal.component */ "./src/app/@shared/components/sports-modal/sports-modal.component.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");


















var OpportunityPage = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(OpportunityPage, _super);
    function OpportunityPage(router, location, store, utilsService, formBuilder, translateService, route, navigationExtrasService, informService, modalController) {
        var _this = _super.call(this, location, router, store, utilsService) || this;
        _this.formBuilder = formBuilder;
        _this.translateService = translateService;
        _this.route = route;
        _this.navigationExtrasService = navigationExtrasService;
        _this.informService = informService;
        _this.modalController = modalController;
        _this.hasLocation = false;
        _this.hasSport = false;
        _this.maxlength = _global_constants__WEBPACK_IMPORTED_MODULE_10__["Constants"].MAX_PUBLICATION_DESCRIPTION_SIZE;
        _this.sportsList = [];
        return _this;
    }
    OpportunityPage.prototype.doIonViewWillEnter = function () {
        this.setLocationData();
        this.store.dispatch(new _store_global_info_global_info_actions__WEBPACK_IMPORTED_MODULE_14__["GetOpportunityTypeInfo"]());
        this.store.dispatch(new _store_global_info_global_info_actions__WEBPACK_IMPORTED_MODULE_14__["GetWorkAreaInfo"]());
    };
    OpportunityPage.prototype.subscribeWorkAreaInfo = function () {
        var _this = this;
        this.workAreaSubscription = this.store.select(_store_global_info_global_info_state__WEBPACK_IMPORTED_MODULE_13__["GlobalInfoState"].getWorkArea).subscribe(function (data) {
            _this.workAreaList = data;
        });
    };
    OpportunityPage.prototype.subscribeOpportunityTypeInfo = function () {
        var _this = this;
        this.opportunityTypeSubscription = this.store.select(_store_global_info_global_info_state__WEBPACK_IMPORTED_MODULE_13__["GlobalInfoState"].getOpportunities).subscribe(function (data) {
            _this.opportunityTypeList = data;
        });
    };
    OpportunityPage.prototype.ngOnInit = function () {
        this.subscribeWorkAreaInfo();
        this.subscribeOpportunityTypeInfo();
        this.initForm();
        this.profileId = this.route.snapshot.params['profileId'];
        var workAreaTitle = this.translateService.instant("formFields.workArea");
        this.customActionSheetWorkAreaOptions = {
            header: workAreaTitle,
        };
        var opportunityTypeTitle = this.translateService.instant("formFields.opportunityType");
        this.customActionSheetOpportunityTypeOptions = {
            header: opportunityTypeTitle,
        };
    };
    OpportunityPage.prototype.initForm = function () {
        this.formGroup = this.formBuilder.group({
            title: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required]],
            description: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].maxLength(this.maxlength)]],
            work_area: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required]],
            opportunity_type: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required]],
            website: [''],
            responsibilities: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].maxLength(this.maxlength)]],
            requirements: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].maxLength(this.maxlength)]],
            check_email: [false],
            check_website: [false],
            contact_email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].email, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].maxLength(_global_constants__WEBPACK_IMPORTED_MODULE_10__["Constants"].MAX_LENGTH_USERNAME_COGNITO)]],
        });
    };
    OpportunityPage.prototype.setOptionSelected = function (option) {
        if (option === 1) {
            if (this.formGroup.get('check_email').value) {
                // when select one, the other one is set to false
                this.formGroup.get('check_website').setValue(false);
                this.formGroup.get('contact_email').enable();
                this.formGroup.get('contact_email').setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].email]);
                this.formGroup.get('website').setValue('');
                this.formGroup.get('website').clearValidators();
                this.formGroup.get('website').disable();
            }
        }
        else {
            if (this.formGroup.get('check_website').value) {
                // when select one, the other one is set to false
                this.formGroup.get('check_email').setValue(false);
                this.formGroup.get('website').enable();
                this.formGroup.get('website').setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].pattern(_global_constants__WEBPACK_IMPORTED_MODULE_10__["Constants"].URL_PATTERN)]);
                this.formGroup.get('contact_email').setValue('');
                this.formGroup.get('contact_email').clearValidators();
                this.formGroup.get('contact_email').disable();
            }
        }
        this.formGroup.get('website').updateValueAndValidity();
        this.formGroup.get('contact_email').updateValueAndValidity();
    };
    OpportunityPage.prototype.setLocationData = function () {
        var _a, _b, _c;
        if (this.navigationExtrasService.getExtras() && this.navigationExtrasService.getExtras().location) {
            var location_1 = this.navigationExtrasService.getExtras().location;
            this.hasLocation = !!location_1.country;
            if (this.hasLocation) {
                this.opportunityLocation = _global_utils__WEBPACK_IMPORTED_MODULE_11__["Utils"].generateUserFriendlyLocation(location_1.country, location_1.region, location_1.city, location_1.province, location_1.region_name);
                this.locationData = {
                    country: (_a = location_1.country) === null || _a === void 0 ? void 0 : _a.id,
                    region: (_b = location_1.region) === null || _b === void 0 ? void 0 : _b.id,
                    province: (_c = location_1.province) === null || _c === void 0 ? void 0 : _c.id,
                    city: location_1.city,
                    region_name: location_1.region_name,
                };
            }
            this.navigationExtrasService.setExtras(null);
        }
    };
    OpportunityPage.prototype.ngOnDestroy = function () {
        this.disconnectObservers();
    };
    OpportunityPage.prototype.disconnectObservers = function () {
        if (this.opportunityTypeSubscription) {
            this.opportunityTypeSubscription.unsubscribe();
        }
        if (this.workAreaSubscription) {
            this.workAreaSubscription.unsubscribe();
        }
    };
    OpportunityPage.prototype.openSportsModal = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var modal;
            var _this = this;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.modalController.create({
                            component: _shared_components_sports_modal_sports_modal_component__WEBPACK_IMPORTED_MODULE_16__["SportsModalComponent"],
                            componentProps: {
                                sportsSelected: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"])(this.sportsList),
                            },
                        })];
                    case 1:
                        modal = _a.sent();
                        modal.onDidDismiss().then(function (response) {
                            if (response.data) {
                                _this.sportsList = [];
                                response.data.forEach(function (item) {
                                    _this.sportsList.push(item);
                                });
                                _this.hasSport = _this.sportsList.length > 0;
                            }
                        });
                        return [4 /*yield*/, modal.present()];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    OpportunityPage.prototype.saveOpportunity = function () {
        var _this = this;
        if (this.utilsService.isValidForm(this.formGroup)) {
            if (!this.formGroup.get('check_email').value && !this.formGroup.get('check_website').value) {
                this.informService.showWarning('opportunity.selectOption');
                return;
            }
            var input = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, this.formGroup.value), this.locationData);
            if (input.check_email) {
                delete input.website;
            }
            else if (input.check_website) {
                delete input.contact_email;
            }
            delete input.check_email;
            delete input.check_website;
            input.sports = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"])(this.sportsList.map(function (item) { return item.id; }));
            this.store.dispatch(new _store_job_offers_job_offers_actions__WEBPACK_IMPORTED_MODULE_12__["CreateJobOfferAction"](this.profileId, input)).subscribe(function () {
                _this.goBack();
            }, function (error) {
                console.log('Error creating opportunity');
                console.log(error);
            });
        }
    };
    OpportunityPage.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: _angular_common__WEBPACK_IMPORTED_MODULE_4__["Location"] },
        { type: _ngxs_store__WEBPACK_IMPORTED_MODULE_5__["Store"] },
        { type: _core_utils_service__WEBPACK_IMPORTED_MODULE_6__["UtilsService"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormBuilder"] },
        { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslateService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
        { type: _core_navigation_extras_service__WEBPACK_IMPORTED_MODULE_9__["NavigationExtrasService"] },
        { type: _core_inform_service__WEBPACK_IMPORTED_MODULE_15__["InformService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_17__["ModalController"] }
    ]; };
    OpportunityPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-opportunity',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./opportunity.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/opportunity/opportunity.page.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./opportunity.page.scss */ "./src/app/opportunity/opportunity.page.scss")).default]
        })
    ], OpportunityPage);
    return OpportunityPage;
}(_base_base_page__WEBPACK_IMPORTED_MODULE_2__["BasePage"]));



/***/ })

}]);
//# sourceMappingURL=opportunity-opportunity-module.js.map