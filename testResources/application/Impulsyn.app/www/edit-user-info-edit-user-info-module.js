(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["edit-user-info-edit-user-info-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/edit-user-info/edit-user-info.page.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/edit-user-info/edit-user-info.page.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-header [title]=\"'editProfile.title' | translate\" [showBackButton]=\"showBackButton\" (backButtonClick)=\"goBack()\">\n</app-header>\n<ion-content class=\"ion-padding\">\n  <ion-grid *ngIf=\"formGroup && workAreaList.length > 0\" class=\"flex-container\">\n    <form [formGroup]=\"formGroup\">\n      <ion-row class=\"flex-item ion-align-items-center w100 ion-justify-content-center\">\n        <app-image-chooser [imagePath]=\"profileImage\" (actionButtonClick)=\"selectImageFrom()\"></app-image-chooser>\n      </ion-row>\n      <div class=\"flex-justify-content-center\">\n        <div class=\"pr col-xs-12 col-sm-8 col-lg-6\">\n          <ion-item lines=\"full\" class=\"ion-margin\">\n            <ion-label appPlatformMode>{{'formFields.name' | translate}}</ion-label>\n            <ion-input\n              type=\"text\"\n              inputmode=\"text\"\n              autocomplete=\"off\"\n              [formControlName]=\"'name'\"\n              [maxlength]=\"maxlengthName\"\n              required\n            ></ion-input>\n          </ion-item>\n          <app-show-errors [control]=\"formGroup.controls['name']\"></app-show-errors>\n        </div>\n      </div>\n      <div class=\"flex-justify-content-center\">\n        <div class=\"pr col-xs-12 col-sm-8 col-lg-6\">\n          <ion-item lines=\"full\" class=\"ion-margin\">\n            <ion-label appPlatformMode>{{'formFields.surname' | translate}}</ion-label>\n            <ion-input\n              type=\"text\"\n              inputmode=\"text\"\n              autocomplete=\"off\"\n              [formControlName]=\"'surname'\"\n              [maxlength]=\"maxlengthName\"\n              required\n            ></ion-input>\n          </ion-item>\n          <app-show-errors [control]=\"formGroup.controls['surname']\"></app-show-errors>\n        </div>\n      </div>\n\n      <div class=\"flex-justify-content-center\">\n        <div class=\"pr col-xs-12 col-sm-8 col-lg-6\">\n          <ion-item lines=\"full\" class=\"ion-margin\">\n            <ion-label appPlatformMode>{{'formFields.profile' | translate}}</ion-label>\n            <ion-textarea\n              type=\"text\"\n              inputmode=\"text\"\n              rows=\"2\"\n              [maxlength]=\"maxlength\"\n              [formControlName]=\"'occupation'\"\n            ></ion-textarea>\n          </ion-item>\n          <app-show-errors [control]=\"formGroup.controls['occupation']\"></app-show-errors>\n        </div>\n      </div>\n      <div class=\"flex-justify-content-center\">\n        <div class=\"pr col-xs-12 col-sm-8 col-lg-6\">\n          <ion-item lines=\"full\" class=\"ion-margin\">\n            <ion-label appPlatformMode>{{'formFields.nationality' | translate}}</ion-label>\n            <ion-input type=\"text\" inputmode=\"text\" autocomplete=\"off\" [formControlName]=\"'nationality'\"></ion-input>\n          </ion-item>\n          <app-show-errors [control]=\"formGroup.controls['nationality']\"></app-show-errors>\n        </div>\n      </div>\n      <div class=\"flex-justify-content-center\">\n        <div class=\"pr col-xs-12 col-sm-8 col-lg-6\">\n          <ion-item lines=\"full\" class=\"ion-margin\">\n            <ion-label appPlatformMode>{{'formFields.birthdate' | translate}}</ion-label>\n            <ion-datetime\n              [min]=\"getMinDate()\"\n              [max]=\"getMaxDate()\"\n              [displayFormat]=\"getDateDisplayFormat()\"\n              [pickerFormat]=\"getDatePickerFormat()\"\n              [doneText]=\"'buttons.accept' | translate\"\n              [cancelText]=\"'buttons.cancel' | translate\"\n              [formControlName]=\"'birthdate'\"\n            ></ion-datetime>\n          </ion-item>\n          <app-show-errors [control]=\"formGroup.controls['birthdate']\"></app-show-errors>\n        </div>\n      </div>\n      <!-- Work Area -->\n      <div class=\"flex-justify-content-center\">\n        <div class=\"pr col-xs-12 col-sm-8 col-lg-6\">\n          <ion-item lines=\"full\" class=\"ion-margin\">\n            <ion-label appPlatformMode>{{'formFields.workArea' | translate}}</ion-label>\n            <ion-select\n              interface=\"action-sheet\"\n              formControlName=\"work_area\"\n              class=\"custom-alert\"\n              okText=\"{{ 'buttons.accept' | translate }}\"\n              cancelText=\"{{ 'buttons.cancel' | translate }}\"\n              [interfaceOptions]=\"customActionSheetWorkAreaOptions\"\n            >\n              <ion-select-option *ngFor=\"let workArea of workAreaList\" [value]=\"workArea.id\">\n                {{ 'workArea.' + workArea.name | translate }}</ion-select-option\n              >\n            </ion-select>\n          </ion-item>\n          <app-show-errors [control]=\"formGroup.controls['work_area']\"></app-show-errors>\n        </div>\n      </div>\n      <ion-row class=\"flex-justify-content-center ion-margin ion-padding-bottom location\" *ngIf=\"hasUserLocation\">\n        <div\n          class=\"pr col-xs-12 col-sm-8 col-lg-6 ion-text-start flex-container-vertical ion-align-items-start location-container\"\n        >\n          <div\n            class=\"pr col-xs-12 col-sm-12 col-lg-6 ion-text-center flex-compatible ion-margin-start ion-align-items-center\"\n          >\n            <span>{{'editProfile.location' | translate}}</span>\n          </div>\n          <ion-icon name=\"pencil\" class=\"extrabig-size editIcon\" [routerLink]=\"'/select-location'\"></ion-icon>\n          <div class=\"pr col-xs-11 col-sm-12 flex-compatible ion-margin-start ion-align-items-center\">\n            <span color=\"grey\" class=\"regular-size ion-padding-end userLocation\">{{ userLocation }}</span>\n          </div>\n        </div>\n      </ion-row>\n      <div class=\"flex-justify-content-center ion-margin ion-padding-bottom\" *ngIf=\"!hasUserLocation\">\n        <div\n          class=\"pr col-xs-10 col-sm-8 col-lg-6 ion-text-center flex-compatible ion-margin-start ion-align-items-center\"\n        >\n          <div\n            class=\"pr col-xs-12 col-sm-6 col-lg-6 ion-text-center flex-compatible ion-margin-start ion-align-items-center\"\n          >\n            <span>{{'editProfile.location' | translate}}</span>\n          </div>\n          <div\n            class=\"pr col-xs-12 col-sm-6 col-lg-6 ion-text-center flex-compatible ion-margin-start ion-align-items-center\"\n          >\n            <ion-button class=\"secondary-button\" [routerLink]=\"'/select-location'\"\n              >{{'editProfile.select' | translate}}\n            </ion-button>\n          </div>\n        </div>\n      </div>\n      <div class=\"flex-justify-content-center ion-margin-vertical\">\n        <div\n          class=\"pr bold col-xs-12 col-sm-8 col-lg-6 ion-margin-start ion-padding-start ion-text-start flex-compatible ion-align-items-center regular-size\"\n          color=\"secondary\"\n        >\n          {{ 'editProfile.contactData' | translate }}\n          <ion-icon\n            name=\"help-circle-outline\"\n            class=\"big-size ion-margin-start\"\n            (click)=\"presentContactDataPopover($event)\"\n          >\n          </ion-icon>\n        </div>\n      </div>\n      <div class=\"flex-justify-content-center\">\n        <div class=\"pr col-xs-12 col-sm-8 col-lg-6\">\n          <ion-item lines=\"full\" class=\"ion-margin\">\n            <ion-label appPlatformMode>{{'editProfile.contactEmail' | translate}}</ion-label>\n            <ion-input type=\"email\" inputmode=\"email\" autocomplete=\"off\" [formControlName]=\"'contactEmail'\"></ion-input>\n          </ion-item>\n          <app-show-errors [control]=\"formGroup.controls['contactEmail']\"></app-show-errors>\n        </div>\n      </div>\n      <div class=\"flex-justify-content-center\">\n        <div class=\"pr col-xs-12 col-sm-8 col-lg-6\">\n          <ion-item lines=\"full\" class=\"ion-margin\">\n            <ion-label appPlatformMode>{{'editProfile.contactPhone' | translate}}</ion-label>\n            <ion-input\n              type=\"tel\"\n              inputmode=\"tel\"\n              autocomplete=\"off\"\n              [formControlName]=\"'contactPhone'\"\n              placeholder=\"{{ 'editProfile.contactPhonePlaceholder' | translate }}\"\n            ></ion-input>\n          </ion-item>\n          <app-show-errors [control]=\"formGroup.controls['contactPhone']\"></app-show-errors>\n        </div>\n      </div>\n      <div class=\"flex-justify-content-center ion-margin-vertical\">\n        <div\n          class=\"pr bold col-xs-12 col-sm-8 col-lg-6 ion-margin-start ion-padding-start ion-text-start flex-compatible ion-align-items-center regular-size\"\n          color=\"secondary\"\n        >\n          {{ 'editProfile.interests' | translate }}\n          <ion-icon\n            name=\"help-circle-outline\"\n            class=\"big-size ion-margin-start\"\n            (click)=\"presentInterestsPopover($event)\"\n          >\n          </ion-icon>\n        </div>\n      </div>\n      <div class=\"flex-justify-content-center\">\n        <div class=\"pr col-xs-12 col-sm-8 col-lg-6\">\n          <ion-item lines=\"full\" class=\"ion-margin ion-no-border\">\n            <ion-label class=\"regular-size\">{{ 'editProfile.opportunitiesQuestion' | translate }}</ion-label>\n            <ion-toggle slot=\"end\" name=\"all\" color=\"secondary\" [formControlName]=\"'searching_work'\"></ion-toggle>\n          </ion-item>\n        </div>\n      </div>\n      <div class=\"flex-justify-content-center\">\n        <div class=\"pr col-xs-12 col-sm-8 col-lg-6\">\n          <ion-item lines=\"full\" class=\"ion-margin ion-no-border\">\n            <ion-label class=\"regular-size\">{{ 'editProfile.academicQuestion' | translate }}</ion-label>\n            <ion-toggle slot=\"end\" name=\"all\" color=\"secondary\" [formControlName]=\"'searching_education'\"></ion-toggle>\n          </ion-item>\n        </div>\n      </div>\n      <!--<div class=\"flex-justify-content-center ion-margin-vertical\">\n        <div\n          class=\"bold pr col-xs-12 col-sm-8 col-lg-6 ion-margin-start ion-padding-start ion-text-start flex-compatible ion-align-items-center regular-size\"\n          color=\"secondary\"\n        >\n          {{ 'editProfile.interests' | translate }}\n        </div>\n      </div>\n      <div class=\"flex-justify-content-center ion-margin-vertical\">\n        <div\n          class=\"pr col-xs-12 col-sm-8 col-lg-6 ion-margin-start ion-padding-start ion-text-start flex-compatible ion-align-items-center\"\n        >\n          <span>{{ 'editProfile.areas' | translate }}</span>\n        </div>\n        <div\n          class=\"pr col-xs-12 col-sm-8 col-lg-6 ion-text-center flex-compatible ion-justify-content-center ion-align-items-center\"\n        >\n          <ion-button class=\"secondary-button\">{{'editProfile.select' | translate}}</ion-button>\n        </div>\n      </div>\n      <div class=\"flex-justify-content-center ion-margin-vertical\">\n        <div\n          class=\"pr col-xs-12 col-sm-8 col-lg-6 ion-margin-start ion-padding-start ion-text-start flex-compatible ion-align-items-center\"\n        >\n          <span>{{ 'editProfile.sports' | translate }}</span>\n        </div>\n        <div\n          class=\"pr col-xs-12 col-sm-8 col-lg-6 ion-text-center flex-compatible ion-justify-content-center ion-align-items-center\"\n        >\n          <ion-button class=\"secondary-button\">{{'editProfile.select' | translate}}</ion-button>\n        </div>\n      </div>-->\n\n      <app-action-button\n        class=\"ion-margin-top ion-margin-vertical\"\n        (actionButtonClick)=\"saveProfile()\"\n        [buttonText]=\"'buttons.save'\"\n      ></app-action-button>\n    </form>\n  </ion-grid>\n</ion-content>\n");

/***/ }),

