# PhoneGap Battery Status Sample

Sample code for PhoneGap/Cordova battery status plugin(only android platform is included). Just clone and tweak it. :+1:

![](https://raw.githubusercontent.com/techdining/PhoneGap/master/battery/batteryfull.JPG) ![](https://raw.githubusercontent.com/techdining/PhoneGap/master/battery/batterylow.JPG)
![](https://raw.githubusercontent.com/techdining/PhoneGap/master/battery/batterycritical.JPG)

This plugin helps to get the events for device battery level.

There are three events
* batterystatus
* batterycritical
* batterylow

### batterystatus event
Fires when the battery charge percentage changes by at least 1 percent, or when the device is plugged in or unplugged. Returns an object containing battery status.

#### Example Code
```
window.addEventListener("batterystatus", onBatteryStatus, false);

function onBatteryStatus(status) {
    console.log("Level: " + status.level + " isPlugged: " + status.isPlugged);
}
```
### batterylow event
Fires when the battery charge percentage reaches the low charge threshold. This threshold value is device-specific. Returns an object containing battery status.

#### Example Code
```
window.addEventListener("batterylow", onBatteryLow, false);

function onBatteryLow(status) {
    alert("Battery Level Low " + status.level + "%");
}
```
### batterycritical event
Fires when the battery charge percentage reaches the critical charge threshold. This threshold value is device-specific. Returns an object containing battery status.

#### Example Code
```
window.addEventListener("batterycritical", onBatteryCritical, false);

function onBatteryCritical(status) {
    alert("Battery Level Critical " + status.level + "%\nRecharge Soon!");
}
```
