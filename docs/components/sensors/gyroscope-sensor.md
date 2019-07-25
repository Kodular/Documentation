# Gyroscope Sensor

Non-visible component that can measure angular velocity in three dimensions in units of degrees per second.

In order to function, the component must have its  `Enabled`  property set to True, and the device must have a gyroscope sensor.

### Properties

_`Available`_

Indicates whether a gyroscope sensor is available.

_`Enabled`_

If enabled, then sensor events will be generated and  _`XAngularVelocity`_,  _`YAngularVelocity`_, and  _`ZAngularVelocity`_  properties will have meaningful values.

_`XAngularVelocity`_

The angular velocity around the X axis, in degrees per second.

_`YAngularVelocity`_

The angular velocity around the Y axis, in degrees per second.

_`ZAngularVelocity`_

The angular velocity around the Z axis, in degrees per second.

### Events

_`GyroscopeChanged(number xAngularVelocity, number yAngularVelocity, number zAngularVelocity, number timestamp)`_

Indicates that the gyroscope sensor data has changed. The  `timestamp`  parameter is the time in nanoseconds at which the event occurred.

### Methods

none
