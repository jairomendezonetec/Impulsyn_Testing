(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~edit-organization-info-edit-academic-organization-info-edit-academic-organization-info-modul~1d96c2e0"],{

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

/***/ "./src/app/edit-organization-info/edit-organization-info-base.page.ts":
/*!****************************************************************************!*\
  !*** ./src/app/edit-organization-info/edit-organization-info-base.page.ts ***!
  \****************************************************************************/
/*! exports provided: EditOrganizationInfoBasePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditOrganizationInfoBasePage", function() { return EditOrganizationInfoBasePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngxs/store */ "./node_modules/@ngxs/store/__ivy_ngcc__/fesm2015/ngxs-store.js");
/* harmony import */ var _core_utils_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../@core/utils.service */ "./src/app/@core/utils.service.ts");
/* harmony import */ var _store_profiles_profiles_state__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../@store/profiles/profiles.state */ "./src/app/@store/profiles/profiles.state.ts");
/* harmony import */ var _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic-native/camera/ngx */ "./node_modules/@ionic-native/camera/__ivy_ngcc__/ngx/index.js");
/* harmony import */ var _store_pages_pages_actions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../@store/pages/pages.actions */ "./src/app/@store/pages/pages.actions.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _global_utils__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../@global/utils */ "./src/app/@global/utils.ts");
/* harmony import */ var _core_navigation_extras_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../@core/navigation-extras.service */ "./src/app/@core/navigation-extras.service.ts");
/* harmony import */ var _global_constants__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../@global/constants */ "./src/app/@global/constants.ts");
/* harmony import */ var _core_inform_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../@core/inform.service */ "./src/app/@core/inform.service.ts");
/* harmony import */ var _store_pages_pages_state__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../@store/pages/pages.state */ "./src/app/@store/pages/pages.state.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _base_profile_image_editor_base_page__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../base/profile-image-editor-base.page */ "./src/app/base/profile-image-editor-base.page.ts");
/* harmony import */ var _store_global_info_global_info_actions__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../@store/global-info/global-info.actions */ "./src/app/@store/global-info/global-info.actions.ts");
/* harmony import */ var _store_global_info_global_info_state__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../@store/global-info/global-info.state */ "./src/app/@store/global-info/global-info.state.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");



















