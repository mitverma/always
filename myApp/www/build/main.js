webpackJsonp([9],{

/***/ 108:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__signup_signup__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_all_post_all_post__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_forms__ = __webpack_require__(12);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







/**
 * Generated class for the LoginPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var LoginPage = (function () {
    function LoginPage(navCtrl, navParams, menu, FormBuilder, http, loginProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.menu = menu;
        this.FormBuilder = FormBuilder;
        this.http = http;
        this.loginProvider = loginProvider;
        this.loginForm = {};
    }
    LoginPage.prototype.signupRedirect = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__signup_signup__["a" /* SignupPage */]);
    };
    LoginPage.prototype.homeRoute = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */]);
    };
    LoginPage.prototype.login = function (loginForm) {
        var _this = this;
        console.log(loginForm, 'loginForm');
        // let loginUrl = https://aquatatva.herokuapp.com/api/login?email='+loginForm.email+'&password='+loginForm.password
        this.http.post('https://aquatatva.herokuapp.com/api/login?email=' + loginForm.email + '&password=' + loginForm.password + '').map(function (res) { return res.json(); }).subscribe(function (data) {
            if (data) {
                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */]);
                localStorage.setItem('token', data.token);
                console.log(localStorage.getItem('token'), 'token');
            }
            else {
            }
        });
    };
    // login(loginForm){
    //   this.loginProvider.loginView(loginForm).subscribe(data=>{
    //     if(data){
    //       this.navCtrl.setRoot(HomePage); 
    //       localStorage.setItem('token', data.token);
    //       console.log(localStorage.getItem('token'),'token');
    //     }else {
    //     }
    //   })
    // }
    LoginPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad LoginPage');
        this.menu.enable(false);
    };
    LoginPage.prototype.loginSwipe = function ($event) {
        console.log($event, 'event');
    };
    return LoginPage;
}());
LoginPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-login',template:/*ion-inline-start:"C:\xampp\htdocs\always\myApp\src\pages\login\login.html"*/'<!--\n  Generated template for the LoginPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <!-- <ion-navbar>\n    <ion-title>Login</ion-title>\n  </ion-navbar> -->\n  <!-- <ion-navbar>\n  	<button ion-button menuToggle>\n  		<ion-icon name="menu"></ion-icon>\n  	</button>\n  	<ion-title>Home</ion-title>\n  </ion-navbar> -->\n</ion-header>\n\n\n<ion-content class="loginpage-content">\n	<div class="bg-gradient"></div>\n	<!-- <div class="login-page">\n			<div class="login-form">\n			<h3 class="login-title color-dark-blue">Log in</h3>\n			<form action="">\n				<div class="form-group email">\n					<span class="icon-set"><i class="fa fa-envelope color-dark-blue"></i></span>\n					<input type="email" class="form-control" placeholder="Enter Email Address">\n				</div>\n				<div class="form-group password">\n					<span class="icon-set"><i class="fa fa-lock color-dark-blue"></i></span>\n					<input type="password" class="form-control" placeholder="Enter Password">\n				</div>\n				<div class="forgot">\n					<span>Forgot Password ?</span>\n				</div>\n				<div class="login-button">\n					<button class="btn btn-blue-outline">Log in</button>\n				</div>\n			</form>			\n		</div>\n	</div>\n	<div class="signup-section">\n		<div class="signup-form">\n			<h3 class="signup-title">Sign up</h3>\n			<form action="">\n				<div class="form-group signup-input">\n					<span class="icon-set"><i class="color-dark-blue"></i></span>\n					<input type="text" class="form-control" placeholder="Username">\n				</div>\n				<div class="form-group signup-input">\n					<span class="icon-set"><i class="color-dark-blue"></i></span>\n					<input type="text" class="form-control" placeholder="Mobile No.">\n				</div>\n				<div class="form-group signup-input">\n					<span class="icon-set"><i class="color-dark-blue"></i></span>\n					<input type="text" class="form-control" placeholder="Email Address">\n				</div>\n				<div class="form-group signup-input">\n					<span class="icon-set"><i class="color-dark-blue"></i></span>\n					<input type="text" class="form-control" placeholder="Password">\n				</div>\n				<div class="signup-button">\n					<button class="btn btn-cream-outline">Sign Up</button>\n				</div>\n				<div class="other-login">\n					<span>OR <br>Sign Up Using</span>\n				</div>\n			</form>\n		</div>\n	</div>\n	<div class="circular-menu">\n		<div class="open-menu">\n			<span class="menu-option">+</span>\n			<ul>\n				<li><a href="">1</a></li>\n				<li><a href="">2</a></li>\n				<li><a href="">3</a></li>\n				<li><a href="">4</a></li>\n				<li><a href="">5</a></li>\n				<li><a href="">6</a></li>\n			</ul>\n		</div>		\n	</div> -->\n	<div class="login-page">\n		<div class="logo">\n			<h1><img src="assets/img/logo.png" alt=""></h1>\n		</div>\n		<!-- login form -->\n		<div class="login-form">\n			<ion-grid>\n				<ion-row>\n					<ion-col col-1></ion-col>\n					<ion-col col-10>\n						<form #loginForm ="ngForm" (ngSubmit)="login(loginForm.value)">\n							<div class="form-group email">\n								<span class="icon-set"><img src="assets/img/close-envelope.png" alt="Email" height="20"></span>\n								<input type="email" class="form-control" placeholder="Enter Email Address" name="email" [(ngModel)]="loginForm.email" #email ="ngModel" required>\n								<div class="error-display" *ngIf="email.errors && (email.dirty || email.touched)">\n									<div [hidden]="!email.errors.required">\n										Please Enter the Email!\n									</div>\n								</div>\n							</div>\n							<div class="form-group password">\n								<span class="icon-set"><img src="assets/img/padlock.png" alt="Password" height="20"></span>\n								<input type="password" class="form-control" placeholder="Enter Password" name="password" [(ngModel)]="loginForm.password" #password="ngModel" required>\n								<div class="error-display" *ngIf="password.errors && (password.dirty || password.touched)">\n									<div [hidden]="!password.errors.required">\n										Please Enter the Password!\n									</div>\n								</div>\n							</div>\n							<div class="forgot-password">\n								<span>Forgot Password ?</span>\n							</div>\n							<div class="login-button">\n								<button class="btn btn-blue-outline" [disabled]="!loginForm.valid">Log in</button>\n							</div>\n						</form>						\n						<span class="seperater">OR</span>\n						<div class="login-with">\n							<span class="login-strip">Login with</span>\n							<div class="social-logins">\n								<span><img src="assets/img/facebook.png" alt="Facebook" class="img-responsive" width="50"></span>\n								<span><img src="assets/img/google-plus.png" alt="Google" class="img-responsive" width="50"></span>\n							</div>\n						</div>\n					</ion-col>\n					<ion-col col-1></ion-col>\n				</ion-row>\n			</ion-grid>\n			<div class="sign-up">\n				<button class="signup-button" (click)="signupRedirect()">Sign Up</button>\n			</div>\n		</div>\n		<!-- login form end-->\n	</div>\n</ion-content>\n'/*ion-inline-end:"C:\xampp\htdocs\always\myApp\src\pages\login\login.html"*/,
        providers: [__WEBPACK_IMPORTED_MODULE_5__providers_all_post_all_post__["a" /* AllPostProvider */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* MenuController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* MenuController */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_6__angular_forms__["a" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__angular_forms__["a" /* FormBuilder */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_4__angular_http__["a" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_http__["a" /* Http */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_5__providers_all_post_all_post__["a" /* AllPostProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__providers_all_post_all_post__["a" /* AllPostProvider */]) === "function" && _f || Object])
], LoginPage);

var _a, _b, _c, _d, _e, _f;
//# sourceMappingURL=login.js.map

/***/ }),

