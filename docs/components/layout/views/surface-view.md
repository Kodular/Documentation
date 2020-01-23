# Surface View

| Category | Requires | Version |
|:--------:|:-------:|:--------:|
|Layout > Views|API 19, Android 4.4 - 4.4.4 KitKat|2|

## Overview

A visible component that shows a live preview of the user''s camera as its background.

## Events

### Clicked

[[Event('Surface View', 'Clicked')]]

Event to detect clicks on the camera preview.

### Face Detected

[[Event('Surface View', 'Face Detected', 'numbers')]]

| Params | []() |
|--------|------|
|numbers|Text|


Event to detect that there are faces in the front of the camera.

### Got Preview

[[Event('Surface View', 'Got Preview', 'image')]]

| Params | []() |
|--------|------|
|image|Text|


Event to get the response from the camera preview as image file. The picture is by default in landscape mode. This event will only work if the option "Save Preview As File" is enabled/ true.

### Long Clicked

[[Event('Surface View', 'Long Clicked')]]

Event to detect long clicks on the camera preview.

### Picture Created

[[Event('Surface View', 'Picture Created', 'image')]]

| Params | []() |
|--------|------|
|image|Text|


Event to detect that the user has taken a picture from the preview.

### Preview Paused

[[Event('Surface View', 'Preview Paused')]]

Event to detect that the user paused the camera preview.

### Preview Stoped

[[Event('Surface View', 'Preview Stoped')]]

Event to detect that the user stopped the camera preview.

## Methods

### Pause Preview

[[Method('Surface View', 'Pause Preview', False)]]

Pause the camera preview.

### Start Preview

[[Method('Surface View', 'Start Preview', False)]]

Start the camera preview.

### Stop Preview

[[Method('Surface View', 'Stop Preview', False)]]

Stop the camera preview.

### Take Picture

[[Method('Surface View', 'Take Picture', False)]]

Take a picture from the camera preview.

## Properties

### Align Horizontal

<span class="chip chip-number">Number</span> <span class="chip chip-number">Default: <i>1</i></span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span> 

A number that encodes how contents of the arrangement are aligned horizontally. The choices are: 1 = left aligned, 2 = right aligned, 3 = horizontally centered. Alignment has no effect if the arrangement's width is automatic.

[[PropertyBlockGetterAndSetter('Surface View', 'Align Horizontal')]]

### Align Vertical

<span class="chip chip-number">Number</span> <span class="chip chip-number">Default: <i>1</i></span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span> 

[[PropertyBlockGetterAndSetter('Surface View', 'Align Vertical')]]

### Clickable

<span class="chip chip-boolean">Boolean</span> <span class="chip chip-boolean">Default: <i>False</i></span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span> 

Set the surface view component clickable or not clickable.

[[PropertyBlockGetterAndSetter('Surface View', 'Clickable')]]

### Detect Faces

<span class="chip chip-boolean">Boolean</span> <span class="chip chip-boolean">Default: <i>False</i></span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span> 

If enabled you can detect how many faces are in the front of the camera.

[[PropertyBlockGetterAndSetter('Surface View', 'Detect Faces')]]

### Save Preview As File

<span class="chip chip-boolean">Boolean</span> <span class="chip chip-boolean">Default: <i>False</i></span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span> 

Enable this block to enable the "Got Preview" event to get a image file from the camera preview.

[[PropertyBlockGetterAndSetter('Surface View', 'Save Preview As File')]]

### Use Back Camera

<span class="chip chip-boolean">Boolean</span> <span class="chip chip-boolean">Default: <i>True</i></span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span> 

If enabled you will open the back camera for the camera preview, else you open the front camera. The block detect automatic if there is a device camera available or not.

[[PropertyBlockGetterAndSetter('Surface View', 'Use Back Camera')]]

### Visible

<span class="chip chip-boolean">Boolean</span> <span class="chip chip-boolean">Default: <i>True</i></span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span> 

Returns true iff the component is visible.

[[PropertyBlockGetterAndSetter('Surface View', 'Visible')]]

### Column

<span class="chip chip-number">Number</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Non-Visible</span> - <span class="chip chip-bd">Blocks</span> 

Column property getter method.

[[PropertyBlockGetterAndSetter('Surface View', 'Column')]]

### Flashlight

<span class="chip chip-boolean">Boolean</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Blocks</span> 

Turn on or off the device flashlight. The function knows automatic if there is a flash/ torch available.

[[PropertyBlockGetterAndSetter('Surface View', 'Flashlight')]]

### Height

<span class="chip chip-number">Number</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Blocks</span> 

Specifies the component's vertical height, measured in pixels.

[[PropertyBlockGetterAndSetter('Surface View', 'Height')]]

### Height Percent

<span class="chip chip-number">Number</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Blocks</span> 

Specifies the component's vertical height as a percentageof the height of its parent Component.

[[PropertyBlockGetterAndSetter('Surface View', 'Height Percent')]]

### Row

<span class="chip chip-number">Number</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Non-Visible</span> - <span class="chip chip-bd">Blocks</span> 

Row property getter method.

[[PropertyBlockGetterAndSetter('Surface View', 'Row')]]

### Width

<span class="chip chip-number">Number</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Blocks</span> 

Specifies the component's horizontal width, measured in pixels.

[[PropertyBlockGetterAndSetter('Surface View', 'Width')]]

### Width Percent

<span class="chip chip-number">Number</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Blocks</span> 

Specifies the component's horizontal width as a percentageof the Width of its parent Component.

[[PropertyBlockGetterAndSetter('Surface View', 'Width Percent')]]