var EditOrganizationInfoBasePage = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(EditOrganizationInfoBasePage, _super);
    function EditOrganizationInfoBasePage(location, router, store, utilsService, camera, informService, route, navigationExtrasService, translateService) {
        var _this = _super.call(this, location, router, store, utilsService, camera, informService) || this;
        _this.route = route;
        _this.navigationExtrasService = navigationExtrasService;
        _this.translateService = translateService;
        _this.descriptionMaxlength = _global_constants__WEBPACK_IMPORTED_MODULE_11__["Constants"].MAX_PUBLICATION_DESCRIPTION_SIZE;
        return _this;
    }
    EditOrganizationInfoBasePage.prototype.ngOnInit = function () {
        this.profileId = this.route.snapshot.params['profileId'];
        this.subscribeToOrganizationInfo();
        this.loadEmployeesSize();
        var employeesSizeTitle = this.translateService.instant("formFields.employeesSize");
        this.customActionSheetEmployeesSizeOptions = {
            header: employeesSizeTitle,
        };
    };
    EditOrganizationInfoBasePage.prototype.doIonViewWillEnter = function () {
        this.setLocationData();
    };
    EditOrganizationInfoBasePage.prototype.updateOrganization = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var input, error_1;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!this.utilsService.isValidForm(this.formGroup)) {
                            return [2 /*return*/];
                        }
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 5, , 6]);
                        input = this.getOrganizationInput();
                        if (!this.imageOriginalPath) return [3 /*break*/, 3];
                        return [4 /*yield*/, this.uploadImageToBucket()];
                    case 2:
                        _a.sent();
                        input['photo'] = this.store.selectSnapshot(_store_pages_pages_state__WEBPACK_IMPORTED_MODULE_13__["PagesState"].getCurrentPageData).photo;
                        _a.label = 3;
                    case 3: return [4 /*yield*/, this.updatePage(input)];
                    case 4:
                        _a.sent();
                        this.clearUpdatePageData();
                        this.goBack();
                        return [3 /*break*/, 6];
                    case 5:
                        error_1 = _a.sent();
                        console.log(error_1);
                        return [3 /*break*/, 6];
                    case 6: return [2 /*return*/];
                }
            });
        });
    };
    EditOrganizationInfoBasePage.prototype.updatePage = function (input) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.store
                            .dispatch(new _store_pages_pages_actions__WEBPACK_IMPORTED_MODULE_7__["UpdatePage"]({ id: this.profileId, input: input }))
                            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["take"])(1))
                            .toPromise()];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    EditOrganizationInfoBasePage.prototype.clearUpdatePageData = function () {
        this.store.dispatch(new _store_pages_pages_actions__WEBPACK_IMPORTED_MODULE_7__["SetCurrentPageData"](null));
        this.imageOriginalPath = null;
    };
    EditOrganizationInfoBasePage.prototype.setLocationData = function () {
        var _a, _b, _c;
        var location;
        if (this.navigationExtrasService.getExtras() && this.navigationExtrasService.getExtras().location) {
            location = this.navigationExtrasService.getExtras().location;
        }
        else {
            var organizationData = this.store.selectSnapshot(_store_profiles_profiles_state__WEBPACK_IMPORTED_MODULE_5__["ProfilesState"].getOrganizationInfo);
            location = {
                country: organizationData.country,
                region: organizationData.region,
                city: organizationData.city,
                province: organizationData.province,
                region_name: organizationData.region_name,
            };
        }
        this.hasLocation = !!location.country;
        if (this.hasLocation) {
            this.organizationLocation = _global_utils__WEBPACK_IMPORTED_MODULE_9__["Utils"].generateUserFriendlyLocation(location.country, location.region, location.city, location.province, location.region_name);
            this.locationData = {
                country: (_a = location.country) === null || _a === void 0 ? void 0 : _a.id,
                region: (_b = location.region) === null || _b === void 0 ? void 0 : _b.id,
                province: (_c = location.province) === null || _c === void 0 ? void 0 : _c.id,
                city: location.city,
                region_name: location.region_name,
            };
        }
        else {
            this.locationData = {
                country: '',
                region: '',
                province: '',
                city: '',
                region_name: '',
            };
        }
        this.navigationExtrasService.setExtras(null);
    };
    EditOrganizationInfoBasePage.prototype.selectImageFrom = function () {
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
    EditOrganizationInfoBasePage.prototype.subscribeToOrganizationInfo = function () {
        var _this = this;
        this.organizationInfo$ = this.store
            .select(_store_profiles_profiles_state__WEBPACK_IMPORTED_MODULE_5__["ProfilesState"].getOrganizationInfo)
            .subscribe(function (data) {
            _this.organizationData = data;
            _this.profileImage = _this.organizationData.photo;
            _this.initForm(_this.organizationData);
        });
    };
    EditOrganizationInfoBasePage.prototype.loadEmployeesSize = function () {
        var _this = this;
        this.store.dispatch(new _store_global_info_global_info_actions__WEBPACK_IMPORTED_MODULE_16__["GetEmployeesSizeInfo"]());
        this.employeesSizeSubscription = this.store.select(_store_global_info_global_info_state__WEBPACK_IMPORTED_MODULE_17__["GlobalInfoState"].getEmployeesSize).subscribe(function (data) {
            _this.employeesSizeList = data;
        });
    };
    EditOrganizationInfoBasePage.prototype.uploadImageToBucket = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var _a, path, filename, file, filenameToUpload;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = _global_utils__WEBPACK_IMPORTED_MODULE_9__["Utils"].getPathAndFilenameFromUrl(this.imageOriginalPath), path = _a.path, filename = _a.filename;
                        return [4 /*yield*/, this.utilsService.getFileFromSystemPath(path, filename)];
                    case 1:
                        file = _b.sent();
                        filenameToUpload = _global_constants__WEBPACK_IMPORTED_MODULE_11__["Constants"].PRIVATE_FOLDER + "/" + this.profileId + "/" + _global_constants__WEBPACK_IMPORTED_MODULE_11__["Constants"].PROFILE_FOLDER + "/" + _global_utils__WEBPACK_IMPORTED_MODULE_9__["Utils"].generateFileUniqueName(file);
                        if (!_global_utils__WEBPACK_IMPORTED_MODULE_9__["Utils"].isMediaValidSize(file)) {
                            this.informService.showWarning('createPost.invalidFileSize');
                            throw new Error('invalidFileSize');
                        }
                        return [4 /*yield*/, this.store
                                .dispatch(new _store_pages_pages_actions__WEBPACK_IMPORTED_MODULE_7__["UploadPageProfileImage"]({ filename: filenameToUpload, file: file, type: file.type, pageId: this.profileId }))
                                .toPromise()];
                    case 2:
                        _b.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    EditOrganizationInfoBasePage.prototype.disconnectObservers = function () {
        if (this.organizationInfo$) {
            this.organizationInfo$.unsubscribe();
        }
        if (this.employeesSizeSubscription) {
            this.employeesSizeSubscription.unsubscribe();
        }
    };
    EditOrganizationInfoBasePage.prototype.ngOnDestroy = function () {
        this.disconnectObservers();
    };
    EditOrganizationInfoBasePage.ctorParameters = function () { return [
        { type: _angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] },
        { type: _ngxs_store__WEBPACK_IMPORTED_MODULE_3__["Store"] },
        { type: _core_utils_service__WEBPACK_IMPORTED_MODULE_4__["UtilsService"] },
        { type: _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_6__["Camera"] },
        { type: _core_inform_service__WEBPACK_IMPORTED_MODULE_12__["InformService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] },
        { type: _core_navigation_extras_service__WEBPACK_IMPORTED_MODULE_10__["NavigationExtrasService"] },
        { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_18__["TranslateService"] }
    ]; };
    EditOrganizationInfoBasePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_14__["Injectable"])()
    ], EditOrganizationInfoBasePage);
    return EditOrganizationInfoBasePage;
}(_base_profile_image_editor_base_page__WEBPACK_IMPORTED_MODULE_15__["ProfileImageEditorBasePage"]));



/***/ })

}]);
//# sourceMappingURL=default~edit-organization-info-edit-academic-organization-info-edit-academic-organization-info-modul~1d96c2e0.js.map