# Unity Ads Interstitial

| Category | Requires | Version |
|:--------:|:-------:|:--------:|
|Monetization > Advertising|API 19, Android 4.4 - 4.4.4 KitKat|2|

:mag: {>>Non-visible component<<}

## Overview

A non-visible component that shows Unity ads as full-screen advertisements.

??? example "Permissions"
    * [android.permission.INTERNET](https://developer.android.com/reference/android/Manifest.permission.html#android.permission.INTERNET)
    * [android.permission.ACCESS_NETWORK_STATE](https://developer.android.com/reference/android/Manifest.permission.html#android.permission.ACCESS_NETWORK_STATE)


## Events

### Ad Closed

Called when an ad was closed.

[[Event('Unity Ads Interstitial', 'Ad Closed', 'placementId', 'wasSkipped', 'wasCompleted')]]

| Params | []() |
|--------|------|
|placement Id|<span class="chip chip-text">Text</span>|
|was Skipped|<span class="chip chip-boolean">Boolean</span>|
|was Completed|<span class="chip chip-boolean">Boolean</span>|


### Ad Opened

Called when an ad was opened.

[[Event('Unity Ads Interstitial', 'Ad Opened', 'placementId')]]

| Params | []() |
|--------|------|
|placement Id|<span class="chip chip-text">Text</span>|


### Ad Started

Called when an ad was started.

[[Event('Unity Ads Interstitial', 'Ad Started', 'placementId')]]

| Params | []() |
|--------|------|
|placement Id|<span class="chip chip-text">Text</span>|


### Error

Called when an ad request failed. The message will display the reason for why the ad failed.

[[Event('Unity Ads Interstitial', 'Error', 'error')]]

| Params | []() |
|--------|------|
|error|<span class="chip chip-text">Text</span>|


## Methods

### Is Ready

<span class="chip chip-boolean">Returns: <i>Boolean</i></span> 

Returns true if the ad is finished loading and can now be shown.

[[Method('Unity Ads Interstitial', 'Is Ready', True)]]

### Show Ad

Shows an ad to the user.

[[Method('Unity Ads Interstitial', 'Show Ad', False)]]

## Properties

### Game ID

<span class="chip chip-text">Text</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Non-Visible</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span> 

[[PropertyBlockGetterAndSetter('Unity Ads Interstitial', 'Game ID')]]

### Placement ID

<span class="chip chip-text">Text</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Non-Visible</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span> 

[[PropertyBlockGetterAndSetter('Unity Ads Interstitial', 'Placement ID')]]

### Test Mode

<span class="chip chip-boolean">Boolean</span> <span class="chip chip-boolean">Default: <i>False</i></span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Non-Visible</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span> 

If you want to test the component then that this property to true. Then you will receive test ads.

[[PropertyBlockGetterAndSetter('Unity Ads Interstitial', 'Test Mode')]]