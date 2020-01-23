# Contact Picker

| Category | Version | Requires |
|:--------:|:-------:|:--------:|
|Social|12|API 19 - Android 4.4 - 4.4.4 KitKat|

## Overview

A button that, when clicked on, displays a list of the contacts to choose among. After the user has made a selection, the following properties will be set to information about the chosen contact: 

*    `` ContactName ``: the contact's name 
*    `` EmailAddress ``: the contact's primary email address 
*    `` ContactUri ``: the contact's URI on the device 
*    `` EmailAddressList ``: a list of the contact's email addresses 
*    `` PhoneNumber ``: the contact's primary phone number (on Later Android Verisons)
*    `` PhoneNumberList ``: a list of the contact's phone numbers (on Later Android Versions)
*    `` Picture ``: the name of the file containing the contact's image, which can be used as a `` Picture `` property value for the `` Image `` or `` ImageSprite `` component.

Other properties affect the appearance of the button (`` TextAlignment ``, `` BackgroundColor ``, etc.) and whether it can be clicked on (`` Enabled ``).

The ContactPicker component might not work on all phones. For example, on Android systems before system 3.0, it cannot pick phone numbers, and the list of email addresses will contain only one email.

## Events

### After Picking

[[Event('Contact Picker', 'After Picking', 'selection')]]

??? tip "Parameters"

    | Name | Type |
    |------|------|
    |selection|`text`|


Event to be raised after the picker activity returns its
 result and the properties have been filled in.

### Before Picking

[[Event('Contact Picker', 'Before Picking')]]

Event to raise when the button of the component is clicked or the list is shown
 using the Open block.  This event occurs before the list of items is displayed, and
 can be used to prepare the list before it is shown.

### Got Focus

[[Event('Contact Picker', 'Got Focus')]]

Indicates the cursor moved over the button so it is now possible to click it.

### Lost Focus

[[Event('Contact Picker', 'Lost Focus')]]

Indicates the cursor moved away from the button so it is now no longer possible to click it.

### Touch Down

[[Event('Contact Picker', 'Touch Down')]]

Indicates that the button was pressed down.

### Touch Up

[[Event('Contact Picker', 'Touch Up')]]

Indicates that a button has been released.

## Methods

### AnimationStyle

[[Method('Contact Picker', 'AnimationStyle', false, 'style position size color')]]

??? tip "Parameters"

    | Name | Type |
    |------|------|
    |style|`text`|
    |position|`text`|
    |size|`number`|
    |color|`number`|


Allows you to set animation style. Valid (case-insensitive) values are: ChasingDots, Circle, CubeGrid, DoubleBounce, FadingCircle, FoldingCube, Pulse, RotatingCircle, RotatingPlane, ThreeBounce, WanderingCubes, Wave. If invalid style is used, animation will be removed.Position can be: top, left, right, bottom. Size can be 100.

### ButtonClick

[[Method('Contact Picker', 'ButtonClick', false)]]

Perform a button click as function.

### Open

[[Method('Contact Picker', 'Open', false)]]

Opens the picker, as though the user clicked on it.

### SetShadow

[[Method('Contact Picker', 'SetShadow', false, 'x y radius color')]]

??? tip "Parameters"

    | Name | Type |
    |------|------|
    |x|`number`|
    |y|`number`|
    |radius|`number`|
    |color|`number`|


