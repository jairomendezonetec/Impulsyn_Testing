(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["profiles-user-add-item-add-item-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/profiles/user/add-item/add-item.page.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/profiles/user/add-item/add-item.page.html ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-header\n  [showBackButton]=\"true\"\n  [title]=\"title\"\n  (backButtonClick)=\"goBack()\"\n  [actionIconList]=\"[headerIcon]\"\n  (actionIconListClick)=\"onHeaderIconClick()\"\n></app-header>\n<ion-content class=\"ion-padding\">\n  <div [ngSwitch]=\"itemTypeSelected\">\n    <app-form-experience\n      *ngSwitchCase=\"1\"\n      [experienceId]=\"id\"\n      (sendFormAdd)=\"saveExperience($event)\"\n      (sendFormUpdate)=\"updateExperience($event)\"\n    ></app-form-experience>\n    <app-form-academic\n      *ngSwitchCase=\"2\"\n      [academicId]=\"id\"\n      (sendFormUpdate)=\"updateAcademic($event)\"\n      (sendFormAdd)=\"saveAcademic($event)\"\n    ></app-form-academic>\n    <app-form-skill *ngSwitchCase=\"3\" (sendForm)=\"saveSkill($event)\"></app-form-skill>\n  </div>\n</ion-content>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/profiles/user/add-item/components/form-academic/form-academic.component.html":
/*!************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/profiles/user/add-item/components/form-academic/form-academic.component.html ***!
  \************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-grid class=\"flex-container\">\n  <form [formGroup]=\"formGroup\">\n    <div class=\"flex-justify-content-center\">\n      <div class=\"pr col-xs-12 col-sm-8 col-lg-6\">\n        <ion-item lines=\"full\" class=\"ion-margin\">\n          <ion-label appPlatformMode>{{ 'formFields.academicTitle' | translate }}</ion-label>\n          <ion-input\n            type=\"text\"\n            inputmode=\"text\"\n            autocomplete=\"off\"\n            [formControlName]=\"'title'\"\n            [maxlength]=\"maxLengthTitle\"\n            [(ngModel)]=\"modelAcademicInput.title\"\n            required\n          ></ion-input>\n        </ion-item>\n        <app-show-errors [control]=\"formGroup.controls['title']\"></app-show-errors>\n      </div>\n    </div>\n    <div class=\"flex-justify-content-center\">\n      <div class=\"pr col-xs-12 col-sm-8 col-lg-6\">\n        <ion-item lines=\"full\" class=\"ion-margin\">\n          <ion-label appPlatformMode>{{ 'formFields.academicOrganization' | translate }}</ion-label>\n          <ion-input\n            type=\"text\"\n            inputmode=\"text\"\n            autocomplete=\"off\"\n            [formControlName]=\"'organization'\"\n            [maxlength]=\"maxLengthTitle\"\n            [(ngModel)]=\"modelAcademicInput.organization\"\n            required\n          ></ion-input>\n        </ion-item>\n        <app-show-errors [control]=\"formGroup.controls['organization']\"></app-show-errors>\n      </div>\n    </div>\n    <div class=\"flex-justify-content-center\">\n      <div class=\"pr col-xs-12 col-sm-8 col-lg-6\">\n        <ion-item lines=\"full\" class=\"ion-margin\">\n          <ion-label appPlatformMode>{{ 'formFields.location' | translate }}</ion-label>\n          <ion-input\n            type=\"text\"\n            inputmode=\"text\"\n            autocomplete=\"off\"\n            [formControlName]=\"'location'\"\n            [(ngModel)]=\"modelAcademicInput.location\"\n            placeholder=\"{{ 'formFields.placeholderLocation' | translate }}\"\n          ></ion-input>\n        </ion-item>\n        <app-show-errors [control]=\"formGroup.controls['location']\"></app-show-errors>\n      </div>\n    </div>\n    <div class=\"flex-justify-content-center\">\n      <div class=\"pr col-xs-12 col-sm-8 col-lg-6\">\n        <ion-item lines=\"full\" class=\"ion-margin\">\n          <ion-label appPlatformMode>{{ 'formFields.studyArea' | translate }}</ion-label>\n          <ion-select\n            *ngIf=\"studyAreaList\"\n            interface=\"action-sheet\"\n            formControlName=\"study_area\"\n            class=\"custom-alert\"\n            [(ngModel)]=\"modelAcademicInput.study_area\"\n            okText=\"{{ 'buttons.accept' | translate }}\"\n            cancelText=\"{{ 'buttons.cancel' | translate }}\"\n            [interfaceOptions]=\"customActionSheetStudyAreaOptions\"\n          >\n            <ion-select-option *ngFor=\"let item of studyAreaList\" [value]=\"item.id\">\n              {{ 'studyArea.' + item.name | translate }}</ion-select-option\n            >\n          </ion-select>\n        </ion-item>\n        <app-show-errors [control]=\"formGroup.controls['study_area']\"></app-show-errors>\n      </div>\n    </div>\n    <div class=\"flex-justify-content-center\">\n      <div class=\"pr col-xs-12 col-sm-8 col-lg-6 ion-text-center flex-compatible ion-align-items-center\">\n        <div class=\"pr col-xs-6 col-sm-6 col-lg-6\">\n          <ion-item lines=\"full\" class=\"ion-margin\">\n            <ion-label appPlatformMode>{{ 'formFields.startDate' | translate }}</ion-label>\n            <ion-datetime\n              [min]=\"getMinDate()\"\n              [max]=\"getMaxDate()\"\n              [displayFormat]=\"getDateDisplayFormat()\"\n              [pickerFormat]=\"getDatePickerFormat()\"\n              [doneText]=\"'buttons.accept' | translate\"\n              [cancelText]=\"'buttons.cancel' | translate\"\n              [formControlName]=\"'start_date'\"\n              [(ngModel)]=\"modelAcademicInput.start_date\"\n            ></ion-datetime>\n          </ion-item>\n          <app-show-errors [control]=\"formGroup.controls['start_date']\"></app-show-errors>\n        </div>\n        <div class=\"pr col-xs-6 col-sm-6 col-lg-6\">\n          <ion-item lines=\"full\" class=\"ion-margin\">\n            <ion-label appPlatformMode>{{ 'formFields.endDate' | translate }}</ion-label>\n            <ion-datetime\n              [min]=\"getStart()\"\n              [max]=\"getMaxDate()\"\n              [displayFormat]=\"getDateDisplayFormat()\"\n              [pickerFormat]=\"getDatePickerFormat()\"\n              [doneText]=\"'buttons.accept' | translate\"\n              [cancelText]=\"'buttons.cancel' | translate\"\n              [formControlName]=\"'end_date'\"\n              [(ngModel)]=\"modelAcademicInput.end_date\"\n              [disabled]=\"formGroup.controls['start_date'].value === ''\"\n            ></ion-datetime>\n          </ion-item>\n          <app-show-errors [control]=\"formGroup.controls['end_date']\"></app-show-errors>\n        </div>\n      </div>\n    </div>\n    <div class=\"flex-justify-content-center\">\n      <div class=\"pr col-xs-12 col-sm-8 col-lg-6\">\n        <ion-item lines=\"full\" class=\"ion-margin ion-no-border\">\n          <ion-label class=\"regular-size\">{{ 'formFields.currentAcademic' | translate }}</ion-label>\n          <ion-toggle\n            slot=\"start\"\n            name=\"all\"\n            color=\"secondary\"\n            [formControlName]=\"'currentExperience'\"\n            (ionChange)=\"setEndDate()\"\n          ></ion-toggle>\n        </ion-item>\n        <app-show-errors [control]=\"formGroup.controls['currentExperience']\"></app-show-errors>\n      </div>\n    </div>\n    <div class=\"flex-justify-content-center\">\n      <div class=\"pr col-xs-12 col-sm-8 col-lg-6\">\n        <ion-item lines=\"full\" class=\"ion-margin\">\n          <ion-label appPlatformMode>{{ 'formFields.description' | translate }}</ion-label>\n          <ion-textarea\n            type=\"text\"\n            inputmode=\"text\"\n            rows=\"8\"\n            [maxlength]=\"maxlength\"\n            [(ngModel)]=\"modelAcademicInput.description\"\n            [formControlName]=\"'description'\"\n          ></ion-textarea>\n        </ion-item>\n        <app-show-errors [control]=\"formGroup.controls['description']\"></app-show-errors>\n      </div>\n    </div>\n    <app-action-button\n      class=\"ion-margin-top ion-margin-vertical\"\n      (actionButtonClick)=\"saveAcademicProfile()\"\n      [buttonText]=\"'buttons.save'\"\n    ></app-action-button>\n  </form>\n</ion-grid>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/profiles/user/add-item/components/form-experience/form-experience.component.html":
/*!****************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/profiles/user/add-item/components/form-experience/form-experience.component.html ***!
  \****************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-grid class=\"flex-container\">\n  <form [formGroup]=\"formGroup\">\n    <div class=\"flex-justify-content-center\">\n      <div class=\"pr col-xs-12 col-sm-8 col-lg-6\">\n        <ion-item lines=\"full\" class=\"ion-margin\">\n          <ion-label appPlatformMode>{{ 'formFields.experienceTitle' | translate }}</ion-label>\n          <ion-input\n            type=\"text\"\n            inputmode=\"text\"\n            autocomplete=\"off\"\n            [formControlName]=\"'title'\"\n            [(ngModel)]=\"modelExperienceInput.title\"\n            [maxlength]=\"maxLengthTitle\"\n            required\n            placeholder=\"{{ 'formFields.placeholderTitle' | translate }}\"\n          ></ion-input>\n        </ion-item>\n        <app-show-errors [control]=\"formGroup.controls['title']\"></app-show-errors>\n      </div>\n    </div>\n    <div class=\"flex-justify-content-center\">\n      <div class=\"pr col-xs-12 col-sm-8 col-lg-6\">\n        <ion-item lines=\"full\" class=\"ion-margin\">\n          <ion-label appPlatformMode>{{ 'formFields.organization' | translate }}</ion-label>\n          <ion-input\n            type=\"text\"\n            inputmode=\"text\"\n            autocomplete=\"off\"\n            [formControlName]=\"'organization'\"\n            [maxlength]=\"maxLengthTitle\"\n            [(ngModel)]=\"modelExperienceInput.organization\"\n            placeholder=\"{{ 'formFields.placeholderOganization' | translate }}\"\n            required\n          ></ion-input>\n        </ion-item>\n        <app-show-errors [control]=\"formGroup.controls['organization']\"></app-show-errors>\n      </div>\n    </div>\n    <div class=\"flex-justify-content-center\">\n      <div class=\"pr col-xs-12 col-sm-8 col-lg-6\">\n        <ion-item lines=\"full\" class=\"ion-margin\">\n          <ion-label appPlatformMode>{{ 'formFields.location' | translate }}</ion-label>\n          <ion-input\n            type=\"text\"\n            inputmode=\"text\"\n            autocomplete=\"off\"\n            [formControlName]=\"'location'\"\n            placeholder=\"{{ 'formFields.placeholderLocation' | translate }}\"\n            [(ngModel)]=\"modelExperienceInput.location\"\n          ></ion-input>\n        </ion-item>\n        <app-show-errors [control]=\"formGroup.controls['location']\"></app-show-errors>\n      </div>\n    </div>\n    <div class=\"flex-justify-content-center\">\n      <div class=\"pr col-xs-12 col-sm-8 col-lg-6\">\n        <ion-item lines=\"full\" class=\"ion-margin\">\n          <ion-label appPlatformMode>{{ 'formFields.workType' | translate }}</ion-label>\n          <ion-select\n            *ngIf=\"opportunityList && opportunityList.length\"\n            interface=\"action-sheet\"\n            formControlName=\"work_type\"\n            class=\"custom-alert\"\n            okText=\"{{ 'buttons.accept' | translate }}\"\n            cancelText=\"{{ 'buttons.cancel' | translate }}\"\n            [interfaceOptions]=\"customActionSheetOpportunitiesOptions\"\n            [(ngModel)]=\"modelExperienceInput.work_type\"\n          >\n            <ion-select-option *ngFor=\"let opportunity of opportunityList\" [value]=\"opportunity.id\">\n              {{ 'opportunityType.' + opportunity.name | translate }}</ion-select-option\n            >\n          </ion-select>\n        </ion-item>\n        <app-show-errors [control]=\"formGroup.controls['work_type']\"></app-show-errors>\n      </div>\n    </div>\n    <div class=\"flex-justify-content-center\">\n      <div class=\"pr col-xs-12 col-sm-8 col-lg-6\">\n        <ion-item lines=\"full\" class=\"ion-margin\">\n          <ion-label appPlatformMode>{{ 'formFields.workArea' | translate }}</ion-label>\n          <ion-select\n            *ngIf=\"workAreaList && workAreaList.length\"\n            interface=\"action-sheet\"\n            formControlName=\"work_area\"\n            class=\"custom-alert\"\n            okText=\"{{ 'buttons.accept' | translate }}\"\n            cancelText=\"{{ 'buttons.cancel' | translate }}\"\n            [(ngModel)]=\"modelExperienceInput.work_area\"\n            [interfaceOptions]=\"customActionSheetWorkAreaOptions\"\n          >\n            <ion-select-option *ngFor=\"let workArea of workAreaList\" [value]=\"workArea.id\">\n              {{ 'workArea.' + workArea.name | translate }}</ion-select-option\n            >\n          </ion-select>\n        </ion-item>\n        <app-show-errors [control]=\"formGroup.controls['work_area']\"></app-show-errors>\n      </div>\n    </div>\n    <div class=\"flex-justify-content-center\">\n      <div class=\"pr col-xs-12 col-sm-8 col-lg-6 ion-text-center flex-compatible ion-align-items-center\">\n        <div class=\"pr col-xs-6 col-sm-6 col-lg-6\">\n          <ion-item lines=\"full\" class=\"ion-margin\">\n            <ion-label appPlatformMode>{{ 'formFields.startDate' | translate }}</ion-label>\n            <ion-datetime\n              [min]=\"getMinDate()\"\n              [max]=\"getMaxDate()\"\n              [displayFormat]=\"getDateDisplayFormat()\"\n              [pickerFormat]=\"getDatePickerFormat()\"\n              [doneText]=\"'buttons.accept' | translate\"\n              [cancelText]=\"'buttons.cancel' | translate\"\n              [formControlName]=\"'start_date'\"\n              [(ngModel)]=\"modelExperienceInput.start_date\"\n            ></ion-datetime>\n          </ion-item>\n          <app-show-errors [control]=\"formGroup.controls['start_date']\"></app-show-errors>\n        </div>\n        <div class=\"pr col-xs-6 col-sm-6 col-lg-6\">\n          <ion-item lines=\"full\" class=\"ion-margin\">\n            <ion-label appPlatformMode>{{ 'formFields.endDate' | translate }}</ion-label>\n            <ion-datetime\n              [min]=\"getStart()\"\n              [max]=\"getMaxDate()\"\n              [displayFormat]=\"getDateDisplayFormat()\"\n              [pickerFormat]=\"getDatePickerFormat()\"\n              [doneText]=\"'buttons.accept' | translate\"\n              [cancelText]=\"'buttons.cancel' | translate\"\n              [formControlName]=\"'end_date'\"\n              [disabled]=\"formGroup.controls['start_date'].value === ''\"\n              [(ngModel)]=\"modelExperienceInput.end_date\"\n            ></ion-datetime>\n          </ion-item>\n          <app-show-errors [control]=\"formGroup.controls['end_date']\"></app-show-errors>\n        </div>\n      </div>\n    </div>\n    <div class=\"flex-justify-content-center\">\n      <div class=\"pr col-xs-12 col-sm-8 col-lg-6\">\n        <ion-item lines=\"full\" class=\"ion-margin ion-no-border\">\n          <ion-label class=\"regular-size\">{{ 'formFields.currentExperience' | translate }}</ion-label>\n          <ion-toggle\n            slot=\"start\"\n            name=\"all\"\n            color=\"secondary\"\n            [formControlName]=\"'currentExperience'\"\n            (ionChange)=\"setEndDate()\"\n          ></ion-toggle>\n        </ion-item>\n        <app-show-errors [control]=\"formGroup.controls['currentExperience']\"></app-show-errors>\n      </div>\n    </div>\n    <div class=\"flex-justify-content-center ion-padding-bottom\">\n      <div class=\"pr col-xs-12 col-sm-8 col-lg-6\">\n        <ion-item lines=\"full\" class=\"ion-margin\">\n          <ion-label appPlatformMode>{{ 'formFields.description' | translate }}</ion-label>\n          <ion-textarea\n            type=\"text\"\n            inputmode=\"text\"\n            rows=\"8\"\n            [maxlength]=\"maxlength\"\n            [(ngModel)]=\"modelExperienceInput.description\"\n            [formControlName]=\"'description'\"\n          ></ion-textarea>\n        </ion-item>\n        <app-show-errors [control]=\"formGroup.controls['description']\"></app-show-errors>\n      </div>\n    </div>\n    <app-action-button\n      class=\"ion-margin-top ion-margin-vertical\"\n      (actionButtonClick)=\"saveExperienceProfile()\"\n      [buttonText]=\"'buttons.save'\"\n    ></app-action-button>\n  </form>\n</ion-grid>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/profiles/user/add-item/components/form-skill/form-skill.component.html":
/*!******************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/profiles/user/add-item/components/form-skill/form-skill.component.html ***!
  \******************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-grid class=\"flex-container\">\n  <form [formGroup]=\"formGroup\">\n    <div class=\"flex-justify-content-center\">\n      <div class=\"pr col-xs-12 col-sm-8 col-lg-6\">\n        <ion-item lines=\"full\" class=\"ion-margin\">\n          <ion-label appPlatformMode>{{ 'formFields.skill' | translate }}</ion-label>\n          <ion-input\n            type=\"text\"\n            inputmode=\"text\"\n            autocomplete=\"off\"\n            [formControlName]=\"'title'\"\n            [maxlength]=\"maxLength\"\n            required\n          ></ion-input>\n        </ion-item>\n        <app-show-errors [control]=\"formGroup.controls['title']\"></app-show-errors>\n      </div>\n    </div>\n    <div class=\"flex-justify-content-center ion-margin-bottom\">\n      <div\n        color=\"grey\"\n        class=\"small-size pr col-xs-12 col-sm-8 col-lg-6 ion-text-center ion-justify-content-center ion-align-items-center\"\n      >\n        {{ 'maxSkills' | translate }}\n      </div>\n    </div>\n    <app-action-button\n      class=\"ion-margin-top ion-margin-vertical\"\n      (actionButtonClick)=\"saveSkill()\"\n      [buttonText]=\"'buttons.save'\"\n    ></app-action-button>\n  </form>\n</ion-grid>\n");

/***/ }),

