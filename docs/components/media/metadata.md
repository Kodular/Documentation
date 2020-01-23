# Metadata

| Category | Requires | Version |
|:--------:|:-------:|:--------:|
|Media|API 19, Android 4.4 - 4.4.4 KitKat|2|

:mag: {>>Non-visible component<<}

## Overview

A non-visible component that reads the metadata of audio/video files.

??? example "Permissions"
    * [android.permission.INTERNET](https://developer.android.com/reference/android/Manifest.permission.html#android.permission.INTERNET)
    * [android.permission.READ_EXTERNAL_STORAGE](https://developer.android.com/reference/android/Manifest.permission.html#android.permission.READ_EXTERNAL_STORAGE)
    * [android.permission.WRITE_EXTERNAL_STORAGE](https://developer.android.com/reference/android/Manifest.permission.html#android.permission.WRITE_EXTERNAL_STORAGE)


## Events

### No Metadata

Triggers when there is no metadata found in the file.

[[Event('Metadata', 'No Metadata', 'type')]]

| Params | []() |
|--------|------|
|type|<span class="chip chip-text">Text</span>|


## Methods

### Album

<span class="chip chip-text">Returns: <i>Text</i></span> 

Get the Album from the file.

[[Method('Metadata', 'Album', True)]]

### Artist

<span class="chip chip-text">Returns: <i>Text</i></span> 

Get the Artist from the file.

[[Method('Metadata', 'Artist', True)]]

### Author

<span class="chip chip-text">Returns: <i>Text</i></span> 

Get the Author from the file.

[[Method('Metadata', 'Author', True)]]

### Bitrate

<span class="chip chip-text">Returns: <i>Text</i></span> 

Get the Bitrate from the file.

[[Method('Metadata', 'Bitrate', True)]]

### Composer

<span class="chip chip-text">Returns: <i>Text</i></span> 

Get the Composer from the file.

[[Method('Metadata', 'Composer', True)]]

### Custom Item

<span class="chip chip-text">Returns: <i>Text</i></span> 

Get a custom metadata item from the fileyou can find a list of ids on https://developer.android.com/reference/android/media/MediaMetadataRetriever.html

[[Method('Metadata', 'Custom Item', True, 'id')]]

| Params | []() |
|--------|------|
|id|<span class="chip chip-number">Number</span>|


### Date

<span class="chip chip-text">Returns: <i>Text</i></span> 

Get the Date from the file.

[[Method('Metadata', 'Date', True)]]

### Disc Number

<span class="chip chip-text">Returns: <i>Text</i></span> 

Get the Disc Number from the file.

[[Method('Metadata', 'Disc Number', True)]]

### Duration

<span class="chip chip-text">Returns: <i>Text</i></span> 

Get the Duration from the file.

[[Method('Metadata', 'Duration', True)]]

### Embedded Picture

<span class="chip chip-text">Returns: <i>Text</i></span> 

This method finds the optional graphic or album/cover art associated associated with the data source. If there are more than one pictures, (any) one of them is returned.

[[Method('Metadata', 'Embedded Picture', True)]]

### Genre

<span class="chip chip-text">Returns: <i>Text</i></span> 

Get the Genre from the file.

[[Method('Metadata', 'Genre', True)]]

### Has Audio

<span class="chip chip-text">Returns: <i>Text</i></span> 

Get the Has Audio from the file.

[[Method('Metadata', 'Has Audio', True)]]

### Has Video

<span class="chip chip-text">Returns: <i>Text</i></span> 

Get the Has Video from the file.

[[Method('Metadata', 'Has Video', True)]]

### Location

<span class="chip chip-text">Returns: <i>Text</i></span> 

Get the Location from the file.

[[Method('Metadata', 'Location', True)]]

### Mimetype

<span class="chip chip-text">Returns: <i>Text</i></span> 

Get the Mimetype from the file.

[[Method('Metadata', 'Mimetype', True)]]

### Title

<span class="chip chip-text">Returns: <i>Text</i></span> 

Get the Title from the file.

[[Method('Metadata', 'Title', True)]]

### Track Number

<span class="chip chip-text">Returns: <i>Text</i></span> 

Get the Track Number from the file.

[[Method('Metadata', 'Track Number', True)]]

### Video Height

<span class="chip chip-text">Returns: <i>Text</i></span> 

Get the Video Height from the file.

[[Method('Metadata', 'Video Height', True)]]

### Video Rotation

<span class="chip chip-text">Returns: <i>Text</i></span> 

Get the Video Rotation from the file.

[[Method('Metadata', 'Video Rotation', True)]]

### Video Width

<span class="chip chip-text">Returns: <i>Text</i></span> 

Get the Video Width from the file.

[[Method('Metadata', 'Video Width', True)]]

### Writer

<span class="chip chip-text">Returns: <i>Text</i></span> 

Get the Writer from the file.

[[Method('Metadata', 'Writer', True)]]

### Year

<span class="chip chip-text">Returns: <i>Text</i></span> 

Get the Year from the file.

[[Method('Metadata', 'Year', True)]]

## Properties

### File

<span class="chip chip-text">Text</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span> 

The name of the file.

[[PropertyBlockGetterAndSetter('Metadata', 'File')]]