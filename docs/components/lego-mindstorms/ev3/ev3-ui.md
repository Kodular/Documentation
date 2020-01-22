# EV3 UI

| Category | Version | Requires |
|:--------:|:-------:|:--------:|
|LEGO® MINDSTORMS® > Ev3|1|API 19 - Android 4.4 - 4.4.4 KitKat|

:mag: {>>Non-visible component<<}

## Overview

_A component that provides a high-level interface to a LEGO MINDSTORMS EV3 robot, with functions to draw graphs on EV3 screen._

## Properties

### Bluetooth Client

<small>Available as Common Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('EV3 UI', 'Bluetooth Client')]]

| Type |
|:----:|
|component|

The BluetoothClient component that should be used for communication.

## Methods

### DrawCircle



[[Method('EV3 UI', 'DrawCircle', false, 'color x y radius fill')]]

**Parameters**

| Name | Type |
|------|------|
|color|`number`|
|x|`number`|
|y|`number`|
|radius|`number`|
|fill|`boolean`|


Draw a circle on the screen.

### DrawIcon



[[Method('EV3 UI', 'DrawIcon', false, 'color x y type no')]]

**Parameters**

| Name | Type |
|------|------|
|color|`number`|
|x|`number`|
|y|`number`|
|type|`number`|
|no|`number`|


Draw a built-in icon on screen.

### DrawLine



[[Method('EV3 UI', 'DrawLine', false, 'color x1 y1 x2 y2')]]

**Parameters**

| Name | Type |
|------|------|
|color|`number`|
|x1|`number`|
|y1|`number`|
|x2|`number`|
|y2|`number`|


Draw a line on the screen.

### DrawPoint



[[Method('EV3 UI', 'DrawPoint', false, 'color x y')]]

**Parameters**

| Name | Type |
|------|------|
|color|`number`|
|x|`number`|
|y|`number`|


Draw a point on the screen.

### DrawRect



[[Method('EV3 UI', 'DrawRect', false, 'color x y width height fill')]]

**Parameters**

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



[[Method('EV3 UI', 'FillScreen', false, 'color')]]

**Parameters**

| Name | Type |
|------|------|
|color|`number`|


Fill the screen with a color.