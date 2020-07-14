/*!
 *  基于vue-admin-beautiful构建 
 *  copyright: chuzhixin 1204505056@qq.com 
 *  time: 2020-7-14 10:56:50
 */
(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[40],{

/***/ "./node_modules/_cache-loader@4.1.0@cache-loader/dist/cjs.js?!./node_modules/_babel-loader@8.1.0@babel-loader/lib/index.js!./node_modules/_cache-loader@4.1.0@cache-loader/dist/cjs.js?!./node_modules/_vue-loader@15.9.3@vue-loader/lib/index.js?!./src/views/vab/markdown/index.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/_cache-loader@4.1.0@cache-loader/dist/cjs.js??ref--12-0!./node_modules/_babel-loader@8.1.0@babel-loader/lib!./node_modules/_cache-loader@4.1.0@cache-loader/dist/cjs.js??ref--0-0!./node_modules/_vue-loader@15.9.3@vue-loader/lib??vue-loader-options!./src/views/vab/markdown/index.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var marked__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! marked */ "./node_modules/_marked@1.1.0@marked/lib/marked.js");
/* harmony import */ var marked__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(marked__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var github_markdown_css_github_markdown_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! github-markdown-css/github-markdown.css */ "./node_modules/_github-markdown-css@4.0.0@github-markdown-css/github-markdown.css");
/* harmony import */ var github_markdown_css_github_markdown_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(github_markdown_css_github_markdown_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _js_markdown__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./js/markdown */ "./src/views/vab/markdown/js/markdown.js");
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
  name: "Markdown",
  data: function data() {
    return {
      listLoading: true,
      elementLoadingText: "正在加载...",
      options: [{
        value: "0",
        label: "Prettier"
      }],
      value: "0",
      prettierList: null
    };
  },
  created: function created() {
    this.fetchData();
  },
  mounted: function mounted() {},
  methods: {
    handleChange: function handleChange(val) {
      this.value = val;
      this.fetchData();
    },
    fetchData: function fetchData() {
      var _this = this;

      this.listLoading = true;

      switch (this.value) {
        case "0":
          this.prettierList = marked__WEBPACK_IMPORTED_MODULE_0___default()(_js_markdown__WEBPACK_IMPORTED_MODULE_2__["default"] || "", {
            renderer: new marked__WEBPACK_IMPORTED_MODULE_0___default.a.Renderer(),
            gfm: true,
            tables: true,
            breaks: false,
            pedantic: false,
            sanitize: false,
            smartLists: true,
            smartypants: false
          });
          break;
      }

      setTimeout(function () {
        _this.listLoading = false;
      }, 500);
    }
  }
});

/***/ }),

/***/ "./node_modules/_cache-loader@4.1.0@cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"44ab5232-vue-loader-template\"}!./node_modules/_vue-loader@15.9.3@vue-loader/lib/loaders/templateLoader.js?!./node_modules/_cache-loader@4.1.0@cache-loader/dist/cjs.js?!./node_modules/_vue-loader@15.9.3@vue-loader/lib/index.js?!./src/views/vab/markdown/index.vue?vue&type=template&id=38113778&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/_cache-loader@4.1.0@cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"44ab5232-vue-loader-template"}!./node_modules/_vue-loader@15.9.3@vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/_cache-loader@4.1.0@cache-loader/dist/cjs.js??ref--0-0!./node_modules/_vue-loader@15.9.3@vue-loader/lib??vue-loader-options!./src/views/vab/markdown/index.vue?vue&type=template&id=38113778& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
    { staticClass: "markdown-container markdown-body" },
    [
      _c(
        "el-select",
        {
          attrs: { placeholder: "请选择" },
          on: { change: _vm.handleChange },
          model: {
            value: _vm.value,
            callback: function($$v) {
              _vm.value = $$v
            },
            expression: "value"
          }
        },
        _vm._l(_vm.options, function(item, index) {
          return _c("el-option", {
            key: index,
            attrs: { label: item.label, value: item.value }
          })
        }),
        1
      ),
      _c("div", { domProps: { innerHTML: _vm._s(_vm.prettierList) } })
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./src/views/vab/markdown/index.vue":
/*!******************************************!*\
  !*** ./src/views/vab/markdown/index.vue ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_vue_vue_type_template_id_38113778___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=38113778& */ "./src/views/vab/markdown/index.vue?vue&type=template&id=38113778&");
