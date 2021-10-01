(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["edit-organization-info-edit-academic-organization-info-edit-academic-organization-info-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/edit-organization-info/edit-academic-organization-info/edit-academic-organization-info.page.html":
/*!********************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/edit-organization-info/edit-academic-organization-info/edit-academic-organization-info.page.html ***!
  \********************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-header\n  [title]=\"'editOrganizationPage.title' | translate\"\n  [showBackButton]=\"showBackButton\"\n  (backButtonClick)=\"goBack()\"\n>\n</app-header>\n\n<ion-content *ngIf=\"formGroup && employeesSizeList.length > 0 && studentsSizeList.length > 0\" class=\"ion-padding\">\n  <form [formGroup]=\"formGroup\">\n    <!-- Photo -->\n    <ion-row class=\"flex-item ion-align-items-center w100 ion-justify-content-center\">\n      <app-image-chooser [imagePath]=\"profileImage\" (actionButtonClick)=\"selectImageFrom()\"></app-image-chooser>\n    </ion-row>\n\n    <!-- Organization name -->\n    <div class=\"flex-container-vertical\">\n      <div class=\"flex-justify-content-center\">\n        <div class=\"pr col-xs-10 col-sm-8 col-lg-6\">\n          <ion-item lines=\"full\" class=\"ion-margin-vertical input-background\">\n            <ion-label appPlatformMode>{{'organization.name' | translate}}</ion-label>\n            <ion-input\n              type=\"text\"\n              inputmode=\"text\"\n              [formControlName]=\"'organizationName'\"\n              [maxlength]=\"maxlength\"\n              required\n            ></ion-input>\n          </ion-item>\n          <app-show-errors [control]=\"formGroup.controls['organizationName']\"></app-show-errors>\n        </div>\n      </div>\n\n      <!-- Tagline -->\n      <div class=\"flex-justify-content-center\">\n        <div class=\"pr col-xs-10 col-sm-8 col-lg-6\">\n          <ion-item lines=\"full\" class=\"ion-margin-vertical input-background\">\n            <ion-label appPlatformMode>{{'organization.tagline' | translate}}</ion-label>\n            <ion-input type=\"text\" inputmode=\"text\" [formControlName]=\"'tagline'\" [maxlength]=\"maxlength\"></ion-input>\n          </ion-item>\n          <app-show-errors [control]=\"formGroup.controls['tagline']\"></app-show-errors>\n        </div>\n      </div>\n\n      <!-- Web -->\n      <div class=\"flex-justify-content-center\">\n        <div class=\"pr col-xs-10 col-sm-8 col-lg-6\">\n          <ion-item lines=\"full\" class=\"ion-margin-vertical input-background\">\n            <ion-label appPlatformMode>{{'organization.website' | translate}}</ion-label>\n            <ion-input\n              type=\"text\"\n              inputmode=\"text\"\n              [formControlName]=\"'website'\"\n              [maxlength]=\"maxlength\"\n              placeholder=\"{{ 'organization.websitePlaceholder' | translate }}\"\n            ></ion-input>\n          </ion-item>\n          <app-show-errors [control]=\"formGroup.controls['website']\"></app-show-errors>\n        </div>\n      </div>\n\n      <!-- Description -->\n      <div class=\"flex-justify-content-center\">\n        <div class=\"pr col-xs-10 col-sm-8 col-lg-6\">\n          <ion-item lines=\"full\" class=\"ion-margin-vertical input-background\">\n            <ion-label appPlatformMode>{{'organization.description' | translate}}</ion-label>\n            <ion-textarea\n              type=\"text\"\n              inputmode=\"text\"\n              rows=\"8\"\n              [maxlength]=\"descriptionMaxlength\"\n              [formControlName]=\"'description'\"\n            ></ion-textarea>\n          </ion-item>\n          <app-show-errors [control]=\"formGroup.controls['description']\"></app-show-errors>\n        </div>\n      </div>\n\n      <!-- Number of students -->\n      <div class=\"flex-justify-content-center\">\n        <div class=\"pr col-xs-10 col-sm-8 col-lg-6\">\n          <ion-item lines=\"full\" class=\"ion-margin-vertical input-background\">\n            <ion-label appPlatformMode>{{'formFields.studentsSize' | translate}}</ion-label>\n            <ion-select\n              interface=\"action-sheet\"\n              formControlName=\"studentsSize\"\n              class=\"custom-alert\"\n              okText=\"{{ 'buttons.accept' | translate }}\"\n              cancelText=\"{{ 'buttons.cancel' | translate }}\"\n              [interfaceOptions]=\"customActionSheetStudentsSizeOptions\"\n            >\n              <ion-select-option *ngFor=\"let studentsSize of studentsSizeList\" [value]=\"studentsSize.id\">\n                {{ 'studentsSize.' + studentsSize.name | translate }}</ion-select-option\n              >\n            </ion-select>\n          </ion-item>\n          <app-show-errors [control]=\"formGroup.controls['studentsSize']\"></app-show-errors>\n        </div>\n      </div>\n\n      <!-- Number of employees -->\n      <div class=\"flex-justify-content-center\">\n        <div class=\"pr col-xs-10 col-sm-8 col-lg-6\">\n          <ion-item lines=\"full\" class=\"ion-margin-vertical input-background\">\n            <ion-label appPlatformMode>{{'formFields.employeesSize' | translate}}</ion-label>\n            <ion-select\n              interface=\"action-sheet\"\n              formControlName=\"employeesSize\"\n              class=\"custom-alert\"\n              okText=\"{{ 'buttons.accept' | translate }}\"\n              cancelText=\"{{ 'buttons.cancel' | translate }}\"\n              [interfaceOptions]=\"customActionSheetEmployeesSizeOptions\"\n            >\n              <ion-select-option *ngFor=\"let employeesSize of employeesSizeList\" [value]=\"employeesSize.id\">\n                {{ 'employeesSize.' + employeesSize.name | translate }}</ion-select-option\n              >\n            </ion-select>\n          </ion-item>\n          <app-show-errors [control]=\"formGroup.controls['employeesSize']\"></app-show-errors>\n        </div>\n      </div>\n\n      <!-- Phone -->\n      <div class=\"flex-justify-content-center\">\n        <div class=\"pr col-xs-10 col-sm-8 col-lg-6\">\n          <ion-item lines=\"full\" class=\"ion-margin-vertical input-background\">\n            <ion-label appPlatformMode>{{'organization.phone' | translate}}</ion-label>\n            <ion-input type=\"text\" inputmode=\"text\" [formControlName]=\"'phone'\"></ion-input>\n          </ion-item>\n          <app-show-errors [control]=\"formGroup.controls['phone']\"></app-show-errors>\n        </div>\n      </div>\n\n      <!-- Location -->\n      <ion-row class=\"flex-justify-content-center ion-margin ion-padding-bottom location\" *ngIf=\"hasLocation\">\n        <div\n          class=\"pr col-xs-12 col-sm-8 col-lg-6 ion-text-start flex-container-vertical ion-align-items-start location-container\"\n        >\n          <div\n            class=\"pr col-xs-12 col-sm-12 col-lg-6 ion-text-center flex-compatible ion-margin-start ion-align-items-center\"\n          >\n            <span>{{'editProfile.location' | translate}}</span>\n          </div>\n          <ion-icon name=\"pencil\" class=\"extrabig-size editIcon\" [routerLink]=\"'/select-program-location'\"></ion-icon>\n          <div class=\"pr col-xs-11 col-sm-12 flex-compatible ion-margin-start ion-align-items-center\">\n            <span color=\"grey\" class=\"regular-size ion-padding-end userLocation\">{{ organizationLocation }}</span>\n          </div>\n        </div>\n      </ion-row>\n\n      <div class=\"flex-justify-content-center ion-margin ion-padding-bottom\" *ngIf=\"!hasLocation\">\n        <div\n          class=\"pr col-xs-12 col-sm-8 col-lg-6 ion-text-center ion-margin-start flex-compatible ion-align-items-center\"\n        >\n          <div\n            class=\"pr col-xs-12 col-sm-6 col-lg-6 ion-text-center flex-compatible ion-margin-start ion-align-items-center\"\n          >\n            <span>{{'editProfile.location' | translate}}</span>\n          </div>\n          <div\n            class=\"pr col-xs-12 col-sm-6 col-lg-6 ion-text-center flex-compatible ion-margin-start ion-align-items-center\"\n          >\n            <ion-button class=\"secondary-button\" [routerLink]=\"'/select-program-location'\"\n              >{{'editProfile.select' | translate}}\n            </ion-button>\n          </div>\n        </div>\n      </div>\n\n      <app-action-button\n        class=\"ion-padding-vertical ion-margin-vertical\"\n        (actionButtonClick)=\"updateOrganization()\"\n        [buttonText]=\"'buttons.save'\"\n      ></app-action-button>\n    </div>\n  </form>\n</ion-content>\n");

/***/ }),

