# Date Picker

| Category | Version | Requires |
|:--------:|:-------:|:--------:|
|User Interface|8|API 19 - Android 4.4 - 4.4.4 KitKat|

## Overview

_<p>A button that, when clicked on, launches a popup dialog to allow the user to select a date.</p>_

## Events

### After Date Set

[[Event('Date Picker', 'After Date Set')]]

_Event that runs after the user chooses a Date in the dialog_

### Got Focus

[[Event('Date Picker', 'Got Focus')]]

_Indicates the cursor moved over the button so it is now possible to click it._

### Lost Focus

[[Event('Date Picker', 'Lost Focus')]]

_Indicates the cursor moved away from the button so it is now no longer possible to click it._

### Touch Down

[[Event('Date Picker', 'Touch Down')]]

_Indicates that the button was pressed down._

### Touch Up

[[Event('Date Picker', 'Touch Up')]]

_Indicates that a button has been released._

## Methods

### AnimationStyle

[[Method('Date Picker', 'AnimationStyle', false, 'style position size color')]]

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |style|`text`|
    |position|`text`|
    |size|`number`|
    |color|`number`|


_Allows you to set animation style. Valid (case-insensitive) values are: ChasingDots, Circle, CubeGrid, DoubleBounce, FadingCircle, FoldingCube, Pulse, RotatingCircle, RotatingPlane, ThreeBounce, WanderingCubes, Wave. If invalid style is used, animation will be removed.Position can be: top, left, right, bottom. Size can be 100._

### ButtonClick

[[Method('Date Picker', 'ButtonClick', false)]]

_Perform a button click as function._

### LaunchPicker

[[Method('Date Picker', 'LaunchPicker', false)]]

_Launches the DatePicker popup._

### SetDateToDisplay

[[Method('Date Picker', 'SetDateToDisplay', false, 'year month day')]]

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |year|`number`|
    |month|`number`|
    |day|`number`|


_Allows the user to set the date to be displayed when the date picker opens.
Valid values for the month field are 1-12 and 1-31 for the day field._

### SetDateToDisplayFromInstant

[[Method('Date Picker', 'SetDateToDisplayFromInstant', false, 'instant')]]

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |instant|`InstantInTime`|


_Allows the user to set the date from the instant to be displayed when the date picker opens._

### SetShadow

[[Method('Date Picker', 'SetShadow', false, 'x y radius color')]]

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |x|`number`|
    |y|`number`|
    |radius|`number`|
    |color|`number`|