/***/ 109:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfilePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the ProfilePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var ProfilePage = (function () {
    function ProfilePage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    ProfilePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ProfilePage');
    };
    return ProfilePage;
}());
ProfilePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-profile',template:/*ion-inline-start:"C:\xampp\htdocs\always\myApp\src\pages\profile\profile.html"*/'<!--\n  Generated template for the ProfilePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n	<ion-navbar>\n		<button ion-button menuToggle>\n			<ion-icon name="menu"></ion-icon>\n		</button>\n		<ion-title>\n			<img src="assets/img/header-logo.png" alt="" class="img-responsive header-logo">\n		</ion-title>\n	</ion-navbar>\n</ion-header>\n\n\n<ion-content>\n	<div class="bg-gradient"></div>\n	<div class="logo">\n		<h1><img src="assets/img/logo.png" alt=""></h1>\n	</div>\n	<ion-grid>\n		<ion-row>\n			<ion-col col-1></ion-col>\n			<ion-col col-10>\n				<div class="user-profile">\n					<form #userForm="ngForm" (ngSubmit)="userProfile(userForm.value)">\n						<div class="form-group input-all">\n							<span class="icon-set"><img src="assets/img/man-user.png" alt="" height="20"></span>\n							<input type="text" class="form-control" placeholder="Name" name="name" [(ngModel)]="userForm.name" #name="ngModel" required>\n							<div class="error-display" *ngIf="name.errors && (name.dirty || name.touched)">\n								<div [hidden]="!name.errors.required">\n									Please Enter the name!\n								</div>\n							</div>\n						</div>\n						<div class="form-group input-all">\n							<span class="icon-set"><img src="assets/img/close-envelope.png" alt="" height="20"></span>\n							<input type="text" class="form-control" placeholder="Email Id" name="email" [(ngModel)]="userForm.email" #email="ngModel" required>\n							<div class="error-display" *ngIf="email.errors && (email.dirty || email.touched)">\n								<div [hidden]="!email.errors.required">\n									Please Enter the Email!\n								</div>\n							</div>\n						</div>\n						<div class="form-group input-all">\n							<span class="icon-set"><img src="assets/img/icon.png" alt="" height="20"></span>\n							<input type="number" class="form-control" placeholder="Contact No." name="contact" [(ngModel)]="userForm.contact" #contact="ngModel" required>\n							<div class="error-display" *ngIf="contact.errors && (contact.dirty || contact.touched)">\n								<div [hidden]="!contact.errors.required">\n									Please Enter the Number!\n								</div>\n							</div>\n						</div>\n						<div class="form-group input-all">\n							<span class="icon-set"><img src="assets/img/man-user.png" alt="" height="20"></span>\n							<textarea type="text" class="form-control" placeholder="Address" name="address" [(ngModel)]="userForm.address" #address="ngModel" required></textarea>\n							<div class="error-display" *ngIf="address.errors && (address.dirty || address.touched)">\n								<div [hidden]="!address.errors.required">\n									Please Enter the Address!\n								</div>\n							</div>\n						</div>\n						<div class="login-button submit-button">\n							<button class="btn btn-blue-outline" [disabled]="!userForm.valid">Submit</button>\n						</div>\n					</form>\n				</div>\n			</ion-col>\n			<ion-col col-1></ion-col>\n		</ion-row>\n	</ion-grid>\n\n</ion-content>\n'/*ion-inline-end:"C:\xampp\htdocs\always\myApp\src\pages\profile\profile.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
], ProfilePage);

//# sourceMappingURL=profile.js.map

/***/ }),

/***/ 118:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 118;

/***/ }),

/***/ 160:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/contactus/contactus.module": [
		274,
		8
	],
	"../pages/faq/faq.module": [
		276,
		7
	],
	"../pages/login/login.module": [
		278,
		6
	],
	"../pages/order/order.module": [
		277,
		5
	],
	"../pages/profile/profile.module": [
		282,
		4
	],
	"../pages/signup/signup.module": [
		279,
		3
	],
	"../pages/support/support.module": [
		275,
		2
	],
	"../pages/usage/usage.module": [
		281,
		1
	],
	"../pages/videos/videos.module": [
		280,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 160;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 204:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(223);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 223:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__(264);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_home_home__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_list_list__ = __webpack_require__(273);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_login_login__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_contactus_contactus__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_support_support__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_faq_faq__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_order_order__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_signup_signup__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_videos_videos__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_usage_usage__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_profile_profile__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__ionic_native_status_bar__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__ionic_native_splash_screen__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__providers_all_post_all_post__ = __webpack_require__(29);
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
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_5__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_6__pages_list_list__["a" /* ListPage */],
            __WEBPACK_IMPORTED_MODULE_7__pages_login_login__["a" /* LoginPage */],
            __WEBPACK_IMPORTED_MODULE_8__pages_contactus_contactus__["a" /* ContactusPage */],
            __WEBPACK_IMPORTED_MODULE_9__pages_support_support__["a" /* SupportPage */],
            __WEBPACK_IMPORTED_MODULE_10__pages_faq_faq__["a" /* FaqPage */],
            __WEBPACK_IMPORTED_MODULE_11__pages_order_order__["a" /* OrderPage */],
            __WEBPACK_IMPORTED_MODULE_12__pages_signup_signup__["a" /* SignupPage */],
            __WEBPACK_IMPORTED_MODULE_13__pages_videos_videos__["a" /* VideosPage */],
            __WEBPACK_IMPORTED_MODULE_14__pages_usage_usage__["a" /* UsagePage */],
            __WEBPACK_IMPORTED_MODULE_15__pages_profile_profile__["a" /* ProfilePage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */], {}, {
                links: [
                    { loadChildren: '../pages/contactus/contactus.module#ContactusPageModule', name: 'ContactusPage', segment: 'contactus', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/support/support.module#SupportPageModule', name: 'SupportPage', segment: 'support', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/faq/faq.module#FaqPageModule', name: 'FaqPage', segment: 'faq', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/order/order.module#OrderPageModule', name: 'OrderPage', segment: 'order', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/signup/signup.module#SignupPageModule', name: 'SignupPage', segment: 'signup', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/videos/videos.module#VideosPageModule', name: 'VideosPage', segment: 'videos', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/usage/usage.module#UsagePageModule', name: 'UsagePage', segment: 'usage', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/profile/profile.module#ProfilePageModule', name: 'ProfilePage', segment: 'profile', priority: 'low', defaultHistory: [] }
                ]
            }),
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_5__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_6__pages_list_list__["a" /* ListPage */],
            __WEBPACK_IMPORTED_MODULE_7__pages_login_login__["a" /* LoginPage */],
            __WEBPACK_IMPORTED_MODULE_8__pages_contactus_contactus__["a" /* ContactusPage */],
            __WEBPACK_IMPORTED_MODULE_9__pages_support_support__["a" /* SupportPage */],
            __WEBPACK_IMPORTED_MODULE_10__pages_faq_faq__["a" /* FaqPage */],
            __WEBPACK_IMPORTED_MODULE_11__pages_order_order__["a" /* OrderPage */],
            __WEBPACK_IMPORTED_MODULE_12__pages_signup_signup__["a" /* SignupPage */],
            __WEBPACK_IMPORTED_MODULE_13__pages_videos_videos__["a" /* VideosPage */],
            __WEBPACK_IMPORTED_MODULE_14__pages_usage_usage__["a" /* UsagePage */],
            __WEBPACK_IMPORTED_MODULE_15__pages_profile_profile__["a" /* ProfilePage */],
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_16__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_17__ionic_native_splash_screen__["a" /* SplashScreen */],
            { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["v" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] },
            __WEBPACK_IMPORTED_MODULE_18__providers_all_post_all_post__["a" /* AllPostProvider */]
        ]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 264:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_contactus_contactus__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_support_support__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_faq_faq__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_order_order__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_signup_signup__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_videos_videos__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_usage_usage__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_profile_profile__ = __webpack_require__(109);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};













