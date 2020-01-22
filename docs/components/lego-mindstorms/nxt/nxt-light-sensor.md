# NXT Light Sensor

| Category | Version | Requires |
|:--------:|:-------:|:--------:|
|LEGO® MINDSTORMS® > Nxt|1|API 19 - Android 4.4 - 4.4.4 KitKat|

:mag: {>>Non-visible component<<}

## Overview

_A component that provides a high-level interface to a light sensor on a LEGO MINDSTORMS NXT robot._

## Events

### Above Range

[[Event('NXT Light Sensor', 'Above Range')]]

_Light level has gone above the range._

### Below Range

[[Event('NXT Light Sensor', 'Below Range')]]

_Light level has gone below the range._

### Within Range

[[Event('NXT Light Sensor', 'Within Range')]]

_Light level has gone within the range._

## Methods

### GetLightLevel

[[Method('NXT Light Sensor', 'GetLightLevel', true)]]

{>>Returns `number`<<}

_Returns the current light level as a value between 0 and 1023, or -1 if the light level can not be read._

## Properties

### Above Range Event Enabled

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('NXT Light Sensor', 'Above Range Event Enabled')]]

| Type | Default |
|:----:|:-------:|
|boolean|False|

_Whether the AboveRange event should fire when the light level goes above the TopOfRange._

### Below Range Event Enabled

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('NXT Light Sensor', 'Below Range Event Enabled')]]

| Type | Default |
|:----:|:-------:|
|boolean|False|

_Whether the BelowRange event should fire when the light level goes below the BottomOfRange._

### Bluetooth Client

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('NXT Light Sensor', 'Bluetooth Client')]]

| Type |
|:----:|
|component|

_The BluetoothClient component that should be used for communication._

### Bottom Of Range

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('NXT Light Sensor', 'Bottom Of Range')]]

| Type | Default |
|:----:|:-------:|
|number|256|

_The bottom of the range used for the BelowRange, WithinRange, and AboveRange events._

### Generate Light

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('NXT Light Sensor', 'Generate Light')]]

| Type | Default |
|:----:|:-------:|
|boolean|False|

_Whether the light sensor should generate light._

### Sensor Port

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('NXT Light Sensor', 'Sensor Port')]]

| Type | Default |
|:----:|:-------:|
|text|3|

_The sensor port that the sensor is connected to._

### Top Of Range

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('NXT Light Sensor', 'Top Of Range')]]

| Type | Default |
|:----:|:-------:|
|number|767|

_The top of the range used for the BelowRange, WithinRange, and AboveRange events._

### Within Range Event Enabled

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('NXT Light Sensor', 'Within Range Event Enabled')]]

| Type | Default |
|:----:|:-------:|
|boolean|False|

_Whether the WithinRange event should fire when the light level goes between the BottomOfRange and the TopOfRange._