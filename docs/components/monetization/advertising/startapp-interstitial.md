# StartApp Interstitial

| Category | Requires | Version |
|:--------:|:-------:|:--------:|
|**Monetization > Advertising**|<span class="chip chip-any">API 19, Android 4.4 - 4.4.4 KitKat</span>|<span class="chip chip-number">1</span>|

:mag: {>>Non-visible component<<}

## Overview

A non-visible component that shows StartApp ads as full-screen advertisements.

??? example "Permissions"
    * [android.permission.INTERNET](https://developer.android.com/reference/android/Manifest.permission.html#INTERNET)
    * [android.permission.ACCESS_NETWORK_STATE](https://developer.android.com/reference/android/Manifest.permission.html#ACCESS_NETWORK_STATE)
    * [android.permission.ACCESS_WIFI_STATE](https://developer.android.com/reference/android/Manifest.permission.html#ACCESS_WIFI_STATE)


## Events

### Ad Clicked

Indicates that the user has clicked on the interstial ad

[[Event('StartApp Interstitial', 'Ad Clicked')]]

### Ad Displayed

Indicates that an Ad is shown to the user.

[[Event('StartApp Interstitial', 'Ad Displayed')]]

### Ad Failed To Load

Called when an ad request failed to load. The message will display the error code and error message.

[[Event('StartApp Interstitial', 'Ad Failed To Load', 'errorCode', 'errorMessage')]]

| Params | []() |
|--------|------|
|error Code|<span class="chip chip-number">Number</span>|
|error Message|<span class="chip chip-text">Text</span>|


### Ad Failed To Show

Called when an an attempt was made to display the ad, but the ad was not ready to display.

[[Event('StartApp Interstitial', 'Ad Failed To Show', 'errorMessage')]]

| Params | []() |
|--------|------|
|error Message|<span class="chip chip-text">Text</span>|


### Ad Hidden

Indicates that an Ad which was shown to the user is now hidden.

[[Event('StartApp Interstitial', 'Ad Hidden')]]

### On Failed To Receive Ad

Called when an ad request failed to load.

[[Event('StartApp Interstitial', 'On Failed To Receive Ad', 'errorMessage')]]

| Params | []() |
|--------|------|
|error Message|<span class="chip chip-text">Text</span>|


### On Receive Ad

Called when an ad request failed to load. The message will display the error code and error message.

[[Event('StartApp Interstitial', 'On Receive Ad')]]

## Methods

### Load Ad

Load a new StartApp Interstitial ad.

[[Method('StartApp Interstitial', 'Load Ad', False)]]

### Show Interstitial Ad

It will show the Interstitial Ad

[[Method('StartApp Interstitial', 'Show Interstitial Ad', False)]]

## Properties

### App ID

<span class="chip chip-text">Text</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span> 