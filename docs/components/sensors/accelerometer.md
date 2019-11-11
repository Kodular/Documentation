

# Accelerometer Sensor

## Overview

Accelerometer Sensor componenent is used to read the values from the Accelerometer sensor of the mobile device.
An [accelerometer sensor](https://en.wikipedia.org/wiki/Accelerometer) measures the acceleration force in m/s<sup>2</sup> that is applied to a device on all three physical axes (x, y, and z), including the force of gravity.  

This component can be used to detect some of the motions that occur on the physical device, such as shaking, tilting etc.


## Properties

### Available

_**\(** Getter only **\)**  **\(** Blocks only **\)**   
`Type: Boolean`_

[[PropertyBlockGetter('AccelerometerSensor', 'Available')]]

Gives whether the accelerometer sensor is available on the device or not.
Some devices may not have this sensor and thus, before working with this sensor, it is better
to check if the sensor is available for use using this block.


{!includes/enabled-property.md!}



### Minimum Interval

_**\(** Getter + Setter **\)**    
`Type: Number`_

[[PropertyBlockGetterAndSetter('AccelerometerSensor', 'MinimumInterval')]]

Specifies the minimum interval in milliseconds, between two consecutive phone shakes.(detected using [Shaking](#shaking) event)



### Sensitivity

_**\(** Getter + Setter **\)**    
`Type: Number`_

[[PropertyBlockGetterAndSetter('AccelerometerSensor', 'Sensitivity')]]

Specifies how sensitive the accelerometer sensor is when measuring the values.

Options              | []()
-------------------- | ------------
`1`                  | Weak sensitivity
`2`                  | Moderate sensitivity
`3`                  | Strong sensitivity



### XAccel

_**\(** Getter only **\)**  **\(** Blocks only **\)**   
`Type: Number`_

[[PropertyBlockGetter('AccelerometerSensor', 'XAccel')]]

Gives the acceleration along the x-axis.
See the description of [Acceleration Changed event](#acceleration-changed) for more info.


### YAccel

_**\(** Getter only **\)**  **\(** Blocks only **\)**   
`Type: Number`_

[[PropertyBlockGetter('AccelerometerSensor', 'YAccel')]]

Gives the acceleration along the y-axis.
See the description of [Acceleration Changed event](#acceleration-changed) for more info.


### ZAccel

_**\(** Getter only **\)**  **\(** Blocks only **\)**   
`Type: Number`_

[[PropertyBlockGetter('AccelerometerSensor', 'ZAccel')]]

Gives the acceleration along the z-axis.
See the description of [Acceleration Changed event](#acceleration-changed) for more info.


### Legacy Mode
**\(** Designer Only **\)**  
`Type: Boolean`

Prior to the release that added this property the AccelerometerSensor component passed through sensor values directly as received from the Android system. However these values do not compensate for tablets that default to Landscape mode.

With this property set to `false`, the values you receive in the compensated, corrected values.
It is recommeneded that you work with the property set to `false` in newer apps, as this was added only to keep the older projects backward-compatible.

## Methods

Accelerometer sensor component has no _Methods_.

## Events


### Acceleration Changed
_**\(**  Number `xAccel`  Number `yAccel`  Number `zAccel`  **\)**_

[[Event('AccelerometerSensor', 'AccelerationChanged' ,'xAccel','yAccel','zAccel')]]

Indicates the acceleration changed in the X, Y, and/or Z dimensions.

Params               | []()
-------------------- | ----------
`xAccel`             | **Number:** Gives the acceleration along x-axis. The value is 0 when the phone is at rest on a flat surface, positive when the phone is tilted to the right (i.e., its left side is raised), and negative when the phone is tilted to the left (i.e., its right size is raised).
`yAccel`             | **Number:** Gives the acceleration along x-axis. The value is 0 when the phone is at rest on a flat surface, positive when its bottom is raised, and negative when its top is raised.
`zAccel`             | **Number:** Gives the acceleration along x-axis.  The value is equal to -9.8 (earth's gravity in meters per second per second when the device is at rest parallel to the ground with the display facing up, 0 when perpendicular to the ground, and +9.8 when facing down. The value can also be affected by accelerating it with or against gravity.



### Shaking
_**\(**  None  **\)**_

[[Event('AccelerometerSensor', 'Shaking' )]]

Indicates the device started being shaken or continues to be shaken.
