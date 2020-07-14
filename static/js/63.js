/*!
 *  基于vue-admin-beautiful构建 
 *  copyright: chuzhixin 1204505056@qq.com 
 *  time: 2020-7-14 10:56:50
 */
(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[63],{

/***/ "./node_modules/_cache-loader@4.1.0@cache-loader/dist/cjs.js?!./node_modules/_babel-loader@8.1.0@babel-loader/lib/index.js!./node_modules/_cache-loader@4.1.0@cache-loader/dist/cjs.js?!./node_modules/_vue-loader@15.9.3@vue-loader/lib/index.js?!./src/views/vab/player/index.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/_cache-loader@4.1.0@cache-loader/dist/cjs.js??ref--12-0!./node_modules/_babel-loader@8.1.0@babel-loader/lib!./node_modules/_cache-loader@4.1.0@cache-loader/dist/cjs.js??ref--0-0!./node_modules/_vue-loader@15.9.3@vue-loader/lib??vue-loader-options!./src/views/vab/player/index.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _plugins_vabPlayer_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/plugins/vabPlayer.js */ "./src/plugins/vabPlayer.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  name: "Player",
  components: {
    VabPlayerMp4: _plugins_vabPlayer_js__WEBPACK_IMPORTED_MODULE_0__["VabPlayerMp4"],
    VabPlayerHls: _plugins_vabPlayer_js__WEBPACK_IMPORTED_MODULE_0__["VabPlayerHls"]
  },
  data: function data() {
    return {
      config1: {
        id: "mse1",
        url: "https://cdn.jsdelivr.net/gh/chuzhixin/videos@master/video.mp4",
        volume: 1,
        autoplay: false
      },
      Player1: null,
      config2: {
        id: "mse2",
        url: "https://cdn.jsdelivr.net/gh/chuzhixin/videos@master/video.m3u8",
        volume: 1,
        autoplay: false
      },
      Player2: null,
      config3: {
        id: "mse3",
        url: "https://cdn.jsdelivr.net/gh/chuzhixin/videos@master/video.flv",
        volume: 1,
        autoplay: false
      },
      Player3: null
    };
  },
  created: function created() {},
  mounted: function mounted() {},
  methods: {}
});

/***/ }),

/***/ "./node_modules/_cache-loader@4.1.0@cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"44ab5232-vue-loader-template\"}!./node_modules/_vue-loader@15.9.3@vue-loader/lib/loaders/templateLoader.js?!./node_modules/_cache-loader@4.1.0@cache-loader/dist/cjs.js?!./node_modules/_vue-loader@15.9.3@vue-loader/lib/index.js?!./src/views/vab/player/index.vue?vue&type=template&id=e0039b94&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/_cache-loader@4.1.0@cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"44ab5232-vue-loader-template"}!./node_modules/_vue-loader@15.9.3@vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/_cache-loader@4.1.0@cache-loader/dist/cjs.js??ref--0-0!./node_modules/_vue-loader@15.9.3@vue-loader/lib??vue-loader-options!./src/views/vab/player/index.vue?vue&type=template&id=e0039b94& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "player-container" },
    [
      _c("el-divider", { attrs: { "content-position": "left" } }, [
        _vm._v(
          "视频地址采用cdn加速服务，开发时需部署到到本地，使用方法可查看群文档 "
        )
      ]),
      _c(
        "el-row",
        { attrs: { gutter: 20 } },
        [
          _c(
            "el-col",
            { attrs: { xs: 24, sm: 24, md: 24, lg: 12, xl: 12 } },
            [
              _c(
                "el-card",
                { attrs: { shadow: "hover" } },
                [
                  _c("div", { attrs: { slot: "header" }, slot: "header" }, [
                    _vm._v("播放传统MP4")
                  ]),
                  _c("vab-player-mp4", {
                    attrs: { config: _vm.config1 },
                    on: {
                      player: function($event) {
                        _vm.Player1 = $event
                      }
                    }
                  })
                ],
                1
              )
            ],
            1
          ),
          _c(
            "el-col",
            { attrs: { xs: 24, sm: 24, md: 24, lg: 12, xl: 12 } },
            [
              _c(
                "el-card",
                { attrs: { shadow: "hover" } },
                [
                  _c("div", { attrs: { slot: "header" }, slot: "header" }, [
                    _vm._v("播放m3u8，且不暴露视频地址")
                  ]),
                  _c("vab-player-hls", {
                    attrs: { config: _vm.config2 },
                    on: {
                      player: function($event) {
                        _vm.Player2 = $event
                      }
                    }
                  })
                ],
                1
              )
            ],
            1
          )
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./src/plugins/vabPlayer.js":
/*!**********************************!*\
  !*** ./src/plugins/vabPlayer.js ***!
  \**********************************/
/*! exports provided: VabPlayerMp4, VabPlayerHls, VabPlayerFlv, VabPlayerCustom */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VabPlayerMp4", function() { return VabPlayerMp4; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VabPlayerHls", function() { return VabPlayerHls; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VabPlayerFlv", function() { return VabPlayerFlv; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VabPlayerCustom", function() { return VabPlayerCustom; });
/* harmony import */ var zx_player__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! zx-player */ "./node_modules/_zx-player@0.9.6@zx-player/src/components/export.js");

var VabPlayerMp4 = zx_player__WEBPACK_IMPORTED_MODULE_0__["Mp4"];
var VabPlayerHls = zx_player__WEBPACK_IMPORTED_MODULE_0__["Hls"];
var VabPlayerFlv = zx_player__WEBPACK_IMPORTED_MODULE_0__["Flv"];
var VabPlayerCustom = zx_player__WEBPACK_IMPORTED_MODULE_0__["Custom"];


/***/ }),

