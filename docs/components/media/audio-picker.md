# Audio Picker

| Category | Version | Requires |
|:--------:|:-------:|:--------:|
|Media|6|API 19 | Android 4.4 - 4.4.4 KitKat|

## Overview

A special-purpose button. When the user taps an audio picker, the device's audio gallery appears, and the user can choose an audio file.

## Events

### After Picking

[[Event('Audio Picker', 'After Picking', 'selection')]]

??? tip "Parameters"

    | Name | Type |
    |------|------|
    |selection|`text`|


Event to be raised after the picker activity returns itsresult and the properties have been filled in.

### Before Picking

[[Event('Audio Picker', 'Before Picking')]]

Event to raise when the button of the component is clicked or the list is shownusing the Open block. This event occurs before the list of items is displayed, andcan be used to prepare the list before it is shown.

### Got Focus

[[Event('Audio Picker', 'Got Focus')]]

Indicates the cursor moved over the button so it is now possible to click it.

### Lost Focus

[[Event('Audio Picker', 'Lost Focus')]]

Indicates the cursor moved away from the button so it is now no longer possible to click it.

### Touch Down

[[Event('Audio Picker', 'Touch Down')]]

Indicates that the button was pressed down.

### Touch Up

[[Event('Audio Picker', 'Touch Up')]]

Indicates that a button has been released.

## Methods

### AnimationStyle

_Block preview not available_

??? tip "Parameters"

    | Name | Type |
    |------|------|
    |style|`text`|
    |position|`text`|
    |size|`number`|
    |color|`number`|


Allows you to set animation style. Valid (case-insensitive) values are: ChasingDots, Circle, CubeGrid, DoubleBounce, FadingCircle, FoldingCube, Pulse, RotatingCircle, RotatingPlane, ThreeBounce, WanderingCubes, Wave. If invalid style is used, animation will be removed.Position can be: top, left, right, bottom. Size can be 100.

### ButtonClick

_Block preview not available_

Perform a button click as function.

### Open

_Block preview not available_

Opens the picker, as though the user clicked on it.

### SetShadow

_Block preview not available_

??? tip "Parameters"

    | Name | Type |
    |------|------|
    |x|`number`|
    |y|`number`|
    |radius|`number`|
    |color|`number`|


