"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkto_do_list"] = self["webpackChunkto_do_list"] || []).push([["main"],{

/***/ "./modules/AddTask.js":
/*!****************************!*\
  !*** ./modules/AddTask.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _RenderTasks_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./RenderTasks.js */ \"./modules/RenderTasks.js\");\n\n\nconst addTask = () => {\n  const savedItems = JSON.parse(localStorage.getItem('savedItems')) || [];\n  const descriptionInput = document.getElementById('description');\n  const descriptionValue = descriptionInput.value.trim(); // Use a separate variable\n\n  const completed = false;\n\n  const updateItemIds = () => {\n    savedItems.forEach((item, index) => {\n      item.id = index;\n    });\n  };\n\n  const updateLocalStorage = () => {\n    localStorage.setItem('savedItems', JSON.stringify(savedItems));\n  };\n\n  const id = savedItems.length + 1;\n\n  if (descriptionValue !== '') {\n    savedItems.push({ description: descriptionValue, completed, id });\n\n    updateLocalStorage();\n    updateItemIds();\n    (0,_RenderTasks_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n    descriptionInput.value = '';\n  } else {\n    const error = document.querySelector('.error');\n    error.innerHTML = '<p class=\"error-p\" id=\"description-error\"> Please fill in a task or item</p>';\n\n    const descriptionError = document.getElementById('description-error');\n    descriptionInput.addEventListener('click', () => {\n      descriptionError.textContent = ''; // Clear the error message\n    });\n  }\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (addTask);\n\n\n//# sourceURL=webpack://to-do-list/./modules/AddTask.js?");

/***/ }),

/***/ "./modules/ItemManager.js":
/*!********************************!*\
  !*** ./modules/ItemManager.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _RenderTasks_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./RenderTasks.js */ \"./modules/RenderTasks.js\");\n/* harmony import */ var _AddTask_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AddTask.js */ \"./modules/AddTask.js\");\n\n\n\nconst ItemManager = () => {\n  (0,_RenderTasks_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n\n  const addItem = document.getElementById('enter-icon');\n\n  const handleOnClickAddItem = () => {\n    (0,_AddTask_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n  };\n\n  addItem.addEventListener('click', handleOnClickAddItem);\n  (0,_RenderTasks_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ItemManager);\n\n\n//# sourceURL=webpack://to-do-list/./modules/ItemManager.js?");

/***/ }),

