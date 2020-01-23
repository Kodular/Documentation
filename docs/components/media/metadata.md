# Metadata

| Category | Version | Requires |
|:--------:|:-------:|:--------:|
|Media|2|API 19, Android 4.4 - 4.4.4 KitKat|

:mag: {>>Non-visible component<<}

## Overview

A non-visible component that reads the metadata of audio/video files.

## Events

### No Metadata

[[Event('Metadata', 'No Metadata', 'type')]]

| Params | []() |
|--------|------|
|type|Text|


Triggers when there is no metadata found in the file.

## Methods

### Album

[[Method('Metadata', 'Album', True)]]

{>>Returns `text`<<}

Get the Album from the file.

### Artist

[[Method('Metadata', 'Artist', True)]]

{>>Returns `text`<<}

Get the Artist from the file.

### Author

[[Method('Metadata', 'Author', True)]]

{>>Returns `text`<<}

Get the Author from the file.

### Bitrate

[[Method('Metadata', 'Bitrate', True)]]

{>>Returns `text`<<}

Get the Bitrate from the file.

### Composer

[[Method('Metadata', 'Composer', True)]]

{>>Returns `text`<<}

Get the Composer from the file.

### Custom Item

[[Method('Metadata', 'Custom Item', True, 'id')]]

{>>Returns `text`<<}

| Params | []() |
|--------|------|
|id|Number|


Get a custom metadata item from the fileyou can find a list of ids on https://developer.android.com/reference/android/media/MediaMetadataRetriever.html

### Date

[[Method('Metadata', 'Date', True)]]

{>>Returns `text`<<}

Get the Date from the file.

### Disc Number

[[Method('Metadata', 'Disc Number', True)]]

{>>Returns `text`<<}

Get the Disc Number from the file.

### Duration

[[Method('Metadata', 'Duration', True)]]

{>>Returns `text`<<}

Get the Duration from the file.

### Embedded Picture

[[Method('Metadata', 'Embedded Picture', True)]]

{>>Returns `text`<<}

This method finds the optional graphic or album/cover art associated associated with the data source. If there are more than one pictures, (any) one of them is returned.

### Genre

[[Method('Metadata', 'Genre', True)]]

{>>Returns `text`<<}

Get the Genre from the file.

### Has Audio

[[Method('Metadata', 'Has Audio', True)]]

{>>Returns `text`<<}

Get the Has Audio from the file.

### Has Video

[[Method('Metadata', 'Has Video', True)]]

{>>Returns `text`<<}

Get the Has Video from the file.

### Location

[[Method('Metadata', 'Location', True)]]

{>>Returns `text`<<}

Get the Location from the file.

### Mimetype

[[Method('Metadata', 'Mimetype', True)]]

{>>Returns `text`<<}

Get the Mimetype from the file.

### Title

[[Method('Metadata', 'Title', True)]]

{>>Returns `text`<<}

Get the Title from the file.

### Track Number

[[Method('Metadata', 'Track Number', True)]]

{>>Returns `text`<<}

Get the Track Number from the file.

### Video Height

[[Method('Metadata', 'Video Height', True)]]

{>>Returns `text`<<}

Get the Video Height from the file.

### Video Rotation

[[Method('Metadata', 'Video Rotation', True)]]

{>>Returns `text`<<}

Get the Video Rotation from the file.

### Video Width

[[Method('Metadata', 'Video Width', True)]]

{>>Returns `text`<<}

Get the Video Width from the file.

### Writer

[[Method('Metadata', 'Writer', True)]]

{>>Returns `text`<<}

Get the Writer from the file.

### Year

[[Method('Metadata', 'Year', True)]]

{>>Returns `text`<<}

Get the Year from the file.

## Properties

### File

<span class="chip chip-text">Text</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span> 

The name of the file.

[[PropertyBlockGetterAndSetter('Metadata', 'File')]]