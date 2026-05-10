# Biometric Prompt

{>> Non-Visible component<<}

| Category | Requires | Version |
|:--------:|:-------:|:--------:|
|**Sensors**|<span class="chip chip-any">API 21, Android 5.0 Lollipop</span>|<span class="chip chip-number">1</span>|

## Overview

A component that provides biometric authentication (fingerprint, face, iris) and device credential authentication (PIN, pattern, password). Requires Android 6 (API 23) or higher for device credentials and Android 9 (API 28) or higher for the unified biometric prompt UI.

??? example "Permissions"
    * [android.permission.USE_BIOMETRIC](https://developer.android.com/reference/android/Manifest.permission.html#USE_BIOMETRIC)
    * [android.permission.USE_FINGERPRINT](https://developer.android.com/reference/android/Manifest.permission.html#USE_FINGERPRINT)

## Events

### On Authentication Error

Triggered on a non-recoverable authentication error. The prompt is dismissed. Common error codes: 7 = too many attempts (temporary lockout), 9 = permanent lockout, 10 = user canceled, 11 = no biometrics enrolled, 12 = no biometric hardware.

<div class="block" ai2-block="event" not-rendered="true" value="%7B%22componentName%22:%20%22Biometric%20Prompt%22,%20%22name%22:%20%22On%20Authentication%20Error%22,%20%22param%22:%20%5B%22error%20Code%22,%20%22error%20Message%22%5D%7D"></div>

| Param | Type |
|--------|------|
|error Code|<span class="chip chip-number">Number</span>|
|error Message|<span class="chip chip-text">Text</span>|

### On Authentication Failed

Triggered when a biometric is recognized but does not match (e.g., wrong finger). The prompt stays open for retry. May fire multiple times.

<div class="block" ai2-block="event" not-rendered="true" value="%7B%22componentName%22:%20%22Biometric%20Prompt%22,%20%22name%22:%20%22On%20Authentication%20Failed%22,%20%22param%22:%20%5B%5D%7D"></div>

### On Authentication Succeeded

Triggered when biometric or device credential authentication succeeds.

<div class="block" ai2-block="event" not-rendered="true" value="%7B%22componentName%22:%20%22Biometric%20Prompt%22,%20%22name%22:%20%22On%20Authentication%20Succeeded%22,%20%22param%22:%20%5B%5D%7D"></div>

### On Negative Button Clicked

Triggered when the user taps the negative/cancel button (only in BiometricOnly mode). Use this to handle user-initiated cancellation.

<div class="block" ai2-block="event" not-rendered="true" value="%7B%22componentName%22:%20%22Biometric%20Prompt%22,%20%22name%22:%20%22On%20Negative%20Button%20Clicked%22,%20%22param%22:%20%5B%5D%7D"></div>

## Methods

### Authenticate

Starts authentication. Fires OnAuthenticationSucceeded, OnAuthenticationFailed, OnAuthenticationError, or OnNegativeButtonClicked based on the result.

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22Biometric%20Prompt%22,%20%22name%22:%20%22Authenticate%22,%20%22output%22:%20false,%20%22param%22:%20%5B%5D%7D"></div>

### Cancel Authentication

Cancels the current biometric authentication. Safe to call even if no authentication is in progress.

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22Biometric%20Prompt%22,%20%22name%22:%20%22Cancel%20Authentication%22,%20%22output%22:%20false,%20%22param%22:%20%5B%5D%7D"></div>

### Has Biometric Hardware

<span class="chip chip-boolean">Returns: <i>Boolean</i></span>

Returns true if the device has biometric hardware (fingerprint sensor, face sensor, etc.).

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22Biometric%20Prompt%22,%20%22name%22:%20%22Has%20Biometric%20Hardware%22,%20%22output%22:%20true,%20%22param%22:%20%5B%5D%7D"></div>

### Has Enrolled Biometrics

<span class="chip chip-boolean">Returns: <i>Boolean</i></span>

Returns true if at least one biometric (fingerprint, face, etc.) is enrolled on the device.

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22Biometric%20Prompt%22,%20%22name%22:%20%22Has%20Enrolled%20Biometrics%22,%20%22output%22:%20true,%20%22param%22:%20%5B%5D%7D"></div>

### Is Available

<span class="chip chip-boolean">Returns: <i>Boolean</i></span>

Returns true if authentication is available right now with the current AuthenticatorType setting. This is the recommended check before calling Authenticate.

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22Biometric%20Prompt%22,%20%22name%22:%20%22Is%20Available%22,%20%22output%22:%20true,%20%22param%22:%20%5B%5D%7D"></div>

## Properties

### Authenticator Type

<span style="user-select: none; white-space:pre-wrap;"><span class="chip chip-number">Number</span> <span class="chip chip-enum">AuthenticatorType</span> <span class="chip chip-number">Default: <i>BiometricOrDeviceCredential</i></span> :heavy_minus_sign: <span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span>  - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span></span>

Sets the type of authentication allowed. BiometricOnly = biometrics only, DeviceCredentialOnly = PIN/pattern/password, BiometricOrDeviceCredential = biometrics with PIN fallback.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Biometric%20Prompt%22,%20%22name%22:%20%22Authenticator%20Type%22,%20%22getter%22:%20true%7D"></div>
<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Biometric%20Prompt%22,%20%22name%22:%20%22Authenticator%20Type%22,%20%22getter%22:%20false%7D"></div>

| Option | Value |
|--------|------|
|BiometricOnly|1|
|DeviceCredentialOnly|2|
|BiometricOrDeviceCredential|3|

### Description

<span style="user-select: none; white-space:pre-wrap;"><span class="chip chip-text">Text</span> :heavy_minus_sign: <span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span>  - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span></span>

Sets the optional description displayed on the biometric prompt.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Biometric%20Prompt%22,%20%22name%22:%20%22Description%22,%20%22getter%22:%20true%7D"></div>
<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Biometric%20Prompt%22,%20%22name%22:%20%22Description%22,%20%22getter%22:%20false%7D"></div>

### Negative Button Text

<span style="user-select: none; white-space:pre-wrap;"><span class="chip chip-text">Text</span> <span class="chip chip-text">Default: <i>Cancel</i></span> :heavy_minus_sign: <span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span>  - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span></span>

Sets the text for the negative button on the biometric prompt. Only shown when AuthenticatorType is BiometricOnly. Ignored when device credentials are allowed.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Biometric%20Prompt%22,%20%22name%22:%20%22Negative%20Button%20Text%22,%20%22getter%22:%20true%7D"></div>
<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Biometric%20Prompt%22,%20%22name%22:%20%22Negative%20Button%20Text%22,%20%22getter%22:%20false%7D"></div>

### Subtitle

<span style="user-select: none; white-space:pre-wrap;"><span class="chip chip-text">Text</span> :heavy_minus_sign: <span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span>  - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span></span>

Sets the optional subtitle displayed on the biometric prompt.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Biometric%20Prompt%22,%20%22name%22:%20%22Subtitle%22,%20%22getter%22:%20true%7D"></div>
<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Biometric%20Prompt%22,%20%22name%22:%20%22Subtitle%22,%20%22getter%22:%20false%7D"></div>

### Title

<span style="user-select: none; white-space:pre-wrap;"><span class="chip chip-text">Text</span> <span class="chip chip-text">Default: <i>Verify your identity</i></span> :heavy_minus_sign: <span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span>  - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span></span>

Sets the title displayed on the biometric prompt.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Biometric%20Prompt%22,%20%22name%22:%20%22Title%22,%20%22getter%22:%20true%7D"></div>
<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Biometric%20Prompt%22,%20%22name%22:%20%22Title%22,%20%22getter%22:%20false%7D"></div>
