# Chat View

| Category | Version | Requires |
|:--------:|:-------:|:--------:|
|Layout > Views|3|API 19 - Android 4.4 - 4.4.4 KitKat|

## Overview

A visible component that displays a scrollable chat.  
A chat consists of messages sent by two or more than two users where each message can be either simple text or have rich formatting.

## Events

### Click

[[Event('Chat View', 'Click', 'userImage title message timestamp id sendAsSender imagePath withImage filePath fileThumbnail withFile')]]

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |user Image|`text`|
    |title|`text`|
    |message|`text`|
    |timestamp|`text`|
    |id|`number`|
    |send As Sender|`boolean`|
    |image Path|`text`|
    |with Image|`boolean`|
    |file Path|`text`|
    |file Thumbnail|`text`|
    |with File|`boolean`|


Click listener event.

### Double Tap Click

[[Event('Chat View', 'Double Tap Click', 'userImage title message timestamp id sendAsSender imagePath withImage filePath fileThumbnail withFile')]]

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |user Image|`text`|
    |title|`text`|
    |message|`text`|
    |timestamp|`text`|
    |id|`number`|
    |send As Sender|`boolean`|
    |image Path|`text`|
    |with Image|`boolean`|
    |file Path|`text`|
    |file Thumbnail|`text`|
    |with File|`boolean`|


Double tap click listener event.

### Long Click

[[Event('Chat View', 'Long Click', 'userImage title message timestamp id sendAsSender imagePath withImage filePath fileThumbnail withFile')]]

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |user Image|`text`|
    |title|`text`|
    |message|`text`|
    |timestamp|`text`|
    |id|`number`|
    |send As Sender|`boolean`|
    |image Path|`text`|
    |with Image|`boolean`|
    |file Path|`text`|
    |file Thumbnail|`text`|
    |with File|`boolean`|


Long click listener event.

### Swipe

[[Event('Chat View', 'Swipe', 'direction userImage title message timestamp id sendAsSender imagePath withImage filePath fileThumbnail withFile')]]

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |direction|`number`|
    |user Image|`text`|
    |title|`text`|
    |message|`text`|
    |timestamp|`text`|
    |id|`number`|
    |send As Sender|`boolean`|
    |image Path|`text`|
    |with Image|`boolean`|
    |file Path|`text`|
    |file Thumbnail|`text`|
    |with File|`boolean`|


Swipe listener event. The direction value returns '1' for right-to-left swipes, '2' for left-to-right swipes '3' for bottom-to-top swipes and '4' for top-to-bottom swipes

### User Image Click

[[Event('Chat View', 'User Image Click', 'id userImage')]]

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |id|`number`|
    |user Image|`text`|


Click listener event for the user image.

## Methods

### AddComponentMessage

[[Method('Chat View', 'AddComponentMessage', false, 'userImage title message timestamp component id addAsSender')]]

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |user Image|`text`|
    |title|`text`|
    |message|`text`|
    |timestamp|`text`|
    |component|`component`|
    |id|`number`|
    |add As Sender|`boolean`|


Add a new simple component message into the chat view. If you do not want a user image or title or message or timestamp, then let the field empty. Make sure that the component is VISIBLE on the screen when you try to add it here. It will be then removed automatic from the screen and only visible again in the chat view.

### AddDateTimestamp

[[Method('Chat View', 'AddDateTimestamp', false, 'date textColor backgroundColor id')]]

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |date|`text`|
    |text Color|`number`|
    |background Color|`number`|
    |id|`number`|


Add a new simple date timestamp into the chat view. You NEED to write a date, else this block will do nothing. This means the field 'date' can NOT be empty. Timestamp messages are not clickable.

### AddFileMessage

[[Method('Chat View', 'AddFileMessage', false, 'userImage title message filePath fileThumbnail timestamp id addAsSender')]]

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |user Image|`text`|
    |title|`text`|
    |message|`text`|
    |file Path|`text`|
    |file Thumbnail|`text`|
    |timestamp|`text`|
    |id|`number`|
    |add As Sender|`boolean`|


Add a new simple file message into the chat view. If you do not want a user image or title or message or timestamp, then let the field empty.

### AddImageMessage

[[Method('Chat View', 'AddImageMessage', false, 'userImage title message image timestamp id addAsSender')]]

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |user Image|`text`|
    |title|`text`|
    |message|`text`|
    |image|`text`|
    |timestamp|`text`|
    |id|`number`|
    |add As Sender|`boolean`|


