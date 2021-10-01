(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["signup-flow-education-question-education-question-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/signup-flow/education-question/education-question.page.html":
/*!*******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/signup-flow/education-question/education-question.page.html ***!
  \*******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-header [showBackButton]=\"showBackButton\" [titleImage]=\"logoPath\" (backButtonClick)=\"goBack()\"></app-header>\n\n<ion-content class=\"ion-padding background-with-dark-color\">\n  <div class=\"flex-container-vertical\">\n    <ion-row class=\"flex-item\">\n      <ion-col size=\"12\" class=\"ion-text-center\">\n        <div class=\"screen-extrabig-title\" [innerHTML]=\"'educationQuestion.title' | translate\"></div>\n      </ion-col>\n    </ion-row>\n    <ion-row class=\"flex-item ion-padding-vertical ion-margin-vertical\">\n      <ion-col size=\"12\" class=\"ion-text-center\">\n        <span class=\"small-size ion-text-center ion-margin-top\">{{ 'educationQuestion.text' | translate }}</span><br />\n      </ion-col>\n    </ion-row>\n    <ion-row class=\"flex-item ion-align-items-center w100 ion-justify-content-center ion-padding-bottom\">\n      <div class=\"col-xs-10 col-sm-6 col-lg-6 ion-text-center flex-container-vertical\">\n        <ion-button color=\"secondary\" (click)=\"saveAnswer(true)\">{{'educationQuestion.yes' | translate}}</ion-button>\n      </div>\n    </ion-row>\n    <ion-row class=\"flex-item ion-align-items-center w100 ion-justify-content-center ion-padding-bottom\">\n      <div class=\"col-xs-10 col-sm-6 col-lg-6 ion-text-center flex-container-vertical\">\n        <ion-button class=\"secondary-button\" (click)=\"saveAnswer(false)\"\n          >{{'educationQuestion.no' | translate}}</ion-button\n        >\n      </div>\n    </ion-row>\n  </div>\n</ion-content>\n");

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

/***/ "./src/app/signup-flow/education-question/education-question-routing.module.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/signup-flow/education-question/education-question-routing.module.ts ***!
  \*************************************************************************************/
/*! exports provided: EducationQuestionPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EducationQuestionPageRoutingModule", function() { return EducationQuestionPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _education_question_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./education-question.page */ "./src/app/signup-flow/education-question/education-question.page.ts");




var routes = [
    {
        path: '',
        component: _education_question_page__WEBPACK_IMPORTED_MODULE_3__["EducationQuestionPage"],
    },
];
var EducationQuestionPageRoutingModule = /** @class */ (function () {
    function EducationQuestionPageRoutingModule() {
    }
    EducationQuestionPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], EducationQuestionPageRoutingModule);
    return EducationQuestionPageRoutingModule;
}());



/***/ }),

/***/ "./src/app/signup-flow/education-question/education-question.module.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/signup-flow/education-question/education-question.module.ts ***!
  \*****************************************************************************/
/*! exports provided: EducationQuestionPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EducationQuestionPageModule", function() { return EducationQuestionPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _education_question_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./education-question-routing.module */ "./src/app/signup-flow/education-question/education-question-routing.module.ts");
/* harmony import */ var _education_question_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./education-question.page */ "./src/app/signup-flow/education-question/education-question.page.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../@shared/shared.module */ "./src/app/@shared/shared.module.ts");





var EducationQuestionPageModule = /** @class */ (function () {
    function EducationQuestionPageModule() {
    }
    EducationQuestionPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"], _education_question_routing_module__WEBPACK_IMPORTED_MODULE_2__["EducationQuestionPageRoutingModule"]],
            declarations: [_education_question_page__WEBPACK_IMPORTED_MODULE_3__["EducationQuestionPage"]],
        })
    ], EducationQuestionPageModule);
    return EducationQuestionPageModule;
}());



/***/ }),

/***/ "./src/app/signup-flow/education-question/education-question.page.scss":
/*!*****************************************************************************!*\
  !*** ./src/app/signup-flow/education-question/education-question.page.scss ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NpZ251cC1mbG93L2VkdWNhdGlvbi1xdWVzdGlvbi9lZHVjYXRpb24tcXVlc3Rpb24ucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/signup-flow/education-question/education-question.page.ts":
/*!***************************************************************************!*\
  !*** ./src/app/signup-flow/education-question/education-question.page.ts ***!
  \***************************************************************************/
/*! exports provided: EducationQuestionPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EducationQuestionPage", function() { return EducationQuestionPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _signup_base_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../signup-base.page */ "./src/app/signup-flow/signup-base.page.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngxs/store */ "./node_modules/@ngxs/store/__ivy_ngcc__/fesm2015/ngxs-store.js");
/* harmony import */ var _core_utils_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../@core/utils.service */ "./src/app/@core/utils.service.ts");
/* harmony import */ var _core_storage_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../@core/storage.service */ "./src/app/@core/storage.service.ts");
/* harmony import */ var _core_navigation_extras_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../@core/navigation-extras.service */ "./src/app/@core/navigation-extras.service.ts");
/* harmony import */ var _core_google_analytics_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../@core/google-analytics.service */ "./src/app/@core/google-analytics.service.ts");
/* harmony import */ var _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic-native/camera/ngx */ "./node_modules/@ionic-native/camera/__ivy_ngcc__/ngx/index.js");
/* harmony import */ var _core_inform_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../@core/inform.service */ "./src/app/@core/inform.service.ts");












var PAGE_POSITION = 7;
var EducationQuestionPage = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(EducationQuestionPage, _super);
    function EducationQuestionPage(router, location, store, utilsService, camera, informService, storage, navigationExtrasService, googleAnalyticsService) {
        return _super.call(this, location, router, store, utilsService, camera, informService, storage, navigationExtrasService, googleAnalyticsService) || this;
    }
    EducationQuestionPage.prototype.ngOnInit = function () {
        this.showBackButton = this.checkGoBack();
    };
    EducationQuestionPage.prototype.saveAnswer = function (answer) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.updateSignupFlowInfo(PAGE_POSITION, 'searching_education', answer)];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.finishSignupProcess(PAGE_POSITION)];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    EducationQuestionPage.prototype.ngOnDestroy = function () { };
    EducationQuestionPage.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: _angular_common__WEBPACK_IMPORTED_MODULE_4__["Location"] },
        { type: _ngxs_store__WEBPACK_IMPORTED_MODULE_5__["Store"] },
        { type: _core_utils_service__WEBPACK_IMPORTED_MODULE_6__["UtilsService"] },
        { type: _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_10__["Camera"] },
        { type: _core_inform_service__WEBPACK_IMPORTED_MODULE_11__["InformService"] },
        { type: _core_storage_service__WEBPACK_IMPORTED_MODULE_7__["StorageService"] },
        { type: _core_navigation_extras_service__WEBPACK_IMPORTED_MODULE_8__["NavigationExtrasService"] },
        { type: _core_google_analytics_service__WEBPACK_IMPORTED_MODULE_9__["GoogleAnalyticsService"] }
    ]; };
    EducationQuestionPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-education-question',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./education-question.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/signup-flow/education-question/education-question.page.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./education-question.page.scss */ "./src/app/signup-flow/education-question/education-question.page.scss")).default]
        })
    ], EducationQuestionPage);
    return EducationQuestionPage;
}(_signup_base_page__WEBPACK_IMPORTED_MODULE_2__["SignupBasePage"]));



/***/ })

}]);
//# sourceMappingURL=signup-flow-education-question-education-question-module.js.map