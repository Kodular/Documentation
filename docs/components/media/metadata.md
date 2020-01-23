# Metadata

| Category | Version | Requires |
|:--------:|:-------:|:--------:|
|Media|2|API 19 - Android 4.4 - 4.4.4 KitKat|

:mag: {>>Non-visible component<<}

## Overview

A non-visible component that reads the metadata of audio/video files.

## Events

### No Metadata

[[Event('Metadata', 'No Metadata', 'type')]]

??? tip "Parameters"

    | Name | Type |
    |------|------|
    |type|`text`|


Triggers when there is no metadata found in the file.

## Methods

### Album

_Block preview not available_

{>>Returns `text`<<}

Get the Album from the file.

### Artist

_Block preview not available_

{>>Returns `text`<<}

Get the Artist from the file.

### Author

_Block preview not available_

{>>Returns `text`<<}

Get the Author from the file.

### Bitrate

_Block preview not available_

{>>Returns `text`<<}

Get the Bitrate from the file.

### Composer

_Block preview not available_

{>>Returns `text`<<}

Get the Composer from the file.

### CustomItem

_Block preview not available_

{>>Returns `text`<<}

??? tip "Parameters"

    | Name | Type |
    |------|------|
    |id|`number`|


Get a custom metadata item from the fileyou can find a list of ids on https://developer.android.com/reference/android/media/MediaMetadataRetriever.html

### Date

_Block preview not available_

{>>Returns `text`<<}

Get the Date from the file.

### DiscNumber

_Block preview not available_

{>>Returns `text`<<}

Get the Disc Number from the file.

### Duration

_Block preview not available_

{>>Returns `text`<<}

Get the Duration from the file.

### EmbeddedPicture

_Block preview not available_

{>>Returns `text`<<}

This method finds the optional graphic or album/cover art associated associated with the data source. If there are more than one pictures, (any) one of them is returned.

### Genre

_Block preview not available_

{>>Returns `text`<<}

Get the Genre from the file.

### HasAudio

_Block preview not available_

{>>Returns `text`<<}

Get the Has Audio from the file.

### HasVideo

_Block preview not available_

{>>Returns `text`<<}

Get the Has Video from the file.

### Location

_Block preview not available_

{>>Returns `text`<<}

Get the Location from the file.

### Mimetype

_Block preview not available_

{>>Returns `text`<<}

Get the Mimetype from the file.

### Title

_Block preview not available_

{>>Returns `text`<<}

Get the Title from the file.

### TrackNumber

_Block preview not available_

{>>Returns `text`<<}

Get the Track Number from the file.

### VideoHeight

_Block preview not available_

{>>Returns `text`<<}

Get the Video Height from the file.

### VideoRotation

_Block preview not available_

{>>Returns `text`<<}

Get the Video Rotation from the file.

### VideoWidth

_Block preview not available_

{>>Returns `text`<<}

Get the Video Width from the file.

### Writer

_Block preview not available_

{>>Returns `text`<<}

Get the Writer from the file.

### Year

_Block preview not available_

{>>Returns `text`<<}

Get the Year from the file.

## Properties

### File

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Metadata', 'File')]]

| Type |
|:----:|
|text|

The name of the file.