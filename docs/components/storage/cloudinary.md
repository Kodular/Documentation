# Cloudinary

| Category | Requires | Version |
|:--------:|:-------:|:--------:|
|Storage|API 19, Android 4.4 - 4.4.4 KitKat|1|

:mag: {>>Non-visible component<<}

## Overview

A non-visible component that allows for uploading of images, videos, audios and many other file types to Cloudinary.

??? example "Permissions"
    * [android.permission.INTERNET](https://developer.android.com/reference/android/Manifest.permission.html#INTERNET)
    * [android.permission.READ_EXTERNAL_STORAGE](https://developer.android.com/reference/android/Manifest.permission.html#READ_EXTERNAL_STORAGE)


## Events

### Media Uploaded

Event raised after the Upload Media block has been used

[[Event('Cloudinary', 'Media Uploaded', 'responseContent', 'url')]]

| Params | []() |
|--------|------|
|response Content|<span class="chip chip-text">Text</span>|
|url|<span class="chip chip-text">Text</span>|


## Methods

### Upload Media

Uploads the specified media file to your Cloudinary media library.

[[Method('Cloudinary', 'Upload Media', False, 'path')]]

| Params | []() |
|--------|------|
|path|<span class="chip chip-text">Text</span>|


## Properties

### API Key

<span class="chip chip-text">Text</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span> 

Your Cloudinary API key.

[[PropertyBlockGetterAndSetter('Cloudinary', 'API Key')]]

### API Secret

<span class="chip chip-text">Text</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span> 

Your Cloudinary API secret.

[[PropertyBlockGetterAndSetter('Cloudinary', 'API Secret')]]

### Cloud Name

<span class="chip chip-text">Text</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span> 

Your Cloudinary cloud name.

[[PropertyBlockGetterAndSetter('Cloudinary', 'Cloud Name')]]