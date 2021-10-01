(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"],{

/***/ "./node_modules/@ionic/core/dist/esm/button-active-4927a4c1.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/button-active-4927a4c1.js ***!
  \*********************************************************************/
/*! exports provided: c */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return createButtonActiveGesture; });
/* harmony import */ var _index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index-7a8b7a1c.js */ "./node_modules/@ionic/core/dist/esm/index-7a8b7a1c.js");
/* harmony import */ var _haptic_27b3f981_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./haptic-27b3f981.js */ "./node_modules/@ionic/core/dist/esm/haptic-27b3f981.js");
/* harmony import */ var _index_f49d994d_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index-f49d994d.js */ "./node_modules/@ionic/core/dist/esm/index-f49d994d.js");




var createButtonActiveGesture = function createButtonActiveGesture(el, isButton) {
  var currentTouchedButton;
  var initialTouchedButton;

  var activateButtonAtPoint = function activateButtonAtPoint(x, y, hapticFeedbackFn) {
    if (typeof document === 'undefined') {
      return;
    }

    var target = document.elementFromPoint(x, y);

    if (!target || !isButton(target)) {
      clearActiveButton();
      return;
    }

    if (target !== currentTouchedButton) {
      clearActiveButton();
      setActiveButton(target, hapticFeedbackFn);
    }
  };

  var setActiveButton = function setActiveButton(button, hapticFeedbackFn) {
    currentTouchedButton = button;

    if (!initialTouchedButton) {
      initialTouchedButton = currentTouchedButton;
    }

    var buttonToModify = currentTouchedButton;
    Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__["c"])(function () {
      return buttonToModify.classList.add('ion-activated');
    });
    hapticFeedbackFn();
  };

  var clearActiveButton = function clearActiveButton() {
    var dispatchClick = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

    if (!currentTouchedButton) {
      return;
    }

    var buttonToModify = currentTouchedButton;
    Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__["c"])(function () {
      return buttonToModify.classList.remove('ion-activated');
    });
    /**
     * Clicking on one button, but releasing on another button
     * does not dispatch a click event in browsers, so we
     * need to do it manually here. Some browsers will
     * dispatch a click if clicking on one button, dragging over
     * another button, and releasing on the original button. In that
     * case, we need to make sure we do not cause a double click there.
     */

    if (dispatchClick && initialTouchedButton !== currentTouchedButton) {
      currentTouchedButton.click();
    }

    currentTouchedButton = undefined;
  };

  return Object(_index_f49d994d_js__WEBPACK_IMPORTED_MODULE_2__["createGesture"])({
    el: el,
    gestureName: 'buttonActiveDrag',
    threshold: 0,
    onStart: function onStart(ev) {
      return activateButtonAtPoint(ev.currentX, ev.currentY, _haptic_27b3f981_js__WEBPACK_IMPORTED_MODULE_1__["a"]);
    },
    onMove: function onMove(ev) {
      return activateButtonAtPoint(ev.currentX, ev.currentY, _haptic_27b3f981_js__WEBPACK_IMPORTED_MODULE_1__["b"]);
    },
    onEnd: function onEnd() {
      clearActiveButton(true);
      Object(_haptic_27b3f981_js__WEBPACK_IMPORTED_MODULE_1__["h"])();
      initialTouchedButton = undefined;
    }
  });
};



/***/ }),

/***/ "./node_modules/@ionic/core/dist/esm/framework-delegate-4392cd63.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/framework-delegate-4392cd63.js ***!
  \**************************************************************************/
/*! exports provided: a, d */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return attachComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return detachComponent; });
/* harmony import */ var _Users_jairomendez_jenkins_build_workspace_Impulsyn_Android_Mac_PRE_AllTest_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _Users_jairomendez_jenkins_build_workspace_Impulsyn_Android_Mac_PRE_AllTest_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_jairomendez_jenkins_build_workspace_Impulsyn_Android_Mac_PRE_AllTest_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Users_jairomendez_jenkins_build_workspace_Impulsyn_Android_Mac_PRE_AllTest_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _helpers_dd7e4b7b_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./helpers-dd7e4b7b.js */ "./node_modules/@ionic/core/dist/esm/helpers-dd7e4b7b.js");




var attachComponent = /*#__PURE__*/function () {
  var _ref = Object(_Users_jairomendez_jenkins_build_workspace_Impulsyn_Android_Mac_PRE_AllTest_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_Users_jairomendez_jenkins_build_workspace_Impulsyn_Android_Mac_PRE_AllTest_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(delegate, container, component, cssClasses, componentProps) {
    var el;
    return _Users_jairomendez_jenkins_build_workspace_Impulsyn_Android_Mac_PRE_AllTest_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            if (!delegate) {
              _context.next = 2;
              break;
            }

            return _context.abrupt("return", delegate.attachViewToDom(container, component, componentProps, cssClasses));

          case 2:
            if (!(typeof component !== 'string' && !(component instanceof HTMLElement))) {
              _context.next = 4;
              break;
            }

            throw new Error('framework delegate is missing');

          case 4:
            el = typeof component === 'string' ? container.ownerDocument && container.ownerDocument.createElement(component) : component;

            if (cssClasses) {
              cssClasses.forEach(function (c) {
                return el.classList.add(c);
              });
            }

            if (componentProps) {
              Object.assign(el, componentProps);
            }

            container.appendChild(el);
            _context.next = 10;
            return new Promise(function (resolve) {
              return Object(_helpers_dd7e4b7b_js__WEBPACK_IMPORTED_MODULE_2__["c"])(el, resolve);
            });

          case 10:
            return _context.abrupt("return", el);

          case 11:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function attachComponent(_x, _x2, _x3, _x4, _x5) {
    return _ref.apply(this, arguments);
  };
}();

var detachComponent = function detachComponent(delegate, element) {
  if (element) {
    if (delegate) {
      var container = element.parentElement;
      return delegate.removeViewFromDom(container, element);
    }

    element.remove();
  }

  return Promise.resolve();
};



/***/ }),

/***/ "./node_modules/@ionic/core/dist/esm/haptic-27b3f981.js":
/*!**************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/haptic-27b3f981.js ***!
  \**************************************************************/
