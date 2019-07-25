# Pedometer

A Component that acts like a Pedometer. It senses motion via the Accerleromter and attempts to determine if a step has been taken. Using a configurable stride length, it can estimate the distance traveled as well.

### Properties

_`Distance`_

The approximate distance traveled in meters.

_`ElapsedTime`_

Time elapsed in milliseconds since the pedometer was started.

_`SimpleSteps`_

The number of simple steps taken since the pedometer has started.

_`StopDetectionTimeout`_

The duration in milliseconds of idleness (no steps detected) after which to go into a "stopped" state

_`StrideLength`_

Set the average stride length in meters.

_`WalkSteps`_

the number of walk steps taken since the pedometer has started.

### Events

_`SimpleStep(number simpleSteps, number distance)`_

This event is run when a raw step is detected

_`WalkStep(number walkSteps, number distance)`_

This event is run when a walking step is detected. A walking step is a step that appears to be involved in forward motion.

### Methods

_`Pause()`_

Pause counting of steps and distance.

_`Reset()`_

Resets the step counter, distance measure and time running.

_`Resume()`_

Resumes counting, synonym of Start.

_`Save()`_

Saves the pedometer state to the phone. Permits permits accumulation of steps and distance between invocations of an App that uses the pedometer. Different Apps will have their own saved state.

_`Start()`_

Start counting steps

_`Stop()`_

Stop counting steps
