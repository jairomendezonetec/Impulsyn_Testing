(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["create-post-create-post-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/@shared/components/link-preview/link-preview.component.html":
/*!*******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/@shared/components/link-preview/link-preview.component.html ***!
  \*******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-card (click)=\"openLink($event)\" *ngIf=\"linkData\" class=\"link-preview\">\n  <img *ngIf=\"linkData.image\" [src]=\"linkData.image\" alt=\"{{ 'Image site: ' + linkData.siteName }}\" />\n  <ion-card-header>\n    <ion-card-subtitle *ngIf=\"linkData.siteName\" class=\"ion-text-uppercase small-size\">{{\n      linkData.siteName\n    }}</ion-card-subtitle>\n    <ion-card-title *ngIf=\"linkData.title\" class=\"big-size bold\">{{ linkData.title }}</ion-card-title>\n  </ion-card-header>\n  <ion-card-content *ngIf=\"linkData.description\">\n    {{ linkData.description }}\n  </ion-card-content>\n</ion-card>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/create-post/create-post.page.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/create-post/create-post.page.html ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-header\n  [showBackButton]=\"showBackButton\"\n  [title]=\"'createPost.title'\"\n  [actionButton]=\"'createPost.post'\"\n  (backButtonClick)=\"goBack()\"\n  (actionButtonClick)=\"createPost()\"\n></app-header>\n\n<ion-content>\n  <div class=\"create-post-content\">\n    <form [formGroup]=\"formGroup\">\n      <!-- Publisher Option -->\n      <div class=\"publisher-options-container\">\n        <div class=\"publisher-option-image-border\">\n          <div class=\"publisher-option-image\" [style.backgroundImage]=\"'url(' + profileImage + ')'\"></div>\n        </div>\n        <ion-select\n          [formControlName]=\"'publisherId'\"\n          okText=\"{{ 'buttons.accept' | translate}}\"\n          cancelText=\"{{ 'buttons.cancel' | translate}}\"\n          [interfaceOptions]=\"customActionSheetOptions\"\n          interface=\"action-sheet\"\n        >\n          <ion-select-option *ngFor=\"let publisherOption of publisherOptionList\" [value]=\"publisherOption.id\">\n            {{publisherOption.name}}</ion-select-option\n          >\n        </ion-select>\n      </div>\n\n      <!-- Publication Description -->\n      <ion-textarea\n        class=\"small-size description-area\"\n        inputmode=\"text\"\n        rows=\"8\"\n        [placeholder]=\"'createPost.descriptionPlaceholder' | translate\"\n        [formControlName]=\"'description'\"\n        [maxlength]=\"maxDescriptionSize\"\n      >\n      </ion-textarea>\n      <div class=\"small-size description-counter\" [ngClass]=\"formGroup.get('description').invalid?'danger':''\">\n        {{formGroup.get('description').value.length + '/' + maxDescriptionSize}}\n      </div>\n\n      <!-- Publication Media Image -->\n      <div *ngIf=\"postMedia?.type === mediaTypes.IMAGE\" class=\"publication-media-img ion-margin-top\">\n        <img class=\"camera-media\" [src]=\"postMedia?.path\" />\n        <ion-icon name=\"close-outline\" class=\"close-icon\" (click)=\"removeMedia()\"></ion-icon>\n      </div>\n\n      <!-- Publication Media Video -->\n      <div class=\"pr ion-margin-top inline-block\">\n        <div *ngIf=\"postMedia?.type === mediaTypes.VIDEO\" class=\"publication-media-video\">\n          <video\n            id=\"videoMiniature\"\n            class=\"camera-media\"\n            preload=\"auto\"\n            controls\n            controlsList=\"nodownload\"\n            disablepictureinpicture\n          >\n            <source [src]=\"postMedia?.path\" />\n          </video>\n          <ion-icon name=\"close-outline\" class=\"close-icon\" (click)=\"removeMedia()\"></ion-icon>\n        </div>\n      </div>\n\n      <!-- Publication Media Link -->\n      <div *ngIf=\"postMedia?.type === mediaTypes.LINK\" class=\"publication-media-link ion-margin-top\">\n        <app-link-preview [linkData]=\"postMedia.linkData\"></app-link-preview>\n        <ion-icon name=\"close-outline\" class=\"close-icon\" (click)=\"removeMedia()\"></ion-icon>\n      </div>\n    </form>\n  </div>\n\n  <div class=\"create-post-footer small-size ion-no-border\">\n    <ion-list>\n      <ion-item [disabled]=\"postMedia\" (click)=\"showSelectCameraMediaSource(camera.MediaType.PICTURE)\">\n        <ion-icon name=\"image-outline\"></ion-icon>\n        <ion-label>{{ 'createPost.addImage' | translate }}</ion-label>\n      </ion-item>\n      <ion-item [disabled]=\"postMedia\" (click)=\"showSelectCameraMediaSource(camera.MediaType.VIDEO)\">\n        <ion-icon name=\"videocam-outline\"></ion-icon>\n        <ion-label>{{ 'createPost.addVideo' | translate }}</ion-label>\n      </ion-item>\n    </ion-list>\n  </div>\n</ion-content>\n");

/***/ }),

/***/ "./src/app/@core/link-preview.service.ts":
/*!***********************************************!*\
  !*** ./src/app/@core/link-preview.service.ts ***!
  \***********************************************/
/*! exports provided: LinkPreviewService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LinkPreviewService", function() { return LinkPreviewService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var aws_amplify__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! aws-amplify */ "./node_modules/aws-amplify/lib-esm/index.js");
/* harmony import */ var _graphql_queries__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../graphql/queries */ "./src/graphql/queries.ts");




