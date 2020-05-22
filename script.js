// ==UserScript==
// @name         echo360 speed mode
// @namespace    http://tampermonkey.net/
// @version      1.1
// @description  Adds higher speed options to echo360 lcs
// @author       Alexander Shearer
// @match        https://echo360.org.au/*
// @require      https://code.jquery.com/jquery-3.3.1.min.js
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    console.log("adding memes");
    window.addEventListener('load', function() {
        $('div.video-menu.settings-menu').bind("DOMSubtreeModified", function settingsHandler(e){
            console.log("Memes added...");
            $('div.video-menu.settings-menu').unbind("DOMSubtreeModified", settingsHandler);
            $('#speed-select').append(new Option("2.25", 2.25));
            $('#speed-select').append(new Option("2.5", 2.5));
            $('#speed-select').append(new Option("2.75", 2.75));
            $('#speed-select').append(new Option("3", 3));
            $('div.video-menu.settings-menu').bind("DOMSubtreeModified", settingsHandler);
        } );
        console.log("Memes added");
    }, false);

})();
