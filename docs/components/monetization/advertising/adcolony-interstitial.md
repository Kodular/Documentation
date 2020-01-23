# AdColony Interstitial

| Category | Requires | Version |
|:--------:|:-------:|:--------:|
|Monetization > Advertising|API 19, Android 4.4 - 4.4.4 KitKat|1|

:mag: {>>Non-visible component<<}

## Overview

A non-visible component that shows AdColony ads as full-screen advertisements.

## Events

### Ad Expiring

[[Event('AdColony Interstitial', 'Ad Expiring')]]

Called when the ad is expiring. You should load a new ad.

### Ad Failed To Load

[[Event('AdColony Interstitial', 'Ad Failed To Load', 'errorCode', 'errorMessage')]]

| Params | []() |
|--------|------|
|error Code|Number|
|error Message|Text|


Called when an ad request failed to load. The message will display the error code and error message.

### Ad Loaded

[[Event('AdColony Interstitial', 'Ad Loaded')]]

Called when an ad is received.

### Ad Opened

[[Event('AdColony Interstitial', 'Ad Opened')]]

Called when an ad was opened.

### Error

[[Event('AdColony Interstitial', 'Error', 'error')]]

| Params | []() |
|--------|------|
|error|Text|


Called when an ad request failed. The message will display the reason for why the ad failed.

## Methods

### Is European User

[[Method('AdColony Interstitial', 'Is European User', True)]]

{>>Returns `boolean`<<}

Returns true if the current app user is located in europe. If true you must ask the user as example in a dialog if he give his consent for personalized ads.

### Load Ad

[[Method('AdColony Interstitial', 'Load Ad', False)]]

Loads a new ad.

### Show Ad

[[Method('AdColony Interstitial', 'Show Ad', False)]]

Shows an ad to the user.

## Properties

### App ID

<span class="chip chip-text">Text</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Non-Visible</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span> 

[[PropertyBlockGetterAndSetter('AdColony Interstitial', 'App ID')]]

### Zone ID

<span class="chip chip-text">Text</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Non-Visible</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span> 

[[PropertyBlockGetterAndSetter('AdColony Interstitial', 'Zone ID')]]

### User Consent

<span class="chip chip-boolean">Boolean</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Blocks</span> 

If set to true the user allowed the ad network to show personalized ads. You only need to request the consent from european users.

[[PropertyBlockGetterAndSetter('AdColony Interstitial', 'User Consent')]]