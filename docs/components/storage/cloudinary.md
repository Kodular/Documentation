# Cloudinary

| Category | Requires | Version |
|:--------:|:-------:|:--------:|
|Storage|API 19, Android 4.4 - 4.4.4 KitKat|1|

:mag: {>>Non-visible component<<}

## Overview

A non-visible component that allows for uploading of images, videos, audios and many other file types to Cloudinary.

## Events

### Media Uploaded

[[Event('Cloudinary', 'Media Uploaded', 'responseContent', 'url')]]

| Params | []() |
|--------|------|
|response Content|Text|
|url|Text|


Event raised after the Upload Media block has been used

## Methods

### Upload Media

[[Method('Cloudinary', 'Upload Media', False, 'path')]]

| Params | []() |
|--------|------|
|path|Text|


Uploads the specified media file to your Cloudinary media library.

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