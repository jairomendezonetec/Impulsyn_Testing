(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["academic-program-academic-program-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/academic-program/academic-program.page.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/academic-program/academic-program.page.html ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-header\n  [title]=\"'academicProgram.title' | translate\"\n  [showBackButton]=\"showBackButton\"\n  (backButtonClick)=\"goBack()\"\n>\n</app-header>\n<ion-content class=\"ion-padding\">\n  <ion-grid class=\"flex-container\">\n    <form *ngIf=\"formGroup\" [formGroup]=\"formGroup\">\n      <div class=\"flex-justify-content-center\">\n        <div class=\"pr col-xs-12 col-sm-8 col-lg-6\">\n          <ion-item lines=\"full\" class=\"ion-margin\">\n            <ion-label appPlatformMode>{{'formFields.title' | translate}}</ion-label>\n            <ion-input type=\"text\" inputmode=\"text\" autocomplete=\"off\" [formControlName]=\"'title'\" required></ion-input>\n          </ion-item>\n          <app-show-errors [control]=\"formGroup.controls['title']\"></app-show-errors>\n        </div>\n      </div>\n      <div class=\"flex-justify-content-center\">\n        <div class=\"pr col-xs-12 col-sm-8 col-lg-6\">\n          <ion-item lines=\"full\" class=\"ion-margin\">\n            <ion-label appPlatformMode>{{'formFields.description' | translate}}</ion-label>\n            <ion-textarea\n              type=\"text\"\n              inputmode=\"text\"\n              rows=\"8\"\n              [maxlength]=\"maxlength\"\n              [formControlName]=\"'description'\"\n            ></ion-textarea>\n          </ion-item>\n          <app-show-errors [control]=\"formGroup.controls['description']\"></app-show-errors>\n        </div>\n      </div>\n\n      <div class=\"flex-justify-content-center\">\n        <div class=\"pr col-xs-12 col-sm-8 col-lg-6\">\n          <ion-item lines=\"full\" class=\"ion-margin\">\n            <ion-label appPlatformMode>{{'formFields.academicType' | translate}}</ion-label>\n            <ion-select\n              interface=\"action-sheet\"\n              formControlName=\"academic_type\"\n              class=\"custom-alert\"\n              okText=\"{{ 'buttons.accept' | translate }}\"\n              cancelText=\"{{ 'buttons.cancel' | translate }}\"\n              [interfaceOptions]=\"customActionSheetAcademicTypeOptions\"\n            >\n              <ion-select-option *ngFor=\"let academicType of academicTypeList\" [value]=\"academicType.id\">\n                {{ 'academicType.' + academicType.name | translate }}</ion-select-option\n              >\n            </ion-select>\n          </ion-item>\n          <app-show-errors [control]=\"formGroup.controls['academic_type']\"></app-show-errors>\n        </div>\n      </div>\n\n      <div class=\"flex-justify-content-center\">\n        <div class=\"pr col-xs-12 col-sm-8 col-lg-6\">\n          <ion-item lines=\"full\" class=\"ion-margin\">\n            <ion-label appPlatformMode>{{'formFields.studyArea' | translate}}</ion-label>\n            <ion-select\n              interface=\"action-sheet\"\n              formControlName=\"study_area\"\n              class=\"custom-alert\"\n              okText=\"{{ 'buttons.accept' | translate }}\"\n              cancelText=\"{{ 'buttons.cancel' | translate }}\"\n              [interfaceOptions]=\"customActionSheetStudyAreaOptions\"\n            >\n              <ion-select-option *ngFor=\"let studyArea of studyAreaList\" [value]=\"studyArea.id\">\n                {{ 'studyArea.' + studyArea.name | translate }}</ion-select-option\n              >\n            </ion-select>\n          </ion-item>\n          <app-show-errors [control]=\"formGroup.controls['study_area']\"></app-show-errors>\n        </div>\n      </div>\n      <div class=\"flex-justify-content-center\">\n        <div class=\"pr col-xs-12 col-sm-8 col-lg-6\">\n          <ion-item lines=\"full\" class=\"ion-margin\">\n            <ion-label appPlatformMode>{{'formFields.modality' | translate}}</ion-label>\n            <ion-select\n              interface=\"action-sheet\"\n              formControlName=\"modality\"\n              class=\"custom-alert\"\n              okText=\"{{ 'buttons.accept' | translate }}\"\n              cancelText=\"{{ 'buttons.cancel' | translate }}\"\n              [interfaceOptions]=\"customActionSheetModalityOptions\"\n            >\n              <ion-select-option *ngFor=\"let modality of modalityList\" [value]=\"modality.id\">\n                {{ 'academicModality.' + modality.name | translate }}</ion-select-option\n              >\n            </ion-select>\n          </ion-item>\n          <app-show-errors [control]=\"formGroup.controls['modality']\"></app-show-errors>\n        </div>\n      </div>\n\n      <!--sports-->\n      <div class=\"flex-justify-content-center ion-margin\" *ngIf=\"!hasSport\">\n        <div class=\"pr col-xs-12 col-sm-8 col-lg-6 ion-text-center flex-compatible ion-align-items-center\">\n          <div\n            class=\"pr col-xs-12 col-sm-8 col-lg-6 ion-text-start flex-compatible ion-margin-start ion-align-items-center\"\n          >\n            <span>{{'sports.sportRelated' | translate}}</span>\n          </div>\n          <div\n            class=\"pr col-xs-12 col-sm-8 col-lg-6 ion-text-center flex-compatible ion-margin-start ion-align-items-center\"\n          >\n            <ion-button class=\"secondary-button\" (click)=\"openSportsModal()\"\n              >{{'editProfile.select' | translate}}\n            </ion-button>\n          </div>\n        </div>\n      </div>\n      <ion-row class=\"flex-justify-content-center ion-margin sports\" *ngIf=\"hasSport\">\n        <div\n          class=\"pr col-xs-12 col-sm-8 col-lg-6 ion-text-start flex-container-vertical ion-align-items-start ion-padding-end\"\n        >\n          <ion-icon name=\"pencil\" class=\"extrabig-size editIcon\" (click)=\"openSportsModal()\"></ion-icon>\n          <div\n            class=\"pr col-xs-12 col-sm-8 col-lg-6 ion-text-start flex-compatible ion-margin-start ion-align-items-center\"\n          >\n            <span>{{'sports.sportRelated' | translate}}</span>\n          </div>\n          <div class=\"pr col-xs-11 col-sm-12 ion-text-start ion-margin-start ion-padding-end sportsListDetail\">\n            <span\n              *ngFor=\"let item of sportsList; index as i\"\n              color=\"grey\"\n              class=\"regular-size ion-padding-end userLocation\"\n            >\n              {{ 'sports.' + item.name | translate }}{{(i === sportsList.length - 1) ? '' : ','}}\n            </span>\n          </div>\n        </div>\n      </ion-row>\n\n      <div class=\"flex-justify-content-center\">\n        <div class=\"pr col-xs-12 col-sm-8 col-lg-6\">\n          <ion-item lines=\"full\" class=\"ion-margin\">\n            <ion-label appPlatformMode>{{'formFields.language' | translate}}</ion-label>\n            <ion-select\n              interface=\"action-sheet\"\n              formControlName=\"language\"\n              class=\"custom-alert\"\n              okText=\"{{ 'buttons.accept' | translate }}\"\n              cancelText=\"{{ 'buttons.cancel' | translate }}\"\n              [interfaceOptions]=\"customActionSheetLanguageOptions\"\n            >\n              <ion-select-option *ngFor=\"let language of languageList\" [value]=\"language.id\">\n                {{ 'languageList.' + language.name | translate }}</ion-select-option\n              >\n            </ion-select>\n          </ion-item>\n          <app-show-errors [control]=\"formGroup.controls['language']\"></app-show-errors>\n        </div>\n      </div>\n      <!--      <div class=\"flex-justify-content-center\">-->\n      <!--        <div class=\"pr col-xs-12 col-sm-8 col-lg-6\">-->\n      <!--          <ion-item lines=\"full\" class=\"ion-margin\">-->\n      <!--            <ion-label appPlatformMode>{{'formFields.price' | translate}}</ion-label>-->\n      <!--            <ion-input type=\"text\" inputmode=\"numeric\" autocomplete=\"off\" [formControlName]=\"'price'\"> </ion-input>-->\n      <!--          </ion-item>-->\n      <!--          <app-show-errors [control]=\"formGroup.controls['price']\"></app-show-errors>-->\n      <!--        </div>-->\n      <!--      </div>-->\n      <!-- Location -->\n      <ion-row class=\"flex-justify-content-center ion-margin ion-padding-bottom location\" *ngIf=\"hasLocation\">\n        <div class=\"pr col-xs-12 col-sm-8 col-lg-6 ion-text-start flex-container-vertical ion-align-items-start\">\n          <ion-icon name=\"pencil\" class=\"extrabig-size editIcon\" [routerLink]=\"'/select-program-location'\"></ion-icon>\n          <div\n            class=\"pr col-xs-12 col-sm-12 col-lg-6 ion-text-center flex-compatible ion-margin-start ion-align-items-center\"\n          >\n            <span>{{'editProfile.location' | translate}}</span>\n          </div>\n          <div class=\"pr col-xs-11 col-sm-12 flex-compatible ion-margin-start ion-align-items-center\">\n            <span color=\"grey\" class=\"regular-size ion-padding-end userLocation\">{{ programLocation }}</span>\n          </div>\n        </div>\n      </ion-row>\n      <div class=\"flex-justify-content-center ion-margin ion-padding-bottom\" *ngIf=\"!hasLocation\">\n        <div class=\"pr col-xs-12 col-sm-8 col-lg-6 ion-text-center flex-compatible ion-align-items-center\">\n          <div\n            class=\"pr col-xs-12 col-sm-6 col-lg-6 ion-text-center flex-compatible ion-margin-start ion-align-items-center\"\n          >\n            <span>{{'editProfile.location' | translate}}</span>\n          </div>\n          <div\n            class=\"pr col-xs-12 col-sm-6 col-lg-6 ion-text-center flex-compatible ion-margin-start ion-align-items-center\"\n          >\n            <ion-button class=\"secondary-button\" [routerLink]=\"'/select-program-location'\"\n              >{{'editProfile.select' | translate}}\n            </ion-button>\n          </div>\n        </div>\n      </div>\n      <div class=\"flex-justify-content-center\">\n        <div class=\"pr col-xs-12 col-sm-8 col-lg-6\">\n          <ion-item lines=\"full\" class=\"ion-margin\">\n            <ion-label appPlatformMode>{{'formFields.startDate' | translate}}</ion-label>\n            <ion-datetime\n              [min]=\"getMinDate()\"\n              [max]=\"getMaxStartDate()\"\n              [displayFormat]=\"getDateDisplayFormat()\"\n              [pickerFormat]=\"getDatePickerFormat()\"\n              [doneText]=\"'buttons.accept' | translate\"\n              [cancelText]=\"'buttons.cancel' | translate\"\n              [formControlName]=\"'start_date'\"\n              (ionChange)=\"setEndDate()\"\n            >\n            </ion-datetime>\n          </ion-item>\n          <app-show-errors [control]=\"formGroup.controls['start_date']\"></app-show-errors>\n        </div>\n      </div>\n      <div class=\"flex-justify-content-center\">\n        <div class=\"pr col-xs-12 col-sm-8 col-lg-6\">\n          <ion-item lines=\"full\" class=\"ion-margin\">\n            <ion-label appPlatformMode>{{'formFields.endDate' | translate}}</ion-label>\n            <ion-datetime\n              [min]=\"getStart()\"\n              [max]=\"getMaxEndDate()\"\n              [displayFormat]=\"getDateDisplayFormat()\"\n              [pickerFormat]=\"getDatePickerFormat()\"\n              [doneText]=\"'buttons.accept' | translate\"\n              [cancelText]=\"'buttons.cancel' | translate\"\n              [formControlName]=\"'end_date'\"\n              [disabled]=\"formGroup.controls['start_date'].value === ''\"\n            ></ion-datetime>\n          </ion-item>\n          <app-show-errors [control]=\"formGroup.controls['end_date']\"></app-show-errors>\n        </div>\n      </div>\n\n      <!--      <div class=\"flex-justify-content-center\">-->\n      <!--        <div class=\"pr col-xs-12 col-sm-8 col-lg-6\">-->\n      <!--          <ion-item lines=\"full\" class=\"ion-margin\">-->\n      <!--            <ion-label appPlatformMode>{{'formFields.other_costs' | translate}}</ion-label>-->\n      <!--            <ion-input type=\"text\" inputmode=\"text\" autocomplete=\"off\" [formControlName]=\"'other_costs'\"> </ion-input>-->\n      <!--          </ion-item>-->\n      <!--          <app-show-errors [control]=\"formGroup.controls['other_costs']\"></app-show-errors>-->\n      <!--        </div>-->\n      <!--      </div>-->\n\n      <div class=\"flex-justify-content-center\">\n        <div class=\"pr col-xs-12 col-sm-8 col-lg-6 ion-justify-content-center\">\n          <ion-button class=\"secondary-button with-icon-end\" (click)=\"selectPDF()\">\n            {{'formFields.selectBrochure' | translate }}\n            <ion-icon name=\"cloud-upload-outline\" color=\"secondary\"></ion-icon>\n          </ion-button>\n          <span *ngIf=\"brochure\" color=\"grey\">{{brochure.name}}</span>\n        </div>\n      </div>\n\n      <div class=\"ion-margin-top ion-padding-vertical flex-justify-content-center\">\n        <div class=\"pr col-xs-12 col-sm-8 col-lg-6\">\n          <span color=\"secondary\">{{ 'academicProgram.requestProgramTitle' | translate }}</span>\n        </div>\n      </div>\n      <div class=\"flex-justify-content-center\">\n        <div class=\"pr col-xs-12 col-sm-8 col-lg-6\">\n          <ion-item class=\"ion-no-border apply-checkbox\">\n            <ion-checkbox\n              formControlName=\"check_email\"\n              color=\"secondary\"\n              (ionChange)=\"setOptionSelected(1)\"\n            ></ion-checkbox>\n            <ion-label>{{ 'academicProgram.email' | translate }}</ion-label>\n          </ion-item>\n          <ion-item lines=\"full\" class=\"ion-margin\">\n            <ion-label appPlatformMode>{{'formFields.contact_email' | translate}}</ion-label>\n            <ion-input\n              type=\"email\"\n              inputmode=\"email\"\n              [disabled]=\"true\"\n              autocomplete=\"off\"\n              [formControlName]=\"'contact_email'\"\n            >\n            </ion-input>\n          </ion-item>\n          <app-show-errors [control]=\"formGroup.controls['contact_email']\"></app-show-errors>\n        </div>\n      </div>\n      <div class=\"ion-margin-bottom flex-justify-content-center\">\n        <div class=\"pr col-xs-12 col-sm-8 col-lg-6\">\n          <ion-item class=\"ion-no-border apply-checkbox\">\n            <ion-checkbox\n              formControlName=\"check_website\"\n              color=\"secondary\"\n              (ionChange)=\"setOptionSelected(2)\"\n            ></ion-checkbox>\n            <ion-label>{{ 'academicProgram.website' | translate }}</ion-label>\n          </ion-item>\n          <ion-item lines=\"full\" class=\"ion-margin\">\n            <ion-label appPlatformMode>{{'formFields.website' | translate}}</ion-label>\n            <ion-input type=\"text\" [disabled]=\"true\" inputmode=\"text\" autocomplete=\"off\" [formControlName]=\"'website'\">\n            </ion-input>\n          </ion-item>\n          <app-show-errors [control]=\"formGroup.controls['website']\"></app-show-errors>\n        </div>\n      </div>\n      <app-action-button\n        class=\"ion-margin-top ion-padding-vertical\"\n        (actionButtonClick)=\"saveAcademicProgram()\"\n        [buttonText]=\"'buttons.post'\"\n      ></app-action-button>\n    </form>\n  </ion-grid>\n</ion-content>\n");

/***/ }),

