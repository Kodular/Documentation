# Web

| Category | Version | Requires |
|:--------:|:-------:|:--------:|
|Connectivity|6|API 19 - Android 4.4 - 4.4.4 KitKat|

:mag: {>>Non-visible component<<}

## Overview

_A non-visible component that provides functions for HTTP GET, POST, PUT, and DELETE requests._

## Properties

### Allow Cookies

<small>Available as Common Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Web', 'Allow Cookies')]]

| Type | Default |
|:----:|:-------:|
|boolean|false|

Whether the cookies from a response should be saved and used in subsequent requests. Cookies are only supported on Android version 2.3 or greater.

### Response File Name

<small>Available as Common Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Web', 'Response File Name')]]

| Type |
|:----:|
|text|

The name of the file where the response should be saved. If SaveResponse is true and ResponseFileName is empty, then a new file name will be generated.

### Save Response

<small>Available as Common Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Web', 'Save Response')]]

| Type | Default |
|:----:|:-------:|
|boolean|false|

Whether the response should be saved in a file.

### Timeout

<small>Available as Common Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Web', 'Timeout')]]

| Type | Default |
|:----:|:-------:|
|number|0|

The number of milliseconds that a web request will wait for a response before giving up. If set to 0, then there is no time limit on how long the request will wait.

### URL

<small>Available as Common Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Web', 'URL')]]

| Type |
|:----:|
|text|

The URL for the web request.

### Request Headers



:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Web', 'Request Headers')]]

| Type | Default |
|:----:|:-------:|
|list|None|

The request headers, as a list of two-element sublists. The first element of each sublist represents the request header field name. The second element of each sublist represents the request header field values, either a single value or a list containing multiple values.