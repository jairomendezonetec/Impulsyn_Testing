(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~publication-detail-publication-detail-module~timeline-timeline-module"],{

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

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/timeline/components/publication/publication.component.html":
/*!******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/timeline/components/publication/publication.component.html ***!
  \******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- linear gradient bottom -->\n<div\n  #gradientBottom\n  class=\"publication-gradient-bottom\"\n  [ngClass]=\"{\n    'show-visible': needsCutText(publication.description),\n    fadeIn: !focusOnPublication,\n    fadeOut: focusOnPublication\n  }\"\n>\n  <!-- publication information -->\n  <div *ngIf=\"publication.publication_type !== publicationType.TEXT\">\n    <div class=\"publication-info ion-padding-start ion-padding-end\">\n      <div class=\"description ion-text-left small-size\">{{ publication.description }}</div>\n      <div class=\"small-size ion-text-end underline show-link\" (click)=\"toggleDescription()\">\n        {{ showLinkText }}\n      </div>\n    </div>\n  </div>\n  <div class=\"counters ion-padding-start\">\n    <div class=\"ion-margin-end ion-align-items-center\" (click)=\"onShowLikesList()\">\n      <span>{{ publication.likes }}</span>\n      <ion-icon name=\"heart\"></ion-icon>\n    </div>\n    <div class=\"ion-align-items-center\" (click)=\"onShowCommentsList()\">\n      <span>{{ publication.comments }}</span>\n      <ion-icon name=\"chatbubble\"></ion-icon>\n    </div>\n  </div>\n  <div class=\"icons-container ion-justify-content-start ion-align-items-center ion-padding-start ion-padding-end\">\n    <app-icon-clicked\n      (buttonClick)=\"onButtonClick(0)\"\n      [iconNameInitial]=\"publication.like ? like.filled : like.outline\"\n      [iconNameTapped]=\"publication.like ? like.outline : like.filled\"\n    ></app-icon-clicked>\n    <ion-icon *ngFor=\"let button of buttonList; index as i\" [name]=\"button.outline\" (click)=\"onButtonClick(i + 1)\">\n    </ion-icon>\n  </div>\n</div>\n<!-- linear gradient top -->\n<div\n  #gradientTop\n  class=\"publication-gradient-top\"\n  [ngClass]=\"{ fadeIn: !focusOnPublication, fadeOut: focusOnPublication }\"\n>\n  <!-- user information -->\n  <img class=\"user-image ion-margin-start\" [src]=\"userPhoto\" (click)=\"onClickUserProfile()\" />\n  <div class=\"user-personal-info\" (click)=\"onClickUserProfile()\">\n    <span class=\"small-size not-overflow-name\">{{ publication.publisher.complete_name }}</span>\n    <span class=\"small-size\" *ngIf=\"isUser()\">{{ publication.publisher.occupation }}</span>\n    <span class=\"small-size\" *ngIf=\"!isUser()\">{{ publication.publisher.tagline }}</span>\n    <span class=\"small-size\">{{ publication.creation_date_literal }}</span>\n  </div>\n</div>\n<!-- publication image -->\n<div\n  *ngIf=\"publication.publication_type === publicationType.IMAGE\"\n  class=\"publication-image\"\n  (click)=\"toggleFocusOnPublication()\"\n>\n  <img [src]=\"publication.content\" />\n</div>\n\n<!-- publication video -->\n<div\n  *ngIf=\"publication.publication_type === publicationType.VIDEO\"\n  class=\"publication-video\"\n  (touchstart)=\"onVideoTouchStart($event)\"\n  (touchend)=\"onVideoTouchEnd($event)\"\n>\n  <video\n    preload=\"metadata\"\n    controls\n    controlsList=\"nodownload\"\n    disablepictureinpicture\n    [poster]=\"publication.thumbnail || ''\"\n  >\n    <source [src]=\"publication.content\" />\n  </video>\n</div>\n\n<!-- publication text -->\n<div\n  *ngIf=\"publication.publication_type === publicationType.TEXT\"\n  class=\"publication-text ion-padding\"\n  (click)=\"toggleFocusOnPublication()\"\n>\n  <div>{{ publication.description }}</div>\n</div>\n\n<!-- publication link -->\n<div\n  class=\"publication-link-preview col-xs-12 col-md-10\"\n  *ngIf=\"publication.publication_type === publicationType.LINK\"\n  (click)=\"toggleFocusOnPublication()\"\n>\n  <app-link-preview\n    *ngIf=\"publication.publication_type === publicationType.LINK\"\n    [linkData]=\"{\n      url: publication.link_url,\n      image: publication.content,\n      siteName: publication.link_site,\n      description: publication.description,\n      title: publication.link_title\n    }\"\n  ></app-link-preview>\n</div>\n\n<div class=\"shadow\" (click)=\"toggleDescription()\"></div>\n");

/***/ }),

