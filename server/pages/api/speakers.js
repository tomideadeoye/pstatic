"use strict";
(() => {
var exports = {};
exports.id = 59;
exports.ids = [59];
exports.modules = {

/***/ 147:
/***/ ((module) => {

module.exports = require("fs");

/***/ }),

/***/ 17:
/***/ ((module) => {

module.exports = require("path");

/***/ }),

/***/ 837:
/***/ ((module) => {

module.exports = require("util");

/***/ }),

/***/ 532:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ handler)
/* harmony export */ });
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(17);
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(147);
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_1__);
//import { data } from '../../../SpeakerData';


const { promisify  } = __webpack_require__(837);
const readFile = promisify((fs__WEBPACK_IMPORTED_MODULE_1___default().readFile));
const delay = (ms)=>new Promise((resolve)=>{
        setTimeout(resolve, ms);
    })
;
async function handler(req, res) {
    //res.status(200).send(JSON.stringify(data, null, 2));
    const jsonFile = path__WEBPACK_IMPORTED_MODULE_0___default().resolve("./", "db.json");
    try {
        const readFileData = await readFile(jsonFile);
        await delay(1000);
        const speakers = JSON.parse(readFileData).speakers;
        if (speakers) {
            res.setHeader("Content-Type", "application/json");
            res.status(200).send(JSON.stringify(speakers, null, 2));
            console.log("GET /api/speakers status: 200");
        }
    } catch (e) {
        console.log("/api/speakers error", e);
        res.status(404).send("File Not Found on server");
    }
};


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(532));
module.exports = __webpack_exports__;

})();