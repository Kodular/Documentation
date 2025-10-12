# Google Ad Manager Native Ad Layout

| Category | Requires | Version |
|:--------:|:-------:|:--------:|
|**Monetization > Advertising**|<span class="chip chip-any">API 21, Android 5.0 Lollipop</span>|<span class="chip chip-number">1</span>|

## Overview

A layout component for showing native ads from Google Ad Manager.  
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

Called when the user clicks on the ad.

<div class="block" ai2-block="event" not-rendered="true" value="%7B%22componentName%22:%20%22Google%20Ad%20Manager%20Native%20Ad%20Layout%22,%20%22name%22:%20%22Ad%20Clicked%22,%20%22param%22:%20%5B%5D%7D"></div>

### Ad Closed

Called when the ad is closed, and the user is returned to the app.

<div class="block" ai2-block="event" not-rendered="true" value="%7B%22componentName%22:%20%22Google%20Ad%20Manager%20Native%20Ad%20Layout%22,%20%22name%22:%20%22Ad%20Closed%22,%20%22param%22:%20%5B%5D%7D"></div>

### Ad Failed To Load

Called when an ad fails to load. The error code and message provide more details on the failure.

<div class="block" ai2-block="event" not-rendered="true" value="%7B%22componentName%22:%20%22Google%20Ad%20Manager%20Native%20Ad%20Layout%22,%20%22name%22:%20%22Ad%20Failed%20To%20Load%22,%20%22param%22:%20%5B%22error%20Code%22,%20%22error%20Message%22%5D%7D"></div>

| Params | []() |
|--------|------|
|error Code|<span class="chip chip-number">Number</span>|
|error Message|<span class="chip chip-text">Text</span>|

### Ad Impression

Called when an ad impression has been recorded.

<div class="block" ai2-block="event" not-rendered="true" value="%7B%22componentName%22:%20%22Google%20Ad%20Manager%20Native%20Ad%20Layout%22,%20%22name%22:%20%22Ad%20Impression%22,%20%22param%22:%20%5B%5D%7D"></div>

### Ad Loaded

Called when an ad has been successfully loaded and is ready to be shown. The "asset Dictionary" parameter contains native ad assets, like advertiser, price, etc. You can access these assetsusing the "get value for key in dictionary" block under the "Dictionaries" category of blocks. Use the appropriate "NativeAdAssetKey" helper block as the key.

<div class="block" ai2-block="event" not-rendered="true" value="%7B%22componentName%22:%20%22Google%20Ad%20Manager%20Native%20Ad%20Layout%22,%20%22name%22:%20%22Ad%20Loaded%22,%20%22param%22:%20%5B%22asset%20Dictionary%22%5D%7D"></div>

| Params | []() |
|--------|------|
|asset Dictionary|<span class="chip chip-unknown">Dictionary</span>|

### Ad Opened

Called when the ad is displayed on the screen, covering the app's content.

<div class="block" ai2-block="event" not-rendered="true" value="%7B%22componentName%22:%20%22Google%20Ad%20Manager%20Native%20Ad%20Layout%22,%20%22name%22:%20%22Ad%20Opened%22,%20%22param%22:%20%5B%5D%7D"></div>

### Ad Swipe Gesture Clicked

Called when the user performs a swipe gesture click on the ad.

<div class="block" ai2-block="event" not-rendered="true" value="%7B%22componentName%22:%20%22Google%20Ad%20Manager%20Native%20Ad%20Layout%22,%20%22name%22:%20%22Ad%20Swipe%20Gesture%20Clicked%22,%20%22param%22:%20%5B%5D%7D"></div>

## Methods

### Load Ad

Initiates a request to load a new native ad. This will not do anything if an ad is already loading or if ads are disabled.

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22Google%20Ad%20Manager%20Native%20Ad%20Layout%22,%20%22name%22:%20%22Load%20Ad%22,%20%22output%22:%20false,%20%22param%22:%20%5B%5D%7D"></div>

## Properties

### Ad Enabled

<span style="user-select: none; white-space:pre-wrap;"><span class="chip chip-boolean">Boolean</span> <span class="chip chip-boolean">Default: <i>True</i></span> :heavy_minus_sign: <span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span>  - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span></span>

Specifies whether ads should be enabled. If set to false, no ads will be loaded or shown.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Google%20Ad%20Manager%20Native%20Ad%20Layout%22,%20%22name%22:%20%22Ad%20Enabled%22,%20%22getter%22:%20true%7D"></div>
<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Google%20Ad%20Manager%20Native%20Ad%20Layout%22,%20%22name%22:%20%22Ad%20Enabled%22,%20%22getter%22:%20false%7D"></div>

### Ad Unit ID

<span style="user-select: none; white-space:pre-wrap;"><span class="chip chip-text">Text</span> :heavy_minus_sign: <span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span>  - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span></span>

The Ad Unit ID for this banner ad. It can be found in your AdMob account.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Google%20Ad%20Manager%20Native%20Ad%20Layout%22,%20%22name%22:%20%22Ad%20Unit%20ID%22,%20%22getter%22:%20true%7D"></div>
<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Google%20Ad%20Manager%20Native%20Ad%20Layout%22,%20%22name%22:%20%22Ad%20Unit%20ID%22,%20%22getter%22:%20false%7D"></div>

### Body Label

<span style="user-select: none; white-space:pre-wrap;"><span class="chip chip-component">Component</span> :heavy_minus_sign: <span class="chip chip-rw">Write</span>  - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span></span>

