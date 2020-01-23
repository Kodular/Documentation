# Chat View

| Category | Requires | Version |
|:--------:|:-------:|:--------:|
|Layout > Views|API 19, Android 4.4 - 4.4.4 KitKat|3|

## Overview

A visible component that displays a scrollable chat.  
A chat consists of messages sent by two or more than two users where each message can be either simple text or have rich formatting.

## Events

### Click

[[Event('Chat View', 'Click', 'userImage', 'title', 'message', 'timestamp', 'id', 'sendAsSender', 'imagePath', 'withImage', 'filePath', 'fileThumbnail', 'withFile')]]

| Params | []() |
|--------|------|
|user Image|Text|
|title|Text|
|message|Text|
|timestamp|Text|
|id|Number|
|send As Sender|Boolean|
|image Path|Text|
|with Image|Boolean|
|file Path|Text|
|file Thumbnail|Text|
|with File|Boolean|


Click listener event.

### Double Tap Click

[[Event('Chat View', 'Double Tap Click', 'userImage', 'title', 'message', 'timestamp', 'id', 'sendAsSender', 'imagePath', 'withImage', 'filePath', 'fileThumbnail', 'withFile')]]

| Params | []() |
|--------|------|
|user Image|Text|
|title|Text|
|message|Text|
|timestamp|Text|
|id|Number|
|send As Sender|Boolean|
|image Path|Text|
|with Image|Boolean|
|file Path|Text|
|file Thumbnail|Text|
|with File|Boolean|


Double tap click listener event.

### Long Click

[[Event('Chat View', 'Long Click', 'userImage', 'title', 'message', 'timestamp', 'id', 'sendAsSender', 'imagePath', 'withImage', 'filePath', 'fileThumbnail', 'withFile')]]

| Params | []() |
|--------|------|
|user Image|Text|
|title|Text|
|message|Text|
|timestamp|Text|
|id|Number|
|send As Sender|Boolean|
|image Path|Text|
|with Image|Boolean|
|file Path|Text|
|file Thumbnail|Text|
|with File|Boolean|


Long click listener event.

### Swipe

[[Event('Chat View', 'Swipe', 'direction', 'userImage', 'title', 'message', 'timestamp', 'id', 'sendAsSender', 'imagePath', 'withImage', 'filePath', 'fileThumbnail', 'withFile')]]

| Params | []() |
|--------|------|
|direction|Number|
|user Image|Text|
|title|Text|
|message|Text|
|timestamp|Text|
|id|Number|
|send As Sender|Boolean|
|image Path|Text|
|with Image|Boolean|
|file Path|Text|
|file Thumbnail|Text|
|with File|Boolean|


Swipe listener event. The direction value returns '1' for right-to-left swipes, '2' for left-to-right swipes '3' for bottom-to-top swipes and '4' for top-to-bottom swipes

### User Image Click

[[Event('Chat View', 'User Image Click', 'id', 'userImage')]]

| Params | []() |
|--------|------|
|id|Number|
|user Image|Text|


Click listener event for the user image.

## Methods

### Add Component Message

[[Method('Chat View', 'Add Component Message', False, 'userImage', 'title', 'message', 'timestamp', 'component', 'id', 'addAsSender')]]

| Params | []() |
|--------|------|
|user Image|Text|
|title|Text|
|message|Text|
|timestamp|Text|
|component|Component|
|id|Number|
|add As Sender|Boolean|


Add a new simple component message into the chat view. If you do not want a user image or title or message or timestamp, then let the field empty. Make sure that the component is VISIBLE on the screen when you try to add it here. It will be then removed automatic from the screen and only visible again in the chat view.

### Add Date Timestamp

[[Method('Chat View', 'Add Date Timestamp', False, 'date', 'textColor', 'backgroundColor', 'id')]]

| Params | []() |
|--------|------|
|date|Text|
|text Color|Number|
|background Color|Number|
|id|Number|


