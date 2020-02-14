(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-header></app-header>\n<app-home></app-home>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/header/header.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/header/header.component.html ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<mat-toolbar>\n  <mat-toolbar-row>\n    <a class=\"home-nav\" style=\"text-decoration: none; color: inherit;\" [href]=\"sanitizedUrl\"><span>Pratical Assessment</span></a>\n</mat-toolbar-row>\n</mat-toolbar>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div [ngStyle]=\"setBackground()\" class=\"container\">\n\n  <button *ngIf=\"!startLoader && !touched\" mat-raised-button class=\"home-mat-form-input home-mat-button\" (click)=\"fetchWeatherData()\">\n    Find My Weather Details\n  </button>\n\n  <mat-card class=\"location-error-card\" [@slideInLeft]=\"locationAccess === 'denied' && touched\" *ngIf=\"locationAccess === 'denied' && touched\">\n    <div class=\"location-error\" *ngIf=\"locationAccess === 'denied'\">\n      <h2>\n        It seems there was an error accessing your location, please click on the icon just left of the url in the search bar, after that you should see a 'location' permission, click it and change it to 'Allow'\n      </h2>\n    </div>\n  </mat-card>\n\n  <div class=\"alert-allow\" *ngIf=\"startLoader && touched && locationAccess !== 'denied'\">\n    <div *ngIf=\"startLoader && locationAccess !== 'denied'\" class=\"lds-ring\"><div></div><div></div><div></div><div></div></div>\n    <h3 *ngIf=\"locationAccess === 'prompt'\">\n      Please choose allow on the permission popup\n    </h3>\n  </div>  \n\n  <mat-card [@slideInLeft]=\"!startLoader && touched && locationAccess === 'granted'\" *ngIf=\"!startLoader && touched\">\n    <h3 class=\"weather-header\">{{weatherInfo.name}}</h3>\n    <span class=\"icon-container\">\n      <img class=\"weather-icon\" src={{imgUrl}}>\n    <h3 class=\"weather-temp\">{{ weatherInfo.main.temp.toString().length > 1 ? weatherInfo.main.temp.toString()[0] + weatherInfo.main.temp.toString()[1]+'°C' : weatherInfo.main.temp.toString()[0]+'°C'}} </h3>\n    </span>\n    <h3 class=\"weather-description\">{{weatherInfo.weather[0].description}}</h3>\n    <div class=\"weather-details\">\n      <h3>Feels Like</h3>\n      <h3>{{weatherInfo.main.feels_like}}°C</h3>\n    </div>\n    <div class=\"weather-details\">\n      <h3>Wind</h3>\n      <h3>{{weatherInfo.wind.speed}} KM/H</h3>\n    </div>\n    <div class=\"weather-details\">\n      <h3>Humidity</h3>\n      <h3>{{weatherInfo.main.humidity}}%</h3>\n    </div>\n  </mat-card>\n  \n</div>");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}


/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");




const routes = [{ path: 'home', component: _home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"] }];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AppComponent = class AppComponent {
    constructor() {
        this.title = 'assessment-remade-angular';
    }
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")).default]
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/esm2015/toolbar.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _services_weather_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./services/weather.service */ "./src/app/services/weather.service.ts");
/* harmony import */ var _weather_api_class__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./weather.api.class */ "./src/app/weather.api.class.ts");
/* harmony import */ var _services_photo_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./services/photo.service */ "./src/app/services/photo.service.ts");
/* harmony import */ var _unsplash_api_class__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./unsplash.api.class */ "./src/app/unsplash.api.class.ts");















let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
            _home_home_component__WEBPACK_IMPORTED_MODULE_6__["HomeComponent"],
            _header_header_component__WEBPACK_IMPORTED_MODULE_7__["HeaderComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"],
            _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_8__["MatToolbarModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClientModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatInputModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatIconModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatButtonModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatCardModule"]
        ],
        providers: [_services_weather_service__WEBPACK_IMPORTED_MODULE_11__["WeatherService"], _weather_api_class__WEBPACK_IMPORTED_MODULE_12__["WeatherApi"], _services_photo_service__WEBPACK_IMPORTED_MODULE_13__["PhotoService"], _unsplash_api_class__WEBPACK_IMPORTED_MODULE_14__["UnsplashApi"]],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/config/config.json":
/*!************************************!*\
  !*** ./src/app/config/config.json ***!
  \************************************/
/*! exports provided: apiKey, baseUrl, accessKey, secretKey, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"apiKey\":\"8efae9d98e5cb9e674cd59fb3fec08b3\",\"baseUrl\":\"https://weather-api-angular-12c42.firebaseapp.com/\",\"accessKey\":\"c4c3064e29a1a377378d2e888abc3ebfbef3e00c87cf27015f2e121d7adfb052\",\"secretKey\":\"e8e1c64cf6ec145afd3379e75ad656b71fe46cb359ae39bab55cf14989466daf\"}");

/***/ }),

