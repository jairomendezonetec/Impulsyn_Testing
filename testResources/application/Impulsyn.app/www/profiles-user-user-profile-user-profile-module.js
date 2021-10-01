(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["profiles-user-user-profile-user-profile-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/profiles/user/components/education/education.page.html":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/profiles/user/components/education/education.page.html ***!
  \**************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-section-title\n  [text]=\"'userProfile.academicExperience'\"\n  [editable]=\"editable\"\n  iconName=\"add\"\n  *ngIf=\"items.length > 0\"\n  (iconClick)=\"addItem()\"\n></app-section-title>\n<div *ngFor=\"let item of items\">\n  <div class=\"item-profile background-white\">\n    <div class=\"avatar-text\" [ngClass]=\"!editable?'not-overflow':'not-overflow-icon'\">\n      <div class=\"regular-size bold\">{{ item.title }}</div>\n      <div class=\"small-size\">{{ item.organization }}</div>\n      <div class=\"small-size last-item\" color=\"secondary\">\n        {{ getFormatDate(item.start_date) }} - {{getFormatDate(item.end_date)}}\n      </div>\n      <span class=\"small-size last-item description respectLineJumps\" color=\"grey\"> {{ item.description}} </span>\n    </div>\n    <ion-icon *ngIf=\"editable\" name=\"pencil-sharp\" class=\"icon\" (click)=\"onEditClick(item.id)\"></ion-icon>\n  </div>\n</div>\n<app-empty\n  text=\"emptyAcademic\"\n  [showButton]=\"true\"\n  (buttonClick)=\"addItem()\"\n  *ngIf=\"editable && items.length == 0\"\n></app-empty>\n<app-empty [showButton]=\"false\" text=\"userProfile.noData\" *ngIf=\"items.length === 0 && !editable\"> </app-empty>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/profiles/user/components/experience/experience.page.html":
/*!****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/profiles/user/components/experience/experience.page.html ***!
  \****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-section-title\n  [text]=\"'userProfile.laboralExperience'\"\n  [editable]=\"editable\"\n  iconName=\"add\"\n  (iconClick)=\"addItem()\"\n  *ngIf=\"items.length > 0\"\n></app-section-title>\n<div *ngFor=\"let item of items\">\n  <div class=\"item-profile background-white\">\n    <div class=\"avatar-text\" [ngClass]=\"!editable?'not-overflow':'not-overflow-icon'\">\n      <div class=\"regular-size bold\">{{ item.title }}</div>\n      <div class=\"small-size\">{{ item.organization }}</div>\n      <div class=\"small-size last-item\" color=\"secondary\">\n        {{ getFormatDate(item.start_date) }} - {{getFormatDate(item.end_date)}}\n      </div>\n      <div class=\"small-size\" color=\"grey\">{{ item.location }}</div>\n      <span class=\"small-size last-item description respectLineJumps\"> {{ item.description}} </span>\n    </div>\n    <ion-icon *ngIf=\"editable\" name=\"pencil-sharp\" class=\"icon\" (click)=\"onEditClick(item.id)\"></ion-icon>\n  </div>\n</div>\n<app-empty\n  text=\"emptyExperience\"\n  [showButton]=\"true\"\n  *ngIf=\"editable && items.length == 0\"\n  (buttonClick)=\"addItem()\"\n></app-empty>\n<app-empty [showButton]=\"false\" text=\"userProfile.noData\" *ngIf=\"items.length === 0 && !editable\"> </app-empty>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/profiles/user/components/skills/skills.page.html":
/*!********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/profiles/user/components/skills/skills.page.html ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-section-title\n  [text]=\"'userProfile.skills'\"\n  [editable]=\"editable\"\n  iconName=\"add\"\n  (iconClick)=\"addItem()\"\n  [showAdd]=\"items.length < maxSkills\"\n  *ngIf=\"items.length > 0\"\n></app-section-title>\n<div *ngFor=\"let item of items\">\n  <div class=\"item background-white ion-padding-start pr\">\n    <div class=\"small-size\" [ngClass]=\"!editable?'not-overflow':'not-overflow-icon'\" id=\"{{item.id}}\">\n      {{item.title}}\n    </div>\n    <ion-icon *ngIf=\"editable\" name=\"trash\" class=\"icon\" (click)=\"onDeleteClick(item.id, item.title)\"></ion-icon>\n  </div>\n</div>\n<app-empty\n  *ngIf=\"editable && items.length == 0\"\n  text=\"emptySkills\"\n  [showButton]=\"true\"\n  (buttonClick)=\"addItem()\"\n></app-empty>\n<app-empty [showButton]=\"false\" text=\"userProfile.noData\" *ngIf=\"items.length === 0 && !editable\"> </app-empty>\n");

/***/ }),

