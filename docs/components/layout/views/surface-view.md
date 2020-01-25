# Surface View

| Category | Requires | Version |
|:--------:|:-------:|:--------:|
|**Layout > Views**|<span class="chip chip-any">API 19, Android 4.4 - 4.4.4 KitKat</span>|<span class="chip chip-number">2</span>|

## Overview

A visible component that shows a live preview of the user''s camera as its background.

??? example "Permissions"
    * [android.permission.FLASHLIGHT](https://developer.android.com/reference/android/Manifest.permission.html#FLASHLIGHT)
    * [android.permission.CAMERA](https://developer.android.com/reference/android/Manifest.permission.html#CAMERA)
    * [android.permission.READ_EXTERNAL_STORAGE](https://developer.android.com/reference/android/Manifest.permission.html#READ_EXTERNAL_STORAGE)
    * [android.permission.WRITE_EXTERNAL_STORAGE](https://developer.android.com/reference/android/Manifest.permission.html#WRITE_EXTERNAL_STORAGE)

## Events

### Clicked

Event to detect clicks on the camera preview.

<div class="block" ai2-block="event" not-rendered="true" value="%7B%22componentName%22:%20%22Surface%20View%22,%20%22name%22:%20%22Clicked%22,%20%22param%22:%20%5B%5D%7D"></div>

### Face Detected

Event to detect that there are faces in the front of the camera.

<div class="block" ai2-block="event" not-rendered="true" value="%7B%22componentName%22:%20%22Surface%20View%22,%20%22name%22:%20%22Face%20Detected%22,%20%22param%22:%20%5B%22numbers%22%5D%7D"></div>

| Params | []() |
|--------|------|
|numbers|<span class="chip chip-text">Text</span>|

### Got Preview

Event to get the response from the camera preview as image file. The picture is by default in landscape mode. This event will only work if the option "Save Preview As File" is enabled/ true.

<div class="block" ai2-block="event" not-rendered="true" value="%7B%22componentName%22:%20%22Surface%20View%22,%20%22name%22:%20%22Got%20Preview%22,%20%22param%22:%20%5B%22image%22%5D%7D"></div>

| Params | []() |
|--------|------|
|image|<span class="chip chip-text">Text</span>|

### Long Clicked

Event to detect long clicks on the camera preview.

<div class="block" ai2-block="event" not-rendered="true" value="%7B%22componentName%22:%20%22Surface%20View%22,%20%22name%22:%20%22Long%20Clicked%22,%20%22param%22:%20%5B%5D%7D"></div>

### Picture Created

Event to detect that the user has taken a picture from the preview.

<div class="block" ai2-block="event" not-rendered="true" value="%7B%22componentName%22:%20%22Surface%20View%22,%20%22name%22:%20%22Picture%20Created%22,%20%22param%22:%20%5B%22image%22%5D%7D"></div>

| Params | []() |
|--------|------|
|image|<span class="chip chip-text">Text</span>|

### Preview Paused

Event to detect that the user paused the camera preview.

<div class="block" ai2-block="event" not-rendered="true" value="%7B%22componentName%22:%20%22Surface%20View%22,%20%22name%22:%20%22Preview%20Paused%22,%20%22param%22:%20%5B%5D%7D"></div>

### Preview Stoped

Event to detect that the user stopped the camera preview.

<div class="block" ai2-block="event" not-rendered="true" value="%7B%22componentName%22:%20%22Surface%20View%22,%20%22name%22:%20%22Preview%20Stoped%22,%20%22param%22:%20%5B%5D%7D"></div>

## Methods

### Pause Preview

Pause the camera preview.

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22Surface%20View%22,%20%22name%22:%20%22Pause%20Preview%22,%20%22output%22:%20false,%20%22param%22:%20%5B%5D%7D"></div>

### Start Preview

Start the camera preview.

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22Surface%20View%22,%20%22name%22:%20%22Start%20Preview%22,%20%22output%22:%20false,%20%22param%22:%20%5B%5D%7D"></div>

### Stop Preview

Stop the camera preview.

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22Surface%20View%22,%20%22name%22:%20%22Stop%20Preview%22,%20%22output%22:%20false,%20%22param%22:%20%5B%5D%7D"></div>

### Take Picture

Take a picture from the camera preview.

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22Surface%20View%22,%20%22name%22:%20%22Take%20Picture%22,%20%22output%22:%20false,%20%22param%22:%20%5B%5D%7D"></div>

## Properties

### Align Horizontal

<span style="user-select: none; white-space:pre-wrap;"><span class="chip chip-number">Number</span> <span class="chip chip-number">Default: <i>1</i></span>          <span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span>&#32;</span>

A number that encodes how contents of the arrangement are aligned horizontally. The choices are: 1 = left aligned, 2 = right aligned, 3 = horizontally centered. Alignment has no effect if the arrangement's width is automatic.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Surface%20View%22,%20%22name%22:%20%22Align%20Horizontal%22,%20%22getter%22:%20true%7D"></div>
<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Surface%20View%22,%20%22name%22:%20%22Align%20Horizontal%22,%20%22getter%22:%20false%7D"></div>

### Align Vertical

<span style="user-select: none; white-space:pre-wrap;"><span class="chip chip-number">Number</span> <span class="chip chip-number">Default: <i>1</i></span>          <span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span>&#32;</span>

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Surface%20View%22,%20%22name%22:%20%22Align%20Vertical%22,%20%22getter%22:%20false%7D"></div>

### Clickable

<span style="user-select: none; white-space:pre-wrap;"><span class="chip chip-boolean">Boolean</span> <span class="chip chip-boolean">Default: <i>False</i></span>          <span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span>&#32;</span>

Set the surface view component clickable or not clickable.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Surface%20View%22,%20%22name%22:%20%22Clickable%22,%20%22getter%22:%20false%7D"></div>

### Detect Faces

<span style="user-select: none; white-space:pre-wrap;"><span class="chip chip-boolean">Boolean</span> <span class="chip chip-boolean">Default: <i>False</i></span>          <span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span>&#32;</span>

If enabled you can detect how many faces are in the front of the camera.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Surface%20View%22,%20%22name%22:%20%22Detect%20Faces%22,%20%22getter%22:%20true%7D"></div>
<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Surface%20View%22,%20%22name%22:%20%22Detect%20Faces%22,%20%22getter%22:%20false%7D"></div>

### Flashlight

<span style="user-select: none; white-space:pre-wrap;"><span class="chip chip-boolean">Boolean</span>          <span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Blocks</span>&#32;</span>

Turn on or off the device flashlight. The function knows automatic if there is a flash/ torch available.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Surface%20View%22,%20%22name%22:%20%22Flashlight%22,%20%22getter%22:%20true%7D"></div>
<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Surface%20View%22,%20%22name%22:%20%22Flashlight%22,%20%22getter%22:%20false%7D"></div>

### Height

<span style="user-select: none; white-space:pre-wrap;"><span class="chip chip-number">Number</span>          <span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Blocks</span>&#32;</span>

Specifies the component's vertical height, measured in pixels.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Surface%20View%22,%20%22name%22:%20%22Height%22,%20%22getter%22:%20true%7D"></div>
<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Surface%20View%22,%20%22name%22:%20%22Height%22,%20%22getter%22:%20false%7D"></div>

### Height Percent

<span style="user-select: none; white-space:pre-wrap;"><span class="chip chip-number">Number</span>          <span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Blocks</span>&#32;</span>

Specifies the component's vertical height as a percentageof the height of its parent Component.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Surface%20View%22,%20%22name%22:%20%22Height%20Percent%22,%20%22getter%22:%20false%7D"></div>

### Save Preview As File

<span style="user-select: none; white-space:pre-wrap;"><span class="chip chip-boolean">Boolean</span> <span class="chip chip-boolean">Default: <i>False</i></span>          <span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span>&#32;</span>

Enable this block to enable the "Got Preview" event to get a image file from the camera preview.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Surface%20View%22,%20%22name%22:%20%22Save%20Preview%20As%20File%22,%20%22getter%22:%20false%7D"></div>

### Use Back Camera

<span style="user-select: none; white-space:pre-wrap;"><span class="chip chip-boolean">Boolean</span> <span class="chip chip-boolean">Default: <i>True</i></span>          <span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span>&#32;</span>

If enabled you will open the back camera for the camera preview, else you open the front camera. The block detect automatic if there is a device camera available or not.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Surface%20View%22,%20%22name%22:%20%22Use%20Back%20Camera%22,%20%22getter%22:%20true%7D"></div>
<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Surface%20View%22,%20%22name%22:%20%22Use%20Back%20Camera%22,%20%22getter%22:%20false%7D"></div>

### Visible

<span style="user-select: none; white-space:pre-wrap;"><span class="chip chip-boolean">Boolean</span> <span class="chip chip-boolean">Default: <i>True</i></span>          <span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span>&#32;</span>

Returns true iff the component is visible.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Surface%20View%22,%20%22name%22:%20%22Visible%22,%20%22getter%22:%20true%7D"></div>
<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Surface%20View%22,%20%22name%22:%20%22Visible%22,%20%22getter%22:%20false%7D"></div>

### Width

<span style="user-select: none; white-space:pre-wrap;"><span class="chip chip-number">Number</span>          <span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Blocks</span>&#32;</span>

Specifies the component's horizontal width, measured in pixels.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Surface%20View%22,%20%22name%22:%20%22Width%22,%20%22getter%22:%20true%7D"></div>
<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Surface%20View%22,%20%22name%22:%20%22Width%22,%20%22getter%22:%20false%7D"></div>

### Width Percent

<span style="user-select: none; white-space:pre-wrap;"><span class="chip chip-number">Number</span>          <span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Blocks</span>&#32;</span>

Specifies the component's horizontal width as a percentageof the Width of its parent Component.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Surface%20View%22,%20%22name%22:%20%22Width%20Percent%22,%20%22getter%22:%20false%7D"></div>
