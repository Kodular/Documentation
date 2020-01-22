# EV3 Color Sensor

| Category | Version | Requires |
|:--------:|:-------:|:--------:|
|LEGO® MINDSTORMS® > Ev3|1|API 19 - Android 4.4 - 4.4.4 KitKat|

:mag: {>>Non-visible component<<}

## Overview

_A component that provides a high-level interface to a color sensor on a LEGO MINDSTORMS EV3 robot._

## Events

### Above Range

[[Event('EV3 Color Sensor', 'Above Range')]]

_Light level has gone above the range._

### Below Range

[[Event('EV3 Color Sensor', 'Below Range')]]

_Light level has gone below the range._

### Color Changed

[[Event('EV3 Color Sensor', 'Color Changed', 'colorCode colorName')]]

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |color Code|`number`|
    |color Name|`text`|


_Called when the detected color has changed. The ColorChanged event will occur if the Mode property is set to "color" and the ColorChangedEventEnabled property is set to True._

### Within Range

[[Event('EV3 Color Sensor', 'Within Range')]]

_Light level has gone within the range._

## Methods

### GetColorCode

[[Method('EV3 Color Sensor', 'GetColorCode', true)]]

{>>Returns `number`<<}

_It returns the color code from 0 to 7 corresponding to no color, black, blue, green, yellow, red, white and brown._

### GetColorName

[[Method('EV3 Color Sensor', 'GetColorName', true)]]

{>>Returns `text`<<}

_Return the color name in one of "No Color", "Black", "Blue", "Green", "Yellow", "Red", "White", "Brown"._

### GetLightLevel

[[Method('EV3 Color Sensor', 'GetLightLevel', true)]]

{>>Returns `number`<<}

_It returns the light level in percentage, or -1 when the light level cannot be read._

### SetAmbientMode

[[Method('EV3 Color Sensor', 'SetAmbientMode', false)]]

_Make the sensor read the light level without reflected light._

### SetColorMode

[[Method('EV3 Color Sensor', 'SetColorMode', false)]]

_Enter the color detection mode._

### SetReflectedMode

[[Method('EV3 Color Sensor', 'SetReflectedMode', false)]]

_Make the sensor read the light level with reflected light._

## Properties

### Above Range Event Enabled

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('EV3 Color Sensor', 'Above Range Event Enabled')]]

| Type | Default |
|:----:|:-------:|
|boolean|False|

_Whether the AboveRange event should fire when the light level goes above the TopOfRange._

### Below Range Event Enabled

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('EV3 Color Sensor', 'Below Range Event Enabled')]]

| Type | Default |
|:----:|:-------:|
|boolean|False|

_Whether the BelowRange event should fire when the light level goes below the BottomOfRange._

### Bluetooth Client

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('EV3 Color Sensor', 'Bluetooth Client')]]

| Type |
|:----:|
|component|

_The BluetoothClient component that should be used for communication._

### Bottom Of Range

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('EV3 Color Sensor', 'Bottom Of Range')]]

| Type | Default |
|:----:|:-------:|
|number|30|

_The bottom of the range used for the BelowRange, WithinRange, and AboveRange events._

### Color Changed Event Enabled

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('EV3 Color Sensor', 'Color Changed Event Enabled')]]

| Type | Default |
|:----:|:-------:|
|boolean|False|

_Whether the ColorChanged event should fire when the Mode property is set to "color" and the detected color changes._

### Mode

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('EV3 Color Sensor', 'Mode')]]

| Type | Default |
|:----:|:-------:|
|text|reflected|

_Specifies the mode of the sensor._

### Sensor Port

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('EV3 Color Sensor', 'Sensor Port')]]

| Type | Default |
|:----:|:-------:|
|text|1|

_The sensor port that the sensor is connected to._

### Top Of Range

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('EV3 Color Sensor', 'Top Of Range')]]

| Type | Default |
|:----:|:-------:|
|number|60|

_The top of the range used for the BelowRange, WithinRange, and AboveRange events._

### Within Range Event Enabled

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('EV3 Color Sensor', 'Within Range Event Enabled')]]

| Type | Default |
|:----:|:-------:|
|boolean|False|

_Whether the WithinRange event should fire when the light level goes between the BottomOfRange and the TopOfRange._