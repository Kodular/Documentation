# Amazon Interstitial

{>> Non-Visible component<<}

| Category | Requires | Version |
|:--------:|:-------:|:--------:|
|**Monetization > Advertising**|<span class="chip chip-any">API 21, Android 5.0 Lollipop</span>|<span class="chip chip-number">2</span>|

## Overview

An interstitial ad is a full-page ad. AdAmazonInterstitial component allows you to monetize your app. You must have a valid Amazon Application Key. If your application key is invalid, the ad will not display on the emulator or the device. Warning: Make sure you're in test mode during development to avoid being disabled for clicking your own ads.

??? example "Permissions"
    * [android.permission.ACCESS_FINE_LOCATION](https://developer.android.com/reference/android/Manifest.permission.html#ACCESS_FINE_LOCATION)
    * [android.permission.ACCESS_COARSE_LOCATION](https://developer.android.com/reference/android/Manifest.permission.html#ACCESS_COARSE_LOCATION)
    * [android.permission.INTERNET](https://developer.android.com/reference/android/Manifest.permission.html#INTERNET)
    * [android.permission.ACCESS_NETWORK_STATE](https://developer.android.com/reference/android/Manifest.permission.html#ACCESS_NETWORK_STATE)
    * [android.permission.ACCESS_WIFI_STATE](https://developer.android.com/reference/android/Manifest.permission.html#ACCESS_WIFI_STATE)

!!! info "Commission"
    **Type:** Fixed Rate
    **Value:** `9%`

## Events

### Ad Closed

Triggered when the close button of the interstitial ad is clicked. It's important to remember only one interstitial ad can be shown at a time. The previous ad has to be dismissed before a new ad can be shown.

<div class="block" ai2-block="event" not-rendered="true" value="%7B%22componentName%22:%20%22Amazon%20Interstitial%22,%20%22name%22:%20%22Ad%20Closed%22,%20%22param%22:%20%5B%5D%7D"></div>

### Ad Collapsed

After a user clicks on the close ad button on an expanded ad, this callback is called immediately after collapsing the ad. This callback can be used to do things like resume your app or restart audio.

<div class="block" ai2-block="event" not-rendered="true" value="%7B%22componentName%22:%20%22Amazon%20Interstitial%22,%20%22name%22:%20%22Ad%20Collapsed%22,%20%22param%22:%20%5B%5D%7D"></div>

### Ad Expanded

This callback is called each time an ad is successfully loaded. You can use this to log metrics on ad views and assist with initial integration. Detailed information about the ad that loaded can be obtained from the AdProperties object.

<div class="block" ai2-block="event" not-rendered="true" value="%7B%22componentName%22:%20%22Amazon%20Interstitial%22,%20%22name%22:%20%22Ad%20Expanded%22,%20%22param%22:%20%5B%5D%7D"></div>

### Ad Failed To Load

Whenever an ad fails to be retrieved, the event is called, returning the error message.

<div class="block" ai2-block="event" not-rendered="true" value="%7B%22componentName%22:%20%22Amazon%20Interstitial%22,%20%22name%22:%20%22Ad%20Failed%20To%20Load%22,%20%22param%22:%20%5B%22error%22,%20%22message%22%5D%7D"></div>

| Params | []() |
|--------|------|
|error|<span class="chip chip-text">Text</span>|
|message|<span class="chip chip-text">Text</span>|

### Ad Failed To Show

Called when an an attempt was made to display the ad, but the ad was not ready to display

<div class="block" ai2-block="event" not-rendered="true" value="%7B%22componentName%22:%20%22Amazon%20Interstitial%22,%20%22name%22:%20%22Ad%20Failed%20To%20Show%22,%20%22param%22:%20%5B%22message%22%5D%7D"></div>

| Params | []() |
|--------|------|
|message|<span class="chip chip-text">Text</span>|

### Ad Loaded

Triggered each time an ad is successfully loaded. But you don't have to display the ad right after it's loaded. For example, set a flag to true and then at a transition point, if flag=true, then display the ad.

<div class="block" ai2-block="event" not-rendered="true" value="%7B%22componentName%22:%20%22Amazon%20Interstitial%22,%20%22name%22:%20%22Ad%20Loaded%22,%20%22param%22:%20%5B%5D%7D"></div>

## Methods

### Load Ad

Loads a new ad.

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22Amazon%20Interstitial%22,%20%22name%22:%20%22Load%20Ad%22,%20%22output%22:%20false,%20%22param%22:%20%5B%5D%7D"></div>

### Show Interstitial Ad

It will show the Interstitial Ad

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22Amazon%20Interstitial%22,%20%22name%22:%20%22Show%20Interstitial%20Ad%22,%20%22output%22:%20false,%20%22param%22:%20%5B%5D%7D"></div>

## Properties

### Application Key

<span style="user-select: none; white-space:pre-wrap;"><span class="chip chip-text">Text</span> <span class="chip chip-text">Default: <i>ApplicationKey</i></span> :heavy_minus_sign: <span class="chip chip-rw">Write</span>  - <span class="chip chip-bd">Designer</span></span>

Enter Application Key. Go to Amazon Developer Portal and sign-in for your ApplicationKey

### Enable Debug

<span style="user-select: none; white-space:pre-wrap;"><span class="chip chip-boolean">Boolean</span> <span class="chip chip-boolean">Default: <i>True</i></span> :heavy_minus_sign: <span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span>  - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span></span>

Property for EnableDebug

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Amazon%20Interstitial%22,%20%22name%22:%20%22Enable%20Debug%22,%20%22getter%22:%20true%7D"></div>
<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Amazon%20Interstitial%22,%20%22name%22:%20%22Enable%20Debug%22,%20%22getter%22:%20false%7D"></div>

### Enable Geo Location Targeting

<span style="user-select: none; white-space:pre-wrap;"><span class="chip chip-boolean">Boolean</span> <span class="chip chip-boolean">Default: <i>True</i></span> :heavy_minus_sign: <span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span>  - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span></span>

If set to true, uses latitude and longitude coordinates as part of an ad request

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Amazon%20Interstitial%22,%20%22name%22:%20%22Enable%20Geo%20Location%20Targeting%22,%20%22getter%22:%20true%7D"></div>
<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Amazon%20Interstitial%22,%20%22name%22:%20%22Enable%20Geo%20Location%20Targeting%22,%20%22getter%22:%20false%7D"></div>

### Enable Testing

<span style="user-select: none; white-space:pre-wrap;"><span class="chip chip-boolean">Boolean</span> <span class="chip chip-boolean">Default: <i>True</i></span> :heavy_minus_sign: <span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span>  - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span></span>

For debugging / development purposes flag all ad requests as tests, but set to false for production builds

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Amazon%20Interstitial%22,%20%22name%22:%20%22Enable%20Testing%22,%20%22getter%22:%20true%7D"></div>
<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Amazon%20Interstitial%22,%20%22name%22:%20%22Enable%20Testing%22,%20%22getter%22:%20false%7D"></div>

### Interstitial Commission

:warning: ==**Deprecated**==

<span style="user-select: none; white-space:pre-wrap;"><span class="chip chip-text">Text</span> <span class="chip chip-text">Default: <i>unity</i></span> :heavy_minus_sign: <span class="chip chip-rw">Write</span>  - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span></span>

Sets the ad network used to take the commission.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Amazon%20Interstitial%22,%20%22name%22:%20%22Interstitial%20Commission%22,%20%22getter%22:%20false%7D"></div>

### Target Age

<span style="user-select: none; white-space:pre-wrap;"><span class="chip chip-number">Number</span> <span class="chip chip-number">Default: <i>0</i></span> :heavy_minus_sign: <span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span>  - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span></span>

You can pass age information to the Amazon Mobile Ad Network to target specific age groups. If set as 0, Age Targetting will not be used

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Amazon%20Interstitial%22,%20%22name%22:%20%22Target%20Age%22,%20%22getter%22:%20true%7D"></div>
<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Amazon%20Interstitial%22,%20%22name%22:%20%22Target%20Age%22,%20%22getter%22:%20false%7D"></div>
