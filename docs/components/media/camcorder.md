# Camcorder

{>> Non-Visible component<<}

| Category | Requires | Version |
|:--------:|:-------:|:--------:|
|**Media**|<span class="chip chip-any">API 21, Android 5.0 Lollipop</span>|<span class="chip chip-number">1</span>|

## Overview

A component to record a video using the device's camcorder.After the video is recorded, the name of the file on the phone containing the clip is available as an argument to the AfterRecording event. The file name can be used, for example, to set the source property of a VideoPlayer component.

??? example "Permissions"
    * [android.permission.CAMERA](https://developer.android.com/reference/android/Manifest.permission.html#CAMERA)

## Events

### After Recording

Indicates that a video was recorded with the camera and provides the path tothe stored picture.

<div class="block" ai2-block="event" not-rendered="true" value="%7B%22componentName%22:%20%22Camcorder%22,%20%22name%22:%20%22After%20Recording%22,%20%22param%22:%20%5B%22clip%22%5D%7D"></div>

| Params | []() |
|--------|------|
|clip|<span class="chip chip-text">Text</span>|

## Methods

### Record Video

Records a video, then raises the AfterRecoding event.

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22Camcorder%22,%20%22name%22:%20%22Record%20Video%22,%20%22output%22:%20false,%20%22param%22:%20%5B%5D%7D"></div>
