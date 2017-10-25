webpackJsonp(["main"],{

/***/ "../../../../../src lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	return new Promise(function(resolve, reject) { reject(new Error("Cannot find module '" + req + "'.")); });
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src lazy recursive";

/***/ }),

/***/ "../../../../../src/app/account/account-guard.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AccountGuard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AccountGuard = (function () {
    /**
     * initialize the guard class and set router to injected Router instance
     */
    function AccountGuard(router) {
        this.router = router;
    }
    /**
     * returns true if the user has a valid localStorage token
     * and allows the user to access logged in routes
     */
    AccountGuard.prototype.canActivate = function () {
        if (localStorage.getItem('ssid')) {
            // logged in so return true
            return true;
        }
        // not logged in so redirect to login page
        this.router.navigate(['/login']);
        return false;
    };
    return AccountGuard;
}());
AccountGuard = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _a || Object])
], AccountGuard);

var _a;
//# sourceMappingURL=account-guard.js.map

/***/ }),

/***/ "../../../../../src/app/account/account-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AccountRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_login_component__ = __webpack_require__("../../../../../src/app/account/login/login.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var appRoutes = [
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_2__login_login_component__["a" /* LoginComponent */] },
];
var AccountRoutingModule = (function () {
    function AccountRoutingModule() {
    }
    return AccountRoutingModule;
}());
AccountRoutingModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_router__["b" /* RouterModule */].forChild(appRoutes)
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_router__["b" /* RouterModule */]
        ]
    })
], AccountRoutingModule);

//# sourceMappingURL=account-routing.module.js.map

/***/ }),

/***/ "../../../../../src/app/account/account.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AccountModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_login_component__ = __webpack_require__("../../../../../src/app/account/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__account_routing_module__ = __webpack_require__("../../../../../src/app/account/account-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_shared_module__ = __webpack_require__("../../../../../src/app/shared/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__core_core_module__ = __webpack_require__("../../../../../src/app/core/core.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angular2_ladda__ = __webpack_require__("../../../../angular2-ladda/module/module.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angular2_ladda___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_angular2_ladda__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var AccountModule = (function () {
    function AccountModule() {
    }
    return AccountModule;
}());
AccountModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
            __WEBPACK_IMPORTED_MODULE_5__core_core_module__["a" /* CoreModule */],
            __WEBPACK_IMPORTED_MODULE_4__shared_shared_module__["a" /* SharedModule */],
            __WEBPACK_IMPORTED_MODULE_3__account_routing_module__["a" /* AccountRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_6_angular2_ladda__["LaddaModule"].forRoot({
                style: 'zoom-out',
                spinnerSize: 30,
                spinnerColor: '#fff',
                spinnerLines: 12
            }),
        ],
        declarations: [__WEBPACK_IMPORTED_MODULE_2__login_login_component__["a" /* LoginComponent */]]
    })
], AccountModule);

//# sourceMappingURL=account.module.js.map

/***/ }),

/***/ "../../../../../src/app/account/account.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AccountService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_services_data_service__ = __webpack_require__("../../../../../src/app/shared/services/data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_config__ = __webpack_require__("../../../../../src/app/app.config.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};



var AccountService = (function () {
    function AccountService(dataService, appConfig) {
        this.dataService = dataService;
        this.appConfig = appConfig;
    }
    /**
     * Calls the login endpoint
     * @param {IAccount} body
     * @returns {Observable<any>}
     */
    AccountService.prototype.login = function (body) {
        return this.dataService.post(this.appConfig.endpoint + this.appConfig.user + '/auth', body, false);
    };
    /**
     * Calls the logout endpoint
     * @returns {Observable<any>}
     */
    AccountService.prototype.logout = function () {
        return this.dataService.get(this.appConfig.endpoint + this.appConfig.user + '/logout');
    };
    /**
     * Saves user sessions in local Storage
     * @param {string[]} data
     */
    AccountService.prototype.saveUserCredentials = function (data) {
        return localStorage.setItem('ssid', JSON.stringify(data));
    };
    /**
     * Saves user sessions in local Storage
     * @param {string[]} data
     */
    AccountService.prototype.getUserCredentials = function () {
        return JSON.parse(localStorage.getItem('ssid'));
    };
    /**
     * Checks If a user is logged in
     * @returns {boolean}
     */
    AccountService.prototype.isUserLoggedIn = function () {
        return this.getUserCredentials() ? !!this.getUserCredentials().sessionId : false;
    };
    return AccountService;
}());
AccountService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __param(1, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_2__app_config__["a" /* APP_CONFIG */])),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__shared_services_data_service__["a" /* DataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__shared_services_data_service__["a" /* DataService */]) === "function" && _a || Object, Object])
], AccountService);

var _a;
//# sourceMappingURL=account.service.js.map

/***/ }),

/***/ "../../../../../src/app/account/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<aside class=\"aside-wrapper col-md-6 col-lg-6\">\n    <co-sidebar></co-sidebar>\n</aside>\n<div class=\"login-wrapper comp-container col-md-6 col-lg-6 col-lg-push-6 col-md-push-6\">\n    <div class=\"h2\">Sign in</div>\n    <div class=\"alert alert-danger col-md-8\" *ngIf=\"errorMessage\">{{errorMessage}}</div>\n    <form novalidate (ngSubmit)=\"login(loginForm)\" [formGroup]=\"loginForm\">\n        <div class=\"row\">\n            <div class=\"form-group col-md-8\"\n                 [ngClass]=\"{'has-error': loginForm.get('username').hasError('required') && loginForm.get('username').dirty || loginForm.get('username').hasError('required') && isSubmitted}\">\n                <label> Username</label>\n                <input formControlName=\"username\" class=\"form-control\" placeholder=\"Enter Username\">\n                <span class=\"small help-block\"\n                      *ngIf=\"loginForm.get('username').hasError('required') && loginForm.get('username').dirty || loginForm.get('username').hasError('required') && isSubmitted\">Please enter your username</span>\n            </div>\n\n            <div class=\"form-group col-md-8\"\n                 [ngClass]=\"{'has-error': loginForm.get('password').hasError('required') && loginForm.get('password').dirty || loginForm.get('password').hasError('required') && isSubmitted}\">\n                <label>Password</label>\n                <input formControlName=\"password\" class=\"form-control\" placeholder=\"Enter Password\" type=\"password\">\n                <span class=\"small help-block\"\n                      *ngIf=\"loginForm.get('password').hasError('required') && loginForm.get('password').dirty || loginForm.get('password').hasError('required') && isSubmitted\">Please enter your password</span>\n            </div>\n            <div class=\"form-group col-md-8\">\n                <button type=\"submit\" class=\"btn btn-primary btn-login\" [ladda]=\"isLoading\">Login</button>\n            </div>\n        </div>\n    </form>\n</div>"

/***/ }),

