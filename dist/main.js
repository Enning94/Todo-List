/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://webpack-demo/./src/style.css?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_addTask_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/addTask.js */ \"./src/modules/addTask.js\");\n/* harmony import */ var _modules_deleteTask_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/deleteTask.js */ \"./src/modules/deleteTask.js\");\n/* harmony import */ var _modules_editTask_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/editTask.js */ \"./src/modules/editTask.js\");\n/* harmony import */ var _modules_displayTodo_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/displayTodo.js */ \"./src/modules/displayTodo.js\");\n/* harmony import */ var _modules_checkTask_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/checkTask.js */ \"./src/modules/checkTask.js\");\n/* harmony import */ var _modules_clearCheckedTasks_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/clearCheckedTasks.js */ \"./src/modules/clearCheckedTasks.js\");\n\n\n\n\n\n\n\nconst todoBtn = document.querySelector('.enter-btn');\nconst todoList = document.querySelector('.todo-list');\nconst clearAll = document.querySelector('.remove-btn');\n\ndocument.addEventListener('DOMContentLoaded', _modules_displayTodo_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"]);\ntodoBtn.addEventListener('click', _modules_addTask_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\ntodoList.addEventListener('click', _modules_deleteTask_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"]);\ntodoList.addEventListener('change', _modules_checkTask_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"]);\nclearAll.addEventListener('click', _modules_clearCheckedTasks_js__WEBPACK_IMPORTED_MODULE_5__[\"default\"]);\n\ntodoList.addEventListener('keyup', (e) => {\n  if (e.key === 'Enter') {\n    e.preventDefault();\n    (0,_modules_editTask_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(e);\n  }\n});\n\n//# sourceURL=webpack://webpack-demo/./src/index.js?");

/***/ }),

/***/ "./src/modules/addTask.js":
/*!********************************!*\
  !*** ./src/modules/addTask.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _localStorage_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./localStorage.js */ \"./src/modules/localStorage.js\");\n\n\nconst input = document.querySelector('.task-input');\nconst todoList = document.querySelector('.todo-list');\n\nconst tasks = [];\n\nconst addTodo = (event) => {\n  event.preventDefault();\n\n  const todoDiv = document.createElement('div');\n  todoDiv.classList.add('todo');\n\n  const completedBtn = document.createElement('div');\n  completedBtn.innerHTML = '<input type=\"checkbox\" class = \"complete-btn\">';\n  todoDiv.appendChild(completedBtn);\n\n  const indexLength = tasks.length + 1;\n  const taskObj = {\n    index: indexLength,\n    description: input.value,\n    completed: false,\n  };\n  tasks.push(taskObj);\n\n  tasks.forEach((task, index) => {\n    if (index === tasks.length - 1) {\n      const newTodo = document.createElement('li');\n      newTodo.classList.add('todo-item');\n      newTodo.innerHTML = `<input type=\"text\" value = \"${taskObj.description}\" class =\"inp\" id=\"${taskObj.index}\">`;\n      todoDiv.appendChild(newTodo);\n\n      (0,_localStorage_js__WEBPACK_IMPORTED_MODULE_0__.saveLocalTodos)(task);\n\n      const trashBtn = document.createElement('button');\n      trashBtn.innerHTML = '<i class=\"bx bx-trash\"></i>';\n      trashBtn.classList.add('trash-btn');\n      todoDiv.appendChild(trashBtn);\n\n      todoList.appendChild(todoDiv);\n    }\n  });\n  input.value = '';\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (addTodo);\n\n//# sourceURL=webpack://webpack-demo/./src/modules/addTask.js?");

/***/ }),

/***/ "./src/modules/checkTask.js":
/*!**********************************!*\
  !*** ./src/modules/checkTask.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _localStorage_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./localStorage.js */ \"./src/modules/localStorage.js\");\n\n\nconst checkTodo = (e) => {\n  const item = e.target;\n  if (item.classList[0] === 'complete-btn') {\n    const todo = item.parentElement.parentElement;\n    const todoIndex = todo.children[1].firstChild;\n    todoIndex.classList.toggle('completed');\n    (0,_localStorage_js__WEBPACK_IMPORTED_MODULE_0__.checkLocalTodos)(todo);\n  }\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (checkTodo);\n\n//# sourceURL=webpack://webpack-demo/./src/modules/checkTask.js?");

/***/ }),

/***/ "./src/modules/clearCheckedTasks.js":
/*!******************************************!*\
  !*** ./src/modules/clearCheckedTasks.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst clearTodo = () => {\n  let todos;\n  if (localStorage.getItem('todos') === null) {\n    todos = [];\n  } else {\n    todos = JSON.parse(localStorage.getItem('todos'));\n  }\n  const uncompleted = todos.filter((todo) => todo.completed === false);\n  localStorage.setItem('todos', JSON.stringify(uncompleted));\n  const updateTasks = uncompleted.map((todo, index) => {\n    todo.index = index + 1;\n    return todo;\n  });\n  localStorage.setItem('todos', JSON.stringify(updateTasks));\n  todos = updateTasks;\n  window.location.reload();\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (clearTodo);\n\n\n//# sourceURL=webpack://webpack-demo/./src/modules/clearCheckedTasks.js?");

/***/ }),