/*! exports provided: a, b, c, d, h */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return hapticSelectionStart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return hapticSelectionChanged; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return hapticSelection; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return hapticImpact; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return hapticSelectionEnd; });
var HapticEngine = {
  getEngine: function getEngine() {
    var win = window;
    return win.TapticEngine || win.Capacitor && win.Capacitor.isPluginAvailable('Haptics') && win.Capacitor.Plugins.Haptics;
  },
  available: function available() {
    return !!this.getEngine();
  },
  isCordova: function isCordova() {
    return !!window.TapticEngine;
  },
  isCapacitor: function isCapacitor() {
    var win = window;
    return !!win.Capacitor;
  },
  impact: function impact(options) {
    var engine = this.getEngine();

    if (!engine) {
      return;
    }

    var style = this.isCapacitor() ? options.style.toUpperCase() : options.style;
    engine.impact({
      style: style
    });
  },
  notification: function notification(options) {
    var engine = this.getEngine();

    if (!engine) {
      return;
    }

    var style = this.isCapacitor() ? options.style.toUpperCase() : options.style;
    engine.notification({
      style: style
    });
  },
  selection: function selection() {
    this.impact({
      style: 'light'
    });
  },
  selectionStart: function selectionStart() {
    var engine = this.getEngine();

    if (!engine) {
      return;
    }

    if (this.isCapacitor()) {
      engine.selectionStart();
    } else {
      engine.gestureSelectionStart();
    }
  },
  selectionChanged: function selectionChanged() {
    var engine = this.getEngine();

    if (!engine) {
      return;
    }

    if (this.isCapacitor()) {
      engine.selectionChanged();
    } else {
      engine.gestureSelectionChanged();
    }
  },
  selectionEnd: function selectionEnd() {
    var engine = this.getEngine();

    if (!engine) {
      return;
    }

    if (this.isCapacitor()) {
      engine.selectionEnd();
    } else {
      engine.gestureSelectionEnd();
    }
  }
};
/**
 * Trigger a selection changed haptic event. Good for one-time events
 * (not for gestures)
 */

var hapticSelection = function hapticSelection() {
  HapticEngine.selection();
};
/**
 * Tell the haptic engine that a gesture for a selection change is starting.
 */


var hapticSelectionStart = function hapticSelectionStart() {
  HapticEngine.selectionStart();
};
/**
 * Tell the haptic engine that a selection changed during a gesture.
 */


var hapticSelectionChanged = function hapticSelectionChanged() {
  HapticEngine.selectionChanged();
};
/**
 * Tell the haptic engine we are done with a gesture. This needs to be
 * called lest resources are not properly recycled.
 */


var hapticSelectionEnd = function hapticSelectionEnd() {
  HapticEngine.selectionEnd();
};
/**
 * Use this to indicate success/failure/warning to the user.
 * options should be of the type `{ style: 'light' }` (or `medium`/`heavy`)
 */


var hapticImpact = function hapticImpact(options) {
  HapticEngine.impact(options);
};



/***/ }),

/***/ "./node_modules/@ionic/core/dist/esm/spinner-configs-cd7845af.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/spinner-configs-cd7845af.js ***!
  \***********************************************************************/
/*! exports provided: S */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "S", function() { return SPINNERS; });
var spinners = {
  'bubbles': {
    dur: 1000,
    circles: 9,
    fn: function fn(dur, index, total) {
      var animationDelay = "".concat(dur * index / total - dur, "ms");
      var angle = 2 * Math.PI * index / total;
      return {
        r: 5,
        style: {
          'top': "".concat(9 * Math.sin(angle), "px"),
          'left': "".concat(9 * Math.cos(angle), "px"),
          'animation-delay': animationDelay
        }
      };
    }
  },
  'circles': {
    dur: 1000,
    circles: 8,
    fn: function fn(dur, index, total) {
      var step = index / total;
      var animationDelay = "".concat(dur * step - dur, "ms");
      var angle = 2 * Math.PI * step;
      return {
        r: 5,
        style: {
          'top': "".concat(9 * Math.sin(angle), "px"),
          'left': "".concat(9 * Math.cos(angle), "px"),
          'animation-delay': animationDelay
        }
      };
    }
  },
  'circular': {
    dur: 1400,
    elmDuration: true,
    circles: 1,
    fn: function fn() {
      return {
        r: 20,
        cx: 48,
        cy: 48,
        fill: 'none',
        viewBox: '24 24 48 48',
        transform: 'translate(0,0)',
        style: {}
      };
    }
  },
  'crescent': {
    dur: 750,
    circles: 1,
    fn: function fn() {
      return {
        r: 26,
        style: {}
      };
    }
  },
  'dots': {
    dur: 750,
    circles: 3,
    fn: function fn(_, index) {
      var animationDelay = -(110 * index) + 'ms';
      return {
        r: 6,
        style: {
          'left': "".concat(9 - 9 * index, "px"),
          'animation-delay': animationDelay
        }
      };
    }
  },
  'lines': {
    dur: 1000,
    lines: 12,
    fn: function fn(dur, index, total) {
      var transform = "rotate(".concat(30 * index + (index < 6 ? 180 : -180), "deg)");
      var animationDelay = "".concat(dur * index / total - dur, "ms");
      return {
        y1: 17,
        y2: 29,
        style: {
          'transform': transform,
          'animation-delay': animationDelay
        }
      };
    }
  },
  'lines-small': {
    dur: 1000,
    lines: 12,
    fn: function fn(dur, index, total) {
      var transform = "rotate(".concat(30 * index + (index < 6 ? 180 : -180), "deg)");
      var animationDelay = "".concat(dur * index / total - dur, "ms");
      return {
        y1: 12,
        y2: 20,
        style: {
          'transform': transform,
          'animation-delay': animationDelay
        }
      };
    }
  }
};
var SPINNERS = spinners;


/***/ }),

/***/ "./node_modules/@ionic/core/dist/esm/theme-ff3fc52f.js":
/*!*************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/theme-ff3fc52f.js ***!
  \*************************************************************/
/*! exports provided: c, g, h, o */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return createColorClasses; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return getClassMap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return hostContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "o", function() { return openURL; });
/* harmony import */ var _Users_jairomendez_jenkins_build_workspace_Impulsyn_Android_Mac_PRE_AllTest_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _Users_jairomendez_jenkins_build_workspace_Impulsyn_Android_Mac_PRE_AllTest_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_jairomendez_jenkins_build_workspace_Impulsyn_Android_Mac_PRE_AllTest_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Users_jairomendez_jenkins_build_workspace_Impulsyn_Android_Mac_PRE_AllTest_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _Users_jairomendez_jenkins_build_workspace_Impulsyn_Android_Mac_PRE_AllTest_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");




