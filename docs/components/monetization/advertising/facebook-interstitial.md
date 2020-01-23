# Facebook Interstitial

| Category | Version | Requires |
|:--------:|:-------:|:--------:|
|Monetization > Advertising|3|API 19, Android 4.4 - 4.4.4 KitKat|

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

??? tip "Parameters"

    | Name | Type |
    |------|------|
    |error|`text`|


Called when an ad request failed. message will display the reason for why the ad failed

## Methods

### Load Ad

_Block preview not available_

Loads a new ad.

### Show Ad

_Block preview not available_

Shows an ad to the user.

## Properties

### Interstitial Commission

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Facebook Interstitial', 'Interstitial Commission')]]

| Type | Default |
|:----:|:-------:|
|text|unity|

Sets the ad network used to take the commission.

### Placement ID

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Facebook Interstitial', 'Placement ID')]]

| Type |
|:----:|
|text|

_No description available_