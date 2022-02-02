(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\bryan\OneDrive\Escritorio\Test-Api\test-reign\test-frontend-reign\src\main.ts */"zUnb");


/***/ }),

/***/ "1LmZ":
/*!**********************************************!*\
  !*** ./src/app/pages/home/home.component.ts ***!
  \**********************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_api_urlPublished_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/api-urlPublished.service */ "LvJ5");
/* harmony import */ var ngx_infinite_scroll__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-infinite-scroll */ "dlKe");





function HomeComponent_img_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "img", 20);
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("src", "../../../assets/frameworks/", ctx_r0.chooseFramework.img, ".png", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
} }
function HomeComponent_div_27_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "i", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Today");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "a", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "article");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "You have not selected any framework, please select one to display the news");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](10, "i", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function HomeComponent_div_27_div_2_i_10_Template(rf, ctx) { if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "i", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function HomeComponent_div_27_div_2_i_10_Template_i_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r14); const i_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().index; const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r12.likes(true, i_r9, ctx_r12.chooseFramework.title); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function HomeComponent_div_27_div_2_i_11_Template(rf, ctx) { if (rf & 1) {
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "i", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function HomeComponent_div_27_div_2_i_11_Template_i_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r17); const i_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().index; const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r15.likes(false, i_r9, ctx_r15.chooseFramework.title); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function HomeComponent_div_27_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "i", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "a", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "article");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](10, HomeComponent_div_27_div_2_i_10_Template, 1, 0, "i", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](11, HomeComponent_div_27_div_2_i_11_Template, 1, 0, "i", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r8 = ctx.$implicit;
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate3"](" ", ctx_r7.getDay(item_r8.created_ad), " ", ctx_r7.getMonth(item_r8.created_ad), " by ", item_r8.author, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("href", item_r8.story_url, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](item_r8.story_title);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !item_r8.like);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", item_r8.like);
} }
function HomeComponent_div_27_Template(rf, ctx) { if (rf & 1) {
    const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("scrolled", function HomeComponent_div_27_Template_div_scrolled_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r19); const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r18.onScrollDown(ctx_r18.chooseFramework.title); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, HomeComponent_div_27_div_1_Template, 11, 0, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, HomeComponent_div_27_div_2_Template, 12, 7, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1.dataNews.length == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r1.dataNews);
} }
function HomeComponent_div_28_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "i", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Today");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "a", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "article");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "There is no favorite news about this framework, please select one to show the news");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](10, "i", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function HomeComponent_div_28_div_2_i_10_Template(rf, ctx) { if (rf & 1) {
    const _r28 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "i", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function HomeComponent_div_28_div_2_i_10_Template_i_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r28); const i_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().index; const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r26.likes(true, i_r23, ctx_r26.chooseFramework.title); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function HomeComponent_div_28_div_2_i_11_Template(rf, ctx) { if (rf & 1) {
    const _r31 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "i", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function HomeComponent_div_28_div_2_i_11_Template_i_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r31); const i_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().index; const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r29.likes(false, i_r23, ctx_r29.chooseFramework.title); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function HomeComponent_div_28_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "i", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "a", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "article");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](10, HomeComponent_div_28_div_2_i_10_Template, 1, 0, "i", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](11, HomeComponent_div_28_div_2_i_11_Template, 1, 0, "i", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r22 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("2 hours ago by ", item_r22.author, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("href", item_r22.story_url, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](item_r22.story_title);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !item_r22.like);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", item_r22.like);
} }
function HomeComponent_div_28_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, HomeComponent_div_28_div_1_Template, 11, 0, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, HomeComponent_div_28_div_2_Template, 12, 5, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r2.dataFavorite.length == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r2.dataFavorite);
} }
function HomeComponent_div_29_Template(rf, ctx) { if (rf & 1) {
    const _r33 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function HomeComponent_div_29_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r33); const ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r32.onScrollTop(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "i", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function HomeComponent_div_30_Template(rf, ctx) { if (rf & 1) {
    const _r35 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function HomeComponent_div_30_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r35); const ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r34.onScrollTop(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " - No more data news -\n");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function HomeComponent_div_31_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "i", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
const _c0 = function (a0) { return { "active-left": a0 }; };
const _c1 = function (a0) { return { "active-right": a0 }; };
class HomeComponent {
    constructor(document, _news) {
        this.document = document;
        this._news = _news;
        /* VARIABLES */
        this.showbtn = false;
        this.showToast = false;
        this.showLoading = false;
        this.infinityScroll = false;
        this.maxPage = 50;
        this.countPage = 0;
        this.lengthPublish = 20;
        this.btnShow = 0;
        this.durationInSeconds = 5;
        this.chooseFramework = {
            title: 'Select your news',
            img: 'none'
        };
        this.scrollHeight = 200;
        this.dataNews = [];
        this.dataStorage = [];
        this.dataFavorite = [];
    }
    ngOnInit() { }
    /* Method to know if the user scrolls */
    onWindowScroll() {
        const yOffSet = window.pageXOffset;
        const scrollTop = this.document.documentElement.scrollTop;
        this.showbtn = (yOffSet || scrollTop) > this.scrollHeight;
    }
    /* Method to comeback up page */
    onScrollTop() {
        this.document.documentElement.scrollTop = 0;
    }
    onScrollDown(framework) {
        this.infinityScroll = false;
        this.lengthPublish += 20;
        this.countPage += 1;
        if (this.countPage >= this.maxPage) {
            this.infinityScroll = true;
            this.showToast = true;
        }
        else {
            this._news.getNews(framework, this.countPage.toString()).subscribe(Response => {
                console.log(Response);
                this.buildData(Response.body, framework);
            }, Error => {
                console.error(Error);
            });
        }
    }
    /* Load the news */
    onLoadData(framework, idPage) {
        var _a;
        this.showLoading = true;
        if (((_a = this.chooseFramework) === null || _a === void 0 ? void 0 : _a.title) != framework) {
            this.chooseFramework = {
                title: framework,
                img: framework
            };
            /* Empty Arrays Data */
            this.dataNews = [];
            this.dataFavorite = [];
            this.countPage = 0;
            this.showToast = false;
            /* Build the favorites news */
            let data = JSON.parse(localStorage.getItem(framework));
            if (data != null) {
                this.showLoading = false;
                for (let i in data) {
                    if (data[i].like) {
                        this.dataFavorite.push(data[i]);
                    }
                }
            }
        }
        let tecnology = localStorage.getItem(framework);
        if ((tecnology != null) && (this.dataNews.length > this.lengthPublish) && (this.infinityScroll)) {
            this.dataNews = JSON.parse(localStorage.getItem(framework));
            this.showLoading = false;
        }
        else {
            this._news.getNews(framework, idPage).subscribe(Response => {
                console.log(Response);
                this.maxPage = Response.body.nbPages;
                this.buildData(Response.body, framework);
            }, Error => {
                console.error(Error);
            });
        }
    }
    /* Build the data news */
    buildData(data, framework) {
        let news = data.hits;
        for (let index in news) {
            let date = news[index].created_at;
            let titleNews = news[index].title;
            let authorNews = news[index].author;
            let urlNews = news[index].url;
            if ((date != null) && (titleNews != null) &&
                (authorNews != null) && (urlNews != null)) {
                this.dataNews.push({
                    author: authorNews,
                    story_title: titleNews,
                    story_url: urlNews,
                    created_ad: date,
                    like: false
                });
            }
            ;
        }
        ;
        if ((this.dataNews.length < this.lengthPublish) && (this.countPage + 1 < data.nbPages)) {
            this.countPage = data.page + 1;
            this.onLoadData(this.chooseFramework.title, this.countPage.toString());
        }
        else {
            console.log(this.dataNews);
            this.showLoading = false;
            localStorage.setItem(framework, JSON.stringify(this.dataNews));
            this.infinityScroll = true;
        }
    }
    /* On Favorite News */
    likes(likePublish, index, framework) {
        this.dataNews[index].like = likePublish;
        localStorage.setItem(framework, JSON.stringify(this.dataNews));
    }
    /* Show the all news or favorite news */
    showNews(flag, framework) {
        if (flag) {
            this.btnShow = 0;
        }
        else {
            this.btnShow = 1;
            this.dataFavorite = [];
            let data = JSON.parse(localStorage.getItem(framework));
            for (let i in data) {
                if (data[i].like) {
                    this.dataFavorite.push(data[i]);
                }
            }
        }
    }
    /* Method date */
    getDay(date) {
        let day = new Date(date).getDate();
        return day;
    }
    getMonth(date) {
        let month = new Date(date).getMonth();
        if (month == 0) {
            return 'january';
        }
        if (month == 1) {
            return 'february';
        }
        if (month == 2) {
            return 'march';
        }
        if (month == 3) {
            return 'april';
        }
        if (month == 4) {
            return 'may';
        }
        if (month == 5) {
            return 'june';
        }
        if (month == 6) {
            return 'july';
        }
        if (month == 7) {
            return 'august';
        }
        if (month == 8) {
            return 'september';
        }
        if (month == 9) {
            return 'octpber';
        }
        if (month == 10) {
            return 'november';
        }
        if (month == 11) {
            return 'december';
        }
    }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_0__["DOCUMENT"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_api_urlPublished_service__WEBPACK_IMPORTED_MODULE_2__["ApiUrlPublishedService"])); };
HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["app-home"]], hostBindings: function HomeComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("scroll", function HomeComponent_scroll_HostBindingHandler() { return ctx.onWindowScroll(); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresolveWindow"]);
    } }, decls: 32, vars: 13, consts: [[1, "header"], [1, "header--h1"], [1, "section--home"], [1, "btn--publications--type"], [1, "animate__animated", "animate__fadeIn", 3, "ngClass", "click"], [1, "body--section"], [1, "dropdown"], ["type", "button", "id", "dropdownMenu2", "data-bs-toggle", "dropdown", "aria-expanded", "false", 1, "btn", "dropdown-toggle"], ["alt", "", 3, "src", 4, "ngIf"], ["aria-labelledby", "dropdownMenu2", 1, "dropdown-menu"], [3, "click"], ["type", "button", 1, "dropdown-item"], ["src", "../../../assets/frameworks/angular.png", "alt", ""], ["src", "../../../assets/frameworks/reactjs.png", "alt", ""], ["src", "../../../assets/frameworks/vuejs.png", "alt", ""], ["class", "grid--publications", "infiniteScroll", "", 3, "scrolled", 4, "ngIf"], ["class", "grid--publications", 4, "ngIf"], ["class", "btn--come-to-up", 3, "click", 4, "ngIf"], ["class", "toast-data", 3, "click", 4, "ngIf"], ["class", "toast-loading-background animate__animated animate__pulse", 4, "ngIf"], ["alt", "", 3, "src"], ["infiniteScroll", "", 1, "grid--publications", 3, "scrolled"], ["class", "publications animate__animated animate__fadeIn", 4, "ngIf"], ["class", "publications animate__animated animate__fadeIn", 4, "ngFor", "ngForOf"], [1, "publications", "animate__animated", "animate__fadeIn"], [1, "content--publication"], [1, "far", "fa-clock"], ["href", "/", "target", "_blank", "rel", "noopener noreferrer"], [1, "segment--like"], [1, "fas", "fa-newspaper", "animate__animated", "animate__fadeIn"], ["target", "_blank", "rel", "noopener noreferrer", 3, "href"], ["class", "far fa-heart animate__animated animate__fadeIn", 3, "click", 4, "ngIf"], ["class", "fas fa-heart  animate__animated animate__rubberBand", 3, "click", 4, "ngIf"], [1, "far", "fa-heart", "animate__animated", "animate__fadeIn", 3, "click"], [1, "fas", "fa-heart", "animate__animated", "animate__rubberBand", 3, "click"], [1, "grid--publications"], [1, "btn--come-to-up", 3, "click"], [1, "fas", "fa-chevron-circle-up"], [1, "toast-data", 3, "click"], [1, "toast-loading-background", "animate__animated", "animate__pulse"], [1, "toast-loading"], [1, "fas", "fa-spinner"]], template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "header", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "h1", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Hacker News");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "section", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function HomeComponent_Template_button_click_5_listener() { return ctx.showNews(true, ctx.chooseFramework.title); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, " All ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function HomeComponent_Template_button_click_7_listener() { return ctx.showNews(false, ctx.chooseFramework.title); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, " My faves ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](12, HomeComponent_img_12_Template, 1, 1, "img", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "ul", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "li", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function HomeComponent_Template_li_click_15_listener() { return ctx.onLoadData("angular", "0"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](17, "img", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, " Angular ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "li", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function HomeComponent_Template_li_click_19_listener() { return ctx.onLoadData("reactjs", "0"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](21, "img", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22, " React ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "li", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function HomeComponent_Template_li_click_23_listener() { return ctx.onLoadData("vuejs", "0"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](25, "img", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26, " Vuejs ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](27, HomeComponent_div_27_Template, 3, 2, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](28, HomeComponent_div_28_Template, 3, 2, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](29, HomeComponent_div_29_Template, 2, 0, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](30, HomeComponent_div_30_Template, 2, 0, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](31, HomeComponent_div_31_Template, 3, 0, "div", 19);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](9, _c0, ctx.btnShow == 0));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](11, _c1, ctx.btnShow == 1));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.chooseFramework.title != "Select your news");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx.chooseFramework.title, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.btnShow == 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.btnShow == 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.showbtn);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.showToast);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.showLoading);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_0__["NgIf"], ngx_infinite_scroll__WEBPACK_IMPORTED_MODULE_3__["InfiniteScrollDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_0__["NgForOf"]], styles: ["html[_ngcontent-%COMP%] {\n  scroll-behavior: smooth;\n}\nhtml[_ngcontent-%COMP%], body[_ngcontent-%COMP%] {\n  height: 100%;\n}\nbody[_ngcontent-%COMP%] {\n  margin: 0;\n  font-family: Roboto, \"Helvetica Neue\", sans-serif;\n}\n.header[_ngcontent-%COMP%] {\n  background: white;\n  background: linear-gradient(0deg, white 0%, #ececec 60%);\n  box-shadow: 0 1px 4px 0 rgba(0, 21, 41, 0.12);\n  background-image: linear-gradient(to bottom, #ececec -32%, #fff 124%);\n  margin-top: -1rem;\n}\n.header[_ngcontent-%COMP%]   .header--h1[_ngcontent-%COMP%] {\n  padding: 2.75rem 9.375rem;\n  font-family: \"Libre Baskerville\", serif;\n  font-weight: 400;\n  font-size: 1.75rem;\n  line-height: 1.75rem;\n  text-transform: uppercase;\n  color: #3b3b3b;\n}\n.section--home[_ngcontent-%COMP%] {\n  \n  \n}\n.section--home[_ngcontent-%COMP%]   .btn--publications--type[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  margin-top: 4.563rem;\n}\n.section--home[_ngcontent-%COMP%]   .btn--publications--type[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  cursor: pointer;\n  background-color: #fcfcfc;\n  width: 7rem;\n  height: 1.938rem;\n  border-radius: 2px;\n  font-size: 1rem;\n  font-family: \"Roboto\", sans-serif;\n  font-weight: 500;\n  letter-spacing: normal;\n  text-align: center;\n  border: 1px solid #d6d6d6;\n  color: #606060;\n}\n.section--home[_ngcontent-%COMP%]   .body--section[_ngcontent-%COMP%] {\n  padding-left: 9.375rem;\n  padding-right: 9.375rem;\n  padding-bottom: 2rem;\n  \n  \n}\n.section--home[_ngcontent-%COMP%]   .body--section[_ngcontent-%COMP%]   .dropdown[_ngcontent-%COMP%] {\n  margin-top: 2.5rem;\n}\n.section--home[_ngcontent-%COMP%]   .body--section[_ngcontent-%COMP%]   .dropdown[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  width: 15rem;\n  text-align: left;\n  font-family: \"Roboto\", sans-serif;\n  font-weight: 400;\n  font-size: 0.875rem;\n  border: 1px solid rgba(0, 21, 41, 0.12);\n}\n.section--home[_ngcontent-%COMP%]   .body--section[_ngcontent-%COMP%]   .dropdown[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 1.5rem;\n  height: 1.5rem;\n  margin-right: 1rem;\n}\n.section--home[_ngcontent-%COMP%]   .body--section[_ngcontent-%COMP%]   .dropdown[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]:focus {\n  outline: 0;\n  box-shadow: 0 0 0 0.05rem black;\n}\n.section--home[_ngcontent-%COMP%]   .body--section[_ngcontent-%COMP%]   .dropdown[_ngcontent-%COMP%]   .dropdown-toggle[_ngcontent-%COMP%]::after {\n  display: inline-block;\n  margin-left: 6.8em;\n}\n.section--home[_ngcontent-%COMP%]   .body--section[_ngcontent-%COMP%]   .dropdown[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%] {\n  border: none;\n  box-shadow: 1px 2px 2px 0 rgba(0, 0, 0, 0.1);\n}\n.section--home[_ngcontent-%COMP%]   .body--section[_ngcontent-%COMP%]   .dropdown[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  width: 15rem;\n  padding: 0.2rem 0.7rem;\n}\n.section--home[_ngcontent-%COMP%]   .body--section[_ngcontent-%COMP%]   .dropdown[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 1.5rem;\n  height: 1.5rem;\n}\n.section--home[_ngcontent-%COMP%]   .body--section[_ngcontent-%COMP%]   .dropdown[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  font-family: \"Roboto\", sans-serif;\n  font-size: 0.875rem;\n  font-weight: 400;\n}\n.section--home[_ngcontent-%COMP%]   .body--section[_ngcontent-%COMP%]   .grid--publications[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 48% 48%;\n  gap: 0.5em 2.5em;\n  margin-top: 2.5rem;\n  position: relative;\n}\n.section--home[_ngcontent-%COMP%]   .body--section[_ngcontent-%COMP%]   .grid--publications[_ngcontent-%COMP%]   .publications[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  border: 1px solid #D1D1D1;\n  border-radius: 6px;\n  background-color: #fff;\n  transition: all 0.3s ease-in-out;\n  margin-bottom: 0.875rem;\n}\n.section--home[_ngcontent-%COMP%]   .body--section[_ngcontent-%COMP%]   .grid--publications[_ngcontent-%COMP%]   .publications[_ngcontent-%COMP%]   .content--publication[_ngcontent-%COMP%] {\n  padding: 1.438rem;\n}\n.section--home[_ngcontent-%COMP%]   .body--section[_ngcontent-%COMP%]   .grid--publications[_ngcontent-%COMP%]   .publications[_ngcontent-%COMP%]   .content--publication[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  font-family: \"Roboto\", sans-serif;\n  font-weight: 400;\n}\n.section--home[_ngcontent-%COMP%]   .body--section[_ngcontent-%COMP%]   .grid--publications[_ngcontent-%COMP%]   .publications[_ngcontent-%COMP%]   .content--publication[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: #606060;\n  font-size: 0.875rem;\n  margin-right: 0.4rem;\n}\n.section--home[_ngcontent-%COMP%]   .body--section[_ngcontent-%COMP%]   .grid--publications[_ngcontent-%COMP%]   .publications[_ngcontent-%COMP%]   .content--publication[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #6c6c6c;\n  font-size: 0.688rem;\n  margin: 0;\n}\n.section--home[_ngcontent-%COMP%]   .body--section[_ngcontent-%COMP%]   .grid--publications[_ngcontent-%COMP%]   .publications[_ngcontent-%COMP%]   .content--publication[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  text-decoration: none;\n  color: #6b6b6b;\n}\n.section--home[_ngcontent-%COMP%]   .body--section[_ngcontent-%COMP%]   .grid--publications[_ngcontent-%COMP%]   .publications[_ngcontent-%COMP%]   .content--publication[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   article[_ngcontent-%COMP%] {\n  margin-top: 0.2rem;\n  font-family: \"Roboto\", sans-serif;\n  font-weight: 500;\n  font-size: 0.875rem;\n  letter-spacing: 0.25px;\n  line-height: 20px;\n  text-align: justify;\n}\n.section--home[_ngcontent-%COMP%]   .body--section[_ngcontent-%COMP%]   .grid--publications[_ngcontent-%COMP%]   .publications[_ngcontent-%COMP%]   .segment--like[_ngcontent-%COMP%] {\n  position: relative;\n  padding: 2.1rem;\n  background-color: #f5f5f5;\n  border-radius: 0px 5px 5px 0px;\n  height: 100%;\n}\n.section--home[_ngcontent-%COMP%]   .body--section[_ngcontent-%COMP%]   .grid--publications[_ngcontent-%COMP%]   .publications[_ngcontent-%COMP%]   .segment--like[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  cursor: pointer;\n  position: absolute;\n  left: 23px;\n  font-size: 1.5rem;\n  color: #DD0031;\n}\n.section--home[_ngcontent-%COMP%]   .body--section[_ngcontent-%COMP%]   .grid--publications[_ngcontent-%COMP%]   .publications[_ngcontent-%COMP%]:hover {\n  opacity: 40%;\n}\n.btn--come-to-up[_ngcontent-%COMP%] {\n  position: fixed;\n  bottom: 1rem;\n  right: 1.5rem;\n}\n.btn--come-to-up[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 2.5rem;\n  color: #1797ff;\n  text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.2);\n}\n\n.toast-loading-background[_ngcontent-%COMP%] {\n  background-color: rgba(0, 0, 0, 0.3);\n  width: 100%;\n  height: 100%;\n  position: fixed;\n  top: 0;\n}\n.toast-loading-background[_ngcontent-%COMP%]   .toast-loading[_ngcontent-%COMP%] {\n  position: fixed;\n  display: block;\n  left: 48%;\n  top: 40%;\n  padding: 0.5rem;\n  background-color: rgba(64, 165, 247, 0.692);\n  border-radius: 50%;\n  font-family: \"Roboto\", sans-serif;\n  font-weight: 500;\n  font-size: 1rem;\n  z-index: 999;\n  box-shadow: 3px 3px 10px rgba(0, 0, 0, 0.2);\n}\n.toast-loading-background[_ngcontent-%COMP%]   .toast-loading[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 3rem;\n  animation-name: rotation;\n  animation-duration: 3s;\n  animation-iteration-count: infinite;\n  animation-timing-function: linear;\n}\n.toast-data[_ngcontent-%COMP%] {\n  display: block;\n  text-align: center;\n  margin-bottom: 1rem;\n  font-family: \"Libre Baskerville\", serif;\n  font-weight: 500;\n  font-size: 1rem;\n  color: #606060;\n}\n\n.active-left[_ngcontent-%COMP%] {\n  border-top: solid 2px #1797ff !important;\n  border-bottom: solid 2px #1797ff !important;\n  border-left: solid 2px #1797ff !important;\n  color: #1797ff !important;\n  transition: all 0.2s ease-in-out;\n}\n.active-right[_ngcontent-%COMP%] {\n  border-top: solid 2px #1797ff !important;\n  border-bottom: solid 2px #1797ff !important;\n  border-right: solid 2px #1797ff !important;\n  color: #1797ff !important;\n  transition: all 0.2s ease-in-out;\n}\n.onLike[_ngcontent-%COMP%] {\n  display: block;\n}\n.offLike[_ngcontent-%COMP%] {\n  display: none;\n}\n@keyframes rotation {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n@media only screen and (max-width: 768px) {\n  .body--section[_ngcontent-%COMP%] {\n    padding-left: 2rem !important;\n    padding-right: 2rem !important;\n  }\n\n  .section--home[_ngcontent-%COMP%]   .body--section[_ngcontent-%COMP%]   .grid--publications[_ngcontent-%COMP%]   .publications[_ngcontent-%COMP%]   .content--publication[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   article[_ngcontent-%COMP%] {\n    margin-top: 0.2rem;\n    font-family: \"Roboto\", sans-serif;\n    font-weight: 500;\n    font-size: 0.75rem;\n    letter-spacing: 0.25px;\n    line-height: 20px;\n    text-align: justify;\n  }\n}\n@media only screen and (max-width: 465px) {\n  .header[_ngcontent-%COMP%]   .header--h1[_ngcontent-%COMP%] {\n    padding: 2.75rem 5.375rem;\n    font-family: \"Libre Baskerville\", serif;\n    font-weight: 400;\n    font-size: 1.75rem;\n    line-height: 1.75rem;\n    text-transform: uppercase;\n    color: #3b3b3b;\n  }\n\n  .section--home[_ngcontent-%COMP%]   .body--section[_ngcontent-%COMP%]   .grid--publications[_ngcontent-%COMP%] {\n    display: grid;\n    grid-template-columns: 100%;\n    gap: 0.5em 2.5em;\n    margin-top: 2.5rem;\n    position: relative;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFxzdHlsZXMuc2NzcyIsIi4uXFwuLlxcLi5cXC4uXFxob21lLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLDhFQUFBO0FBRUEsZ0JBQUE7QUFJQSxrQkFBQTtBQUNBO0VBQ0UsdUJBQUE7QUNIRjtBRE1BO0VBQWEsWUFBQTtBQ0ZiO0FER0E7RUFBTyxTQUFBO0VBQVcsaURBQUE7QUNFbEI7QUFiQTtFQUNFLGlCQUFBO0VBQ0Esd0RBQUE7RUFDQSw2Q0FBQTtFQUNBLHFFQUFBO0VBQ0EsaUJBQUE7QUFnQkY7QUFkRTtFQUNFLHlCQUFBO0VBQ0EsdUNEUEs7RUNRTCxnQkFBQTtFQUNBLGtCQUFBO0VBQ0Esb0JBQUE7RUFDQSx5QkFBQTtFQUNBLGNBQUE7QUFnQko7QUFiQTtFQUVFLGlDQUFBO0VBc0JBLGlDQUFBO0FBTkY7QUFmRTtFQUNFLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG9CQUFBO0FBaUJKO0FBZkk7RUFDRSxlQUFBO0VBQ0EseUJBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxpQ0Q3Qks7RUM4QkwsZ0JBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSxjQUFBO0FBaUJOO0FBWkU7RUFDRSxzQkFBQTtFQUNBLHVCQUFBO0VBQ0Esb0JBQUE7RUFFQSxnQkFBQTtFQWtEQSxzQkFBQTtBQXBDSjtBQWJJO0VBQ0Usa0JBQUE7QUFlTjtBQWJNO0VBQ0UsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsaUNEbkRHO0VDb0RILGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSx1Q0FBQTtBQWVSO0FBYlE7RUFDRSxhQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0FBZVY7QUFaTTtFQUNFLFVBQUE7RUFDQSwrQkFBQTtBQWNSO0FBWk07RUFDRSxxQkFBQTtFQUNBLGtCQUFBO0FBY1I7QUFYTTtFQUNFLFlBQUE7RUFDQSw0Q0FBQTtBQWFSO0FBWlE7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0Esc0JBQUE7QUFjVjtBQVpVO0VBQ0UsYUFBQTtFQUNBLGNBQUE7QUFjWjtBQVhVO0VBQ0UsaUNEdEZEO0VDdUZDLG1CQUFBO0VBQ0EsZ0JBQUE7QUFhWjtBQU5JO0VBQ0UsYUFBQTtFQUNBLDhCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0FBUU47QUFOTTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDhCQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtFQUNBLHNCQUFBO0VBQ0EsZ0NBQUE7RUFDQSx1QkFBQTtBQVFSO0FBTlE7RUFDRSxpQkFBQTtBQVFWO0FBTlU7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQ0R0SEQ7RUN1SEMsZ0JBQUE7QUFRWjtBQU5ZO0VBQ0UsY0FBQTtFQUNBLG1CQUFBO0VBQ0Esb0JBQUE7QUFRZDtBQUxZO0VBQ0UsY0FBQTtFQUNBLG1CQUFBO0VBQ0EsU0FBQTtBQU9kO0FBSFU7RUFDRSxxQkFBQTtFQUNBLGNBQUE7QUFLWjtBQUhZO0VBQ0Usa0JBQUE7RUFDQSxpQ0Q1SUg7RUM2SUcsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLHNCQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtBQUtkO0FBQ1E7RUFDRSxrQkFBQTtFQUNBLGVBQUE7RUFDQSx5QkFBQTtFQUNBLDhCQUFBO0VBQ0EsWUFBQTtBQUNWO0FBQ1U7RUFDRSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0FBQ1o7QUFHUTtFQUNFLFlBQUE7QUFEVjtBQVNBO0VBQ0UsZUFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0FBTkY7QUFRRTtFQUNFLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLDJDQUFBO0FBTko7QUFXQSxXQUFBO0FBQ0E7RUFDRSxvQ0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLE1BQUE7QUFSRjtBQVVFO0VBQ0UsZUFBQTtFQUNBLGNBQUE7RUFDQSxTQUFBO0VBQ0EsUUFBQTtFQUNBLGVBQUE7RUFDQSwyQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsaUNEN01PO0VDOE1QLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSwyQ0FBQTtBQVJKO0FBVUk7RUFDRSxlQUFBO0VBQ0Esd0JBQUE7RUFDQSxzQkFBQTtFQUNBLG1DQUFBO0VBQ0EsaUNBQUE7QUFSTjtBQWFBO0VBQ0UsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSx1Q0RsT087RUNtT1AsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtBQVZGO0FBYUEseUJBQUE7QUFDQTtFQUNFLHdDQUFBO0VBQ0EsMkNBQUE7RUFDQSx5Q0FBQTtFQUNBLHlCQUFBO0VBQ0EsZ0NBQUE7QUFWRjtBQWFBO0VBQ0Usd0NBQUE7RUFDQSwyQ0FBQTtFQUNBLDBDQUFBO0VBQ0EseUJBQUE7RUFDQSxnQ0FBQTtBQVZGO0FBYUE7RUFDRSxjQUFBO0FBVkY7QUFZQTtFQUNFLGFBQUE7QUFURjtBQWFBO0VBQ0U7SUFDRSx1QkFBQTtFQVZGO0VBWUE7SUFDRSx5QkFBQTtFQVZGO0FBQ0Y7QUFjQTtFQUNFO0lBQ0UsNkJBQUE7SUFDQSw4QkFBQTtFQVpGOztFQWVBO0lBQ0Usa0JBQUE7SUFDQSxpQ0FBQTtJQUNBLGdCQUFBO0lBQ0Esa0JBQUE7SUFDQSxzQkFBQTtJQUNBLGlCQUFBO0lBQ0EsbUJBQUE7RUFaRjtBQUNGO0FBZUE7RUFDRTtJQUNFLHlCQUFBO0lBQ0EsdUNBQUE7SUFDQSxnQkFBQTtJQUNBLGtCQUFBO0lBQ0Esb0JBQUE7SUFDQSx5QkFBQTtJQUNBLGNBQUE7RUFiRjs7RUFlQTtJQUNFLGFBQUE7SUFDQSwyQkFBQTtJQUNBLGdCQUFBO0lBQ0Esa0JBQUE7SUFDQSxrQkFBQTtFQVpGO0FBQ0YiLCJmaWxlIjoiaG9tZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIFlvdSBjYW4gYWRkIGdsb2JhbCBzdHlsZXMgdG8gdGhpcyBmaWxlLCBhbmQgYWxzbyBpbXBvcnQgb3RoZXIgc3R5bGUgZmlsZXMgKi9cclxuXHJcbi8qIEZPTlQgRkFNSUxZICovXHJcbiR0aXRsZXM6ICdMaWJyZSBCYXNrZXJ2aWxsZScsIHNlcmlmO1xyXG4kc3VidGl0bGU6ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xyXG5cclxuLyogR0VORVJBTCBTVFlMRVMqL1xyXG5odG1se1xyXG4gIHNjcm9sbC1iZWhhdmlvcjogc21vb3RoO1xyXG59XHJcblxyXG5odG1sLCBib2R5IHsgaGVpZ2h0OiAxMDAlOyB9XHJcbmJvZHkgeyBtYXJnaW46IDA7IGZvbnQtZmFtaWx5OiBSb2JvdG8sIFwiSGVsdmV0aWNhIE5ldWVcIiwgc2Fucy1zZXJpZjsgfVxyXG4iLCIvKiBZb3UgY2FuIGFkZCBnbG9iYWwgc3R5bGVzIHRvIHRoaXMgZmlsZSwgYW5kIGFsc28gaW1wb3J0IG90aGVyIHN0eWxlIGZpbGVzICovXG4vKiBGT05UIEZBTUlMWSAqL1xuLyogR0VORVJBTCBTVFlMRVMqL1xuaHRtbCB7XG4gIHNjcm9sbC1iZWhhdmlvcjogc21vb3RoO1xufVxuXG5odG1sLCBib2R5IHtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG5ib2R5IHtcbiAgbWFyZ2luOiAwO1xuICBmb250LWZhbWlseTogUm9ib3RvLCBcIkhlbHZldGljYSBOZXVlXCIsIHNhbnMtc2VyaWY7XG59XG5cbi5oZWFkZXIge1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDBkZWcsIHdoaXRlIDAlLCAjZWNlY2VjIDYwJSk7XG4gIGJveC1zaGFkb3c6IDAgMXB4IDRweCAwIHJnYmEoMCwgMjEsIDQxLCAwLjEyKTtcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgI2VjZWNlYyAtMzIlLCAjZmZmIDEyNCUpO1xuICBtYXJnaW4tdG9wOiAtMXJlbTtcbn1cbi5oZWFkZXIgLmhlYWRlci0taDEge1xuICBwYWRkaW5nOiAyLjc1cmVtIDkuMzc1cmVtO1xuICBmb250LWZhbWlseTogXCJMaWJyZSBCYXNrZXJ2aWxsZVwiLCBzZXJpZjtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgZm9udC1zaXplOiAxLjc1cmVtO1xuICBsaW5lLWhlaWdodDogMS43NXJlbTtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgY29sb3I6ICMzYjNiM2I7XG59XG5cbi5zZWN0aW9uLS1ob21lIHtcbiAgLyogQlVUVE9OUyBORVdTIEFMTCAvIEZBVk9SSVRFUyAqL1xuICAvKiBCT0RZIFNFQ1RJT04gT0YgUFVCTElDQVRJT05TICovXG59XG4uc2VjdGlvbi0taG9tZSAuYnRuLS1wdWJsaWNhdGlvbnMtLXR5cGUge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgbWFyZ2luLXRvcDogNC41NjNyZW07XG59XG4uc2VjdGlvbi0taG9tZSAuYnRuLS1wdWJsaWNhdGlvbnMtLXR5cGUgYnV0dG9uIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmNmY2ZjO1xuICB3aWR0aDogN3JlbTtcbiAgaGVpZ2h0OiAxLjkzOHJlbTtcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xuICBmb250LXNpemU6IDFyZW07XG4gIGZvbnQtZmFtaWx5OiBcIlJvYm90b1wiLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogNTAwO1xuICBsZXR0ZXItc3BhY2luZzogbm9ybWFsO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNkNmQ2ZDY7XG4gIGNvbG9yOiAjNjA2MDYwO1xufVxuLnNlY3Rpb24tLWhvbWUgLmJvZHktLXNlY3Rpb24ge1xuICBwYWRkaW5nLWxlZnQ6IDkuMzc1cmVtO1xuICBwYWRkaW5nLXJpZ2h0OiA5LjM3NXJlbTtcbiAgcGFkZGluZy1ib3R0b206IDJyZW07XG4gIC8qIFNFTEVDVCBORVdTICovXG4gIC8qIEdSSUQgUFVCTElDQVRJT05TICovXG59XG4uc2VjdGlvbi0taG9tZSAuYm9keS0tc2VjdGlvbiAuZHJvcGRvd24ge1xuICBtYXJnaW4tdG9wOiAyLjVyZW07XG59XG4uc2VjdGlvbi0taG9tZSAuYm9keS0tc2VjdGlvbiAuZHJvcGRvd24gLmJ0biB7XG4gIHdpZHRoOiAxNXJlbTtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgZm9udC1mYW1pbHk6IFwiUm9ib3RvXCIsIHNhbnMtc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGZvbnQtc2l6ZTogMC44NzVyZW07XG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMCwgMjEsIDQxLCAwLjEyKTtcbn1cbi5zZWN0aW9uLS1ob21lIC5ib2R5LS1zZWN0aW9uIC5kcm9wZG93biAuYnRuIGltZyB7XG4gIHdpZHRoOiAxLjVyZW07XG4gIGhlaWdodDogMS41cmVtO1xuICBtYXJnaW4tcmlnaHQ6IDFyZW07XG59XG4uc2VjdGlvbi0taG9tZSAuYm9keS0tc2VjdGlvbiAuZHJvcGRvd24gLmJ0bjpmb2N1cyB7XG4gIG91dGxpbmU6IDA7XG4gIGJveC1zaGFkb3c6IDAgMCAwIDAuMDVyZW0gYmxhY2s7XG59XG4uc2VjdGlvbi0taG9tZSAuYm9keS0tc2VjdGlvbiAuZHJvcGRvd24gLmRyb3Bkb3duLXRvZ2dsZTo6YWZ0ZXIge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIG1hcmdpbi1sZWZ0OiA2LjhlbTtcbn1cbi5zZWN0aW9uLS1ob21lIC5ib2R5LS1zZWN0aW9uIC5kcm9wZG93biAuZHJvcGRvd24tbWVudSB7XG4gIGJvcmRlcjogbm9uZTtcbiAgYm94LXNoYWRvdzogMXB4IDJweCAycHggMCByZ2JhKDAsIDAsIDAsIDAuMSk7XG59XG4uc2VjdGlvbi0taG9tZSAuYm9keS0tc2VjdGlvbiAuZHJvcGRvd24gLmRyb3Bkb3duLW1lbnUgbGkge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB3aWR0aDogMTVyZW07XG4gIHBhZGRpbmc6IDAuMnJlbSAwLjdyZW07XG59XG4uc2VjdGlvbi0taG9tZSAuYm9keS0tc2VjdGlvbiAuZHJvcGRvd24gLmRyb3Bkb3duLW1lbnUgbGkgaW1nIHtcbiAgd2lkdGg6IDEuNXJlbTtcbiAgaGVpZ2h0OiAxLjVyZW07XG59XG4uc2VjdGlvbi0taG9tZSAuYm9keS0tc2VjdGlvbiAuZHJvcGRvd24gLmRyb3Bkb3duLW1lbnUgbGkgYnV0dG9uIHtcbiAgZm9udC1mYW1pbHk6IFwiUm9ib3RvXCIsIHNhbnMtc2VyaWY7XG4gIGZvbnQtc2l6ZTogMC44NzVyZW07XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG59XG4uc2VjdGlvbi0taG9tZSAuYm9keS0tc2VjdGlvbiAuZ3JpZC0tcHVibGljYXRpb25zIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiA0OCUgNDglO1xuICBnYXA6IDAuNWVtIDIuNWVtO1xuICBtYXJnaW4tdG9wOiAyLjVyZW07XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5zZWN0aW9uLS1ob21lIC5ib2R5LS1zZWN0aW9uIC5ncmlkLS1wdWJsaWNhdGlvbnMgLnB1YmxpY2F0aW9ucyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYm9yZGVyOiAxcHggc29saWQgI0QxRDFEMTtcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLWluLW91dDtcbiAgbWFyZ2luLWJvdHRvbTogMC44NzVyZW07XG59XG4uc2VjdGlvbi0taG9tZSAuYm9keS0tc2VjdGlvbiAuZ3JpZC0tcHVibGljYXRpb25zIC5wdWJsaWNhdGlvbnMgLmNvbnRlbnQtLXB1YmxpY2F0aW9uIHtcbiAgcGFkZGluZzogMS40MzhyZW07XG59XG4uc2VjdGlvbi0taG9tZSAuYm9keS0tc2VjdGlvbiAuZ3JpZC0tcHVibGljYXRpb25zIC5wdWJsaWNhdGlvbnMgLmNvbnRlbnQtLXB1YmxpY2F0aW9uIHNwYW4ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBmb250LWZhbWlseTogXCJSb2JvdG9cIiwgc2Fucy1zZXJpZjtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbn1cbi5zZWN0aW9uLS1ob21lIC5ib2R5LS1zZWN0aW9uIC5ncmlkLS1wdWJsaWNhdGlvbnMgLnB1YmxpY2F0aW9ucyAuY29udGVudC0tcHVibGljYXRpb24gc3BhbiBpIHtcbiAgY29sb3I6ICM2MDYwNjA7XG4gIGZvbnQtc2l6ZTogMC44NzVyZW07XG4gIG1hcmdpbi1yaWdodDogMC40cmVtO1xufVxuLnNlY3Rpb24tLWhvbWUgLmJvZHktLXNlY3Rpb24gLmdyaWQtLXB1YmxpY2F0aW9ucyAucHVibGljYXRpb25zIC5jb250ZW50LS1wdWJsaWNhdGlvbiBzcGFuIHAge1xuICBjb2xvcjogIzZjNmM2YztcbiAgZm9udC1zaXplOiAwLjY4OHJlbTtcbiAgbWFyZ2luOiAwO1xufVxuLnNlY3Rpb24tLWhvbWUgLmJvZHktLXNlY3Rpb24gLmdyaWQtLXB1YmxpY2F0aW9ucyAucHVibGljYXRpb25zIC5jb250ZW50LS1wdWJsaWNhdGlvbiBhIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBjb2xvcjogIzZiNmI2Yjtcbn1cbi5zZWN0aW9uLS1ob21lIC5ib2R5LS1zZWN0aW9uIC5ncmlkLS1wdWJsaWNhdGlvbnMgLnB1YmxpY2F0aW9ucyAuY29udGVudC0tcHVibGljYXRpb24gYSBhcnRpY2xlIHtcbiAgbWFyZ2luLXRvcDogMC4ycmVtO1xuICBmb250LWZhbWlseTogXCJSb2JvdG9cIiwgc2Fucy1zZXJpZjtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgZm9udC1zaXplOiAwLjg3NXJlbTtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMjVweDtcbiAgbGluZS1oZWlnaHQ6IDIwcHg7XG4gIHRleHQtYWxpZ246IGp1c3RpZnk7XG59XG4uc2VjdGlvbi0taG9tZSAuYm9keS0tc2VjdGlvbiAuZ3JpZC0tcHVibGljYXRpb25zIC5wdWJsaWNhdGlvbnMgLnNlZ21lbnQtLWxpa2Uge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHBhZGRpbmc6IDIuMXJlbTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y1ZjVmNTtcbiAgYm9yZGVyLXJhZGl1czogMHB4IDVweCA1cHggMHB4O1xuICBoZWlnaHQ6IDEwMCU7XG59XG4uc2VjdGlvbi0taG9tZSAuYm9keS0tc2VjdGlvbiAuZ3JpZC0tcHVibGljYXRpb25zIC5wdWJsaWNhdGlvbnMgLnNlZ21lbnQtLWxpa2UgaSB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAyM3B4O1xuICBmb250LXNpemU6IDEuNXJlbTtcbiAgY29sb3I6ICNERDAwMzE7XG59XG4uc2VjdGlvbi0taG9tZSAuYm9keS0tc2VjdGlvbiAuZ3JpZC0tcHVibGljYXRpb25zIC5wdWJsaWNhdGlvbnM6aG92ZXIge1xuICBvcGFjaXR5OiA0MCU7XG59XG5cbi5idG4tLWNvbWUtdG8tdXAge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIGJvdHRvbTogMXJlbTtcbiAgcmlnaHQ6IDEuNXJlbTtcbn1cbi5idG4tLWNvbWUtdG8tdXAgaSB7XG4gIGZvbnQtc2l6ZTogMi41cmVtO1xuICBjb2xvcjogIzE3OTdmZjtcbiAgdGV4dC1zaGFkb3c6IDJweCAycHggNXB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcbn1cblxuLyogVE9BU1RTICovXG4udG9hc3QtbG9hZGluZy1iYWNrZ3JvdW5kIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjMpO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRvcDogMDtcbn1cbi50b2FzdC1sb2FkaW5nLWJhY2tncm91bmQgLnRvYXN0LWxvYWRpbmcge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBsZWZ0OiA0OCU7XG4gIHRvcDogNDAlO1xuICBwYWRkaW5nOiAwLjVyZW07XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoNjQsIDE2NSwgMjQ3LCAwLjY5Mik7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgZm9udC1mYW1pbHk6IFwiUm9ib3RvXCIsIHNhbnMtc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGZvbnQtc2l6ZTogMXJlbTtcbiAgei1pbmRleDogOTk5O1xuICBib3gtc2hhZG93OiAzcHggM3B4IDEwcHggcmdiYSgwLCAwLCAwLCAwLjIpO1xufVxuLnRvYXN0LWxvYWRpbmctYmFja2dyb3VuZCAudG9hc3QtbG9hZGluZyBpIHtcbiAgZm9udC1zaXplOiAzcmVtO1xuICBhbmltYXRpb24tbmFtZTogcm90YXRpb247XG4gIGFuaW1hdGlvbi1kdXJhdGlvbjogM3M7XG4gIGFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IGluZmluaXRlO1xuICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBsaW5lYXI7XG59XG5cbi50b2FzdC1kYXRhIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTtcbiAgZm9udC1mYW1pbHk6IFwiTGlicmUgQmFza2VydmlsbGVcIiwgc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGZvbnQtc2l6ZTogMXJlbTtcbiAgY29sb3I6ICM2MDYwNjA7XG59XG5cbi8qIENMQVNTIEJVVFRPTlMgQUNUSVZFICovXG4uYWN0aXZlLWxlZnQge1xuICBib3JkZXItdG9wOiBzb2xpZCAycHggIzE3OTdmZiAhaW1wb3J0YW50O1xuICBib3JkZXItYm90dG9tOiBzb2xpZCAycHggIzE3OTdmZiAhaW1wb3J0YW50O1xuICBib3JkZXItbGVmdDogc29saWQgMnB4ICMxNzk3ZmYgIWltcG9ydGFudDtcbiAgY29sb3I6ICMxNzk3ZmYgIWltcG9ydGFudDtcbiAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZS1pbi1vdXQ7XG59XG5cbi5hY3RpdmUtcmlnaHQge1xuICBib3JkZXItdG9wOiBzb2xpZCAycHggIzE3OTdmZiAhaW1wb3J0YW50O1xuICBib3JkZXItYm90dG9tOiBzb2xpZCAycHggIzE3OTdmZiAhaW1wb3J0YW50O1xuICBib3JkZXItcmlnaHQ6IHNvbGlkIDJweCAjMTc5N2ZmICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiAjMTc5N2ZmICFpbXBvcnRhbnQ7XG4gIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2UtaW4tb3V0O1xufVxuXG4ub25MaWtlIHtcbiAgZGlzcGxheTogYmxvY2s7XG59XG5cbi5vZmZMaWtlIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuQGtleWZyYW1lcyByb3RhdGlvbiB7XG4gIDAlIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcbiAgfVxuICAxMDAlIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xuICB9XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gIC5ib2R5LS1zZWN0aW9uIHtcbiAgICBwYWRkaW5nLWxlZnQ6IDJyZW0gIWltcG9ydGFudDtcbiAgICBwYWRkaW5nLXJpZ2h0OiAycmVtICFpbXBvcnRhbnQ7XG4gIH1cblxuICAuc2VjdGlvbi0taG9tZSAuYm9keS0tc2VjdGlvbiAuZ3JpZC0tcHVibGljYXRpb25zIC5wdWJsaWNhdGlvbnMgLmNvbnRlbnQtLXB1YmxpY2F0aW9uIGEgYXJ0aWNsZSB7XG4gICAgbWFyZ2luLXRvcDogMC4ycmVtO1xuICAgIGZvbnQtZmFtaWx5OiBcIlJvYm90b1wiLCBzYW5zLXNlcmlmO1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgZm9udC1zaXplOiAwLjc1cmVtO1xuICAgIGxldHRlci1zcGFjaW5nOiAwLjI1cHg7XG4gICAgbGluZS1oZWlnaHQ6IDIwcHg7XG4gICAgdGV4dC1hbGlnbjoganVzdGlmeTtcbiAgfVxufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0NjVweCkge1xuICAuaGVhZGVyIC5oZWFkZXItLWgxIHtcbiAgICBwYWRkaW5nOiAyLjc1cmVtIDUuMzc1cmVtO1xuICAgIGZvbnQtZmFtaWx5OiBcIkxpYnJlIEJhc2tlcnZpbGxlXCIsIHNlcmlmO1xuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgZm9udC1zaXplOiAxLjc1cmVtO1xuICAgIGxpbmUtaGVpZ2h0OiAxLjc1cmVtO1xuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgY29sb3I6ICMzYjNiM2I7XG4gIH1cblxuICAuc2VjdGlvbi0taG9tZSAuYm9keS0tc2VjdGlvbiAuZ3JpZC0tcHVibGljYXRpb25zIHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMTAwJTtcbiAgICBnYXA6IDAuNWVtIDIuNWVtO1xuICAgIG1hcmdpbi10b3A6IDIuNXJlbTtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIH1cbn0iXX0= */"] });