/***/ "./src/app/profiles/user/add-item/add-item-routing.module.ts":
/*!*******************************************************************!*\
  !*** ./src/app/profiles/user/add-item/add-item-routing.module.ts ***!
  \*******************************************************************/
/*! exports provided: AddItemPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddItemPageRoutingModule", function() { return AddItemPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _add_item_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./add-item.page */ "./src/app/profiles/user/add-item/add-item.page.ts");




var routes = [
    {
        path: '',
        component: _add_item_page__WEBPACK_IMPORTED_MODULE_3__["AddItemPage"],
    },
];
var AddItemPageRoutingModule = /** @class */ (function () {
    function AddItemPageRoutingModule() {
    }
    AddItemPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], AddItemPageRoutingModule);
    return AddItemPageRoutingModule;
}());



/***/ }),

/***/ "./src/app/profiles/user/add-item/add-item.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/profiles/user/add-item/add-item.module.ts ***!
  \***********************************************************/
/*! exports provided: AddItemPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddItemPageModule", function() { return AddItemPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _add_item_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./add-item-routing.module */ "./src/app/profiles/user/add-item/add-item-routing.module.ts");
/* harmony import */ var _add_item_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./add-item.page */ "./src/app/profiles/user/add-item/add-item.page.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../@shared/shared.module */ "./src/app/@shared/shared.module.ts");
/* harmony import */ var _components_form_experience_form_experience_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/form-experience/form-experience.module */ "./src/app/profiles/user/add-item/components/form-experience/form-experience.module.ts");
/* harmony import */ var _components_form_skill_form_skill_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/form-skill/form-skill.module */ "./src/app/profiles/user/add-item/components/form-skill/form-skill.module.ts");
/* harmony import */ var _components_form_academic_form_academic_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/form-academic/form-academic.module */ "./src/app/profiles/user/add-item/components/form-academic/form-academic.module.ts");








