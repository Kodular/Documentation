# OCR

| Category | Requires | Version |
|:--------:|:-------:|:--------:|
|Media|API 19, Android 4.4 - 4.4.4 KitKat|5|

:mag: {>>Non-visible component<<}

## Overview

A non-visible component that reads text from images using Optical Character Recognition technology.

## Events

### Got Response

[[Event('OCR', 'Got Response', 'success', 'responseContent')]]

| Params | []() |
|--------|------|
|success|Boolean|
|response Content|Text|


You will find here the success state and the response content.

### Got Server Status

[[Event('OCR', 'Got Server Status', 'free', 'proUsa1', 'proUsa2', 'proEurope', 'proAsia')]]

| Params | []() |
|--------|------|
|free|Text|
|pro USA 1|Text|
|pro USA 2|Text|
|pro Europe|Text|
|pro Asia|Text|


You will find here the server status from the ocr provider. Possible results are 'UP' or 'DOWN'. 'pro Usa1' = Usa, East Coast. 'pro Usa2' = Usa, West Coast.

## Methods

### Get OCR Server Status

[[Method('OCR', 'Get OCR Server Status', False)]]

Get the server status from the free ocr.space server. This is helpful if you want to know if the server is online or offline. Returns true when online, else false when offline.

### Get Text From Image Url

[[Method('OCR', 'Get Text From Image Url', False, 'imageUrl')]]

| Params | []() |
|--------|------|
|image URL|Text|


Get the text from a picture via the image url. Example: http://name/yourimage.jpg. Service powered by ocr.space.

### Upload Image

[[Method('OCR', 'Upload Image', False, 'path')]]

| Params | []() |
|--------|------|
|path|Text|


Upload your image to the server from ocr.space and then you get back the text from the picture.

## Properties

### API Key

<span class="chip chip-text">Text</span> <span class="chip chip-text">Default: <i>helloworld</i></span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span> 

You can use the default api key: helloworld, or you can create your own api key at: https://ocr.space/ocrapi

[[PropertyBlockGetterAndSetter('OCR', 'API Key')]]

### Create Searchable PDF

<span class="chip chip-boolean">Boolean</span> <span class="chip chip-boolean">Default: <i>False</i></span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span> 

A searchable PDF file is a PDF file that includes text that can be searched upon using the standard Adobe Reader “search” functionality. In addition, the text can be selected and copied from the PDF. In this case the JSON response of the API contains a download link for the the searchable PDF. This download link is valid for one hour, than all data is removed from the OCR servers.

[[PropertyBlockGetterAndSetter('OCR', 'Create Searchable PDF')]]

### Language

<span class="chip chip-text">Text</span> <span class="chip chip-text">Default: <i>1</i></span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span> 

Choose the language used for OCR. If no language is specified, English is taken as 'Default'.

[[PropertyBlockGetterAndSetter('OCR', 'Language')]]

### Overlaid

<span class="chip chip-boolean">Boolean</span> <span class="chip chip-boolean">Default: <i>False</i></span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span> 

Allows you to specify if the image/pdf text overlay is required. Overlay could be used to show the text over the image.

[[PropertyBlockGetterAndSetter('OCR', 'Overlaid')]]

### Return Only Message

<span class="chip chip-boolean">Boolean</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Blocks</span> 

Set this block before you upload a image and before you try to get the response from a image url. If this property is set to true, the response content returns only the message. That means the response content will be only the scanned text in words.

[[PropertyBlockGetterAndSetter('OCR', 'Return Only Message')]]

### Return Only PDF Link

<span class="chip chip-boolean">Boolean</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Blocks</span> 

Set this block before you upload a image and before you try to get the response from a image url. If this property is set to true, the response content returns only the created pdf download link.

[[PropertyBlockGetterAndSetter('OCR', 'Return Only PDF Link')]]

### Test Image URL

<span class="chip chip-text">Text</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> - <span class="chip chip-bd">Blocks</span> 

You can use the test image url if you have not any picture online on a server or else.

[[PropertyBlockGetter('OCR', 'Test Image URL')]]