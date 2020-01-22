# Button

| Category | Version | Requires |
|:--------:|:-------:|:--------:|
|User Interface|12|API 19 - Android 4.4 - 4.4.4 KitKat|

## Overview

_Button with the ability to detect clicks.  Many aspects of its appearance can be changed, as well as whether it is clickable (<code>Enabled</code>), can be changed in the Designer or in the Blocks Editor._

## Events

### Click

[[Event('Button', 'Click')]]

_User tapped and released the button._

### Got Focus

[[Event('Button', 'Got Focus')]]

_Indicates the cursor moved over the button so it is now possible to click it._

### Long Click

[[Event('Button', 'Long Click')]]

_User held the button down._

### Lost Focus

[[Event('Button', 'Lost Focus')]]

_Indicates the cursor moved away from the button so it is now no longer possible to click it._

### Touch Down

[[Event('Button', 'Touch Down')]]

_Indicates that the button was pressed down._

### Touch Up

[[Event('Button', 'Touch Up')]]

_Indicates that a button has been released._

## Methods

### AnimationStyle

[[Method('Button', 'AnimationStyle', false, 'style position size color')]]

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |style|`text`|
    |position|`text`|
    |size|`number`|
    |color|`number`|


_Allows you to set animation style. Valid (case-insensitive) values are: ChasingDots, Circle, CubeGrid, DoubleBounce, FadingCircle, FoldingCube, Pulse, RotatingCircle, RotatingPlane, ThreeBounce, WanderingCubes, Wave. If invalid style is used, animation will be removed.Position can be: top, left, right, bottom. Size can be 100._

### ButtonClick

[[Method('Button', 'ButtonClick', false)]]

_Perform a button click as function._

### SetShadow

[[Method('Button', 'SetShadow', false, 'x y radius color')]]

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |x|`number`|
    |y|`number`|
    |radius|`number`|
    |color|`number`|


_Place a blurred shadow of text underneath the text, drawn with the specified x, y, radius, color (e.g. -11, 12, 13, black._

### WithIconFromFontAwesome

[[Method('Button', 'WithIconFromFontAwesome', false, 'position iconName iconColor padding size')]]

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

[[Method('Button', 'WithIconFromMaterialFont', false, 'position iconName iconColor padding size')]]

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

[[Method('Button', 'WithIconFromPicture', false, 'position picture padding width height')]]

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
[[PropertyBlockGetterAndSetter('Button', 'Background Color')]]

| Type | Default |
|:----:|:-------:|
|number|&HFF444444|

_Returns the button's background color_

### Border Shadow

<small>Available as ^^Advanced^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Button', 'Border Shadow')]]

| Type | Default |
|:----:|:-------:|
|boolean|True|

_Returns true if the button have a outside border shadow on click._

### Enabled

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Button', 'Enabled')]]

| Type | Default |
|:----:|:-------:|
|boolean|True|

_If set, user can tap check box to cause action._

### Font Bold

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Button', 'Font Bold')]]

| Type | Default |
|:----:|:-------:|
|boolean|False|

_If set, button text is displayed in bold._

### Font Italic

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Button', 'Font Italic')]]

| Type | Default |
|:----:|:-------:|
|boolean|False|

_If set, button text is displayed in italics._

### Font Size

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Button', 'Font Size')]]

| Type | Default |
|:----:|:-------:|
|number|14.0|

_Point size for button text._

### Font Typeface

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Button', 'Font Typeface')]]

| Type | Default |
|:----:|:-------:|
|number|0|

_Font family for button text._

### Font Typeface Import

<small>Available as ^^Advanced^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Button', 'Font Typeface Import')]]

| Type |
|:----:|
|text|

_Set a custom font._

### HTML Format

<small>Available as ^^Advanced^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Button', 'HTML Format')]]

| Type | Default |
|:----:|:-------:|
|boolean|False|

_If true, then this button will show html text else it will show plain text. Note: Not all HTML is supported._

### Image

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Button', 'Image')]]

| Type |
|:----:|
|text|

_Image to display on button._

### Rotation Angle

<small>Available as ^^Advanced^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Button', 'Rotation Angle')]]

| Type | Default |
|:----:|:-------:|
|number|0.0|

_Sets the degrees that the button is rotated around the pivot point. Increasing values result in clockwise rotation._

### Shape

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Button', 'Shape')]]

| Type | Default |
|:----:|:-------:|
|number|0|

_Specifies the button's shape (default, rounded, rectangular, oval). The shape will not be visible if an Image is being displayed._

### Show Feedback

<small>Available as ^^Advanced^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Button', 'Show Feedback')]]

| Type | Default |
|:----:|:-------:|
|boolean|True|

_Specifies if a visual feedback should be shown for a button that as an image as background._

### Text

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Button', 'Text')]]

| Type |
|:----:|
|text|

_Text to display on button._

### Text Alignment

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Button', 'Text Alignment')]]

| Type | Default |
|:----:|:-------:|
|number|1|

_Left, center, or right._

### Text Color

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Button', 'Text Color')]]

| Type | Default |
|:----:|:-------:|
|number|&HFFFFFFFF|

_Color for button text._

### Touch Color

<small>Available as ^^Advanced^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Button', 'Touch Color')]]

| Type | Default |
|:----:|:-------:|
|number|&HFFCCCCCC|

_Set the buttons touch color._

### Visible

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Button', 'Visible')]]

| Type | Default |
|:----:|:-------:|
|boolean|True|

_Returns true iff the component is visible._

### Column

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Button', 'Column')]]

| Type | Default |
|:----:|:-------:|
|number|None|

_Column property getter method._

### Height

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Button', 'Height')]]

| Type | Default |
|:----:|:-------:|
|number|None|

_Specifies the component's vertical height, measured in pixels._

### Height Percent

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Button', 'Height Percent')]]

| Type | Default |
|:----:|:-------:|
|number|None|

_Specifies the component's vertical height as a percentage
 of the height of its parent Component._

### Row

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Button', 'Row')]]

| Type | Default |
|:----:|:-------:|
|number|None|

_Row property getter method._

### Width

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Button', 'Width')]]

| Type | Default |
|:----:|:-------:|
|number|None|

_Specifies the component's horizontal width, measured in pixels._

### Width Percent

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Button', 'Width Percent')]]

| Type | Default |
|:----:|:-------:|
|number|None|

_Specifies the component's horizontal width as a percentage
 of the Width of its parent Component._