/***/ "./src/app/header/header.component.scss":
/*!**********************************************!*\
  !*** ./src/app/header/header.component.scss ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".mat-toolbar {\n  color: white;\n  font-size: 24px;\n  background: #b5bdc8;\n  /* Old browsers */\n  /* FF3.6-15 */\n  /* Chrome10-25,Safari5.1-6 */\n  background-image: linear-gradient(145deg, #161925 0%, #232529 85%, #0f162e 100%) !important;\n  /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */\n  box-shadow: 0px 3px 20px 2px #8d652e;\n}\n\n.home-nav:hover {\n  -webkit-transition: 0.2s text-shadow;\n  transition: 0.2s text-shadow;\n  text-shadow: 0 0 2px #fff, 0 0 3px #ff4da6, 0 0 5px #ff4da6, 0 0 5px #ff4da6, 0 0 5px #ff4da6, 0 0 5px #ff4da6, 0 0 5px #ff4da6;\n}\n\n.mat-form-field-appearance-outline .mat-form-field-outline {\n  color: white !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaGVhZGVyL0M6XFxVc2Vyc1xcUi5LbG9wcGVyc1xcRG9jdW1lbnRzXFxvcHJvZXBcXGFuZ3VsYXIgaW1wcm92ZWRcXGFzc2Vzc21lbnQtcmVtYWRlLWFuZ3VsYXIvc3JjXFxhcHBcXGhlYWRlclxcaGVhZGVyLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtFQUFxQixpQkFBQTtFQUNzRixhQUFBO0VBQ0csNEJBQUE7RUFDOUcsMkZBQUE7RUFBcUgscURBQUE7RUFDckgsb0NBQUE7QUNLRjs7QURGQTtFQUNFLG9DQUFBO0VBQUEsNEJBQUE7RUFDQSwrSEFBQTtBQ0tGOztBREpBO0VBQ0UsdUJBQUE7QUNPRiIsImZpbGUiOiJzcmMvYXBwL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWF0LXRvb2xiYXIge1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBmb250LXNpemU6IDI0cHg7XHJcbiAgYmFja2dyb3VuZDogI2I1YmRjODsgLyogT2xkIGJyb3dzZXJzICovXHJcbiAgYmFja2dyb3VuZC1pbWFnZTogLW1vei1saW5lYXItZ3JhZGllbnQoICMyMzI4M0IgMCUsIHJnYig2NiwgNjgsIDc1KSAyNSUsIHJnYigxNiwgMjIsIDQ0KSAxMDAlKSAhaW1wb3J0YW50OyAvKiBGRjMuNi0xNSAqL1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KCAjMjMyODNCIDAlLCByZ2IoNjYsIDY4LCA3NSkgMjUlLCByZ2IoMTYsIDIyLCA0NCkgMTAwJSkgIWltcG9ydGFudDsgLyogQ2hyb21lMTAtMjUsU2FmYXJpNS4xLTYgKi9cclxuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoMTQ1ZGVnLCByZ2IoMjIsIDI1LCAzNykgMCUsIHJnYigzNSwgMzcsIDQxKSA4NSUsIHJnYigxNSwgMjIsIDQ2KSAxMDAlKSAhaW1wb3J0YW50OyAvKiBXM0MsIElFMTArLCBGRjE2KywgQ2hyb21lMjYrLCBPcGVyYTEyKywgU2FmYXJpNysgKi9cclxuICBib3gtc2hhZG93OiAtMHB4IDNweCAyMHB4IDJweCAjOGQ2NTJlO1xyXG59XHJcblxyXG4uaG9tZS1uYXY6aG92ZXIge1xyXG4gIHRyYW5zaXRpb246IDAuMnMgdGV4dC1zaGFkb3c7XHJcbiAgdGV4dC1zaGFkb3c6IDAgMCAycHggI2ZmZiwgMCAwIDNweCAjZmY0ZGE2LCAwIDAgNXB4ICNmZjRkYTYsIDAgMCA1cHggI2ZmNGRhNiwgMCAwIDVweCAjZmY0ZGE2LCAwIDAgNXB4ICNmZjRkYTYsIDAgMCA1cHggI2ZmNGRhNjt9XHJcbi5tYXQtZm9ybS1maWVsZC1hcHBlYXJhbmNlLW91dGxpbmUgLm1hdC1mb3JtLWZpZWxkLW91dGxpbmUge1xyXG4gIGNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xyXG59XHJcbiIsIi5tYXQtdG9vbGJhciB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC1zaXplOiAyNHB4O1xuICBiYWNrZ3JvdW5kOiAjYjViZGM4O1xuICAvKiBPbGQgYnJvd3NlcnMgKi9cbiAgYmFja2dyb3VuZC1pbWFnZTogLW1vei1saW5lYXItZ3JhZGllbnQoIzIzMjgzQiAwJSwgIzQyNDQ0YiAyNSUsICMxMDE2MmMgMTAwJSkgIWltcG9ydGFudDtcbiAgLyogRkYzLjYtMTUgKi9cbiAgYmFja2dyb3VuZC1pbWFnZTogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQoIzIzMjgzQiAwJSwgIzQyNDQ0YiAyNSUsICMxMDE2MmMgMTAwJSkgIWltcG9ydGFudDtcbiAgLyogQ2hyb21lMTAtMjUsU2FmYXJpNS4xLTYgKi9cbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDE0NWRlZywgIzE2MTkyNSAwJSwgIzIzMjUyOSA4NSUsICMwZjE2MmUgMTAwJSkgIWltcG9ydGFudDtcbiAgLyogVzNDLCBJRTEwKywgRkYxNissIENocm9tZTI2KywgT3BlcmExMissIFNhZmFyaTcrICovXG4gIGJveC1zaGFkb3c6IDBweCAzcHggMjBweCAycHggIzhkNjUyZTtcbn1cblxuLmhvbWUtbmF2OmhvdmVyIHtcbiAgdHJhbnNpdGlvbjogMC4ycyB0ZXh0LXNoYWRvdztcbiAgdGV4dC1zaGFkb3c6IDAgMCAycHggI2ZmZiwgMCAwIDNweCAjZmY0ZGE2LCAwIDAgNXB4ICNmZjRkYTYsIDAgMCA1cHggI2ZmNGRhNiwgMCAwIDVweCAjZmY0ZGE2LCAwIDAgNXB4ICNmZjRkYTYsIDAgMCA1cHggI2ZmNGRhNjtcbn1cblxuLm1hdC1mb3JtLWZpZWxkLWFwcGVhcmFuY2Utb3V0bGluZSAubWF0LWZvcm0tZmllbGQtb3V0bGluZSB7XG4gIGNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/header/header.component.ts":
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _config_config_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../config/config.json */ "./src/app/config/config.json");
var _config_config_json__WEBPACK_IMPORTED_MODULE_4___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../config/config.json */ "./src/app/config/config.json", 1);





let HeaderComponent = class HeaderComponent {
    constructor(http, sanitizer) {
        this.http = http;
        this.title = 'Practical-Assessment';
        this.sanitizedUrl = {};
        this.sanitizedUrl = sanitizer.bypassSecurityTrustUrl(_config_config_json__WEBPACK_IMPORTED_MODULE_4__.baseUrl);
    }
    ngOnInit() {
    }
};
HeaderComponent.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] },
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"] }
];
HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-header',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./header.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/header/header.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./header.component.scss */ "./src/app/header/header.component.scss")).default]
    })
], HeaderComponent);



/***/ }),