/***/ "./src/app/profiles/user/components/education/education.module.ts":
/*!************************************************************************!*\
  !*** ./src/app/profiles/user/components/education/education.module.ts ***!
  \************************************************************************/
/*! exports provided: EducationPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EducationPageModule", function() { return EducationPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _education_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./education.page */ "./src/app/profiles/user/components/education/education.page.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
/* harmony import */ var _components_shared_profiles_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../components/shared-profiles.module */ "./src/app/profiles/components/shared-profiles.module.ts");
/* harmony import */ var _components_empty_empty_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../components/empty/empty.module */ "./src/app/profiles/components/empty/empty.module.ts");








var EducationPageModule = /** @class */ (function () {
    function EducationPageModule() {
    }
    EducationPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonicModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateModule"].forChild(), _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"], _components_shared_profiles_module__WEBPACK_IMPORTED_MODULE_6__["SharedProfilesModule"], _components_empty_empty_module__WEBPACK_IMPORTED_MODULE_7__["EmptyModule"]],
            declarations: [_education_page__WEBPACK_IMPORTED_MODULE_4__["EducationPage"]],
            exports: [_education_page__WEBPACK_IMPORTED_MODULE_4__["EducationPage"]],
        })
    ], EducationPageModule);
    return EducationPageModule;
}());



/***/ }),

/***/ "./src/app/profiles/user/components/education/education.page.scss":
/*!************************************************************************!*\
  !*** ./src/app/profiles/user/components/education/education.page.scss ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".item-profile .icon {\n  font-size: 26px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvZmlsZXMvdXNlci9jb21wb25lbnRzL2VkdWNhdGlvbi9lZHVjYXRpb24ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZUFBQTtBQUNGIiwiZmlsZSI6InNyYy9hcHAvcHJvZmlsZXMvdXNlci9jb21wb25lbnRzL2VkdWNhdGlvbi9lZHVjYXRpb24ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLml0ZW0tcHJvZmlsZSAuaWNvbiB7XG4gIGZvbnQtc2l6ZTogMjZweDtcbn1cbiJdfQ== */");

/***/ }),

/***/ "./src/app/profiles/user/components/education/education.page.ts":
/*!**********************************************************************!*\
  !*** ./src/app/profiles/user/components/education/education.page.ts ***!
  \**********************************************************************/
/*! exports provided: EducationPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EducationPage", function() { return EducationPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _types_item_profile_type__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../types/item-profile-type */ "./src/app/profiles/types/item-profile-type.ts");
/* harmony import */ var _store_user_user_state__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../@store/user/user.state */ "./src/app/@store/user/user.state.ts");
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngxs/store */ "./node_modules/@ngxs/store/__ivy_ngcc__/fesm2015/ngxs-store.js");
/* harmony import */ var _global_utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../@global/utils */ "./src/app/@global/utils.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");








var EducationPage = /** @class */ (function () {
    function EducationPage(router, store, translateService) {
        this.router = router;
        this.store = store;
        this.translateService = translateService;
        this.items = [];
    }
    EducationPage.prototype.ngOnInit = function () {
        var _this = this;
        this.subscription$ = this.store.select(_store_user_user_state__WEBPACK_IMPORTED_MODULE_4__["UserState"].getAcademicProfile).subscribe(function (data) {
            _this.items = data;
        });
    };
    EducationPage.prototype.onEditClick = function ($event) {
        var navigationExtras = {
            state: {
                itemType: _types_item_profile_type__WEBPACK_IMPORTED_MODULE_3__["ItemProfileTypes"].Academic,
                id: $event,
            },
        };
        this.router.navigate(['/add-item'], navigationExtras);
    };
    EducationPage.prototype.addItem = function () {
        var navigationExtras = {
            state: {
                itemType: _types_item_profile_type__WEBPACK_IMPORTED_MODULE_3__["ItemProfileTypes"].Academic,
            },
        };
        this.router.navigate(['/add-item'], navigationExtras);
    };
    EducationPage.prototype.disconnectObservers = function () {
        this.subscription$.unsubscribe();
    };
    EducationPage.prototype.getFormatDate = function (date) {
        if (_global_utils__WEBPACK_IMPORTED_MODULE_6__["Utils"].isBlank(date)) {
            return this.translateService.instant('currentEducation');
        }
        var dateObject = _global_utils__WEBPACK_IMPORTED_MODULE_6__["Utils"].getDateMMMYY(date);
        return this.translateService.instant(dateObject.month) + ' ' + dateObject.year;
    };
    EducationPage.prototype.ngOnDestroy = function () {
        this.disconnectObservers();
    };
    EducationPage.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _ngxs_store__WEBPACK_IMPORTED_MODULE_5__["Store"] },
        { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateService"] }
    ]; };
    EducationPage.propDecorators = {
        editable: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }]
    };
    EducationPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-education',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./education.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/profiles/user/components/education/education.page.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./education.page.scss */ "./src/app/profiles/user/components/education/education.page.scss")).default]
        })
    ], EducationPage);
    return EducationPage;
}());



