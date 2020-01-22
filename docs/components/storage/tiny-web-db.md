# Tiny Web DB

| Category | Version | Requires |
|:--------:|:-------:|:--------:|
|Storage|2|API 19 - Android 4.4 - 4.4.4 KitKat|

:mag: {>>Non-visible component<<}

## Overview

_A non-visible component that communicates with a web service to store and retrieve information._

## Properties

### Service URL

<small>Available as Common Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Tiny Web DB', 'Service URL')]]

| Type | Default |
|:----:|:-------:|
|text|http://tinywebdb.builder.makeroid.io|

Returns the URL of the web service database.

## Methods

### GetValue



[[Method('Tiny Web DB', 'GetValue', false, 'tag')]]

**Parameters**

| Name | Type |
|------|------|
|tag|`text`|


GetValue asks the Web service to get the value stored under the given tag.

### StoreValue



[[Method('Tiny Web DB', 'StoreValue', false, 'tag valueToStore')]]

**Parameters**

| Name | Type |
|------|------|
|tag|`text`|
|value To Store|`any`|


Asks the Web service to store the given value under the given tag.