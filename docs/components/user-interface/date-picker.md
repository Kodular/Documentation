# Date Picker

| Category | Version | Requires |
|:--------:|:-------:|:--------:|
|User Interface|8|API 19 - Android 4.4 - 4.4.4 KitKat|

## Overview

A button that, when clicked on, launches a popup dialog to allow the user to select a date.

## Events

### After Date Set

[[Event('Date Picker', 'After Date Set')]]

Event that runs after the user chooses a Date in the dialog

### Got Focus

[[Event('Date Picker', 'Got Focus')]]

Indicates the cursor moved over the button so it is now possible to click it.

### Lost Focus

[[Event('Date Picker', 'Lost Focus')]]

Indicates the cursor moved away from the button so it is now no longer possible to click it.

### Touch Down

[[Event('Date Picker', 'Touch Down')]]

Indicates that the button was pressed down.

### Touch Up

[[Event('Date Picker', 'Touch Up')]]

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

Launches the DatePicker popup.

### SetDateToDisplay

_Block preview not available_

??? tip "Parameters"

    | Name | Type |
    |------|------|
    |year|`number`|
    |month|`number`|
    |day|`number`|


Allows the user to set the date to be displayed when the date picker opens.  Valid values for the month field are 1-12 and 1-31 for the day field.

### SetDateToDisplayFromInstant

_Block preview not available_

??? tip "Parameters"

    | Name | Type |
    |------|------|
    |instant|`InstantInTime`|


Allows the user to set the date from the instant to be displayed when the date picker opens.

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
[[PropertyBlockGetterAndSetter('Date Picker', 'Background Color')]]

| Type | Default |
|:----:|:-------:|
|number|&HFF444444|

Returns the button's background color

### Border Shadow

<small>Available as ^^Advanced^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Date Picker', 'Border Shadow')]]

| Type | Default |
|:----:|:-------:|
|boolean|True|

Returns true if the button have a outside border shadow on click.

### Enabled

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Date Picker', 'Enabled')]]

| Type | Default |
|:----:|:-------:|
|boolean|True|

If set, user can tap check box to cause action.

### Font Bold

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Date Picker', 'Font Bold')]]

| Type | Default |
|:----:|:-------:|
|boolean|False|

If set, button text is displayed in bold.

### Font Italic

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Date Picker', 'Font Italic')]]

| Type | Default |
|:----:|:-------:|
|boolean|False|

If set, button text is displayed in italics.

### Font Size

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Date Picker', 'Font Size')]]

| Type | Default |
|:----:|:-------:|
|number|14.0|

Point size for button text.

### Font Typeface

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Date Picker', 'Font Typeface')]]

| Type | Default |
|:----:|:-------:|
|number|0|

Font family for button text.

### Font Typeface Import

<small>Available as ^^Advanced^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Date Picker', 'Font Typeface Import')]]

| Type |
|:----:|
|text|

Set a custom font.

### HTML Format

<small>Available as ^^Advanced^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Date Picker', 'HTML Format')]]

| Type | Default |
|:----:|:-------:|
|boolean|False|

If true, then this button will show html text else it will show plain text. Note: Not all HTML is supported.

### Image

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Date Picker', 'Image')]]

| Type |
|:----:|
|text|

Image to display on button.

### Rotation Angle

<small>Available as ^^Advanced^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Date Picker', 'Rotation Angle')]]

| Type | Default |
|:----:|:-------:|
|number|0.0|

Sets the degrees that the button is rotated around the pivot point. Increasing values result in clockwise rotation.

### Shape

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Date Picker', 'Shape')]]

| Type | Default |
|:----:|:-------:|
|number|0|

Specifies the button's shape (default, rounded, rectangular, oval). The shape will not be visible if an Image is being displayed.

### Show Feedback

<small>Available as ^^Advanced^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Date Picker', 'Show Feedback')]]

| Type | Default |
|:----:|:-------:|
|boolean|True|

Specifies if a visual feedback should be shown for a button that as an image as background.

### Text

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Date Picker', 'Text')]]

| Type |
|:----:|
|text|

Text to display on button.

### Text Alignment

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Date Picker', 'Text Alignment')]]

| Type | Default |
|:----:|:-------:|
|number|1|

Left, center, or right.

### Text Color

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Date Picker', 'Text Color')]]

| Type | Default |
|:----:|:-------:|
|number|&HFFFFFFFF|

Color for button text.

### Touch Color

<small>Available as ^^Advanced^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Date Picker', 'Touch Color')]]

| Type | Default |
|:----:|:-------:|
|number|&HFFCCCCCC|

Set the buttons touch color.

### Visible

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Date Picker', 'Visible')]]

| Type | Default |
|:----:|:-------:|
|boolean|True|

Returns true iff the component is visible.

### Column

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Date Picker', 'Column')]]

| Type | Default |
|:----:|:-------:|
|number|None|

Column property getter method.

### Day

:eyes: Read-Only property
[[PropertyBlockGetter('Date Picker', 'Day')]]

| Type | Default |
|:----:|:-------:|
|number|None|

the Day of the month that was last picked using the DatePicker.

### Height

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Date Picker', 'Height')]]

| Type | Default |
|:----:|:-------:|
|number|None|

Specifies the component's vertical height, measured in pixels.

### Height Percent

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Date Picker', 'Height Percent')]]

| Type | Default |
|:----:|:-------:|
|number|None|

Specifies the component's vertical height as a percentage   of the height of its parent Component.

### Instant

:eyes: Read-Only property
[[PropertyBlockGetter('Date Picker', 'Instant')]]

| Type | Default |
|:----:|:-------:|
|InstantInTime|None|

the instant of the date that was last picked using the DatePicker.

### Month

:eyes: Read-Only property
[[PropertyBlockGetter('Date Picker', 'Month')]]

| Type | Default |
|:----:|:-------:|
|number|None|

the number of the Month that was last picked using the DatePicker. Note that months start in 1 = January, 12 = December.

### Month In Text

:eyes: Read-Only property
[[PropertyBlockGetter('Date Picker', 'Month In Text')]]

| Type | Default |
|:----:|:-------:|
|text|None|

Returns the name of the Month that was last picked using the DatePicker, in textual format.

### Row

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Date Picker', 'Row')]]

| Type | Default |
|:----:|:-------:|
|number|None|

Row property getter method.

### Width

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Date Picker', 'Width')]]

| Type | Default |
|:----:|:-------:|
|number|None|

Specifies the component's horizontal width, measured in pixels.

### Width Percent

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Date Picker', 'Width Percent')]]

| Type | Default |
|:----:|:-------:|
|number|None|

Specifies the component's horizontal width as a percentage   of the Width of its parent Component.

### Year

:eyes: Read-Only property
[[PropertyBlockGetter('Date Picker', 'Year')]]

| Type | Default |
|:----:|:-------:|
|number|None|

the Year that was last picked using the DatePicker