/***/ }),

/***/ "AytR":
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
let domainName = "hn.algolia.com";
const environment = {
    production: false,
    api: {
        domain: domainName,
        url: `https://${domainName}/api`
    }
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

/***/ "LvJ5":
/*!******************************************************!*\
  !*** ./src/app/services/api-urlPublished.service.ts ***!
  \******************************************************/
/*! exports provided: ApiUrlPublishedService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApiUrlPublishedService", function() { return ApiUrlPublishedService; });
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../environments/environment */ "AytR");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");



const API_URL = _environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].api.url;
class ApiUrlPublishedService {
    constructor(_http) {
        this._http = _http;
    }
    getNews(framework, idPage) {
        return this._http.get(API_URL + '/v1/search_by_date?query=' + framework + '&page=' + idPage, { observe: 'response' });
    }
}
ApiUrlPublishedService.ɵfac = function ApiUrlPublishedService_Factory(t) { return new (t || ApiUrlPublishedService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"])); };
ApiUrlPublishedService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: ApiUrlPublishedService, factory: ApiUrlPublishedService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");


class AppComponent {
    constructor() {
        this.title = 'test-frontend-reign';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var ngx_infinite_scroll__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-infinite-scroll */ "dlKe");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _pages_home_home_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/home/home.component */ "1LmZ");
/* harmony import */ var _components_snack_bar_snack_bar_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/snack-bar/snack-bar.component */ "rqfx");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ "fXoL");