var AddItemPageModule = /** @class */ (function () {
    function AddItemPageModule() {
    }
    AddItemPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"], _add_item_routing_module__WEBPACK_IMPORTED_MODULE_2__["AddItemPageRoutingModule"], _components_form_experience_form_experience_module__WEBPACK_IMPORTED_MODULE_5__["FormExperienceComponentModule"], _components_form_skill_form_skill_module__WEBPACK_IMPORTED_MODULE_6__["FormSkillModule"], _components_form_academic_form_academic_module__WEBPACK_IMPORTED_MODULE_7__["FormAcademicModule"]],
            declarations: [_add_item_page__WEBPACK_IMPORTED_MODULE_3__["AddItemPage"]],
        })
    ], AddItemPageModule);
    return AddItemPageModule;
}());



/***/ }),

/***/ "./src/app/profiles/user/add-item/add-item.page.scss":
/*!***********************************************************!*\
  !*** ./src/app/profiles/user/add-item/add-item.page.scss ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Byb2ZpbGVzL3VzZXIvYWRkLWl0ZW0vYWRkLWl0ZW0ucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/profiles/user/add-item/add-item.page.ts":
/*!*********************************************************!*\
  !*** ./src/app/profiles/user/add-item/add-item.page.ts ***!
  \*********************************************************/
