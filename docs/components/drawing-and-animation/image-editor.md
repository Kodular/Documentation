# Image Editor

| Category | Version | Requires |
|:--------:|:-------:|:--------:|
|Drawing and Animation|1|API 19 - Android 4.4 - 4.4.4 KitKat|

:mag: {>>Non-visible component<<}

## Overview

_Non-visible component that allows users to edit images._

## Properties

### Save New Image As

<small>Available as Common Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Image Editor', 'Save New Image As')]]

| Type | Default |
|:----:|:-------:|
|text|NewImage.png|

Save the new created image to a folder/ name of your choice.

## Methods

### BlurEffect



[[Method('Image Editor', 'BlurEffect', true, 'imageA scale radius')]]

{>>Returns `text`<<}


**Parameters**

| Name | Type |
|------|------|
|image A|`text`|
|scale|`number`|
|radius|`number`|


This methods creates a blur effect.

### ColorBoostEffect



[[Method('Image Editor', 'ColorBoostEffect', true, 'imageA type percent')]]

{>>Returns `text`<<}


**Parameters**

| Name | Type |
|------|------|
|image A|`text`|
|type|`text`|
|percent|`number`|


Color boost technique is basically based on color filtering, which is to increase the intensity of a single color channel. For example: type = green/ blue or red; percent = 40%.

### ColorFilter



[[Method('Image Editor', 'ColorFilter', true, 'imageA red green blue')]]

{>>Returns `text`<<}


**Parameters**

| Name | Type |
|------|------|
|image A|`text`|
|red|`number`|
|green|`number`|
|blue|`number`|


Set a color filter to your image. For example: red = 30; green = 40; blue = 20.

### FlipPicture



[[Method('Image Editor', 'FlipPicture', true, 'imageA type')]]

{>>Returns `text`<<}


**Parameters**

| Name | Type |
|------|------|
|image A|`text`|
|type|`number`|


Flip your image vertical or horizontal. For example: type = 1 (vertical); type = 2 (horizontal).

### GammaEffect



[[Method('Image Editor', 'GammaEffect', true, 'imageA red green blue')]]

{>>Returns `text`<<}


**Parameters**

| Name | Type |
|------|------|
|image A|`text`|
|red|`number`|
|green|`number`|
|blue|`number`|


Set a gamma effect to your image. For example: red = 5; green = 10; blue = 20.

### GreyscaleEffect



[[Method('Image Editor', 'GreyscaleEffect', true, 'imageA')]]

{>>Returns `text`<<}


**Parameters**

| Name | Type |
|------|------|
|image A|`text`|


Grayscale is a simple image effect that changes colors to grayscale by default.

### HighlightEffect



[[Method('Image Editor', 'HighlightEffect', true, 'imageA')]]

{>>Returns `text`<<}


**Parameters**

| Name | Type |
|------|------|
|image A|`text`|


Set a highlight effect to your image.

### HueFilter



[[Method('Image Editor', 'HueFilter', true, 'imageA level')]]

{>>Returns `text`<<}


**Parameters**

| Name | Type |
|------|------|
|image A|`text`|
|level|`number`|


Change the hue of an image. For example: level = 1 or 2 or 3 or 4 etc.

### ImageRotation



[[Method('Image Editor', 'ImageRotation', true, 'imageA degree')]]

{>>Returns `text`<<}


**Parameters**

| Name | Type |
|------|------|
|image A|`text`|
|degree|`number`|


Rotate the image to the degree you need it. For example: degree = 100.

### InvertEffect



[[Method('Image Editor', 'InvertEffect', true, 'imageA')]]

{>>Returns `text`<<}


**Parameters**

| Name | Type |
|------|------|
|image A|`text`|


This effect inverts your image.

### MergeTwoImages



[[Method('Image Editor', 'MergeTwoImages', true, 'leftImage rightImage')]]

{>>Returns `text`<<}


**Parameters**

| Name | Type |
|------|------|
|left Image|`text`|
|right Image|`text`|


This methods creates a new side by side horizontal image.

### Pixelate



[[Method('Image Editor', 'Pixelate', true, 'imageA pixelationAmount')]]

{>>Returns `text`<<}


**Parameters**

| Name | Type |
|------|------|
|image A|`text`|
|pixelation Amount|`number`|


