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
    $("#left, #center, #right, #hexs, #stage1, #stage2, #stage3, #stage4, #stage5, #gameOver").hide();

    var counterPoints = 0;
    var stage = 1;
    var points = 20;

    function countDown() {
        var time = 100;
        var id = setInterval(timeFn, 1000);
        function timeFn() {

            if ($("#rightPoints").text() >= points) {
                clearInterval(id);
                $("#leftTime").empty().append(time);
                $(".rect").hide();

                stage = stage + 1;
                $("#stage" + stage).show();

                points = points + 20;

                if (stage == 6 && time == 0 || $("#rightPoints").text() == 100) {
                    clearInterval(id);
                    $(".rect").hide();
                    $("#gameOver").show().append("<p class='win2'>WYGRANA</p>");
                    counterPoints = 0;
                    stage = 1;
                    points = 20;
                    $("#centerPoints").empty().append(100);
                }

                if ($("#rightPoints").text() >= $("#centerPoints").text()) {
                    $("#rightPoints").removeClass("pulseRed");
                    $("#rightPoints").addClass("greenNumber");
                } else {
                    $("#rightPoints").addClass("pulseRed");
                    $("#rightPoints").removeClass("greenNumber");
                }
            } else if (time == 0 && $("#rightPoints").text() < points) {
                clearInterval(id);
                $(".rect").hide();
                $("#gameOver").show().append("<p class='loose2'>PRZEGRANA</p>");
                counterPoints = 0;
                stage = 1;
                points = 20;
            } else {
                time--;
                if (time <= 10) {
                    $("#leftTime").removeClass("greenNumber");
                    $("#leftTime").addClass("pulseRed");
                } else {
                    $("#leftTime").removeClass("pulseRed");
                    $("#leftTime").addClass("greenNumber");
                }
                $("#leftTime").empty().append(time);
            }
        }

        if (stage == 2) {
            time = time + 1 - 10;
            $("#centerPoints").empty().append(points);
            $("body").removeClass("bckg1").addClass("bckg2");
            $("#rightPoints").addClass("pulseRed");
            $("#rightPoints").removeClass("greenNumber");
        } else if (stage == 3) {
            time = time + 1 - 20;
            $("#centerPoints").empty().append(points);
            $("body").removeClass("bckg2").addClass("bckg3");
            $("#rightPoints").addClass("pulseRed");
            $("#rightPoints").removeClass("greenNumber");
        } else if (stage == 4) {
            time = time + 1 - 30;
            $("#centerPoints").empty().append(points);
            $("body").removeClass("bckg3").addClass("bckg4");
            $("#rightPoints").addClass("pulseRed");
            $("#rightPoints").removeClass("greenNumber");
        } else if (stage == 5) {
            time = time + 1 - 40;
            $("#centerPoints").empty().append(points);
            $("body").removeClass("bckg4").addClass("bckg5");
            $("#rightPoints").addClass("pulseRed");
            $("#rightPoints").removeClass("greenNumber");
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
        $("#stage1").show();
        $("#left, #center, #right").show();
    });

    function stages(stage) {
        stage.on("click", function () {
            stage.hide();
            $("#hexs, .rect").show();
            showBtns();
            countDown();
        });
    }

    stages($("#stage1"));
    stages($("#stage2"));
    stages($("#stage3"));
    stages($("#stage4"));
    stages($("#stage5"));

    $("#gameOver").on("click", function () {
        $("#gameOver").hide();
        $("#stage1").show();
        $("#leftTime").empty().append(100).removeClass("pulseRed");
        $("#rightPoints").empty().append(0);
        $("#centerPoints").empty().append(20);
        $("body").removeClass("bckg5").addClass("bckg1");
    });
});

/***/ })
/******/ ]);