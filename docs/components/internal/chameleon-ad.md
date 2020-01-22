# Chameleon Ad

| Category | Version | Requires |
|:--------:|:-------:|:--------:|
|Internal|1|API 19 - Android 4.4 - 4.4.4 KitKat|

:mag: {>>Non-visible component<<}

## Overview

_A non-visible component to show interstitial ads form the Chameleon Ads Network._

## Events

### Ad Closed

[[Event('Chameleon Ad', 'Ad Closed')]]

_Event triggered when ads are closed._

### Ad Failed To Load

[[Event('Chameleon Ad', 'Ad Failed To Load', 'errorMessage errorCode')]]

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |error Message|`text`|
    |error Code|`number`|


_Event triggered when ads failed to load. Here is the list with all possible error codes (int) and error messages (string): '1' = The before loaded ad was not finished. It is not allowed to load a new one. The first must be in finished loading process. '2' = Ad failed to load. No internet connection available. '3' = Please enter a valid chameleon 'App ID'. '4' = Please enter a valid chameleon 'User ID'. '5' = UNKNOWN_WEB_VIEW_ERROR. '6' = There was an error validating the SSL Certificate._

### Ad Failed To Show

[[Event('Chameleon Ad', 'Ad Failed To Show', 'errorMessage errorCode')]]

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |error Message|`text`|
    |error Code|`number`|


_Event triggered when ads failed to show. Here is the list with all possible error codes (int) and error messages (string): '1' = UNKNOWN_ERROR_ON_SHOW_AD. '2' = The ad must first be loaded. After loading finished the ad can be shown._

### Ad Loaded

[[Event('Chameleon Ad', 'Ad Loaded')]]

_Event triggered when ads are loaded._

## Methods

### Load Ad

[[Method('Chameleon Ad', 'Load Ad', false)]]

_Load a new interstitial chameleon ad._

### ShowAd

[[Method('Chameleon Ad', 'ShowAd', false)]]

_Show a chameleon interstitial ad after it was loaded._

## Properties

### App ID

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Chameleon Ad', 'App ID')]]

| Type |
|:----:|
|text|

_Input here your own Chameleon Ad 'App ID' (request one at my.kodular.io)._

### Test Mode

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Chameleon Ad', 'Test Mode')]]

| Type | Default |
|:----:|:-------:|
|boolean|False|

_If set to true, the device will receive test ads. This option must be set before you load a new ad._

### User ID

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Chameleon Ad', 'User ID')]]

| Type |
|:----:|
|text|

_Input here your own Chameleon Ad 'User ID' (get yours at my.kodular.io)._