/***/ "../../../../../src/app/account/login/login.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".login-wrapper {\n  padding: 50px;\n  color: rgba(255, 255, 255, 0.8); }\n\n.h2 {\n  margin-top: 50px;\n  margin-bottom: 100px;\n  opacity: 0.5; }\n\n.btn-login {\n  width: 250px; }\n\n.alert-danger {\n  border: none;\n  color: #fff;\n  background-color: rgba(255, 63, 58, 0.5);\n  width: 95%; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/account/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_crypto_js__ = __webpack_require__("../../../../crypto-js/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_crypto_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_crypto_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__account_service__ = __webpack_require__("../../../../../src/app/account/account.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_animations_fade_animation__ = __webpack_require__("../../../../../src/app/shared/animations/fade.animation.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var LoginComponent = (function () {
    function LoginComponent(fb, accountService, router) {
        this.fb = fb;
        this.accountService = accountService;
        this.router = router;
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.loginForm = this.fb.group({
            username: ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].required]],
            password: ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].required]]
        });
        this.isSubmitted = false;
        this.isLoading = false;
    };
    /**
     * Hash password with MD5
     * @param {string} password
     * @returns {string}
     */
    LoginComponent.prototype.hashPassword = function (password) {
        return __WEBPACK_IMPORTED_MODULE_2_crypto_js__["MD5"](password).toString();
    };
    /**
     * Authenticates a user when
     *  username and password matches.
     *
     *  On successful authentication,
     *  user details is stored and page
     *  is routed to the dashboard
     *
     * @param {FormGroup} form
     */
    LoginComponent.prototype.login = function (form) {
        var _this = this;
        this.isSubmitted = true;
        this.errorMessage = null;
        if (this.loginForm.valid) {
            this.isLoading = true;
            var formData = form.value;
            // Replace entered password from form with hashed password
            formData.password = this.hashPassword(formData.password);
            // Call login service
            this.accountService.login(form.value)
                .subscribe(function (data) {
                switch (data.status) {
                    case 'success':
                        setTimeout(function () {
                            _this.accountService.saveUserCredentials(data);
                            _this.router.navigate(['dashboard']);
                        }, 3000);
                        break;
                    case 'error':
                        setTimeout(function () {
                            _this.errorMessage = data.error;
                            _this.isLoading = false;
                        }, 3000);
                        break;
                    default:
                        break;
                }
            }, function (error) {
                _this.errorMessage = 'Server Error';
                _this.isLoading = false;
            });
        }
    };
    return LoginComponent;
}());
LoginComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'co-login',
        template: __webpack_require__("../../../../../src/app/account/login/login.component.html"),
        styles: [__webpack_require__("../../../../../src/app/account/login/login.component.scss")],
        animations: [__WEBPACK_IMPORTED_MODULE_5__shared_animations_fade_animation__["a" /* fadeInAnimation */]],
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__account_service__["a" /* AccountService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__account_service__["a" /* AccountService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* Router */]) === "function" && _c || Object])
], LoginComponent);

var _a, _b, _c;
//# sourceMappingURL=login.component.js.map

/***/ }),

/***/ "../../../../../src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__core_page_not_found_page_not_found_component__ = __webpack_require__("../../../../../src/app/core/page-not-found/page-not-found.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__account_login_login_component__ = __webpack_require__("../../../../../src/app/account/login/login.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var appRoutes = [
    { path: '', redirectTo: '/', pathMatch: 'full' },
    { path: '', component: __WEBPACK_IMPORTED_MODULE_3__account_login_login_component__["a" /* LoginComponent */] },
    { path: '**', component: __WEBPACK_IMPORTED_MODULE_1__core_page_not_found_page_not_found_component__["a" /* PageNotFoundComponent */] }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());
AppRoutingModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_router__["b" /* RouterModule */].forRoot(appRoutes)
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_router__["b" /* RouterModule */]
        ]
    })
], AppRoutingModule);

//# sourceMappingURL=app-routing.module.js.map

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<section class=\"container-fluid app-wrapper\">\n\n    <!--Main Content is Loaded here-->\n    <section class=\"main-wrapper\">\n        <router-outlet></router-outlet>\n    </section>\n    <!--Main Content-->\n</section>"

/***/ }),

/***/ "../../../../../src/app/app.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppComponent = (function () {
    function AppComponent() {
    }
    return AppComponent;
}());
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'co-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.scss")]
    }),
    __metadata("design:paramtypes", [])
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.config.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return APP_CONFIG; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return appConfig; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");


var APP_CONFIG = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["InjectionToken"]('appConfig');
var appConfig = {
    endpoint: __WEBPACK_IMPORTED_MODULE_1__environments_environment__["a" /* environment */].endpoint,
    user: '/user',
    todos: '/todos',
    todo: '/todo'
};
//# sourceMappingURL=app.config.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__("../../../common/@angular/common/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_routing_module__ = __webpack_require__("../../../../../src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__core_core_module__ = __webpack_require__("../../../../../src/app/core/core.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__shared_services_data_service__ = __webpack_require__("../../../../../src/app/shared/services/data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__account_account_module__ = __webpack_require__("../../../../../src/app/account/account.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__app_config__ = __webpack_require__("../../../../../src/app/app.config.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__account_account_service__ = __webpack_require__("../../../../../src/app/account/account.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__dashboard_dashboard_module__ = __webpack_require__("../../../../../src/app/dashboard/dashboard.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__todo_todo_service__ = __webpack_require__("../../../../../src/app/todo/todo.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__account_account_guard__ = __webpack_require__("../../../../../src/app/account/account-guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__shared_services_api_interceptor_service__ = __webpack_require__("../../../../../src/app/shared/services/api-interceptor.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/@angular/platform-browser/animations.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};















