# Web

{>> Non-Visible component<<}

| Category | Requires | Version |
|:--------:|:-------:|:--------:|
|**Connectivity**|<span class="chip chip-any">API 21, Android 5.0 Lollipop</span>|<span class="chip chip-number">6</span>|

## Overview

A non-visible component that provides functions for HTTP GET, POST, PUT, and DELETE requests.

??? example "Permissions"
    * [android.permission.INTERNET](https://developer.android.com/reference/android/Manifest.permission.html#INTERNET)

## Events

### Got File

Event indicating that a request has finished.

<div class="block" ai2-block="event" not-rendered="true" value="%7B%22componentName%22:%20%22Web%22,%20%22name%22:%20%22Got%20File%22,%20%22param%22:%20%5B%22url%22,%20%22response%20Code%22,%20%22response%20Type%22,%20%22file%20Name%22%5D%7D"></div>

| Params | []() |
|--------|------|
|url|<span class="chip chip-text">Text</span>|
|response Code|<span class="chip chip-number">Number</span>|
|response Type|<span class="chip chip-text">Text</span>|
|file Name|<span class="chip chip-text">Text</span>|

### Got Text

Event indicating that a request has finished.

<div class="block" ai2-block="event" not-rendered="true" value="%7B%22componentName%22:%20%22Web%22,%20%22name%22:%20%22Got%20Text%22,%20%22param%22:%20%5B%22url%22,%20%22response%20Code%22,%20%22response%20Type%22,%20%22response%20Content%22%5D%7D"></div>

| Params | []() |
|--------|------|
|url|<span class="chip chip-text">Text</span>|
|response Code|<span class="chip chip-number">Number</span>|
|response Type|<span class="chip chip-text">Text</span>|
|response Content|<span class="chip chip-text">Text</span>|

### Timed Out

Event indicating that a request has timed out.

<div class="block" ai2-block="event" not-rendered="true" value="%7B%22componentName%22:%20%22Web%22,%20%22name%22:%20%22Timed%20Out%22,%20%22param%22:%20%5B%22url%22%5D%7D"></div>

| Params | []() |
|--------|------|
|url|<span class="chip chip-text">Text</span>|

## Methods

### Build Request Data

<span class="chip chip-text">Returns: <i>Text</i></span>

Converts a list of two-element sublists, representing name and value pairs, to astring formatted as application/x-www-form-urlencoded media type, suitable to pass toPostText.

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22Web%22,%20%22name%22:%20%22Build%20Request%20Data%22,%20%22output%22:%20true,%20%22param%22:%20%5B%22list%22%5D%7D"></div>

| Params | []() |
|--------|------|
|list|<span class="chip chip-list">List</span>|

### Clear Cookies

Clears all cookies for this Web component.

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22Web%22,%20%22name%22:%20%22Clear%20Cookies%22,%20%22output%22:%20false,%20%22param%22:%20%5B%5D%7D"></div>

### Delete

Performs an HTTP DELETE request using the Url property and retrieves theresponse.  
If the SaveResponse property is true, the response will be saved in a fileand the GotFile event will be triggered. The ResponseFileName propertycan be used to specify the name of the file.  
If the SaveResponse property is false, the GotText event will betriggered.

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22Web%22,%20%22name%22:%20%22Delete%22,%20%22output%22:%20false,%20%22param%22:%20%5B%5D%7D"></div>

### Get

Performs an HTTP GET request using the Url property and retrieves theresponse.  
If the SaveResponse property is true, the response will be saved in a fileand the GotFile event will be triggered. The ResponseFileName propertycan be used to specify the name of the file.  
If the SaveResponse property is false, the GotText event will betriggered.

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22Web%22,%20%22name%22:%20%22Get%22,%20%22output%22:%20false,%20%22param%22:%20%5B%5D%7D"></div>

### HTML Text Decode

<span class="chip chip-text">Returns: <i>Text</i></span>

Decodes the given HTML text value. HTML character entities such as &amp;amp;, &amp;lt;, &amp;gt;, &amp;apos;, and &amp;quot; are changed to &amp;, &lt;, &gt;, ', and ". Entities such as &amp;#xhhhh, and &amp;#nnnn are changed to the appropriate characters.

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22Web%22,%20%22name%22:%20%22HTML%20Text%20Decode%22,%20%22output%22:%20true,%20%22param%22:%20%5B%22html%20Text%22%5D%7D"></div>

| Params | []() |
|--------|------|
|html Text|<span class="chip chip-text">Text</span>|

### JSON Text Decode

<span class="chip chip-any">Returns: <i>Any</i></span>

Decodes the given JSON encoded value to produce a corresponding AppInventor value
A JSON list [x, y, z] decodes to a list (x y z), A JSON object with name A and value B,(denoted as A:B enclosed in curly braces) decodes to a list((A B)), that is, a list containing the two-element list (A B).

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22Web%22,%20%22name%22:%20%22JSON%20Text%20Decode%22,%20%22output%22:%20true,%20%22param%22:%20%5B%22json%20Text%22%5D%7D"></div>

| Params | []() |
|--------|------|
|json Text|<span class="chip chip-text">Text</span>|

### Post File

Performs an HTTP POST request using the Url property and data from the specified file.  
If the SaveResponse property is true, the response will be saved in a file and the GotFile event will be triggered. The ResponseFileName property can be used to specify the name of the file.  
If the SaveResponse property is false, the GotText event will be triggered.

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22Web%22,%20%22name%22:%20%22Post%20File%22,%20%22output%22:%20false,%20%22param%22:%20%5B%22path%22%5D%7D"></div>

| Params | []() |
|--------|------|
|path|<span class="chip chip-text">Text</span>|

### Post Text

Performs an HTTP POST request using the Url property and the specified text.  
The characters of the text are encoded using UTF-8 encoding.  
If the SaveResponse property is true, the response will be saved in a file and the GotFile event will be triggered. The responseFileName property can be used to specify the name of the file.  
If the SaveResponse property is false, the GotText event will be triggered.

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22Web%22,%20%22name%22:%20%22Post%20Text%22,%20%22output%22:%20false,%20%22param%22:%20%5B%22text%22%5D%7D"></div>

| Params | []() |
|--------|------|
|text|<span class="chip chip-text">Text</span>|

### Post Text With Encoding

Performs an HTTP POST request using the Url property and the specified text.  
The characters of the text are encoded using the given encoding.  
If the SaveResponse property is true, the response will be saved in a file and the GotFile event will be triggered. The ResponseFileName property can be used to specify the name of the file.  
If the SaveResponse property is false, the GotText event will be triggered.

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22Web%22,%20%22name%22:%20%22Post%20Text%20With%20Encoding%22,%20%22output%22:%20false,%20%22param%22:%20%5B%22text%22,%20%22encoding%22%5D%7D"></div>

| Params | []() |
|--------|------|
|text|<span class="chip chip-text">Text</span>|
|encoding|<span class="chip chip-text">Text</span>|

### Put File

Performs an HTTP PUT request using the Url property and data from the specified file.  
If the SaveResponse property is true, the response will be saved in a file and the GotFile event will be triggered. The ResponseFileName property can be used to specify the name of the file.  
If the SaveResponse property is false, the GotText event will be triggered.

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22Web%22,%20%22name%22:%20%22Put%20File%22,%20%22output%22:%20false,%20%22param%22:%20%5B%22path%22%5D%7D"></div>

| Params | []() |
|--------|------|
|path|<span class="chip chip-text">Text</span>|

### Put Text

Performs an HTTP PUT request using the Url property and the specified text.  
The characters of the text are encoded using UTF-8 encoding.  
If the SaveResponse property is true, the response will be saved in a file and the GotFile event will be triggered. The responseFileName property can be used to specify the name of the file.  
If the SaveResponse property is false, the GotText event will be triggered.

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22Web%22,%20%22name%22:%20%22Put%20Text%22,%20%22output%22:%20false,%20%22param%22:%20%5B%22text%22%5D%7D"></div>

| Params | []() |
|--------|------|
|text|<span class="chip chip-text">Text</span>|

### Put Text With Encoding

Performs an HTTP PUT request using the Url property and the specified text.  
The characters of the text are encoded using the given encoding.  
If the SaveResponse property is true, the response will be saved in a file and the GotFile event will be triggered. The ResponseFileName property can be used to specify the name of the file.  
If the SaveResponse property is false, the GotText event will be triggered.

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22Web%22,%20%22name%22:%20%22Put%20Text%20With%20Encoding%22,%20%22output%22:%20false,%20%22param%22:%20%5B%22text%22,%20%22encoding%22%5D%7D"></div>

| Params | []() |
|--------|------|
|text|<span class="chip chip-text">Text</span>|
|encoding|<span class="chip chip-text">Text</span>|

### URI Decode

<span class="chip chip-text">Returns: <i>Text</i></span>

Decodes the encoded text value.

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22Web%22,%20%22name%22:%20%22URI%20Decode%22,%20%22output%22:%20true,%20%22param%22:%20%5B%22text%22%5D%7D"></div>

| Params | []() |
|--------|------|
|text|<span class="chip chip-text">Text</span>|

### URI Encode

<span class="chip chip-text">Returns: <i>Text</i></span>

Encodes the given text value so that it can be used in a URL.

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22Web%22,%20%22name%22:%20%22URI%20Encode%22,%20%22output%22:%20true,%20%22param%22:%20%5B%22text%22%5D%7D"></div>

| Params | []() |
|--------|------|
|text|<span class="chip chip-text">Text</span>|

### XML Text Decode

<span class="chip chip-any">Returns: <i>Any</i></span>

Decodes the given XML string to produce a list structure. See the App Inventor documentation on "Other topics, notes, and details" for information.

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22Web%22,%20%22name%22:%20%22XML%20Text%20Decode%22,%20%22output%22:%20true,%20%22param%22:%20%5B%22XmlText%22%5D%7D"></div>

| Params | []() |
|--------|------|
|XmlText|<span class="chip chip-text">Text</span>|

## Properties

### Allow Cookies

<span style="user-select: none; white-space:pre-wrap;"><span class="chip chip-boolean">Boolean</span> <span class="chip chip-boolean">Default: <i>false</i></span> :heavy_minus_sign: <span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span>  - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span></span>

Whether the cookies from a response should be saved and used in subsequent requests. Cookies are only supported on Android version 2.3 or greater.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Web%22,%20%22name%22:%20%22Allow%20Cookies%22,%20%22getter%22:%20true%7D"></div>
<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Web%22,%20%22name%22:%20%22Allow%20Cookies%22,%20%22getter%22:%20false%7D"></div>

### Request Headers

<span style="user-select: none; white-space:pre-wrap;"><span class="chip chip-list">List</span> :heavy_minus_sign: <span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span>  - <span class="chip chip-bd">Blocks</span></span>

The request headers, as a list of two-element sublists. The first element of each sublist represents the request header field name. The second element of each sublist represents the request header field values, either a single value or a list containing multiple values.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Web%22,%20%22name%22:%20%22Request%20Headers%22,%20%22getter%22:%20true%7D"></div>
<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Web%22,%20%22name%22:%20%22Request%20Headers%22,%20%22getter%22:%20false%7D"></div>

### Response File Name

<span style="user-select: none; white-space:pre-wrap;"><span class="chip chip-text">Text</span> :heavy_minus_sign: <span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span>  - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span></span>

The name of the file where the response should be saved. If SaveResponse is true and ResponseFileName is empty, then a new file name will be generated.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Web%22,%20%22name%22:%20%22Response%20File%20Name%22,%20%22getter%22:%20true%7D"></div>
<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Web%22,%20%22name%22:%20%22Response%20File%20Name%22,%20%22getter%22:%20false%7D"></div>

### Save Response

<span style="user-select: none; white-space:pre-wrap;"><span class="chip chip-boolean">Boolean</span> <span class="chip chip-boolean">Default: <i>false</i></span> :heavy_minus_sign: <span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span>  - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span></span>

Whether the response should be saved in a file.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Web%22,%20%22name%22:%20%22Save%20Response%22,%20%22getter%22:%20true%7D"></div>
<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Web%22,%20%22name%22:%20%22Save%20Response%22,%20%22getter%22:%20false%7D"></div>

### Timeout

<span style="user-select: none; white-space:pre-wrap;"><span class="chip chip-number">Number</span> <span class="chip chip-number">Default: <i>0</i></span> :heavy_minus_sign: <span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span>  - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span></span>

The number of milliseconds that a web request will wait for a response before giving up. If set to 0, then there is no time limit on how long the request will wait.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Web%22,%20%22name%22:%20%22Timeout%22,%20%22getter%22:%20true%7D"></div>
<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Web%22,%20%22name%22:%20%22Timeout%22,%20%22getter%22:%20false%7D"></div>

### URL

<span style="user-select: none; white-space:pre-wrap;"><span class="chip chip-text">Text</span> :heavy_minus_sign: <span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span>  - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span></span>

The URL for the web request.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Web%22,%20%22name%22:%20%22URL%22,%20%22getter%22:%20true%7D"></div>
<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Web%22,%20%22name%22:%20%22URL%22,%20%22getter%22:%20false%7D"></div>
