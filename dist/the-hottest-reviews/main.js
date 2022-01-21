(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
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
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _sauce_list_sauce_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./sauce-list/sauce-list.component */ "./src/app/sauce-list/sauce-list.component.ts");
/* harmony import */ var _sauce_form_sauce_form_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./sauce-form/sauce-form.component */ "./src/app/sauce-form/sauce-form.component.ts");
/* harmony import */ var _single_sauce_single_sauce_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./single-sauce/single-sauce.component */ "./src/app/single-sauce/single-sauce.component.ts");
/* harmony import */ var _auth_signup_signup_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./auth/signup/signup.component */ "./src/app/auth/signup/signup.component.ts");
/* harmony import */ var _auth_login_login_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./auth/login/login.component */ "./src/app/auth/login/login.component.ts");
/* harmony import */ var _services_auth_guard_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./services/auth-guard.service */ "./src/app/services/auth-guard.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var routes = [
    { path: 'signup', component: _auth_signup_signup_component__WEBPACK_IMPORTED_MODULE_5__["SignupComponent"] },
    { path: 'login', component: _auth_login_login_component__WEBPACK_IMPORTED_MODULE_6__["LoginComponent"] },
    { path: 'sauces', component: _sauce_list_sauce_list_component__WEBPACK_IMPORTED_MODULE_2__["SauceListComponent"], canActivate: [_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_7__["AuthGuard"]] },
    { path: 'sauce/:id', component: _single_sauce_single_sauce_component__WEBPACK_IMPORTED_MODULE_4__["SingleSauceComponent"], canActivate: [_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_7__["AuthGuard"]] },
    { path: 'new-sauce', component: _sauce_form_sauce_form_component__WEBPACK_IMPORTED_MODULE_3__["SauceFormComponent"], canActivate: [_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_7__["AuthGuard"]] },
    { path: 'modify-sauce/:id', component: _sauce_form_sauce_form_component__WEBPACK_IMPORTED_MODULE_3__["SauceFormComponent"], canActivate: [_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_7__["AuthGuard"]] },
    { path: '', pathMatch: 'full', redirectTo: 'sauces' },
    { path: '**', redirectTo: 'sauces' }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
            providers: [_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_7__["AuthGuard"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\r\n<div class=\"container\">\r\n  <router-outlet></router-outlet>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container {\n  position: relative;\n  width: 100%;\n  max-width: 1000px;\n  margin: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQjpcXERldiB3ZWJcXE9wZW5DbGFzc3Jvb21zXFxwcm9qZXRzXFxQcm9qZXQ2LXNvcGVja29rb1xcZHdqLXByb2pldDYvc3JjXFxhcHBcXGFwcC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsbUJBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0NDQ0QiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgbWF4LXdpZHRoOiAxMDAwcHg7XHJcbiAgbWFyZ2luOiBhdXRvO1xyXG59XHJcbiIsIi5jb250YWluZXIge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXgtd2lkdGg6IDEwMDBweDtcbiAgbWFyZ2luOiBhdXRvO1xufSJdfQ== */"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        })
    ], AppComponent);
    return AppComponent;
}());



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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _auth_signup_signup_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./auth/signup/signup.component */ "./src/app/auth/signup/signup.component.ts");
/* harmony import */ var _auth_login_login_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./auth/login/login.component */ "./src/app/auth/login/login.component.ts");
/* harmony import */ var _sauce_list_sauce_list_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./sauce-list/sauce-list.component */ "./src/app/sauce-list/sauce-list.component.ts");
/* harmony import */ var _single_sauce_single_sauce_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./single-sauce/single-sauce.component */ "./src/app/single-sauce/single-sauce.component.ts");
/* harmony import */ var _sauce_form_sauce_form_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./sauce-form/sauce-form.component */ "./src/app/sauce-form/sauce-form.component.ts");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _interceptors_auth_interceptor__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./interceptors/auth-interceptor */ "./src/app/interceptors/auth-interceptor.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _auth_signup_signup_component__WEBPACK_IMPORTED_MODULE_4__["SignupComponent"],
                _auth_login_login_component__WEBPACK_IMPORTED_MODULE_5__["LoginComponent"],
                _sauce_list_sauce_list_component__WEBPACK_IMPORTED_MODULE_6__["SauceListComponent"],
                _single_sauce_single_sauce_component__WEBPACK_IMPORTED_MODULE_7__["SingleSauceComponent"],
                _sauce_form_sauce_form_component__WEBPACK_IMPORTED_MODULE_8__["SauceFormComponent"],
                _header_header_component__WEBPACK_IMPORTED_MODULE_9__["HeaderComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_11__["ReactiveFormsModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_12__["BrowserAnimationsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_13__["MatProgressSpinnerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_13__["MatButtonModule"]
            ],
            providers: [{ provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HTTP_INTERCEPTORS"], useClass: _interceptors_auth_interceptor__WEBPACK_IMPORTED_MODULE_14__["AuthInterceptor"], multi: true }],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/auth/login/login.component.html":
/*!*************************************************!*\
  !*** ./src/app/auth/login/login.component.html ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-spinner *ngIf=\"loading\"></mat-spinner>\r\n<form [formGroup]=\"loginForm\" *ngIf=\"!loading\">\r\n  <div class=\"form-group\">\r\n    <label for=\"email\">Email</label>\r\n    <input type=\"email\" class=\"form-control\" id=\"email\" formControlName=\"email\">\r\n  </div>\r\n  <div class=\"form-group\">\r\n    <label for=\"password\">Password</label>\r\n    <input type=\"password\" class=\"form-control\" id=\"password\" formControlName=\"password\">\r\n  </div>\r\n  <button mat-raised-button color=\"primary\" [disabled]=\"loginForm.invalid\" (click)=\"onLogin()\">LOGIN</button>\r\n  <p class=\"text-danger\" *ngIf=\"errorMsg\">{{ errorMsg }}</p>\r\n</form>\r\n"

/***/ }),

/***/ "./src/app/auth/login/login.component.scss":
/*!*************************************************!*\
  !*** ./src/app/auth/login/login.component.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "form {\n  margin: 2em auto;\n  max-width: 750px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXV0aC9sb2dpbi9COlxcRGV2IHdlYlxcT3BlbkNsYXNzcm9vbXNcXHByb2pldHNcXFByb2pldDYtc29wZWNrb2tvXFxkd2otcHJvamV0Ni9zcmNcXGFwcFxcYXV0aFxcbG9naW5cXGxvZ2luLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9hdXRoL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsaUJBQUE7RUFDQSxpQkFBQTtDQ0NEIiwiZmlsZSI6InNyYy9hcHAvYXV0aC9sb2dpbi9sb2dpbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImZvcm0ge1xyXG4gIG1hcmdpbjogMmVtIGF1dG87XHJcbiAgbWF4LXdpZHRoOiA3NTBweDtcclxufVxyXG4iLCJmb3JtIHtcbiAgbWFyZ2luOiAyZW0gYXV0bztcbiAgbWF4LXdpZHRoOiA3NTBweDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/auth/login/login.component.ts":
/*!***********************************************!*\
  !*** ./src/app/auth/login/login.component.ts ***!
  \***********************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoginComponent = /** @class */ (function () {
    function LoginComponent(formBuilder, auth, router) {
        this.formBuilder = formBuilder;
        this.auth = auth;
        this.router = router;
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.loginForm = this.formBuilder.group({
            email: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email]],
            password: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
        });
    };
    LoginComponent.prototype.onLogin = function () {
        var _this = this;
        this.loading = true;
        var email = this.loginForm.get('email').value;
        var password = this.loginForm.get('password').value;
        this.auth.loginUser(email, password).then(function () {
            _this.loading = false;
            _this.router.navigate(['/sauces']);
        }).catch(function (error) {
            _this.loading = false;
            _this.errorMsg = error.message;
        });
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/auth/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.scss */ "./src/app/auth/login/login.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
            _services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/auth/signup/signup.component.html":
/*!***************************************************!*\
  !*** ./src/app/auth/signup/signup.component.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-spinner *ngIf=\"loading\"></mat-spinner>\r\n<form [formGroup]=\"signupForm\" *ngIf=\"!loading\">\r\n  <div class=\"form-group\">\r\n    <label for=\"email\">Email</label>\r\n    <input type=\"email\" class=\"form-control\" id=\"email\" formControlName=\"email\">\r\n  </div>\r\n  <div class=\"form-group\">\r\n    <label for=\"password\">Password</label>\r\n    <input type=\"password\" class=\"form-control\" id=\"password\" formControlName=\"password\">\r\n  </div>\r\n  <button mat-raised-button color=\"primary\" [disabled]=\"signupForm.invalid\" (click)=\"onSignup()\">SIGN UP</button>\r\n  <p class=\"text-danger\" *ngIf=\"errorMsg\">{{ errorMsg }}</p>\r\n</form>\r\n"

/***/ }),