/***/ "./modules/RenderTasks.js":
/*!********************************!*\
  !*** ./modules/RenderTasks.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst renderItems = () => {\r\n  const savedItems = JSON.parse(localStorage.getItem('savedItems')) || [];\r\n\r\n  const updateLocalStorage = () => {\r\n    localStorage.setItem('savedItems', JSON.stringify(savedItems));\r\n  };\r\n\r\n  const ToDoItemsContainer = document.getElementById('to-do-items-container');\r\n  ToDoItemsContainer.innerHTML = '';\r\n\r\n  savedItems.forEach((item, index) => {\r\n    const checked = item.completed ? 'true' : false;\r\n    const Items = document.createElement('div');\r\n    Items.classList.add('items');\r\n    Items.setAttribute('data-id', item.id);\r\n    Items.setAttribute('draggable', 'true');\r\n\r\n    const ToDoItems = document.createElement('div');\r\n    ToDoItems.classList.add('to-do-items');\r\n    const Options = document.createElement('div');\r\n    Options.innerHTML = '<i class=\"fa-solid fa-ellipsis-vertical\"></i>';\r\n    Options.classList.add('options-icon');\r\n\r\n    const TrashIcon = document.createElement('div');\r\n    TrashIcon.innerHTML = '<i class=\"fas fa-trash-alt\"></i>';\r\n    TrashIcon.classList.add('trash-icon');\r\n    TrashIcon.style.display = 'none';\r\n\r\n    const EditIcon = document.createElement('div');\r\n    EditIcon.innerHTML = '<i class=\"fas fa-edit\"></i>';\r\n    EditIcon.classList.add('edit-icon');\r\n    EditIcon.style.display = 'none';\r\n\r\n    Items.appendChild(ToDoItems);\r\n    Items.appendChild(Options);\r\n    Items.appendChild(TrashIcon);\r\n    Items.appendChild(EditIcon);\r\n\r\n    const ItemsContainer = document.createElement('div');\r\n    ItemsContainer.appendChild(Items);\r\n\r\n    ToDoItemsContainer.appendChild(ItemsContainer);\r\n\r\n    const CompletedStatus = document.createElement('input');\r\n    CompletedStatus.classList.add('checkbox');\r\n    CompletedStatus.type = 'checkbox';\r\n    CompletedStatus.setAttribute('id', index + 1);\r\n    CompletedStatus.setAttribute('checked', checked);\r\n    CompletedStatus.checked = item.completed;\r\n    CompletedStatus.addEventListener('change', () => {\r\n      item.completed = CompletedStatus.checked;\r\n      updateLocalStorage();\r\n\r\n      const optionsicon = Items.querySelector('.options-icon');\r\n      const trashIcon = Items.querySelector('.trash-icon');\r\n\r\n      if (CompletedStatus.checked) {\r\n        optionsicon.style.display = 'none';\r\n        trashIcon.style.display = 'flex';\r\n        CompletedStatus.checked = true;\r\n        updateLocalStorage();\r\n        ToDoItems.classList.toggle('checked');\r\n      } else {\r\n        optionsicon.style.display = 'flex';\r\n        trashIcon.style.display = 'none';\r\n        ToDoItems.classList.toggle('checked');\r\n        CompletedStatus.checked = false;\r\n        updateLocalStorage();\r\n      }\r\n\r\n      trashIcon.addEventListener('click', () => {\r\n        const savedItems = JSON.parse(localStorage.getItem('savedItems')) || [];\r\n\r\n        if (index >= 0 && index < savedItems.length + 1) {\r\n          savedItems.splice(index, 1);\r\n\r\n          for (let i = 0; i < savedItems.length; i += 1) {\r\n            savedItems[i].id = i + 1;\r\n          }\r\n\r\n          localStorage.setItem('savedItems', JSON.stringify(savedItems));\r\n        }\r\n\r\n        renderItems();\r\n      });\r\n    });\r\n\r\n    const editerror = document.createElement('span');\r\n    editerror.classList.add('error-edit');\r\n    const DescriptionInput = document.createElement('input');\r\n    DescriptionInput.type = 'text';\r\n    DescriptionInput.value = item.description;\r\n    DescriptionInput.classList.add('to-do-item');\r\n    DescriptionInput.setAttribute('id', item.id);\r\n    DescriptionInput.appendChild(editerror);\r\n\r\n    DescriptionInput.addEventListener('click', () => {\r\n      const optionsicon = Items.querySelector('.options-icon');\r\n      const editIcon = Items.querySelector('.edit-icon');\r\n      optionsicon.style.display = 'none';\r\n      editIcon.style.display = 'flex';\r\n    });\r\n    const trashIcon = Items.querySelector('.trash-icon');\r\n\r\n    trashIcon.addEventListener('click', () => {\r\n      const savedItems = JSON.parse(localStorage.getItem('savedItems')) || [];\r\n\r\n      if (index > 0 && index < savedItems.length) {\r\n        savedItems.forEach((item, newIndex) => {\r\n          item.id = newIndex;\r\n        });\r\n\r\n        // Update local storage with the modified savedItems array\r\n        localStorage.setItem('savedItems', JSON.stringify(savedItems));\r\n      }\r\n\r\n      renderItems();\r\n    });\r\n\r\n    DescriptionInput.addEventListener('blur', () => {\r\n      const optionsicon = Items.querySelector('.options-icon');\r\n      const trashIcon = Items.querySelector('.trash-icon');\r\n      optionsicon.style.display = 'flex';\r\n      trashIcon.style.display = 'none';\r\n\r\n      const newValue = DescriptionInput.value.trim();\r\n      if (newValue !== '') {\r\n        item.description = newValue;\r\n        updateLocalStorage();\r\n        renderItems();\r\n      } else {\r\n        const error = document.querySelector('.error');\r\n        error.innerHTML = '<p class=\"error-p\" id=\"description-error\"> Please fill in a task or item</p>';\r\n      }\r\n      const descriptionError = document.getElementById('description-error');\r\n      DescriptionInput.addEventListener('click', () => {\r\n        descriptionError.textContent = '';\r\n      });\r\n    });\r\n\r\n    DescriptionInput.addEventListener('keypress', (event) => {\r\n      if (event.key === 'Enter') {\r\n        DescriptionInput.blur();\r\n      }\r\n    });\r\n\r\n    ToDoItems.appendChild(CompletedStatus);\r\n    ToDoItems.appendChild(DescriptionInput);\r\n\r\n    ToDoItemsContainer.appendChild(Items);\r\n\r\n    const clearAllCompleted = () => {\r\n      const clearallbtn = document.getElementById('clear-btn');\r\n      clearallbtn.addEventListener('click', () => {\r\n        const updatedSavedItems = savedItems.filter((item) => !item.completed);\r\n        localStorage.setItem('savedItems', JSON.stringify(updatedSavedItems));\r\n\r\n        const updateItemIds = () => {\r\n          savedItems.forEach((item, index) => {\r\n            item.id = index;\r\n          });\r\n        };\r\n        updateItemIds();\r\n\r\n        renderItems();\r\n      });\r\n    };\r\n    clearAllCompleted();\r\n  });\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (renderItems);\r\n\n\n//# sourceURL=webpack://to-do-list/./modules/RenderTasks.js?");

/***/ }),

