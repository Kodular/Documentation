# Web

| Category | Requires | Version |
|:--------:|:-------:|:--------:|
|Connectivity|API 19, Android 4.4 - 4.4.4 KitKat|6|

:mag: {>>Non-visible component<<}

## Overview

A non-visible component that provides functions for HTTP GET, POST, PUT, and DELETE requests.

## Events

### Got File

[[Event('Web', 'Got File', 'url', 'responseCode', 'responseType', 'fileName')]]

| Params | []() |
|--------|------|
|url|Text|
|response Code|Number|
|response Type|Text|
|file Name|Text|


Event indicating that a request has finished.

### Got Text

[[Event('Web', 'Got Text', 'url', 'responseCode', 'responseType', 'responseContent')]]

| Params | []() |
|--------|------|
|url|Text|
|response Code|Number|
|response Type|Text|
|response Content|Text|


Event indicating that a request has finished.

### Timed Out

[[Event('Web', 'Timed Out', 'url')]]

| Params | []() |
|--------|------|
|url|Text|


Event indicating that a request has timed out.

## Methods

### Build Request Data

[[Method('Web', 'Build Request Data', True, 'list')]]

{>>Returns `text`<<}

| Params | []() |
|--------|------|
|list|List|


Converts a list of two-element sublists, representing name and value pairs, to astring formatted as application/x-www-form-urlencoded media type, suitable to pass toPostText.

### Clear Cookies

[[Method('Web', 'Clear Cookies', False)]]

Clears all cookies for this Web component.

### Delete

[[Method('Web', 'Delete', False)]]

Performs an HTTP DELETE request using the Url property and retrieves theresponse.  
If the SaveResponse property is true, the response will be saved in a fileand the GotFile event will be triggered. The ResponseFileName propertycan be used to specify the name of the file.  
If the SaveResponse property is false, the GotText event will betriggered.

### Get

[[Method('Web', 'Get', False)]]

Performs an HTTP GET request using the Url property and retrieves theresponse.  
If the SaveResponse property is true, the response will be saved in a fileand the GotFile event will be triggered. The ResponseFileName propertycan be used to specify the name of the file.  
If the SaveResponse property is false, the GotText event will betriggered.

### HTML Text Decode

[[Method('Web', 'HTML Text Decode', True, 'htmlText')]]

{>>Returns `text`<<}

| Params | []() |
|--------|------|
|html Text|Text|


Decodes the given HTML text value. HTML character entities such as &amp;amp;, &amp;lt;, &amp;gt;, &amp;apos;, and &amp;quot; are changed to &amp;, &lt;, &gt;, ', and ". Entities such as &amp;#xhhhh, and &amp;#nnnn are changed to the appropriate characters.

### JSON Text Decode

[[Method('Web', 'JSON Text Decode', True, 'jsonText')]]

{>>Returns `any`<<}

| Params | []() |
|--------|------|
|json Text|Text|


Decodes the given JSON encoded value to produce a corresponding AppInventor value
A JSON list [x, y, z] decodes to a list (x y z), A JSON object with name A and value B,(denoted as A:B enclosed in curly braces) decodes to a list((A B)), that is, a list containing the two-element list (A B).

### Post File

[[Method('Web', 'Post File', False, 'path')]]

| Params | []() |
|--------|------|
|path|Text|


Performs an HTTP POST request using the Url property and data from the specified file.  
If the SaveResponse property is true, the response will be saved in a file and the GotFile event will be triggered. The ResponseFileName property can be used to specify the name of the file.  
If the SaveResponse property is false, the GotText event will be triggered.

### Post Text

[[Method('Web', 'Post Text', False, 'text')]]

| Params | []() |
|--------|------|
|text|Text|


Performs an HTTP POST request using the Url property and the specified text.  
The characters of the text are encoded using UTF-8 encoding.  
If the SaveResponse property is true, the response will be saved in a file and the GotFile event will be triggered. The responseFileName property can be used to specify the name of the file.  
If the SaveResponse property is false, the GotText event will be triggered.

### Post Text With Encoding

[[Method('Web', 'Post Text With Encoding', False, 'text', 'encoding')]]

| Params | []() |
|--------|------|
|text|Text|
|encoding|Text|


Performs an HTTP POST request using the Url property and the specified text.  
The characters of the text are encoded using the given encoding.  
If the SaveResponse property is true, the response will be saved in a file and the GotFile event will be triggered. The ResponseFileName property can be used to specify the name of the file.  
If the SaveResponse property is false, the GotText event will be triggered.

### Put File

[[Method('Web', 'Put File', False, 'path')]]

| Params | []() |
|--------|------|
|path|Text|


Performs an HTTP PUT request using the Url property and data from the specified file.  
If the SaveResponse property is true, the response will be saved in a file and the GotFile event will be triggered. The ResponseFileName property can be used to specify the name of the file.  
If the SaveResponse property is false, the GotText event will be triggered.

### Put Text

[[Method('Web', 'Put Text', False, 'text')]]

| Params | []() |
|--------|------|
|text|Text|


Performs an HTTP PUT request using the Url property and the specified text.  
The characters of the text are encoded using UTF-8 encoding.  
If the SaveResponse property is true, the response will be saved in a file and the GotFile event will be triggered. The responseFileName property can be used to specify the name of the file.  
If the SaveResponse property is false, the GotText event will be triggered.

### Put Text With Encoding

[[Method('Web', 'Put Text With Encoding', False, 'text', 'encoding')]]

| Params | []() |
|--------|------|
|text|Text|
|encoding|Text|


Performs an HTTP PUT request using the Url property and the specified text.  
The characters of the text are encoded using the given encoding.  
If the SaveResponse property is true, the response will be saved in a file and the GotFile event will be triggered. The ResponseFileName property can be used to specify the name of the file.  
If the SaveResponse property is false, the GotText event will be triggered.

### URI Decode

[[Method('Web', 'URI Decode', True, 'text')]]

{>>Returns `text`<<}

| Params | []() |
|--------|------|
|text|Text|


Decodes the encoded text value.

### URI Encode

[[Method('Web', 'URI Encode', True, 'text')]]

{>>Returns `text`<<}

| Params | []() |
|--------|------|
|text|Text|


Encodes the given text value so that it can be used in a URL.

### XML Text Decode

[[Method('Web', 'XML Text Decode', True, 'XmlText')]]

{>>Returns `any`<<}

| Params | []() |
|--------|------|
|XmlText|Text|


Decodes the given XML string to produce a list structure. See the App Inventor documentation on "Other topics, notes, and details" for information.

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