/***/ "./src/app/edit-organization-info/edit-academic-organization-info/edit-academic-organization-info-routing.module.ts":
/*!**************************************************************************************************************************!*\
  !*** ./src/app/edit-organization-info/edit-academic-organization-info/edit-academic-organization-info-routing.module.ts ***!
  \**************************************************************************************************************************/
/*! exports provided: EditAcademicOrganizationInfoPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditAcademicOrganizationInfoPageRoutingModule", function() { return EditAcademicOrganizationInfoPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _edit_academic_organization_info_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./edit-academic-organization-info.page */ "./src/app/edit-organization-info/edit-academic-organization-info/edit-academic-organization-info.page.ts");




var routes = [
    {
        path: '',
        component: _edit_academic_organization_info_page__WEBPACK_IMPORTED_MODULE_3__["EditAcademicOrganizationInfoPage"],
    },
];
var EditAcademicOrganizationInfoPageRoutingModule = /** @class */ (function () {
    function EditAcademicOrganizationInfoPageRoutingModule() {
    }
    EditAcademicOrganizationInfoPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], EditAcademicOrganizationInfoPageRoutingModule);
    return EditAcademicOrganizationInfoPageRoutingModule;
}());



/***/ }),

/***/ "./src/app/edit-organization-info/edit-academic-organization-info/edit-academic-organization-info.module.ts":
/*!******************************************************************************************************************!*\
  !*** ./src/app/edit-organization-info/edit-academic-organization-info/edit-academic-organization-info.module.ts ***!
  \******************************************************************************************************************/
