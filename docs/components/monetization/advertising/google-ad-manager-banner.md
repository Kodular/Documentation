# Google Ad Manager Banner

| Category | Requires | Version |
|:--------:|:-------:|:--------:|
|**Monetization > Advertising**|<span class="chip chip-any">API 21, Android 5.0 Lollipop</span>|<span class="chip chip-number">2</span>|

## Overview

A visible component that shows banner ads from multiple ad networks.  
Note\: This component is currently available on an invite-only basis. Click <a href\="https\://my.kodular.io/payments">here</a> for more information on how to request an invite.

??? example "Permissions"
    * [com.google.android.gms.permission.AD_ID](https://developer.android.com/reference/android/Manifest.permission.html#com.google.android.gms.permission.AD_ID)
    * [android.permission.INTERNET](https://developer.android.com/reference/android/Manifest.permission.html#INTERNET)
    * [android.permission.ACCESS_NETWORK_STATE](https://developer.android.com/reference/android/Manifest.permission.html#ACCESS_NETWORK_STATE)
    * [android.permission.ACCESS_ADSERVICES_AD_ID](https://developer.android.com/reference/android/Manifest.permission.html#ACCESS_ADSERVICES_AD_ID)
    * [android.permission.ACCESS_ADSERVICES_ATTRIBUTION](https://developer.android.com/reference/android/Manifest.permission.html#ACCESS_ADSERVICES_ATTRIBUTION)
    * [android.permission.ACCESS_ADSERVICES_TOPICS](https://developer.android.com/reference/android/Manifest.permission.html#ACCESS_ADSERVICES_TOPICS)

## Events

### Ad Clicked

Event raised when an ad was clicked

<div class="block" ai2-block="event" not-rendered="true" value="%7B%22componentName%22:%20%22Google%20Ad%20Manager%20Banner%22,%20%22name%22:%20%22Ad%20Clicked%22,%20%22param%22:%20%5B%5D%7D"></div>

### Ad Closed

Event raised when an ad was closed

<div class="block" ai2-block="event" not-rendered="true" value="%7B%22componentName%22:%20%22Google%20Ad%20Manager%20Banner%22,%20%22name%22:%20%22Ad%20Closed%22,%20%22param%22:%20%5B%5D%7D"></div>

### Ad Impression

Called when an ad impression has been recorded.

<div class="block" ai2-block="event" not-rendered="true" value="%7B%22componentName%22:%20%22Google%20Ad%20Manager%20Banner%22,%20%22name%22:%20%22Ad%20Impression%22,%20%22param%22:%20%5B%5D%7D"></div>

### Ad Loaded

Event raised when an ad was loaded successfully

<div class="block" ai2-block="event" not-rendered="true" value="%7B%22componentName%22:%20%22Google%20Ad%20Manager%20Banner%22,%20%22name%22:%20%22Ad%20Loaded%22,%20%22param%22:%20%5B%5D%7D"></div>

### Ad Opened

Event raised when an ad was opened

<div class="block" ai2-block="event" not-rendered="true" value="%7B%22componentName%22:%20%22Google%20Ad%20Manager%20Banner%22,%20%22name%22:%20%22Ad%20Opened%22,%20%22param%22:%20%5B%5D%7D"></div>

### Ad Swipe Gesture Clicked

Called when the user performs a swipe gesture click on the ad.

<div class="block" ai2-block="event" not-rendered="true" value="%7B%22componentName%22:%20%22Google%20Ad%20Manager%20Banner%22,%20%22name%22:%20%22Ad%20Swipe%20Gesture%20Clicked%22,%20%22param%22:%20%5B%5D%7D"></div>

### Failed To Load

Event raised when an ad could not be loaded

<div class="block" ai2-block="event" not-rendered="true" value="%7B%22componentName%22:%20%22Google%20Ad%20Manager%20Banner%22,%20%22name%22:%20%22Failed%20To%20Load%22,%20%22param%22:%20%5B%22error%20Message%22%5D%7D"></div>

| Params | []() |
|--------|------|
|error Message|<span class="chip chip-text">Text</span>|

## Methods

### Load

Loads a banner ad and displays it

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22Google%20Ad%20Manager%20Banner%22,%20%22name%22:%20%22Load%22,%20%22output%22:%20false,%20%22param%22:%20%5B%5D%7D"></div>

## Properties

### Ad Unit Id

<span style="user-select: none; white-space:pre-wrap;"><span class="chip chip-text">Text</span> :heavy_minus_sign: <span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span>  - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span></span>

Property for AdUnitId

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Google%20Ad%20Manager%20Banner%22,%20%22name%22:%20%22Ad%20Unit%20Id%22,%20%22getter%22:%20true%7D"></div>
<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Google%20Ad%20Manager%20Banner%22,%20%22name%22:%20%22Ad%20Unit%20Id%22,%20%22getter%22:%20false%7D"></div>

### eCPM Floor

<span style="user-select: none; white-space:pre-wrap;"><span class="chip chip-unknown">Com.google.appinventor.components.common.flooramountenum</span> <span class="chip chip-unknown">Default: <i>optimized</i></span> :heavy_minus_sign: <span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span>  - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span></span>

Set a minimum eCPM floor below which advertisers cannot bid for inventory. Use Optimized to let Google decide an eCPM floor.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Google%20Ad%20Manager%20Banner%22,%20%22name%22:%20%22eCPM%20Floor%22,%20%22getter%22:%20true%7D"></div>
<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Google%20Ad%20Manager%20Banner%22,%20%22name%22:%20%22eCPM%20Floor%22,%20%22getter%22:%20false%7D"></div>

### Test Mode

<span style="user-select: none; white-space:pre-wrap;"><span class="chip chip-boolean">Boolean</span> <span class="chip chip-boolean">Default: <i>False</i></span> :heavy_minus_sign: <span class="chip chip-rw">Write</span>  - <span class="chip chip-bd">Designer</span></span>

If enabled, test ads will be shown. This should be used during development to avoid generating false impressions. Always enabled when in companion.

### Visible

<span style="user-select: none; white-space:pre-wrap;"><span class="chip chip-boolean">Boolean</span> <span class="chip chip-boolean">Default: <i>True</i></span> :heavy_minus_sign: <span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span>  - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span></span>

Returns true iff the component is visible.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Google%20Ad%20Manager%20Banner%22,%20%22name%22:%20%22Visible%22,%20%22getter%22:%20true%7D"></div>
<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Google%20Ad%20Manager%20Banner%22,%20%22name%22:%20%22Visible%22,%20%22getter%22:%20false%7D"></div>
