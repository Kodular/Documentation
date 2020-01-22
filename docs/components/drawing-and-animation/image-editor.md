# Image Editor

| Category | Version | Requires |
|:--------:|:-------:|:--------:|
|Drawing and Animation|1|API 19 - Android 4.4 - 4.4.4 KitKat|

:mag: {>>Non-visible component<<}

## Overview

_Non-visible component that allows users to edit images._

## Methods

### BlurEffect

[[Method('Image Editor', 'BlurEffect', true, 'imageA scale radius')]]

{>>Returns `text`<<}

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |image A|`text`|
    |scale|`number`|
    |radius|`number`|


_This methods creates a blur effect._

### ColorBoostEffect

[[Method('Image Editor', 'ColorBoostEffect', true, 'imageA type percent')]]

{>>Returns `text`<<}

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |image A|`text`|
    |type|`text`|
    |percent|`number`|


_Color boost technique is basically based on color filtering, which is to increase the intensity of a single color channel. For example: type = green/ blue or red; percent = 40%._

### ColorFilter

[[Method('Image Editor', 'ColorFilter', true, 'imageA red green blue')]]

{>>Returns `text`<<}

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |image A|`text`|
    |red|`number`|
    |green|`number`|
    |blue|`number`|


_Set a color filter to your image. For example: red = 30; green = 40; blue = 20._

### FlipPicture

[[Method('Image Editor', 'FlipPicture', true, 'imageA type')]]

{>>Returns `text`<<}

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |image A|`text`|
    |type|`number`|


_Flip your image vertical or horizontal. For example: type = 1 (vertical); type = 2 (horizontal)._

### GammaEffect

[[Method('Image Editor', 'GammaEffect', true, 'imageA red green blue')]]

{>>Returns `text`<<}

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |image A|`text`|
    |red|`number`|
    |green|`number`|
    |blue|`number`|


_Set a gamma effect to your image. For example: red = 5; green = 10; blue = 20._

### GreyscaleEffect

[[Method('Image Editor', 'GreyscaleEffect', true, 'imageA')]]

{>>Returns `text`<<}

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |image A|`text`|


_Grayscale is a simple image effect that changes colors to grayscale by default._

### HighlightEffect

[[Method('Image Editor', 'HighlightEffect', true, 'imageA')]]

{>>Returns `text`<<}

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |image A|`text`|


_Set a highlight effect to your image._

### HueFilter

[[Method('Image Editor', 'HueFilter', true, 'imageA level')]]

{>>Returns `text`<<}

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |image A|`text`|
    |level|`number`|


_Change the hue of an image. For example: level = 1 or 2 or 3 or 4 etc._

### ImageRotation

[[Method('Image Editor', 'ImageRotation', true, 'imageA degree')]]

{>>Returns `text`<<}

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |image A|`text`|
    |degree|`number`|


_Rotate the image to the degree you need it. For example: degree = 100._

### InvertEffect

[[Method('Image Editor', 'InvertEffect', true, 'imageA')]]

{>>Returns `text`<<}

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |image A|`text`|


_This effect inverts your image._

### MergeTwoImages

[[Method('Image Editor', 'MergeTwoImages', true, 'leftImage rightImage')]]

{>>Returns `text`<<}

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |left Image|`text`|
    |right Image|`text`|


_This methods creates a new side by side horizontal image._

### Pixelate

[[Method('Image Editor', 'Pixelate', true, 'imageA pixelationAmount')]]

{>>Returns `text`<<}

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |image A|`text`|
    |pixelation Amount|`number`|


_This methods creates a pixelate image effect. Use as example as pixelation Amount '1' for a hugh pixel effect and '99' for a almost not visible pixel effect._

### RoundCorner

[[Method('Image Editor', 'RoundCorner', true, 'imageA round')]]

{>>Returns `text`<<}

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |image A|`text`|
    |round|`number`|


_Set a round corner to your image. For example: round = 45._

### ScaleCenterCrop

[[Method('Image Editor', 'ScaleCenterCrop', true, 'imageA height width')]]

{>>Returns `text`<<}

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |image A|`text`|
    |height|`number`|
    |width|`number`|


_This methods creates a new scale center crop image._

### SepiaToningEffect

[[Method('Image Editor', 'SepiaToningEffect', true, 'imageA depth red green blue')]]

{>>Returns `text`<<}

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |image A|`text`|
    |depth|`number`|
    |red|`number`|
    |green|`number`|
    |blue|`number`|


_Set a sepia toning effect to your image. For example: depth = 20; red = 10; green = 20; blue = 25._

### SetBrightness

[[Method('Image Editor', 'SetBrightness', true, 'imageA value')]]

{>>Returns `text`<<}

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |image A|`text`|
    |value|`number`|


_Change the brightness of your image. For example: value = 50 (maximum = 255=100% brightness)._

### SetColorDepth

[[Method('Image Editor', 'SetColorDepth', true, 'imageA bitOffset')]]

{>>Returns `text`<<}

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |image A|`text`|
    |bit Offset|`number`|


_Change the color depth of an image as you wish. For example: bitOffset = 32 (bit) or bitOffset = 16 (bit)._

### SetContrast

[[Method('Image Editor', 'SetContrast', true, 'imageA value')]]

{>>Returns `text`<<}

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |image A|`text`|
    |value|`number`|


_This changes the contrast of your image. For example: value = 1.0 means normal picture contrast. Below 1.0 like as example 0.7 means dark contrast, above 1.0 as example 1.5 means light contrast._

### ShadingFilter

[[Method('Image Editor', 'ShadingFilter', true, 'imageA shadingColor')]]

{>>Returns `text`<<}

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |image A|`text`|
    |shading Color|`number`|


_Make a new image with a shading filter. For example: shadingColor = green(rgb value)._

### TintColorEffect

[[Method('Image Editor', 'TintColorEffect', true, 'imageA degree')]]

{>>Returns `text`<<}

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |image A|`text`|
    |degree|`number`|


_That's a pretty new other cool effect. It changes the tint color of your image. For example: degree = 100._

### WatermarkEffect

[[Method('Image Editor', 'WatermarkEffect', true, 'imageA text textSize textColor textUnderline textAlphaValue pointX pointY')]]

{>>Returns `text`<<}

??? tip "Parameters"
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


_Set a watermark effect to an image and change the positon/size or color of the text. For example: text = hello; textSize = 25; textColor = red(rgb value); textAlphaValue = 255 (255= 100% visible,127.5= 50% visible, 0= 0% visible); pointX = 50; pointY = 100; text underline(boolean) = true or false._

### is Landscape

[[Method('Image Editor', 'is Landscape', true, 'image')]]

{>>Returns `boolean`<<}

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |image|`text`|


_Return true if image is in landscape format, else return false._

### is Portrait

[[Method('Image Editor', 'is Portrait', true, 'image')]]

{>>Returns `boolean`<<}

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |image|`text`|


_Return true if image is in portrait format, else return false._

### is Square

[[Method('Image Editor', 'is Square', true, 'image')]]

{>>Returns `boolean`<<}

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |image|`text`|


_Return true if image is in square format (means as high as wide or as wide as high), else return false._

## Properties

### Save New Image As

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Image Editor', 'Save New Image As')]]

| Type | Default |
|:----:|:-------:|
|text|NewImage.png|

_Save the new created image to a folder/ name of your choice._