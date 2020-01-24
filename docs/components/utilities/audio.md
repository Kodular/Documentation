# Audio

| Category | Requires | Version |
|:--------:|:-------:|:--------:|
|**Utilities**|<span class="chip chip-any">API 19, Android 4.4 - 4.4.4 KitKat</span>|<span class="chip chip-number">3</span>|

:mag: {>>Non-visible component<<}

## Overview

A non-visible component that manages the device''s audio settings.

??? example "Permissions"
    * [android.permission.MODIFY_AUDIO_SETTINGS](https://developer.android.com/reference/android/Manifest.permission.html#MODIFY_AUDIO_SETTINGS)


## Events

### Error Occurred

Event triggered when a error occurred.

[[Event('Audio', 'Error Occurred', 'errorMessage')]]

| Params | []() |
|--------|------|
|error Message|<span class="chip chip-text">Text</span>|


## Methods

### Is Sound Effects Enabled

<span class="chip chip-boolean">Returns: <i>Boolean</i></span> 

Returns true whether a component should have sound effects enabled for events such as clicking and touching.

[[Method('Audio', 'Is Sound Effects Enabled', True, 'component')]]

| Params | []() |
|--------|------|
|component|<span class="chip chip-component">Component</span>|


### Ringer Mode Normal

Sets the ringer mode to "normal".

[[Method('Audio', 'Ringer Mode Normal', False)]]

### Ringer Mode Silent

Sets the ringer mode to "silent".

[[Method('Audio', 'Ringer Mode Silent', False)]]

### Ringer Mode Vibrate

Sets the ringer mode to "vibrate".

[[Method('Audio', 'Ringer Mode Vibrate', False)]]

### Sound Effects Enabled

Set whether a component should have sound effects enabled for events such as clicking and touching.

[[Method('Audio', 'Sound Effects Enabled', False, 'component', 'enabled')]]

| Params | []() |
|--------|------|
|component|<span class="chip chip-component">Component</span>|
|enabled|<span class="chip chip-boolean">Boolean</span>|


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