var LinkPreviewService = /** @class */ (function () {
    function LinkPreviewService() {
    }
    LinkPreviewService.prototype.getLinkPreview = function (url) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                return [2 /*return*/, aws_amplify__WEBPACK_IMPORTED_MODULE_2__["API"].graphql(Object(aws_amplify__WEBPACK_IMPORTED_MODULE_2__["graphqlOperation"])(_graphql_queries__WEBPACK_IMPORTED_MODULE_3__["getLinkMetadata"], { url: url }))];
            });
        });
    };
    LinkPreviewService.ctorParameters = function () { return []; };
    LinkPreviewService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root',
        })
    ], LinkPreviewService);
    return LinkPreviewService;
}());



/***/ }),

/***/ "./src/app/@shared/components/link-preview/link-preview.component.scss":
/*!*****************************************************************************!*\
  !*** ./src/app/@shared/components/link-preview/link-preview.component.scss ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-card.link-preview {\n  width: 95%;\n  margin: auto;\n}\nion-card.link-preview ion-card-content {\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  overflow: hidden;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQHNoYXJlZC9jb21wb25lbnRzL2xpbmstcHJldmlldy9saW5rLXByZXZpZXcuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxVQUFBO0VBQ0EsWUFBQTtBQUNGO0FBQUU7RUFDRSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7QUFFSiIsImZpbGUiOiJzcmMvYXBwL0BzaGFyZWQvY29tcG9uZW50cy9saW5rLXByZXZpZXcvbGluay1wcmV2aWV3LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNhcmQubGluay1wcmV2aWV3IHtcbiAgd2lkdGg6IDk1JTtcbiAgbWFyZ2luOiBhdXRvO1xuICBpb24tY2FyZC1jb250ZW50IHtcbiAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gIH1cbn1cbiJdfQ== */");

/***/ }),

/***/ "./src/app/@shared/components/link-preview/link-preview.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/@shared/components/link-preview/link-preview.component.ts ***!
  \***************************************************************************/
/*! exports provided: LinkPreviewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LinkPreviewComponent", function() { return LinkPreviewComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_core_utils_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/@core/utils.service */ "./src/app/@core/utils.service.ts");



var LinkPreviewComponent = /** @class */ (function () {
    function LinkPreviewComponent(utilsService) {
        this.utilsService = utilsService;
    }
    LinkPreviewComponent.prototype.ngOnInit = function () { };
    LinkPreviewComponent.prototype.openLink = function (event) {
        event.stopPropagation();
        this.utilsService.openLink(this.linkData.url);
    };
    LinkPreviewComponent.ctorParameters = function () { return [
        { type: src_app_core_utils_service__WEBPACK_IMPORTED_MODULE_2__["UtilsService"] }
    ]; };
    LinkPreviewComponent.propDecorators = {
        linkData: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }]
    };
    LinkPreviewComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-link-preview',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./link-preview.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/@shared/components/link-preview/link-preview.component.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./link-preview.component.scss */ "./src/app/@shared/components/link-preview/link-preview.component.scss")).default]
        })
    ], LinkPreviewComponent);
    return LinkPreviewComponent;
}());



/***/ }),

/***/ "./src/app/@shared/components/link-preview/link-preview.module.ts":
/*!************************************************************************!*\
  !*** ./src/app/@shared/components/link-preview/link-preview.module.ts ***!
  \************************************************************************/
/*! exports provided: LinkPreviewComponentModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LinkPreviewComponentModule", function() { return LinkPreviewComponentModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _link_preview_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./link-preview.component */ "./src/app/@shared/components/link-preview/link-preview.component.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");





var LinkPreviewComponentModule = /** @class */ (function () {
    function LinkPreviewComponentModule() {
    }
    LinkPreviewComponentModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_link_preview_component__WEBPACK_IMPORTED_MODULE_3__["LinkPreviewComponent"]],
            imports: [_ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]],
            exports: [_link_preview_component__WEBPACK_IMPORTED_MODULE_3__["LinkPreviewComponent"]],
        })
    ], LinkPreviewComponentModule);
    return LinkPreviewComponentModule;
}());



/***/ }),

/***/ "./src/app/create-post/create-post-routing.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/create-post/create-post-routing.module.ts ***!
  \***********************************************************/
/*! exports provided: CreatePostPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreatePostPageRoutingModule", function() { return CreatePostPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _create_post_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./create-post.page */ "./src/app/create-post/create-post.page.ts");




var routes = [
    {
        path: '',
        component: _create_post_page__WEBPACK_IMPORTED_MODULE_3__["CreatePostPage"],
    },
];
var CreatePostPageRoutingModule = /** @class */ (function () {
    function CreatePostPageRoutingModule() {
    }
    CreatePostPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], CreatePostPageRoutingModule);
    return CreatePostPageRoutingModule;
}());



/***/ }),

/***/ "./src/app/create-post/create-post.module.ts":
/*!***************************************************!*\
  !*** ./src/app/create-post/create-post.module.ts ***!
  \***************************************************/
/*! exports provided: CreatePostPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreatePostPageModule", function() { return CreatePostPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _create_post_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./create-post-routing.module */ "./src/app/create-post/create-post-routing.module.ts");
/* harmony import */ var _create_post_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./create-post.page */ "./src/app/create-post/create-post.page.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../@shared/shared.module */ "./src/app/@shared/shared.module.ts");
/* harmony import */ var _shared_components_link_preview_link_preview_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../@shared/components/link-preview/link-preview.module */ "./src/app/@shared/components/link-preview/link-preview.module.ts");






