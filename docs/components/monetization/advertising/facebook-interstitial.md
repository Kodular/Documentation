# Facebook Interstitial

| Category | Requires | Version |
|:--------:|:-------:|:--------:|
|Monetization > Advertising|API 19, Android 4.4 - 4.4.4 KitKat|3|

:mag: {>>Non-visible component<<}

## Overview

A non-visible component that shows Facebook ads as full-screen advertisements.

??? example "Permissions"
    * [android.permission.INTERNET](https://developer.android.com/reference/android/Manifest.permission.html#INTERNET)
    * [android.permission.ACCESS_NETWORK_STATE](https://developer.android.com/reference/android/Manifest.permission.html#ACCESS_NETWORK_STATE)


## Events

### Ad Closed

Called when the user is about to return to the application after clicking on an ad

[[Event('Facebook Interstitial', 'Ad Closed')]]

### Ad Loaded

Called when an ad is received

[[Event('Facebook Interstitial', 'Ad Loaded')]]

### Error

Called when an ad request failed. message will display the reason for why the ad failed

[[Event('Facebook Interstitial', 'Error', 'error')]]

| Params | []() |
|--------|------|
|error|<span class="chip chip-text">Text</span>|


## Methods

### Load Ad

Loads a new ad.

[[Method('Facebook Interstitial', 'Load Ad', False)]]

### Show Ad

Shows an ad to the user.

[[Method('Facebook Interstitial', 'Show Ad', False)]]

## Properties

### Interstitial Commission

<span class="chip chip-text">Text</span> <span class="chip chip-text">Default: <i>unity</i></span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span> 

Sets the ad network used to take the commission.

[[PropertyBlockGetterAndSetter('Facebook Interstitial', 'Interstitial Commission')]]

### Placement ID

<span class="chip chip-text">Text</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span> 