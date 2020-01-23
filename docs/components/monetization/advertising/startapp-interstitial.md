# StartApp Interstitial

| Category | Requires | Version |
|:--------:|:-------:|:--------:|
|Monetization > Advertising|API 19, Android 4.4 - 4.4.4 KitKat|1|

:mag: {>>Non-visible component<<}

## Overview

A non-visible component that shows StartApp ads as full-screen advertisements.

## Events

### Ad Clicked

[[Event('StartApp Interstitial', 'Ad Clicked')]]

Indicates that the user has clicked on the interstial ad

### Ad Displayed

[[Event('StartApp Interstitial', 'Ad Displayed')]]

Indicates that an Ad is shown to the user.

### Ad Failed To Load

[[Event('StartApp Interstitial', 'Ad Failed To Load', 'errorCode', 'errorMessage')]]

| Params | []() |
|--------|------|
|error Code|Number|
|error Message|Text|


Called when an ad request failed to load. The message will display the error code and error message.

### Ad Failed To Show

[[Event('StartApp Interstitial', 'Ad Failed To Show', 'errorMessage')]]

| Params | []() |
|--------|------|
|error Message|Text|


Called when an an attempt was made to display the ad, but the ad was not ready to display.

### Ad Hidden

[[Event('StartApp Interstitial', 'Ad Hidden')]]

Indicates that an Ad which was shown to the user is now hidden.

### On Failed To Receive Ad

[[Event('StartApp Interstitial', 'On Failed To Receive Ad', 'errorMessage')]]

| Params | []() |
|--------|------|
|error Message|Text|


Called when an ad request failed to load.

### On Receive Ad

[[Event('StartApp Interstitial', 'On Receive Ad')]]

Called when an ad request failed to load. The message will display the error code and error message.

## Methods

### Load Ad

[[Method('StartApp Interstitial', 'Load Ad', False)]]

Load a new StartApp Interstitial ad.

### Show Interstitial Ad

[[Method('StartApp Interstitial', 'Show Interstitial Ad', False)]]

It will show the Interstitial Ad

## Properties

### App ID

<span class="chip chip-text">Text</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Non-Visible</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span> 

[[PropertyBlockGetterAndSetter('StartApp Interstitial', 'App ID')]]