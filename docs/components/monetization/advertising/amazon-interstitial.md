# Amazon Interstitial

| Category | Version | Requires |
|:--------:|:-------:|:--------:|
|Monetization > Advertising|2|API 19 - Android 4.4 - 4.4.4 KitKat|

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

[[Event('Amazon Interstitial', 'Ad Failed To Load', 'error message')]]

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |error|`text`|
    |message|`text`|


Whenever an ad fails to be retrieved, the event is called, returning the error message.

### Ad Failed To Show

[[Event('Amazon Interstitial', 'Ad Failed To Show', 'message')]]

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |message|`text`|


Called when an an attempt was made to display the ad, but the ad was not ready to display

### Ad Loaded

[[Event('Amazon Interstitial', 'Ad Loaded')]]

Triggered each time an ad is successfully loaded. But you don't have to display the ad right after it's loaded. For example, set a flag to true and then at a transition point, if flag=true, then display the ad.

## Methods

### Load Ad

[[Method('Amazon Interstitial', 'Load Ad', false)]]

Loads a new ad.

### ShowInterstitialAd

[[Method('Amazon Interstitial', 'ShowInterstitialAd', false)]]

It will show the Interstitial Ad

## Properties

### Application Key

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Amazon Interstitial', 'Application Key')]]

| Type | Default |
|:----:|:-------:|
|text|ApplicationKey|

Enter Application Key. Go to Amazon Developer Portal and sign-in for your ApplicationKey

### Interstitial Commission

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Amazon Interstitial', 'Interstitial Commission')]]

| Type | Default |
|:----:|:-------:|
|text|unity|

Sets the ad network used to take the commission.

### Enable Debug

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Amazon Interstitial', 'Enable Debug')]]

| Type | Default |
|:----:|:-------:|
|boolean|True|

_No description available_

### Enable Geo Location Targeting

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Amazon Interstitial', 'Enable Geo Location Targeting')]]

| Type | Default |
|:----:|:-------:|
|boolean|True|

If set to true, uses latitude and longitude coordinates as part of an ad request

### Enable Testing

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Amazon Interstitial', 'Enable Testing')]]

| Type | Default |
|:----:|:-------:|
|boolean|True|

For debugging / development purposes flag all ad requests as tests, but set to false for production builds

### Target Age

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Amazon Interstitial', 'Target Age')]]

| Type | Default |
|:----:|:-------:|
|number|0|

You can pass age information to the Amazon Mobile Ad Network to target specific age groups. If set as 0, Age Targetting will not be used