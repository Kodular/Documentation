# Web

| Category | Requires | Version |
|:--------:|:-------:|:--------:|
|Connectivity|API 19, Android 4.4 - 4.4.4 KitKat|6|

:mag: {>>Non-visible component<<}

## Overview

A non-visible component that provides functions for HTTP GET, POST, PUT, and DELETE requests.

## Events

### Got File

Event indicating that a request has finished.

[[Event('Web', 'Got File', 'url', 'responseCode', 'responseType', 'fileName')]]

| Params | []() |
|--------|------|
|url|<span class="chip chip-text">Text</span>|
|response Code|<span class="chip chip-number">Number</span>|
|response Type|<span class="chip chip-text">Text</span>|
|file Name|<span class="chip chip-text">Text</span>|


### Got Text

Event indicating that a request has finished.

[[Event('Web', 'Got Text', 'url', 'responseCode', 'responseType', 'responseContent')]]

| Params | []() |
|--------|------|
|url|<span class="chip chip-text">Text</span>|
|response Code|<span class="chip chip-number">Number</span>|
|response Type|<span class="chip chip-text">Text</span>|
|response Content|<span class="chip chip-text">Text</span>|


### Timed Out

Event indicating that a request has timed out.

[[Event('Web', 'Timed Out', 'url')]]

| Params | []() |
|--------|------|
|url|<span class="chip chip-text">Text</span>|


## Methods

### Build Request Data

<span class="chip chip-text">Returns: <i>Text</i></span> 

Converts a list of two-element sublists, representing name and value pairs, to astring formatted as application/x-www-form-urlencoded media type, suitable to pass toPostText.

[[Method('Web', 'Build Request Data', True, 'list')]]

| Params | []() |
|--------|------|
|list|<span class="chip chip-list">List</span>|


### Clear Cookies

Clears all cookies for this Web component.

[[Method('Web', 'Clear Cookies', False)]]

### Delete

Performs an HTTP DELETE request using the Url property and retrieves theresponse.  
If the SaveResponse property is true, the response will be saved in a fileand the GotFile event will be triggered. The ResponseFileName propertycan be used to specify the name of the file.  
If the SaveResponse property is false, the GotText event will betriggered.

[[Method('Web', 'Delete', False)]]

### Get

Performs an HTTP GET request using the Url property and retrieves theresponse.  
If the SaveResponse property is true, the response will be saved in a fileand the GotFile event will be triggered. The ResponseFileName propertycan be used to specify the name of the file.  
If the SaveResponse property is false, the GotText event will betriggered.

[[Method('Web', 'Get', False)]]

### HTML Text Decode

<span class="chip chip-text">Returns: <i>Text</i></span> 

Decodes the given HTML text value. HTML character entities such as &amp;amp;, &amp;lt;, &amp;gt;, &amp;apos;, and &amp;quot; are changed to &amp;, &lt;, &gt;, ', and ". Entities such as &amp;#xhhhh, and &amp;#nnnn are changed to the appropriate characters.

[[Method('Web', 'HTML Text Decode', True, 'htmlText')]]

| Params | []() |
|--------|------|
|html Text|<span class="chip chip-text">Text</span>|


### JSON Text Decode

<span class="chip chip-any">Returns: <i>Any</i></span> 

Decodes the given JSON encoded value to produce a corresponding AppInventor value
A JSON list [x, y, z] decodes to a list (x y z), A JSON object with name A and value B,(denoted as A:B enclosed in curly braces) decodes to a list((A B)), that is, a list containing the two-element list (A B).

[[Method('Web', 'JSON Text Decode', True, 'jsonText')]]

| Params | []() |
|--------|------|
|json Text|<span class="chip chip-text">Text</span>|


### Post File

Performs an HTTP POST request using the Url property and data from the specified file.  
If the SaveResponse property is true, the response will be saved in a file and the GotFile event will be triggered. The ResponseFileName property can be used to specify the name of the file.  
If the SaveResponse property is false, the GotText event will be triggered.

[[Method('Web', 'Post File', False, 'path')]]

| Params | []() |
|--------|------|
|path|<span class="chip chip-text">Text</span>|


### Post Text

Performs an HTTP POST request using the Url property and the specified text.  
The characters of the text are encoded using UTF-8 encoding.  
If the SaveResponse property is true, the response will be saved in a file and the GotFile event will be triggered. The responseFileName property can be used to specify the name of the file.  
If the SaveResponse property is false, the GotText event will be triggered.

[[Method('Web', 'Post Text', False, 'text')]]

| Params | []() |
|--------|------|
|text|<span class="chip chip-text">Text</span>|


### Post Text With Encoding

