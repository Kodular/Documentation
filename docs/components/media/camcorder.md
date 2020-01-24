# Camcorder

| Category | Requires | Version |
|:--------:|:-------:|:--------:|
|Media|API 19, Android 4.4 - 4.4.4 KitKat|1|

:mag: {>>Non-visible component<<}

## Overview

A component to record a video using the device's camcorder.After the video is recorded, the name of the file on the phone containing the clip is available as an argument to the AfterRecording event. The file name can be used, for example, to set the source property of a VideoPlayer component.

??? example "Permissions"
    * [android.permission.CAMERA](https://developer.android.com/reference/android/Manifest.permission.html#CAMERA)
    * [android.permission.READ_EXTERNAL_STORAGE](https://developer.android.com/reference/android/Manifest.permission.html#READ_EXTERNAL_STORAGE)
    * [android.permission.WRITE_EXTERNAL_STORAGE](https://developer.android.com/reference/android/Manifest.permission.html#WRITE_EXTERNAL_STORAGE)


## Events

### After Recording

Indicates that a video was recorded with the camera and provides the path tothe stored picture.

[[Event('Camcorder', 'After Recording', 'clip')]]

| Params | []() |
|--------|------|
|clip|<span class="chip chip-text">Text</span>|


## Methods

### Record Video

Records a video, then raises the AfterRecoding event.

[[Method('Camcorder', 'Record Video', False)]]