_Place a blurred shadow of text underneath the text, drawn with the specified x, y, radius, color (e.g. -11, 12, 13, black._

### WithIconFromFontAwesome

[[Method('Date Picker', 'WithIconFromFontAwesome', false, 'position iconName iconColor padding size')]]

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |position|`text`|
    |icon Name|`text`|
    |icon Color|`number`|
    |padding|`number`|
    |size|`number`|


_Show an image on the given position near to the button. You can use following words for the position: 'Left', 'Right', 'Top' or 'Bottom'. Use the padding to add space between the icon and text. Use a material icon as the button icon without uploading a image resource into your project. You can find the icon name (or code) here at https://fontawesome.com/cheatsheet Use as example for a heart icon just 'f004'._

### WithIconFromMaterialFont

[[Method('Date Picker', 'WithIconFromMaterialFont', false, 'position iconName iconColor padding size')]]

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |position|`text`|
    |icon Name|`text`|
    |icon Color|`number`|
    |padding|`number`|
    |size|`number`|


_Show an image on the given position near to the button. You can use following words for the position: 'Left', 'Right', 'Top' or 'Bottom'. Use the padding to add space between the icon and text. Use a material icon as the button icon without uploading a image resource into your project. You can find the icon name (or code) here at https://material.io/icons_

### WithIconFromPicture

[[Method('Date Picker', 'WithIconFromPicture', false, 'position picture padding width height')]]

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |position|`text`|
    |picture|`text`|
    |padding|`number`|
    |width|`number`|
    |height|`number`|


_Show an image on the given position near to the button. You can use following words for the position: 'Left', 'Right', 'Top' or 'Bottom'. Use the padding to add space between the icon and text._

## Properties

### Background Color

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Date Picker', 'Background Color')]]

| Type | Default |
|:----:|:-------:|
|number|&HFF444444|

_Returns the button's background color_

### Border Shadow

<small>Available as ^^Advanced^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Date Picker', 'Border Shadow')]]

| Type | Default |
|:----:|:-------:|
|boolean|True|

_Returns true if the button have a outside border shadow on click._

### Enabled

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Date Picker', 'Enabled')]]

| Type | Default |
|:----:|:-------:|
|boolean|True|

_If set, user can tap check box to cause action._

### Font Bold

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Date Picker', 'Font Bold')]]

| Type | Default |
|:----:|:-------:|
|boolean|False|

_If set, button text is displayed in bold._

### Font Italic

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Date Picker', 'Font Italic')]]

| Type | Default |
|:----:|:-------:|
|boolean|False|

_If set, button text is displayed in italics._

### Font Size

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Date Picker', 'Font Size')]]

| Type | Default |
|:----:|:-------:|
|number|14.0|

_Point size for button text._

### Font Typeface

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Date Picker', 'Font Typeface')]]

| Type | Default |
|:----:|:-------:|
|number|0|

_Font family for button text._

### Font Typeface Import

<small>Available as ^^Advanced^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Date Picker', 'Font Typeface Import')]]

| Type |
|:----:|
|text|

_Set a custom font._

### HTML Format

<small>Available as ^^Advanced^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Date Picker', 'HTML Format')]]

| Type | Default |
|:----:|:-------:|
|boolean|False|

_If true, then this button will show html text else it will show plain text. Note: Not all HTML is supported._

### Image

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Date Picker', 'Image')]]

| Type |
|:----:|
|text|

_Image to display on button._

### Rotation Angle

<small>Available as ^^Advanced^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Date Picker', 'Rotation Angle')]]

| Type | Default |
|:----:|:-------:|
|number|0.0|

_Sets the degrees that the button is rotated around the pivot point. Increasing values result in clockwise rotation._

### Shape

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Date Picker', 'Shape')]]

| Type | Default |
|:----:|:-------:|
|number|0|

_Specifies the button's shape (default, rounded, rectangular, oval). The shape will not be visible if an Image is being displayed._

### Show Feedback

<small>Available as ^^Advanced^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Date Picker', 'Show Feedback')]]

| Type | Default |
|:----:|:-------:|
|boolean|True|

_Specifies if a visual feedback should be shown for a button that as an image as background._

### Text

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Date Picker', 'Text')]]

| Type |
|:----:|
|text|

_Text to display on button._

### Text Alignment

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Date Picker', 'Text Alignment')]]

| Type | Default |
|:----:|:-------:|
|number|1|

_Left, center, or right._

### Text Color

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Date Picker', 'Text Color')]]

| Type | Default |
|:----:|:-------:|
|number|&HFFFFFFFF|

_Color for button text._

### Touch Color

<small>Available as ^^Advanced^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Date Picker', 'Touch Color')]]

| Type | Default |
|:----:|:-------:|
|number|&HFFCCCCCC|

_Set the buttons touch color._

### Visible

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Date Picker', 'Visible')]]

| Type | Default |
|:----:|:-------:|
|boolean|True|

_Returns true iff the component is visible._

### Column

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Date Picker', 'Column')]]

| Type | Default |
|:----:|:-------:|
|number|None|

_Column property getter method._

### Day

:eyes: Read-Only property
[[PropertyBlockGetter('Date Picker', 'Day')]]

| Type | Default |
|:----:|:-------:|
|number|None|

_the Day of the month that was last picked using the DatePicker._

### Height

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Date Picker', 'Height')]]

| Type | Default |
|:----:|:-------:|
|number|None|

_Specifies the component's vertical height, measured in pixels._

### Height Percent

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Date Picker', 'Height Percent')]]

| Type | Default |
|:----:|:-------:|
|number|None|

_Specifies the component's vertical height as a percentage
 of the height of its parent Component._

### Instant

:eyes: Read-Only property
[[PropertyBlockGetter('Date Picker', 'Instant')]]

| Type | Default |
|:----:|:-------:|
|InstantInTime|None|

_the instant of the date that was last picked using the DatePicker._

### Month

:eyes: Read-Only property
[[PropertyBlockGetter('Date Picker', 'Month')]]

| Type | Default |
|:----:|:-------:|
|number|None|

_the number of the Month that was last picked using the DatePicker. Note that months start in 1 = January, 12 = December._

### Month In Text

:eyes: Read-Only property
[[PropertyBlockGetter('Date Picker', 'Month In Text')]]

| Type | Default |
|:----:|:-------:|
|text|None|

_Returns the name of the Month that was last picked using the DatePicker, in textual format._

### Row

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Date Picker', 'Row')]]

| Type | Default |
|:----:|:-------:|
|number|None|

_Row property getter method._

### Width

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Date Picker', 'Width')]]

| Type | Default |
|:----:|:-------:|
|number|None|

_Specifies the component's horizontal width, measured in pixels._

### Width Percent

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Date Picker', 'Width Percent')]]

| Type | Default |
|:----:|:-------:|
|number|None|

_Specifies the component's horizontal width as a percentage
 of the Width of its parent Component._

### Year

:eyes: Read-Only property
[[PropertyBlockGetter('Date Picker', 'Year')]]

| Type | Default |
|:----:|:-------:|
|number|None|

_the Year that was last picked using the DatePicker_