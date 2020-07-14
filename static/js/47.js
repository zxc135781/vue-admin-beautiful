/*!
 *  基于vue-admin-beautiful构建 
 *  copyright: chuzhixin 1204505056@qq.com 
 *  time: 2020-7-14 10:56:50
 */
(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[47],{

/***/ "./node_modules/_cache-loader@4.1.0@cache-loader/dist/cjs.js?!./node_modules/_babel-loader@8.1.0@babel-loader/lib/index.js!./node_modules/_cache-loader@4.1.0@cache-loader/dist/cjs.js?!./node_modules/_vue-loader@15.9.3@vue-loader/lib/index.js?!./src/views/vab/permissions/index.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/_cache-loader@4.1.0@cache-loader/dist/cjs.js??ref--12-0!./node_modules/_babel-loader@8.1.0@babel-loader/lib!./node_modules/_cache-loader@4.1.0@cache-loader/dist/cjs.js??ref--0-0!./node_modules/_vue-loader@15.9.3@vue-loader/lib??vue-loader-options!./src/views/vab/permissions/index.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! regenerator-runtime/runtime */ "./node_modules/_regenerator-runtime@0.13.5@regenerator-runtime/runtime.js");
/* harmony import */ var regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var D_Development_VSCodeProjects_vue_admin_beautiful_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/_@babel_runtime@7.10.4@@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var D_Development_VSCodeProjects_vue_admin_beautiful_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/objectSpread2 */ "./node_modules/_@babel_runtime@7.10.4@@babel/runtime/helpers/esm/objectSpread2.js");
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! vuex */ "./node_modules/_vuex@3.5.1@vuex/dist/vuex.esm.js");
/* harmony import */ var _config_settings__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/config/settings */ "./src/config/settings.js");
/* harmony import */ var _config_settings__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_config_settings__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _api_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/api/router */ "./src/api/router.js");
/* harmony import */ var _components_JsonEditor__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/components/JsonEditor */ "./src/components/JsonEditor/index.vue");



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
  name: "Permissions",
  components: {
    JsonEditor: _components_JsonEditor__WEBPACK_IMPORTED_MODULE_6__["default"]
  },
  data: function data() {
    return {
      form: {
        account: ""
      },
      tableData: [],
      res: []
    };
  },
  computed: Object(D_Development_VSCodeProjects_vue_admin_beautiful_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_2__["default"])({}, Object(vuex__WEBPACK_IMPORTED_MODULE_3__["mapGetters"])({
    userName: "user/userName",
    permissions: "user/permissions"
  })),
  created: function created() {
    this.fetchData();
  },
  mounted: function mounted() {
    this.form.account = this.userName;
  },
  methods: {
    handleChangePermission: function handleChangePermission() {
      localStorage.setItem(_config_settings__WEBPACK_IMPORTED_MODULE_4__["tokenTableName"], "".concat(this.form.account, "-accessToken"));
      location.reload();
    },
    fetchData: function fetchData() {
      var _this = this;

      return Object(D_Development_VSCodeProjects_vue_admin_beautiful_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        var res;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return Object(_api_router__WEBPACK_IMPORTED_MODULE_5__["getRouterList"])();

              case 2:
                res = _context.sent;
                _this.tableData = res.data;
                _this.res = res;

              case 5:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    }
  }
});

/***/ }),

