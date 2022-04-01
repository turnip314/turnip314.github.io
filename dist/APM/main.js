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

/***/ "./src/app/academics/academics.component.ts":
/*!**************************************************!*\
  !*** ./src/app/academics/academics.component.ts ***!
  \**************************************************/
/*! exports provided: AcademicsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AcademicsComponent", function() { return AcademicsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/expansion */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/expansion.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/table.js");






function AcademicsComponent_div_6_th_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Course Code ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AcademicsComponent_div_6_td_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const course_r10 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", course_r10.code, " ");
} }
function AcademicsComponent_div_6_th_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Course Name ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AcademicsComponent_div_6_td_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const course_r11 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", course_r11.name, " ");
} }
function AcademicsComponent_div_6_th_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Instructor ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AcademicsComponent_div_6_td_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const course_r12 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", course_r12.instructor, " ");
} }
function AcademicsComponent_div_6_tr_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 17);
} }
function AcademicsComponent_div_6_tr_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 18);
} }
function AcademicsComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-accordion");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-expansion-panel", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-expansion-panel-header");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-panel-title");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-panel-description");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "table", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](9, 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, AcademicsComponent_div_6_th_10_Template, 2, 0, "th", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, AcademicsComponent_div_6_td_11_Template, 2, 1, "td", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](12, 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, AcademicsComponent_div_6_th_13_Template, 2, 0, "th", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, AcademicsComponent_div_6_td_14_Template, 2, 1, "td", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](15, 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, AcademicsComponent_div_6_th_16_Template, 2, 0, "th", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, AcademicsComponent_div_6_td_17_Template, 2, 1, "td", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, AcademicsComponent_div_6_tr_18_Template, 1, 0, "tr", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, AcademicsComponent_div_6_tr_19_Template, 1, 0, "tr", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const term_r1 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", term_r1, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r0.timeByTerm[term_r1], " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dataSource", ctx_r0.courses[term_r1]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matHeaderRowDef", ctx_r0.courseColumnsToDisplay);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matRowDefColumns", ctx_r0.courseColumnsToDisplay);
} }
class AcademicsComponent {
    constructor() {
        this.courses = {
            'Term 1A': [
                { code: 'MATH 145', name: 'Algebra (Advanced Level)', instructor: 'David Jao' },
                { code: 'MATH 147', name: 'Calculus 1 (Advanced Level)', instructor: 'Ken Davidson' },
                { code: 'CS 145', name: 'Designing Functional Programs (Advanced Level)', instructor: 'Gordon Cormack' },
                { code: 'PHYS 121', name: 'Mechanics', instructor: 'Richard Epp' },
                { code: 'ENGL 119', name: 'Introduction to Academic Writing', instructor: 'Mike Lesiuk' },
            ],
            'Term 1B': [
                { code: 'MATH 146', name: 'Linear Algebra 1 (Advanced Level)', instructor: 'Ross Willard' },
                { code: 'MATH 148', name: 'Calculus 2 (Advanced Level)', instructor: 'Laurent Marcoux' },
                { code: 'CS 146', name: 'Elementary Algorithm Design and Data Abstraction (Advanced Level)', instructor: 'Brad Lushman' },
                { code: 'PHYS 122', name: 'Waves, Electricity, and Magnetism', instructor: 'Crystal Senko' },
                { code: 'FR 151', name: 'Basic French 1', instructor: 'Cynthia Tremblay' },
                { code: 'PD 1', name: 'Career Fundamentals', instructor: 'N/A' },
            ],
            'COOP 1': [
                { code: 'COOP 1', name: 'Wish', instructor: 'N/A' },
                { code: 'PD 11', name: 'Process for Technical Report Writing', instructor: 'N/A' },
            ],
            'Term 2A': [
                { code: 'MATH 245', name: 'Linear Algebra 2 (Advanced Level)', instructor: 'Rahim Moosa' },
                { code: 'MATH 249', name: 'Introduction to Combinatorics (Advanced Level)', instructor: 'Kevin Purbhoo' },
                { code: 'STAT 240', name: 'Probability (Advanced Level)', instructor: 'Aukosh Jagannath' },
                { code: 'CS 241E', name: 'Foundations of Sequential Programs (Enriched)', instructor: 'Ondrek Lhotak' },
                { code: 'CS 245E', name: 'Logic and Computation (Enriched)', instructor: 'Jonathan Buss' },
                { code: 'CS 246', name: 'Object-Oriented Software Development', instructor: 'Michael Godfrey' },
            ],
            'COOP 2': [
                { code: 'COOP 2', name: 'Wayfair', instructor: 'N/A' },
                { code: 'PD 10', name: 'Professional Responsibility in Computing', instructor: 'N/A' },
                { code: 'WKRPT', name: 'Work Term Report', instructor: 'N/A' },
            ],
            'Term 2B': [
                { code: 'MATH 247', name: 'Calculus 3 (Advanced Level)', instructor: 'Blake Madill' },
                { code: 'PMATH 347', name: 'Groups and Rings', instructor: 'William Slofstra' },
                { code: 'CS 240', name: 'Data Structures and Data Management', instructor: 'Karen Anderson' },
                { code: 'CS 251', name: 'Computer Organization and Design', instructor: 'Rosina Kharal' },
                { code: 'CS 370', name: 'Numerical Computation', instructor: 'Kimon Fountoulakis' },
            ],
            'COOP 3': [
                { code: 'COOP 3', name: 'BDO', instructor: 'N/A' },
                { code: 'CO 255', name: 'Introduction to Optimization (Advanced Level)', instructor: 'Jim Geelen' },
                { code: 'ENGL 119', name: 'Communications in Mathematics & Computer Science', instructor: 'Diana Lobb' },
                { code: 'WKRPT', name: 'Work Term Report', instructor: 'N/A' },
            ],
            'Term 3A': [
                { code: 'PMATH 348', name: 'Fields and Galois Theory', instructor: 'Yu-Ru Liu' },
                { code: 'PMATH 352', name: 'Complex Analysis', instructor: 'Ruxandra Moraru' },
                { code: 'PMATH 365', name: 'Differential Geometry', instructor: 'Stephen New' },
                { code: 'CS 341', name: 'Algorithms', instructor: 'Online' },
                { code: 'CS 350', name: 'Operating Systems', instructor: 'Lesley Istead' },
                { code: 'CO 487', name: 'Applied Cryptography', instructor: 'Alfred Menezes' },
            ],
            'COOP 4': [
                { code: 'COOP 4', name: 'University of Waterloo - Mathematics Research Assistant', instructor: 'Yu-Ru Liu' },
                { code: 'PMTATH 351', name: 'Real Analysis', instructor: 'Stephen New' },
                { code: 'PD 8', name: 'Intercultural Communications', instructor: 'N/A' },
                { code: 'WKRPT', name: 'Work Term Report', instructor: 'N/A' },
            ],
            'Term 3B': [
                { code: 'PMATH 440', name: 'Analytic Number Theory', instructor: 'Wentang Kuo' },
                { code: 'PMTATH 450', name: 'Lebesgue Integration and Fourier Analysis', instructor: 'Blake Madill' },
                { code: 'CS 360', name: 'Intro to the Theory of Computing', instructor: 'Jeffrey Shallit' },
                { code: 'CO 330', name: 'Combinatorial Enumeration', instructor: 'Stephen Melczer' },
                { code: 'CO 485', name: 'Mathematics of Public-Key Cryptography', instructor: 'Koray Karabina' },
                { code: 'PHYS 225', name: 'Modelling Life Physics', instructor: 'Bae-Yuen Ha' },
            ],
        };
        this.terms = ['Term 1A', 'Term 1B', 'COOP 1', 'Term 2A', 'COOP 2', 'Term 2B', 'COOP 3', 'Term 3A', 'COOP 4', 'Term 3B'];
        this.timeByTerm = {
            'Term 1A': 'Fall 2018',
            'Term 1B': 'Winter 2019',
            'COOP 1': 'Spring 2019',
            'Term 2A': 'Fall 2019',
            'COOP 2': 'Winter 2020',
            'Term 2B': 'Spring 2020',
            'COOP 3': 'Fall 2020',
            'Term 3A': 'Winter 2021',
            'COOP 4': 'Spring 2021',
            'Term 3B': 'Fall 2021'
        };
    }
    onResize(event) {
        if (event.target.innerWidth <= 720) {
            this.courseColumnsToDisplay = ['courseCode', 'courseName'];
        }
        else {
            this.courseColumnsToDisplay = ['courseCode', 'courseName', 'courseInstructor'];
        }
    }
    ngOnInit() {
        if (window.innerWidth <= 720) {
            this.courseColumnsToDisplay = ['courseCode', 'courseName'];
        }
        else {
            this.courseColumnsToDisplay = ['courseCode', 'courseName', 'courseInstructor'];
        }
    }
}
AcademicsComponent.ɵfac = function AcademicsComponent_Factory(t) { return new (t || AcademicsComponent)(); };
AcademicsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AcademicsComponent, selectors: [["pm-academics"]], hostBindings: function AcademicsComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("resize", function AcademicsComponent_resize_HostBindingHandler($event) { return ctx.onResize($event); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveWindow"]);
    } }, decls: 8, vars: 1, consts: [[1, "large-break"], [1, "p-h-10"], [1, "title-text"], [1, "line-break-light"], [1, "small-break"], [4, "ngFor", "ngForOf"], ["hideToggle", ""], ["mat-table", "", 3, "dataSource"], ["matColumnDef", "courseCode"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "courseName"], ["matColumnDef", "courseInstructor"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["mat-header-cell", ""], ["mat-cell", ""], ["mat-header-row", ""], ["mat-row", ""]], template: function AcademicsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Courses");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "hr", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, AcademicsComponent_div_6_Template, 22, 5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.terms);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_2__["MatAccordion"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_2__["MatExpansionPanel"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_2__["MatExpansionPanelHeader"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_2__["MatExpansionPanelTitle"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_2__["MatExpansionPanelDescription"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatTable"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatColumnDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatHeaderCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatHeaderRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatHeaderCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatHeaderRow"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatRow"]], styles: [".large-break[_ngcontent-%COMP%] {\r\n    height: 120px;\r\n}\r\n\r\n.medium-break[_ngcontent-%COMP%] {\r\n    height: 50px;\r\n}\r\n\r\n.small-break[_ngcontent-%COMP%] {\r\n    height: 20px;\r\n}\r\n\r\n.p-h-5[_ngcontent-%COMP%] {\r\n    padding-left: 5%;\r\n    padding-right: 5%;\r\n}\r\n\r\n.p-h-10[_ngcontent-%COMP%] {\r\n    padding-left: 10%;\r\n    padding-right: 10%;\r\n}\r\n\r\n.center[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    justify-content: center;\r\n}\r\n\r\n.title-text[_ngcontent-%COMP%] {\r\n    font-size: 50px;\r\n    font-family:\"Impact\";\r\n    color: white;\r\n    height: -webkit-fit-content;\r\n    height: -moz-fit-content;\r\n    height: fit-content;\r\n    line-height: 50px;\r\n}\r\n\r\n.light[_ngcontent-%COMP%] {\r\n    background-color: rgb(102, 151, 216);\r\n    border-color: rgb(102, 151, 216);\r\n}\r\n\r\n.dark[_ngcontent-%COMP%] {\r\n    background-color:#4473cc;\r\n    border-color: #4473cc;\r\n}\r\n\r\n.flex-container[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    justify-content: space-around;\r\n    border-width: large;\r\n}\r\n\r\n.flex-container.horizontal[_ngcontent-%COMP%] {\r\n    flex-direction: row;\r\n}\r\n\r\n.flex-container.vertical[_ngcontent-%COMP%] {\r\n    flex-direction: column;\r\n}\r\n\r\n.paragraph-text[_ngcontent-%COMP%] {\r\n    font-size: 24px;\r\n    font-family: \"Calibri\";\r\n    color: white;\r\n    height: -webkit-fit-content;\r\n    height: -moz-fit-content;\r\n    height: fit-content;\r\n    line-height: 32px;\r\n    text-align: justify;\r\n    text-justify: inter-word;\r\n}\r\n\r\n@media(max-width:720px){\r\n    .paragraph-text[_ngcontent-%COMP%] {\r\n        font-size: 16px;\r\n        line-height: 24px;\r\n    }\r\n\r\n    .title-text[_ngcontent-%COMP%] {\r\n        font-size: 32px;\r\n        line-height: 32px;\r\n    }\r\n  }\r\n\r\n  .mat-expansion-panel{\r\n    background-color: transparent;\r\n    background-color: rgba(245, 245, 245, 0.301);\r\n    padding: 0px;\r\n}\r\n\r\n  .mat-expansion-panel-body{\r\n    background-color: transparent;\r\n}\r\n\r\ntable[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n    background-color: transparent;\r\n}\r\n\r\n.mat-column-courseInstructor[_ngcontent-%COMP%] {\r\n    width: 20%;\r\n}\r\n\r\n.mat-column-courseCode[_ngcontent-%COMP%] {\r\n    width: 20%;\r\n    padding-right: 12px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL3N0eWxlcy5jc3MiLCJzcmMvYXBwL2FjYWRlbWljcy9hY2FkZW1pY3MuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixpQkFBaUI7QUFDckI7O0FBQ0E7SUFDSSxpQkFBaUI7SUFDakIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLGVBQWU7SUFDZixvQkFBb0I7SUFDcEIsWUFBWTtJQUNaLDJCQUFtQjtJQUFuQix3QkFBbUI7SUFBbkIsbUJBQW1CO0lBQ25CLGlCQUFpQjtBQUNyQjs7QUFHQTtJQUNJLG9DQUFvQztJQUNwQyxnQ0FBZ0M7QUFDcEM7O0FBRUE7SUFDSSx3QkFBd0I7SUFDeEIscUJBQXFCO0FBQ3pCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLDZCQUE2QjtJQUM3QixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSxlQUFlO0lBQ2Ysc0JBQXNCO0lBQ3RCLFlBQVk7SUFDWiwyQkFBbUI7SUFBbkIsd0JBQW1CO0lBQW5CLG1CQUFtQjtJQUNuQixpQkFBaUI7SUFDakIsbUJBQW1CO0lBQ25CLHdCQUF3QjtBQUM1Qjs7QUFFQTtJQUNJO1FBQ0ksZUFBZTtRQUNmLGlCQUFpQjtJQUNyQjs7SUFFQTtRQUNJLGVBQWU7UUFDZixpQkFBaUI7SUFDckI7RUFDRjs7QUM3RUY7SUFDSSw2QkFBNkI7SUFDN0IsNENBQTRDO0lBQzVDLFlBQVk7QUFDaEI7O0FBR0E7SUFDSSw2QkFBNkI7QUFDakM7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsNkJBQTZCO0FBQ2pDOztBQUVBO0lBQ0ksVUFBVTtBQUNkOztBQUVBO0lBQ0ksVUFBVTtJQUNWLG1CQUFtQjtBQUN2QiIsImZpbGUiOiJzcmMvYXBwL2FjYWRlbWljcy9hY2FkZW1pY3MuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5sYXJnZS1icmVhayB7XHJcbiAgICBoZWlnaHQ6IDEyMHB4O1xyXG59XHJcblxyXG4ubWVkaXVtLWJyZWFrIHtcclxuICAgIGhlaWdodDogNTBweDtcclxufVxyXG5cclxuLnNtYWxsLWJyZWFrIHtcclxuICAgIGhlaWdodDogMjBweDtcclxufVxyXG5cclxuLnAtaC01IHtcclxuICAgIHBhZGRpbmctbGVmdDogNSU7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiA1JTtcclxufVxyXG4ucC1oLTEwIHtcclxuICAgIHBhZGRpbmctbGVmdDogMTAlO1xyXG4gICAgcGFkZGluZy1yaWdodDogMTAlO1xyXG59XHJcblxyXG4uY2VudGVyIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG5cclxuLnRpdGxlLXRleHQge1xyXG4gICAgZm9udC1zaXplOiA1MHB4O1xyXG4gICAgZm9udC1mYW1pbHk6XCJJbXBhY3RcIjtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGhlaWdodDogZml0LWNvbnRlbnQ7XHJcbiAgICBsaW5lLWhlaWdodDogNTBweDtcclxufVxyXG5cclxuXHJcbi5saWdodCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTAyLCAxNTEsIDIxNik7XHJcbiAgICBib3JkZXItY29sb3I6IHJnYigxMDIsIDE1MSwgMjE2KTtcclxufVxyXG5cclxuLmRhcmsge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjojNDQ3M2NjO1xyXG4gICAgYm9yZGVyLWNvbG9yOiAjNDQ3M2NjO1xyXG59XHJcblxyXG4uZmxleC1jb250YWluZXIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xyXG4gICAgYm9yZGVyLXdpZHRoOiBsYXJnZTtcclxufVxyXG5cclxuLmZsZXgtY29udGFpbmVyLmhvcml6b250YWwge1xyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxufVxyXG5cclxuLmZsZXgtY29udGFpbmVyLnZlcnRpY2FsIHtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbn1cclxuXHJcbi5wYXJhZ3JhcGgtdGV4dCB7XHJcbiAgICBmb250LXNpemU6IDI0cHg7XHJcbiAgICBmb250LWZhbWlseTogXCJDYWxpYnJpXCI7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBoZWlnaHQ6IGZpdC1jb250ZW50O1xyXG4gICAgbGluZS1oZWlnaHQ6IDMycHg7XHJcbiAgICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xyXG4gICAgdGV4dC1qdXN0aWZ5OiBpbnRlci13b3JkO1xyXG59XHJcblxyXG5AbWVkaWEobWF4LXdpZHRoOjcyMHB4KXtcclxuICAgIC5wYXJhZ3JhcGgtdGV4dCB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAyNHB4O1xyXG4gICAgfVxyXG5cclxuICAgIC50aXRsZS10ZXh0IHtcclxuICAgICAgICBmb250LXNpemU6IDMycHg7XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDMycHg7XHJcbiAgICB9XHJcbiAgfSIsIkBpbXBvcnQgJy4uL3NoYXJlZC9zdHlsZXMuY3NzJztcclxuXHJcbjo6bmctZGVlcCAubWF0LWV4cGFuc2lvbi1wYW5lbHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNDUsIDI0NSwgMjQ1LCAwLjMwMSk7XHJcbiAgICBwYWRkaW5nOiAwcHg7XHJcbn1cclxuXHJcblxyXG46Om5nLWRlZXAgLm1hdC1leHBhbnNpb24tcGFuZWwtYm9keXtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG59XHJcblxyXG50YWJsZSB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG59XHJcbiAgXHJcbi5tYXQtY29sdW1uLWNvdXJzZUluc3RydWN0b3Ige1xyXG4gICAgd2lkdGg6IDIwJTtcclxufVxyXG5cclxuLm1hdC1jb2x1bW4tY291cnNlQ29kZSB7XHJcbiAgICB3aWR0aDogMjAlO1xyXG4gICAgcGFkZGluZy1yaWdodDogMTJweDtcclxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AcademicsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'pm-academics',
                templateUrl: './academics.component.html',
                styleUrls: ['./academics.component.css']
            }]
    }], function () { return []; }, { onResize: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['window:resize', ['$event']]
        }] }); })();


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/sidenav */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/sidenav.js");