/***/ "./src/app/academic-program/academic-program-routing.module.ts":
/*!*********************************************************************!*\
  !*** ./src/app/academic-program/academic-program-routing.module.ts ***!
  \*********************************************************************/
/*! exports provided: AcademicProgramPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AcademicProgramPageRoutingModule", function() { return AcademicProgramPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _academic_program_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./academic-program.page */ "./src/app/academic-program/academic-program.page.ts");




var routes = [
    {
        path: '',
        component: _academic_program_page__WEBPACK_IMPORTED_MODULE_3__["AcademicProgramPage"],
    },
];
var AcademicProgramPageRoutingModule = /** @class */ (function () {
    function AcademicProgramPageRoutingModule() {
    }
    AcademicProgramPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], AcademicProgramPageRoutingModule);
    return AcademicProgramPageRoutingModule;
}());



/***/ }),

/***/ "./src/app/academic-program/academic-program.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/academic-program/academic-program.module.ts ***!
  \*************************************************************/
/*! exports provided: AcademicProgramPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AcademicProgramPageModule", function() { return AcademicProgramPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _academic_program_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./academic-program-routing.module */ "./src/app/academic-program/academic-program-routing.module.ts");
/* harmony import */ var _academic_program_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./academic-program.page */ "./src/app/academic-program/academic-program.page.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../@shared/shared.module */ "./src/app/@shared/shared.module.ts");