/***/ "./node_modules/_cache-loader@4.1.0@cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"44ab5232-vue-loader-template\"}!./node_modules/_vue-loader@15.9.3@vue-loader/lib/loaders/templateLoader.js?!./node_modules/_cache-loader@4.1.0@cache-loader/dist/cjs.js?!./node_modules/_vue-loader@15.9.3@vue-loader/lib/index.js?!./src/views/vab/permissions/index.vue?vue&type=template&id=9a256536&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/_cache-loader@4.1.0@cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"44ab5232-vue-loader-template"}!./node_modules/_vue-loader@15.9.3@vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/_cache-loader@4.1.0@cache-loader/dist/cjs.js??ref--0-0!./node_modules/_vue-loader@15.9.3@vue-loader/lib??vue-loader-options!./src/views/vab/permissions/index.vue?vue&type=template&id=9a256536& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
    { staticClass: "permissions-container" },
    [
      _c("el-divider", { attrs: { "content-position": "left" } }, [
        _vm._v(
          " intelligence模式,前端根据permissions拦截路由(演示环境,默认使用此方案) "
        )
      ]),
      _c(
        "el-form",
        { ref: "form", attrs: { model: _vm.form, inline: true } },
        [
          _c(
            "el-form-item",
            { attrs: { label: "切换账号" } },
            [
              _c(
                "el-radio-group",
                {
                  model: {
                    value: _vm.form.account,
                    callback: function($$v) {
                      _vm.$set(_vm.form, "account", $$v)
                    },
                    expression: "form.account"
                  }
                },
                [
                  _c("el-radio", { attrs: { label: "admin" } }, [
                    _vm._v("admin")
                  ]),
                  _c("el-radio", { attrs: { label: "editor" } }, [
                    _vm._v("editor")
                  ]),
                  _c("el-radio", { attrs: { label: "test" } }, [_vm._v("test")])
                ],
                1
              )
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
                  on: { click: _vm.handleChangePermission }
                },
                [_vm._v("切换权限 ")]
              )
            ],
            1
          ),
          _c("el-form-item", { attrs: { label: "当前账号拥有的权限" } }, [
            _vm._v(" " + _vm._s(JSON.stringify(_vm.permissions)) + " ")
          ])
        ],
        1
      ),
      _c("el-divider", { attrs: { "content-position": "left" } }, [
        _vm._v(" 按钮级权限演示 ")
      ]),
      _c(
        "el-button",
        {
          directives: [
            {
              name: "permissions",
              rawName: "v-permissions",
              value: ["admin"],
              expression: "['admin']"
            }
          ],
          attrs: { type: "primary" }
        },
        [_vm._v(' 我是拥有["admin"]权限的按钮 ')]
      ),
      _c(
        "el-button",
        {
          directives: [
            {
              name: "permissions",
              rawName: "v-permissions",
              value: ["editor"],
              expression: "['editor']"
            }
          ],
          attrs: { type: "primary" }
        },
        [_vm._v(' 我是拥有["editor"]权限的按钮 ')]
      ),
      _c(
        "el-button",
        {
          directives: [
            {
              name: "permissions",
              rawName: "v-permissions",
              value: ["test"],
              expression: "['test']"
            }
          ],
          attrs: { type: "primary" }
        },
        [_vm._v(' 我是拥有["test"]权限的按钮 ')]
      ),
      _c("br"),
      _c("br"),
      _c("el-divider", { attrs: { "content-position": "left" } }, [
        _vm._v(
          " all模式,路由以及view文件引入全部交给后端(权限复杂,且随时变更,建议使用此方案) "
        )
      ]),
      _c("p", [
        _vm._v(
          " settings.js配置authentication为all即可完全交由后端控制,mock中有后端接口示例,权限繁琐,有几十种权限的项目直接用这种, 由于演示环境是mock数据模拟,可能无法展现此功能的配置,只做如下展示,便于您的理解 "
        )
      ]),
      _c("br"),
      _c(
        "el-row",
        { attrs: { gutter: 20 } },
        [
          _c(
            "el-col",
            { attrs: { xs: 24, sm: 24, md: 12, lg: 12, xl: 12 } },
            [
              _c(
                "el-table",
                {
                  attrs: {
                    data: _vm.tableData,
                    "row-key": "path",
                    border: "",
                    "default-expand-all": "",
                    "tree-props": {
                      children: "children",
                      hasChildren: "hasChildren"
                    }
                  }
                },
                [
                  _c("el-table-column", {
                    attrs: {
                      "show-overflow-tooltip": "",
                      prop: "name",
                      label: "name"
                    }
                  }),
                  _c("el-table-column", {
                    attrs: {
                      "show-overflow-tooltip": "",
                      prop: "path",
                      label: "path"
                    }
                  }),
                  _c("el-table-column", {
                    attrs: {
                      "show-overflow-tooltip": "",
                      prop: "component",
                      label: "component"
                    }
                  }),
                  _c("el-table-column", {
                    attrs: {
                      "show-overflow-tooltip": "",
                      prop: "redirect",
                      label: "redirect"
                    }
                  }),
                  _c("el-table-column", {
                    attrs: {
                      "show-overflow-tooltip": "",
                      prop: "meta.title",
                      label: "标题"
                    }
                  }),
                  _c("el-table-column", {
                    attrs: { "show-overflow-tooltip": "", label: "图标" },
                    scopedSlots: _vm._u([
                      {
                        key: "default",
                        fn: function(scope) {
                          return [
                            scope.row.meta
                              ? _c(
                                  "span",
                                  [
                                    scope.row.meta.icon
                                      ? _c("vab-icon", {
                                          attrs: {
                                            icon: ["fas", scope.row.meta.icon]
                                          }
                                        })
                                      : _vm._e()
                                  ],
                                  1
                                )
                              : _vm._e()
                          ]
                        }
                      }
                    ])
                  }),
                  _c("el-table-column", {
                    attrs: { "show-overflow-tooltip": "", label: "是否固定" },
                    scopedSlots: _vm._u([
                      {
                        key: "default",
                        fn: function(scope) {
                          return [
                            scope.row.meta
                              ? _c("span", [
                                  _vm._v(
                                    " " + _vm._s(scope.row.meta.affix) + " "
                                  )
                                ])
                              : _vm._e()
                          ]
                        }
                      }
                    ])
                  }),
                  _c("el-table-column", {
                    attrs: { "show-overflow-tooltip": "", label: "是否无缓存" },
                    scopedSlots: _vm._u([
                      {
                        key: "default",
                        fn: function(scope) {
                          return [
                            scope.row.meta
                              ? _c("span", [
                                  _vm._v(
                                    " " +
                                      _vm._s(scope.row.meta.noKeepAlive) +
                                      " "
                                  )
                                ])
                              : _vm._e()
                          ]
                        }
                      }
                    ])
                  }),
                  _c("el-table-column", {
                    attrs: { "show-overflow-tooltip": "", label: "badge" },
                    scopedSlots: _vm._u([
                      {
                        key: "default",
                        fn: function(scope) {
                          return [
                            scope.row.meta
                              ? _c("span", [
                                  _vm._v(
                                    " " + _vm._s(scope.row.meta.badge) + " "
                                  )
                                ])
                              : _vm._e()
                          ]
                        }
                      }
                    ])
                  })
                ],
                1
              )
            ],
            1
          ),
          _c(
            "el-col",
            { attrs: { xs: 24, sm: 24, md: 12, lg: 12, xl: 12 } },
            [_c("json-editor", { attrs: { value: _vm.res } })],
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

/***/ "./src/views/vab/permissions/index.vue":
/*!*********************************************!*\
  !*** ./src/views/vab/permissions/index.vue ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_vue_vue_type_template_id_9a256536___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=9a256536& */ "./src/views/vab/permissions/index.vue?vue&type=template&id=9a256536&");
/* harmony import */ var _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js& */ "./src/views/vab/permissions/index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_15_9_3_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/_vue-loader@15.9.3@vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/_vue-loader@15.9.3@vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_15_9_3_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _index_vue_vue_type_template_id_9a256536___WEBPACK_IMPORTED_MODULE_0__["render"],
  _index_vue_vue_type_template_id_9a256536___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/views/vab/permissions/index.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/views/vab/permissions/index.vue?vue&type=script&lang=js&":
/*!**********************************************************************!*\
  !*** ./src/views/vab/permissions/index.vue?vue&type=script&lang=js& ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_4_1_0_cache_loader_dist_cjs_js_ref_12_0_node_modules_babel_loader_8_1_0_babel_loader_lib_index_js_node_modules_cache_loader_4_1_0_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_15_9_3_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/_cache-loader@4.1.0@cache-loader/dist/cjs.js??ref--12-0!../../../../node_modules/_babel-loader@8.1.0@babel-loader/lib!../../../../node_modules/_cache-loader@4.1.0@cache-loader/dist/cjs.js??ref--0-0!../../../../node_modules/_vue-loader@15.9.3@vue-loader/lib??vue-loader-options!./index.vue?vue&type=script&lang=js& */ "./node_modules/_cache-loader@4.1.0@cache-loader/dist/cjs.js?!./node_modules/_babel-loader@8.1.0@babel-loader/lib/index.js!./node_modules/_cache-loader@4.1.0@cache-loader/dist/cjs.js?!./node_modules/_vue-loader@15.9.3@vue-loader/lib/index.js?!./src/views/vab/permissions/index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_cache_loader_4_1_0_cache_loader_dist_cjs_js_ref_12_0_node_modules_babel_loader_8_1_0_babel_loader_lib_index_js_node_modules_cache_loader_4_1_0_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_15_9_3_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/views/vab/permissions/index.vue?vue&type=template&id=9a256536&":
/*!****************************************************************************!*\
  !*** ./src/views/vab/permissions/index.vue?vue&type=template&id=9a256536& ***!
  \****************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_4_1_0_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_44ab5232_vue_loader_template_node_modules_vue_loader_15_9_3_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_4_1_0_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_15_9_3_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_9a256536___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/_cache-loader@4.1.0@cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"44ab5232-vue-loader-template"}!../../../../node_modules/_vue-loader@15.9.3@vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/_cache-loader@4.1.0@cache-loader/dist/cjs.js??ref--0-0!../../../../node_modules/_vue-loader@15.9.3@vue-loader/lib??vue-loader-options!./index.vue?vue&type=template&id=9a256536& */ "./node_modules/_cache-loader@4.1.0@cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"44ab5232-vue-loader-template\"}!./node_modules/_vue-loader@15.9.3@vue-loader/lib/loaders/templateLoader.js?!./node_modules/_cache-loader@4.1.0@cache-loader/dist/cjs.js?!./node_modules/_vue-loader@15.9.3@vue-loader/lib/index.js?!./src/views/vab/permissions/index.vue?vue&type=template&id=9a256536&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_cache_loader_4_1_0_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_44ab5232_vue_loader_template_node_modules_vue_loader_15_9_3_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_4_1_0_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_15_9_3_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_9a256536___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_cache_loader_4_1_0_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_44ab5232_vue_loader_template_node_modules_vue_loader_15_9_3_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_4_1_0_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_15_9_3_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_9a256536___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);