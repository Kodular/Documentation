# Start.io Native Ad Layout

| Category | Requires | Version |
|:--------:|:-------:|:--------:|
|**Monetization > Advertising**|<span class="chip chip-any">API 21, Android 5.0 Lollipop</span>|<span class="chip chip-number">1</span>|

## Overview

A layout component for showing Start.io native ads. Native ads use the app's own UI elements (Labels, Buttons, Images) so they blend naturally with your content.

??? example "Permissions"
    * [com.google.android.gms.permission.AD_ID](https://developer.android.com/reference/android/Manifest.permission.html#com.google.android.gms.permission.AD_ID)
    * [android.permission.INTERNET](https://developer.android.com/reference/android/Manifest.permission.html#INTERNET)
    * [android.permission.ACCESS_NETWORK_STATE](https://developer.android.com/reference/android/Manifest.permission.html#ACCESS_NETWORK_STATE)
    * [com.google.android.finsky.permission.BIND_GET_INSTALL_REFERRER_SERVICE](https://developer.android.com/reference/android/Manifest.permission.html#com.google.android.finsky.permission.BIND_GET_INSTALL_REFERRER_SERVICE)
    * [android.permission.ACCESS_WIFI_STATE](https://developer.android.com/reference/android/Manifest.permission.html#ACCESS_WIFI_STATE)
    * [android.permission.ACCESS_ADSERVICES_TOPICS](https://developer.android.com/reference/android/Manifest.permission.html#ACCESS_ADSERVICES_TOPICS)
    * [android.permission.RECEIVE_BOOT_COMPLETED](https://developer.android.com/reference/android/Manifest.permission.html#RECEIVE_BOOT_COMPLETED)

## Events

### Ad Clicked

Called when the user clicks on the native ad.

<div class="block" ai2-block="event" not-rendered="true" value="%7B%22componentName%22:%20%22Start.io%20Native%20Ad%20Layout%22,%20%22name%22:%20%22Ad%20Clicked%22,%20%22param%22:%20%5B%5D%7D"></div>

### Ad Failed To Load

Called when a native ad fails to load.

<div class="block" ai2-block="event" not-rendered="true" value="%7B%22componentName%22:%20%22Start.io%20Native%20Ad%20Layout%22,%20%22name%22:%20%22Ad%20Failed%20To%20Load%22,%20%22param%22:%20%5B%22error%20Code%22,%20%22error%20Message%22%5D%7D"></div>

| Params | []() |
|--------|------|
|error Code|<span class="chip chip-number">Number</span>|
|error Message|<span class="chip chip-text">Text</span>|

### Ad Impression

Called when a native ad impression is recorded.

<div class="block" ai2-block="event" not-rendered="true" value="%7B%22componentName%22:%20%22Start.io%20Native%20Ad%20Layout%22,%20%22name%22:%20%22Ad%20Impression%22,%20%22param%22:%20%5B%5D%7D"></div>

### Ad Loaded

Called when a native ad has been loaded successfully.

<div class="block" ai2-block="event" not-rendered="true" value="%7B%22componentName%22:%20%22Start.io%20Native%20Ad%20Layout%22,%20%22name%22:%20%22Ad%20Loaded%22,%20%22param%22:%20%5B%22asset%20Dictionary%22%5D%7D"></div>

| Params | []() |
|--------|------|
|asset Dictionary|<span class="chip chip-unknown">Dictionary</span>|

## Methods

### Load Ad

Initiates a request to load a new native ad. This will not do anything if an ad is already loading or if ads are disabled.

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22Start.io%20Native%20Ad%20Layout%22,%20%22name%22:%20%22Load%20Ad%22,%20%22output%22:%20false,%20%22param%22:%20%5B%5D%7D"></div>

## Properties

### Ad Enabled

<span style="user-select: none; white-space:pre-wrap;"><span class="chip chip-boolean">Boolean</span> <span class="chip chip-boolean">Default: <i>True</i></span> :heavy_minus_sign: <span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span>  - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span></span>

Specifies whether ads should be enabled. If set to false, no ads will be loaded or shown.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Start.io%20Native%20Ad%20Layout%22,%20%22name%22:%20%22Ad%20Enabled%22,%20%22getter%22:%20true%7D"></div>
<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Start.io%20Native%20Ad%20Layout%22,%20%22name%22:%20%22Ad%20Enabled%22,%20%22getter%22:%20false%7D"></div>

### Ads Number

<span style="user-select: none; white-space:pre-wrap;"><span class="chip chip-number">Number</span> <span class="chip chip-number">Default: <i>1</i></span> :heavy_minus_sign: <span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span>  - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span></span>

The number of native ads to request. Only the first ad is displayed automatically.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Start.io%20Native%20Ad%20Layout%22,%20%22name%22:%20%22Ads%20Number%22,%20%22getter%22:%20true%7D"></div>
<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Start.io%20Native%20Ad%20Layout%22,%20%22name%22:%20%22Ads%20Number%22,%20%22getter%22:%20false%7D"></div>

### Body Label

<span style="user-select: none; white-space:pre-wrap;"><span class="chip chip-component">Component</span> :heavy_minus_sign: <span class="chip chip-rw">Write</span>  - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span></span>

The label component for the ad body text.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Start.io%20Native%20Ad%20Layout%22,%20%22name%22:%20%22Body%20Label%22,%20%22getter%22:%20false%7D"></div>

### Call To Action Button

<span style="user-select: none; white-space:pre-wrap;"><span class="chip chip-component">Component</span> :heavy_minus_sign: <span class="chip chip-rw">Write</span>  - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span></span>

The button component for the ad call-to-action.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Start.io%20Native%20Ad%20Layout%22,%20%22name%22:%20%22Call%20To%20Action%20Button%22,%20%22getter%22:%20false%7D"></div>

### Enable Consent

<span style="user-select: none; white-space:pre-wrap;"><span class="chip chip-boolean">Boolean</span> <span class="chip chip-boolean">Default: <i>True</i></span> :heavy_minus_sign: <span class="chip chip-rw">Write</span>  - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span></span>

Enables the Start.io disclosure/consent box.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Start.io%20Native%20Ad%20Layout%22,%20%22name%22:%20%22Enable%20Consent%22,%20%22getter%22:%20false%7D"></div>

### Headline Label

<span style="user-select: none; white-space:pre-wrap;"><span class="chip chip-component">Component</span> :heavy_minus_sign: <span class="chip chip-rw">Write</span>  - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span></span>

The label component for the ad headline.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Start.io%20Native%20Ad%20Layout%22,%20%22name%22:%20%22Headline%20Label%22,%20%22getter%22:%20false%7D"></div>

### Height

<span style="user-select: none; white-space:pre-wrap;"><span class="chip chip-number">Number</span> :heavy_minus_sign: <span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span>  - <span class="chip chip-bd">Blocks</span></span>

Specifies the component's vertical height, measured in pixels.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Start.io%20Native%20Ad%20Layout%22,%20%22name%22:%20%22Height%22,%20%22getter%22:%20true%7D"></div>
<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Start.io%20Native%20Ad%20Layout%22,%20%22name%22:%20%22Height%22,%20%22getter%22:%20false%7D"></div>

### Height Percent

<span style="user-select: none; white-space:pre-wrap;"><span class="chip chip-number">Number</span> :heavy_minus_sign: <span class="chip chip-rw">Write</span>  - <span class="chip chip-bd">Blocks</span></span>

Specifies the component's vertical height as a percentageof the height of its parent Component.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Start.io%20Native%20Ad%20Layout%22,%20%22name%22:%20%22Height%20Percent%22,%20%22getter%22:%20false%7D"></div>

### Icon Image

<span style="user-select: none; white-space:pre-wrap;"><span class="chip chip-component">Component</span> :heavy_minus_sign: <span class="chip chip-rw">Write</span>  - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span></span>

The image component for the ad icon.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Start.io%20Native%20Ad%20Layout%22,%20%22name%22:%20%22Icon%20Image%22,%20%22getter%22:%20false%7D"></div>

### Primary Image Size

<span style="user-select: none; white-space:pre-wrap;"><span class="chip chip-text">Text</span> <span class="chip chip-text">Default: <i>SIZE150X150</i></span> :heavy_minus_sign: <span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span>  - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span></span>

The size of the primary image in native ads.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Start.io%20Native%20Ad%20Layout%22,%20%22name%22:%20%22Primary%20Image%20Size%22,%20%22getter%22:%20true%7D"></div>
<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Start.io%20Native%20Ad%20Layout%22,%20%22name%22:%20%22Primary%20Image%20Size%22,%20%22getter%22:%20false%7D"></div>

### Set User Consent

<span style="user-select: none; white-space:pre-wrap;"><span class="chip chip-boolean">Boolean</span> <span class="chip chip-boolean">Default: <i>False</i></span> :heavy_minus_sign: <span class="chip chip-rw">Write</span>  - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span></span>

Explicitly sets user's consent.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Start.io%20Native%20Ad%20Layout%22,%20%22name%22:%20%22Set%20User%20Consent%22,%20%22getter%22:%20false%7D"></div>

### Test Mode

<span style="user-select: none; white-space:pre-wrap;"><span class="chip chip-boolean">Boolean</span> :heavy_minus_sign: <span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span>  - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span></span>

If enabled, test ads will be shown. This should be used during development to avoid generating false impressions. Always enabled when in companion.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Start.io%20Native%20Ad%20Layout%22,%20%22name%22:%20%22Test%20Mode%22,%20%22getter%22:%20true%7D"></div>
<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Start.io%20Native%20Ad%20Layout%22,%20%22name%22:%20%22Test%20Mode%22,%20%22getter%22:%20false%7D"></div>

### Visible

<span style="user-select: none; white-space:pre-wrap;"><span class="chip chip-boolean">Boolean</span> <span class="chip chip-boolean">Default: <i>True</i></span> :heavy_minus_sign: <span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span>  - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span></span>

Returns true iff the component is visible.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Start.io%20Native%20Ad%20Layout%22,%20%22name%22:%20%22Visible%22,%20%22getter%22:%20true%7D"></div>
<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Start.io%20Native%20Ad%20Layout%22,%20%22name%22:%20%22Visible%22,%20%22getter%22:%20false%7D"></div>

### Width

<span style="user-select: none; white-space:pre-wrap;"><span class="chip chip-number">Number</span> :heavy_minus_sign: <span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span>  - <span class="chip chip-bd">Blocks</span></span>

Specifies the component's horizontal width, measured in pixels.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Start.io%20Native%20Ad%20Layout%22,%20%22name%22:%20%22Width%22,%20%22getter%22:%20true%7D"></div>
<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Start.io%20Native%20Ad%20Layout%22,%20%22name%22:%20%22Width%22,%20%22getter%22:%20false%7D"></div>

### Width Percent

<span style="user-select: none; white-space:pre-wrap;"><span class="chip chip-number">Number</span> :heavy_minus_sign: <span class="chip chip-rw">Write</span>  - <span class="chip chip-bd">Blocks</span></span>

Specifies the component's horizontal width as a percentageof the Width of its parent Component.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Start.io%20Native%20Ad%20Layout%22,%20%22name%22:%20%22Width%20Percent%22,%20%22getter%22:%20false%7D"></div>