/***/ "./src/app/auth/signup/signup.component.scss":
/*!***************************************************!*\
  !*** ./src/app/auth/signup/signup.component.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "form {\n  margin: 2em auto;\n  max-width: 750px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXV0aC9zaWdudXAvQjpcXERldiB3ZWJcXE9wZW5DbGFzc3Jvb21zXFxwcm9qZXRzXFxQcm9qZXQ2LXNvcGVja29rb1xcZHdqLXByb2pldDYvc3JjXFxhcHBcXGF1dGhcXHNpZ251cFxcc2lnbnVwLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9hdXRoL3NpZ251cC9zaWdudXAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxpQkFBQTtFQUNBLGlCQUFBO0NDQ0QiLCJmaWxlIjoic3JjL2FwcC9hdXRoL3NpZ251cC9zaWdudXAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJmb3JtIHtcclxuICBtYXJnaW46IDJlbSBhdXRvO1xyXG4gIG1heC13aWR0aDogNzUwcHg7XHJcbn1cclxuIiwiZm9ybSB7XG4gIG1hcmdpbjogMmVtIGF1dG87XG4gIG1heC13aWR0aDogNzUwcHg7XG59Il19 */"

/***/ }),

/***/ "./src/app/auth/signup/signup.component.ts":
/*!*************************************************!*\
  !*** ./src/app/auth/signup/signup.component.ts ***!
  \*************************************************/
/*! exports provided: SignupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupComponent", function() { return SignupComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SignupComponent = /** @class */ (function () {
    function SignupComponent(formBuilder, auth, router) {
        this.formBuilder = formBuilder;
        this.auth = auth;
        this.router = router;
    }
    SignupComponent.prototype.ngOnInit = function () {
        this.signupForm = this.formBuilder.group({
            email: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email]],
            password: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
        });
    };
    SignupComponent.prototype.onSignup = function () {
        var _this = this;
        this.loading = true;
        var email = this.signupForm.get('email').value;
        var password = this.signupForm.get('password').value;
        this.auth.createUser(email, password).then(function (response) {
            console.log(response.message);
            _this.auth.loginUser(email, password).then(function () {
                _this.loading = false;
                _this.router.navigate(['/sauces']);
            }).catch(function (error) {
                _this.loading = false;
                console.error(error);
                _this.errorMsg = error.message;
            });
        }).catch(function (error) {
            _this.loading = false;
            console.error(error);
            _this.errorMsg = error.message;
        });
    };
    SignupComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-signup',
            template: __webpack_require__(/*! ./signup.component.html */ "./src/app/auth/signup/signup.component.html"),
            styles: [__webpack_require__(/*! ./signup.component.scss */ "./src/app/auth/signup/signup.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
            _services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], SignupComponent);
    return SignupComponent;
}());



/***/ }),

/***/ "./src/app/header/header.component.html":
/*!**********************************************!*\
  !*** ./src/app/header/header.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav>\r\n  <div class=\"left-nav\">\r\n    <ul>\r\n      <li>\r\n        <a routerLink=\"sauces\" routerLinkActive=\"active\" *ngIf=\"isAuth\">\r\n          Toute les sauces\r\n        </a>\r\n      </li>\r\n      <li>\r\n        <a routerLink=\"new-sauce\" routerLinkActive=\"active\" *ngIf=\"isAuth\">\r\n          Ajouter une sauce\r\n        </a>\r\n      </li>\r\n    </ul>\r\n  </div>\r\n  <div class=\"logo\">\r\n    <div class=\"logo-image\">\r\n      <img src=\"../../assets/images/flame.png\">\r\n    </div>\r\n    <div class=\"logo-text\">\r\n      <h1>\r\n        Piquante\r\n      </h1>\r\n      <h5>\r\n        La meilleure application de notation de sauces\r\n      </h5>\r\n    </div>\r\n  </div>\r\n  <div class=\"right-nav\">\r\n    <ul>\r\n      <li>\r\n        <a routerLink=\"signup\" routerLinkActive=\"active\" *ngIf=\"!isAuth\">\r\n          Inscription\r\n        </a>\r\n      </li>\r\n      <li>\r\n        <a routerLink=\"login\" routerLinkActive=\"active\" *ngIf=\"!isAuth\">\r\n          Connexion\r\n        </a>\r\n      </li>\r\n      <li>\r\n        <a (click)=\"onLogout()\" *ngIf=\"isAuth\">\r\n          Déconnexion\r\n        </a>\r\n      </li>\r\n    </ul>\r\n  </div>\r\n</nav>\r\n"

/***/ }),

