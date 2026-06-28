# AppLovin Max App Open

{>> Non-Visible component<<}

| Category | Requires | Version |
|:--------:|:-------:|:--------:|
|**Monetization > Advertising**|<span class="chip chip-any">API 24, Android 7.0 Nougat</span>|<span class="chip chip-number">1</span>|

==This component requires a higher **Minimum Android SDK** in your app (_API 21, Android 5.0 Lollipop_ -> _API 24, Android 7.0 Nougat_)==

## Overview

Shows AppLovin MAX app open ads when the app returns to the foreground. Requires an AppLovin SDK key in the project settings and a MAX app open ad unit ID.

??? example "Permissions"
    * [com.google.android.gms.permission.AD_ID](https://developer.android.com/reference/android/Manifest.permission.html#com.google.android.gms.permission.AD_ID)
    * [android.permission.INTERNET](https://developer.android.com/reference/android/Manifest.permission.html#INTERNET)
    * [android.permission.ACCESS_NETWORK_STATE](https://developer.android.com/reference/android/Manifest.permission.html#ACCESS_NETWORK_STATE)
    * [android.permission.ACCESS_WIFI_STATE](https://developer.android.com/reference/android/Manifest.permission.html#ACCESS_WIFI_STATE)

## Events

### Ad Clicked

Event raised when an ad was clicked.

<div class="block" ai2-block="event" not-rendered="true" value="%7B%22componentName%22:%20%22AppLovin%20Max%20App%20Open%22,%20%22name%22:%20%22Ad%20Clicked%22,%20%22param%22:%20%5B%5D%7D"></div>

### Ad Closed

Event raised when an ad was closed.

<div class="block" ai2-block="event" not-rendered="true" value="%7B%22componentName%22:%20%22AppLovin%20Max%20App%20Open%22,%20%22name%22:%20%22Ad%20Closed%22,%20%22param%22:%20%5B%5D%7D"></div>

### Ad Opened

Event raised when an ad was opened.

<div class="block" ai2-block="event" not-rendered="true" value="%7B%22componentName%22:%20%22AppLovin%20Max%20App%20Open%22,%20%22name%22:%20%22Ad%20Opened%22,%20%22param%22:%20%5B%5D%7D"></div>

### Failed To Load

Event raised when an ad could not be loaded.

<div class="block" ai2-block="event" not-rendered="true" value="%7B%22componentName%22:%20%22AppLovin%20Max%20App%20Open%22,%20%22name%22:%20%22Failed%20To%20Load%22,%20%22param%22:%20%5B%22error%20Message%22%5D%7D"></div>

| Param | Type |
|--------|------|
|error Message|<span class="chip chip-text">Text</span>|

### Failed To Show

Event raised when an ad could not be shown.

<div class="block" ai2-block="event" not-rendered="true" value="%7B%22componentName%22:%20%22AppLovin%20Max%20App%20Open%22,%20%22name%22:%20%22Failed%20To%20Show%22,%20%22param%22:%20%5B%22error%20Message%22%5D%7D"></div>

| Param | Type |
|--------|------|
|error Message|<span class="chip chip-text">Text</span>|

### Loaded

Event raised when an ad was loaded successfully.

<div class="block" ai2-block="event" not-rendered="true" value="%7B%22componentName%22:%20%22AppLovin%20Max%20App%20Open%22,%20%22name%22:%20%22Loaded%22,%20%22param%22:%20%5B%5D%7D"></div>

## Methods

### Load

Loads an app open ad and prepares it for showing.

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22AppLovin%20Max%20App%20Open%22,%20%22name%22:%20%22Load%22,%20%22output%22:%20false,%20%22param%22:%20%5B%5D%7D"></div>

### Show

Displays a previously loaded app open ad.

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22AppLovin%20Max%20App%20Open%22,%20%22name%22:%20%22Show%22,%20%22output%22:%20false,%20%22param%22:%20%5B%5D%7D"></div>

## Properties

### Ad Unit Id

<span style="user-select: none; white-space:pre-wrap;"><span class="chip chip-text">Text</span> :heavy_minus_sign: <span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span>  - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span></span>

Sets the MAX ad unit ID for app open ads.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22AppLovin%20Max%20App%20Open%22,%20%22name%22:%20%22Ad%20Unit%20Id%22,%20%22getter%22:%20true%7D"></div>
<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22AppLovin%20Max%20App%20Open%22,%20%22name%22:%20%22Ad%20Unit%20Id%22,%20%22getter%22:%20false%7D"></div>

### AutoShowOnForeground

<span style="user-select: none; white-space:pre-wrap;"><span class="chip chip-boolean">Boolean</span> <span class="chip chip-boolean">Default: <i>False</i></span> :heavy_minus_sign: <span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span>  - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span></span>

If enabled, a loaded app open ad is automatically shown when the app returns to the foreground.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22AppLovin%20Max%20App%20Open%22,%20%22name%22:%20%22AutoShowOnForeground%22,%20%22getter%22:%20true%7D"></div>
<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22AppLovin%20Max%20App%20Open%22,%20%22name%22:%20%22AutoShowOnForeground%22,%20%22getter%22:%20false%7D"></div>

### Test Mode

<span style="user-select: none; white-space:pre-wrap;"><span class="chip chip-boolean">Boolean</span> <span class="chip chip-boolean">Default: <i>False</i></span> :heavy_minus_sign: <span class="chip chip-rw">Write</span>  - <span class="chip chip-bd">Designer</span></span>

If enabled, the ad is treated as a test ad. Always enabled in companion. Note: AppLovin MAX test ads are configured through the MAX dashboard (test device GAIDs); this property only controls Kodular-side test behavior.