var hostContext = function hostContext(selector, el) {
  return el.closest(selector) !== null;
};
/**
 * Create the mode and color classes for the component based on the classes passed in
 */


var createColorClasses = function createColorClasses(color, cssClassMap) {
  return typeof color === 'string' && color.length > 0 ? Object.assign(Object(_Users_jairomendez_jenkins_build_workspace_Impulsyn_Android_Mac_PRE_AllTest_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])({
    'ion-color': true
  }, "ion-color-".concat(color), true), cssClassMap) : cssClassMap;
};

var getClassList = function getClassList(classes) {
  if (classes !== undefined) {
    var array = Array.isArray(classes) ? classes : classes.split(' ');
    return array.filter(function (c) {
      return c != null;
    }).map(function (c) {
      return c.trim();
    }).filter(function (c) {
      return c !== '';
    });
  }

  return [];
};

var getClassMap = function getClassMap(classes) {
  var map = {};
  getClassList(classes).forEach(function (c) {
    return map[c] = true;
  });
  return map;
};

var SCHEME = /^[a-z][a-z0-9+\-.]*:/;

var openURL = /*#__PURE__*/function () {
  var _ref = Object(_Users_jairomendez_jenkins_build_workspace_Impulsyn_Android_Mac_PRE_AllTest_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_Users_jairomendez_jenkins_build_workspace_Impulsyn_Android_Mac_PRE_AllTest_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(url, ev, direction, animation) {
    var router;
    return _Users_jairomendez_jenkins_build_workspace_Impulsyn_Android_Mac_PRE_AllTest_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            if (!(url != null && url[0] !== '#' && !SCHEME.test(url))) {
              _context.next = 5;
              break;
            }

            router = document.querySelector('ion-router');

            if (!router) {
              _context.next = 5;
              break;
            }

            if (ev != null) {
              ev.preventDefault();
            }

            return _context.abrupt("return", router.push(url, direction, animation));

          case 5:
            return _context.abrupt("return", false);

          case 6:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function openURL(_x, _x2, _x3, _x4) {
    return _ref.apply(this, arguments);
  };
}();



/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/networking/components/item-request/item-request.component.html":
/*!**********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/networking/components/item-request/item-request.component.html ***!
  \**********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"item-profile\">\n  <app-image-item [imageProfile]=\"info.photo\" (click)=\"onItemClick()\"></app-image-item>\n  <div class=\"avatar-text col-xs-6\" (click)=\"onItemClick()\">\n    <span class=\"small-size\">{{ info.complete_name }}</span>\n    <span class=\"small-size\">{{ info.occupation }}</span>\n    <span class=\"small-size\" color=\"secondary\" *ngIf=\"!textResponse\">\n      {{ 'networking.requestDone' | translate }} {{ friendlyDate }}\n    </span>\n    <span class=\"small-size\" color=\"secondary\" *ngIf=\"textResponse\">{{ textResponse | translate }}</span>\n  </div>\n  <ion-button (click)=\"onCancelClick()\" class=\"reject secondary-button\" *ngIf=\"!textResponse\">\n    <ion-icon slot=\"icon-only\" name=\"close-outline\"></ion-icon>\n  </ion-button>\n  <ion-button (click)=\"onAcceptClick()\" class=\"accept\" *ngIf=\"!textResponse\">\n    <ion-icon slot=\"icon-only\" name=\"checkmark-outline\"></ion-icon>\n  </ion-button>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/networking/my-requests/my-requests.page.html":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/networking/my-requests/my-requests.page.html ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-header\n  [title]=\"'networking.requests' | translate\"\n  [showBackButton]=\"true\"\n  (backButtonClick)=\"goBack()\"\n></app-header>\n\n<ion-content>\n  <div *ngFor=\"let item of items\">\n    <app-item-request\n      [info]=\"item\"\n      (acceptClick)=\"onResponseRequest($event, true)\"\n      (cancelClick)=\"onResponseRequest($event, false)\"\n    ></app-item-request>\n  </div>\n</ion-content>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/profile-visits/components/item-visit/item-visit.component.html":
/*!**********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/profile-visits/components/item-visit/item-visit.component.html ***!
  \**********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"item-profile\" (click)=\"onItemClick(info.id)\">\n  <app-image-item [imageProfile]=\"info.photo\"></app-image-item>\n  <div class=\"avatar-text col-xs-10\">\n    <span class=\"small-size\">{{ info.complete_name }}</span>\n    <span class=\"small-size\">{{ info.occupation }}</span>\n    <div class=\"small-size\">{{ friendlyLocation }}</div>\n    <span class=\"small-size\" color=\"secondary\">\n      {{ friendlyDate }}\n    </span>\n  </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/profiles/components/complete-item/complete-item.component.html":
/*!**********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/profiles/components/complete-item/complete-item.component.html ***!
  \**********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"item-profile background-white\">\n  <!--  <div>-->\n  <!--    <img [src]=\"info.imageUrl\" class=\"avatar-image\" />-->\n  <!--  </div>-->\n  <div class=\"avatar-text\">\n    <div class=\"small-size bold\">{{ info.title }}</div>\n    <div class=\"small-size\">{{ info.description }}</div>\n    <div class=\"small-size\">{{ info.location }}</div>\n  </div>\n  <!--<ion-icon *ngIf=\"editable\" name=\"pencil-sharp\" class=\"icon\" (click)=\"onIconClick()\"></ion-icon>-->\n  <ion-icon *ngIf=\"editable\" name=\"trash\" class=\"icon\" (click)=\"onEraseClick(info.id)\"></ion-icon>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/profiles/components/section-title/section-title.component.html":
/*!**********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/profiles/components/section-title/section-title.component.html ***!
  \**********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-row class=\"ion-align-items-end ion-justify-content-start w100 title-section ion-margin-vertical\" *ngIf=\"editable\">\n  <ion-col size=\"12\" class=\"ion-text-center\">\n    <span color=\"secondary\" class=\"bold\">{{ text | translate }}</span>\n    <ion-icon\n      *ngIf=\"editable && showAdd\"\n      color=\"secondary\"\n      [name]=\"iconName\"\n      class=\"bold extrabig-size\"\n      (click)=\"onIconClick()\"\n    ></ion-icon>\n  </ion-col>\n</ion-row>\n");

/***/ }),

