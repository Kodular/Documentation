# Amazon Interstitial

| Category | Version | Requires |
|:--------:|:-------:|:--------:|
|Monetization > Advertising|2|API 19, Android 4.4 - 4.4.4 KitKat|

:mag: {>>Non-visible component<<}

## Overview

An interstitial ad is a full-page ad. AdAmazonInterstitial component allows you to monetize your app. You must have a valid Amazon Application Key. If your application key is invalid, the ad will not display on the emulator or the device. Warning: Make sure you're in test mode during development to avoid being disabled for clicking your own ads. 

## Events

### Ad Closed

[[Event('Amazon Interstitial', 'Ad Closed')]]

Triggered when the close button of the interstitial ad is clicked. It's important to remember only one interstitial ad can be shown at a time. The previous ad has to be dismissed before a new ad can be shown.

### Ad Collapsed

[[Event('Amazon Interstitial', 'Ad Collapsed')]]

After a user clicks on the close ad button on an expanded ad, this callback is called immediately after collapsing the ad. This callback can be used to do things like resume your app or restart audio.

### Ad Expanded

[[Event('Amazon Interstitial', 'Ad Expanded')]]

This callback is called each time an ad is successfully loaded. You can use this to log metrics on ad views and assist with initial integration. Detailed information about the ad that loaded can be obtained from the AdProperties object.

### Ad Failed To Load

[[Event('Amazon Interstitial', 'Ad Failed To Load', 'error', 'message')]]

| Params | []() |
|--------|------|
|error|Text|
|message|Text|


Whenever an ad fails to be retrieved, the event is called, returning the error message.

### Ad Failed To Show

[[Event('Amazon Interstitial', 'Ad Failed To Show', 'message')]]

| Params | []() |
|--------|------|
|message|Text|


Called when an an attempt was made to display the ad, but the ad was not ready to display

### Ad Loaded

[[Event('Amazon Interstitial', 'Ad Loaded')]]

Triggered each time an ad is successfully loaded. But you don't have to display the ad right after it's loaded. For example, set a flag to true and then at a transition point, if flag=true, then display the ad.

## Methods

### Load Ad

[[Method('Amazon Interstitial', 'Load Ad', False)]]

Loads a new ad.

### Show Interstitial Ad

[[Method('Amazon Interstitial', 'Show Interstitial Ad', False)]]

It will show the Interstitial Ad

## Properties

### Application Key

<span class="chip chip-text">Text</span> <span class="chip chip-text">Default: <i>ApplicationKey</i></span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Non-Visible</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span> 

Enter Application Key. Go to Amazon Developer Portal and sign-in for your ApplicationKey

[[PropertyBlockGetterAndSetter('Amazon Interstitial', 'Application Key')]]

### Interstitial Commission

<span class="chip chip-text">Text</span> <span class="chip chip-text">Default: <i>unity</i></span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span> 

Sets the ad network used to take the commission.

[[PropertyBlockGetterAndSetter('Amazon Interstitial', 'Interstitial Commission')]]

### Enable Debug

<span class="chip chip-boolean">Boolean</span> <span class="chip chip-boolean">Default: <i>True</i></span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span> 

[[PropertyBlockGetterAndSetter('Amazon Interstitial', 'Enable Debug')]]

### Enable Geo Location Targeting

<span class="chip chip-boolean">Boolean</span> <span class="chip chip-boolean">Default: <i>True</i></span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span> 

If set to true, uses latitude and longitude coordinates as part of an ad request

[[PropertyBlockGetterAndSetter('Amazon Interstitial', 'Enable Geo Location Targeting')]]

### Enable Testing

<span class="chip chip-boolean">Boolean</span> <span class="chip chip-boolean">Default: <i>True</i></span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span> 

For debugging / development purposes flag all ad requests as tests, but set to false for production builds

[[PropertyBlockGetterAndSetter('Amazon Interstitial', 'Enable Testing')]]

### Target Age

<span class="chip chip-number">Number</span> <span class="chip chip-number">Default: <i>0</i></span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span> 

You can pass age information to the Amazon Mobile Ad Network to target specific age groups. If set as 0, Age Targetting will not be used

[[PropertyBlockGetterAndSetter('Amazon Interstitial', 'Target Age')]]