/***/ "./src/app/@core/social-sharing.service.ts":
/*!*************************************************!*\
  !*** ./src/app/@core/social-sharing.service.ts ***!
  \*************************************************/
/*! exports provided: SocialSharingService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SocialSharingService", function() { return SocialSharingService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/social-sharing/ngx */ "./node_modules/@ionic-native/social-sharing/__ivy_ngcc__/ngx/index.js");
/* harmony import */ var _env_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @env/environment */ "./src/environments/environment.ts");




var SocialSharingService = /** @class */ (function () {
    function SocialSharingService(socialShare) {
        this.socialShare = socialShare;
    }
    SocialSharingService.prototype.sharePublication = function (id) {
        this.socialShare
            .share(_env_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].deepLinksServer + "publication-detail/" + id)
            .then(function () { })
            .catch(function () { });
    };
    SocialSharingService.ctorParameters = function () { return [
        { type: _ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_2__["SocialSharing"] }
    ]; };
    SocialSharingService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root',
        })
    ], SocialSharingService);
    return SocialSharingService;
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

/***/ "./src/app/timeline/components/publication/publication.component.scss":
/*!****************************************************************************!*\
  !*** ./src/app/timeline/components/publication/publication.component.scss ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".publication-link-preview {\n  width: 100%;\n}\n\n.publication-text {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 100%;\n  height: 100%;\n  word-break: break-word;\n}\n\n.publication-text > div {\n  display: flex;\n  align-self: flex-start;\n  padding-top: 100px;\n}\n\n.publication-gradient-top {\n  width: 100%;\n  padding: 10px 0 20px 0;\n  background: linear-gradient(to bottom, rgba(0, 0, 0, 0.55) 75%, rgba(0, 0, 0, 0) 100%);\n  justify-content: flex-start;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  z-index: 2;\n  top: 0;\n  position: absolute;\n  left: 0;\n}\n\n.publication-gradient-top .user-personal-info {\n  display: flex;\n  flex-direction: column;\n  margin-left: 5px;\n}\n\n.user-image {\n  width: 50px;\n  height: 50px;\n  border-radius: 50%;\n  border: 1px solid var(--ion-color-secondary);\n  padding: 1px;\n  display: flex;\n  -o-object-fit: cover;\n     object-fit: cover;\n}\n\n.user-personal-info {\n  max-width: 80%;\n}\n\n.user-personal-info span:first-of-type {\n  font-weight: bold;\n}\n\n.publication-info {\n  position: relative;\n  max-width: 70%;\n  padding-top: 20px;\n}\n\n.publication-info .description {\n  display: flex;\n  overflow: hidden;\n  text-align: left;\n}\n\n.publication-info ion-icon {\n  margin-left: 2px;\n}\n\n.counters {\n  display: flex;\n  justify-content: flex-start;\n  align-items: center;\n  padding-top: 10px;\n}\n\n.counters * {\n  display: flex;\n}\n\n.counters span {\n  font-size: 0.8em;\n}\n\n.counters ion-icon {\n  font-size: 0.8em;\n}\n\n.icons-container {\n  height: 50px;\n  width: 100%;\n  display: flex;\n  padding-bottom: 10px;\n}\n\n.icons-container ion-icon {\n  margin-right: 20px;\n  font-size: 25px;\n}\n\n.icons-container app-icon-clicked {\n  margin-right: 20px;\n  padding-top: 7px;\n  font-size: 26px;\n}\n\n.publication-gradient-bottom {\n  position: absolute;\n  width: 100%;\n  background: linear-gradient(to top, rgba(0, 0, 0, 0.55) 75%, rgba(0, 0, 0, 0) 100%);\n  bottom: 0;\n  left: 0;\n  flex-grow: 1;\n  z-index: 4;\n}\n\n.publication-gradient-bottom .show-link {\n  display: none;\n}\n\n.shadow {\n  display: none;\n}\n\n.publication-gradient-bottom.show-visible .show-link {\n  display: flex;\n  justify-content: flex-end;\n  padding-top: 10px;\n}\n\n.publication-gradient-bottom.show-visible .description {\n  line-height: 18px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  display: -webkit-box;\n  -webkit-line-clamp: 2;\n  -webkit-box-orient: vertical;\n}\n\n.publication-gradient-bottom.opened {\n  background: transparent;\n}\n\n.publication-gradient-bottom.opened ~ .shadow {\n  display: block;\n  background: rgba(0, 0, 0, 0.6);\n  height: 100%;\n  width: 100%;\n  position: absolute;\n  top: 0;\n  left: 0;\n  z-index: 3;\n}\n\n.publication-gradient-bottom.opened .publication-info {\n  padding-top: 0;\n}\n\n.publication-gradient-bottom.opened .description {\n  width: 100%;\n  -webkit-line-clamp: initial;\n}\n\n.publication-video,\n.publication-image,\n.publication-link-preview {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 100%;\n  height: 100%;\n}\n\n.publication-video video,\n.publication-image video,\n.publication-link-preview video {\n  width: 100%;\n  max-height: 100%;\n}\n\n.publication-video img,\n.publication-image img,\n.publication-link-preview img {\n  max-width: 100%;\n  max-height: 100%;\n}\n\n.not-overflow-name {\n  max-width: 100%;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  display: -webkit-box;\n  -webkit-line-clamp: 1;\n  -webkit-box-orient: vertical;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGltZWxpbmUvY29tcG9uZW50cy9wdWJsaWNhdGlvbi9wdWJsaWNhdGlvbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQUE7QUFDRjs7QUFDQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxzQkFBQTtBQUVGOztBQURFO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7QUFHSjs7QUFBQTtFQUNFLFdBQUE7RUFDQSxzQkFBQTtFQUNBLHNGQUFBO0VBQ0EsMkJBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLFVBQUE7RUFDQSxNQUFBO0VBQ0Esa0JBQUE7RUFDQSxPQUFBO0FBR0Y7O0FBRkU7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxnQkFBQTtBQUlKOztBQURBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLDRDQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxvQkFBQTtLQUFBLGlCQUFBO0FBSUY7O0FBRkE7RUFDRSxjQUFBO0FBS0Y7O0FBSEk7RUFDRSxpQkFBQTtBQUtOOztBQURBO0VBQ0Usa0JBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7QUFJRjs7QUFIRTtFQUNFLGFBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0FBS0o7O0FBSEU7RUFDRSxnQkFBQTtBQUtKOztBQUZBO0VBQ0UsYUFBQTtFQUNBLDJCQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtBQUtGOztBQUpFO0VBQ0UsYUFBQTtBQU1KOztBQUpFO0VBQ0UsZ0JBQUE7QUFNSjs7QUFKRTtFQUNFLGdCQUFBO0FBTUo7O0FBSEE7RUFDRSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFDQSxvQkFBQTtBQU1GOztBQUxFO0VBQ0Usa0JBQUE7RUFDQSxlQUFBO0FBT0o7O0FBTEU7RUFDRSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtBQU9KOztBQUpBO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0VBQ0EsbUZBQUE7RUFDQSxTQUFBO0VBQ0EsT0FBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0FBT0Y7O0FBTkU7RUFDRSxhQUFBO0FBUUo7O0FBTEE7RUFDRSxhQUFBO0FBUUY7O0FBTEU7RUFDRSxhQUFBO0VBQ0EseUJBQUE7RUFDQSxpQkFBQTtBQVFKOztBQU5FO0VBQ0UsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLHVCQUFBO0VBQ0Esb0JBQUE7RUFDQSxxQkFBQTtFQUNBLDRCQUFBO0FBUUo7O0FBTEE7RUFDRSx1QkFBQTtBQVFGOztBQU5JO0VBQ0UsY0FBQTtFQUNBLDhCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsVUFBQTtBQVFOOztBQUxFO0VBQ0UsY0FBQTtBQU9KOztBQUxFO0VBQ0UsV0FBQTtFQUNBLDJCQUFBO0FBT0o7O0FBSEE7OztFQUdFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUFNRjs7QUFKRTs7O0VBQ0UsV0FBQTtFQUNBLGdCQUFBO0FBUUo7O0FBTEU7OztFQUNFLGVBQUE7RUFDQSxnQkFBQTtBQVNKOztBQU5BO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsdUJBQUE7RUFDQSxvQkFBQTtFQUNBLHFCQUFBO0VBQ0EsNEJBQUE7QUFTRiIsImZpbGUiOiJzcmMvYXBwL3RpbWVsaW5lL2NvbXBvbmVudHMvcHVibGljYXRpb24vcHVibGljYXRpb24uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucHVibGljYXRpb24tbGluay1wcmV2aWV3IHtcbiAgd2lkdGg6IDEwMCU7XG59XG4ucHVibGljYXRpb24tdGV4dCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICB3b3JkLWJyZWFrOiBicmVhay13b3JkO1xuICA+IGRpdiB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1zZWxmOiBmbGV4LXN0YXJ0O1xuICAgIHBhZGRpbmctdG9wOiAxMDBweDtcbiAgfVxufVxuLnB1YmxpY2F0aW9uLWdyYWRpZW50LXRvcCB7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nOiAxMHB4IDAgMjBweCAwO1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCByZ2JhKDAsIDAsIDAsIDAuNTUpIDc1JSwgcmdiYSgwLCAwLCAwLCAwKSAxMDAlKTtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB6LWluZGV4OiAyO1xuICB0b3A6IDA7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMDtcbiAgLnVzZXItcGVyc29uYWwtaW5mbyB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIG1hcmdpbi1sZWZ0OiA1cHg7XG4gIH1cbn1cbi51c2VyLWltYWdlIHtcbiAgd2lkdGg6IDUwcHg7XG4gIGhlaWdodDogNTBweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1pb24tY29sb3Itc2Vjb25kYXJ5KTtcbiAgcGFkZGluZzogMXB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBvYmplY3QtZml0OiBjb3Zlcjtcbn1cbi51c2VyLXBlcnNvbmFsLWluZm8ge1xuICBtYXgtd2lkdGg6IDgwJTtcbiAgc3BhbiB7XG4gICAgJjpmaXJzdC1vZi10eXBlIHtcbiAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIH1cbiAgfVxufVxuLnB1YmxpY2F0aW9uLWluZm8ge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG1heC13aWR0aDogNzAlO1xuICBwYWRkaW5nLXRvcDogMjBweDtcbiAgLmRlc2NyaXB0aW9uIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgfVxuICBpb24taWNvbiB7XG4gICAgbWFyZ2luLWxlZnQ6IDJweDtcbiAgfVxufVxuLmNvdW50ZXJzIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwYWRkaW5nLXRvcDogMTBweDtcbiAgKiB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgfVxuICBzcGFuIHtcbiAgICBmb250LXNpemU6IDAuOGVtO1xuICB9XG4gIGlvbi1pY29uIHtcbiAgICBmb250LXNpemU6IDAuOGVtO1xuICB9XG59XG4uaWNvbnMtY29udGFpbmVyIHtcbiAgaGVpZ2h0OiA1MHB4O1xuICB3aWR0aDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbiAgcGFkZGluZy1ib3R0b206IDEwcHg7XG4gIGlvbi1pY29uIHtcbiAgICBtYXJnaW4tcmlnaHQ6IDIwcHg7XG4gICAgZm9udC1zaXplOiAyNXB4O1xuICB9XG4gIGFwcC1pY29uLWNsaWNrZWQge1xuICAgIG1hcmdpbi1yaWdodDogMjBweDtcbiAgICBwYWRkaW5nLXRvcDogN3B4O1xuICAgIGZvbnQtc2l6ZTogMjZweDtcbiAgfVxufVxuLnB1YmxpY2F0aW9uLWdyYWRpZW50LWJvdHRvbSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDEwMCU7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byB0b3AsIHJnYmEoMCwgMCwgMCwgMC41NSkgNzUlLCByZ2JhKDAsIDAsIDAsIDApIDEwMCUpO1xuICBib3R0b206IDA7XG4gIGxlZnQ6IDA7XG4gIGZsZXgtZ3JvdzogMTtcbiAgei1pbmRleDogNDtcbiAgLnNob3ctbGluayB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxufVxuLnNoYWRvdyB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG4ucHVibGljYXRpb24tZ3JhZGllbnQtYm90dG9tLnNob3ctdmlzaWJsZSB7XG4gIC5zaG93LWxpbmsge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgICBwYWRkaW5nLXRvcDogMTBweDtcbiAgfVxuICAuZGVzY3JpcHRpb24ge1xuICAgIGxpbmUtaGVpZ2h0OiAxOHB4O1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gICAgZGlzcGxheTogLXdlYmtpdC1ib3g7XG4gICAgLXdlYmtpdC1saW5lLWNsYW1wOiAyO1xuICAgIC13ZWJraXQtYm94LW9yaWVudDogdmVydGljYWw7XG4gIH1cbn1cbi5wdWJsaWNhdGlvbi1ncmFkaWVudC1ib3R0b20ub3BlbmVkIHtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIH4ge1xuICAgIC5zaGFkb3cge1xuICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuNik7XG4gICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgIHRvcDogMDtcbiAgICAgIGxlZnQ6IDA7XG4gICAgICB6LWluZGV4OiAzO1xuICAgIH1cbiAgfVxuICAucHVibGljYXRpb24taW5mbyB7XG4gICAgcGFkZGluZy10b3A6IDA7XG4gIH1cbiAgLmRlc2NyaXB0aW9uIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICAtd2Via2l0LWxpbmUtY2xhbXA6IGluaXRpYWw7XG4gIH1cbn1cblxuLnB1YmxpY2F0aW9uLXZpZGVvLFxuLnB1YmxpY2F0aW9uLWltYWdlLFxuLnB1YmxpY2F0aW9uLWxpbmstcHJldmlldyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuXG4gIHZpZGVvIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtYXgtaGVpZ2h0OiAxMDAlO1xuICB9XG5cbiAgaW1nIHtcbiAgICBtYXgtd2lkdGg6IDEwMCU7XG4gICAgbWF4LWhlaWdodDogMTAwJTtcbiAgfVxufVxuLm5vdC1vdmVyZmxvdy1uYW1lIHtcbiAgbWF4LXdpZHRoOiAxMDAlO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgZGlzcGxheTogLXdlYmtpdC1ib3g7XG4gIC13ZWJraXQtbGluZS1jbGFtcDogMTtcbiAgLXdlYmtpdC1ib3gtb3JpZW50OiB2ZXJ0aWNhbDtcbn1cbiJdfQ== */");