/*! exports provided: AddItemPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddItemPage", function() { return AddItemPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngxs/store */ "./node_modules/@ngxs/store/__ivy_ngcc__/fesm2015/ngxs-store.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
/* harmony import */ var _base_base_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../base/base.page */ "./src/app/base/base.page.ts");
/* harmony import */ var _core_utils_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../@core/utils.service */ "./src/app/@core/utils.service.ts");
/* harmony import */ var _store_user_user_actions__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../@store/user/user.actions */ "./src/app/@store/user/user.actions.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _types_item_profile_type__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../types/item-profile-type */ "./src/app/profiles/types/item-profile-type.ts");












var AddItemPage = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(AddItemPage, _super);
    function AddItemPage(router, location, store, utilsService, translateService, alertController) {
        var _this = _super.call(this, location, router, store, utilsService) || this;
        _this.translateService = translateService;
        _this.alertController = alertController;
        return _this;
    }
    AddItemPage.prototype.ngOnInit = function () {
        if (this.router.getCurrentNavigation().extras.state) {
            this.itemTypeSelected = this.router.getCurrentNavigation().extras.state.itemType;
            this.id = this.router.getCurrentNavigation().extras.state.id;
            this.isUpdated = this.id !== undefined;
        }
        if (this.isUpdated) {
            this.title = this.translateService.instant("userProfile.updateExperience" + this.itemTypeSelected);
            this.headerIcon = { name: 'trash' };
        }
        else {
            this.title = this.translateService.instant("userProfile.addExperience" + this.itemTypeSelected);
        }
    };
    AddItemPage.prototype.onHeaderIconClick = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var title, message, cancelButton, acceptButton, alert;
            var _this = this;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        title = this.translateService.instant("userProfile.deleteTitle" + this.itemTypeSelected);
                        message = this.translateService.instant("userProfile.deleteMessage2");
                        cancelButton = this.translateService.instant("no");
                        acceptButton = this.translateService.instant("yes");
                        return [4 /*yield*/, this.alertController.create({
                                cssClass: 'custom-alert',
                                header: title,
                                message: message,
                                buttons: [
                                    {
                                        text: cancelButton,
                                        role: 'cancel',
                                        cssClass: 'secondary',
                                        handler: function () {
                                            // do nothing
                                        },
                                    },
                                    {
                                        text: acceptButton,
                                        handler: function () {
                                            if (_this.itemTypeSelected === _types_item_profile_type__WEBPACK_IMPORTED_MODULE_11__["ItemProfileTypes"].Experience) {
                                                _this.deleteExperience();
                                            }
                                            else {
                                                _this.deleteAcademic();
                                            }
                                        },
                                    },
                                ],
                            })];
                    case 1:
                        alert = _a.sent();
                        return [4 /*yield*/, alert.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    AddItemPage.prototype.deleteExperience = function () {
        var _this = this;
        this.store
            .dispatch(new _store_user_user_actions__WEBPACK_IMPORTED_MODULE_8__["DeleteProfessionalExperience"]({ id: this.id }))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["take"])(1))
            .subscribe(function () {
            _this.goBack();
        }, function (error) {
            console.log(error);
        });
    };
    AddItemPage.prototype.updateExperience = function ($event) {
        var _this = this;
        this.store
            .dispatch(new _store_user_user_actions__WEBPACK_IMPORTED_MODULE_8__["UpdateProfessionalExperience"]({ id: this.id, input: $event }))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["take"])(1))
            .subscribe(function () {
            _this.goBack();
        }, function (error) {
            console.log(error);
        });
    };
    AddItemPage.prototype.updateAcademic = function ($event) {
        var _this = this;
        this.store
            .dispatch(new _store_user_user_actions__WEBPACK_IMPORTED_MODULE_8__["UpdateAcademicExperience"]({ id: this.id, input: $event }))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["take"])(1))
            .subscribe(function () {
            _this.goBack();
        }, function (error) {
            console.log(error);
        });
    };
    AddItemPage.prototype.deleteAcademic = function () {
        var _this = this;
        this.store
            .dispatch(new _store_user_user_actions__WEBPACK_IMPORTED_MODULE_8__["DeleteAcademicExperience"]({ id: this.id }))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["take"])(1))
            .subscribe(function () {
            _this.goBack();
        }, function (error) {
            console.log(error);
        });
    };
    AddItemPage.prototype.saveSkill = function ($event) {
        var _this = this;
        this.store
            .dispatch(new _store_user_user_actions__WEBPACK_IMPORTED_MODULE_8__["CreateSkillExperience"]({ input: { title: $event } }))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["take"])(1))
            .subscribe(function () {
            _this.goBack();
        }, function (error) {
            console.log(error);
        });
    };
    AddItemPage.prototype.saveExperience = function ($event) {
        var _this = this;
        console.dir($event);
        this.store
            .dispatch(new _store_user_user_actions__WEBPACK_IMPORTED_MODULE_8__["CreateProfessionalExperience"]({ input: $event }))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["take"])(1))
            .subscribe(function () {
            _this.goBack();
        }, function (error) {
            console.log(error);
        });
    };
    AddItemPage.prototype.saveAcademic = function ($event) {
        var _this = this;
        console.dir($event);
        this.store
            .dispatch(new _store_user_user_actions__WEBPACK_IMPORTED_MODULE_8__["CreateAcademicExperience"]({ input: $event }))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["take"])(1))
            .subscribe(function () {
            _this.goBack();
        }, function (error) {
            console.log(error);
        });
    };
    AddItemPage.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"] },
        { type: _ngxs_store__WEBPACK_IMPORTED_MODULE_4__["Store"] },
        { type: _core_utils_service__WEBPACK_IMPORTED_MODULE_7__["UtilsService"] },
        { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_10__["AlertController"] }
    ]; };
    AddItemPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-add-item',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./add-item.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/profiles/user/add-item/add-item.page.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./add-item.page.scss */ "./src/app/profiles/user/add-item/add-item.page.scss")).default]
        })
    ], AddItemPage);
    return AddItemPage;
}(_base_base_page__WEBPACK_IMPORTED_MODULE_6__["BasePage"]));



