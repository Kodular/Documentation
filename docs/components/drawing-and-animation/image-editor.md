# Image Editor

| Category | Requires | Version |
|:--------:|:-------:|:--------:|
|Drawing and Animation|API 19, Android 4.4 - 4.4.4 KitKat|1|

:mag: {>>Non-visible component<<}

## Overview

Non-visible component that allows users to edit images.

## Methods

### Blur Effect

[[Method('Image Editor', 'Blur Effect', True, 'imageA', 'scale', 'radius')]]

{>>Returns `text`<<}

| Params | []() |
|--------|------|
|image A|Text|
|scale|Number|
|radius|Number|


This methods creates a blur effect.

### Color Boost Effect

[[Method('Image Editor', 'Color Boost Effect', True, 'imageA', 'type', 'percent')]]

{>>Returns `text`<<}

| Params | []() |
|--------|------|
|image A|Text|
|type|Text|
|percent|Number|


Color boost technique is basically based on color filtering, which is to increase the intensity of a single color channel. For example: type = green/ blue or red; percent = 40%.

### Color Filter

[[Method('Image Editor', 'Color Filter', True, 'imageA', 'red', 'green', 'blue')]]

{>>Returns `text`<<}

| Params | []() |
|--------|------|
|image A|Text|
|red|Number|
|green|Number|
|blue|Number|


Set a color filter to your image. For example: red = 30; green = 40; blue = 20.

### Flip Picture

[[Method('Image Editor', 'Flip Picture', True, 'imageA', 'type')]]

{>>Returns `text`<<}

| Params | []() |
|--------|------|
|image A|Text|
|type|Number|


Flip your image vertical or horizontal. For example: type = 1 (vertical); type = 2 (horizontal).

### Gamma Effect

[[Method('Image Editor', 'Gamma Effect', True, 'imageA', 'red', 'green', 'blue')]]

{>>Returns `text`<<}

| Params | []() |
|--------|------|
|image A|Text|
|red|Number|
|green|Number|
|blue|Number|


Set a gamma effect to your image. For example: red = 5; green = 10; blue = 20.

### Greyscale Effect

[[Method('Image Editor', 'Greyscale Effect', True, 'imageA')]]

{>>Returns `text`<<}

| Params | []() |
|--------|------|
|image A|Text|


Grayscale is a simple image effect that changes colors to grayscale by default.

### Highlight Effect

[[Method('Image Editor', 'Highlight Effect', True, 'imageA')]]

{>>Returns `text`<<}

| Params | []() |
|--------|------|
|image A|Text|


Set a highlight effect to your image.

### Hue Filter

[[Method('Image Editor', 'Hue Filter', True, 'imageA', 'level')]]

{>>Returns `text`<<}

| Params | []() |
|--------|------|
|image A|Text|
|level|Number|


Change the hue of an image. For example: level = 1 or 2 or 3 or 4 etc.

### Image Rotation

[[Method('Image Editor', 'Image Rotation', True, 'imageA', 'degree')]]

{>>Returns `text`<<}

| Params | []() |
|--------|------|
|image A|Text|
|degree|Number|


Rotate the image to the degree you need it. For example: degree = 100.

### Invert Effect

[[Method('Image Editor', 'Invert Effect', True, 'imageA')]]

{>>Returns `text`<<}

| Params | []() |
|--------|------|
|image A|Text|


This effect inverts your image.

### Merge Two Images

[[Method('Image Editor', 'Merge Two Images', True, 'leftImage', 'rightImage')]]

{>>Returns `text`<<}

| Params | []() |
|--------|------|
|left Image|Text|
|right Image|Text|


This methods creates a new side by side horizontal image.

### Pixelate

[[Method('Image Editor', 'Pixelate', True, 'imageA', 'pixelationAmount')]]

{>>Returns `text`<<}

| Params | []() |
|--------|------|
|image A|Text|
|pixelation Amount|Number|


This methods creates a pixelate image effect. Use as example as pixelation Amount '1' for a hugh pixel effect and '99' for a almost not visible pixel effect.

### Round Corner

[[Method('Image Editor', 'Round Corner', True, 'imageA', 'round')]]

{>>Returns `text`<<}

| Params | []() |
|--------|------|
|image A|Text|
|round|Number|