/* harmony import */ var _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js& */ "./src/views/vab/markdown/index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_15_9_3_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/_vue-loader@15.9.3@vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/_vue-loader@15.9.3@vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_15_9_3_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _index_vue_vue_type_template_id_38113778___WEBPACK_IMPORTED_MODULE_0__["render"],
  _index_vue_vue_type_template_id_38113778___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/views/vab/markdown/index.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/views/vab/markdown/index.vue?vue&type=script&lang=js&":
/*!*******************************************************************!*\
  !*** ./src/views/vab/markdown/index.vue?vue&type=script&lang=js& ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_4_1_0_cache_loader_dist_cjs_js_ref_12_0_node_modules_babel_loader_8_1_0_babel_loader_lib_index_js_node_modules_cache_loader_4_1_0_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_15_9_3_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/_cache-loader@4.1.0@cache-loader/dist/cjs.js??ref--12-0!../../../../node_modules/_babel-loader@8.1.0@babel-loader/lib!../../../../node_modules/_cache-loader@4.1.0@cache-loader/dist/cjs.js??ref--0-0!../../../../node_modules/_vue-loader@15.9.3@vue-loader/lib??vue-loader-options!./index.vue?vue&type=script&lang=js& */ "./node_modules/_cache-loader@4.1.0@cache-loader/dist/cjs.js?!./node_modules/_babel-loader@8.1.0@babel-loader/lib/index.js!./node_modules/_cache-loader@4.1.0@cache-loader/dist/cjs.js?!./node_modules/_vue-loader@15.9.3@vue-loader/lib/index.js?!./src/views/vab/markdown/index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_cache_loader_4_1_0_cache_loader_dist_cjs_js_ref_12_0_node_modules_babel_loader_8_1_0_babel_loader_lib_index_js_node_modules_cache_loader_4_1_0_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_15_9_3_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/views/vab/markdown/index.vue?vue&type=template&id=38113778&":
/*!*************************************************************************!*\
  !*** ./src/views/vab/markdown/index.vue?vue&type=template&id=38113778& ***!
  \*************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_4_1_0_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_44ab5232_vue_loader_template_node_modules_vue_loader_15_9_3_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_4_1_0_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_15_9_3_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_38113778___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/_cache-loader@4.1.0@cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"44ab5232-vue-loader-template"}!../../../../node_modules/_vue-loader@15.9.3@vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/_cache-loader@4.1.0@cache-loader/dist/cjs.js??ref--0-0!../../../../node_modules/_vue-loader@15.9.3@vue-loader/lib??vue-loader-options!./index.vue?vue&type=template&id=38113778& */ "./node_modules/_cache-loader@4.1.0@cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"44ab5232-vue-loader-template\"}!./node_modules/_vue-loader@15.9.3@vue-loader/lib/loaders/templateLoader.js?!./node_modules/_cache-loader@4.1.0@cache-loader/dist/cjs.js?!./node_modules/_vue-loader@15.9.3@vue-loader/lib/index.js?!./src/views/vab/markdown/index.vue?vue&type=template&id=38113778&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_cache_loader_4_1_0_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_44ab5232_vue_loader_template_node_modules_vue_loader_15_9_3_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_4_1_0_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_15_9_3_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_38113778___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_cache_loader_4_1_0_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_44ab5232_vue_loader_template_node_modules_vue_loader_15_9_3_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_4_1_0_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_15_9_3_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_38113778___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./src/views/vab/markdown/js/markdown.js":
