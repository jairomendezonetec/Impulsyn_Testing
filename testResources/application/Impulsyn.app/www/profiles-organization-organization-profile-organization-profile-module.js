(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["profiles-organization-organization-profile-organization-profile-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/profiles/organization/organization-profile/components/about/about.page.html":
/*!***********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/profiles/organization/organization-profile/components/about/about.page.html ***!
  \***********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-section-title\n  [text]=\"'organizationProfile.about'\"\n  iconName=\"pencil\"\n  [editable]=\"editable\"\n  (iconClick)=\"goToEditPage()\"\n  *ngIf=\"!isEmpty\"\n></app-section-title>\n<app-empty [showButton]=\"true\" text=\"emptyAbout\" (buttonClick)=\"goToEditPage()\" *ngIf=\"editable && isEmpty\">\n</app-empty>\n<app-empty [showButton]=\"false\" text=\"userProfile.noData\" *ngIf=\"!editable && isEmpty\"> </app-empty>\n<div class=\"ion-padding-horizontal small-size\">\n  <div *ngIf=\"organizationData.description\">\n    <p class=\"bold\">{{'about-organization.description' | translate}}</p>\n    <p class=\"respectLineJumps\">{{organizationData.description}}</p>\n  </div>\n\n  <!-- <p class=\"bold\">{{'about-organization.sportsOrganizationSports' | translate}}</p>\n  <p>Sports</p> -->\n\n  <div *ngIf=\"organizationData.students_size\">\n    <p class=\"bold\">{{ 'organization.studentsSize' | translate }}</p>\n    <p>{{'studentsSize.' + organizationData.students_size?.name | translate}}</p>\n  </div>\n\n  <div *ngIf=\"organizationData.employees_size\">\n    <p class=\"bold\">{{ 'organization.employeesSize' | translate }}</p>\n    <p>{{'employeesSize.' + organizationData.employees_size?.name | translate}}</p>\n  </div>\n\n  <div *ngIf=\"organizationData.phone\">\n    <p class=\"bold\">{{ 'organization.phone' | translate }}</p>\n    <p>{{organizationData.phone}}</p>\n  </div>\n\n  <div *ngIf=\"hasLocation\">\n    <p class=\"bold\">{{ 'organization.location' | translate }}</p>\n    <p>{{organizationLocation}}</p>\n  </div>\n\n  <div *ngIf=\"organizationData.website\">\n    <p class=\"bold\">{{ 'organization.website' | translate }}</p>\n    <p class=\"underline\" color=\"secondary\" (click)=\"openLink(organizationData.website)\">{{organizationData.website}}</p>\n  </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/profiles/organization/organization-profile/components/jobs/jobs.page.html":
/*!*********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/profiles/organization/organization-profile/components/jobs/jobs.page.html ***!
  \*********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-section-title\n  [text]=\"'organizationProfile.jobs'\"\n  [editable]=\"editable\"\n  iconName=\"add\"\n  (iconClick)=\"addItem()\"\n  *ngIf=\"items.length > 0\"\n></app-section-title>\n<div *ngFor=\"let item of items\">\n  <app-opportunity-item\n    [info]=\"item\"\n    [hasPhoto]=\"true\"\n    [iconNameTapped]=\"'trash'\"\n    [iconNameInitial]=\"'trash'\"\n    (iconClick)=\"onDeleteClick($event)\"\n    (itemClick)=\"onItemClick($event)\"\n    [editable]=\"editable\"\n  ></app-opportunity-item>\n</div>\n<app-empty\n  [showButton]=\"true\"\n  (buttonClick)=\"addItem()\"\n  [buttonText]=\"'buttons.post'\"\n  text=\"emptyOpportunities\"\n  *ngIf=\"editable && items.length === 0\"\n>\n</app-empty>\n<app-empty [showButton]=\"false\" text=\"userProfile.noData\" *ngIf=\"items.length === 0 && !editable\"> </app-empty>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/profiles/organization/organization-profile/components/programs/programs.page.html":
/*!*****************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/profiles/organization/organization-profile/components/programs/programs.page.html ***!
  \*****************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-section-title\n  [text]=\"'organizationProfile.programs'\"\n  [editable]=\"editable\"\n  iconName=\"add\"\n  (iconClick)=\"goAddProgram()\"\n  *ngIf=\"items.length > 0\"\n></app-section-title>\n<div *ngFor=\"let item of items\">\n  <app-academic-item\n    [program]=\"item\"\n    [hasPhoto]=\"true\"\n    [iconNameInitial]=\"'trash'\"\n    [iconNameTapped]=\"'trash'\"\n    (iconClick)=\"onDeleteClick($event)\"\n    (itemClick)=\"onItemClick($event)\"\n    [editable]=\"editable\"\n  ></app-academic-item>\n</div>\n<app-empty\n  [showButton]=\"true\"\n  (buttonClick)=\"goAddProgram()\"\n  [buttonText]=\"'buttons.post'\"\n  text=\"emptyPrograms\"\n  *ngIf=\"editable && items.length == 0\"\n>\n</app-empty>\n<app-empty [showButton]=\"false\" text=\"userProfile.noData\" *ngIf=\"items.length === 0 && !editable\"> </app-empty>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/profiles/organization/organization-profile/organization-profile.page.html":
/*!*********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/profiles/organization/organization-profile/organization-profile.page.html ***!
  \*********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-header\n  [showBackButton]=\"showBackButton\"\n  [title]=\"profilePublicInfo?.complete_name\"\n  (backButtonClick)=\"goBack()\"\n  [actionIconList]=\"[headerIcon]\"\n  (actionIconListClick)=\"onHeaderIconClick($event)\"\n></app-header>\n<ion-content [scrollEvents]=\"true\" (ionScrollEnd)=\"logScrollEnd()\">\n  <div class=\"profile-content\" *ngIf=\"profilePublicInfo\">\n    <div class=\"header-content\">\n      <ion-row class=\"flex-item\">\n        <!--        TODO: Add when functionality works-->\n        <!--<ion-col size=\"12\" class=\"flex-row\" *ngIf=\"editable\">\n          <ion-row class=\"w100\">\n            <ion-col size=\"12\" class=\"ion-text-center ion-align-items-center\">\n              <span class=\"small-size\" color=\"primary\">{{'organizationProfile.viewAsUser' | translate}}</span>\n            </ion-col>\n          </ion-row>\n        </ion-col>\n        <ion-col size=\"12\" class=\"flex-row background-white\" *ngIf=\"editable && academic\">\n          <ion-row class=\"w100\">\n            <ion-col size=\"6\" class=\"ion-text-center\">\n              <span class=\"small-size underline\" color=\"primary\">{{'organizationProfile.leads' | translate}}</span>\n            </ion-col>\n            <ion-col size=\"6\" class=\"ion-text-center\">\n              <span class=\"small-size underline\" color=\"primary\"\n                >{{'organizationProfile.jobsApplications' | translate}}</span\n              >\n            </ion-col>\n          </ion-row>\n        </ion-col>\n        <ion-col size=\"12\" class=\"flex-row background-white ion-text-center\" *ngIf=\"editable && !academic\">\n          <ion-row class=\"w100\">\n            <ion-col size=\"12\" class=\"ion-text-center\">\n              <span class=\"small-size underline\" color=\"primary\"\n                >{{'organizationProfile.jobsApplications' | translate}}</span\n              >\n            </ion-col>\n          </ion-row>\n        </ion-col>-->\n        <ion-col size=\"12\" class=\"flex-row\" *ngIf=\"!editable && following\">\n          <ion-row class=\"ion-align-items-end ion-justify-content-start w100\">\n            <ion-col size=\"3\" offset=\"9\" class=\"ion-padding-start ion-no-padding ion-text-start\">\n              <span class=\"small-size\" color=\"primary\">{{'organizationProfile.following' | translate}}</span>\n            </ion-col>\n          </ion-row>\n        </ion-col>\n        <ion-col\n          size=\"12\"\n          size-md=\"8\"\n          size-lg=\"6\"\n          class=\"flex-row\"\n          size-sm=\"10\"\n          [ngClass]=\"(!following)?'little-padding-top':''\"\n        >\n          <ion-row class=\"ion-align-items-start ion-justify-content-start w100\">\n            <ion-col size=\"4\" class=\"ion-padding-start ion-no-padding\">\n              <img [src]=\"profileImage\" class=\"avatar-image\" alt=\"profile-image\" *ngIf=\"!editable\" />\n              <app-image-chooser *ngIf=\"editable\" (actionButtonClick)=\"goEditPage()\" [imagePath]=\"profileImage\">\n              </app-image-chooser>\n            </ion-col>\n            <ion-col size=\"8\" class=\"ion-no-padding\">\n              <ion-text class=\"avatar-text\">\n                <div class=\"small-size bold\">{{profilePublicInfo?.complete_name}}</div>\n                <div class=\"small-size\">{{profilePublicInfo?.tagline}}</div>\n                <div class=\"small-size\" color=\"grey\">\n                  {{prefix + '.'+ profilePublicInfo?.organization_subtype?.name | translate}}\n                </div>\n                <div class=\"small-size\" *ngIf=\"hasOrganizationLocation\">{{organizationLocation}}</div>\n              </ion-text>\n              <ion-row class=\"ion-align-items-start ion-justify-content-center ion-padding-top\">\n                <ion-col size=\"6\" class=\"ion-no-padding\" (click)=\"goPageFollowers(profilePublicInfo.follower_count)\">\n                  <span color=\"secondary\" class=\"bold regular-size\">{{profilePublicInfo?.follower_count}}</span>\n                  <span color=\"secondary\" class=\"small-size\">\n                    {{ \"organizationProfile.firstCounterLabel\"|translate}}</span\n                  >\n                </ion-col>\n                <ion-col size=\"6\" class=\"ion-no-padding\">\n                  <span class=\"bold regular-size\" *ngIf=\"editable\">{{publisherHighlights.total_count}}</span>\n                  <span class=\"bold regular-size\" *ngIf=\"!editable\">{{profilePublicInfo?.publication_count}}</span>\n                  <span class=\"small-size\"> {{ \"organizationProfile.secondCounterLabel\"|translate}}</span>\n                </ion-col>\n              </ion-row>\n            </ion-col>\n          </ion-row>\n        </ion-col>\n      </ion-row>\n      <ion-row class=\"flex-item ion-align-items-center ion-justify-content-center profile-buttons\" *ngIf=\"!editable\">\n        <ion-button *ngIf=\"!following\" color=\"secondary\" (click)=\"followPage()\"\n          >{{'organizationProfile.buttonFollow' | translate}}\n        </ion-button>\n        <ion-button\n          *ngIf=\"academic && profilePublicInfo?.website\"\n          class=\"secondary-button\"\n          (click)=\"goWeb(profilePublicInfo?.website)\"\n          >{{'organizationProfile.buttonInfoAcademic' | translate}}\n        </ion-button>\n        <ion-button\n          *ngIf=\"!academic && profilePublicInfo?.website\"\n          (click)=\"goWeb(profilePublicInfo?.website)\"\n          class=\"secondary-button\"\n          >{{'organizationProfile.buttonInfo' | translate}}\n        </ion-button>\n      </ion-row>\n    </div>\n\n    <div class=\"tabs-section\">\n      <div class=\"tabs-header\">\n        <div\n          *ngFor=\"let tabConfig of tabsConfig\"\n          class=\"tab-title\"\n          [class]=\"tabConfig.tab === currentTab ? 'tab-active' : ''\"\n          (click)=\"changeTab(tabConfig.tab)\"\n        >\n          <span [class]=\"tabConfig.icon\"></span>\n          <span class=\"tab-text small-size\">{{ tabConfig.title | translate }}</span>\n        </div>\n      </div>\n\n      <div [ngSwitch]=\"currentTab\">\n        <app-highlights\n          [editable]=\"editable\"\n          [profileId]=\"profileId\"\n          *ngSwitchCase=\"organizationProbileTabs.HIGHLIGHTS\"\n          [isOrganization]=\"true\"\n          [showSpinner]=\"showSpinner\"\n        >\n        </app-highlights>\n        <app-about [editable]=\"editable\" *ngSwitchCase=\"organizationProbileTabs.ABOUT\"> </app-about>\n        <app-programs\n          [profileId]=\"profileId\"\n          [editable]=\"editable\"\n          (deleteProgramClick)=\"deleteProgram($event)\"\n          (itemClick)=\"onProgramClick($event)\"\n          (addProgramClick)=\"goAddProgram()\"\n          *ngSwitchCase=\"organizationProbileTabs.PROGRAMS\"\n        ></app-programs>\n        <app-jobs\n          [profileId]=\"profileId\"\n          [editable]=\"editable\"\n          (itemClick)=\"onOpportunityClick($event)\"\n          (deleteOpportunityClick)=\"onDeleteOpportunity($event)\"\n          *ngSwitchCase=\"organizationProbileTabs.JOBS\"\n        ></app-jobs>\n      </div>\n    </div>\n  </div>\n</ion-content>\n");

/***/ }),

