# Facebook Rewarded Video

| Category | Version | Requires |
|:--------:|:-------:|:--------:|
|Monetization > Advertising|2|API 19 - Android 4.4 - 4.4.4 KitKat|

:mag: {>>Non-visible component<<}

## Overview

_A non-visible component that shows Facebook ads as full-screen video where users receive in-app rewards for viewing the ads._

## Events

### Ad Closed

[[Event('Facebook Rewarded Video', 'Ad Closed')]]

_Called when the user is about to return to the application after clicking on an ad._

### Ad Failed To Load

[[Event('Facebook Rewarded Video', 'Ad Failed To Load', 'errorCode errorMessage')]]

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |error Code|`number`|
    |error Message|`text`|


_Called when an ad request failed to load. The message will display the error code and error message._

### Ad Loaded

[[Event('Facebook Rewarded Video', 'Ad Loaded')]]

_Called when an ad is received._

### Ad Opened

[[Event('Facebook Rewarded Video', 'Ad Opened')]]

_Called when an ad was opened._

### Ad Video Completed

[[Event('Facebook Rewarded Video', 'Ad Video Completed')]]

_Called when an video ad was completed._

### Ad Video Started

[[Event('Facebook Rewarded Video', 'Ad Video Started')]]

_Called when an video ad started to show content._

### Error

[[Event('Facebook Rewarded Video', 'Error', 'error')]]

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |error|`text`|


_Called when an ad request failed. message will display the reason for why the ad failed._

## Methods

### Load Ad

[[Method('Facebook Rewarded Video', 'Load Ad', false)]]

_Loads a new ad._

### ShowAd

[[Method('Facebook Rewarded Video', 'ShowAd', false)]]

_Shows an ad to the user._

## Properties

### Rewarded Video Commission

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Facebook Rewarded Video', 'Rewarded Video Commission')]]

| Type | Default |
|:----:|:-------:|
|text|unity|

_Sets the ad network used to take the commission._

### Placement ID

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Facebook Rewarded Video', 'Placement ID')]]

| Type |
|:----:|
|text|

_No description available_