/***/ }),

/***/ "./src/app/timeline/components/publication/publication.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/timeline/components/publication/publication.component.ts ***!
  \**************************************************************************/
/*! exports provided: PublicationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PublicationComponent", function() { return PublicationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _shared_enums_publication_type__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../@shared/enums/publication-type */ "./src/app/@shared/enums/publication-type.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
/* harmony import */ var _shared_enums_publisher_type__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../@shared/enums/publisher-type */ "./src/app/@shared/enums/publisher-type.ts");
/* harmony import */ var src_app_global_constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/@global/constants */ "./src/app/@global/constants.ts");
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngxs/store */ "./node_modules/@ngxs/store/__ivy_ngcc__/fesm2015/ngxs-store.js");
/* harmony import */ var _store_posts_posts_state__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../@store/posts/posts.state */ "./src/app/@store/posts/posts.state.ts");
/* harmony import */ var _store_posts_posts_actions__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../@store/posts/posts.actions */ "./src/app/@store/posts/posts.actions.ts");









var MAX_CHARACTERS = 70;
var MAX_TIME_VIDEO_TOUCH = 300;
var PublicationComponent = /** @class */ (function () {
    function PublicationComponent(translateService, store) {
        this.translateService = translateService;
        this.store = store;
        this.publication = null;
        this.buttonClick = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.showLikesList = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.showCommentsList = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.clickUserProfile = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.publicationType = _shared_enums_publication_type__WEBPACK_IMPORTED_MODULE_2__["PUBLICATION_TYPE"];
        this.like = src_app_global_constants__WEBPACK_IMPORTED_MODULE_5__["Constants"].PUBLICATION_LIKE_BUTTON;
        this.focusOnPublication = false;
    }
    PublicationComponent.prototype.ngOnInit = function () {
        this.showLinkText = this.translateService.instant('highlights.showMore');
        this.subscribeToFocusOnPublication();
    };
    PublicationComponent.prototype.subscribeToFocusOnPublication = function () {
        var _this = this;
        this.focusOnPublicationSubscription = this.store.select(_store_posts_posts_state__WEBPACK_IMPORTED_MODULE_7__["PostsState"].isFocusOnPublication).subscribe(function (result) {
            _this.focusOnPublication = result;
        });
    };
    PublicationComponent.prototype.needsCutText = function (description) {
        return description.length > MAX_CHARACTERS;
    };
    PublicationComponent.prototype.toggleDescription = function () {
        var descriptionContainer;
        if (this.isDetail) {
            descriptionContainer = document
                .getElementById('detailPublication')
                .getElementsByClassName('publication-gradient-bottom')[0];
        }
        else {
            descriptionContainer = document.getElementsByClassName('publication-gradient-bottom')[this.i];
        }
        if (descriptionContainer.classList.contains('opened')) {
            this.showLinkText = this.translateService.instant('highlights.showMore');
            descriptionContainer.classList.remove('opened');
        }
        else {
            descriptionContainer.classList.add('opened');
            this.showLinkText = this.translateService.instant('highlights.showLess');
        }
    };
    PublicationComponent.prototype.onButtonClick = function (index) {
        this.buttonClick.emit({ buttonPosition: index, publicationId: this.publication.id });
    };
    PublicationComponent.prototype.onShowLikesList = function () {
        this.showLikesList.emit(this.publication.id);
    };
    PublicationComponent.prototype.onShowCommentsList = function () {
        this.showCommentsList.emit(this.publication.id);
    };
    PublicationComponent.prototype.onClickUserProfile = function () {
        this.clickUserProfile.emit(this.publication);
    };
    PublicationComponent.prototype.isUser = function () {
        return this.publication.publisher.type === _shared_enums_publisher_type__WEBPACK_IMPORTED_MODULE_4__["PUBLISHER_TYPE"].USER;
    };
    PublicationComponent.prototype.toggleFocusOnPublication = function () {
        this.store.dispatch(new _store_posts_posts_actions__WEBPACK_IMPORTED_MODULE_8__["SetFocusOnPublication"](!this.focusOnPublication));
    };
    PublicationComponent.prototype.onVideoTouchStart = function (event) {
        this.startVideoTouchTime = Date.now();
        this.touchStartPositionY = event.changedTouches[0].clientY;
    };
    PublicationComponent.prototype.onVideoTouchEnd = function (event) {
        var distanceY = Math.abs(event.changedTouches[0].clientY - this.touchStartPositionY);
        if (Date.now() - this.startVideoTouchTime <= MAX_TIME_VIDEO_TOUCH && distanceY <= 0) {
            this.toggleFocusOnPublication();
        }
    };
    PublicationComponent.prototype.disconnectObservers = function () {
        if (this.focusOnPublicationSubscription) {
            this.focusOnPublicationSubscription.unsubscribe();
        }
    };
    PublicationComponent.prototype.ngOnDestroy = function () {
        this.disconnectObservers();
    };
    PublicationComponent.ctorParameters = function () { return [
        { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"] },
        { type: _ngxs_store__WEBPACK_IMPORTED_MODULE_6__["Store"] }
    ]; };
    PublicationComponent.propDecorators = {
        gradientTop: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"], args: ['gradientTop', { static: false },] }],
        gradientBottom: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"], args: ['gradientBottom', { static: false },] }],
        publication: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
        userPhoto: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
        i: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
        isDetail: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
        buttonList: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
        buttonClick: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] }],
        showLikesList: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] }],
        showCommentsList: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] }],
        clickUserProfile: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] }]
    };
    PublicationComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-publication',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./publication.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/timeline/components/publication/publication.component.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./publication.component.scss */ "./src/app/timeline/components/publication/publication.component.scss")).default]
        })
    ], PublicationComponent);
    return PublicationComponent;
}());