/***/ }),

/***/ "./src/app/profiles/user/add-item/components/form-academic/form-academic.component.scss":
/*!**********************************************************************************************!*\
  !*** ./src/app/profiles/user/add-item/components/form-academic/form-academic.component.scss ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Byb2ZpbGVzL3VzZXIvYWRkLWl0ZW0vY29tcG9uZW50cy9mb3JtLWFjYWRlbWljL2Zvcm0tYWNhZGVtaWMuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/profiles/user/add-item/components/form-academic/form-academic.component.ts":
/*!********************************************************************************************!*\
  !*** ./src/app/profiles/user/add-item/components/form-academic/form-academic.component.ts ***!
  \********************************************************************************************/
/*! exports provided: FormAcademicComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormAcademicComponent", function() { return FormAcademicComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngxs/store */ "./node_modules/@ngxs/store/__ivy_ngcc__/fesm2015/ngxs-store.js");
/* harmony import */ var _store_global_info_global_info_state__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../@store/global-info/global-info.state */ "./src/app/@store/global-info/global-info.state.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
/* harmony import */ var _core_utils_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../@core/utils.service */ "./src/app/@core/utils.service.ts");
/* harmony import */ var _store_global_info_global_info_actions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../@store/global-info/global-info.actions */ "./src/app/@store/global-info/global-info.actions.ts");
/* harmony import */ var _global_constants__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../@global/constants */ "./src/app/@global/constants.ts");
/* harmony import */ var _shared_validators_form_custom_validators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../@shared/validators/form-custom-validators */ "./src/app/@shared/validators/form-custom-validators.ts");
/* harmony import */ var _global_utils__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../../@global/utils */ "./src/app/@global/utils.ts");
/* harmony import */ var _store_user_user_state__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../../@store/user/user.state */ "./src/app/@store/user/user.state.ts");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_12__);