/***/ }),

/***/ "./src/app/profiles/user/components/experience/experience.module.ts":
/*!**************************************************************************!*\
  !*** ./src/app/profiles/user/components/experience/experience.module.ts ***!
  \**************************************************************************/
/*! exports provided: ExperiencePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExperiencePageModule", function() { return ExperiencePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _experience_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./experience.page */ "./src/app/profiles/user/components/experience/experience.page.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
/* harmony import */ var _components_shared_profiles_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../components/shared-profiles.module */ "./src/app/profiles/components/shared-profiles.module.ts");
/* harmony import */ var _components_empty_empty_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../components/empty/empty.module */ "./src/app/profiles/components/empty/empty.module.ts");








var ExperiencePageModule = /** @class */ (function () {
    function ExperiencePageModule() {
    }
    ExperiencePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateModule"].forChild(), _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"], _components_shared_profiles_module__WEBPACK_IMPORTED_MODULE_6__["SharedProfilesModule"], _components_empty_empty_module__WEBPACK_IMPORTED_MODULE_7__["EmptyModule"]],
            declarations: [_experience_page__WEBPACK_IMPORTED_MODULE_2__["ExperiencePage"]],
            exports: [_experience_page__WEBPACK_IMPORTED_MODULE_2__["ExperiencePage"]],
        })
    ], ExperiencePageModule);
    return ExperiencePageModule;
}());



/***/ }),

/***/ "./src/app/profiles/user/components/experience/experience.page.scss":
/*!**************************************************************************!*\
  !*** ./src/app/profiles/user/components/experience/experience.page.scss ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".item-profile .icon {\n  font-size: 26px;\n}\n\n.last-item {\n  margin-top: 4px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvZmlsZXMvdXNlci9jb21wb25lbnRzL2V4cGVyaWVuY2UvZXhwZXJpZW5jZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxlQUFBO0FBQ0Y7O0FBQ0E7RUFDRSxlQUFBO0FBRUYiLCJmaWxlIjoic3JjL2FwcC9wcm9maWxlcy91c2VyL2NvbXBvbmVudHMvZXhwZXJpZW5jZS9leHBlcmllbmNlLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5pdGVtLXByb2ZpbGUgLmljb24ge1xuICBmb250LXNpemU6IDI2cHg7XG59XG4ubGFzdC1pdGVtIHtcbiAgbWFyZ2luLXRvcDogNHB4O1xufVxuIl19 */");

/***/ }),

/***/ "./src/app/profiles/user/components/experience/experience.page.ts":
/*!************************************************************************!*\
  !*** ./src/app/profiles/user/components/experience/experience.page.ts ***!
  \************************************************************************/
/*! exports provided: ExperiencePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExperiencePage", function() { return ExperiencePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _types_item_profile_type__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../types/item-profile-type */ "./src/app/profiles/types/item-profile-type.ts");
/* harmony import */ var _store_user_user_state__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../@store/user/user.state */ "./src/app/@store/user/user.state.ts");
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngxs/store */ "./node_modules/@ngxs/store/__ivy_ngcc__/fesm2015/ngxs-store.js");
/* harmony import */ var _global_utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../@global/utils */ "./src/app/@global/utils.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");








