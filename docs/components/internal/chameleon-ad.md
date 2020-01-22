# Chameleon Ad

| Category | Version | Requires |
|:--------:|:-------:|:--------:|
|Internal|1|API 19 - Android 4.4 - 4.4.4 KitKat|

:mag: {>>Non-visible component<<}

## Overview

_A non-visible component to show interstitial ads form the Chameleon Ads Network._

## Properties

### App ID

<small>Available as Common Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Chameleon Ad', 'App ID')]]

| Type |
|:----:|
|text|

Input here your own Chameleon Ad 'App ID' (request one at my.kodular.io).

### Test Mode

<small>Available as Common Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Chameleon Ad', 'Test Mode')]]

| Type | Default |
|:----:|:-------:|
|boolean|False|

If set to true, the device will receive test ads. This option must be set before you load a new ad.

### User ID

<small>Available as Common Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Chameleon Ad', 'User ID')]]

| Type |
|:----:|
|text|

Input here your own Chameleon Ad 'User ID' (get yours at my.kodular.io).

## Methods

### Load Ad



[[Method('Chameleon Ad', 'Load Ad', false)]]

Load a new interstitial chameleon ad.

### ShowAd



[[Method('Chameleon Ad', 'ShowAd', false)]]

Show a chameleon interstitial ad after it was loaded.