var FormAcademicComponent = /** @class */ (function () {
    function FormAcademicComponent(formBuilder, translateService, store, utilsService) {
        this.formBuilder = formBuilder;
        this.translateService = translateService;
        this.store = store;
        this.utilsService = utilsService;
        this.sendFormAdd = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.sendFormUpdate = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.maxlength = _global_constants__WEBPACK_IMPORTED_MODULE_8__["Constants"].MAX_PUBLICATION_DESCRIPTION_SIZE;
        this.maxLengthTitle = _global_constants__WEBPACK_IMPORTED_MODULE_8__["Constants"].MAX_LENGTH_TITLE;
    }
    FormAcademicComponent.prototype.ngOnInit = function () {
        var _a, _b;
        this.modelAcademicInput = {
            title: '',
            start_date: '',
            end_date: '',
            organization: '',
            modality: '',
            study_area: '',
            location: '',
            description: '',
        };
        this.loadStudyAreaInfo();
        this.initForm();
        var studyAreaTitle = this.translateService.instant("formFields.studyArea");
        this.customActionSheetStudyAreaOptions = {
            header: studyAreaTitle,
        };
        if (this.academicId) {
            var academics = this.store.selectSnapshot(_store_user_user_state__WEBPACK_IMPORTED_MODULE_11__["UserState"].getAcademicProfile);
            var index = Object(lodash__WEBPACK_IMPORTED_MODULE_12__["findIndex"])(academics, { id: this.academicId });
            var temporalAcademic = index > -1 ? academics[index] : null;
            this.modelAcademicInput = {
                title: temporalAcademic.title,
                start_date: temporalAcademic.start_date,
                end_date: temporalAcademic.end_date,
                organization: temporalAcademic.organization,
                location: temporalAcademic.location,
                description: temporalAcademic.description,
                modality: (_a = temporalAcademic.modality) === null || _a === void 0 ? void 0 : _a.id,
                study_area: (_b = temporalAcademic.study_area) === null || _b === void 0 ? void 0 : _b.id,
            };
            if (_global_utils__WEBPACK_IMPORTED_MODULE_10__["Utils"].isBlank(this.modelAcademicInput.end_date)) {
                this.formGroup.get('currentExperience').setValue(true);
                this.setEndDate();
            }
        }
    };
    FormAcademicComponent.prototype.loadStudyAreaInfo = function () {
        var _this = this;
        this.store.dispatch(new _store_global_info_global_info_actions__WEBPACK_IMPORTED_MODULE_7__["GetStudyAreaInfo"]());
        this.studyArea$Subscription$ = this.studyArea$.subscribe(function (data) {
            _this.studyAreaList = data;
        });
    };
    FormAcademicComponent.prototype.initForm = function () {
        this.formGroup = this.formBuilder.group({
            title: [
                '',
                [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].maxLength(this.maxLengthTitle), _shared_validators_form_custom_validators__WEBPACK_IMPORTED_MODULE_9__["FormCustomValidators"].notAllowedEmojis],
            ],
            organization: [
                '',
                [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].maxLength(this.maxLengthTitle), _shared_validators_form_custom_validators__WEBPACK_IMPORTED_MODULE_9__["FormCustomValidators"].notAllowedEmojis],
            ],
            study_area: [''],
            start_date: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
            end_date: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
            location: [''],
            currentExperience: [false],
            description: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].maxLength(this.maxlength), _shared_validators_form_custom_validators__WEBPACK_IMPORTED_MODULE_9__["FormCustomValidators"].notAllowedEmojis]],
        });
    };
    FormAcademicComponent.prototype.ngOnDestroy = function () {
        this.disconnectObservers();
    };
    FormAcademicComponent.prototype.disconnectObservers = function () {
        this.studyArea$Subscription$.unsubscribe();
    };
    FormAcademicComponent.prototype.getMinDate = function () {
        return _global_utils__WEBPACK_IMPORTED_MODULE_10__["Utils"].getInitdate(70);
    };
    FormAcademicComponent.prototype.getMaxDate = function () {
        return _global_utils__WEBPACK_IMPORTED_MODULE_10__["Utils"].getTodayDate();
    };
    FormAcademicComponent.prototype.getDateDisplayFormat = function () {
        return _global_constants__WEBPACK_IMPORTED_MODULE_8__["Constants"].DATE_DISPLAY_MONTH_YEAR_FORMAT;
    };
    FormAcademicComponent.prototype.getDatePickerFormat = function () {
        return _global_constants__WEBPACK_IMPORTED_MODULE_8__["Constants"].DATE_PICKER_MONTH_YEAR_FORMAT;
    };
    FormAcademicComponent.prototype.getStart = function () {
        return this.formGroup.get('start_date').value;
    };
    FormAcademicComponent.prototype.setEndDate = function () {
        if (this.formGroup.get('currentExperience').value) {
            this.formGroup.get('end_date').setValue('');
            this.formGroup.get('end_date').clearValidators();
            this.formGroup.get('end_date').disable();
            this.formGroup.get('end_date').updateValueAndValidity();
        }
        else {
            if (this.formGroup.get('start_date').value !== '') {
                this.formGroup.get('end_date').setValue('');
                this.formGroup.get('end_date').setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]);
                this.formGroup.get('end_date').enable();
                this.formGroup.get('end_date').updateValueAndValidity();
            }
        }
    };
    FormAcademicComponent.prototype.saveAcademicProfile = function () {
        if (this.utilsService.isValidForm(this.formGroup)) {
            if (_global_utils__WEBPACK_IMPORTED_MODULE_10__["Utils"].isBlank(this.modelAcademicInput.end_date)) {
                this.modelAcademicInput.end_date = '';
            }
            if (this.isUpdate()) {
                this.emitUpdate();
            }
            else {
                this.emitCreate();
            }
        }
    };
    FormAcademicComponent.prototype.emitUpdate = function () {
        this.sendFormUpdate.emit(this.modelAcademicInput);
    };
    FormAcademicComponent.prototype.emitCreate = function () {
        this.sendFormAdd.emit(this.modelAcademicInput);
    };
    FormAcademicComponent.prototype.isUpdate = function () {
        return !_global_utils__WEBPACK_IMPORTED_MODULE_10__["Utils"].isBlank(this.academicId);
    };
    FormAcademicComponent.ctorParameters = function () { return [
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] },
        { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateService"] },
        { type: _ngxs_store__WEBPACK_IMPORTED_MODULE_2__["Store"] },
        { type: _core_utils_service__WEBPACK_IMPORTED_MODULE_6__["UtilsService"] }
    ]; };
    FormAcademicComponent.propDecorators = {
        academicId: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
        sendFormAdd: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] }],
        sendFormUpdate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] }]
    };
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_2__["Select"])(_store_global_info_global_info_state__WEBPACK_IMPORTED_MODULE_3__["GlobalInfoState"].getStudyArea)
    ], FormAcademicComponent.prototype, "studyArea$", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_2__["Select"])(_store_global_info_global_info_state__WEBPACK_IMPORTED_MODULE_3__["GlobalInfoState"].getAcademicModality)
    ], FormAcademicComponent.prototype, "modality$", void 0);
    FormAcademicComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-form-academic',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./form-academic.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/profiles/user/add-item/components/form-academic/form-academic.component.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./form-academic.component.scss */ "./src/app/profiles/user/add-item/components/form-academic/form-academic.component.scss")).default]
        })
    ], FormAcademicComponent);
    return FormAcademicComponent;
}());



/***/ }),

/***/ "./src/app/profiles/user/add-item/components/form-academic/form-academic.module.ts":
/*!*****************************************************************************************!*\
  !*** ./src/app/profiles/user/add-item/components/form-academic/form-academic.module.ts ***!
  \*****************************************************************************************/
/*! exports provided: FormAcademicModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormAcademicModule", function() { return FormAcademicModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _form_academic_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./form-academic.component */ "./src/app/profiles/user/add-item/components/form-academic/form-academic.component.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../@shared/shared.module */ "./src/app/@shared/shared.module.ts");




var FormAcademicModule = /** @class */ (function () {
    function FormAcademicModule() {
    }
    FormAcademicModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_form_academic_component__WEBPACK_IMPORTED_MODULE_2__["FormAcademicComponent"]],
            imports: [_shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"]],
            exports: [_form_academic_component__WEBPACK_IMPORTED_MODULE_2__["FormAcademicComponent"]],
        })
    ], FormAcademicModule);
    return FormAcademicModule;
}());



/***/ }),

/***/ "./src/app/profiles/user/add-item/components/form-experience/form-experience.component.scss":
/*!**************************************************************************************************!*\
  !*** ./src/app/profiles/user/add-item/components/form-experience/form-experience.component.scss ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Byb2ZpbGVzL3VzZXIvYWRkLWl0ZW0vY29tcG9uZW50cy9mb3JtLWV4cGVyaWVuY2UvZm9ybS1leHBlcmllbmNlLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/profiles/user/add-item/components/form-experience/form-experience.component.ts":
/*!************************************************************************************************!*\
  !*** ./src/app/profiles/user/add-item/components/form-experience/form-experience.component.ts ***!
  \************************************************************************************************/
/*! exports provided: FormExperienceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormExperienceComponent", function() { return FormExperienceComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngxs/store */ "./node_modules/@ngxs/store/__ivy_ngcc__/fesm2015/ngxs-store.js");
/* harmony import */ var _store_global_info_global_info_state__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../@store/global-info/global-info.state */ "./src/app/@store/global-info/global-info.state.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _store_global_info_global_info_actions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../@store/global-info/global-info.actions */ "./src/app/@store/global-info/global-info.actions.ts");
/* harmony import */ var _global_constants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../@global/constants */ "./src/app/@global/constants.ts");
/* harmony import */ var _shared_validators_form_custom_validators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../@shared/validators/form-custom-validators */ "./src/app/@shared/validators/form-custom-validators.ts");
/* harmony import */ var _global_utils__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../@global/utils */ "./src/app/@global/utils.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
/* harmony import */ var _core_utils_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../../@core/utils.service */ "./src/app/@core/utils.service.ts");
/* harmony import */ var _store_user_user_state__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../../@store/user/user.state */ "./src/app/@store/user/user.state.ts");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_12__);













