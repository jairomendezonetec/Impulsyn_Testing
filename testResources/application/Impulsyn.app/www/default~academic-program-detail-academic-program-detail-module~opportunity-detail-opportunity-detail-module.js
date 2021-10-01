(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~academic-program-detail-academic-program-detail-module~opportunity-detail-opportunity-detail-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/@shared/components/request-message-modal/request-message-modal.component.html":
/*!*************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/@shared/components/request-message-modal/request-message-modal.component.html ***!
  \*************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-header\n  [showBackButton]=\"true\"\n  [title]=\"isAcademic ? 'requestModal.titleProgram' : 'requestModal.titleOpportunity'\"\n  (backButtonClick)=\"goBack()\"\n></app-header>\n<ion-content>\n  <ion-grid class=\"flex-container\">\n    <form [formGroup]=\"formGroup\">\n      <div class=\"flex-justify-content-center\">\n        <div class=\"pr col-xs-12 col-sm-8 col-lg-6\">\n          <ion-item lines=\"none\" class=\"ion-margin ion-text-center\">\n            <span>{{ 'requestModal.infoText' | translate }}</span>\n          </ion-item>\n        </div>\n      </div>\n      <div class=\"flex-justify-content-center\">\n        <div class=\"pr col-xs-12 col-sm-8 col-lg-6\">\n          <ion-item lines=\"full\" class=\"ion-margin\">\n            <ion-label appPlatformMode>{{ 'formFields.name' | translate }}</ion-label>\n            <ion-input\n              type=\"text\"\n              inputmode=\"text\"\n              autocomplete=\"off\"\n              [formControlName]=\"'name'\"\n              [maxlength]=\"maxlengthName\"\n              required\n            ></ion-input>\n          </ion-item>\n          <app-show-errors [control]=\"formGroup.controls['name']\"></app-show-errors>\n        </div>\n      </div>\n      <div class=\"flex-justify-content-center\">\n        <div class=\"pr col-xs-12 col-sm-8 col-lg-6\">\n          <ion-item lines=\"full\" class=\"ion-margin\">\n            <ion-label appPlatformMode>{{ 'formFields.surname' | translate }}</ion-label>\n            <ion-input\n              type=\"text\"\n              inputmode=\"text\"\n              autocomplete=\"off\"\n              [formControlName]=\"'surname'\"\n              [maxlength]=\"maxlengthName\"\n              required\n            ></ion-input>\n          </ion-item>\n          <app-show-errors [control]=\"formGroup.controls['surname']\"></app-show-errors>\n        </div>\n      </div>\n      <div class=\"flex-justify-content-center\">\n        <div class=\"pr col-xs-12 col-sm-8 col-lg-6\">\n          <ion-item lines=\"full\" class=\"ion-margin\">\n            <ion-label appPlatformMode>{{ 'editProfile.contactEmail' | translate }}</ion-label>\n            <ion-input type=\"email\" inputmode=\"email\" autocomplete=\"off\" [formControlName]=\"'contactEmail'\"></ion-input>\n          </ion-item>\n          <app-show-errors [control]=\"formGroup.controls['contactEmail']\"></app-show-errors>\n        </div>\n      </div>\n      <div class=\"flex-justify-content-center\">\n        <div class=\"pr col-xs-12 col-sm-8 col-lg-6\">\n          <ion-item lines=\"full\" class=\"ion-margin\">\n            <ion-label appPlatformMode>{{ 'editProfile.contactPhone' | translate }}</ion-label>\n            <ion-input\n              type=\"tel\"\n              inputmode=\"tel\"\n              autocomplete=\"off\"\n              placeholder=\"{{ 'editProfile.contactPhonePlaceholder' | translate }}\"\n              [formControlName]=\"'contactPhone'\"\n            >\n            </ion-input>\n          </ion-item>\n          <app-show-errors [control]=\"formGroup.controls['contactPhone']\"></app-show-errors>\n        </div>\n      </div>\n      <div *ngIf=\"!isAcademic\" class=\"flex-justify-content-center\">\n        <div class=\"pr col-xs-10 col-sm-8 col-lg-6\">\n          <ion-button class=\"secondary-button with-icon-end\" (click)=\"selectPDF()\">\n            {{ 'requestModal.selectResume' | translate }}\n            <ion-icon name=\"cloud-upload-outline\" color=\"secondary\"></ion-icon>\n          </ion-button>\n          <span *ngIf=\"resume\" color=\"grey\">{{ resume.name }}</span>\n        </div>\n      </div>\n      <div class=\"flex-justify-content-center\">\n        <div class=\"pr col-xs-12 col-sm-8 col-lg-6\">\n          <ion-item lines=\"full\" class=\"ion-margin-horizontal\">\n            <ion-label appPlatformMode>{{ 'formFields.message' | translate }}</ion-label>\n            <ion-textarea\n              type=\"text\"\n              inputmode=\"text\"\n              rows=\"8\"\n              [maxlength]=\"maxDescriptionSize\"\n              [formControlName]=\"'message'\"\n            ></ion-textarea>\n          </ion-item>\n        </div>\n      </div>\n    </form>\n  </ion-grid>\n</ion-content>\n<ion-footer class=\"ion-no-border\">\n  <ion-toolbar>\n    <app-action-button\n      class=\"ion-margin-top ion-padding-vertical\"\n      (actionButtonClick)=\"send()\"\n      [buttonText]=\"isAcademic ? 'requestModal.buttonProgram' : 'requestModal.buttonOpportunity'\"\n    ></app-action-button>\n  </ion-toolbar>\n</ion-footer>\n");

/***/ }),

