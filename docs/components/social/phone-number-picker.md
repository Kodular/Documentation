# Phone Number Picker

| Category | Version | Requires |
|:--------:|:-------:|:--------:|
|Social|10|API 19 - Android 4.4 - 4.4.4 KitKat|

## Overview

A button that, when clicked on, displays a list of the contacts' phone numbers to choose among. After the user has made a selection, the following properties will be set to information about the chosen contact: 

*    `` ContactName ``: the contact's name 
*    `` PhoneNumber ``: the contact's phone number 
*    `` EmailAddress ``: the contact's email address 
 *    `` Picture ``: the name of the file containing the contact's image, which can be used as a `` Picture `` property value for the `` Image `` or `` ImageSprite `` component.

Other properties affect the appearance of the button (`` TextAlignment ``, `` BackgroundColor ``, etc.) and whether it can be clicked on (`` Enabled ``).

The PhoneNumberPicker component may not work on all Android devices. For example, on Android systems before system 3.0, the returned lists of phone numbers and email addresses will be empty.

## Events

### After Picking

[[Event('Phone Number Picker', 'After Picking', 'selection')]]

??? tip "Parameters"

    | Name | Type |
    |------|------|
    |selection|`text`|


Event to be raised after the picker activity returns its
 result and the properties have been filled in.

### Before Picking

[[Event('Phone Number Picker', 'Before Picking')]]

Event to raise when the button of the component is clicked or the list is shown
 using the Open block.  This event occurs before the list of items is displayed, and
 can be used to prepare the list before it is shown.

### Got Focus

[[Event('Phone Number Picker', 'Got Focus')]]

Indicates the cursor moved over the button so it is now possible to click it.

### Lost Focus

[[Event('Phone Number Picker', 'Lost Focus')]]

Indicates the cursor moved away from the button so it is now no longer possible to click it.

### Touch Down

[[Event('Phone Number Picker', 'Touch Down')]]

Indicates that the button was pressed down.

### Touch Up

[[Event('Phone Number Picker', 'Touch Up')]]

Indicates that a button has been released.

## Methods

### AnimationStyle

[[Method('Phone Number Picker', 'AnimationStyle', false, 'style position size color')]]

??? tip "Parameters"

    | Name | Type |
    |------|------|
    |style|`text`|
    |position|`text`|
    |size|`number`|
    |color|`number`|


Allows you to set animation style. Valid (case-insensitive) values are: ChasingDots, Circle, CubeGrid, DoubleBounce, FadingCircle, FoldingCube, Pulse, RotatingCircle, RotatingPlane, ThreeBounce, WanderingCubes, Wave. If invalid style is used, animation will be removed.Position can be: top, left, right, bottom. Size can be 100.

### ButtonClick

[[Method('Phone Number Picker', 'ButtonClick', false)]]

Perform a button click as function.

### Open

[[Method('Phone Number Picker', 'Open', false)]]

Opens the picker, as though the user clicked on it.

### SetShadow

[[Method('Phone Number Picker', 'SetShadow', false, 'x y radius color')]]

??? tip "Parameters"

    | Name | Type |
    |------|------|
    |x|`number`|
    |y|`number`|
    |radius|`number`|
    |color|`number`|