/***/ "./src/app/header/header.component.scss":
/*!**********************************************!*\
  !*** ./src/app/header/header.component.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "nav {\n  box-sizing: border-box;\n  width: 100%;\n  max-width: 1400px;\n  margin: auto;\n  position: relative;\n  top: 0;\n  left: 0;\n  display: flex;\n  padding: 20px;\n  justify-content: space-between;\n  border-bottom: thin solid black;\n}\n\nh1 {\n  font-weight: 700;\n  font-size: 2.4em;\n  margin: 0;\n}\n\nh5 {\n  font-size: 1.2em;\n  font-weight: 400;\n  margin: 0;\n}\n\n.logo {\n  display: flex;\n  align-items: center;\n}\n\n.logo-text {\n  text-align: center;\n}\n\n.logo-image {\n  margin-right: 1em;\n}\n\n.logo-image img {\n  height: 4.5em;\n}\n\n.left-nav, .right-nav {\n  align-self: center;\n  width: 30%;\n}\n\n.right-nav ul {\n  justify-content: flex-end;\n}\n\nul {\n  list-style: none;\n  padding: 0;\n  margin: 0;\n  display: flex;\n}\n\nli {\n  margin: 0 15px;\n}\n\na {\n  color: black;\n  font-weight: 400;\n  text-decoration: none;\n  cursor: pointer;\n}\n\na:hover {\n  text-decoration: underline;\n}\n\n.active {\n  font-weight: 700;\n  text-decoration: underline;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaGVhZGVyL0I6XFxEZXYgd2ViXFxPcGVuQ2xhc3Nyb29tc1xccHJvamV0c1xcUHJvamV0Ni1zb3BlY2tva29cXGR3ai1wcm9qZXQ2L3NyY1xcYXBwXFxoZWFkZXJcXGhlYWRlci5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHVCQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7RUFDQSxjQUFBO0VBQ0EsY0FBQTtFQUNBLCtCQUFBO0VBQ0EsZ0NBQUE7Q0NDRDs7QURFRDtFQUNFLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxVQUFBO0NDQ0Q7O0FERUQ7RUFDRSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0EsVUFBQTtDQ0NEOztBREVEO0VBQ0UsY0FBQTtFQUNBLG9CQUFBO0NDQ0Q7O0FERUQ7RUFDRSxtQkFBQTtDQ0NEOztBREVEO0VBSUUsa0JBQUE7Q0NGRDs7QUREQztFQUNFLGNBQUE7Q0NHSDs7QURFRDtFQUNFLG1CQUFBO0VBQ0EsV0FBQTtDQ0NEOztBREdDO0VBQ0UsMEJBQUE7Q0NBSDs7QURJRDtFQUNFLGlCQUFBO0VBQ0EsV0FBQTtFQUNBLFVBQUE7RUFDQSxjQUFBO0NDREQ7O0FESUQ7RUFDRSxlQUFBO0NDREQ7O0FESUQ7RUFDRSxhQUFBO0VBQ0EsaUJBQUE7RUFDQSxzQkFBQTtFQUNBLGdCQUFBO0NDREQ7O0FERUM7RUFDRSwyQkFBQTtDQ0FIOztBRElEO0VBQ0UsaUJBQUE7RUFDQSwyQkFBQTtDQ0REIiwiZmlsZSI6InNyYy9hcHAvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIm5hdiB7XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICB3aWR0aDogMTAwJTtcclxuICBtYXgtd2lkdGg6IDE0MDBweDtcclxuICBtYXJnaW46IGF1dG87XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHRvcDogMDtcclxuICBsZWZ0OiAwO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgcGFkZGluZzogMjBweDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgYm9yZGVyLWJvdHRvbTogdGhpbiBzb2xpZCBibGFjaztcclxufVxyXG5cclxuaDEge1xyXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgZm9udC1zaXplOiAyLjRlbTtcclxuICBtYXJnaW46IDA7XHJcbn1cclxuXHJcbmg1IHtcclxuICBmb250LXNpemU6IDEuMmVtO1xyXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgbWFyZ2luOiAwO1xyXG59XHJcblxyXG4ubG9nbyB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG4ubG9nby10ZXh0IHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5sb2dvLWltYWdlIHtcclxuICBpbWcge1xyXG4gICAgaGVpZ2h0OiA0LjVlbTtcclxuICB9XHJcbiAgbWFyZ2luLXJpZ2h0OiAxZW07XHJcbn1cclxuXHJcbi5sZWZ0LW5hdiwgLnJpZ2h0LW5hdiB7XHJcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xyXG4gIHdpZHRoOiAzMCU7XHJcbn1cclxuXHJcbi5yaWdodC1uYXYge1xyXG4gIHVsIHtcclxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XHJcbiAgfVxyXG59XHJcblxyXG51bCB7XHJcbiAgbGlzdC1zdHlsZTogbm9uZTtcclxuICBwYWRkaW5nOiAwO1xyXG4gIG1hcmdpbjogMDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG59XHJcblxyXG5saSB7XHJcbiAgbWFyZ2luOiAwIDE1cHg7XHJcbn1cclxuXHJcbmEge1xyXG4gIGNvbG9yOiBibGFjaztcclxuICBmb250LXdlaWdodDogNDAwO1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgJjpob3ZlciB7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcclxuICB9XHJcbn1cclxuXHJcbi5hY3RpdmUge1xyXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XHJcbn1cclxuIiwibmF2IHtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgd2lkdGg6IDEwMCU7XG4gIG1heC13aWR0aDogMTQwMHB4O1xuICBtYXJnaW46IGF1dG87XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICBkaXNwbGF5OiBmbGV4O1xuICBwYWRkaW5nOiAyMHB4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGJvcmRlci1ib3R0b206IHRoaW4gc29saWQgYmxhY2s7XG59XG5cbmgxIHtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgZm9udC1zaXplOiAyLjRlbTtcbiAgbWFyZ2luOiAwO1xufVxuXG5oNSB7XG4gIGZvbnQtc2l6ZTogMS4yZW07XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIG1hcmdpbjogMDtcbn1cblxuLmxvZ28ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4ubG9nby10ZXh0IHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4ubG9nby1pbWFnZSB7XG4gIG1hcmdpbi1yaWdodDogMWVtO1xufVxuLmxvZ28taW1hZ2UgaW1nIHtcbiAgaGVpZ2h0OiA0LjVlbTtcbn1cblxuLmxlZnQtbmF2LCAucmlnaHQtbmF2IHtcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xuICB3aWR0aDogMzAlO1xufVxuXG4ucmlnaHQtbmF2IHVsIHtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbn1cblxudWwge1xuICBsaXN0LXN0eWxlOiBub25lO1xuICBwYWRkaW5nOiAwO1xuICBtYXJnaW46IDA7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG5cbmxpIHtcbiAgbWFyZ2luOiAwIDE1cHg7XG59XG5cbmEge1xuICBjb2xvcjogYmxhY2s7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuYTpob3ZlciB7XG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xufVxuXG4uYWN0aXZlIHtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG59Il19 */"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/services/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(auth) {
        this.auth = auth;
    }
    HeaderComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.authSubscription = this.auth.isAuth$.subscribe(function (auth) {
            _this.isAuth = auth;
        });
    };
    HeaderComponent.prototype.onLogout = function () {
        this.auth.logout();
    };
    HeaderComponent.prototype.ngOnDestroy = function () {
        this.authSubscription.unsubscribe();
    };
    HeaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.scss */ "./src/app/header/header.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/interceptors/auth-interceptor.ts":
/*!**************************************************!*\
  !*** ./src/app/interceptors/auth-interceptor.ts ***!
  \**************************************************/
/*! exports provided: AuthInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthInterceptor", function() { return AuthInterceptor; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/services/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AuthInterceptor = /** @class */ (function () {
    function AuthInterceptor(auth) {
        this.auth = auth;
    }
    AuthInterceptor.prototype.intercept = function (req, next) {
        var authToken = this.auth.getToken();
        var newRequest = req.clone({
            headers: req.headers.set('Authorization', 'Bearer ' + authToken)
        });
        return next.handle(newRequest);
    };
    AuthInterceptor = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]])
    ], AuthInterceptor);
    return AuthInterceptor;
}());



/***/ }),

/***/ "./src/app/models/Sauce.model.ts":
/*!***************************************!*\
  !*** ./src/app/models/Sauce.model.ts ***!
  \***************************************/
/*! exports provided: Sauce */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Sauce", function() { return Sauce; });
var Sauce = /** @class */ (function () {
    function Sauce() {
    }
    return Sauce;
}());



/***/ }),

