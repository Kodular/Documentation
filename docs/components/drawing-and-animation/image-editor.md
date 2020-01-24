# Image Editor

| Category | Requires | Version |
|:--------:|:-------:|:--------:|
|**Drawing and Animation**|<span class="chip chip-any">API 19, Android 4.4 - 4.4.4 KitKat</span>|<span class="chip chip-number">1</span>|

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

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22Image%20Editor%22,%20%22name%22:%20%22Blur%20Effect%22,%20%22output%22:%20true,%20%22params%22:%20%5B%22image%20A%22,%20%22scale%22,%20%22radius%22%5D%7D"></div>


| Params | []() |
|--------|------|
|image A|<span class="chip chip-text">Text</span>|
|scale|<span class="chip chip-number">Number</span>|
|radius|<span class="chip chip-number">Number</span>|


### Color Boost Effect

<span class="chip chip-text">Returns: <i>Text</i></span> 

Color boost technique is basically based on color filtering, which is to increase the intensity of a single color channel. For example: type = green/ blue or red; percent = 40%.

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22Image%20Editor%22,%20%22name%22:%20%22Color%20Boost%20Effect%22,%20%22output%22:%20true,%20%22params%22:%20%5B%22image%20A%22,%20%22type%22,%20%22percent%22%5D%7D"></div>


| Params | []() |
|--------|------|
|image A|<span class="chip chip-text">Text</span>|
|type|<span class="chip chip-text">Text</span>|
|percent|<span class="chip chip-number">Number</span>|


### Color Filter

<span class="chip chip-text">Returns: <i>Text</i></span> 

Set a color filter to your image. For example: red = 30; green = 40; blue = 20.

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22Image%20Editor%22,%20%22name%22:%20%22Color%20Filter%22,%20%22output%22:%20true,%20%22params%22:%20%5B%22image%20A%22,%20%22red%22,%20%22green%22,%20%22blue%22%5D%7D"></div>


| Params | []() |
|--------|------|
|image A|<span class="chip chip-text">Text</span>|
|red|<span class="chip chip-number">Number</span>|
|green|<span class="chip chip-number">Number</span>|
|blue|<span class="chip chip-number">Number</span>|


### Flip Picture

<span class="chip chip-text">Returns: <i>Text</i></span> 

Flip your image vertical or horizontal. For example: type = 1 (vertical); type = 2 (horizontal).

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22Image%20Editor%22,%20%22name%22:%20%22Flip%20Picture%22,%20%22output%22:%20true,%20%22params%22:%20%5B%22image%20A%22,%20%22type%22%5D%7D"></div>


| Params | []() |
|--------|------|
|image A|<span class="chip chip-text">Text</span>|
|type|<span class="chip chip-number">Number</span>|


### Gamma Effect

<span class="chip chip-text">Returns: <i>Text</i></span> 

Set a gamma effect to your image. For example: red = 5; green = 10; blue = 20.

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22Image%20Editor%22,%20%22name%22:%20%22Gamma%20Effect%22,%20%22output%22:%20true,%20%22params%22:%20%5B%22image%20A%22,%20%22red%22,%20%22green%22,%20%22blue%22%5D%7D"></div>


| Params | []() |
|--------|------|
|image A|<span class="chip chip-text">Text</span>|
|red|<span class="chip chip-number">Number</span>|
|green|<span class="chip chip-number">Number</span>|
|blue|<span class="chip chip-number">Number</span>|


### Greyscale Effect

<span class="chip chip-text">Returns: <i>Text</i></span> 

Grayscale is a simple image effect that changes colors to grayscale by default.

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22Image%20Editor%22,%20%22name%22:%20%22Greyscale%20Effect%22,%20%22output%22:%20true,%20%22params%22:%20%5B%22image%20A%22%5D%7D"></div>


| Params | []() |
|--------|------|
|image A|<span class="chip chip-text">Text</span>|


### Highlight Effect

<span class="chip chip-text">Returns: <i>Text</i></span> 

Set a highlight effect to your image.

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22Image%20Editor%22,%20%22name%22:%20%22Highlight%20Effect%22,%20%22output%22:%20true,%20%22params%22:%20%5B%22image%20A%22%5D%7D"></div>


| Params | []() |
|--------|------|
|image A|<span class="chip chip-text">Text</span>|


### Hue Filter

<span class="chip chip-text">Returns: <i>Text</i></span> 

Change the hue of an image. For example: level = 1 or 2 or 3 or 4 etc.

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22Image%20Editor%22,%20%22name%22:%20%22Hue%20Filter%22,%20%22output%22:%20true,%20%22params%22:%20%5B%22image%20A%22,%20%22level%22%5D%7D"></div>