var AcademicProgramPageModule = /** @class */ (function () {
    function AcademicProgramPageModule() {
    }
    AcademicProgramPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"], _academic_program_routing_module__WEBPACK_IMPORTED_MODULE_2__["AcademicProgramPageRoutingModule"]],
            declarations: [_academic_program_page__WEBPACK_IMPORTED_MODULE_3__["AcademicProgramPage"]],
        })
    ], AcademicProgramPageModule);
    return AcademicProgramPageModule;
}());



/***/ }),

/***/ "./src/app/academic-program/academic-program.page.scss":
/*!*************************************************************!*\
  !*** ./src/app/academic-program/academic-program.page.scss ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".apply-checkbox ion-label {\n  margin-left: 10px;\n  white-space: normal;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWNhZGVtaWMtcHJvZ3JhbS9hY2FkZW1pYy1wcm9ncmFtLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDRTtFQUNFLGlCQUFBO0VBQ0EsbUJBQUE7QUFBSiIsImZpbGUiOiJzcmMvYXBwL2FjYWRlbWljLXByb2dyYW0vYWNhZGVtaWMtcHJvZ3JhbS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYXBwbHktY2hlY2tib3gge1xuICBpb24tbGFiZWwge1xuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICAgIHdoaXRlLXNwYWNlOiBub3JtYWw7XG4gIH1cbn1cbiJdfQ== */");