/***/ "./src/app/create-organization-flow/organization-base.page.ts":
/*!********************************************************************!*\
  !*** ./src/app/create-organization-flow/organization-base.page.ts ***!
  \********************************************************************/
/*! exports provided: OrganizationBasePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrganizationBasePage", function() { return OrganizationBasePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _global_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../@global/utils */ "./src/app/@global/utils.ts");
/* harmony import */ var _create_organization_pages__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./create-organization-pages */ "./src/app/create-organization-flow/create-organization-pages.ts");
/* harmony import */ var _store_navigation_navigation_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../@store/navigation/navigation.actions */ "./src/app/@store/navigation/navigation.actions.ts");
/* harmony import */ var _base_profile_image_editor_base_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../base/profile-image-editor-base.page */ "./src/app/base/profile-image-editor-base.page.ts");





var OrganizationBasePage = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(OrganizationBasePage, _super);
    function OrganizationBasePage(location, router, store, utilsService, camera, informService, storage) {
        var _this = _super.call(this, location, router, store, utilsService, camera, informService) || this;
        _this.storage = storage;
        return _this;
    }
    OrganizationBasePage.prototype.goNextFlowPage = function (pagePosition, navigationExtras, createdPageId) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                if (_global_utils__WEBPACK_IMPORTED_MODULE_1__["Utils"].isCreateOrganizationFlowLastPage(pagePosition)) {
                    // if is last page
                    this.store.dispatch(new _store_navigation_navigation_actions__WEBPACK_IMPORTED_MODULE_3__["SetCanEnterCreatePageFlow"](false));
                    this.router.navigate(['organization-profile', createdPageId]);
                }
                else {
                    this.router.navigate(["/" + _create_organization_pages__WEBPACK_IMPORTED_MODULE_2__["CREATE_ORGANIZATION_FLOW_PAGES"][pagePosition + 1]], navigationExtras);
                }
                return [2 /*return*/];
            });
        });
    };
    return OrganizationBasePage;
}(_base_profile_image_editor_base_page__WEBPACK_IMPORTED_MODULE_4__["ProfileImageEditorBasePage"]));



/***/ }),

/***/ "./src/app/networking/components/item-request/item-request.component.scss":
/*!********************************************************************************!*\
  !*** ./src/app/networking/components/item-request/item-request.component.scss ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-button {\n  --border-width: 1px;\n  --border-style: solid;\n  --padding-start: 0;\n  --padding-end: 0;\n  --padding-bottom: 0;\n  --padding-top: 0;\n  --border-radius: 50%;\n  height: 40px;\n  width: 40px;\n  min-width: 40px !important;\n  max-width: 40px !important;\n  max-height: 40px !important;\n  position: absolute;\n}\nion-button ion-icon {\n  width: 24px;\n  height: 24px;\n}\nion-button.reject {\n  right: 70px;\n}\nion-button.accept {\n  right: 15px;\n  --color: var(--ion-color-primary-contrast);\n  --border-color: var(--ion-color-secondary-shade);\n  --background: var(--ion-color-secondary);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmV0d29ya2luZy9jb21wb25lbnRzL2l0ZW0tcmVxdWVzdC9pdGVtLXJlcXVlc3QuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxtQkFBQTtFQUNBLHFCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFFQSxvQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsMEJBQUE7RUFDQSwwQkFBQTtFQUNBLDJCQUFBO0VBRUEsa0JBQUE7QUFERjtBQUtFO0VBQ0UsV0FBQTtFQUNBLFlBQUE7QUFISjtBQUtFO0VBQ0UsV0FBQTtBQUhKO0FBS0U7RUFDRSxXQUFBO0VBQ0EsMENBQUE7RUFDQSxnREFBQTtFQUNBLHdDQUFBO0FBSEoiLCJmaWxlIjoic3JjL2FwcC9uZXR3b3JraW5nL2NvbXBvbmVudHMvaXRlbS1yZXF1ZXN0L2l0ZW0tcmVxdWVzdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1idXR0b24ge1xuICAtLWJvcmRlci13aWR0aDogMXB4O1xuICAtLWJvcmRlci1zdHlsZTogc29saWQ7XG4gIC0tcGFkZGluZy1zdGFydDogMDtcbiAgLS1wYWRkaW5nLWVuZDogMDtcbiAgLS1wYWRkaW5nLWJvdHRvbTogMDtcbiAgLS1wYWRkaW5nLXRvcDogMDtcblxuICAtLWJvcmRlci1yYWRpdXM6IDUwJTtcbiAgaGVpZ2h0OiA0MHB4O1xuICB3aWR0aDogNDBweDtcbiAgbWluLXdpZHRoOiA0MHB4ICFpbXBvcnRhbnQ7XG4gIG1heC13aWR0aDogNDBweCAhaW1wb3J0YW50O1xuICBtYXgtaGVpZ2h0OiA0MHB4ICFpbXBvcnRhbnQ7XG5cbiAgcG9zaXRpb246IGFic29sdXRlO1xuXG4gIC8vYm90dG9tOiAwO1xuXG4gIGlvbi1pY29uIHtcbiAgICB3aWR0aDogMjRweDtcbiAgICBoZWlnaHQ6IDI0cHg7XG4gIH1cbiAgJi5yZWplY3Qge1xuICAgIHJpZ2h0OiA3MHB4O1xuICB9XG4gICYuYWNjZXB0IHtcbiAgICByaWdodDogMTVweDtcbiAgICAtLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeS1jb250cmFzdCk7XG4gICAgLS1ib3JkZXItY29sb3I6IHZhcigtLWlvbi1jb2xvci1zZWNvbmRhcnktc2hhZGUpO1xuICAgIC0tYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXNlY29uZGFyeSk7XG4gIH1cbn1cbiJdfQ== */");

/***/ }),

/***/ "./src/app/networking/components/item-request/item-request.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/networking/components/item-request/item-request.component.ts ***!
  \******************************************************************************/
/*! exports provided: ItemRequestComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItemRequestComponent", function() { return ItemRequestComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _global_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../@global/utils */ "./src/app/@global/utils.ts");