/***/ "./src/app/base/profile-image-editor-base.page.ts":
/*!********************************************************!*\
  !*** ./src/app/base/profile-image-editor-base.page.ts ***!
  \********************************************************/
/*! exports provided: ProfileImageEditorBasePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileImageEditorBasePage", function() { return ProfileImageEditorBasePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _base_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./base.page */ "./src/app/base/base.page.ts");
/* harmony import */ var _global_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../@global/utils */ "./src/app/@global/utils.ts");



var ProfileImageEditorBasePage = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(ProfileImageEditorBasePage, _super);
    function ProfileImageEditorBasePage(location, router, store, utilsService, camera, informService) {
        var _this = _super.call(this, location, router, store, utilsService) || this;
        _this.camera = camera;
        _this.informService = informService;
        _this.pickImageGallery = function () {
            _this.pickImage(_this.camera.PictureSourceType.PHOTOLIBRARY);
        };
        _this.pickImageCamera = function () {
            _this.pickImage(_this.camera.PictureSourceType.CAMERA);
        };
        return _this;
    }
    ProfileImageEditorBasePage.prototype.pickImage = function (sourceType) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var imageData, _a, path, filename, file, error_1, capturedError;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _b.trys.push([0, 3, , 4]);
                        return [4 /*yield*/, this.utilsService.getMediaFromCameraPlugin(sourceType, this.camera.MediaType.PICTURE)];
                    case 1:
                        imageData = _b.sent();
                        _a = _global_utils__WEBPACK_IMPORTED_MODULE_2__["Utils"].getPathAndFilenameFromUrl(imageData.imageOriginalPath), path = _a.path, filename = _a.filename;
                        return [4 /*yield*/, this.utilsService.getFileFromSystemPath(path, filename)];
                    case 2:
                        file = _b.sent();
                        if (!_global_utils__WEBPACK_IMPORTED_MODULE_2__["Utils"].isImageMediaType(file.type)) {
                            this.informService.showWarning('createPost.wrongImageType');
                            return [2 /*return*/];
                        }
                        this.imageOriginalPath = imageData.imageOriginalPath;
                        this.profileImage = imageData.imageSource;
                        return [3 /*break*/, 4];
                    case 3:
                        error_1 = _b.sent();
                        console.error('[ProfileImageEditorBasePage pickImage] error taking a picture');
                        console.error(error_1);
                        capturedError = new Error('Error in pickImage: ' + error_1);
                        capturedError.name = '[ProfileImageEditorBasePage error]';
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    return ProfileImageEditorBasePage;
}(_base_page__WEBPACK_IMPORTED_MODULE_1__["BasePage"]));



