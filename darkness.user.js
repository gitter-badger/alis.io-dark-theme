// ==UserScript==
// @name         Alis.io Dark Theme
// @namespace    http://tampermonkey.net/
// @version      1.1
// @description  Dark Interface.
// @author       MiyakeDev
// @match        http://alis.io/*
// @grant        none
// ==/UserScript==

var css = 'darkness.css';
var js = 'darkness.js';

var darkcss = document.createElement('link');
darkcss.rel = 'stylesheet';
darkcss.href = css;

var darkjs = document.createElement("script");
darkjs.type = "text/javascript";
darkjs.src = js;

$("script:last").after(darkcss);
$("script:last").after(darkjs);
