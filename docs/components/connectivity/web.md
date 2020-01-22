# Web

| Category | Version | Requires |
|:--------:|:-------:|:--------:|
|Connectivity|6|API 19 - Android 4.4 - 4.4.4 KitKat|

:mag: {>>Non-visible component<<}

## Overview

_A non-visible component that provides functions for HTTP GET, POST, PUT, and DELETE requests._

## Events

### Got File

[[Event('Web', 'Got File', 'url responseCode responseType fileName')]]

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |url|`text`|
    |response Code|`number`|
    |response Type|`text`|
    |file Name|`text`|


_Event indicating that a request has finished._

### Got Text

[[Event('Web', 'Got Text', 'url responseCode responseType responseContent')]]

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |url|`text`|
    |response Code|`number`|
    |response Type|`text`|
    |response Content|`text`|


_Event indicating that a request has finished._

### Timed Out

[[Event('Web', 'Timed Out', 'url')]]

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |url|`text`|


_Event indicating that a request has timed out._

## Methods

### BuildRequestData

[[Method('Web', 'BuildRequestData', true, 'list')]]

{>>Returns `text`<<}

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |list|`list`|


_Converts a list of two-element sublists, representing name and value pairs, to a
 string formatted as application/x-www-form-urlencoded media type, suitable to pass to
 PostText._

### ClearCookies

[[Method('Web', 'ClearCookies', false)]]

_Clears all cookies for this Web component._

### Delete

[[Method('Web', 'Delete', false)]]

_Performs an HTTP DELETE request using the Url property and retrieves the
 response.<br>
 If the SaveResponse property is true, the response will be saved in a file
 and the GotFile event will be triggered. The ResponseFileName property
 can be used to specify the name of the file.<br>
 If the SaveResponse property is false, the GotText event will be
 triggered._

### Get

[[Method('Web', 'Get', false)]]

_Performs an HTTP GET request using the Url property and retrieves the
 response.<br>
 If the SaveResponse property is true, the response will be saved in a file
 and the GotFile event will be triggered. The ResponseFileName property
 can be used to specify the name of the file.<br>
 If the SaveResponse property is false, the GotText event will be
 triggered._

### HtmlTextDecode

[[Method('Web', 'HtmlTextDecode', true, 'htmlText')]]

{>>Returns `text`<<}

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |html Text|`text`|


_Decodes the given HTML text value. HTML character entities such as &amp;amp;, &amp;lt;, &amp;gt;, &amp;apos;, and &amp;quot; are changed to &amp;, &lt;, &gt;, &#39;, and &quot;. Entities such as &amp;#xhhhh, and &amp;#nnnn are changed to the appropriate characters._

### JsonTextDecode

[[Method('Web', 'JsonTextDecode', true, 'jsonText')]]

{>>Returns `any`<<}

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |json Text|`text`|


_Decodes the given JSON encoded value to produce a corresponding AppInventor value.
 A JSON list [x, y, z] decodes to a list (x y z),  A JSON object with name A and value B,
 (denoted as A:B enclosed in curly braces) decodes to a list
 ((A B)), that is, a list containing the two-element list (A B)._

### PostFile

[[Method('Web', 'PostFile', false, 'path')]]

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |path|`text`|


_Performs an HTTP POST request using the Url property and data from the specified file.<br>If the SaveResponse property is true, the response will be saved in a file and the GotFile event will be triggered. The ResponseFileName property can be used to specify the name of the file.<br>If the SaveResponse property is false, the GotText event will be triggered._

### PostText

[[Method('Web', 'PostText', false, 'text')]]

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |text|`text`|


_Performs an HTTP POST request using the Url property and the specified text.<br>The characters of the text are encoded using UTF-8 encoding.<br>If the SaveResponse property is true, the response will be saved in a file and the GotFile event will be triggered. The responseFileName property can be used to specify the name of the file.<br>If the SaveResponse property is false, the GotText event will be triggered._

### PostTextWithEncoding

[[Method('Web', 'PostTextWithEncoding', false, 'text encoding')]]

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |text|`text`|
    |encoding|`text`|


_Performs an HTTP POST request using the Url property and the specified text.<br>The characters of the text are encoded using the given encoding.<br>If the SaveResponse property is true, the response will be saved in a file and the GotFile event will be triggered. The ResponseFileName property can be used to specify the name of the file.<br>If the SaveResponse property is false, the GotText event will be triggered._

### PutFile

[[Method('Web', 'PutFile', false, 'path')]]

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |path|`text`|


_Performs an HTTP PUT request using the Url property and data from the specified file.<br>If the SaveResponse property is true, the response will be saved in a file and the GotFile event will be triggered. The ResponseFileName property can be used to specify the name of the file.<br>If the SaveResponse property is false, the GotText event will be triggered._

### PutText

[[Method('Web', 'PutText', false, 'text')]]

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |text|`text`|


_Performs an HTTP PUT request using the Url property and the specified text.<br>The characters of the text are encoded using UTF-8 encoding.<br>If the SaveResponse property is true, the response will be saved in a file and the GotFile event will be triggered. The responseFileName property can be used to specify the name of the file.<br>If the SaveResponse property is false, the GotText event will be triggered._

### PutTextWithEncoding

[[Method('Web', 'PutTextWithEncoding', false, 'text encoding')]]

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |text|`text`|
    |encoding|`text`|


_Performs an HTTP PUT request using the Url property and the specified text.<br>The characters of the text are encoded using the given encoding.<br>If the SaveResponse property is true, the response will be saved in a file and the GotFile event will be triggered. The ResponseFileName property can be used to specify the name of the file.<br>If the SaveResponse property is false, the GotText event will be triggered._

### UriDecode

[[Method('Web', 'UriDecode', true, 'text')]]

{>>Returns `text`<<}

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |text|`text`|


_Decodes the encoded text value._

### UriEncode

[[Method('Web', 'UriEncode', true, 'text')]]

{>>Returns `text`<<}

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |text|`text`|


_Encodes the given text value so that it can be used in a URL._

### XMLTextDecode

[[Method('Web', 'XMLTextDecode', true, 'XmlText')]]

{>>Returns `any`<<}

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |XmlText|`text`|


_Decodes the given XML string to produce a list structure.  See the App Inventor documentation on "Other topics, notes, and details" for information._

## Properties

### Allow Cookies

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Web', 'Allow Cookies')]]

| Type | Default |
|:----:|:-------:|
|boolean|false|

_Whether the cookies from a response should be saved and used in subsequent requests. Cookies are only supported on Android version 2.3 or greater._

### Response File Name

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Web', 'Response File Name')]]

| Type |
|:----:|
|text|

_The name of the file where the response should be saved. If SaveResponse is true and ResponseFileName is empty, then a new file name will be generated._

### Save Response

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Web', 'Save Response')]]

| Type | Default |
|:----:|:-------:|
|boolean|false|

_Whether the response should be saved in a file._

### Timeout

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Web', 'Timeout')]]

| Type | Default |
|:----:|:-------:|
|number|0|

_The number of milliseconds that a web request will wait for a response before giving up. If set to 0, then there is no time limit on how long the request will wait._

### URL

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Web', 'URL')]]

| Type |
|:----:|
|text|

_The URL for the web request._

### Request Headers

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Web', 'Request Headers')]]

| Type | Default |
|:----:|:-------:|
|list|None|

_The request headers, as a list of two-element sublists. The first element of each sublist represents the request header field name. The second element of each sublist represents the request header field values, either a single value or a list containing multiple values._