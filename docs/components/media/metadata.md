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

[[Method('Metadata', 'Album', true)]]

{>>Returns `text`<<}

Get the Album from the file.

### Artist

[[Method('Metadata', 'Artist', true)]]

{>>Returns `text`<<}

Get the Artist from the file.

### Author

[[Method('Metadata', 'Author', true)]]

{>>Returns `text`<<}

Get the Author from the file.

### Bitrate

[[Method('Metadata', 'Bitrate', true)]]

{>>Returns `text`<<}

Get the Bitrate from the file.

### Composer

[[Method('Metadata', 'Composer', true)]]

{>>Returns `text`<<}

Get the Composer from the file.

### CustomItem

[[Method('Metadata', 'CustomItem', true, 'id')]]

{>>Returns `text`<<}

??? tip "Parameters"

    | Name | Type |
    |------|------|
    |id|`number`|


Get a custom metadata item from the file
you can find a list of ids on https://developer.android.com/reference/android/media/MediaMetadataRetriever.html

### Date

[[Method('Metadata', 'Date', true)]]

{>>Returns `text`<<}

Get the Date from the file.

### DiscNumber

[[Method('Metadata', 'DiscNumber', true)]]

{>>Returns `text`<<}

Get the Disc Number from the file.

### Duration

[[Method('Metadata', 'Duration', true)]]

{>>Returns `text`<<}

Get the Duration from the file.

### EmbeddedPicture

[[Method('Metadata', 'EmbeddedPicture', true)]]

{>>Returns `text`<<}

This method finds the optional graphic or album/cover art associated associated with the data source. If there are more than one pictures, (any) one of them is returned.

### Genre

[[Method('Metadata', 'Genre', true)]]

{>>Returns `text`<<}

Get the Genre from the file.

### HasAudio

[[Method('Metadata', 'HasAudio', true)]]

{>>Returns `text`<<}

Get the Has Audio from the file.

### HasVideo

[[Method('Metadata', 'HasVideo', true)]]

{>>Returns `text`<<}

Get the Has Video from the file.

### Location

[[Method('Metadata', 'Location', true)]]

{>>Returns `text`<<}

Get the Location from the file.

### Mimetype

[[Method('Metadata', 'Mimetype', true)]]

{>>Returns `text`<<}

Get the Mimetype from the file.

### Title

[[Method('Metadata', 'Title', true)]]

{>>Returns `text`<<}

Get the Title from the file.

### TrackNumber

[[Method('Metadata', 'TrackNumber', true)]]

{>>Returns `text`<<}

Get the Track Number from the file.

### VideoHeight

[[Method('Metadata', 'VideoHeight', true)]]

{>>Returns `text`<<}

Get the Video Height from the file.

### VideoRotation

[[Method('Metadata', 'VideoRotation', true)]]

{>>Returns `text`<<}

Get the Video Rotation from the file.

### VideoWidth

[[Method('Metadata', 'VideoWidth', true)]]

{>>Returns `text`<<}

Get the Video Width from the file.

### Writer

[[Method('Metadata', 'Writer', true)]]

{>>Returns `text`<<}

Get the Writer from the file.

### Year

[[Method('Metadata', 'Year', true)]]

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