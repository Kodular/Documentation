# Keyguard Manager

| Category | Version | Requires |
|:--------:|:-------:|:--------:|
|Utilities|1|API 19 - Android 4.4 - 4.4.4 KitKat|

:mag: {>>Non-visible component<<}

## Overview

_A non-visible component that authenticates the user using their preferred security option._

## Events

### On Authentication Request

[[Event('Keyguard Manager', 'On Authentication Request', 'isAuthenticated')]]

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |is Authenticated|`boolean`|


_Event to detect a authentication request was called._

### On Dissmiss Keyguard Request

[[Event('Keyguard Manager', 'On Dissmiss Keyguard Request', 'succeeded cancelled')]]

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |succeeded|`boolean`|
    |cancelled|`boolean`|


_Event to detect a dissmiss request keyguard was called._

## Methods

### RequestDismissKeyguard

[[Method('Keyguard Manager', 'RequestDismissKeyguard', false)]]

_If the device is currently locked, requests the Keyguard to be dismissed. Works only for devices with Android 8+_

### ShowAuthenticationScreen

[[Method('Keyguard Manager', 'ShowAuthenticationScreen', false)]]

_Create the Confirm Credentials screen. You can customize the title and description. Or we will provide a generic one for you if you leave it empty. Works only for devices with Android 5+_

### ShowWhenLocked

[[Method('Keyguard Manager', 'ShowWhenLocked', false, 'enabled')]]

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |enabled|`boolean`|


_Specifies whether an Activity should be shown on top of the lock screen whenever the lockscreen is up and the activity is resumed. Normally an activity will be transitioned to the stopped state if it is started while the lockscreen is up, but with this flag set the activity will remain in the resumed state visible on-top of the lock screen._

## Properties

### Description

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Keyguard Manager', 'Description')]]

| Type | Default |
|:----:|:-------:|
|text|Confirm your screen lock.|

_Returns the keyguard manager description text._

### Title

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Keyguard Manager', 'Title')]]

| Type | Default |
|:----:|:-------:|
|text|Unlock|

_Returns the keyguard manager title text._

### is Device Locked

:eyes: Read-Only property
[[PropertyBlockGetter('Keyguard Manager', 'is Device Locked')]]

| Type | Default |
|:----:|:-------:|
|boolean|None|

_Returns whether the device is currently locked and requires a PIN, pattern or password to unlock. Works only for devices with Android 5.1+_

### is Device Secure

:eyes: Read-Only property
[[PropertyBlockGetter('Keyguard Manager', 'is Device Secure')]]

| Type | Default |
|:----:|:-------:|
|boolean|None|

_Returns whether the device is secured with a PIN, pattern or password. Works only for devices with Android 6+_

### is Keyguard Locked

:eyes: Read-Only property
[[PropertyBlockGetter('Keyguard Manager', 'is Keyguard Locked')]]

| Type | Default |
|:----:|:-------:|
|boolean|None|

_Return whether the keyguard is currently locked._

### is Keyguard Secure

:eyes: Read-Only property
[[PropertyBlockGetter('Keyguard Manager', 'is Keyguard Secure')]]

| Type | Default |
|:----:|:-------:|
|boolean|None|

_Return whether the keyguard is secured by a PIN, pattern or password or a SIM card is currently locked._