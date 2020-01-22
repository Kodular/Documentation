# Audio

| Category | Version | Requires |
|:--------:|:-------:|:--------:|
|Utilities|3|API 19 - Android 4.4 - 4.4.4 KitKat|

:mag: {>>Non-visible component<<}

## Overview

_A non-visible component that manages the device''s audio settings._

## Events

### Error Occurred

[[Event('Audio', 'Error Occurred', 'errorMessage')]]

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |error Message|`text`|


_Event triggered when a error occurred._

## Methods

### IsSoundEffectsEnabled

[[Method('Audio', 'IsSoundEffectsEnabled', true, 'component')]]

{>>Returns `boolean`<<}

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |component|`component`|


_Returns true whether a component should have sound effects enabled for events such as clicking and touching._

### RingerModeNormal

[[Method('Audio', 'RingerModeNormal', false)]]

_Sets the ringer mode to "normal"._

### RingerModeSilent

[[Method('Audio', 'RingerModeSilent', false)]]

_Sets the ringer mode to "silent"._

### RingerModeVibrate

[[Method('Audio', 'RingerModeVibrate', false)]]

_Sets the ringer mode to "vibrate"._

### SoundEffectsEnabled

[[Method('Audio', 'SoundEffectsEnabled', false, 'component enabled')]]

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |component|`component`|
    |enabled|`boolean`|


_Set whether a component should have sound effects enabled for events such as clicking and touching._

## Properties

### Show UI

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Audio', 'Show UI')]]

| Type | Default |
|:----:|:-------:|
|boolean|False|

_If set to true you will see system ui._

### Get Audio Mode

:eyes: Read-Only property
[[PropertyBlockGetter('Audio', 'Get Audio Mode')]]

| Type | Default |
|:----:|:-------:|
|text|None|

_Returns the current audio mode as string. Possible returns are "NORMAL", "RINGTONE", "CALL" or "COMMUNICATION"._

### Volume Alarm

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Audio', 'Volume Alarm')]]

| Type | Default |
|:----:|:-------:|
|number|None|

_Returns the current volume index in percent._

### Volume Music

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Audio', 'Volume Music')]]

| Type | Default |
|:----:|:-------:|
|number|None|

_Returns the current volume index in percent._

### Volume Ring

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Audio', 'Volume Ring')]]

| Type | Default |
|:----:|:-------:|
|number|None|

_Returns the current volume index in percent._