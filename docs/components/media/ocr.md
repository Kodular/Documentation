# OCR

| Category | Version | Requires |
|:--------:|:-------:|:--------:|
|Media|5|API 19 - Android 4.4 - 4.4.4 KitKat|

:mag: {>>Non-visible component<<}

## Overview

_A non-visible component that reads text from images using Optical Character Recognition technology._

## Properties

### API Key

<small>Available as Common Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('OCR', 'API Key')]]

| Type | Default |
|:----:|:-------:|
|text|helloworld|

You can use the default api key: helloworld, or you can create your own api key at: https://ocr.space/ocrapi

### Create Searchable PDF

<small>Available as Common Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('OCR', 'Create Searchable PDF')]]

| Type | Default |
|:----:|:-------:|
|boolean|False|

A searchable PDF file is a PDF file that includes text that can be searched upon using the standard Adobe Reader “search” functionality. In addition, the text can be selected and copied from the PDF. In this case the JSON response of the API contains a download link for the the searchable PDF. This download link is valid for one hour, than all data is removed from the OCR servers.

### Language

<small>Available as Common Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('OCR', 'Language')]]

| Type | Default |
|:----:|:-------:|
|text|1|

Choose the language used for OCR. If no language is specified, English is taken as 'Default'.

### Overlaid

<small>Available as Common Property</small>

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