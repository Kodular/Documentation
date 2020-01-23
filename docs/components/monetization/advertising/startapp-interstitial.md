# StartApp Interstitial

| Category | Version | Requires |
|:--------:|:-------:|:--------:|
|Monetization > Advertising|1|API 19 | Android 4.4 - 4.4.4 KitKat|

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

??? tip "Parameters"

    | Name | Type |
    |------|------|
    |error Code|`number`|
    |error Message|`text`|


Called when an ad request failed to load. The message will display the error code and error message.

### Ad Failed To Show

[[Event('StartApp Interstitial', 'Ad Failed To Show', 'errorMessage')]]

??? tip "Parameters"

    | Name | Type |
    |------|------|
    |error Message|`text`|


Called when an an attempt was made to display the ad, but the ad was not ready to display.

### Ad Hidden

[[Event('StartApp Interstitial', 'Ad Hidden')]]

Indicates that an Ad which was shown to the user is now hidden.

### On Failed To Receive Ad

[[Event('StartApp Interstitial', 'On Failed To Receive Ad', 'errorMessage')]]

??? tip "Parameters"

    | Name | Type |
    |------|------|
    |error Message|`text`|


Called when an ad request failed to load.

### On Receive Ad

[[Event('StartApp Interstitial', 'On Receive Ad')]]

Called when an ad request failed to load. The message will display the error code and error message.

## Methods

### Load Ad

_Block preview not available_

Load a new StartApp Interstitial ad.

### ShowInterstitialAd

_Block preview not available_

It will show the Interstitial Ad

## Properties

### App ID

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('StartApp Interstitial', 'App ID')]]

| Type |
|:----:|
|text|

_No description available_