Add a new simple date timestamp into the chat view. You NEED to write a date, else this block will do nothing. This means the field 'date' can NOT be empty. Timestamp messages are not clickable.

### Add File Message

[[Method('Chat View', 'Add File Message', False, 'userImage', 'title', 'message', 'filePath', 'fileThumbnail', 'timestamp', 'id', 'addAsSender')]]

| Params | []() |
|--------|------|
|user Image|Text|
|title|Text|
|message|Text|
|file Path|Text|
|file Thumbnail|Text|
|timestamp|Text|
|id|Number|
|add As Sender|Boolean|


Add a new simple file message into the chat view. If you do not want a user image or title or message or timestamp, then let the field empty.

### Add Image Message

[[Method('Chat View', 'Add Image Message', False, 'userImage', 'title', 'message', 'image', 'timestamp', 'id', 'addAsSender')]]

| Params | []() |
|--------|------|
|user Image|Text|
|title|Text|
|message|Text|
|image|Text|
|timestamp|Text|
|id|Number|
|add As Sender|Boolean|


Add a new simple image message into the chat view. If you do not want a user image or title or message or timestamp, then let the field empty.

### Add Message

[[Method('Chat View', 'Add Message', False, 'userImage', 'title', 'message', 'timestamp', 'id', 'addAsSender')]]

| Params | []() |
|--------|------|
|user Image|Text|
|title|Text|
|message|Text|
|timestamp|Text|
|id|Number|
|add As Sender|Boolean|


Add a new simple message into the chat view. If you do not want a user image or title or message or timestamp, then let the field empty.

### Clear ChatView

[[Method('Chat View', 'Clear ChatView', False)]]

Removes all messages and timestamps from the chat view.

### Count Date Timestamp

[[Method('Chat View', 'Count Date Timestamp', True)]]

{>>Returns `number`<<}

Returns the number of all date timestamps. Normal messages are not included.

### Count Messages

[[Method('Chat View', 'Count Messages', True)]]

{>>Returns `number`<<}

Returns the number of all messages. 'Date Timestamp' messages are not included.

### Get Last Used Id

[[Method('Chat View', 'Get Last Used Id', True)]]

{>>Returns `number`<<}

Returns the last used id.

### Remove Message

[[Method('Chat View', 'Remove Message', False, 'id')]]

| Params | []() |
|--------|------|
|id|Number|


Remove a message or timestamp from the chat view.

### Scroll To

[[Method('Chat View', 'Scroll To', False, 'id')]]

| Params | []() |
|--------|------|
|id|Number|


Scroll to a specific message in the chat view with the given id.

### Update Message Background Color

[[Method('Chat View', 'Update Message Background Color', False, 'id', 'backgroundColor')]]

| Params | []() |
|--------|------|
|id|Number|
|background Color|Number|


Update the background color of a chat view message.

### Update Message Content

[[Method('Chat View', 'Update Message Content', False, 'id', 'text', 'textColor')]]

| Params | []() |
|--------|------|
|id|Number|
|text|Text|
|text Color|Number|


Update the message content of a chat view message.

### Update Timestamp Content

[[Method('Chat View', 'Update Timestamp Content', False, 'id', 'text', 'textColor')]]

| Params | []() |
|--------|------|
|id|Number|
|text|Text|
|text Color|Number|


Update the timestamp content of a chat view message.

### Update Title Content

[[Method('Chat View', 'Update Title Content', False, 'id', 'text', 'textColor')]]

| Params | []() |
|--------|------|
|id|Number|
|text|Text|
|text Color|Number|


Update the title content of a chat view message.

### Update User Image

[[Method('Chat View', 'Update User Image', False, 'id', 'userImage')]]

| Params | []() |
|--------|------|
|id|Number|
|user Image|Text|


Update the user image of a chat view message. The image can only be updated if there was before a old image.

## Properties

### Automatic Scroll Down

<span class="chip chip-boolean">Boolean</span> <span class="chip chip-boolean">Default: <i>True</i></span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span> 

If set to true the chat view will scroll down when a new message was send.