var CreatePostPageModule = /** @class */ (function () {
    function CreatePostPageModule() {
    }
    CreatePostPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"], _create_post_routing_module__WEBPACK_IMPORTED_MODULE_2__["CreatePostPageRoutingModule"], _shared_components_link_preview_link_preview_module__WEBPACK_IMPORTED_MODULE_5__["LinkPreviewComponentModule"]],
            declarations: [_create_post_page__WEBPACK_IMPORTED_MODULE_3__["CreatePostPage"]],
        })
    ], CreatePostPageModule);
    return CreatePostPageModule;
}());



/***/ }),

/***/ "./src/app/create-post/create-post.page.scss":
/*!***************************************************!*\
  !*** ./src/app/create-post/create-post.page.scss ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".create-post-content {\n  padding: 16px 16px 100px 16px;\n}\n.create-post-content .publisher-options-container {\n  display: flex;\n}\n.create-post-content .publisher-option-image-border {\n  border: 1px var(--ion-color-secondary) solid;\n  border-radius: 50%;\n  padding: 1px;\n  width: 40px;\n  height: 40px;\n}\n.create-post-content .publisher-option-image-border .publisher-option-image {\n  width: 100%;\n  height: 100%;\n  min-width: 36px;\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: cover;\n  border-radius: 50%;\n}\n.create-post-content .publication-media-img {\n  position: relative;\n  width: 75px;\n  height: 75px;\n}\n.create-post-content .publication-media-img img {\n  width: 100%;\n  height: 100%;\n  border-radius: 15px;\n  -o-object-fit: cover;\n     object-fit: cover;\n  -o-object-position: center;\n     object-position: center;\n  box-shadow: rgba(0, 0, 0, 0.2) 0px 3px 1px -2px, rgba(0, 0, 0, 0.14) 0px 2px 2px 0px, rgba(0, 0, 0, 0.12) 0px 1px 5px 0px;\n}\n.create-post-content .publication-media-video {\n  max-width: 100%;\n  height: 150px;\n  border-radius: 15px;\n  overflow: hidden;\n}\n.create-post-content .publication-media-video video {\n  max-width: 100%;\n  max-height: 100%;\n  border-radius: 15px;\n  box-shadow: rgba(0, 0, 0, 0.2) 0px 3px 1px -2px, rgba(0, 0, 0, 0.14) 0px 2px 2px 0px, rgba(0, 0, 0, 0.12) 0px 1px 5px 0px;\n}\n.create-post-content .close-icon {\n  position: absolute;\n  top: 0;\n  right: 0;\n  width: 25px;\n  height: 25px;\n  transform: translate(35%, -35%);\n  color: white;\n  background-color: var(--ion-color-secondary);\n  border-radius: 50%;\n}\n.create-post-content .publication-media-link {\n  position: relative;\n  max-width: 80%;\n  padding-bottom: 10px;\n}\n.create-post-content .publication-media-link .close-icon {\n  right: 10px;\n}\n.create-post-footer {\n  width: 100%;\n  position: fixed;\n  bottom: 0;\n  background-color: #ffffff;\n  border: 2px solid var(--ion-color-tertiary);\n}\n.create-post-footer ion-item {\n  --background: white;\n  --border-color: transparent;\n}\n.create-post-footer ion-item ion-label {\n  margin-left: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY3JlYXRlLXBvc3QvY3JlYXRlLXBvc3QucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0UsNkJBQUE7QUFBRjtBQUVFO0VBQ0UsYUFBQTtBQUFKO0FBR0U7RUFDRSw0Q0FBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FBREo7QUFHSTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLDJCQUFBO0VBQ0EsNEJBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0FBRE47QUFLRTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUFISjtBQUtJO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLG9CQUFBO0tBQUEsaUJBQUE7RUFDQSwwQkFBQTtLQUFBLHVCQUFBO0VBQ0EseUhBQUE7QUFITjtBQU9FO0VBQ0UsZUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0FBTEo7QUFPSTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EseUhBQUE7QUFMTjtBQVNFO0VBQ0Usa0JBQUE7RUFDQSxNQUFBO0VBQ0EsUUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsK0JBQUE7RUFDQSxZQUFBO0VBQ0EsNENBQUE7RUFDQSxrQkFBQTtBQVBKO0FBVUU7RUFDRSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxvQkFBQTtBQVJKO0FBU0k7RUFDRSxXQUFBO0FBUE47QUFhQTtFQUNFLFdBQUE7RUFDQSxlQUFBO0VBQ0EsU0FBQTtFQUNBLHlCQUFBO0VBQ0EsMkNBQUE7QUFWRjtBQVlFO0VBQ0UsbUJBQUE7RUFDQSwyQkFBQTtBQVZKO0FBWUk7RUFDRSxnQkFBQTtBQVZOIiwiZmlsZSI6InNyYy9hcHAvY3JlYXRlLXBvc3QvY3JlYXRlLXBvc3QucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gQ29udGVudFxuLmNyZWF0ZS1wb3N0LWNvbnRlbnQge1xuICBwYWRkaW5nOiAxNnB4IDE2cHggMTAwcHggMTZweDtcblxuICAucHVibGlzaGVyLW9wdGlvbnMtY29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICB9XG5cbiAgLnB1Ymxpc2hlci1vcHRpb24taW1hZ2UtYm9yZGVyIHtcbiAgICBib3JkZXI6IDFweCB2YXIoLS1pb24tY29sb3Itc2Vjb25kYXJ5KSBzb2xpZDtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgcGFkZGluZzogMXB4O1xuICAgIHdpZHRoOiA0MHB4O1xuICAgIGhlaWdodDogNDBweDtcblxuICAgIC5wdWJsaXNoZXItb3B0aW9uLWltYWdlIHtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgbWluLXdpZHRoOiAzNnB4O1xuICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgfVxuICB9XG5cbiAgLnB1YmxpY2F0aW9uLW1lZGlhLWltZyB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHdpZHRoOiA3NXB4O1xuICAgIGhlaWdodDogNzVweDtcblxuICAgIGltZyB7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XG4gICAgICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgICAgIG9iamVjdC1wb3NpdGlvbjogY2VudGVyO1xuICAgICAgYm94LXNoYWRvdzogcmdiKDAgMCAwIC8gMjAlKSAwcHggM3B4IDFweCAtMnB4LCByZ2IoMCAwIDAgLyAxNCUpIDBweCAycHggMnB4IDBweCwgcmdiKDAgMCAwIC8gMTIlKSAwcHggMXB4IDVweCAwcHg7XG4gICAgfVxuICB9XG5cbiAgLnB1YmxpY2F0aW9uLW1lZGlhLXZpZGVvIHtcbiAgICBtYXgtd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxNTBweDtcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG5cbiAgICB2aWRlbyB7XG4gICAgICBtYXgtd2lkdGg6IDEwMCU7XG4gICAgICBtYXgtaGVpZ2h0OiAxMDAlO1xuICAgICAgYm9yZGVyLXJhZGl1czogMTVweDtcbiAgICAgIGJveC1zaGFkb3c6IHJnYigwIDAgMCAvIDIwJSkgMHB4IDNweCAxcHggLTJweCwgcmdiKDAgMCAwIC8gMTQlKSAwcHggMnB4IDJweCAwcHgsIHJnYigwIDAgMCAvIDEyJSkgMHB4IDFweCA1cHggMHB4O1xuICAgIH1cbiAgfVxuXG4gIC5jbG9zZS1pY29uIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAwO1xuICAgIHJpZ2h0OiAwO1xuICAgIHdpZHRoOiAyNXB4O1xuICAgIGhlaWdodDogMjVweDtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgzNSUsIC0zNSUpO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pb24tY29sb3Itc2Vjb25kYXJ5KTtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIH1cblxuICAucHVibGljYXRpb24tbWVkaWEtbGluayB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIG1heC13aWR0aDogODAlO1xuICAgIHBhZGRpbmctYm90dG9tOiAxMHB4O1xuICAgIC5jbG9zZS1pY29uIHtcbiAgICAgIHJpZ2h0OiAxMHB4O1xuICAgIH1cbiAgfVxufVxuXG4vLyBGb290ZXJcbi5jcmVhdGUtcG9zdC1mb290ZXIge1xuICB3aWR0aDogMTAwJTtcbiAgcG9zaXRpb246IGZpeGVkO1xuICBib3R0b206IDA7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XG4gIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLWlvbi1jb2xvci10ZXJ0aWFyeSk7XG5cbiAgaW9uLWl0ZW0ge1xuICAgIC0tYmFja2dyb3VuZDogd2hpdGU7XG4gICAgLS1ib3JkZXItY29sb3I6IHRyYW5zcGFyZW50O1xuXG4gICAgaW9uLWxhYmVsIHtcbiAgICAgIG1hcmdpbi1sZWZ0OiA1cHg7XG4gICAgfVxuICB9XG59XG4iXX0= */");