Place a blurred shadow of text underneath the text, drawn with the specified x, y, radius, color (e.g. -11, 12, 13, black.

### WithIconFromFontAwesome

_Block preview not available_

??? tip "Parameters"

    | Name | Type |
    |------|------|
    |position|`text`|
    |icon Name|`text`|
    |icon Color|`number`|
    |padding|`number`|
    |size|`number`|


Show an image on the given position near to the button. You can use following words for the position: 'Left', 'Right', 'Top' or 'Bottom'. Use the padding to add space between the icon and text. Use a material icon as the button icon without uploading a image resource into your project. You can find the icon name (or code) here at https://fontawesome.com/cheatsheet Use as example for a heart icon just 'f004'.

### WithIconFromMaterialFont

_Block preview not available_

??? tip "Parameters"

    | Name | Type |
    |------|------|
    |position|`text`|
    |icon Name|`text`|
    |icon Color|`number`|
    |padding|`number`|
    |size|`number`|


Show an image on the given position near to the button. You can use following words for the position: 'Left', 'Right', 'Top' or 'Bottom'. Use the padding to add space between the icon and text. Use a material icon as the button icon without uploading a image resource into your project. You can find the icon name (or code) here at https://material.io/icons

### WithIconFromPicture

_Block preview not available_

??? tip "Parameters"

    | Name | Type |
    |------|------|
    |position|`text`|
    |picture|`text`|
    |padding|`number`|
    |width|`number`|
    |height|`number`|


Show an image on the given position near to the button. You can use following words for the position: 'Left', 'Right', 'Top' or 'Bottom'. Use the padding to add space between the icon and text.

## Properties

### Background Color

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Audio Picker', 'Background Color')]]

| Type | Default |
|:----:|:-------:|
|number|&HFF444444|

Returns the button's background color

### Border Shadow

<small>Available as ^^Advanced^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Audio Picker', 'Border Shadow')]]

| Type | Default |
|:----:|:-------:|
|boolean|True|

Returns true if the button have a outside border shadow on click.

### Enabled

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Audio Picker', 'Enabled')]]

| Type | Default |
|:----:|:-------:|
|boolean|True|

If set, user can tap check box to cause action.

### Font Bold

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Audio Picker', 'Font Bold')]]

| Type | Default |
|:----:|:-------:|
|boolean|False|

If set, button text is displayed in bold.

### Font Italic

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Audio Picker', 'Font Italic')]]

| Type | Default |
|:----:|:-------:|
|boolean|False|

If set, button text is displayed in italics.

### Font Size

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Audio Picker', 'Font Size')]]

| Type | Default |
|:----:|:-------:|
|number|14.0|

Point size for button text.

### Font Typeface

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Audio Picker', 'Font Typeface')]]

| Type | Default |
|:----:|:-------:|
|number|0|

Font family for button text.

### Font Typeface Import

<small>Available as ^^Advanced^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Audio Picker', 'Font Typeface Import')]]

| Type |
|:----:|
|text|

Set a custom font.

### HTML Format

<small>Available as ^^Advanced^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Audio Picker', 'HTML Format')]]

| Type | Default |
|:----:|:-------:|
|boolean|False|

If true, then this button will show html text else it will show plain text. Note: Not all HTML is supported.

### Image

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Audio Picker', 'Image')]]

| Type |
|:----:|
|text|

Image to display on button.

### Rotation Angle

<small>Available as ^^Advanced^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Audio Picker', 'Rotation Angle')]]

| Type | Default |
|:----:|:-------:|
|number|0.0|

Sets the degrees that the button is rotated around the pivot point. Increasing values result in clockwise rotation.

### Shape

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Audio Picker', 'Shape')]]

| Type | Default |
|:----:|:-------:|
|number|0|

Specifies the button's shape (default, rounded, rectangular, oval). The shape will not be visible if an Image is being displayed.

### Show Feedback

<small>Available as ^^Advanced^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Audio Picker', 'Show Feedback')]]

| Type | Default |
|:----:|:-------:|
|boolean|True|

Specifies if a visual feedback should be shown for a button that as an image as background.

### Text

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Audio Picker', 'Text')]]

| Type |
|:----:|
|text|

Text to display on button.

### Text Alignment

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Audio Picker', 'Text Alignment')]]

| Type | Default |
|:----:|:-------:|
|number|1|

Left, center, or right.

### Text Color

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Audio Picker', 'Text Color')]]

| Type | Default |
|:----:|:-------:|
|number|&HFFFFFFFF|

Color for button text.

### Touch Color

<small>Available as ^^Advanced^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Audio Picker', 'Touch Color')]]

| Type | Default |
|:----:|:-------:|
|number|&HFFCCCCCC|

Set the buttons touch color.

### Visible

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Audio Picker', 'Visible')]]

| Type | Default |
|:----:|:-------:|
|boolean|True|

Returns true iff the component is visible.

### Column

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Audio Picker', 'Column')]]

| Type | Default |
|:----:|:-------:|
|number|None|

Column property getter method.

### Height

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Audio Picker', 'Height')]]

| Type | Default |
|:----:|:-------:|
|number|None|

Specifies the component's vertical height, measured in pixels.

### Height Percent

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Audio Picker', 'Height Percent')]]

| Type | Default |
|:----:|:-------:|
|number|None|

Specifies the component's vertical height as a percentageof the height of its parent Component.

### Row

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Audio Picker', 'Row')]]

| Type | Default |
|:----:|:-------:|
|number|None|

Row property getter method.

### Selection

:eyes: Read-Only property
[[PropertyBlockGetter('Audio Picker', 'Selection')]]

| Type | Default |
|:----:|:-------:|
|text|None|

Path to the file containing the audio file that was selected.

### Width

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Audio Picker', 'Width')]]

| Type | Default |
|:----:|:-------:|
|number|None|

Specifies the component's horizontal width, measured in pixels.

### Width Percent

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Audio Picker', 'Width Percent')]]

| Type | Default |
|:----:|:-------:|
|number|None|

Specifies the component's horizontal width as a percentageof the Width of its parent Component.