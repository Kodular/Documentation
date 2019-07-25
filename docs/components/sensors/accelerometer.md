# Accelerometer

Non-visible component that can detect shaking and measure acceleration approximately in three dimensions using SI units (m/s2). The components are:

-   **xAccel**: 0 when the phone is at rest on a flat surface, positive when the phone is tilted to the right (i.e., its left side is raised), and negative when the phone is tilted to the left (i.e., its right size is raised).
-   **yAccel**: 0 when the phone is at rest on a flat surface, positive when its bottom is raised, and negative when its top is raised.
-   **zAccel**: Equal to -9.8 (earth's gravity in meters per second per second when the device is at rest parallel to the ground with the display facing up, 0 when perpendicular to the ground, and +9.8 when facing down. The value can also be affected by accelerating it with or against gravity.

### Properties

_`Available`_

_`Enabled`_

_`LegacyMode`_  (designer only)

Prior to the release that added this property the AccelerometerSensor component passed through sensor values directly as received from the Android system. However these values do not compensate for tablets that default to Landscape mode. Now, AccelerometerSensor detect Landscape mode tablets and perform the compensation. However if your project is already compensating for the change, you will now get incorrect results. Although our preferred solution is for you to update your project, you can also just set this property to “true” and our compensation code will be deactivated. Note: We recommend that you update your project as we may remove this property in a future release.

_`MinimumInterval`_

The minimum interval, in milliseconds, between phone shakes

_`Sensitivity`_

A number that encodes how sensitive the accelerometer is. The choices are: 1 = weak, 2 = moderate, 3 = strong.

_`XAccel`_

_`YAccel`_

_`ZAccel`_

### Events

_`AccelerationChanged(number xAccel, number yAccel, number zAccel)`_

Indicates the acceleration changed in the X, Y, and/or Z dimensions.

_`Shaking()`_

Indicates the device started being shaken or continues to be shaken.

### Methods

none
