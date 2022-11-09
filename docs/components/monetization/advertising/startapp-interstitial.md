# StartApp Interstitial

{>> Non-Visible component<<}

| Category | Requires | Version |
|:--------:|:-------:|:--------:|
|**Monetization > Advertising**|<span class="chip chip-any">API 21, Android 5.0 Lollipop</span>|<span class="chip chip-number">1</span>|

## Overview

A non-visible component that shows StartApp ads as full-screen advertisements.

??? example "Permissions"
    * [com.google.android.gms.permission.AD_ID](https://developer.android.com/reference/android/Manifest.permission.html#com.google.android.gms.permission.AD_ID)
    * [android.permission.INTERNET](https://developer.android.com/reference/android/Manifest.permission.html#INTERNET)
    * [android.permission.ACCESS_NETWORK_STATE](https://developer.android.com/reference/android/Manifest.permission.html#ACCESS_NETWORK_STATE)
    * [com.google.android.finsky.permission.BIND_GET_INSTALL_REFERRER_SERVICE](https://developer.android.com/reference/android/Manifest.permission.html#com.google.android.finsky.permission.BIND_GET_INSTALL_REFERRER_SERVICE)
    * [android.permission.ACCESS_WIFI_STATE](https://developer.android.com/reference/android/Manifest.permission.html#ACCESS_WIFI_STATE)
    * [android.permission.RECEIVE_BOOT_COMPLETED](https://developer.android.com/reference/android/Manifest.permission.html#RECEIVE_BOOT_COMPLETED)

!!! info "Commission"
    **Type:** Fixed Rate
    **Value:** `8%`

## Events

### Ad Clicked

Indicates that the user has clicked on the interstial ad

<div class="block" ai2-block="event" not-rendered="true" value="%7B%22componentName%22:%20%22StartApp%20Interstitial%22,%20%22name%22:%20%22Ad%20Clicked%22,%20%22param%22:%20%5B%5D%7D"></div>

### Ad Displayed

Indicates that an Ad is shown to the user.

<div class="block" ai2-block="event" not-rendered="true" value="%7B%22componentName%22:%20%22StartApp%20Interstitial%22,%20%22name%22:%20%22Ad%20Displayed%22,%20%22param%22:%20%5B%5D%7D"></div>

### Ad Failed To Load

Called when an ad request failed to load. The message will display the error code and error message.

<div class="block" ai2-block="event" not-rendered="true" value="%7B%22componentName%22:%20%22StartApp%20Interstitial%22,%20%22name%22:%20%22Ad%20Failed%20To%20Load%22,%20%22param%22:%20%5B%22error%20Code%22,%20%22error%20Message%22%5D%7D"></div>

| Params | []() |
|--------|------|
|error Code|<span class="chip chip-number">Number</span>|
|error Message|<span class="chip chip-text">Text</span>|

### Ad Failed To Show

Called when an an attempt was made to display the ad, but the ad was not ready to display.

<div class="block" ai2-block="event" not-rendered="true" value="%7B%22componentName%22:%20%22StartApp%20Interstitial%22,%20%22name%22:%20%22Ad%20Failed%20To%20Show%22,%20%22param%22:%20%5B%22error%20Message%22%5D%7D"></div>

| Params | []() |
|--------|------|
|error Message|<span class="chip chip-text">Text</span>|

### Ad Hidden

Indicates that an Ad which was shown to the user is now hidden.

<div class="block" ai2-block="event" not-rendered="true" value="%7B%22componentName%22:%20%22StartApp%20Interstitial%22,%20%22name%22:%20%22Ad%20Hidden%22,%20%22param%22:%20%5B%5D%7D"></div>

### On Failed To Receive Ad

Called when an ad request failed to load.

<div class="block" ai2-block="event" not-rendered="true" value="%7B%22componentName%22:%20%22StartApp%20Interstitial%22,%20%22name%22:%20%22On%20Failed%20To%20Receive%20Ad%22,%20%22param%22:%20%5B%22error%20Message%22%5D%7D"></div>

| Params | []() |
|--------|------|
|error Message|<span class="chip chip-text">Text</span>|

### On Receive Ad

Called when an ad request failed to load. The message will display the error code and error message.

<div class="block" ai2-block="event" not-rendered="true" value="%7B%22componentName%22:%20%22StartApp%20Interstitial%22,%20%22name%22:%20%22On%20Receive%20Ad%22,%20%22param%22:%20%5B%5D%7D"></div>

## Methods

### Load Ad

Load a new StartApp Interstitial ad.

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22StartApp%20Interstitial%22,%20%22name%22:%20%22Load%20Ad%22,%20%22output%22:%20false,%20%22param%22:%20%5B%5D%7D"></div>

### Show Interstitial Ad

It will show the Interstitial Ad

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22StartApp%20Interstitial%22,%20%22name%22:%20%22Show%20Interstitial%20Ad%22,%20%22output%22:%20false,%20%22param%22:%20%5B%5D%7D"></div>

## Properties

### App ID

<span style="user-select: none; white-space:pre-wrap;"><span class="chip chip-text">Text</span> :heavy_minus_sign: <span class="chip chip-rw">Write</span>  - <span class="chip chip-bd">Designer</span></span>

Property for AppId