[[PropertyBlockGetterAndSetter('Chat View', 'Automatic Scroll Down')]]

### Background Color

<span class="chip chip-number">Number</span> <span class="chip chip-number">Default: <i>&H00000000</i></span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span> 

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

<span class="chip chip-number">Number</span> <span class="chip chip-number">Default: <i>5</i></span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Non-Visible</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span> 

 <small>Available as ^^Advanced^^ Property</small>

[[PropertyBlockGetterAndSetter('Chat View', 'Messages Corner Radius')]]

### Messages Font Size

<span class="chip chip-number">Number</span> <span class="chip chip-number">Default: <i>14.0</i></span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Non-Visible</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span> 

 <small>Available as ^^Advanced^^ Property</small>

[[PropertyBlockGetterAndSetter('Chat View', 'Messages Font Size')]]

### Receivers Background Color

<span class="chip chip-number">Number</span> <span class="chip chip-number">Default: <i>&HFFCCCCCC</i></span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span> 

Specifies the background color for receiver's messages.

[[PropertyBlockGetterAndSetter('Chat View', 'Receivers Background Color')]]

### Receivers Message Color

<span class="chip chip-number">Number</span> <span class="chip chip-number">Default: <i>&HFF000000</i></span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span> 

Specifies the color for receivers's messages.

[[PropertyBlockGetterAndSetter('Chat View', 'Receivers Message Color')]]

### Receivers Title Color

<span class="chip chip-number">Number</span> <span class="chip chip-number">Default: <i>&HFF000000</i></span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span> 

Specifies the color for receivers's title messages.

[[PropertyBlockGetterAndSetter('Chat View', 'Receivers Title Color')]]

### Receivers Typeface Message

<span class="chip chip-number">Number</span> <span class="chip chip-number">Default: <i>0</i></span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Non-Visible</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span> 

[[PropertyBlockGetterAndSetter('Chat View', 'Receivers Typeface Message')]]

### Receivers Typeface Message Import

<span class="chip chip-text">Text</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Non-Visible</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span> 

 <small>Available as ^^Advanced^^ Property</small>

[[PropertyBlockGetterAndSetter('Chat View', 'Receivers Typeface Message Import')]]

### Receivers Typeface Title

<span class="chip chip-number">Number</span> <span class="chip chip-number">Default: <i>0</i></span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Non-Visible</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span> 

[[PropertyBlockGetterAndSetter('Chat View', 'Receivers Typeface Title')]]

### Receivers Typeface Title Import

<span class="chip chip-text">Text</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Non-Visible</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span> 

 <small>Available as ^^Advanced^^ Property</small>

[[PropertyBlockGetterAndSetter('Chat View', 'Receivers Typeface Title Import')]]

### Scrollbar

<span class="chip chip-boolean">Boolean</span> <span class="chip chip-boolean">Default: <i>True</i></span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span> 

Whether to display a scrollbar.

[[PropertyBlockGetterAndSetter('Chat View', 'Scrollbar')]]

### Senders Background Color

<span class="chip chip-number">Number</span> <span class="chip chip-number">Default: <i>&HFF8BC24A</i></span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span> 

Specifies the background color for sender's messages.

[[PropertyBlockGetterAndSetter('Chat View', 'Senders Background Color')]]

### Senders Message Color

<span class="chip chip-number">Number</span> <span class="chip chip-number">Default: <i>&HFF000000</i></span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span> 

Specifies the color for sender's messages.

[[PropertyBlockGetterAndSetter('Chat View', 'Senders Message Color')]]

### Senders Title Color

<span class="chip chip-number">Number</span> <span class="chip chip-number">Default: <i>&HFF000000</i></span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span> 

Specifies the color for sender's title messages.

[[PropertyBlockGetterAndSetter('Chat View', 'Senders Title Color')]]

### Senders Typeface Message

<span class="chip chip-number">Number</span> <span class="chip chip-number">Default: <i>0</i></span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Non-Visible</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span> 

