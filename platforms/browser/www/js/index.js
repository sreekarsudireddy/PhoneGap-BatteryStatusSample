//initializing the default values of progress bar
var DEFAULTS = {
    backgroundColor: '#b3cef6',
    progressColor: '#4b86db',
    percent: 50,
    duration: 2000
};

//trigger init method when the device is ready
document.addEventListener('deviceready', init, false);

//adding battery events
function init() {
    //add event to track the battery state of the device
    window.addEventListener("batterylow", onBatteryLow, false);
    window.addEventListener("batterycritical", onBatteryCritical, false);
    window.addEventListener("batterystatus", onBatteryStatus, false);
}

//triggered when battery lever changed by 1% or charging plugged or unplugged
function onBatteryStatus(info) {

    //assigning the battery level to the default percent
    DEFAULTS.percent = info.level;

    //assigning default values
    DEFAULTS.backgroundColor = '#b3cef6';
    DEFAULTS.progressColor = '#4b86db';

    document.getElementById('low').style.display = "none";
    document.getElementById('critical').style.display = "none";

    //updating the DOM elements accordingly
    if (DEFAULTS.percent < 90 && DEFAULTS.percent > 15) {
        DEFAULTS.backgroundColor = '#f9d5b6';
        DEFAULTS.progressColor = '#ee730d';
    } else if (DEFAULTS.percent <= 15 && DEFAULTS.percent > 5) {
        DEFAULTS.backgroundColor = '#f9d5b6';
        DEFAULTS.progressColor = '#ee730d';
    } else if (DEFAULTS.percent <= 5) {
        DEFAULTS.backgroundColor = '#fbcece';
        DEFAULTS.progressColor = '#ee0d0d';
    }

    //reloading the progress bar
    $(".progress-bar").loading();
}

//triggered when battery status is low
function onBatteryLow(info) {
    document.getElementById('low').style.display = "block";
    document.getElementById('critical').style.display = "none";
}

//triggered when battery status is critical
function onBatteryCritical(info) {
    document.getElementById('low').style.display = "none";
    document.getElementById('critical').style.display = "block";
}