
var PROGRESS_BAR = null;
var PROGRESS_PERCENT = null;

var hashrateSampleTime = 500;
var lastSampleTime = null;
var slidingHashrate = 0.0;
var totalHashes = 0;
var totalShares = 0;
var lastTotalHashes = 0;
var lastHashReport = null;


function set_cpu_load(load) {
    CURRENT_LOAD = Number(load);
    if (!PROGRESS_BAR)
        return;

    PROGRESS_BAR.slider("value", load);
    PROGRESS_PERCENT.val(load + "%");

    var miner = document.getElementById('miner');
    miner.contentWindow.postMessage({
        'webmine': {
            'cpu_load': load
        }
    }, '*');
}

$(function () {
    var $progressBar = $(this).find('.bar');
    var $progressPercent = $(this).find('.percent');
    PROGRESS_BAR = $progressBar;
    PROGRESS_PERCENT = $progressPercent;
    var $progressRange = $(this).find('.ui-slider-range');
    var parent = $(this);

    function set_color(percent) {
        var color = 'black';
        if (percent <= 30) {
            color = 'green';
        } else if (percent > 30 && percent <= 70) {
            color = 'gold';
        } else if (percent > 70) {
            color = 'red';
        }

        var $progressPercent = parent.find('.percent');
        var $progressRange = parent.find('.ui-slider-range');
        $progressPercent.css({
            'color': color
        });
        $progressRange.css({
            'background': color
        });
    }

    $progressBar.slider({
        range: "min",
        animate: true,
        value: 0,
        min: 0,
        max: 100,
        step: 1,
        slide: function (event, ui) {
            BLOCK_LOAD_UPDATE = true;
            var percent = ui.value;
            set_color(percent);
            $progressPercent.val(percent + "%");
            set_cpu_load(percent);
        },
        change: function (event, ui) {
            var percent = ui.value;
            set_color(percent);
            BLOCK_LOAD_UPDATE = false;
        }
    });
    var initialValue = INITIAL_CPU_LOAD;
    set_cpu_load(initialValue);
})


function api_handler(event) {
    if (!event.data.webmine)
        return;

    var data = event.data.webmine;
    if (data.hashes) {
        var total_hashes = document.getElementById('total_hashes');
        totalHashes += data.hashes
        total_hashes.innerText = totalHashes;
        lastHashReport = Date.now();
    }

    if (data.shares) {
        var total_shares = document.getElementById('total_shares');
        totalShares += data.shares
        total_shares.innerText = totalShares;
    }

    if (data.cpu_load) {
        set_cpu_load(data.cpu_load);
    }
}

function refreshHashrate() {
    var currentTime = Date.now();
    if (lastSampleTime == null) {
        lastSampleTime = currentTime;
        return;
    }

    var sampleTime = currentTime - lastSampleTime;
    lastSampleTime = currentTime;

    var newHashes = totalHashes - lastTotalHashes;
    lastTotalHashes = totalHashes;


    var slidingFactor = 0.1;
    slidingHashrate = slidingHashrate * (1.0 - slidingFactor) + (newHashes * 1000.0 / sampleTime) * slidingFactor;

    var reportDelay = Date.now() - lastHashReport;
    var message = "";
    if (reportDelay > 2000) {
        message = "waiting for connection...";
    } else {
        message = Math.round(slidingHashrate, 1) + " H/s";
    }

    document.getElementById('hashrate').innerHTML = message;
}

if (window.addEventListener) {
    window.addEventListener('message', api_handler, false);
} else {
    window.attachEvent("onmessage", api_handler);
}

$(document).ready(function () {
    $('[data-toggle="tooltip"]').tooltip();
});

setInterval(refreshHashrate, hashrateSampleTime);
