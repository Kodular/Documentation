# Orientation Sensor

Use an orientation sensor component to determine the phone's spatial orientation.

An orientation sensor is a non-visible component that reports the following three values, in degrees:

-   **Roll** : 0 degree when the device is level, increasing to 90 degrees as the device is tilted up onto its left side, and decreasing to −90 degrees when the device is tilted up onto its right side.
-   **Pitch** : 0 degree when the device is level, increasing to 90 degrees as the device is tilted so its top is pointing down, then decreasing to 0 degree as it gets turned over. Similarly, as the device is tilted so its bottom points down, pitch decreases to −90 degrees, then increases to 0 degree as it gets turned all the way over.
-   **Azimuth** : 0 degree when the top of the device is pointing north, 90 degrees when it is pointing east, 180 degrees when it is pointing south, 270 degrees when it is pointing west, etc.

These measurements assume that the device itself is not moving.

### Properties

`Available`

Indicates whether the orientation sensor is present on the Android device.

`Enabled`

If set, the orientation sensor is enabled.

`Azimuth`

Returns the azimuth angle of the device.

`Pitch`

Returns the pitch angle of the device.

`Roll`

Returns the roll angle of the device.

`Magnitude`

Returns a number between 0 and 1 that indicates how much the device is tilted. It gives the magnitude of the force that would be felt by a ball rolling on the surface of the device.

`Angle`

Returns an angle that tells the direction in which the device is tiled. That is, it tells the direction of the force that would be felt by a ball rolling on the surface of the device.

### Events

`OrientationChanged(number azimuth, number pitch, number roll)`

Called when the orientation has changed.