/***/ "./src/app/@shared/components/request-message-modal/request-message-modal.component.scss":
/*!***********************************************************************************************!*\
  !*** ./src/app/@shared/components/request-message-modal/request-message-modal.component.scss ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL0BzaGFyZWQvY29tcG9uZW50cy9yZXF1ZXN0LW1lc3NhZ2UtbW9kYWwvcmVxdWVzdC1tZXNzYWdlLW1vZGFsLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/@shared/components/request-message-modal/request-message-modal.component.ts":
/*!*********************************************************************************************!*\
  !*** ./src/app/@shared/components/request-message-modal/request-message-modal.component.ts ***!
  \*********************************************************************************************/
/*! exports provided: RequestMessageModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RequestMessageModalComponent", function() { return RequestMessageModalComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngxs/store */ "./node_modules/@ngxs/store/__ivy_ngcc__/fesm2015/ngxs-store.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _store_user_user_state__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../@store/user/user.state */ "./src/app/@store/user/user.state.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _global_constants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../@global/constants */ "./src/app/@global/constants.ts");
/* harmony import */ var _validators_form_custom_validators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../validators/form-custom-validators */ "./src/app/@shared/validators/form-custom-validators.ts");
/* harmony import */ var _core_utils_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../@core/utils.service */ "./src/app/@core/utils.service.ts");
/* harmony import */ var _core_inform_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../@core/inform.service */ "./src/app/@core/inform.service.ts");