/* COMPONENTS */




class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjector"]({ providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClientModule"],
            ngx_infinite_scroll__WEBPACK_IMPORTED_MODULE_3__["InfiniteScrollModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
        _pages_home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"],
        _components_snack_bar_snack_bar_component__WEBPACK_IMPORTED_MODULE_6__["SnackBarComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClientModule"],
        ngx_infinite_scroll__WEBPACK_IMPORTED_MODULE_3__["InfiniteScrollModule"]] }); })();


/***/ }),

/***/ "rqfx":
/*!*************************************************************!*\
  !*** ./src/app/components/snack-bar/snack-bar.component.ts ***!
  \*************************************************************/
/*! exports provided: SnackBarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SnackBarComponent", function() { return SnackBarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class SnackBarComponent {
    constructor() { }
    ngOnInit() {
    }
}
SnackBarComponent.ɵfac = function SnackBarComponent_Factory(t) { return new (t || SnackBarComponent)(); };
SnackBarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SnackBarComponent, selectors: [["app-snack-bar"]], decls: 2, vars: 0, consts: [[1, "example-pizza-party"]], template: function SnackBarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " No more posts\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzbmFjay1iYXIuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _pages_home_home_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pages/home/home.component */ "1LmZ");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");




const routes = [
    {
        path: '**', pathMatch: 'full',
        component: _pages_home_home_component__WEBPACK_IMPORTED_MODULE_1__["HomeComponent"]
    },
    {
        path: 'home',
        component: _pages_home_home_component__WEBPACK_IMPORTED_MODULE_1__["HomeComponent"]
    },
];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
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
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map