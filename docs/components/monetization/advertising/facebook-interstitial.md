# Facebook Interstitial

| Category | Requires | Version |
|:--------:|:-------:|:--------:|
|Monetization > Advertising|API 19, Android 4.4 - 4.4.4 KitKat|3|

:mag: {>>Non-visible component<<}

## Overview

A non-visible component that shows Facebook ads as full-screen advertisements.

## Events

### Ad Closed

[[Event('Facebook Interstitial', 'Ad Closed')]]

Called when the user is about to return to the application after clicking on an ad

### Ad Loaded

[[Event('Facebook Interstitial', 'Ad Loaded')]]

Called when an ad is received

### Error

[[Event('Facebook Interstitial', 'Error', 'error')]]

| Params | []() |
|--------|------|
|error|Text|


Called when an ad request failed. message will display the reason for why the ad failed

## Methods

### Load Ad

[[Method('Facebook Interstitial', 'Load Ad', False)]]

Loads a new ad.

### Show Ad

[[Method('Facebook Interstitial', 'Show Ad', False)]]

Shows an ad to the user.

## Properties

### Interstitial Commission

<span class="chip chip-text">Text</span> <span class="chip chip-text">Default: <i>unity</i></span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span> 

Sets the ad network used to take the commission.

[[PropertyBlockGetterAndSetter('Facebook Interstitial', 'Interstitial Commission')]]

### Placement ID

<span class="chip chip-text">Text</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Non-Visible</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span> 

[[PropertyBlockGetterAndSetter('Facebook Interstitial', 'Placement ID')]]