/***/ "./src/views/vab/player/index.vue":
/*!****************************************!*\
  !*** ./src/views/vab/player/index.vue ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_vue_vue_type_template_id_e0039b94___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=e0039b94& */ "./src/views/vab/player/index.vue?vue&type=template&id=e0039b94&");
/* harmony import */ var _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js& */ "./src/views/vab/player/index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_15_9_3_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/_vue-loader@15.9.3@vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/_vue-loader@15.9.3@vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_15_9_3_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _index_vue_vue_type_template_id_e0039b94___WEBPACK_IMPORTED_MODULE_0__["render"],
  _index_vue_vue_type_template_id_e0039b94___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/views/vab/player/index.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/views/vab/player/index.vue?vue&type=script&lang=js&":
/*!*****************************************************************!*\
  !*** ./src/views/vab/player/index.vue?vue&type=script&lang=js& ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_4_1_0_cache_loader_dist_cjs_js_ref_12_0_node_modules_babel_loader_8_1_0_babel_loader_lib_index_js_node_modules_cache_loader_4_1_0_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_15_9_3_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/_cache-loader@4.1.0@cache-loader/dist/cjs.js??ref--12-0!../../../../node_modules/_babel-loader@8.1.0@babel-loader/lib!../../../../node_modules/_cache-loader@4.1.0@cache-loader/dist/cjs.js??ref--0-0!../../../../node_modules/_vue-loader@15.9.3@vue-loader/lib??vue-loader-options!./index.vue?vue&type=script&lang=js& */ "./node_modules/_cache-loader@4.1.0@cache-loader/dist/cjs.js?!./node_modules/_babel-loader@8.1.0@babel-loader/lib/index.js!./node_modules/_cache-loader@4.1.0@cache-loader/dist/cjs.js?!./node_modules/_vue-loader@15.9.3@vue-loader/lib/index.js?!./src/views/vab/player/index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_cache_loader_4_1_0_cache_loader_dist_cjs_js_ref_12_0_node_modules_babel_loader_8_1_0_babel_loader_lib_index_js_node_modules_cache_loader_4_1_0_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_15_9_3_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/views/vab/player/index.vue?vue&type=template&id=e0039b94&":
/*!***********************************************************************!*\
  !*** ./src/views/vab/player/index.vue?vue&type=template&id=e0039b94& ***!
  \***********************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_4_1_0_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_44ab5232_vue_loader_template_node_modules_vue_loader_15_9_3_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_4_1_0_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_15_9_3_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_e0039b94___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/_cache-loader@4.1.0@cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"44ab5232-vue-loader-template"}!../../../../node_modules/_vue-loader@15.9.3@vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/_cache-loader@4.1.0@cache-loader/dist/cjs.js??ref--0-0!../../../../node_modules/_vue-loader@15.9.3@vue-loader/lib??vue-loader-options!./index.vue?vue&type=template&id=e0039b94& */ "./node_modules/_cache-loader@4.1.0@cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"44ab5232-vue-loader-template\"}!./node_modules/_vue-loader@15.9.3@vue-loader/lib/loaders/templateLoader.js?!./node_modules/_cache-loader@4.1.0@cache-loader/dist/cjs.js?!./node_modules/_vue-loader@15.9.3@vue-loader/lib/index.js?!./src/views/vab/player/index.vue?vue&type=template&id=e0039b94&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_cache_loader_4_1_0_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_44ab5232_vue_loader_template_node_modules_vue_loader_15_9_3_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_4_1_0_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_15_9_3_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_e0039b94___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_cache_loader_4_1_0_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_44ab5232_vue_loader_template_node_modules_vue_loader_15_9_3_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_4_1_0_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_15_9_3_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_e0039b94___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);