[[PropertyBlockGetterAndSetter('Chat View', 'Senders Typeface Message')]]

### Senders Typeface Message Import

<span class="chip chip-text">Text</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Non-Visible</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span> 

 <small>Available as ^^Advanced^^ Property</small>

[[PropertyBlockGetterAndSetter('Chat View', 'Senders Typeface Message Import')]]

### Senders Typeface Title

<span class="chip chip-number">Number</span> <span class="chip chip-number">Default: <i>0</i></span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Non-Visible</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span> 

[[PropertyBlockGetterAndSetter('Chat View', 'Senders Typeface Title')]]

### Senders Typeface Title Import

<span class="chip chip-text">Text</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Non-Visible</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span> 

 <small>Available as ^^Advanced^^ Property</small>

[[PropertyBlockGetterAndSetter('Chat View', 'Senders Typeface Title Import')]]

### Swipeable

<span class="chip chip-boolean">Boolean</span> <span class="chip chip-boolean">Default: <i>False</i></span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span> 

 <small>Available as ^^Advanced^^ Property</small>

If set to true you can swipe with your fingers through views.

[[PropertyBlockGetterAndSetter('Chat View', 'Swipeable')]]

### Timestamp Corner Radius

<span class="chip chip-number">Number</span> <span class="chip chip-number">Default: <i>5</i></span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Non-Visible</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span> 

 <small>Available as ^^Advanced^^ Property</small>

[[PropertyBlockGetterAndSetter('Chat View', 'Timestamp Corner Radius')]]

### Timestamp Font Size

<span class="chip chip-number">Number</span> <span class="chip chip-number">Default: <i>14.0</i></span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Non-Visible</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span> 

 <small>Available as ^^Advanced^^ Property</small>

[[PropertyBlockGetterAndSetter('Chat View', 'Timestamp Font Size')]]

### Timestamp Text Color

<span class="chip chip-number">Number</span> <span class="chip chip-number">Default: <i>&HFF000000</i></span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span> 

Specifies the color for the timestamp.

[[PropertyBlockGetterAndSetter('Chat View', 'Timestamp Text Color')]]

### Title Font Size

<span class="chip chip-number">Number</span> <span class="chip chip-number">Default: <i>14.0</i></span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Non-Visible</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span> 

 <small>Available as ^^Advanced^^ Property</small>

[[PropertyBlockGetterAndSetter('Chat View', 'Title Font Size')]]

### Visible

<span class="chip chip-boolean">Boolean</span> <span class="chip chip-boolean">Default: <i>True</i></span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span> 

Returns true iff the component is visible.

[[PropertyBlockGetterAndSetter('Chat View', 'Visible')]]

### Column

<span class="chip chip-number">Number</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Non-Visible</span> - <span class="chip chip-bd">Blocks</span> 

Column property getter method.

[[PropertyBlockGetterAndSetter('Chat View', 'Column')]]

### Height

<span class="chip chip-number">Number</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Blocks</span> 

Specifies the component's vertical height, measured in pixels.

[[PropertyBlockGetterAndSetter('Chat View', 'Height')]]

### Height Percent

<span class="chip chip-number">Number</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Blocks</span> 

Specifies the component's vertical height as a percentageof the height of its parent Component.

[[PropertyBlockGetterAndSetter('Chat View', 'Height Percent')]]

### Row

<span class="chip chip-number">Number</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Non-Visible</span> - <span class="chip chip-bd">Blocks</span> 

Row property getter method.

[[PropertyBlockGetterAndSetter('Chat View', 'Row')]]

### Width

<span class="chip chip-number">Number</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Blocks</span> 

Specifies the component's horizontal width, measured in pixels.

[[PropertyBlockGetterAndSetter('Chat View', 'Width')]]

### Width Percent

<span class="chip chip-number">Number</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Blocks</span> 

Specifies the component's horizontal width as a percentageof the Width of its parent Component.

[[PropertyBlockGetterAndSetter('Chat View', 'Width Percent')]]