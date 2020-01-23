# Facebook Rewarded Video

| Category | Version | Requires |
|:--------:|:-------:|:--------:|
|Monetization > Advertising|2|API 19 - Android 4.4 - 4.4.4 KitKat|

:mag: {>>Non-visible component<<}

## Overview

A non-visible component that shows Facebook ads as full-screen video where users receive in-app rewards for viewing the ads.

## Events

### Ad Closed

[[Event('Facebook Rewarded Video', 'Ad Closed')]]

Called when the user is about to return to the application after clicking on an ad.

### Ad Failed To Load

[[Event('Facebook Rewarded Video', 'Ad Failed To Load', 'errorCode', 'errorMessage')]]

??? tip "Parameters"

    | Name | Type |
    |------|------|
    |error Code|`number`|
    |error Message|`text`|


Called when an ad request failed to load. The message will display the error code and error message.

### Ad Loaded

[[Event('Facebook Rewarded Video', 'Ad Loaded')]]

Called when an ad is received.

### Ad Opened

[[Event('Facebook Rewarded Video', 'Ad Opened')]]

Called when an ad was opened.

### Ad Video Completed

[[Event('Facebook Rewarded Video', 'Ad Video Completed')]]

Called when an video ad was completed.

### Ad Video Started

[[Event('Facebook Rewarded Video', 'Ad Video Started')]]

Called when an video ad started to show content.

### Error

[[Event('Facebook Rewarded Video', 'Error', 'error')]]

??? tip "Parameters"

    | Name | Type |
    |------|------|
    |error|`text`|


Called when an ad request failed. message will display the reason for why the ad failed.

## Methods

### Load Ad

[[Method('Facebook Rewarded Video', 'Load Ad', false)]]

Loads a new ad.

### ShowAd

[[Method('Facebook Rewarded Video', 'ShowAd', false)]]

Shows an ad to the user.

## Properties

### Rewarded Video Commission

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Facebook Rewarded Video', 'Rewarded Video Commission')]]

| Type | Default |
|:----:|:-------:|
|text|unity|

Sets the ad network used to take the commission.

### Placement ID

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Facebook Rewarded Video', 'Placement ID')]]

| Type |
|:----:|
|text|

_No description available_