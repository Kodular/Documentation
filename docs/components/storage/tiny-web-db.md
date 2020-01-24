# Tiny Web DB

| Category | Requires | Version |
|:--------:|:-------:|:--------:|
|**Storage**|<span class="chip chip-any">API 19, Android 4.4 - 4.4.4 KitKat</span>|<span class="chip chip-number">2</span>|

:mag: {>>Non-visible component<<}

## Overview

A non-visible component that communicates with a web service to store and retrieve information.

??? example "Permissions"
    * [android.permission.INTERNET](https://developer.android.com/reference/android/Manifest.permission.html#INTERNET)


## Events

### Got Value

Indicates that a GetValue server request has succeeded.

<div class="block" ai2-block="event" not-rendered="true" value="%7B%22componentName%22:%20%22Tiny%20Web%20DB%22,%20%22name%22:%20%22Got%20Value%22,%20%22params%22:%20%5B%22tag%20From%20Web%20DB%22,%20%22value%20From%20Web%20DB%22%5D%7D"></div>


| Params | []() |
|--------|------|
|tag From Web DB|<span class="chip chip-text">Text</span>|
|value From Web DB|<span class="chip chip-any">Any</span>|


### Value Stored

Event indicating that a StoreValue server request has succeeded.

<div class="block" ai2-block="event" not-rendered="true" value="%7B%22componentName%22:%20%22Tiny%20Web%20DB%22,%20%22name%22:%20%22Value%20Stored%22,%20%22params%22:%20%5B%5D%7D"></div>


### Web Service Error

Indicates that the communication with the Web service signaled an error.

<div class="block" ai2-block="event" not-rendered="true" value="%7B%22componentName%22:%20%22Tiny%20Web%20DB%22,%20%22name%22:%20%22Web%20Service%20Error%22,%20%22params%22:%20%5B%22message%22%5D%7D"></div>


| Params | []() |
|--------|------|
|message|<span class="chip chip-text">Text</span>|


## Methods

### Get Value

GetValue asks the Web service to get the value stored under the given tag.

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22Tiny%20Web%20DB%22,%20%22name%22:%20%22Get%20Value%22,%20%22output%22:%20false,%20%22params%22:%20%5B%22tag%22%5D%7D"></div>


| Params | []() |
|--------|------|
|tag|<span class="chip chip-text">Text</span>|


### Store Value

Asks the Web service to store the given value under the given tag.

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22Tiny%20Web%20DB%22,%20%22name%22:%20%22Store%20Value%22,%20%22output%22:%20false,%20%22params%22:%20%5B%22tag%22,%20%22value%20To%20Store%22%5D%7D"></div>


| Params | []() |
|--------|------|
|tag|<span class="chip chip-text">Text</span>|
|value To Store|<span class="chip chip-any">Any</span>|


## Properties

### Service URL

<span class="chip chip-text">Text</span> <span class="chip chip-text">Default: <i>http://tinywebdb.builder.makeroid.io</i></span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span> 

Returns the URL of the web service database.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Tiny%20Web%20DB%22,%20%22name%22:%20%22Service%20URL%22,%20%22getter%22:%20true%7D"></div>
<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Tiny%20Web%20DB%22,%20%22name%22:%20%22Service%20URL%22,%20%22getter%22:%20false%7D"></div>
