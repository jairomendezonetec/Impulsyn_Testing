(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["onboarding-slides-onboarding-slides-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/onboarding-slides/onboarding-slides.page.html":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/onboarding-slides/onboarding-slides.page.html ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content *ngIf=\"language\" class=\"ion-padding background-with-dark-color\" scroll-y=\"false\">\n  <ion-slides pager=\"true\">\n    <ion-slide>\n      <div class=\"flex-vertical-space w100\">\n        <ion-grid class=\"flex-container\">\n          <ion-row class=\"flex-item ion-margin-top ion-padding-top ion-padding-bottom ion-margin-bottom\"></ion-row>\n          <ion-row class=\"flex-item\">\n            <ion-col size=\"12\" class=\"logo-name\">\n              <ion-col size=\"8\" [offset]=\"2\">\n                <img [src]=\"symbolPath\" class=\"logo-center ion-margin-bottom\" alt=\"logo\" />\n              </ion-col>\n              <div\n                class=\"screen-big-title landscape-small-hidden\"\n                [innerHTML]=\"'onboarding-slides.slide1' | translate\"\n              ></div>\n            </ion-col>\n          </ion-row>\n          <ion-row class=\"flex-item w100\">\n            <ion-col size=\"12\">\n              <app-action-button-link\n                [buttonText]=\"'signUp'\"\n                [linkText]=\"'signIn'\"\n                (actionButtonClick)=\"navigateTo('/data-protection')\"\n                (actionLinkClick)=\"goLoginWithParams(true)\"\n              ></app-action-button-link>\n            </ion-col>\n          </ion-row>\n        </ion-grid>\n      </div>\n    </ion-slide>\n\n    <ion-slide>\n      <div class=\"flex-vertical-space\">\n        <ion-grid class=\"flex-container\">\n          <ion-row class=\"vertically-top ion-justify-content-center landscape-small-hidden logo-top\">\n            <img [src]=\"logoPath\" class=\"logo-center ion-padding-top ion-margin-top\" alt=\"impulsyn\" />\n          </ion-row>\n          <ion-row class=\"flex-item\">\n            <ion-col size=\"12\" class=\"ion-text-center\">\n              <div class=\"screen-big-title\" [innerHTML]=\"'onboarding-slides.slide2Title' | translate\"></div>\n            </ion-col>\n          </ion-row>\n          <ion-row class=\"flex-item ion-align-items-center\">\n            <ion-col class=\"landscape-small-hidden\" size=\"12\" size-md=\"10\" size-lg=\"8\">\n              <img [src]=\"imagePathOnboarding + 'slide2-'+language+'.png'\" />\n            </ion-col>\n          </ion-row>\n          <ion-row class=\"flex-item ion-align-items-center\">\n            <ion-col size=\"12\" size-md=\"8\">\n              <div class=\"small-size\" [innerHTML]=\"'onboarding-slides.slide2' | translate\"></div>\n            </ion-col>\n          </ion-row>\n          <ion-row class=\"flex-item w100\">\n            <ion-col size=\"12\">\n              <app-action-button-link\n                [buttonText]=\"'signUp'\"\n                [linkText]=\"'signIn'\"\n                (actionButtonClick)=\"navigateTo('/data-protection')\"\n                (actionLinkClick)=\"goLoginWithParams(true)\"\n              ></app-action-button-link>\n            </ion-col>\n          </ion-row>\n        </ion-grid>\n      </div>\n    </ion-slide>\n\n    <ion-slide>\n      <div class=\"flex-vertical-space\">\n        <ion-grid class=\"flex-container\">\n          <ion-row class=\"vertically-top ion-justify-content-center landscape-small-hidden logo-top\">\n            <img [src]=\"logoPath\" class=\"logo-center ion-padding-top ion-margin-top\" alt=\"impulsyn\" />\n          </ion-row>\n          <ion-row class=\"flex-item\">\n            <ion-col size=\"12\" class=\"ion-text-center ion-padding-bottom\">\n              <div class=\"screen-big-title\" [innerHTML]=\"'onboarding-slides.slide3Title' | translate\"></div>\n            </ion-col>\n          </ion-row>\n          <ion-row class=\"flex-item ion-align-items-center\">\n            <ion-col class=\"landscape-small-hidden\" size=\"12\" size-md=\"10\" size-lg=\"8\">\n              <img [src]=\"imagePathOnboarding + 'slide3-'+language+'.png'\" />\n            </ion-col>\n          </ion-row>\n          <ion-row class=\"flex-item ion-align-items-center\">\n            <ion-col class=\"flex-row\" size=\"12\" size-md=\"8\" size-lg=\"6\">\n              <ion-row class=\"ion-align-items-center ion-justify-content-center\">\n                <ion-col\n                  size=\"2\"\n                  class=\"ion-text-left ion-padding-top\"\n                  size-sm=\"1\"\n                  offset-sm=\"1\"\n                  size-md=\"2\"\n                  offset-md=\"0\"\n                >\n                  <ion-icon name=\"briefcase-outline\" color=\"secondary\" class=\"regular-size icon-rounded\"></ion-icon>\n                </ion-col>\n                <ion-col size=\"10\" class=\"ion-text-left\" style=\"line-height: 0.8em\" size-sm=\"10\" size-md=\"10\">\n                  <span class=\"small-size\">{{'onboarding-slides.slide3A' | translate}}</span>\n                </ion-col>\n                <ion-col\n                  size=\"2\"\n                  class=\"ion-text-left ion-padding-top\"\n                  size-sm=\"1\"\n                  offset-sm=\"1\"\n                  size-md=\"2\"\n                  offset-md=\"0\"\n                >\n                  <ion-icon name=\"trophy-outline\" color=\"secondary\" class=\"regular-size icon-rounded\"></ion-icon>\n                </ion-col>\n                <ion-col size=\"10\" class=\"ion-text-left\" style=\"line-height: 0.8em\" size-sm=\"10\" size-md=\"10\">\n                  <span class=\"small-size\">{{'onboarding-slides.slide3B' | translate}}</span>\n                </ion-col>\n              </ion-row>\n            </ion-col>\n          </ion-row>\n          <ion-row class=\"flex-item w100\">\n            <ion-col size=\"12\">\n              <app-action-button-link\n                [buttonText]=\"'signUp'\"\n                [linkText]=\"'signIn'\"\n                (actionButtonClick)=\"navigateTo('/data-protection')\"\n                (actionLinkClick)=\"goLoginWithParams(true)\"\n              ></app-action-button-link>\n            </ion-col>\n          </ion-row>\n        </ion-grid>\n      </div>\n    </ion-slide>\n\n    <ion-slide>\n      <div class=\"flex-vertical-space\">\n        <ion-grid class=\"flex-container\">\n          <ion-row class=\"vertically-top ion-justify-content-center landscape-small-hidden logo-top\">\n            <img [src]=\"logoPath\" class=\"logo-center ion-padding-top ion-margin-top\" alt=\"impulsyn\" />\n          </ion-row>\n          <ion-row class=\"flex-item\">\n            <ion-col size=\"12\" class=\"ion-text-center ion-padding-bottom\">\n              <div class=\"screen-big-title\" [innerHTML]=\"'onboarding-slides.slide4Title' | translate\"></div>\n            </ion-col>\n          </ion-row>\n          <ion-row class=\"flex-item ion-align-items-center\">\n            <ion-col class=\"landscape-small-hidden flex-row three-images\" size=\"12\" size-md=\"10\" size-lg=\"8\">\n              <div class=\"slide-image\">\n                <img [src]=\"imagePathOnboarding + 'image1-'+language+'.png'\" />\n              </div>\n              <div class=\"slide-image\">\n                <img [src]=\"imagePathOnboarding + 'image2-'+language+'.png'\" />\n              </div>\n              <div class=\"slide-image\">\n                <img [src]=\"imagePathOnboarding + 'image3-'+language+'.png'\" />\n              </div>\n            </ion-col>\n          </ion-row>\n          <ion-row class=\"flex-item ion-align-items-center\">\n            <ion-col size=\"12\" class=\"ion-margin-top\" size-md=\"8\">\n              <div class=\"small-size\" [innerHTML]=\"'onboarding-slides.slide4' | translate\"></div>\n            </ion-col>\n          </ion-row>\n          <ion-row class=\"flex-item w100\">\n            <ion-col size=\"12\">\n              <app-action-button-link\n                [buttonText]=\"'signUp'\"\n                [linkText]=\"'signIn'\"\n                (actionButtonClick)=\"navigateTo('/data-protection')\"\n                (actionLinkClick)=\"goLoginWithParams(true)\"\n              ></app-action-button-link>\n            </ion-col>\n          </ion-row>\n        </ion-grid>\n      </div>\n    </ion-slide>\n  </ion-slides>\n</ion-content>\n");

/***/ }),

