# NXT Sound Sensor

| Category | Version | Requires |
|:--------:|:-------:|:--------:|
|LEGO® MINDSTORMS® > Nxt|1|API 19 - Android 4.4 - 4.4.4 KitKat|

:mag: {>>Non-visible component<<}

## Overview

_A component that provides a high-level interface to a sound sensor on a LEGO MINDSTORMS NXT robot._

## Events

### Above Range

[[Event('NXT Sound Sensor', 'Above Range')]]

_Sound level has gone above the range._

### Below Range

[[Event('NXT Sound Sensor', 'Below Range')]]

_Sound level has gone below the range._

### Within Range

[[Event('NXT Sound Sensor', 'Within Range')]]

_Sound level has gone within the range._

## Methods

### GetSoundLevel

[[Method('NXT Sound Sensor', 'GetSoundLevel', true)]]

{>>Returns `number`<<}

_Returns the current sound level as a value between 0 and 1023, or -1 if the sound level can not be read._

## Properties

### Above Range Event Enabled

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('NXT Sound Sensor', 'Above Range Event Enabled')]]

| Type | Default |
|:----:|:-------:|
|boolean|False|

_Whether the AboveRange event should fire when the sound level goes above the TopOfRange._

### Below Range Event Enabled

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('NXT Sound Sensor', 'Below Range Event Enabled')]]

| Type | Default |
|:----:|:-------:|
|boolean|False|

_Whether the BelowRange event should fire when the sound level goes below the BottomOfRange._

### Bluetooth Client

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('NXT Sound Sensor', 'Bluetooth Client')]]

| Type |
|:----:|
|component|

_The BluetoothClient component that should be used for communication._

### Bottom Of Range

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('NXT Sound Sensor', 'Bottom Of Range')]]

| Type | Default |
|:----:|:-------:|
|number|256|

_The bottom of the range used for the BelowRange, WithinRange, and AboveRange events._

### Sensor Port

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('NXT Sound Sensor', 'Sensor Port')]]

| Type | Default |
|:----:|:-------:|
|text|2|

_The sensor port that the sensor is connected to._

### Top Of Range

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('NXT Sound Sensor', 'Top Of Range')]]

| Type | Default |
|:----:|:-------:|
|number|767|

_The top of the range used for the BelowRange, WithinRange, and AboveRange events._

### Within Range Event Enabled

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('NXT Sound Sensor', 'Within Range Event Enabled')]]

| Type | Default |
|:----:|:-------:|
|boolean|False|

_Whether the WithinRange event should fire when the sound level goes between the BottomOfRange and the TopOfRange._