var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_9__pages_signup_signup__["a" /* SignupPage */];
        this.initializeApp();
        // used for an example of ngFor and navigation
        this.pages = [
            { icon: 'assets/img/home.png', title: 'Home', component: __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */] },
            { icon: 'assets/img/usage-benefits.png', title: 'Usage & Benefits', component: __WEBPACK_IMPORTED_MODULE_11__pages_usage_usage__["a" /* UsagePage */] },
            { icon: 'assets/img/youtube.png', title: 'Videos', component: __WEBPACK_IMPORTED_MODULE_10__pages_videos_videos__["a" /* VideosPage */] },
            { icon: 'assets/img/order-icon.png', title: 'Order an Accessory', component: __WEBPACK_IMPORTED_MODULE_8__pages_order_order__["a" /* OrderPage */] },
            { icon: 'assets/img/support.png', title: 'Support', component: __WEBPACK_IMPORTED_MODULE_6__pages_support_support__["a" /* SupportPage */] },
            { icon: 'assets/img/faq.png', title: 'FAQs', component: __WEBPACK_IMPORTED_MODULE_7__pages_faq_faq__["a" /* FaqPage */] },
            { icon: 'assets/img/phone-book.png', title: 'Contact Us', component: __WEBPACK_IMPORTED_MODULE_5__pages_contactus_contactus__["a" /* ContactusPage */] },
            { icon: 'assets/img/man-user.png', title: 'User Profile', component: __WEBPACK_IMPORTED_MODULE_12__pages_profile_profile__["a" /* ProfilePage */] },
        ];
    }
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            _this.statusBar.styleDefault();
            _this.splashScreen.hide();
        });
    };
    MyApp.prototype.openPage = function (page) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        this.nav.setRoot(page.component);
    };
    return MyApp;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Nav */]),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Nav */])
], MyApp.prototype, "nav", void 0);
MyApp = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"C:\xampp\htdocs\always\myApp\src\app\app.html"*/'<ion-menu [content]="content">\n  <ion-header>\n    <ion-toolbar>\n      <ion-title>\n        <img src="assets/img/header-logo.png" alt="" class="img-responsive header-logo">\n      </ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n  <ion-content>\n    <ion-list>\n      <button menuClose ion-item *ngFor="let p of pages" (click)="openPage(p)">\n        <img src="{{p.icon}}" alt="" class="img-responsive menu-icon" width="20">\n        <span class="menu-title">{{p.title}}</span>\n      </button>\n    </ion-list>\n    <div class="social-icon">\n      <span><a href="https://www.facebook.com/AquaTatva-216713322123964/" target="_blank" title="Facebook"><img src="assets/img/facebook.png" width="35" alt=""></a> <a href="https://twitter.com/aquatatva" target="_blank" title="Twitter"><img src="assets/img/twitter.png" alt="" width="45"></a> <a href="https://www.linkedin.com/company-beta/13262288/" target="_blank" title="Linkedin"><img src="assets/img/lindekin.png" alt="" width="40"></a></span>\n    </div>  \n  </ion-content>\n\n</ion-menu>\n\n<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>'/*ion-inline-end:"C:\xampp\htdocs\always\myApp\src\app\app.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
], MyApp);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 273:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ListPage = ListPage_1 = (function () {
    function ListPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        // If we navigated to this page, we will have an item available as a nav param
        this.selectedItem = navParams.get('item');
        // Let's populate this page with some filler content for funzies
        this.icons = ['flask', 'wifi', 'beer', 'football', 'basketball', 'paper-plane',
            'american-football', 'boat', 'bluetooth', 'build'];
        this.items = [];
        for (var i = 1; i < 11; i++) {
            this.items.push({
                title: 'Item ' + i,
                note: 'This is item #' + i,
                icon: this.icons[Math.floor(Math.random() * this.icons.length)]
            });
        }
    }
    ListPage.prototype.itemTapped = function (event, item) {
        // That's right, we're pushing to ourselves!
        this.navCtrl.push(ListPage_1, {
            item: item
        });
    };
    return ListPage;
}());
ListPage = ListPage_1 = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-list',template:/*ion-inline-start:"C:\xampp\htdocs\always\myApp\src\pages\list\list.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>List</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-list>\n    <button ion-item *ngFor="let item of items" (click)="itemTapped($event, item)">\n      <ion-icon [name]="item.icon" item-left></ion-icon>\n      {{item.title}}\n      <div class="item-note" item-right>\n        {{item.note}}\n      </div>\n    </button>\n  </ion-list>\n  <div *ngIf="selectedItem" padding>\n    You navigated here from <b>{{selectedItem.title}}</b>\n  </div>\n</ion-content>\n'/*ion-inline-end:"C:\xampp\htdocs\always\myApp\src\pages\list\list.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
], ListPage);

var ListPage_1;
//# sourceMappingURL=list.js.map

/***/ }),

/***/ 29:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AllPostProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(246);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/*
  Generated class for the AllPostProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
var AllPostProvider = (function () {
    // constructor(public http: Http) {
    //   console.log('Hello AllPostProvider Provider');
    // }
    function AllPostProvider(http) {
        this.http = http;
        this.url = "https://aquatatva.herokuapp.com/api/";
    }
    // private urlgoogle = "https://aquatatva.herokuapp.com/api/auth/google";
    // getFaq(): Observable<any> {
    //   let response = this.http.get(this.url + 'showfaq').map(res => console.log(res.json()));
    //   return response;
    // }
    // getFaq() {
    //   return this.http.get(this.url + 'showfaq').map((res:Response) => res.json());
    // }
    // getBenefit(): Observable<any> {
    //   let response = this.http.get(this.url+'showbenefit').map(res => console.log(res.json()));
    //   return response;
    // }
    AllPostProvider.prototype.saveSupportData = function (formValue) {
        var response = this.http.post(this.url + 'storesupportdata', formValue)
            .map(function (res) { return res.json(); });
        return response;
    };
    AllPostProvider.prototype.saveOrder = function (formValue) {
        var response = this.http.post(this.url + 'neworder', formValue)
            .map(function (res) { return res.json(); });
        return response;
    };
    AllPostProvider.prototype.saveSignup = function (formValue) {
        var response = this.http.post(this.url + 'newuser', formValue).map(function (res) { return res.json(); });
        return response;
    };
    return AllPostProvider;
}());
AllPostProvider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]])
], AllPostProvider);

//# sourceMappingURL=all-post.js.map

/***/ }),