const _c0 = function () { return ["/home"]; };
const _c1 = function () { return ["/projects"]; };
const _c2 = function () { return ["/academics"]; };
const _c3 = function () { return ["/gallery"]; };
const _c4 = function () { return ["/contact"]; };
class AppComponent {
    constructor() {
        this.title = 'Turnip\'s Home Page';
        this.sidenavOpen = false;
    }
    onEmptyClick(e, drawer) {
        if (e.target.name != "turnip-button") {
            drawer.close();
            this.sidenavOpen = false;
        }
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["page-root"]], decls: 45, vars: 20, consts: [[1, "navbar", "fixed-top"], [1, "navbar-brand"], ["name", "turnip-button", "src", "./assets/images/turnip-icon.png", "width", "48px", 1, "turnip-img", 3, "click"], [1, "nav", "nav-pills"], [1, "button", "topnav-button", 3, "routerLink"], [1, "sidenav-container"], ["mode", "over", 1, "sidenav"], ["drawer", ""], [1, "sidenav-buttons"], [2, "height", "80px"], [1, "button", "sidenav-button", 3, "routerLink"], [1, "sidenav-content", 3, "click"], [1, "outer-container"], [1, "page-container"], [1, "flex-container", "vertical", "light"], [1, "small-break"], [1, "flex-container", "horizontal", "light"], ["type", "image", "src", "./assets/images/linkedin.png", "onclick", "window.open('https\\://www.linkedin.com/in/andrew314/')"], ["type", "image", "src", "./assets/images/github.png", "onclick", "window.open('https\\://github.com/turnip314')"], ["type", "image", "src", "./assets/images/facebook.png", "onclick", "window.open('https\\://www.facebook.com/turnip314/')"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_img_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](21); return _r0.toggle(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "ul", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Home");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Projects");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Academics");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Gallery");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Contact");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "mat-drawer-container", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "mat-drawer", 6, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Home");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Projects");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Academics");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Gallery");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Contact");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_div_click_34_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](21); return ctx.onEmptyClick($event, _r0); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](39, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](41, "input", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](42, "input", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](43, "input", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](44, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](10, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](11, _c1));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](12, _c2));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](13, _c3));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](14, _c4));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](15, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](16, _c1));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](17, _c2));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](18, _c3));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](19, _c4));
    } }, directives: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbNavbar"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLink"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_3__["MatDrawerContainer"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_3__["MatDrawer"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"]], styles: [".large-break[_ngcontent-%COMP%] {\r\n    height: 120px;\r\n}\r\n\r\n.medium-break[_ngcontent-%COMP%] {\r\n    height: 50px;\r\n}\r\n\r\n.small-break[_ngcontent-%COMP%] {\r\n    height: 20px;\r\n}\r\n\r\n.p-h-5[_ngcontent-%COMP%] {\r\n    padding-left: 5%;\r\n    padding-right: 5%;\r\n}\r\n\r\n.p-h-10[_ngcontent-%COMP%] {\r\n    padding-left: 10%;\r\n    padding-right: 10%;\r\n}\r\n\r\n.center[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    justify-content: center;\r\n}\r\n\r\n.title-text[_ngcontent-%COMP%] {\r\n    font-size: 50px;\r\n    font-family:\"Impact\";\r\n    color: white;\r\n    height: -webkit-fit-content;\r\n    height: -moz-fit-content;\r\n    height: fit-content;\r\n    line-height: 50px;\r\n}\r\n\r\n.light[_ngcontent-%COMP%] {\r\n    background-color: rgb(102, 151, 216);\r\n    border-color: rgb(102, 151, 216);\r\n}\r\n\r\n.dark[_ngcontent-%COMP%] {\r\n    background-color:#4473cc;\r\n    border-color: #4473cc;\r\n}\r\n\r\n.flex-container[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    justify-content: space-around;\r\n    border-width: large;\r\n}\r\n\r\n.flex-container.horizontal[_ngcontent-%COMP%] {\r\n    flex-direction: row;\r\n}\r\n\r\n.flex-container.vertical[_ngcontent-%COMP%] {\r\n    flex-direction: column;\r\n}\r\n\r\n.paragraph-text[_ngcontent-%COMP%] {\r\n    font-size: 24px;\r\n    font-family: \"Calibri\";\r\n    color: white;\r\n    height: -webkit-fit-content;\r\n    height: -moz-fit-content;\r\n    height: fit-content;\r\n    line-height: 32px;\r\n    text-align: justify;\r\n    text-justify: inter-word;\r\n}\r\n\r\n@media(max-width:720px){\r\n    .paragraph-text[_ngcontent-%COMP%] {\r\n        font-size: 16px;\r\n        line-height: 24px;\r\n    }\r\n\r\n    .title-text[_ngcontent-%COMP%] {\r\n        font-size: 32px;\r\n        line-height: 32px;\r\n    }\r\n  }\r\n\r\n.nav-link[_ngcontent-%COMP%] {\r\n  font-size: large;\r\n}\r\n\r\n\r\n\r\n@media(max-width:540px){\r\n  .nav-pills[_ngcontent-%COMP%] {\r\n      visibility: hidden;\r\n  }\r\n}\r\n\r\n.navbar[_ngcontent-%COMP%] {\r\n  max-height: 74px\r\n}\r\n\r\n.topnav-button[_ngcontent-%COMP%] {\r\n  margin-right: 5px;\r\n  font-size: 20px;\r\n  width: 100%;\r\n  height: 36px;\r\n  border: none;\r\n  background-color: transparent;\r\n  color: white;\r\n}\r\n\r\n.topnav-button[_ngcontent-%COMP%]:hover {\r\n  background-color: rgba(255, 255, 255, 0.329);\r\n}\r\n\r\n.topnav-button[_ngcontent-%COMP%]:focus {\r\n  border: none;\r\n  outline: none;\r\n}\r\n\r\n\r\n\r\n.sidenav[_ngcontent-%COMP%] {\r\n  background-color:#4473cc;\r\n  width: -webkit-max-content;\r\n  width: max-content;\r\n  position: fixed;\r\n  top: 0;\r\n  bottom: 0;\r\n  left: 0;\r\n  right: 0;\r\n}\r\n\r\n.mat-drawer-inner-container[_ngcontent-%COMP%] {\r\n  height: 20px;\r\n}\r\n\r\n.sidenav-container[_ngcontent-%COMP%] {\r\n  overflow: hidden !important;\r\n}\r\n\r\n.sidenav-button[_ngcontent-%COMP%] {\r\n  margin-left: 2px;\r\n  margin-right: 3px;\r\n  margin-top: 5px;\r\n  font-size: 24px;\r\n  width: 98%;\r\n  height: 36px;\r\n  border: none;\r\n  background-color: transparent;\r\n  color: white;\r\n}\r\n\r\n.sidenav-back-button[_ngcontent-%COMP%] {\r\n  height: 64px;\r\n}\r\n\r\n.sidenav-button[_ngcontent-%COMP%]:hover {\r\n  background-color: rgb(102, 151, 216);\r\n}\r\n\r\n.sidenav-button[_ngcontent-%COMP%]:focus {\r\n  border: none;\r\n  outline: none;\r\n}\r\n\r\n.sidenav-buttons[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  flex-direction: column;\r\n}\r\n\r\n\r\n\r\n.btn-group[_ngcontent-%COMP%] {\r\n  border: 1px solid white;\r\n  cursor: pointer; \r\n  display: flex;\r\n  flex-direction: row;\r\n  padding-top: 10px;\r\n}\r\n\r\n.navbar[_ngcontent-%COMP%] {\r\n  background-color: rgb(32, 34, 136);\r\n}\r\n\r\n.navbar-brand[_ngcontent-%COMP%] {\r\n  color: pink;\r\n}\r\n\r\n.turnip-img[_ngcontent-%COMP%]:hover {\r\n  background-color: rgba(255, 255, 255, 0.123);\r\n  cursor: pointer;\r\n}\r\n\r\n.nav-link[_ngcontent-%COMP%] {\r\n  color: white;\r\n}\r\n\r\n.outer-container[_ngcontent-%COMP%] {\r\n  background-color:rgb(149, 183, 228);\r\n}\r\n\r\n.page-container[_ngcontent-%COMP%] {\r\n  margin-left: 5%;\r\n  margin-right: 5%;\r\n  background-color: transparent;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL3N0eWxlcy5jc3MiLCJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksYUFBYTtBQUNqQjs7QUFFQTtJQUNJLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGlCQUFpQjtBQUNyQjs7QUFDQTtJQUNJLGlCQUFpQjtJQUNqQixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLG9CQUFvQjtJQUNwQixZQUFZO0lBQ1osMkJBQW1CO0lBQW5CLHdCQUFtQjtJQUFuQixtQkFBbUI7SUFDbkIsaUJBQWlCO0FBQ3JCOztBQUdBO0lBQ0ksb0NBQW9DO0lBQ3BDLGdDQUFnQztBQUNwQzs7QUFFQTtJQUNJLHdCQUF3QjtJQUN4QixxQkFBcUI7QUFDekI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsNkJBQTZCO0lBQzdCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLGVBQWU7SUFDZixzQkFBc0I7SUFDdEIsWUFBWTtJQUNaLDJCQUFtQjtJQUFuQix3QkFBbUI7SUFBbkIsbUJBQW1CO0lBQ25CLGlCQUFpQjtJQUNqQixtQkFBbUI7SUFDbkIsd0JBQXdCO0FBQzVCOztBQUVBO0lBQ0k7UUFDSSxlQUFlO1FBQ2YsaUJBQWlCO0lBQ3JCOztJQUVBO1FBQ0ksZUFBZTtRQUNmLGlCQUFpQjtJQUNyQjtFQUNGOztBQzdFRjtFQUNFLGdCQUFnQjtBQUNsQjs7QUFFQSxXQUFXOztBQUVYO0VBQ0U7TUFDSSxrQkFBa0I7RUFDdEI7QUFDRjs7QUFFQTtFQUNFO0FBQ0Y7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsZUFBZTtFQUNmLFdBQVc7RUFDWCxZQUFZO0VBQ1osWUFBWTtFQUNaLDZCQUE2QjtFQUM3QixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSw0Q0FBNEM7QUFDOUM7O0FBRUE7RUFDRSxZQUFZO0VBQ1osYUFBYTtBQUNmOztBQUVBLHFCQUFxQjs7QUFDckI7RUFDRSx3QkFBd0I7RUFDeEIsMEJBQWtCO0VBQWxCLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2YsTUFBTTtFQUNOLFNBQVM7RUFDVCxPQUFPO0VBQ1AsUUFBUTtBQUNWOztBQUVBO0VBQ0UsWUFBWTtBQUNkOztBQUVBO0VBQ0UsMkJBQTJCO0FBQzdCOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtFQUNqQixlQUFlO0VBQ2YsZUFBZTtFQUNmLFVBQVU7RUFDVixZQUFZO0VBQ1osWUFBWTtFQUNaLDZCQUE2QjtFQUM3QixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxvQ0FBb0M7QUFDdEM7O0FBRUE7RUFDRSxZQUFZO0VBQ1osYUFBYTtBQUNmOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtBQUN4Qjs7QUFHQSxrQ0FBa0M7O0FBRWxDO0VBQ0UsdUJBQXVCO0VBQ3ZCLGVBQWU7RUFDZixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGtDQUFrQztBQUNwQzs7QUFFQTtFQUNFLFdBQVc7QUFDYjs7QUFFQTtFQUNFLDRDQUE0QztFQUM1QyxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsWUFBWTtBQUNkOztBQUVBO0VBQ0UsbUNBQW1DO0FBQ3JDOztBQUVBO0VBQ0UsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQiw2QkFBNkI7QUFDL0IiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5sYXJnZS1icmVhayB7XHJcbiAgICBoZWlnaHQ6IDEyMHB4O1xyXG59XHJcblxyXG4ubWVkaXVtLWJyZWFrIHtcclxuICAgIGhlaWdodDogNTBweDtcclxufVxyXG5cclxuLnNtYWxsLWJyZWFrIHtcclxuICAgIGhlaWdodDogMjBweDtcclxufVxyXG5cclxuLnAtaC01IHtcclxuICAgIHBhZGRpbmctbGVmdDogNSU7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiA1JTtcclxufVxyXG4ucC1oLTEwIHtcclxuICAgIHBhZGRpbmctbGVmdDogMTAlO1xyXG4gICAgcGFkZGluZy1yaWdodDogMTAlO1xyXG59XHJcblxyXG4uY2VudGVyIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG5cclxuLnRpdGxlLXRleHQge1xyXG4gICAgZm9udC1zaXplOiA1MHB4O1xyXG4gICAgZm9udC1mYW1pbHk6XCJJbXBhY3RcIjtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGhlaWdodDogZml0LWNvbnRlbnQ7XHJcbiAgICBsaW5lLWhlaWdodDogNTBweDtcclxufVxyXG5cclxuXHJcbi5saWdodCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTAyLCAxNTEsIDIxNik7XHJcbiAgICBib3JkZXItY29sb3I6IHJnYigxMDIsIDE1MSwgMjE2KTtcclxufVxyXG5cclxuLmRhcmsge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjojNDQ3M2NjO1xyXG4gICAgYm9yZGVyLWNvbG9yOiAjNDQ3M2NjO1xyXG59XHJcblxyXG4uZmxleC1jb250YWluZXIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xyXG4gICAgYm9yZGVyLXdpZHRoOiBsYXJnZTtcclxufVxyXG5cclxuLmZsZXgtY29udGFpbmVyLmhvcml6b250YWwge1xyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxufVxyXG5cclxuLmZsZXgtY29udGFpbmVyLnZlcnRpY2FsIHtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbn1cclxuXHJcbi5wYXJhZ3JhcGgtdGV4dCB7XHJcbiAgICBmb250LXNpemU6IDI0cHg7XHJcbiAgICBmb250LWZhbWlseTogXCJDYWxpYnJpXCI7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBoZWlnaHQ6IGZpdC1jb250ZW50O1xyXG4gICAgbGluZS1oZWlnaHQ6IDMycHg7XHJcbiAgICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xyXG4gICAgdGV4dC1qdXN0aWZ5OiBpbnRlci13b3JkO1xyXG59XHJcblxyXG5AbWVkaWEobWF4LXdpZHRoOjcyMHB4KXtcclxuICAgIC5wYXJhZ3JhcGgtdGV4dCB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAyNHB4O1xyXG4gICAgfVxyXG5cclxuICAgIC50aXRsZS10ZXh0IHtcclxuICAgICAgICBmb250LXNpemU6IDMycHg7XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDMycHg7XHJcbiAgICB9XHJcbiAgfSIsIkBpbXBvcnQgJy4vc2hhcmVkL3N0eWxlcy5jc3MnO1xyXG5cclxuLm5hdi1saW5rIHtcclxuICBmb250LXNpemU6IGxhcmdlO1xyXG59XHJcblxyXG4vKiB0b3BuYXYgKi9cclxuXHJcbkBtZWRpYShtYXgtd2lkdGg6NTQwcHgpe1xyXG4gIC5uYXYtcGlsbHMge1xyXG4gICAgICB2aXNpYmlsaXR5OiBoaWRkZW47XHJcbiAgfVxyXG59XHJcblxyXG4ubmF2YmFyIHtcclxuICBtYXgtaGVpZ2h0OiA3NHB4XHJcbn1cclxuXHJcbi50b3BuYXYtYnV0dG9uIHtcclxuICBtYXJnaW4tcmlnaHQ6IDVweDtcclxuICBmb250LXNpemU6IDIwcHg7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAzNnB4O1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICBjb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbi50b3BuYXYtYnV0dG9uOmhvdmVyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMzI5KTtcclxufVxyXG5cclxuLnRvcG5hdi1idXR0b246Zm9jdXMge1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBvdXRsaW5lOiBub25lO1xyXG59XHJcblxyXG4vKiBzaWRlbmF2IHNldHRpbmdzICovXHJcbi5zaWRlbmF2IHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiM0NDczY2M7XHJcbiAgd2lkdGg6IG1heC1jb250ZW50O1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICB0b3A6IDA7XHJcbiAgYm90dG9tOiAwO1xyXG4gIGxlZnQ6IDA7XHJcbiAgcmlnaHQ6IDA7XHJcbn1cclxuXHJcbi5tYXQtZHJhd2VyLWlubmVyLWNvbnRhaW5lciB7XHJcbiAgaGVpZ2h0OiAyMHB4O1xyXG59XHJcblxyXG4uc2lkZW5hdi1jb250YWluZXIge1xyXG4gIG92ZXJmbG93OiBoaWRkZW4gIWltcG9ydGFudDtcclxufVxyXG5cclxuLnNpZGVuYXYtYnV0dG9uIHtcclxuICBtYXJnaW4tbGVmdDogMnB4O1xyXG4gIG1hcmdpbi1yaWdodDogM3B4O1xyXG4gIG1hcmdpbi10b3A6IDVweDtcclxuICBmb250LXNpemU6IDI0cHg7XHJcbiAgd2lkdGg6IDk4JTtcclxuICBoZWlnaHQ6IDM2cHg7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuLnNpZGVuYXYtYmFjay1idXR0b24ge1xyXG4gIGhlaWdodDogNjRweDtcclxufVxyXG5cclxuLnNpZGVuYXYtYnV0dG9uOmhvdmVyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTAyLCAxNTEsIDIxNik7XHJcbn1cclxuXHJcbi5zaWRlbmF2LWJ1dHRvbjpmb2N1cyB7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIG91dGxpbmU6IG5vbmU7XHJcbn1cclxuXHJcbi5zaWRlbmF2LWJ1dHRvbnMge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxufVxyXG5cclxuXHJcbi8qIFZlcnRpY2FsIGFsaWdubWVudCBvZiBidXR0b25zICovXHJcblxyXG4uYnRuLWdyb3VwIHtcclxuICBib3JkZXI6IDFweCBzb2xpZCB3aGl0ZTtcclxuICBjdXJzb3I6IHBvaW50ZXI7IFxyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICBwYWRkaW5nLXRvcDogMTBweDtcclxufVxyXG5cclxuLm5hdmJhciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDMyLCAzNCwgMTM2KTtcclxufVxyXG5cclxuLm5hdmJhci1icmFuZCB7XHJcbiAgY29sb3I6IHBpbms7XHJcbn1cclxuXHJcbi50dXJuaXAtaW1nOmhvdmVyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMTIzKTtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi5uYXYtbGluayB7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG4ub3V0ZXItY29udGFpbmVyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOnJnYigxNDksIDE4MywgMjI4KTtcclxufVxyXG5cclxuLnBhZ2UtY29udGFpbmVyIHtcclxuICBtYXJnaW4tbGVmdDogNSU7XHJcbiAgbWFyZ2luLXJpZ2h0OiA1JTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxufVxyXG5cclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'page-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.css']
            }]
    }], function () { return []; }, null); })();


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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/sidenav */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/sidenav.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/progress-bar */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/progress-bar.js");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/progress-spinner */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/progress-spinner.js");
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/expansion */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/expansion.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/table.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
/* harmony import */ var _shared_loading_loading_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./shared/loading/loading.component */ "./src/app/shared/loading/loading.component.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _welcome_welcome_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./welcome/welcome.component */ "./src/app/welcome/welcome.component.ts");
/* harmony import */ var _projects_projects_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./projects/projects.component */ "./src/app/projects/projects.component.ts");
/* harmony import */ var _error_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./error/page-not-found/page-not-found.component */ "./src/app/error/page-not-found/page-not-found.component.ts");
/* harmony import */ var _error_page_under_construction_page_under_construction_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./error/page-under-construction/page-under-construction.component */ "./src/app/error/page-under-construction/page-under-construction.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var ng_image_slider__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ng-image-slider */ "./node_modules/ng-image-slider/__ivy_ngcc__/fesm2015/ng-image-slider.js");
/* harmony import */ var _contact_contact_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./contact/contact.component */ "./src/app/contact/contact.component.ts");
/* harmony import */ var _contact_service__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./contact.service */ "./src/app/contact.service.ts");
/* harmony import */ var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/cdk/overlay */ "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/overlay.js");
/* harmony import */ var _academics_academics_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./academics/academics.component */ "./src/app/academics/academics.component.ts");
/* harmony import */ var _twentyfour_twentyfour_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./twentyfour/twentyfour.component */ "./src/app/twentyfour/twentyfour.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _gallery_gallery_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./gallery/gallery.component */ "./src/app/gallery/gallery.component.ts");
/* harmony import */ var _shared_services_image_service__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./shared/services/image.service */ "./src/app/shared/services/image.service.ts");
/* harmony import */ var _shared_image_overlay_image_overlay_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./shared/image-overlay/image-overlay.component */ "./src/app/shared/image-overlay/image-overlay.component.ts");
