/***/ }),

/***/ "./src/app/academic-program/academic-program.page.ts":
/*!***********************************************************!*\
  !*** ./src/app/academic-program/academic-program.page.ts ***!
  \***********************************************************/
/*! exports provided: AcademicProgramPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AcademicProgramPage", function() { return AcademicProgramPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _base_base_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../base/base.page */ "./src/app/base/base.page.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _core_utils_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../@core/utils.service */ "./src/app/@core/utils.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngxs/store */ "./node_modules/@ngxs/store/__ivy_ngcc__/fesm2015/ngxs-store.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
/* harmony import */ var _global_utils__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../@global/utils */ "./src/app/@global/utils.ts");
/* harmony import */ var _global_constants__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../@global/constants */ "./src/app/@global/constants.ts");
/* harmony import */ var _store_global_info_global_info_actions__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../@store/global-info/global-info.actions */ "./src/app/@store/global-info/global-info.actions.ts");
/* harmony import */ var _store_global_info_global_info_state__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../@store/global-info/global-info.state */ "./src/app/@store/global-info/global-info.state.ts");
/* harmony import */ var _store_academic_programs_academic_programs_actions__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../@store/academic-programs/academic-programs.actions */ "./src/app/@store/academic-programs/academic-programs.actions.ts");
/* harmony import */ var _core_inform_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../@core/inform.service */ "./src/app/@core/inform.service.ts");
/* harmony import */ var _ionic_native_chooser_ngx__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @ionic-native/chooser/ngx */ "./node_modules/@ionic-native/chooser/__ivy_ngcc__/ngx/index.js");
/* harmony import */ var _shared_components_sports_modal_sports_modal_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../@shared/components/sports-modal/sports-modal.component */ "./src/app/@shared/components/sports-modal/sports-modal.component.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _core_navigation_extras_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../@core/navigation-extras.service */ "./src/app/@core/navigation-extras.service.ts");




















