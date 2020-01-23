# EV3 UI

| Category | Version | Requires |
|:--------:|:-------:|:--------:|
|LEGO® MINDSTORMS® > Ev3|1|API 19 - Android 4.4 - 4.4.4 KitKat|

:mag: {>>Non-visible component<<}

## Overview

A component that provides a high-level interface to a LEGO MINDSTORMS EV3 robot, with functions to draw graphs on EV3 screen.

## Methods

### DrawCircle

_Block preview not available_

??? tip "Parameters"

    | Name | Type |
    |------|------|
    |color|`number`|
    |x|`number`|
    |y|`number`|
    |radius|`number`|
    |fill|`boolean`|


Draw a circle on the screen.

### DrawIcon

_Block preview not available_

??? tip "Parameters"

    | Name | Type |
    |------|------|
    |color|`number`|
    |x|`number`|
    |y|`number`|
    |type|`number`|
    |no|`number`|


Draw a built-in icon on screen.

### DrawLine

_Block preview not available_

??? tip "Parameters"

    | Name | Type |
    |------|------|
    |color|`number`|
    |x1|`number`|
    |y1|`number`|
    |x2|`number`|
    |y2|`number`|


Draw a line on the screen.

### DrawPoint

_Block preview not available_

??? tip "Parameters"

    | Name | Type |
    |------|------|
    |color|`number`|
    |x|`number`|
    |y|`number`|


Draw a point on the screen.

### DrawRect

_Block preview not available_

??? tip "Parameters"

    | Name | Type |
    |------|------|
    |color|`number`|
    |x|`number`|
    |y|`number`|
    |width|`number`|
    |height|`number`|
    |fill|`boolean`|


Draw a rectangle on the screen.

### FillScreen

_Block preview not available_

??? tip "Parameters"

    | Name | Type |
    |------|------|
    |color|`number`|


Fill the screen with a color.

## Properties

### Bluetooth Client

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('EV3 UI', 'Bluetooth Client')]]

| Type |
|:----:|
|component|

The BluetoothClient component that should be used for communication.