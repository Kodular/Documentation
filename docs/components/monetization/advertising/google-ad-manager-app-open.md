# Google Ad Manager App Open

{>> Non-Visible component<<}

| Category | Requires | Version |
|:--------:|:-------:|:--------:|
|**Monetization > Advertising**|<span class="chip chip-any">API 21, Android 5.0 Lollipop</span>|<span class="chip chip-number">1</span>|

## Overview

A non-visible component that displays app open ads from multiple advertisers and mediation partners. App Open ads are full-screen ads that display when users bring an app to the foreground. They're typically used to display ads when a user returns to your app after leaving it, such as returning from the home screen or another app.

??? example "Permissions"
    * [com.google.android.gms.permission.AD_ID](https://developer.android.com/reference/android/Manifest.permission.html#com.google.android.gms.permission.AD_ID)
    * [android.permission.INTERNET](https://developer.android.com/reference/android/Manifest.permission.html#INTERNET)
    * [android.permission.ACCESS_NETWORK_STATE](https://developer.android.com/reference/android/Manifest.permission.html#ACCESS_NETWORK_STATE)
    * [android.permission.ACCESS_ADSERVICES_AD_ID](https://developer.android.com/reference/android/Manifest.permission.html#ACCESS_ADSERVICES_AD_ID)
    * [android.permission.ACCESS_ADSERVICES_ATTRIBUTION](https://developer.android.com/reference/android/Manifest.permission.html#ACCESS_ADSERVICES_ATTRIBUTION)
    * [android.permission.ACCESS_ADSERVICES_TOPICS](https://developer.android.com/reference/android/Manifest.permission.html#ACCESS_ADSERVICES_TOPICS)

## Events

### Ad Clicked

Event raised when an ad was clicked.

<div class="block" ai2-block="event" not-rendered="true" value="%7B%22componentName%22:%20%22Google%20Ad%20Manager%20App%20Open%22,%20%22name%22:%20%22Ad%20Clicked%22,%20%22param%22:%20%5B%5D%7D"></div>

### Ad Closed

Event raised when an ad was closed.

<div class="block" ai2-block="event" not-rendered="true" value="%7B%22componentName%22:%20%22Google%20Ad%20Manager%20App%20Open%22,%20%22name%22:%20%22Ad%20Closed%22,%20%22param%22:%20%5B%5D%7D"></div>

### Ad Failed To Load

Event raised when an ad could not be loaded.

<div class="block" ai2-block="event" not-rendered="true" value="%7B%22componentName%22:%20%22Google%20Ad%20Manager%20App%20Open%22,%20%22name%22:%20%22Ad%20Failed%20To%20Load%22,%20%22param%22:%20%5B%22error%20Message%22%5D%7D"></div>

| Params | []() |
|--------|------|
|error Message|<span class="chip chip-text">Text</span>|

### Ad Failed To Show

Event raised when an ad could not be displayed to the user.

<div class="block" ai2-block="event" not-rendered="true" value="%7B%22componentName%22:%20%22Google%20Ad%20Manager%20App%20Open%22,%20%22name%22:%20%22Ad%20Failed%20To%20Show%22,%20%22param%22:%20%5B%22error%20Message%22%5D%7D"></div>

| Params | []() |
|--------|------|
|error Message|<span class="chip chip-text">Text</span>|

### Ad Impression

Event raised when an ad impression has been recorded.

<div class="block" ai2-block="event" not-rendered="true" value="%7B%22componentName%22:%20%22Google%20Ad%20Manager%20App%20Open%22,%20%22name%22:%20%22Ad%20Impression%22,%20%22param%22:%20%5B%5D%7D"></div>

### Ad Loaded

Event raised when an ad was loaded successfully.

<div class="block" ai2-block="event" not-rendered="true" value="%7B%22componentName%22:%20%22Google%20Ad%20Manager%20App%20Open%22,%20%22name%22:%20%22Ad%20Loaded%22,%20%22param%22:%20%5B%5D%7D"></div>

### Ad Opened

Event raised when an ad was opened.

<div class="block" ai2-block="event" not-rendered="true" value="%7B%22componentName%22:%20%22Google%20Ad%20Manager%20App%20Open%22,%20%22name%22:%20%22Ad%20Opened%22,%20%22param%22:%20%5B%5D%7D"></div>

## Methods

### Load

Loads an app open ad and prepares it for showing to the user.

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22Google%20Ad%20Manager%20App%20Open%22,%20%22name%22:%20%22Load%22,%20%22output%22:%20false,%20%22param%22:%20%5B%5D%7D"></div>

### Show App Open Ad

Shows a previously loaded app open ad.

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22Google%20Ad%20Manager%20App%20Open%22,%20%22name%22:%20%22Show%20App%20Open%20Ad%22,%20%22output%22:%20false,%20%22param%22:%20%5B%5D%7D"></div>

## Properties

### Ad Unit Id

<span style="user-select: none; white-space:pre-wrap;"><span class="chip chip-text">Text</span> :heavy_minus_sign: <span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span>  - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span></span>

Property for AdUnitId

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Google%20Ad%20Manager%20App%20Open%22,%20%22name%22:%20%22Ad%20Unit%20Id%22,%20%22getter%22:%20true%7D"></div>
<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Google%20Ad%20Manager%20App%20Open%22,%20%22name%22:%20%22Ad%20Unit%20Id%22,%20%22getter%22:%20false%7D"></div>

### Auto Load On Initialize

<span style="user-select: none; white-space:pre-wrap;"><span class="chip chip-boolean">Boolean</span> <span class="chip chip-boolean">Default: <i>True</i></span> :heavy_minus_sign: <span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span>  - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span></span>

If enabled, the component will automatically load an ad when the app starts.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Google%20Ad%20Manager%20App%20Open%22,%20%22name%22:%20%22Auto%20Load%20On%20Initialize%22,%20%22getter%22:%20true%7D"></div>
<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Google%20Ad%20Manager%20App%20Open%22,%20%22name%22:%20%22Auto%20Load%20On%20Initialize%22,%20%22getter%22:%20false%7D"></div>

### eCPM Floor

<span style="user-select: none; white-space:pre-wrap;"><span class="chip chip-unknown">Com.google.appinventor.components.common.flooramountenum</span> <span class="chip chip-unknown">Default: <i>optimized</i></span> :heavy_minus_sign: <span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span>  - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span></span>

Set a minimum eCPM floor below which advertisers cannot bid for inventory. Use Optimized to let Google decide an eCPM floor.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Google%20Ad%20Manager%20App%20Open%22,%20%22name%22:%20%22eCPM%20Floor%22,%20%22getter%22:%20true%7D"></div>
<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Google%20Ad%20Manager%20App%20Open%22,%20%22name%22:%20%22eCPM%20Floor%22,%20%22getter%22:%20false%7D"></div>

### Is Ad Available

<span style="user-select: none; white-space:pre-wrap;"><span class="chip chip-boolean">Boolean</span> :heavy_minus_sign: <span class="chip chip-rw">Read</span>  - <span class="chip chip-bd">Blocks</span></span>

Returns true if an ad is loaded and available to be shown.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Google%20Ad%20Manager%20App%20Open%22,%20%22name%22:%20%22Is%20Ad%20Available%22,%20%22getter%22:%20true%7D"></div>

### Test Mode

<span style="user-select: none; white-space:pre-wrap;"><span class="chip chip-boolean">Boolean</span> <span class="chip chip-boolean">Default: <i>False</i></span> :heavy_minus_sign: <span class="chip chip-rw">Write</span>  - <span class="chip chip-bd">Designer</span></span>

If enabled, test ads will be shown. This should be used during development to avoid generating false impressions. Always enabled when in companion.