/***/ "./modules/sortItems.js":
/*!******************************!*\
  !*** ./modules/sortItems.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst sortItems = () => {\r\n  const sortableList = document.querySelector('.to-do-items-container');\r\n  const items = sortableList.querySelectorAll('.items');\r\n\r\n  items.forEach((item) => {\r\n    item.addEventListener('dragstart', () => {\r\n      // Adding dragging class to item after a delay\r\n      setTimeout(() => item.classList.add('dragging'), 0);\r\n    });\r\n    // Removing dragging class from item on dragend event\r\n    item.addEventListener('dragend', () => item.classList.remove('dragging'));\r\n  });\r\n\r\n  const initSortableList = (e) => {\r\n    e.preventDefault();\r\n    const draggingItem = document.querySelector('.dragging');\r\n\r\n    if (!draggingItem) return;\r\n\r\n    // Getting all items except the currently dragging one\r\n    const siblings = [\r\n      ...sortableList.querySelectorAll('.items:not(.dragging)'),\r\n    ];\r\n\r\n    // Calculate the mouse position relative to the list\r\n    const mouseY = e.clientY - sortableList.getBoundingClientRect().top;\r\n\r\n    // Find the index to insert the dragging item\r\n    const indexToInsert = siblings.findIndex((sibling) => {\r\n      const siblingTop = sibling.offsetTop;\r\n      const siblingHeight = sibling.offsetHeight;\r\n\r\n      return mouseY < siblingTop + siblingHeight / 2;\r\n    });\r\n\r\n    // Insert the dragging item at the calculated index\r\n    if (indexToInsert !== -1) {\r\n      sortableList.insertBefore(draggingItem, siblings[indexToInsert]);\r\n    } else {\r\n      // If index is -1, the item should be placed at the end of the list\r\n      sortableList.appendChild(draggingItem);\r\n    }\r\n  };\r\n\r\n  sortableList.addEventListener('dragover', initSortableList);\r\n  sortableList.addEventListener('dragenter', (e) => e.preventDefault());\r\n};\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (sortItems);\r\n\n\n//# sourceURL=webpack://to-do-list/./modules/sortItems.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);\n// Imports\n\n\n\nvar ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./fonts/Tyros/TyrosPro-Regular.woff2 */ \"./src/fonts/Tyros/TyrosPro-Regular.woff2\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./fonts/Tyros/TyrosPro-Regular.woff */ \"./src/fonts/Tyros/TyrosPro-Regular.woff\"), __webpack_require__.b);\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);\nvar ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `@font-face {\r\n  font-family: 'Tyros';\r\n  src:\r\n    url(${___CSS_LOADER_URL_REPLACEMENT_0___}) format('woff2'),\r\n    url(${___CSS_LOADER_URL_REPLACEMENT_1___}) format('woff');\r\n  font-weight: 600;\r\n  font-style: normal;\r\n}\r\n\r\n* {\r\n  margin: 0;\r\n  padding: 0;\r\n  box-sizing: border-box;\r\n  font-family: 'Tyros', sans-serif;\r\n}\r\n\r\n.wrapper {\r\n  display: flex;\r\n  flex-direction: column;\r\n  width: 100%;\r\n  height: auto;\r\n  margin: auto;\r\n  margin-top: 3rem;\r\n  padding: 20px;\r\n  border: 1px solid black;\r\n  box-shadow: 5px 5px 5px 5px gray;\r\n}\r\n\r\n.title,\r\n.add-to-list,\r\n.clear-btn {\r\n  margin-top: 1rem;\r\n  height: 2rem;\r\n}\r\n\r\n.title {\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: space-between;\r\n}\r\n\r\ninput[type='text'] {\r\n  width: 100%;\r\n  height: 100%;\r\n  border: none;\r\n  outline: none;\r\n}\r\n\r\nhr {\r\n  width: 100%;\r\n  border: 1px solid gray;\r\n}\r\n\r\n.to-do-items-container {\r\n  display: flex;\r\n  flex-direction: column;\r\n  height: 270px;\r\n  overflow-y: auto;\r\n}\r\n\r\n.items {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  border: 1px solid gray;\r\n  border-radius: 5px;\r\n  margin-top: 1rem;\r\n  margin-bottom: 1rem;\r\n  padding: 10px;\r\n  box-shadow: 0 8px 6px -6px black;\r\n}\r\n\r\n.items.dragging {\r\n  opacity: 0.9;\r\n}\r\n\r\n.items.dragging :where(.to-do-items, .options-icon) {\r\n  opacity: 0;\r\n}\r\n\r\n.to-do-items {\r\n  display: flex;\r\n  flex-direction: row;\r\n  align-items: center;\r\n  gap: 10px;\r\n}\r\n\r\n.add-to-list {\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: space-between;\r\n}\r\n\r\n.enter-icon > img {\r\n  width: 20px;\r\n  height: 25px;\r\n}\r\n\r\n.options-icon:hover {\r\n  cursor: move;\r\n}\r\n\r\n.checked {\r\n  text-decoration: line-through;\r\n}\r\n\r\n.clear-btn {\r\n  display: flex;\r\n  width: 40%;\r\n  margin: auto;\r\n  align-items: center;\r\n  justify-content: center;\r\n  background-color: beige;\r\n  transition: 0.2s ease-in-out 0s;\r\n}\r\n\r\n.clear-btn:hover,\r\n.enter-icon:hover,\r\n#refresh,\r\n.trash-icon:hover {\r\n  cursor: pointer;\r\n  transform: scale(1.25);\r\n}\r\n\r\nbutton,\r\ninput[type='submit'],\r\ninput[type='reset'] {\r\n  background: none;\r\n  color: inherit;\r\n  border: none;\r\n  padding: 0;\r\n  font: inherit;\r\n  cursor: pointer;\r\n  outline: inherit;\r\n}\r\n\r\n.error,\r\n.error-edit {\r\n  color: red;\r\n  font-size: 10px;\r\n}\r\n\r\n.display-none {\r\n  display: none;\r\n}\r\n\r\n@media (min-width: 768px) {\r\n  * {\r\n    margin: auto;\r\n  }\r\n\r\n  .wrapper {\r\n    width: 50%;\r\n  }\r\n}\r\n`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://to-do-list/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://to-do-list/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    options = {};\n  }\n  if (!url) {\n    return url;\n  }\n  url = String(url.__esModule ? url.default : url);\n\n  // If url is already wrapped in quotes, remove them\n  if (/^['\"].*['\"]$/.test(url)) {\n    url = url.slice(1, -1);\n  }\n  if (options.hash) {\n    url += options.hash;\n  }\n\n  // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n  if (/[\"'() \\t\\n]|(%20)/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, \"\\\\n\"), \"\\\"\");\n  }\n  return url;\n};\n\n//# sourceURL=webpack://to-do-list/./node_modules/css-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://to-do-list/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://to-do-list/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://to-do-list/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://to-do-list/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://to-do-list/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://to-do-list/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://to-do-list/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://to-do-list/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _images_enter_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./images/enter.png */ \"./src/images/enter.png\");\n/* harmony import */ var _modules_ItemManager_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../modules/ItemManager.js */ \"./modules/ItemManager.js\");\n/* harmony import */ var _modules_sortItems_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../modules/sortItems.js */ \"./modules/sortItems.js\");\n\r\n\r\n\r\n\r\n\r\nconst entericon = document.getElementById('enter-icon');\r\n\r\nconst EnterIcon = new Image();\r\nEnterIcon.src = _images_enter_png__WEBPACK_IMPORTED_MODULE_1__;\r\n\r\nentericon.appendChild(EnterIcon);\r\n\r\ndocument.addEventListener('DOMContentLoaded', () => {\r\n  (0,_modules_ItemManager_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\r\n  (0,_modules_sortItems_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\r\n});\r\n\n\n//# sourceURL=webpack://to-do-list/./src/index.js?");

/***/ }),

/***/ "./src/fonts/Tyros/TyrosPro-Regular.woff":
/*!***********************************************!*\
  !*** ./src/fonts/Tyros/TyrosPro-Regular.woff ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"a29f490fc5f85221e0e7.woff\";\n\n//# sourceURL=webpack://to-do-list/./src/fonts/Tyros/TyrosPro-Regular.woff?");

/***/ }),

/***/ "./src/fonts/Tyros/TyrosPro-Regular.woff2":
/*!************************************************!*\
  !*** ./src/fonts/Tyros/TyrosPro-Regular.woff2 ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"577fbf79d3ffc8b39ca1.woff2\";\n\n//# sourceURL=webpack://to-do-list/./src/fonts/Tyros/TyrosPro-Regular.woff2?");

/***/ }),

/***/ "./src/images/enter.png":
/*!******************************!*\
  !*** ./src/images/enter.png ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"741612f8335ad28e85be.png\";\n\n//# sourceURL=webpack://to-do-list/./src/images/enter.png?");

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);