var FormExperienceComponent = /** @class */ (function () {
    function FormExperienceComponent(formBuilder, translateService, store, utilsService) {
        this.formBuilder = formBuilder;
        this.translateService = translateService;
        this.store = store;
        this.utilsService = utilsService;
        this.sendFormAdd = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.sendFormUpdate = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.maxlength = _global_constants__WEBPACK_IMPORTED_MODULE_6__["Constants"].MAX_PUBLICATION_DESCRIPTION_SIZE;
        this.maxLengthTitle = _global_constants__WEBPACK_IMPORTED_MODULE_6__["Constants"].MAX_LENGTH_TITLE;
    }
    FormExperienceComponent.prototype.ngOnInit = function () {
        var _a, _b;
        this.modelExperienceInput = {
            title: '',
            start_date: '',
            end_date: '',
            organization: '',
            work_type: '',
            work_area: '',
            location: '',
            description: '',
        };
        this.loadSportsInfo();
        this.loadOpportunityInfo();
        this.initForm();
        var workAreaTitle = this.translateService.instant("formFields.workArea");
        this.customActionSheetWorkAreaOptions = {
            header: workAreaTitle,
        };
        var opportunityTitle = this.translateService.instant("formFields.workType");
        this.customActionSheetOpportunitiesOptions = {
            header: opportunityTitle,
        };
        if (this.experienceId) {
            var experiences = this.store.selectSnapshot(_store_user_user_state__WEBPACK_IMPORTED_MODULE_11__["UserState"].getExperienceProfile);
            var index = Object(lodash__WEBPACK_IMPORTED_MODULE_12__["findIndex"])(experiences, { id: this.experienceId });
            var temporalExperience = index > -1 ? experiences[index] : null;
            this.modelExperienceInput = {
                title: temporalExperience.title,
                start_date: temporalExperience.start_date,
                end_date: temporalExperience.end_date,
                organization: temporalExperience.organization,
                work_type: (_a = temporalExperience.work_type) === null || _a === void 0 ? void 0 : _a.id,
                work_area: (_b = temporalExperience.work_area) === null || _b === void 0 ? void 0 : _b.id,
                location: temporalExperience.location,
                description: temporalExperience.description,
            };
            if (_global_utils__WEBPACK_IMPORTED_MODULE_8__["Utils"].isBlank(this.modelExperienceInput.end_date)) {
                this.formGroup.get('currentExperience').setValue(true);
                this.setEndDate();
            }
        }
    };
    FormExperienceComponent.prototype.loadSportsInfo = function () {
        var _this = this;
        this.store.dispatch(new _store_global_info_global_info_actions__WEBPACK_IMPORTED_MODULE_5__["GetWorkAreaInfo"]());
        this.workAreaSubscription$ = this.workArea$.subscribe(function (data) {
            _this.workAreaList = data;
        });
    };
    FormExperienceComponent.prototype.loadOpportunityInfo = function () {
        var _this = this;
        this.store.dispatch(new _store_global_info_global_info_actions__WEBPACK_IMPORTED_MODULE_5__["GetOpportunityTypeInfo"]());
        this.opportunitySubscription$ = this.opportunity$.subscribe(function (data) {
            _this.opportunityList = data;
        });
    };
    FormExperienceComponent.prototype.initForm = function () {
        this.formGroup = this.formBuilder.group({
            title: [
                '',
                [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].maxLength(this.maxLengthTitle), _shared_validators_form_custom_validators__WEBPACK_IMPORTED_MODULE_7__["FormCustomValidators"].notAllowedEmojis],
            ],
            organization: [
                '',
                [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].maxLength(this.maxLengthTitle), _shared_validators_form_custom_validators__WEBPACK_IMPORTED_MODULE_7__["FormCustomValidators"].notAllowedEmojis],
            ],
            work_type: [''],
            work_area: [''],
            start_date: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
            end_date: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
            location: [''],
            currentExperience: [false],
            description: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].maxLength(this.maxlength), _shared_validators_form_custom_validators__WEBPACK_IMPORTED_MODULE_7__["FormCustomValidators"].notAllowedEmojis]],
        });
    };
    FormExperienceComponent.prototype.ngOnDestroy = function () {
        this.disconnectObservers();
    };
    FormExperienceComponent.prototype.disconnectObservers = function () {
        this.workAreaSubscription$.unsubscribe();
        this.opportunitySubscription$.unsubscribe();
    };
    FormExperienceComponent.prototype.getMinDate = function () {
        return _global_utils__WEBPACK_IMPORTED_MODULE_8__["Utils"].getInitdate(70);
    };
    FormExperienceComponent.prototype.getMaxDate = function () {
        return _global_utils__WEBPACK_IMPORTED_MODULE_8__["Utils"].getTodayDate();
    };
    FormExperienceComponent.prototype.getDateDisplayFormat = function () {
        return _global_constants__WEBPACK_IMPORTED_MODULE_6__["Constants"].DATE_DISPLAY_MONTH_YEAR_FORMAT;
    };
    FormExperienceComponent.prototype.getDatePickerFormat = function () {
        return _global_constants__WEBPACK_IMPORTED_MODULE_6__["Constants"].DATE_PICKER_MONTH_YEAR_FORMAT;
    };
    FormExperienceComponent.prototype.setEndDate = function () {
        if (this.formGroup.get('currentExperience').value) {
            this.formGroup.get('end_date').setValue('');
            this.formGroup.get('end_date').clearValidators();
            this.formGroup.get('end_date').disable();
            this.formGroup.get('end_date').updateValueAndValidity();
        }
        else {
            if (this.formGroup.get('start_date').value !== '') {
                this.formGroup.get('end_date').setValue('');
                this.formGroup.get('end_date').setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]);
                this.formGroup.get('end_date').enable();
                this.formGroup.get('end_date').updateValueAndValidity();
            }
        }
    };
    FormExperienceComponent.prototype.saveExperienceProfile = function () {
        if (this.utilsService.isValidForm(this.formGroup)) {
            if (_global_utils__WEBPACK_IMPORTED_MODULE_8__["Utils"].isBlank(this.modelExperienceInput.end_date)) {
                this.modelExperienceInput.end_date = '';
            }
            if (this.isUpdate()) {
                this.emitUpdate();
            }
            else {
                this.emitCreate();
            }
        }
    };
    FormExperienceComponent.prototype.emitUpdate = function () {
        this.sendFormUpdate.emit(this.modelExperienceInput);
    };
    FormExperienceComponent.prototype.emitCreate = function () {
        this.sendFormAdd.emit(this.modelExperienceInput);
    };
    FormExperienceComponent.prototype.isUpdate = function () {
        return !_global_utils__WEBPACK_IMPORTED_MODULE_8__["Utils"].isBlank(this.experienceId);
    };
    FormExperienceComponent.prototype.getStart = function () {
        return this.formGroup.get('start_date').value;
    };
    FormExperienceComponent.ctorParameters = function () { return [
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] },
        { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__["TranslateService"] },
        { type: _ngxs_store__WEBPACK_IMPORTED_MODULE_2__["Store"] },
        { type: _core_utils_service__WEBPACK_IMPORTED_MODULE_10__["UtilsService"] }
    ]; };
    FormExperienceComponent.propDecorators = {
        experienceId: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
        sendFormAdd: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] }],
        sendFormUpdate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] }]
    };
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_2__["Select"])(_store_global_info_global_info_state__WEBPACK_IMPORTED_MODULE_3__["GlobalInfoState"].getWorkArea)
    ], FormExperienceComponent.prototype, "workArea$", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_2__["Select"])(_store_global_info_global_info_state__WEBPACK_IMPORTED_MODULE_3__["GlobalInfoState"].getOpportunities)
    ], FormExperienceComponent.prototype, "opportunity$", void 0);
    FormExperienceComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-form-experience',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./form-experience.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/profiles/user/add-item/components/form-experience/form-experience.component.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./form-experience.component.scss */ "./src/app/profiles/user/add-item/components/form-experience/form-experience.component.scss")).default]
        })
    ], FormExperienceComponent);
    return FormExperienceComponent;
}());