var ItemRequestComponent = /** @class */ (function () {
    function ItemRequestComponent() {
        this.cancelClick = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.acceptClick = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.actionItemClick = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    ItemRequestComponent.prototype.ngOnInit = function () {
        console.log('on init');
    };
    ItemRequestComponent.prototype.ngOnChanges = function (changes) {
        if (changes.info) {
            var info = changes.info.currentValue;
            this.friendlyDate = _global_utils__WEBPACK_IMPORTED_MODULE_2__["Utils"].getSpanishFormatDate(info.request_date);
            if (info.accept !== null && info.accept !== undefined) {
                this.textResponse = info.accept ? 'networking.accept' : 'networking.reject';
            }
        }
    };
    ItemRequestComponent.prototype.onCancelClick = function () {
        this.cancelClick.emit(this.info.id);
    };
    ItemRequestComponent.prototype.onAcceptClick = function () {
        this.acceptClick.emit(this.info.id);
    };
    ItemRequestComponent.prototype.onItemClick = function () {
        this.actionItemClick.emit({
            model: this.info,
            isOrganization: false,
        });
    };
    ItemRequestComponent.ctorParameters = function () { return []; };
    ItemRequestComponent.propDecorators = {
        info: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
        cancelClick: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] }],
        acceptClick: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] }],
        actionItemClick: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] }]
    };
    ItemRequestComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-item-request',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./item-request.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/networking/components/item-request/item-request.component.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./item-request.component.scss */ "./src/app/networking/components/item-request/item-request.component.scss")).default]
        })
    ], ItemRequestComponent);
    return ItemRequestComponent;
}());



/***/ }),

/***/ "./src/app/networking/components/item-request/item-request.module.ts":
/*!***************************************************************************!*\
  !*** ./src/app/networking/components/item-request/item-request.module.ts ***!
  \***************************************************************************/
/*! exports provided: ItemRequestComponentModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItemRequestComponentModule", function() { return ItemRequestComponentModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
/* harmony import */ var _item_request_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./item-request.component */ "./src/app/networking/components/item-request/item-request.component.ts");
/* harmony import */ var _shared_components_image_item_image_item_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../@shared/components/image-item/image-item.module */ "./src/app/@shared/components/image-item/image-item.module.ts");







var ItemRequestComponentModule = /** @class */ (function () {
    function ItemRequestComponentModule() {
    }
    ItemRequestComponentModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_item_request_component__WEBPACK_IMPORTED_MODULE_5__["ItemRequestComponent"]],
            imports: [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateModule"].forChild(), _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _shared_components_image_item_image_item_module__WEBPACK_IMPORTED_MODULE_6__["ImageItemModule"]],
            exports: [_item_request_component__WEBPACK_IMPORTED_MODULE_5__["ItemRequestComponent"]],
        })
    ], ItemRequestComponentModule);
    return ItemRequestComponentModule;
}());



/***/ }),

/***/ "./src/app/networking/my-requests/my-requests-routing.module.ts":
/*!**********************************************************************!*\
  !*** ./src/app/networking/my-requests/my-requests-routing.module.ts ***!
  \**********************************************************************/
/*! exports provided: MyRequestsPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyRequestsPageRoutingModule", function() { return MyRequestsPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _my_requests_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./my-requests.page */ "./src/app/networking/my-requests/my-requests.page.ts");




var routes = [
    {
        path: '',
        component: _my_requests_page__WEBPACK_IMPORTED_MODULE_3__["MyRequestsPage"],
    },
];
var MyRequestsPageRoutingModule = /** @class */ (function () {
    function MyRequestsPageRoutingModule() {
    }
    MyRequestsPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], MyRequestsPageRoutingModule);
    return MyRequestsPageRoutingModule;
}());



/***/ }),

/***/ "./src/app/networking/my-requests/my-requests.module.ts":
/*!**************************************************************!*\
  !*** ./src/app/networking/my-requests/my-requests.module.ts ***!
  \**************************************************************/
/*! exports provided: MyRequestsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyRequestsPageModule", function() { return MyRequestsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _my_requests_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./my-requests-routing.module */ "./src/app/networking/my-requests/my-requests-routing.module.ts");
/* harmony import */ var _my_requests_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./my-requests.page */ "./src/app/networking/my-requests/my-requests.page.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../@shared/shared.module */ "./src/app/@shared/shared.module.ts");
/* harmony import */ var _components_item_request_item_request_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/item-request/item-request.module */ "./src/app/networking/components/item-request/item-request.module.ts");






var MyRequestsPageModule = /** @class */ (function () {
    function MyRequestsPageModule() {
    }
    MyRequestsPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"], _my_requests_routing_module__WEBPACK_IMPORTED_MODULE_2__["MyRequestsPageRoutingModule"], _components_item_request_item_request_module__WEBPACK_IMPORTED_MODULE_5__["ItemRequestComponentModule"]],
            declarations: [_my_requests_page__WEBPACK_IMPORTED_MODULE_3__["MyRequestsPage"]],
        })
    ], MyRequestsPageModule);
    return MyRequestsPageModule;
}());



/***/ }),

/***/ "./src/app/networking/my-requests/my-requests.page.scss":
/*!**************************************************************!*\
  !*** ./src/app/networking/my-requests/my-requests.page.scss ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL25ldHdvcmtpbmcvbXktcmVxdWVzdHMvbXktcmVxdWVzdHMucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/networking/my-requests/my-requests.page.ts":
/*!************************************************************!*\
  !*** ./src/app/networking/my-requests/my-requests.page.ts ***!
  \************************************************************/
/*! exports provided: MyRequestsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyRequestsPage", function() { return MyRequestsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngxs/store */ "./node_modules/@ngxs/store/__ivy_ngcc__/fesm2015/ngxs-store.js");
/* harmony import */ var _base_base_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../base/base.page */ "./src/app/base/base.page.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _core_utils_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../@core/utils.service */ "./src/app/@core/utils.service.ts");
/* harmony import */ var _store_network_network_state__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../@store/network/network.state */ "./src/app/@store/network/network.state.ts");
/* harmony import */ var _services_networking_controllers_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../services/networking-controllers.service */ "./src/app/networking/services/networking-controllers.service.ts");