var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_14__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
            __WEBPACK_IMPORTED_MODULE_5__core_core_module__["a" /* CoreModule */],
            __WEBPACK_IMPORTED_MODULE_7__account_account_module__["a" /* AccountModule */],
            __WEBPACK_IMPORTED_MODULE_10__dashboard_dashboard_module__["a" /* DashboardModule */],
            __WEBPACK_IMPORTED_MODULE_4__app_routing_module__["a" /* AppRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["c" /* HttpClientModule */]
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_6__shared_services_data_service__["a" /* DataService */], __WEBPACK_IMPORTED_MODULE_9__account_account_service__["a" /* AccountService */], __WEBPACK_IMPORTED_MODULE_11__todo_todo_service__["a" /* TodoService */], __WEBPACK_IMPORTED_MODULE_12__account_account_guard__["a" /* AccountGuard */],
            {
                provide: __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["a" /* HTTP_INTERCEPTORS */],
                useClass: __WEBPACK_IMPORTED_MODULE_13__shared_services_api_interceptor_service__["a" /* ApiInterceptorService */],
                multi: true
            },
            { provide: __WEBPACK_IMPORTED_MODULE_8__app_config__["a" /* APP_CONFIG */], useValue: __WEBPACK_IMPORTED_MODULE_8__app_config__["b" /* appConfig */] }],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/core/avatar/avatar.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"avatar-wrapper\">\n    <div class=\"avatar\">\n        <img src=\"../assets/avatar.png\" class=\"img-circle\">\n    </div>\n    <div class=\"avatar-greeting h2\">\n        Hello <span style=\"text-transform: capitalize\">{{avatarName}}</span>\n    </div>\n\n    <div class=\"avatar-stats\" *ngIf=\"stats\">You have completed <strong>{{completed}}</strong> todo items. You still have\n        <strong>{{pending}}</strong> pending\n    </div>\n\n    <div class=\"logout\" (click)=\"logOut()\">Logout</div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/core/avatar/avatar.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".avatar-wrapper {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  -webkit-transform: translate(-50%, -50%);\n  transform: translate(-50%, -50%);\n  text-align: center;\n  color: rgba(242, 242, 242, 0.8); }\n  .avatar-wrapper .avatar {\n    background-color: #34445B;\n    border-radius: 50%;\n    margin: 0 auto;\n    height: 150px;\n    width: 150px; }\n    .avatar-wrapper .avatar img {\n      height: 150px;\n      width: 150px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/core/avatar/avatar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AvatarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__account_account_service__ = __webpack_require__("../../../../../src/app/account/account.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_animations_fade_animation__ = __webpack_require__("../../../../../src/app/shared/animations/fade.animation.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AvatarComponent = (function () {
    function AvatarComponent(accountService, router) {
        this.accountService = accountService;
        this.router = router;
        this.completed = 0;
        this.pending = 0;
    }
    AvatarComponent.prototype.ngOnInit = function () {
        this.getAvatarDetails();
        this.setTodoStats();
    };
    /**
     * Get the avatar name of
     * the currently logged in user
     */
    AvatarComponent.prototype.getAvatarDetails = function () {
        if (this.accountService.isUserLoggedIn()) {
            this.avatarName = this.accountService.getUserCredentials().username;
        }
    };
    /**
     *  Assign the input from the dashboard to get pending and completed tasks
     */
    AvatarComponent.prototype.setTodoStats = function () {
        this.completed = this.stats.completed;
        this.pending = this.stats.pending;
    };
    AvatarComponent.prototype.logOut = function () {
        var _this = this;
        this.accountService.logout().subscribe(function () {
            localStorage.clear();
            _this.router.navigate(['/']);
        });
    };
    AvatarComponent.prototype.ngOnChanges = function (changes) {
        this.completed = changes.stats.currentValue.completed;
        this.pending = changes.stats.currentValue.pending;
    };
    return AvatarComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], AvatarComponent.prototype, "stats", void 0);
AvatarComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'co-avatar',
        template: __webpack_require__("../../../../../src/app/core/avatar/avatar.component.html"),
        styles: [__webpack_require__("../../../../../src/app/core/avatar/avatar.component.scss")],
        animations: [__WEBPACK_IMPORTED_MODULE_3__shared_animations_fade_animation__["a" /* fadeInAnimation */]],
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__account_account_service__["a" /* AccountService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__account_account_service__["a" /* AccountService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]) === "function" && _b || Object])
], AvatarComponent);

var _a, _b;
//# sourceMappingURL=avatar.component.js.map

/***/ }),

/***/ "../../../../../src/app/core/core.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CoreModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__page_not_found_page_not_found_component__ = __webpack_require__("../../../../../src/app/core/page-not-found/page-not-found.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__sidebar_sidebar_component__ = __webpack_require__("../../../../../src/app/core/sidebar/sidebar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__avatar_avatar_component__ = __webpack_require__("../../../../../src/app/core/avatar/avatar.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var CoreModule = (function () {
    function CoreModule() {
    }
    return CoreModule;
}());
CoreModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */]
        ],
        exports: [__WEBPACK_IMPORTED_MODULE_2__page_not_found_page_not_found_component__["a" /* PageNotFoundComponent */], __WEBPACK_IMPORTED_MODULE_3__sidebar_sidebar_component__["a" /* SidebarComponent */], __WEBPACK_IMPORTED_MODULE_4__avatar_avatar_component__["a" /* AvatarComponent */]],
        declarations: [__WEBPACK_IMPORTED_MODULE_2__page_not_found_page_not_found_component__["a" /* PageNotFoundComponent */], __WEBPACK_IMPORTED_MODULE_3__sidebar_sidebar_component__["a" /* SidebarComponent */], __WEBPACK_IMPORTED_MODULE_4__avatar_avatar_component__["a" /* AvatarComponent */]]
    })
], CoreModule);

//# sourceMappingURL=core.module.js.map

/***/ }),

/***/ "../../../../../src/app/core/page-not-found/page-not-found.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n    page-not-found works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/core/page-not-found/page-not-found.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/core/page-not-found/page-not-found.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PageNotFoundComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PageNotFoundComponent = (function () {
    function PageNotFoundComponent() {
    }
    PageNotFoundComponent.prototype.ngOnInit = function () {
    };
    return PageNotFoundComponent;
}());
PageNotFoundComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'co-page-not-found',
        template: __webpack_require__("../../../../../src/app/core/page-not-found/page-not-found.component.html"),
        styles: [__webpack_require__("../../../../../src/app/core/page-not-found/page-not-found.component.scss")]
    }),
    __metadata("design:paramtypes", [])
], PageNotFoundComponent);

//# sourceMappingURL=page-not-found.component.js.map

/***/ }),

/***/ "../../../../../src/app/core/sidebar/sidebar.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"sidebar-wrapper\">\n    <div class=\"sidebar-banner\">\n        <div class=\"h1 text-center\">Supercharge your day <br>with\n            Todo\n        </div>\n        <div class=\"text-center\">\n            <i class=\"flaticon-rocket\"></i>\n        </div>\n    </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/core/sidebar/sidebar.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".sidebar-wrapper {\n  position: relative;\n  height: 100%;\n  padding: 0;\n  color: rgba(255, 255, 255, 0.8);\n  font-weight: 200; }\n\n.sidebar-banner {\n  position: absolute;\n  width: 100%;\n  top: 50%;\n  left: 50%;\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%); }\n  .sidebar-banner .h1 {\n    font-weight: 200; }\n  .sidebar-banner .flaticon-rocket {\n    font-size: 140px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/core/sidebar/sidebar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SidebarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SidebarComponent = (function () {
    function SidebarComponent() {
    }
    SidebarComponent.prototype.ngOnInit = function () {
    };
    return SidebarComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], SidebarComponent.prototype, "isUserLoggedIn", void 0);
SidebarComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'co-sidebar',
        template: __webpack_require__("../../../../../src/app/core/sidebar/sidebar.component.html"),
        styles: [__webpack_require__("../../../../../src/app/core/sidebar/sidebar.component.scss")]
    }),
    __metadata("design:paramtypes", [])
], SidebarComponent);

//# sourceMappingURL=sidebar.component.js.map

/***/ }),

/***/ "../../../../../src/app/dashboard/dashboard-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__dashboard_component__ = __webpack_require__("../../../../../src/app/dashboard/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__account_account_guard__ = __webpack_require__("../../../../../src/app/account/account-guard.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var appRoutes = [
    {
        path: 'dashboard',
        component: __WEBPACK_IMPORTED_MODULE_2__dashboard_component__["a" /* DashboardComponent */],
        canActivate: [
            __WEBPACK_IMPORTED_MODULE_3__account_account_guard__["a" /* AccountGuard */]
        ],
    }
];
var DashboardRoutingModule = (function () {
    function DashboardRoutingModule() {
    }
    return DashboardRoutingModule;
}());
DashboardRoutingModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_router__["b" /* RouterModule */].forChild(appRoutes)
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_router__["b" /* RouterModule */]
        ]
    })
], DashboardRoutingModule);