This methods creates a pixelate image effect. Use as example as pixelation Amount '1' for a hugh pixel effect and '99' for a almost not visible pixel effect.

### RoundCorner



[[Method('Image Editor', 'RoundCorner', true, 'imageA round')]]

{>>Returns `text`<<}


**Parameters**

| Name | Type |
|------|------|
|image A|`text`|
|round|`number`|


Set a round corner to your image. For example: round = 45.

### ScaleCenterCrop



[[Method('Image Editor', 'ScaleCenterCrop', true, 'imageA height width')]]

{>>Returns `text`<<}


**Parameters**

| Name | Type |
|------|------|
|image A|`text`|
|height|`number`|
|width|`number`|


This methods creates a new scale center crop image.

### SepiaToningEffect



[[Method('Image Editor', 'SepiaToningEffect', true, 'imageA depth red green blue')]]

{>>Returns `text`<<}


**Parameters**

| Name | Type |
|------|------|
|image A|`text`|
|depth|`number`|
|red|`number`|
|green|`number`|
|blue|`number`|


Set a sepia toning effect to your image. For example: depth = 20; red = 10; green = 20; blue = 25.

### SetBrightness



[[Method('Image Editor', 'SetBrightness', true, 'imageA value')]]

{>>Returns `text`<<}


**Parameters**

| Name | Type |
|------|------|
|image A|`text`|
|value|`number`|


Change the brightness of your image. For example: value = 50 (maximum = 255=100% brightness).

### SetColorDepth



[[Method('Image Editor', 'SetColorDepth', true, 'imageA bitOffset')]]

{>>Returns `text`<<}


**Parameters**

| Name | Type |
|------|------|
|image A|`text`|
|bit Offset|`number`|


Change the color depth of an image as you wish. For example: bitOffset = 32 (bit) or bitOffset = 16 (bit).

### SetContrast



[[Method('Image Editor', 'SetContrast', true, 'imageA value')]]

{>>Returns `text`<<}


**Parameters**

| Name | Type |
|------|------|
|image A|`text`|
|value|`number`|


This changes the contrast of your image. For example: value = 1.0 means normal picture contrast. Below 1.0 like as example 0.7 means dark contrast, above 1.0 as example 1.5 means light contrast.

### ShadingFilter



[[Method('Image Editor', 'ShadingFilter', true, 'imageA shadingColor')]]

{>>Returns `text`<<}


**Parameters**

| Name | Type |
|------|------|
|image A|`text`|
|shading Color|`number`|


Make a new image with a shading filter. For example: shadingColor = green(rgb value).

### TintColorEffect



[[Method('Image Editor', 'TintColorEffect', true, 'imageA degree')]]

{>>Returns `text`<<}


**Parameters**

| Name | Type |
|------|------|
|image A|`text`|
|degree|`number`|


That's a pretty new other cool effect. It changes the tint color of your image. For example: degree = 100.

### WatermarkEffect



[[Method('Image Editor', 'WatermarkEffect', true, 'imageA text textSize textColor textUnderline textAlphaValue pointX pointY')]]

{>>Returns `text`<<}


**Parameters**

| Name | Type |
|------|------|
|image A|`text`|
|text|`text`|
|text Size|`number`|
|text Color|`number`|
|text Underline|`boolean`|
|text Alpha Value|`number`|
|point X|`number`|
|point Y|`number`|


Set a watermark effect to an image and change the positon/size or color of the text. For example: text = hello; textSize = 25; textColor = red(rgb value); textAlphaValue = 255 (255= 100% visible,127.5= 50% visible, 0= 0% visible); pointX = 50; pointY = 100; text underline(boolean) = true or false.

### is Landscape



[[Method('Image Editor', 'is Landscape', true, 'image')]]

{>>Returns `boolean`<<}


**Parameters**

| Name | Type |
|------|------|
|image|`text`|


Return true if image is in landscape format, else return false.

### is Portrait



[[Method('Image Editor', 'is Portrait', true, 'image')]]

{>>Returns `boolean`<<}


**Parameters**

| Name | Type |
|------|------|
|image|`text`|


Return true if image is in portrait format, else return false.

### is Square



[[Method('Image Editor', 'is Square', true, 'image')]]

{>>Returns `boolean`<<}


**Parameters**

| Name | Type |
|------|------|
|image|`text`|


Return true if image is in square format (means as high as wide or as wide as high), else return false.