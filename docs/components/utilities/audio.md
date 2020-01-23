# Audio

| Category | Version | Requires |
|:--------:|:-------:|:--------:|
|Utilities|3|API 19, Android 4.4 - 4.4.4 KitKat|

:mag: {>>Non-visible component<<}

## Overview

A non-visible component that manages the device''s audio settings.

## Events

### Error Occurred

[[Event('Audio', 'Error Occurred', 'errorMessage')]]

??? tip "Parameters"

    | Name | Type |
    |------|------|
    |error Message|`text`|


Event triggered when a error occurred.

## Methods

### Is Sound Effects Enabled

_Block preview not available_

{>>Returns `boolean`<<}

??? tip "Parameters"

    | Name | Type |
    |------|------|
    |component|`component`|


Returns true whether a component should have sound effects enabled for events such as clicking and touching.

### Ringer Mode Normal

_Block preview not available_

Sets the ringer mode to "normal".

### Ringer Mode Silent

_Block preview not available_

Sets the ringer mode to "silent".

### Ringer Mode Vibrate

_Block preview not available_

Sets the ringer mode to "vibrate".

### Sound Effects Enabled

_Block preview not available_

??? tip "Parameters"

    | Name | Type |
    |------|------|
    |component|`component`|
    |enabled|`boolean`|


Set whether a component should have sound effects enabled for events such as clicking and touching.

## Properties

### Show UI

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Audio', 'Show UI')]]

| Type | Default |
|:----:|:-------:|
|boolean|False|

If set to true you will see system ui.

### Get Audio Mode

:eyes: Read-Only property
[[PropertyBlockGetter('Audio', 'Get Audio Mode')]]

| Type | Default |
|:----:|:-------:|
|text|None|

Returns the current audio mode as string. Possible returns are "NORMAL", "RINGTONE", "CALL" or "COMMUNICATION".

### Volume Alarm

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Audio', 'Volume Alarm')]]

| Type | Default |
|:----:|:-------:|
|number|None|

Returns the current volume index in percent.

### Volume Music

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Audio', 'Volume Music')]]

| Type | Default |
|:----:|:-------:|
|number|None|

Returns the current volume index in percent.

### Volume Ring

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Audio', 'Volume Ring')]]

| Type | Default |
|:----:|:-------:|
|number|None|

Returns the current volume index in percent.