/***/ }),

/***/ "./src/app/profiles/user/add-item/components/form-experience/form-experience.module.ts":
/*!*********************************************************************************************!*\
  !*** ./src/app/profiles/user/add-item/components/form-experience/form-experience.module.ts ***!
  \*********************************************************************************************/
/*! exports provided: FormExperienceComponentModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormExperienceComponentModule", function() { return FormExperienceComponentModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _form_experience_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./form-experience.component */ "./src/app/profiles/user/add-item/components/form-experience/form-experience.component.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../@shared/shared.module */ "./src/app/@shared/shared.module.ts");




var FormExperienceComponentModule = /** @class */ (function () {
    function FormExperienceComponentModule() {
    }
    FormExperienceComponentModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_form_experience_component__WEBPACK_IMPORTED_MODULE_2__["FormExperienceComponent"]],
            imports: [_shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"]],
            exports: [_form_experience_component__WEBPACK_IMPORTED_MODULE_2__["FormExperienceComponent"]],
        })
    ], FormExperienceComponentModule);
    return FormExperienceComponentModule;
}());



/***/ }),

/***/ "./src/app/profiles/user/add-item/components/form-skill/form-skill.component.scss":
/*!****************************************************************************************!*\
  !*** ./src/app/profiles/user/add-item/components/form-skill/form-skill.component.scss ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Byb2ZpbGVzL3VzZXIvYWRkLWl0ZW0vY29tcG9uZW50cy9mb3JtLXNraWxsL2Zvcm0tc2tpbGwuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/profiles/user/add-item/components/form-skill/form-skill.component.ts":
/*!**************************************************************************************!*\
  !*** ./src/app/profiles/user/add-item/components/form-skill/form-skill.component.ts ***!
  \**************************************************************************************/
/*! exports provided: FormSkillComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormSkillComponent", function() { return FormSkillComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _global_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../@global/constants */ "./src/app/@global/constants.ts");
/* harmony import */ var _shared_validators_form_custom_validators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../@shared/validators/form-custom-validators */ "./src/app/@shared/validators/form-custom-validators.ts");
/* harmony import */ var _core_utils_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../@core/utils.service */ "./src/app/@core/utils.service.ts");






var FormSkillComponent = /** @class */ (function () {
    function FormSkillComponent(formBuilder, utilsService) {
        this.formBuilder = formBuilder;
        this.utilsService = utilsService;
        this.maxLength = _global_constants__WEBPACK_IMPORTED_MODULE_3__["Constants"].MAX_LENGTH_TITLE;
        this.sendForm = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    FormSkillComponent.prototype.ngOnInit = function () {
        this.formGroup = this.formBuilder.group({
            title: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _shared_validators_form_custom_validators__WEBPACK_IMPORTED_MODULE_4__["FormCustomValidators"].notAllowedEmojis, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(this.maxLength)]],
        });
    };
    FormSkillComponent.prototype.saveSkill = function () {
        if (this.utilsService.isValidForm(this.formGroup)) {
            this.sendForm.emit(this.formGroup.get('title').value);
        }
    };
    FormSkillComponent.ctorParameters = function () { return [
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
        { type: _core_utils_service__WEBPACK_IMPORTED_MODULE_5__["UtilsService"] }
    ]; };
    FormSkillComponent.propDecorators = {
        sendForm: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] }]
    };
    FormSkillComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-form-skill',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./form-skill.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/profiles/user/add-item/components/form-skill/form-skill.component.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./form-skill.component.scss */ "./src/app/profiles/user/add-item/components/form-skill/form-skill.component.scss")).default]
        })
    ], FormSkillComponent);
    return FormSkillComponent;
}());



/***/ }),

/***/ "./src/app/profiles/user/add-item/components/form-skill/form-skill.module.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/profiles/user/add-item/components/form-skill/form-skill.module.ts ***!
  \***********************************************************************************/
/*! exports provided: FormSkillModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormSkillModule", function() { return FormSkillModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _form_skill_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./form-skill.component */ "./src/app/profiles/user/add-item/components/form-skill/form-skill.component.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../@shared/shared.module */ "./src/app/@shared/shared.module.ts");




var FormSkillModule = /** @class */ (function () {
    function FormSkillModule() {
    }
    FormSkillModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_form_skill_component__WEBPACK_IMPORTED_MODULE_2__["FormSkillComponent"]],
            imports: [_shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"]],
            exports: [_form_skill_component__WEBPACK_IMPORTED_MODULE_2__["FormSkillComponent"]],
        })
    ], FormSkillModule);
    return FormSkillModule;
}());



/***/ })

}]);
//# sourceMappingURL=profiles-user-add-item-add-item-module.js.map