Place a blurred shadow of text underneath the text, drawn with the specified x, y, radius, color (e.g. -11, 12, 13, black.

### ViewContact

[[Method('Contact Picker', 'ViewContact', false, 'uri')]]

??? tip "Parameters"

    | Name | Type |
    |------|------|
    |uri|`text`|


view a contact via its URI

### WithIconFromFontAwesome

[[Method('Contact Picker', 'WithIconFromFontAwesome', false, 'position iconName iconColor padding size')]]

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

[[Method('Contact Picker', 'WithIconFromMaterialFont', false, 'position iconName iconColor padding size')]]

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

[[Method('Contact Picker', 'WithIconFromPicture', false, 'position picture padding width height')]]

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
[[PropertyBlockGetterAndSetter('Contact Picker', 'Background Color')]]

| Type | Default |
|:----:|:-------:|
|number|&HFF444444|

Returns the button's background color

### Border Shadow

<small>Available as ^^Advanced^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Contact Picker', 'Border Shadow')]]

| Type | Default |
|:----:|:-------:|
|boolean|True|

Returns true if the button have a outside border shadow on click.

### Enabled

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Contact Picker', 'Enabled')]]

| Type | Default |
|:----:|:-------:|
|boolean|True|

If set, user can tap check box to cause action.

### Font Bold

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Contact Picker', 'Font Bold')]]

| Type | Default |
|:----:|:-------:|
|boolean|False|

If set, button text is displayed in bold.

### Font Italic

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Contact Picker', 'Font Italic')]]

| Type | Default |
|:----:|:-------:|
|boolean|False|

If set, button text is displayed in italics.

### Font Size

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Contact Picker', 'Font Size')]]

| Type | Default |
|:----:|:-------:|
|number|14.0|

Point size for button text.

### Font Typeface

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Contact Picker', 'Font Typeface')]]

| Type | Default |
|:----:|:-------:|
|number|0|

Font family for button text.

### Font Typeface Import

<small>Available as ^^Advanced^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Contact Picker', 'Font Typeface Import')]]

| Type |
|:----:|
|text|

Set a custom font.

### HTML Format

<small>Available as ^^Advanced^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Contact Picker', 'HTML Format')]]

| Type | Default |
|:----:|:-------:|
|boolean|False|

If true, then this button will show html text else it will show plain text. Note: Not all HTML is supported.

### Image

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Contact Picker', 'Image')]]

| Type |
|:----:|
|text|

Image to display on button.

### Rotation Angle

<small>Available as ^^Advanced^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Contact Picker', 'Rotation Angle')]]

| Type | Default |
|:----:|:-------:|
|number|0.0|

Sets the degrees that the button is rotated around the pivot point. Increasing values result in clockwise rotation.

### Shape

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Contact Picker', 'Shape')]]

| Type | Default |
|:----:|:-------:|
|number|0|

Specifies the button's shape (default, rounded, rectangular, oval). The shape will not be visible if an Image is being displayed.

### Show Feedback

<small>Available as ^^Advanced^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Contact Picker', 'Show Feedback')]]

| Type | Default |
|:----:|:-------:|
|boolean|True|

Specifies if a visual feedback should be shown for a button that as an image as background.

### Text

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Contact Picker', 'Text')]]

| Type |
|:----:|
|text|

Text to display on button.

### Text Alignment

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Contact Picker', 'Text Alignment')]]

| Type | Default |
|:----:|:-------:|
|number|1|

Left, center, or right.

### Text Color

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Contact Picker', 'Text Color')]]

| Type | Default |
|:----:|:-------:|
|number|&HFFFFFFFF|

Color for button text.

### Touch Color

<small>Available as ^^Advanced^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Contact Picker', 'Touch Color')]]

| Type | Default |
|:----:|:-------:|
|number|&HFFCCCCCC|

Set the buttons touch color.

### Visible

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Contact Picker', 'Visible')]]

| Type | Default |
|:----:|:-------:|
|boolean|True|

Returns true iff the component is visible.

### Column

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Contact Picker', 'Column')]]

| Type | Default |
|:----:|:-------:|
|number|None|

Column property getter method.

### Contact Name

:eyes: Read-Only property
[[PropertyBlockGetter('Contact Picker', 'Contact Name')]]

| Type | Default |
|:----:|:-------:|
|text|None|

Name property getter method.

### Contact URI

:eyes: Read-Only property
[[PropertyBlockGetter('Contact Picker', 'Contact URI')]]

| Type | Default |
|:----:|:-------:|
|text|None|

URI that specifies the location of the contact on the device.

### Email Address

:eyes: Read-Only property
[[PropertyBlockGetter('Contact Picker', 'Email Address')]]

| Type | Default |
|:----:|:-------:|
|text|None|

EmailAddress property getter method.

### Email Address List

:eyes: Read-Only property
[[PropertyBlockGetter('Contact Picker', 'Email Address List')]]

| Type | Default |
|:----:|:-------:|
|list|None|

EmailAddressList property getter method.

### Height

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Contact Picker', 'Height')]]

| Type | Default |
|:----:|:-------:|
|number|None|

Specifies the component's vertical height, measured in pixels.

### Height Percent

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Contact Picker', 'Height Percent')]]

| Type | Default |
|:----:|:-------:|
|number|None|

Specifies the component's vertical height as a percentage
 of the height of its parent Component.

### Phone Number

:eyes: Read-Only property
[[PropertyBlockGetter('Contact Picker', 'Phone Number')]]

| Type | Default |
|:----:|:-------:|
|text|None|

PhoneNumber property getter method.

### Phone Number List

:eyes: Read-Only property
[[PropertyBlockGetter('Contact Picker', 'Phone Number List')]]

| Type | Default |
|:----:|:-------:|
|list|None|

PhoneNumberList property getter method.

### Picture

:eyes: Read-Only property
[[PropertyBlockGetter('Contact Picker', 'Picture')]]

| Type | Default |
|:----:|:-------:|
|text|None|

Picture URI for this contact, which can be
 used to retrieve the contact's photo and other fields.

### Row

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Contact Picker', 'Row')]]

| Type | Default |
|:----:|:-------:|
|number|None|

Row property getter method.

### Width

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Contact Picker', 'Width')]]

| Type | Default |
|:----:|:-------:|
|number|None|

Specifies the component's horizontal width, measured in pixels.

### Width Percent

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Contact Picker', 'Width Percent')]]

| Type | Default |
|:----:|:-------:|
|number|None|

Specifies the component's horizontal width as a percentage
 of the Width of its parent Component.