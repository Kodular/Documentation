# AdMob Banner

| Category | Requires | Version |
|:--------:|:-------:|:--------:|
|**Monetization > Advertising**|<span class="chip chip-any">API 19, Android 4.4 - 4.4.4 KitKat</span>|<span class="chip chip-number">3</span>|

## Overview

A visible component that shows AdMob ads as static banners.

??? example "Permissions"
    * [android.permission.ACCESS_FINE_LOCATION](https://developer.android.com/reference/android/Manifest.permission.html#ACCESS_FINE_LOCATION)
    * [android.permission.ACCESS_COARSE_LOCATION](https://developer.android.com/reference/android/Manifest.permission.html#ACCESS_COARSE_LOCATION)
    * [android.permission.INTERNET](https://developer.android.com/reference/android/Manifest.permission.html#INTERNET)
    * [android.permission.ACCESS_NETWORK_STATE](https://developer.android.com/reference/android/Manifest.permission.html#ACCESS_NETWORK_STATE)

## Events

### Ad Closed

Called when an ad was closed.

<div class="block" ai2-block="event" not-rendered="true" value="%7B%22componentName%22:%20%22AdMob%20Banner%22,%20%22name%22:%20%22Ad%20Closed%22,%20%22param%22:%20%5B%5D%7D"></div>

### Ad Failed To Load

Called when an ad request failed to load. The message will display the error code and error message.

<div class="block" ai2-block="event" not-rendered="true" value="%7B%22componentName%22:%20%22AdMob%20Banner%22,%20%22name%22:%20%22Ad%20Failed%20To%20Load%22,%20%22param%22:%20%5B%22error%20Code%22,%20%22error%20Message%22%5D%7D"></div>

| Params | []() |
|--------|------|
|error Code|<span class="chip chip-number">Number</span>|
|error Message|<span class="chip chip-text">Text</span>|

### Ad Loaded

Called when an ad request was loaded.

<div class="block" ai2-block="event" not-rendered="true" value="%7B%22componentName%22:%20%22AdMob%20Banner%22,%20%22name%22:%20%22Ad%20Loaded%22,%20%22param%22:%20%5B%5D%7D"></div>

### Ad Opened

Called when an ad was opened.

<div class="block" ai2-block="event" not-rendered="true" value="%7B%22componentName%22:%20%22AdMob%20Banner%22,%20%22name%22:%20%22Ad%20Opened%22,%20%22param%22:%20%5B%5D%7D"></div>

### On Consent Changed

Event triggered when the consent was changed.

<div class="block" ai2-block="event" not-rendered="true" value="%7B%22componentName%22:%20%22AdMob%20Banner%22,%20%22name%22:%20%22On%20Consent%20Changed%22,%20%22param%22:%20%5B%22personalized%22%5D%7D"></div>

| Params | []() |
|--------|------|
|personalized|<span class="chip chip-boolean">Boolean</span>|

## Methods

### Load Ad

Load a new AdMob Banner ad.

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22AdMob%20Banner%22,%20%22name%22:%20%22Load%20Ad%22,%20%22output%22:%20false,%20%22param%22:%20%5B%5D%7D"></div>

### Revoke Consent

Deletes the user's consent. Useful if you want to test the consent dialog in development.

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22AdMob%20Banner%22,%20%22name%22:%20%22Revoke%20Consent%22,%20%22output%22:%20false,%20%22param%22:%20%5B%5D%7D"></div>

## Properties

### Ad Enabled

<span style="user-select: none; white-space:pre-wrap;"><span class="chip chip-boolean">Boolean</span> <span class="chip chip-boolean">Default: <i>True</i></span> :heavy_minus_sign: <span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span>  - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span></span>

This property must be set to true to receive ads.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22AdMob%20Banner%22,%20%22name%22:%20%22Ad%20Enabled%22,%20%22getter%22:%20true%7D"></div>
<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22AdMob%20Banner%22,%20%22name%22:%20%22Ad%20Enabled%22,%20%22getter%22:%20false%7D"></div>

### Ad Unit Id

<span style="user-select: none; white-space:pre-wrap;"><span class="chip chip-text">Text</span> <span class="chip chip-text">Default: <i>ca-app-pub-3940256099942544/6300978111</i></span> :heavy_minus_sign: <span class="chip chip-rw">Write</span>  - <span class="chip chip-bd">Designer</span></span>

Set Ad Unit ID

### Consent Development Mode

<span style="user-select: none; white-space:pre-wrap;"><span class="chip chip-boolean">Boolean</span> <span class="chip chip-boolean">Default: <i>False</i></span> :heavy_minus_sign: <span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span>  - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span></span>

If enabled you will see the consent dialog no matter if you are located in Europe or not. Please use this option only in development. If this setting is enabled ALL taken consents will not be saved.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22AdMob%20Banner%22,%20%22name%22:%20%22Consent%20Development%20Mode%22,%20%22getter%22:%20true%7D"></div>
<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22AdMob%20Banner%22,%20%22name%22:%20%22Consent%20Development%20Mode%22,%20%22getter%22:%20false%7D"></div>

### Consent Message

<span style="user-select: none; white-space:pre-wrap;"><span class="chip chip-text">Text</span> <span class="chip chip-text">Default: <i>Can we continue to use your data to tailor ads for you?</i></span> :heavy_minus_sign: <span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span>  - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span></span>

The message for the consent dialog.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22AdMob%20Banner%22,%20%22name%22:%20%22Consent%20Message%22,%20%22getter%22:%20true%7D"></div>
<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22AdMob%20Banner%22,%20%22name%22:%20%22Consent%20Message%22,%20%22getter%22:%20false%7D"></div>

### Consent Title

<span style="user-select: none; white-space:pre-wrap;"><span class="chip chip-text">Text</span> <span class="chip chip-text">Default: <i>Data Protection</i></span> :heavy_minus_sign: <span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span>  - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span></span>

The title for the consent dialog.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22AdMob%20Banner%22,%20%22name%22:%20%22Consent%20Title%22,%20%22getter%22:%20true%7D"></div>
<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22AdMob%20Banner%22,%20%22name%22:%20%22Consent%20Title%22,%20%22getter%22:%20false%7D"></div>

### Personalized Result

<span style="user-select: none; white-space:pre-wrap;"><span class="chip chip-boolean">Boolean</span> :heavy_minus_sign: <span class="chip chip-rw">Read</span>  - <span class="chip chip-bd">Blocks</span></span>

Returns the current personalized consent. If true user has consent to personalized ads.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22AdMob%20Banner%22,%20%22name%22:%20%22Personalized%20Result%22,%20%22getter%22:%20true%7D"></div>

### Test Mode

<span style="user-select: none; white-space:pre-wrap;"><span class="chip chip-boolean">Boolean</span> <span class="chip chip-boolean">Default: <i>False</i></span> :heavy_minus_sign: <span class="chip chip-rw">Write</span>  - <span class="chip chip-bd">Designer</span></span>

If you want to test the component then that this property to true. Then you will receive test ads.

### Visible

<span style="user-select: none; white-space:pre-wrap;"><span class="chip chip-boolean">Boolean</span> <span class="chip chip-boolean">Default: <i>True</i></span> :heavy_minus_sign: <span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span>  - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span></span>

Returns true iff the component is visible.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22AdMob%20Banner%22,%20%22name%22:%20%22Visible%22,%20%22getter%22:%20true%7D"></div>
<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22AdMob%20Banner%22,%20%22name%22:%20%22Visible%22,%20%22getter%22:%20false%7D"></div>