/***/ 47:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__contactus_contactus__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__support_support__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__faq_faq__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__order_order__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__videos_videos__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__usage_usage__ = __webpack_require__(58);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var HomePage = (function () {
    function HomePage(navCtrl, menu) {
        this.navCtrl = navCtrl;
        this.menu = menu;
    }
    HomePage.prototype.viewVideos = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__videos_videos__["a" /* VideosPage */]);
    };
    ;
    HomePage.prototype.viewUsage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__usage_usage__["a" /* UsagePage */]);
    };
    HomePage.prototype.viewOrder = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__order_order__["a" /* OrderPage */]);
    };
    HomePage.prototype.viewSupport = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__support_support__["a" /* SupportPage */]);
    };
    HomePage.prototype.viewFaq = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__faq_faq__["a" /* FaqPage */]);
    };
    HomePage.prototype.viewContact = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__contactus_contactus__["a" /* ContactusPage */]);
    };
    HomePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SignupPage');
        this.menu.enable(true);
    };
    return HomePage;
}());
HomePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-home',template:/*ion-inline-start:"C:\xampp\htdocs\always\myApp\src\pages\home\home.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>\n      <img src="assets/img/header-logo.png" alt="" class="img-responsive header-logo">\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content class="home-main">\n  <!-- <h3>Ionic Menu Starter</h3> -->\n  <ion-card class="card-detail">\n    <ion-card-content>\n      Meet The Next Generation Of Drinking Water,<br>Using The Mostadvanced Technology\n    </ion-card-content>\n  </ion-card>\n  <!-- <p>\n    If you get lost, the <a href="http://ionicframework.com/docs/v2">docs</a> will show you the way.\n  </p> -->\n\n  <!-- <button ion-button secondary menuToggle>Toggle Menu</button> -->\n  <div class="homescreen-main">\n    <ion-grid>\n      <ion-row>\n        <ion-col col-12>\n          <div class="list-imgholder usage" (click)="viewUsage();">\n            <!-- <img src="assets/img/usage.jpg" alt="" class="img-responsive"> -->\n            <div class="get-center full-width banner-detail">\n              <h2>Usage &amp; Benefits</h2>\n            </div>\n          </div>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col col-12>\n          <div class="list-imgholder banner-video" (click)="viewVideos();">\n            <!-- <img src="assets/img/banner-video.jpg" alt="" class="img-responsive"> -->\n            <div class="get-center full-width banner-detail">\n              <h2>Videos</h2>\n            </div>\n          </div>\n        </ion-col>       \n      </ion-row>      \n      <ion-row>\n        <ion-col col-12>\n          <div class="list-imgholder order" (click)="viewOrder();">\n            <!-- <img src="assets/img/order.jpg" alt="" class="img-responsive"> -->\n            <div class="get-center full-width banner-detail">\n              <h2>Order an Accessory</h2>\n            </div>\n          </div>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col col-12>\n          <div class="list-imgholder support" (click)="viewSupport();">\n            <!-- <img src="assets/img/support.jpg" alt="" class="img-responsive"> -->\n            <div class="get-center full-width banner-detail">\n              <h2>Support</h2>\n            </div>\n          </div>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col col-12>\n          <div class="list-imgholder faq" (click)="viewFaq();">\n            <!-- <img src="assets/img/faq.jpg" alt="" class="img-responsive"> -->\n            <div class="get-center full-width banner-detail">\n              <h2>FAQs</h2>\n            </div>\n          </div>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col col-12>\n          <div class="list-imgholder contact" (click)="viewContact();">\n            <!-- <img src="assets/img/contact.jpg" alt="" class="img-responsive"> -->\n            <div class="get-center full-width banner-detail">\n              <h2>Contact Us</h2>\n            </div>\n          </div>\n        </ion-col>        \n      </ion-row>     \n    </ion-grid>\n  </div>\n</ion-content>\n<ion-nav [root]="HomePage" #content swipeBackEnabled="false"></ion-nav>'/*ion-inline-end:"C:\xampp\htdocs\always\myApp\src\pages\home\home.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* MenuController */]])
], HomePage);

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 52:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactusPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the ContactusPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var ContactusPage = (function () {
    function ContactusPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    ContactusPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ContactusPage');
    };
    return ContactusPage;
}());
ContactusPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-contactus',template:/*ion-inline-start:"C:\xampp\htdocs\always\myApp\src\pages\contactus\contactus.html"*/'<!--\n  Generated template for the ContactusPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n	<ion-navbar>\n		<button ion-button menuToggle>\n			<ion-icon name="menu"></ion-icon>\n		</button>\n		<ion-title>\n			<img src="assets/img/header-logo.png" alt="" class="img-responsive header-logo">\n		</ion-title>\n	</ion-navbar>\n</ion-header>\n\n\n<ion-content class="contactus-main">\n	<div class="bg-gradient"></div>\n	<ion-card class="card-detail">\n		<ion-card-content>\n			Meet The Next Generation Of Drinking Water,<br>Using The Mostadvanced Technology\n		</ion-card-content>\n	</ion-card>\n	<ion-grid>\n		<ion-row>\n			<ion-col col-12>\n				<div class="contact-view">\n					<h2 class="contact-title">Contact Us</h2>\n					<address class="address-view">\n						<p>\n							<span><img src="assets/img/location.png" alt=""  width="20"> </span>\n							<span>:</span>\n							<span>201-B, Raheja Plaza I, B-Wing, 2nd Floor,L.B.S Marg, Ghatkopar (W) Mumbai-400086, INDIA.</span>\n						</p>\n						<p>\n							<span><img src="assets/img/icon.png" alt=""  width="20"></span>\n							<span>:</span>\n							<span><a href="tel:+918655514444" target="_blank">+91 8655514444</a> | <a href="tel:+912225007002">+91 22 25007002</a></span>\n						</p>\n						<p>\n							<span><img src="assets/img/close-envelope.png" width="20" alt=""></span>\n							<span>:</span>\n							<span><a href="mailto:info@aquatatva.com" target="_blank">info@aquatatva.com</a></span>\n						</p>\n						<div class="social-icon">\n							<span><a href="https://www.facebook.com/AquaTatva-216713322123964/" target="_blank" title="Facebook"><img src="assets/img/facebook.png" width="35" alt=""></a> <a href="https://twitter.com/aquatatva" target="_blank" title="Twitter"><img src="assets/img/twitter.png" alt="" width="45"></a> <a href="https://www.linkedin.com/company-beta/13262288/" target="_blank" title="Linkedin"><img src="assets/img/lindekin.png" alt="" width="40"></a></span>\n						</div>					\n					</address>\n				</div>\n				<div class="map-view">\n					<p>Find us on </p>\n					<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3770.295732481776!2d72.91505531548299!3d19.094677987077247!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c7c94f1b74f7%3A0xa2bd7c373a4f34c9!2sAquaTatva!5e0!3m2!1sen!2sin!4v1497516373820" width="100%" height="250" frameborder="0" style="border:0" allowfullscreen></iframe>\n				</div>\n			</ion-col>\n		</ion-row>\n	</ion-grid>\n\n	<div class="contactus-detail" hidden>\n		<div class="icon-contactus">\n			<span>\n				<img src="assets/img/old-handphone.png" alt="" class="" width="30px">\n			</span>\n		</div>\n		<h3 class="color-dark-blue">Contact us</h3>\n		<div class="address-detail">\n			<address>\n				<span>Location :</span>\n				<span>Mumbai - 400086, INDIA.</span>\n				<span><!--<img src="" alt="" class="icon-call">--><a href="tel:+91000000000" target="_blank">+91 0000000000</a> | <a href="tel:+912225252525">+91 222 25252525</a></span>\n				<span><!--<img src="" alt="" class="icon-mail">--> <a href="mailto:loremipsum.com" target="_blank">loremimpsum.com</a></span>\n				<span>Find us on : <a href="" target="_blank" title="Facebook">Facebook</a> | <a href="" target="_blank" title="Twitter">Twitter</a> | <a href="" target="_blank" title="Linkedin">Linkedin</a></span>\n			</address>\n		</div>\n	</div>\n	<div class="circular-menu" hidden>\n		<div class="open-menu">\n			<span class="menu-option">+</span>\n			<!-- <img src="" alt="" class="img-responsive"> -->\n			<ul>\n				<li><a href="">1</a></li>\n				<li><a href="">2</a></li>\n				<li><a href="">3</a></li>\n				<li><a href="">4</a></li>\n				<li><a href="">5</a></li>\n				<li><a href="">6</a></li>\n			</ul>\n		</div>		\n	</div>\n</ion-content>\n'/*ion-inline-end:"C:\xampp\htdocs\always\myApp\src\pages\contactus\contactus.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
], ContactusPage);

//# sourceMappingURL=contactus.js.map

/***/ }),

