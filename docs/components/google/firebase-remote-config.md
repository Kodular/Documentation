# Firebase Remote Config

| Category | Requires | Version |
|:--------:|:-------:|:--------:|
|Google|API 19, Android 4.4 - 4.4.4 KitKat|2|

:mag: {>>Non-visible component<<}

## Overview

A non-visible component that gets data from the Remote Config service powered by Firebase.

## Events

### Fetch Failed

Triggers when the fetch failed

[[Event('Firebase Remote Config', 'Fetch Failed')]]

### Fetch Success

Triggers when the fetch was successful

[[Event('Firebase Remote Config', 'Fetch Success')]]

## Methods

### Fetch

Fetches parameter values for your app

[[Method('Firebase Remote Config', 'Fetch', False)]]

### Get Boolean

<span class="chip chip-boolean">Returns: <i>Boolean</i></span> 

Gets a boolean value corresponding to the specified key

[[Method('Firebase Remote Config', 'Get Boolean', True, 'key')]]

| Params | []() |
|--------|------|
|key|<span class="chip chip-text">Text</span>|


### Get Number

<span class="chip chip-number">Returns: <i>Number</i></span> 

Gets a number value corresponding to the specified key

[[Method('Firebase Remote Config', 'Get Number', True, 'key')]]

| Params | []() |
|--------|------|
|key|<span class="chip chip-text">Text</span>|


### Get Text

<span class="chip chip-text">Returns: <i>Text</i></span> 

Gets a text value corresponding to the specified key

[[Method('Firebase Remote Config', 'Get Text', True, 'key')]]

| Params | []() |
|--------|------|
|key|<span class="chip chip-text">Text</span>|


## Properties

### Cache Expiration

<span class="chip chip-number">Number</span> <span class="chip chip-number">Default: <i>43200</i></span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span> 

Time how long the data keeps on the device in ms

[[PropertyBlockGetterAndSetter('Firebase Remote Config', 'Cache Expiration')]]