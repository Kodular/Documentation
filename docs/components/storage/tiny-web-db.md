# Tiny Web DB

| Category | Version | Requires |
|:--------:|:-------:|:--------:|
|Storage|2|API 19 - Android 4.4 - 4.4.4 KitKat|

:mag: {>>Non-visible component<<}

## Overview

A non-visible component that communicates with a web service to store and retrieve information.

## Events

### Got Value

[[Event('Tiny Web DB', 'Got Value', 'tagFromWebDB', 'valueFromWebDB')]]

??? tip "Parameters"

    | Name | Type |
    |------|------|
    |tag From Web DB|`text`|
    |value From Web DB|`any`|


Indicates that a GetValue server request has succeeded.

### Value Stored

[[Event('Tiny Web DB', 'Value Stored')]]

Event indicating that a StoreValue server request has succeeded.

### Web Service Error

[[Event('Tiny Web DB', 'Web Service Error', 'message')]]

??? tip "Parameters"

    | Name | Type |
    |------|------|
    |message|`text`|


Indicates that the communication with the Web service signaled an error.

## Methods

### GetValue

_Block preview not available_

??? tip "Parameters"

    | Name | Type |
    |------|------|
    |tag|`text`|


GetValue asks the Web service to get the value stored under the given tag.

### StoreValue

_Block preview not available_

??? tip "Parameters"

    | Name | Type |
    |------|------|
    |tag|`text`|
    |value To Store|`any`|


Asks the Web service to store the given value under the given tag.

## Properties

### Service URL

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Tiny Web DB', 'Service URL')]]

| Type | Default |
|:----:|:-------:|
|text|http://tinywebdb.builder.makeroid.io|

Returns the URL of the web service database.