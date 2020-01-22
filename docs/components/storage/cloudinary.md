# Cloudinary

| Category | Version | Requires |
|:--------:|:-------:|:--------:|
|Storage|1|API 19 - Android 4.4 - 4.4.4 KitKat|

:mag: {>>Non-visible component<<}

## Overview

A non-visible component that allows for uploading of images, videos, audios and many other file types to Cloudinary.

## Events

### Media Uploaded

[[Event('Cloudinary', 'Media Uploaded', 'responseContent url')]]

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |response Content|`text`|
    |url|`text`|


Event raised after the Upload Media block has been used

## Methods

### UploadMedia

[[Method('Cloudinary', 'UploadMedia', false, 'path')]]

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |path|`text`|


Uploads the specified media file to your Cloudinary media library.

## Properties

### API Key

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Cloudinary', 'API Key')]]

| Type |
|:----:|
|text|

Your Cloudinary API key.

### API Secret

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Cloudinary', 'API Secret')]]

| Type |
|:----:|
|text|

Your Cloudinary API secret.

### Cloud Name

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Cloudinary', 'Cloud Name')]]

| Type |
|:----:|
|text|

Your Cloudinary cloud name.