class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_11__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [
        _contact_service__WEBPACK_IMPORTED_MODULE_21__["ContactService"],
        _shared_services_image_service__WEBPACK_IMPORTED_MODULE_28__["ImageService"]
    ], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_16__["BrowserAnimationsModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"],
            _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_3__["MatSidenavModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_17__["NgbModule"],
            ng_image_slider__WEBPACK_IMPORTED_MODULE_19__["NgImageSliderModule"],
            _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_22__["OverlayModule"],
            _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCardModule"],
            _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_5__["MatProgressBarModule"],
            _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_6__["MatProgressSpinnerModule"],
            _angular_material_expansion__WEBPACK_IMPORTED_MODULE_7__["MatExpansionModule"],
            _angular_material_table__WEBPACK_IMPORTED_MODULE_8__["MatTableModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__["MatIconModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_25__["ReactiveFormsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_26__["HttpClientModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_25__["FormsModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_18__["RouterModule"].forRoot([
                { path: 'home', component: _welcome_welcome_component__WEBPACK_IMPORTED_MODULE_12__["WelcomeComponent"] },
                { path: 'projects', component: _projects_projects_component__WEBPACK_IMPORTED_MODULE_13__["ProjectsComponent"] },
                { path: 'academics', component: _academics_academics_component__WEBPACK_IMPORTED_MODULE_23__["AcademicsComponent"] },
                { path: 'gallery', component: _gallery_gallery_component__WEBPACK_IMPORTED_MODULE_27__["GalleryComponent"] },
                { path: 'contact', component: _contact_contact_component__WEBPACK_IMPORTED_MODULE_20__["ContactComponent"] },
                { path: '24', component: _twentyfour_twentyfour_component__WEBPACK_IMPORTED_MODULE_24__["TwentyFourComponent"] },
                { path: '', redirectTo: 'home', pathMatch: 'full' },
                { path: '**', component: _error_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_14__["PageNotFoundComponent"] }
            ])
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_11__["AppComponent"],
        _welcome_welcome_component__WEBPACK_IMPORTED_MODULE_12__["WelcomeComponent"],
        _projects_projects_component__WEBPACK_IMPORTED_MODULE_13__["ProjectsComponent"],
        _error_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_14__["PageNotFoundComponent"],
        _error_page_under_construction_page_under_construction_component__WEBPACK_IMPORTED_MODULE_15__["PageUnderConstructionComponent"],
        _contact_contact_component__WEBPACK_IMPORTED_MODULE_20__["ContactComponent"],
        _shared_loading_loading_component__WEBPACK_IMPORTED_MODULE_10__["LoadingComponent"],
        _academics_academics_component__WEBPACK_IMPORTED_MODULE_23__["AcademicsComponent"],
        _gallery_gallery_component__WEBPACK_IMPORTED_MODULE_27__["GalleryComponent"],
        _shared_image_overlay_image_overlay_component__WEBPACK_IMPORTED_MODULE_29__["ImageOverlayComponent"],
        _twentyfour_twentyfour_component__WEBPACK_IMPORTED_MODULE_24__["TwentyFourComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_16__["BrowserAnimationsModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"],
        _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_3__["MatSidenavModule"],
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_17__["NgbModule"],
        ng_image_slider__WEBPACK_IMPORTED_MODULE_19__["NgImageSliderModule"],
        _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_22__["OverlayModule"],
        _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCardModule"],
        _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_5__["MatProgressBarModule"],
        _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_6__["MatProgressSpinnerModule"],
        _angular_material_expansion__WEBPACK_IMPORTED_MODULE_7__["MatExpansionModule"],
        _angular_material_table__WEBPACK_IMPORTED_MODULE_8__["MatTableModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__["MatIconModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_25__["ReactiveFormsModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_26__["HttpClientModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_25__["FormsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_18__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                providers: [
                    _contact_service__WEBPACK_IMPORTED_MODULE_21__["ContactService"],
                    _shared_services_image_service__WEBPACK_IMPORTED_MODULE_28__["ImageService"]
                ],
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_11__["AppComponent"],
                    _welcome_welcome_component__WEBPACK_IMPORTED_MODULE_12__["WelcomeComponent"],
                    _projects_projects_component__WEBPACK_IMPORTED_MODULE_13__["ProjectsComponent"],
                    _error_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_14__["PageNotFoundComponent"],
                    _error_page_under_construction_page_under_construction_component__WEBPACK_IMPORTED_MODULE_15__["PageUnderConstructionComponent"],
                    _contact_contact_component__WEBPACK_IMPORTED_MODULE_20__["ContactComponent"],
                    _shared_loading_loading_component__WEBPACK_IMPORTED_MODULE_10__["LoadingComponent"],
                    _academics_academics_component__WEBPACK_IMPORTED_MODULE_23__["AcademicsComponent"],
                    _gallery_gallery_component__WEBPACK_IMPORTED_MODULE_27__["GalleryComponent"],
                    _shared_image_overlay_image_overlay_component__WEBPACK_IMPORTED_MODULE_29__["ImageOverlayComponent"],
                    _twentyfour_twentyfour_component__WEBPACK_IMPORTED_MODULE_24__["TwentyFourComponent"],
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_16__["BrowserAnimationsModule"],
                    _angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"],
                    _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_3__["MatSidenavModule"],
                    _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_17__["NgbModule"],
                    ng_image_slider__WEBPACK_IMPORTED_MODULE_19__["NgImageSliderModule"],
                    _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_22__["OverlayModule"],
                    _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCardModule"],
                    _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_5__["MatProgressBarModule"],
                    _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_6__["MatProgressSpinnerModule"],
                    _angular_material_expansion__WEBPACK_IMPORTED_MODULE_7__["MatExpansionModule"],
                    _angular_material_table__WEBPACK_IMPORTED_MODULE_8__["MatTableModule"],
                    _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__["MatIconModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_25__["ReactiveFormsModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_26__["HttpClientModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_25__["FormsModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_18__["RouterModule"].forRoot([
                        { path: 'home', component: _welcome_welcome_component__WEBPACK_IMPORTED_MODULE_12__["WelcomeComponent"] },
                        { path: 'projects', component: _projects_projects_component__WEBPACK_IMPORTED_MODULE_13__["ProjectsComponent"] },
                        { path: 'academics', component: _academics_academics_component__WEBPACK_IMPORTED_MODULE_23__["AcademicsComponent"] },
                        { path: 'gallery', component: _gallery_gallery_component__WEBPACK_IMPORTED_MODULE_27__["GalleryComponent"] },
                        { path: 'contact', component: _contact_contact_component__WEBPACK_IMPORTED_MODULE_20__["ContactComponent"] },
                        { path: '24', component: _twentyfour_twentyfour_component__WEBPACK_IMPORTED_MODULE_24__["TwentyFourComponent"] },
                        { path: '', redirectTo: 'home', pathMatch: 'full' },
                        { path: '**', component: _error_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_14__["PageNotFoundComponent"] }
                    ])
                ],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_11__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/contact.service.ts":
/*!************************************!*\
  !*** ./src/app/contact.service.ts ***!
  \************************************/
/*! exports provided: ContactService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactService", function() { return ContactService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");



class ContactService {
    constructor(http) {
        this.http = http;
        this.api = 'https://mailthis.to/turnip314';
    }
    postMessage(input) {
        return this.http.post(this.api, input, { responseType: 'text' }).pipe((response) => {
            if (response) {
                return response;
            }
        }, (error) => {
            return error;
        });
    }
}
ContactService.ɵfac = function ContactService_Factory(t) { return new (t || ContactService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
ContactService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ContactService, factory: ContactService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ContactService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "./src/app/contact/contact.component.ts":
/*!**********************************************!*\
  !*** ./src/app/contact/contact.component.ts ***!
  \**********************************************/
/*! exports provided: ContactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactComponent", function() { return ContactComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _contact_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../contact.service */ "./src/app/contact.service.ts");





class ContactComponent {
    constructor(builder, contact) {
        this.builder = builder;
        this.contact = contact;
    }
    ngOnInit() {
        this.formData = this.builder.group({
            Fullname: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
            Email: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email])]),
            Comment: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required])
        });
    }
    onSubmit(formData) {
        console.log(formData);
        this.contact.postMessage(formData).subscribe(response => {
            location.href = 'https://mailthis.to/confirm';
            console.log(response);
        }, error => {
            console.warn(error.responseText);
            console.log(error);
        });
    }
}
ContactComponent.ɵfac = function ContactComponent_Factory(t) { return new (t || ContactComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_contact_service__WEBPACK_IMPORTED_MODULE_2__["ContactService"])); };
ContactComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ContactComponent, selectors: [["pm-contact"]], decls: 24, vars: 2, consts: [[1, "large-break"], [1, "p-h-10"], [1, "title-text"], [1, "line-break-light"], [1, "container"], [1, "flex-container", "vertical"], [3, "formGroup", "ngSubmit"], [1, "form-group"], ["for", "Email"], ["type", "email", "name", "Email", "aria-describedby", "emailHelp", "placeholder", "Enter email", "formControlName", "Email", 1, "form-control"], ["for", "fullname"], ["type", "text", "name", "Fullname", "placeholder", "Full Name", "formControlName", "Fullname", 1, "form-control"], ["for", "comment"], ["formControlName", "Comment", "name", "Comment", 1, "form-control", "message"], ["type", "submit", 1, "btn", "btn-primary", 3, "disabled"]], template: function ContactComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Contact Me");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "hr", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "form", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function ContactComponent_Template_form_ngSubmit_7_listener() { return ctx.onSubmit(ctx.formData.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "label", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Email");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "label", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Full Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "label", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Message");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "textarea", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "                ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "button", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Submit");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.formData);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx.formData.valid);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"]], styles: [".large-break[_ngcontent-%COMP%] {\r\n    height: 120px;\r\n}\r\n\r\n.medium-break[_ngcontent-%COMP%] {\r\n    height: 50px;\r\n}\r\n\r\n.small-break[_ngcontent-%COMP%] {\r\n    height: 20px;\r\n}\r\n\r\n.p-h-5[_ngcontent-%COMP%] {\r\n    padding-left: 5%;\r\n    padding-right: 5%;\r\n}\r\n\r\n.p-h-10[_ngcontent-%COMP%] {\r\n    padding-left: 10%;\r\n    padding-right: 10%;\r\n}\r\n\r\n.center[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    justify-content: center;\r\n}\r\n\r\n.title-text[_ngcontent-%COMP%] {\r\n    font-size: 50px;\r\n    font-family:\"Impact\";\r\n    color: white;\r\n    height: -webkit-fit-content;\r\n    height: -moz-fit-content;\r\n    height: fit-content;\r\n    line-height: 50px;\r\n}\r\n\r\n.light[_ngcontent-%COMP%] {\r\n    background-color: rgb(102, 151, 216);\r\n    border-color: rgb(102, 151, 216);\r\n}\r\n\r\n.dark[_ngcontent-%COMP%] {\r\n    background-color:#4473cc;\r\n    border-color: #4473cc;\r\n}\r\n\r\n.flex-container[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    justify-content: space-around;\r\n    border-width: large;\r\n}\r\n\r\n.flex-container.horizontal[_ngcontent-%COMP%] {\r\n    flex-direction: row;\r\n}\r\n\r\n.flex-container.vertical[_ngcontent-%COMP%] {\r\n    flex-direction: column;\r\n}\r\n\r\n.paragraph-text[_ngcontent-%COMP%] {\r\n    font-size: 24px;\r\n    font-family: \"Calibri\";\r\n    color: white;\r\n    height: -webkit-fit-content;\r\n    height: -moz-fit-content;\r\n    height: fit-content;\r\n    line-height: 32px;\r\n    text-align: justify;\r\n    text-justify: inter-word;\r\n}\r\n\r\n@media(max-width:720px){\r\n    .paragraph-text[_ngcontent-%COMP%] {\r\n        font-size: 16px;\r\n        line-height: 24px;\r\n    }\r\n\r\n    .title-text[_ngcontent-%COMP%] {\r\n        font-size: 32px;\r\n        line-height: 32px;\r\n    }\r\n  }\r\n\r\ntextarea.form-control[_ngcontent-%COMP%] {\r\n    height: calc(80vh - 400px);\r\n}\r\n\r\ntextarea[_ngcontent-%COMP%] {\r\n    resize: none;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL3N0eWxlcy5jc3MiLCJzcmMvYXBwL2NvbnRhY3QvY29udGFjdC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksYUFBYTtBQUNqQjs7QUFFQTtJQUNJLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGlCQUFpQjtBQUNyQjs7QUFDQTtJQUNJLGlCQUFpQjtJQUNqQixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLG9CQUFvQjtJQUNwQixZQUFZO0lBQ1osMkJBQW1CO0lBQW5CLHdCQUFtQjtJQUFuQixtQkFBbUI7SUFDbkIsaUJBQWlCO0FBQ3JCOztBQUdBO0lBQ0ksb0NBQW9DO0lBQ3BDLGdDQUFnQztBQUNwQzs7QUFFQTtJQUNJLHdCQUF3QjtJQUN4QixxQkFBcUI7QUFDekI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsNkJBQTZCO0lBQzdCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLGVBQWU7SUFDZixzQkFBc0I7SUFDdEIsWUFBWTtJQUNaLDJCQUFtQjtJQUFuQix3QkFBbUI7SUFBbkIsbUJBQW1CO0lBQ25CLGlCQUFpQjtJQUNqQixtQkFBbUI7SUFDbkIsd0JBQXdCO0FBQzVCOztBQUVBO0lBQ0k7UUFDSSxlQUFlO1FBQ2YsaUJBQWlCO0lBQ3JCOztJQUVBO1FBQ0ksZUFBZTtRQUNmLGlCQUFpQjtJQUNyQjtFQUNGOztBQzdFRjtJQUNJLDBCQUEwQjtBQUM5Qjs7QUFFQTtJQUNJLFlBQVk7QUFDaEIiLCJmaWxlIjoic3JjL2FwcC9jb250YWN0L2NvbnRhY3QuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5sYXJnZS1icmVhayB7XHJcbiAgICBoZWlnaHQ6IDEyMHB4O1xyXG59XHJcblxyXG4ubWVkaXVtLWJyZWFrIHtcclxuICAgIGhlaWdodDogNTBweDtcclxufVxyXG5cclxuLnNtYWxsLWJyZWFrIHtcclxuICAgIGhlaWdodDogMjBweDtcclxufVxyXG5cclxuLnAtaC01IHtcclxuICAgIHBhZGRpbmctbGVmdDogNSU7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiA1JTtcclxufVxyXG4ucC1oLTEwIHtcclxuICAgIHBhZGRpbmctbGVmdDogMTAlO1xyXG4gICAgcGFkZGluZy1yaWdodDogMTAlO1xyXG59XHJcblxyXG4uY2VudGVyIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG5cclxuLnRpdGxlLXRleHQge1xyXG4gICAgZm9udC1zaXplOiA1MHB4O1xyXG4gICAgZm9udC1mYW1pbHk6XCJJbXBhY3RcIjtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGhlaWdodDogZml0LWNvbnRlbnQ7XHJcbiAgICBsaW5lLWhlaWdodDogNTBweDtcclxufVxyXG5cclxuXHJcbi5saWdodCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTAyLCAxNTEsIDIxNik7XHJcbiAgICBib3JkZXItY29sb3I6IHJnYigxMDIsIDE1MSwgMjE2KTtcclxufVxyXG5cclxuLmRhcmsge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjojNDQ3M2NjO1xyXG4gICAgYm9yZGVyLWNvbG9yOiAjNDQ3M2NjO1xyXG59XHJcblxyXG4uZmxleC1jb250YWluZXIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xyXG4gICAgYm9yZGVyLXdpZHRoOiBsYXJnZTtcclxufVxyXG5cclxuLmZsZXgtY29udGFpbmVyLmhvcml6b250YWwge1xyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxufVxyXG5cclxuLmZsZXgtY29udGFpbmVyLnZlcnRpY2FsIHtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbn1cclxuXHJcbi5wYXJhZ3JhcGgtdGV4dCB7XHJcbiAgICBmb250LXNpemU6IDI0cHg7XHJcbiAgICBmb250LWZhbWlseTogXCJDYWxpYnJpXCI7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBoZWlnaHQ6IGZpdC1jb250ZW50O1xyXG4gICAgbGluZS1oZWlnaHQ6IDMycHg7XHJcbiAgICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xyXG4gICAgdGV4dC1qdXN0aWZ5OiBpbnRlci13b3JkO1xyXG59XHJcblxyXG5AbWVkaWEobWF4LXdpZHRoOjcyMHB4KXtcclxuICAgIC5wYXJhZ3JhcGgtdGV4dCB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAyNHB4O1xyXG4gICAgfVxyXG5cclxuICAgIC50aXRsZS10ZXh0IHtcclxuICAgICAgICBmb250LXNpemU6IDMycHg7XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDMycHg7XHJcbiAgICB9XHJcbiAgfSIsIkBpbXBvcnQgJy4uL3NoYXJlZC9zdHlsZXMuY3NzJztcclxuXHJcbnRleHRhcmVhLmZvcm0tY29udHJvbCB7XHJcbiAgICBoZWlnaHQ6IGNhbGMoODB2aCAtIDQwMHB4KTtcclxufVxyXG5cclxudGV4dGFyZWEge1xyXG4gICAgcmVzaXplOiBub25lO1xyXG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ContactComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'pm-contact',
                templateUrl: './contact.component.html',
                styleUrls: ['./contact.component.css']
            }]
    }], function () { return [{ type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }, { type: _contact_service__WEBPACK_IMPORTED_MODULE_2__["ContactService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/error/page-not-found/page-not-found.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/error/page-not-found/page-not-found.component.ts ***!
  \******************************************************************/
/*! exports provided: PageNotFoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageNotFoundComponent", function() { return PageNotFoundComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");



const _c0 = function () { return ["/home"]; };
class PageNotFoundComponent {
    constructor() { }
    ngOnInit() {
    }
}
PageNotFoundComponent.ɵfac = function PageNotFoundComponent_Factory(t) { return new (t || PageNotFoundComponent)(); };
PageNotFoundComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PageNotFoundComponent, selectors: [["ng-component"]], decls: 12, vars: 2, consts: [[1, "text-center"], [2, "height", "150px"], [2, "height", "20px"], [1, "btn", "btn-warning", 3, "routerLink"], [2, "height", "30px"], ["src", "./assets/images/bad-fib.jpg", 1, "img-responsive", "center-block", 2, "height", "300px", "padding-bottom", "50px"]], template: function PageNotFoundComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Uh oh! ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " Looks like this page doesn't exist. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " Go Back! ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "img", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](1, _c0));
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLink"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Vycm9yL3BhZ2Utbm90LWZvdW5kL3BhZ2Utbm90LWZvdW5kLmNvbXBvbmVudC5jc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PageNotFoundComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                templateUrl: './page-not-found.component.html',
                styleUrls: ['./page-not-found.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/error/page-under-construction/page-under-construction.component.ts":
/*!************************************************************************************!*\
  !*** ./src/app/error/page-under-construction/page-under-construction.component.ts ***!
  \************************************************************************************/
/*! exports provided: PageUnderConstructionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageUnderConstructionComponent", function() { return PageUnderConstructionComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");



const _c0 = function () { return ["/home"]; };
class PageUnderConstructionComponent {
    constructor() { }
    ngOnInit() {
    }
}
PageUnderConstructionComponent.ɵfac = function PageUnderConstructionComponent_Factory(t) { return new (t || PageUnderConstructionComponent)(); };
PageUnderConstructionComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PageUnderConstructionComponent, selectors: [["page-under-construction"]], decls: 12, vars: 2, consts: [[1, "text-center"], [2, "height", "150px"], [2, "height", "20px"], [1, "btn", "btn-warning", 3, "routerLink"], [2, "height", "30px"], ["src", "./assets/images/construction-turnip.png", 1, "img-responsive", "center-block", 2, "height", "300px", "padding-bottom", "50px"]], template: function PageUnderConstructionComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " This page is under construction! ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " Please check back later. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " Go Back! ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "img", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](1, _c0));
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLink"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Vycm9yL3BhZ2UtdW5kZXItY29uc3RydWN0aW9uL3BhZ2UtdW5kZXItY29uc3RydWN0aW9uLmNvbXBvbmVudC5jc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PageUnderConstructionComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'page-under-construction',
                templateUrl: './page-under-construction.component.html',
                styleUrls: ['./page-under-construction.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/gallery/gallery.component.ts":
/*!**********************************************!*\
  !*** ./src/app/gallery/gallery.component.ts ***!
  \**********************************************/
/*! exports provided: GalleryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GalleryComponent", function() { return GalleryComponent; });
/* harmony import */ var _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/cdk/portal */ "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/portal.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _shared_image_overlay_image_overlay_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/image-overlay/image-overlay.component */ "./src/app/shared/image-overlay/image-overlay.component.ts");
/* harmony import */ var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/overlay */ "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/overlay.js");
/* harmony import */ var _shared_services_image_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/services/image.service */ "./src/app/shared/services/image.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");







function GalleryComponent_div_10_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "img", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function GalleryComponent_div_10_Template_img_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r3); const image_r1 = ctx.$implicit; const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r2.showOverlay(image_r1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "p", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const image_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", image_r1.thumbImage, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"])("alt", image_r1.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](image_r1.title);
} }
class GalleryComponent {
    constructor(overlay, _imageService) {
        this.overlay = overlay;
        this._imageService = _imageService;
    }
    ngOnInit() {
        this.images = this._imageService.getGalleryImages();
    }
    showOverlay(img) {
        const overlayRef = this.overlay.create({
            positionStrategy: this.overlay.position().global().centerHorizontally().centerVertically(),
            hasBackdrop: true,
        });
        const overlay = overlayRef.attach(new _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_0__["ComponentPortal"](_shared_image_overlay_image_overlay_component__WEBPACK_IMPORTED_MODULE_2__["ImageOverlayComponent"]));
        overlay.instance.src = img.compressImage;
        overlay.instance.title = img.title;
        overlayRef.backdropClick().subscribe(x => {
            overlayRef.detach();
        });
    }
}
GalleryComponent.ɵfac = function GalleryComponent_Factory(t) { return new (t || GalleryComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_3__["Overlay"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_shared_services_image_service__WEBPACK_IMPORTED_MODULE_4__["ImageService"])); };
GalleryComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: GalleryComponent, selectors: [["pm-gallery"]], decls: 13, vars: 1, consts: [[1, "large-break"], [1, "flex-container", "vertical", "dark", "p-h-10", "fade-in"], [1, "small-break"], [1, "title-text"], [1, "line-break-light"], [1, "paragraph-text"], [1, "grid-container", "dark", "fade-in"], [4, "ngFor", "ngForOf"], [1, "medium-break"], [1, "grid-item"], [2, "width", "100%", "height", "100%", 3, "src", "alt", "click"], [1, "image-title"]], template: function GalleryComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Digital Art");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "hr", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, " I started learning digital art during quarantine in 2020 and it has now become one of my favourite hobbies! Here is some of my work below. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](10, GalleryComponent_div_10_Template, 5, 3, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](11, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](12, "div", 8);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.images);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"]], styles: [".large-break[_ngcontent-%COMP%] {\r\n    height: 120px;\r\n}\r\n\r\n.medium-break[_ngcontent-%COMP%] {\r\n    height: 50px;\r\n}\r\n\r\n.small-break[_ngcontent-%COMP%] {\r\n    height: 20px;\r\n}\r\n\r\n.p-h-5[_ngcontent-%COMP%] {\r\n    padding-left: 5%;\r\n    padding-right: 5%;\r\n}\r\n\r\n.p-h-10[_ngcontent-%COMP%] {\r\n    padding-left: 10%;\r\n    padding-right: 10%;\r\n}\r\n\r\n.center[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    justify-content: center;\r\n}\r\n\r\n.title-text[_ngcontent-%COMP%] {\r\n    font-size: 50px;\r\n    font-family:\"Impact\";\r\n    color: white;\r\n    height: -webkit-fit-content;\r\n    height: -moz-fit-content;\r\n    height: fit-content;\r\n    line-height: 50px;\r\n}\r\n\r\n.light[_ngcontent-%COMP%] {\r\n    background-color: rgb(102, 151, 216);\r\n    border-color: rgb(102, 151, 216);\r\n}\r\n\r\n.dark[_ngcontent-%COMP%] {\r\n    background-color:#4473cc;\r\n    border-color: #4473cc;\r\n}\r\n\r\n.flex-container[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    justify-content: space-around;\r\n    border-width: large;\r\n}\r\n\r\n.flex-container.horizontal[_ngcontent-%COMP%] {\r\n    flex-direction: row;\r\n}\r\n\r\n.flex-container.vertical[_ngcontent-%COMP%] {\r\n    flex-direction: column;\r\n}\r\n\r\n.paragraph-text[_ngcontent-%COMP%] {\r\n    font-size: 24px;\r\n    font-family: \"Calibri\";\r\n    color: white;\r\n    height: -webkit-fit-content;\r\n    height: -moz-fit-content;\r\n    height: fit-content;\r\n    line-height: 32px;\r\n    text-align: justify;\r\n    text-justify: inter-word;\r\n}\r\n\r\n@media(max-width:720px){\r\n    .paragraph-text[_ngcontent-%COMP%] {\r\n        font-size: 16px;\r\n        line-height: 24px;\r\n    }\r\n\r\n    .title-text[_ngcontent-%COMP%] {\r\n        font-size: 32px;\r\n        line-height: 32px;\r\n    }\r\n  }\r\n\r\n.grid-container[_ngcontent-%COMP%] {\r\n    display: inline-grid;\r\n    grid-column-gap: 50px;\r\n    grid-template-columns: repeat(4, 1fr); \r\n    justify-content: center !important;\r\n    align-items: center !important;\r\n\r\n\r\n    padding-top: 30px;\r\n    padding-bottom: 30px;\r\n\r\n    grid-row-gap: 100px;\r\n    \r\n}\r\n\r\n@media(max-width:1560px){\r\n  .grid-container[_ngcontent-%COMP%] {\r\n      grid-template-columns: repeat(3, 1fr);\r\n  }\r\n}\r\n\r\n@media(max-width:1280px){\r\n  .grid-container[_ngcontent-%COMP%] {\r\n      grid-template-columns: repeat(2, 1fr);\r\n  }\r\n}\r\n\r\n@media(max-width:720px){\r\n  .grid-container[_ngcontent-%COMP%] {\r\n      grid-template-columns: repeat(1, 1fr);\r\n  }\r\n}\r\n\r\n.grid-item[_ngcontent-%COMP%] {\r\n    background-color: white;\r\n    display: flex !important;\r\n    flex-direction: row;\r\n    justify-content: center !important;\r\n    align-items: center !important;\r\n    align-self: center;\r\n    \r\n}\r\n\r\n.image-title[_ngcontent-%COMP%] {\r\n    font-family: Calibri;\r\n    text-align: center;\r\n    font-size: 16px;\r\n    color: white;\r\n    margin: 0;\r\n    padding-top: 5px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL3N0eWxlcy5jc3MiLCJzcmMvYXBwL2dhbGxlcnkvZ2FsbGVyeS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksYUFBYTtBQUNqQjs7QUFFQTtJQUNJLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGlCQUFpQjtBQUNyQjs7QUFDQTtJQUNJLGlCQUFpQjtJQUNqQixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLG9CQUFvQjtJQUNwQixZQUFZO0lBQ1osMkJBQW1CO0lBQW5CLHdCQUFtQjtJQUFuQixtQkFBbUI7SUFDbkIsaUJBQWlCO0FBQ3JCOztBQUdBO0lBQ0ksb0NBQW9DO0lBQ3BDLGdDQUFnQztBQUNwQzs7QUFFQTtJQUNJLHdCQUF3QjtJQUN4QixxQkFBcUI7QUFDekI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsNkJBQTZCO0lBQzdCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLGVBQWU7SUFDZixzQkFBc0I7SUFDdEIsWUFBWTtJQUNaLDJCQUFtQjtJQUFuQix3QkFBbUI7SUFBbkIsbUJBQW1CO0lBQ25CLGlCQUFpQjtJQUNqQixtQkFBbUI7SUFDbkIsd0JBQXdCO0FBQzVCOztBQUVBO0lBQ0k7UUFDSSxlQUFlO1FBQ2YsaUJBQWlCO0lBQ3JCOztJQUVBO1FBQ0ksZUFBZTtRQUNmLGlCQUFpQjtJQUNyQjtFQUNGOztBQzdFRjtJQUNJLG9CQUFvQjtJQUNwQixxQkFBcUI7SUFDckIscUNBQXFDO0lBQ3JDLGtDQUFrQztJQUNsQyw4QkFBOEI7OztJQUc5QixpQkFBaUI7SUFDakIsb0JBQW9COztJQUVwQixtQkFBbUI7O0FBRXZCOztBQUVBO0VBQ0U7TUFDSSxxQ0FBcUM7RUFDekM7QUFDRjs7QUFFQTtFQUNFO01BQ0kscUNBQXFDO0VBQ3pDO0FBQ0Y7O0FBRUE7RUFDRTtNQUNJLHFDQUFxQztFQUN6QztBQUNGOztBQUVBO0lBQ0ksdUJBQXVCO0lBQ3ZCLHdCQUF3QjtJQUN4QixtQkFBbUI7SUFDbkIsa0NBQWtDO0lBQ2xDLDhCQUE4QjtJQUM5QixrQkFBa0I7O0FBRXRCOztBQUVBO0lBQ0ksb0JBQW9CO0lBQ3BCLGtCQUFrQjtJQUNsQixlQUFlO0lBQ2YsWUFBWTtJQUNaLFNBQVM7SUFDVCxnQkFBZ0I7QUFDcEIiLCJmaWxlIjoic3JjL2FwcC9nYWxsZXJ5L2dhbGxlcnkuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5sYXJnZS1icmVhayB7XHJcbiAgICBoZWlnaHQ6IDEyMHB4O1xyXG59XHJcblxyXG4ubWVkaXVtLWJyZWFrIHtcclxuICAgIGhlaWdodDogNTBweDtcclxufVxyXG5cclxuLnNtYWxsLWJyZWFrIHtcclxuICAgIGhlaWdodDogMjBweDtcclxufVxyXG5cclxuLnAtaC01IHtcclxuICAgIHBhZGRpbmctbGVmdDogNSU7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiA1JTtcclxufVxyXG4ucC1oLTEwIHtcclxuICAgIHBhZGRpbmctbGVmdDogMTAlO1xyXG4gICAgcGFkZGluZy1yaWdodDogMTAlO1xyXG59XHJcblxyXG4uY2VudGVyIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG5cclxuLnRpdGxlLXRleHQge1xyXG4gICAgZm9udC1zaXplOiA1MHB4O1xyXG4gICAgZm9udC1mYW1pbHk6XCJJbXBhY3RcIjtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGhlaWdodDogZml0LWNvbnRlbnQ7XHJcbiAgICBsaW5lLWhlaWdodDogNTBweDtcclxufVxyXG5cclxuXHJcbi5saWdodCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTAyLCAxNTEsIDIxNik7XHJcbiAgICBib3JkZXItY29sb3I6IHJnYigxMDIsIDE1MSwgMjE2KTtcclxufVxyXG5cclxuLmRhcmsge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjojNDQ3M2NjO1xyXG4gICAgYm9yZGVyLWNvbG9yOiAjNDQ3M2NjO1xyXG59XHJcblxyXG4uZmxleC1jb250YWluZXIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xyXG4gICAgYm9yZGVyLXdpZHRoOiBsYXJnZTtcclxufVxyXG5cclxuLmZsZXgtY29udGFpbmVyLmhvcml6b250YWwge1xyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxufVxyXG5cclxuLmZsZXgtY29udGFpbmVyLnZlcnRpY2FsIHtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbn1cclxuXHJcbi5wYXJhZ3JhcGgtdGV4dCB7XHJcbiAgICBmb250LXNpemU6IDI0cHg7XHJcbiAgICBmb250LWZhbWlseTogXCJDYWxpYnJpXCI7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBoZWlnaHQ6IGZpdC1jb250ZW50O1xyXG4gICAgbGluZS1oZWlnaHQ6IDMycHg7XHJcbiAgICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xyXG4gICAgdGV4dC1qdXN0aWZ5OiBpbnRlci13b3JkO1xyXG59XHJcblxyXG5AbWVkaWEobWF4LXdpZHRoOjcyMHB4KXtcclxuICAgIC5wYXJhZ3JhcGgtdGV4dCB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAyNHB4O1xyXG4gICAgfVxyXG5cclxuICAgIC50aXRsZS10ZXh0IHtcclxuICAgICAgICBmb250LXNpemU6IDMycHg7XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDMycHg7XHJcbiAgICB9XHJcbiAgfSIsIkBpbXBvcnQgJy4uL3NoYXJlZC9zdHlsZXMuY3NzJztcclxuXHJcbi5ncmlkLWNvbnRhaW5lciB7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtZ3JpZDtcclxuICAgIGdyaWQtY29sdW1uLWdhcDogNTBweDtcclxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDQsIDFmcik7IFxyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXIgIWltcG9ydGFudDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXIgIWltcG9ydGFudDtcclxuXHJcblxyXG4gICAgcGFkZGluZy10b3A6IDMwcHg7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMzBweDtcclxuXHJcbiAgICBncmlkLXJvdy1nYXA6IDEwMHB4O1xyXG4gICAgXHJcbn1cclxuXHJcbkBtZWRpYShtYXgtd2lkdGg6MTU2MHB4KXtcclxuICAuZ3JpZC1jb250YWluZXIge1xyXG4gICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgzLCAxZnIpO1xyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhKG1heC13aWR0aDoxMjgwcHgpe1xyXG4gIC5ncmlkLWNvbnRhaW5lciB7XHJcbiAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDIsIDFmcik7XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEobWF4LXdpZHRoOjcyMHB4KXtcclxuICAuZ3JpZC1jb250YWluZXIge1xyXG4gICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxLCAxZnIpO1xyXG4gIH1cclxufVxyXG5cclxuLmdyaWQtaXRlbSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgIGRpc3BsYXk6IGZsZXggIWltcG9ydGFudDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlciAhaW1wb3J0YW50O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlciAhaW1wb3J0YW50O1xyXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xyXG4gICAgXHJcbn1cclxuXHJcbi5pbWFnZS10aXRsZSB7XHJcbiAgICBmb250LWZhbWlseTogQ2FsaWJyaTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIHBhZGRpbmctdG9wOiA1cHg7XHJcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](GalleryComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'pm-gallery',
                templateUrl: './gallery.component.html',
                styleUrls: ['./gallery.component.css']
            }]
    }], function () { return [{ type: _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_3__["Overlay"] }, { type: _shared_services_image_service__WEBPACK_IMPORTED_MODULE_4__["ImageService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/projects/projects.component.ts":
/*!************************************************!*\
  !*** ./src/app/projects/projects.component.ts ***!
  \************************************************/
/*! exports provided: ProjectsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectsComponent", function() { return ProjectsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");





function ProjectsComponent_div_1_img_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 15);
} if (rf & 2) {
    const project_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", project_r1.demos[project_r1.view].src, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function ProjectsComponent_div_1_iframe_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "iframe", 16);
} if (rf & 2) {
    const project_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", project_r1.demos[project_r1.view].src, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeResourceUrl"]);
} }
function ProjectsComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, ProjectsComponent_div_1_img_4_Template, 1, 1, "img", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, ProjectsComponent_div_1_iframe_5_Template, 1, 1, "iframe", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProjectsComponent_div_1_Template_div_click_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const project_r1 = ctx.$implicit; const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r6.viewPrev(project_r1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "keyboard_arrow_left");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProjectsComponent_div_1_Template_div_click_10_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const project_r1 = ctx.$implicit; const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r8.viewNext(project_r1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "keyboard_arrow_right");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "hr", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "p", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const project_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", project_r1.demos[project_r1.view].type == "image");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", project_r1.demos[project_r1.view].type == "video");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](project_r1.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", project_r1.description, " ");
} }
class ProjectsComponent {
    constructor(_sanitizer) {
        this._sanitizer = _sanitizer;
        this.projects = [
            {
                title: "Jumpy Turnip",
                view: 1,
                demos: [
                    {
                        type: "video",
                        src: this._sanitizer.bypassSecurityTrustResourceUrl("https://www.youtube.com/embed/V1KUx4B1k5k")
                    }, {
                        type: "image",
                        src: "./assets/images/jumpy-turnip-title.png"
                    }, {
                        type: "image",
                        src: "./assets/images/jumpy-turnip-selection.png"
                    }, {
                        type: "image",
                        src: "./assets/images/jumpy-turnip-code.png"
                    },
                ],
                description: "Third person shooter game written in C++ and SFML with 4 difficulties, " +
                    "30 levels, 4 freeplay levels, 8 characters, and 12 upgrades per character. " +
                    "Credits to Kayla Estacio for the art, including the turnips and background images."
            },
            {
                title: "Minesweeper",
                view: 0,
                demos: [
                    {
                        type: "image",
                        src: "./assets/images/minesweeper.png"
                    }, {
                        type: "image",
                        src: "./assets/images/minesweeper2.png"
                    }, {
                        type: "image",
                        src: "./assets/images/minesweeper3.png"
                    },
                ],
                description: "A clone of Minesweeper written in Java using the Java Swing library."
            }, {
                title: "TurnipTex",
                view: 0,
                demos: [
                    {
                        type: "image",
                        src: "./assets/images/turnip-tex-code.png"
                    }, {
                        type: "image",
                        src: "./assets/images/turnip-tex-img.png"
                    },
                ],
                description: "A math text compiler that can produce LaTeX-style math expressions. Work in Progress."
            }
        ];
    }
    viewPrev(project) {
        project.view--;
        if (project.view < 0) {
            project.view += project.demos.length;
        }
    }
    viewNext(project) {
        project.view++;
        if (project.view >= project.demos.length) {
            project.view = 0;
        }
    }
}
ProjectsComponent.ɵfac = function ProjectsComponent_Factory(t) { return new (t || ProjectsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["DomSanitizer"])); };
ProjectsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ProjectsComponent, selectors: [["ng-component"]], decls: 2, vars: 1, consts: [[1, "large-break"], [4, "ngFor", "ngForOf"], [1, "flex-container", "dark", "fade-in", "outer-container"], [1, "gallery"], [1, "aspect-ratio"], ["class", "project-img", 3, "src", 4, "ngIf"], ["class", "project-video", "frameborder", "0", "allowfullscreen", "", 3, "src", 4, "ngIf"], [1, "left-right-buttons"], [1, "left-button", 3, "click"], [1, "right-button", 3, "click"], [1, "description"], [1, "title-text"], [1, "line-break-light"], [1, "paragraph-text"], [1, "medium-break"], [1, "project-img", 3, "src"], ["frameborder", "0", "allowfullscreen", "", 1, "project-video", 3, "src"]], template: function ProjectsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ProjectsComponent_div_1_Template, 21, 4, "div", 1);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.projects);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__["MatIcon"]], styles: [".large-break[_ngcontent-%COMP%] {\r\n    height: 120px;\r\n}\r\n\r\n.medium-break[_ngcontent-%COMP%] {\r\n    height: 50px;\r\n}\r\n\r\n.small-break[_ngcontent-%COMP%] {\r\n    height: 20px;\r\n}\r\n\r\n.p-h-5[_ngcontent-%COMP%] {\r\n    padding-left: 5%;\r\n    padding-right: 5%;\r\n}\r\n\r\n.p-h-10[_ngcontent-%COMP%] {\r\n    padding-left: 10%;\r\n    padding-right: 10%;\r\n}\r\n\r\n.center[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    justify-content: center;\r\n}\r\n\r\n.title-text[_ngcontent-%COMP%] {\r\n    font-size: 50px;\r\n    font-family:\"Impact\";\r\n    color: white;\r\n    height: -webkit-fit-content;\r\n    height: -moz-fit-content;\r\n    height: fit-content;\r\n    line-height: 50px;\r\n}\r\n\r\n.light[_ngcontent-%COMP%] {\r\n    background-color: rgb(102, 151, 216);\r\n    border-color: rgb(102, 151, 216);\r\n}\r\n\r\n.dark[_ngcontent-%COMP%] {\r\n    background-color:#4473cc;\r\n    border-color: #4473cc;\r\n}\r\n\r\n.flex-container[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    justify-content: space-around;\r\n    border-width: large;\r\n}\r\n\r\n.flex-container.horizontal[_ngcontent-%COMP%] {\r\n    flex-direction: row;\r\n}\r\n\r\n.flex-container.vertical[_ngcontent-%COMP%] {\r\n    flex-direction: column;\r\n}\r\n\r\n.paragraph-text[_ngcontent-%COMP%] {\r\n    font-size: 24px;\r\n    font-family: \"Calibri\";\r\n    color: white;\r\n    height: -webkit-fit-content;\r\n    height: -moz-fit-content;\r\n    height: fit-content;\r\n    line-height: 32px;\r\n    text-align: justify;\r\n    text-justify: inter-word;\r\n}\r\n\r\n@media(max-width:720px){\r\n    .paragraph-text[_ngcontent-%COMP%] {\r\n        font-size: 16px;\r\n        line-height: 24px;\r\n    }\r\n\r\n    .title-text[_ngcontent-%COMP%] {\r\n        font-size: 32px;\r\n        line-height: 32px;\r\n    }\r\n  }\r\n\r\n.outer-container[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    flex-direction: row;\r\n    padding-top: 15px;\r\n    padding-bottom: 10px;\r\n    padding-left: 2%;\r\n    padding-right: 2%;\r\n}\r\n\r\n.description[_ngcontent-%COMP%] {\r\n    width: 50%;\r\n    display: flex;\r\n    flex-direction: column;\r\n    padding: 10px;\r\n}\r\n\r\nhr.line-break-light[_ngcontent-%COMP%] {\r\n    color: #5d4bc2;\r\n    border-top: 1px solid white;\r\n}\r\n\r\n.gallery[_ngcontent-%COMP%] {\r\n    width: 50%;\r\n    height: auto;\r\n    padding-top: 100%;\r\n    display: flex;\r\n    flex-direction: column;\r\n    padding: 10px;\r\n    min-height: -webkit-max-content;\r\n    min-height: max-content;\r\n}\r\n\r\n.aspect-ratio[_ngcontent-%COMP%] {\r\n    position: relative;\r\n    width: 100%;\r\n    height: 0;\r\n    padding-bottom: 52.125%; \r\n    margin-bottom: 0.75%;\r\n}\r\n\r\n\r\n\r\n.aspect-ratio[_ngcontent-%COMP%]   iframe[_ngcontent-%COMP%], .aspect-ratio[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n    position: absolute;\r\n    width: 100%;\r\n    height: 100%;\r\n    left: 0;\r\n    top: 0;\r\n}\r\n\r\n.project-video[_ngcontent-%COMP%], .project-img[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n}\r\n\r\n@media(max-width:960px){\r\n    .outer-container[_ngcontent-%COMP%] {\r\n        flex-direction: column;\r\n    }\r\n    .description[_ngcontent-%COMP%], .gallery[_ngcontent-%COMP%] {\r\n        width: 100%;\r\n    }\r\n}\r\n\r\n.left-right-buttons[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    flex-direction: row;\r\n    justify-content: space-around;\r\n}\r\n\r\n.right-button[_ngcontent-%COMP%], .left-button[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: space-around;\r\n    width: 50%;\r\n}\r\n\r\n.right-button[_ngcontent-%COMP%] {\r\n    align-items: flex-end;\r\n}\r\n\r\n.right-button[_ngcontent-%COMP%]:hover, .left-button[_ngcontent-%COMP%]:hover {\r\n    background-color: rgba(245, 245, 245, 0.308);\r\n    cursor: pointer;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL3N0eWxlcy5jc3MiLCJzcmMvYXBwL3Byb2plY3RzL3Byb2plY3RzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksWUFBWTtBQUNoQjs7QUFFQTtJQUNJLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsaUJBQWlCO0FBQ3JCOztBQUNBO0lBQ0ksaUJBQWlCO0lBQ2pCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYix1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSxlQUFlO0lBQ2Ysb0JBQW9CO0lBQ3BCLFlBQVk7SUFDWiwyQkFBbUI7SUFBbkIsd0JBQW1CO0lBQW5CLG1CQUFtQjtJQUNuQixpQkFBaUI7QUFDckI7O0FBR0E7SUFDSSxvQ0FBb0M7SUFDcEMsZ0NBQWdDO0FBQ3BDOztBQUVBO0lBQ0ksd0JBQXdCO0lBQ3hCLHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYiw2QkFBNkI7SUFDN0IsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLHNCQUFzQjtJQUN0QixZQUFZO0lBQ1osMkJBQW1CO0lBQW5CLHdCQUFtQjtJQUFuQixtQkFBbUI7SUFDbkIsaUJBQWlCO0lBQ2pCLG1CQUFtQjtJQUNuQix3QkFBd0I7QUFDNUI7O0FBRUE7SUFDSTtRQUNJLGVBQWU7UUFDZixpQkFBaUI7SUFDckI7O0lBRUE7UUFDSSxlQUFlO1FBQ2YsaUJBQWlCO0lBQ3JCO0VBQ0Y7O0FDN0VGO0lBQ0ksYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixpQkFBaUI7SUFDakIsb0JBQW9CO0lBQ3BCLGdCQUFnQjtJQUNoQixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxVQUFVO0lBQ1YsYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksY0FBYztJQUNkLDJCQUEyQjtBQUMvQjs7QUFFQTtJQUNJLFVBQVU7SUFDVixZQUFZO0lBQ1osaUJBQWlCO0lBQ2pCLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsYUFBYTtJQUNiLCtCQUF1QjtJQUF2Qix1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsV0FBVztJQUNYLFNBQVM7SUFDVCx1QkFBdUIsRUFBRSw0REFBNEQ7SUFDckYsb0JBQW9CO0FBQ3hCOztBQUVBLDBGQUEwRjs7QUFDMUY7O0lBRUksa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxZQUFZO0lBQ1osT0FBTztJQUNQLE1BQU07QUFDVjs7QUFDQTs7SUFFSSxXQUFXO0FBQ2Y7O0FBR0E7SUFDSTtRQUNJLHNCQUFzQjtJQUMxQjtJQUNBOztRQUVJLFdBQVc7SUFDZjtBQUNKOztBQUVBO0lBQ0ksYUFBYTtJQUNiLG1CQUFtQjtJQUNuQiw2QkFBNkI7QUFDakM7O0FBRUE7O0lBRUksYUFBYTtJQUNiLHNCQUFzQjtJQUN0Qiw2QkFBNkI7SUFDN0IsVUFBVTtBQUNkOztBQUNBO0lBQ0kscUJBQXFCO0FBQ3pCOztBQUNBOztJQUVJLDRDQUE0QztJQUM1QyxlQUFlO0FBQ25CIiwiZmlsZSI6InNyYy9hcHAvcHJvamVjdHMvcHJvamVjdHMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5sYXJnZS1icmVhayB7XHJcbiAgICBoZWlnaHQ6IDEyMHB4O1xyXG59XHJcblxyXG4ubWVkaXVtLWJyZWFrIHtcclxuICAgIGhlaWdodDogNTBweDtcclxufVxyXG5cclxuLnNtYWxsLWJyZWFrIHtcclxuICAgIGhlaWdodDogMjBweDtcclxufVxyXG5cclxuLnAtaC01IHtcclxuICAgIHBhZGRpbmctbGVmdDogNSU7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiA1JTtcclxufVxyXG4ucC1oLTEwIHtcclxuICAgIHBhZGRpbmctbGVmdDogMTAlO1xyXG4gICAgcGFkZGluZy1yaWdodDogMTAlO1xyXG59XHJcblxyXG4uY2VudGVyIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG5cclxuLnRpdGxlLXRleHQge1xyXG4gICAgZm9udC1zaXplOiA1MHB4O1xyXG4gICAgZm9udC1mYW1pbHk6XCJJbXBhY3RcIjtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGhlaWdodDogZml0LWNvbnRlbnQ7XHJcbiAgICBsaW5lLWhlaWdodDogNTBweDtcclxufVxyXG5cclxuXHJcbi5saWdodCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTAyLCAxNTEsIDIxNik7XHJcbiAgICBib3JkZXItY29sb3I6IHJnYigxMDIsIDE1MSwgMjE2KTtcclxufVxyXG5cclxuLmRhcmsge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjojNDQ3M2NjO1xyXG4gICAgYm9yZGVyLWNvbG9yOiAjNDQ3M2NjO1xyXG59XHJcblxyXG4uZmxleC1jb250YWluZXIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xyXG4gICAgYm9yZGVyLXdpZHRoOiBsYXJnZTtcclxufVxyXG5cclxuLmZsZXgtY29udGFpbmVyLmhvcml6b250YWwge1xyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxufVxyXG5cclxuLmZsZXgtY29udGFpbmVyLnZlcnRpY2FsIHtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbn1cclxuXHJcbi5wYXJhZ3JhcGgtdGV4dCB7XHJcbiAgICBmb250LXNpemU6IDI0cHg7XHJcbiAgICBmb250LWZhbWlseTogXCJDYWxpYnJpXCI7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBoZWlnaHQ6IGZpdC1jb250ZW50O1xyXG4gICAgbGluZS1oZWlnaHQ6IDMycHg7XHJcbiAgICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xyXG4gICAgdGV4dC1qdXN0aWZ5OiBpbnRlci13b3JkO1xyXG59XHJcblxyXG5AbWVkaWEobWF4LXdpZHRoOjcyMHB4KXtcclxuICAgIC5wYXJhZ3JhcGgtdGV4dCB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAyNHB4O1xyXG4gICAgfVxyXG5cclxuICAgIC50aXRsZS10ZXh0IHtcclxuICAgICAgICBmb250LXNpemU6IDMycHg7XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDMycHg7XHJcbiAgICB9XHJcbiAgfSIsIkBpbXBvcnQgJy4uL3NoYXJlZC9zdHlsZXMuY3NzJztcclxuXHJcbi5vdXRlci1jb250YWluZXIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICBwYWRkaW5nLXRvcDogMTVweDtcclxuICAgIHBhZGRpbmctYm90dG9tOiAxMHB4O1xyXG4gICAgcGFkZGluZy1sZWZ0OiAyJTtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDIlO1xyXG59XHJcblxyXG4uZGVzY3JpcHRpb24ge1xyXG4gICAgd2lkdGg6IDUwJTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgcGFkZGluZzogMTBweDtcclxufVxyXG5cclxuaHIubGluZS1icmVhay1saWdodCB7XHJcbiAgICBjb2xvcjogIzVkNGJjMjtcclxuICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCB3aGl0ZTtcclxufVxyXG5cclxuLmdhbGxlcnkge1xyXG4gICAgd2lkdGg6IDUwJTtcclxuICAgIGhlaWdodDogYXV0bztcclxuICAgIHBhZGRpbmctdG9wOiAxMDAlO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgbWluLWhlaWdodDogbWF4LWNvbnRlbnQ7XHJcbn1cclxuXHJcbi5hc3BlY3QtcmF0aW8ge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDA7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogNTIuMTI1JTsgLyogVGhlIGhlaWdodCBvZiB0aGUgaXRlbSB3aWxsIG5vdyBiZSA1Mi4yNSUgb2YgdGhlIHdpZHRoLiAqL1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMC43NSU7XHJcbn1cclxuXHJcbi8qIEFkanVzdCB0aGUgaWZyYW1lIHNvIGl0J3MgcmVuZGVyZWQgaW4gdGhlIG91dGVyLXdpZHRoIGFuZCBvdXRlci1oZWlnaHQgb2YgaXQncyBwYXJlbnQgKi9cclxuLmFzcGVjdC1yYXRpbyBpZnJhbWUsXHJcbi5hc3BlY3QtcmF0aW8gaW1nIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgbGVmdDogMDtcclxuICAgIHRvcDogMDtcclxufVxyXG4ucHJvamVjdC12aWRlbyxcclxuLnByb2plY3QtaW1nIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG5cclxuQG1lZGlhKG1heC13aWR0aDo5NjBweCl7XHJcbiAgICAub3V0ZXItY29udGFpbmVyIHtcclxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgfVxyXG4gICAgLmRlc2NyaXB0aW9uLFxyXG4gICAgLmdhbGxlcnkge1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgfVxyXG59XHJcblxyXG4ubGVmdC1yaWdodC1idXR0b25zIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XHJcbn1cclxuXHJcbi5yaWdodC1idXR0b24sXHJcbi5sZWZ0LWJ1dHRvbiB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xyXG4gICAgd2lkdGg6IDUwJTtcclxufVxyXG4ucmlnaHQtYnV0dG9uIHtcclxuICAgIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcclxufVxyXG4ucmlnaHQtYnV0dG9uOmhvdmVyLFxyXG4ubGVmdC1idXR0b246aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNDUsIDI0NSwgMjQ1LCAwLjMwOCk7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProjectsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                templateUrl: './projects.component.html',
                styleUrls: ['./projects.component.css']
            }]
    }], function () { return [{ type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["DomSanitizer"] }]; }, null); })();


/***/ }),

/***/ "./src/app/shared/image-overlay/image-overlay.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/shared/image-overlay/image-overlay.component.ts ***!
  \*****************************************************************/
/*! exports provided: ImageOverlayComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImageOverlayComponent", function() { return ImageOverlayComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class ImageOverlayComponent {
    constructor() { }
    ngOnInit() {
    }
}
ImageOverlayComponent.ɵfac = function ImageOverlayComponent_Factory(t) { return new (t || ImageOverlayComponent)(); };
ImageOverlayComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ImageOverlayComponent, selectors: [["pm-image-overlay"]], inputs: { src: "src", title: "title" }, decls: 2, vars: 2, consts: [[1, "image-display"], [1, "image-display", 3, "src", "alt"]], template: function ImageOverlayComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.src, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"])("alt", ctx.title);
    } }, styles: [".image-display[_ngcontent-%COMP%] {\r\n    max-width: 80vw;\r\n    max-height: 80vh;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2ltYWdlLW92ZXJsYXkvaW1hZ2Utb3ZlcmxheS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksZUFBZTtJQUNmLGdCQUFnQjtBQUNwQiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9pbWFnZS1vdmVybGF5L2ltYWdlLW92ZXJsYXkuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5pbWFnZS1kaXNwbGF5IHtcclxuICAgIG1heC13aWR0aDogODB2dztcclxuICAgIG1heC1oZWlnaHQ6IDgwdmg7XHJcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ImageOverlayComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'pm-image-overlay',
                templateUrl: './image-overlay.component.html',
                styleUrls: ['./image-overlay.component.css']
            }]
    }], function () { return []; }, { src: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], title: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/shared/loading/loading.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/shared/loading/loading.component.ts ***!
  \*****************************************************/
/*! exports provided: LoadingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadingComponent", function() { return LoadingComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/progress-spinner */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/progress-spinner.js");




class LoadingComponent {
    constructor() { }
}
LoadingComponent.ɵfac = function LoadingComponent_Factory(t) { return new (t || LoadingComponent)(); };
LoadingComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LoadingComponent, selectors: [["app-loader"]], decls: 2, vars: 0, consts: [["color", "primary", "mode", "indeterminate"]], template: function LoadingComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "mat-progress-spinner", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_1__["MatCardContent"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_2__["MatProgressSpinner"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoadingComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-loader',
                templateUrl: './loading.component.html'
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/shared/services/image.service.ts":
/*!**************************************************!*\
  !*** ./src/app/shared/services/image.service.ts ***!
  \**************************************************/
/*! exports provided: ImageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImageService", function() { return ImageService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class ImageService {
    getWelcomeImages() {
        return [{
                image: 'assets/images/me-and-vincent.jpg',
                thumbImage: 'assets/images/me-and-vincent.jpg',
                alt: 'Card Tower',
                title: 'Tower of Cards'
            }, {
                image: 'assets/images/twin-peaks.jpg',
                thumbImage: 'assets/images/twin-peaks.jpg',
                title: 'Twin Peaks San Francisco',
                alt: 'Twin Peaks San Francisco'
            }, {
                image: 'assets/images/golden-gate-gang-full.jpg',
                thumbImage: 'assets/images/golden-gate-gang.jpg',
                title: 'Right Hand Rule',
                alt: 'Physics Gang'
            }, {
                image: 'assets/images/golden-gate-squat-full.jpg',
                thumbImage: 'assets/images/golden-gate-squat.jpg',
                title: 'Golden Gate Gang',
                alt: 'Golden Gate Gang'
            }, {
                image: 'assets/images/mathcamp-canada-day-full.jpg',
                thumbImage: 'assets/images/mathcamp-canada-day.jpg',
                title: 'Canada Day at Mathcamp',
                alt: 'Canada Day at Mathcamp'
            }, {
                image: 'assets/images/mexico-full.jpg',
                thumbImage: 'assets/images/mexico.jpg',
                title: 'Family Trip to Mexico',
                alt: 'Family Trip to Mexico'
            }
        ];
    }
    getGalleryImages() {
        var images = [
            {
                image: 'earth.png',
                name: 'Earth',
            },
            {
                image: 'lemon.png',
                name: 'When life gives you lemons...',
            },
            {
                image: 'warden.png',
                name: 'Minecraft Warden',
            },
            {
                image: 'northern-lights.png',
                name: 'Northern Lights',
            },
            {
                image: 'marble.png',
                name: 'Marble',
            },
            {
                image: 'mountains.png',
                name: 'Mountains',
            },
            {
                image: 'potato.png',
                name: 'Am Potato',
            },
            {
                image: 'cheese.png',
                name: 'Feeling Cheesy',
            },
            {
                image: 'pikachu.png',
                name: 'Surprised Pikachu',
            },
            {
                image: 'lightbulb.png',
                name: 'Lightbulb',
            },
            {
                image: 'sunset.png',
                name: 'Sunset',
            },
            {
                image: 'night-scene.png',
                name: 'Bleeding Night',
            },
            {
                image: 'bubbles.png',
                name: 'Bubbles',
            },
            {
                image: 'nebula.png',
                name: 'Universe\'s Lens',
            },
        ];
        return images.map(x => {
            return {
                image: 'assets/images/gallery/' + x.image,
                compressImage: 'assets/images/gallery/compress/' + x.image.slice(0, -4) + "-min" + ".png",
                thumbImage: 'assets/images/gallery/thumbnails/' + x.image,
                title: x.name,
                alt: x.name
            };
        });
    }
}
ImageService.ɵfac = function ImageService_Factory(t) { return new (t || ImageService)(); };
ImageService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ImageService, factory: ImageService.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ImageService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], null, null); })();


/***/ }),

/***/ "./src/app/twentyfour/twentyfour.component.ts":
/*!****************************************************!*\
  !*** ./src/app/twentyfour/twentyfour.component.ts ***!
  \****************************************************/
/*! exports provided: TwentyFourComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TwentyFourComponent", function() { return TwentyFourComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");






function TwentyFourComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const card_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", card_r3, " ");
} }
function TwentyFourComponent_div_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ans_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ans_r4, " ");
} }
const epsilon = 0.01;
class TwentyFourComponent {
    constructor() {
        this.cards = [3, 4, 5, 6];
        this.inputText = '';
        this.message = '';
        this.answers = [];
    }
    onResize(event) {
    }
    ngOnInit() {
        this.onNewGame();
    }
    onSubmit(answer) {
        let tree = null;
        try {
            tree = this.parsePM(answer);
            if (!this.isValid(tree)) {
                this.message = "You must use each number exactly once.";
            }
            else if (this.isCorrect(tree)) {
                this.message = "Correct!";
            }
            else {
                this.message = "This evaluates to " + Math.round(this.evaluate(tree).toString() * 100) / 100 + ".";
            }
        }
        catch (error) {
            this.message = error;
        }
    }
    onNewGame() {
        this.message = '';
        this.answers = [];
        this.cards = [];
        for (let i = 0; i < 4; ++i) {
            this.cards.push(1 + Math.floor(Math.random() * 10));
        }
        if (solve(this.cards).size == 0) {
            this.onNewGame();
        }
        else {
            this.cards.sort();
        }
    }
    recur(expr) {
        if (expr == '') {
            throw new Error("Invalid Expression.");
        }
        let parantheses = 0;
        for (let i = expr.length - 1; i >= 0; --i) {
            if (expr[i] == "(") {
                ++parantheses;
            }
            else if (expr[i] == ")") {
                --parantheses;
            }
            else if (['+', '-'].indexOf(expr[i]) != -1 && parantheses == 0) {
                return [expr[i], this.recur(expr.substring(0, i)), this.recur(expr.substring(i + 1, expr.length))];
            }
        }
        for (let i = expr.length - 1; i >= 0; --i) {
            if (expr[i] == "(") {
                ++parantheses;
            }
            else if (expr[i] == ")") {
                --parantheses;
            }
            else if (['*', '\/'].indexOf(expr[i]) != -1 && parantheses == 0) {
                return [expr[i], this.recur(expr.substring(0, i)), this.recur(expr.substring(i + 1, expr.length))];
            }
        }
        if (!isNaN(expr)) {
            return Number(expr);
        }
        if (expr[0] == "(" && expr[expr.length - 1] == ")") {
            return this.recur(expr.substring(1, expr.length - 1));
        }
        throw new Error("Invalid Expression.");
    }
    parsePM(expr) {
        return this.recur(expr.replaceAll(' ', ''));
    }
    isValid(exprTree) {
        let numList = [];
        let stack = [exprTree];
        while (stack.length > 0) {
            let cur = stack.pop();
            if (!isNaN(cur)) {
                numList.push(cur);
            }
            else {
                stack.push(cur[1]);
                stack.push(cur[2]);
            }
        }
        numList.sort();
        if (numList.length != 4) {
            return false;
        }
        for (let i = 0; i < 4; ++i) {
            if (numList[i] != this.cards[i]) {
                return false;
            }
        }
        return true;
    }
    isCorrect(tree) {
        return Math.abs(this.evaluate(tree) - 24) < epsilon;
    }
    evaluate(tree) {
        if (!isNaN(tree)) {
            return tree;
        }
        else if (tree[0] == '+') {
            return this.evaluate(tree[1]) + this.evaluate(tree[2]);
        }
        else if (tree[0] == '*') {
            return this.evaluate(tree[1]) * this.evaluate(tree[2]);
        }
        else if (tree[0] == '-') {
            return this.evaluate(tree[1]) - this.evaluate(tree[2]);
        }
        else if (tree[0] == '\/') {
            return this.evaluate(tree[1]) / this.evaluate(tree[2]);
        }
    }
    onShowAnswers() {
        this.answers = [...solve(this.cards)];
    }
}
TwentyFourComponent.ɵfac = function TwentyFourComponent_Factory(t) { return new (t || TwentyFourComponent)(); };
TwentyFourComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TwentyFourComponent, selectors: [["pm-twentyfour"]], hostBindings: function TwentyFourComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("resize", function TwentyFourComponent_resize_HostBindingHandler($event) { return ctx.onResize($event); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveWindow"]);
    } }, decls: 25, vars: 3, consts: [[1, "large-break"], [1, "flex-container", "vertical"], [1, "center"], [1, "cards-container", "center"], [4, "ngFor", "ngForOf"], [1, "medium-break"], [3, "ngSubmit"], ["answer", "ngForm"], ["type", "text", "name", "value", "placeholder", "answer", "ngModel", "", 1, "equationbox"], ["mat-raised-button", "", "type", "submit", 1, "checkbutton"], [1, "small-break"], ["mat-raised-button", "", "type", "button", 1, "checkbutton", 3, "click"], ["class", "center", 4, "ngFor", "ngForOf"], [1, "card", "center"]], template: function TwentyFourComponent_Template(rf, ctx) { if (rf & 1) {
        const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, TwentyFourComponent_div_4_Template, 3, 1, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "form", 6, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function TwentyFourComponent_Template_form_ngSubmit_8_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](9); return ctx.onSubmit(_r1.value.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Check");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TwentyFourComponent_Template_button_click_15_listener() { return ctx.onShowAnswers(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Show Answers");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TwentyFourComponent_Template_button_click_17_listener() { return ctx.onNewGame(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "New Game");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, TwentyFourComponent_div_23_Template, 2, 1, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.cards);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.message, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.answers);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgModel"], _angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButton"]], styles: [".large-break[_ngcontent-%COMP%] {\r\n    height: 120px;\r\n}\r\n\r\n.medium-break[_ngcontent-%COMP%] {\r\n    height: 50px;\r\n}\r\n\r\n.small-break[_ngcontent-%COMP%] {\r\n    height: 20px;\r\n}\r\n\r\n.p-h-5[_ngcontent-%COMP%] {\r\n    padding-left: 5%;\r\n    padding-right: 5%;\r\n}\r\n\r\n.p-h-10[_ngcontent-%COMP%] {\r\n    padding-left: 10%;\r\n    padding-right: 10%;\r\n}\r\n\r\n.center[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    justify-content: center;\r\n}\r\n\r\n.title-text[_ngcontent-%COMP%] {\r\n    font-size: 50px;\r\n    font-family:\"Impact\";\r\n    color: white;\r\n    height: -webkit-fit-content;\r\n    height: -moz-fit-content;\r\n    height: fit-content;\r\n    line-height: 50px;\r\n}\r\n\r\n.light[_ngcontent-%COMP%] {\r\n    background-color: rgb(102, 151, 216);\r\n    border-color: rgb(102, 151, 216);\r\n}\r\n\r\n.dark[_ngcontent-%COMP%] {\r\n    background-color:#4473cc;\r\n    border-color: #4473cc;\r\n}\r\n\r\n.flex-container[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    justify-content: space-around;\r\n    border-width: large;\r\n}\r\n\r\n.flex-container.horizontal[_ngcontent-%COMP%] {\r\n    flex-direction: row;\r\n}\r\n\r\n.flex-container.vertical[_ngcontent-%COMP%] {\r\n    flex-direction: column;\r\n}\r\n\r\n.paragraph-text[_ngcontent-%COMP%] {\r\n    font-size: 24px;\r\n    font-family: \"Calibri\";\r\n    color: white;\r\n    height: -webkit-fit-content;\r\n    height: -moz-fit-content;\r\n    height: fit-content;\r\n    line-height: 32px;\r\n    text-align: justify;\r\n    text-justify: inter-word;\r\n}\r\n\r\n@media(max-width:720px){\r\n    .paragraph-text[_ngcontent-%COMP%] {\r\n        font-size: 16px;\r\n        line-height: 24px;\r\n    }\r\n\r\n    .title-text[_ngcontent-%COMP%] {\r\n        font-size: 32px;\r\n        line-height: 32px;\r\n    }\r\n  }\r\n\r\n.cards-container[_ngcontent-%COMP%] {\r\n    display: inline-grid;\r\n    grid-column-gap: 20px;\r\n    grid-template-columns: repeat(2, 1fr); \r\n    justify-content: center !important;\r\n    align-items: center !important;\r\n\r\n\r\n    padding-top: 30px;\r\n    padding-bottom: 30px;\r\n\r\n    grid-row-gap: 100px;\r\n\r\n    width: 60%;\r\n    \r\n}\r\n\r\n@media(max-width:720px){\r\n    .cards-container[_ngcontent-%COMP%] {\r\n        width: 100%;\r\n    }\r\n  }\r\n\r\n.card[_ngcontent-%COMP%] {\r\n    background-color: transparent;\r\n    border: none;\r\n    text-align: center;\r\n    padding: none;\r\n    font-size: 100px;\r\n}\r\n\r\n.equationbox[_ngcontent-%COMP%] {\r\n    margin-right: 20px\r\n}\r\n\r\n.checkbutton[_ngcontent-%COMP%] {\r\n    margin-right: 10px;\r\n    max-width: 150px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL3N0eWxlcy5jc3MiLCJzcmMvYXBwL3R3ZW50eWZvdXIvdHdlbnR5Zm91ci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksYUFBYTtBQUNqQjs7QUFFQTtJQUNJLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGlCQUFpQjtBQUNyQjs7QUFDQTtJQUNJLGlCQUFpQjtJQUNqQixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLG9CQUFvQjtJQUNwQixZQUFZO0lBQ1osMkJBQW1CO0lBQW5CLHdCQUFtQjtJQUFuQixtQkFBbUI7SUFDbkIsaUJBQWlCO0FBQ3JCOztBQUdBO0lBQ0ksb0NBQW9DO0lBQ3BDLGdDQUFnQztBQUNwQzs7QUFFQTtJQUNJLHdCQUF3QjtJQUN4QixxQkFBcUI7QUFDekI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsNkJBQTZCO0lBQzdCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLGVBQWU7SUFDZixzQkFBc0I7SUFDdEIsWUFBWTtJQUNaLDJCQUFtQjtJQUFuQix3QkFBbUI7SUFBbkIsbUJBQW1CO0lBQ25CLGlCQUFpQjtJQUNqQixtQkFBbUI7SUFDbkIsd0JBQXdCO0FBQzVCOztBQUVBO0lBQ0k7UUFDSSxlQUFlO1FBQ2YsaUJBQWlCO0lBQ3JCOztJQUVBO1FBQ0ksZUFBZTtRQUNmLGlCQUFpQjtJQUNyQjtFQUNGOztBQzdFRjtJQUNJLG9CQUFvQjtJQUNwQixxQkFBcUI7SUFDckIscUNBQXFDO0lBQ3JDLGtDQUFrQztJQUNsQyw4QkFBOEI7OztJQUc5QixpQkFBaUI7SUFDakIsb0JBQW9COztJQUVwQixtQkFBbUI7O0lBRW5CLFVBQVU7O0FBRWQ7O0FBRUE7SUFDSTtRQUNJLFdBQVc7SUFDZjtFQUNGOztBQUVGO0lBQ0ksNkJBQTZCO0lBQzdCLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsYUFBYTtJQUNiLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJO0FBQ0o7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsZ0JBQWdCO0FBQ3BCIiwiZmlsZSI6InNyYy9hcHAvdHdlbnR5Zm91ci90d2VudHlmb3VyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubGFyZ2UtYnJlYWsge1xyXG4gICAgaGVpZ2h0OiAxMjBweDtcclxufVxyXG5cclxuLm1lZGl1bS1icmVhayB7XHJcbiAgICBoZWlnaHQ6IDUwcHg7XHJcbn1cclxuXHJcbi5zbWFsbC1icmVhayB7XHJcbiAgICBoZWlnaHQ6IDIwcHg7XHJcbn1cclxuXHJcbi5wLWgtNSB7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDUlO1xyXG4gICAgcGFkZGluZy1yaWdodDogNSU7XHJcbn1cclxuLnAtaC0xMCB7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDEwJTtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDEwJTtcclxufVxyXG5cclxuLmNlbnRlciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuXHJcbi50aXRsZS10ZXh0IHtcclxuICAgIGZvbnQtc2l6ZTogNTBweDtcclxuICAgIGZvbnQtZmFtaWx5OlwiSW1wYWN0XCI7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBoZWlnaHQ6IGZpdC1jb250ZW50O1xyXG4gICAgbGluZS1oZWlnaHQ6IDUwcHg7XHJcbn1cclxuXHJcblxyXG4ubGlnaHQge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDEwMiwgMTUxLCAyMTYpO1xyXG4gICAgYm9yZGVyLWNvbG9yOiByZ2IoMTAyLCAxNTEsIDIxNik7XHJcbn1cclxuXHJcbi5kYXJrIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IzQ0NzNjYztcclxuICAgIGJvcmRlci1jb2xvcjogIzQ0NzNjYztcclxufVxyXG5cclxuLmZsZXgtY29udGFpbmVyIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcclxuICAgIGJvcmRlci13aWR0aDogbGFyZ2U7XHJcbn1cclxuXHJcbi5mbGV4LWNvbnRhaW5lci5ob3Jpem9udGFsIHtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbn1cclxuXHJcbi5mbGV4LWNvbnRhaW5lci52ZXJ0aWNhbCB7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG59XHJcblxyXG4ucGFyYWdyYXBoLXRleHQge1xyXG4gICAgZm9udC1zaXplOiAyNHB4O1xyXG4gICAgZm9udC1mYW1pbHk6IFwiQ2FsaWJyaVwiO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgaGVpZ2h0OiBmaXQtY29udGVudDtcclxuICAgIGxpbmUtaGVpZ2h0OiAzMnB4O1xyXG4gICAgdGV4dC1hbGlnbjoganVzdGlmeTtcclxuICAgIHRleHQtanVzdGlmeTogaW50ZXItd29yZDtcclxufVxyXG5cclxuQG1lZGlhKG1heC13aWR0aDo3MjBweCl7XHJcbiAgICAucGFyYWdyYXBoLXRleHQge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgICBsaW5lLWhlaWdodDogMjRweDtcclxuICAgIH1cclxuXHJcbiAgICAudGl0bGUtdGV4dCB7XHJcbiAgICAgICAgZm9udC1zaXplOiAzMnB4O1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAzMnB4O1xyXG4gICAgfVxyXG4gIH0iLCJAaW1wb3J0ICcuLi9zaGFyZWQvc3R5bGVzLmNzcyc7XHJcblxyXG4uY2FyZHMtY29udGFpbmVyIHtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ncmlkO1xyXG4gICAgZ3JpZC1jb2x1bW4tZ2FwOiAyMHB4O1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMiwgMWZyKTsgXHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlciAhaW1wb3J0YW50O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlciAhaW1wb3J0YW50O1xyXG5cclxuXHJcbiAgICBwYWRkaW5nLXRvcDogMzBweDtcclxuICAgIHBhZGRpbmctYm90dG9tOiAzMHB4O1xyXG5cclxuICAgIGdyaWQtcm93LWdhcDogMTAwcHg7XHJcblxyXG4gICAgd2lkdGg6IDYwJTtcclxuICAgIFxyXG59XHJcblxyXG5AbWVkaWEobWF4LXdpZHRoOjcyMHB4KXtcclxuICAgIC5jYXJkcy1jb250YWluZXIge1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbi5jYXJkIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgcGFkZGluZzogbm9uZTtcclxuICAgIGZvbnQtc2l6ZTogMTAwcHg7XHJcbn1cclxuXHJcbi5lcXVhdGlvbmJveCB7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDIwcHhcclxufVxyXG5cclxuLmNoZWNrYnV0dG9uIHtcclxuICAgIG1hcmdpbi1yaWdodDogMTBweDtcclxuICAgIG1heC13aWR0aDogMTUwcHg7XHJcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TwentyFourComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'pm-twentyfour',
                templateUrl: './twentyfour.component.html',
                styleUrls: ['./twentyfour.component.css']
            }]
    }], function () { return []; }, { onResize: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['window:resize', ['$event']]
        }] }); })();
class Type {
}
Type.Operation = 1;
Type.Number = 2;
class Operation {
}
Operation.ADD = '+';
Operation.SUB = '-';
Operation.MUL = '*';
Operation.DIV = '/';
class MyNode {
    constructor(type) {
        this.type = type;
        this.negatives = false;
    }
    setNum(number) {
        this.number = number;
    }
    set_op(operation) {
        this.operation = operation;
    }
    set_children(left, right) {
        this.left = left;
        this.right = right;
    }
    get_num() {
        return this.number;
    }
    get_op() {
        return this.operation;
    }
    has_negatives() {
        if (this.type == Type.Number) {
            return this.get_num() < 0;
        }
        return this.eval() < 0 || this.left.has_negatives() || this.right.has_negatives() < 0;
    }
    flatten() {
        if (this.type == Type.Number) {
            this.exprs = [this];
            return;
        }
        this.left.flatten();
        this.right.flatten();
        if (this.operation == Operation.ADD || this.operation == Operation.MUL) {
            if (this.left.type == Type.Number) {
                this.exprs = this.left.exprs;
            }
            else if (this.left.operation == this.operation) {
                this.exprs = this.left.exprs;
            }
            else {
                this.exprs = [this.left];
            }
            if (this.right.type == Type.Number) {
                this.exprs = this.exprs.concat(this.right.exprs);
            }
            else if (this.right.operation == this.operation) {
                this.exprs = this.exprs.concat(this.right.exprs);
            }
            else {
                this.exprs = this.exprs.concat([this.right]);
            }
            return this.exprs;
        }
        else {
            if (this.left.type == Type.Number) {
                this.exprs = [this.left, this.right];
            }
            else if (this.left.operation == this.operation) {
                this.exprs = this.left.exprs.concat([this.right]);
            }
            else {
                this.exprs = [this.left, this.right];
            }
            return this.exprs;
        }
    }
    arrange() {
        if (this.type == Type.Operation) {
            if (this.operation == Operation.ADD || this.operation == Operation.MUL) {
                this.exprs.sort((x, y) => x.eval() > y.eval() ? 1 : -1);
            }
            else {
                let sub = this.exprs.slice(1);
                this.exprs = [this.exprs[0]]
                    .concat(sub.sort((x, y) => x.eval() > y.eval() ? 1 : -1));
            }
            this.exprs.forEach(expr => {
                expr.arrange();
            });
        }
    }
    eval() {
        if (this.type == Type.Number)
            return this.get_num();
        else if (this.operation == Operation.ADD)
            return this.exprs.reduce((x, y) => x + y.eval(), 0);
        else if (this.operation == Operation.SUB)
            return this.exprs[0].eval() - this.exprs.slice(1).reduce((x, y) => x + y.eval(), 0);
        else if (this.operation == Operation.MUL)
            return this.exprs.reduce((x, y) => x * y.eval(), 1);
        else if (this.operation == Operation.DIV)
            return this.exprs[0].eval() / this.exprs.slice(1).reduce((x, y) => x * y.eval(), 1);
    }
    toString() {
        if (true) {
            if (this.type == Type.Number)
                return this.get_num().toString();
            else
                return '(' + this.exprs.reduce((x, y) => x + " " + this.operation + " " + y.toString()) + ')';
        }
        else {}
    }
}
let structures = [
    [
        Type.Operation,
        [
            Type.Operation,
            [
                Type.Operation,
                Type.Number,
                Type.Number
            ],
            Type.Number
        ],
        Type.Number
    ],
    [
        Type.Operation,
        [
            Type.Operation,
            Type.Number,
            [
                Type.Operation,
                Type.Number,
                Type.Number
            ]
        ],
        Type.Number
    ],
    [
        Type.Operation,
        [
            Type.Operation,
            Type.Number,
            Type.Number
        ],
        [
            Type.Operation,
            Type.Number,
            Type.Number
        ]
    ],
    [
        Type.Operation,
        Type.Number,
        [
            Type.Operation,
            [
                Type.Operation,
                Type.Number,
                Type.Number
            ],
            Type.Number
        ]
    ],
    [
        Type.Operation,
        Type.Number,
        [
            Type.Operation,
            Type.Number,
            [
                Type.Operation,
                Type.Number,
                Type.Number
            ]
        ]
    ]
];
function generate_tree(structure, op_list, num_list) {
    if (structure == Type.Number) {
        let node = new MyNode(Type.Number);
        node.setNum(num_list.pop());
        return node;
    }
    else if (structure[0] == Type.Operation) {
        let node = new MyNode(Type.Operation);
        node.set_op(op_list.pop());
        let left = generate_tree(structure[1], op_list, num_list);
        let right = generate_tree(structure[2], op_list, num_list);
        node.set_children(left, right);
        return node;
    }
}
// Helper function copied from https://stackoverflow.com/questions/37579994/generate-permutations-of-javascript-array
function permutations(xs) {
    let ret = [];
    for (let i = 0; i < xs.length; i = i + 1) {
        let rest = permutations(xs.slice(0, i).concat(xs.slice(i + 1)));
        if (!rest.length) {
            ret.push([xs[i]]);
        }
        else {
            for (let j = 0; j < rest.length; j = j + 1) {
                ret.push([xs[i]].concat(rest[j]));
            }
        }
    }
    return ret;
}
let ops = [Operation.ADD, Operation.SUB, Operation.MUL, Operation.DIV];
let num_list = [1, 2, 3, 4];
function solve(nums) {
    let solutions = [];
    structures.forEach(structure => {
        permutations(nums).forEach(perm => {
            ops.forEach(x => {
                ops.forEach(y => {
                    ops.forEach(z => {
                        let cur = generate_tree(structure, [x, y, z], perm.slice(0));
                        cur.flatten();
                        cur.arrange();
                        if (cur.eval() - 24 < epsilon && 24 - cur.eval() < epsilon) {
                            solutions.push(cur.toString());
                        }
                    });
                });
            });
        });
    });
    return new Set(solutions);
}


/***/ }),

