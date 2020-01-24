# Keyguard Manager

| Category | Requires | Version |
|:--------:|:-------:|:--------:|
|**Utilities**|<span class="chip chip-any">API 19, Android 4.4 - 4.4.4 KitKat</span>|<span class="chip chip-number">1</span>|

:mag: {>>Non-visible component<<}

## Overview

A non-visible component that authenticates the user using their preferred security option.

??? example "Permissions"
    * [android.permission.DISABLE_KEYGUARD](https://developer.android.com/reference/android/Manifest.permission.html#DISABLE_KEYGUARD)


## Events

### On Authentication Request

Event to detect a authentication request was called.

<div class="block" ai2-block="event" not-rendered="true" value="%7B%22componentName%22:%20%22Keyguard%20Manager%22,%20%22name%22:%20%22On%20Authentication%20Request%22,%20%22params%22:%20%5B%22is%20Authenticated%22%5D%7D"></div>


| Params | []() |
|--------|------|
|is Authenticated|<span class="chip chip-boolean">Boolean</span>|


### On Dissmiss Keyguard Request

Event to detect a dissmiss request keyguard was called.

<div class="block" ai2-block="event" not-rendered="true" value="%7B%22componentName%22:%20%22Keyguard%20Manager%22,%20%22name%22:%20%22On%20Dissmiss%20Keyguard%20Request%22,%20%22params%22:%20%5B%22succeeded%22,%20%22cancelled%22%5D%7D"></div>


| Params | []() |
|--------|------|
|succeeded|<span class="chip chip-boolean">Boolean</span>|
|cancelled|<span class="chip chip-boolean">Boolean</span>|


## Methods

### Request Dismiss Keyguard

If the device is currently locked, requests the Keyguard to be dismissed. Works only for devices with Android 8+

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22Keyguard%20Manager%22,%20%22name%22:%20%22Request%20Dismiss%20Keyguard%22,%20%22output%22:%20false,%20%22params%22:%20%5B%5D%7D"></div>


### Show Authentication Screen

Create the Confirm Credentials screen. You can customize the title and description. Or we will provide a generic one for you if you leave it empty. Works only for devices with Android 5+

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22Keyguard%20Manager%22,%20%22name%22:%20%22Show%20Authentication%20Screen%22,%20%22output%22:%20false,%20%22params%22:%20%5B%5D%7D"></div>


### Show When Locked

Specifies whether an Activity should be shown on top of the lock screen whenever the lockscreen is up and the activity is resumed. Normally an activity will be transitioned to the stopped state if it is started while the lockscreen is up, but with this flag set the activity will remain in the resumed state visible on-top of the lock screen.

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22Keyguard%20Manager%22,%20%22name%22:%20%22Show%20When%20Locked%22,%20%22output%22:%20false,%20%22params%22:%20%5B%22enabled%22%5D%7D"></div>


| Params | []() |
|--------|------|
|enabled|<span class="chip chip-boolean">Boolean</span>|


## Properties

### Description

<span class="chip chip-text">Text</span> <span class="chip chip-text">Default: <i>Confirm your screen lock.</i></span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span> 

Returns the keyguard manager description text.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Keyguard%20Manager%22,%20%22name%22:%20%22Description%22,%20%22getter%22:%20true%7D"></div>
<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Keyguard%20Manager%22,%20%22name%22:%20%22Description%22,%20%22getter%22:%20false%7D"></div>


### Title

<span class="chip chip-text">Text</span> <span class="chip chip-text">Default: <i>Unlock</i></span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span> 

Returns the keyguard manager title text.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Keyguard%20Manager%22,%20%22name%22:%20%22Title%22,%20%22getter%22:%20true%7D"></div>
<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Keyguard%20Manager%22,%20%22name%22:%20%22Title%22,%20%22getter%22:%20false%7D"></div>


### is Device Locked

<span class="chip chip-boolean">Boolean</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> - <span class="chip chip-bd">Blocks</span> 

Returns whether the device is currently locked and requires a PIN, pattern or password to unlock. Works only for devices with Android 5.1+

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Keyguard%20Manager%22,%20%22name%22:%20%22is%20Device%20Locked%22,%20%22getter%22:%20true%7D"></div>


### is Device Secure

<span class="chip chip-boolean">Boolean</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> - <span class="chip chip-bd">Blocks</span> 

Returns whether the device is secured with a PIN, pattern or password. Works only for devices with Android 6+

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Keyguard%20Manager%22,%20%22name%22:%20%22is%20Device%20Secure%22,%20%22getter%22:%20true%7D"></div>


### is Keyguard Locked

<span class="chip chip-boolean">Boolean</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> - <span class="chip chip-bd">Blocks</span> 

Return whether the keyguard is currently locked.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Keyguard%20Manager%22,%20%22name%22:%20%22is%20Keyguard%20Locked%22,%20%22getter%22:%20true%7D"></div>


### is Keyguard Secure

<span class="chip chip-boolean">Boolean</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> - <span class="chip chip-bd">Blocks</span> 

Return whether the keyguard is secured by a PIN, pattern or password or a SIM card is currently locked.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Keyguard%20Manager%22,%20%22name%22:%20%22is%20Keyguard%20Secure%22,%20%22getter%22:%20true%7D"></div>
