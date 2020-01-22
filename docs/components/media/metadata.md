# Metadata

| Category | Version | Requires |
|:--------:|:-------:|:--------:|
|Media|2|API 19 - Android 4.4 - 4.4.4 KitKat|

:mag: {>>Non-visible component<<}

## Overview

_A non-visible component that reads the metadata of audio/video files._

## Events

### No Metadata

[[Event('Metadata', 'No Metadata', 'type')]]

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |type|`text`|


_Triggers when there is no metadata found in the file._

## Methods

### Album

[[Method('Metadata', 'Album', true)]]

{>>Returns `text`<<}

_Get the Album from the file._

### Artist

[[Method('Metadata', 'Artist', true)]]

{>>Returns `text`<<}

_Get the Artist from the file._

### Author

[[Method('Metadata', 'Author', true)]]

{>>Returns `text`<<}

_Get the Author from the file._

### Bitrate

[[Method('Metadata', 'Bitrate', true)]]

{>>Returns `text`<<}

_Get the Bitrate from the file._

### Composer

[[Method('Metadata', 'Composer', true)]]

{>>Returns `text`<<}

_Get the Composer from the file._

### CustomItem

[[Method('Metadata', 'CustomItem', true, 'id')]]

{>>Returns `text`<<}

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |id|`number`|


_Get a custom metadata item from the file
you can find a list of ids on https://developer.android.com/reference/android/media/MediaMetadataRetriever.html_

### Date

[[Method('Metadata', 'Date', true)]]

{>>Returns `text`<<}

_Get the Date from the file._

### DiscNumber

[[Method('Metadata', 'DiscNumber', true)]]

{>>Returns `text`<<}

_Get the Disc Number from the file._

### Duration

[[Method('Metadata', 'Duration', true)]]

{>>Returns `text`<<}

_Get the Duration from the file._

### EmbeddedPicture

[[Method('Metadata', 'EmbeddedPicture', true)]]

{>>Returns `text`<<}

_This method finds the optional graphic or album/cover art associated associated with the data source. If there are more than one pictures, (any) one of them is returned._

### Genre

[[Method('Metadata', 'Genre', true)]]

{>>Returns `text`<<}

_Get the Genre from the file._

### HasAudio

[[Method('Metadata', 'HasAudio', true)]]

{>>Returns `text`<<}

_Get the Has Audio from the file._

### HasVideo

[[Method('Metadata', 'HasVideo', true)]]

{>>Returns `text`<<}

_Get the Has Video from the file._

### Location

[[Method('Metadata', 'Location', true)]]

{>>Returns `text`<<}

_Get the Location from the file._

### Mimetype

[[Method('Metadata', 'Mimetype', true)]]

{>>Returns `text`<<}

_Get the Mimetype from the file._

### Title

[[Method('Metadata', 'Title', true)]]

{>>Returns `text`<<}

_Get the Title from the file._

### TrackNumber

[[Method('Metadata', 'TrackNumber', true)]]

{>>Returns `text`<<}

_Get the Track Number from the file._

### VideoHeight

[[Method('Metadata', 'VideoHeight', true)]]

{>>Returns `text`<<}

_Get the Video Height from the file._

### VideoRotation

[[Method('Metadata', 'VideoRotation', true)]]

{>>Returns `text`<<}

_Get the Video Rotation from the file._

### VideoWidth

[[Method('Metadata', 'VideoWidth', true)]]

{>>Returns `text`<<}

_Get the Video Width from the file._

### Writer

[[Method('Metadata', 'Writer', true)]]

{>>Returns `text`<<}

_Get the Writer from the file._

### Year

[[Method('Metadata', 'Year', true)]]

{>>Returns `text`<<}

_Get the Year from the file._

## Properties

### File

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Metadata', 'File')]]

| Type |
|:----:|
|text|

_The name of the file._