//# sourceMappingURL=dashboard-routing.module.js.map

/***/ }),

/***/ "../../../../../src/app/dashboard/dashboard.component.html":
/***/ (function(module, exports) {

module.exports = "<co-alert [alert]=\"alert\"></co-alert>\n\n<aside class=\"aside-wrapper col-md-6 col-lg-6\">\n    <co-avatar [stats]=\"stats\" *ngIf=\"stats\"></co-avatar>\n</aside>\n\n<div class=\"container-fluid dashboard-wrapper comp-container col-md-6 col-lg-6 col-md-push-6 col-lg-push-6\">\n\n    <div *ngIf=\"pendingTodos[0] && completedTodos[0] else elseBlock\">\n\n        <div class=\"col-md-6 drop-zone\" coDropZone>\n            <div class=\"h2\">In Progress</div>\n\n            <co-todo [todo]=\"pendingTodo\" *ngFor=\"let pendingTodo of pendingTodos\"\n                     (todoUpdated)=\"handleTodoAdded($event)\"\n                     (todoDeleted)=\"handleTodoAdded($event)\" [draggable]=\"true\" coDragDrop></co-todo>\n        </div>\n        <div class=\"col-md-6 drop-zone\" coDropZone>\n            <div class=\"h2\">Completed</div>\n            <co-todo [todo]=\"completedTodo\" *ngFor=\"let completedTodo of completedTodos\"\n                     (todoUpdated)=\"handleTodoAdded($event)\"\n                     [draggable]=\"true\" coDragDrop></co-todo>\n        </div>\n    </div>\n\n        <ng-template #elseBlock>\n            <div class=\"text-center h1 empty-state\">\n                You do not have any todos\n            </div>\n        </ng-template>\n        <div class=\"col-md-12\">\n            <div class=\"center-block\">\n                <co-todo-add (todoAdded)=\"handleTodoAdded($event)\"></co-todo-add>\n            </div>\n        </div>\n\n</div>"

/***/ }),

/***/ "../../../../../src/app/dashboard/dashboard.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".dashboard-wrapper {\n  padding: 25px;\n  color: rgba(255, 255, 255, 0.8); }\n\n.empty-state {\n  margin-top: 100px;\n  padding: 30px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/dashboard/dashboard.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__todo_todo_service__ = __webpack_require__("../../../../../src/app/todo/todo.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DashboardComponent = (function () {
    function DashboardComponent(todoService) {
        this.todoService = todoService;
    }
    DashboardComponent.prototype.ngOnInit = function () {
        this.getTodos();
        this.completedTodos = [];
        this.pendingTodos = [];
    };
    /**
     * Get all todos
     */
    DashboardComponent.prototype.getTodos = function () {
        var _this = this;
        this.todoService.getTodos()
            .subscribe(function (data) {
            _this.splitTodos(data);
        });
    };
    /**
     * Splits all Todos into 'Completed'
     * and 'notCompleted'
     * @param {Array<ITodo>} todos
     */
    DashboardComponent.prototype.splitTodos = function (todos) {
        for (var i = todos.length - 1; i >= 0; i--) {
            if (todos[i].status === 'completed') {
                this.completedTodos.push(todos[i]);
            }
            if (todos[i].status === 'notCompleted') {
                this.pendingTodos.push(todos[i]);
            }
            todos.pop();
        }
        this.stats = { pending: this.pendingTodos.length, completed: this.completedTodos.length };
    };
    /**
     * THis is called when a new aTodo is added
     * or updated
     */
    DashboardComponent.prototype.handleTodoAdded = function (data) {
        var _this = this;
        this.completedTodos = [];
        this.pendingTodos = [];
        this.getTodos();
        //Displays alert
        if (data === 'added') {
            this.alert = { alertMessage: 'New Todo Added', alertType: 'success' };
        }
        if (data === 'updated') {
            this.alert = { alertMessage: 'Todo updated', alertType: 'success' };
        }
        if (data === 'deleted') {
            this.alert = { alertMessage: 'Todo deleted', alertType: 'success' };
        }
        setTimeout(function () {
            _this.alert = { alertMessage: '', alertType: '' };
        }, 5000);
    };
    return DashboardComponent;
}());
DashboardComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'co-dashboard',
        template: __webpack_require__("../../../../../src/app/dashboard/dashboard.component.html"),
        styles: [__webpack_require__("../../../../../src/app/dashboard/dashboard.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__todo_todo_service__["a" /* TodoService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__todo_todo_service__["a" /* TodoService */]) === "function" && _a || Object])
], DashboardComponent);

var _a;
//# sourceMappingURL=dashboard.component.js.map

/***/ }),

/***/ "../../../../../src/app/dashboard/dashboard.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__dashboard_component__ = __webpack_require__("../../../../../src/app/dashboard/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__dashboard_routing_module__ = __webpack_require__("../../../../../src/app/dashboard/dashboard-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_shared_module__ = __webpack_require__("../../../../../src/app/shared/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__core_core_module__ = __webpack_require__("../../../../../src/app/core/core.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__todo_todo_module__ = __webpack_require__("../../../../../src/app/todo/todo.module.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var DashboardModule = (function () {
    function DashboardModule() {
    }
    return DashboardModule;
}());
DashboardModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
            __WEBPACK_IMPORTED_MODULE_4__shared_shared_module__["a" /* SharedModule */],
            __WEBPACK_IMPORTED_MODULE_5__core_core_module__["a" /* CoreModule */],
            __WEBPACK_IMPORTED_MODULE_6__todo_todo_module__["a" /* TodoModule */],
            __WEBPACK_IMPORTED_MODULE_3__dashboard_routing_module__["a" /* DashboardRoutingModule */]
        ],
        declarations: [__WEBPACK_IMPORTED_MODULE_2__dashboard_component__["a" /* DashboardComponent */]]
    })
], DashboardModule);

//# sourceMappingURL=dashboard.module.js.map

/***/ }),

/***/ "../../../../../src/app/shared/animations/fade.animation.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return fadeInAnimation; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_animations__ = __webpack_require__("../../../animations/@angular/animations.es5.js");
// import the required animation functions from the angular animations module

var fadeInAnimation = 
// trigger name for attaching this animation to an element using the [@triggerName] syntax
Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["i" /* trigger */])('fadeInAnimation', [
    // route 'enter' transition
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["h" /* transition */])(':enter', [
        // css styles at start of transition
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["g" /* style */])({ opacity: 0 }),
        // animation and styles at end of transition
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["e" /* animate */])('.3s', Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["g" /* style */])({ opacity: 1 }))
    ]),
]);
//# sourceMappingURL=fade.animation.js.map

/***/ }),

/***/ "../../../../../src/app/shared/components/alert/alert.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"alert-wrapper\" *ngIf=\"alert\">\n    <div class=\"alert alert-success\" *ngIf=\"alert.alertType==='success'\"><strong>Heads Up! </strong>{{alert.alertMessage}}</div>\n    <div class=\"alert alert-danger\" *ngIf=\"alert.alertType==='failure'\"><strong>Error! </strong>{{alert.alertMessage}}</div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/shared/components/alert/alert.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".alert-wrapper {\n  position: absolute;\n  right: 0;\n  top: 0;\n  z-index: 400;\n  width: 250px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/shared/components/alert/alert.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AlertComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AlertComponent = (function () {
    function AlertComponent() {
    }
    AlertComponent.prototype.ngOnInit = function () {
    };
    return AlertComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], AlertComponent.prototype, "alert", void 0);
AlertComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'co-alert',
        template: __webpack_require__("../../../../../src/app/shared/components/alert/alert.component.html"),
        styles: [__webpack_require__("../../../../../src/app/shared/components/alert/alert.component.scss")]
    }),
    __metadata("design:paramtypes", [])
], AlertComponent);

