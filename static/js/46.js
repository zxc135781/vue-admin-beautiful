/*!
 *  基于vue-admin-beautiful构建 
 *  copyright: chuzhixin 1204505056@qq.com 
 *  time: 2020-7-14 10:56:50
 */
(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[46],{

/***/ "./node_modules/_cache-loader@4.1.0@cache-loader/dist/cjs.js?!./node_modules/_babel-loader@8.1.0@babel-loader/lib/index.js!./node_modules/_cache-loader@4.1.0@cache-loader/dist/cjs.js?!./node_modules/_vue-loader@15.9.3@vue-loader/lib/index.js?!./src/views/vab/form/index.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/_cache-loader@4.1.0@cache-loader/dist/cjs.js??ref--12-0!./node_modules/_babel-loader@8.1.0@babel-loader/lib!./node_modules/_cache-loader@4.1.0@cache-loader/dist/cjs.js??ref--0-0!./node_modules/_vue-loader@15.9.3@vue-loader/lib??vue-loader-options!./src/views/vab/form/index.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
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
  name: "Form",
  data: function data() {
    return {
      ruleForm: {
        name: "",
        region: "",
        delivery: false,
        type: [],
        resource: "",
        desc: ""
      },
      rules: {
        name: [{
          required: true,
          message: "请输入活动名称",
          trigger: "blur"
        }, {
          min: 3,
          max: 5,
          message: "长度在 3 到 5 个字符",
          trigger: "blur"
        }],
        region: [{
          required: true,
          message: "请选择活动区域",
          trigger: "change"
        }],
        type: [{
          type: "array",
          required: true,
          message: "请至少选择一个活动性质",
          trigger: "change"
        }],
        resource: [{
          required: true,
          message: "请选择活动资源",
          trigger: "change"
        }],
        desc: [{
          required: true,
          message: "请填写活动形式",
          trigger: "blur"
        }]
      }
    };
  },
  methods: {
    submitForm: function submitForm(formName) {
      this.$refs[formName].validate(function (valid) {
        if (valid) {
          alert("submit!");
        } else {
          return false;
        }
      });
    },
    resetForm: function resetForm(formName) {
      this.$refs[formName].resetFields();
    }
  }
});

/***/ }),

