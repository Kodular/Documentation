# Metadata

{>> Non-Visible component<<}

| Category | Requires | Version |
|:--------:|:-------:|:--------:|
|**Media**|<span class="chip chip-any">API 21, Android 5.0 Lollipop</span>|<span class="chip chip-number">2</span>|

## Overview

A non-visible component that reads the metadata of audio/video files.

??? example "Permissions"
    * [android.permission.INTERNET](https://developer.android.com/reference/android/Manifest.permission.html#INTERNET)
    * [android.permission.READ_EXTERNAL_STORAGE](https://developer.android.com/reference/android/Manifest.permission.html#READ_EXTERNAL_STORAGE)
    * [android.permission.WRITE_EXTERNAL_STORAGE](https://developer.android.com/reference/android/Manifest.permission.html#WRITE_EXTERNAL_STORAGE)

## Events

### No Metadata

Triggers when there is no metadata found in the file.

<div class="block" ai2-block="event" not-rendered="true" value="%7B%22componentName%22:%20%22Metadata%22,%20%22name%22:%20%22No%20Metadata%22,%20%22param%22:%20%5B%22type%22%5D%7D"></div>

| Params | []() |
|--------|------|
|type|<span class="chip chip-text">Text</span>|

## Methods

### Album

<span class="chip chip-text">Returns: <i>Text</i></span>

Get the Album from the file.

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22Metadata%22,%20%22name%22:%20%22Album%22,%20%22output%22:%20true,%20%22param%22:%20%5B%5D%7D"></div>

### Artist

<span class="chip chip-text">Returns: <i>Text</i></span>

Get the Artist from the file.

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22Metadata%22,%20%22name%22:%20%22Artist%22,%20%22output%22:%20true,%20%22param%22:%20%5B%5D%7D"></div>

### Author

<span class="chip chip-text">Returns: <i>Text</i></span>

Get the Author from the file.

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22Metadata%22,%20%22name%22:%20%22Author%22,%20%22output%22:%20true,%20%22param%22:%20%5B%5D%7D"></div>

### Bitrate

<span class="chip chip-text">Returns: <i>Text</i></span>

Get the Bitrate from the file.

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22Metadata%22,%20%22name%22:%20%22Bitrate%22,%20%22output%22:%20true,%20%22param%22:%20%5B%5D%7D"></div>

### Composer

<span class="chip chip-text">Returns: <i>Text</i></span>

Get the Composer from the file.

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22Metadata%22,%20%22name%22:%20%22Composer%22,%20%22output%22:%20true,%20%22param%22:%20%5B%5D%7D"></div>

### Custom Item

<span class="chip chip-text">Returns: <i>Text</i></span>

Get a custom metadata item from the fileyou can find a list of ids on https://developer.android.com/reference/android/media/MediaMetadataRetriever.html

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22Metadata%22,%20%22name%22:%20%22Custom%20Item%22,%20%22output%22:%20true,%20%22param%22:%20%5B%22id%22%5D%7D"></div>

| Params | []() |
|--------|------|
|id|<span class="chip chip-number">Number</span>|

### Date

<span class="chip chip-text">Returns: <i>Text</i></span>

Get the Date from the file.

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22Metadata%22,%20%22name%22:%20%22Date%22,%20%22output%22:%20true,%20%22param%22:%20%5B%5D%7D"></div>

### Disc Number

<span class="chip chip-text">Returns: <i>Text</i></span>

Get the Disc Number from the file.

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22Metadata%22,%20%22name%22:%20%22Disc%20Number%22,%20%22output%22:%20true,%20%22param%22:%20%5B%5D%7D"></div>

### Duration

<span class="chip chip-text">Returns: <i>Text</i></span>

Get the Duration from the file.

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22Metadata%22,%20%22name%22:%20%22Duration%22,%20%22output%22:%20true,%20%22param%22:%20%5B%5D%7D"></div>

### Embedded Picture

<span class="chip chip-text">Returns: <i>Text</i></span>

This method finds the optional graphic or album/cover art associated associated with the data source. If there are more than one pictures, (any) one of them is returned.

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22Metadata%22,%20%22name%22:%20%22Embedded%20Picture%22,%20%22output%22:%20true,%20%22param%22:%20%5B%5D%7D"></div>

### Genre

<span class="chip chip-text">Returns: <i>Text</i></span>

Get the Genre from the file.

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22Metadata%22,%20%22name%22:%20%22Genre%22,%20%22output%22:%20true,%20%22param%22:%20%5B%5D%7D"></div>

### Has Audio

<span class="chip chip-text">Returns: <i>Text</i></span>

Get the Has Audio from the file.

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22Metadata%22,%20%22name%22:%20%22Has%20Audio%22,%20%22output%22:%20true,%20%22param%22:%20%5B%5D%7D"></div>

### Has Video

<span class="chip chip-text">Returns: <i>Text</i></span>

Get the Has Video from the file.

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22Metadata%22,%20%22name%22:%20%22Has%20Video%22,%20%22output%22:%20true,%20%22param%22:%20%5B%5D%7D"></div>

### Location

<span class="chip chip-text">Returns: <i>Text</i></span>

Get the Location from the file.

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22Metadata%22,%20%22name%22:%20%22Location%22,%20%22output%22:%20true,%20%22param%22:%20%5B%5D%7D"></div>

### Mimetype

<span class="chip chip-text">Returns: <i>Text</i></span>

Get the Mimetype from the file.

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22Metadata%22,%20%22name%22:%20%22Mimetype%22,%20%22output%22:%20true,%20%22param%22:%20%5B%5D%7D"></div>

### Title

<span class="chip chip-text">Returns: <i>Text</i></span>

Get the Title from the file.

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22Metadata%22,%20%22name%22:%20%22Title%22,%20%22output%22:%20true,%20%22param%22:%20%5B%5D%7D"></div>

### Track Number

<span class="chip chip-text">Returns: <i>Text</i></span>

Get the Track Number from the file.

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22Metadata%22,%20%22name%22:%20%22Track%20Number%22,%20%22output%22:%20true,%20%22param%22:%20%5B%5D%7D"></div>

### Video Height

<span class="chip chip-text">Returns: <i>Text</i></span>

Get the Video Height from the file.

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22Metadata%22,%20%22name%22:%20%22Video%20Height%22,%20%22output%22:%20true,%20%22param%22:%20%5B%5D%7D"></div>

### Video Rotation

<span class="chip chip-text">Returns: <i>Text</i></span>

Get the Video Rotation from the file.

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22Metadata%22,%20%22name%22:%20%22Video%20Rotation%22,%20%22output%22:%20true,%20%22param%22:%20%5B%5D%7D"></div>

### Video Width

<span class="chip chip-text">Returns: <i>Text</i></span>

Get the Video Width from the file.

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22Metadata%22,%20%22name%22:%20%22Video%20Width%22,%20%22output%22:%20true,%20%22param%22:%20%5B%5D%7D"></div>

### Writer

<span class="chip chip-text">Returns: <i>Text</i></span>

Get the Writer from the file.

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22Metadata%22,%20%22name%22:%20%22Writer%22,%20%22output%22:%20true,%20%22param%22:%20%5B%5D%7D"></div>

### Year

<span class="chip chip-text">Returns: <i>Text</i></span>

Get the Year from the file.

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22Metadata%22,%20%22name%22:%20%22Year%22,%20%22output%22:%20true,%20%22param%22:%20%5B%5D%7D"></div>

## Properties

### File

<span style="user-select: none; white-space:pre-wrap;"><span class="chip chip-text">Text</span> :heavy_minus_sign: <span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span>  - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span></span>

The name of the file.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Metadata%22,%20%22name%22:%20%22File%22,%20%22getter%22:%20true%7D"></div>
<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Metadata%22,%20%22name%22:%20%22File%22,%20%22getter%22:%20false%7D"></div>
