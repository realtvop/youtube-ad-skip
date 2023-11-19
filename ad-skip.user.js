// ==UserScript==
// @name         自动跳过YouTube广告
// @namespace    youtube
// @version      1.1
// @description  在YouTube网页上自动跳过广告
// @author       飞机上的长电视(@realtvop)
// @match        *://www.youtube.com/*
// @grant        none
// ==/UserScript==

(function () {
    'use strict';

    function skipAd() {
        const skipButton = document.querySelector('.ytp-ad-text.ytp-ad-skip-button-text');
        if (skipButton) {
            skipButton.click();
            console.log("Skip button clicked.");
        } else if (document.querySelector(".ytp-ad-text")) {
            const videoElement = document.querySelector("video.video-stream.html5-main-video");
            videoElement.currentTime = videoElement.duration;
            console.log("Ad skiped.");
        }
    }

    // 设置检测时间间隔
    var timer = setInterval(skipAd, 10);
})();
