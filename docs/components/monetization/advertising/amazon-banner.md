# Amazon Banner

| Category | Requires | Version |
|:--------:|:-------:|:--------:|
|**Monetization > Advertising**|<span class="chip chip-any">API 19, Android 4.4 - 4.4.4 KitKat</span>|<span class="chip chip-number">1</span>|

## Overview

AdAmazon component allows you to monetize your app. You must have a valid publisher id that can be obtained from https://developer.amazon.com. If your publisher id is invalid, the AdAmazon banner will not display on the emulator or the device.

??? example "Permissions"
    * [android.permission.ACCESS_FINE_LOCATION](https://developer.android.com/reference/android/Manifest.permission.html#ACCESS_FINE_LOCATION)
    * [android.permission.ACCESS_COARSE_LOCATION](https://developer.android.com/reference/android/Manifest.permission.html#ACCESS_COARSE_LOCATION)
    * [android.permission.INTERNET](https://developer.android.com/reference/android/Manifest.permission.html#INTERNET)
    * [android.permission.ACCESS_NETWORK_STATE](https://developer.android.com/reference/android/Manifest.permission.html#ACCESS_NETWORK_STATE)
    * [android.permission.ACCESS_WIFI_STATE](https://developer.android.com/reference/android/Manifest.permission.html#ACCESS_WIFI_STATE)


## Events

### Ad Dismissed

Event to detect that a ad was dismissed.

<div class="block" ai2-block="event" not-rendered="true" value="%7B%22componentName%22:%20%22Amazon%20Banner%22,%20%22name%22:%20%22Ad%20Dismissed%22,%20%22params%22:%20%5B%5D%7D"></div>


### Ad Expanded

Event to detect that a ad was expanded.

<div class="block" ai2-block="event" not-rendered="true" value="%7B%22componentName%22:%20%22Amazon%20Banner%22,%20%22name%22:%20%22Ad%20Expanded%22,%20%22params%22:%20%5B%5D%7D"></div>


### Ad Failed To Load

Event to detect that the try to load a ad was not successful.

<div class="block" ai2-block="event" not-rendered="true" value="%7B%22componentName%22:%20%22Amazon%20Banner%22,%20%22name%22:%20%22Ad%20Failed%20To%20Load%22,%20%22params%22:%20%5B%22error%20Code%22,%20%22error%20Message%22%5D%7D"></div>


| Params | []() |
|--------|------|
|error Code|<span class="chip chip-text">Text</span>|
|error Message|<span class="chip chip-text">Text</span>|


### Ad Loaded

Event to detect that a ad was loaded.

<div class="block" ai2-block="event" not-rendered="true" value="%7B%22componentName%22:%20%22Amazon%20Banner%22,%20%22name%22:%20%22Ad%20Loaded%22,%20%22params%22:%20%5B%5D%7D"></div>


## Properties

### Publisher ID

<span class="chip chip-text">Text</span> <span class="chip chip-text">Default: <i>AmazonPublisherId</i></span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span> 

Sets the Amazon Ad Publisher Id and refreshes the ad.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Amazon%20Banner%22,%20%22name%22:%20%22Publisher%20ID%22,%20%22getter%22:%20true%7D"></div>
<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Amazon%20Banner%22,%20%22name%22:%20%22Publisher%20ID%22,%20%22getter%22:%20false%7D"></div>


### Refresh Ad

<span class="chip chip-boolean">Boolean</span> <span class="chip chip-boolean">Default: <i>True</i></span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span> 

Refreshes the ad.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Amazon%20Banner%22,%20%22name%22:%20%22Refresh%20Ad%22,%20%22getter%22:%20false%7D"></div>


### Test Mode

<span class="chip chip-boolean">Boolean</span> <span class="chip chip-boolean">Default: <i>True</i></span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span> 

Turns the debugging on / off based on enabled parameter.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Amazon%20Banner%22,%20%22name%22:%20%22Test%20Mode%22,%20%22getter%22:%20true%7D"></div>
<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Amazon%20Banner%22,%20%22name%22:%20%22Test%20Mode%22,%20%22getter%22:%20false%7D"></div>


### Visible

<span class="chip chip-boolean">Boolean</span> <span class="chip chip-boolean">Default: <i>True</i></span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span> 

Returns true iff the component is visible.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Amazon%20Banner%22,%20%22name%22:%20%22Visible%22,%20%22getter%22:%20true%7D"></div>
<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Amazon%20Banner%22,%20%22name%22:%20%22Visible%22,%20%22getter%22:%20false%7D"></div>


### Column

<span class="chip chip-number">Number</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Non-Visible</span> - 

Column property getter method.

### Row

<span class="chip chip-number">Number</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Non-Visible</span> - 

Row property getter method.