Set a round corner to your image. For example: round = 45.

### Scale Center Crop

[[Method('Image Editor', 'Scale Center Crop', True, 'imageA', 'height', 'width')]]

{>>Returns `text`<<}

| Params | []() |
|--------|------|
|image A|Text|
|height|Number|
|width|Number|


This methods creates a new scale center crop image.

### Sepia Toning Effect

[[Method('Image Editor', 'Sepia Toning Effect', True, 'imageA', 'depth', 'red', 'green', 'blue')]]

{>>Returns `text`<<}

| Params | []() |
|--------|------|
|image A|Text|
|depth|Number|
|red|Number|
|green|Number|
|blue|Number|


Set a sepia toning effect to your image. For example: depth = 20; red = 10; green = 20; blue = 25.

### Set Brightness

[[Method('Image Editor', 'Set Brightness', True, 'imageA', 'value')]]

{>>Returns `text`<<}

| Params | []() |
|--------|------|
|image A|Text|
|value|Number|


Change the brightness of your image. For example: value = 50 (maximum = 255=100% brightness).

### Set Color Depth

[[Method('Image Editor', 'Set Color Depth', True, 'imageA', 'bitOffset')]]

{>>Returns `text`<<}

| Params | []() |
|--------|------|
|image A|Text|
|bit Offset|Number|


Change the color depth of an image as you wish. For example: bitOffset = 32 (bit) or bitOffset = 16 (bit).

### Set Contrast

[[Method('Image Editor', 'Set Contrast', True, 'imageA', 'value')]]

{>>Returns `text`<<}

| Params | []() |
|--------|------|
|image A|Text|
|value|Number|


This changes the contrast of your image. For example: value = 1.0 means normal picture contrast. Below 1.0 like as example 0.7 means dark contrast, above 1.0 as example 1.5 means light contrast.

### Shading Filter

[[Method('Image Editor', 'Shading Filter', True, 'imageA', 'shadingColor')]]

{>>Returns `text`<<}

| Params | []() |
|--------|------|
|image A|Text|
|shading Color|Number|


Make a new image with a shading filter. For example: shadingColor = green(rgb value).

### Tint Color Effect

[[Method('Image Editor', 'Tint Color Effect', True, 'imageA', 'degree')]]

{>>Returns `text`<<}

| Params | []() |
|--------|------|
|image A|Text|
|degree|Number|


That's a pretty new other cool effect. It changes the tint color of your image. For example: degree = 100.

### Watermark Effect

[[Method('Image Editor', 'Watermark Effect', True, 'imageA', 'text', 'textSize', 'textColor', 'textUnderline', 'textAlphaValue', 'pointX', 'pointY')]]

{>>Returns `text`<<}

| Params | []() |
|--------|------|
|image A|Text|
|text|Text|
|text Size|Number|
|text Color|Number|
|text Underline|Boolean|
|text Alpha Value|Number|
|point X|Number|
|point Y|Number|


Set a watermark effect to an image and change the positon/size or color of the text. For example: text = hello; textSize = 25; textColor = red(rgb value); textAlphaValue = 255 (255= 100% visible,127.5= 50% visible, 0= 0% visible); pointX = 50; pointY = 100; text underline(boolean) = true or false.

### is Landscape

[[Method('Image Editor', 'is Landscape', True, 'image')]]

{>>Returns `boolean`<<}

| Params | []() |
|--------|------|
|image|Text|


Return true if image is in landscape format, else return false.

### is Portrait

[[Method('Image Editor', 'is Portrait', True, 'image')]]

{>>Returns `boolean`<<}

| Params | []() |
|--------|------|
|image|Text|


Return true if image is in portrait format, else return false.

### is Square

[[Method('Image Editor', 'is Square', True, 'image')]]

{>>Returns `boolean`<<}

| Params | []() |
|--------|------|
|image|Text|


Return true if image is in square format (means as high as wide or as wide as high), else return false.

## Properties

### Save New Image As

<span class="chip chip-text">Text</span> <span class="chip chip-text">Default: <i>NewImage.png</i></span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span> 

Save the new created image to a folder/ name of your choice.

[[PropertyBlockGetterAndSetter('Image Editor', 'Save New Image As')]]