/***/ }),

/***/ "./src/app/create-post/create-post.page.ts":
/*!*************************************************!*\
  !*** ./src/app/create-post/create-post.page.ts ***!
  \*************************************************/
/*! exports provided: CreatePostPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreatePostPage", function() { return CreatePostPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _base_base_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../base/base.page */ "./src/app/base/base.page.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngxs/store */ "./node_modules/@ngxs/store/__ivy_ngcc__/fesm2015/ngxs-store.js");
/* harmony import */ var _core_utils_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../@core/utils.service */ "./src/app/@core/utils.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _store_pages_pages_state__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../@store/pages/pages.state */ "./src/app/@store/pages/pages.state.ts");
/* harmony import */ var _store_user_user_state__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../@store/user/user.state */ "./src/app/@store/user/user.state.ts");
/* harmony import */ var _store_auth_auth_state__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../@store/auth/auth.state */ "./src/app/@store/auth/auth.state.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
/* harmony import */ var _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ionic-native/camera/ngx */ "./node_modules/@ionic-native/camera/__ivy_ngcc__/ngx/index.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _ionic_native_ionic_webview__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ionic-native/ionic-webview */ "./node_modules/@ionic-native/ionic-webview/index.js");
/* harmony import */ var _env_environment__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @env/environment */ "./src/environments/environment.ts");
/* harmony import */ var _ionic_native_media_capture_ngx__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @ionic-native/media-capture/ngx */ "./node_modules/@ionic-native/media-capture/__ivy_ngcc__/ngx/index.js");
/* harmony import */ var _global_utils__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../@global/utils */ "./src/app/@global/utils.ts");
/* harmony import */ var _core_link_preview_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../@core/link-preview.service */ "./src/app/@core/link-preview.service.ts");
/* harmony import */ var _store_posts_posts_actions__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../@store/posts/posts.actions */ "./src/app/@store/posts/posts.actions.ts");
/* harmony import */ var _core_inform_service__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../@core/inform.service */ "./src/app/@core/inform.service.ts");
/* harmony import */ var _store_posts_posts_state__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../@store/posts/posts.state */ "./src/app/@store/posts/posts.state.ts");
/* harmony import */ var _global_constants__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../@global/constants */ "./src/app/@global/constants.ts");
/* harmony import */ var _shared_enums_publication_type__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../@shared/enums/publication-type */ "./src/app/@shared/enums/publication-type.ts");
