//# sourceMappingURL=alert.component.js.map

/***/ }),

/***/ "../../../../../src/app/shared/directives/drag-drop.directive.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DragDropDirective; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DragDropDirective = (function () {
    function DragDropDirective(el, renderer) {
        this.el = el;
        this.renderer = renderer;
    }
    DragDropDirective.prototype.onDragStart = function (evt) {
        var el = evt.target;
        this.renderer.setAttribute(el, 'id', 'new');
        evt.dataTransfer.setData('text/plain', evt.target.id);
        evt.dataTransfer.effectAllowed = 'move';
    };
    return DragDropDirective;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"])('dragstart', ['$event']),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], DragDropDirective.prototype, "onDragStart", null);
DragDropDirective = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"])({
        selector: '[coDragDrop]'
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer2"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer2"]) === "function" && _b || Object])
], DragDropDirective);

var _a, _b;
//# sourceMappingURL=drag-drop.directive.js.map

/***/ }),

/***/ "../../../../../src/app/shared/directives/drop-zone.directive.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DropZoneDirective; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DropZoneDirective = (function () {
    function DropZoneDirective(el, renderer) {
        this.el = el;
        this.renderer = renderer;
    }
    DropZoneDirective.prototype.onDragOver = function (evt) {
        evt.preventDefault();
        evt.dataTransfer.dropEffect = 'move';
    };
    DropZoneDirective.prototype.onDrop = function (evt, el) {
        evt.preventDefault();
        var data = evt.dataTransfer.getData('text/plain');
        this.renderer.appendChild(this.el.nativeElement, document.getElementById(data));
    };
    return DropZoneDirective;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"])('dragover', ['$event']),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], DropZoneDirective.prototype, "onDragOver", null);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"])('drop', ['$event']),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", void 0)
], DropZoneDirective.prototype, "onDrop", null);
DropZoneDirective = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"])({
        selector: '[coDropZone]'
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer2"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer2"]) === "function" && _b || Object])
], DropZoneDirective);

var _a, _b;
//# sourceMappingURL=drop-zone.directive.js.map

/***/ }),

/***/ "../../../../../src/app/shared/interfaces/todo.ts":
/***/ (function(module, exports) {

//# sourceMappingURL=todo.js.map

/***/ }),

/***/ "../../../../../src/app/shared/services/api-interceptor.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ApiInterceptorService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__("../../../common/@angular/common/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_observable_throw__ = __webpack_require__("../../../../rxjs/add/observable/throw.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_observable_throw___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_observable_throw__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__ = __webpack_require__("../../../../rxjs/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ApiInterceptorService = (function () {
    function ApiInterceptorService(inj) {
        this.inj = inj;
    }
    ApiInterceptorService.prototype.intercept = function (req, next) {
        var router = this.inj.get(__WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* Router */]);
        return next.handle(req)
            .catch(function (error) {
            if (error instanceof __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["d" /* HttpErrorResponse */]) {
                if (error.status === 401) {
                    router.navigate(['/login']);
                    localStorage.clear();
                    return __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["Observable"].throw(error);
                }
            }
        });
    };
    return ApiInterceptorService;
}());
ApiInterceptorService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_core__["Injector"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_core__["Injector"]) === "function" && _a || Object])
], ApiInterceptorService);

var _a;
//# sourceMappingURL=api-interceptor.service.js.map

/***/ }),

/***/ "../../../../../src/app/shared/services/data.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DataService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__("../../../common/@angular/common/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_observable_of__ = __webpack_require__("../../../../rxjs/add/observable/of.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_observable_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_observable_of__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_observable_throw__ = __webpack_require__("../../../../rxjs/add/observable/throw.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_observable_throw___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_observable_throw__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_delay__ = __webpack_require__("../../../../rxjs/add/operator/delay.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_delay___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_delay__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_retryWhen__ = __webpack_require__("../../../../rxjs/add/operator/retryWhen.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_retryWhen___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_retryWhen__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_mergeMap__ = __webpack_require__("../../../../rxjs/add/operator/mergeMap.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_mergeMap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_mergeMap__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_take__ = __webpack_require__("../../../../rxjs/add/operator/take.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_take___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_take__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_rxjs_Observable__ = __webpack_require__("../../../../rxjs/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_rxjs_Observable__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var DataService = (function () {
    function DataService(http) {
        this.http = http;
        this.params = new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["e" /* HttpParams */]();
    }
    /**
     * A Retry condition when server returns a 500 error
     * Just in case it was a temporary downtime, the service "automagically" retries twice with
     * a one second delay between calls
     *
     * @param {Observable<any>} errors
     * @returns {Observable<any>}
     */
    DataService.prototype.retryCondition = function (errors) {
        return errors.mergeMap(function (error) { return (error.status === 500) ? __WEBPACK_IMPORTED_MODULE_9_rxjs_Observable__["Observable"].throw(error) : __WEBPACK_IMPORTED_MODULE_9_rxjs_Observable__["Observable"].of(error); })
            .delay(1000)
            .take(2);
    };
    /**
     * GET method abstraction. Other services call this method
     * instead of importing HttpClient
     * @param url
     * @returns {Observable<any>}
     */
    DataService.prototype.get = function (url) {
        return this.http.get(url, { params: this.params.set('sessionId', JSON.parse(localStorage.getItem('ssid')).sessionId) })
            .retryWhen(this.retryCondition)
            .catch(this.handleError);
    };
    /**
     * POST Method Abstraction
     * @param url
     * @param body
     * @param useSession - Tells the request to append sessionID
     * @returns {Observable<any>}
     */
    DataService.prototype.post = function (url, body, useSession) {
        if (useSession === void 0) { useSession = true; }
        return useSession ? this.http.post(url, body, { params: this.params.set('sessionId', JSON.parse(localStorage.getItem('ssid')).sessionId) }) : this.http.post(url, body)
            .catch(this.handleError);
    };
    /**
     * PUT Method Abstraction
     * @param url
     * @param body
     * @returns {Observable<any>}
     */
    DataService.prototype.put = function (url, body) {
        return this.http.put(url, body, { params: this.params.set('sessionId', JSON.parse(localStorage.getItem('ssid')).sessionId) })
            .catch(this.handleError);
    };
    /**
     * PUT Method Abstraction
     * @param url
     * @param body
     * @returns {Observable<any>}
     */
    DataService.prototype.delete = function (url, body) {
        return this.http.request('delete', url, {
            body: body,
            params: this.params.set('sessionId', JSON.parse(localStorage.getItem('ssid')).sessionId)
        }).catch(this.handleError);
    };
    /**
     * Global Rx stream error handler
     * All HTTP methods call this method in the Observable.catch
     * @param {HttpErrorResponse} error
     * @returns {ErrorObservable}
     */
    DataService.prototype.handleError = function (error) {
        return __WEBPACK_IMPORTED_MODULE_9_rxjs_Observable__["Observable"].throw(error || 'Server Error');
    };
    return DataService;
}());
DataService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["b" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["b" /* HttpClient */]) === "function" && _a || Object])
], DataService);