var MAX_YEARS_MARGIN_START = 5;
var MAX_YEARS_MARGIN_END = 10;
var AcademicProgramPage = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(AcademicProgramPage, _super);
    function AcademicProgramPage(router, location, store, utilsService, formBuilder, translateService, route, chooser, navigationExtrasService, informService, modalController) {
        var _this = _super.call(this, location, router, store, utilsService) || this;
        _this.formBuilder = formBuilder;
        _this.translateService = translateService;
        _this.route = route;
        _this.chooser = chooser;
        _this.navigationExtrasService = navigationExtrasService;
        _this.informService = informService;
        _this.modalController = modalController;
        _this.hasSport = false;
        _this.maxlength = _global_constants__WEBPACK_IMPORTED_MODULE_10__["Constants"].MAX_PUBLICATION_DESCRIPTION_SIZE;
        _this.sportsList = [];
        _this.acceptedExtensions = ['pdf'];
        return _this;
    }
    AcademicProgramPage.prototype.doIonViewWillEnter = function () {
        this.setLocationData();
        this.store.dispatch(new _store_global_info_global_info_actions__WEBPACK_IMPORTED_MODULE_11__["GetStudyAreaInfo"]());
        this.store.dispatch(new _store_global_info_global_info_actions__WEBPACK_IMPORTED_MODULE_11__["GetAcademicModalityInfo"]());
        this.store.dispatch(new _store_global_info_global_info_actions__WEBPACK_IMPORTED_MODULE_11__["GetAcademicTypeInfo"]());
        this.store.dispatch(new _store_global_info_global_info_actions__WEBPACK_IMPORTED_MODULE_11__["GetLanguageInfo"]());
    };
    AcademicProgramPage.prototype.ngOnInit = function () {
        this.subscribeStudyAreaInfo();
        this.subscribeModalityInfo();
        this.subscribeAcademicType();
        this.subscribeLanguageInfo();
        this.initForm();
        this.profileId = this.route.snapshot.params['profileId'];
        var studyAreaTitle = this.translateService.instant("formFields.studyArea");
        this.customActionSheetStudyAreaOptions = {
            header: studyAreaTitle,
        };
        var modalityTitle = this.translateService.instant("formFields.modality");
        this.customActionSheetModalityOptions = {
            header: modalityTitle,
        };
        var academicTypeTitle = this.translateService.instant("formFields.academicType");
        this.customActionSheetAcademicTypeOptions = {
            header: academicTypeTitle,
        };
        var languageTitle = this.translateService.instant("formFields.language");
        this.customActionSheetLanguageOptions = {
            header: languageTitle,
        };
    };
    AcademicProgramPage.prototype.initForm = function () {
        this.formGroup = this.formBuilder.group({
            title: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            description: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(this.maxlength)]],
            study_area: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            modality: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            language: [''],
            // price: ['', Validators.pattern(Constants.ONLY_NUMBERS_PATTERN)],
            start_date: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            end_date: [''],
            website: [''],
            brochure: [''],
            academic_type: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            // other_costs: [''],
            check_email: [false],
            check_website: [false],
            contact_email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(_global_constants__WEBPACK_IMPORTED_MODULE_10__["Constants"].MAX_LENGTH_USERNAME_COGNITO)]],
        });
    };
    AcademicProgramPage.prototype.setOptionSelected = function (option) {
        if (option === 1) {
            if (this.formGroup.get('check_email').value) {
                // when select one, the other one is set to false
                this.formGroup.get('check_website').setValue(false);
                this.formGroup.get('contact_email').enable();
                this.formGroup.get('contact_email').setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email]);
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
                this.formGroup.get('website').setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern(_global_constants__WEBPACK_IMPORTED_MODULE_10__["Constants"].URL_PATTERN)]);
                this.formGroup.get('contact_email').setValue('');
                this.formGroup.get('contact_email').clearValidators();
                this.formGroup.get('contact_email').disable();
            }
        }
        this.formGroup.get('website').updateValueAndValidity();
        this.formGroup.get('contact_email').updateValueAndValidity();
    };
    AcademicProgramPage.prototype.setLocationData = function () {
        var _a, _b, _c;
        if (this.navigationExtrasService.getExtras() && this.navigationExtrasService.getExtras().location) {
            var location_1 = this.navigationExtrasService.getExtras().location;
            this.hasLocation = !!location_1.country;
            if (this.hasLocation) {
                this.programLocation = _global_utils__WEBPACK_IMPORTED_MODULE_9__["Utils"].generateUserFriendlyLocation(location_1.country, location_1.region, location_1.city, location_1.province, location_1.region_name);
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
    AcademicProgramPage.prototype.subscribeStudyAreaInfo = function () {
        var _this = this;
        this.studyAreaSubscription = this.store.select(_store_global_info_global_info_state__WEBPACK_IMPORTED_MODULE_12__["GlobalInfoState"].getStudyArea).subscribe(function (data) {
            _this.studyAreaList = data;
        });
    };
    AcademicProgramPage.prototype.subscribeModalityInfo = function () {
        var _this = this;
        this.modalitySubscription = this.store.select(_store_global_info_global_info_state__WEBPACK_IMPORTED_MODULE_12__["GlobalInfoState"].getAcademicModality).subscribe(function (data) {
            _this.modalityList = data;
        });
    };
    AcademicProgramPage.prototype.subscribeAcademicType = function () {
        var _this = this;
        this.academicTypeSubscription = this.store.select(_store_global_info_global_info_state__WEBPACK_IMPORTED_MODULE_12__["GlobalInfoState"].getAcademicType).subscribe(function (data) {
            _this.academicTypeList = data;
        });
    };
    AcademicProgramPage.prototype.subscribeLanguageInfo = function () {
        var _this = this;
        this.languageInfoSubscription = this.store.select(_store_global_info_global_info_state__WEBPACK_IMPORTED_MODULE_12__["GlobalInfoState"].getLanguage).subscribe(function (data) {
            _this.languageList = data;
        });
    };
    AcademicProgramPage.prototype.getMinDate = function () {
        return _global_utils__WEBPACK_IMPORTED_MODULE_9__["Utils"].getInitdate(70);
    };
    AcademicProgramPage.prototype.getMaxStartDate = function () {
        return new Date().getFullYear() + MAX_YEARS_MARGIN_START;
    };
    AcademicProgramPage.prototype.getMaxEndDate = function () {
        return (new Date(this.getStart()).getFullYear() + MAX_YEARS_MARGIN_END).toString();
    };
    AcademicProgramPage.prototype.getStart = function () {
        return this.formGroup.get('start_date').value;
    };
    AcademicProgramPage.prototype.getDateDisplayFormat = function () {
        return _global_constants__WEBPACK_IMPORTED_MODULE_10__["Constants"].DATE_DISPLAY_MONTH_YEAR_FORMAT;
    };
    AcademicProgramPage.prototype.getDatePickerFormat = function () {
        return _global_constants__WEBPACK_IMPORTED_MODULE_10__["Constants"].DATE_PICKER_MONTH_YEAR_FORMAT;
    };
    AcademicProgramPage.prototype.setEndDate = function () {
        var startDate = this.formGroup.get('start_date').value;
        var endDate = this.formGroup.get('end_date').value;
        console.log(this.getMaxEndDate());
        if (endDate < startDate || endDate > this.getMaxEndDate()) {
            this.formGroup.get('end_date').setValue('');
        }
        if (startDate) {
            this.formGroup.get('end_date').enable();
        }
        else {
            this.formGroup.get('end_date').disable();
        }
        this.formGroup.get('end_date').updateValueAndValidity();
    };
    AcademicProgramPage.prototype.openSportsModal = function () {
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
    AcademicProgramPage.prototype.saveAcademicProgram = function () {
        var _this = this;
        if (this.utilsService.isValidForm(this.formGroup)) {
            if (!this.formGroup.get('check_email').value && !this.formGroup.get('check_website').value) {
                this.informService.showWarning('academicProgram.selectOption');
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
            if (input.price === '' || isNaN(input.price)) {
                delete input.price;
            }
            input.sports = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"])(this.sportsList.map(function (item) { return item.id; }));
            this.store.dispatch(new _store_academic_programs_academic_programs_actions__WEBPACK_IMPORTED_MODULE_13__["CreateAcademicProgram"](this.profileId, this.brochure, input)).subscribe(function () {
                _this.goBack();
            }, function (error) {
                console.log('Error creating academic program');
                console.log(error);
            });
        }
    };
    AcademicProgramPage.prototype.selectPDF = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var _a, error_1;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _b.trys.push([0, 2, , 3]);
                        _a = this;
                        return [4 /*yield*/, this.utilsService.selectPDF()];
                    case 1:
                        _a.brochure = _b.sent();
                        return [3 /*break*/, 3];
                    case 2:
                        error_1 = _b.sent();
                        throw new Error(error_1);
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    AcademicProgramPage.prototype.disconnectObservers = function () {
        if (this.studyAreaSubscription) {
            this.studyAreaSubscription.unsubscribe();
        }
        if (this.modalitySubscription) {
            this.modalitySubscription.unsubscribe();
        }
        if (this.academicTypeSubscription) {
            this.academicTypeSubscription.unsubscribe();
        }
        if (this.languageInfoSubscription) {
            this.languageInfoSubscription.unsubscribe();
        }
    };
    AcademicProgramPage.prototype.ngOnDestroy = function () {
        this.disconnectObservers();
    };
    AcademicProgramPage.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] },
        { type: _angular_common__WEBPACK_IMPORTED_MODULE_4__["Location"] },
        { type: _ngxs_store__WEBPACK_IMPORTED_MODULE_7__["Store"] },
        { type: _core_utils_service__WEBPACK_IMPORTED_MODULE_5__["UtilsService"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
        { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslateService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"] },
        { type: _ionic_native_chooser_ngx__WEBPACK_IMPORTED_MODULE_15__["Chooser"] },
        { type: _core_navigation_extras_service__WEBPACK_IMPORTED_MODULE_18__["NavigationExtrasService"] },
        { type: _core_inform_service__WEBPACK_IMPORTED_MODULE_14__["InformService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_17__["ModalController"] }
    ]; };
    AcademicProgramPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-academic-program',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./academic-program.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/academic-program/academic-program.page.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./academic-program.page.scss */ "./src/app/academic-program/academic-program.page.scss")).default]
        })
    ], AcademicProgramPage);
    return AcademicProgramPage;
}(_base_base_page__WEBPACK_IMPORTED_MODULE_3__["BasePage"]));



/***/ })

}]);
//# sourceMappingURL=academic-program-academic-program-module.js.map