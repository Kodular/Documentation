# Camcorder

| Category | Version | Requires |
|:--------:|:-------:|:--------:|
|Media|1|API 19, Android 4.4 - 4.4.4 KitKat|

:mag: {>>Non-visible component<<}

## Overview

A component to record a video using the device's camcorder.After the video is recorded, the name of the file on the phone containing the clip is available as an argument to the AfterRecording event. The file name can be used, for example, to set the source property of a VideoPlayer component.

## Events

### After Recording

[[Event('Camcorder', 'After Recording', 'clip')]]

??? tip "Parameters"

    | Name | Type |
    |------|------|
    |clip|`text`|


Indicates that a video was recorded with the camera and provides the path tothe stored picture.

## Methods

### Record Video

_Block preview not available_

Records a video, then raises the AfterRecoding event.