/***/ }),

/***/ "./src/app/timeline/components/publication/publication.module.ts":
/*!***********************************************************************!*\
  !*** ./src/app/timeline/components/publication/publication.module.ts ***!
  \***********************************************************************/
/*! exports provided: PublicationModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PublicationModule", function() { return PublicationModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _publication_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./publication.component */ "./src/app/timeline/components/publication/publication.component.ts");
/* harmony import */ var _shared_components_link_preview_link_preview_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../@shared/components/link-preview/link-preview.module */ "./src/app/@shared/components/link-preview/link-preview.module.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../@shared/shared.module */ "./src/app/@shared/shared.module.ts");





var PublicationModule = /** @class */ (function () {
    function PublicationModule() {
    }
    PublicationModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_publication_component__WEBPACK_IMPORTED_MODULE_2__["PublicationComponent"]],
            imports: [_shared_components_link_preview_link_preview_module__WEBPACK_IMPORTED_MODULE_3__["LinkPreviewComponentModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"]],
            exports: [_publication_component__WEBPACK_IMPORTED_MODULE_2__["PublicationComponent"]],
        })
    ], PublicationModule);
    return PublicationModule;
}());



/***/ })

}]);
//# sourceMappingURL=default~publication-detail-publication-detail-module~timeline-timeline-module.js.map