/***/ "./src/app/onboarding-slides/onboarding-slides-routing.module.ts":
/*!***********************************************************************!*\
  !*** ./src/app/onboarding-slides/onboarding-slides-routing.module.ts ***!
  \***********************************************************************/
/*! exports provided: OnboardingSlidesPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OnboardingSlidesPageRoutingModule", function() { return OnboardingSlidesPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _onboarding_slides_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./onboarding-slides.page */ "./src/app/onboarding-slides/onboarding-slides.page.ts");




var routes = [
    {
        path: '',
        component: _onboarding_slides_page__WEBPACK_IMPORTED_MODULE_3__["OnboardingSlidesPage"],
    },
];
var OnboardingSlidesPageRoutingModule = /** @class */ (function () {
    function OnboardingSlidesPageRoutingModule() {
    }
    OnboardingSlidesPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], OnboardingSlidesPageRoutingModule);
    return OnboardingSlidesPageRoutingModule;
}());



/***/ }),

/***/ "./src/app/onboarding-slides/onboarding-slides.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/onboarding-slides/onboarding-slides.module.ts ***!
  \***************************************************************/
/*! exports provided: OnboardingSlidesPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OnboardingSlidesPageModule", function() { return OnboardingSlidesPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _onboarding_slides_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./onboarding-slides-routing.module */ "./src/app/onboarding-slides/onboarding-slides-routing.module.ts");
/* harmony import */ var _onboarding_slides_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./onboarding-slides.page */ "./src/app/onboarding-slides/onboarding-slides.page.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../@shared/shared.module */ "./src/app/@shared/shared.module.ts");