/***/ }),

/***/ "./src/app/edit-user-info/edit-user-info-routing.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/edit-user-info/edit-user-info-routing.module.ts ***!
  \*****************************************************************/
/*! exports provided: EditUserInfoPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditUserInfoPageRoutingModule", function() { return EditUserInfoPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _edit_user_info_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./edit-user-info.page */ "./src/app/edit-user-info/edit-user-info.page.ts");




var routes = [
    {
        path: '',
        component: _edit_user_info_page__WEBPACK_IMPORTED_MODULE_3__["EditUserInfoPage"],
    },
];
var EditUserInfoPageRoutingModule = /** @class */ (function () {
    function EditUserInfoPageRoutingModule() {
    }
    EditUserInfoPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], EditUserInfoPageRoutingModule);
    return EditUserInfoPageRoutingModule;
}());



/***/ }),

/***/ "./src/app/edit-user-info/edit-user-info.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/edit-user-info/edit-user-info.module.ts ***!
  \*********************************************************/
/*! exports provided: EditUserInfoPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditUserInfoPageModule", function() { return EditUserInfoPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _edit_user_info_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./edit-user-info-routing.module */ "./src/app/edit-user-info/edit-user-info-routing.module.ts");
/* harmony import */ var _edit_user_info_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./edit-user-info.page */ "./src/app/edit-user-info/edit-user-info.page.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../@shared/shared.module */ "./src/app/@shared/shared.module.ts");





