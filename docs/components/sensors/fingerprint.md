# Fingerprint

| Category | Requires | Version |
|:--------:|:-------:|:--------:|
|**Sensors**|<span class="chip chip-any">API 19, Android 4.4 - 4.4.4 KitKat</span>|<span class="chip chip-number">1</span>|

:mag: {>>Non-Visible component<<}

## Overview

A non-visible component that reads fingerprints using the device''s in-built fingerprint scanner.

??? example "Permissions"
    * [android.permission.USE_FINGERPRINT](https://developer.android.com/reference/android/Manifest.permission.html#USE_FINGERPRINT)

## Events

### On Authentication Error

Triggers when there is a Authentication Error

<div class="block" ai2-block="event" not-rendered="true" value="%7B%22componentName%22:%20%22Fingerprint%22,%20%22name%22:%20%22On%20Authentication%20Error%22,%20%22param%22:%20%5B%22error%20Id%22,%20%22message%22%5D%7D"></div>

| Params | []() |
|--------|------|
|error Id|<span class="chip chip-number">Number</span>|
|message|<span class="chip chip-text">Text</span>|

### On Authentication Failed

Triggers when the Authentication Failed

<div class="block" ai2-block="event" not-rendered="true" value="%7B%22componentName%22:%20%22Fingerprint%22,%20%22name%22:%20%22On%20Authentication%20Failed%22,%20%22param%22:%20%5B%5D%7D"></div>

### On Authentication Help

Triggers when there is a Authentication Help

<div class="block" ai2-block="event" not-rendered="true" value="%7B%22componentName%22:%20%22Fingerprint%22,%20%22name%22:%20%22On%20Authentication%20Help%22,%20%22param%22:%20%5B%22help%20Id%22,%20%22message%22%5D%7D"></div>

| Params | []() |
|--------|------|
|help Id|<span class="chip chip-number">Number</span>|
|message|<span class="chip chip-text">Text</span>|

### On Authentication Succeeded

Trigger when the Authentication Succeeded

<div class="block" ai2-block="event" not-rendered="true" value="%7B%22componentName%22:%20%22Fingerprint%22,%20%22name%22:%20%22On%20Authentication%20Succeeded%22,%20%22param%22:%20%5B%5D%7D"></div>

## Methods

### Authenticate

Authenticate the user with a Fingerprint scanner

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22Fingerprint%22,%20%22name%22:%20%22Authenticate%22,%20%22output%22:%20false,%20%22param%22:%20%5B%5D%7D"></div>

### Cancel Scan

Cancel the current Fingerprint Scan

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22Fingerprint%22,%20%22name%22:%20%22Cancel%20Scan%22,%20%22output%22:%20false,%20%22param%22:%20%5B%5D%7D"></div>

### Has Fingerprint Scanner

<span class="chip chip-boolean">Returns: <i>Boolean</i></span>

True if hardware is present and functional, false otherwise

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22Fingerprint%22,%20%22name%22:%20%22Has%20Fingerprint%20Scanner%22,%20%22output%22:%20true,%20%22param%22:%20%5B%5D%7D"></div>

### Has Fingers Added

<span class="chip chip-boolean">Returns: <i>Boolean</i></span>

True if at least one fingerprint is enrolled, false otherwise

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22Fingerprint%22,%20%22name%22:%20%22Has%20Fingers%20Added%22,%20%22output%22:%20true,%20%22param%22:%20%5B%5D%7D"></div>

## Properties

### Dialog Help Text

<span style="user-select: none; white-space:pre-wrap;"><span class="chip chip-text">Text</span> <span class="chip chip-text">Default: <i>Scan your finger</i></span> :heavy_minus_sign: <span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span>  - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span></span>

Sets the dialog help text

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Fingerprint%22,%20%22name%22:%20%22Dialog%20Help%20Text%22,%20%22getter%22:%20true%7D"></div>
<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Fingerprint%22,%20%22name%22:%20%22Dialog%20Help%20Text%22,%20%22getter%22:%20false%7D"></div>

### Dialog Title

<span style="user-select: none; white-space:pre-wrap;"><span class="chip chip-text">Text</span> <span class="chip chip-text">Default: <i>Sign in with your fingerprint</i></span> :heavy_minus_sign: <span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span>  - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span></span>

Sets the dialog title

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Fingerprint%22,%20%22name%22:%20%22Dialog%20Title%22,%20%22getter%22:%20true%7D"></div>
<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Fingerprint%22,%20%22name%22:%20%22Dialog%20Title%22,%20%22getter%22:%20false%7D"></div>

### Light Theme

<span style="user-select: none; white-space:pre-wrap;"><span class="chip chip-boolean">Boolean</span> <span class="chip chip-boolean">Default: <i>False</i></span> :heavy_minus_sign: <span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span>  - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span></span>

Sets the current theme

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Fingerprint%22,%20%22name%22:%20%22Light%20Theme%22,%20%22getter%22:%20true%7D"></div>
<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Fingerprint%22,%20%22name%22:%20%22Light%20Theme%22,%20%22getter%22:%20false%7D"></div>

### Use Dialog

<span style="user-select: none; white-space:pre-wrap;"><span class="chip chip-boolean">Boolean</span> <span class="chip chip-boolean">Default: <i>True</i></span> :heavy_minus_sign: <span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span>  - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span></span>

Whether to use a dialog

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Fingerprint%22,%20%22name%22:%20%22Use%20Dialog%22,%20%22getter%22:%20true%7D"></div>
<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Fingerprint%22,%20%22name%22:%20%22Use%20Dialog%22,%20%22getter%22:%20false%7D"></div>
