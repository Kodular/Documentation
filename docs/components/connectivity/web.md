# Web

| Category | Version | Requires |
|:--------:|:-------:|:--------:|
|Connectivity|6|API 19 - Android 4.4 - 4.4.4 KitKat|

:mag: {>>Non-visible component<<}

## Overview

A non-visible component that provides functions for HTTP GET, POST, PUT, and DELETE requests.

## Events

### Got File

[[Event('Web', 'Got File', 'url', 'responseCode', 'responseType', 'fileName')]]

??? tip "Parameters"

    | Name | Type |
    |------|------|
    |url|`text`|
    |response Code|`number`|
    |response Type|`text`|
    |file Name|`text`|


Event indicating that a request has finished.

### Got Text

[[Event('Web', 'Got Text', 'url', 'responseCode', 'responseType', 'responseContent')]]

??? tip "Parameters"

    | Name | Type |
    |------|------|
    |url|`text`|
    |response Code|`number`|
    |response Type|`text`|
    |response Content|`text`|


Event indicating that a request has finished.

### Timed Out

[[Event('Web', 'Timed Out', 'url')]]

??? tip "Parameters"

    | Name | Type |
    |------|------|
    |url|`text`|


Event indicating that a request has timed out.

## Methods

### BuildRequestData

_Block preview not available_

{>>Returns `text`<<}

??? tip "Parameters"

    | Name | Type |
    |------|------|
    |list|`list`|


Converts a list of two-element sublists, representing name and value pairs, to astring formatted as application/x-www-form-urlencoded media type, suitable to pass toPostText.

### ClearCookies

_Block preview not available_

Clears all cookies for this Web component.

### Delete

_Block preview not available_

Performs an HTTP DELETE request using the Url property and retrieves theresponse.  
If the SaveResponse property is true, the response will be saved in a fileand the GotFile event will be triggered. The ResponseFileName propertycan be used to specify the name of the file.  
If the SaveResponse property is false, the GotText event will betriggered.

### Get

_Block preview not available_

Performs an HTTP GET request using the Url property and retrieves theresponse.  
If the SaveResponse property is true, the response will be saved in a fileand the GotFile event will be triggered. The ResponseFileName propertycan be used to specify the name of the file.  
If the SaveResponse property is false, the GotText event will betriggered.

### HtmlTextDecode

_Block preview not available_

{>>Returns `text`<<}

??? tip "Parameters"

    | Name | Type |
    |------|------|
    |html Text|`text`|


Decodes the given HTML text value. HTML character entities such as &amp;amp;, &amp;lt;, &amp;gt;, &amp;apos;, and &amp;quot; are changed to &amp;, &lt;, &gt;, ', and ". Entities such as &amp;#xhhhh, and &amp;#nnnn are changed to the appropriate characters.

### JsonTextDecode

_Block preview not available_

{>>Returns `any`<<}

??? tip "Parameters"

    | Name | Type |
    |------|------|
    |json Text|`text`|


Decodes the given JSON encoded value to produce a corresponding AppInventor value
A JSON list [x, y, z] decodes to a list (x y z), A JSON object with name A and value B,(denoted as A:B enclosed in curly braces) decodes to a list((A B)), that is, a list containing the two-element list (A B).

### PostFile

_Block preview not available_

??? tip "Parameters"

    | Name | Type |
    |------|------|
    |path|`text`|


Performs an HTTP POST request using the Url property and data from the specified file.  
If the SaveResponse property is true, the response will be saved in a file and the GotFile event will be triggered. The ResponseFileName property can be used to specify the name of the file.  
If the SaveResponse property is false, the GotText event will be triggered.

### PostText

_Block preview not available_

??? tip "Parameters"

    | Name | Type |
    |------|------|
    |text|`text`|


Performs an HTTP POST request using the Url property and the specified text.  
The characters of the text are encoded using UTF-8 encoding.  
If the SaveResponse property is true, the response will be saved in a file and the GotFile event will be triggered. The responseFileName property can be used to specify the name of the file.  
If the SaveResponse property is false, the GotText event will be triggered.

### PostTextWithEncoding

_Block preview not available_

??? tip "Parameters"

    | Name | Type |
    |------|------|
    |text|`text`|
    |encoding|`text`|


Performs an HTTP POST request using the Url property and the specified text.  
The characters of the text are encoded using the given encoding.  
If the SaveResponse property is true, the response will be saved in a file and the GotFile event will be triggered. The ResponseFileName property can be used to specify the name of the file.  
If the SaveResponse property is false, the GotText event will be triggered.

### PutFile

_Block preview not available_

??? tip "Parameters"

    | Name | Type |
    |------|------|
    |path|`text`|


Performs an HTTP PUT request using the Url property and data from the specified file.  
If the SaveResponse property is true, the response will be saved in a file and the GotFile event will be triggered. The ResponseFileName property can be used to specify the name of the file.  
If the SaveResponse property is false, the GotText event will be triggered.

### PutText

_Block preview not available_

??? tip "Parameters"

    | Name | Type |
    |------|------|
    |text|`text`|


Performs an HTTP PUT request using the Url property and the specified text.  
The characters of the text are encoded using UTF-8 encoding.  
If the SaveResponse property is true, the response will be saved in a file and the GotFile event will be triggered. The responseFileName property can be used to specify the name of the file.  
If the SaveResponse property is false, the GotText event will be triggered.

### PutTextWithEncoding

_Block preview not available_

??? tip "Parameters"

    | Name | Type |
    |------|------|
    |text|`text`|
    |encoding|`text`|


Performs an HTTP PUT request using the Url property and the specified text.  
The characters of the text are encoded using the given encoding.  
If the SaveResponse property is true, the response will be saved in a file and the GotFile event will be triggered. The ResponseFileName property can be used to specify the name of the file.  
If the SaveResponse property is false, the GotText event will be triggered.

### UriDecode

_Block preview not available_

{>>Returns `text`<<}

??? tip "Parameters"

    | Name | Type |
    |------|------|
    |text|`text`|


Decodes the encoded text value.

### UriEncode

_Block preview not available_

{>>Returns `text`<<}

??? tip "Parameters"

    | Name | Type |
    |------|------|
    |text|`text`|


Encodes the given text value so that it can be used in a URL.

### XMLTextDecode

_Block preview not available_

{>>Returns `any`<<}

??? tip "Parameters"

    | Name | Type |
    |------|------|
    |XmlText|`text`|


Decodes the given XML string to produce a list structure. See the App Inventor documentation on "Other topics, notes, and details" for information.

## Properties

### Allow Cookies

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Web', 'Allow Cookies')]]

| Type | Default |
|:----:|:-------:|
|boolean|false|

Whether the cookies from a response should be saved and used in subsequent requests. Cookies are only supported on Android version 2.3 or greater.

### Response File Name

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Web', 'Response File Name')]]

| Type |
|:----:|
|text|

The name of the file where the response should be saved. If SaveResponse is true and ResponseFileName is empty, then a new file name will be generated.

### Save Response

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Web', 'Save Response')]]

| Type | Default |
|:----:|:-------:|
|boolean|false|

Whether the response should be saved in a file.

### Timeout

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Web', 'Timeout')]]

| Type | Default |
|:----:|:-------:|
|number|0|

The number of milliseconds that a web request will wait for a response before giving up. If set to 0, then there is no time limit on how long the request will wait.

### URL

<small>Available as ^^Common^^ Property</small>

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