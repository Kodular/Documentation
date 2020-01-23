# Keyguard Manager

| Category | Requires | Version |
|:--------:|:-------:|:--------:|
|Utilities|API 19, Android 4.4 - 4.4.4 KitKat|1|

:mag: {>>Non-visible component<<}

## Overview

A non-visible component that authenticates the user using their preferred security option.

## Events

### On Authentication Request

Event to detect a authentication request was called.

[[Event('Keyguard Manager', 'On Authentication Request', 'isAuthenticated')]]

| Params | []() |
|--------|------|
|is Authenticated|<span class="chip chip-boolean">Boolean</span>|


### On Dissmiss Keyguard Request

Event to detect a dissmiss request keyguard was called.

[[Event('Keyguard Manager', 'On Dissmiss Keyguard Request', 'succeeded', 'cancelled')]]

| Params | []() |
|--------|------|
|succeeded|<span class="chip chip-boolean">Boolean</span>|
|cancelled|<span class="chip chip-boolean">Boolean</span>|


## Methods

### Request Dismiss Keyguard

If the device is currently locked, requests the Keyguard to be dismissed. Works only for devices with Android 8+

[[Method('Keyguard Manager', 'Request Dismiss Keyguard', False)]]

### Show Authentication Screen

Create the Confirm Credentials screen. You can customize the title and description. Or we will provide a generic one for you if you leave it empty. Works only for devices with Android 5+

[[Method('Keyguard Manager', 'Show Authentication Screen', False)]]

### Show When Locked

Specifies whether an Activity should be shown on top of the lock screen whenever the lockscreen is up and the activity is resumed. Normally an activity will be transitioned to the stopped state if it is started while the lockscreen is up, but with this flag set the activity will remain in the resumed state visible on-top of the lock screen.

[[Method('Keyguard Manager', 'Show When Locked', False, 'enabled')]]

| Params | []() |
|--------|------|
|enabled|<span class="chip chip-boolean">Boolean</span>|


## Properties

### Description

<span class="chip chip-text">Text</span> <span class="chip chip-text">Default: <i>Confirm your screen lock.</i></span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span> 

Returns the keyguard manager description text.

[[PropertyBlockGetterAndSetter('Keyguard Manager', 'Description')]]

### Title

<span class="chip chip-text">Text</span> <span class="chip chip-text">Default: <i>Unlock</i></span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span> 

Returns the keyguard manager title text.

[[PropertyBlockGetterAndSetter('Keyguard Manager', 'Title')]]

### is Device Locked

<span class="chip chip-boolean">Boolean</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> - <span class="chip chip-bd">Blocks</span> 

Returns whether the device is currently locked and requires a PIN, pattern or password to unlock. Works only for devices with Android 5.1+

[[PropertyBlockGetter('Keyguard Manager', 'is Device Locked')]]

### is Device Secure

<span class="chip chip-boolean">Boolean</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> - <span class="chip chip-bd">Blocks</span> 

Returns whether the device is secured with a PIN, pattern or password. Works only for devices with Android 6+

[[PropertyBlockGetter('Keyguard Manager', 'is Device Secure')]]

### is Keyguard Locked

<span class="chip chip-boolean">Boolean</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> - <span class="chip chip-bd">Blocks</span> 

Return whether the keyguard is currently locked.

[[PropertyBlockGetter('Keyguard Manager', 'is Keyguard Locked')]]

### is Keyguard Secure

<span class="chip chip-boolean">Boolean</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> - <span class="chip chip-bd">Blocks</span> 

Return whether the keyguard is secured by a PIN, pattern or password or a SIM card is currently locked.

[[PropertyBlockGetter('Keyguard Manager', 'is Keyguard Secure')]]