Add a new simple image message into the chat view. If you do not want a user image or title or message or timestamp, then let the field empty.

### AddMessage

[[Method('Chat View', 'AddMessage', false, 'userImage title message timestamp id addAsSender')]]

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |user Image|`text`|
    |title|`text`|
    |message|`text`|
    |timestamp|`text`|
    |id|`number`|
    |add As Sender|`boolean`|


Add a new simple message into the chat view. If you do not want a user image or title or message or timestamp, then let the field empty.

### ClearChatView

[[Method('Chat View', 'ClearChatView', false)]]

Removes all messages and timestamps from the chat view.

### CountDateTimestamp

[[Method('Chat View', 'CountDateTimestamp', true)]]

{>>Returns `number`<<}

Returns the number of all date timestamps. Normal messages are not included.

### CountMessages

[[Method('Chat View', 'CountMessages', true)]]

{>>Returns `number`<<}

Returns the number of all messages. 'Date Timestamp' messages are not included.

### GetLastUsedId

[[Method('Chat View', 'GetLastUsedId', true)]]

{>>Returns `number`<<}

Returns the last used id.

### RemoveMessage

[[Method('Chat View', 'RemoveMessage', false, 'id')]]

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |id|`number`|


Remove a message or timestamp from the chat view.

### ScrollTo

[[Method('Chat View', 'ScrollTo', false, 'id')]]

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |id|`number`|


Scroll to a specific message in the chat view with the given id.

### UpdateMessageBackgroundColor

[[Method('Chat View', 'UpdateMessageBackgroundColor', false, 'id backgroundColor')]]

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |id|`number`|
    |background Color|`number`|


Update the background color of a chat view message.

### UpdateMessageContent

[[Method('Chat View', 'UpdateMessageContent', false, 'id text textColor')]]

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |id|`number`|
    |text|`text`|
    |text Color|`number`|


Update the message content of a chat view message.

### UpdateTimestampContent

[[Method('Chat View', 'UpdateTimestampContent', false, 'id text textColor')]]

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |id|`number`|
    |text|`text`|
    |text Color|`number`|


Update the timestamp content of a chat view message.

### UpdateTitleContent

[[Method('Chat View', 'UpdateTitleContent', false, 'id text textColor')]]

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |id|`number`|
    |text|`text`|
    |text Color|`number`|


Update the title content of a chat view message.

### UpdateUserImage

[[Method('Chat View', 'UpdateUserImage', false, 'id userImage')]]

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |id|`number`|
    |user Image|`text`|


Update the user image of a chat view message. The image can only be updated if there was before a old image.

## Properties

### Automatic Scroll Down

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Chat View', 'Automatic Scroll Down')]]

| Type | Default |
|:----:|:-------:|
|boolean|True|

If set to true the chat view will scroll down when a new message was send.

### Background Color

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Chat View', 'Background Color')]]

| Type | Default |
|:----:|:-------:|
|number|&H00000000|

Specifies the component's background color. The background color will not be visible if an Image is being displayed.

### Clickable

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Chat View', 'Clickable')]]

| Type | Default |
|:----:|:-------:|
|boolean|False|

Set the component clickable or not clickable.

### Double Tap

<small>Available as ^^Advanced^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Chat View', 'Double Tap')]]

| Type | Default |
|:----:|:-------:|
|boolean|False|

Set the component enabled for double taps or not.

### Image

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Chat View', 'Image')]]

| Type |
|:----:|
|text|

Specifies the path of the component's image.  If there is both an Image and a BackgroundColor, only the Image will be visible.

### Messages Corner Radius

<small>Available as ^^Advanced^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Chat View', 'Messages Corner Radius')]]

| Type | Default |
|:----:|:-------:|
|number|5|

_No description available_

### Messages Font Size

<small>Available as ^^Advanced^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Chat View', 'Messages Font Size')]]

| Type | Default |
|:----:|:-------:|
|number|14.0|

_No description available_

### Receivers Background Color

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Chat View', 'Receivers Background Color')]]

| Type | Default |
|:----:|:-------:|
|number|&HFFCCCCCC|

Specifies the background color for receiver's messages.

### Receivers Message Color

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Chat View', 'Receivers Message Color')]]

| Type | Default |
|:----:|:-------:|
|number|&HFF000000|

Specifies the color for receivers's messages.