var OnboardingSlidesPageModule = /** @class */ (function () {
    function OnboardingSlidesPageModule() {
    }
    OnboardingSlidesPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"], _onboarding_slides_routing_module__WEBPACK_IMPORTED_MODULE_2__["OnboardingSlidesPageRoutingModule"]],
            declarations: [_onboarding_slides_page__WEBPACK_IMPORTED_MODULE_3__["OnboardingSlidesPage"]],
        })
    ], OnboardingSlidesPageModule);
    return OnboardingSlidesPageModule;
}());



/***/ }),

/***/ "./src/app/onboarding-slides/onboarding-slides.page.scss":
/*!***************************************************************!*\
  !*** ./src/app/onboarding-slides/onboarding-slides.page.scss ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-slides {\n  height: 100%;\n}\n\n.logo-name {\n  flex-direction: column;\n  display: flex;\n}\n\n.logo-name img {\n  min-width: 110px;\n  max-height: 200px;\n}\n\n.three-images > * {\n  flex: 1 1 auto;\n}\n\n.three-images img {\n  -o-object-fit: contain;\n     object-fit: contain;\n}\n\n.icon-rounded {\n  border: 1px solid;\n  border-radius: 2px;\n  padding: 10px;\n}\n\n@media screen and (min-width: 500px) and (orientation: portrait) {\n  .slide-image {\n    max-width: 60%;\n  }\n}\n\n@media screen and (max-height: 600px) and (orientation: portrait) {\n  .logo-top {\n    display: none;\n  }\n\n  .swiper-slide img {\n    max-height: 150px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvb25ib2FyZGluZy1zbGlkZXMvb25ib2FyZGluZy1zbGlkZXMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBQTtBQUNGOztBQUNBO0VBQ0Usc0JBQUE7RUFDQSxhQUFBO0FBRUY7O0FBREU7RUFDRSxnQkFBQTtFQUNBLGlCQUFBO0FBR0o7O0FBQ0U7RUFDRSxjQUFBO0FBRUo7O0FBQUU7RUFDRSxzQkFBQTtLQUFBLG1CQUFBO0FBRUo7O0FBQ0E7RUFDRSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtBQUVGOztBQUFBO0VBQ0U7SUFDRSxjQUFBO0VBR0Y7QUFDRjs7QUFEQTtFQUNFO0lBQ0UsYUFBQTtFQUdGOztFQURBO0lBQ0UsaUJBQUE7RUFJRjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvb25ib2FyZGluZy1zbGlkZXMvb25ib2FyZGluZy1zbGlkZXMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLXNsaWRlcyB7XG4gIGhlaWdodDogMTAwJTtcbn1cbi5sb2dvLW5hbWUge1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBkaXNwbGF5OiBmbGV4O1xuICBpbWcge1xuICAgIG1pbi13aWR0aDogMTEwcHg7XG4gICAgbWF4LWhlaWdodDogMjAwcHg7XG4gIH1cbn1cbi50aHJlZS1pbWFnZXMge1xuICA+ICoge1xuICAgIGZsZXg6IDEgMSBhdXRvO1xuICB9XG4gIGltZyB7XG4gICAgb2JqZWN0LWZpdDogY29udGFpbjtcbiAgfVxufVxuLmljb24tcm91bmRlZCB7XG4gIGJvcmRlcjogMXB4IHNvbGlkO1xuICBib3JkZXItcmFkaXVzOiAycHg7XG4gIHBhZGRpbmc6IDEwcHg7XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA1MDBweCkgYW5kIChvcmllbnRhdGlvbjogcG9ydHJhaXQpIHtcbiAgLnNsaWRlLWltYWdlIHtcbiAgICBtYXgtd2lkdGg6IDYwJTtcbiAgfVxufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC1oZWlnaHQ6IDYwMHB4KSBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkge1xuICAubG9nby10b3Age1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cbiAgLnN3aXBlci1zbGlkZSBpbWcge1xuICAgIG1heC1oZWlnaHQ6IDE1MHB4O1xuICB9XG59XG4iXX0= */");