/***/ "./src/app/@shared/enums/organization-type.ts":
/*!****************************************************!*\
  !*** ./src/app/@shared/enums/organization-type.ts ***!
  \****************************************************/
/*! exports provided: ORGANIZATION_TYPE */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ORGANIZATION_TYPE", function() { return ORGANIZATION_TYPE; });
var ORGANIZATION_TYPE;
(function (ORGANIZATION_TYPE) {
    ORGANIZATION_TYPE[ORGANIZATION_TYPE["SPORTS"] = 1] = "SPORTS";
    ORGANIZATION_TYPE[ORGANIZATION_TYPE["ACADEMICS"] = 2] = "ACADEMICS";
    ORGANIZATION_TYPE[ORGANIZATION_TYPE["OTHERS"] = 3] = "OTHERS";
})(ORGANIZATION_TYPE || (ORGANIZATION_TYPE = {}));


/***/ }),

/***/ "./src/app/profiles/organization/organization-profile/components/about/about.module.ts":
/*!*********************************************************************************************!*\
  !*** ./src/app/profiles/organization/organization-profile/components/about/about.module.ts ***!
  \*********************************************************************************************/
/*! exports provided: AboutPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutPageModule", function() { return AboutPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _about_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./about.page */ "./src/app/profiles/organization/organization-profile/components/about/about.page.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
/* harmony import */ var _components_section_title_section_title_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../components/section-title/section-title.module */ "./src/app/profiles/components/section-title/section-title.module.ts");
/* harmony import */ var _components_empty_empty_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../components/empty/empty.module */ "./src/app/profiles/components/empty/empty.module.ts");