/*!***********************************************!*\
  !*** ./src/views/vab/markdown/js/markdown.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var md = "---\nid: options\ntitle: Options\n---\n\nPrettier ships with a handful of customizable format options, usable in both the CLI and API.\n\n## Print Width\n\nSpecify the line length that the printer will wrap on.\n\n> **For readability we recommend against using more than 80 characters:**\n>\n> In code styleguides, maximum line length rules are often set to 100 or 120. However, when humans write code, they don't strive to reach the maximum number of columns on every line. Developers often use whitespace to break up long lines for readability. In practice, the average line length often ends up well below the maximum.\n>\n> Prettier, on the other hand, strives to fit the most code into every line. With the print width set to 120, prettier may produce overly compact, or otherwise undesirable code.\n>\n> See the [print width rationale](rationale.md#print-width) for more information.\n\n| Default | CLI Override          | API Override        |\n| ------- | --------------------- | ------------------- |\n| `80`    | `--print-width <int>` | `printWidth: <int>` |\n\n(If you don't want line wrapping when formatting Markdown, you can set the [Prose Wrap](#prose-wrap) option to disable it.)\n\n## Tab Width\n\nSpecify the number of spaces per indentation-level.\n\n| Default | CLI Override        | API Override      |\n| ------- | ------------------- | ----------------- |\n| `2`     | `--tab-width <int>` | `tabWidth: <int>` |\n\n## Tabs\n\nIndent lines with tabs instead of spaces.\n\n| Default | CLI Override | API Override      |\n| ------- | ------------ | ----------------- |\n| `false` | `--use-tabs` | `useTabs: <bool>` |\n\n(Tabs will be used for _indentation_ but Prettier uses spaces to _align_ things, such as in ternaries.)\n\n## Semicolons\n\nPrint semicolons at the ends of statements.\n\nValid options:\n\n- `true` - Add a semicolon at the end of every statement.\n- `false` - Only add semicolons at the beginning of lines that [may introduce ASI failures](rationale.md#semicolons).\n\n| Default | CLI Override | API Override   |\n| ------- | ------------ | -------------- |\n| `true`  | `--no-semi`  | `semi: <bool>` |\n\n## Quotes\n\nUse single quotes instead of double quotes.\n\nNotes:\n\n- JSX quotes ignore this option \u2013 see [jsx-single-quote](#jsx-quotes).\n- If the number of quotes outweighs the other quote, the quote which is less used will be used to format the string - Example: `\"I'm double quoted\"` results in `\"I'm double quoted\"` and `\"This \\\"example\\\" is single quoted\"` results in `'This \"example\" is single quoted'`.\n\nSee the [strings rationale](rationale.md#strings) for more information.\n\n| Default | CLI Override     | API Override          |\n| ------- | ---------------- | --------------------- |\n| `false` | `--single-quote` | `singleQuote: <bool>` |\n\n## Quote Props\n\nChange when properties in objects are quoted.\n\nValid options:\n\n- `\"as-needed\"` - Only add quotes around object properties where required.\n- `\"consistent\"` - If at least one property in an object requires quotes, quote all properties.\n- `\"preserve\"` - Respect the input use of quotes in object properties.\n\n| Default       | CLI Override                                                         | API Override                                                         |\n| ------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- |\n| `\"as-needed\"` | <code>--quote-props <as-needed&#124;consistent&#124;preserve></code> | <code>quoteProps: \"<as-needed&#124;consistent&#124;preserve>\"</code> |\n\n## JSX Quotes\n\nUse single quotes instead of double quotes in JSX.\n\n| Default | CLI Override         | API Override             |\n| ------- | -------------------- | ------------------------ |\n| `false` | `--jsx-single-quote` | `jsxSingleQuote: <bool>` |\n\n## Trailing Commas\n\n_Default value changed from `none` to `es5` in v2.0.0_\n\nPrint trailing commas wherever possible when multi-line. (A single-line array, for example, never gets trailing commas.)\n\nValid options:\n\n- `\"es5\"` - Trailing commas where valid in ES5 (objects, arrays, etc.)\n- `\"none\"` - No trailing commas.\n- `\"all\"` - Trailing commas wherever possible (including function arguments). This requires node 8 or a [transform](https://babeljs.io/docs/plugins/syntax-trailing-function-commas/).\n\n| Default | CLI Override                                           | API Override                                           |\n| ------- | ------------------------------------------------------ | ------------------------------------------------------ |\n| `\"es5\"` | <code>--trailing-comma <es5&#124;none&#124;all></code> | <code>trailingComma: \"<es5&#124;none&#124;all>\"</code> |\n\n## Bracket Spacing\n\nPrint spaces between brackets in object literals.\n\nValid options:\n\n- `true` - Example: `{ foo: bar }`.\n- `false` - Example: `{foo: bar}`.\n\n| Default | CLI Override           | API Override             |\n| ------- | ---------------------- | ------------------------ |\n| `true`  | `--no-bracket-spacing` | `bracketSpacing: <bool>` |\n\n## JSX Brackets\n\nPut the `>` of a multi-line JSX element at the end of the last line instead of being alone on the next line (does not apply to self closing elements).\n\nValid options:\n\n- `true` - Example:\n\n<!-- prettier-ignore -->\n```jsx\n<button\n  className=\"prettier-class\"\n  id=\"prettier-id\"\n  onClick={this.handleClick}>\n  Click Here\n</button>\n```\n\n- `false` - Example:\n\n<!-- prettier-ignore -->\n```jsx\n<button\n  className=\"prettier-class\"\n  id=\"prettier-id\"\n  onClick={this.handleClick}\n>\n  Click Here\n</button>\n```\n\n| Default | CLI Override              | API Override                 |\n| ------- | ------------------------- | ---------------------------- |\n| `false` | `--jsx-bracket-same-line` | `jsxBracketSameLine: <bool>` |\n\n## Arrow Function Parentheses\n\n_First available in v1.9.0, default value changed from `avoid` to `always` in v2.0.0_\n\nInclude parentheses around a sole arrow function parameter.\n\nValid options:\n\n- `\"always\"` - Always include parens. Example: `(x) => x`\n- `\"avoid\"` - Omit parens when possible. Example: `x => x`\n\n| Default    | CLI Override                                    | API Override                                    |\n| ---------- | ----------------------------------------------- | ----------------------------------------------- |\n| `\"always\"` | <code>--arrow-parens <always&#124;avoid></code> | <code>arrowParens: \"<always&#124;avoid>\"</code> |\n\nAt first glance, avoiding parentheses may look like a better choice because of less visual noise.\nHowever, when Prettier removes parentheses, it becomes harder to add type annotations, extra arguments or default values as well as making other changes.\nConsistent use of parentheses provides a better developer experience when editing real codebases, which justifies the default value for the option.\n\n## Range\n\nFormat only a segment of a file.\n\nThese two options can be used to format code starting and ending at a given character offset (inclusive and exclusive, respectively). The range will extend:\n\n- Backwards to the start of the first line containing the selected statement.\n- Forwards to the end of the selected statement.\n\nThese options cannot be used with `cursorOffset`.\n\n| Default    | CLI Override          | API Override        |\n| ---------- | --------------------- | ------------------- |\n| `0`        | `--range-start <int>` | `rangeStart: <int>` |\n| `Infinity` | `--range-end <int>`   | `rangeEnd: <int>`   |\n\n## Parser\n\nSpecify which parser to use.\n\nPrettier automatically infers the parser from the input file path, so you shouldn't have to change this setting.\n\nBoth the `babel` and `flow` parsers support the same set of JavaScript features (including Flow type annotations). They might differ in some edge cases, so if you run into one of those you can try `flow` instead of `babel`. Almost the same applies to `typescript` and `babel-ts`. `babel-ts` might support JavaScript features (proposals) not yet supported by TypeScript, but it's less permissive when it comes to invalid code and less battle-tested than the `typescript` parser.\n\nValid options:\n\n- `\"babel\"` (via [@babel/parser](https://github.com/babel/babel/tree/master/packages/babel-parser)) _Named `\"babylon\"` until v1.16.0_\n- `\"babel-flow\"` (same as `\"babel\"` but enables Flow parsing explicitly to avoid ambiguity) _First available in v1.16.0_\n- `\"babel-ts\"` (similar to `\"typescript\"` but uses Babel and its TypeScript plugin) _First available in v2.0.0_\n- `\"flow\"` (via [flow-parser](https://github.com/facebook/flow/tree/master/src/parser))\n- `\"typescript\"` (via [@typescript-eslint/typescript-estree](https://github.com/typescript-eslint/typescript-eslint)) _First available in v1.4.0_\n- `\"css\"` (via [postcss-scss](https://github.com/postcss/postcss-scss) and [postcss-less](https://github.com/shellscape/postcss-less), autodetects which to use) _First available in v1.7.1_\n- `\"scss\"` (same parsers as `\"css\"`, prefers postcss-scss) _First available in v1.7.1_\n- `\"less\"` (same parsers as `\"css\"`, prefers postcss-less) _First available in v1.7.1_\n- `\"json\"` (via [@babel/parser parseExpression](https://babeljs.io/docs/en/next/babel-parser.html#babelparserparseexpressioncode-options)) _First available in v1.5.0_\n- `\"json5\"` (same parser as `\"json\"`, but outputs as [json5](https://json5.org/)) _First available in v1.13.0_\n- `\"json-stringify\"` (same parser as `\"json\"`, but outputs like `JSON.stringify`) _First available in v1.13.0_\n- `\"graphql\"` (via [graphql/language](https://github.com/graphql/graphql-js/tree/master/src/language)) _First available in v1.5.0_\n- `\"markdown\"` (via [remark-parse](https://github.com/wooorm/remark/tree/master/packages/remark-parse)) _First available in v1.8.0_\n- `\"mdx\"` (via [remark-parse](https://github.com/wooorm/remark/tree/master/packages/remark-parse) and [@mdx-js/mdx](https://github.com/mdx-js/mdx/tree/master/packages/mdx)) _First available in v1.15.0_\n- `\"html\"` (via [angular-html-parser](https://github.com/ikatyang/angular-html-parser/tree/master/packages/angular-html-parser)) _First available in 1.15.0_\n- `\"vue\"` (same parser as `\"html\"`, but also formats vue-specific syntax) _First available in 1.10.0_\n- `\"angular\"` (same parser as `\"html\"`, but also formats angular-specific syntax via [angular-estree-parser](https://github.com/ikatyang/angular-estree-parser)) _First available in 1.15.0_\n- `\"lwc\"` (same parser as `\"html\"`, but also formats LWC-specific syntax for unquoted template attributes) _First available in 1.17.0_\n- `\"yaml\"` (via [yaml](https://github.com/eemeli/yaml) and [yaml-unist-parser](https://github.com/ikatyang/yaml-unist-parser)) _First available in 1.14.0_\n\n[Custom parsers](api.md#custom-parser-api) are also supported. _First available in v1.5.0_\n\n| Default | CLI Override                                    | API Override                                               |\n| ------- | ----------------------------------------------- | ---------------------------------------------------------- |\n| None    | `--parser <string>`<br />`--parser ./my-parser` | `parser: \"<string>\"`<br />`parser: require(\"./my-parser\")` |\n\nNote: the default value was `\"babylon\"` until v1.13.0.\n\n<a name=\"filepath\"></a>\n\n## File Path\n\nSpecify the file name to use to infer which parser to use.\n\nFor example, the following will use the CSS parser:\n\n```bash\ncat foo | prettier --stdin-filepath foo.css\n```\n\n| Default | CLI Override                | API Override           |\n| ------- | --------------------------- | ---------------------- |\n| None    | `--stdin-filepath <string>` | `filepath: \"<string>\"` |\n\n## Require pragma\n\n_First available in v1.7.0_\n\nPrettier can restrict itself to only format files that contain a special comment, called a pragma, at the top of the file. This is very useful when gradually transitioning large, unformatted codebases to prettier.\n\nFor example, a file with the following as its first comment will be formatted when `--require-pragma` is supplied:\n\n```js\n/**\n * @prettier\n */\n```\n\nor\n\n```js\n/**\n * @format\n */\n```\n\n| Default | CLI Override       | API Override            |\n| ------- | ------------------ | ----------------------- |\n| `false` | `--require-pragma` | `requirePragma: <bool>` |\n\n## Insert Pragma\n\n_First available in v1.8.0_\n\nPrettier can insert a special @format marker at the top of files specifying that the file has been formatted with prettier. This works well when used in tandem with the `--require-pragma` option. If there is already a docblock at the top of the file then this option will add a newline to it with the @format marker.\n\n| Default | CLI Override      | API Override           |\n| ------- | ----------------- | ---------------------- |\n| `false` | `--insert-pragma` | `insertPragma: <bool>` |\n\n## Prose Wrap\n\n_First available in v1.8.2_\n\nBy default, Prettier will wrap markdown text as-is since some services use a linebreak-sensitive renderer, e.g. GitHub comment and BitBucket. In some cases you may want to rely on editor/viewer soft wrapping instead, so this option allows you to opt out with `\"never\"`.\n\nValid options:\n\n- `\"always\"` - Wrap prose if it exceeds the print width.\n- `\"never\"` - Do not wrap prose.\n- `\"preserve\"` - Wrap prose as-is. _First available in v1.9.0_\n\n| Default      | CLI Override                                                | API Override                                                |\n| ------------ | ----------------------------------------------------------- | ----------------------------------------------------------- |\n| `\"preserve\"` | <code>--prose-wrap <always&#124;never&#124;preserve></code> | <code>proseWrap: \"<always&#124;never&#124;preserve>\"</code> |\n\n## HTML Whitespace Sensitivity\n\n_First available in v1.15.0_\n\nSpecify the global whitespace sensitivity for HTML files, see [whitespace-sensitive formatting] for more info.\n\n[whitespace-sensitive formatting]: https://prettier.io/blog/2018/11/07/1.15.0.html#whitespace-sensitive-formatting\n\nValid options:\n\n- `\"css\"` - Respect the default value of CSS `display` property.\n- `\"strict\"` - Whitespaces are considered sensitive.\n- `\"ignore\"` - Whitespaces are considered insensitive.\n\n| Default | CLI Override                                                             | API Override                                                            |\n| ------- | ------------------------------------------------------------------------ | ----------------------------------------------------------------------- |\n| `\"css\"` | <code>--html-whitespace-sensitivity <css&#124;strict&#124;ignore></code> | <code>htmlWhitespaceSensitivity: \"<css&#124;strict&#124;ignore>\"</code> |\n\n## Vue files script and style tags indentation\n\n_First available in v1.19.0_\n\nWhether or not to indent the code inside `<script>` and `<style>` tags in Vue files. Some people (like [the creator of Vue](https://github.com/prettier/prettier/issues/3888#issuecomment-459521863)) don\u2019t indent to save an indentation level, but this might break code folding in your editor.\n\nValid options:\n\n- `\"false\"` - Do not indent script and style tags in Vue files.\n- `\"true\"` - Indent script and style tags in Vue files.\n\n| Default | CLI Override                    | API Override                      |\n| ------- | ------------------------------- | --------------------------------- |\n| `false` | `--vue-indent-script-and-style` | `vueIndentScriptAndStyle: <bool>` |\n\n## End of Line\n\n_First available in v1.15.0, default value changed from `auto` to `lf` in v2.0.0_\n\nFor historical reasons, there exist two common flavors of line endings in text files.\nThat is `\\n` (or `LF` for _Line Feed_) and `\\r\\n` (or `CRLF` for _Carriage Return + Line Feed_).\nThe former is common on Linux and macOS, while the latter is prevalent on Windows.\nSome details explaining why it is so [can be found on Wikipedia](https://en.wikipedia.org/wiki/Newline).\n\nWhen people collaborate on a project from different operating systems, it becomes easy to end up with mixed line endings in a shared git repository.\nIt is also possible for Windows users to accidentally change line endings in a previously committed file from `LF` to `CRLF`.\nDoing so produces a large `git diff` and thus makes the line-by-line history for a file (`git blame`) harder to explore.\n\nIf you want to make sure that your entire git repository only contains Linux-style line endings in files covered by Prettier:\n\n1. Ensure Prettier\u2019s `endOfLine` option is set to `lf` (this is a default value since v2.0.0)\n1. Configure [a pre-commit hook](precommit.md) that will run Prettier\n1. Configure Prettier to run in your CI pipeline using [`--check` flag](cli.md#--check). If you use Travis CI, set [the `autocrlf` option](https://docs.travis-ci.com/user/customizing-the-build#git-end-of-line-conversion-control) to `input` in `.travis.yml`.\n1. Add `* text=auto eol=lf` to the repo's `.gitattributes` file.\n   You may need to ask Windows users to re-clone your repo after this change to ensure git has not converted `LF` to `CRLF` on checkout.\n\nAll modern text editors in all operating systems are able to correctly display line endings when `\\n` (`LF`) is used.\nHowever, old versions of Notepad for Windows will visually squash such lines into one as they can only deal with `\\r\\n` (`CRLF`).\n\nValid options:\n\n- `\"lf\"` \u2013 Line Feed only (`\\n`), common on Linux and macOS as well as inside git repos\n- `\"crlf\"` - Carriage Return + Line Feed characters (`\\r\\n`), common on Windows\n- `\"cr\"` - Carriage Return character only (`\\r`), used very rarely\n- `\"auto\"` - Maintain existing line endings\n  (mixed values within one file are normalised by looking at what's used after the first line)\n\n| Default | CLI Override                                                | API Override                                               |\n| ------- | ----------------------------------------------------------- | ---------------------------------------------------------- |\n| `\"lf\"`  | <code>--end-of-line <lf&#124;crlf&#124;cr&#124;auto></code> | <code>endOfLine: \"<lf&#124;crlf&#124;cr&#124;auto>\"</code> |\n\n## Embedded Language Formatting\n\n_First available in v2.1.0_\n\nControl whether Prettier formats quoted code embedded in the file.\n\nWhen Prettier identifies cases where it looks like you've placed some code it knows how to format within a string in another file, like in a tagged template in JavaScript with a tag named `html` or in code blocks in Markdown, it will by default try to format that code.\n\nSometimes this behavior is undesirable, particularly in cases where you might not have intended the string to be interpreted as code. This option allows you to switch between the default behavior (`auto`) and disabling this feature entirely (`off`).\n\nValid options:\n\n- `\"auto\"` \u2013 Format embedded code if Prettier can automatically identify it.\n- `\"off\"` - Never automatically format embedded code.\n\n| Default  | CLI Override                         | API Override                        |\n| -------- | ------------------------------------ | ----------------------------------- |\n| `\"auto\"` | `--embedded-language-formatting=off` | `embeddedLanguageFormatting: \"off\"` |\n";
/* harmony default export */ __webpack_exports__["default"] = (md);

/***/ })

}]);