/***/ "./src/app/sauce-form/sauce-form.component.html":
/*!******************************************************!*\
  !*** ./src/app/sauce-form/sauce-form.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-spinner *ngIf=\"loading\"></mat-spinner>\r\n<form [formGroup]=\"sauceForm\" *ngIf=\"!loading\">\r\n  <div class=\"form-group\">\r\n    <label for=\"name\">Name</label>\r\n    <input type=\"text\" class=\"form-control\" id=\"name\" formControlName=\"name\">\r\n  </div>\r\n  <div class=\"form-group\">\r\n    <label for=\"manufacturer\">Manufacturer</label>\r\n    <input type=\"text\" class=\"form-control\" id=\"manufacturer\" formControlName=\"manufacturer\">\r\n  </div>\r\n  <div class=\"form-group\">\r\n    <label for=\"description\">Description</label>\r\n    <textarea class=\"form-control\" id=\"description\" rows=\"5\" formControlName=\"description\"></textarea>\r\n  </div>\r\n  <div class=\"form-group\">\r\n    <input type=\"file\" accept=\"image/*\" #imageInput (change)=\"onFileAdded($event)\">\r\n    <button mat-raised-button color=\"primary\" (click)=\"imageInput.click()\">ADD IMAGE</button>\r\n    <img [src]=\"imagePreview\" *ngIf=\"imagePreview\" style=\"max-height: 100px;display:block;margin-top:10px\">\r\n  </div>\r\n  <div class=\"form-group\">\r\n    <label for=\"main-pepper\">Main Pepper Ingredient</label>\r\n    <input type=\"text\" class=\"form-control\" id=\"main-pepper\" formControlName=\"mainPepper\">\r\n  </div>\r\n  <div class=\"form-group\">\r\n    <label for=\"heat\">Heat</label>\r\n    <div class=\"heat-container\">\r\n      <input type=\"range\" class=\"custom-range heat-range\" min=\"1\" max=\"10\" id=\"heat\" formControlName=\"heat\">\r\n      <input type=\"number\" class=\"form-control heat-reading\" formControlName=\"heatValue\">\r\n    </div>\r\n  </div>\r\n  <button mat-raised-button color=\"primary\" (click)=\"onSubmit()\" [disabled]=\"sauceForm.invalid\">SUBMIT</button>\r\n</form>\r\n"

/***/ }),

/***/ "./src/app/sauce-form/sauce-form.component.scss":
/*!******************************************************!*\
  !*** ./src/app/sauce-form/sauce-form.component.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "form {\n  margin: 2em auto;\n  max-width: 750px;\n}\n\n.heat-range {\n  width: 60%;\n  display: block;\n}\n\n.heat-container {\n  display: flex;\n}\n\n.heat-reading {\n  width: 5em;\n  margin-left: 1.5em;\n  background-color: white;\n}\n\ninput[type=file] {\n  display: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2F1Y2UtZm9ybS9COlxcRGV2IHdlYlxcT3BlbkNsYXNzcm9vbXNcXHByb2pldHNcXFByb2pldDYtc29wZWNrb2tvXFxkd2otcHJvamV0Ni9zcmNcXGFwcFxcc2F1Y2UtZm9ybVxcc2F1Y2UtZm9ybS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvc2F1Y2UtZm9ybS9zYXVjZS1mb3JtLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsaUJBQUE7RUFDQSxpQkFBQTtDQ0NEOztBREVEO0VBQ0UsV0FBQTtFQUNBLGVBQUE7Q0NDRDs7QURFRDtFQUNFLGNBQUE7Q0NDRDs7QURFRDtFQUNFLFdBQUE7RUFDQSxtQkFBQTtFQUNBLHdCQUFBO0NDQ0Q7O0FERUQ7RUFDRSxjQUFBO0NDQ0QiLCJmaWxlIjoic3JjL2FwcC9zYXVjZS1mb3JtL3NhdWNlLWZvcm0uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJmb3JtIHtcclxuICBtYXJnaW46IDJlbSBhdXRvO1xyXG4gIG1heC13aWR0aDogNzUwcHg7XHJcbn1cclxuXHJcbi5oZWF0LXJhbmdlIHtcclxuICB3aWR0aDogNjAlO1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG59XHJcblxyXG4uaGVhdC1jb250YWluZXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbn1cclxuXHJcbi5oZWF0LXJlYWRpbmcge1xyXG4gIHdpZHRoOiA1ZW07XHJcbiAgbWFyZ2luLWxlZnQ6IDEuNWVtO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG5pbnB1dFt0eXBlPVwiZmlsZVwiXSB7XHJcbiAgZGlzcGxheTogbm9uZTtcclxufVxyXG4iLCJmb3JtIHtcbiAgbWFyZ2luOiAyZW0gYXV0bztcbiAgbWF4LXdpZHRoOiA3NTBweDtcbn1cblxuLmhlYXQtcmFuZ2Uge1xuICB3aWR0aDogNjAlO1xuICBkaXNwbGF5OiBibG9jaztcbn1cblxuLmhlYXQtY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbn1cblxuLmhlYXQtcmVhZGluZyB7XG4gIHdpZHRoOiA1ZW07XG4gIG1hcmdpbi1sZWZ0OiAxLjVlbTtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG59XG5cbmlucHV0W3R5cGU9ZmlsZV0ge1xuICBkaXNwbGF5OiBub25lO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/sauce-form/sauce-form.component.ts":
/*!****************************************************!*\
  !*** ./src/app/sauce-form/sauce-form.component.ts ***!
  \****************************************************/