The label component that should be used to display the body text of the ad.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Google%20Ad%20Manager%20Native%20Ad%20Layout%22,%20%22name%22:%20%22Body%20Label%22,%20%22getter%22:%20false%7D"></div>

### Call To Action Button

<span style="user-select: none; white-space:pre-wrap;"><span class="chip chip-component">Component</span> :heavy_minus_sign: <span class="chip chip-rw">Write</span>  - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span></span>

The button component that should be used as call-to-action button of the ad.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Google%20Ad%20Manager%20Native%20Ad%20Layout%22,%20%22name%22:%20%22Call%20To%20Action%20Button%22,%20%22getter%22:%20false%7D"></div>

### eCPM Floor

<span style="user-select: none; white-space:pre-wrap;"><span class="chip chip-unknown">Com.google.appinventor.components.common.flooramountenum</span> <span class="chip chip-unknown">Default: <i>optimized</i></span> :heavy_minus_sign: <span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span>  - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span></span>

Set a minimum eCPM floor below which advertisers cannot bid for inventory. Use Optimized to let Google decide an eCPM floor.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Google%20Ad%20Manager%20Native%20Ad%20Layout%22,%20%22name%22:%20%22eCPM%20Floor%22,%20%22getter%22:%20true%7D"></div>
<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Google%20Ad%20Manager%20Native%20Ad%20Layout%22,%20%22name%22:%20%22eCPM%20Floor%22,%20%22getter%22:%20false%7D"></div>

### Headline Label

<span style="user-select: none; white-space:pre-wrap;"><span class="chip chip-component">Component</span> :heavy_minus_sign: <span class="chip chip-rw">Write</span>  - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span></span>

The label component that should be used to display the headline of the ad.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Google%20Ad%20Manager%20Native%20Ad%20Layout%22,%20%22name%22:%20%22Headline%20Label%22,%20%22getter%22:%20false%7D"></div>

### Height

<span style="user-select: none; white-space:pre-wrap;"><span class="chip chip-number">Number</span> :heavy_minus_sign: <span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span>  - <span class="chip chip-bd">Blocks</span></span>

Specifies the component's vertical height, measured in pixels.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Google%20Ad%20Manager%20Native%20Ad%20Layout%22,%20%22name%22:%20%22Height%22,%20%22getter%22:%20true%7D"></div>
<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Google%20Ad%20Manager%20Native%20Ad%20Layout%22,%20%22name%22:%20%22Height%22,%20%22getter%22:%20false%7D"></div>

### Height Percent

<span style="user-select: none; white-space:pre-wrap;"><span class="chip chip-number">Number</span> :heavy_minus_sign: <span class="chip chip-rw">Write</span>  - <span class="chip chip-bd">Blocks</span></span>

Specifies the component's vertical height as a percentageof the height of its parent Component.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Google%20Ad%20Manager%20Native%20Ad%20Layout%22,%20%22name%22:%20%22Height%20Percent%22,%20%22getter%22:%20false%7D"></div>

### Icon Image

<span style="user-select: none; white-space:pre-wrap;"><span class="chip chip-component">Component</span> :heavy_minus_sign: <span class="chip chip-rw">Write</span>  - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span></span>

The image component that should be used to display the icon of the ad.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Google%20Ad%20Manager%20Native%20Ad%20Layout%22,%20%22name%22:%20%22Icon%20Image%22,%20%22getter%22:%20false%7D"></div>

### Test Mode

<span style="user-select: none; white-space:pre-wrap;"><span class="chip chip-boolean">Boolean</span> <span class="chip chip-boolean">Default: <i>False</i></span> :heavy_minus_sign: <span class="chip chip-rw">Write</span>  - <span class="chip chip-bd">Designer</span></span>

If enabled, test ads will be shown. This should be used during development to avoid generating false impressions. Always enabled when in companion.

### Visible

<span style="user-select: none; white-space:pre-wrap;"><span class="chip chip-boolean">Boolean</span> <span class="chip chip-boolean">Default: <i>True</i></span> :heavy_minus_sign: <span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span>  - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span></span>

Returns true iff the component is visible.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Google%20Ad%20Manager%20Native%20Ad%20Layout%22,%20%22name%22:%20%22Visible%22,%20%22getter%22:%20true%7D"></div>
<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Google%20Ad%20Manager%20Native%20Ad%20Layout%22,%20%22name%22:%20%22Visible%22,%20%22getter%22:%20false%7D"></div>

### Width

<span style="user-select: none; white-space:pre-wrap;"><span class="chip chip-number">Number</span> :heavy_minus_sign: <span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span>  - <span class="chip chip-bd">Blocks</span></span>

Specifies the component's horizontal width, measured in pixels.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Google%20Ad%20Manager%20Native%20Ad%20Layout%22,%20%22name%22:%20%22Width%22,%20%22getter%22:%20true%7D"></div>
<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Google%20Ad%20Manager%20Native%20Ad%20Layout%22,%20%22name%22:%20%22Width%22,%20%22getter%22:%20false%7D"></div>

### Width Percent

<span style="user-select: none; white-space:pre-wrap;"><span class="chip chip-number">Number</span> :heavy_minus_sign: <span class="chip chip-rw">Write</span>  - <span class="chip chip-bd">Blocks</span></span>

Specifies the component's horizontal width as a percentageof the Width of its parent Component.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Google%20Ad%20Manager%20Native%20Ad%20Layout%22,%20%22name%22:%20%22Width%20Percent%22,%20%22getter%22:%20false%7D"></div>