var EditUserInfoPageModule = /** @class */ (function () {
    function EditUserInfoPageModule() {
    }
    EditUserInfoPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"], _edit_user_info_routing_module__WEBPACK_IMPORTED_MODULE_2__["EditUserInfoPageRoutingModule"]],
            declarations: [_edit_user_info_page__WEBPACK_IMPORTED_MODULE_3__["EditUserInfoPage"]],
        })
    ], EditUserInfoPageModule);
    return EditUserInfoPageModule;
}());



/***/ }),

/***/ "./src/app/edit-user-info/edit-user-info.page.scss":
/*!*********************************************************!*\
  !*** ./src/app/edit-user-info/edit-user-info.page.scss ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".userLocation {\n  word-break: break-word;\n  display: -webkit-box;\n  -webkit-line-clamp: 2;\n  -webkit-box-orient: vertical;\n}\n\n.location-container {\n  z-index: 1;\n}\n\n.location-container ion-icon {\n  z-index: 2;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZWRpdC11c2VyLWluZm8vZWRpdC11c2VyLWluZm8ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usc0JBQUE7RUFDQSxvQkFBQTtFQUNBLHFCQUFBO0VBQ0EsNEJBQUE7QUFDRjs7QUFFQTtFQUNFLFVBQUE7QUFDRjs7QUFDRTtFQUNFLFVBQUE7QUFDSiIsImZpbGUiOiJzcmMvYXBwL2VkaXQtdXNlci1pbmZvL2VkaXQtdXNlci1pbmZvLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi51c2VyTG9jYXRpb24ge1xuICB3b3JkLWJyZWFrOiBicmVhay13b3JkO1xuICBkaXNwbGF5OiAtd2Via2l0LWJveDtcbiAgLXdlYmtpdC1saW5lLWNsYW1wOiAyO1xuICAtd2Via2l0LWJveC1vcmllbnQ6IHZlcnRpY2FsO1xufVxuXG4ubG9jYXRpb24tY29udGFpbmVyIHtcbiAgei1pbmRleDogMTtcblxuICBpb24taWNvbiB7XG4gICAgei1pbmRleDogMjtcbiAgfVxufVxuIl19 */");