var PUBLISHER_TYPES;
(function (PUBLISHER_TYPES) {
    PUBLISHER_TYPES["USER_PROFILE"] = "USER_PROFILE";
    PUBLISHER_TYPES["ORGANIZATION"] = "ORGANIZATION";
})(PUBLISHER_TYPES || (PUBLISHER_TYPES = {}));
var CreatePostPage = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(CreatePostPage, _super);
    function CreatePostPage(location, router, store, utilsService, camera, formBuilder, translate, domSanitizer, mediaCapture, linkPreviewService, informService, route) {
        var _this = _super.call(this, location, router, store, utilsService) || this;
        _this.camera = camera;
        _this.formBuilder = formBuilder;
        _this.translate = translate;
        _this.domSanitizer = domSanitizer;
        _this.mediaCapture = mediaCapture;
        _this.linkPreviewService = linkPreviewService;
        _this.informService = informService;
        _this.route = route;
        _this.publisherOptionList = [];
        _this.actionButtonTitle = 'Post';
        _this.postInProcess = false;
        _this.mediaTypes = _shared_enums_publication_type__WEBPACK_IMPORTED_MODULE_23__["PUBLICATION_TYPE"];
        _this.maxDescriptionSize = _global_constants__WEBPACK_IMPORTED_MODULE_22__["Constants"].MAX_PUBLICATION_DESCRIPTION_SIZE;
        _this.profileId = '';
        return _this;
    }
    CreatePostPage.prototype.ngOnInit = function () {
        var _a;
        this.profileId = this.route.snapshot.params['profileId'];
        this.label = this.translate.instant("createPost.selectHeader");
        this.customActionSheetOptions = {
            header: this.label,
            translucent: true,
        };
        this.publisherOptionList = this.getPublisherList();
        this.selectedPublisherOption = this.publisherOptionList[0];
        this.initForm();
        this.subscribeToPublisherOptionChanges();
        this.subscribeToDescriptionChanges();
        this.profileImage = (_a = this.selectedPublisherOption) === null || _a === void 0 ? void 0 : _a.photo;
    };
    CreatePostPage.prototype.doIonViewWillEnter = function () {
        this.postInProcess = false;
    };
    CreatePostPage.prototype.initForm = function () {
        this.formGroup = this.formBuilder.group({
            publisherId: [this.selectedPublisherOption.id, [_angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required]],
            description: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].maxLength(this.maxDescriptionSize)]],
        });
    };
    CreatePostPage.prototype.getPublisherList = function () {
        var e_1, _a;
        var _this = this;
        var userInfo = this.store.selectSnapshot(_store_user_user_state__WEBPACK_IMPORTED_MODULE_9__["UserState"].getUserInfo);
        var userPublisherOption = {
            id: this.store.selectSnapshot(_store_auth_auth_state__WEBPACK_IMPORTED_MODULE_10__["AuthState"].getUserId),
            name: userInfo.complete_name,
            photo: this.store.selectSnapshot(_store_user_user_state__WEBPACK_IMPORTED_MODULE_9__["UserState"].getUserInfo).photo,
            type: PUBLISHER_TYPES.USER_PROFILE,
        };
        var organizationPublisherOptions = [];
        try {
            for (var _b = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__values"])(this.store.selectSnapshot(_store_pages_pages_state__WEBPACK_IMPORTED_MODULE_8__["PagesState"].getUserPageList)), _c = _b.next(); !_c.done; _c = _b.next()) {
                var page = _c.value;
                organizationPublisherOptions.push({
                    id: page.id,
                    name: page.complete_name,
                    photo: page.photo,
                    type: PUBLISHER_TYPES.ORGANIZATION,
                });
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_1) throw e_1.error; }
        }
        // Find publisher id in options and set on the top of the array
        var options = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"])([userPublisherOption], organizationPublisherOptions);
        var from = options.findIndex(function (el) { return el.id === _this.profileId; });
        options.splice(0, 0, options.splice(from, 1)[0]);
        return options;
    };
    CreatePostPage.prototype.subscribeToPublisherOptionChanges = function () {
        var _this = this;
        this.publisherIdSubscription$ = this.formGroup.get('publisherId').valueChanges.subscribe(function (publisherId) {
            var _a;
            _this.selectedPublisherOption = _this.publisherOptionList.find(function (element) { return element.id === publisherId; });
            _this.profileImage = (_a = _this.selectedPublisherOption) === null || _a === void 0 ? void 0 : _a.photo;
        });
    };
    // TODO when link component is in this project: handle error when url is invalid
    CreatePostPage.prototype.subscribeToDescriptionChanges = function () {
        var _this = this;
        var timeout;
        this.descriptionSubscription$ = this.formGroup.get('description').valueChanges.subscribe(function (description) {
            // if there's already some media content link will not be added
            if ((_this.postMedia && _this.postMedia.type !== _shared_enums_publication_type__WEBPACK_IMPORTED_MODULE_23__["PUBLICATION_TYPE"].LINK) || !description) {
                return;
            }
            if (timeout) {
                // if there is a change in the description cancel the previous timeout
                clearTimeout(timeout);
            }
            // wait 500 ms to let user finish write
            timeout = setTimeout(function () {
                var url = _global_utils__WEBPACK_IMPORTED_MODULE_17__["Utils"].getFirstUrlMatch(description);
                if (url) {
                    _this.getLinkMedia(url);
                }
                else {
                    _this.removeMedia();
                }
            }, 1000);
        });
    };
    CreatePostPage.prototype.showSelectCameraMediaSource = function (cameraMediaType) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var buttons;
            var _this = this;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        buttons = [
                            {
                                text: 'cameraOptions.gallery',
                                handler: function () {
                                    _this.getMedia(_this.camera.PictureSourceType.PHOTOLIBRARY, cameraMediaType);
                                },
                            },
                            {
                                text: 'cameraOptions.camera',
                                handler: function () {
                                    _this.getMedia(_this.camera.PictureSourceType.CAMERA, cameraMediaType);
                                },
                            },
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
    CreatePostPage.prototype.getMedia = function (sourceType, mediaType) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var isVideoFromCamera, _a, imageSource, imageOriginalPath, _b, _c, path, filename, file, error_1;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        _d.trys.push([0, 6, , 7]);
                        isVideoFromCamera = sourceType === this.camera.PictureSourceType.CAMERA && mediaType === this.camera.MediaType.VIDEO;
                        if (!isVideoFromCamera) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.captureVideo()];
                    case 1:
                        _b = _d.sent();
                        return [3 /*break*/, 4];
                    case 2: return [4 /*yield*/, this.utilsService.getMediaFromCameraPlugin(sourceType, mediaType)];
                    case 3:
                        _b = _d.sent();
                        _d.label = 4;
                    case 4:
                        _a = _b, imageSource = _a.imageSource, imageOriginalPath = _a.imageOriginalPath;
                        _c = _global_utils__WEBPACK_IMPORTED_MODULE_17__["Utils"].getPathAndFilenameFromUrl(imageOriginalPath), path = _c.path, filename = _c.filename;
                        return [4 /*yield*/, this.utilsService.getFileFromSystemPath(path, filename)];
                    case 5:
                        file = _d.sent();
                        this.postMedia = {
                            path: imageSource,
                            originalPath: imageOriginalPath,
                            type: mediaType === this.camera.MediaType.PICTURE ? _shared_enums_publication_type__WEBPACK_IMPORTED_MODULE_23__["PUBLICATION_TYPE"].IMAGE : _shared_enums_publication_type__WEBPACK_IMPORTED_MODULE_23__["PUBLICATION_TYPE"].VIDEO,
                            file: file,
                        };
                        if (this.postMedia.type === _shared_enums_publication_type__WEBPACK_IMPORTED_MODULE_23__["PUBLICATION_TYPE"].VIDEO && !_global_utils__WEBPACK_IMPORTED_MODULE_17__["Utils"].isVideoMediaType(file.type)) {
                            this.informService.showWarning('createPost.wrongVideoType');
                            this.removeMedia();
                        }
                        if (this.postMedia.type === _shared_enums_publication_type__WEBPACK_IMPORTED_MODULE_23__["PUBLICATION_TYPE"].IMAGE && !_global_utils__WEBPACK_IMPORTED_MODULE_17__["Utils"].isImageMediaType(file.type)) {
                            this.informService.showWarning('createPost.wrongImageType');
                            this.removeMedia();
                        }
                        return [3 /*break*/, 7];
                    case 6:
                        error_1 = _d.sent();
                        console.error(error_1);
                        return [3 /*break*/, 7];
                    case 7: return [2 /*return*/];
                }
            });
        });
    };
    CreatePostPage.prototype.captureVideo = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var options, data, mediaPath, error_2;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        options = { limit: 1, duration: _global_constants__WEBPACK_IMPORTED_MODULE_22__["Constants"].CAPTURE_MEDIA_FILE_DURATION };
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, this.mediaCapture.captureVideo(options)];
                    case 2:
                        data = _a.sent();
                        mediaPath = this.utilsService.fixFileUri(data[0].fullPath);
                        return [2 /*return*/, {
                                imageSource: this.domSanitizer.bypassSecurityTrustUrl(_ionic_native_ionic_webview__WEBPACK_IMPORTED_MODULE_14__["WebView"].convertFileSrc(mediaPath)),
                                imageOriginalPath: mediaPath,
                            }];
                    case 3:
                        error_2 = _a.sent();
                        console.error('[CreatePost takeVideo] error taking a video');
                        console.error(error_2);
                        throw error_2;
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    CreatePostPage.prototype.getLinkMedia = function (link) {
        var _this = this;
        this.linkPreviewService.getLinkPreview(link).then(function (res) {
            _this.postMedia = {
                type: _shared_enums_publication_type__WEBPACK_IMPORTED_MODULE_23__["PUBLICATION_TYPE"].LINK,
                linkData: res.data.getLinkMetadata,
            };
        }, function (error) {
            _this.removeMedia();
            console.error('[CreatePost getLinkMedia] error getting link media data');
            console.error(error);
        });
    };
    CreatePostPage.prototype.removeMedia = function () {
        this.postMedia = null;
    };
    CreatePostPage.prototype.createPost = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var mediaKey, error_3;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!this.isValidPost()) {
                            this.informService.showWarning('createPost.invalidPost');
                            return [2 /*return*/];
                        }
                        if (this.formGroup.get('description').value.length > this.maxDescriptionSize) {
                            this.informService.showWarning('formValidations.maxLength');
                            return [2 /*return*/];
                        }
                        if (this.postInProcess) {
                            return [2 /*return*/];
                        }
                        this.postInProcess = true;
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 12, , 13]);
                        mediaKey = void 0;
                        if (!this.hasPostMediaImage()) return [3 /*break*/, 4];
                        return [4 /*yield*/, this.uploadPostImageToS3()];
                    case 2:
                        _a.sent();
                        mediaKey = this.store.selectSnapshot(_store_posts_posts_state__WEBPACK_IMPORTED_MODULE_21__["PostsState"].getCurrentPostInput).content;
                        return [4 /*yield*/, this.sendPost(mediaKey)];
                    case 3:
                        _a.sent();
                        return [3 /*break*/, 11];
                    case 4:
                        if (!this.hasPostMediaVideo()) return [3 /*break*/, 7];
                        // video publication must be created first, so whe have the publication id and publisher
                        // id to send as metadata, in order to process it after video processing
                        return [4 /*yield*/, this.sendPost()];
                    case 5:
                        // video publication must be created first, so whe have the publication id and publisher
                        // id to send as metadata, in order to process it after video processing
                        _a.sent();
                        return [4 /*yield*/, this.uploadPostVideoToS3(this.store.selectSnapshot(_store_posts_posts_state__WEBPACK_IMPORTED_MODULE_21__["PostsState"].getLastCreatedPostId))];
                    case 6:
                        _a.sent();
                        return [3 /*break*/, 11];
                    case 7:
                        if (!this.isLinkWithMediaContent()) return [3 /*break*/, 9];
                        mediaKey = this.postMedia.linkData.image;
                        return [4 /*yield*/, this.sendPost(mediaKey)];
                    case 8:
                        _a.sent();
                        return [3 /*break*/, 11];
                    case 9: return [4 /*yield*/, this.sendPost()];
                    case 10:
                        _a.sent();
                        _a.label = 11;
                    case 11:
                        this.onPublicationPosted();
                        return [3 /*break*/, 13];
                    case 12:
                        error_3 = _a.sent();
                        console.error('[CreatePost createPost] error creating a new post');
                        console.error(error_3);
                        this.postInProcess = false;
                        return [3 /*break*/, 13];
                    case 13: return [2 /*return*/];
                }
            });
        });
    };
    CreatePostPage.prototype.onPublicationPosted = function () {
        if (this.postMedia && this.postMedia.type === _shared_enums_publication_type__WEBPACK_IMPORTED_MODULE_23__["PUBLICATION_TYPE"].VIDEO) {
            this.informService.showInfo('createPost.postVideoCreatedSuccess', 5000, 'bottom');
        }
        else {
            this.informService.showInfo('createPost.postCreatedSuccess', 3000, 'bottom');
        }
        this.goBack();
    };
    CreatePostPage.prototype.hasPostMediaImage = function () {
        return this.postMedia && this.postMedia.type === _shared_enums_publication_type__WEBPACK_IMPORTED_MODULE_23__["PUBLICATION_TYPE"].IMAGE;
    };
    CreatePostPage.prototype.hasPostMediaVideo = function () {
        return this.postMedia && this.postMedia.type === _shared_enums_publication_type__WEBPACK_IMPORTED_MODULE_23__["PUBLICATION_TYPE"].VIDEO;
    };
    CreatePostPage.prototype.isLinkWithMediaContent = function () {
        return this.postMedia && this.postMedia.type === _shared_enums_publication_type__WEBPACK_IMPORTED_MODULE_23__["PUBLICATION_TYPE"].LINK && !!this.postMedia.linkData.image;
    };
    CreatePostPage.prototype.uploadPostImageToS3 = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var file, filename, isSizeValid;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        file = this.postMedia.file;
                        filename = _global_constants__WEBPACK_IMPORTED_MODULE_22__["Constants"].PUBLICATIONS_FOLDER + '/' + _global_utils__WEBPACK_IMPORTED_MODULE_17__["Utils"].generateFileUniqueName(file);
                        return [4 /*yield*/, _global_utils__WEBPACK_IMPORTED_MODULE_17__["Utils"].checkPostMediaLimits(this.postMedia)];
                    case 1:
                        isSizeValid = (_a.sent()).isSizeValid;
                        if (!isSizeValid) {
                            this.informService.showWarning('createPost.invalidFileSize');
                            throw new Error('invalidFileSize');
                        }
                        if (!(this.selectedPublisherOption.type === PUBLISHER_TYPES.USER_PROFILE)) return [3 /*break*/, 3];
                        return [4 /*yield*/, this.store.dispatch(new _store_posts_posts_actions__WEBPACK_IMPORTED_MODULE_19__["UploadPostImage"]({ filename: filename, file: file, type: file.type })).toPromise()];
                    case 2:
                        _a.sent();
                        return [3 /*break*/, 5];
                    case 3:
                        filename = _global_constants__WEBPACK_IMPORTED_MODULE_22__["Constants"].PRIVATE_FOLDER + "/" + this.selectedPublisherOption.id + "/" + filename;
                        return [4 /*yield*/, this.store
                                .dispatch(new _store_posts_posts_actions__WEBPACK_IMPORTED_MODULE_19__["UploadPagePostImage"]({
                                filename: filename,
                                file: file,
                                type: file.type,
                                pageId: this.selectedPublisherOption.id,
                                bucket: _env_environment__WEBPACK_IMPORTED_MODULE_15__["environment"].mediaBucket,
                            }))
                                .toPromise()];
                    case 4:
                        _a.sent();
                        _a.label = 5;
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    CreatePostPage.prototype.uploadPostVideoToS3 = function (publicationid) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var file, filename, videoElement, _a, isSizeValid, isDurationValid, metadata;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        file = this.postMedia.file;
                        filename = _global_constants__WEBPACK_IMPORTED_MODULE_22__["Constants"].PUBLICATIONS_FOLDER + '/' + _global_utils__WEBPACK_IMPORTED_MODULE_17__["Utils"].generateFileUniqueName(file);
                        videoElement = document.getElementById('videoMiniature');
                        return [4 /*yield*/, _global_utils__WEBPACK_IMPORTED_MODULE_17__["Utils"].checkPostMediaLimits(this.postMedia, videoElement.duration)];
                    case 1:
                        _a = _b.sent(), isSizeValid = _a.isSizeValid, isDurationValid = _a.isDurationValid;
                        if (!isSizeValid) {
                            this.informService.showWarning('createPost.invalidFileSize');
                            throw new Error('invalidFileSize');
                        }
                        if (!isDurationValid) {
                            this.informService.showWarning('createPost.invalidVideoDuration');
                            throw new Error('invalidVideoDuration');
                        }
                        metadata = {
                            publicationid: publicationid,
                            publisherid: this.store.selectSnapshot(_store_auth_auth_state__WEBPACK_IMPORTED_MODULE_10__["AuthState"].getUserId),
                            stage: _env_environment__WEBPACK_IMPORTED_MODULE_15__["environment"].stage,
                        };
                        if (!(this.selectedPublisherOption.type === PUBLISHER_TYPES.USER_PROFILE)) return [3 /*break*/, 3];
                        return [4 /*yield*/, this.store
                                .dispatch(new _store_posts_posts_actions__WEBPACK_IMPORTED_MODULE_19__["UploadPostVideo"]({
                                filename: filename,
                                file: file,
                                type: file.type,
                                bucket: _env_environment__WEBPACK_IMPORTED_MODULE_15__["environment"].videoBucket,
                                metadata: metadata,
                                mediaWidth: videoElement.videoWidth,
                                mediaHeight: videoElement.videoHeight,
                            }))
                                .toPromise()];
                    case 2:
                        _b.sent();
                        return [3 /*break*/, 5];
                    case 3:
                        filename = _global_constants__WEBPACK_IMPORTED_MODULE_22__["Constants"].PRIVATE_FOLDER + "/" + this.selectedPublisherOption.id + "/" + filename;
                        return [4 /*yield*/, this.store
                                .dispatch(new _store_posts_posts_actions__WEBPACK_IMPORTED_MODULE_19__["UploadPagePostVideo"]({
                                filename: filename,
                                file: file,
                                type: file.type,
                                bucket: _env_environment__WEBPACK_IMPORTED_MODULE_15__["environment"].videoBucket,
                                metadata: metadata,
                                mediaWidth: videoElement.videoWidth,
                                mediaHeight: videoElement.videoHeight,
                                pageId: this.selectedPublisherOption.id,
                            }))
                                .toPromise()];
                    case 4:
                        _b.sent();
                        _b.label = 5;
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    CreatePostPage.prototype.sendPost = function (mediaKey) {
        var _a, _b, _c, _d, _e, _f;
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var postPayload;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_g) {
                switch (_g.label) {
                    case 0:
                        postPayload = {
                            publication_type: this.postMedia ? this.postMedia.type : _shared_enums_publication_type__WEBPACK_IMPORTED_MODULE_23__["PUBLICATION_TYPE"].TEXT,
                            content: mediaKey,
                            description: this.formGroup.get('description').value.trim(),
                            link_site: (_b = (_a = this.postMedia) === null || _a === void 0 ? void 0 : _a.linkData) === null || _b === void 0 ? void 0 : _b.siteName,
                            link_title: (_d = (_c = this.postMedia) === null || _c === void 0 ? void 0 : _c.linkData) === null || _d === void 0 ? void 0 : _d.title,
                            link_url: (_f = (_e = this.postMedia) === null || _e === void 0 ? void 0 : _e.linkData) === null || _f === void 0 ? void 0 : _f.url,
                        };
                        return [4 /*yield*/, this.store
                                .dispatch(new _store_posts_posts_actions__WEBPACK_IMPORTED_MODULE_19__["CreatePost"]({
                                publisher_id: this.selectedPublisherOption.id,
                                input: postPayload,
                            }))
                                .toPromise()];
                    case 1:
                        _g.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    CreatePostPage.prototype.isValidPost = function () {
        return !!this.postMedia || !!this.formGroup.get('description').value;
    };
    CreatePostPage.prototype.disconnectObservers = function () {
        try {
            this.publisherIdSubscription$.unsubscribe();
            this.descriptionSubscription$.unsubscribe();
        }
        catch (error) {
            console.error(error);
        }
    };
    CreatePostPage.prototype.ngOnDestroy = function () {
        this.disconnectObservers();
    };
    CreatePostPage.ctorParameters = function () { return [
        { type: _angular_common__WEBPACK_IMPORTED_MODULE_6__["Location"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: _ngxs_store__WEBPACK_IMPORTED_MODULE_4__["Store"] },
        { type: _core_utils_service__WEBPACK_IMPORTED_MODULE_5__["UtilsService"] },
        { type: _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_12__["Camera"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormBuilder"] },
        { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__["TranslateService"] },
        { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_13__["DomSanitizer"] },
        { type: _ionic_native_media_capture_ngx__WEBPACK_IMPORTED_MODULE_16__["MediaCapture"] },
        { type: _core_link_preview_service__WEBPACK_IMPORTED_MODULE_18__["LinkPreviewService"] },
        { type: _core_inform_service__WEBPACK_IMPORTED_MODULE_20__["InformService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }
    ]; };
    CreatePostPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-create-post',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./create-post.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/create-post/create-post.page.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./create-post.page.scss */ "./src/app/create-post/create-post.page.scss")).default]
        })
    ], CreatePostPage);
    return CreatePostPage;
}(_base_base_page__WEBPACK_IMPORTED_MODULE_2__["BasePage"]));



/***/ })

}]);
//# sourceMappingURL=create-post-create-post-module.js.map