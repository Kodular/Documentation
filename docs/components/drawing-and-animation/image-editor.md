# Image Editor

| Category | Requires | Version |
|:--------:|:-------:|:--------:|
|Drawing and Animation|API 19, Android 4.4 - 4.4.4 KitKat|1|

:mag: {>>Non-visible component<<}

## Overview

Non-visible component that allows users to edit images.

??? example "Permissions"
    * [android.permission.READ_EXTERNAL_STORAGE](https://developer.android.com/reference/android/Manifest.permission.html#READ_EXTERNAL_STORAGE)
    * [android.permission.WRITE_EXTERNAL_STORAGE](https://developer.android.com/reference/android/Manifest.permission.html#WRITE_EXTERNAL_STORAGE)


## Methods

### Blur Effect

<span class="chip chip-text">Returns: <i>Text</i></span> 

This methods creates a blur effect.

[[Method('Image Editor', 'Blur Effect', True, 'imageA', 'scale', 'radius')]]

| Params | []() |
|--------|------|
|image A|<span class="chip chip-text">Text</span>|
|scale|<span class="chip chip-number">Number</span>|
|radius|<span class="chip chip-number">Number</span>|


### Color Boost Effect

<span class="chip chip-text">Returns: <i>Text</i></span> 

Color boost technique is basically based on color filtering, which is to increase the intensity of a single color channel. For example: type = green/ blue or red; percent = 40%.

[[Method('Image Editor', 'Color Boost Effect', True, 'imageA', 'type', 'percent')]]

| Params | []() |
|--------|------|
|image A|<span class="chip chip-text">Text</span>|
|type|<span class="chip chip-text">Text</span>|
|percent|<span class="chip chip-number">Number</span>|


### Color Filter

<span class="chip chip-text">Returns: <i>Text</i></span> 

Set a color filter to your image. For example: red = 30; green = 40; blue = 20.

[[Method('Image Editor', 'Color Filter', True, 'imageA', 'red', 'green', 'blue')]]

| Params | []() |
|--------|------|
|image A|<span class="chip chip-text">Text</span>|
|red|<span class="chip chip-number">Number</span>|
|green|<span class="chip chip-number">Number</span>|
|blue|<span class="chip chip-number">Number</span>|


### Flip Picture

<span class="chip chip-text">Returns: <i>Text</i></span> 

Flip your image vertical or horizontal. For example: type = 1 (vertical); type = 2 (horizontal).

[[Method('Image Editor', 'Flip Picture', True, 'imageA', 'type')]]

| Params | []() |
|--------|------|
|image A|<span class="chip chip-text">Text</span>|
|type|<span class="chip chip-number">Number</span>|


### Gamma Effect

<span class="chip chip-text">Returns: <i>Text</i></span> 

Set a gamma effect to your image. For example: red = 5; green = 10; blue = 20.

[[Method('Image Editor', 'Gamma Effect', True, 'imageA', 'red', 'green', 'blue')]]

| Params | []() |
|--------|------|
|image A|<span class="chip chip-text">Text</span>|
|red|<span class="chip chip-number">Number</span>|
|green|<span class="chip chip-number">Number</span>|
|blue|<span class="chip chip-number">Number</span>|


### Greyscale Effect

<span class="chip chip-text">Returns: <i>Text</i></span> 

Grayscale is a simple image effect that changes colors to grayscale by default.

[[Method('Image Editor', 'Greyscale Effect', True, 'imageA')]]

| Params | []() |
|--------|------|
|image A|<span class="chip chip-text">Text</span>|


### Highlight Effect

<span class="chip chip-text">Returns: <i>Text</i></span> 

Set a highlight effect to your image.

[[Method('Image Editor', 'Highlight Effect', True, 'imageA')]]

| Params | []() |
|--------|------|
|image A|<span class="chip chip-text">Text</span>|


### Hue Filter

<span class="chip chip-text">Returns: <i>Text</i></span> 

Change the hue of an image. For example: level = 1 or 2 or 3 or 4 etc.

[[Method('Image Editor', 'Hue Filter', True, 'imageA', 'level')]]

| Params | []() |
|--------|------|
|image A|<span class="chip chip-text">Text</span>|
|level|<span class="chip chip-number">Number</span>|


### Image Rotation

<span class="chip chip-text">Returns: <i>Text</i></span> 

Rotate the image to the degree you need it. For example: degree = 100.

[[Method('Image Editor', 'Image Rotation', True, 'imageA', 'degree')]]

| Params | []() |
|--------|------|
|image A|<span class="chip chip-text">Text</span>|
|degree|<span class="chip chip-number">Number</span>|


### Invert Effect

<span class="chip chip-text">Returns: <i>Text</i></span> 

This effect inverts your image.

[[Method('Image Editor', 'Invert Effect', True, 'imageA')]]

| Params | []() |
|--------|------|
|image A|<span class="chip chip-text">Text</span>|


### Merge Two Images

<span class="chip chip-text">Returns: <i>Text</i></span> 

This methods creates a new side by side horizontal image.

[[Method('Image Editor', 'Merge Two Images', True, 'leftImage', 'rightImage')]]

| Params | []() |
|--------|------|
|left Image|<span class="chip chip-text">Text</span>|
|right Image|<span class="chip chip-text">Text</span>|


### Pixelate

<span class="chip chip-text">Returns: <i>Text</i></span> 

This methods creates a pixelate image effect. Use as example as pixelation Amount '1' for a hugh pixel effect and '99' for a almost not visible pixel effect.

[[Method('Image Editor', 'Pixelate', True, 'imageA', 'pixelationAmount')]]

| Params | []() |
|--------|------|
|image A|<span class="chip chip-text">Text</span>|
|pixelation Amount|<span class="chip chip-number">Number</span>|


### Round Corner

<span class="chip chip-text">Returns: <i>Text</i></span> 

Set a round corner to your image. For example: round = 45.

[[Method('Image Editor', 'Round Corner', True, 'imageA', 'round')]]

| Params | []() |
|--------|------|
|image A|<span class="chip chip-text">Text</span>|
|round|<span class="chip chip-number">Number</span>|


### Scale Center Crop

<span class="chip chip-text">Returns: <i>Text</i></span> 

This methods creates a new scale center crop image.

[[Method('Image Editor', 'Scale Center Crop', True, 'imageA', 'height', 'width')]]

| Params | []() |
|--------|------|
|image A|<span class="chip chip-text">Text</span>|
|height|<span class="chip chip-number">Number</span>|
|width|<span class="chip chip-number">Number</span>|


### Sepia Toning Effect

<span class="chip chip-text">Returns: <i>Text</i></span> 

Set a sepia toning effect to your image. For example: depth = 20; red = 10; green = 20; blue = 25.

[[Method('Image Editor', 'Sepia Toning Effect', True, 'imageA', 'depth', 'red', 'green', 'blue')]]

| Params | []() |
|--------|------|
|image A|<span class="chip chip-text">Text</span>|
|depth|<span class="chip chip-number">Number</span>|
|red|<span class="chip chip-number">Number</span>|
|green|<span class="chip chip-number">Number</span>|
|blue|<span class="chip chip-number">Number</span>|


### Set Brightness

<span class="chip chip-text">Returns: <i>Text</i></span> 

Change the brightness of your image. For example: value = 50 (maximum = 255=100% brightness).

[[Method('Image Editor', 'Set Brightness', True, 'imageA', 'value')]]

| Params | []() |
|--------|------|
|image A|<span class="chip chip-text">Text</span>|
|value|<span class="chip chip-number">Number</span>|


### Set Color Depth

<span class="chip chip-text">Returns: <i>Text</i></span> 

Change the color depth of an image as you wish. For example: bitOffset = 32 (bit) or bitOffset = 16 (bit).

[[Method('Image Editor', 'Set Color Depth', True, 'imageA', 'bitOffset')]]

| Params | []() |
|--------|------|
|image A|<span class="chip chip-text">Text</span>|
|bit Offset|<span class="chip chip-number">Number</span>|


### Set Contrast

<span class="chip chip-text">Returns: <i>Text</i></span> 

This changes the contrast of your image. For example: value = 1.0 means normal picture contrast. Below 1.0 like as example 0.7 means dark contrast, above 1.0 as example 1.5 means light contrast.

[[Method('Image Editor', 'Set Contrast', True, 'imageA', 'value')]]

| Params | []() |
|--------|------|
|image A|<span class="chip chip-text">Text</span>|
|value|<span class="chip chip-number">Number</span>|


### Shading Filter

<span class="chip chip-text">Returns: <i>Text</i></span> 

Make a new image with a shading filter. For example: shadingColor = green(rgb value).

[[Method('Image Editor', 'Shading Filter', True, 'imageA', 'shadingColor')]]

| Params | []() |
|--------|------|
|image A|<span class="chip chip-text">Text</span>|
|shading Color|<span class="chip chip-number">Number</span>|


### Tint Color Effect

<span class="chip chip-text">Returns: <i>Text</i></span> 

That's a pretty new other cool effect. It changes the tint color of your image. For example: degree = 100.

[[Method('Image Editor', 'Tint Color Effect', True, 'imageA', 'degree')]]

| Params | []() |
|--------|------|
|image A|<span class="chip chip-text">Text</span>|
|degree|<span class="chip chip-number">Number</span>|


### Watermark Effect

<span class="chip chip-text">Returns: <i>Text</i></span> 

Set a watermark effect to an image and change the positon/size or color of the text. For example: text = hello; textSize = 25; textColor = red(rgb value); textAlphaValue = 255 (255= 100% visible,127.5= 50% visible, 0= 0% visible); pointX = 50; pointY = 100; text underline(boolean) = true or false.

[[Method('Image Editor', 'Watermark Effect', True, 'imageA', 'text', 'textSize', 'textColor', 'textUnderline', 'textAlphaValue', 'pointX', 'pointY')]]

| Params | []() |
|--------|------|
|image A|<span class="chip chip-text">Text</span>|
|text|<span class="chip chip-text">Text</span>|
|text Size|<span class="chip chip-number">Number</span>|
|text Color|<span class="chip chip-number">Number</span>|
|text Underline|<span class="chip chip-boolean">Boolean</span>|
|text Alpha Value|<span class="chip chip-number">Number</span>|
|point X|<span class="chip chip-number">Number</span>|
|point Y|<span class="chip chip-number">Number</span>|


### is Landscape

<span class="chip chip-boolean">Returns: <i>Boolean</i></span> 

Return true if image is in landscape format, else return false.

[[Method('Image Editor', 'is Landscape', True, 'image')]]

| Params | []() |
|--------|------|
|image|<span class="chip chip-text">Text</span>|


### is Portrait

<span class="chip chip-boolean">Returns: <i>Boolean</i></span> 

Return true if image is in portrait format, else return false.

[[Method('Image Editor', 'is Portrait', True, 'image')]]

| Params | []() |
|--------|------|
|image|<span class="chip chip-text">Text</span>|


### is Square

<span class="chip chip-boolean">Returns: <i>Boolean</i></span> 

Return true if image is in square format (means as high as wide or as wide as high), else return false.

[[Method('Image Editor', 'is Square', True, 'image')]]

| Params | []() |
|--------|------|
|image|<span class="chip chip-text">Text</span>|


## Properties

### Save New Image As

<span class="chip chip-text">Text</span> <span class="chip chip-text">Default: <i>NewImage.png</i></span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span> 

Save the new created image to a folder/ name of your choice.

[[PropertyBlockGetterAndSetter('Image Editor', 'Save New Image As')]]