/***/ "./src/app/home/home.component.scss":
/*!******************************************!*\
  !*** ./src/app/home/home.component.scss ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".container {\n  display: -webkit-box;\n  display: flex;\n  width: 100%;\n  height: calc(100% - 64px);\n  background-color: darkgrey;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n          justify-content: center;\n  margin: 0;\n}\n\n.home-mat-button {\n  height: 64px;\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n  font-size: 24px;\n  color: white;\n  background: #b5bdc8;\n  /* Old browsers */\n  /* FF3.6-15 */\n  /* Chrome10-25,Safari5.1-6 */\n  background-image: linear-gradient(145deg, #161925 0%, #232529 85%, #0f162e 100%) !important;\n  /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */\n}\n\n.home-mat-button:hover {\n  /* FF3.6-15 */\n  /* Chrome10-25,Safari5.1-6 */\n  background-image: linear-gradient(145deg, #161925 5%, #232529 95%, #0f162e 100%) !important;\n  /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */\n  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);\n}\n\n.home-mat-button-error {\n  height: 128px;\n  margin-left: 20px;\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n  font-size: 48px;\n  color: white;\n  background: #b5bdc8;\n  /* Old browsers */\n  /* FF3.6-15 */\n  /* Chrome10-25,Safari5.1-6 */\n  background-image: linear-gradient(145deg, #161925 0%, #232529 85%, #0f162e 100%) !important;\n  /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */\n}\n\n.home-mat-button-error:hover {\n  /* FF3.6-15 */\n  /* Chrome10-25,Safari5.1-6 */\n  background-image: linear-gradient(145deg, #161925 5%, #232529 95%, #0f162e 100%) !important;\n  /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */\n  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);\n}\n\n.lds-ring {\n  display: inline-block;\n  position: relative;\n  width: 172px;\n  height: 172px;\n}\n\n.lds-ring div {\n  box-sizing: border-box;\n  display: block;\n  position: absolute;\n  width: 160px;\n  height: 160px;\n  margin: 8px;\n  border: 16px solid #fff;\n  border-radius: 50%;\n  -webkit-animation: lds-ring 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;\n          animation: lds-ring 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;\n  border-color: #fff transparent transparent transparent;\n}\n\n.lds-ring div:nth-child(1) {\n  -webkit-animation-delay: -0.45s;\n          animation-delay: -0.45s;\n}\n\n.lds-ring div:nth-child(2) {\n  -webkit-animation-delay: -0.3s;\n          animation-delay: -0.3s;\n}\n\n.lds-ring div:nth-child(3) {\n  -webkit-animation-delay: -0.15s;\n          animation-delay: -0.15s;\n}\n\n.location-error {\n  display: -webkit-box;\n  display: flex;\n  width: 50%;\n  color: white;\n  font-size: 24px;\n}\n\n.location-error-card {\n  display: -webkit-box;\n  display: flex;\n  width: 40%;\n  -webkit-box-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n          align-items: center;\n}\n\nmat-card {\n  min-width: 400px;\n  width: -webkit-max-content;\n  width: -moz-max-content;\n  width: max-content;\n  height: -webkit-max-content;\n  height: -moz-max-content;\n  height: max-content;\n  font-size: 24px;\n  /* FF3.6-15 */\n  /* Chrome10-25,Safari5.1-6 */\n  background-image: linear-gradient(145deg, #161925 5%, #232529 95%, #0f162e 100%) !important;\n  /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */\n  color: white;\n  text-align: center;\n}\n\nh1, h2, h3, h4 {\n  margin: 0;\n}\n\nh3 {\n  margin: 10px;\n}\n\n@-webkit-keyframes lds-ring {\n  0% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n  }\n  100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg);\n  }\n}\n\n@keyframes lds-ring {\n  0% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n  }\n  100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg);\n  }\n}\n\n.weather-details {\n  text-align: center;\n  text-transform: capitalize;\n  font-size: 28px;\n}\n\n.weather-header {\n  font-size: 64px;\n}\n\n.icon-container {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n          justify-content: center;\n}\n\n.weather-description {\n  text-transform: capitalize;\n  margin-bottom: 50px;\n  font-size: 38px;\n}\n\n.weather-temp {\n  align-self: center;\n  margin: 0;\n}\n\n.alert-allow {\n  font-size: 32px;\n  color: white;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  -webkit-box-align: center;\n          align-items: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9DOlxcVXNlcnNcXFIuS2xvcHBlcnNcXERvY3VtZW50c1xcb3Byb2VwXFxhbmd1bGFyIGltcHJvdmVkXFxhc3Nlc3NtZW50LXJlbWFkZS1hbmd1bGFyL3NyY1xcYXBwXFxob21lXFxob21lLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9ob21lL2hvbWUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxvQkFBQTtFQUFBLGFBQUE7RUFDQSxXQUFBO0VBR0EseUJBQUE7RUFDQSwwQkFBQTtFQUNBLHlCQUFBO1VBQUEsbUJBQUE7RUFDQSx3QkFBQTtVQUFBLHVCQUFBO0VBQ0EsU0FBQTtBQ0RGOztBRElBO0VBQ0UsWUFBQTtFQUNBLDBCQUFBO0VBQUEsdUJBQUE7RUFBQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFBcUIsaUJBQUE7RUFDc0YsYUFBQTtFQUNHLDRCQUFBO0VBQzlHLDJGQUFBO0VBQXFILHFEQUFBO0FDR3ZIOztBREFBO0VBQzZHLGFBQUE7RUFDRyw0QkFBQTtFQUM5RywyRkFBQTtFQUFxSCxxREFBQTtFQUNySCwwRUFBQTtBQ01GOztBREhBO0VBQ0UsYUFBQTtFQUNBLGlCQUFBO0VBQ0EsMEJBQUE7RUFBQSx1QkFBQTtFQUFBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUFxQixpQkFBQTtFQUNzRixhQUFBO0VBQ0csNEJBQUE7RUFDOUcsMkZBQUE7RUFBcUgscURBQUE7QUNVdkg7O0FEUEE7RUFDNkcsYUFBQTtFQUNHLDRCQUFBO0VBQzlHLDJGQUFBO0VBQXFILHFEQUFBO0VBQ3JILDBFQUFBO0FDYUY7O0FEVkE7RUFDRSxxQkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7QUNhRjs7QURYQTtFQUNFLHNCQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxXQUFBO0VBQ0EsdUJBQUE7RUFDQSxrQkFBQTtFQUNBLHNFQUFBO1VBQUEsOERBQUE7RUFDQSxzREFBQTtBQ2NGOztBRFpBO0VBQ0UsK0JBQUE7VUFBQSx1QkFBQTtBQ2VGOztBRGJBO0VBQ0UsOEJBQUE7VUFBQSxzQkFBQTtBQ2dCRjs7QURkQTtFQUNFLCtCQUFBO1VBQUEsdUJBQUE7QUNpQkY7O0FEZEE7RUFDRSxvQkFBQTtFQUFBLGFBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7QUNpQkY7O0FEZEE7RUFDRSxvQkFBQTtFQUFBLGFBQUE7RUFDQSxVQUFBO0VBQ0Esd0JBQUE7VUFBQSx1QkFBQTtFQUNBLHlCQUFBO1VBQUEsbUJBQUE7QUNpQkY7O0FEZEE7RUFDRSxnQkFBQTtFQUNBLDBCQUFBO0VBQUEsdUJBQUE7RUFBQSxrQkFBQTtFQUNBLDJCQUFBO0VBQUEsd0JBQUE7RUFBQSxtQkFBQTtFQUNBLGVBQUE7RUFDMkcsYUFBQTtFQUNHLDRCQUFBO0VBQzlHLDJGQUFBO0VBQXFILHFEQUFBO0VBQ3JILFlBQUE7RUFDQSxrQkFBQTtBQ29CRjs7QURqQkE7RUFDRSxTQUFBO0FDb0JGOztBRGpCQTtFQUNFLFlBQUE7QUNvQkY7O0FEakJBO0VBQ0U7SUFDRSwrQkFBQTtZQUFBLHVCQUFBO0VDb0JGO0VEbEJBO0lBQ0UsaUNBQUE7WUFBQSx5QkFBQTtFQ29CRjtBQUNGOztBRDFCQTtFQUNFO0lBQ0UsK0JBQUE7WUFBQSx1QkFBQTtFQ29CRjtFRGxCQTtJQUNFLGlDQUFBO1lBQUEseUJBQUE7RUNvQkY7QUFDRjs7QURqQkE7RUFDRSxrQkFBQTtFQUNBLDBCQUFBO0VBQ0EsZUFBQTtBQ21CRjs7QURoQkE7RUFDRSxlQUFBO0FDbUJGOztBRGhCQTtFQUNFLG9CQUFBO0VBQUEsYUFBQTtFQUNBLHdCQUFBO1VBQUEsdUJBQUE7QUNtQkY7O0FEaEJBO0VBQ0UsMEJBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7QUNtQkY7O0FEaEJBO0VBQ0Usa0JBQUE7RUFDQSxTQUFBO0FDbUJGOztBRGhCQTtFQUNFLGVBQUE7RUFDQSxZQUFBO0VBQ0Esb0JBQUE7RUFBQSxhQUFBO0VBQ0EsNEJBQUE7RUFBQSw2QkFBQTtVQUFBLHNCQUFBO0VBQ0EseUJBQUE7VUFBQSxtQkFBQTtBQ21CRiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgLy8gSGVhZGVyIGhlaWdodCBpcyBhZGRlZCBiZWNhdXNlIGhlaWdodCBpcyBiZWluZyBpbmhlcml0ZWQgZnJvbSBwYXJlbnQgd2hlbiB1c2luZyAxMDAlLCB0aGUgcGFyZW50IGJvZHkgaGFzIGFsbCB0aGUgY29udGVudHMgaW5zaWRlIG9mIGl0LCB3ZSBkbyBub3Qgd2FudCB0aGUgY29udGFpbmVyIGRpdiB0byBlcXVhbCB0aGUgaGVpZ2h0IG9mIHRoZSBib2R5IGJ1dCB0aGUgYm9keSAtIGhlYWRlciwgd2hpY2ggaXMgc3RhdGljYWxseVxyXG4gIC8vIHNldCB0byA2NHB4XHJcbiAgaGVpZ2h0OiBjYWxjKDEwMCUgLSA2NHB4KTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBkYXJrZ3JleTtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIG1hcmdpbjogMDtcclxufVxyXG5cclxuLmhvbWUtbWF0LWJ1dHRvbiB7XHJcbiAgaGVpZ2h0OiA2NHB4O1xyXG4gIHdpZHRoOiBmaXQtY29udGVudDtcclxuICBmb250LXNpemU6IDI0cHg7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGJhY2tncm91bmQ6ICNiNWJkYzg7IC8qIE9sZCBicm93c2VycyAqL1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IC1tb3otbGluZWFyLWdyYWRpZW50KCAjMjMyODNCIDAlLCByZ2IoNjYsIDY4LCA3NSkgMjUlLCByZ2IoMTYsIDIyLCA0NCkgMTAwJSkgIWltcG9ydGFudDsgLyogRkYzLjYtMTUgKi9cclxuICBiYWNrZ3JvdW5kLWltYWdlOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudCggIzIzMjgzQiAwJSwgcmdiKDY2LCA2OCwgNzUpIDI1JSwgcmdiKDE2LCAyMiwgNDQpIDEwMCUpICFpbXBvcnRhbnQ7IC8qIENocm9tZTEwLTI1LFNhZmFyaTUuMS02ICovXHJcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDE0NWRlZywgcmdiKDIyLCAyNSwgMzcpIDAlLCByZ2IoMzUsIDM3LCA0MSkgODUlLCByZ2IoMTUsIDIyLCA0NikgMTAwJSkgIWltcG9ydGFudDsgLyogVzNDLCBJRTEwKywgRkYxNissIENocm9tZTI2KywgT3BlcmExMissIFNhZmFyaTcrICovXHJcbn1cclxuXHJcbi5ob21lLW1hdC1idXR0b246aG92ZXIge1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IC1tb3otbGluZWFyLWdyYWRpZW50KCAjMjMyODNCIDUlLCByZ2IoNjYsIDY4LCA3NSkgMzUlLCByZ2IoMTYsIDIyLCA0NCkgMTAwJSkgIWltcG9ydGFudDsgLyogRkYzLjYtMTUgKi9cclxuICBiYWNrZ3JvdW5kLWltYWdlOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudCggIzIzMjgzQiA1JSwgcmdiKDY2LCA2OCwgNzUpIDM1JSwgcmdiKDE2LCAyMiwgNDQpIDEwMCUpICFpbXBvcnRhbnQ7IC8qIENocm9tZTEwLTI1LFNhZmFyaTUuMS02ICovXHJcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDE0NWRlZywgcmdiKDIyLCAyNSwgMzcpIDUlLCByZ2IoMzUsIDM3LCA0MSkgOTUlLCByZ2IoMTUsIDIyLCA0NikgMTAwJSkgIWltcG9ydGFudDsgLyogVzNDLCBJRTEwKywgRkYxNissIENocm9tZTI2KywgT3BlcmExMissIFNhZmFyaTcrICovXHJcbiAgYm94LXNoYWRvdzogMCAxMHB4IDIwcHggcmdiYSgwLDAsMCwwLjE5KSwgMCA2cHggNnB4IHJnYmEoMCwwLDAsMC4yMyk7XHJcbn1cclxuXHJcbi5ob21lLW1hdC1idXR0b24tZXJyb3Ige1xyXG4gIGhlaWdodDogMTI4cHg7XHJcbiAgbWFyZ2luLWxlZnQ6IDIwcHg7XHJcbiAgd2lkdGg6IGZpdC1jb250ZW50O1xyXG4gIGZvbnQtc2l6ZTogNDhweDtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgYmFja2dyb3VuZDogI2I1YmRjODsgLyogT2xkIGJyb3dzZXJzICovXHJcbiAgYmFja2dyb3VuZC1pbWFnZTogLW1vei1saW5lYXItZ3JhZGllbnQoICMyMzI4M0IgMCUsIHJnYig2NiwgNjgsIDc1KSAyNSUsIHJnYigxNiwgMjIsIDQ0KSAxMDAlKSAhaW1wb3J0YW50OyAvKiBGRjMuNi0xNSAqL1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KCAjMjMyODNCIDAlLCByZ2IoNjYsIDY4LCA3NSkgMjUlLCByZ2IoMTYsIDIyLCA0NCkgMTAwJSkgIWltcG9ydGFudDsgLyogQ2hyb21lMTAtMjUsU2FmYXJpNS4xLTYgKi9cclxuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoMTQ1ZGVnLCByZ2IoMjIsIDI1LCAzNykgMCUsIHJnYigzNSwgMzcsIDQxKSA4NSUsIHJnYigxNSwgMjIsIDQ2KSAxMDAlKSAhaW1wb3J0YW50OyAvKiBXM0MsIElFMTArLCBGRjE2KywgQ2hyb21lMjYrLCBPcGVyYTEyKywgU2FmYXJpNysgKi9cclxufVxyXG5cclxuLmhvbWUtbWF0LWJ1dHRvbi1lcnJvcjpob3ZlciB7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogLW1vei1saW5lYXItZ3JhZGllbnQoICMyMzI4M0IgNSUsIHJnYig2NiwgNjgsIDc1KSAzNSUsIHJnYigxNiwgMjIsIDQ0KSAxMDAlKSAhaW1wb3J0YW50OyAvKiBGRjMuNi0xNSAqL1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KCAjMjMyODNCIDUlLCByZ2IoNjYsIDY4LCA3NSkgMzUlLCByZ2IoMTYsIDIyLCA0NCkgMTAwJSkgIWltcG9ydGFudDsgLyogQ2hyb21lMTAtMjUsU2FmYXJpNS4xLTYgKi9cclxuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoMTQ1ZGVnLCByZ2IoMjIsIDI1LCAzNykgNSUsIHJnYigzNSwgMzcsIDQxKSA5NSUsIHJnYigxNSwgMjIsIDQ2KSAxMDAlKSAhaW1wb3J0YW50OyAvKiBXM0MsIElFMTArLCBGRjE2KywgQ2hyb21lMjYrLCBPcGVyYTEyKywgU2FmYXJpNysgKi9cclxuICBib3gtc2hhZG93OiAwIDEwcHggMjBweCByZ2JhKDAsMCwwLDAuMTkpLCAwIDZweCA2cHggcmdiYSgwLDAsMCwwLjIzKTtcclxufVxyXG5cclxuLmxkcy1yaW5nIHtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHdpZHRoOiAxNzJweDtcclxuICBoZWlnaHQ6IDE3MnB4O1xyXG59XHJcbi5sZHMtcmluZyBkaXYge1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHdpZHRoOiAxNjBweDtcclxuICBoZWlnaHQ6IDE2MHB4O1xyXG4gIG1hcmdpbjogOHB4O1xyXG4gIGJvcmRlcjogMTZweCBzb2xpZCAjZmZmO1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICBhbmltYXRpb246IGxkcy1yaW5nIDEuMnMgY3ViaWMtYmV6aWVyKDAuNSwgMCwgMC41LCAxKSBpbmZpbml0ZTtcclxuICBib3JkZXItY29sb3I6ICNmZmYgdHJhbnNwYXJlbnQgdHJhbnNwYXJlbnQgdHJhbnNwYXJlbnQ7XHJcbn1cclxuLmxkcy1yaW5nIGRpdjpudGgtY2hpbGQoMSkge1xyXG4gIGFuaW1hdGlvbi1kZWxheTogLTAuNDVzO1xyXG59XHJcbi5sZHMtcmluZyBkaXY6bnRoLWNoaWxkKDIpIHtcclxuICBhbmltYXRpb24tZGVsYXk6IC0wLjNzO1xyXG59XHJcbi5sZHMtcmluZyBkaXY6bnRoLWNoaWxkKDMpIHtcclxuICBhbmltYXRpb24tZGVsYXk6IC0wLjE1cztcclxufVxyXG5cclxuLmxvY2F0aW9uLWVycm9yIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIHdpZHRoOiA1MCU7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGZvbnQtc2l6ZTogMjRweDtcclxufVxyXG5cclxuLmxvY2F0aW9uLWVycm9yLWNhcmQge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgd2lkdGg6IDQwJTtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG5tYXQtY2FyZCB7XHJcbiAgbWluLXdpZHRoOiA0MDBweDtcclxuICB3aWR0aDogbWF4LWNvbnRlbnQ7XHJcbiAgaGVpZ2h0OiBtYXgtY29udGVudDtcclxuICBmb250LXNpemU6IDI0cHg7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogLW1vei1saW5lYXItZ3JhZGllbnQoICMyMzI4M0IgNSUsIHJnYig2NiwgNjgsIDc1KSAzNSUsIHJnYigxNiwgMjIsIDQ0KSAxMDAlKSAhaW1wb3J0YW50OyAvKiBGRjMuNi0xNSAqL1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KCAjMjMyODNCIDUlLCByZ2IoNjYsIDY4LCA3NSkgMzUlLCByZ2IoMTYsIDIyLCA0NCkgMTAwJSkgIWltcG9ydGFudDsgLyogQ2hyb21lMTAtMjUsU2FmYXJpNS4xLTYgKi9cclxuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoMTQ1ZGVnLCByZ2IoMjIsIDI1LCAzNykgNSUsIHJnYigzNSwgMzcsIDQxKSA5NSUsIHJnYigxNSwgMjIsIDQ2KSAxMDAlKSAhaW1wb3J0YW50OyAvKiBXM0MsIElFMTArLCBGRjE2KywgQ2hyb21lMjYrLCBPcGVyYTEyKywgU2FmYXJpNysgKi9cclxuICBjb2xvcjogd2hpdGU7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG5oMSwgaDIsIGgzLCBoNCB7XHJcbiAgbWFyZ2luOiAwO1xyXG59XHJcblxyXG5oMyB7XHJcbiAgbWFyZ2luOiAxMHB4O1xyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIGxkcy1yaW5nIHtcclxuICAwJSB7XHJcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcclxuICB9XHJcbiAgMTAwJSB7XHJcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xyXG4gIH1cclxufVxyXG5cclxuLndlYXRoZXItZGV0YWlscyB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xyXG4gIGZvbnQtc2l6ZTogMjhweDtcclxufVxyXG5cclxuLndlYXRoZXItaGVhZGVyIHtcclxuICBmb250LXNpemU6IDY0cHg7XHJcbn1cclxuXHJcbi5pY29uLWNvbnRhaW5lciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG5cclxuLndlYXRoZXItZGVzY3JpcHRpb24ge1xyXG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xyXG4gIG1hcmdpbi1ib3R0b206IDUwcHg7XHJcbiAgZm9udC1zaXplOiAzOHB4O1xyXG59XHJcblxyXG4ud2VhdGhlci10ZW1wIHtcclxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XHJcbiAgbWFyZ2luOiAwO1xyXG59XHJcblxyXG4uYWxlcnQtYWxsb3cge1xyXG4gIGZvbnQtc2l6ZTogMzJweDtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn0iLCIuY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogY2FsYygxMDAlIC0gNjRweCk7XG4gIGJhY2tncm91bmQtY29sb3I6IGRhcmtncmV5O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgbWFyZ2luOiAwO1xufVxuXG4uaG9tZS1tYXQtYnV0dG9uIHtcbiAgaGVpZ2h0OiA2NHB4O1xuICB3aWR0aDogZml0LWNvbnRlbnQ7XG4gIGZvbnQtc2l6ZTogMjRweDtcbiAgY29sb3I6IHdoaXRlO1xuICBiYWNrZ3JvdW5kOiAjYjViZGM4O1xuICAvKiBPbGQgYnJvd3NlcnMgKi9cbiAgYmFja2dyb3VuZC1pbWFnZTogLW1vei1saW5lYXItZ3JhZGllbnQoIzIzMjgzQiAwJSwgIzQyNDQ0YiAyNSUsICMxMDE2MmMgMTAwJSkgIWltcG9ydGFudDtcbiAgLyogRkYzLjYtMTUgKi9cbiAgYmFja2dyb3VuZC1pbWFnZTogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQoIzIzMjgzQiAwJSwgIzQyNDQ0YiAyNSUsICMxMDE2MmMgMTAwJSkgIWltcG9ydGFudDtcbiAgLyogQ2hyb21lMTAtMjUsU2FmYXJpNS4xLTYgKi9cbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDE0NWRlZywgIzE2MTkyNSAwJSwgIzIzMjUyOSA4NSUsICMwZjE2MmUgMTAwJSkgIWltcG9ydGFudDtcbiAgLyogVzNDLCBJRTEwKywgRkYxNissIENocm9tZTI2KywgT3BlcmExMissIFNhZmFyaTcrICovXG59XG5cbi5ob21lLW1hdC1idXR0b246aG92ZXIge1xuICBiYWNrZ3JvdW5kLWltYWdlOiAtbW96LWxpbmVhci1ncmFkaWVudCgjMjMyODNCIDUlLCAjNDI0NDRiIDM1JSwgIzEwMTYyYyAxMDAlKSAhaW1wb3J0YW50O1xuICAvKiBGRjMuNi0xNSAqL1xuICBiYWNrZ3JvdW5kLWltYWdlOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudCgjMjMyODNCIDUlLCAjNDI0NDRiIDM1JSwgIzEwMTYyYyAxMDAlKSAhaW1wb3J0YW50O1xuICAvKiBDaHJvbWUxMC0yNSxTYWZhcmk1LjEtNiAqL1xuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoMTQ1ZGVnLCAjMTYxOTI1IDUlLCAjMjMyNTI5IDk1JSwgIzBmMTYyZSAxMDAlKSAhaW1wb3J0YW50O1xuICAvKiBXM0MsIElFMTArLCBGRjE2KywgQ2hyb21lMjYrLCBPcGVyYTEyKywgU2FmYXJpNysgKi9cbiAgYm94LXNoYWRvdzogMCAxMHB4IDIwcHggcmdiYSgwLCAwLCAwLCAwLjE5KSwgMCA2cHggNnB4IHJnYmEoMCwgMCwgMCwgMC4yMyk7XG59XG5cbi5ob21lLW1hdC1idXR0b24tZXJyb3Ige1xuICBoZWlnaHQ6IDEyOHB4O1xuICBtYXJnaW4tbGVmdDogMjBweDtcbiAgd2lkdGg6IGZpdC1jb250ZW50O1xuICBmb250LXNpemU6IDQ4cHg7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgYmFja2dyb3VuZDogI2I1YmRjODtcbiAgLyogT2xkIGJyb3dzZXJzICovXG4gIGJhY2tncm91bmQtaW1hZ2U6IC1tb3otbGluZWFyLWdyYWRpZW50KCMyMzI4M0IgMCUsICM0MjQ0NGIgMjUlLCAjMTAxNjJjIDEwMCUpICFpbXBvcnRhbnQ7XG4gIC8qIEZGMy42LTE1ICovXG4gIGJhY2tncm91bmQtaW1hZ2U6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KCMyMzI4M0IgMCUsICM0MjQ0NGIgMjUlLCAjMTAxNjJjIDEwMCUpICFpbXBvcnRhbnQ7XG4gIC8qIENocm9tZTEwLTI1LFNhZmFyaTUuMS02ICovXG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgxNDVkZWcsICMxNjE5MjUgMCUsICMyMzI1MjkgODUlLCAjMGYxNjJlIDEwMCUpICFpbXBvcnRhbnQ7XG4gIC8qIFczQywgSUUxMCssIEZGMTYrLCBDaHJvbWUyNissIE9wZXJhMTIrLCBTYWZhcmk3KyAqL1xufVxuXG4uaG9tZS1tYXQtYnV0dG9uLWVycm9yOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogLW1vei1saW5lYXItZ3JhZGllbnQoIzIzMjgzQiA1JSwgIzQyNDQ0YiAzNSUsICMxMDE2MmMgMTAwJSkgIWltcG9ydGFudDtcbiAgLyogRkYzLjYtMTUgKi9cbiAgYmFja2dyb3VuZC1pbWFnZTogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQoIzIzMjgzQiA1JSwgIzQyNDQ0YiAzNSUsICMxMDE2MmMgMTAwJSkgIWltcG9ydGFudDtcbiAgLyogQ2hyb21lMTAtMjUsU2FmYXJpNS4xLTYgKi9cbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDE0NWRlZywgIzE2MTkyNSA1JSwgIzIzMjUyOSA5NSUsICMwZjE2MmUgMTAwJSkgIWltcG9ydGFudDtcbiAgLyogVzNDLCBJRTEwKywgRkYxNissIENocm9tZTI2KywgT3BlcmExMissIFNhZmFyaTcrICovXG4gIGJveC1zaGFkb3c6IDAgMTBweCAyMHB4IHJnYmEoMCwgMCwgMCwgMC4xOSksIDAgNnB4IDZweCByZ2JhKDAsIDAsIDAsIDAuMjMpO1xufVxuXG4ubGRzLXJpbmcge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgd2lkdGg6IDE3MnB4O1xuICBoZWlnaHQ6IDE3MnB4O1xufVxuXG4ubGRzLXJpbmcgZGl2IHtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDE2MHB4O1xuICBoZWlnaHQ6IDE2MHB4O1xuICBtYXJnaW46IDhweDtcbiAgYm9yZGVyOiAxNnB4IHNvbGlkICNmZmY7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgYW5pbWF0aW9uOiBsZHMtcmluZyAxLjJzIGN1YmljLWJlemllcigwLjUsIDAsIDAuNSwgMSkgaW5maW5pdGU7XG4gIGJvcmRlci1jb2xvcjogI2ZmZiB0cmFuc3BhcmVudCB0cmFuc3BhcmVudCB0cmFuc3BhcmVudDtcbn1cblxuLmxkcy1yaW5nIGRpdjpudGgtY2hpbGQoMSkge1xuICBhbmltYXRpb24tZGVsYXk6IC0wLjQ1cztcbn1cblxuLmxkcy1yaW5nIGRpdjpudGgtY2hpbGQoMikge1xuICBhbmltYXRpb24tZGVsYXk6IC0wLjNzO1xufVxuXG4ubGRzLXJpbmcgZGl2Om50aC1jaGlsZCgzKSB7XG4gIGFuaW1hdGlvbi1kZWxheTogLTAuMTVzO1xufVxuXG4ubG9jYXRpb24tZXJyb3Ige1xuICBkaXNwbGF5OiBmbGV4O1xuICB3aWR0aDogNTAlO1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtc2l6ZTogMjRweDtcbn1cblxuLmxvY2F0aW9uLWVycm9yLWNhcmQge1xuICBkaXNwbGF5OiBmbGV4O1xuICB3aWR0aDogNDAlO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxubWF0LWNhcmQge1xuICBtaW4td2lkdGg6IDQwMHB4O1xuICB3aWR0aDogbWF4LWNvbnRlbnQ7XG4gIGhlaWdodDogbWF4LWNvbnRlbnQ7XG4gIGZvbnQtc2l6ZTogMjRweDtcbiAgYmFja2dyb3VuZC1pbWFnZTogLW1vei1saW5lYXItZ3JhZGllbnQoIzIzMjgzQiA1JSwgIzQyNDQ0YiAzNSUsICMxMDE2MmMgMTAwJSkgIWltcG9ydGFudDtcbiAgLyogRkYzLjYtMTUgKi9cbiAgYmFja2dyb3VuZC1pbWFnZTogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQoIzIzMjgzQiA1JSwgIzQyNDQ0YiAzNSUsICMxMDE2MmMgMTAwJSkgIWltcG9ydGFudDtcbiAgLyogQ2hyb21lMTAtMjUsU2FmYXJpNS4xLTYgKi9cbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDE0NWRlZywgIzE2MTkyNSA1JSwgIzIzMjUyOSA5NSUsICMwZjE2MmUgMTAwJSkgIWltcG9ydGFudDtcbiAgLyogVzNDLCBJRTEwKywgRkYxNissIENocm9tZTI2KywgT3BlcmExMissIFNhZmFyaTcrICovXG4gIGNvbG9yOiB3aGl0ZTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG5oMSwgaDIsIGgzLCBoNCB7XG4gIG1hcmdpbjogMDtcbn1cblxuaDMge1xuICBtYXJnaW46IDEwcHg7XG59XG5cbkBrZXlmcmFtZXMgbGRzLXJpbmcge1xuICAwJSB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XG4gIH1cbiAgMTAwJSB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcbiAgfVxufVxuLndlYXRoZXItZGV0YWlscyB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG4gIGZvbnQtc2l6ZTogMjhweDtcbn1cblxuLndlYXRoZXItaGVhZGVyIHtcbiAgZm9udC1zaXplOiA2NHB4O1xufVxuXG4uaWNvbi1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLndlYXRoZXItZGVzY3JpcHRpb24ge1xuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbiAgbWFyZ2luLWJvdHRvbTogNTBweDtcbiAgZm9udC1zaXplOiAzOHB4O1xufVxuXG4ud2VhdGhlci10ZW1wIHtcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xuICBtYXJnaW46IDA7XG59XG5cbi5hbGVydC1hbGxvdyB7XG4gIGZvbnQtc2l6ZTogMzJweDtcbiAgY29sb3I6IHdoaXRlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _config_config_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../config/config.json */ "./src/app/config/config.json");
var _config_config_json__WEBPACK_IMPORTED_MODULE_2___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../config/config.json */ "./src/app/config/config.json", 1);
/* harmony import */ var _services_weather_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/weather.service */ "./src/app/services/weather.service.ts");
/* harmony import */ var _services_photo_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/photo.service */ "./src/app/services/photo.service.ts");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm2015/animations.js");
/* harmony import */ var ng_animate__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng-animate */ "./node_modules/ng-animate/fesm2015/ng-animate.js");







