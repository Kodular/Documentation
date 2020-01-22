# Facebook Interstitial

| Category | Version | Requires |
|:--------:|:-------:|:--------:|
|Monetization > Advertising|3|API 19 - Android 4.4 - 4.4.4 KitKat|

:mag: {>>Non-visible component<<}

## Overview

_A non-visible component that shows Facebook ads as full-screen advertisements._

## Events

### Ad Closed

[[Event('Facebook Interstitial', 'Ad Closed')]]

_Called when the user is about to return to the application after clicking on an ad_

### Ad Loaded

[[Event('Facebook Interstitial', 'Ad Loaded')]]

_Called when an ad is received_

### Error

[[Event('Facebook Interstitial', 'Error', 'error')]]

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |error|`text`|


_Called when an ad request failed. message will display the reason for why the ad failed_

## Methods

### Load Ad

[[Method('Facebook Interstitial', 'Load Ad', false)]]

_Loads a new ad._

### ShowAd

[[Method('Facebook Interstitial', 'ShowAd', false)]]

_Shows an ad to the user._

## Properties

### Interstitial Commission

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Facebook Interstitial', 'Interstitial Commission')]]

| Type | Default |
|:----:|:-------:|
|text|unity|

_Sets the ad network used to take the commission._

### Placement ID

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Facebook Interstitial', 'Placement ID')]]

| Type |
|:----:|
|text|

_No description available_