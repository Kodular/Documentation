# Google Shortlink

| Category | Version | Requires |
|:--------:|:-------:|:--------:|
|Internal|1|API 19 - Android 4.4 - 4.4.4 KitKat|

:mag: {>>Non-visible component<<}

## Overview

A component to create Short links with the Google API

## Events

### Got Response

[[Event('Google Shortlink', 'Got Response', 'success', 'responseContent')]]

??? tip "Parameters"

    | Name | Type |
    |------|------|
    |success|`boolean`|
    |response Content|`text`|


Event to detect when a link was converted.

## Methods

### ShortToUrl

_Block preview not available_

??? tip "Parameters"

    | Name | Type |
    |------|------|
    |url|`text`|


Convert a short link from google into a normal link. Powerd by Google.

### UrlToShort

_Block preview not available_

??? tip "Parameters"

    | Name | Type |
    |------|------|
    |url|`text`|


Convert a link into a short link. Powerd by Google.

## Properties

### API Key

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Google Shortlink', 'API Key')]]

| Type |
|:----:|
|text|

Set here your api key to use the service. How to get a api key? Read here more: "https://goo.gl/AFks2R"

### Default API Key

:eyes: Read-Only property
[[PropertyBlockGetter('Google Shortlink', 'Default API Key')]]

| Type | Default |
|:----:|:-------:|
|text|None|

Don't use this default api key for your final app's. This default api key is only for development mode. Sponsored by NMD (Next Mobile Development).