var ExperiencePage = /** @class */ (function () {
    function ExperiencePage(router, store, translateService) {
        this.router = router;
        this.store = store;
        this.translateService = translateService;
        this.items = [];
    }
    ExperiencePage.prototype.ngOnInit = function () {
        var _this = this;
        this.subscription$ = this.store.select(_store_user_user_state__WEBPACK_IMPORTED_MODULE_4__["UserState"].getExperienceProfile).subscribe(function (data) {
            _this.items = data;
        });
    };
    ExperiencePage.prototype.getFormatDate = function (date) {
        if (_global_utils__WEBPACK_IMPORTED_MODULE_6__["Utils"].isBlank(date)) {
            return this.translateService.instant('currentExperience');
        }
        var dateObject = _global_utils__WEBPACK_IMPORTED_MODULE_6__["Utils"].getDateMMMYY(date);
        return this.translateService.instant(dateObject.month) + ' ' + dateObject.year;
    };
    ExperiencePage.prototype.addItem = function () {
        var navigationExtras = {
            state: {
                itemType: _types_item_profile_type__WEBPACK_IMPORTED_MODULE_3__["ItemProfileTypes"].Experience,
            },
        };
        this.router.navigate(['/add-item'], navigationExtras);
    };
    ExperiencePage.prototype.onEditClick = function ($event) {
        var navigationExtras = {
            state: {
                itemType: _types_item_profile_type__WEBPACK_IMPORTED_MODULE_3__["ItemProfileTypes"].Experience,
                id: $event,
            },
        };
        this.router.navigate(['/add-item'], navigationExtras);
    };
    ExperiencePage.prototype.disconnectObservers = function () {
        this.subscription$.unsubscribe();
    };
    ExperiencePage.prototype.ngOnDestroy = function () {
        this.disconnectObservers();
    };
    ExperiencePage.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _ngxs_store__WEBPACK_IMPORTED_MODULE_5__["Store"] },
        { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateService"] }
    ]; };
    ExperiencePage.propDecorators = {
        editable: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }]
    };
    ExperiencePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-experience',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./experience.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/profiles/user/components/experience/experience.page.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./experience.page.scss */ "./src/app/profiles/user/components/experience/experience.page.scss")).default]
        })
    ], ExperiencePage);
    return ExperiencePage;
}());



/***/ }),

/***/ "./src/app/profiles/user/components/skills/skills.module.ts":
/*!******************************************************************!*\
  !*** ./src/app/profiles/user/components/skills/skills.module.ts ***!
  \******************************************************************/
/*! exports provided: SkillsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SkillsPageModule", function() { return SkillsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _skills_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./skills.page */ "./src/app/profiles/user/components/skills/skills.page.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
/* harmony import */ var _components_section_title_section_title_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../components/section-title/section-title.module */ "./src/app/profiles/components/section-title/section-title.module.ts");
/* harmony import */ var _components_empty_empty_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../components/empty/empty.module */ "./src/app/profiles/components/empty/empty.module.ts");








var SkillsPageModule = /** @class */ (function () {
    function SkillsPageModule() {
    }
    SkillsPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonicModule"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"], _components_section_title_section_title_module__WEBPACK_IMPORTED_MODULE_6__["SectionTitleModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateModule"].forChild(), _components_empty_empty_module__WEBPACK_IMPORTED_MODULE_7__["EmptyModule"]],
            declarations: [_skills_page__WEBPACK_IMPORTED_MODULE_4__["SkillsPage"]],
            exports: [_skills_page__WEBPACK_IMPORTED_MODULE_4__["SkillsPage"]],
        })
    ], SkillsPageModule);
    return SkillsPageModule;
}());



/***/ }),