/***/ 53:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SupportPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_all_post_all_post__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__(12);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the SupportPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var SupportPage = (function () {
    // let fileSelect =  document.querySelector('input[type=file]').files[0];
    // console.log(fileSelect,'file');
    function SupportPage(navCtrl, navParams, FormBuilder, http, supportProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.FormBuilder = FormBuilder;
        this.http = http;
        this.supportProvider = supportProvider;
        this.message = false;
        this.supportDone = "";
        this.supportForm = {};
    }
    // formSupport(supportForm) {
    //   console.log(this.supportForm,'supportForm',supportForm,supportForm.form._value); 
    //   let valueForm = supportForm.form._value;
    //   console.log(this.valueForm,'dfgh');
    //   supportForm = {
    //     name: valueForm.name,
    //     contact: valueForm.contact,
    //     email: valueForm.email,
    //     address: valueForm.address,
    //     suggestion: valueForm.suggestion,
    //     supporttype: valueForm.supporttype,
    //     image: valueForm.Image
    //   } 
    //   console.log(this.supportForm,'valueForm');
    //   this.supportProvider.saveSupportData(this.supportForm).subscribe(data=>{
    //     this.supportDone = data;
    //     if(data.message == "successfully Registered Support Request"){
    //       this.message = true; 
    //       setTimeout(function(){
    //         this.message = false;
    //         console.log('out');
    //       },3000);
    //     }else {
    //       this.message = false;
    //     }
    //   console.log(this.supportForm,'supportForm');
    //   });
    // }
    SupportPage.prototype.formSupport = function (supportForm) {
        var _this = this;
        console.log(this.supportForm, 'supportForm', supportForm);
        console.log(this.supportForm, 'valueForm');
        // this.supportProvider.saveSupportData(this.supportForm).subscribe(data=>{
        this.supportProvider.saveSupportData(this.supportForm).subscribe(function (data) {
            _this.supportDone = data;
            if (data.message == "successfully Registered Support Request") {
                _this.message = true;
                setTimeout(function () {
                    this.message = false;
                    console.log('out');
                }.bind(_this), 3000);
            }
            else {
                _this.message = false;
            }
            console.log(_this.supportForm, 'supportForm');
        });
    };
    SupportPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SupportPage');
    };
    return SupportPage;
}());
SupportPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-support',template:/*ion-inline-start:"C:\xampp\htdocs\always\myApp\src\pages\support\support.html"*/'<!--\n\n  Generated template for the SupportPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n	<ion-navbar>\n\n		<button ion-button menuToggle>\n\n			<ion-icon name="menu"></ion-icon>\n\n		</button>\n\n		<ion-title>\n\n			<img src="assets/img/header-logo.png" alt="" class="img-responsive header-logo">\n\n		</ion-title>\n\n	</ion-navbar>\n\n</ion-header>\n\n<ion-content class="support-main">\n\n	<div class="bg-gradient"></div>\n\n	<ion-card class="card-detail">\n\n		<ion-card-content>\n\n			SUPPORT\n\n		</ion-card-content>\n\n	</ion-card>\n\n	<ion-grid>\n\n		<ion-row>\n\n			<ion-col col-1></ion-col>\n\n			<ion-col col-10>\n\n				<div class="support-card">\n\n					<form #supportForm="ngForm" (ngSubmit)="formSupport(supportForm.value); supportForm.reset();" >\n\n						<div class="form-group input-all">\n\n							<span class="icon-set"><img src="assets/img/man-user.png" alt="" height="20"></span>\n\n							<input type="text" class="form-control" name="name" [(ngModel)]="supportForm.name" placeholder="Name" #name="ngModel" required>\n\n							<div class="error-display" *ngIf="name.errors && (name.dirty || name.touched)">\n\n								<div [hidden]="!name.errors.required">\n\n									Please Enter the Name!\n\n								</div>\n\n							</div>\n\n						</div>\n\n						<div class="form-group input-all">\n\n							<span class="icon-set"><img src="assets/img/icon.png" alt="" height="20"></span>\n\n							<input type="number" class="form-control" name="contact" [(ngModel)]="supportForm.contact" placeholder="Contact Number" #contact="ngModel" required>\n\n							<div class="error-display" *ngIf="contact.errors && (contact.dirty || contact.touched)">\n\n								<div [hidden]="!contact.errors.required">\n\n									Please Enter the Contact Number!\n\n								</div>\n\n							</div>\n\n						</div>\n\n						<div class="form-group input-all">\n\n							<span class="icon-set"><img src="assets/img/close-envelope.png" alt="" height="20"></span>\n\n							<input type="email" class="form-control" name="email" [(ngModel)]="supportForm.email" placeholder="Email Id" #email="ngModel" required>\n\n							<div class="error-display" *ngIf="email.errors && (email.dirty || email.touched)">\n\n								<div [hidden]="!email.errors.required">\n\n									Please Enter the Email Address!\n\n								</div>\n\n							</div>\n\n						</div>\n\n						<div class="form-group input-all">\n\n							<span class="icon-set"><img src="assets/img/type.png" alt="" height="20"></span>\n\n							<!-- <input type="text" class="form-control" name="supporttype" [(ngModel)]="supportForm.supportType" placeholder="Type of Support" #supporttype="ngModel" required> -->\n\n							<!-- <div class="error-display" *ngIf="supporttype.errors && (supporttype.dirty || supporttype.touched)">\n\n								<div [hidden]="!supporttype.errors.required">\n\n									Please Enter Type of Support!\n\n								</div>\n\n							</div> -->\n\n							<select class="support-select" name="supporttype" id="" [(ngModel)]="supportForm.supportType" placeholder="Type of Support" #supporttype="ngModel" required>\n\n								<!-- <option [value]="typeSupport" *ngFor="let typeSupport of supportTypeArray"></option> -->\n\n								<option value="Demo">Demo</option>\n\n								<option value="Issues">Issues</option>\n\n								<option value="Query">Query</option>\n\n								<option value="Information">Information</option>\n\n								<option value="Machine Failure">Machine Failure</option>\n\n							</select>\n\n							<div class="error-display" *ngIf="supporttype.errors && (supporttype.dirty || supporttype.touched)">\n\n								<div [hidden]="!supporttype.errors.required">\n\n									Please Enter Type of Support!\n\n								</div>\n\n							</div>\n\n						</div>\n\n						<div class="form-group input-all">\n\n							<span class="icon-set"><img src="assets/img/notebook.png" alt="" height="20"></span>\n\n							<input type="text" class="form-control" name="address" [(ngModel)]="supportForm.address" placeholder="Address" #address="ngModel" required>\n\n							<div class="error-display" *ngIf="address.errors && (address.dirty || address.touched)">\n\n								<div [hidden]="!address.errors.required">\n\n									Please Enter the Address!\n\n								</div>\n\n							</div>\n\n						</div>\n\n						<div class="form-group input-all">\n\n							<span class="icon-set"><img src="assets/img/upload.png" alt="" height="20"></span>\n\n							<span class="choose-file">Upload Your Image</span>\n\n							<input type="file" class="form-control" name="Image" [(ngModel)]="supportForm.image" placeholder="Image Upload option" accept="image/*">\n\n							<!-- <div class="error-display" *ngIf="address.errors && (address.dirty || address.touched)">\n\n								<div [hidden]="!address.errors.required">\n\n									Book title is required!\n\n								</div>\n\n							</div> -->\n\n						</div>\n\n						<div class="form-group input-all">\n\n							<span class="icon-set"><img src="assets/img/suggest.png" alt="" height="20"></span>\n\n							<input type="text" class="form-control" name="suggestion" [(ngModel)]="supportForm.suggest" placeholder="Suggestion" #suggest="ngModel" required>\n\n							<div class="error-display" *ngIf="suggest.errors && (suggest.dirty || suggest.touched)">\n\n								<div [hidden]="!suggest.errors.required">\n\n									Please Enter your Suggestions!\n\n								</div>\n\n							</div>\n\n						</div>\n\n						<div class="submit-button">\n\n							<button type="submit" class="btn btn-blue-outline" [disabled]=!supportForm.valid>Submit</button>\n\n						</div>						\n\n					</form>\n\n				</div>				\n\n				<div class="alert-pop" *ngIf="message" role="alert">\n\n					<p>Support Request Successfully Registered! </p>\n\n				</div>				\n\n			</ion-col>\n\n			<ion-col col-1></ion-col>\n\n		</ion-row>\n\n	</ion-grid>	\n\n</ion-content>\n\n'/*ion-inline-end:"C:\xampp\htdocs\always\myApp\src\pages\support\support.html"*/,
        providers: [__WEBPACK_IMPORTED_MODULE_3__providers_all_post_all_post__["a" /* AllPostProvider */]]
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_4__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Http */], __WEBPACK_IMPORTED_MODULE_3__providers_all_post_all_post__["a" /* AllPostProvider */]])
], SupportPage);

//# sourceMappingURL=support.js.map

/***/ }),

