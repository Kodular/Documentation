# AppLovin Max Native

| Category | Requires | Version |
|:--------:|:-------:|:--------:|
|**Monetization > Advertising**|<span class="chip chip-any">API 24, Android 7.0 Nougat</span>|<span class="chip chip-number">1</span>|

==This component requires a higher **Minimum Android SDK** in your app (_API 21, Android 5.0 Lollipop_ -> _API 24, Android 7.0 Nougat_)==

## Overview

A layout component for showing AppLovin MAX native ads. Native ads use the app's own UI elements (Labels, Buttons, Images) so they blend naturally with your content. The ad unit must be of type "Manual" in the AppLovin MAX dashboard.

??? example "Permissions"
    * [com.google.android.gms.permission.AD_ID](https://developer.android.com/reference/android/Manifest.permission.html#com.google.android.gms.permission.AD_ID)
    * [android.permission.INTERNET](https://developer.android.com/reference/android/Manifest.permission.html#INTERNET)
    * [android.permission.ACCESS_NETWORK_STATE](https://developer.android.com/reference/android/Manifest.permission.html#ACCESS_NETWORK_STATE)
    * [android.permission.ACCESS_WIFI_STATE](https://developer.android.com/reference/android/Manifest.permission.html#ACCESS_WIFI_STATE)

## Events

### Ad Clicked

Called when the user clicks on the native ad.

<div class="block" ai2-block="event" not-rendered="true" value="%7B%22componentName%22:%20%22AppLovin%20Max%20Native%22,%20%22name%22:%20%22Ad%20Clicked%22,%20%22param%22:%20%5B%5D%7D"></div>

### Failed To Load

Called when a native ad fails to load.

<div class="block" ai2-block="event" not-rendered="true" value="%7B%22componentName%22:%20%22AppLovin%20Max%20Native%22,%20%22name%22:%20%22Failed%20To%20Load%22,%20%22param%22:%20%5B%22error%20Message%22%5D%7D"></div>

| Param | Type |
|--------|------|
|error Message|<span class="chip chip-text">Text</span>|

### Loaded

Called when a native ad has been loaded successfully.

<div class="block" ai2-block="event" not-rendered="true" value="%7B%22componentName%22:%20%22AppLovin%20Max%20Native%22,%20%22name%22:%20%22Loaded%22,%20%22param%22:%20%5B%5D%7D"></div>

## Methods

### Load

Initiates a request to load a new native ad. Does nothing if ads are disabled or a load is already in progress.

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22AppLovin%20Max%20Native%22,%20%22name%22:%20%22Load%22,%20%22output%22:%20false,%20%22param%22:%20%5B%5D%7D"></div>

## Properties

### Ad Enabled

<span style="user-select: none; white-space:pre-wrap;"><span class="chip chip-boolean">Boolean</span> <span class="chip chip-boolean">Default: <i>True</i></span> :heavy_minus_sign: <span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span>  - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span></span>

Specifies whether ads should be enabled. If set to false, no ads will be loaded or shown.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22AppLovin%20Max%20Native%22,%20%22name%22:%20%22Ad%20Enabled%22,%20%22getter%22:%20true%7D"></div>
<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22AppLovin%20Max%20Native%22,%20%22name%22:%20%22Ad%20Enabled%22,%20%22getter%22:%20false%7D"></div>

### Ad Unit Id

<span style="user-select: none; white-space:pre-wrap;"><span class="chip chip-text">Text</span> :heavy_minus_sign: <span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span>  - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span></span>

Sets the MAX ad unit ID for native ads. The ad unit must be of type "Manual" in the AppLovin MAX dashboard.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22AppLovin%20Max%20Native%22,%20%22name%22:%20%22Ad%20Unit%20Id%22,%20%22getter%22:%20true%7D"></div>
<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22AppLovin%20Max%20Native%22,%20%22name%22:%20%22Ad%20Unit%20Id%22,%20%22getter%22:%20false%7D"></div>

### Body Label

<span style="user-select: none; white-space:pre-wrap;"><span class="chip chip-component">Component</span> :heavy_minus_sign: <span class="chip chip-rw">Write</span>  - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span></span>

The label component for the ad body text.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22AppLovin%20Max%20Native%22,%20%22name%22:%20%22Body%20Label%22,%20%22getter%22:%20false%7D"></div>

### Call To Action Button

<span style="user-select: none; white-space:pre-wrap;"><span class="chip chip-component">Component</span> :heavy_minus_sign: <span class="chip chip-rw">Write</span>  - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span></span>

The button component for the ad call-to-action.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22AppLovin%20Max%20Native%22,%20%22name%22:%20%22Call%20To%20Action%20Button%22,%20%22getter%22:%20false%7D"></div>

### Headline Label

<span style="user-select: none; white-space:pre-wrap;"><span class="chip chip-component">Component</span> :heavy_minus_sign: <span class="chip chip-rw">Write</span>  - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span></span>

The label component for the ad headline (required).

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22AppLovin%20Max%20Native%22,%20%22name%22:%20%22Headline%20Label%22,%20%22getter%22:%20false%7D"></div>

### Height

<span style="user-select: none; white-space:pre-wrap;"><span class="chip chip-number">Number</span> :heavy_minus_sign: <span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span>  - <span class="chip chip-bd">Blocks</span></span>

Specifies the component's vertical height, measured in pixels.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22AppLovin%20Max%20Native%22,%20%22name%22:%20%22Height%22,%20%22getter%22:%20true%7D"></div>
<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22AppLovin%20Max%20Native%22,%20%22name%22:%20%22Height%22,%20%22getter%22:%20false%7D"></div>

### Height Percent

<span style="user-select: none; white-space:pre-wrap;"><span class="chip chip-number">Number</span> :heavy_minus_sign: <span class="chip chip-rw">Write</span>  - <span class="chip chip-bd">Blocks</span></span>

Specifies the component's vertical height as a percentageof the height of its parent Component.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22AppLovin%20Max%20Native%22,%20%22name%22:%20%22Height%20Percent%22,%20%22getter%22:%20false%7D"></div>

### Icon Image

<span style="user-select: none; white-space:pre-wrap;"><span class="chip chip-component">Component</span> :heavy_minus_sign: <span class="chip chip-rw">Write</span>  - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span></span>

The image component for the ad icon.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22AppLovin%20Max%20Native%22,%20%22name%22:%20%22Icon%20Image%22,%20%22getter%22:%20false%7D"></div>

### Test Mode

<span style="user-select: none; white-space:pre-wrap;"><span class="chip chip-boolean">Boolean</span> <span class="chip chip-boolean">Default: <i>False</i></span> :heavy_minus_sign: <span class="chip chip-rw">Write</span>  - <span class="chip chip-bd">Designer</span></span>

If enabled, the ad is treated as a test ad. Always enabled in companion. MAX test ads are configured through the MAX dashboard.

### Visible

<span style="user-select: none; white-space:pre-wrap;"><span class="chip chip-boolean">Boolean</span> <span class="chip chip-boolean">Default: <i>True</i></span> :heavy_minus_sign: <span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span>  - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span></span>

Returns true iff the component is visible.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22AppLovin%20Max%20Native%22,%20%22name%22:%20%22Visible%22,%20%22getter%22:%20true%7D"></div>
<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22AppLovin%20Max%20Native%22,%20%22name%22:%20%22Visible%22,%20%22getter%22:%20false%7D"></div>

### Width

<span style="user-select: none; white-space:pre-wrap;"><span class="chip chip-number">Number</span> :heavy_minus_sign: <span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span>  - <span class="chip chip-bd">Blocks</span></span>

Specifies the component's horizontal width, measured in pixels.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22AppLovin%20Max%20Native%22,%20%22name%22:%20%22Width%22,%20%22getter%22:%20true%7D"></div>
<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22AppLovin%20Max%20Native%22,%20%22name%22:%20%22Width%22,%20%22getter%22:%20false%7D"></div>

### Width Percent

<span style="user-select: none; white-space:pre-wrap;"><span class="chip chip-number">Number</span> :heavy_minus_sign: <span class="chip chip-rw">Write</span>  - <span class="chip chip-bd">Blocks</span></span>

Specifies the component's horizontal width as a percentageof the Width of its parent Component.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22AppLovin%20Max%20Native%22,%20%22name%22:%20%22Width%20Percent%22,%20%22getter%22:%20false%7D"></div>
