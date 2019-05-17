/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(1);


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


document.addEventListener("DOMContentLoaded", function () {
    $("#left, #right, #hexs, #stage2").hide();

    var counterPoints = 0;
    var stage = 1;
    function countDown() {

        var time = 61;
        var id = setInterval(timeFn, 1000);
        function timeFn() {
            if (time == 0) {
                clearInterval(id);
                $("#leftTime").empty().append(time);
                $(".rect").hide();
                $("#stage2").show();
                stage = stage + 1;
            } else {
                time--;
                if (time <= 10) {
                    $("#leftTime").addClass("pulseRed");
                } else {
                    $("#leftTime").removeClass("pulseRed");
                }
                $("#leftTime").empty().append(time);
            }
        }
    }

    function showBtns() {
        var allRects = document.querySelectorAll('#hexs > button');
        $(".rect").css("opacity", "0").prop("disabled", true);

        var x = Math.floor(Math.random() * 50);
        $("#" + x).css("opacity", "1").prop("disabled", false);

        for (var i = 0; i < allRects.length; i++) {
            allRects[i].onclick = function () {
                $(this).css("opacity", "0");
                $(this).prop("disabled", true);
                var x = Math.floor(Math.random() * 50);
                $("#" + x).css("opacity", "1");
                $("#" + x).prop("disabled", false);

                counterPoints = counterPoints + 1;
                $("#rightPoints").empty().append(counterPoints);
            };
        }
    }

    $("#start").on("click", function () {
        $("#title, #start").hide();
        $("#left, #right, #hexs").show();
        showBtns();
        countDown();
    });

    $("#stage2").on("click", function () {
        console.log("działa");
        $("#stage2").hide();
        console.log(stage);
        showBtns();
        countDown();
        $(".rect").show();
    });
});

/***/ })
/******/ ]);