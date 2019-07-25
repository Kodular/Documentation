# Proximity Sensor

A sensor component that can measure the proximity of an object (in cm) relative to the view screen of a device. This sensor is typically used to determine whether a handset is being held up to a persons ear; i.e. lets you determine how far away an object is from a device. Many devices return the absolute distance, in cm, but some return only near and far values. In this case, the sensor usually reports its maximum range value in the far state and a lesser value in the near state. It reports the following value:

-   **Distance**: The distance from the object to the device

### Properties

_`Available`_

Reports whether or not the device has a proximity sensor

_`Enabled`_

If enabled, then device will listen for changes in proximity

_`KeepRunningWhenOnPause`_

If set to true, it will keep sensing for proximity changes even when the app is not visible

_`Distance`_

Returns the distance from the object to the device

_`MaximumRange`_

Reports the Maximum Range of the device's ProximitySensor.

### Events

_`ProximityChanged(number distance)`_

Called when distance (in cm) of the object to the device chang