/***/ "./src/app/profiles/user/components/skills/skills.page.scss":
/*!******************************************************************!*\
  !*** ./src/app/profiles/user/components/skills/skills.page.scss ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".item {\n  padding-bottom: 10px;\n  padding-top: 10px;\n  margin-bottom: 2px;\n}\n\n.icon {\n  position: absolute;\n  top: 8px;\n  font-size: 20px;\n  right: 20px;\n  color: var(--ion-color-secondary);\n}\n\n.not-overflow {\n  max-width: 98%;\n}\n\n.not-overflow-icon {\n  max-width: 85%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvZmlsZXMvdXNlci9jb21wb25lbnRzL3NraWxscy9za2lsbHMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usb0JBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FBQ0Y7O0FBQ0E7RUFDRSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtFQUNBLGlDQUFBO0FBRUY7O0FBQUE7RUFDRSxjQUFBO0FBR0Y7O0FBREE7RUFDRSxjQUFBO0FBSUYiLCJmaWxlIjoic3JjL2FwcC9wcm9maWxlcy91c2VyL2NvbXBvbmVudHMvc2tpbGxzL3NraWxscy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaXRlbSB7XG4gIHBhZGRpbmctYm90dG9tOiAxMHB4O1xuICBwYWRkaW5nLXRvcDogMTBweDtcbiAgbWFyZ2luLWJvdHRvbTogMnB4O1xufVxuLmljb24ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogOHB4O1xuICBmb250LXNpemU6IDIwcHg7XG4gIHJpZ2h0OiAyMHB4O1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXNlY29uZGFyeSk7XG59XG4ubm90LW92ZXJmbG93IHtcbiAgbWF4LXdpZHRoOiA5OCU7XG59XG4ubm90LW92ZXJmbG93LWljb24ge1xuICBtYXgtd2lkdGg6IDg1JTtcbn1cbiJdfQ== */");

/***/ }),

/***/ "./src/app/profiles/user/components/skills/skills.page.ts":
/*!****************************************************************!*\
  !*** ./src/app/profiles/user/components/skills/skills.page.ts ***!
  \****************************************************************/
/*! exports provided: SkillsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SkillsPage", function() { return SkillsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _types_item_profile_type__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../types/item-profile-type */ "./src/app/profiles/types/item-profile-type.ts");
/* harmony import */ var _store_user_user_state__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../@store/user/user.state */ "./src/app/@store/user/user.state.ts");
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngxs/store */ "./node_modules/@ngxs/store/__ivy_ngcc__/fesm2015/ngxs-store.js");
/* harmony import */ var _store_user_user_actions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../@store/user/user.actions */ "./src/app/@store/user/user.actions.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var src_app_global_constants__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/@global/constants */ "./src/app/@global/constants.ts");










var SkillsPage = /** @class */ (function () {
    function SkillsPage(router, store, translateService, alertController) {
        this.router = router;
        this.store = store;
        this.translateService = translateService;
        this.alertController = alertController;
        this.items = [];
        this.maxSkills = src_app_global_constants__WEBPACK_IMPORTED_MODULE_9__["Constants"].MAX_SKILLS;
    }
    SkillsPage.prototype.ngOnInit = function () {
        var _this = this;
        this.subscription$ = this.store.select(_store_user_user_state__WEBPACK_IMPORTED_MODULE_4__["UserState"].getSkillProfile).subscribe(function (data) {
            _this.items = data;
        });
    };
    SkillsPage.prototype.addItem = function () {
        var navigationExtras = {
            state: {
                itemType: _types_item_profile_type__WEBPACK_IMPORTED_MODULE_3__["ItemProfileTypes"].Skill,
            },
        };
        this.router.navigate(['/add-item'], navigationExtras);
    };
    SkillsPage.prototype.disconnectObservers = function () {
        this.subscription$.unsubscribe();
    };
    SkillsPage.prototype.ngOnDestroy = function () {
        this.disconnectObservers();
    };
    SkillsPage.prototype.onDeleteClick = function (id, skillTitle) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var title, cancelButton, acceptButton, message, alert;
            var _this = this;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        title = this.translateService.instant("userProfile.deleteTitle3");
                        cancelButton = this.translateService.instant("buttons.cancel");
                        acceptButton = this.translateService.instant("buttons.accept");
                        return [4 /*yield*/, this.translateService.get('userProfile.deleteMessage', { name: skillTitle }).toPromise()];
                    case 1:
                        message = _a.sent();
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
                                            _this.deleteSkill(id);
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
    SkillsPage.prototype.deleteSkill = function (id) {
        this.store.dispatch(new _store_user_user_actions__WEBPACK_IMPORTED_MODULE_6__["DeleteSkillExperience"]({ id: id }));
    };
    SkillsPage.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _ngxs_store__WEBPACK_IMPORTED_MODULE_5__["Store"] },
        { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["AlertController"] }
    ]; };
    SkillsPage.propDecorators = {
        editable: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }]
    };
    SkillsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-skills',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./skills.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/profiles/user/components/skills/skills.page.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./skills.page.scss */ "./src/app/profiles/user/components/skills/skills.page.scss")).default]
        })
    ], SkillsPage);
    return SkillsPage;
}());



