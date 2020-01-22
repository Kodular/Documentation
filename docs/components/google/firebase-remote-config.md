# Firebase Remote Config

| Category | Version | Requires |
|:--------:|:-------:|:--------:|
|Google|2|API 19 - Android 4.4 - 4.4.4 KitKat|

:mag: {>>Non-visible component<<}

## Overview

_A non-visible component that gets data from the Remote Config service powered by Firebase._

## Properties

### Cache Expiration

<small>Available as Common Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Firebase Remote Config', 'Cache Expiration')]]

| Type | Default |
|:----:|:-------:|
|number|43200|

Time how long the data keeps on the device in ms

## Methods

### Fetch



[[Method('Firebase Remote Config', 'Fetch', false)]]

Fetches parameter values for your app

### GetBoolean



[[Method('Firebase Remote Config', 'GetBoolean', true, 'key')]]

{>>Returns `boolean`<<}


**Parameters**

| Name | Type |
|------|------|
|key|`text`|


Gets a boolean value corresponding to the specified key

### GetNumber



[[Method('Firebase Remote Config', 'GetNumber', true, 'key')]]

{>>Returns `number`<<}


**Parameters**

| Name | Type |
|------|------|
|key|`text`|


Gets a number value corresponding to the specified key

### GetText



[[Method('Firebase Remote Config', 'GetText', true, 'key')]]

{>>Returns `text`<<}


**Parameters**

| Name | Type |
|------|------|
|key|`text`|


Gets a text value corresponding to the specified key