/***/ "./node_modules/_cache-loader@4.1.0@cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"44ab5232-vue-loader-template\"}!./node_modules/_vue-loader@15.9.3@vue-loader/lib/loaders/templateLoader.js?!./node_modules/_cache-loader@4.1.0@cache-loader/dist/cjs.js?!./node_modules/_vue-loader@15.9.3@vue-loader/lib/index.js?!./src/views/vab/form/index.vue?vue&type=template&id=68fbfad9&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/_cache-loader@4.1.0@cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"44ab5232-vue-loader-template"}!./node_modules/_vue-loader@15.9.3@vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/_cache-loader@4.1.0@cache-loader/dist/cjs.js??ref--0-0!./node_modules/_vue-loader@15.9.3@vue-loader/lib??vue-loader-options!./src/views/vab/form/index.vue?vue&type=template&id=68fbfad9& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
    { staticClass: "form-container" },
    [
      _c(
        "el-row",
        { attrs: { gutter: 20 } },
        [
          _c(
            "el-col",
            { attrs: { xs: 24, sm: 24, md: 12, lg: 8, xl: 8 } },
            [
              _c(
                "el-form",
                {
                  ref: "ruleForm",
                  staticClass: "demo-ruleForm",
                  attrs: {
                    model: _vm.ruleForm,
                    rules: _vm.rules,
                    "label-width": "100px"
                  }
                },
                [
                  _c(
                    "el-form-item",
                    { attrs: { label: "活动名称", prop: "name" } },
                    [
                      _c("el-input", {
                        model: {
                          value: _vm.ruleForm.name,
                          callback: function($$v) {
                            _vm.$set(_vm.ruleForm, "name", $$v)
                          },
                          expression: "ruleForm.name"
                        }
                      })
                    ],
                    1
                  ),
                  _c(
                    "el-form-item",
                    { attrs: { label: "活动区域", prop: "region" } },
                    [
                      _c(
                        "el-select",
                        {
                          attrs: { placeholder: "请选择活动区域" },
                          model: {
                            value: _vm.ruleForm.region,
                            callback: function($$v) {
                              _vm.$set(_vm.ruleForm, "region", $$v)
                            },
                            expression: "ruleForm.region"
                          }
                        },
                        [
                          _c("el-option", {
                            attrs: { label: "区域一", value: "shanghai" }
                          }),
                          _c("el-option", {
                            attrs: { label: "区域二", value: "beijing" }
                          })
                        ],
                        1
                      )
                    ],
                    1
                  ),
                  _c(
                    "el-form-item",
                    { attrs: { label: "即时配送", prop: "delivery" } },
                    [
                      _c("el-switch", {
                        model: {
                          value: _vm.ruleForm.delivery,
                          callback: function($$v) {
                            _vm.$set(_vm.ruleForm, "delivery", $$v)
                          },
                          expression: "ruleForm.delivery"
                        }
                      })
                    ],
                    1
                  ),
                  _c(
                    "el-form-item",
                    { attrs: { label: "活动性质", prop: "type" } },
                    [
                      _c(
                        "el-checkbox-group",
                        {
                          model: {
                            value: _vm.ruleForm.type,
                            callback: function($$v) {
                              _vm.$set(_vm.ruleForm, "type", $$v)
                            },
                            expression: "ruleForm.type"
                          }
                        },
                        [
                          _c("el-checkbox", {
                            attrs: { label: "美食/餐厅线上活动", name: "type" }
                          }),
                          _c("el-checkbox", {
                            attrs: { label: "地推活动", name: "type" }
                          }),
                          _c("el-checkbox", {
                            attrs: { label: "线下主题活动", name: "type" }
                          }),
                          _c("el-checkbox", {
                            attrs: { label: "单纯品牌曝光", name: "type" }
                          })
                        ],
                        1
                      )
                    ],
                    1
                  ),
                  _c(
                    "el-form-item",
                    { attrs: { label: "特殊资源", prop: "resource" } },
                    [
                      _c(
                        "el-radio-group",
                        {
                          model: {
                            value: _vm.ruleForm.resource,
                            callback: function($$v) {
                              _vm.$set(_vm.ruleForm, "resource", $$v)
                            },
                            expression: "ruleForm.resource"
                          }
                        },
                        [
                          _c("el-radio", {
                            attrs: { label: "线上品牌商赞助" }
                          }),
                          _c("el-radio", { attrs: { label: "线下场地免费" } })
                        ],
                        1
                      )
                    ],
                    1
                  ),
                  _c(
                    "el-form-item",
                    { attrs: { label: "活动形式", prop: "desc" } },
                    [
                      _c("el-input", {
                        attrs: { type: "textarea" },
                        model: {
                          value: _vm.ruleForm.desc,
                          callback: function($$v) {
                            _vm.$set(_vm.ruleForm, "desc", $$v)
                          },
                          expression: "ruleForm.desc"
                        }
                      })
                    ],
                    1
                  ),
                  _c(
                    "el-form-item",
                    [
                      _c(
                        "el-button",
                        {
                          attrs: { type: "primary" },
                          on: {
                            click: function($event) {
                              return _vm.submitForm("ruleForm")
                            }
                          }
                        },
                        [_vm._v("立即创建 ")]
                      ),
                      _c(
                        "el-button",
                        {
                          on: {
                            click: function($event) {
                              return _vm.resetForm("ruleForm")
                            }
                          }
                        },
                        [_vm._v("重置")]
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

/***/ "./src/views/vab/form/index.vue":
/*!**************************************!*\
  !*** ./src/views/vab/form/index.vue ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_vue_vue_type_template_id_68fbfad9___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=68fbfad9& */ "./src/views/vab/form/index.vue?vue&type=template&id=68fbfad9&");
/* harmony import */ var _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js& */ "./src/views/vab/form/index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_15_9_3_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/_vue-loader@15.9.3@vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/_vue-loader@15.9.3@vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_15_9_3_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _index_vue_vue_type_template_id_68fbfad9___WEBPACK_IMPORTED_MODULE_0__["render"],
  _index_vue_vue_type_template_id_68fbfad9___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/views/vab/form/index.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/views/vab/form/index.vue?vue&type=script&lang=js&":
/*!***************************************************************!*\
  !*** ./src/views/vab/form/index.vue?vue&type=script&lang=js& ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_4_1_0_cache_loader_dist_cjs_js_ref_12_0_node_modules_babel_loader_8_1_0_babel_loader_lib_index_js_node_modules_cache_loader_4_1_0_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_15_9_3_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/_cache-loader@4.1.0@cache-loader/dist/cjs.js??ref--12-0!../../../../node_modules/_babel-loader@8.1.0@babel-loader/lib!../../../../node_modules/_cache-loader@4.1.0@cache-loader/dist/cjs.js??ref--0-0!../../../../node_modules/_vue-loader@15.9.3@vue-loader/lib??vue-loader-options!./index.vue?vue&type=script&lang=js& */ "./node_modules/_cache-loader@4.1.0@cache-loader/dist/cjs.js?!./node_modules/_babel-loader@8.1.0@babel-loader/lib/index.js!./node_modules/_cache-loader@4.1.0@cache-loader/dist/cjs.js?!./node_modules/_vue-loader@15.9.3@vue-loader/lib/index.js?!./src/views/vab/form/index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_cache_loader_4_1_0_cache_loader_dist_cjs_js_ref_12_0_node_modules_babel_loader_8_1_0_babel_loader_lib_index_js_node_modules_cache_loader_4_1_0_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_15_9_3_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/views/vab/form/index.vue?vue&type=template&id=68fbfad9&":
/*!*********************************************************************!*\
  !*** ./src/views/vab/form/index.vue?vue&type=template&id=68fbfad9& ***!
  \*********************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_4_1_0_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_44ab5232_vue_loader_template_node_modules_vue_loader_15_9_3_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_4_1_0_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_15_9_3_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_68fbfad9___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/_cache-loader@4.1.0@cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"44ab5232-vue-loader-template"}!../../../../node_modules/_vue-loader@15.9.3@vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/_cache-loader@4.1.0@cache-loader/dist/cjs.js??ref--0-0!../../../../node_modules/_vue-loader@15.9.3@vue-loader/lib??vue-loader-options!./index.vue?vue&type=template&id=68fbfad9& */ "./node_modules/_cache-loader@4.1.0@cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"44ab5232-vue-loader-template\"}!./node_modules/_vue-loader@15.9.3@vue-loader/lib/loaders/templateLoader.js?!./node_modules/_cache-loader@4.1.0@cache-loader/dist/cjs.js?!./node_modules/_vue-loader@15.9.3@vue-loader/lib/index.js?!./src/views/vab/form/index.vue?vue&type=template&id=68fbfad9&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_cache_loader_4_1_0_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_44ab5232_vue_loader_template_node_modules_vue_loader_15_9_3_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_4_1_0_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_15_9_3_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_68fbfad9___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_cache_loader_4_1_0_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_44ab5232_vue_loader_template_node_modules_vue_loader_15_9_3_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_4_1_0_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_15_9_3_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_68fbfad9___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);