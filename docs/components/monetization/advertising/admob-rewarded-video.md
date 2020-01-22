# AdMob Rewarded Video

| Category | Version | Requires |
|:--------:|:-------:|:--------:|
|Monetization > Advertising|3|API 19 - Android 4.4 - 4.4.4 KitKat|

:mag: {>>Non-visible component<<}

## Overview

_A non-visible component that shows AdMob ads as full-screen video where users receive in-app rewards for viewing the ads._

## Events

### Ad Closed

[[Event('AdMob Rewarded Video', 'Ad Closed')]]

_Called when an ad was closed._

### Ad Failed To Load

[[Event('AdMob Rewarded Video', 'Ad Failed To Load', 'errorCode errorMessage')]]

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |error Code|`number`|
    |error Message|`text`|


_Called when an ad request failed to load. The message will display the error code and error message._

### Ad Left Application

[[Event('AdMob Rewarded Video', 'Ad Left Application')]]

_Called when an ad leaves the application (e.g., to go to the browser)._

### Ad Loaded

[[Event('AdMob Rewarded Video', 'Ad Loaded')]]

_Called when an ad request was loaded._

### Ad Opened

[[Event('AdMob Rewarded Video', 'Ad Opened')]]

_Called when an ad was opened._

### Ad Video Completed

[[Event('AdMob Rewarded Video', 'Ad Video Completed')]]

_Called when an video ad was completed._

### Ad Video Started

[[Event('AdMob Rewarded Video', 'Ad Video Started')]]

_Called when an video ad started to show content._

### On Consent Changed

[[Event('AdMob Rewarded Video', 'On Consent Changed', 'personalized')]]

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |personalized|`boolean`|


_Event triggered when the consent was changed._

### Rewarded

[[Event('AdMob Rewarded Video', 'Rewarded', 'type amount')]]

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |type|`text`|
    |amount|`number`|


_User watched video and should be rewarded._

## Methods

### Load Ad

[[Method('AdMob Rewarded Video', 'Load Ad', false)]]

_Load a new AdMob Rewarded Video ad._

### RevokeConsent

[[Method('AdMob Rewarded Video', 'RevokeConsent', false)]]

_Deletes the user's consent. Useful if you want to test the consent dialog in development._

### ShowAd

[[Method('AdMob Rewarded Video', 'ShowAd', false)]]

_It will show the Video_

## Properties

### Ad Enabled

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('AdMob Rewarded Video', 'Ad Enabled')]]

| Type | Default |
|:----:|:-------:|
|boolean|True|

_This property must be set to true to receive ads._

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

_If enabled you will see the consent dialog no matter if you are located in Europe or not. Please use this option only in development.  If this setting is enabled ALL taken consents will not be saved._

### Consent Message

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('AdMob Rewarded Video', 'Consent Message')]]

| Type | Default |
|:----:|:-------:|
|text|Can we continue to use your data to tailor ads for you?|

_The message for the consent dialog._

### Consent Title

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('AdMob Rewarded Video', 'Consent Title')]]

| Type | Default |
|:----:|:-------:|
|text|Data Protection|

_The title for the consent dialog._

### Test Mode

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('AdMob Rewarded Video', 'Test Mode')]]

| Type | Default |
|:----:|:-------:|
|boolean|False|

_If you want to test the component, that this property to true. After it you will receive test ads._

### Personalized Result

:eyes: Read-Only property
[[PropertyBlockGetter('AdMob Rewarded Video', 'Personalized Result')]]

| Type | Default |
|:----:|:-------:|
|boolean|None|

_Returns the current personalized consent. If true user has consent to personalized ads._