/*! exports provided: EditAcademicOrganizationInfoPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditAcademicOrganizationInfoPageModule", function() { return EditAcademicOrganizationInfoPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _edit_academic_organization_info_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./edit-academic-organization-info-routing.module */ "./src/app/edit-organization-info/edit-academic-organization-info/edit-academic-organization-info-routing.module.ts");
/* harmony import */ var _edit_academic_organization_info_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./edit-academic-organization-info.page */ "./src/app/edit-organization-info/edit-academic-organization-info/edit-academic-organization-info.page.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../@shared/shared.module */ "./src/app/@shared/shared.module.ts");





var EditAcademicOrganizationInfoPageModule = /** @class */ (function () {
    function EditAcademicOrganizationInfoPageModule() {
    }
    EditAcademicOrganizationInfoPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"], _edit_academic_organization_info_routing_module__WEBPACK_IMPORTED_MODULE_2__["EditAcademicOrganizationInfoPageRoutingModule"]],
            declarations: [_edit_academic_organization_info_page__WEBPACK_IMPORTED_MODULE_3__["EditAcademicOrganizationInfoPage"]],
        })
    ], EditAcademicOrganizationInfoPageModule);
    return EditAcademicOrganizationInfoPageModule;
}());



/***/ }),

/***/ "./src/app/edit-organization-info/edit-academic-organization-info/edit-academic-organization-info.page.scss":
/*!******************************************************************************************************************!*\
  !*** ./src/app/edit-organization-info/edit-academic-organization-info/edit-academic-organization-info.page.scss ***!
  \******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".editIcon {\n  position: absolute;\n  right: 10px;\n  top: 4px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZWRpdC1vcmdhbml6YXRpb24taW5mby9lZGl0LWFjYWRlbWljLW9yZ2FuaXphdGlvbi1pbmZvL2VkaXQtYWNhZGVtaWMtb3JnYW5pemF0aW9uLWluZm8ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0VBQ0EsUUFBQTtBQUNGIiwiZmlsZSI6InNyYy9hcHAvZWRpdC1vcmdhbml6YXRpb24taW5mby9lZGl0LWFjYWRlbWljLW9yZ2FuaXphdGlvbi1pbmZvL2VkaXQtYWNhZGVtaWMtb3JnYW5pemF0aW9uLWluZm8ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmVkaXRJY29uIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMTBweDtcbiAgdG9wOiA0cHg7XG59XG4iXX0= */");

