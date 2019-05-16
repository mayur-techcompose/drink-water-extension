'use strict';
var time =  10000;// * 15;
setInterval(function () {
    playSound(true)
}, time); // 60 * 1000 milsec
var audio = null;
function createNotification() {
    var opt = {
        type: "basic",
        title: "Drink Water",
        message: "Please take care and drink a water",
        iconUrl: "techcompose.png",
        priority: 1,
        requireInteraction: false
    }
    var notificationId = new Date().getTime().toString()
    chrome.notifications.create(notificationId, opt);
    setTimeout(function () {
        chrome.notifications.clear(notificationId);
    }, 2000)
}

function playSound(duckAudio) {
    if (audio) {
        audio.pause();
        document.body.removeChild(audio);
        audio = null;
    }

    audio = document.createElement('audio');
    document.body.appendChild(audio);
    audio.autoplay = true;

    var src = 'kgf.ogg';
    var volume = 1.0;
    audio.volume = volume;
    audio.src = src;
    createNotification();
    if (duckAudio) {
        for (var i = 0; i < 100; i++) {
            (function (i) {
                window.setTimeout(function () {
                    var duckedVolume = volume * 1.0;
                    audio.volume = duckedVolume;
                }, 1800 + 50 * i);
            })(i);
        }
    }
}