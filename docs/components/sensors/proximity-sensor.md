
# Proximity Sensor


## Overview
A sensor component that can measure the proximity of an object (in cm) relative to the view screen of a device. This sensor is typically used to determine whether a handset is being held up to a persons ear; i.e. lets you determine how far away an object is from a device. Many devices return the absolute distance, in cm, but some return only near and far values. In this case, the sensor usually reports its maximum range value in the far state and a lesser value in the near state. It reports the 
following value:

-   **Distance**: The distance from the object to the device.

## Properties

### Enabled
![image](url)
_**(**  Getter + Setter  **)**_
_`Type: Boolean`_

If enabled, then device will listen for changes in proximity.

### KeepRunningWhenOnPause
![image](url)
_**(**  Getter + Setter  **)**_
_`Type: Boolean`_

If set to true, it will keep sensing for proximity changes even when the app is not visible.

### Disatance
![image](url)
_**(**  Getter **)**_
_`Type: Number`_


Returns the distance from the object to the device.

### MaximumRange
![image](url)
_**(**  Getter **)**_


Reports the Maximum Range of the device's ProximitySensor.

### Available
![image](url)
_**(**  Getter **)**_
_`Type: Boolean`_

Reports whether or not the device has a proximity sensor.

## Events
![image](url) 

### Proximity Changed (distance)
_**(**  None  **)**_

Called when distance (in cm) of the object to the device changes.

