# AdMob Rewarded Video

| Category | Version | Requires |
|:--------:|:-------:|:--------:|
|Monetization > Advertising|3|API 19 - Android 4.4 - 4.4.4 KitKat|

:mag: {>>Non-visible component<<}

## Overview

A non-visible component that shows AdMob ads as full-screen video where users receive in-app rewards for viewing the ads.

## Events

### Ad Closed

[[Event('AdMob Rewarded Video', 'Ad Closed')]]

Called when an ad was closed.

### Ad Failed To Load

[[Event('AdMob Rewarded Video', 'Ad Failed To Load', 'errorCode errorMessage')]]

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |error Code|`number`|
    |error Message|`text`|


Called when an ad request failed to load. The message will display the error code and error message.

### Ad Left Application

[[Event('AdMob Rewarded Video', 'Ad Left Application')]]

Called when an ad leaves the application (e.g., to go to the browser).

### Ad Loaded

[[Event('AdMob Rewarded Video', 'Ad Loaded')]]

Called when an ad request was loaded.

### Ad Opened

[[Event('AdMob Rewarded Video', 'Ad Opened')]]

Called when an ad was opened.

### Ad Video Completed

[[Event('AdMob Rewarded Video', 'Ad Video Completed')]]

Called when an video ad was completed.

### Ad Video Started

[[Event('AdMob Rewarded Video', 'Ad Video Started')]]

Called when an video ad started to show content.

### On Consent Changed

[[Event('AdMob Rewarded Video', 'On Consent Changed', 'personalized')]]

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |personalized|`boolean`|


Event triggered when the consent was changed.

### Rewarded

[[Event('AdMob Rewarded Video', 'Rewarded', 'type amount')]]

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |type|`text`|
    |amount|`number`|


User watched video and should be rewarded.

## Methods

### Load Ad

[[Method('AdMob Rewarded Video', 'Load Ad', false)]]

Load a new AdMob Rewarded Video ad.

### RevokeConsent

[[Method('AdMob Rewarded Video', 'RevokeConsent', false)]]

Deletes the user's consent. Useful if you want to test the consent dialog in development.

### ShowAd

[[Method('AdMob Rewarded Video', 'ShowAd', false)]]

It will show the Video

## Properties

### Ad Enabled

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('AdMob Rewarded Video', 'Ad Enabled')]]

| Type | Default |
|:----:|:-------:|
|boolean|True|

This property must be set to true to receive ads.

### Ad Unit Id

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('AdMob Rewarded Video', 'Ad Unit Id')]]

| Type | Default |
|:----:|:-------:|
|text|ca-app-pub-3940256099942544/5224354917|

_No description available_

### Consent Development Mode

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('AdMob Rewarded Video', 'Consent Development Mode')]]

| Type | Default |
|:----:|:-------:|
|boolean|False|

If enabled you will see the consent dialog no matter if you are located in Europe or not. Please use this option only in development.  If this setting is enabled ALL taken consents will not be saved.

### Consent Message

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('AdMob Rewarded Video', 'Consent Message')]]

| Type | Default |
|:----:|:-------:|
|text|Can we continue to use your data to tailor ads for you?|

The message for the consent dialog.

### Consent Title

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('AdMob Rewarded Video', 'Consent Title')]]

| Type | Default |
|:----:|:-------:|
|text|Data Protection|

The title for the consent dialog.

### Test Mode

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('AdMob Rewarded Video', 'Test Mode')]]

| Type | Default |
|:----:|:-------:|
|boolean|False|

If you want to test the component, that this property to true. After it you will receive test ads.

### Personalized Result

:eyes: Read-Only property
[[PropertyBlockGetter('AdMob Rewarded Video', 'Personalized Result')]]

| Type | Default |
|:----:|:-------:|
|boolean|None|

Returns the current personalized consent. If true user has consent to personalized ads.