/***/ "./src/modules/deleteTask.js":
/*!***********************************!*\
  !*** ./src/modules/deleteTask.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _localStorage_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./localStorage.js */ \"./src/modules/localStorage.js\");\n\n\nconst deleteTodo = (e) => {\n  const item = e.target;\n  if (item.classList[0] === 'trash-btn') {\n    const todo = item.parentElement;\n    (0,_localStorage_js__WEBPACK_IMPORTED_MODULE_0__.removeLocalTodos)(todo);\n    todo.remove();\n  }\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (deleteTodo);\n\n//# sourceURL=webpack://webpack-demo/./src/modules/deleteTask.js?");

/***/ }),

/***/ "./src/modules/displayTodo.js":
/*!************************************!*\
  !*** ./src/modules/displayTodo.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst todoList = document.querySelector('.todo-list');\n\nconst getTodos = () => {\n  let todos;\n  if (localStorage.getItem('todos') === null) {\n    todos = [];\n  } else {\n    todos = JSON.parse(localStorage.getItem('todos'));\n  }\n\n  todos.forEach((todo) => {\n    const todoDiv = document.createElement('div');\n    todoDiv.classList.add('todo');\n\n    const completedBtn = document.createElement('div');\n    const isChecked = todo.completed === true ? 'checked' : '';\n    completedBtn.innerHTML = `<input type=\"checkbox\" class = \"complete-btn\" ${isChecked} id=\"${todo.index}\">`;\n    todoDiv.appendChild(completedBtn);\n\n    const newTodo = document.createElement('li');\n    const inputClass = todo.completed === true ? 'completed' : 'inp';\n    newTodo.classList.add('todo-item');\n    newTodo.innerHTML = `<input type=\"text\" value = \"${todo.description}\" class =\"${inputClass}\" id=\"${todo.index}\" >`;\n    todoDiv.appendChild(newTodo);\n\n    const trashBtn = document.createElement('button');\n    trashBtn.innerHTML = '<i class=\"bx bx-trash\"></i>';\n    trashBtn.classList.add('trash-btn');\n    todoDiv.appendChild(trashBtn);\n    todoList.appendChild(todoDiv);\n  });\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getTodos);\n\n//# sourceURL=webpack://webpack-demo/./src/modules/displayTodo.js?");

/***/ }),

/***/ "./src/modules/editTask.js":
/*!*********************************!*\
  !*** ./src/modules/editTask.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _localStorage_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./localStorage.js */ \"./src/modules/localStorage.js\");\n\n\nconst editTodo = (e) => {\n  const item = e.target;\n  if (item.classList[0] === 'inp') {\n    const todo = item.parentElement;\n    (0,_localStorage_js__WEBPACK_IMPORTED_MODULE_0__.editLocalTodos)(todo);\n  }\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (editTodo);\n\n//# sourceURL=webpack://webpack-demo/./src/modules/editTask.js?");

/***/ }),

/***/ "./src/modules/localStorage.js":
/*!*************************************!*\
  !*** ./src/modules/localStorage.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"checkLocalTodos\": () => (/* binding */ checkLocalTodos),\n/* harmony export */   \"editLocalTodos\": () => (/* binding */ editLocalTodos),\n/* harmony export */   \"removeLocalTodos\": () => (/* binding */ removeLocalTodos),\n/* harmony export */   \"saveLocalTodos\": () => (/* binding */ saveLocalTodos)\n/* harmony export */ });\nconst saveLocalTodos = (todoIn) => {\n  let todos;\n  if (localStorage.getItem('todos') === null) {\n    todos = [];\n  } else {\n    todos = JSON.parse(localStorage.getItem('todos'));\n  }\n  todos.push(todoIn);\n  localStorage.setItem('todos', JSON.stringify(todos));\n};\n\nconst removeLocalTodos = (todo) => {\n  let todos;\n  if (localStorage.getItem('todos') === null) {\n    todos = [];\n  } else {\n    todos = JSON.parse(localStorage.getItem('todos'));\n  }\n  const todoIndex = todo.children[1].firstChild.defaultValue;\n  todos.forEach((todo) => {\n    if (todo.description === todoIndex) {\n      todos.splice(todos.indexOf(todo), 1);\n    }\n  });\n  todos.forEach((todo) => {\n    todo.index = todos.indexOf(todo) + 1;\n  });\n  localStorage.setItem('todos', JSON.stringify(todos));\n};\n\nconst editLocalTodos = (todo) => {\n  let todos;\n  if (localStorage.getItem('todos') === null) {\n    todos = [];\n  } else {\n    todos = JSON.parse(localStorage.getItem('todos'));\n  }\n  const todoIndex = todo.children[0].defaultValue;\n  const todoValue = todo.children[0].value;\n  todos.forEach((todo) => {\n    if (todo.description === todoIndex) {\n      todo.description = todoValue;\n    }\n  });\n  localStorage.setItem('todos', JSON.stringify(todos));\n};\n\nconst checkLocalTodos = (todo) => {\n  let todos;\n  if (localStorage.getItem('todos') === null) {\n    todos = [];\n  } else {\n    todos = JSON.parse(localStorage.getItem('todos'));\n  }\n\n  const todoId = todo.children[1].firstChild.id;\n  const todoIndex = todo.children[1].firstChild.defaultValue;\n  todos.forEach((todo) => {\n    if (todo.description === todoIndex && todo.index == todoId) {\n      if (todo.completed === true) {\n        todo.completed = false;\n      } else if (todo.completed === false) {\n        todo.completed = true;\n      }\n    }\n  });\n  localStorage.setItem('todos', JSON.stringify(todos));\n};\n\n//# sourceURL=webpack://webpack-demo/./src/modules/localStorage.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	__webpack_require__("./src/index.js");
/******/ 	var __webpack_exports__ = __webpack_require__("./src/style.css");
/******/ 	
/******/ })()
;