/***/ 54:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FaqPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_all_post_all_post__ = __webpack_require__(29);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the FaqPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var FaqPage = (function () {
    function FaqPage(navCtrl, http, navParams, faqProvider) {
        //  this.faqProvider.getFaq().subscribe(data =>{
        //    console.log(data,'what is data');
        //   this.posts = data;
        // });
        var _this = this;
        this.navCtrl = navCtrl;
        this.http = http;
        this.navParams = navParams;
        this.faqProvider = faqProvider;
        this.viewGroup = null;
        this.posts = [];
        this.http.get('https://aquatatva.herokuapp.com/api/showfaq').map(function (res) { return res.json(); }).subscribe(function (data) {
            _this.posts = data;
        });
        this.faqArray = [
            {
                title: "accordion1",
                descp: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse soluta debitis placeat ab minus maiores illo dolor accusamus consequuntur iure, suscipit, laboriosam odit distinctio libero quos numquam molestias vitae non."
            }, {
                title: "accordion2",
                descp: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse soluta debitis placeat ab minus maiores illo dolor accusamus consequuntur iure, suscipit, laboriosam odit distinctio libero quos numquam molestias vitae non."
            }, {
                title: "accordion3",
                descp: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse soluta debitis placeat ab minus maiores illo dolor accusamus consequuntur iure, suscipit, laboriosam odit distinctio libero quos numquam molestias vitae non."
            },
        ];
    }
    FaqPage.prototype.viewAccordion = function (view) {
        console.log(view);
        if (this.viewDetails(view)) {
            this.viewGroup = null;
            console.log(view);
        }
        else {
            this.viewGroup = view;
            console.log(view);
        }
    };
    ;
    FaqPage.prototype.viewDetails = function (view) {
        return this.viewGroup === view;
    };
    FaqPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad FaqPage');
    };
    return FaqPage;
}());
FaqPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-faq',template:/*ion-inline-start:"C:\xampp\htdocs\always\myApp\src\pages\faq\faq.html"*/'<!--\n  Generated template for the FaqPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n	<ion-navbar>\n		<button ion-button menuToggle>\n			<ion-icon name="menu"></ion-icon>\n		</button>\n		<ion-title>\n			<img src="assets/img/header-logo.png" alt="" class="img-responsive header-logo">\n		</ion-title>\n	</ion-navbar>\n</ion-header>\n\n\n<ion-content class="faq-main">\n	<div class="bg-gradient"></div>\n	<ion-card class="card-detail">\n		<ion-card-content>\n			Frequently Asked Questions\n		</ion-card-content>\n	</ion-card>\n	<div class="faq-detail"> \n		<ion-list>\n			<ion-item *ngFor="let faq of posts; let view=index" (click)="viewAccordion(view)" [ngClass]="{active: viewDetails(view)}">\n				<h3 class="faq-heading">\n					<span class="faq-title">{{faq.title}}</span>\n					<ion-icon color="success" class="faq-icon" item-right [name]="viewDetails(view) ? \'arrow-dropup\' : \'arrow-dropdown\'"></ion-icon>\n				</h3>				\n				<div class="faq-descp" *ngIf="viewDetails(view)">\n					{{faq.description}}\n				</div>\n			</ion-item> \n		</ion-list>\n	</div>\n</ion-content>\n\n'/*ion-inline-end:"C:\xampp\htdocs\always\myApp\src\pages\faq\faq.html"*/,
        providers: [__WEBPACK_IMPORTED_MODULE_3__providers_all_post_all_post__["a" /* AllPostProvider */]]
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Http */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__providers_all_post_all_post__["a" /* AllPostProvider */]])
], FaqPage);

//# sourceMappingURL=faq.js.map

/***/ }),

/***/ 55:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OrderPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_all_post_all_post__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__(12);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the OrderPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var OrderPage = (function () {
    // orderOption = ['amit','vikas','aniruddh'];
    function OrderPage(navCtrl, navParams, FormBuilder, http, orderProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.FormBuilder = FormBuilder;
        this.http = http;
        this.orderProvider = orderProvider;
        this.showAccessoryType = false;
        this.orderForm = {};
        this.orderFormData = {};
        this.message = false;
        this.orderAccessory = [];
        // this.orderOption = ['A51 - Pre Filter inlet pipe 1 meter','A52 - Ionizer inlet pipe 1 meter','A53 - Acidic water  ionizer output pipe  1 meter','A54 - Filter','Alkaline water output hose'];
        this.orderOption = [{
                'name': 'A51 - Pre Filter inlet pipe 1 meter',
                'quantity': '1',
                'value': false
            }, {
                'name': 'A52 - Ionizer inlet pipe 1 meter',
                'quantity': '1',
                'value': false
            }, {
                'name': 'A53 - Acidic water  ionizer output pipe  1 meter',
                'quantity': '1',
                'value': false
            }, {
                'name': 'A54 - Filter',
                'quantity': '1',
                'value': false
            }, {
                'name': 'Alkaline water output hose',
                'quantity': '1',
                'value': false
            }];
    }
    OrderPage.prototype.addAccessory = function (order, i) {
        console.log(order, 'order', this.orderAccessory, i);
        if (order.value == false) {
            console.log('push');
            this.orderAccessory.push(order);
            this.orderOption[i].value = true;
            this.orderOption[i].class = "active";
        }
        else {
            console.log('slice');
            this.orderAccessory.splice(order, 1);
            this.orderOption[i].value = false;
            this.orderOption[i].class = "";
        }
        console.log(order, 'order', this.orderAccessory, i);
    };
    OrderPage.prototype.formOrder = function (orderForm) {
        var _this = this;
        console.log(orderForm, 'orderForm');
        orderForm.accessory = this.orderAccessory;
        console.log(orderForm, 'new value');
        this.orderProvider.saveOrder(this.orderForm).subscribe(function (data) {
            _this.message = data;
            if (data.message == "successfully Registered Support Request") {
                _this.message = true;
                setTimeout(function () {
                    this.message = false;
                    console.log('out');
                }.bind(_this), 3000);
            }
            else {
                _this.message = false;
            }
        });
    };
    OrderPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad OrderPage');
    };
    return OrderPage;
}());
OrderPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-order',template:/*ion-inline-start:"C:\xampp\htdocs\always\myApp\src\pages\order\order.html"*/'<!--\n  Generated template for the OrderPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n	<ion-navbar>\n		<button ion-button menuToggle>\n			<ion-icon name="menu"></ion-icon>\n		</button>\n		<ion-title>\n			<img src="assets/img/header-logo.png" alt="" class="img-responsive header-logo">\n		</ion-title>\n	</ion-navbar>\n</ion-header>\n\n\n<ion-content class="order-main support-main">\n	<div class="bg-gradient"></div>\n	<ion-card class="card-detail">\n		<ion-card-content>\n			<span>ORDER YOUR ACCESSORY</span>\n		</ion-card-content>\n	</ion-card>\n	<ion-grid>\n		<ion-row>\n			<ion-col col-1></ion-col>\n			<ion-col col-10>\n				<div class="support-card order-card">\n					<form #orderForm="ngForm" (ngSubmit)="formOrder(orderForm.value); orderForm.reset();">\n						<div class="form-group input-all">\n							<span class="icon-set"><img src="assets/img/man-user.png" alt="" height="20"></span>\n							<input type="text" class="form-control" name="fullName" [(ngModel)]="orderForm.fullName"  placeholder="Name" #fullName="ngModel" required>\n							<div class="error-display" *ngIf="fullName.errors && (fullName.dirty || fullName.touched)">\n								<div [hidden]="!fullName.errors.required">\n									Please Enter your Name!\n								</div>\n							</div>\n						</div>\n						<div class="form-group input-all">\n							<span class="icon-set"><img src="assets/img/icon.png" alt="" height="20"></span>\n							<input type="tel" class="form-control" placeholder="Contact No." name="contact" [(ngModel)]="orderForm.contact" #contact="ngModel" required>\n							<div class="error-display" *ngIf="contact.errors && (contact.dirty || contact.touched)">\n								<div [hidden]="!contact.errors.required">\n									Please Enter the Contact Number!\n								</div>\n							</div>\n						</div>\n						<div class="form-group input-all">\n							<span class="icon-set"><img src="assets/img/close-envelope.png" alt="" height="20"></span>\n							<input type="text" class="form-control" placeholder="Email Id" name="email" [(ngModel)]="orderForm.email" #email="ngModel" required>\n							<div class="error-display" *ngIf="email.errors && (email.dirty || email.touched)">\n								<div [hidden]="!email.errors.required">\n									Please Enter the Email Address!\n								</div>\n							</div>\n						</div>\n						<div class="form-group input-all">\n							<span class="icon-set"><img src="assets/img/location.png" alt="" height="20"></span>\n							<input type="text" class="form-control" placeholder="City" name="city" [(ngModel)]="orderForm.city" #city="ngModel" required>\n							<div class="error-display" *ngIf="city.errors && (city.dirty || city.touched)">\n								<div [hidden]="!city.errors.required">\n									Please Enter your City!\n								</div>\n							</div>\n						</div>\n						<div class="form-group input-all">\n							<span class="icon-set"><img src="assets/img/location.png" alt="" height="20"></span>\n							<input type="text" class="form-control" placeholder="State" name="state" [(ngModel)]="orderForm.state" #state="ngModel" required>\n							<div class="error-display" *ngIf="state.errors && (state.dirty || state.touched)">\n								<div [hidden]="!state.errors.required">\n									Please Enter your State!\n								</div>\n							</div>\n						</div>\n						<div class="form-group input-all">\n							<span class="icon-set"><img src="assets/img/notebook.png" alt="" height="20"></span>\n							<input type="text" class="form-control" placeholder="Address" name="address" [(ngModel)]="orderForm.address" #address="ngModel" required>\n							<div class="error-display" *ngIf="address.errors && (address.dirty || address.touched)">\n								<div [hidden]="!address.errors.required">\n									Please Enter your Address!\n								</div>\n							</div>\n						</div>\n						<div class="form-group input-all">\n							<span class="icon-set"><img src="assets/img/type.png" alt="" height="20"></span>\n							<!-- <input type="text" class="form-control" placeholder="Accessory Type" name="accessory" [(ngModel)]="orderForm.accessory" #accessory="ngModel" required>\n							<div class="error-display" *ngIf="accessory.errors && (accessory.dirty || accessory.touched)">\n								<div [hidden]="!accessory.errors.required">\n									Please Enter the Accessory Type!\n								</div>\n							</div> -->\n							<!-- <select name="accessory" class="" [(ngModel)]="orderForm.accessory" #accessory="ngModel" multiple required>\n								<option [value]="option" *ngFor="let option of orderOption">{{option}}</option>\n							</select>	 -->\n							<span class="order-select" (click)="showAccessoryType = !showAccessoryType">Accessory Type</span>										\n						</div>\n						<div class="form-group input-all">\n							<span class="icon-set"><img src="assets/img/stack-overflow.png" alt="" height="20"></span>\n							<input type="text" class="form-control" placeholder="Accessory Quantity" name="quantity" [(ngModel)]="orderForm.quantity" #quantity="ngModel" required>\n							<div class="error-display" *ngIf="quantity.errors && (quantity.dirty || quantity.touched)">\n								<div [hidden]="!quantity.errors.required">\n									Please Enter the Quantity!\n								</div>\n							</div>\n						</div>\n						<div class="form-group input-all">\n							<span class="icon-set"><img src="assets/img/serial.png" alt="" height="20"></span>\n							<input type="text" class="form-control" placeholder="Machine Serail Number" name="serialnumber" [(ngModel)]="orderForm.serialNumber" #serialNumber="ngModel" required>\n							<div class="error-display" *ngIf="serialNumber.errors && (serialNumber.dirty || serialNumber.touched)">\n								<div [hidden]="!serialNumber.errors.required">\n									Please Enter the Serial Number!\n								</div>\n							</div>\n						</div>\n						<div class="submit-button">\n							<button class="btn btn-blue-outline" [disabled]="!orderForm.valid">Submit</button>\n						</div>\n					</form>\n				</div>\n				<div class="alert-pop" *ngIf="message" role="alert">\n					<p>Order Request Successfully Registered! </p>\n				</div>\n				<!-- set accessory type -->\n				<div class="set-order" [hidden]="!showAccessoryType">\n					<div class="show-type">\n						<ul>\n							<li *ngFor="let option of orderOption; let i=index">\n								<span>{{option.name}}</span>\n								<input type="number" [(ngModel)]="option.quantity" />\n								<span class="check-box {{option.class}}" (click)="addAccessory(option,i);">\n									<img src="assets/img/done-tick.png" alt="">\n								</span>\n							</li>\n						</ul>\n					</div>\n					<div class="modal-sec">\n						<span class="cancel-access btn-blue-outline" (click)="showAccessoryType = !showAccessoryType">Cancel</span>\n					</div>\n				</div>\n				<div class="modal-close" [hidden]="!showAccessoryType" (click)="showAccessoryType = !showAccessoryType"></div>\n\n				<!-- set accessory type end-->\n			</ion-col>\n			<ion-col col-1></ion-col>\n		</ion-row>\n	</ion-grid>\n<!-- 	<div class="order-form">\n		<ion-grid>\n			<ion-row>\n				<ion-col col-1></ion-col>\n				<ion-col col-10>\n					<form action=""></form>\n				</ion-col>\n				<ion-col col-1></ion-col>\n			</ion-row>\n		</ion-grid>\n	</div> -->\n</ion-content>\n'/*ion-inline-end:"C:\xampp\htdocs\always\myApp\src\pages\order\order.html"*/,
        providers: [__WEBPACK_IMPORTED_MODULE_3__providers_all_post_all_post__["a" /* AllPostProvider */]]
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_4__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Http */], __WEBPACK_IMPORTED_MODULE_3__providers_all_post_all_post__["a" /* AllPostProvider */]])
], OrderPage);