var _a;
//# sourceMappingURL=data.service.js.map

/***/ }),

/***/ "../../../../../src/app/shared/shared.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SharedModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_alert_alert_component__ = __webpack_require__("../../../../../src/app/shared/components/alert/alert.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__directives_drag_drop_directive__ = __webpack_require__("../../../../../src/app/shared/directives/drag-drop.directive.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__directives_drop_zone_directive__ = __webpack_require__("../../../../../src/app/shared/directives/drop-zone.directive.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var SharedModule = (function () {
    function SharedModule() {
    }
    return SharedModule;
}());
SharedModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_common__["b" /* CommonModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* ReactiveFormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* RouterModule */]
        ],
        declarations: [__WEBPACK_IMPORTED_MODULE_4__components_alert_alert_component__["a" /* AlertComponent */], __WEBPACK_IMPORTED_MODULE_5__directives_drag_drop_directive__["a" /* DragDropDirective */], __WEBPACK_IMPORTED_MODULE_6__directives_drop_zone_directive__["a" /* DropZoneDirective */]],
        exports: [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* ReactiveFormsModule */], __WEBPACK_IMPORTED_MODULE_4__components_alert_alert_component__["a" /* AlertComponent */], __WEBPACK_IMPORTED_MODULE_5__directives_drag_drop_directive__["a" /* DragDropDirective */], __WEBPACK_IMPORTED_MODULE_6__directives_drop_zone_directive__["a" /* DropZoneDirective */]]
    })
], SharedModule);

//# sourceMappingURL=shared.module.js.map

/***/ }),

/***/ "../../../../../src/app/todo/todo-add/todo-add.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"todo-inline orange\" *ngIf=\"isTodoInlineShown\">\n    <div class=\"todo-close\" (click)=\"toggleView()\">close</div>\n\n    <form [formGroup]=\"todoForm\" (ngSubmit)=\"addTodo(todoForm.value)\">\n        <div class=\"form-group\"\n             [ngClass]=\"{'has-error': todoForm.get('title').hasError('required') && todoForm.get('title').dirty || todoForm.get('title').hasError('required') && isSubmitted}\">\n            <label>Title</label>\n            <input class=\"form-control\" formControlName=\"title\" #titleInput>\n            <span class=\"small help-block\"\n                  *ngIf=\"todoForm.get('title').hasError('required') && todoForm.get('title').dirty || todoForm.get('title').hasError('required') && isSubmitted\">Please enter todo title</span>\n        </div>\n\n        <div class=\"form-group\">\n            <label>Status</label>\n            <div class=\"radio\">\n                <label class=\"radio-inline\">\n                    <input type=\"radio\" value=\"completed\" formControlName=\"status\" > Completed\n                </label>\n                <label class=\"radio-inline\">\n                    <input type=\"radio\" value=\"notCompleted\" formControlName=\"status\" checked>Not\n                    Completed\n                </label>\n            </div>\n        </div>\n\n        <div class=\"form-group\"\n             [ngClass]=\"{'has-error': todoForm.get('description').hasError('required') && todoForm.get('description').dirty || todoForm.get('description').hasError('required') && isSubmitted}\">\n            <label>Description</label>\n            <textarea class=\"form-control\" formControlName=\"description\"></textarea>\n            <span class=\"small help-block\"\n                  *ngIf=\"todoForm.get('description').hasError('required') && todoForm.get('description').dirty || todoForm.get('description').hasError('required') && isSubmitted\">Please enter description</span>\n        </div>\n\n        <div class=\"form-group\">\n            <button class=\"btn btn-primary\"> Add New</button>\n        </div>\n    </form>\n</div>\n\n\n<button (click)=\"toggleView()\" *ngIf=\"!isTodoInlineShown\" #toggleBtn class=\"btn btn-success btn-block\">Add New Todo\n</button>\n"

/***/ }),

/***/ "../../../../../src/app/todo/todo-add/todo-add.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".todo-inline {\n  float: left;\n  position: relative;\n  width: 100%;\n  word-wrap: break-word;\n  background: transparent;\n  border: 1px solid;\n  background-clip: border-box;\n  border-radius: .15rem;\n  padding: 15px;\n  margin-bottom: 10px;\n  box-shadow: 0px 0px 13px 2px #f3b239; }\n  .todo-inline.orange {\n    border-color: #F2AE2F; }\n  .todo-inline .todo-close {\n    position: absolute;\n    right: 10px;\n    top: 10px;\n    float: right;\n    line-height: 1;\n    cursor: pointer; }\n  .todo-inline .form-control {\n    padding-top: 18px;\n    padding-bottom: 18px; }\n  .todo-inline .form-group {\n    height: auto; }\n  .todo-inline label {\n    font-size: 14px; }\n  .todo-inline .btn-primary {\n    padding: 10px 35px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/todo/todo-add/todo-add.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TodoAddComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__todo_service__ = __webpack_require__("../../../../../src/app/todo/todo.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TodoAddComponent = (function () {
    function TodoAddComponent(fb, renderer, todoService) {
        this.fb = fb;
        this.renderer = renderer;
        this.todoService = todoService;
        this.todoAdded = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    TodoAddComponent.prototype.ngOnInit = function () {
        this.isTodoInlineShown = false;
        this.isSubmitted = false;
        this.todoForm = this.fb.group({
            title: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].required],
            description: [''],
            status: ['notCompleted', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].required]]
        });
    };
    TodoAddComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        // Listen to the click event on toggle button and always set the title input in focus
        this.renderer.listen(this.toggleBtn.nativeElement, 'click', function () {
            _this.titleInput.nativeElement.focus();
        });
    };
    /**
     * Toggles the view state of
     * the inline editor
     */
    TodoAddComponent.prototype.toggleView = function () {
        return this.isTodoInlineShown = !this.isTodoInlineShown;
    };
    /**
     * Adds a new 'todo-item'
     * @param value
     */
    TodoAddComponent.prototype.addTodo = function (value) {
        var _this = this;
        this.isSubmitted = true;
        if (this.todoForm.valid) {
            this.todoService.addTodo(value)
                .subscribe(function (data) {
                switch (data.status) {
                    case 'success':
                        _this.toggleView();
                        _this.todoForm.reset();
                        _this.isSubmitted = false;
                        // Emit event to be caught by the dashboard component
                        _this.todoAdded.emit('added');
                        break;
                    case 'error':
                        /*TODO -Add error message*/
                        break;
                    default:
                        break;
                }
            });
        }
    };
    return TodoAddComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('titleInput'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _a || Object)
], TodoAddComponent.prototype, "titleInput", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('toggleBtn'),
    __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _b || Object)
], TodoAddComponent.prototype, "toggleBtn", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]) === "function" && _c || Object)
], TodoAddComponent.prototype, "todoAdded", void 0);
TodoAddComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'co-todo-add',
        template: __webpack_require__("../../../../../src/app/todo/todo-add/todo-add.component.html"),
        styles: [__webpack_require__("../../../../../src/app/todo/todo-add/todo-add.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer2"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer2"]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_2__todo_service__["a" /* TodoService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__todo_service__["a" /* TodoService */]) === "function" && _f || Object])
], TodoAddComponent);