/*! exports provided: SauceFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SauceFormComponent", function() { return SauceFormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_sauces_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/sauces.service */ "./src/app/services/sauces.service.ts");
/* harmony import */ var _models_Sauce_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../models/Sauce.model */ "./src/app/models/Sauce.model.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/services/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var SauceFormComponent = /** @class */ (function () {
    function SauceFormComponent(formBuilder, route, router, sauces, auth) {
        this.formBuilder = formBuilder;
        this.route = route;
        this.router = router;
        this.sauces = sauces;
        this.auth = auth;
    }
    SauceFormComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.loading = true;
        this.route.params.subscribe(function (params) {
            if (!params.id) {
                _this.mode = 'new';
                _this.initEmptyForm();
                _this.loading = false;
            }
            else {
                _this.mode = 'edit';
                _this.sauces.getSauceById(params.id).then(function (sauce) {
                    _this.sauce = sauce;
                    _this.initModifyForm(sauce);
                    _this.loading = false;
                }).catch(function (error) {
                    _this.errorMsg = JSON.stringify(error);
                });
            }
        });
    };
    SauceFormComponent.prototype.initEmptyForm = function () {
        var _this = this;
        this.sauceForm = this.formBuilder.group({
            name: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            manufacturer: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            description: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            image: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            mainPepper: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            heat: [1, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            heatValue: [{ value: 1, disabled: true }]
        });
        this.sauceForm.get('heat').valueChanges.subscribe(function (value) {
            _this.sauceForm.get('heatValue').setValue(value);
        });
    };
    SauceFormComponent.prototype.initModifyForm = function (sauce) {
        var _this = this;
        this.sauceForm = this.formBuilder.group({
            name: [this.sauce.name, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            manufacturer: [this.sauce.manufacturer, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            description: [this.sauce.description, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            image: [this.sauce.imageUrl, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            mainPepper: [this.sauce.mainPepper, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            heat: [this.sauce.heat, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            heatValue: [{ value: this.sauce.heat, disabled: true }]
        });
        this.sauceForm.get('heat').valueChanges.subscribe(function (value) {
            _this.sauceForm.get('heatValue').setValue(value);
        });
        this.imagePreview = this.sauce.imageUrl;
    };
    SauceFormComponent.prototype.onSubmit = function () {
        var _this = this;
        this.loading = true;
        var newSauce = new _models_Sauce_model__WEBPACK_IMPORTED_MODULE_4__["Sauce"]();
        newSauce.name = this.sauceForm.get('name').value;
        newSauce.manufacturer = this.sauceForm.get('manufacturer').value;
        newSauce.description = this.sauceForm.get('description').value;
        newSauce.mainPepper = this.sauceForm.get('mainPepper').value;
        newSauce.heat = this.sauceForm.get('heat').value;
        newSauce.userId = this.auth.getUserId();
        if (this.mode === 'new') {
            this.sauces.createSauce(newSauce, this.sauceForm.get('image').value).then(function (response) {
                console.log(response.message);
                _this.loading = false;
                _this.router.navigate(['/sauces']);
            }).catch(function (error) {
                console.error(error);
                _this.loading = false;
                _this.errorMsg = error.message;
            });
        }
        else if (this.mode === 'edit') {
            this.sauces.modifySauce(this.sauce._id, newSauce, this.sauceForm.get('image').value).then(function (response) {
                console.log(response.message);
                _this.loading = false;
                _this.router.navigate(['/sauces']);
            }).catch(function (error) {
                console.error(error);
                _this.loading = false;
                _this.errorMsg = error.message;
            });
        }
    };
    SauceFormComponent.prototype.onFileAdded = function (event) {
        var _this = this;
        var file = event.target.files[0];
        this.sauceForm.get('image').setValue(file);
        this.sauceForm.updateValueAndValidity();
        var reader = new FileReader();
        reader.onload = function () {
            _this.imagePreview = reader.result;
        };
        reader.readAsDataURL(file);
    };
    SauceFormComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-sauce-form',
            template: __webpack_require__(/*! ./sauce-form.component.html */ "./src/app/sauce-form/sauce-form.component.html"),
            styles: [__webpack_require__(/*! ./sauce-form.component.scss */ "./src/app/sauce-form/sauce-form.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _services_sauces_service__WEBPACK_IMPORTED_MODULE_3__["SaucesService"],
            _services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"]])
    ], SauceFormComponent);
    return SauceFormComponent;
}());



/***/ }),

/***/ "./src/app/sauce-list/sauce-list.component.html":
/*!******************************************************!*\
  !*** ./src/app/sauce-list/sauce-list.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-spinner *ngIf=\"loading\"></mat-spinner>\r\n<p *ngIf=\"!loading && sauces.length <= 0\">\r\n  No sauces to display!\r\n</p>\r\n<p class=\"list-title\" *ngIf=\"!loading && sauces.length > 0\">THE SAUCES</p>\r\n<div class=\"sauce-list\" *ngIf=\"!loading && sauces.length  > 0\">\r\n  <div class=\"sauce-list-item\" *ngFor=\"let sauce of sauces\" (click)=\"onClickSauce(sauce._id)\">\r\n    <img [src]=\"sauce.imageUrl\">\r\n    <h4>{{ sauce.name | uppercase }}</h4>\r\n    <p>Heat: {{ sauce.heat }}/10</p>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/sauce-list/sauce-list.component.scss":
/*!******************************************************!*\
  !*** ./src/app/sauce-list/sauce-list.component.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".sauce-list {\n  display: flex;\n  justify-content: space-around;\n  flex-wrap: wrap;\n}\n\n.sauce-list-item {\n  text-align: center;\n  width: 220px;\n  transition: all 0.1s ease-in-out;\n  cursor: pointer;\n}\n\n.sauce-list-item img {\n  max-width: 200px;\n  max-height: 250px;\n}\n\n.sauce-list-item h4 {\n  margin: 0;\n  font-weight: 500;\n}\n\n.sauce-list-item p {\n  margin: 0;\n}\n\n.sauce-list-item:hover {\n  -webkit-transform: scale(1.05);\n          transform: scale(1.05);\n  box-shadow: 1px 1px 20px rgba(120, 120, 120, 0.3);\n}\n\n.list-title {\n  text-align: center;\n  margin: 2em auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2F1Y2UtbGlzdC9COlxcRGV2IHdlYlxcT3BlbkNsYXNzcm9vbXNcXHByb2pldHNcXFByb2pldDYtc29wZWNrb2tvXFxkd2otcHJvamV0Ni9zcmNcXGFwcFxcc2F1Y2UtbGlzdFxcc2F1Y2UtbGlzdC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvc2F1Y2UtbGlzdC9zYXVjZS1saXN0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsY0FBQTtFQUNBLDhCQUFBO0VBQ0EsZ0JBQUE7Q0NDRDs7QURFRDtFQUNFLG1CQUFBO0VBQ0EsYUFBQTtFQVlBLGlDQUFBO0VBQ0EsZ0JBQUE7Q0NWRDs7QURGQztFQUNFLGlCQUFBO0VBQ0Esa0JBQUE7Q0NJSDs7QURGQztFQUNFLFVBQUE7RUFDQSxpQkFBQTtDQ0lIOztBREZDO0VBQ0UsVUFBQTtDQ0lIOztBREFDO0VBQ0UsK0JBQUE7VUFBQSx1QkFBQTtFQUNBLGtEQUFBO0NDRUg7O0FERUQ7RUFDRSxtQkFBQTtFQUNBLGlCQUFBO0NDQ0QiLCJmaWxlIjoic3JjL2FwcC9zYXVjZS1saXN0L3NhdWNlLWxpc3QuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2F1Y2UtbGlzdCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcclxuICBmbGV4LXdyYXA6IHdyYXA7XHJcbn1cclxuXHJcbi5zYXVjZS1saXN0LWl0ZW0ge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB3aWR0aDogMjIwcHg7XHJcbiAgaW1nIHtcclxuICAgIG1heC13aWR0aDogMjAwcHg7XHJcbiAgICBtYXgtaGVpZ2h0OiAyNTBweDtcclxuICB9XHJcbiAgaDQge1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICB9XHJcbiAgcCB7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgfVxyXG4gIHRyYW5zaXRpb246IGFsbCAwLjFzIGVhc2UtaW4tb3V0O1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICAmOmhvdmVyIHtcclxuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4wNSk7XHJcbiAgICBib3gtc2hhZG93OiAxcHggMXB4IDIwcHggcmdiYSgxMjAsIDEyMCwgMTIwLCAwLjMpO1xyXG4gIH1cclxufVxyXG5cclxuLmxpc3QtdGl0bGUge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBtYXJnaW46IDJlbSBhdXRvO1xyXG59XHJcbiIsIi5zYXVjZS1saXN0IHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gIGZsZXgtd3JhcDogd3JhcDtcbn1cblxuLnNhdWNlLWxpc3QtaXRlbSB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgd2lkdGg6IDIyMHB4O1xuICB0cmFuc2l0aW9uOiBhbGwgMC4xcyBlYXNlLWluLW91dDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuLnNhdWNlLWxpc3QtaXRlbSBpbWcge1xuICBtYXgtd2lkdGg6IDIwMHB4O1xuICBtYXgtaGVpZ2h0OiAyNTBweDtcbn1cbi5zYXVjZS1saXN0LWl0ZW0gaDQge1xuICBtYXJnaW46IDA7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG59XG4uc2F1Y2UtbGlzdC1pdGVtIHAge1xuICBtYXJnaW46IDA7XG59XG4uc2F1Y2UtbGlzdC1pdGVtOmhvdmVyIHtcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjA1KTtcbiAgYm94LXNoYWRvdzogMXB4IDFweCAyMHB4IHJnYmEoMTIwLCAxMjAsIDEyMCwgMC4zKTtcbn1cblxuLmxpc3QtdGl0bGUge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbjogMmVtIGF1dG87XG59Il19 */"

/***/ }),

/***/ "./src/app/sauce-list/sauce-list.component.ts":
/*!****************************************************!*\
  !*** ./src/app/sauce-list/sauce-list.component.ts ***!
  \****************************************************/
/*! exports provided: SauceListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SauceListComponent", function() { return SauceListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_sauces_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/sauces.service */ "./src/app/services/sauces.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SauceListComponent = /** @class */ (function () {
    function SauceListComponent(sauce, router) {
        this.sauce = sauce;
        this.router = router;
    }
    SauceListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.loading = true;
        this.sauceSub = this.sauce.sauces$.subscribe(function (sauces) {
            _this.sauces = sauces;
            _this.loading = false;
            _this.errorMsg = null;
        }, function (error) {
            _this.errorMsg = JSON.stringify(error);
            _this.loading = false;
        });
        this.sauce.getSauces();
    };
    SauceListComponent.prototype.onClickSauce = function (id) {
        this.router.navigate(['sauce', id]);
    };
    SauceListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-sauce-list',
            template: __webpack_require__(/*! ./sauce-list.component.html */ "./src/app/sauce-list/sauce-list.component.html"),
            styles: [__webpack_require__(/*! ./sauce-list.component.scss */ "./src/app/sauce-list/sauce-list.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_sauces_service__WEBPACK_IMPORTED_MODULE_1__["SaucesService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], SauceListComponent);
    return SauceListComponent;
}());