/***/ }),

/***/ "./src/app/onboarding-slides/onboarding-slides.page.ts":
/*!*************************************************************!*\
  !*** ./src/app/onboarding-slides/onboarding-slides.page.ts ***!
  \*************************************************************/
/*! exports provided: OnboardingSlidesPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OnboardingSlidesPage", function() { return OnboardingSlidesPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _global_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../@global/constants */ "./src/app/@global/constants.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _base_base_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../base/base.page */ "./src/app/base/base.page.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngxs/store */ "./node_modules/@ngxs/store/__ivy_ngcc__/fesm2015/ngxs-store.js");
/* harmony import */ var _core_utils_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../@core/utils.service */ "./src/app/@core/utils.service.ts");
/* harmony import */ var _store_common_common_state__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../@store/common/common.state */ "./src/app/@store/common/common.state.ts");










var OnboardingSlidesPage = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(OnboardingSlidesPage, _super);
    function OnboardingSlidesPage(location, router, store, utilsService, menuCtrl) {
        var _this = _super.call(this, location, router, store, utilsService) || this;
        _this.menuCtrl = menuCtrl;
        _this.symbolPath = _global_constants__WEBPACK_IMPORTED_MODULE_3__["Constants"].COMPLETE_LOGO_PATH;
        _this.logoPath = _global_constants__WEBPACK_IMPORTED_MODULE_3__["Constants"].LOGO_PATH;
        _this.imagePathOnboarding = _global_constants__WEBPACK_IMPORTED_MODULE_3__["Constants"].ONBOARDING_IMAGE_PATH;
        _this.language = '';
        return _this;
    }
    OnboardingSlidesPage.prototype.doIonViewWillEnter = function () {
        this.menuCtrl.enable(false);
    };
    OnboardingSlidesPage.prototype.ngOnInit = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var _this = this;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                this.subscription$ = this.store.select(_store_common_common_state__WEBPACK_IMPORTED_MODULE_9__["CommonState"].getLanguage).subscribe(function (data) {
                    if (!data) {
                        return;
                    }
                    _this.language = data;
                });
                return [2 /*return*/];
            });
        });
    };
    OnboardingSlidesPage.prototype.goLoginWithParams = function (showBack) {
        this.utilsService.goLoginWithParams(showBack);
    };
    OnboardingSlidesPage.prototype.ngOnDestroy = function () {
        this.subscription$.unsubscribe();
    };
    OnboardingSlidesPage.ctorParameters = function () { return [
        { type: _angular_common__WEBPACK_IMPORTED_MODULE_6__["Location"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _ngxs_store__WEBPACK_IMPORTED_MODULE_7__["Store"] },
        { type: _core_utils_service__WEBPACK_IMPORTED_MODULE_8__["UtilsService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["MenuController"] }
    ]; };
    OnboardingSlidesPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-onboarding-slides',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./onboarding-slides.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/onboarding-slides/onboarding-slides.page.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./onboarding-slides.page.scss */ "./src/app/onboarding-slides/onboarding-slides.page.scss")).default]
        })
    ], OnboardingSlidesPage);
    return OnboardingSlidesPage;
}(_base_base_page__WEBPACK_IMPORTED_MODULE_5__["BasePage"]));



/***/ })

}]);
//# sourceMappingURL=onboarding-slides-onboarding-slides-module.js.map