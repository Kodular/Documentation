# Amazon Interstitial

| Category | Version | Requires |
|:--------:|:-------:|:--------:|
|Advertising|2|API 19 - Android 4.4 - 4.4.4 KitKat|

:mag: {>>Non-visible component<<}

## Overview

_An interstitial ad is a full-page ad. AdAmazonInterstitial component allows you to monetize your app. You must have a valid Amazon Application Key. If your application key is invalid, the ad will not display on the emulator or the device. Warning: Make sure you're in test mode during development to avoid being disabled for clicking your own ads. _

## Properties

### Application Key

<small>Available as Common Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Amazon Interstitial', 'Application Key')]]

| Type | Default |
|:----:|:-------:|
|text|ApplicationKey|

Enter Application Key. Go to Amazon Developer Portal and sign-in for your ApplicationKey

### Interstitial Commission

<small>Available as Common Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Amazon Interstitial', 'Interstitial Commission')]]

| Type | Default |
|:----:|:-------:|
|text|unity|

Sets the ad network used to take the commission.

### Enable Debug

<small>Available as Common Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Amazon Interstitial', 'Enable Debug')]]

| Type | Default |
|:----:|:-------:|
|boolean|True|

_No description available_

### Enable Geo Location Targeting

<small>Available as Common Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Amazon Interstitial', 'Enable Geo Location Targeting')]]

| Type | Default |
|:----:|:-------:|
|boolean|True|

If set to true, uses latitude and longitude coordinates as part of an ad request

### Enable Testing

<small>Available as Common Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Amazon Interstitial', 'Enable Testing')]]

| Type | Default |
|:----:|:-------:|
|boolean|True|

For debugging / development purposes flag all ad requests as tests, but set to false for production builds

### Target Age

<small>Available as Common Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Amazon Interstitial', 'Target Age')]]

| Type | Default |
|:----:|:-------:|
|number|0|

You can pass age information to the Amazon Mobile Ad Network to target specific age groups. If set as 0, Age Targetting will not be used