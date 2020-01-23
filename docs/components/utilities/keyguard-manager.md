# Keyguard Manager

| Category | Version | Requires |
|:--------:|:-------:|:--------:|
|Utilities|1|API 19 - Android 4.4 - 4.4.4 KitKat|

:mag: {>>Non-visible component<<}

## Overview

A non-visible component that authenticates the user using their preferred security option.

## Events

### On Authentication Request

[[Event('Keyguard Manager', 'On Authentication Request', 'isAuthenticated')]]

??? tip "Parameters"

    | Name | Type |
    |------|------|
    |is Authenticated|`boolean`|


Event to detect a authentication request was called.

### On Dissmiss Keyguard Request

[[Event('Keyguard Manager', 'On Dissmiss Keyguard Request', 'succeeded', 'cancelled')]]

??? tip "Parameters"

    | Name | Type |
    |------|------|
    |succeeded|`boolean`|
    |cancelled|`boolean`|


Event to detect a dissmiss request keyguard was called.

## Methods

### RequestDismissKeyguard

[[Method('Keyguard Manager', 'RequestDismissKeyguard', false)]]

If the device is currently locked, requests the Keyguard to be dismissed. Works only for devices with Android 8+

### ShowAuthenticationScreen

[[Method('Keyguard Manager', 'ShowAuthenticationScreen', false)]]

Create the Confirm Credentials screen. You can customize the title and description. Or we will provide a generic one for you if you leave it empty. Works only for devices with Android 5+

### ShowWhenLocked

[[Method('Keyguard Manager', 'ShowWhenLocked', false, 'enabled')]]

??? tip "Parameters"

    | Name | Type |
    |------|------|
    |enabled|`boolean`|


Specifies whether an Activity should be shown on top of the lock screen whenever the lockscreen is up and the activity is resumed. Normally an activity will be transitioned to the stopped state if it is started while the lockscreen is up, but with this flag set the activity will remain in the resumed state visible on-top of the lock screen.

## Properties

### Description

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Keyguard Manager', 'Description')]]

| Type | Default |
|:----:|:-------:|
|text|Confirm your screen lock.|

Returns the keyguard manager description text.

### Title

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Keyguard Manager', 'Title')]]

| Type | Default |
|:----:|:-------:|
|text|Unlock|

Returns the keyguard manager title text.

### is Device Locked

:eyes: Read-Only property
[[PropertyBlockGetter('Keyguard Manager', 'is Device Locked')]]

| Type | Default |
|:----:|:-------:|
|boolean|None|

Returns whether the device is currently locked and requires a PIN, pattern or password to unlock. Works only for devices with Android 5.1+

### is Device Secure

:eyes: Read-Only property
[[PropertyBlockGetter('Keyguard Manager', 'is Device Secure')]]

| Type | Default |
|:----:|:-------:|
|boolean|None|

Returns whether the device is secured with a PIN, pattern or password. Works only for devices with Android 6+

### is Keyguard Locked

:eyes: Read-Only property
[[PropertyBlockGetter('Keyguard Manager', 'is Keyguard Locked')]]

| Type | Default |
|:----:|:-------:|
|boolean|None|

Return whether the keyguard is currently locked.

### is Keyguard Secure

:eyes: Read-Only property
[[PropertyBlockGetter('Keyguard Manager', 'is Keyguard Secure')]]

| Type | Default |
|:----:|:-------:|
|boolean|None|

Return whether the keyguard is secured by a PIN, pattern or password or a SIM card is currently locked.