/***/ }),

/***/ "./src/app/services/auth-guard.service.ts":
/*!************************************************!*\
  !*** ./src/app/services/auth-guard.service.ts ***!
  \************************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./auth.service */ "./src/app/services/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AuthGuard = /** @class */ (function () {
    function AuthGuard(auth, router) {
        this.auth = auth;
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function (route, state) {
        var _this = this;
        return rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"].create(function (observer) {
            _this.auth.isAuth$.subscribe(function (auth) {
                if (auth) {
                    observer.next(true);
                }
                else {
                    _this.router.navigate(['/login']);
                }
            });
        });
    };
    AuthGuard = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/services/auth.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/auth.service.ts ***!
  \******************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AuthService = /** @class */ (function () {
    function AuthService(http, router) {
        this.http = http;
        this.router = router;
        this.isAuth$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](false);
    }
    AuthService.prototype.createUser = function (email, password) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.post('https://adrien-auxent-so-pekocko.herokuapp.com/api/auth/signup', { email: email, password: password }).subscribe(function (response) {
                resolve(response);
            }, function (error) {
                reject(error);
            });
        });
    };
    AuthService.prototype.getToken = function () {
        return this.authToken;
    };
    AuthService.prototype.getUserId = function () {
        return this.userId;
    };
    AuthService.prototype.loginUser = function (email, password) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.post('https://adrien-auxent-so-pekocko.herokuapp.com/api/auth/login', { email: email, password: password }).subscribe(function (response) {
                _this.userId = response.userId;
                _this.authToken = response.token;
                _this.isAuth$.next(true);
                resolve();
            }, function (error) {
                reject(error);
            });
        });
    };
    AuthService.prototype.logout = function () {
        this.authToken = null;
        this.userId = null;
        this.isAuth$.next(false);
        this.router.navigate(['login']);
    };
    AuthService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/services/sauces.service.ts":
/*!********************************************!*\
  !*** ./src/app/services/sauces.service.ts ***!
  \********************************************/
/*! exports provided: SaucesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SaucesService", function() { return SaucesService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./auth.service */ "./src/app/services/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SaucesService = /** @class */ (function () {
    function SaucesService(http, auth) {
        this.http = http;
        this.auth = auth;
        this.sauces$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.tempSauces = [
            {
                _id: 'eizomfhazo',
                name: 'The Last Dab',
                manufacturer: 'Heatonist',
                description: 'CAUTION! The Last Dab—the hottest sauce on Hot Ones, known for turning guests and fans alike into stuttering, fire-breathing lunatics—just got even crazier. The Last Dab first took the world by storm as the only sauce made with Smokin\' Ed Currie\'s infamous "Pepper X." This XX-rated edition gets its one-two punch of heat from addition of the equally lethal "Chocolate Pepper X." All you need is a dab to light the inferno and experience the Hot Ones tradition.',
                heat: 10,
                likes: 100,
                dislikes: 0,
                imageUrl: 'https://cdn.shopify.com/s/files/1/2086/9287/products/LAstdabReduxx_1024x1024-1_1024x1024.jpg?v=1527778720',
                mainPepper: 'Pepper X',
                usersLiked: [],
                usersDisliked: []
            },
            {
                _id: 'oimhoiohmhoih',
                name: 'Los Calientes',
                manufacturer: 'Heatonist',
                description: 'Hot Ones is the show where celebrities divulge their deepest secrets while eating progressively hotter wings. The middle of the lineup is where hot sauce magic happens—the perfect sweet spot between maximum flavor and pleasing heat. Inspired by our favorite Cali-Mex flavors, Los Calientes surfs over the palate with a punchy, smoky blend...',
                heat: 5,
                likes: 100,
                dislikes: 0,
                imageUrl: 'https://cdn.shopify.com/s/files/1/2086/9287/products/LOS_CALIENTES1_1024x1024.jpg?v=1527709467',
                mainPepper: 'Serrano',
                usersLiked: [],
                usersDisliked: []
            },
            {
                _id: 'oimjoijlhui',
                name: 'Black Garlic',
                manufacturer: 'Bravado Spice Company',
                description: 'Team Bravado is back at it with an elevated offering where Carolina Reaper meets aged black garlic. The sweetness of the slowly cooked garlic tempers the initial bitter burn of the Reaper, but not for long... This is a biting hot sauce you\'ll want in marinades, sauces, dressings, and on those garlic wings! ',
                heat: 6,
                likes: 100,
                dislikes: 0,
                imageUrl: 'https://cdn.shopify.com/s/files/1/2086/9287/products/bravado-blackgarlichotsauce_1024x1024.jpg?v=1527270029',
                mainPepper: 'Carolina Reaper',
                usersLiked: [],
                usersDisliked: []
            },
            {
                _id: 'sildjhv',
                name: 'Smoked Onion',
                manufacturer: 'Butterfly Bakery',
                description: 'The makers at Butterfly Bakery smoke Vermont onions with maplewood to mix with red jalapeños for this sweet and tangy sauce. Great on everything from bagels lox & cream cheese to hummus to pork and whatever else you can name. The medium heat level makes it the perfect smoky sauce for anyone!',
                heat: 3,
                likes: 100,
                dislikes: 0,
                imageUrl: 'https://cdn.shopify.com/s/files/1/2086/9287/products/smokedonion1_1024x1024_copy_1024x1024.jpg?v=1538413599',
                mainPepper: 'Jalapeños',
                usersLiked: [],
                usersDisliked: []
            },
            {
                _id: 'eroimfgjlfh',
                name: 'Blair\'s Ultra Death Sauce',
                manufacturer: 'Blair\'s',
                description: 'Blair\'s Ultra Death has established itself as a bit of a legend within the hot sauce world.\n' +
                    '\n' +
                    'If there\'s one thing that creator Blair Lazar does well it\'s retaining the flavour in his super-hot sauces. They\'ll melt your face off for sure, but despite the extract they still taste damned fine.\n' +
                    '\n' +
                    'Just to emphasise the seriousness of the heat we\'re dealing with here, all Blair\'s super-hot sauces in the Death range now come in a nifty coffin box with his trademark skull keyring attached to the bottle.',
                heat: 9,
                likes: 100,
                dislikes: 0,
                imageUrl: 'https://www.chilliworld.com/content/images/thumbs/0000827_blairs-ultra-death-sauce-in-a-coffin_550.jpeg',
                mainPepper: 'Carolina Reaper',
                usersLiked: [],
                usersDisliked: []
            }
        ];
    }
    SaucesService.prototype.getSauces = function () {
        var _this = this;
        this.http.get('https://adrien-auxent-so-pekocko.herokuapp.com/api/sauces').subscribe(function (sauces) {
            _this.sauces$.next(sauces);
        }, function (error) {
            _this.sauces$.next([]);
            console.error(error);
        });
    };
    SaucesService.prototype.getSauceById = function (id) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.get('https://adrien-auxent-so-pekocko.herokuapp.com/api/sauces/' + id).subscribe(function (sauce) {
                resolve(sauce);
            }, function (error) {
                reject(error);
            });
        });
    };
    SaucesService.prototype.likeSauce = function (id, like) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.post('https://adrien-auxent-so-pekocko.herokuapp.com/api/sauces/' + id + '/like', {
                userId: _this.auth.getUserId(),
                like: like ? 1 : 0
            })
                .subscribe(function (response) {
                resolve(like);
            }, function (error) {
                reject(error);
            });
        });
    };
    SaucesService.prototype.dislikeSauce = function (id, dislike) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.post('https://adrien-auxent-so-pekocko.herokuapp.com/api/sauces/' + id + '/like', {
                userId: _this.auth.getUserId(),
                like: dislike ? -1 : 0
            })
                .subscribe(function (response) {
                resolve(dislike);
            }, function (error) {
                reject(error);
            });
        });
    };
    SaucesService.prototype.createSauce = function (sauce, image) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var formData = new FormData();
            formData.append('sauce', JSON.stringify(sauce));
            formData.append('image', image);
            _this.http.post('https://adrien-auxent-so-pekocko.herokuapp.com/api/sauces', formData).subscribe(function (response) {
                resolve(response);
            }, function (error) {
                reject(error);
            });
        });
    };
    SaucesService.prototype.modifySauce = function (id, sauce, image) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            if (typeof image === 'string') {
                _this.http.put('https://adrien-auxent-so-pekocko.herokuapp.com/api/sauces/' + id, sauce).subscribe(function (response) {
                    resolve(response);
                }, function (error) {
                    reject(error);
                });
            }
            else {
                var formData = new FormData();
                formData.append('sauce', JSON.stringify(sauce));
                formData.append('image', image);
                _this.http.put('https://adrien-auxent-so-pekocko.herokuapp.com/api/sauces/' + id, formData).subscribe(function (response) {
                    resolve(response);
                }, function (error) {
                    reject(error);
                });
            }
        });
    };
    SaucesService.prototype.deleteSauce = function (id) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.delete('https://adrien-auxent-so-pekocko.herokuapp.com/api/sauces/' + id).subscribe(function (response) {
                resolve(response);
            }, function (error) {
                reject(error);
            });
        });
    };
    SaucesService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"],
            _auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]])
    ], SaucesService);
    return SaucesService;
}());