### Receivers Title Color

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Chat View', 'Receivers Title Color')]]

| Type | Default |
|:----:|:-------:|
|number|&HFF000000|

Specifies the color for receivers's title messages.

### Receivers Typeface Message

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Chat View', 'Receivers Typeface Message')]]

| Type | Default |
|:----:|:-------:|
|number|0|

_No description available_

### Receivers Typeface Message Import

<small>Available as ^^Advanced^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Chat View', 'Receivers Typeface Message Import')]]

| Type |
|:----:|
|text|

_No description available_

### Receivers Typeface Title

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Chat View', 'Receivers Typeface Title')]]

| Type | Default |
|:----:|:-------:|
|number|0|

_No description available_

### Receivers Typeface Title Import

<small>Available as ^^Advanced^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Chat View', 'Receivers Typeface Title Import')]]

| Type |
|:----:|
|text|

_No description available_

### Scrollbar

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Chat View', 'Scrollbar')]]

| Type | Default |
|:----:|:-------:|
|boolean|True|

Whether to display a scrollbar.

### Senders Background Color

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Chat View', 'Senders Background Color')]]

| Type | Default |
|:----:|:-------:|
|number|&HFF8BC24A|

Specifies the background color for sender's messages.

### Senders Message Color

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Chat View', 'Senders Message Color')]]

| Type | Default |
|:----:|:-------:|
|number|&HFF000000|

Specifies the color for sender's messages.

### Senders Title Color

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Chat View', 'Senders Title Color')]]

| Type | Default |
|:----:|:-------:|
|number|&HFF000000|

Specifies the color for sender's title messages.

### Senders Typeface Message

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Chat View', 'Senders Typeface Message')]]

| Type | Default |
|:----:|:-------:|
|number|0|

_No description available_

### Senders Typeface Message Import

<small>Available as ^^Advanced^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Chat View', 'Senders Typeface Message Import')]]

| Type |
|:----:|
|text|

_No description available_

### Senders Typeface Title

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Chat View', 'Senders Typeface Title')]]

| Type | Default |
|:----:|:-------:|
|number|0|

_No description available_

### Senders Typeface Title Import

<small>Available as ^^Advanced^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Chat View', 'Senders Typeface Title Import')]]

| Type |
|:----:|
|text|

_No description available_

### Swipeable

<small>Available as ^^Advanced^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Chat View', 'Swipeable')]]

| Type | Default |
|:----:|:-------:|
|boolean|False|

If set to true you can swipe with your fingers through views.

### Timestamp Corner Radius

<small>Available as ^^Advanced^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Chat View', 'Timestamp Corner Radius')]]

| Type | Default |
|:----:|:-------:|
|number|5|

_No description available_

### Timestamp Font Size

<small>Available as ^^Advanced^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Chat View', 'Timestamp Font Size')]]

| Type | Default |
|:----:|:-------:|
|number|14.0|

_No description available_

### Timestamp Text Color

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Chat View', 'Timestamp Text Color')]]

| Type | Default |
|:----:|:-------:|
|number|&HFF000000|

Specifies the color for the timestamp.

### Title Font Size

<small>Available as ^^Advanced^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Chat View', 'Title Font Size')]]

| Type | Default |
|:----:|:-------:|
|number|14.0|

_No description available_

### Visible

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Chat View', 'Visible')]]

| Type | Default |
|:----:|:-------:|
|boolean|True|

Returns true iff the component is visible.

### Column

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Chat View', 'Column')]]

| Type | Default |
|:----:|:-------:|
|number|None|

Column property getter method.

### Height

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Chat View', 'Height')]]

| Type | Default |
|:----:|:-------:|
|number|None|

Specifies the component's vertical height, measured in pixels.

### Height Percent

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Chat View', 'Height Percent')]]

| Type | Default |
|:----:|:-------:|
|number|None|

Specifies the component's vertical height as a percentage
 of the height of its parent Component.

### Row

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Chat View', 'Row')]]

| Type | Default |
|:----:|:-------:|
|number|None|

Row property getter method.

### Width

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Chat View', 'Width')]]

| Type | Default |
|:----:|:-------:|
|number|None|

Specifies the component's horizontal width, measured in pixels.

### Width Percent

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Chat View', 'Width Percent')]]

| Type | Default |
|:----:|:-------:|
|number|None|

Specifies the component's horizontal width as a percentage
 of the Width of its parent Component.