var AboutPageModule = /** @class */ (function () {
    function AboutPageModule() {
    }
    AboutPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateModule"].forChild(), _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"], _components_section_title_section_title_module__WEBPACK_IMPORTED_MODULE_6__["SectionTitleModule"], _components_empty_empty_module__WEBPACK_IMPORTED_MODULE_7__["EmptyModule"]],
            declarations: [_about_page__WEBPACK_IMPORTED_MODULE_2__["AboutPage"]],
            exports: [_about_page__WEBPACK_IMPORTED_MODULE_2__["AboutPage"]],
        })
    ], AboutPageModule);
    return AboutPageModule;
}());



/***/ }),

/***/ "./src/app/profiles/organization/organization-profile/components/about/about.page.scss":
/*!*********************************************************************************************!*\
  !*** ./src/app/profiles/organization/organization-profile/components/about/about.page.scss ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Byb2ZpbGVzL29yZ2FuaXphdGlvbi9vcmdhbml6YXRpb24tcHJvZmlsZS9jb21wb25lbnRzL2Fib3V0L2Fib3V0LnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/profiles/organization/organization-profile/components/about/about.page.ts":
/*!*******************************************************************************************!*\
  !*** ./src/app/profiles/organization/organization-profile/components/about/about.page.ts ***!
  \*******************************************************************************************/
/*! exports provided: AboutPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutPage", function() { return AboutPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _store_profiles_profiles_state__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../@store/profiles/profiles.state */ "./src/app/@store/profiles/profiles.state.ts");
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngxs/store */ "./node_modules/@ngxs/store/__ivy_ngcc__/fesm2015/ngxs-store.js");
/* harmony import */ var _global_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../@global/utils */ "./src/app/@global/utils.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _shared_enums_organization_type__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../@shared/enums/organization-type */ "./src/app/@shared/enums/organization-type.ts");
/* harmony import */ var src_app_core_utils_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/@core/utils.service */ "./src/app/@core/utils.service.ts");








var AboutPage = /** @class */ (function () {
    function AboutPage(store, router, utilsService) {
        this.store = store;
        this.router = router;
        this.utilsService = utilsService;
    }
    AboutPage.prototype.ngOnInit = function () {
        this.subscribeToOrganizationInfo();
    };
    AboutPage.prototype.isAboutInfoEmpty = function () {
        return (!this.organizationData.description &&
            !this.organizationData.students_size &&
            !this.organizationData.employees_size &&
            !this.organizationData.phone &&
            !this.organizationData.website &&
            !this.hasLocation);
    };
    AboutPage.prototype.subscribeToOrganizationInfo = function () {
        var _this = this;
        this.organizationInfo$ = this.store
            .select(_store_profiles_profiles_state__WEBPACK_IMPORTED_MODULE_2__["ProfilesState"].getOrganizationInfo)
            .subscribe(function (data) {
            _this.organizationData = data;
            _this.isEmpty = _this.isAboutInfoEmpty();
            _this.hasLocation = !!_this.organizationData.country;
            if (_this.hasLocation) {
                _this.organizationLocation = _global_utils__WEBPACK_IMPORTED_MODULE_4__["Utils"].generateUserFriendlyLocation(_this.organizationData.country, _this.organizationData.region, _this.organizationData.city, _this.organizationData.province, _this.organizationData.region_name);
            }
        });
    };
    AboutPage.prototype.goToEditPage = function () {
        var page = this.organizationData.organization_type === _shared_enums_organization_type__WEBPACK_IMPORTED_MODULE_6__["ORGANIZATION_TYPE"].ACADEMICS
            ? '/edit-academic-organization-info'
            : '/edit-sport-organization-info';
        this.router.navigate([page, this.organizationData.id]);
    };
    AboutPage.prototype.openLink = function (link) {
        this.utilsService.openLink(link);
    };
    AboutPage.prototype.disconnectObservers = function () {
        if (this.organizationInfo$) {
            this.organizationInfo$.unsubscribe();
        }
    };
    AboutPage.prototype.ngOnDestroy = function () {
        this.disconnectObservers();
    };
    AboutPage.ctorParameters = function () { return [
        { type: _ngxs_store__WEBPACK_IMPORTED_MODULE_3__["Store"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
        { type: src_app_core_utils_service__WEBPACK_IMPORTED_MODULE_7__["UtilsService"] }
    ]; };
    AboutPage.propDecorators = {
        editable: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }]
    };
    AboutPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-about',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./about.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/profiles/organization/organization-profile/components/about/about.page.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./about.page.scss */ "./src/app/profiles/organization/organization-profile/components/about/about.page.scss")).default]
        })
    ], AboutPage);
    return AboutPage;
}());



/***/ }),

/***/ "./src/app/profiles/organization/organization-profile/components/jobs/jobs.module.ts":
/*!*******************************************************************************************!*\
  !*** ./src/app/profiles/organization/organization-profile/components/jobs/jobs.module.ts ***!
  \*******************************************************************************************/
/*! exports provided: JobsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JobsPageModule", function() { return JobsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _jobs_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./jobs.page */ "./src/app/profiles/organization/organization-profile/components/jobs/jobs.page.ts");
/* harmony import */ var _components_shared_profiles_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../components/shared-profiles.module */ "./src/app/profiles/components/shared-profiles.module.ts");
/* harmony import */ var _components_empty_empty_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../components/empty/empty.module */ "./src/app/profiles/components/empty/empty.module.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../@shared/shared.module */ "./src/app/@shared/shared.module.ts");






var JobsPageModule = /** @class */ (function () {
    function JobsPageModule() {
    }
    JobsPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"], _components_shared_profiles_module__WEBPACK_IMPORTED_MODULE_3__["SharedProfilesModule"], _components_empty_empty_module__WEBPACK_IMPORTED_MODULE_4__["EmptyModule"]],
            declarations: [_jobs_page__WEBPACK_IMPORTED_MODULE_2__["JobsPage"]],
            exports: [_jobs_page__WEBPACK_IMPORTED_MODULE_2__["JobsPage"]],
        })
    ], JobsPageModule);
    return JobsPageModule;
}());



/***/ }),

/***/ "./src/app/profiles/organization/organization-profile/components/jobs/jobs.page.scss":
/*!*******************************************************************************************!*\
  !*** ./src/app/profiles/organization/organization-profile/components/jobs/jobs.page.scss ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".item-profile .icon {\n  font-size: 26px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvZmlsZXMvb3JnYW5pemF0aW9uL29yZ2FuaXphdGlvbi1wcm9maWxlL2NvbXBvbmVudHMvam9icy9qb2JzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGVBQUE7QUFDRiIsImZpbGUiOiJzcmMvYXBwL3Byb2ZpbGVzL29yZ2FuaXphdGlvbi9vcmdhbml6YXRpb24tcHJvZmlsZS9jb21wb25lbnRzL2pvYnMvam9icy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaXRlbS1wcm9maWxlIC5pY29uIHtcbiAgZm9udC1zaXplOiAyNnB4O1xufVxuIl19 */");

