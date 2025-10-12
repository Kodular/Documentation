# StartApp Banner

| Category | Requires | Version |
|:--------:|:-------:|:--------:|
|**Monetization > Advertising**|<span class="chip chip-any">API 21, Android 5.0 Lollipop</span>|<span class="chip chip-number">2</span>|

## Overview

A visible component that shows StartApp ads as static banners.

??? example "Permissions"
    * [com.google.android.gms.permission.AD_ID](https://developer.android.com/reference/android/Manifest.permission.html#com.google.android.gms.permission.AD_ID)
    * [android.permission.INTERNET](https://developer.android.com/reference/android/Manifest.permission.html#INTERNET)
    * [android.permission.ACCESS_NETWORK_STATE](https://developer.android.com/reference/android/Manifest.permission.html#ACCESS_NETWORK_STATE)
    * [com.google.android.finsky.permission.BIND_GET_INSTALL_REFERRER_SERVICE](https://developer.android.com/reference/android/Manifest.permission.html#com.google.android.finsky.permission.BIND_GET_INSTALL_REFERRER_SERVICE)
    * [android.permission.ACCESS_WIFI_STATE](https://developer.android.com/reference/android/Manifest.permission.html#ACCESS_WIFI_STATE)
    * [android.permission.ACCESS_ADSERVICES_TOPICS](https://developer.android.com/reference/android/Manifest.permission.html#ACCESS_ADSERVICES_TOPICS)
    * [android.permission.RECEIVE_BOOT_COMPLETED](https://developer.android.com/reference/android/Manifest.permission.html#RECEIVE_BOOT_COMPLETED)

!!! info "Commission"
    **Type:** Fixed Rate
    **Value:** `5%`

## Events

### Ad Clicked

Indicates that the user has clicked on the banner ad.

<div class="block" ai2-block="event" not-rendered="true" value="%7B%22componentName%22:%20%22StartApp%20Banner%22,%20%22name%22:%20%22Ad%20Clicked%22,%20%22param%22:%20%5B%5D%7D"></div>

### Ad Failed To Load

Called when an ad request failed to load. The message will display the error code and error message.

<div class="block" ai2-block="event" not-rendered="true" value="%7B%22componentName%22:%20%22StartApp%20Banner%22,%20%22name%22:%20%22Ad%20Failed%20To%20Load%22,%20%22param%22:%20%5B%22error%20Code%22,%20%22error%20Message%22%5D%7D"></div>

| Params | []() |
|--------|------|
|error Code|<span class="chip chip-number">Number</span>|
|error Message|<span class="chip chip-text">Text</span>|

### On Failed To Receive Ad

Called when an ad request failed to load.

<div class="block" ai2-block="event" not-rendered="true" value="%7B%22componentName%22:%20%22StartApp%20Banner%22,%20%22name%22:%20%22On%20Failed%20To%20Receive%20Ad%22,%20%22param%22:%20%5B%22error%20Message%22%5D%7D"></div>

| Params | []() |
|--------|------|
|error Message|<span class="chip chip-text">Text</span>|

### On Receive Ad

Called when an ad request succeeds.

<div class="block" ai2-block="event" not-rendered="true" value="%7B%22componentName%22:%20%22StartApp%20Banner%22,%20%22name%22:%20%22On%20Receive%20Ad%22,%20%22param%22:%20%5B%5D%7D"></div>

### OnImpression

Called when an impression is recorded.

<div class="block" ai2-block="event" not-rendered="true" value="%7B%22componentName%22:%20%22StartApp%20Banner%22,%20%22name%22:%20%22OnImpression%22,%20%22param%22:%20%5B%5D%7D"></div>

## Methods

### Load Ad

Load a new StartApp Banner ad.

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22StartApp%20Banner%22,%20%22name%22:%20%22Load%20Ad%22,%20%22output%22:%20false,%20%22param%22:%20%5B%5D%7D"></div>

## Properties

### App ID

<span style="user-select: none; white-space:pre-wrap;"><span class="chip chip-text">Text</span> :heavy_minus_sign: <span class="chip chip-rw">Write</span>  - <span class="chip chip-bd">Designer</span></span>

Property for AppId

### EnableConsent

<span style="user-select: none; white-space:pre-wrap;"><span class="chip chip-boolean">Boolean</span> <span class="chip chip-boolean">Default: <i>True</i></span> :heavy_minus_sign: <span class="chip chip-rw">Write</span>  - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span></span>

Enables the Start.io disclosure/consent box.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22StartApp%20Banner%22,%20%22name%22:%20%22EnableConsent%22,%20%22getter%22:%20false%7D"></div>

### SetUserConsent

<span style="user-select: none; white-space:pre-wrap;"><span class="chip chip-boolean">Boolean</span> <span class="chip chip-boolean">Default: <i>False</i></span> :heavy_minus_sign: <span class="chip chip-rw">Write</span>  - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span></span>

Explicitly sets user's consent.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22StartApp%20Banner%22,%20%22name%22:%20%22SetUserConsent%22,%20%22getter%22:%20false%7D"></div>

### Test Mode

<span style="user-select: none; white-space:pre-wrap;"><span class="chip chip-boolean">Boolean</span> :heavy_minus_sign: <span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span>  - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span></span>

If enabled, test ads will be shown. This should be used during development to avoid generating false impressions. Always enabled when in companion.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22StartApp%20Banner%22,%20%22name%22:%20%22Test%20Mode%22,%20%22getter%22:%20true%7D"></div>
<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22StartApp%20Banner%22,%20%22name%22:%20%22Test%20Mode%22,%20%22getter%22:%20false%7D"></div>

### Visible

<span style="user-select: none; white-space:pre-wrap;"><span class="chip chip-boolean">Boolean</span> <span class="chip chip-boolean">Default: <i>True</i></span> :heavy_minus_sign: <span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span>  - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span></span>

Specifies whether the component should be visible on the screen. Value is true if the component is showing and false if hidden.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22StartApp%20Banner%22,%20%22name%22:%20%22Visible%22,%20%22getter%22:%20true%7D"></div>
<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22StartApp%20Banner%22,%20%22name%22:%20%22Visible%22,%20%22getter%22:%20false%7D"></div>