Performs an HTTP POST request using the Url property and the specified text.  
The characters of the text are encoded using the given encoding.  
If the SaveResponse property is true, the response will be saved in a file and the GotFile event will be triggered. The ResponseFileName property can be used to specify the name of the file.  
If the SaveResponse property is false, the GotText event will be triggered.

[[Method('Web', 'Post Text With Encoding', False, 'text', 'encoding')]]

| Params | []() |
|--------|------|
|text|<span class="chip chip-text">Text</span>|
|encoding|<span class="chip chip-text">Text</span>|


### Put File

Performs an HTTP PUT request using the Url property and data from the specified file.  
If the SaveResponse property is true, the response will be saved in a file and the GotFile event will be triggered. The ResponseFileName property can be used to specify the name of the file.  
If the SaveResponse property is false, the GotText event will be triggered.

[[Method('Web', 'Put File', False, 'path')]]

| Params | []() |
|--------|------|
|path|<span class="chip chip-text">Text</span>|


### Put Text

Performs an HTTP PUT request using the Url property and the specified text.  
The characters of the text are encoded using UTF-8 encoding.  
If the SaveResponse property is true, the response will be saved in a file and the GotFile event will be triggered. The responseFileName property can be used to specify the name of the file.  
If the SaveResponse property is false, the GotText event will be triggered.

[[Method('Web', 'Put Text', False, 'text')]]

| Params | []() |
|--------|------|
|text|<span class="chip chip-text">Text</span>|


### Put Text With Encoding

Performs an HTTP PUT request using the Url property and the specified text.  
The characters of the text are encoded using the given encoding.  
If the SaveResponse property is true, the response will be saved in a file and the GotFile event will be triggered. The ResponseFileName property can be used to specify the name of the file.  
If the SaveResponse property is false, the GotText event will be triggered.

[[Method('Web', 'Put Text With Encoding', False, 'text', 'encoding')]]

| Params | []() |
|--------|------|
|text|<span class="chip chip-text">Text</span>|
|encoding|<span class="chip chip-text">Text</span>|


### URI Decode

<span class="chip chip-text">Returns: <i>Text</i></span> 

Decodes the encoded text value.

[[Method('Web', 'URI Decode', True, 'text')]]

| Params | []() |
|--------|------|
|text|<span class="chip chip-text">Text</span>|


### URI Encode

<span class="chip chip-text">Returns: <i>Text</i></span> 

Encodes the given text value so that it can be used in a URL.

[[Method('Web', 'URI Encode', True, 'text')]]

| Params | []() |
|--------|------|
|text|<span class="chip chip-text">Text</span>|


### XML Text Decode

<span class="chip chip-any">Returns: <i>Any</i></span> 

Decodes the given XML string to produce a list structure. See the App Inventor documentation on "Other topics, notes, and details" for information.

[[Method('Web', 'XML Text Decode', True, 'XmlText')]]

| Params | []() |
|--------|------|
|XmlText|<span class="chip chip-text">Text</span>|


## Properties

### Allow Cookies

<span class="chip chip-boolean">Boolean</span> <span class="chip chip-boolean">Default: <i>false</i></span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span> 

Whether the cookies from a response should be saved and used in subsequent requests. Cookies are only supported on Android version 2.3 or greater.

[[PropertyBlockGetterAndSetter('Web', 'Allow Cookies')]]

### Response File Name

<span class="chip chip-text">Text</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span> 

The name of the file where the response should be saved. If SaveResponse is true and ResponseFileName is empty, then a new file name will be generated.

[[PropertyBlockGetterAndSetter('Web', 'Response File Name')]]

### Save Response

<span class="chip chip-boolean">Boolean</span> <span class="chip chip-boolean">Default: <i>false</i></span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span> 

Whether the response should be saved in a file.

[[PropertyBlockGetterAndSetter('Web', 'Save Response')]]

### Timeout

<span class="chip chip-number">Number</span> <span class="chip chip-number">Default: <i>0</i></span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span> 

The number of milliseconds that a web request will wait for a response before giving up. If set to 0, then there is no time limit on how long the request will wait.

[[PropertyBlockGetterAndSetter('Web', 'Timeout')]]

### URL

<span class="chip chip-text">Text</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span> 

The URL for the web request.

[[PropertyBlockGetterAndSetter('Web', 'URL')]]

### Request Headers

<span class="chip chip-list">List</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Blocks</span> 

The request headers, as a list of two-element sublists. The first element of each sublist represents the request header field name. The second element of each sublist represents the request header field values, either a single value or a list containing multiple values.

[[PropertyBlockGetterAndSetter('Web', 'Request Headers')]]