# Firebase Remote Config

| Category | Version | Requires |
|:--------:|:-------:|:--------:|
|Google|2|API 19 - Android 4.4 - 4.4.4 KitKat|

:mag: {>>Non-visible component<<}

## Overview

_A non-visible component that gets data from the Remote Config service powered by Firebase._

## Events

### Fetch Failed

[[Event('Firebase Remote Config', 'Fetch Failed')]]

_Triggers when the fetch failed_

### Fetch Success

[[Event('Firebase Remote Config', 'Fetch Success')]]

_Triggers when the fetch was successful_

## Methods

### Fetch

[[Method('Firebase Remote Config', 'Fetch', false)]]

_Fetches parameter values for your app_

### GetBoolean

[[Method('Firebase Remote Config', 'GetBoolean', true, 'key')]]

{>>Returns `boolean`<<}

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |key|`text`|


_Gets a boolean value corresponding to the specified key_

### GetNumber

[[Method('Firebase Remote Config', 'GetNumber', true, 'key')]]

{>>Returns `number`<<}

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |key|`text`|


_Gets a number value corresponding to the specified key_

### GetText

[[Method('Firebase Remote Config', 'GetText', true, 'key')]]

{>>Returns `text`<<}

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |key|`text`|


_Gets a text value corresponding to the specified key_

## Properties

### Cache Expiration

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Firebase Remote Config', 'Cache Expiration')]]

| Type | Default |
|:----:|:-------:|
|number|43200|

_Time how long the data keeps on the device in ms_