var MyRequestsPage = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(MyRequestsPage, _super);
    function MyRequestsPage(router, location, store, utilsService, networkingService) {
        var _this = _super.call(this, location, router, store, utilsService) || this;
        _this.networkingService = networkingService;
        return _this;
    }
    MyRequestsPage.prototype.ngOnInit = function () {
        this.subscribeToPendingRequests();
    };
    MyRequestsPage.prototype.ionViewWillEnter = function () {
        this.items = this.store.selectSnapshot(_store_network_network_state__WEBPACK_IMPORTED_MODULE_7__["NetworkState"].getPending);
    };
    MyRequestsPage.prototype.onResponseRequest = function (id, accept) {
        console.log('onResponseRequest ' + id + ' ' + accept);
        this.networkingService.onResponseRequest(id, accept);
    };
    MyRequestsPage.prototype.subscribeToPendingRequests = function () {
        var _this = this;
        this.pendingRequestsSubscription = this.store.select(_store_network_network_state__WEBPACK_IMPORTED_MODULE_7__["NetworkState"].getPending).subscribe(function (data) {
            _this.items = data;
        });
    };
    MyRequestsPage.prototype.disconnectObservers = function () {
        if (this.pendingRequestsSubscription) {
            this.pendingRequestsSubscription.unsubscribe();
        }
    };
    MyRequestsPage.prototype.ngOnDestroy = function () {
        this.disconnectObservers();
    };
    MyRequestsPage.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
        { type: _angular_common__WEBPACK_IMPORTED_MODULE_5__["Location"] },
        { type: _ngxs_store__WEBPACK_IMPORTED_MODULE_2__["Store"] },
        { type: _core_utils_service__WEBPACK_IMPORTED_MODULE_6__["UtilsService"] },
        { type: _services_networking_controllers_service__WEBPACK_IMPORTED_MODULE_8__["NetworkingControllersService"] }
    ]; };
    MyRequestsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-my-requests',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./my-requests.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/networking/my-requests/my-requests.page.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./my-requests.page.scss */ "./src/app/networking/my-requests/my-requests.page.scss")).default]
        })
    ], MyRequestsPage);
    return MyRequestsPage;
}(_base_base_page__WEBPACK_IMPORTED_MODULE_3__["BasePage"]));



/***/ }),

/***/ "./src/app/profile-visits/components/item-visit/item-visit.component.scss":
/*!********************************************************************************!*\
  !*** ./src/app/profile-visits/components/item-visit/item-visit.component.scss ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Byb2ZpbGUtdmlzaXRzL2NvbXBvbmVudHMvaXRlbS12aXNpdC9pdGVtLXZpc2l0LmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/profile-visits/components/item-visit/item-visit.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/profile-visits/components/item-visit/item-visit.component.ts ***!
  \******************************************************************************/
/*! exports provided: ItemVisitComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItemVisitComponent", function() { return ItemVisitComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_core_utils_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/@core/utils.service */ "./src/app/@core/utils.service.ts");
/* harmony import */ var src_app_shared_enums_publisher_type__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/@shared/enums/publisher-type */ "./src/app/@shared/enums/publisher-type.ts");
/* harmony import */ var _global_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../@global/utils */ "./src/app/@global/utils.ts");





var ItemVisitComponent = /** @class */ (function () {
    function ItemVisitComponent(utilsService) {
        this.utilsService = utilsService;
        this.cancelClick = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.acceptClick = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.friendlyLocation = '';
    }
    ItemVisitComponent.prototype.ngOnChanges = function (changes) {
        var _a;
        if ((_a = changes['info']) === null || _a === void 0 ? void 0 : _a.currentValue) {
            this.friendlyLocation = _global_utils__WEBPACK_IMPORTED_MODULE_4__["Utils"].generateUserFriendlyLocation(this.info.country, this.info.region, this.info.city, this.info.province, this.info.region_name);
            this.friendlyDate = _global_utils__WEBPACK_IMPORTED_MODULE_4__["Utils"].getSpanishFormatDate(this.info.visit_date);
        }
    };
    ItemVisitComponent.prototype.ngOnInit = function () { };
    ItemVisitComponent.prototype.onItemClick = function (userId) {
        this.utilsService.goProfile(userId, src_app_shared_enums_publisher_type__WEBPACK_IMPORTED_MODULE_3__["PUBLISHER_TYPE"].USER);
    };
    ItemVisitComponent.ctorParameters = function () { return [
        { type: src_app_core_utils_service__WEBPACK_IMPORTED_MODULE_2__["UtilsService"] }
    ]; };
    ItemVisitComponent.propDecorators = {
        info: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
        response: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
        cancelClick: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] }],
        acceptClick: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] }]
    };
    ItemVisitComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-item-visit',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./item-visit.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/profile-visits/components/item-visit/item-visit.component.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./item-visit.component.scss */ "./src/app/profile-visits/components/item-visit/item-visit.component.scss")).default]
        })
    ], ItemVisitComponent);
    return ItemVisitComponent;
}());



/***/ }),

/***/ "./src/app/profile-visits/components/item-visit/item-visit.module.ts":
/*!***************************************************************************!*\
  !*** ./src/app/profile-visits/components/item-visit/item-visit.module.ts ***!
  \***************************************************************************/
/*! exports provided: ItemVisitComponentModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItemVisitComponentModule", function() { return ItemVisitComponentModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
/* harmony import */ var _item_visit_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./item-visit.component */ "./src/app/profile-visits/components/item-visit/item-visit.component.ts");
/* harmony import */ var _shared_components_image_item_image_item_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../@shared/components/image-item/image-item.module */ "./src/app/@shared/components/image-item/image-item.module.ts");







var ItemVisitComponentModule = /** @class */ (function () {
    function ItemVisitComponentModule() {
    }
    ItemVisitComponentModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_item_visit_component__WEBPACK_IMPORTED_MODULE_5__["ItemVisitComponent"]],
            imports: [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateModule"].forChild(), _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _shared_components_image_item_image_item_module__WEBPACK_IMPORTED_MODULE_6__["ImageItemModule"]],
            exports: [_item_visit_component__WEBPACK_IMPORTED_MODULE_5__["ItemVisitComponent"]],
        })
    ], ItemVisitComponentModule);
    return ItemVisitComponentModule;
}());



/***/ }),

