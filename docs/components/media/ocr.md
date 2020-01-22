# OCR

| Category | Version | Requires |
|:--------:|:-------:|:--------:|
|Media|5|API 19 - Android 4.4 - 4.4.4 KitKat|

:mag: {>>Non-visible component<<}

## Overview

A non-visible component that reads text from images using Optical Character Recognition technology.

## Events

### Got Response

[[Event('OCR', 'Got Response', 'success responseContent')]]

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |success|`boolean`|
    |response Content|`text`|


You will find here the success state and the response content.

### Got Server Status

[[Event('OCR', 'Got Server Status', 'free proUsa1 proUsa2 proEurope proAsia')]]

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |free|`text`|
    |pro USA 1|`text`|
    |pro USA 2|`text`|
    |pro Europe|`text`|
    |pro Asia|`text`|


You will find here the server status from the ocr provider. Possible results are 'UP' or 'DOWN'. 'pro Usa1' = Usa, East Coast. 'pro Usa2' = Usa, West Coast.

## Methods

### GetOcrServerStatus

[[Method('OCR', 'GetOcrServerStatus', false)]]

Get the server status from the free ocr.space server. This is helpful if you want to know if the server is online or offline. Returns true when online, else false when offline.

### GetTextFromImageUrl

[[Method('OCR', 'GetTextFromImageUrl', false, 'imageUrl')]]

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |image URL|`text`|


Get the text from a picture via the image url. Example: http://name/yourimage.jpg. Service powered by ocr.space.

### UploadImage

[[Method('OCR', 'UploadImage', false, 'path')]]

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |path|`text`|


Upload your image to the server from ocr.space and then you get back the text from the picture.

## Properties

### API Key

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('OCR', 'API Key')]]

| Type | Default |
|:----:|:-------:|
|text|helloworld|

You can use the default api key: helloworld, or you can create your own api key at: https://ocr.space/ocrapi

### Create Searchable PDF

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('OCR', 'Create Searchable PDF')]]

| Type | Default |
|:----:|:-------:|
|boolean|False|

A searchable PDF file is a PDF file that includes text that can be searched upon using the standard Adobe Reader “search” functionality. In addition, the text can be selected and copied from the PDF. In this case the JSON response of the API contains a download link for the the searchable PDF. This download link is valid for one hour, than all data is removed from the OCR servers.

### Language

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('OCR', 'Language')]]

| Type | Default |
|:----:|:-------:|
|text|1|

Choose the language used for OCR. If no language is specified, English is taken as 'Default'.

### Overlaid

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('OCR', 'Overlaid')]]

| Type | Default |
|:----:|:-------:|
|boolean|False|

Allows you to specify if the image/pdf text overlay is required. Overlay could be used to show the text over the image.

### Return Only Message

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('OCR', 'Return Only Message')]]

| Type | Default |
|:----:|:-------:|
|boolean|None|

Set this block before you upload a image and before you try to get the response from a image url. If this property is set to true, the response content returns only the message. That means the response content will be only the scanned text in words.

### Return Only PDF Link

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('OCR', 'Return Only PDF Link')]]

| Type | Default |
|:----:|:-------:|
|boolean|None|

Set this block before you upload a image and before you try to get the response from a image url. If this property is set to true, the response content returns only the created pdf download link.

### Test Image URL

:eyes: Read-Only property
[[PropertyBlockGetter('OCR', 'Test Image URL')]]

| Type | Default |
|:----:|:-------:|
|text|None|

You can use the test image url if you have not any picture online on a server or else.