let HomeComponent = class HomeComponent {
    constructor(weatherService, photoService) {
        this.weatherService = weatherService;
        this.photoService = photoService;
        this.startLoader = false;
        this.touched = false;
        this.showSlowConnectionMsg = false;
        this.photoUrl = '';
        this.photoCollection = [];
        this.date = Date();
        this.geolocationError = () => {
            this.locationAccess = 'denied';
        };
        navigator.permissions.query({ name: 'geolocation' }).then((result) => {
            console.log(result.state);
            if (result.state === 'granted') {
                this.locationAccess = 'granted';
            }
            else if (result.state === 'prompt') {
                this.locationAccess = 'prompt';
            }
            else {
                this.locationAccess = 'denied';
            }
            // Don't do anything if the permission was denied.
        });
        this.photoService.getRandomPhoto('nature', 'portrait', 3).subscribe((data) => {
            const photoData = data;
            console.log('Photo_Data', photoData);
            for (let elt of photoData) {
                this.photoCollection.push(elt.urls.small);
            }
            console.log(this.photoCollection);
        }, err => {
            console.log(err);
            if (err) {
                this.photoUrl = '../../assets/luca-bravo-zAjdgNXsMeg-unsplash.jpg';
            }
        });
    }
    ngOnInit() {
        console.log('loaded');
    }
    refresh() {
        location.reload(true);
    }
    fetchWeatherData() {
        this.startLoader = true;
        this.touched = true;
        const apiKey = _config_config_json__WEBPACK_IMPORTED_MODULE_2__.apiKey;
        console.log('Button has been clicked, fetch weather API data');
        // Use browser's built in geolocation API
        navigator.geolocation.getCurrentPosition((pos) => {
            this.weatherService.getWeatherInfo(pos.coords.latitude, pos.coords.longitude, 'metric', apiKey).subscribe(weatherInfo => {
                console.log(weatherInfo);
                this.startLoader = false;
                this.weatherInfo = weatherInfo;
                this.imgUrl = `http://openweathermap.org/img/wn/${weatherInfo.weather[0].icon}@2x.png`;
                // use weather description from weather api in unsplash api to get image matching the weather from unsplash
                let weatherDescription = weatherInfo.weather[0].main;
                let temp = weatherInfo.main.feels_like > 10;
                this.photoService.getRandomPhoto(temp ? 'warm ' + weatherDescription : 'cold ' + weatherDescription, 'landscape', 1).subscribe((data) => {
                    const photoData = data;
                    console.log('Photo_Data', photoData);
                    this.photoUrl = photoData[0].urls.regular;
                }, err => {
                    console.log(err);
                    if (err) {
                        this.photoUrl = '../../assets/luca-bravo-zAjdgNXsMeg-unsplash.jpg';
                    }
                });
                // Configure data 
            });
        }, this.geolocationError);
        /*     function positionFound(position) {
              console.log('Position:', position);
              const latitude = position.coords.latitude;
              const longitude = position.coords.longitude;
        
              // Fetch the data using the co-ordinates from the browser's geolocator
        
        
              fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric&APPID=${apiKey}`)
              .then((resp) => {
                resp.json()
                .then((data) => {
                  console.log(data);
                  // Display the data
                })
              });
            }  */
    }
    setBackground() {
        let styles = {};
        console.log(this.photoUrl);
        if (this.photoUrl.length > 0) {
            styles = {
                'background': `url(${this.photoUrl}) center/cover no-repeat fixed`
            };
        }
        else if (this.photoCollection.length === 3) {
            styles = {
                'background-image': `url(${this.photoCollection[0]}),  url(${this.photoCollection[1]}), url(${this.photoCollection[2]})`,
                'background-size': '33% 100%, 33% 100%, 33% 100%',
                'background-repeat': 'no-repeat, no-repeat, no-repeat',
                'background-position': 'left, center, right'
            };
        }
        return styles;
    }
};
HomeComponent.ctorParameters = () => [
    { type: _services_weather_service__WEBPACK_IMPORTED_MODULE_3__["WeatherService"] },
    { type: _services_photo_service__WEBPACK_IMPORTED_MODULE_4__["PhotoService"] }
];
HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-home',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./home.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html")).default,
        animations: [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["trigger"])('slideInLeft', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["transition"])('void => *', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["useAnimation"])(ng_animate__WEBPACK_IMPORTED_MODULE_6__["slideInLeft"], {
                    params: { timing: 0.4, delay: 0 }
                }))]),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["trigger"])('slideOutRight', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["transition"])('* => void', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["useAnimation"])(ng_animate__WEBPACK_IMPORTED_MODULE_6__["slideOutRight"], {
                    params: { timing: 0.4, delay: 0 }
                }))]),
        ],
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./home.component.scss */ "./src/app/home/home.component.scss")).default]
    })
], HomeComponent);