var _a, _b, _c, _d, _e, _f;
//# sourceMappingURL=todo-add.component.js.map

/***/ }),

/***/ "../../../../../src/app/todo/todo-delete/todo-delete.component.html":
/***/ (function(module, exports) {

module.exports = "<div (click)=\"deleteTodo()\">x</div>\n"

/***/ }),

/***/ "../../../../../src/app/todo/todo-delete/todo-delete.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/todo/todo-delete/todo-delete.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TodoDeleteComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__todo_service__ = __webpack_require__("../../../../../src/app/todo/todo.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TodoDeleteComponent = (function () {
    function TodoDeleteComponent(todoService) {
        this.todoService = todoService;
        this.todoDeleted = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    TodoDeleteComponent.prototype.deleteTodo = function () {
        var _this = this;
        this.todoService.deleteTodo({ 'id': this.todoId })
            .subscribe(function (data) {
            switch (data.status) {
                case 'success':
                    _this.todoDeleted.emit('deleted');
                    break;
                case 'error':
                    break;
                default:
                    break;
            }
        });
    };
    return TodoDeleteComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", String)
], TodoDeleteComponent.prototype, "todoId", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]) === "function" && _a || Object)
], TodoDeleteComponent.prototype, "todoDeleted", void 0);
TodoDeleteComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'co-todo-delete',
        template: __webpack_require__("../../../../../src/app/todo/todo-delete/todo-delete.component.html"),
        styles: [__webpack_require__("../../../../../src/app/todo/todo-delete/todo-delete.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__todo_service__["a" /* TodoService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__todo_service__["a" /* TodoService */]) === "function" && _b || Object])
], TodoDeleteComponent);

var _a, _b;
//# sourceMappingURL=todo-delete.component.js.map

/***/ }),

/***/ "../../../../../src/app/todo/todo.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"todo-card\" #todoCard *ngIf=\"!showEditor\" (dblclick)=\"toggleEdit()\"\n     [ngClass]=\"{'green' :todo.status ==='completed' ,'orange' :todo.status ==='notCompleted' }\">\n    <div class=\"todo-close\">\n        <co-todo-delete [todoId]=\"todo._id\" (todoDeleted)=\"handleTodoDeleted('deletedz')\"></co-todo-delete>\n    </div>\n    <div class=\"todo-title\">\n        {{todo.title}}\n    </div>\n\n    <div class=\"todo-description\" [innerHtml]='todo.description'>\n\n    </div>\n    <div class=\"todo-author\">\n        ~ {{todo.author.username}}\n    </div>\n</div>\n\n<div class=\"todo-inline\" [ngClass]=\"{'green' :todo.status ==='completed' ,'orange' :todo.status ==='notCompleted' }\"\n     *ngIf=\"showEditor\">\n    <div class=\"todo-close\" (click)=\"showEditor=!showEditor\">close</div>\n\n    <form [formGroup]=\"todoForm\" (ngSubmit)=\"updateTodo(todoForm.value)\">\n        <div class=\"form-group\"\n             [ngClass]=\"{'has-error': todoForm.get('title').hasError('required') && todoForm.get('title').dirty || todoForm.get('title').hasError('required') && isSubmitted}\">\n            <label>Title</label>\n            <input class=\"form-control\" formControlName=\"title\" #titleInput>\n            <span class=\"small help-block\"\n                  *ngIf=\"todoForm.get('title').hasError('required') && todoForm.get('title').dirty || todoForm.get('title').hasError('required') && isSubmitted\">Please enter todo title</span>\n        </div>\n        <div class=\"form-group\">\n            <label>Status</label>\n            <div class=\"radio\">\n                <label class=\"radio-inline\">\n                    <input type=\"radio\" value=\"completed\" formControlName=\"status\"> Completed\n                </label>\n                <label class=\"radio-inline\">\n                    <input type=\"radio\" value=\"notCompleted\" formControlName=\"status\" checked>Not\n                    Completed\n                </label>\n            </div>\n        </div>\n\n        <div class=\"form-group\"\n             [ngClass]=\"{'has-error': todoForm.get('description').hasError('required') && todoForm.get('description').dirty || todoForm.get('description').hasError('required') && isSubmitted}\">\n            <label>Description</label>\n            <textarea class=\"form-control\" formControlName=\"description\"></textarea>\n            <span class=\"small help-block\"\n                  *ngIf=\"todoForm.get('description').hasError('required') && todoForm.get('description').dirty || todoForm.get('description').hasError('required') && isSubmitted\">Please enter description</span>\n        </div>\n\n        <div class=\"form-group\">\n            <button class=\"btn btn-primary\">Update</button>\n        </div>\n    </form>\n</div>"

/***/ }),

