# AdColony Interstitial

| Category | Requires | Version |
|:--------:|:-------:|:--------:|
|**Monetization > Advertising**|<span class="chip chip-any">API 19, Android 4.4 - 4.4.4 KitKat</span>|<span class="chip chip-number">1</span>|

:mag: {>>Non-visible component<<}

## Overview

A non-visible component that shows AdColony ads as full-screen advertisements.

??? example "Permissions"
    * [android.permission.INTERNET](https://developer.android.com/reference/android/Manifest.permission.html#INTERNET)
    * [android.permission.ACCESS_NETWORK_STATE](https://developer.android.com/reference/android/Manifest.permission.html#ACCESS_NETWORK_STATE)
    * [android.permission.VIBRATE](https://developer.android.com/reference/android/Manifest.permission.html#VIBRATE)


## Events

### Ad Expiring

Called when the ad is expiring. You should load a new ad.

[[Event('AdColony Interstitial', 'Ad Expiring')]]

### Ad Failed To Load

Called when an ad request failed to load. The message will display the error code and error message.

[[Event('AdColony Interstitial', 'Ad Failed To Load', 'errorCode', 'errorMessage')]]

| Params | []() |
|--------|------|
|error Code|<span class="chip chip-number">Number</span>|
|error Message|<span class="chip chip-text">Text</span>|


### Ad Loaded

Called when an ad is received.

[[Event('AdColony Interstitial', 'Ad Loaded')]]

### Ad Opened

Called when an ad was opened.

[[Event('AdColony Interstitial', 'Ad Opened')]]

### Error

Called when an ad request failed. The message will display the reason for why the ad failed.

[[Event('AdColony Interstitial', 'Error', 'error')]]

| Params | []() |
|--------|------|
|error|<span class="chip chip-text">Text</span>|


## Methods

### Is European User

<span class="chip chip-boolean">Returns: <i>Boolean</i></span> 

Returns true if the current app user is located in europe. If true you must ask the user as example in a dialog if he give his consent for personalized ads.

[[Method('AdColony Interstitial', 'Is European User', True)]]

### Load Ad

Loads a new ad.

[[Method('AdColony Interstitial', 'Load Ad', False)]]

### Show Ad

Shows an ad to the user.

[[Method('AdColony Interstitial', 'Show Ad', False)]]

## Properties

### App ID

<span class="chip chip-text">Text</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span> 

### Zone ID

<span class="chip chip-text">Text</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span> 

### User Consent

<span class="chip chip-boolean">Boolean</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Blocks</span> 

If set to true the user allowed the ad network to show personalized ads. You only need to request the consent from european users.

[[PropertyBlockGetterAndSetter('AdColony Interstitial', 'User Consent')]]