/***/ }),

/***/ "./src/app/edit-organization-info/edit-academic-organization-info/edit-academic-organization-info.page.ts":
/*!****************************************************************************************************************!*\
  !*** ./src/app/edit-organization-info/edit-academic-organization-info/edit-academic-organization-info.page.ts ***!
  \****************************************************************************************************************/
/*! exports provided: EditAcademicOrganizationInfoPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditAcademicOrganizationInfoPage", function() { return EditAcademicOrganizationInfoPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _shared_validators_form_custom_validators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../@shared/validators/form-custom-validators */ "./src/app/@shared/validators/form-custom-validators.ts");
/* harmony import */ var _global_constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../@global/constants */ "./src/app/@global/constants.ts");
/* harmony import */ var _edit_organization_info_base_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../edit-organization-info-base.page */ "./src/app/edit-organization-info/edit-organization-info-base.page.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngxs/store */ "./node_modules/@ngxs/store/__ivy_ngcc__/fesm2015/ngxs-store.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _core_utils_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../@core/utils.service */ "./src/app/@core/utils.service.ts");
/* harmony import */ var _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic-native/camera/ngx */ "./node_modules/@ionic-native/camera/__ivy_ngcc__/ngx/index.js");
/* harmony import */ var _core_navigation_extras_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../@core/navigation-extras.service */ "./src/app/@core/navigation-extras.service.ts");
/* harmony import */ var _core_inform_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../@core/inform.service */ "./src/app/@core/inform.service.ts");
/* harmony import */ var _store_global_info_global_info_actions__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../@store/global-info/global-info.actions */ "./src/app/@store/global-info/global-info.actions.ts");
/* harmony import */ var _store_global_info_global_info_state__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../@store/global-info/global-info.state */ "./src/app/@store/global-info/global-info.state.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
