/***/ }),

/***/ "./src/app/single-sauce/single-sauce.component.html":
/*!**********************************************************!*\
  !*** ./src/app/single-sauce/single-sauce.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-spinner *ngIf=\"loading\"></mat-spinner>\r\n<div class=\"sauce-container\" *ngIf=\"!loading\">\r\n  <img [src]=\"sauce?.imageUrl\" alt=\"\">\r\n  <div class=\"sauce-info\">\r\n    <h1 class=\"sauce-name\">{{ sauce?.name }}</h1>\r\n    <p class=\"manufacturer\">by {{ sauce?.manufacturer }}</p>\r\n    <h3>Description</h3>\r\n    <p>{{ sauce.description }}</p>\r\n    <div class=\"like-buttons\" *ngIf=\"!likePending\">\r\n      <div class=\"likes\">\r\n        <i [ngClass]=\"{ 'fas liked': liked, 'far': !liked, 'disabled': disliked }\" class=\"like fa-thumbs-up fa-lg\" (click)=\"onLike()\"></i>\r\n        <span>{{ sauce.likes }}</span>\r\n      </div>\r\n      <div class=\"dislikes\">\r\n        <i [ngClass]=\"{ 'fas disliked': disliked, 'far': !disliked, 'disabled': liked }\" class=\"dislike fa-thumbs-down fa-lg\" (click)=\"onDislike()\"></i>\r\n        <span>{{ sauce.dislikes }}</span>\r\n      </div>\r\n    </div>\r\n    <div class=\"like-pending\" *ngIf=\"likePending\">\r\n      <mat-spinner class=\"white-spinner\"></mat-spinner>\r\n    </div>\r\n    <div class=\"control-buttons\">\r\n      <button mat-raised-button (click)=\"onBack()\">BACK</button>\r\n      <button mat-raised-button color=\"primary\" (click)=\"onModify()\" *ngIf=\"userId === sauce.userId\">MODIFY</button>\r\n      <button mat-raised-button color=\"warn\" (click)=\"onDelete()\" *ngIf=\"userId === sauce.userId\">DELETE</button>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/single-sauce/single-sauce.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/single-sauce/single-sauce.component.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".sauce-container {\n  display: flex;\n}\n.sauce-container img {\n  max-height: 70vh;\n  flex: 1;\n}\n.sauce-info {\n  padding: 40px 20px;\n  flex: 1;\n}\n.manufacturer {\n  margin: 0;\n}\n.sauce-name {\n  margin: 0;\n}\n.like-buttons {\n  display: flex;\n}\n.like-buttons i {\n  margin-right: 0.5em;\n  cursor: pointer;\n}\n.likes, .dislikes {\n  margin: 0 0.4em;\n}\n.liked {\n  color: #33db00;\n}\n.disliked {\n  color: #db3300;\n}\n.like:hover {\n  color: #33db00;\n}\n.dislike {\n  -webkit-transform: scaleX(-1) translateY(5px);\n          transform: scaleX(-1) translateY(5px);\n}\n.dislike:hover {\n  color: #db3300;\n}\n.disabled {\n  cursor: none;\n  color: #bebebe;\n}\n.disabled:hover {\n  color: #bebebe;\n}\n.control-buttons button {\n  margin: 1em 1em 0 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2luZ2xlLXNhdWNlL0I6XFxEZXYgd2ViXFxPcGVuQ2xhc3Nyb29tc1xccHJvamV0c1xcUHJvamV0Ni1zb3BlY2tva29cXGR3ai1wcm9qZXQ2L3NyY1xcYXBwXFxzaW5nbGUtc2F1Y2VcXHNpbmdsZS1zYXVjZS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvc2luZ2xlLXNhdWNlL3NpbmdsZS1zYXVjZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGNBQUE7Q0NDRDtBREFDO0VBQ0UsaUJBQUE7RUFDQSxRQUFBO0NDRUg7QURFRDtFQUNFLG1CQUFBO0VBQ0EsUUFBQTtDQ0NEO0FERUQ7RUFDRSxVQUFBO0NDQ0Q7QURFRDtFQUNFLFVBQUE7Q0NDRDtBREVEO0VBQ0UsY0FBQTtDQ0NEO0FEQUM7RUFDRSxvQkFBQTtFQUNBLGdCQUFBO0NDRUg7QURFRDtFQUNFLGdCQUFBO0NDQ0Q7QURFRDtFQUNFLGVBQUE7Q0NDRDtBREVEO0VBQ0UsZUFBQTtDQ0NEO0FER0M7RUFDRSxlQUFBO0NDQUg7QURJRDtFQUNFLDhDQUFBO1VBQUEsc0NBQUE7Q0NERDtBREVDO0VBQ0UsZUFBQTtDQ0FIO0FESUQ7RUFDRSxhQUFBO0VBSUEsZUFBQTtDQ0pEO0FEQ0M7RUFDRSxlQUFBO0NDQ0g7QURLQztFQUNFLG9CQUFBO0NDRkgiLCJmaWxlIjoic3JjL2FwcC9zaW5nbGUtc2F1Y2Uvc2luZ2xlLXNhdWNlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNhdWNlLWNvbnRhaW5lciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBpbWcge1xyXG4gICAgbWF4LWhlaWdodDogNzB2aDtcclxuICAgIGZsZXg6IDE7XHJcbiAgfVxyXG59XHJcblxyXG4uc2F1Y2UtaW5mbyB7XHJcbiAgcGFkZGluZzogNDBweCAyMHB4O1xyXG4gIGZsZXg6IDE7XHJcbn1cclxuXHJcbi5tYW51ZmFjdHVyZXIge1xyXG4gIG1hcmdpbjogMDtcclxufVxyXG5cclxuLnNhdWNlLW5hbWUge1xyXG4gIG1hcmdpbjogMDtcclxufVxyXG5cclxuLmxpa2UtYnV0dG9ucyB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBpIHtcclxuICAgIG1hcmdpbi1yaWdodDogMC41ZW07XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgfVxyXG59XHJcblxyXG4ubGlrZXMsIC5kaXNsaWtlcyB7XHJcbiAgbWFyZ2luOiAwIDAuNGVtO1xyXG59XHJcblxyXG4ubGlrZWQge1xyXG4gIGNvbG9yOiByZ2JhKDUxLCAyMTksIDAsIDEpO1xyXG59XHJcblxyXG4uZGlzbGlrZWQge1xyXG4gIGNvbG9yOiByZ2JhKDIxOSwgNTEsIDAsIDEpO1xyXG59XHJcblxyXG4ubGlrZSB7XHJcbiAgJjpob3ZlciB7XHJcbiAgICBjb2xvcjogcmdiYSg1MSwgMjE5LCAwLCAxKTtcclxuICB9XHJcbn1cclxuXHJcbi5kaXNsaWtlIHtcclxuICB0cmFuc2Zvcm06IHNjYWxlWCgtMSkgdHJhbnNsYXRlWSg1cHgpO1xyXG4gICY6aG92ZXIge1xyXG4gICAgY29sb3I6IHJnYmEoMjE5LCA1MSwgMCwgMSk7XHJcbiAgfVxyXG59XHJcblxyXG4uZGlzYWJsZWQge1xyXG4gIGN1cnNvcjogbm9uZTtcclxuICAmOmhvdmVyIHtcclxuICAgIGNvbG9yOiByZ2JhKDE5MCwgMTkwLCAxOTAsIDEpO1xyXG4gIH1cclxuICBjb2xvcjogcmdiYSgxOTAsIDE5MCwgMTkwLCAxKTtcclxufVxyXG5cclxuLmNvbnRyb2wtYnV0dG9ucyB7XHJcbiAgYnV0dG9uIHtcclxuICAgIG1hcmdpbjogMWVtIDFlbSAwIDA7XHJcbiAgfVxyXG59XHJcbiIsIi5zYXVjZS1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xufVxuLnNhdWNlLWNvbnRhaW5lciBpbWcge1xuICBtYXgtaGVpZ2h0OiA3MHZoO1xuICBmbGV4OiAxO1xufVxuXG4uc2F1Y2UtaW5mbyB7XG4gIHBhZGRpbmc6IDQwcHggMjBweDtcbiAgZmxleDogMTtcbn1cblxuLm1hbnVmYWN0dXJlciB7XG4gIG1hcmdpbjogMDtcbn1cblxuLnNhdWNlLW5hbWUge1xuICBtYXJnaW46IDA7XG59XG5cbi5saWtlLWJ1dHRvbnMge1xuICBkaXNwbGF5OiBmbGV4O1xufVxuLmxpa2UtYnV0dG9ucyBpIHtcbiAgbWFyZ2luLXJpZ2h0OiAwLjVlbTtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4ubGlrZXMsIC5kaXNsaWtlcyB7XG4gIG1hcmdpbjogMCAwLjRlbTtcbn1cblxuLmxpa2VkIHtcbiAgY29sb3I6ICMzM2RiMDA7XG59XG5cbi5kaXNsaWtlZCB7XG4gIGNvbG9yOiAjZGIzMzAwO1xufVxuXG4ubGlrZTpob3ZlciB7XG4gIGNvbG9yOiAjMzNkYjAwO1xufVxuXG4uZGlzbGlrZSB7XG4gIHRyYW5zZm9ybTogc2NhbGVYKC0xKSB0cmFuc2xhdGVZKDVweCk7XG59XG4uZGlzbGlrZTpob3ZlciB7XG4gIGNvbG9yOiAjZGIzMzAwO1xufVxuXG4uZGlzYWJsZWQge1xuICBjdXJzb3I6IG5vbmU7XG4gIGNvbG9yOiAjYmViZWJlO1xufVxuLmRpc2FibGVkOmhvdmVyIHtcbiAgY29sb3I6ICNiZWJlYmU7XG59XG5cbi5jb250cm9sLWJ1dHRvbnMgYnV0dG9uIHtcbiAgbWFyZ2luOiAxZW0gMWVtIDAgMDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/single-sauce/single-sauce.component.ts":
/*!********************************************************!*\
  !*** ./src/app/single-sauce/single-sauce.component.ts ***!
  \********************************************************/
