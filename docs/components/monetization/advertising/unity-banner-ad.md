# Unity Banner Ad

| Category | Requires | Version |
|:--------:|:-------:|:--------:|
|**Monetization > Advertising**|<span class="chip chip-any">API 21, Android 5.0 Lollipop</span>|<span class="chip chip-number">1</span>|

## Overview

A visible component that displays Unity Ads banner advertisements.

??? example "Permissions"
    * [com.google.android.gms.permission.AD_ID](https://developer.android.com/reference/android/Manifest.permission.html#com.google.android.gms.permission.AD_ID)
    * [android.permission.INTERNET](https://developer.android.com/reference/android/Manifest.permission.html#INTERNET)
    * [android.permission.FOREGROUND_SERVICE](https://developer.android.com/reference/android/Manifest.permission.html#FOREGROUND_SERVICE)
    * [android.permission.ACCESS_NETWORK_STATE](https://developer.android.com/reference/android/Manifest.permission.html#ACCESS_NETWORK_STATE)
    * [android.permission.WAKE_LOCK](https://developer.android.com/reference/android/Manifest.permission.html#WAKE_LOCK)
    * [android.permission.ACCESS_ADSERVICES_ATTRIBUTION](https://developer.android.com/reference/android/Manifest.permission.html#ACCESS_ADSERVICES_ATTRIBUTION)
    * [android.permission.ACCESS_ADSERVICES_TOPICS](https://developer.android.com/reference/android/Manifest.permission.html#ACCESS_ADSERVICES_TOPICS)
    * [android.permission.RECEIVE_BOOT_COMPLETED](https://developer.android.com/reference/android/Manifest.permission.html#RECEIVE_BOOT_COMPLETED)

## Events

### Ad Clicked

Event raised when an ad was clicked.

<div class="block" ai2-block="event" not-rendered="true" value="%7B%22componentName%22:%20%22Unity%20Banner%20Ad%22,%20%22name%22:%20%22Ad%20Clicked%22,%20%22param%22:%20%5B%5D%7D"></div>

### Ad Loaded

Event raised when an ad was loaded successfully.

<div class="block" ai2-block="event" not-rendered="true" value="%7B%22componentName%22:%20%22Unity%20Banner%20Ad%22,%20%22name%22:%20%22Ad%20Loaded%22,%20%22param%22:%20%5B%5D%7D"></div>

### Failed To Load

Event raised when an ad could not be loaded.

<div class="block" ai2-block="event" not-rendered="true" value="%7B%22componentName%22:%20%22Unity%20Banner%20Ad%22,%20%22name%22:%20%22Failed%20To%20Load%22,%20%22param%22:%20%5B%22error%20Message%22%5D%7D"></div>

| Param | Type |
|--------|------|
|error Message|<span class="chip chip-text">Text</span>|

## Methods

### Load

Loads a banner ad and displays it.

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22Unity%20Banner%20Ad%22,%20%22name%22:%20%22Load%22,%20%22output%22:%20false,%20%22param%22:%20%5B%5D%7D"></div>

## Properties

### Ad Unit Id

<span style="user-select: none; white-space:pre-wrap;"><span class="chip chip-text">Text</span> :heavy_minus_sign: <span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span>  - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span></span>

Sets the ad unit ID (placement ID) for banner ads.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Unity%20Banner%20Ad%22,%20%22name%22:%20%22Ad%20Unit%20Id%22,%20%22getter%22:%20true%7D"></div>
<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Unity%20Banner%20Ad%22,%20%22name%22:%20%22Ad%20Unit%20Id%22,%20%22getter%22:%20false%7D"></div>

### Banner Size

<span style="user-select: none; white-space:pre-wrap;"><span class="chip chip-text">Text</span> <span class="chip chip-enum">UnityBannerAdSize</span> <span class="chip chip-text">Default: <i>standard</i></span> :heavy_minus_sign: <span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span>  - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span></span>

Sets the banner size. Options: standard (320x50), large (320x90), rectangle (300x250).

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Unity%20Banner%20Ad%22,%20%22name%22:%20%22Banner%20Size%22,%20%22getter%22:%20true%7D"></div>
<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Unity%20Banner%20Ad%22,%20%22name%22:%20%22Banner%20Size%22,%20%22getter%22:%20false%7D"></div>

| Option | Value |
|--------|------|
|Standard|standard|
|Large|large|
|Rectangle|rectangle|

### Test Mode

<span style="user-select: none; white-space:pre-wrap;"><span class="chip chip-boolean">Boolean</span> <span class="chip chip-boolean">Default: <i>False</i></span> :heavy_minus_sign: <span class="chip chip-rw">Write</span>  - <span class="chip chip-bd">Designer</span></span>

If enabled, test ads will be shown. Always enabled in companion.

### Visible

<span style="user-select: none; white-space:pre-wrap;"><span class="chip chip-boolean">Boolean</span> <span class="chip chip-boolean">Default: <i>True</i></span> :heavy_minus_sign: <span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span>  - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span></span>

Returns true iff the component is visible.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Unity%20Banner%20Ad%22,%20%22name%22:%20%22Visible%22,%20%22getter%22:%20true%7D"></div>
<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Unity%20Banner%20Ad%22,%20%22name%22:%20%22Visible%22,%20%22getter%22:%20false%7D"></div>