//# sourceMappingURL=order.js.map

/***/ }),

/***/ 56:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignupPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_login__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_all_post_all_post__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_forms__ = __webpack_require__(12);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







/**
 * Generated class for the SignupPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var SignupPage = (function () {
    function SignupPage(navCtrl, navParams, FormBuilder, menu, http, signupProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.FormBuilder = FormBuilder;
        this.menu = menu;
        this.http = http;
        this.signupProvider = signupProvider;
        this.message = false;
        this.messageFalse = false;
        this.signupForm = {};
        this.signUpData = {
            first_name: "",
            last_name: "",
            email: "",
            password: ""
        };
        console.log(this.signUpData, 'sign');
    }
    SignupPage.prototype.signup = function (signupValue) {
        var _this = this;
        console.log(signupValue);
        this.signUpData.first_name = signupValue.firstname;
        this.signUpData.last_name = signupValue.lastname;
        this.signUpData.email = signupValue.email;
        this.signUpData.password = signupValue.password;
        console.log(this.signUpData);
        this.signupProvider.saveSignup(this.signUpData).subscribe(function (data) {
            // successfully created user
            if (data.message == "successfully created user") {
                _this.message = true;
                setTimeout(function () {
                    this.message = false;
                }, 6000);
                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */]);
            }
            else {
                _this.messageFalse = true;
                setTimeout(function () {
                    this.messageFalse = false;
                }, 6000);
            }
        });
    };
    // signup google 
    // signupGoogle(){
    //   this.signupProvider.google().subscribe(data=>{
    //     console.log(data,'what is data');
    //   });
    // }
    // signup google end
    SignupPage.prototype.loginRedirect = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__login_login__["a" /* LoginPage */]);
    };
    SignupPage.prototype.homeRoute = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */]);
    };
    SignupPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SignupPage');
        this.menu.enable(false);
    };
    return SignupPage;
}());
SignupPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-signup',template:/*ion-inline-start:"C:\xampp\htdocs\always\myApp\src\pages\signup\signup.html"*/'<!--\n\n  Generated template for the SignupPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <!-- <ion-navbar>\n\n    <ion-title>signup</ion-title>\n\n  </ion-navbar> -->\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content>\n\n	<div class="bg-gradient"></div>\n\n	<div class="signup-page">\n\n		<div class="logo">\n\n			<h1><img src="assets/img/logo.png" alt=""></h1>\n\n			<ion-grid>\n\n				<ion-row>\n\n					<ion-col col-1></ion-col>\n\n					<ion-col col-10>\n\n						<form #signupForm="ngForm" (ngSubmit)="signup(signupForm.value);">\n\n							<div class="form-group signup-input">\n\n								<span class="icon-set"><img src="assets/img/man-user.png" alt="First Name" height="20"></span>\n\n								<input type="text" class="form-control" name="firstname" placeholder="First Name" [(ngModel)]="signupForm.firstName" #firstname="ngModel" required>\n\n								<div class="error-display" *ngIf="firstname.errors && (firstname.dirty || firstname.touched)">\n\n									<div [hidden]="!firstname.errors.required">\n\n										Please Enter the First Name!\n\n									</div>\n\n								</div>\n\n							</div>\n\n							<div class="form-group signup-input">\n\n								<span class="icon-set"><img src="assets/img/man-user.png" alt="Last Name" height="20"></span>\n\n								<input type="text" class="form-control" placeholder="Last Name" name="lastname" [(ngModel)]="signupForm.lastname" #lastname="ngModel" required>\n\n								<div class="error-display" *ngIf="lastname.errors && (lastname.dirty || lastname.touched)">\n\n									<div [hidden]="!lastname.errors.required">\n\n										Please Enter the Last Name!\n\n									</div>\n\n								</div>\n\n							</div>\n\n							<div class="form-group signup-input">\n\n								<span class="icon-set"><img src="assets/img/close-envelope.png" alt="Email Address" height="20"></span>\n\n								<input type="email" class="form-control" placeholder="Email Address" name="email" [(ngModel)]="signupForm.email" #email="ngModel" required>\n\n								<div class="error-display" *ngIf="email.errors && (email.dirty || email.touched)">\n\n									<div [hidden]="!email.errors.required">\n\n										Please Enter the Email Address!\n\n									</div>\n\n								</div>\n\n							</div>\n\n							<div class="form-group signup-input">\n\n								<span class="icon-set"><img src="assets/img/padlock.png" alt="Password" height="20"></span>\n\n								<input type="password" class="form-control" placeholder="Password" name="password" [(ngModel)]="signupForm.password" #password="ngModel" required>\n\n								<div class="error-display" *ngIf="password.errors && (password.dirty || password.touched)">\n\n									<div [hidden]="!password.errors.required">\n\n										Please Enter the Password!\n\n									</div>\n\n								</div>\n\n							</div>\n\n							<div class="login-button">\n\n								<button class="btn btn-blue-outline" [disabled]="!signupForm.valid">Signup</button>\n\n							</div>\n\n						</form>\n\n						<span class="seperater">OR</span>\n\n						<div class="login-with">\n\n							<span class="login-strip">Login with</span>\n\n							<div class="social-logins">\n\n								<!-- <span><img src="assets/img/facebook.png" alt="Facebook" class="img-responsive" width="50"></span> -->\n\n								<!-- <span (click)="signupGoogle();"><img src="assets/img/google-plus.png" alt="Google" class="img-responsive" width="50"></span> -->\n\n								<!-- <a href=""></a> -->\n\n								<a href="https://aquatatva.herokuapp.com/api/auth/google">\n\n									<img src="assets/img/google-plus.png" alt="" class="img-responsive" width="50">\n\n								</a>\n\n							</div>\n\n						</div>\n\n						<div class="alert-pop" *ngIf="message" role="alert">\n\n							<p>Support Request Successfully Registered! </p>\n\n						</div>		\n\n						<div class="alert-pop" *ngIf="messageFalse" role="alert">\n\n							<p>Email Already Exists! </p>\n\n						</div>\n\n					</ion-col>\n\n					<ion-col col-1></ion-col>\n\n				</ion-row>\n\n			</ion-grid>\n\n			<div class="sign-up login">\n\n				<button class="signup-button" (click)="loginRedirect()">Login</button>\n\n			</div>\n\n		</div>\n\n	</div>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\xampp\htdocs\always\myApp\src\pages\signup\signup.html"*/,
        providers: [__WEBPACK_IMPORTED_MODULE_5__providers_all_post_all_post__["a" /* AllPostProvider */]]
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_6__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* MenuController */], __WEBPACK_IMPORTED_MODULE_4__angular_http__["a" /* Http */], __WEBPACK_IMPORTED_MODULE_5__providers_all_post_all_post__["a" /* AllPostProvider */]])
], SignupPage);

