# Animation Utilities

| Category | Version | Requires |
|:--------:|:-------:|:--------:|
|Utilities|1|API 19 - Android 4.4 - 4.4.4 KitKat|

:mag: {>>Non-visible component<<}

## Overview

A non-visible component with which other components can be animated.

## Events

### Error

[[Event('Animation Utilities', 'Error', 'errorCode', 'errorMessage', 'method')]]

??? tip "Parameters"

    | Name | Type |
    |------|------|
    |error Code|`number`|
    |error Message|`text`|
    |method|`text`|


This event is triggered when there was a error catched. Possible values for the error code and method: 1 'GetLeftPosition', 2 'GetTopPosition', 3 'GetRightPosition', 4 'GetBottomPosition', 5 'GetXPosition', 6 'GetYPosition', 7 'Rotation', 8 'BounceHorizontal', 9 'BounceVertical', 10 'OvershootHorizontal', 11 'OvershootVertical', 12 'Zoom'. The error message will return you the error reason.

## Methods

### BounceHorizontal

[[Method('Animation Utilities', 'BounceHorizontal', false, 'component startPosition endPosition duration')]]

??? tip "Parameters"

    | Name | Type |
    |------|------|
    |component|`component`|
    |start Position|`number`|
    |end Position|`number`|
    |duration|`number`|


Start a horizontal bounce animation. The duration is set in millisecond. Use as example for 1 second '1000'.

### BounceVertical

[[Method('Animation Utilities', 'BounceVertical', false, 'component startPosition endPosition duration')]]

??? tip "Parameters"

    | Name | Type |
    |------|------|
    |component|`component`|
    |start Position|`number`|
    |end Position|`number`|
    |duration|`number`|


Start a vertical bounce animation. The duration is set in millisecond. Use as example for 1 second '1000'.

### GetBottomPosition

[[Method('Animation Utilities', 'GetBottomPosition', true, 'component')]]

{>>Returns `number`<<}

??? tip "Parameters"

    | Name | Type |
    |------|------|
    |component|`component`|


Returns the bottom position of a component. It will return '-9999' if there was a error.

### GetLeftPosition

[[Method('Animation Utilities', 'GetLeftPosition', true, 'component')]]

{>>Returns `number`<<}

??? tip "Parameters"

    | Name | Type |
    |------|------|
    |component|`component`|


Returns the left position of a component. It will return '-9999' if there was a error.

### GetRightPosition

[[Method('Animation Utilities', 'GetRightPosition', true, 'component')]]

{>>Returns `number`<<}

??? tip "Parameters"

    | Name | Type |
    |------|------|
    |component|`component`|


Returns the right position of a component. It will return '-9999' if there was a error.

### GetTopPosition

[[Method('Animation Utilities', 'GetTopPosition', true, 'component')]]

{>>Returns `number`<<}

??? tip "Parameters"

    | Name | Type |
    |------|------|
    |component|`component`|


Returns the top position of a component. It will return '-9999' if there was a error.

### GetXPosition

[[Method('Animation Utilities', 'GetXPosition', true, 'component')]]

{>>Returns `number`<<}

??? tip "Parameters"

    | Name | Type |
    |------|------|
    |component|`component`|


Returns the x position of a component. It will return '-9999' if there was a error.

### GetYPosition

[[Method('Animation Utilities', 'GetYPosition', true, 'component')]]

{>>Returns `number`<<}

??? tip "Parameters"

    | Name | Type |
    |------|------|
    |component|`component`|


Returns the y position of a component. It will return '-9999' if there was a error.

### OvershootHorizontal

[[Method('Animation Utilities', 'OvershootHorizontal', false, 'component startPosition endPosition duration tension')]]

??? tip "Parameters"

    | Name | Type |
    |------|------|
    |component|`component`|
    |start Position|`number`|
    |end Position|`number`|
    |duration|`number`|
    |tension|`number`|


Start a horizontal overshoot animation. If 'tension' is set to 0 you will not see a overshoot animation. Then you will see just a simple deceleration animation. The duration is set in millisecond. Use as example for 1 second '1000'.

### OvershootVertical

[[Method('Animation Utilities', 'OvershootVertical', false, 'component startPosition endPosition duration tension')]]

??? tip "Parameters"

    | Name | Type |
    |------|------|
    |component|`component`|
    |start Position|`number`|
    |end Position|`number`|
    |duration|`number`|
    |tension|`number`|


Start a vertical overshoot animation. If 'tension' is set to 0 you will not see a overshoot animation. Then you will see just a simple deceleration animation. The duration is set in millisecond. Use as example for 1 second '1000'.

### Rotation

[[Method('Animation Utilities', 'Rotation', false, 'component rotationStartDegrees rotationEndDegrees duration')]]

??? tip "Parameters"

    | Name | Type |
    |------|------|
    |component|`component`|
    |rotation Start Degrees|`number`|
    |rotation End Degrees|`number`|
    |duration|`number`|


Start a rotation on any component. Use as example in 'rotation Start Degrees' 0, in 'rotation End Degrees' 360 and in 'duration' 300 (millisecond) to run a clockwise, 360 degress animation. You can also use negative numbers for the degress.

### Zoom

[[Method('Animation Utilities', 'Zoom', false, 'component startScale endScale duration')]]

??? tip "Parameters"

    | Name | Type |
    |------|------|
    |component|`component`|
    |start Scale|`number`|
    |end Scale|`number`|
    |duration|`number`|


Start a zoom animation.  'tension' is set to 0 you will not see a overshoot animation. Then you will see just a simple deceleration animation. The duration is set in millisecond. Use as example for 1 second '1000'.