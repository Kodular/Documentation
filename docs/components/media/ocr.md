# OCR

| Category | Requires | Version |
|:--------:|:-------:|:--------:|
|**Media**|<span class="chip chip-any">API 19, Android 4.4 - 4.4.4 KitKat</span>|<span class="chip chip-number">5</span>|

:mag: {>>Non-Visible component<<}

## Overview

A non-visible component that reads text from images using Optical Character Recognition technology.

??? example "Permissions"
    * [android.permission.INTERNET](https://developer.android.com/reference/android/Manifest.permission.html#INTERNET)
    * [android.permission.READ_EXTERNAL_STORAGE](https://developer.android.com/reference/android/Manifest.permission.html#READ_EXTERNAL_STORAGE)

## Events

### Got Response

You will find here the success state and the response content.

<div class="block" ai2-block="event" not-rendered="true" value="%7B%22componentName%22:%20%22OCR%22,%20%22name%22:%20%22Got%20Response%22,%20%22param%22:%20%5B%22success%22,%20%22response%20Content%22%5D%7D"></div>

| Params | []() |
|--------|------|
|success|<span class="chip chip-boolean">Boolean</span>|
|response Content|<span class="chip chip-text">Text</span>|

### Got Server Status

You will find here the server status from the ocr provider. Possible results are 'UP' or 'DOWN'. 'pro Usa1' = Usa, East Coast. 'pro Usa2' = Usa, West Coast.

<div class="block" ai2-block="event" not-rendered="true" value="%7B%22componentName%22:%20%22OCR%22,%20%22name%22:%20%22Got%20Server%20Status%22,%20%22param%22:%20%5B%22free%22,%20%22pro%20USA%201%22,%20%22pro%20USA%202%22,%20%22pro%20Europe%22,%20%22pro%20Asia%22%5D%7D"></div>

| Params | []() |
|--------|------|
|free|<span class="chip chip-text">Text</span>|
|pro USA 1|<span class="chip chip-text">Text</span>|
|pro USA 2|<span class="chip chip-text">Text</span>|
|pro Europe|<span class="chip chip-text">Text</span>|
|pro Asia|<span class="chip chip-text">Text</span>|

## Methods

### Get OCR Server Status

Get the server status from the free ocr.space server. This is helpful if you want to know if the server is online or offline. Returns true when online, else false when offline.

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22OCR%22,%20%22name%22:%20%22Get%20OCR%20Server%20Status%22,%20%22output%22:%20false,%20%22param%22:%20%5B%5D%7D"></div>

### Get Text From Image Url

Get the text from a picture via the image url. Example: http://name/yourimage.jpg. Service powered by ocr.space.

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22OCR%22,%20%22name%22:%20%22Get%20Text%20From%20Image%20Url%22,%20%22output%22:%20false,%20%22param%22:%20%5B%22image%20URL%22%5D%7D"></div>

| Params | []() |
|--------|------|
|image URL|<span class="chip chip-text">Text</span>|

### Upload Image

Upload your image to the server from ocr.space and then you get back the text from the picture.

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22OCR%22,%20%22name%22:%20%22Upload%20Image%22,%20%22output%22:%20false,%20%22param%22:%20%5B%22path%22%5D%7D"></div>

| Params | []() |
|--------|------|
|path|<span class="chip chip-text">Text</span>|

## Properties

### API Key

<span style="user-select: none; white-space:pre-wrap;"><span class="chip chip-text">Text</span><span class="chip chip-text">Default: <i>helloworld</i></span>:heavy_minus_sign:<span class="chip chip-rw">Read</span><span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span><span class="chip chip-bd">Blocks</span></span>

You can use the default api key: helloworld, or you can create your own api key at: https://ocr.space/ocrapi

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22OCR%22,%20%22name%22:%20%22API%20Key%22,%20%22getter%22:%20true%7D"></div>
<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22OCR%22,%20%22name%22:%20%22API%20Key%22,%20%22getter%22:%20false%7D"></div>

### Create Searchable PDF

<span style="user-select: none; white-space:pre-wrap;"><span class="chip chip-boolean">Boolean</span><span class="chip chip-boolean">Default: <i>False</i></span>:heavy_minus_sign:<span class="chip chip-rw">Read</span><span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span><span class="chip chip-bd">Blocks</span></span>

A searchable PDF file is a PDF file that includes text that can be searched upon using the standard Adobe Reader “search” functionality. In addition, the text can be selected and copied from the PDF. In this case the JSON response of the API contains a download link for the the searchable PDF. This download link is valid for one hour, than all data is removed from the OCR servers.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22OCR%22,%20%22name%22:%20%22Create%20Searchable%20PDF%22,%20%22getter%22:%20true%7D"></div>
<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22OCR%22,%20%22name%22:%20%22Create%20Searchable%20PDF%22,%20%22getter%22:%20false%7D"></div>

### Language

<span style="user-select: none; white-space:pre-wrap;"><span class="chip chip-text">Text</span><span class="chip chip-text">Default: <i>1</i></span>:heavy_minus_sign:<span class="chip chip-rw">Read</span><span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span><span class="chip chip-bd">Blocks</span></span>

Choose the language used for OCR. If no language is specified, English is taken as 'Default'.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22OCR%22,%20%22name%22:%20%22Language%22,%20%22getter%22:%20true%7D"></div>
<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22OCR%22,%20%22name%22:%20%22Language%22,%20%22getter%22:%20false%7D"></div>

### Overlaid

<span style="user-select: none; white-space:pre-wrap;"><span class="chip chip-boolean">Boolean</span><span class="chip chip-boolean">Default: <i>False</i></span>:heavy_minus_sign:<span class="chip chip-rw">Read</span><span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span><span class="chip chip-bd">Blocks</span></span>

Allows you to specify if the image/pdf text overlay is required. Overlay could be used to show the text over the image.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22OCR%22,%20%22name%22:%20%22Overlaid%22,%20%22getter%22:%20true%7D"></div>
<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22OCR%22,%20%22name%22:%20%22Overlaid%22,%20%22getter%22:%20false%7D"></div>

### Return Only Message

<span style="user-select: none; white-space:pre-wrap;"><span class="chip chip-boolean">Boolean</span>:heavy_minus_sign:<span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Blocks</span></span>

Set this block before you upload a image and before you try to get the response from a image url. If this property is set to true, the response content returns only the message. That means the response content will be only the scanned text in words.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22OCR%22,%20%22name%22:%20%22Return%20Only%20Message%22,%20%22getter%22:%20false%7D"></div>

### Return Only PDF Link

<span style="user-select: none; white-space:pre-wrap;"><span class="chip chip-boolean">Boolean</span>:heavy_minus_sign:<span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Blocks</span></span>

Set this block before you upload a image and before you try to get the response from a image url. If this property is set to true, the response content returns only the created pdf download link.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22OCR%22,%20%22name%22:%20%22Return%20Only%20PDF%20Link%22,%20%22getter%22:%20false%7D"></div>

### Test Image URL

<span style="user-select: none; white-space:pre-wrap;"><span class="chip chip-text">Text</span>:heavy_minus_sign:<span class="chip chip-rw">Read</span> - <span class="chip chip-bd">Blocks</span></span>

You can use the test image url if you have not any picture online on a server or else.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22OCR%22,%20%22name%22:%20%22Test%20Image%20URL%22,%20%22getter%22:%20true%7D"></div>
