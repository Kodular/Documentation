# AppLovin Interstitial

{>> Non-Visible component<<}

| Category | Requires | Version |
|:--------:|:-------:|:--------:|
|**Monetization > Advertising**|<span class="chip chip-any">API 19, Android 4.4 - 4.4.4 KitKat</span>|<span class="chip chip-number">1</span>|

## Overview

A non-visible component to show ads from AppLovin.

??? example "Permissions"
    * [android.permission.INTERNET](https://developer.android.com/reference/android/Manifest.permission.html#INTERNET)
    * [android.permission.ACCESS_NETWORK_STATE](https://developer.android.com/reference/android/Manifest.permission.html#ACCESS_NETWORK_STATE)

## Events

### Ad Closed

Called when an ad was closed.

<div class="block" ai2-block="event" not-rendered="true" value="%7B%22componentName%22:%20%22AppLovin%20Interstitial%22,%20%22name%22:%20%22Ad%20Closed%22,%20%22param%22:%20%5B%5D%7D"></div>

### Ad Failed To Load

Called when an ad request failed to load. The message will display the error code and error message.

<div class="block" ai2-block="event" not-rendered="true" value="%7B%22componentName%22:%20%22AppLovin%20Interstitial%22,%20%22name%22:%20%22Ad%20Failed%20To%20Load%22,%20%22param%22:%20%5B%22error%20Code%22,%20%22error%20Message%22%5D%7D"></div>

| Params | []() |
|--------|------|
|error Code|<span class="chip chip-number">Number</span>|
|error Message|<span class="chip chip-text">Text</span>|

### Ad Loaded

Called when an ad is received.

<div class="block" ai2-block="event" not-rendered="true" value="%7B%22componentName%22:%20%22AppLovin%20Interstitial%22,%20%22name%22:%20%22Ad%20Loaded%22,%20%22param%22:%20%5B%5D%7D"></div>

### Ad Opened

Called when an ad was opened.

<div class="block" ai2-block="event" not-rendered="true" value="%7B%22componentName%22:%20%22AppLovin%20Interstitial%22,%20%22name%22:%20%22Ad%20Opened%22,%20%22param%22:%20%5B%5D%7D"></div>

### Ad Started

Called when an ad was started.

<div class="block" ai2-block="event" not-rendered="true" value="%7B%22componentName%22:%20%22AppLovin%20Interstitial%22,%20%22name%22:%20%22Ad%20Started%22,%20%22param%22:%20%5B%5D%7D"></div>

### Error

Called when an ad request failed. The message will display the reason for why the ad failed.

<div class="block" ai2-block="event" not-rendered="true" value="%7B%22componentName%22:%20%22AppLovin%20Interstitial%22,%20%22name%22:%20%22Error%22,%20%22param%22:%20%5B%22error%20Code%22,%20%22error%20Message%22%5D%7D"></div>

| Params | []() |
|--------|------|
|error Code|<span class="chip chip-number">Number</span>|
|error Message|<span class="chip chip-text">Text</span>|

## Methods

### Is European User

<span class="chip chip-boolean">Returns: <i>Boolean</i></span>

Returns true if the current app user is located in europe. If true you must ask the user as example in a dialog if he give his consent for personalized ads.

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22AppLovin%20Interstitial%22,%20%22name%22:%20%22Is%20European%20User%22,%20%22output%22:%20true,%20%22param%22:%20%5B%5D%7D"></div>

### Load Ad

Loads a new ad.

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22AppLovin%20Interstitial%22,%20%22name%22:%20%22Load%20Ad%22,%20%22output%22:%20false,%20%22param%22:%20%5B%5D%7D"></div>

### Show Ad

Shows an ad to the user.

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22AppLovin%20Interstitial%22,%20%22name%22:%20%22Show%20Ad%22,%20%22output%22:%20false,%20%22param%22:%20%5B%5D%7D"></div>

## Properties

### SDK Key

<span style="user-select: none; white-space:pre-wrap;"><span class="chip chip-text">Text</span> :heavy_minus_sign: <span class="chip chip-rw">Write</span>  - <span class="chip chip-bd">Designer</span></span>

### Test Mode

<span style="user-select: none; white-space:pre-wrap;"><span class="chip chip-boolean">Boolean</span> <span class="chip chip-boolean">Default: <i>False</i></span> :heavy_minus_sign: <span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span>  - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span></span>

If you want to test the component then that this property to true. Then you will receive test ads.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22AppLovin%20Interstitial%22,%20%22name%22:%20%22Test%20Mode%22,%20%22getter%22:%20true%7D"></div>
<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22AppLovin%20Interstitial%22,%20%22name%22:%20%22Test%20Mode%22,%20%22getter%22:%20false%7D"></div>

### User Consent

<span style="user-select: none; white-space:pre-wrap;"><span class="chip chip-boolean">Boolean</span> :heavy_minus_sign: <span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span>  - <span class="chip chip-bd">Blocks</span></span>

If set to true the user allowed the ad network to show personalized ads. You only need to request the consent from european users.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22AppLovin%20Interstitial%22,%20%22name%22:%20%22User%20Consent%22,%20%22getter%22:%20true%7D"></div>
<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22AppLovin%20Interstitial%22,%20%22name%22:%20%22User%20Consent%22,%20%22getter%22:%20false%7D"></div>