var EditAcademicOrganizationInfoPage = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(EditAcademicOrganizationInfoPage, _super);
    function EditAcademicOrganizationInfoPage(location, router, store, utilsService, route, camera, navigationExtrasService, informService, translateService, formBuilder) {
        var _this = _super.call(this, location, router, store, utilsService, camera, informService, route, navigationExtrasService, translateService) || this;
        _this.formBuilder = formBuilder;
        _this.maxlength = _global_constants__WEBPACK_IMPORTED_MODULE_4__["Constants"].MAX_LENGTH_PROFILE;
        return _this;
    }
    EditAcademicOrganizationInfoPage.prototype.ngOnInit = function () {
        _super.prototype.ngOnInit.call(this);
        this.loadStudentsSize();
        var studentsSizeTitle = this.translateService.instant("formFields.studentsSize");
        this.customActionSheetStudentsSizeOptions = {
            header: studentsSizeTitle,
        };
    };
    EditAcademicOrganizationInfoPage.prototype.initForm = function (data) {
        var _a, _b;
        this.formGroup = this.formBuilder.group({
            organizationName: [data.complete_name, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(this.maxlength)]],
            tagline: [data.tagline, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(this.maxlength)]],
            website: [data.website, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(this.maxlength), _shared_validators_form_custom_validators__WEBPACK_IMPORTED_MODULE_3__["FormCustomValidators"].validUrl]],
            description: [data.description, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(this.descriptionMaxlength)]],
            studentsSize: [(_a = data.students_size) === null || _a === void 0 ? void 0 : _a.id],
            employeesSize: [(_b = data.employees_size) === null || _b === void 0 ? void 0 : _b.id],
            phone: [
                data.phone,
                [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern(_global_constants__WEBPACK_IMPORTED_MODULE_4__["Constants"].PHONE_PATTERN), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(_global_constants__WEBPACK_IMPORTED_MODULE_4__["Constants"].MAX_LENGTH_USERNAME_COGNITO)],
            ],
        });
    };
    EditAcademicOrganizationInfoPage.prototype.loadStudentsSize = function () {
        var _this = this;
        this.store.dispatch(new _store_global_info_global_info_actions__WEBPACK_IMPORTED_MODULE_13__["GetStudentsSizeInfo"]());
        this.studentsSizeSubscription = this.store.select(_store_global_info_global_info_state__WEBPACK_IMPORTED_MODULE_14__["GlobalInfoState"].getStudentsSize).subscribe(function (data) {
            _this.studentsSizeList = data;
        });
    };
    EditAcademicOrganizationInfoPage.prototype.getOrganizationInput = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({ complete_name: this.formGroup.get('organizationName').value || '', description: this.formGroup.get('description').value || '', tagline: this.formGroup.get('tagline').value || '', website: this.formGroup.get('website').value || '', students_size: this.formGroup.get('studentsSize').value || '', employees_size: this.formGroup.get('employeesSize').value || '', 
            // TODO photo: this.formGroup.get('organizationName').value,
            phone: this.formGroup.get('phone').value || '' }, this.locationData);
    };
    EditAcademicOrganizationInfoPage.prototype.ngOnDestroy = function () {
        _super.prototype.ngOnDestroy.call(this);
        if (this.studentsSizeSubscription) {
            this.studentsSizeSubscription.unsubscribe();
        }
    };
    EditAcademicOrganizationInfoPage.ctorParameters = function () { return [
        { type: _angular_common__WEBPACK_IMPORTED_MODULE_8__["Location"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] },
        { type: _ngxs_store__WEBPACK_IMPORTED_MODULE_7__["Store"] },
        { type: _core_utils_service__WEBPACK_IMPORTED_MODULE_9__["UtilsService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"] },
        { type: _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_10__["Camera"] },
        { type: _core_navigation_extras_service__WEBPACK_IMPORTED_MODULE_11__["NavigationExtrasService"] },
        { type: _core_inform_service__WEBPACK_IMPORTED_MODULE_12__["InformService"] },
        { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_15__["TranslateService"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] }
    ]; };
    EditAcademicOrganizationInfoPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-edit-academic-organization-info',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./edit-academic-organization-info.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/edit-organization-info/edit-academic-organization-info/edit-academic-organization-info.page.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./edit-academic-organization-info.page.scss */ "./src/app/edit-organization-info/edit-academic-organization-info/edit-academic-organization-info.page.scss")).default]
        })
    ], EditAcademicOrganizationInfoPage);
    return EditAcademicOrganizationInfoPage;
}(_edit_organization_info_base_page__WEBPACK_IMPORTED_MODULE_5__["EditOrganizationInfoBasePage"]));



/***/ })

}]);
//# sourceMappingURL=edit-organization-info-edit-academic-organization-info-edit-academic-organization-info-module.js.map