/***/ }),

/***/ "./src/app/profiles/user/user-profile/modal/modal.module.ts":
/*!******************************************************************!*\
  !*** ./src/app/profiles/user/user-profile/modal/modal.module.ts ***!
  \******************************************************************/
/*! exports provided: ModalModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalModule", function() { return ModalModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../@shared/shared.module */ "./src/app/@shared/shared.module.ts");
/* harmony import */ var _modal_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modal.component */ "./src/app/profiles/user/user-profile/modal/modal.component.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");





var ModalModule = /** @class */ (function () {
    function ModalModule() {
    }
    ModalModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_modal_component__WEBPACK_IMPORTED_MODULE_3__["ModalComponent"]],
            imports: [_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__["SharedModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateModule"].forChild()],
            exports: [_modal_component__WEBPACK_IMPORTED_MODULE_3__["ModalComponent"]],
        })
    ], ModalModule);
    return ModalModule;
}());



/***/ }),

/***/ "./src/app/profiles/user/user-profile/user-profile-routing.module.ts":
/*!***************************************************************************!*\
  !*** ./src/app/profiles/user/user-profile/user-profile-routing.module.ts ***!
  \***************************************************************************/
/*! exports provided: UserProfilePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserProfilePageRoutingModule", function() { return UserProfilePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _user_profile_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./user-profile.page */ "./src/app/profiles/user/user-profile/user-profile.page.ts");




var routes = [
    {
        path: '',
        component: _user_profile_page__WEBPACK_IMPORTED_MODULE_3__["UserProfilePage"],
    },
];
var UserProfilePageRoutingModule = /** @class */ (function () {
    function UserProfilePageRoutingModule() {
    }
    UserProfilePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], UserProfilePageRoutingModule);
    return UserProfilePageRoutingModule;
}());



/***/ }),

/***/ "./src/app/profiles/user/user-profile/user-profile.module.ts":
/*!*******************************************************************!*\
  !*** ./src/app/profiles/user/user-profile/user-profile.module.ts ***!
  \*******************************************************************/
/*! exports provided: UserProfilePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserProfilePageModule", function() { return UserProfilePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _user_profile_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./user-profile-routing.module */ "./src/app/profiles/user/user-profile/user-profile-routing.module.ts");
/* harmony import */ var _user_profile_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./user-profile.page */ "./src/app/profiles/user/user-profile/user-profile.page.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../@shared/shared.module */ "./src/app/@shared/shared.module.ts");
/* harmony import */ var _components_shared_profiles_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/shared-profiles.module */ "./src/app/profiles/components/shared-profiles.module.ts");
/* harmony import */ var _components_experience_experience_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/experience/experience.module */ "./src/app/profiles/user/components/experience/experience.module.ts");
/* harmony import */ var _components_education_education_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/education/education.module */ "./src/app/profiles/user/components/education/education.module.ts");
/* harmony import */ var _components_skills_skills_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/skills/skills.module */ "./src/app/profiles/user/components/skills/skills.module.ts");
/* harmony import */ var _modal_modal_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./modal/modal.module */ "./src/app/profiles/user/user-profile/modal/modal.module.ts");










var UserProfilePageModule = /** @class */ (function () {
    function UserProfilePageModule() {
    }
    UserProfilePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"],
                _user_profile_routing_module__WEBPACK_IMPORTED_MODULE_2__["UserProfilePageRoutingModule"],
                _components_experience_experience_module__WEBPACK_IMPORTED_MODULE_6__["ExperiencePageModule"],
                _components_education_education_module__WEBPACK_IMPORTED_MODULE_7__["EducationPageModule"],
                _components_skills_skills_module__WEBPACK_IMPORTED_MODULE_8__["SkillsPageModule"],
                _components_shared_profiles_module__WEBPACK_IMPORTED_MODULE_5__["SharedProfilesModule"],
                _modal_modal_module__WEBPACK_IMPORTED_MODULE_9__["ModalModule"],
            ],
            declarations: [_user_profile_page__WEBPACK_IMPORTED_MODULE_3__["UserProfilePage"]],
        })
    ], UserProfilePageModule);
    return UserProfilePageModule;
}());



/***/ })

}]);
//# sourceMappingURL=profiles-user-user-profile-user-profile-module.js.map