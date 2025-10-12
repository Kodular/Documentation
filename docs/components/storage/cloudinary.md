# Cloudinary

{>> Non-Visible component<<}

| Category | Requires | Version |
|:--------:|:-------:|:--------:|
|**Storage**|<span class="chip chip-any">API 21, Android 5.0 Lollipop</span>|<span class="chip chip-number">1</span>|

## Overview

A non-visible component that allows for uploading of images, videos, audios and many other file types to Cloudinary.

??? example "Permissions"
    * [android.permission.READ_MEDIA_VIDEO](https://developer.android.com/reference/android/Manifest.permission.html#READ_MEDIA_VIDEO)
    * [android.permission.READ_MEDIA_AUDIO](https://developer.android.com/reference/android/Manifest.permission.html#READ_MEDIA_AUDIO)
    * [android.permission.INTERNET](https://developer.android.com/reference/android/Manifest.permission.html#INTERNET)
    * [android.permission.READ_MEDIA_IMAGES](https://developer.android.com/reference/android/Manifest.permission.html#READ_MEDIA_IMAGES)
    * [android.permission.READ_MEDIA_VISUAL_USER_SELECTED](https://developer.android.com/reference/android/Manifest.permission.html#READ_MEDIA_VISUAL_USER_SELECTED)
    * [android.permission.READ_EXTERNAL_STORAGE](https://developer.android.com/reference/android/Manifest.permission.html#READ_EXTERNAL_STORAGE)

## Events

### Media Uploaded

Event raised after the Upload Media block has been used

<div class="block" ai2-block="event" not-rendered="true" value="%7B%22componentName%22:%20%22Cloudinary%22,%20%22name%22:%20%22Media%20Uploaded%22,%20%22param%22:%20%5B%22response%20Content%22,%20%22url%22%5D%7D"></div>

| Params | []() |
|--------|------|
|response Content|<span class="chip chip-text">Text</span>|
|url|<span class="chip chip-text">Text</span>|

## Methods

### Upload Media

Uploads the specified media file to your Cloudinary media library.

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22Cloudinary%22,%20%22name%22:%20%22Upload%20Media%22,%20%22output%22:%20false,%20%22param%22:%20%5B%22path%22%5D%7D"></div>

| Params | []() |
|--------|------|
|path|<span class="chip chip-text">Text</span>|

## Properties

### API Key

<span style="user-select: none; white-space:pre-wrap;"><span class="chip chip-text">Text</span> :heavy_minus_sign: <span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span>  - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span></span>

Your Cloudinary API key.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Cloudinary%22,%20%22name%22:%20%22API%20Key%22,%20%22getter%22:%20true%7D"></div>
<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Cloudinary%22,%20%22name%22:%20%22API%20Key%22,%20%22getter%22:%20false%7D"></div>

### API Secret

<span style="user-select: none; white-space:pre-wrap;"><span class="chip chip-text">Text</span> :heavy_minus_sign: <span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span>  - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span></span>

Your Cloudinary API secret.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Cloudinary%22,%20%22name%22:%20%22API%20Secret%22,%20%22getter%22:%20true%7D"></div>
<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Cloudinary%22,%20%22name%22:%20%22API%20Secret%22,%20%22getter%22:%20false%7D"></div>

### Cloud Name

<span style="user-select: none; white-space:pre-wrap;"><span class="chip chip-text">Text</span> :heavy_minus_sign: <span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span>  - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span></span>

Your Cloudinary cloud name.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Cloudinary%22,%20%22name%22:%20%22Cloud%20Name%22,%20%22getter%22:%20true%7D"></div>
<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Cloudinary%22,%20%22name%22:%20%22Cloud%20Name%22,%20%22getter%22:%20false%7D"></div>