var RequestMessageModalComponent = /** @class */ (function () {
    function RequestMessageModalComponent(store, formBuilder, modalController, informService, utilsService) {
        this.store = store;
        this.formBuilder = formBuilder;
        this.modalController = modalController;
        this.informService = informService;
        this.utilsService = utilsService;
        this.isAcademic = false;
        this.maxDescriptionSize = _global_constants__WEBPACK_IMPORTED_MODULE_6__["Constants"].MAX_PUBLICATION_DESCRIPTION_SIZE;
        this.maxlengthName = _global_constants__WEBPACK_IMPORTED_MODULE_6__["Constants"].MAX_LENGTH_NAME_COGNITO;
    }
    RequestMessageModalComponent.prototype.ngOnInit = function () {
        if (this.type === 'academic') {
            this.isAcademic = true;
        }
        this.userInfo = this.store.selectSnapshot(_store_user_user_state__WEBPACK_IMPORTED_MODULE_4__["UserState"].getUserInfo);
        this.formGroup = this.formBuilder.group({
            name: [
                this.userInfo.name,
                [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].maxLength(this.maxlengthName),
                    _validators_form_custom_validators__WEBPACK_IMPORTED_MODULE_7__["FormCustomValidators"].notAllowedEmojis,
                    _validators_form_custom_validators__WEBPACK_IMPORTED_MODULE_7__["FormCustomValidators"].notAllowedNumbers,
                ],
            ],
            surname: [
                this.userInfo.surname,
                [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].maxLength(this.maxlengthName),
                    _validators_form_custom_validators__WEBPACK_IMPORTED_MODULE_7__["FormCustomValidators"].notAllowedEmojis,
                    _validators_form_custom_validators__WEBPACK_IMPORTED_MODULE_7__["FormCustomValidators"].notAllowedNumbers,
                ],
            ],
            message: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].maxLength(this.maxDescriptionSize)]],
            contactEmail: [
                this.userInfo.contact_email || '',
                [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].email, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].maxLength(_global_constants__WEBPACK_IMPORTED_MODULE_6__["Constants"].MAX_LENGTH_USERNAME_COGNITO)],
            ],
            contactPhone: [this.userInfo.contact_phone || '', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].maxLength(_global_constants__WEBPACK_IMPORTED_MODULE_6__["Constants"].MAX_LENGTH_USERNAME_COGNITO)]],
        });
    };
    RequestMessageModalComponent.prototype.goBack = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.modalController.dismiss()];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    RequestMessageModalComponent.prototype.send = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!this.utilsService.isValidForm(this.formGroup)) {
                            return [2 /*return*/];
                        }
                        if (this.formGroup.get('contactEmail').value.trim() === '' &&
                            this.formGroup.get('contactPhone').value.trim() === '') {
                            this.informService.showWarning('requestModal.warning');
                            return [2 /*return*/];
                        }
                        return [4 /*yield*/, this.modalController.dismiss({
                                name: this.formGroup.get('name').value,
                                surname: this.formGroup.get('surname').value,
                                message: this.formGroup.get('message').value,
                                contactEmail: this.formGroup.get('contactEmail').value,
                                contactPhone: this.formGroup.get('contactPhone').value,
                                resume: this.isAcademic ? null : this.resume,
                            })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    RequestMessageModalComponent.prototype.selectPDF = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var _a, error_1;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _b.trys.push([0, 2, , 3]);
                        _a = this;
                        return [4 /*yield*/, this.utilsService.selectPDF()];
                    case 1:
                        _a.resume = _b.sent();
                        return [3 /*break*/, 3];
                    case 2:
                        error_1 = _b.sent();
                        throw new Error(error_1);
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    RequestMessageModalComponent.ctorParameters = function () { return [
        { type: _ngxs_store__WEBPACK_IMPORTED_MODULE_2__["Store"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"] },
        { type: _core_inform_service__WEBPACK_IMPORTED_MODULE_9__["InformService"] },
        { type: _core_utils_service__WEBPACK_IMPORTED_MODULE_8__["UtilsService"] }
    ]; };
    RequestMessageModalComponent.propDecorators = {
        type: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }]
    };
    RequestMessageModalComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-request-message-modal',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./request-message-modal.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/@shared/components/request-message-modal/request-message-modal.component.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./request-message-modal.component.scss */ "./src/app/@shared/components/request-message-modal/request-message-modal.component.scss")).default]
        })
    ], RequestMessageModalComponent);
    return RequestMessageModalComponent;
}());



/***/ }),

/***/ "./src/app/@shared/components/request-message-modal/request-message-modal.module.ts":
/*!******************************************************************************************!*\
  !*** ./src/app/@shared/components/request-message-modal/request-message-modal.module.ts ***!
  \******************************************************************************************/
/*! exports provided: RequestMessageModalModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RequestMessageModalModule", function() { return RequestMessageModalModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
/* harmony import */ var _request_message_modal_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./request-message-modal.component */ "./src/app/@shared/components/request-message-modal/request-message-modal.component.ts");
/* harmony import */ var _shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared.module */ "./src/app/@shared/shared.module.ts");





var RequestMessageModalModule = /** @class */ (function () {
    function RequestMessageModalModule() {
    }
    RequestMessageModalModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_request_message_modal_component__WEBPACK_IMPORTED_MODULE_3__["RequestMessageModalComponent"]],
            imports: [_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateModule"].forChild()],
            exports: [_request_message_modal_component__WEBPACK_IMPORTED_MODULE_3__["RequestMessageModalComponent"]],
        })
    ], RequestMessageModalModule);
    return RequestMessageModalModule;
}());



/***/ })

}]);
//# sourceMappingURL=default~academic-program-detail-academic-program-detail-module~opportunity-detail-opportunity-detail-module.js.map