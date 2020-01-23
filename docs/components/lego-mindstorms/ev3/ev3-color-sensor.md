# EV3 Color Sensor

| Category | Version | Requires |
|:--------:|:-------:|:--------:|
|LEGO® MINDSTORMS® > Ev3|1|API 19, Android 4.4 - 4.4.4 KitKat|

:mag: {>>Non-visible component<<}

## Overview

A component that provides a high-level interface to a color sensor on a LEGO MINDSTORMS EV3 robot.

## Events

### Above Range

[[Event('EV3 Color Sensor', 'Above Range')]]

Light level has gone above the range.

### Below Range

[[Event('EV3 Color Sensor', 'Below Range')]]

Light level has gone below the range.

### Color Changed

[[Event('EV3 Color Sensor', 'Color Changed', 'colorCode', 'colorName')]]

??? tip "Parameters"

    | Name | Type |
    |------|------|
    |color Code|`number`|
    |color Name|`text`|


Called when the detected color has changed. The ColorChanged event will occur if the Mode property is set to "color" and the ColorChangedEventEnabled property is set to True.

### Within Range

[[Event('EV3 Color Sensor', 'Within Range')]]

Light level has gone within the range.

## Methods

### Get Color Code

_Block preview not available_

{>>Returns `number`<<}

It returns the color code from 0 to 7 corresponding to no color, black, blue, green, yellow, red, white and brown.

### Get Color Name

_Block preview not available_

{>>Returns `text`<<}

Return the color name in one of "No Color", "Black", "Blue", "Green", "Yellow", "Red", "White", "Brown".

### Get Light Level

_Block preview not available_

{>>Returns `number`<<}

It returns the light level in percentage, or -1 when the light level cannot be read.

### Set Ambient Mode

_Block preview not available_

Make the sensor read the light level without reflected light.

### Set Color Mode

_Block preview not available_

Enter the color detection mode.

### Set Reflected Mode

_Block preview not available_

Make the sensor read the light level with reflected light.

## Properties

### Above Range Event Enabled

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('EV3 Color Sensor', 'Above Range Event Enabled')]]

| Type | Default |
|:----:|:-------:|
|boolean|False|

Whether the AboveRange event should fire when the light level goes above the TopOfRange.

### Below Range Event Enabled

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('EV3 Color Sensor', 'Below Range Event Enabled')]]

| Type | Default |
|:----:|:-------:|
|boolean|False|

Whether the BelowRange event should fire when the light level goes below the BottomOfRange.

### Bluetooth Client

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('EV3 Color Sensor', 'Bluetooth Client')]]

| Type |
|:----:|
|component|

The BluetoothClient component that should be used for communication.

### Bottom Of Range

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('EV3 Color Sensor', 'Bottom Of Range')]]

| Type | Default |
|:----:|:-------:|
|number|30|

The bottom of the range used for the BelowRange, WithinRange, and AboveRange events.

### Color Changed Event Enabled

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('EV3 Color Sensor', 'Color Changed Event Enabled')]]

| Type | Default |
|:----:|:-------:|
|boolean|False|

Whether the ColorChanged event should fire when the Mode property is set to "color" and the detected color changes.

### Mode

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('EV3 Color Sensor', 'Mode')]]

| Type | Default |
|:----:|:-------:|
|text|reflected|

Specifies the mode of the sensor.

### Sensor Port

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('EV3 Color Sensor', 'Sensor Port')]]

| Type | Default |
|:----:|:-------:|
|text|1|

The sensor port that the sensor is connected to.

### Top Of Range

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('EV3 Color Sensor', 'Top Of Range')]]

| Type | Default |
|:----:|:-------:|
|number|60|

The top of the range used for the BelowRange, WithinRange, and AboveRange events.

### Within Range Event Enabled

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('EV3 Color Sensor', 'Within Range Event Enabled')]]

| Type | Default |
|:----:|:-------:|
|boolean|False|

Whether the WithinRange event should fire when the light level goes between the BottomOfRange and the TopOfRange.