/***/ }),

/***/ "./src/app/profiles/organization/organization-profile/components/jobs/jobs.page.ts":
/*!*****************************************************************************************!*\
  !*** ./src/app/profiles/organization/organization-profile/components/jobs/jobs.page.ts ***!
  \*****************************************************************************************/
/*! exports provided: JobsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JobsPage", function() { return JobsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngxs/store */ "./node_modules/@ngxs/store/__ivy_ngcc__/fesm2015/ngxs-store.js");
/* harmony import */ var _store_job_offers_job_offers_state__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../@store/job-offers/job-offers.state */ "./src/app/@store/job-offers/job-offers.state.ts");





var JobsPage = /** @class */ (function () {
    function JobsPage(router, store) {
        this.router = router;
        this.store = store;
        this.itemClick = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.deleteOpportunityClick = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.addOpportunityClick = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    JobsPage.prototype.ngOnInit = function () {
        var _this = this;
        this.opportunities$ = this.store.select(_store_job_offers_job_offers_state__WEBPACK_IMPORTED_MODULE_4__["JobOffersState"].getJobOffers).subscribe(function (data) {
            _this.items = data;
        });
    };
    JobsPage.prototype.addItem = function () {
        this.router.navigate(['organization-profile', this.profileId, 'opportunity']);
    };
    JobsPage.prototype.onItemClick = function (id) {
        this.itemClick.emit(id);
    };
    JobsPage.prototype.onDeleteClick = function (id) {
        this.deleteOpportunityClick.emit(id);
    };
    JobsPage.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _ngxs_store__WEBPACK_IMPORTED_MODULE_3__["Store"] }
    ]; };
    JobsPage.propDecorators = {
        editable: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
        profileId: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
        itemClick: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] }],
        deleteOpportunityClick: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] }],
        addOpportunityClick: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] }]
    };
    JobsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-jobs',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./jobs.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/profiles/organization/organization-profile/components/jobs/jobs.page.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./jobs.page.scss */ "./src/app/profiles/organization/organization-profile/components/jobs/jobs.page.scss")).default]
        })
    ], JobsPage);
    return JobsPage;
}());



/***/ }),

/***/ "./src/app/profiles/organization/organization-profile/components/popover-header/popover-header.module.ts":
/*!***************************************************************************************************************!*\
  !*** ./src/app/profiles/organization/organization-profile/components/popover-header/popover-header.module.ts ***!
  \***************************************************************************************************************/
/*! exports provided: PopoverHeaderModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PopoverHeaderModule", function() { return PopoverHeaderModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
/* harmony import */ var _popover_header_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./popover-header.component */ "./src/app/profiles/organization/organization-profile/components/popover-header/popover-header.component.ts");






var PopoverHeaderModule = /** @class */ (function () {
    function PopoverHeaderModule() {
    }
    PopoverHeaderModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_popover_header_component__WEBPACK_IMPORTED_MODULE_5__["PopoverHeaderComponent"]],
            imports: [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateModule"].forChild(), _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]],
            exports: [_popover_header_component__WEBPACK_IMPORTED_MODULE_5__["PopoverHeaderComponent"]],
        })
    ], PopoverHeaderModule);
    return PopoverHeaderModule;
}());



/***/ }),

/***/ "./src/app/profiles/organization/organization-profile/components/programs/programs.module.ts":
/*!***************************************************************************************************!*\
  !*** ./src/app/profiles/organization/organization-profile/components/programs/programs.module.ts ***!
  \***************************************************************************************************/
/*! exports provided: ProgramsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProgramsPageModule", function() { return ProgramsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _programs_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./programs.page */ "./src/app/profiles/organization/organization-profile/components/programs/programs.page.ts");
/* harmony import */ var _components_shared_profiles_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../components/shared-profiles.module */ "./src/app/profiles/components/shared-profiles.module.ts");
/* harmony import */ var _components_empty_empty_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../components/empty/empty.module */ "./src/app/profiles/components/empty/empty.module.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../@shared/shared.module */ "./src/app/@shared/shared.module.ts");






var ProgramsPageModule = /** @class */ (function () {
    function ProgramsPageModule() {
    }
    ProgramsPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"], _components_shared_profiles_module__WEBPACK_IMPORTED_MODULE_3__["SharedProfilesModule"], _components_empty_empty_module__WEBPACK_IMPORTED_MODULE_4__["EmptyModule"]],
            declarations: [_programs_page__WEBPACK_IMPORTED_MODULE_2__["ProgramsPage"]],
            exports: [_programs_page__WEBPACK_IMPORTED_MODULE_2__["ProgramsPage"]],
        })
    ], ProgramsPageModule);
    return ProgramsPageModule;
}());



/***/ }),

/***/ "./src/app/profiles/organization/organization-profile/components/programs/programs.page.scss":
/*!***************************************************************************************************!*\
  !*** ./src/app/profiles/organization/organization-profile/components/programs/programs.page.scss ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".item-profile .icon {\n  font-size: 26px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvZmlsZXMvb3JnYW5pemF0aW9uL29yZ2FuaXphdGlvbi1wcm9maWxlL2NvbXBvbmVudHMvcHJvZ3JhbXMvcHJvZ3JhbXMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZUFBQTtBQUNGIiwiZmlsZSI6InNyYy9hcHAvcHJvZmlsZXMvb3JnYW5pemF0aW9uL29yZ2FuaXphdGlvbi1wcm9maWxlL2NvbXBvbmVudHMvcHJvZ3JhbXMvcHJvZ3JhbXMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLml0ZW0tcHJvZmlsZSAuaWNvbiB7XG4gIGZvbnQtc2l6ZTogMjZweDtcbn1cbiJdfQ== */");

/***/ }),

/***/ "./src/app/profiles/organization/organization-profile/components/programs/programs.page.ts":
/*!*************************************************************************************************!*\
  !*** ./src/app/profiles/organization/organization-profile/components/programs/programs.page.ts ***!
  \*************************************************************************************************/
/*! exports provided: ProgramsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProgramsPage", function() { return ProgramsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngxs/store */ "./node_modules/@ngxs/store/__ivy_ngcc__/fesm2015/ngxs-store.js");
/* harmony import */ var _store_academic_programs_academic_programs_state__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../@store/academic-programs/academic-programs.state */ "./src/app/@store/academic-programs/academic-programs.state.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");






var ProgramsPage = /** @class */ (function () {
    function ProgramsPage(router, translateService, store) {
        this.router = router;
        this.translateService = translateService;
        this.store = store;
        this.editable = false;
        this.deleteProgramClick = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.itemClick = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.addProgramClick = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.items = [];
    }
    ProgramsPage.prototype.ngOnInit = function () {
        var _this = this;
        this.programs$ = this.store.select(_store_academic_programs_academic_programs_state__WEBPACK_IMPORTED_MODULE_4__["AcademicProgramsState"].getOrganizationAcademicPrograms).subscribe(function (data) {
            _this.items = data;
        });
    };
    ProgramsPage.prototype.goAddProgram = function () {
        this.addProgramClick.emit();
    };
    ProgramsPage.prototype.onDeleteClick = function (id) {
        this.deleteProgramClick.emit(id);
    };
    ProgramsPage.prototype.onItemClick = function (id) {
        this.itemClick.emit(id);
    };
    ProgramsPage.prototype.disconnectObservers = function () {
        if (this.programs$) {
            this.programs$.unsubscribe();
        }
    };
    ProgramsPage.prototype.ngOnDestroy = function () {
        this.disconnectObservers();
    };
    ProgramsPage.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateService"] },
        { type: _ngxs_store__WEBPACK_IMPORTED_MODULE_3__["Store"] }
    ]; };
    ProgramsPage.propDecorators = {
        editable: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
        profileId: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
        deleteProgramClick: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] }],
        itemClick: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] }],
        addProgramClick: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] }]
    };
    ProgramsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-programs',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./programs.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/profiles/organization/organization-profile/components/programs/programs.page.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./programs.page.scss */ "./src/app/profiles/organization/organization-profile/components/programs/programs.page.scss")).default]
        })
    ], ProgramsPage);
    return ProgramsPage;
}());



