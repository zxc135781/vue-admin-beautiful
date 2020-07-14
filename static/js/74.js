/*!
 *  基于vue-admin-beautiful构建 
 *  copyright: chuzhixin 1204505056@qq.com 
 *  time: 2020-7-14 10:56:50
 */
(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[74],{

/***/ "./src/utils/clipboard.js":
/*!********************************!*\
  !*** ./src/utils/clipboard.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return handleClipboard; });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/_vue@2.6.11@vue/dist/vue.esm.js");
/* harmony import */ var clipboard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! clipboard */ "./node_modules/_clipboard@2.0.6@clipboard/dist/clipboard.js");
/* harmony import */ var clipboard__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(clipboard__WEBPACK_IMPORTED_MODULE_1__);



function clipboardSuccess() {
  vue__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.$baseMessage("复制成功", "success");
}

function clipboardError() {
  vue__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.$baseMessage("复制失败", "error");
}
/**
 * @copyright chuzhixin 1204505056@qq.com
 * @description 复制数据
 * @param text
 * @param event
 */


function handleClipboard(_text, event) {
  var clipboard = new clipboard__WEBPACK_IMPORTED_MODULE_1___default.a(event.target, {
    text: function text() {
      return _text;
    }
  });
  clipboard.on("success", function () {
    clipboardSuccess();
    clipboard.destroy();
  });
  clipboard.on("error", function () {
    clipboardError();
    clipboard.destroy();
  });
  clipboard.onClick(event);
}

/***/ })

}]);