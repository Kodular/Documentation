# Time Picker

| Category | Version | Requires |
|:--------:|:-------:|:--------:|
|User Interface|8|API 19 - Android 4.4 - 4.4.4 KitKat|

## Overview

A button that, when clicked on, launches a popup dialog to allow the user to select a time.

## Events

### After Time Set

[[Event('Time Picker', 'After Time Set')]]

This event is run when a user has set the time in the popup dialog.

### Got Focus

[[Event('Time Picker', 'Got Focus')]]

Indicates the cursor moved over the button so it is now possible to click it.

### Lost Focus

[[Event('Time Picker', 'Lost Focus')]]

Indicates the cursor moved away from the button so it is now no longer possible to click it.

### Touch Down

[[Event('Time Picker', 'Touch Down')]]

Indicates that the button was pressed down.

### Touch Up

[[Event('Time Picker', 'Touch Up')]]

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

### LaunchPicker

_Block preview not available_

Launches the TimePicker popup.

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

### SetTimeToDisplay

_Block preview not available_

??? tip "Parameters"

    | Name | Type |
    |------|------|
    |hour|`number`|
    |minute|`number`|


Set the time to be shown in the Time Picker popup. Current time is shown by default.

### SetTimeToDisplayFromInstant

_Block preview not available_

??? tip "Parameters"

    | Name | Type |
    |------|------|
    |instant|`InstantInTime`|


Set the time from the instant to be shown in the Time Picker popup. Current time is shown by default.

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
[[PropertyBlockGetterAndSetter('Time Picker', 'Background Color')]]

| Type | Default |
|:----:|:-------:|
|number|&HFF444444|

Returns the button's background color

### Border Shadow

<small>Available as ^^Advanced^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Time Picker', 'Border Shadow')]]

| Type | Default |
|:----:|:-------:|
|boolean|True|

Returns true if the button have a outside border shadow on click.

### Enabled

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Time Picker', 'Enabled')]]

| Type | Default |
|:----:|:-------:|
|boolean|True|

If set, user can tap check box to cause action.

### Font Bold

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Time Picker', 'Font Bold')]]

| Type | Default |
|:----:|:-------:|
|boolean|False|

If set, button text is displayed in bold.

### Font Italic

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Time Picker', 'Font Italic')]]

| Type | Default |
|:----:|:-------:|
|boolean|False|

If set, button text is displayed in italics.

### Font Size

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Time Picker', 'Font Size')]]

| Type | Default |
|:----:|:-------:|
|number|14.0|

Point size for button text.

### Font Typeface

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Time Picker', 'Font Typeface')]]

| Type | Default |
|:----:|:-------:|
|number|0|

Font family for button text.

### Font Typeface Import

<small>Available as ^^Advanced^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Time Picker', 'Font Typeface Import')]]

| Type |
|:----:|
|text|

Set a custom font.

### HTML Format

<small>Available as ^^Advanced^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Time Picker', 'HTML Format')]]

| Type | Default |
|:----:|:-------:|
|boolean|False|

If true, then this button will show html text else it will show plain text. Note: Not all HTML is supported.

### Image

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Time Picker', 'Image')]]

| Type |
|:----:|
|text|

Image to display on button.

### Rotation Angle

<small>Available as ^^Advanced^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Time Picker', 'Rotation Angle')]]

| Type | Default |
|:----:|:-------:|
|number|0.0|

Sets the degrees that the button is rotated around the pivot point. Increasing values result in clockwise rotation.

### Shape

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Time Picker', 'Shape')]]

| Type | Default |
|:----:|:-------:|
|number|0|

Specifies the button's shape (default, rounded, rectangular, oval). The shape will not be visible if an Image is being displayed.

### Show Feedback

<small>Available as ^^Advanced^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Time Picker', 'Show Feedback')]]

| Type | Default |
|:----:|:-------:|
|boolean|True|

Specifies if a visual feedback should be shown for a button that as an image as background.

### Text

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Time Picker', 'Text')]]

| Type |
|:----:|
|text|

Text to display on button.

### Text Alignment

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Time Picker', 'Text Alignment')]]

| Type | Default |
|:----:|:-------:|
|number|1|

Left, center, or right.

### Text Color

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Time Picker', 'Text Color')]]

| Type | Default |
|:----:|:-------:|
|number|&HFFFFFFFF|

Color for button text.

### Touch Color

<small>Available as ^^Advanced^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Time Picker', 'Touch Color')]]

| Type | Default |
|:----:|:-------:|
|number|&HFFCCCCCC|

Set the buttons touch color.

### Visible

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Time Picker', 'Visible')]]

| Type | Default |
|:----:|:-------:|
|boolean|True|

Returns true iff the component is visible.

### Column

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Time Picker', 'Column')]]

| Type | Default |
|:----:|:-------:|
|number|None|

Column property getter method.

### Height

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Time Picker', 'Height')]]

| Type | Default |
|:----:|:-------:|
|number|None|

Specifies the component's vertical height, measured in pixels.

### Height Percent

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Time Picker', 'Height Percent')]]

| Type | Default |
|:----:|:-------:|
|number|None|

Specifies the component's vertical height as a percentage   of the height of its parent Component.

### Hour

:eyes: Read-Only property
[[PropertyBlockGetter('Time Picker', 'Hour')]]

| Type | Default |
|:----:|:-------:|
|number|None|

The hour of the last time set using the time picker. The hour is in a 24 hour format. If the last time set was 11:53 pm, this property will return 23.

### Instant

:eyes: Read-Only property
[[PropertyBlockGetter('Time Picker', 'Instant')]]

| Type | Default |
|:----:|:-------:|
|InstantInTime|None|

The instant of the last time set using the time picker

### Minute

:eyes: Read-Only property
[[PropertyBlockGetter('Time Picker', 'Minute')]]

| Type | Default |
|:----:|:-------:|
|number|None|

The minute of the last time set using the time picker

### Row

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Time Picker', 'Row')]]

| Type | Default |
|:----:|:-------:|
|number|None|

Row property getter method.

### Width

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Time Picker', 'Width')]]

| Type | Default |
|:----:|:-------:|
|number|None|

Specifies the component's horizontal width, measured in pixels.

### Width Percent

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Time Picker', 'Width Percent')]]

| Type | Default |
|:----:|:-------:|
|number|None|

Specifies the component's horizontal width as a percentage   of the Width of its parent Component.