/***/ }),

/***/ "./src/app/profiles/organization/organization-profile/organization-profile-routing.module.ts":
/*!***************************************************************************************************!*\
  !*** ./src/app/profiles/organization/organization-profile/organization-profile-routing.module.ts ***!
  \***************************************************************************************************/
/*! exports provided: OrganizationProfilePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrganizationProfilePageRoutingModule", function() { return OrganizationProfilePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _organization_profile_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./organization-profile.page */ "./src/app/profiles/organization/organization-profile/organization-profile.page.ts");




var routes = [
    {
        path: '',
        component: _organization_profile_page__WEBPACK_IMPORTED_MODULE_3__["OrganizationProfilePage"],
    },
];
var OrganizationProfilePageRoutingModule = /** @class */ (function () {
    function OrganizationProfilePageRoutingModule() {
    }
    OrganizationProfilePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], OrganizationProfilePageRoutingModule);
    return OrganizationProfilePageRoutingModule;
}());



/***/ }),

/***/ "./src/app/profiles/organization/organization-profile/organization-profile.module.ts":
/*!*******************************************************************************************!*\
  !*** ./src/app/profiles/organization/organization-profile/organization-profile.module.ts ***!
  \*******************************************************************************************/
/*! exports provided: OrganizationProfilePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrganizationProfilePageModule", function() { return OrganizationProfilePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _organization_profile_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./organization-profile-routing.module */ "./src/app/profiles/organization/organization-profile/organization-profile-routing.module.ts");
/* harmony import */ var _organization_profile_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./organization-profile.page */ "./src/app/profiles/organization/organization-profile/organization-profile.page.ts");
/* harmony import */ var _components_about_about_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/about/about.module */ "./src/app/profiles/organization/organization-profile/components/about/about.module.ts");
/* harmony import */ var _components_jobs_jobs_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/jobs/jobs.module */ "./src/app/profiles/organization/organization-profile/components/jobs/jobs.module.ts");
/* harmony import */ var _components_programs_programs_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/programs/programs.module */ "./src/app/profiles/organization/organization-profile/components/programs/programs.module.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../@shared/shared.module */ "./src/app/@shared/shared.module.ts");
/* harmony import */ var _components_popover_header_popover_header_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/popover-header/popover-header.module */ "./src/app/profiles/organization/organization-profile/components/popover-header/popover-header.module.ts");









var OrganizationProfilePageModule = /** @class */ (function () {
    function OrganizationProfilePageModule() {
    }
    OrganizationProfilePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"],
                _organization_profile_routing_module__WEBPACK_IMPORTED_MODULE_2__["OrganizationProfilePageRoutingModule"],
                _components_about_about_module__WEBPACK_IMPORTED_MODULE_4__["AboutPageModule"],
                _components_jobs_jobs_module__WEBPACK_IMPORTED_MODULE_5__["JobsPageModule"],
                _components_programs_programs_module__WEBPACK_IMPORTED_MODULE_6__["ProgramsPageModule"],
                _components_popover_header_popover_header_module__WEBPACK_IMPORTED_MODULE_8__["PopoverHeaderModule"],
            ],
            declarations: [_organization_profile_page__WEBPACK_IMPORTED_MODULE_3__["OrganizationProfilePage"]],
        })
    ], OrganizationProfilePageModule);
    return OrganizationProfilePageModule;
}());



/***/ }),

/***/ "./src/app/profiles/organization/organization-profile/organization-profile.page.scss":
/*!*******************************************************************************************!*\
  !*** ./src/app/profiles/organization/organization-profile/organization-profile.page.scss ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Byb2ZpbGVzL29yZ2FuaXphdGlvbi9vcmdhbml6YXRpb24tcHJvZmlsZS9vcmdhbml6YXRpb24tcHJvZmlsZS5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/profiles/organization/organization-profile/organization-profile.page.ts":
/*!*****************************************************************************************!*\
  !*** ./src/app/profiles/organization/organization-profile/organization-profile.page.ts ***!
  \*****************************************************************************************/
/*! exports provided: OrganizationProfilePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrganizationProfilePage", function() { return OrganizationProfilePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngxs/store */ "./node_modules/@ngxs/store/__ivy_ngcc__/fesm2015/ngxs-store.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _base_base_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../base/base.page */ "./src/app/base/base.page.ts");
/* harmony import */ var _global_constants__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../@global/constants */ "./src/app/@global/constants.ts");
/* harmony import */ var _global_utils__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../@global/utils */ "./src/app/@global/utils.ts");
/* harmony import */ var _components_popover_header_popover_header_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/popover-header/popover-header.component */ "./src/app/profiles/organization/organization-profile/components/popover-header/popover-header.component.ts");
/* harmony import */ var _core_utils_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../@core/utils.service */ "./src/app/@core/utils.service.ts");
/* harmony import */ var _store_profiles_profiles_actions__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../@store/profiles/profiles.actions */ "./src/app/@store/profiles/profiles.actions.ts");
/* harmony import */ var _store_pages_pages_state__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../@store/pages/pages.state */ "./src/app/@store/pages/pages.state.ts");
/* harmony import */ var _store_profiles_profiles_state__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../@store/profiles/profiles.state */ "./src/app/@store/profiles/profiles.state.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
/* harmony import */ var _store_pages_pages_actions__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../@store/pages/pages.actions */ "./src/app/@store/pages/pages.actions.ts");
/* harmony import */ var _store_job_offers_job_offers_actions__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../../@store/job-offers/job-offers.actions */ "./src/app/@store/job-offers/job-offers.actions.ts");
/* harmony import */ var src_app_store_academic_programs_academic_programs_actions__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! src/app/@store/academic-programs/academic-programs.actions */ "./src/app/@store/academic-programs/academic-programs.actions.ts");
/* harmony import */ var src_app_store_academic_programs_academic_programs_state__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! src/app/@store/academic-programs/academic-programs.state */ "./src/app/@store/academic-programs/academic-programs.state.ts");
/* harmony import */ var _store_job_offers_job_offers_state__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../../@store/job-offers/job-offers.state */ "./src/app/@store/job-offers/job-offers.state.ts");
/* harmony import */ var _shared_enums_organization_type__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../../../@shared/enums/organization-type */ "./src/app/@shared/enums/organization-type.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _core_navigation_extras_service__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../../../@core/navigation-extras.service */ "./src/app/@core/navigation-extras.service.ts");
/* harmony import */ var _shared_enums_organization_profile_tab__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../../../@shared/enums/organization-profile-tab */ "./src/app/@shared/enums/organization-profile-tab.ts");
























