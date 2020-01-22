# Audio

| Category | Version | Requires |
|:--------:|:-------:|:--------:|
|Utilities|3|API 19 - Android 4.4 - 4.4.4 KitKat|

:mag: {>>Non-visible component<<}

## Overview

_A non-visible component that manages the device''s audio settings._

## Properties

### Show UI

<small>Available as Common Property</small>

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