//# sourceMappingURL=signup.js.map

/***/ }),

/***/ 57:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VideosPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the VideosPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var VideosPage = (function () {
    function VideosPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.Videos = [{
                img: "assets/img/video.jpg",
                title: "Aquatatva Purification Process"
            }, {
                img: "assets/img/video.jpg",
                title: "Aquatatva Purification Process"
            }];
    }
    VideosPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad VideosPage');
    };
    return VideosPage;
}());
VideosPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-videos',template:/*ion-inline-start:"C:\xampp\htdocs\always\myApp\src\pages\videos\videos.html"*/'<!--\n  Generated template for the VideosPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n	<ion-navbar>\n		<button ion-button menuToggle>\n			<ion-icon name="menu"></ion-icon>\n		</button>\n		<ion-title>\n			<img src="assets/img/header-logo.png" alt="" class="img-responsive header-logo">\n		</ion-title>\n	</ion-navbar>\n</ion-header>\n\n\n<ion-content>\n	<div class="bg-gradient"></div>\n	<div class="video-list">\n		<ion-list>\n			<ion-card *ngFor="let video of Videos">\n				<ion-grid>\n					<ion-row>\n						<ion-col col-5>\n							<img src="{{video.img}}" alt="" class="img-responsive">\n						</ion-col>\n						<ion-col col-7>\n							<div class="video-detail">\n								<h4>{{video.title}}</h4>\n								<!-- <button class="view-more btn-cream-outline" ion-button>View More</button> -->\n							</div>\n						</ion-col>\n					</ion-row>\n				</ion-grid>				\n			</ion-card>\n		</ion-list>\n	</div>\n</ion-content>\n'/*ion-inline-end:"C:\xampp\htdocs\always\myApp\src\pages\videos\videos.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
], VideosPage);

//# sourceMappingURL=videos.js.map

/***/ }),

/***/ 58:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UsagePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_all_post_all_post__ = __webpack_require__(29);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the UsagePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var UsagePage = (function () {
    function UsagePage(navCtrl, navParams, http, usageProvider) {
        // this.usageProvider.getBenefit().subscribe(data=>{
        //    console.log(data,'what is data');
        //    this.usageBenefits = data;
        //  });
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.usageProvider = usageProvider;
        this.usageBenefits = [];
        this.mySlideOptions = {
            page: true
        };
        this.http.get('https://aquatatva.herokuapp.com/api/showbenefit').map(function (res) { return res.json(); }).subscribe(function (data) {
            _this.usageBenefits = data;
            console.log(_this.usageBenefits, 'usage getBenefit');
        });
        this.slides = [
            {
                img: "assets/img/video.jpg",
                descp: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam qui odio, doloremque dolores ad, ut earum voluptatum sunt odit sit id accusamus minus commodi itaque nulla numquam nobis distinctio consequatur."
            }, {
                img: "assets/img/video.jpg",
                descp: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam qui odio, doloremque dolores ad, ut earum voluptatum sunt odit sit id accusamus minus commodi itaque nulla numquam nobis distinctio consequatur."
            }, {
                img: "assets/img/video.jpg",
                descp: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam qui odio, doloremque dolores ad, ut earum voluptatum sunt odit sit id accusamus minus commodi itaque nulla numquam nobis distinctio consequatur."
            }
        ];
    }
    UsagePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad UsagePage');
    };
    return UsagePage;
}());
UsagePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-usage',template:/*ion-inline-start:"C:\xampp\htdocs\always\myApp\src\pages\usage\usage.html"*/'<!--\n  Generated template for the UsagePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n	<ion-navbar>\n		<button ion-button menuToggle>\n			<ion-icon name="menu"></ion-icon>\n		</button>\n		<ion-title>\n			<img src="assets/img/header-logo.png" alt="" class="img-responsive header-logo">\n		</ion-title>\n	</ion-navbar>\n</ion-header>\n\n\n<ion-content class="usage-main">	\n	<div class="slider">\n		<ion-slides pager>\n			<ion-slide *ngFor="let slide of usageBenefits">\n				<img [src]="slide.image" alt="{{slide.title}}">\n				<div class="slide-detail">{{slide.usage_and_benefits}}</div>\n			</ion-slide>\n		</ion-slides>\n	</div>\n\n</ion-content>\n'/*ion-inline-end:"C:\xampp\htdocs\always\myApp\src\pages\usage\usage.html"*/,
        providers: [__WEBPACK_IMPORTED_MODULE_3__providers_all_post_all_post__["a" /* AllPostProvider */]]
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Http */], __WEBPACK_IMPORTED_MODULE_3__providers_all_post_all_post__["a" /* AllPostProvider */]])
], UsagePage);

//# sourceMappingURL=usage.js.map

/***/ })

},[204]);
//# sourceMappingURL=main.js.map