var HEADER_SETTINGS_ICON = 'settings-outline';
var HEADER_OPTIONS_ICON = 'ellipsis-vertical';
var OrganizationProfilePage = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(OrganizationProfilePage, _super);
    function OrganizationProfilePage(router, location, store, utilsService, route, popoverController, translateService, alertController, navigationExtrasService) {
        var _this = _super.call(this, location, router, store, utilsService) || this;
        _this.router = router;
        _this.route = route;
        _this.popoverController = popoverController;
        _this.translateService = translateService;
        _this.alertController = alertController;
        _this.navigationExtrasService = navigationExtrasService;
        _this.imagePathOnboarding = _global_constants__WEBPACK_IMPORTED_MODULE_7__["Constants"].ONBOARDING_IMAGE_PATH;
        _this.tabsConfig = [];
        _this.currentTab = _shared_enums_organization_profile_tab__WEBPACK_IMPORTED_MODULE_23__["ORGANIZATION_PROFILE_TAB"].HIGHLIGHTS;
        _this.organizationProbileTabs = _shared_enums_organization_profile_tab__WEBPACK_IMPORTED_MODULE_23__["ORGANIZATION_PROFILE_TAB"];
        _this.programs = [];
        _this.itemsMenu = [];
        _this.inProcess = false;
        return _this;
    }
    OrganizationProfilePage.prototype.ngOnInit = function () {
        this.subscribeToProfilePublicInfo();
        this.subscribeToHighlightsChanges();
        this.subscribeToOrganizationInfo();
        this.subscribeToPrograms();
        this.goToInitialTab();
    };
    OrganizationProfilePage.prototype.doIonViewWillEnter = function () {
        var _this = this;
        this.profileId = this.route.snapshot.params['profileId'];
        this.store.dispatch(new _store_profiles_profiles_actions__WEBPACK_IMPORTED_MODULE_11__["GetOrganizationProfileInfo"]({ id: this.profileId }));
        this.store.dispatch(new _store_pages_pages_actions__WEBPACK_IMPORTED_MODULE_15__["GetFollowedPages"]());
        this.store.dispatch(new src_app_store_academic_programs_academic_programs_actions__WEBPACK_IMPORTED_MODULE_17__["GetOrganizationAcademicPrograms"](this.profileId));
        this.store.dispatch(new _store_job_offers_job_offers_actions__WEBPACK_IMPORTED_MODULE_16__["GetOrganizationJobOffersAction"](this.profileId));
        this.editable = !!this.store.selectSnapshot(_store_pages_pages_state__WEBPACK_IMPORTED_MODULE_12__["PagesState"].getUserPageList).find(function (page) { return page.id === _this.profileId; });
        this.loadPublications();
        this.setShowProfileNewPostButton();
        this.store.dispatch(new _store_profiles_profiles_actions__WEBPACK_IMPORTED_MODULE_11__["SetCurrentProfileId"](this.profileId));
        this.store.dispatch(new _store_profiles_profiles_actions__WEBPACK_IMPORTED_MODULE_11__["SetProfilesFirstPublicationReference"](null));
    };
    OrganizationProfilePage.prototype.goToInitialTab = function () {
        var _a;
        this.currentTab = ((_a = this.navigationExtrasService.getExtras()) === null || _a === void 0 ? void 0 : _a.tab) || _shared_enums_organization_profile_tab__WEBPACK_IMPORTED_MODULE_23__["ORGANIZATION_PROFILE_TAB"].HIGHLIGHTS;
        this.navigationExtrasService.setExtras(null);
    };
    OrganizationProfilePage.prototype.loadPublications = function () {
        var _this = this;
        this.showSpinner = true;
        this.utilsService
            .loadPublications(this.profileId)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_21__["finalize"])(function () {
            _this.showSpinner = false;
        }))
            .subscribe();
    };
    OrganizationProfilePage.prototype.subscribeToPrograms = function () {
        var _this = this;
        this.programsSubscription$ = this.programsList$.subscribe(function (res) {
            _this.programs = res;
        });
    };
    OrganizationProfilePage.prototype.subscribeToOrganizationInfo = function () {
        var _this = this;
        this.profilePublicInfo$ = this.store.select(_store_pages_pages_state__WEBPACK_IMPORTED_MODULE_12__["PagesState"].getFollowedPageList).subscribe(function (data) {
            if (!data) {
                return;
            }
            _this.following = !_this.editable && !!data.find(function (page) { return page.id === _this.profileId; });
            _this.headerIcon = {
                name: _this.editable ? 'settings-outline' : _this.following ? 'ellipsis-vertical' : '',
            };
        });
    };
    OrganizationProfilePage.prototype.subscribeToHighlightsChanges = function () {
        var _this = this;
        this.highlightSubscription$ = this.store.select(_store_profiles_profiles_state__WEBPACK_IMPORTED_MODULE_13__["ProfilesState"].getPublisherHighlights).subscribe(function (data) { return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this, void 0, void 0, function () {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                this.publisherHighlights = data;
                return [2 /*return*/];
            });
        }); });
    };
    OrganizationProfilePage.prototype.subscribeToProfilePublicInfo = function () {
        var _this = this;
        this.profilePublicInfo$ = this.store.select(_store_profiles_profiles_state__WEBPACK_IMPORTED_MODULE_13__["ProfilesState"].getOrganizationInfo).subscribe(function (data) {
            if (!data) {
                return;
            }
            _this.profilePublicInfo = data;
            _this.prefix = _global_utils__WEBPACK_IMPORTED_MODULE_8__["Utils"].getSubtypeTranslationPrefix(_this.profilePublicInfo.organization_type);
            _this.profileImage = _this.profilePublicInfo.photo;
            _this.hasOrganizationLocation = !!_this.profilePublicInfo.country;
            if (_this.hasOrganizationLocation) {
                _this.organizationLocation = _global_utils__WEBPACK_IMPORTED_MODULE_8__["Utils"].generateUserFriendlyLocation(_this.profilePublicInfo.country, _this.profilePublicInfo.region, _this.profilePublicInfo.city, _this.profilePublicInfo.province, _this.profilePublicInfo.region_name);
            }
            _this.academic = _this.profilePublicInfo.organization_type === _shared_enums_organization_type__WEBPACK_IMPORTED_MODULE_20__["ORGANIZATION_TYPE"].ACADEMICS;
            _this.setTabsConfig();
        });
    };
    OrganizationProfilePage.prototype.goToTab = function (path) {
        // use replaceUrl so the user navigates to home when go back, instead of navigate between the diferent tabs.
        this.router.navigate([path], { replaceUrl: true });
    };
    OrganizationProfilePage.prototype.setTabsConfig = function () {
        this.tabsConfig = [
            {
                title: 'organizationProfile.highlights',
                icon: 'icon-highlights',
                tab: _shared_enums_organization_profile_tab__WEBPACK_IMPORTED_MODULE_23__["ORGANIZATION_PROFILE_TAB"].HIGHLIGHTS,
            },
            {
                title: 'organizationProfile.about',
                icon: 'icon-about',
                tab: _shared_enums_organization_profile_tab__WEBPACK_IMPORTED_MODULE_23__["ORGANIZATION_PROFILE_TAB"].ABOUT,
            },
            {
                title: 'organizationProfile.jobs',
                icon: 'icon-jobs',
                tab: _shared_enums_organization_profile_tab__WEBPACK_IMPORTED_MODULE_23__["ORGANIZATION_PROFILE_TAB"].JOBS,
            },
        ];
        if (this.academic) {
            this.tabsConfig.splice(this.tabsConfig.length - 1, 0, {
                title: 'organizationProfile.programs',
                icon: 'icon-program',
                tab: _shared_enums_organization_profile_tab__WEBPACK_IMPORTED_MODULE_23__["ORGANIZATION_PROFILE_TAB"].PROGRAMS,
            });
        }
    };
    OrganizationProfilePage.prototype.changeTab = function (tab) {
        this.currentTab = tab;
        this.setShowProfileNewPostButton();
    };
    OrganizationProfilePage.prototype.setShowProfileNewPostButton = function () {
        if (this.currentTab === _shared_enums_organization_profile_tab__WEBPACK_IMPORTED_MODULE_23__["ORGANIZATION_PROFILE_TAB"].HIGHLIGHTS) {
            this.store.dispatch(new _store_profiles_profiles_actions__WEBPACK_IMPORTED_MODULE_11__["SetShowProfileNewPostButton"](this.editable));
        }
        else {
            this.store.dispatch(new _store_profiles_profiles_actions__WEBPACK_IMPORTED_MODULE_11__["SetShowProfileNewPostButton"](false));
        }
    };
    OrganizationProfilePage.prototype.showAdminPopover = function (params) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var popover;
            var _this = this;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.itemsMenu = [
                            {
                                text: 'organizationProfile.edit',
                                action: function () {
                                    _this.goEditPage();
                                },
                            },
                            {
                                text: 'organizationProfile.createOpportunity',
                                action: function () {
                                    _this.goCreateOpportunity();
                                },
                            },
                            {
                                text: 'organizationProfile.manageAdmin',
                                action: function () {
                                    _this.goAdminsPage();
                                },
                            },
                            {
                                text: 'organizationProfile.delete',
                                color: 'danger',
                                action: function () {
                                    _this.deletePage();
                                },
                            },
                        ];
                        if (this.academic) {
                            this.itemsMenu.splice(2, 0, {
                                text: 'organizationProfile.createProgram',
                                action: function () {
                                    _this.goAddProgram();
                                },
                            });
                        }
                        return [4 /*yield*/, this.popoverController.create({
                                event: params.event,
                                component: _components_popover_header_popover_header_component__WEBPACK_IMPORTED_MODULE_9__["PopoverHeaderComponent"],
                                componentProps: { items: this.itemsMenu },
                                cssClass: 'menu-popover',
                                translucent: true,
                            })];
                    case 1:
                        popover = _a.sent();
                        popover.onDidDismiss().then(function (result) {
                            if (result.data !== undefined) {
                                _this.adminPopoverAction(result.data);
                            }
                        });
                        return [4 /*yield*/, popover.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    OrganizationProfilePage.prototype.showPopover = function (params) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var items, popover;
            var _this = this;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        items = [
                            {
                                text: 'unfollow',
                                color: 'danger',
                            },
                        ];
                        return [4 /*yield*/, this.popoverController.create({
                                event: params.event,
                                component: _components_popover_header_popover_header_component__WEBPACK_IMPORTED_MODULE_9__["PopoverHeaderComponent"],
                                componentProps: { items: items },
                                cssClass: 'menu-popover',
                                translucent: true,
                            })];
                    case 1:
                        popover = _a.sent();
                        popover.onDidDismiss().then(function (result) {
                            if (result.data === 0) {
                                _this.showUnfollowPageConfirm();
                            }
                        });
                        return [4 /*yield*/, popover.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    OrganizationProfilePage.prototype.showUnfollowPageConfirm = function () {
        var _a;
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var message, alert;
            var _this = this;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, this.translateService
                            .get('organizationProfile.deletePageFollowing', { name: (_a = this.profilePublicInfo) === null || _a === void 0 ? void 0 : _a.complete_name })
                            .toPromise()];
                    case 1:
                        message = _b.sent();
                        return [4 /*yield*/, this.alertController.create({
                                cssClass: 'custom-alert',
                                message: message,
                                buttons: [
                                    {
                                        text: this.translateService.instant("buttons.cancel"),
                                        role: 'cancel',
                                        cssClass: 'secondary',
                                        handler: function () {
                                            // do nothing
                                        },
                                    },
                                    {
                                        text: this.translateService.instant("buttons.accept"),
                                        handler: function () {
                                            _this.unfollowPage();
                                        },
                                    },
                                ],
                            })];
                    case 2:
                        alert = _b.sent();
                        return [4 /*yield*/, alert.present()];
                    case 3:
                        _b.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    OrganizationProfilePage.prototype.followPage = function () {
        this.store.dispatch(new _store_pages_pages_actions__WEBPACK_IMPORTED_MODULE_15__["FollowPageAction"]({ organization: this.profilePublicInfo }));
    };
    OrganizationProfilePage.prototype.unfollowPage = function () {
        this.store.dispatch(new _store_pages_pages_actions__WEBPACK_IMPORTED_MODULE_15__["UnfollowPageAction"]({ id: this.profileId }));
    };
    OrganizationProfilePage.prototype.goEditPage = function () {
        var page = this.profilePublicInfo.organization_type === _shared_enums_organization_type__WEBPACK_IMPORTED_MODULE_20__["ORGANIZATION_TYPE"].ACADEMICS
            ? '/edit-academic-organization-info'
            : '/edit-sport-organization-info';
        this.router.navigate([page, this.profileId]);
    };
    OrganizationProfilePage.prototype.goAdminsPage = function () {
        this.router.navigate(['/manage-admins-page', this.profileId]);
    };
    OrganizationProfilePage.prototype.deletePage = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var message, alert;
            var _this = this;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.translateService.get('organizationProfile.administratorsPage.deletePage').toPromise()];
                    case 1:
                        message = _a.sent();
                        return [4 /*yield*/, this.alertController.create({
                                cssClass: 'custom-alert',
                                message: message,
                                buttons: [
                                    {
                                        text: this.translateService.instant("buttons.cancel"),
                                        role: 'cancel',
                                        cssClass: 'secondary',
                                        handler: function () {
                                            // do nothing
                                        },
                                    },
                                    {
                                        text: this.translateService.instant("buttons.accept"),
                                        handler: function () {
                                            _this.store
                                                .dispatch(new _store_pages_pages_actions__WEBPACK_IMPORTED_MODULE_15__["DeletePage"]({ id: _this.profileId }))
                                                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_21__["take"])(1))
                                                .subscribe(function () {
                                                _this.goBack();
                                            });
                                        },
                                    },
                                ],
                            })];
                    case 2:
                        alert = _a.sent();
                        return [4 /*yield*/, alert.present()];
                    case 3:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    OrganizationProfilePage.prototype.onHeaderIconClick = function ($event) {
        if (this.editable) {
            // this.goEditPage();
            this.showAdminPopover($event);
        }
        if (this.following) {
            this.showPopover($event);
        }
    };
    OrganizationProfilePage.prototype.getIconHeader = function () {
        if (this.editable) {
            return HEADER_SETTINGS_ICON;
        }
        if (this.following) {
            return HEADER_OPTIONS_ICON;
        }
        return '';
    };
    OrganizationProfilePage.prototype.deleteProgram = function (event) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var message, alert;
            var _this = this;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.translateService.get('organizationProfile.deleteAcademicProgram').toPromise()];
                    case 1:
                        message = _a.sent();
                        return [4 /*yield*/, this.alertController.create({
                                cssClass: 'custom-alert',
                                message: message,
                                buttons: [
                                    {
                                        text: this.translateService.instant("buttons.cancel"),
                                        role: 'cancel',
                                        cssClass: 'secondary',
                                        handler: function () {
                                            // do nothing
                                        },
                                    },
                                    {
                                        text: this.translateService.instant("buttons.accept"),
                                        handler: function () {
                                            _this.store.dispatch(new src_app_store_academic_programs_academic_programs_actions__WEBPACK_IMPORTED_MODULE_17__["DeleteAcademicProgram"](event));
                                        },
                                    },
                                ],
                            })];
                    case 2:
                        alert = _a.sent();
                        return [4 /*yield*/, alert.present()];
                    case 3:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    OrganizationProfilePage.prototype.onProgramClick = function (event) {
        var program = this.store
            .selectSnapshot(src_app_store_academic_programs_academic_programs_state__WEBPACK_IMPORTED_MODULE_18__["AcademicProgramsState"].getOrganizationAcademicPrograms)
            .find(function (item) { return item.id === event; });
        var programUpdated = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, program), { own: this.editable });
        this.store.dispatch(new src_app_store_academic_programs_academic_programs_actions__WEBPACK_IMPORTED_MODULE_17__["SetCurrentAcademicProgram"](programUpdated));
        this.router.navigate(['academic-program-detail', event]);
    };
    OrganizationProfilePage.prototype.adminPopoverAction = function (action) {
        this.itemsMenu[action].action();
    };
    OrganizationProfilePage.prototype.goAddProgram = function () {
        this.router.navigate(['organization-profile', this.profileId, 'academic-program']);
    };
    OrganizationProfilePage.prototype.goCreateOpportunity = function () {
        this.router.navigate(['organization-profile', this.profileId, 'opportunity']);
    };
    OrganizationProfilePage.prototype.onOpportunityClick = function (event) {
        var opportunity = this.store.selectSnapshot(_store_job_offers_job_offers_state__WEBPACK_IMPORTED_MODULE_19__["JobOffersState"].getJobOffers).find(function (item) { return item.id === event; });
        var opportunityUpdated = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, opportunity), { own: this.editable });
        this.store.dispatch(new _store_job_offers_job_offers_actions__WEBPACK_IMPORTED_MODULE_16__["SetCurrentJobOffer"](opportunityUpdated));
        this.router.navigate(['opportunity-detail', event]);
    };
    OrganizationProfilePage.prototype.onDeleteOpportunity = function (id) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var selected, message, alert;
            var _this = this;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        selected = this.store.selectSnapshot(_store_job_offers_job_offers_state__WEBPACK_IMPORTED_MODULE_19__["JobOffersState"].getJobOffers).find(function (item) { return item.id === id; });
                        return [4 /*yield*/, this.translateService.get('userProfile.deleteMessage', { name: selected.title }).toPromise()];
                    case 1:
                        message = _a.sent();
                        return [4 /*yield*/, this.alertController.create({
                                cssClass: 'custom-alert',
                                message: message,
                                buttons: [
                                    {
                                        text: this.translateService.instant("buttons.cancel"),
                                        role: 'cancel',
                                        cssClass: 'secondary',
                                        handler: function () {
                                            // do nothing
                                        },
                                    },
                                    {
                                        text: this.translateService.instant("buttons.accept"),
                                        handler: function () {
                                            _this.deleteOpportunity(id);
                                        },
                                    },
                                ],
                            })];
                    case 2:
                        alert = _a.sent();
                        return [4 /*yield*/, alert.present()];
                    case 3:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    OrganizationProfilePage.prototype.deleteOpportunity = function (id) {
        this.store.dispatch(new _store_job_offers_job_offers_actions__WEBPACK_IMPORTED_MODULE_16__["DeleteJobOfferAction"](id));
    };
    OrganizationProfilePage.prototype.goWeb = function (link) {
        this.utilsService.openLink(link);
    };
    OrganizationProfilePage.prototype.disconnectObservers = function () {
        try {
            this.profilePublicInfo$.unsubscribe();
            this.programsSubscription$.unsubscribe();
            this.highlightSubscription$.unsubscribe();
        }
        catch (error) {
            console.error(error);
        }
    };
    OrganizationProfilePage.prototype.goPageFollowers = function (connectionsNumber) {
        if (connectionsNumber > 0) {
            this.router.navigate(['connections'], {
                queryParams: {
                    id: this.profileId,
                    completeName: this.profilePublicInfo.complete_name,
                    page: true,
                },
            });
        }
    };
    OrganizationProfilePage.prototype.logScrollEnd = function () {
        this.loadNextPublications();
    };
    OrganizationProfilePage.prototype.loadNextPublications = function () {
        var _this = this;
        if (this.inProcess) {
            return;
        }
        this.inProcess = true;
        this.showSpinner = true;
        this.utilsService
            .loadNextPublications(this.publisherHighlights, this.profileId)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_21__["finalize"])(function () {
            _this.showSpinner = false;
            _this.inProcess = false;
        }))
            .subscribe();
    };
    OrganizationProfilePage.prototype.ionViewWillLeave = function () {
        this.store.dispatch(new _store_profiles_profiles_actions__WEBPACK_IMPORTED_MODULE_11__["SetShowProfileNewPostButton"](false));
    };
    OrganizationProfilePage.prototype.ngOnDestroy = function () {
        this.disconnectObservers();
    };
    OrganizationProfilePage.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: _angular_common__WEBPACK_IMPORTED_MODULE_4__["Location"] },
        { type: _ngxs_store__WEBPACK_IMPORTED_MODULE_2__["Store"] },
        { type: _core_utils_service__WEBPACK_IMPORTED_MODULE_10__["UtilsService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["PopoverController"] },
        { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_14__["TranslateService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"] },
        { type: _core_navigation_extras_service__WEBPACK_IMPORTED_MODULE_22__["NavigationExtrasService"] }
    ]; };
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_2__["Select"])(src_app_store_academic_programs_academic_programs_state__WEBPACK_IMPORTED_MODULE_18__["AcademicProgramsState"].getOrganizationAcademicPrograms)
    ], OrganizationProfilePage.prototype, "programsList$", void 0);
    OrganizationProfilePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-organization-profile',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./organization-profile.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/profiles/organization/organization-profile/organization-profile.page.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./organization-profile.page.scss */ "./src/app/profiles/organization/organization-profile/organization-profile.page.scss")).default]
        })
    ], OrganizationProfilePage);
    return OrganizationProfilePage;
}(_base_base_page__WEBPACK_IMPORTED_MODULE_6__["BasePage"]));



/***/ })

}]);
//# sourceMappingURL=profiles-organization-organization-profile-organization-profile-module.js.map