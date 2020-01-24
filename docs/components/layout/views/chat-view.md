# Chat View

| Category | Requires | Version |
|:--------:|:-------:|:--------:|
|**Layout > Views**|<span class="chip chip-any">API 19, Android 4.4 - 4.4.4 KitKat</span>|<span class="chip chip-number">3</span>|

## Overview

A visible component that displays a scrollable chat.  
A chat consists of messages sent by two or more than two users where each message can be either simple text or have rich formatting.

??? example "Permissions"
    * [android.permission.INTERNET](https://developer.android.com/reference/android/Manifest.permission.html#INTERNET)


## Events

### Click

Click listener event.

[[Event('Chat View', 'Click', 'userImage', 'title', 'message', 'timestamp', 'id', 'sendAsSender', 'imagePath', 'withImage', 'filePath', 'fileThumbnail', 'withFile')]]

| Params | []() |
|--------|------|
|user Image|<span class="chip chip-text">Text</span>|
|title|<span class="chip chip-text">Text</span>|
|message|<span class="chip chip-text">Text</span>|
|timestamp|<span class="chip chip-text">Text</span>|
|id|<span class="chip chip-number">Number</span>|
|send As Sender|<span class="chip chip-boolean">Boolean</span>|
|image Path|<span class="chip chip-text">Text</span>|
|with Image|<span class="chip chip-boolean">Boolean</span>|
|file Path|<span class="chip chip-text">Text</span>|
|file Thumbnail|<span class="chip chip-text">Text</span>|
|with File|<span class="chip chip-boolean">Boolean</span>|


### Double Tap Click

Double tap click listener event.

[[Event('Chat View', 'Double Tap Click', 'userImage', 'title', 'message', 'timestamp', 'id', 'sendAsSender', 'imagePath', 'withImage', 'filePath', 'fileThumbnail', 'withFile')]]

| Params | []() |
|--------|------|
|user Image|<span class="chip chip-text">Text</span>|
|title|<span class="chip chip-text">Text</span>|
|message|<span class="chip chip-text">Text</span>|
|timestamp|<span class="chip chip-text">Text</span>|
|id|<span class="chip chip-number">Number</span>|
|send As Sender|<span class="chip chip-boolean">Boolean</span>|
|image Path|<span class="chip chip-text">Text</span>|
|with Image|<span class="chip chip-boolean">Boolean</span>|
|file Path|<span class="chip chip-text">Text</span>|
|file Thumbnail|<span class="chip chip-text">Text</span>|
|with File|<span class="chip chip-boolean">Boolean</span>|


### Long Click

Long click listener event.

[[Event('Chat View', 'Long Click', 'userImage', 'title', 'message', 'timestamp', 'id', 'sendAsSender', 'imagePath', 'withImage', 'filePath', 'fileThumbnail', 'withFile')]]

| Params | []() |
|--------|------|
|user Image|<span class="chip chip-text">Text</span>|
|title|<span class="chip chip-text">Text</span>|
|message|<span class="chip chip-text">Text</span>|
|timestamp|<span class="chip chip-text">Text</span>|
|id|<span class="chip chip-number">Number</span>|
|send As Sender|<span class="chip chip-boolean">Boolean</span>|
|image Path|<span class="chip chip-text">Text</span>|
|with Image|<span class="chip chip-boolean">Boolean</span>|
|file Path|<span class="chip chip-text">Text</span>|
|file Thumbnail|<span class="chip chip-text">Text</span>|
|with File|<span class="chip chip-boolean">Boolean</span>|


### Swipe

Swipe listener event. The direction value returns '1' for right-to-left swipes, '2' for left-to-right swipes '3' for bottom-to-top swipes and '4' for top-to-bottom swipes

[[Event('Chat View', 'Swipe', 'direction', 'userImage', 'title', 'message', 'timestamp', 'id', 'sendAsSender', 'imagePath', 'withImage', 'filePath', 'fileThumbnail', 'withFile')]]

| Params | []() |
|--------|------|
|direction|<span class="chip chip-number">Number</span>|
|user Image|<span class="chip chip-text">Text</span>|
|title|<span class="chip chip-text">Text</span>|
|message|<span class="chip chip-text">Text</span>|
|timestamp|<span class="chip chip-text">Text</span>|
|id|<span class="chip chip-number">Number</span>|
|send As Sender|<span class="chip chip-boolean">Boolean</span>|
|image Path|<span class="chip chip-text">Text</span>|
|with Image|<span class="chip chip-boolean">Boolean</span>|
|file Path|<span class="chip chip-text">Text</span>|
|file Thumbnail|<span class="chip chip-text">Text</span>|
|with File|<span class="chip chip-boolean">Boolean</span>|


### User Image Click

Click listener event for the user image.

[[Event('Chat View', 'User Image Click', 'id', 'userImage')]]

| Params | []() |
|--------|------|
|id|<span class="chip chip-number">Number</span>|
|user Image|<span class="chip chip-text">Text</span>|


## Methods

### Add Component Message

Add a new simple component message into the chat view. If you do not want a user image or title or message or timestamp, then let the field empty. Make sure that the component is VISIBLE on the screen when you try to add it here. It will be then removed automatic from the screen and only visible again in the chat view.

[[Method('Chat View', 'Add Component Message', False, 'userImage', 'title', 'message', 'timestamp', 'component', 'id', 'addAsSender')]]

| Params | []() |
|--------|------|
|user Image|<span class="chip chip-text">Text</span>|
|title|<span class="chip chip-text">Text</span>|
|message|<span class="chip chip-text">Text</span>|
|timestamp|<span class="chip chip-text">Text</span>|
|component|<span class="chip chip-component">Component</span>|
|id|<span class="chip chip-number">Number</span>|
|add As Sender|<span class="chip chip-boolean">Boolean</span>|


### Add Date Timestamp

Add a new simple date timestamp into the chat view. You NEED to write a date, else this block will do nothing. This means the field 'date' can NOT be empty. Timestamp messages are not clickable.

[[Method('Chat View', 'Add Date Timestamp', False, 'date', 'textColor', 'backgroundColor', 'id')]]

| Params | []() |
|--------|------|
|date|<span class="chip chip-text">Text</span>|
|text Color|<span class="chip chip-number">Number</span>|
|background Color|<span class="chip chip-number">Number</span>|
|id|<span class="chip chip-number">Number</span>|


### Add File Message

Add a new simple file message into the chat view. If you do not want a user image or title or message or timestamp, then let the field empty.

[[Method('Chat View', 'Add File Message', False, 'userImage', 'title', 'message', 'filePath', 'fileThumbnail', 'timestamp', 'id', 'addAsSender')]]

| Params | []() |
|--------|------|
|user Image|<span class="chip chip-text">Text</span>|
|title|<span class="chip chip-text">Text</span>|
|message|<span class="chip chip-text">Text</span>|
|file Path|<span class="chip chip-text">Text</span>|
|file Thumbnail|<span class="chip chip-text">Text</span>|
|timestamp|<span class="chip chip-text">Text</span>|
|id|<span class="chip chip-number">Number</span>|
|add As Sender|<span class="chip chip-boolean">Boolean</span>|


### Add Image Message

Add a new simple image message into the chat view. If you do not want a user image or title or message or timestamp, then let the field empty.

[[Method('Chat View', 'Add Image Message', False, 'userImage', 'title', 'message', 'image', 'timestamp', 'id', 'addAsSender')]]

| Params | []() |
|--------|------|
|user Image|<span class="chip chip-text">Text</span>|
|title|<span class="chip chip-text">Text</span>|
|message|<span class="chip chip-text">Text</span>|
|image|<span class="chip chip-text">Text</span>|
|timestamp|<span class="chip chip-text">Text</span>|
|id|<span class="chip chip-number">Number</span>|
|add As Sender|<span class="chip chip-boolean">Boolean</span>|


### Add Message

Add a new simple message into the chat view. If you do not want a user image or title or message or timestamp, then let the field empty.

[[Method('Chat View', 'Add Message', False, 'userImage', 'title', 'message', 'timestamp', 'id', 'addAsSender')]]

| Params | []() |
|--------|------|
|user Image|<span class="chip chip-text">Text</span>|
|title|<span class="chip chip-text">Text</span>|
|message|<span class="chip chip-text">Text</span>|
|timestamp|<span class="chip chip-text">Text</span>|
|id|<span class="chip chip-number">Number</span>|
|add As Sender|<span class="chip chip-boolean">Boolean</span>|


### Clear ChatView

Removes all messages and timestamps from the chat view.

[[Method('Chat View', 'Clear ChatView', False)]]

### Count Date Timestamp

<span class="chip chip-number">Returns: <i>Number</i></span> 

Returns the number of all date timestamps. Normal messages are not included.

[[Method('Chat View', 'Count Date Timestamp', True)]]

### Count Messages

<span class="chip chip-number">Returns: <i>Number</i></span> 

Returns the number of all messages. 'Date Timestamp' messages are not included.

[[Method('Chat View', 'Count Messages', True)]]

### Get Last Used Id

<span class="chip chip-number">Returns: <i>Number</i></span> 

Returns the last used id.

[[Method('Chat View', 'Get Last Used Id', True)]]

### Remove Message

Remove a message or timestamp from the chat view.

[[Method('Chat View', 'Remove Message', False, 'id')]]

| Params | []() |
|--------|------|
|id|<span class="chip chip-number">Number</span>|


### Scroll To

Scroll to a specific message in the chat view with the given id.

[[Method('Chat View', 'Scroll To', False, 'id')]]

| Params | []() |
|--------|------|
|id|<span class="chip chip-number">Number</span>|


### Update Message Background Color

Update the background color of a chat view message.

[[Method('Chat View', 'Update Message Background Color', False, 'id', 'backgroundColor')]]

| Params | []() |
|--------|------|
|id|<span class="chip chip-number">Number</span>|
|background Color|<span class="chip chip-number">Number</span>|


### Update Message Content

Update the message content of a chat view message.

[[Method('Chat View', 'Update Message Content', False, 'id', 'text', 'textColor')]]

| Params | []() |
|--------|------|
|id|<span class="chip chip-number">Number</span>|
|text|<span class="chip chip-text">Text</span>|
|text Color|<span class="chip chip-number">Number</span>|


### Update Timestamp Content

Update the timestamp content of a chat view message.

[[Method('Chat View', 'Update Timestamp Content', False, 'id', 'text', 'textColor')]]

| Params | []() |
|--------|------|
|id|<span class="chip chip-number">Number</span>|
|text|<span class="chip chip-text">Text</span>|
|text Color|<span class="chip chip-number">Number</span>|


### Update Title Content

Update the title content of a chat view message.

[[Method('Chat View', 'Update Title Content', False, 'id', 'text', 'textColor')]]

| Params | []() |
|--------|------|
|id|<span class="chip chip-number">Number</span>|
|text|<span class="chip chip-text">Text</span>|
|text Color|<span class="chip chip-number">Number</span>|


### Update User Image

Update the user image of a chat view message. The image can only be updated if there was before a old image.

[[Method('Chat View', 'Update User Image', False, 'id', 'userImage')]]

| Params | []() |
|--------|------|
|id|<span class="chip chip-number">Number</span>|
|user Image|<span class="chip chip-text">Text</span>|


## Properties

### Automatic Scroll Down

<span class="chip chip-boolean">Boolean</span> <span class="chip chip-boolean">Default: <i>True</i></span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span> 

If set to true the chat view will scroll down when a new message was send.

[[PropertyBlockGetterAndSetter('Chat View', 'Automatic Scroll Down')]]

### Background Color

<span class="chip chip-number">Number</span> <span class="chip chip-number" style="background-color: #000000;">Default: <i>#00000000</i></span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span> 

Specifies the component's background color. The background color will not be visible if an Image is being displayed.

[[PropertyBlockGetterAndSetter('Chat View', 'Background Color')]]

### Clickable

<span class="chip chip-boolean">Boolean</span> <span class="chip chip-boolean">Default: <i>False</i></span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span> 

Set the component clickable or not clickable.

[[PropertyBlockGetterAndSetter('Chat View', 'Clickable')]]

### Double Tap

<span class="chip chip-boolean">Boolean</span> <span class="chip chip-boolean">Default: <i>False</i></span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span> 

<small>Available as ^^Advanced^^ Property</small>

Set the component enabled for double taps or not.

[[PropertyBlockGetterAndSetter('Chat View', 'Double Tap')]]

### Image

<span class="chip chip-text">Text</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span> 

Specifies the path of the component's image. If there is both an Image and a BackgroundColor, only the Image will be visible.

[[PropertyBlockGetterAndSetter('Chat View', 'Image')]]

### Messages Corner Radius

<span class="chip chip-number">Number</span> <span class="chip chip-number">Default: <i>5</i></span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span> 

<small>Available as ^^Advanced^^ Property</small>

### Messages Font Size

<span class="chip chip-number">Number</span> <span class="chip chip-number">Default: <i>14.0</i></span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span> 

<small>Available as ^^Advanced^^ Property</small>

### Receivers Background Color

<span class="chip chip-number">Number</span> <span class="chip chip-number" style="background-color: #CCCCCC;">Default: <i>#CCCCCCFF</i></span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span> 

Specifies the background color for receiver's messages.

[[PropertyBlockGetterAndSetter('Chat View', 'Receivers Background Color')]]

### Receivers Message Color

<span class="chip chip-number">Number</span> <span class="chip chip-number" style="background-color: #000000;">Default: <i>#000000FF</i></span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span> 

Specifies the color for receivers's messages.

[[PropertyBlockGetterAndSetter('Chat View', 'Receivers Message Color')]]

### Receivers Title Color

<span class="chip chip-number">Number</span> <span class="chip chip-number" style="background-color: #000000;">Default: <i>#000000FF</i></span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span> 

Specifies the color for receivers's title messages.

[[PropertyBlockGetterAndSetter('Chat View', 'Receivers Title Color')]]

### Receivers Typeface Message

<span class="chip chip-number">Number</span> <span class="chip chip-number">Default: <i>0</i></span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span> 

### Receivers Typeface Message Import

<span class="chip chip-text">Text</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span> 

<small>Available as ^^Advanced^^ Property</small>

### Receivers Typeface Title

<span class="chip chip-number">Number</span> <span class="chip chip-number">Default: <i>0</i></span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span> 

### Receivers Typeface Title Import

<span class="chip chip-text">Text</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span> 

<small>Available as ^^Advanced^^ Property</small>

### Scrollbar

<span class="chip chip-boolean">Boolean</span> <span class="chip chip-boolean">Default: <i>True</i></span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span> 

Whether to display a scrollbar.

[[PropertyBlockGetterAndSetter('Chat View', 'Scrollbar')]]

### Senders Background Color

<span class="chip chip-number">Number</span> <span class="chip chip-number" style="background-color: #8BC24A;">Default: <i>#8BC24AFF</i></span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span> 

Specifies the background color for sender's messages.

[[PropertyBlockGetterAndSetter('Chat View', 'Senders Background Color')]]

### Senders Message Color

<span class="chip chip-number">Number</span> <span class="chip chip-number" style="background-color: #000000;">Default: <i>#000000FF</i></span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span> 

Specifies the color for sender's messages.

[[PropertyBlockGetterAndSetter('Chat View', 'Senders Message Color')]]

### Senders Title Color

<span class="chip chip-number">Number</span> <span class="chip chip-number" style="background-color: #000000;">Default: <i>#000000FF</i></span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span> 

Specifies the color for sender's title messages.

[[PropertyBlockGetterAndSetter('Chat View', 'Senders Title Color')]]

### Senders Typeface Message

<span class="chip chip-number">Number</span> <span class="chip chip-number">Default: <i>0</i></span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span> 

### Senders Typeface Message Import

<span class="chip chip-text">Text</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span> 

<small>Available as ^^Advanced^^ Property</small>

### Senders Typeface Title

<span class="chip chip-number">Number</span> <span class="chip chip-number">Default: <i>0</i></span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span> 

### Senders Typeface Title Import

<span class="chip chip-text">Text</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span> 

<small>Available as ^^Advanced^^ Property</small>

### Swipeable

<span class="chip chip-boolean">Boolean</span> <span class="chip chip-boolean">Default: <i>False</i></span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span> 

<small>Available as ^^Advanced^^ Property</small>

If set to true you can swipe with your fingers through views.

[[PropertyBlockGetterAndSetter('Chat View', 'Swipeable')]]

### Timestamp Corner Radius

<span class="chip chip-number">Number</span> <span class="chip chip-number">Default: <i>5</i></span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span> 

<small>Available as ^^Advanced^^ Property</small>

### Timestamp Font Size

<span class="chip chip-number">Number</span> <span class="chip chip-number">Default: <i>14.0</i></span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span> 

<small>Available as ^^Advanced^^ Property</small>

### Timestamp Text Color

<span class="chip chip-number">Number</span> <span class="chip chip-number" style="background-color: #000000;">Default: <i>#000000FF</i></span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span> 

Specifies the color for the timestamp.

[[PropertyBlockGetterAndSetter('Chat View', 'Timestamp Text Color')]]

### Title Font Size

<span class="chip chip-number">Number</span> <span class="chip chip-number">Default: <i>14.0</i></span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span> 

<small>Available as ^^Advanced^^ Property</small>

### Visible

<span class="chip chip-boolean">Boolean</span> <span class="chip chip-boolean">Default: <i>True</i></span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span> 

Returns true iff the component is visible.

[[PropertyBlockGetterAndSetter('Chat View', 'Visible')]]

### Column

<span class="chip chip-number">Number</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Non-Visible</span> - 

Column property getter method.

### Height

<span class="chip chip-number">Number</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Blocks</span> 

Specifies the component's vertical height, measured in pixels.

[[PropertyBlockGetterAndSetter('Chat View', 'Height')]]

### Height Percent

<span class="chip chip-number">Number</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Blocks</span> 

Specifies the component's vertical height as a percentageof the height of its parent Component.

[[PropertyBlockGetterAndSetter('Chat View', 'Height Percent')]]

### Row

<span class="chip chip-number">Number</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Non-Visible</span> - 

Row property getter method.

### Width

<span class="chip chip-number">Number</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Blocks</span> 

Specifies the component's horizontal width, measured in pixels.

[[PropertyBlockGetterAndSetter('Chat View', 'Width')]]

### Width Percent

<span class="chip chip-number">Number</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Blocks</span> 

Specifies the component's horizontal width as a percentageof the Width of its parent Component.

[[PropertyBlockGetterAndSetter('Chat View', 'Width Percent')]]