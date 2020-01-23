# Audio

| Category | Requires | Version |
|:--------:|:-------:|:--------:|
|Utilities|API 19, Android 4.4 - 4.4.4 KitKat|3|

:mag: {>>Non-visible component<<}

## Overview

A non-visible component that manages the device''s audio settings.

## Events

### Error Occurred

[[Event('Audio', 'Error Occurred', 'errorMessage')]]

| Params | []() |
|--------|------|
|error Message|Text|


Event triggered when a error occurred.

## Methods

### Is Sound Effects Enabled

[[Method('Audio', 'Is Sound Effects Enabled', True, 'component')]]

{>>Returns `boolean`<<}

| Params | []() |
|--------|------|
|component|Component|


Returns true whether a component should have sound effects enabled for events such as clicking and touching.

### Ringer Mode Normal

[[Method('Audio', 'Ringer Mode Normal', False)]]

Sets the ringer mode to "normal".

### Ringer Mode Silent

[[Method('Audio', 'Ringer Mode Silent', False)]]

Sets the ringer mode to "silent".

### Ringer Mode Vibrate

[[Method('Audio', 'Ringer Mode Vibrate', False)]]

Sets the ringer mode to "vibrate".

### Sound Effects Enabled

[[Method('Audio', 'Sound Effects Enabled', False, 'component', 'enabled')]]

| Params | []() |
|--------|------|
|component|Component|
|enabled|Boolean|


Set whether a component should have sound effects enabled for events such as clicking and touching.

## Properties

### Show UI

<span class="chip chip-boolean">Boolean</span> <span class="chip chip-boolean">Default: <i>False</i></span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span> 

If set to true you will see system ui.

[[PropertyBlockGetterAndSetter('Audio', 'Show UI')]]

### Get Audio Mode

<span class="chip chip-text">Text</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> - <span class="chip chip-bd">Blocks</span> 

Returns the current audio mode as string. Possible returns are "NORMAL", "RINGTONE", "CALL" or "COMMUNICATION".

[[PropertyBlockGetter('Audio', 'Get Audio Mode')]]

### Volume Alarm

<span class="chip chip-number">Number</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Blocks</span> 

Returns the current volume index in percent.

[[PropertyBlockGetterAndSetter('Audio', 'Volume Alarm')]]

### Volume Music

<span class="chip chip-number">Number</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Blocks</span> 

Returns the current volume index in percent.

[[PropertyBlockGetterAndSetter('Audio', 'Volume Music')]]

### Volume Ring

<span class="chip chip-number">Number</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Blocks</span> 

Returns the current volume index in percent.

[[PropertyBlockGetterAndSetter('Audio', 'Volume Ring')]]