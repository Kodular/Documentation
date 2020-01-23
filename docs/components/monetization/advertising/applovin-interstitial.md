# AppLovin Interstitial

| Category | Requires | Version |
|:--------:|:-------:|:--------:|
|Monetization > Advertising|API 19, Android 4.4 - 4.4.4 KitKat|1|

:mag: {>>Non-visible component<<}

## Overview

A non-visible component to show ads from AppLovin.

## Events

### Ad Closed

Called when an ad was closed.

[[Event('AppLovin Interstitial', 'Ad Closed')]]

### Ad Failed To Load

Called when an ad request failed to load. The message will display the error code and error message.

[[Event('AppLovin Interstitial', 'Ad Failed To Load', 'errorCode', 'errorMessage')]]

| Params | []() |
|--------|------|
|error Code|<span class="chip chip-number">Number</span>|
|error Message|<span class="chip chip-text">Text</span>|


### Ad Loaded

Called when an ad is received.

[[Event('AppLovin Interstitial', 'Ad Loaded')]]

### Ad Opened

Called when an ad was opened.

[[Event('AppLovin Interstitial', 'Ad Opened')]]

### Ad Started

Called when an ad was started.

[[Event('AppLovin Interstitial', 'Ad Started')]]

### Error

Called when an ad request failed. The message will display the reason for why the ad failed.

[[Event('AppLovin Interstitial', 'Error', 'errorCode', 'errorMessage')]]

| Params | []() |
|--------|------|
|error Code|<span class="chip chip-number">Number</span>|
|error Message|<span class="chip chip-text">Text</span>|


## Methods

### Is European User

<span class="chip chip-boolean">Returns: <i>Boolean</i></span> 

Returns true if the current app user is located in europe. If true you must ask the user as example in a dialog if he give his consent for personalized ads.

[[Method('AppLovin Interstitial', 'Is European User', True)]]

### Load Ad

Loads a new ad.

[[Method('AppLovin Interstitial', 'Load Ad', False)]]

### Show Ad

Shows an ad to the user.

[[Method('AppLovin Interstitial', 'Show Ad', False)]]

## Properties

### SDK Key

<span class="chip chip-text">Text</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Non-Visible</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span> 

[[PropertyBlockGetterAndSetter('AppLovin Interstitial', 'SDK Key')]]

### Test Mode

<span class="chip chip-boolean">Boolean</span> <span class="chip chip-boolean">Default: <i>False</i></span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span> 

If you want to test the component then that this property to true. Then you will receive test ads.

[[PropertyBlockGetterAndSetter('AppLovin Interstitial', 'Test Mode')]]

### User Consent

<span class="chip chip-boolean">Boolean</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Blocks</span> 

If set to true the user allowed the ad network to show personalized ads. You only need to request the consent from european users.

[[PropertyBlockGetterAndSetter('AppLovin Interstitial', 'User Consent')]]