/***/ "./src/app/profiles/components/complete-item/complete-item.component.scss":
/*!********************************************************************************!*\
  !*** ./src/app/profiles/components/complete-item/complete-item.component.scss ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".item-profile ion-icon.icon {\n  font-size: 24px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvZmlsZXMvY29tcG9uZW50cy9jb21wbGV0ZS1pdGVtL2NvbXBsZXRlLWl0ZW0uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0U7RUFDRSxlQUFBO0FBQUoiLCJmaWxlIjoic3JjL2FwcC9wcm9maWxlcy9jb21wb25lbnRzL2NvbXBsZXRlLWl0ZW0vY29tcGxldGUtaXRlbS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5pdGVtLXByb2ZpbGUge1xuICBpb24taWNvbi5pY29uIHtcbiAgICBmb250LXNpemU6IDI0cHg7XG4gIH1cbn1cbiJdfQ== */");

/***/ }),

/***/ "./src/app/profiles/components/complete-item/complete-item.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/profiles/components/complete-item/complete-item.component.ts ***!
  \******************************************************************************/
/*! exports provided: CompleteItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompleteItemComponent", function() { return CompleteItemComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


var CompleteItemComponent = /** @class */ (function () {
    function CompleteItemComponent() {
        this.editable = false;
        this.iconClick = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.eraseClick = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    CompleteItemComponent.prototype.ngOnInit = function () { };
    CompleteItemComponent.prototype.onIconClick = function () {
        this.iconClick.emit(this.info.id);
    };
    CompleteItemComponent.prototype.onEraseClick = function (id) {
        this.eraseClick.emit(id);
    };
    CompleteItemComponent.ctorParameters = function () { return []; };
    CompleteItemComponent.propDecorators = {
        info: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
        editable: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
        iconClick: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] }],
        eraseClick: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] }]
    };
    CompleteItemComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-complete-item',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./complete-item.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/profiles/components/complete-item/complete-item.component.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./complete-item.component.scss */ "./src/app/profiles/components/complete-item/complete-item.component.scss")).default]
        })
    ], CompleteItemComponent);
    return CompleteItemComponent;
}());



/***/ }),

/***/ "./src/app/profiles/components/complete-item/complete-item.module.ts":
/*!***************************************************************************!*\
  !*** ./src/app/profiles/components/complete-item/complete-item.module.ts ***!
  \***************************************************************************/
/*! exports provided: CompleteItemModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompleteItemModule", function() { return CompleteItemModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _complete_item_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./complete-item.component */ "./src/app/profiles/components/complete-item/complete-item.component.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");






var CompleteItemModule = /** @class */ (function () {
    function CompleteItemModule() {
    }
    CompleteItemModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_complete_item_component__WEBPACK_IMPORTED_MODULE_3__["CompleteItemComponent"]],
            imports: [_ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateModule"].forChild(), _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]],
            exports: [_complete_item_component__WEBPACK_IMPORTED_MODULE_3__["CompleteItemComponent"]],
        })
    ], CompleteItemModule);
    return CompleteItemModule;
}());



/***/ }),

/***/ "./src/app/profiles/components/section-title/section-title.component.scss":
/*!********************************************************************************!*\
  !*** ./src/app/profiles/components/section-title/section-title.component.scss ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".title-section ion-icon {\n  position: absolute;\n  right: 10px;\n  top: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvZmlsZXMvY29tcG9uZW50cy9zZWN0aW9uLXRpdGxlL3NlY3Rpb24tdGl0bGUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0U7RUFDRSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxRQUFBO0FBQUoiLCJmaWxlIjoic3JjL2FwcC9wcm9maWxlcy9jb21wb25lbnRzL3NlY3Rpb24tdGl0bGUvc2VjdGlvbi10aXRsZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi50aXRsZS1zZWN0aW9uIHtcbiAgaW9uLWljb24ge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICByaWdodDogMTBweDtcbiAgICB0b3A6IDVweDtcbiAgfVxufVxuIl19 */");

/***/ }),

/***/ "./src/app/profiles/components/section-title/section-title.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/profiles/components/section-title/section-title.component.ts ***!
  \******************************************************************************/
/*! exports provided: SectionTitleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SectionTitleComponent", function() { return SectionTitleComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


var SectionTitleComponent = /** @class */ (function () {
    function SectionTitleComponent() {
        this.showAdd = true;
        this.iconClick = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    SectionTitleComponent.prototype.ngOnInit = function () { };
    SectionTitleComponent.prototype.onIconClick = function () {
        this.iconClick.emit();
    };
    SectionTitleComponent.ctorParameters = function () { return []; };
    SectionTitleComponent.propDecorators = {
        text: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
        editable: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
        showAdd: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
        iconName: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
        iconClick: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] }]
    };
    SectionTitleComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-section-title',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./section-title.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/profiles/components/section-title/section-title.component.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./section-title.component.scss */ "./src/app/profiles/components/section-title/section-title.component.scss")).default]
        })
    ], SectionTitleComponent);
    return SectionTitleComponent;
}());



/***/ }),

/***/ "./src/app/profiles/components/section-title/section-title.module.ts":
/*!***************************************************************************!*\
  !*** ./src/app/profiles/components/section-title/section-title.module.ts ***!
  \***************************************************************************/
/*! exports provided: SectionTitleModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SectionTitleModule", function() { return SectionTitleModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _section_title_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./section-title.component */ "./src/app/profiles/components/section-title/section-title.component.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");






var SectionTitleModule = /** @class */ (function () {
    function SectionTitleModule() {
    }
    SectionTitleModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_section_title_component__WEBPACK_IMPORTED_MODULE_3__["SectionTitleComponent"]],
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateModule"].forChild()],
            exports: [_section_title_component__WEBPACK_IMPORTED_MODULE_3__["SectionTitleComponent"]],
        })
    ], SectionTitleModule);
    return SectionTitleModule;
}());



/***/ }),

/***/ "./src/app/profiles/components/shared-profiles.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/profiles/components/shared-profiles.module.ts ***!
  \***************************************************************/
/*! exports provided: SharedProfilesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedProfilesModule", function() { return SharedProfilesModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _highlights_highlights_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./highlights/highlights.module */ "./src/app/profiles/components/highlights/highlights.module.ts");
/* harmony import */ var _section_title_section_title_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./section-title/section-title.module */ "./src/app/profiles/components/section-title/section-title.module.ts");
/* harmony import */ var _complete_item_complete_item_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./complete-item/complete-item.module */ "./src/app/profiles/components/complete-item/complete-item.module.ts");








