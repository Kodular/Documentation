# Facebook Rewarded Video

| Category | Requires | Version |
|:--------:|:-------:|:--------:|
|Monetization > Advertising|API 19, Android 4.4 - 4.4.4 KitKat|2|

:mag: {>>Non-visible component<<}

## Overview

A non-visible component that shows Facebook ads as full-screen video where users receive in-app rewards for viewing the ads.

??? example "Permissions"
    * [android.permission.INTERNET](https://developer.android.com/reference/android/Manifest.permission.html#INTERNET)
    * [android.permission.ACCESS_NETWORK_STATE](https://developer.android.com/reference/android/Manifest.permission.html#ACCESS_NETWORK_STATE)


## Events

### Ad Closed

Called when the user is about to return to the application after clicking on an ad.

[[Event('Facebook Rewarded Video', 'Ad Closed')]]

### Ad Failed To Load

Called when an ad request failed to load. The message will display the error code and error message.

[[Event('Facebook Rewarded Video', 'Ad Failed To Load', 'errorCode', 'errorMessage')]]

| Params | []() |
|--------|------|
|error Code|<span class="chip chip-number">Number</span>|
|error Message|<span class="chip chip-text">Text</span>|


### Ad Loaded

Called when an ad is received.

[[Event('Facebook Rewarded Video', 'Ad Loaded')]]

### Ad Opened

Called when an ad was opened.

[[Event('Facebook Rewarded Video', 'Ad Opened')]]

### Ad Video Completed

Called when an video ad was completed.

[[Event('Facebook Rewarded Video', 'Ad Video Completed')]]

### Ad Video Started

Called when an video ad started to show content.

[[Event('Facebook Rewarded Video', 'Ad Video Started')]]

### Error

Called when an ad request failed. message will display the reason for why the ad failed.

[[Event('Facebook Rewarded Video', 'Error', 'error')]]

| Params | []() |
|--------|------|
|error|<span class="chip chip-text">Text</span>|


## Methods

### Load Ad

Loads a new ad.

[[Method('Facebook Rewarded Video', 'Load Ad', False)]]

### Show Ad

Shows an ad to the user.

[[Method('Facebook Rewarded Video', 'Show Ad', False)]]

## Properties

### Rewarded Video Commission

<span class="chip chip-text">Text</span> <span class="chip chip-text">Default: <i>unity</i></span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span> 

Sets the ad network used to take the commission.

[[PropertyBlockGetterAndSetter('Facebook Rewarded Video', 'Rewarded Video Commission')]]

### Placement ID

<span class="chip chip-text">Text</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span> 