| Params | []() |
|--------|------|
|image A|<span class="chip chip-text">Text</span>|
|level|<span class="chip chip-number">Number</span>|


### Image Rotation

<span class="chip chip-text">Returns: <i>Text</i></span> 

Rotate the image to the degree you need it. For example: degree = 100.

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22Image%20Editor%22,%20%22name%22:%20%22Image%20Rotation%22,%20%22output%22:%20true,%20%22params%22:%20%5B%22image%20A%22,%20%22degree%22%5D%7D"></div>


| Params | []() |
|--------|------|
|image A|<span class="chip chip-text">Text</span>|
|degree|<span class="chip chip-number">Number</span>|


### Invert Effect

<span class="chip chip-text">Returns: <i>Text</i></span> 

This effect inverts your image.

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22Image%20Editor%22,%20%22name%22:%20%22Invert%20Effect%22,%20%22output%22:%20true,%20%22params%22:%20%5B%22image%20A%22%5D%7D"></div>


| Params | []() |
|--------|------|
|image A|<span class="chip chip-text">Text</span>|


### Merge Two Images

<span class="chip chip-text">Returns: <i>Text</i></span> 

This methods creates a new side by side horizontal image.

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22Image%20Editor%22,%20%22name%22:%20%22Merge%20Two%20Images%22,%20%22output%22:%20true,%20%22params%22:%20%5B%22left%20Image%22,%20%22right%20Image%22%5D%7D"></div>


| Params | []() |
|--------|------|
|left Image|<span class="chip chip-text">Text</span>|
|right Image|<span class="chip chip-text">Text</span>|


### Pixelate

<span class="chip chip-text">Returns: <i>Text</i></span> 

This methods creates a pixelate image effect. Use as example as pixelation Amount '1' for a hugh pixel effect and '99' for a almost not visible pixel effect.

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22Image%20Editor%22,%20%22name%22:%20%22Pixelate%22,%20%22output%22:%20true,%20%22params%22:%20%5B%22image%20A%22,%20%22pixelation%20Amount%22%5D%7D"></div>


| Params | []() |
|--------|------|
|image A|<span class="chip chip-text">Text</span>|
|pixelation Amount|<span class="chip chip-number">Number</span>|


### Round Corner

<span class="chip chip-text">Returns: <i>Text</i></span> 

Set a round corner to your image. For example: round = 45.

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22Image%20Editor%22,%20%22name%22:%20%22Round%20Corner%22,%20%22output%22:%20true,%20%22params%22:%20%5B%22image%20A%22,%20%22round%22%5D%7D"></div>


| Params | []() |
|--------|------|
|image A|<span class="chip chip-text">Text</span>|
|round|<span class="chip chip-number">Number</span>|


### Scale Center Crop

<span class="chip chip-text">Returns: <i>Text</i></span> 

This methods creates a new scale center crop image.

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22Image%20Editor%22,%20%22name%22:%20%22Scale%20Center%20Crop%22,%20%22output%22:%20true,%20%22params%22:%20%5B%22image%20A%22,%20%22height%22,%20%22width%22%5D%7D"></div>


| Params | []() |
|--------|------|
|image A|<span class="chip chip-text">Text</span>|
|height|<span class="chip chip-number">Number</span>|
|width|<span class="chip chip-number">Number</span>|


### Sepia Toning Effect

<span class="chip chip-text">Returns: <i>Text</i></span> 

Set a sepia toning effect to your image. For example: depth = 20; red = 10; green = 20; blue = 25.

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22Image%20Editor%22,%20%22name%22:%20%22Sepia%20Toning%20Effect%22,%20%22output%22:%20true,%20%22params%22:%20%5B%22image%20A%22,%20%22depth%22,%20%22red%22,%20%22green%22,%20%22blue%22%5D%7D"></div>


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

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22Image%20Editor%22,%20%22name%22:%20%22Set%20Brightness%22,%20%22output%22:%20true,%20%22params%22:%20%5B%22image%20A%22,%20%22value%22%5D%7D"></div>


| Params | []() |
|--------|------|
|image A|<span class="chip chip-text">Text</span>|
|value|<span class="chip chip-number">Number</span>|


### Set Color Depth

<span class="chip chip-text">Returns: <i>Text</i></span> 

Change the color depth of an image as you wish. For example: bitOffset = 32 (bit) or bitOffset = 16 (bit).

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22Image%20Editor%22,%20%22name%22:%20%22Set%20Color%20Depth%22,%20%22output%22:%20true,%20%22params%22:%20%5B%22image%20A%22,%20%22bit%20Offset%22%5D%7D"></div>


| Params | []() |
|--------|------|
|image A|<span class="chip chip-text">Text</span>|
|bit Offset|<span class="chip chip-number">Number</span>|