/***/ }),

/***/ "./src/app/services/photo.service.ts":
/*!*******************************************!*\
  !*** ./src/app/services/photo.service.ts ***!
  \*******************************************/
/*! exports provided: PhotoService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PhotoService", function() { return PhotoService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _unsplash_api_class__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../unsplash.api.class */ "./src/app/unsplash.api.class.ts");



let PhotoService = class PhotoService {
    constructor(unsplashApi) {
        this.unsplashApi = unsplashApi;
    }
    getRandomPhoto(query, orientation, count) {
        return this.unsplashApi.get(`/random?query=${query}&orientation=${orientation}&count=${count}`);
    }
    getSpecificPhoto(id) {
        return this.unsplashApi.get(`?id=${id}`);
    }
    getPhotoList() {
        // page, per_page, order_by params
        return this.unsplashApi.get('');
    }
};
PhotoService.ctorParameters = () => [
    { type: _unsplash_api_class__WEBPACK_IMPORTED_MODULE_2__["UnsplashApi"] }
];
PhotoService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], PhotoService);



/***/ }),

/***/ "./src/app/services/weather.service.ts":
/*!*********************************************!*\
  !*** ./src/app/services/weather.service.ts ***!
  \*********************************************/
/*! exports provided: WeatherService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WeatherService", function() { return WeatherService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _weather_api_class__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../weather.api.class */ "./src/app/weather.api.class.ts");



