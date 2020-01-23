# Firebase Remote Config

| Category | Requires | Version |
|:--------:|:-------:|:--------:|
|Google|API 19, Android 4.4 - 4.4.4 KitKat|2|

:mag: {>>Non-visible component<<}

## Overview

A non-visible component that gets data from the Remote Config service powered by Firebase.

## Events

### Fetch Failed

[[Event('Firebase Remote Config', 'Fetch Failed')]]

Triggers when the fetch failed

### Fetch Success

[[Event('Firebase Remote Config', 'Fetch Success')]]

Triggers when the fetch was successful

## Methods

### Fetch

[[Method('Firebase Remote Config', 'Fetch', False)]]

Fetches parameter values for your app

### Get Boolean

[[Method('Firebase Remote Config', 'Get Boolean', True, 'key')]]

{>>Returns `boolean`<<}

| Params | []() |
|--------|------|
|key|Text|


Gets a boolean value corresponding to the specified key

### Get Number

[[Method('Firebase Remote Config', 'Get Number', True, 'key')]]

{>>Returns `number`<<}

| Params | []() |
|--------|------|
|key|Text|


Gets a number value corresponding to the specified key

### Get Text

[[Method('Firebase Remote Config', 'Get Text', True, 'key')]]

{>>Returns `text`<<}

| Params | []() |
|--------|------|
|key|Text|


Gets a text value corresponding to the specified key

## Properties

### Cache Expiration

<span class="chip chip-number">Number</span> <span class="chip chip-number">Default: <i>43200</i></span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span> 

Time how long the data keeps on the device in ms

[[PropertyBlockGetterAndSetter('Firebase Remote Config', 'Cache Expiration')]]