/***/ }),

/***/ "./src/app/edit-user-info/edit-user-info.page.ts":
/*!*******************************************************!*\
  !*** ./src/app/edit-user-info/edit-user-info.page.ts ***!
  \*******************************************************/
/*! exports provided: EditUserInfoPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditUserInfoPage", function() { return EditUserInfoPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngxs/store */ "./node_modules/@ngxs/store/__ivy_ngcc__/fesm2015/ngxs-store.js");
/* harmony import */ var _core_utils_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../@core/utils.service */ "./src/app/@core/utils.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _global_constants__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../@global/constants */ "./src/app/@global/constants.ts");
/* harmony import */ var _shared_validators_form_custom_validators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../@shared/validators/form-custom-validators */ "./src/app/@shared/validators/form-custom-validators.ts");
/* harmony import */ var _global_utils__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../@global/utils */ "./src/app/@global/utils.ts");
/* harmony import */ var _store_user_user_state__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../@store/user/user.state */ "./src/app/@store/user/user.state.ts");
/* harmony import */ var _store_user_user_actions__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../@store/user/user.actions */ "./src/app/@store/user/user.actions.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _shared_components_info_popover_info_popover_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../@shared/components/info-popover/info-popover.component */ "./src/app/@shared/components/info-popover/info-popover.component.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @ionic-native/camera/ngx */ "./node_modules/@ionic-native/camera/__ivy_ngcc__/ngx/index.js");
/* harmony import */ var _core_inform_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../@core/inform.service */ "./src/app/@core/inform.service.ts");
/* harmony import */ var _base_profile_image_editor_base_page__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../base/profile-image-editor-base.page */ "./src/app/base/profile-image-editor-base.page.ts");
/* harmony import */ var _store_global_info_global_info_state__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../@store/global-info/global-info.state */ "./src/app/@store/global-info/global-info.state.ts");
/* harmony import */ var _store_global_info_global_info_actions__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../@store/global-info/global-info.actions */ "./src/app/@store/global-info/global-info.actions.ts");





















