# EV3 UI

| Category | Version | Requires |
|:--------:|:-------:|:--------:|
|LEGO® MINDSTORMS® > Ev3|1|API 19, Android 4.4 - 4.4.4 KitKat|

:mag: {>>Non-visible component<<}

## Overview

A component that provides a high-level interface to a LEGO MINDSTORMS EV3 robot, with functions to draw graphs on EV3 screen.

## Methods

### Draw Circle

[[Method('EV3 UI', 'Draw Circle', False, 'color', 'x', 'y', 'radius', 'fill')]]

| Params | []() |
|--------|------|
|color|Number|
|x|Number|
|y|Number|
|radius|Number|
|fill|Boolean|


Draw a circle on the screen.

### Draw Icon

[[Method('EV3 UI', 'Draw Icon', False, 'color', 'x', 'y', 'type', 'no')]]

| Params | []() |
|--------|------|
|color|Number|
|x|Number|
|y|Number|
|type|Number|
|no|Number|


Draw a built-in icon on screen.

### Draw Line

[[Method('EV3 UI', 'Draw Line', False, 'color', 'x1', 'y1', 'x2', 'y2')]]

| Params | []() |
|--------|------|
|color|Number|
|x1|Number|
|y1|Number|
|x2|Number|
|y2|Number|


Draw a line on the screen.

### Draw Point

[[Method('EV3 UI', 'Draw Point', False, 'color', 'x', 'y')]]

| Params | []() |
|--------|------|
|color|Number|
|x|Number|
|y|Number|


Draw a point on the screen.

### Draw Rect

[[Method('EV3 UI', 'Draw Rect', False, 'color', 'x', 'y', 'width', 'height', 'fill')]]

| Params | []() |
|--------|------|
|color|Number|
|x|Number|
|y|Number|
|width|Number|
|height|Number|
|fill|Boolean|


Draw a rectangle on the screen.

### Fill Screen

[[Method('EV3 UI', 'Fill Screen', False, 'color')]]

| Params | []() |
|--------|------|
|color|Number|


Fill the screen with a color.

## Properties

### Bluetooth Client

<span class="chip chip-component">Component</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span> 

The BluetoothClient component that should be used for communication.

[[PropertyBlockGetterAndSetter('EV3 UI', 'Bluetooth Client')]]