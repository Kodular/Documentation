# Google Shortlink

{>> Non-Visible component<<}

| Category | Requires | Version |
|:--------:|:-------:|:--------:|
|**Deprecated**|<span class="chip chip-any">API 21, Android 5.0 Lollipop</span>|<span class="chip chip-number">1</span>|

!!! danger "Deprecated component"
    This component is deprecated. Projects that still contain it will fail to build until it is removed. You can still load existing projects in the Designer and live-test them with the Companion while you migrate, but APK and AAB builds are blocked. Look for an up-to-date replacement in the active component palette.

## Overview

A component to create Short links with the Google API

??? example "Permissions"
    * [android.permission.INTERNET](https://developer.android.com/reference/android/Manifest.permission.html#INTERNET)

## Events

### Got Response

Event to detect when a link was converted.

<div class="block" ai2-block="event" not-rendered="true" value="%7B%22componentName%22:%20%22Google%20Shortlink%22,%20%22name%22:%20%22Got%20Response%22,%20%22param%22:%20%5B%22success%22,%20%22response%20Content%22%5D%7D"></div>

| Params | []() |
|--------|------|
|success|<span class="chip chip-boolean">Boolean</span>|
|response Content|<span class="chip chip-text">Text</span>|

## Methods

### Short To URL

Convert a short link from google into a normal link. Powerd by Google.

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22Google%20Shortlink%22,%20%22name%22:%20%22Short%20To%20URL%22,%20%22output%22:%20false,%20%22param%22:%20%5B%22url%22%5D%7D"></div>

| Params | []() |
|--------|------|
|url|<span class="chip chip-text">Text</span>|

### URL To Short

Convert a link into a short link. Powerd by Google.

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22Google%20Shortlink%22,%20%22name%22:%20%22URL%20To%20Short%22,%20%22output%22:%20false,%20%22param%22:%20%5B%22url%22%5D%7D"></div>

| Params | []() |
|--------|------|
|url|<span class="chip chip-text">Text</span>|

## Properties

### API Key

<span style="user-select: none; white-space:pre-wrap;"><span class="chip chip-text">Text</span> :heavy_minus_sign: <span class="chip chip-rw">Write</span>  - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span></span>

Set here your api key to use the service. How to get a api key? Read here more: "https://goo.gl/AFks2R"

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Google%20Shortlink%22,%20%22name%22:%20%22API%20Key%22,%20%22getter%22:%20false%7D"></div>

### Default API Key

<span style="user-select: none; white-space:pre-wrap;"><span class="chip chip-text">Text</span> :heavy_minus_sign: <span class="chip chip-rw">Read</span>  - <span class="chip chip-bd">Blocks</span></span>

Don't use this default api key for your final app's. This default api key is only for development mode. Sponsored by NMD (Next Mobile Development).

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Google%20Shortlink%22,%20%22name%22:%20%22Default%20API%20Key%22,%20%22getter%22:%20true%7D"></div>
