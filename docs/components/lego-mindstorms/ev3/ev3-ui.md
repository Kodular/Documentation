# EV3 UI

| Category | Requires | Version |
|:--------:|:-------:|:--------:|
|**LEGO® MINDSTORMS® > EV3**|<span class="chip chip-any">API 19, Android 4.4 - 4.4.4 KitKat</span>|<span class="chip chip-number">1</span>|

:mag: {>>Non-visible component<<}

## Overview

A component that provides a high-level interface to a LEGO MINDSTORMS EV3 robot, with functions to draw graphs on EV3 screen.

??? example "Permissions"
    * [android.permission.INTERNET](https://developer.android.com/reference/android/Manifest.permission.html#INTERNET)
    * [android.permission.READ_EXTERNAL_STORAGE](https://developer.android.com/reference/android/Manifest.permission.html#READ_EXTERNAL_STORAGE)
    * [android.permission.WRITE_EXTERNAL_STORAGE](https://developer.android.com/reference/android/Manifest.permission.html#WRITE_EXTERNAL_STORAGE)


## Methods

### Draw Circle

Draw a circle on the screen.

[[Method('EV3 UI', 'Draw Circle', False, 'color', 'x', 'y', 'radius', 'fill')]]

| Params | []() |
|--------|------|
|color|<span class="chip chip-number">Number</span>|
|x|<span class="chip chip-number">Number</span>|
|y|<span class="chip chip-number">Number</span>|
|radius|<span class="chip chip-number">Number</span>|
|fill|<span class="chip chip-boolean">Boolean</span>|


### Draw Icon

Draw a built-in icon on screen.

[[Method('EV3 UI', 'Draw Icon', False, 'color', 'x', 'y', 'type', 'no')]]

| Params | []() |
|--------|------|
|color|<span class="chip chip-number">Number</span>|
|x|<span class="chip chip-number">Number</span>|
|y|<span class="chip chip-number">Number</span>|
|type|<span class="chip chip-number">Number</span>|
|no|<span class="chip chip-number">Number</span>|


### Draw Line

Draw a line on the screen.

[[Method('EV3 UI', 'Draw Line', False, 'color', 'x1', 'y1', 'x2', 'y2')]]

| Params | []() |
|--------|------|
|color|<span class="chip chip-number">Number</span>|
|x1|<span class="chip chip-number">Number</span>|
|y1|<span class="chip chip-number">Number</span>|
|x2|<span class="chip chip-number">Number</span>|
|y2|<span class="chip chip-number">Number</span>|


### Draw Point

Draw a point on the screen.

[[Method('EV3 UI', 'Draw Point', False, 'color', 'x', 'y')]]

| Params | []() |
|--------|------|
|color|<span class="chip chip-number">Number</span>|
|x|<span class="chip chip-number">Number</span>|
|y|<span class="chip chip-number">Number</span>|


### Draw Rect

Draw a rectangle on the screen.

[[Method('EV3 UI', 'Draw Rect', False, 'color', 'x', 'y', 'width', 'height', 'fill')]]

| Params | []() |
|--------|------|
|color|<span class="chip chip-number">Number</span>|
|x|<span class="chip chip-number">Number</span>|
|y|<span class="chip chip-number">Number</span>|
|width|<span class="chip chip-number">Number</span>|
|height|<span class="chip chip-number">Number</span>|
|fill|<span class="chip chip-boolean">Boolean</span>|


### Fill Screen

Fill the screen with a color.

[[Method('EV3 UI', 'Fill Screen', False, 'color')]]

| Params | []() |
|--------|------|
|color|<span class="chip chip-number">Number</span>|


## Properties

### Bluetooth Client

<span class="chip chip-component">Component</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span> 

The BluetoothClient component that should be used for communication.

[[PropertyBlockGetterAndSetter('EV3 UI', 'Bluetooth Client')]]