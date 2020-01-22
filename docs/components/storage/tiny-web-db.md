# Tiny Web DB

| Category | Version | Requires |
|:--------:|:-------:|:--------:|
|Storage|2|API 19 - Android 4.4 - 4.4.4 KitKat|

:mag: {>>Non-visible component<<}

## Overview

_A non-visible component that communicates with a web service to store and retrieve information._

## Events

### Got Value

[[Event('Tiny Web DB', 'Got Value', 'tagFromWebDB valueFromWebDB')]]

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |tag From Web DB|`text`|
    |value From Web DB|`any`|


_Indicates that a GetValue server request has succeeded._

### Value Stored

[[Event('Tiny Web DB', 'Value Stored')]]

_Event indicating that a StoreValue server request has succeeded._

### Web Service Error

[[Event('Tiny Web DB', 'Web Service Error', 'message')]]

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |message|`text`|


_Indicates that the communication with the Web service signaled an error._

## Methods

### GetValue

[[Method('Tiny Web DB', 'GetValue', false, 'tag')]]

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |tag|`text`|


_GetValue asks the Web service to get the value stored under the given tag._

### StoreValue

[[Method('Tiny Web DB', 'StoreValue', false, 'tag valueToStore')]]

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |tag|`text`|
    |value To Store|`any`|


_Asks the Web service to store the given value under the given tag._

## Properties

### Service URL

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Tiny Web DB', 'Service URL')]]

| Type | Default |
|:----:|:-------:|
|text|http://tinywebdb.builder.makeroid.io|

_Returns the URL of the web service database._