# Facebook Interstitial

| Category | Requires | Version |
|:--------:|:-------:|:--------:|
|**Monetization > Advertising**|<span class="chip chip-any">API 19, Android 4.4 - 4.4.4 KitKat</span>|<span class="chip chip-number">3</span>|

:mag: {>>Non-visible component<<}

## Overview

A non-visible component that shows Facebook ads as full-screen advertisements.

??? example "Permissions"
    * [android.permission.INTERNET](https://developer.android.com/reference/android/Manifest.permission.html#INTERNET)
    * [android.permission.ACCESS_NETWORK_STATE](https://developer.android.com/reference/android/Manifest.permission.html#ACCESS_NETWORK_STATE)


## Events

### Ad Closed

Called when the user is about to return to the application after clicking on an ad

<div class="block" ai2-block="event" not-rendered="true" value="%7B%22componentName%22:%20%22Facebook%20Interstitial%22,%20%22name%22:%20%22Ad%20Closed%22,%20%22params%22:%20%5B%5D%7D"></div>


### Ad Loaded

Called when an ad is received

<div class="block" ai2-block="event" not-rendered="true" value="%7B%22componentName%22:%20%22Facebook%20Interstitial%22,%20%22name%22:%20%22Ad%20Loaded%22,%20%22params%22:%20%5B%5D%7D"></div>


### Error

Called when an ad request failed. message will display the reason for why the ad failed

<div class="block" ai2-block="event" not-rendered="true" value="%7B%22componentName%22:%20%22Facebook%20Interstitial%22,%20%22name%22:%20%22Error%22,%20%22params%22:%20%5B%22error%22%5D%7D"></div>

| Params | []() |
|--------|------|
|error|<span class="chip chip-text">Text</span>|


## Methods

### Load Ad

Loads a new ad.

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22Facebook%20Interstitial%22,%20%22name%22:%20%22Load%20Ad%22,%20%22output%22:%20false,%20%22params%22:%20%5B%5D%7D"></div>


### Show Ad

Shows an ad to the user.

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22Facebook%20Interstitial%22,%20%22name%22:%20%22Show%20Ad%22,%20%22output%22:%20false,%20%22params%22:%20%5B%5D%7D"></div>


## Properties

### Interstitial Commission

<span class="chip chip-text">Text</span><span style="user-select: none;">&nbsp;</span><span class="chip chip-text">Default: <i>unity</i></span><span style="user-select: none;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span class="chip chip-rw">Write</span><span style="user-select: none;">&nbsp;</span>-<span style="user-select: none;">&nbsp;</span><span class="chip chip-bd">Designer</span><span style="user-select: none;">&nbsp;</span><span class="chip chip-bd">Blocks</span><span style="user-select: none;">&nbsp;</span>

Sets the ad network used to take the commission.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Facebook%20Interstitial%22,%20%22name%22:%20%22Interstitial%20Commission%22,%20%22getter%22:%20false%7D"></div>


### Placement ID

<span class="chip chip-text">Text</span><span style="user-select: none;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span class="chip chip-rw">Write</span><span style="user-select: none;">&nbsp;</span>-<span style="user-select: none;">&nbsp;</span><span class="chip chip-bd">Designer</span><span style="user-select: none;">&nbsp;</span>