/*! exports provided: SingleSauceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SingleSauceComponent", function() { return SingleSauceComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_sauces_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/sauces.service */ "./src/app/services/sauces.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/services/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SingleSauceComponent = /** @class */ (function () {
    function SingleSauceComponent(sauces, route, auth, router) {
        this.sauces = sauces;
        this.route = route;
        this.auth = auth;
        this.router = router;
    }
    SingleSauceComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.userId = this.auth.getUserId();
        this.loading = true;
        this.route.params.subscribe(function (params) {
            _this.sauces.getSauceById(params.id).then(function (sauce) {
                _this.sauce = sauce;
                _this.loading = false;
                if (sauce.usersLiked.find(function (user) { return user === _this.userId; })) {
                    _this.liked = true;
                }
                else if (sauce.usersDisliked.find(function (user) { return user === _this.userId; })) {
                    _this.disliked = true;
                }
            });
        });
        this.userId = this.auth.getUserId();
    };
    SingleSauceComponent.prototype.onLike = function () {
        var _this = this;
        if (this.disliked) {
            return 0;
        }
        this.likePending = true;
        this.sauces.likeSauce(this.sauce._id, !this.liked).then(function (liked) {
            _this.likePending = false;
            _this.liked = liked;
            if (liked) {
                _this.sauce.likes++;
            }
            else {
                _this.sauce.likes--;
            }
        });
    };
    SingleSauceComponent.prototype.onDislike = function () {
        var _this = this;
        if (this.liked) {
            return 0;
        }
        this.likePending = true;
        this.sauces.dislikeSauce(this.sauce._id, !this.disliked).then(function (disliked) {
            _this.likePending = false;
            _this.disliked = disliked;
            if (disliked) {
                _this.sauce.dislikes++;
            }
            else {
                _this.sauce.dislikes--;
            }
        });
    };
    SingleSauceComponent.prototype.onBack = function () {
        this.router.navigate(['/sauces']);
    };
    SingleSauceComponent.prototype.onModify = function () {
        this.router.navigate(['/modify-sauce', this.sauce._id]);
    };
    SingleSauceComponent.prototype.onDelete = function () {
        var _this = this;
        this.loading = true;
        this.sauces.deleteSauce(this.sauce._id).then(function (response) {
            console.log(response.message);
            _this.loading = false;
            _this.router.navigate(['/sauces']);
        }).catch(function (error) {
            _this.loading = false;
            _this.errorMessage = error.message;
            console.error(error);
        });
    };
    SingleSauceComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-single-sauce',
            template: __webpack_require__(/*! ./single-sauce.component.html */ "./src/app/single-sauce/single-sauce.component.html"),
            styles: [__webpack_require__(/*! ./single-sauce.component.scss */ "./src/app/single-sauce/single-sauce.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_sauces_service__WEBPACK_IMPORTED_MODULE_1__["SaucesService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], SingleSauceComponent);
    return SingleSauceComponent;
}());



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
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! B:\Dev web\OpenClassrooms\projets\Projet6-sopeckoko\dwj-projet6\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map