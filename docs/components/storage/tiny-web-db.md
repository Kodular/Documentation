# Tiny Web DB

| Category | Requires | Version |
|:--------:|:-------:|:--------:|
|Storage|API 19, Android 4.4 - 4.4.4 KitKat|2|

:mag: {>>Non-visible component<<}

## Overview

A non-visible component that communicates with a web service to store and retrieve information.

??? example "Permissions"
    * [android.permission.INTERNET](https://developer.android.com/reference/android/Manifest.permission.html#INTERNET)


## Events

### Got Value

Indicates that a GetValue server request has succeeded.

[[Event('Tiny Web DB', 'Got Value', 'tagFromWebDB', 'valueFromWebDB')]]

| Params | []() |
|--------|------|
|tag From Web DB|<span class="chip chip-text">Text</span>|
|value From Web DB|<span class="chip chip-any">Any</span>|


### Value Stored

Event indicating that a StoreValue server request has succeeded.

[[Event('Tiny Web DB', 'Value Stored')]]

### Web Service Error

Indicates that the communication with the Web service signaled an error.

[[Event('Tiny Web DB', 'Web Service Error', 'message')]]

| Params | []() |
|--------|------|
|message|<span class="chip chip-text">Text</span>|


## Methods

### Get Value

GetValue asks the Web service to get the value stored under the given tag.

[[Method('Tiny Web DB', 'Get Value', False, 'tag')]]

| Params | []() |
|--------|------|
|tag|<span class="chip chip-text">Text</span>|


### Store Value

Asks the Web service to store the given value under the given tag.

[[Method('Tiny Web DB', 'Store Value', False, 'tag', 'valueToStore')]]

| Params | []() |
|--------|------|
|tag|<span class="chip chip-text">Text</span>|
|value To Store|<span class="chip chip-any">Any</span>|


## Properties

### Service URL

<span class="chip chip-text">Text</span> <span class="chip chip-text">Default: <i>http://tinywebdb.builder.makeroid.io</i></span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span> 

Returns the URL of the web service database.

[[PropertyBlockGetterAndSetter('Tiny Web DB', 'Service URL')]]