Place a blurred shadow of text underneath the text, drawn with the specified x, y, radius, color (e.g. -11, 12, 13, black.

### ViewContact

[[Method('Phone Number Picker', 'ViewContact', false, 'uri')]]

??? tip "Parameters"

    | Name | Type |
    |------|------|
    |uri|`text`|


view a contact via its URI

### WithIconFromFontAwesome

[[Method('Phone Number Picker', 'WithIconFromFontAwesome', false, 'position iconName iconColor padding size')]]

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

[[Method('Phone Number Picker', 'WithIconFromMaterialFont', false, 'position iconName iconColor padding size')]]

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

[[Method('Phone Number Picker', 'WithIconFromPicture', false, 'position picture padding width height')]]

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
[[PropertyBlockGetterAndSetter('Phone Number Picker', 'Background Color')]]

| Type | Default |
|:----:|:-------:|
|number|&HFF444444|

Returns the button's background color

### Border Shadow

<small>Available as ^^Advanced^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Phone Number Picker', 'Border Shadow')]]

| Type | Default |
|:----:|:-------:|
|boolean|True|

Returns true if the button have a outside border shadow on click.

### Enabled

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Phone Number Picker', 'Enabled')]]

| Type | Default |
|:----:|:-------:|
|boolean|True|

If set, user can tap check box to cause action.

### Font Bold

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Phone Number Picker', 'Font Bold')]]

| Type | Default |
|:----:|:-------:|
|boolean|False|

If set, button text is displayed in bold.

### Font Italic

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Phone Number Picker', 'Font Italic')]]

| Type | Default |
|:----:|:-------:|
|boolean|False|

If set, button text is displayed in italics.

### Font Size

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Phone Number Picker', 'Font Size')]]

| Type | Default |
|:----:|:-------:|
|number|14.0|

Point size for button text.

### Font Typeface

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Phone Number Picker', 'Font Typeface')]]

| Type | Default |
|:----:|:-------:|
|number|0|

Font family for button text.

### Font Typeface Import

<small>Available as ^^Advanced^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Phone Number Picker', 'Font Typeface Import')]]

| Type |
|:----:|
|text|

Set a custom font.

### HTML Format

<small>Available as ^^Advanced^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Phone Number Picker', 'HTML Format')]]

| Type | Default |
|:----:|:-------:|
|boolean|False|

If true, then this button will show html text else it will show plain text. Note: Not all HTML is supported.

### Image

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Phone Number Picker', 'Image')]]

| Type |
|:----:|
|text|

Image to display on button.

### Rotation Angle

<small>Available as ^^Advanced^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Phone Number Picker', 'Rotation Angle')]]

| Type | Default |
|:----:|:-------:|
|number|0.0|

Sets the degrees that the button is rotated around the pivot point. Increasing values result in clockwise rotation.

### Shape

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Phone Number Picker', 'Shape')]]

| Type | Default |
|:----:|:-------:|
|number|0|

Specifies the button's shape (default, rounded, rectangular, oval). The shape will not be visible if an Image is being displayed.

### Show Feedback

<small>Available as ^^Advanced^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Phone Number Picker', 'Show Feedback')]]

| Type | Default |
|:----:|:-------:|
|boolean|True|

Specifies if a visual feedback should be shown for a button that as an image as background.

### Text

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Phone Number Picker', 'Text')]]

| Type |
|:----:|
|text|

Text to display on button.

### Text Alignment

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Phone Number Picker', 'Text Alignment')]]

| Type | Default |
|:----:|:-------:|
|number|1|

Left, center, or right.

### Text Color

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Phone Number Picker', 'Text Color')]]

| Type | Default |
|:----:|:-------:|
|number|&HFFFFFFFF|

Color for button text.

### Touch Color

<small>Available as ^^Advanced^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Phone Number Picker', 'Touch Color')]]

| Type | Default |
|:----:|:-------:|
|number|&HFFCCCCCC|

Set the buttons touch color.

### Visible

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Phone Number Picker', 'Visible')]]

| Type | Default |
|:----:|:-------:|
|boolean|True|

Returns true iff the component is visible.

### Column

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Phone Number Picker', 'Column')]]

| Type | Default |
|:----:|:-------:|
|number|None|

Column property getter method.

### Contact Name

:eyes: Read-Only property
[[PropertyBlockGetter('Phone Number Picker', 'Contact Name')]]

| Type | Default |
|:----:|:-------:|
|text|None|

Name property getter method.

### Contact URI

:eyes: Read-Only property
[[PropertyBlockGetter('Phone Number Picker', 'Contact URI')]]

| Type | Default |
|:----:|:-------:|
|text|None|

URI that specifies the location of the contact on the device.

### Email Address

:eyes: Read-Only property
[[PropertyBlockGetter('Phone Number Picker', 'Email Address')]]

| Type | Default |
|:----:|:-------:|
|text|None|

EmailAddress property getter method.

### Email Address List

:eyes: Read-Only property
[[PropertyBlockGetter('Phone Number Picker', 'Email Address List')]]

| Type | Default |
|:----:|:-------:|
|list|None|

EmailAddressList property getter method.

### Height

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Phone Number Picker', 'Height')]]

| Type | Default |
|:----:|:-------:|
|number|None|

Specifies the component's vertical height, measured in pixels.

### Height Percent

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Phone Number Picker', 'Height Percent')]]

| Type | Default |
|:----:|:-------:|
|number|None|

Specifies the component's vertical height as a percentage
 of the height of its parent Component.

### Phone Number

:eyes: Read-Only property
[[PropertyBlockGetter('Phone Number Picker', 'Phone Number')]]

| Type | Default |
|:----:|:-------:|
|text|None|

PhoneNumber property getter method.

### Phone Number List

:eyes: Read-Only property
[[PropertyBlockGetter('Phone Number Picker', 'Phone Number List')]]

| Type | Default |
|:----:|:-------:|
|list|None|

PhoneNumberList property getter method.

### Picture

:eyes: Read-Only property
[[PropertyBlockGetter('Phone Number Picker', 'Picture')]]

| Type | Default |
|:----:|:-------:|
|text|None|

Picture URI for this contact, which can be
 used to retrieve the contact's photo and other fields.

### Row

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Phone Number Picker', 'Row')]]

| Type | Default |
|:----:|:-------:|
|number|None|

Row property getter method.

### Width

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Phone Number Picker', 'Width')]]

| Type | Default |
|:----:|:-------:|
|number|None|

Specifies the component's horizontal width, measured in pixels.

### Width Percent

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Phone Number Picker', 'Width Percent')]]

| Type | Default |
|:----:|:-------:|
|number|None|

Specifies the component's horizontal width as a percentage
 of the Width of its parent Component.