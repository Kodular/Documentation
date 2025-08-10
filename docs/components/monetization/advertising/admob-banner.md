# AdMob Banner

| Category | Requires | Version |
|:--------:|:-------:|:--------:|
|**Monetization > Advertising**|<span class="chip chip-any">API 21, Android 5.0 Lollipop</span>|<span class="chip chip-number">4</span>|

## Overview

A component for displaying banner advertisements from Google AdMob. Banner ads are rectangular image or text ads that occupy a spot within an app''s layout. They are designed to stay on screen while users are interacting with the app, typically anchored to the top or bottom of the screen. To use this component, you must provide a valid Ads App ID (inside Project settings &gt; Monetization &gt; Google Ads App ID) and Ad Unit ID from your AdMob account. It is recommended to use Test Mode during development to avoid generating invalid ad traffic.

??? example "Permissions"
    * [com.google.android.gms.permission.AD_ID](https://developer.android.com/reference/android/Manifest.permission.html#com.google.android.gms.permission.AD_ID)
    * [android.permission.INTERNET](https://developer.android.com/reference/android/Manifest.permission.html#INTERNET)
    * [android.permission.ACCESS_NETWORK_STATE](https://developer.android.com/reference/android/Manifest.permission.html#ACCESS_NETWORK_STATE)
    * [android.permission.ACCESS_ADSERVICES_AD_ID](https://developer.android.com/reference/android/Manifest.permission.html#ACCESS_ADSERVICES_AD_ID)
    * [android.permission.ACCESS_ADSERVICES_ATTRIBUTION](https://developer.android.com/reference/android/Manifest.permission.html#ACCESS_ADSERVICES_ATTRIBUTION)
    * [android.permission.ACCESS_ADSERVICES_TOPICS](https://developer.android.com/reference/android/Manifest.permission.html#ACCESS_ADSERVICES_TOPICS)

!!! info "Commission"
    **Type:** Fixed Rate
    **Value:** `7%`

## Events

### Ad Clicked

Called when the user clicks on the ad.

<div class="block" ai2-block="event" not-rendered="true" value="%7B%22componentName%22:%20%22AdMob%20Banner%22,%20%22name%22:%20%22Ad%20Clicked%22,%20%22param%22:%20%5B%5D%7D"></div>

### Ad Closed

Called when the ad is closed, and the user is returned to the app.

<div class="block" ai2-block="event" not-rendered="true" value="%7B%22componentName%22:%20%22AdMob%20Banner%22,%20%22name%22:%20%22Ad%20Closed%22,%20%22param%22:%20%5B%5D%7D"></div>

### Ad Failed To Load

Called when an ad request fails to load. The error code and message provide more details on the failure.

<div class="block" ai2-block="event" not-rendered="true" value="%7B%22componentName%22:%20%22AdMob%20Banner%22,%20%22name%22:%20%22Ad%20Failed%20To%20Load%22,%20%22param%22:%20%5B%22error%20Code%22,%20%22error%20Message%22%5D%7D"></div>

| Params | []() |
|--------|------|
|error Code|<span class="chip chip-number">Number</span>|
|error Message|<span class="chip chip-text">Text</span>|

### Ad Impression

Called when an ad impression has been recorded.

<div class="block" ai2-block="event" not-rendered="true" value="%7B%22componentName%22:%20%22AdMob%20Banner%22,%20%22name%22:%20%22Ad%20Impression%22,%20%22param%22:%20%5B%5D%7D"></div>

### Ad Loaded

Called when an ad has been successfully loaded.

<div class="block" ai2-block="event" not-rendered="true" value="%7B%22componentName%22:%20%22AdMob%20Banner%22,%20%22name%22:%20%22Ad%20Loaded%22,%20%22param%22:%20%5B%5D%7D"></div>

### Ad Opened

Called when the ad is displayed on the screen, covering the app's content.

<div class="block" ai2-block="event" not-rendered="true" value="%7B%22componentName%22:%20%22AdMob%20Banner%22,%20%22name%22:%20%22Ad%20Opened%22,%20%22param%22:%20%5B%5D%7D"></div>

### Ad Swipe Gesture Clicked

Called when the user performs a swipe gesture click on the ad.

<div class="block" ai2-block="event" not-rendered="true" value="%7B%22componentName%22:%20%22AdMob%20Banner%22,%20%22name%22:%20%22Ad%20Swipe%20Gesture%20Clicked%22,%20%22param%22:%20%5B%5D%7D"></div>

## Methods

### Load Ad

Initiates a request to load a new banner ad. This will not do anything if an ad is already loading or if ads are disabled.

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22AdMob%20Banner%22,%20%22name%22:%20%22Load%20Ad%22,%20%22output%22:%20false,%20%22param%22:%20%5B%5D%7D"></div>

## Properties

### Ad Enabled

<span style="user-select: none; white-space:pre-wrap;"><span class="chip chip-boolean">Boolean</span> <span class="chip chip-boolean">Default: <i>True</i></span> :heavy_minus_sign: <span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span>  - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span></span>

Specifies whether ads should be enabled. If set to false, no ads will be loaded.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22AdMob%20Banner%22,%20%22name%22:%20%22Ad%20Enabled%22,%20%22getter%22:%20true%7D"></div>
<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22AdMob%20Banner%22,%20%22name%22:%20%22Ad%20Enabled%22,%20%22getter%22:%20false%7D"></div>

### Ad Unit Id

<span style="user-select: none; white-space:pre-wrap;"><span class="chip chip-text">Text</span> :heavy_minus_sign: <span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span>  - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span></span>

The Ad Unit ID for this banner ad. It can be found in your AdMob account.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22AdMob%20Banner%22,%20%22name%22:%20%22Ad%20Unit%20Id%22,%20%22getter%22:%20true%7D"></div>
<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22AdMob%20Banner%22,%20%22name%22:%20%22Ad%20Unit%20Id%22,%20%22getter%22:%20false%7D"></div>

### Test Mode

<span style="user-select: none; white-space:pre-wrap;"><span class="chip chip-boolean">Boolean</span> <span class="chip chip-boolean">Default: <i>False</i></span> :heavy_minus_sign: <span class="chip chip-rw">Write</span>  - <span class="chip chip-bd">Designer</span></span>

If enabled, test ads will be shown. This should be used during development to avoid generating false impressions. Always enabled when in companion.

### Visible

<span style="user-select: none; white-space:pre-wrap;"><span class="chip chip-boolean">Boolean</span> <span class="chip chip-boolean">Default: <i>True</i></span> :heavy_minus_sign: <span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span>  - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span></span>

Returns true iff the component is visible.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22AdMob%20Banner%22,%20%22name%22:%20%22Visible%22,%20%22getter%22:%20true%7D"></div>
<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22AdMob%20Banner%22,%20%22name%22:%20%22Visible%22,%20%22getter%22:%20false%7D"></div>
