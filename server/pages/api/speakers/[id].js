"use strict";
(() => {
var exports = {};
exports.id = 591;
exports.ids = [591];
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

/***/ 225:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ handler)
/* harmony export */ });
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(17);
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(147);
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_1__);
//import speakerData from '../../../src/SpeakerData';


const { promisify  } = __webpack_require__(837);
const readFile = promisify((fs__WEBPACK_IMPORTED_MODULE_1___default().readFile));
const writeFile = promisify((fs__WEBPACK_IMPORTED_MODULE_1___default().writeFile));
const delay = (ms)=>new Promise((resolve)=>setTimeout(resolve, ms)
    )
;
async function handler(req, res) {
    //res.status(200).send(JSON.stringify(speakerData,null,2));
    const method = req?.method;
    const id = parseInt(req?.query.id);
    const recordFromBody = req?.body;
    const jsonFile = path__WEBPACK_IMPORTED_MODULE_0___default().resolve("./", "db.json");
    switch(method){
        case "POST":
            await postMethod();
            break;
        case "PUT":
            await putMethod();
            break;
        case "DELETE":
            await deleteMethod();
            break;
        default:
            res.status(501).send(`Method ${method} not implemented`);
            console.log(`Method ${method} not implemented`);
    }
    async function putMethod() {
        try {
            const readFileData = await readFile(jsonFile);
            await delay(1000);
            const speakers = JSON.parse(readFileData).speakers;
            // if (!speakers) {
            // 	res.status(404).send("Error: Request failed with status code 404");
            // } {else }
            const newSpeakersArray = speakers.map(function(rec) {
                return rec.id == id ? recordFromBody : rec;
            });
            writeFile(jsonFile, JSON.stringify({
                speakers: newSpeakersArray
            }, null, 2));
            res.setHeader("Content-Type", "application/json");
            res.status(200).send(JSON.stringify(recordFromBody, null, 2));
            console.log(`PUT /api/speakers/${id}  status: 200`);
        } catch (e) {
            res.status(500).send(`PUT /api/speakers/${id}  status: 500 unexpected error`);
            console.log(`PUT /api/speakers/${id}  status: 200`, e);
        }
    }
    async function deleteMethod() {
        try {
            const readFileData = await readFile(jsonFile);
            await delay(1000);
            const speakers = JSON.parse(readFileData).speakers;
            // if (!speakers) {
            // 	res.status(404).send("Error: Request failed with status code 404");
            // } else {}
            const newSpeakersArray = speakers.filter(function(rec) {
                return rec.id != id;
            });
            writeFile(jsonFile, JSON.stringify({
                speakers: newSpeakersArray
            }, null, 2));
            res.setHeader("Content-Type", "application/json");
            res.status(200).send(JSON.stringify(speakers.find((rec)=>rec.id == id
            ), null, 2));
            console.log(`DELETE /api/speakers/${id}  status: 200`);
        } catch (e) {
            res.status(500).send(`DELETE /api/speakers/${id}  status: 500 unexpected error`);
            console.log(`DELETE /api/speakers/${id}  status: 200`, e);
        }
    }
    async function postMethod() {
        try {
            const readFileData = await readFile(jsonFile);
            await delay(1000);
            const speakers = JSON.parse(readFileData).speakers;
            // if (!speakers) {
            // 	res.status(404).send("Error: Request failed with status code 404");
            // } else {}
            const idNew = speakers.reduce((accumulator, currentValue)=>{
                const idCurrent = parseInt(currentValue.id);
                return idCurrent > accumulator ? idCurrent : accumulator;
            }, 0) + 1;
            const newSpeakerRec = {
                ...recordFromBody,
                id: idNew.toString()
            };
            const newSpeakersArray = [
                newSpeakerRec,
                ...speakers
            ];
            writeFile(jsonFile, JSON.stringify({
                speakers: newSpeakersArray
            }, null, 2));
            res.setHeader("Content-Type", "application/json");
            res.status(200).send(JSON.stringify(newSpeakerRec, null, 2));
            console.log(`POST /api/speakers/${id}  status: 200`);
        } catch (e) {
            res.status(500).send(`POST /api/speakers/${id}  status: 500 unexpected error`);
            console.log(`POST /api/speakers/${id}  status: 200`, e);
        }
    }
};


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(225));
module.exports = __webpack_exports__;

})();