var SharedProfilesModule = /** @class */ (function () {
    function SharedProfilesModule() {
    }
    SharedProfilesModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["NgModule"])({
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateModule"], _highlights_highlights_module__WEBPACK_IMPORTED_MODULE_5__["HighlightsPageModule"], _section_title_section_title_module__WEBPACK_IMPORTED_MODULE_6__["SectionTitleModule"], _complete_item_complete_item_module__WEBPACK_IMPORTED_MODULE_7__["CompleteItemModule"]],
            exports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateModule"], _highlights_highlights_module__WEBPACK_IMPORTED_MODULE_5__["HighlightsPageModule"], _section_title_section_title_module__WEBPACK_IMPORTED_MODULE_6__["SectionTitleModule"], _complete_item_complete_item_module__WEBPACK_IMPORTED_MODULE_7__["CompleteItemModule"]],
        })
    ], SharedProfilesModule);
    return SharedProfilesModule;
}());



/***/ }),

/***/ "./src/app/profiles/types/item-profile-type.ts":
/*!*****************************************************!*\
  !*** ./src/app/profiles/types/item-profile-type.ts ***!
  \*****************************************************/
/*! exports provided: ItemProfileTypes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItemProfileTypes", function() { return ItemProfileTypes; });
var ItemProfileTypes;
(function (ItemProfileTypes) {
    ItemProfileTypes[ItemProfileTypes["Experience"] = 1] = "Experience";
    ItemProfileTypes[ItemProfileTypes["Academic"] = 2] = "Academic";
    ItemProfileTypes[ItemProfileTypes["Skill"] = 3] = "Skill";
})(ItemProfileTypes || (ItemProfileTypes = {}));


/***/ }),

/***/ "./src/app/signup-flow/signup-base.page.ts":
/*!*************************************************!*\
  !*** ./src/app/signup-flow/signup-base.page.ts ***!
  \*************************************************/
/*! exports provided: SignupBasePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupBasePage", function() { return SignupBasePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _global_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../@global/constants */ "./src/app/@global/constants.ts");
/* harmony import */ var _global_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../@global/utils */ "./src/app/@global/utils.ts");
/* harmony import */ var _signup_pages__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./signup-pages */ "./src/app/signup-flow/signup-pages.ts");
/* harmony import */ var _store_user_user_actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../@store/user/user.actions */ "./src/app/@store/user/user.actions.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _base_profile_image_editor_base_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../base/profile-image-editor-base.page */ "./src/app/base/profile-image-editor-base.page.ts");







var SignupBasePage = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(SignupBasePage, _super);
    function SignupBasePage(location, router, store, utilsService, camera, informService, storage, navigationExtrasService, googleAnalyticsService) {
        var _this = _super.call(this, location, router, store, utilsService, camera, informService) || this;
        _this.storage = storage;
        _this.navigationExtrasService = navigationExtrasService;
        _this.googleAnalyticsService = googleAnalyticsService;
        return _this;
    }
    SignupBasePage.prototype.checkGoBack = function () {
        return this.navigationExtrasService.getExtras() && this.navigationExtrasService.getExtras().showGoBack;
    };
    SignupBasePage.prototype.updateSignupFlowInfo = function (pagePosition, dataName, dataValue) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.updateLastPage(pagePosition)];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.updateStorageDataObject(dataName, dataValue)];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    SignupBasePage.prototype.updateStorageDataObject = function (dataName, dataValue) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var signupInfo;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(dataValue !== null)) return [3 /*break*/, 3];
                        return [4 /*yield*/, this.storage.getSignupData()];
                    case 1:
                        signupInfo = _a.sent();
                        signupInfo[dataName] = dataValue;
                        return [4 /*yield*/, this.storage.setSignUpData(signupInfo)];
                    case 2:
                        _a.sent();
                        _a.label = 3;
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    SignupBasePage.prototype.updateLastPage = function (pagePosition) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.storage.setCompleteSignupPage(_signup_pages__WEBPACK_IMPORTED_MODULE_3__["SIGNUP_FLOW_PAGES"][pagePosition])];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    SignupBasePage.prototype.goNextFlowPage = function (pagePosition, replaceUrl) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                if (_global_utils__WEBPACK_IMPORTED_MODULE_2__["Utils"].isSignUpFlowLastPage(pagePosition)) {
                    // if is last page
                    this.router.navigate([_global_constants__WEBPACK_IMPORTED_MODULE_1__["Constants"].FIRST_PAGE_AFTER_LOGIN], { replaceUrl: replaceUrl });
                }
                else {
                    this.router.navigate(["/" + _signup_pages__WEBPACK_IMPORTED_MODULE_3__["SIGNUP_FLOW_PAGES"][pagePosition + 1]], { replaceUrl: replaceUrl });
                }
                return [2 /*return*/];
            });
        });
    };
    SignupBasePage.prototype.finishSignupProcess = function (pagePosition) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var signupInfo, userInfo;
            var _this = this;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.storage.getSignupData()];
                    case 1:
                        signupInfo = (_a.sent());
                        return [4 /*yield*/, this.utilsService.getUserRegisterDataToSave(signupInfo)];
                    case 2:
                        userInfo = _a.sent();
                        this.store
                            .dispatch(new _store_user_user_actions__WEBPACK_IMPORTED_MODULE_4__["SetUserInfo"]({ userInfo: userInfo }))
                            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["take"])(1))
                            .subscribe(function () { return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this, void 0, void 0, function () {
                            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                                switch (_a.label) {
                                    case 0: return [4 /*yield*/, this.finishSignUpFlow()];
                                    case 1:
                                        _a.sent();
                                        this.goNextFlowPage(pagePosition);
                                        this.googleAnalyticsService.userSignUp();
                                        return [2 /*return*/];
                                }
                            });
                        }); }, function (error) {
                            console.log(error);
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    SignupBasePage.prototype.finishSignUpFlow = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var lang;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.utilsService.removeSignUpDataFromLocalStorage()];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.storage.setAvoidOnboardingPages(true)];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, this.storage.getLanguage()];
                    case 3:
                        lang = _a.sent();
                        return [4 /*yield*/, this.updateStorageDataObject('language', lang)];
                    case 4:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    return SignupBasePage;
}(_base_profile_image_editor_base_page__WEBPACK_IMPORTED_MODULE_6__["ProfileImageEditorBasePage"]));



/***/ })

}]);
//# sourceMappingURL=common.js.map