/***/ "./src/app/welcome/welcome.component.ts":
/*!**********************************************!*\
  !*** ./src/app/welcome/welcome.component.ts ***!
  \**********************************************/
/*! exports provided: WelcomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WelcomeComponent", function() { return WelcomeComponent; });
/* harmony import */ var _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/cdk/portal */ "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/portal.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _shared_loading_loading_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/loading/loading.component */ "./src/app/shared/loading/loading.component.ts");
/* harmony import */ var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/overlay */ "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/overlay.js");
/* harmony import */ var _shared_services_image_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/services/image.service */ "./src/app/shared/services/image.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var ng_image_slider__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng-image-slider */ "./node_modules/ng-image-slider/__ivy_ngcc__/fesm2015/ng-image-slider.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");









function WelcomeComponent_div_60_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "img", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const lang_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", lang_r2.src, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"])("alt", lang_r2.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](lang_r2.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](lang_r2.status);
} }
const _c0 = function () { return ["/projects"]; };
const _c1 = function () { return ["/academics"]; };
const _c2 = function () { return ["/contact"]; };
class WelcomeComponent {
    constructor(overlay, imageService) {
        this.overlay = overlay;
        this.imageService = imageService;
        this.imgSrc = "./assets/images/me-and-vincent.jpg";
        this.infinite = true;
        this.imageSize = {
            width: '250px',
            height: '325px'
        };
        this.autoSlide = {
            interval: 4,
            stopOnHover: true
        };
        this.languages = [{
                src: './assets/images/python.png',
                name: 'Python',
                status: 'Advanced'
            }, {
                src: './assets/images/cpp.png',
                name: 'C++',
                status: 'Advanced'
            }, {
                src: './assets/images/csharp.png',
                name: 'C#',
                status: 'Advanced'
            }, {
                src: './assets/images/sql.png',
                name: 'SQL',
                status: 'Advanced'
            }, {
                src: './assets/images/java.png',
                name: 'Java',
                status: 'Intermediate'
            }, {
                src: './assets/images/js.png',
                name: 'JavaScript',
                status: 'Intermediate'
            }, {
                src: './assets/images/php.png',
                name: 'PHP',
                status: 'Intermediate'
            }, {
                src: './assets/images/html.png',
                name: 'HTML',
                status: 'Intermediate'
            }, {
                src: './assets/images/css.png',
                name: 'CSS',
                status: 'Intermediate'
            }, {
                src: './assets/images/racket.png',
                name: 'Racket',
                status: 'Intermediate'
            }, {
                src: './assets/images/C.png',
                name: 'C',
                status: 'Beginner'
            }, {
                src: './assets/images/scala.png',
                name: 'Scala',
                status: 'Beginner'
            },
        ];
    }
    ngOnInit() {
        this.showOverlay();
        this.imageObject = this.imageService.getWelcomeImages();
        const element = document.getElementById('start');
        element.scrollIntoView();
    }
    showOverlay() {
        const overlayRef = this.overlay.create({
            positionStrategy: this.overlay.position().global().centerHorizontally().centerVertically(),
            hasBackdrop: true
        });
        overlayRef.attach(new _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_0__["ComponentPortal"](_shared_loading_loading_component__WEBPACK_IMPORTED_MODULE_2__["LoadingComponent"]));
        setTimeout(() => {
            overlayRef.detach();
        }, 0);
    }
    ngAfterViewInit() {
        var startEl = document.getElementById("start");
        startEl.scrollIntoView();
    }
    getOpacityByRelativeWindowLocation(pageHeight, elementTop, elementBottom) {
        pageHeight -= 70;
        elementTop -= 70;
        elementBottom -= 70;
        // Element smaller than page
        // Return what percentage of div is on screen
        let elementMiddle = (elementBottom + elementTop) / 2;
        if (elementBottom - elementTop > pageHeight) {
            if (elementTop <= 0 && elementBottom >= pageHeight) {
                return "100%";
            }
            else if (elementTop > 0) {
                return (100 * Math.max(1 - elementTop / pageHeight, 0)).toString() + "%";
            }
            else {
                return (100 * Math.max(elementBottom / pageHeight, 0)).toString() + "%";
            }
        }
        else {
            if (pageHeight / 4 <= elementMiddle && elementMiddle <= 3 * pageHeight / 4) {
                return "100%";
            }
            else if (elementMiddle < pageHeight / 4) {
                return (100 * Math.max(1 - 2 * (pageHeight / 4 - elementMiddle) / pageHeight, 0)).toString() + "%";
            }
            else {
                return (100 * Math.max(1 - 2 * (elementMiddle - 3 * pageHeight / 4) / pageHeight, 0)).toString() + "%";
            }
        }
    }
    onScrollEvent($event) {
        var darkElements = document.getElementsByClassName('fade-in');
        for (var i = 0; i < darkElements.length; ++i) {
            var el = darkElements[i];
            el.style.opacity = this.getOpacityByRelativeWindowLocation(window.innerHeight, el.getBoundingClientRect().top, el.getBoundingClientRect().bottom);
        }
    }
}
WelcomeComponent.ɵfac = function WelcomeComponent_Factory(t) { return new (t || WelcomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_3__["Overlay"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_shared_services_image_service__WEBPACK_IMPORTED_MODULE_4__["ImageService"])); };
WelcomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: WelcomeComponent, selectors: [["ng-component"]], hostBindings: function WelcomeComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("scroll", function WelcomeComponent_scroll_HostBindingHandler($event) { return ctx.onScrollEvent($event); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresolveWindow"]);
    } }, decls: 63, vars: 12, consts: [["id", "start", 1, "large-break"], [1, "flex-container", "vertical", "dark", "p-h-10", "fade-in"], [1, "medium-break"], [1, "container-fluid"], [1, "small-break"], [1, "text-center"], [1, "title-text"], ["src", "./assets/images/me.jpg", "alt", "Me", 1, "circle-img"], [1, "intro-text"], ["target", "_blank", "rel", "noopener noreferrer", "href", "https://uwaterloo.ca/"], [1, "flex-container", "vertical", "dark", "p-h-10", "fade-in", 2, "opacity", "0%"], [1, "text-region"], [1, "line-break-light"], [1, "paragraph-text"], ["target", "_blank", "rel", "noopener noreferrer", "href", "https://www.youtube.com/channel/UCYO_jab_esuFRV4b17AJtAw"], ["target", "_blank", "rel", "noopener noreferrer", "href", "https://www.youtube.com/user/1veritasium"], ["target", "_blank", "rel", "noopener noreferrer", "href", "https://www.youtube.com/user/onemeeeliondollars"], [3, "routerLink"], [3, "images", "imageSize", "infinite", "autoSlide", "imagePopup"], ["nav", ""], [1, "grid-container", "dark", "fade-in"], [4, "ngFor", "ngForOf"], [1, "grid-item"], [1, "flip-box"], [1, "flip-box-inner"], [1, "flip-box-front"], [2, "width", "100%", "height", "100%", 3, "src", "alt"], [1, "flip-box-back"]], template: function WelcomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "Hello! My name is Andrew Luo.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](11, "img", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](12, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](14, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "p", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, " I'm a Computer Science and Pure Mathematics student at the ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, "University of Waterloo");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, ". ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](21, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](23, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26, "About Me");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](27, "hr", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "p", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](29, " I love math, logic, and problem solving! When I am not busy with school work or life, I will often be watching math videos or working on programming projects for fun. My favourite YouTube channels are ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](31, "3Blue1Brown");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](32, ", ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "a", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](34, "Veritasium");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](35, ", and ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "a", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](37, "Mark Rober");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](38, ". I have a passion for learning new things whether it be through my courses, personal projects, research opportunities, or internship opportunities. Feel free to check out some of my ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "a", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](40, "projects");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](41, " and ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](42, "a", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](43, "academic work");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](44, ". You can ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](45, "a", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](46, "contact me");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](47, " if you have any questions or want to chat! ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](48, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](49, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](50, "ng-image-slider", 18, 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](52, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](53, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](54, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](55, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](56, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](57, "Programming Languages");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](58, "hr", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](59, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](60, WelcomeComponent_div_60_Template, 11, 4, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](61, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](62, "div", 2);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](39);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](9, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](10, _c1));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](11, _c2));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("images", ctx.imageObject)("imageSize", ctx.imageSize)("infinite", ctx.infinite)("autoSlide", ctx.autoSlide)("imagePopup", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.languages);
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterLinkWithHref"], ng_image_slider__WEBPACK_IMPORTED_MODULE_6__["NgImageSliderComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"]], styles: [".large-break[_ngcontent-%COMP%] {\r\n    height: 120px;\r\n}\r\n\r\n.medium-break[_ngcontent-%COMP%] {\r\n    height: 50px;\r\n}\r\n\r\n.small-break[_ngcontent-%COMP%] {\r\n    height: 20px;\r\n}\r\n\r\n.p-h-5[_ngcontent-%COMP%] {\r\n    padding-left: 5%;\r\n    padding-right: 5%;\r\n}\r\n\r\n.p-h-10[_ngcontent-%COMP%] {\r\n    padding-left: 10%;\r\n    padding-right: 10%;\r\n}\r\n\r\n.center[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    justify-content: center;\r\n}\r\n\r\n.title-text[_ngcontent-%COMP%] {\r\n    font-size: 50px;\r\n    font-family:\"Impact\";\r\n    color: white;\r\n    height: -webkit-fit-content;\r\n    height: -moz-fit-content;\r\n    height: fit-content;\r\n    line-height: 50px;\r\n}\r\n\r\n.light[_ngcontent-%COMP%] {\r\n    background-color: rgb(102, 151, 216);\r\n    border-color: rgb(102, 151, 216);\r\n}\r\n\r\n.dark[_ngcontent-%COMP%] {\r\n    background-color:#4473cc;\r\n    border-color: #4473cc;\r\n}\r\n\r\n.flex-container[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    justify-content: space-around;\r\n    border-width: large;\r\n}\r\n\r\n.flex-container.horizontal[_ngcontent-%COMP%] {\r\n    flex-direction: row;\r\n}\r\n\r\n.flex-container.vertical[_ngcontent-%COMP%] {\r\n    flex-direction: column;\r\n}\r\n\r\n.paragraph-text[_ngcontent-%COMP%] {\r\n    font-size: 24px;\r\n    font-family: \"Calibri\";\r\n    color: white;\r\n    height: -webkit-fit-content;\r\n    height: -moz-fit-content;\r\n    height: fit-content;\r\n    line-height: 32px;\r\n    text-align: justify;\r\n    text-justify: inter-word;\r\n}\r\n\r\n@media(max-width:720px){\r\n    .paragraph-text[_ngcontent-%COMP%] {\r\n        font-size: 16px;\r\n        line-height: 24px;\r\n    }\r\n\r\n    .title-text[_ngcontent-%COMP%] {\r\n        font-size: 32px;\r\n        line-height: 32px;\r\n    }\r\n  }\r\n\r\n.circle-img[_ngcontent-%COMP%] {\r\n    border-radius: 50%;\r\n    border-width: 2px;\r\n    border-color:white;\r\n    border-style: outset;\r\n}\r\n\r\n.no-padding[_ngcontent-%COMP%] {\r\n    padding-left: 0 !important;\r\n    padding-right: 0 !important;\r\n}\r\n\r\n.intro-text[_ngcontent-%COMP%] {\r\n    font-size: 24px;\r\n    font-family: \"Calibri\";\r\n    color: white;\r\n    height: -webkit-fit-content;\r\n    height: -moz-fit-content;\r\n    height: fit-content;\r\n    line-height: 24px;\r\n}\r\n\r\nhr.line-break-light[_ngcontent-%COMP%] {\r\n    color: #5d4bc2;\r\n    border-top: 1px solid white;\r\n}\r\n\r\n\r\n\r\na[_ngcontent-%COMP%] { \r\n    color: inherit;\r\n}\r\n\r\n.text-region[_ngcontent-%COMP%] {\r\n\r\n}\r\n\r\n\r\n\r\n.flip-box[_ngcontent-%COMP%] {\r\n    background-color: transparent;\r\n    width: 100%;\r\n    height: 100%;\r\n    perspective: 1000px;\r\n  }\r\n\r\n.flip-box-inner[_ngcontent-%COMP%] {\r\n    background-color: transparent;\r\n    position: relative;\r\n    width: 100%;\r\n    height: 100%;\r\n    text-align: center;\r\n    transition: transform 0.8s;\r\n    transform-style: preserve-3d;\r\n  }\r\n\r\n.flip-box[_ngcontent-%COMP%]:hover   .flip-box-inner[_ngcontent-%COMP%] {\r\n    transform: rotateY(180deg);\r\n  }\r\n\r\n.flip-box-front[_ngcontent-%COMP%], .flip-box-back[_ngcontent-%COMP%] {\r\n    position: absolute;\r\n    width: 100%;\r\n    height: 100%;\r\n    -webkit-backface-visibility: hidden;\r\n    backface-visibility: hidden;\r\n  }\r\n\r\n.flip-box-front[_ngcontent-%COMP%] {\r\n    background-color: transparent;\r\n  }\r\n\r\n.flip-box-back[_ngcontent-%COMP%] {\r\n    background-color: transparent;\r\n    transform: rotateY(180deg);\r\n  }\r\n\r\n.grid-container[_ngcontent-%COMP%] {\r\n    display: grid;\r\n    grid-column-gap: 50px;\r\n    grid-template-columns: repeat(6, 1fr); \r\n    justify-content: center !important;\r\n    align-items: center !important;\r\n\r\n\r\n    padding-top: 30px;\r\n    padding-bottom: 30px;\r\n\r\n    grid-row-gap: 100px;\r\n    \r\n  }\r\n\r\n@media(max-width:1440px){\r\n  .grid-container[_ngcontent-%COMP%] {\r\n      grid-template-columns: repeat(4, 1fr);\r\n  }\r\n}\r\n\r\n@media(max-width:960px){\r\n  .grid-container[_ngcontent-%COMP%] {\r\n      grid-template-columns: repeat(3, 1fr);\r\n  }\r\n}\r\n\r\n@media(max-width:720px){\r\n  .grid-container[_ngcontent-%COMP%] {\r\n      grid-template-columns: repeat(2, 1fr);\r\n  }\r\n}\r\n\r\n.grid-item[_ngcontent-%COMP%] {\r\n  background-color: white;\r\n  border-width: 5px;\r\n  border-style: inset;\r\n  display: flex !important;\r\n  justify-content: center !important;\r\n  align-items: center !important;\r\n\r\n  padding: 16px;\r\n  width: 128px;\r\n  height: 128px;\r\n  \r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL3N0eWxlcy5jc3MiLCJzcmMvYXBwL3dlbGNvbWUvd2VsY29tZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksYUFBYTtBQUNqQjs7QUFFQTtJQUNJLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGlCQUFpQjtBQUNyQjs7QUFDQTtJQUNJLGlCQUFpQjtJQUNqQixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLG9CQUFvQjtJQUNwQixZQUFZO0lBQ1osMkJBQW1CO0lBQW5CLHdCQUFtQjtJQUFuQixtQkFBbUI7SUFDbkIsaUJBQWlCO0FBQ3JCOztBQUdBO0lBQ0ksb0NBQW9DO0lBQ3BDLGdDQUFnQztBQUNwQzs7QUFFQTtJQUNJLHdCQUF3QjtJQUN4QixxQkFBcUI7QUFDekI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsNkJBQTZCO0lBQzdCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLGVBQWU7SUFDZixzQkFBc0I7SUFDdEIsWUFBWTtJQUNaLDJCQUFtQjtJQUFuQix3QkFBbUI7SUFBbkIsbUJBQW1CO0lBQ25CLGlCQUFpQjtJQUNqQixtQkFBbUI7SUFDbkIsd0JBQXdCO0FBQzVCOztBQUVBO0lBQ0k7UUFDSSxlQUFlO1FBQ2YsaUJBQWlCO0lBQ3JCOztJQUVBO1FBQ0ksZUFBZTtRQUNmLGlCQUFpQjtJQUNyQjtFQUNGOztBQzVFRjtJQUNJLGtCQUFrQjtJQUNsQixpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLG9CQUFvQjtBQUN4Qjs7QUFFQTtJQUNJLDBCQUEwQjtJQUMxQiwyQkFBMkI7QUFDL0I7O0FBRUE7SUFDSSxlQUFlO0lBQ2Ysc0JBQXNCO0lBQ3RCLFlBQVk7SUFDWiwyQkFBbUI7SUFBbkIsd0JBQW1CO0lBQW5CLG1CQUFtQjtJQUNuQixpQkFBaUI7QUFDckI7O0FBR0E7SUFDSSxjQUFjO0lBQ2QsMkJBQTJCO0FBQy9COztBQUVBLHNDQUFzQzs7QUFDdEM7SUFDSSxjQUFjO0FBQ2xCOztBQUVBOztBQUVBOztBQUVBLFVBQVU7O0FBQ1Y7SUFDSSw2QkFBNkI7SUFDN0IsV0FBVztJQUNYLFlBQVk7SUFDWixtQkFBbUI7RUFDckI7O0FBRUE7SUFDRSw2QkFBNkI7SUFDN0Isa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLDBCQUEwQjtJQUMxQiw0QkFBNEI7RUFDOUI7O0FBRUE7SUFDRSwwQkFBMEI7RUFDNUI7O0FBRUE7SUFDRSxrQkFBa0I7SUFDbEIsV0FBVztJQUNYLFlBQVk7SUFDWixtQ0FBbUM7SUFDbkMsMkJBQTJCO0VBQzdCOztBQUVBO0lBQ0UsNkJBQTZCO0VBQy9COztBQUVBO0lBQ0UsNkJBQTZCO0lBQzdCLDBCQUEwQjtFQUM1Qjs7QUFFQTtJQUNFLGFBQWE7SUFDYixxQkFBcUI7SUFDckIscUNBQXFDO0lBQ3JDLGtDQUFrQztJQUNsQyw4QkFBOEI7OztJQUc5QixpQkFBaUI7SUFDakIsb0JBQW9COztJQUVwQixtQkFBbUI7O0VBRXJCOztBQUVGO0VBQ0U7TUFDSSxxQ0FBcUM7RUFDekM7QUFDRjs7QUFFQTtFQUNFO01BQ0kscUNBQXFDO0VBQ3pDO0FBQ0Y7O0FBRUE7RUFDRTtNQUNJLHFDQUFxQztFQUN6QztBQUNGOztBQUVBO0VBQ0UsdUJBQXVCO0VBQ3ZCLGlCQUFpQjtFQUNqQixtQkFBbUI7RUFDbkIsd0JBQXdCO0VBQ3hCLGtDQUFrQztFQUNsQyw4QkFBOEI7O0VBRTlCLGFBQWE7RUFDYixZQUFZO0VBQ1osYUFBYTs7QUFFZiIsImZpbGUiOiJzcmMvYXBwL3dlbGNvbWUvd2VsY29tZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmxhcmdlLWJyZWFrIHtcclxuICAgIGhlaWdodDogMTIwcHg7XHJcbn1cclxuXHJcbi5tZWRpdW0tYnJlYWsge1xyXG4gICAgaGVpZ2h0OiA1MHB4O1xyXG59XHJcblxyXG4uc21hbGwtYnJlYWsge1xyXG4gICAgaGVpZ2h0OiAyMHB4O1xyXG59XHJcblxyXG4ucC1oLTUge1xyXG4gICAgcGFkZGluZy1sZWZ0OiA1JTtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDUlO1xyXG59XHJcbi5wLWgtMTAge1xyXG4gICAgcGFkZGluZy1sZWZ0OiAxMCU7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAxMCU7XHJcbn1cclxuXHJcbi5jZW50ZXIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59XHJcblxyXG4udGl0bGUtdGV4dCB7XHJcbiAgICBmb250LXNpemU6IDUwcHg7XHJcbiAgICBmb250LWZhbWlseTpcIkltcGFjdFwiO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgaGVpZ2h0OiBmaXQtY29udGVudDtcclxuICAgIGxpbmUtaGVpZ2h0OiA1MHB4O1xyXG59XHJcblxyXG5cclxuLmxpZ2h0IHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxMDIsIDE1MSwgMjE2KTtcclxuICAgIGJvcmRlci1jb2xvcjogcmdiKDEwMiwgMTUxLCAyMTYpO1xyXG59XHJcblxyXG4uZGFyayB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiM0NDczY2M7XHJcbiAgICBib3JkZXItY29sb3I6ICM0NDczY2M7XHJcbn1cclxuXHJcbi5mbGV4LWNvbnRhaW5lciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XHJcbiAgICBib3JkZXItd2lkdGg6IGxhcmdlO1xyXG59XHJcblxyXG4uZmxleC1jb250YWluZXIuaG9yaXpvbnRhbCB7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG59XHJcblxyXG4uZmxleC1jb250YWluZXIudmVydGljYWwge1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxufVxyXG5cclxuLnBhcmFncmFwaC10ZXh0IHtcclxuICAgIGZvbnQtc2l6ZTogMjRweDtcclxuICAgIGZvbnQtZmFtaWx5OiBcIkNhbGlicmlcIjtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGhlaWdodDogZml0LWNvbnRlbnQ7XHJcbiAgICBsaW5lLWhlaWdodDogMzJweDtcclxuICAgIHRleHQtYWxpZ246IGp1c3RpZnk7XHJcbiAgICB0ZXh0LWp1c3RpZnk6IGludGVyLXdvcmQ7XHJcbn1cclxuXHJcbkBtZWRpYShtYXgtd2lkdGg6NzIwcHgpe1xyXG4gICAgLnBhcmFncmFwaC10ZXh0IHtcclxuICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDI0cHg7XHJcbiAgICB9XHJcblxyXG4gICAgLnRpdGxlLXRleHQge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMzJweDtcclxuICAgICAgICBsaW5lLWhlaWdodDogMzJweDtcclxuICAgIH1cclxuICB9IiwiXHJcbkBpbXBvcnQgJy4uL3NoYXJlZC9zdHlsZXMuY3NzJztcclxuXHJcbi5jaXJjbGUtaW1nIHtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIGJvcmRlci13aWR0aDogMnB4O1xyXG4gICAgYm9yZGVyLWNvbG9yOndoaXRlO1xyXG4gICAgYm9yZGVyLXN0eWxlOiBvdXRzZXQ7XHJcbn1cclxuXHJcbi5uby1wYWRkaW5nIHtcclxuICAgIHBhZGRpbmctbGVmdDogMCAhaW1wb3J0YW50O1xyXG4gICAgcGFkZGluZy1yaWdodDogMCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uaW50cm8tdGV4dCB7XHJcbiAgICBmb250LXNpemU6IDI0cHg7XHJcbiAgICBmb250LWZhbWlseTogXCJDYWxpYnJpXCI7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBoZWlnaHQ6IGZpdC1jb250ZW50O1xyXG4gICAgbGluZS1oZWlnaHQ6IDI0cHg7XHJcbn1cclxuXHJcblxyXG5oci5saW5lLWJyZWFrLWxpZ2h0IHtcclxuICAgIGNvbG9yOiAjNWQ0YmMyO1xyXG4gICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIHdoaXRlO1xyXG59XHJcblxyXG4vKiBIeXBlcmxpbmsgc2hvdWxkbid0IGNoYW5nZSBjb2xvdXIgKi9cclxuYSB7IFxyXG4gICAgY29sb3I6IGluaGVyaXQ7XHJcbn0gXHJcblxyXG4udGV4dC1yZWdpb24ge1xyXG5cclxufVxyXG5cclxuLyp0ZXN0aW5nKi9cclxuLmZsaXAtYm94IHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBwZXJzcGVjdGl2ZTogMTAwMHB4O1xyXG4gIH1cclxuICBcclxuICAuZmxpcC1ib3gtaW5uZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjhzO1xyXG4gICAgdHJhbnNmb3JtLXN0eWxlOiBwcmVzZXJ2ZS0zZDtcclxuICB9XHJcbiAgXHJcbiAgLmZsaXAtYm94OmhvdmVyIC5mbGlwLWJveC1pbm5lciB7XHJcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZVkoMTgwZGVnKTtcclxuICB9XHJcbiAgXHJcbiAgLmZsaXAtYm94LWZyb250LCAuZmxpcC1ib3gtYmFjayB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIC13ZWJraXQtYmFja2ZhY2UtdmlzaWJpbGl0eTogaGlkZGVuO1xyXG4gICAgYmFja2ZhY2UtdmlzaWJpbGl0eTogaGlkZGVuO1xyXG4gIH1cclxuICBcclxuICAuZmxpcC1ib3gtZnJvbnQge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgfVxyXG4gIFxyXG4gIC5mbGlwLWJveC1iYWNrIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgdHJhbnNmb3JtOiByb3RhdGVZKDE4MGRlZyk7XHJcbiAgfVxyXG5cclxuICAuZ3JpZC1jb250YWluZXIge1xyXG4gICAgZGlzcGxheTogZ3JpZDtcclxuICAgIGdyaWQtY29sdW1uLWdhcDogNTBweDtcclxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDYsIDFmcik7IFxyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXIgIWltcG9ydGFudDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXIgIWltcG9ydGFudDtcclxuXHJcblxyXG4gICAgcGFkZGluZy10b3A6IDMwcHg7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMzBweDtcclxuXHJcbiAgICBncmlkLXJvdy1nYXA6IDEwMHB4O1xyXG4gICAgXHJcbiAgfVxyXG5cclxuQG1lZGlhKG1heC13aWR0aDoxNDQwcHgpe1xyXG4gIC5ncmlkLWNvbnRhaW5lciB7XHJcbiAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDQsIDFmcik7XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEobWF4LXdpZHRoOjk2MHB4KXtcclxuICAuZ3JpZC1jb250YWluZXIge1xyXG4gICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgzLCAxZnIpO1xyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhKG1heC13aWR0aDo3MjBweCl7XHJcbiAgLmdyaWQtY29udGFpbmVyIHtcclxuICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMiwgMWZyKTtcclxuICB9XHJcbn1cclxuXHJcbi5ncmlkLWl0ZW0ge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gIGJvcmRlci13aWR0aDogNXB4O1xyXG4gIGJvcmRlci1zdHlsZTogaW5zZXQ7XHJcbiAgZGlzcGxheTogZmxleCAhaW1wb3J0YW50O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyICFpbXBvcnRhbnQ7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlciAhaW1wb3J0YW50O1xyXG5cclxuICBwYWRkaW5nOiAxNnB4O1xyXG4gIHdpZHRoOiAxMjhweDtcclxuICBoZWlnaHQ6IDEyOHB4O1xyXG4gIFxyXG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](WelcomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                templateUrl: './welcome.component.html',
                styleUrls: ['./welcome.component.css']
            }]
    }], function () { return [{ type: _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_3__["Overlay"] }, { type: _shared_services_image_service__WEBPACK_IMPORTED_MODULE_4__["ImageService"] }]; }, { onScrollEvent: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"],
            args: ['window:scroll', ['$event']]
        }] }); })();


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\turni\OneDrive - University of Waterloo\Projects\APM\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map