var EditUserInfoPage = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(EditUserInfoPage, _super);
    function EditUserInfoPage(router, location, store, utilsService, camera, informService, formBuilder, popoverController, translateService, platform) {
        var _this = _super.call(this, location, router, store, utilsService, camera, informService) || this;
        _this.formBuilder = formBuilder;
        _this.popoverController = popoverController;
        _this.translateService = translateService;
        _this.platform = platform;
        _this.maxlength = _global_constants__WEBPACK_IMPORTED_MODULE_7__["Constants"].MAX_LENGTH_PROFILE;
        _this.maxlengthName = _global_constants__WEBPACK_IMPORTED_MODULE_7__["Constants"].MAX_LENGTH_NAME_COGNITO;
        return _this;
    }
    EditUserInfoPage.prototype.ngOnInit = function () {
        this.subscribeToUserInfo();
        this.store.dispatch(new _store_global_info_global_info_actions__WEBPACK_IMPORTED_MODULE_20__["GetWorkAreaInfo"]());
        this.subscribeToWorkAreaInfo();
        this.initForm();
        var workAreaTitle = this.translateService.instant("formFields.workArea");
        this.customActionSheetWorkAreaOptions = {
            header: workAreaTitle,
        };
    };
    EditUserInfoPage.prototype.initForm = function () {
        this.formGroup = this.formBuilder.group({
            name: [
                this.userInfo.name,
                [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].maxLength(this.maxlengthName),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required,
                    _shared_validators_form_custom_validators__WEBPACK_IMPORTED_MODULE_8__["FormCustomValidators"].notAllowedEmojis,
                    _shared_validators_form_custom_validators__WEBPACK_IMPORTED_MODULE_8__["FormCustomValidators"].notAllowedNumbers,
                ],
            ],
            surname: [
                this.userInfo.surname,
                [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].maxLength(this.maxlengthName),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required,
                    _shared_validators_form_custom_validators__WEBPACK_IMPORTED_MODULE_8__["FormCustomValidators"].notAllowedEmojis,
                    _shared_validators_form_custom_validators__WEBPACK_IMPORTED_MODULE_8__["FormCustomValidators"].notAllowedNumbers,
                ],
            ],
            occupation: [
                this.userInfo.occupation,
                [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].maxLength(this.maxlength), _shared_validators_form_custom_validators__WEBPACK_IMPORTED_MODULE_8__["FormCustomValidators"].notAllowedEmojis],
            ],
            nationality: [
                this.userInfo.nationality,
                [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].maxLength(this.maxlength), _shared_validators_form_custom_validators__WEBPACK_IMPORTED_MODULE_8__["FormCustomValidators"].notAllowedEmojis],
            ],
            birthdate: [
                this.userInfo.birthdate,
                [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].maxLength(this.maxlength), _shared_validators_form_custom_validators__WEBPACK_IMPORTED_MODULE_8__["FormCustomValidators"].notAllowedEmojis],
            ],
            work_area: [this.workAreaId, []],
            contactEmail: [
                this.userInfo.contact_email,
                [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].email, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].maxLength(_global_constants__WEBPACK_IMPORTED_MODULE_7__["Constants"].MAX_LENGTH_USERNAME_COGNITO)],
            ],
            contactPhone: [this.userInfo.contact_phone, [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].maxLength(_global_constants__WEBPACK_IMPORTED_MODULE_7__["Constants"].MAX_LENGTH_USERNAME_COGNITO)]],
            searching_education: [this.userInfo.searching_education],
            searching_work: [this.userInfo.searching_work],
        });
    };
    EditUserInfoPage.prototype.subscribeToUserInfo = function () {
        var _this = this;
        this.getUserInfoSubscription$ = this.store.select(_store_user_user_state__WEBPACK_IMPORTED_MODULE_10__["UserState"].getUserInfo).subscribe(function (data) {
            var _a, _b;
            _this.userInfo = _global_utils__WEBPACK_IMPORTED_MODULE_9__["Utils"].copyObject(data);
            _this.workAreaId = ((_a = _this.userInfo.work_area) === null || _a === void 0 ? void 0 : _a.id) || '';
            _this.profileImage = (_b = _this.userInfo) === null || _b === void 0 ? void 0 : _b.photo;
            _this.hasUserLocation = !!_this.userInfo.country;
            if (_this.hasUserLocation) {
                _this.userLocation = _global_utils__WEBPACK_IMPORTED_MODULE_9__["Utils"].generateUserFriendlyLocation(_this.userInfo.country, _this.userInfo.region, _this.userInfo.city, _this.userInfo.province, _this.userInfo.region_name);
            }
        });
    };
    EditUserInfoPage.prototype.subscribeToWorkAreaInfo = function () {
        var _this = this;
        this.workAreaSubscription = this.store.select(_store_global_info_global_info_state__WEBPACK_IMPORTED_MODULE_19__["GlobalInfoState"].getWorkArea).subscribe(function (data) {
            _this.workAreaList = data;
        });
    };
    EditUserInfoPage.prototype.saveProfile = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var currentUploadedPhotoKey, data, error_1;
            var _this = this;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!this.utilsService.isValidForm(this.formGroup)) {
                            return [2 /*return*/];
                        }
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 5, , 6]);
                        if (!(this.platform.is('cordova') && this.imageOriginalPath)) return [3 /*break*/, 3];
                        return [4 /*yield*/, this.uploadImageToBucket()];
                    case 2:
                        _a.sent();
                        _a.label = 3;
                    case 3:
                        currentUploadedPhotoKey = this.store.selectSnapshot(_store_user_user_state__WEBPACK_IMPORTED_MODULE_10__["UserState"].getcurrentUploadedPhotoKey);
                        return [4 /*yield*/, this.utilsService.getUserDataToSend(this.formGroup, currentUploadedPhotoKey, this.formGroup.get('work_area').value)];
                    case 4:
                        data = (_a.sent());
                        this.store
                            .dispatch(new _store_user_user_actions__WEBPACK_IMPORTED_MODULE_11__["SetUserInfo"]({ userInfo: data }))
                            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_12__["take"])(1))
                            .subscribe(function () {
                            _this.goBack();
                        }, function (error) {
                            console.log(error);
                        });
                        return [3 /*break*/, 6];
                    case 5:
                        error_1 = _a.sent();
                        console.error('[EditUserInfo] saveProfile');
                        console.error(error_1);
                        return [3 /*break*/, 6];
                    case 6: return [2 /*return*/];
                }
            });
        });
    };
    EditUserInfoPage.prototype.getMinDate = function () {
        return _global_utils__WEBPACK_IMPORTED_MODULE_9__["Utils"].getInitdate(100);
    };
    EditUserInfoPage.prototype.getMaxDate = function () {
        return _global_utils__WEBPACK_IMPORTED_MODULE_9__["Utils"].getInitdate(16);
    };
    EditUserInfoPage.prototype.getDateDisplayFormat = function () {
        return _global_constants__WEBPACK_IMPORTED_MODULE_7__["Constants"].DATE_DISPLAY_FORMAT;
    };
    EditUserInfoPage.prototype.getDatePickerFormat = function () {
        return _global_constants__WEBPACK_IMPORTED_MODULE_7__["Constants"].DATE_PICKER_FORMAT;
    };
    EditUserInfoPage.prototype.presentContactDataPopover = function ($event) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.presentPopover($event, this.translateService.instant("editProfile.contactInfoMessage"))];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    EditUserInfoPage.prototype.presentInterestsPopover = function ($event) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.presentPopover($event, this.translateService.instant("editProfile.interestsMessage"))];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    EditUserInfoPage.prototype.presentPopover = function ($event, text) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var popover;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.popoverController.create({
                            event: $event,
                            component: _shared_components_info_popover_info_popover_component__WEBPACK_IMPORTED_MODULE_13__["InfoPopoverComponent"],
                            cssClass: 'custom-alert',
                            translucent: true,
                            componentProps: { text: text },
                        })];
                    case 1:
                        popover = _a.sent();
                        return [4 /*yield*/, popover.present()];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    EditUserInfoPage.prototype.selectImageFrom = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var buttons;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        buttons = [
                            { text: 'cameraOptions.gallery', handler: this.pickImageGallery },
                            { text: 'cameraOptions.camera', handler: this.pickImageCamera },
                            { text: 'buttons.cancel' },
                        ];
                        return [4 /*yield*/, this.utilsService.showActionSheet('cameraOptions.actionSheetTitle', buttons)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    EditUserInfoPage.prototype.uploadImageToBucket = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var _a, path, filename, file, filenameToUpload;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = _global_utils__WEBPACK_IMPORTED_MODULE_9__["Utils"].getPathAndFilenameFromUrl(this.imageOriginalPath), path = _a.path, filename = _a.filename;
                        return [4 /*yield*/, this.utilsService.getFileFromSystemPath(path, filename)];
                    case 1:
                        file = _b.sent();
                        filenameToUpload = _global_constants__WEBPACK_IMPORTED_MODULE_7__["Constants"].PROFILE_FOLDER + '/' + _global_utils__WEBPACK_IMPORTED_MODULE_9__["Utils"].generateFileUniqueName(file);
                        if (!_global_utils__WEBPACK_IMPORTED_MODULE_9__["Utils"].isMediaValidSize(file)) {
                            this.informService.showWarning('createPost.invalidFileSize');
                            throw new Error('invalidFileSize');
                        }
                        return [4 /*yield*/, this.store
                                .dispatch(new _store_user_user_actions__WEBPACK_IMPORTED_MODULE_11__["UploadProfileImage"]({ filename: filenameToUpload, file: file, type: file.type }))
                                .toPromise()];
                    case 2:
                        _b.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    EditUserInfoPage.prototype.ngOnDestroy = function () {
        this.disconnectObservers();
    };
    EditUserInfoPage.prototype.disconnectObservers = function () {
        if (this.getUserInfoSubscription$) {
            this.getUserInfoSubscription$.unsubscribe();
        }
        if (this.workAreaSubscription) {
            this.workAreaSubscription.unsubscribe();
        }
    };
    EditUserInfoPage.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"] },
        { type: _ngxs_store__WEBPACK_IMPORTED_MODULE_4__["Store"] },
        { type: _core_utils_service__WEBPACK_IMPORTED_MODULE_5__["UtilsService"] },
        { type: _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_16__["Camera"] },
        { type: _core_inform_service__WEBPACK_IMPORTED_MODULE_17__["InformService"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_15__["PopoverController"] },
        { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_14__["TranslateService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_15__["Platform"] }
    ]; };
    EditUserInfoPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-edit-user-info',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./edit-user-info.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/edit-user-info/edit-user-info.page.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./edit-user-info.page.scss */ "./src/app/edit-user-info/edit-user-info.page.scss")).default]
        })
    ], EditUserInfoPage);
    return EditUserInfoPage;
}(_base_profile_image_editor_base_page__WEBPACK_IMPORTED_MODULE_18__["ProfileImageEditorBasePage"]));



/***/ })

}]);
//# sourceMappingURL=edit-user-info-edit-user-info-module.js.map