/***/ "../../../../../src/app/todo/todo.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".todo-card {\n  float: left;\n  position: relative;\n  width: 100%;\n  word-wrap: break-word;\n  background: transparent;\n  border: 1px solid;\n  background-clip: border-box;\n  border-radius: .15rem;\n  padding: 15px;\n  margin-bottom: 10px;\n  cursor: move; }\n  .todo-card.green {\n    border-color: #68B710; }\n  .todo-card.orange {\n    border-color: #F2AE2F; }\n  .todo-card .todo-close {\n    position: absolute;\n    right: 10px;\n    top: 5px;\n    float: right;\n    font-size: 21px;\n    font-weight: 700;\n    line-height: 1;\n    cursor: pointer; }\n  .todo-card .todo-description {\n    float: left;\n    width: 100%; }\n  .todo-card .todo-title {\n    float: left;\n    width: 100%;\n    font-weight: bold;\n    letter-spacing: 0.05rem;\n    text-transform: uppercase;\n    margin-bottom: 6px; }\n  .todo-card .todo-author {\n    float: right;\n    color: rgba(179, 178, 178, 0.8);\n    font-weight: 200; }\n\n.todo-inline {\n  float: left;\n  position: relative;\n  width: 100%;\n  word-wrap: break-word;\n  background: transparent;\n  border: 1px solid;\n  background-clip: border-box;\n  border-radius: .15rem;\n  padding: 15px;\n  margin-bottom: 10px; }\n  .todo-inline.orange {\n    border-color: #F2AE2F;\n    box-shadow: 0px 0px 13px 2px #f3b239; }\n  .todo-inline.green {\n    border-color: #68B710;\n    box-shadow: 0px 0px 13px 2px #6dc011; }\n  .todo-inline .todo-close {\n    position: absolute;\n    right: 10px;\n    top: 10px;\n    float: right;\n    line-height: 1;\n    cursor: pointer; }\n  .todo-inline .form-control {\n    padding-top: 18px;\n    padding-bottom: 18px; }\n  .todo-inline .form-group {\n    height: auto; }\n  .todo-inline label {\n    font-size: 14px; }\n  .todo-inline .btn-primary {\n    padding: 10px 35px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/todo/todo.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TodoComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_interfaces_todo__ = __webpack_require__("../../../../../src/app/shared/interfaces/todo.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_interfaces_todo___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__shared_interfaces_todo__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__todo_service__ = __webpack_require__("../../../../../src/app/todo/todo.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TodoComponent = (function () {
    function TodoComponent(fb, todoService) {
        this.fb = fb;
        this.todoService = todoService;
        this.todoUpdated = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.todoDeleted = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    TodoComponent.prototype.ngOnInit = function () {
        this.isSubmitted = false;
        this.showEditor = false;
        // Instantiate Reactive Form
        this.todoForm = this.fb.group({
            id: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* Validators */].required],
            title: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* Validators */].required],
            description: [''],
            status: ['', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* Validators */].required]]
        });
    };
    TodoComponent.prototype.toggleEdit = function () {
        this.showEditor = true;
        if (this.showEditor) {
            this.prefillForm();
        }
    };
    TodoComponent.prototype.prefillForm = function () {
        this.todoForm.setValue({
            id: this.todo._id,
            title: this.todo.title || '',
            description: this.todo.description || '',
            status: this.todo.status || '',
        });
    };
    /**
     * Updates a t\odo item
     * @param value
     */
    TodoComponent.prototype.updateTodo = function (value) {
        var _this = this;
        this.isSubmitted = true;
        if (this.todoForm.valid) {
            this.todoService.updateTodo(value)
                .subscribe(function (data) {
                switch (data.status) {
                    case 'success':
                        _this.showEditor = false;
                        _this.todoForm.reset();
                        // Emit event to be caught by the dashboard component
                        _this.todoUpdated.emit('updated');
                        break;
                    case 'error':
                        /*TODO -Add error message*/
                        break;
                    default:
                        break;
                }
            });
        }
    };
    /**
     * This is called when
     * a Todo is successfully deleted by
     * the delete component
     */
    TodoComponent.prototype.handleTodoDeleted = function () {
        // Event is bubbled up to the Dashboard Component where it is handled
        this.todoDeleted.emit();
    };
    return TodoComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__shared_interfaces_todo__["ITodo"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__shared_interfaces_todo__["ITodo"]) === "function" && _a || Object)
], TodoComponent.prototype, "todo", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('todoCard'),
    __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _b || Object)
], TodoComponent.prototype, "todoCard", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]) === "function" && _c || Object)
], TodoComponent.prototype, "todoUpdated", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]) === "function" && _d || Object)
], TodoComponent.prototype, "todoDeleted", void 0);
TodoComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'co-todo',
        template: __webpack_require__("../../../../../src/app/todo/todo.component.html"),
        styles: [__webpack_require__("../../../../../src/app/todo/todo.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_3__todo_service__["a" /* TodoService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__todo_service__["a" /* TodoService */]) === "function" && _f || Object])
], TodoComponent);

var _a, _b, _c, _d, _e, _f;
//# sourceMappingURL=todo.component.js.map

/***/ }),

/***/ "../../../../../src/app/todo/todo.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TodoModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__todo_component__ = __webpack_require__("../../../../../src/app/todo/todo.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__todo_add_todo_add_component__ = __webpack_require__("../../../../../src/app/todo/todo-add/todo-add.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_shared_module__ = __webpack_require__("../../../../../src/app/shared/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__todo_delete_todo_delete_component__ = __webpack_require__("../../../../../src/app/todo/todo-delete/todo-delete.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var TodoModule = (function () {
    function TodoModule() {
    }
    return TodoModule;
}());
TodoModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
            __WEBPACK_IMPORTED_MODULE_4__shared_shared_module__["a" /* SharedModule */]
        ],
        exports: [__WEBPACK_IMPORTED_MODULE_2__todo_component__["a" /* TodoComponent */], __WEBPACK_IMPORTED_MODULE_3__todo_add_todo_add_component__["a" /* TodoAddComponent */], __WEBPACK_IMPORTED_MODULE_5__todo_delete_todo_delete_component__["a" /* TodoDeleteComponent */]],
        declarations: [__WEBPACK_IMPORTED_MODULE_2__todo_component__["a" /* TodoComponent */], __WEBPACK_IMPORTED_MODULE_3__todo_add_todo_add_component__["a" /* TodoAddComponent */], __WEBPACK_IMPORTED_MODULE_5__todo_delete_todo_delete_component__["a" /* TodoDeleteComponent */]]
    })
], TodoModule);

//# sourceMappingURL=todo.module.js.map

/***/ }),

/***/ "../../../../../src/app/todo/todo.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TodoService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_services_data_service__ = __webpack_require__("../../../../../src/app/shared/services/data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_config__ = __webpack_require__("../../../../../src/app/app.config.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};




var TodoService = (function () {
    function TodoService(dataService, appConfig) {
        this.dataService = dataService;
        this.appConfig = appConfig;
    }
    TodoService.prototype.getTodos = function (skip, limit) {
        if (skip === void 0) { skip = 0; }
        if (limit === void 0) { limit = 0; }
        return this.dataService.get(this.appConfig.endpoint + this.appConfig.todos + ("?skip=" + skip + "&limit=" + limit))
            .map(function (resp) { return resp.data; });
    };
    TodoService.prototype.addTodo = function (body) {
        return this.dataService.put(this.appConfig.endpoint + this.appConfig.todo, body);
    };
    TodoService.prototype.updateTodo = function (body) {
        return this.dataService.put(this.appConfig.endpoint + this.appConfig.todo, body);
    };
    TodoService.prototype.deleteTodo = function (body) {
        return this.dataService.delete(this.appConfig.endpoint + this.appConfig.todo, body);
    };
    return TodoService;
}());
TodoService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __param(1, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_3__app_config__["a" /* APP_CONFIG */])),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__shared_services_data_service__["a" /* DataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__shared_services_data_service__["a" /* DataService */]) === "function" && _a || Object, Object])
], TodoService);

var _a;
//# sourceMappingURL=todo.service.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false,
    hmr: false,
    // APP Variable per environment
    endpoint: 'http://localhost:3000',
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/hmr.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export hmrBootstrap */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angularclass_hmr__ = __webpack_require__("../../../../@angularclass/hmr/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angularclass_hmr___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__angularclass_hmr__);


var hmrBootstrap = function (module, bootstrap) {
    var ngModule;
    module.hot.accept();
    bootstrap().then(function (mod) { return ngModule = mod; });
    module.hot.dispose(function () {
        var appRef = ngModule.injector.get(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ApplicationRef"]);
        var elements = appRef.components.map(function (c) { return c.location.nativeElement; });
        var makeVisible = Object(__WEBPACK_IMPORTED_MODULE_1__angularclass_hmr__["createNewHosts"])(elements);
        ngModule.destroy();
        makeVisible();
    });
};
//# sourceMappingURL=hmr.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__hmr__ = __webpack_require__("../../../../../src/hmr.ts");





if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
var bootstrap = function () {
    return Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
};
if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].hmr) {
    if (false) {
        hmrBootstrap(module, bootstrap);
    }
    else {
        console.error('HMR is not enabled for webpack-dev-server!');
        console.log('Are you using the --hmr flag for ng serve?');
    }
}
else {
    bootstrap();
}
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map