### Set Contrast

<span class="chip chip-text">Returns: <i>Text</i></span> 

This changes the contrast of your image. For example: value = 1.0 means normal picture contrast. Below 1.0 like as example 0.7 means dark contrast, above 1.0 as example 1.5 means light contrast.

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22Image%20Editor%22,%20%22name%22:%20%22Set%20Contrast%22,%20%22output%22:%20true,%20%22params%22:%20%5B%22image%20A%22,%20%22value%22%5D%7D"></div>


| Params | []() |
|--------|------|
|image A|<span class="chip chip-text">Text</span>|
|value|<span class="chip chip-number">Number</span>|


### Shading Filter

<span class="chip chip-text">Returns: <i>Text</i></span> 

Make a new image with a shading filter. For example: shadingColor = green(rgb value).

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22Image%20Editor%22,%20%22name%22:%20%22Shading%20Filter%22,%20%22output%22:%20true,%20%22params%22:%20%5B%22image%20A%22,%20%22shading%20Color%22%5D%7D"></div>


| Params | []() |
|--------|------|
|image A|<span class="chip chip-text">Text</span>|
|shading Color|<span class="chip chip-number">Number</span>|


### Tint Color Effect

<span class="chip chip-text">Returns: <i>Text</i></span> 

That's a pretty new other cool effect. It changes the tint color of your image. For example: degree = 100.

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22Image%20Editor%22,%20%22name%22:%20%22Tint%20Color%20Effect%22,%20%22output%22:%20true,%20%22params%22:%20%5B%22image%20A%22,%20%22degree%22%5D%7D"></div>


| Params | []() |
|--------|------|
|image A|<span class="chip chip-text">Text</span>|
|degree|<span class="chip chip-number">Number</span>|


### Watermark Effect

<span class="chip chip-text">Returns: <i>Text</i></span> 

Set a watermark effect to an image and change the positon/size or color of the text. For example: text = hello; textSize = 25; textColor = red(rgb value); textAlphaValue = 255 (255= 100% visible,127.5= 50% visible, 0= 0% visible); pointX = 50; pointY = 100; text underline(boolean) = true or false.

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22Image%20Editor%22,%20%22name%22:%20%22Watermark%20Effect%22,%20%22output%22:%20true,%20%22params%22:%20%5B%22image%20A%22,%20%22text%22,%20%22text%20Size%22,%20%22text%20Color%22,%20%22text%20Underline%22,%20%22text%20Alpha%20Value%22,%20%22point%20X%22,%20%22point%20Y%22%5D%7D"></div>


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

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22Image%20Editor%22,%20%22name%22:%20%22is%20Landscape%22,%20%22output%22:%20true,%20%22params%22:%20%5B%22image%22%5D%7D"></div>


| Params | []() |
|--------|------|
|image|<span class="chip chip-text">Text</span>|


### is Portrait

<span class="chip chip-boolean">Returns: <i>Boolean</i></span> 

Return true if image is in portrait format, else return false.

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22Image%20Editor%22,%20%22name%22:%20%22is%20Portrait%22,%20%22output%22:%20true,%20%22params%22:%20%5B%22image%22%5D%7D"></div>


| Params | []() |
|--------|------|
|image|<span class="chip chip-text">Text</span>|


### is Square

<span class="chip chip-boolean">Returns: <i>Boolean</i></span> 

Return true if image is in square format (means as high as wide or as wide as high), else return false.

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22Image%20Editor%22,%20%22name%22:%20%22is%20Square%22,%20%22output%22:%20true,%20%22params%22:%20%5B%22image%22%5D%7D"></div>


| Params | []() |
|--------|------|
|image|<span class="chip chip-text">Text</span>|


## Properties

### Save New Image As

<span class="chip chip-text">Text</span><span style="user-select: none;">&nbsp;</span><span class="chip chip-text">Default: <i>NewImage.png</i></span><span style="user-select: none;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span class="chip chip-rw">Read</span><span style="user-select: none;">&nbsp;</span><span class="chip chip-rw">Write</span><span style="user-select: none;">&nbsp;</span>-<span style="user-select: none;">&nbsp;</span><span class="chip chip-bd">Designer</span><span style="user-select: none;">&nbsp;</span><span class="chip chip-bd">Blocks</span><span style="user-select: none;">&nbsp;</span>

Save the new created image to a folder/ name of your choice.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Image%20Editor%22,%20%22name%22:%20%22Save%20New%20Image%20As%22,%20%22getter%22:%20true%7D"></div>
<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Image%20Editor%22,%20%22name%22:%20%22Save%20New%20Image%20As%22,%20%22getter%22:%20false%7D"></div>