let WeatherService = class WeatherService {
    constructor(weatherApi) {
        this.weatherApi = weatherApi;
    }
    getWeatherInfo(latitude, longitude, units, apiKey) {
        return this.weatherApi.get(`?lat=${latitude}&lon=${longitude}&units=${units}&APPID=${apiKey}`);
    }
};
WeatherService.ctorParameters = () => [
    { type: _weather_api_class__WEBPACK_IMPORTED_MODULE_2__["WeatherApi"] }
];
WeatherService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], WeatherService);



/***/ }),

/***/ "./src/app/unsplash.api.class.ts":
/*!***************************************!*\
  !*** ./src/app/unsplash.api.class.ts ***!
  \***************************************/
/*! exports provided: UnsplashApi */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UnsplashApi", function() { return UnsplashApi; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _config_config_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./config/config.json */ "./src/app/config/config.json");
var _config_config_json__WEBPACK_IMPORTED_MODULE_1___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./config/config.json */ "./src/app/config/config.json", 1);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");




let UnsplashApi = class UnsplashApi extends _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] {
    constructor(handler) {
        super(handler);
        this.accessKey = _config_config_json__WEBPACK_IMPORTED_MODULE_1__["accessKey"];
        this.secretKey = _config_config_json__WEBPACK_IMPORTED_MODULE_1__["secretKey"];
        this.baseUrl = 'https://api.unsplash.com/photos';
        this.headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        console.log('We are creating new instance of UnsplashApi extending HttpClient, here is the defualt handler: ', handler);
    }
    get(url, options) {
        url = this.baseUrl + url;
        return super.get(url, Object.assign({}, options, { headers: { 'Authorization': `Client-ID ${this.accessKey}`, 'Accept-Version': 'v1' } }));
    }
    exportBaseUnsplashRequest() {
        return;
    }
};
UnsplashApi.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHandler"] }
];
UnsplashApi = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Injectable"])()
], UnsplashApi);



/***/ }),

/***/ "./src/app/weather.api.class.ts":
/*!**************************************!*\
  !*** ./src/app/weather.api.class.ts ***!
  \**************************************/
/*! exports provided: WeatherApi */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WeatherApi", function() { return WeatherApi; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");



let WeatherApi = class WeatherApi extends _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] {
    constructor(handler) {
        super(handler);
        this.baseUrl = 'https://api.openweathermap.org/data/2.5/weather';
        this.headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]();
        console.log('We are creating new instance of WeatherAPI extending HttpClient, here is the defualt handler: ', handler);
    }
    get(url, options) {
        url = this.baseUrl + url;
        return super.get(url, Object.assign({}, options));
    }
};
WeatherApi.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHandler"] }
];
WeatherApi = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])()
], WeatherApi);



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\R.Kloppers\Documents\oproep\angular improved\assessment-remade-angular\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map