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

<div class="block" ai2-block="event" not-rendered="true" value="%7B%22componentName%22:%20%22Chat%20View%22,%20%22name%22:%20%22Click%22,%20%22params%22:%20%5B%22user%20Image%22,%20%22title%22,%20%22message%22,%20%22timestamp%22,%20%22id%22,%20%22send%20As%20Sender%22,%20%22image%20Path%22,%20%22with%20Image%22,%20%22file%20Path%22,%20%22file%20Thumbnail%22,%20%22with%20File%22%5D%7D"></div>


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

<div class="block" ai2-block="event" not-rendered="true" value="%7B%22componentName%22:%20%22Chat%20View%22,%20%22name%22:%20%22Double%20Tap%20Click%22,%20%22params%22:%20%5B%22user%20Image%22,%20%22title%22,%20%22message%22,%20%22timestamp%22,%20%22id%22,%20%22send%20As%20Sender%22,%20%22image%20Path%22,%20%22with%20Image%22,%20%22file%20Path%22,%20%22file%20Thumbnail%22,%20%22with%20File%22%5D%7D"></div>


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

<div class="block" ai2-block="event" not-rendered="true" value="%7B%22componentName%22:%20%22Chat%20View%22,%20%22name%22:%20%22Long%20Click%22,%20%22params%22:%20%5B%22user%20Image%22,%20%22title%22,%20%22message%22,%20%22timestamp%22,%20%22id%22,%20%22send%20As%20Sender%22,%20%22image%20Path%22,%20%22with%20Image%22,%20%22file%20Path%22,%20%22file%20Thumbnail%22,%20%22with%20File%22%5D%7D"></div>


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

<div class="block" ai2-block="event" not-rendered="true" value="%7B%22componentName%22:%20%22Chat%20View%22,%20%22name%22:%20%22Swipe%22,%20%22params%22:%20%5B%22direction%22,%20%22user%20Image%22,%20%22title%22,%20%22message%22,%20%22timestamp%22,%20%22id%22,%20%22send%20As%20Sender%22,%20%22image%20Path%22,%20%22with%20Image%22,%20%22file%20Path%22,%20%22file%20Thumbnail%22,%20%22with%20File%22%5D%7D"></div>


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

<div class="block" ai2-block="event" not-rendered="true" value="%7B%22componentName%22:%20%22Chat%20View%22,%20%22name%22:%20%22User%20Image%20Click%22,%20%22params%22:%20%5B%22id%22,%20%22user%20Image%22%5D%7D"></div>


| Params | []() |
|--------|------|
|id|<span class="chip chip-number">Number</span>|
|user Image|<span class="chip chip-text">Text</span>|


## Methods

### Add Component Message

Add a new simple component message into the chat view. If you do not want a user image or title or message or timestamp, then let the field empty. Make sure that the component is VISIBLE on the screen when you try to add it here. It will be then removed automatic from the screen and only visible again in the chat view.

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22Chat%20View%22,%20%22name%22:%20%22Add%20Component%20Message%22,%20%22output%22:%20false,%20%22params%22:%20%5B%22user%20Image%22,%20%22title%22,%20%22message%22,%20%22timestamp%22,%20%22component%22,%20%22id%22,%20%22add%20As%20Sender%22%5D%7D"></div>


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

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22Chat%20View%22,%20%22name%22:%20%22Add%20Date%20Timestamp%22,%20%22output%22:%20false,%20%22params%22:%20%5B%22date%22,%20%22text%20Color%22,%20%22background%20Color%22,%20%22id%22%5D%7D"></div>


| Params | []() |
|--------|------|
|date|<span class="chip chip-text">Text</span>|
|text Color|<span class="chip chip-number">Number</span>|
|background Color|<span class="chip chip-number">Number</span>|
|id|<span class="chip chip-number">Number</span>|


### Add File Message

Add a new simple file message into the chat view. If you do not want a user image or title or message or timestamp, then let the field empty.

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22Chat%20View%22,%20%22name%22:%20%22Add%20File%20Message%22,%20%22output%22:%20false,%20%22params%22:%20%5B%22user%20Image%22,%20%22title%22,%20%22message%22,%20%22file%20Path%22,%20%22file%20Thumbnail%22,%20%22timestamp%22,%20%22id%22,%20%22add%20As%20Sender%22%5D%7D"></div>


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

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22Chat%20View%22,%20%22name%22:%20%22Add%20Image%20Message%22,%20%22output%22:%20false,%20%22params%22:%20%5B%22user%20Image%22,%20%22title%22,%20%22message%22,%20%22image%22,%20%22timestamp%22,%20%22id%22,%20%22add%20As%20Sender%22%5D%7D"></div>


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

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22Chat%20View%22,%20%22name%22:%20%22Add%20Message%22,%20%22output%22:%20false,%20%22params%22:%20%5B%22user%20Image%22,%20%22title%22,%20%22message%22,%20%22timestamp%22,%20%22id%22,%20%22add%20As%20Sender%22%5D%7D"></div>


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

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22Chat%20View%22,%20%22name%22:%20%22Clear%20ChatView%22,%20%22output%22:%20false,%20%22params%22:%20%5B%5D%7D"></div>


### Count Date Timestamp

<span class="chip chip-number">Returns: <i>Number</i></span> 

Returns the number of all date timestamps. Normal messages are not included.

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22Chat%20View%22,%20%22name%22:%20%22Count%20Date%20Timestamp%22,%20%22output%22:%20true,%20%22params%22:%20%5B%5D%7D"></div>


### Count Messages

<span class="chip chip-number">Returns: <i>Number</i></span> 

Returns the number of all messages. 'Date Timestamp' messages are not included.

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22Chat%20View%22,%20%22name%22:%20%22Count%20Messages%22,%20%22output%22:%20true,%20%22params%22:%20%5B%5D%7D"></div>


### Get Last Used Id

<span class="chip chip-number">Returns: <i>Number</i></span> 

Returns the last used id.

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22Chat%20View%22,%20%22name%22:%20%22Get%20Last%20Used%20Id%22,%20%22output%22:%20true,%20%22params%22:%20%5B%5D%7D"></div>


### Remove Message

Remove a message or timestamp from the chat view.

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22Chat%20View%22,%20%22name%22:%20%22Remove%20Message%22,%20%22output%22:%20false,%20%22params%22:%20%5B%22id%22%5D%7D"></div>


| Params | []() |
|--------|------|
|id|<span class="chip chip-number">Number</span>|


### Scroll To

Scroll to a specific message in the chat view with the given id.

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22Chat%20View%22,%20%22name%22:%20%22Scroll%20To%22,%20%22output%22:%20false,%20%22params%22:%20%5B%22id%22%5D%7D"></div>


| Params | []() |
|--------|------|
|id|<span class="chip chip-number">Number</span>|


### Update Message Background Color

Update the background color of a chat view message.

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22Chat%20View%22,%20%22name%22:%20%22Update%20Message%20Background%20Color%22,%20%22output%22:%20false,%20%22params%22:%20%5B%22id%22,%20%22background%20Color%22%5D%7D"></div>


| Params | []() |
|--------|------|
|id|<span class="chip chip-number">Number</span>|
|background Color|<span class="chip chip-number">Number</span>|


### Update Message Content

Update the message content of a chat view message.

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22Chat%20View%22,%20%22name%22:%20%22Update%20Message%20Content%22,%20%22output%22:%20false,%20%22params%22:%20%5B%22id%22,%20%22text%22,%20%22text%20Color%22%5D%7D"></div>


| Params | []() |
|--------|------|
|id|<span class="chip chip-number">Number</span>|
|text|<span class="chip chip-text">Text</span>|
|text Color|<span class="chip chip-number">Number</span>|


### Update Timestamp Content

Update the timestamp content of a chat view message.

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22Chat%20View%22,%20%22name%22:%20%22Update%20Timestamp%20Content%22,%20%22output%22:%20false,%20%22params%22:%20%5B%22id%22,%20%22text%22,%20%22text%20Color%22%5D%7D"></div>


| Params | []() |
|--------|------|
|id|<span class="chip chip-number">Number</span>|
|text|<span class="chip chip-text">Text</span>|
|text Color|<span class="chip chip-number">Number</span>|


### Update Title Content

Update the title content of a chat view message.

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22Chat%20View%22,%20%22name%22:%20%22Update%20Title%20Content%22,%20%22output%22:%20false,%20%22params%22:%20%5B%22id%22,%20%22text%22,%20%22text%20Color%22%5D%7D"></div>


| Params | []() |
|--------|------|
|id|<span class="chip chip-number">Number</span>|
|text|<span class="chip chip-text">Text</span>|
|text Color|<span class="chip chip-number">Number</span>|


### Update User Image

Update the user image of a chat view message. The image can only be updated if there was before a old image.

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22Chat%20View%22,%20%22name%22:%20%22Update%20User%20Image%22,%20%22output%22:%20false,%20%22params%22:%20%5B%22id%22,%20%22user%20Image%22%5D%7D"></div>


| Params | []() |
|--------|------|
|id|<span class="chip chip-number">Number</span>|
|user Image|<span class="chip chip-text">Text</span>|


## Properties

### Automatic Scroll Down

<span class="chip chip-boolean">Boolean</span> <span class="chip chip-boolean">Default: <i>True</i></span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span> 

If set to true the chat view will scroll down when a new message was send.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Chat%20View%22,%20%22name%22:%20%22Automatic%20Scroll%20Down%22,%20%22getter%22:%20true%7D"></div>
<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Chat%20View%22,%20%22name%22:%20%22Automatic%20Scroll%20Down%22,%20%22getter%22:%20false%7D"></div>


### Background Color

<span class="chip chip-color">Color</span> <span class="chip chip-color" style="background-color: #000000;">Default: <i>#00000000</i></span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span> 

Specifies the component's background color. The background color will not be visible if an Image is being displayed.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Chat%20View%22,%20%22name%22:%20%22Background%20Color%22,%20%22getter%22:%20true%7D"></div>
<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Chat%20View%22,%20%22name%22:%20%22Background%20Color%22,%20%22getter%22:%20false%7D"></div>


### Clickable

<span class="chip chip-boolean">Boolean</span> <span class="chip chip-boolean">Default: <i>False</i></span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span> 

Set the component clickable or not clickable.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Chat%20View%22,%20%22name%22:%20%22Clickable%22,%20%22getter%22:%20true%7D"></div>
<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Chat%20View%22,%20%22name%22:%20%22Clickable%22,%20%22getter%22:%20false%7D"></div>


### Double Tap

<span class="chip chip-boolean">Boolean</span> <span class="chip chip-boolean">Default: <i>False</i></span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span> 

<small>Available as ^^Advanced^^ Property</small>

Set the component enabled for double taps or not.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Chat%20View%22,%20%22name%22:%20%22Double%20Tap%22,%20%22getter%22:%20true%7D"></div>
<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Chat%20View%22,%20%22name%22:%20%22Double%20Tap%22,%20%22getter%22:%20false%7D"></div>


### Image

<span class="chip chip-text">Text</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span> 

Specifies the path of the component's image. If there is both an Image and a BackgroundColor, only the Image will be visible.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Chat%20View%22,%20%22name%22:%20%22Image%22,%20%22getter%22:%20true%7D"></div>
<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Chat%20View%22,%20%22name%22:%20%22Image%22,%20%22getter%22:%20false%7D"></div>


### Messages Corner Radius

<span class="chip chip-number">Number</span> <span class="chip chip-number">Default: <i>5</i></span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span> 

<small>Available as ^^Advanced^^ Property</small>

### Messages Font Size

<span class="chip chip-number">Number</span> <span class="chip chip-number">Default: <i>14.0</i></span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span> 

<small>Available as ^^Advanced^^ Property</small>

### Receivers Background Color

<span class="chip chip-color">Color</span> <span class="chip chip-color" style="background-color: #CCCCCC;">Default: <i>#CCCCCCFF</i></span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span> 

Specifies the background color for receiver's messages.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Chat%20View%22,%20%22name%22:%20%22Receivers%20Background%20Color%22,%20%22getter%22:%20true%7D"></div>
<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Chat%20View%22,%20%22name%22:%20%22Receivers%20Background%20Color%22,%20%22getter%22:%20false%7D"></div>


### Receivers Message Color

<span class="chip chip-color">Color</span> <span class="chip chip-color" style="background-color: #000000;">Default: <i>#000000FF</i></span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span> 

Specifies the color for receivers's messages.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Chat%20View%22,%20%22name%22:%20%22Receivers%20Message%20Color%22,%20%22getter%22:%20true%7D"></div>
<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Chat%20View%22,%20%22name%22:%20%22Receivers%20Message%20Color%22,%20%22getter%22:%20false%7D"></div>


### Receivers Title Color

<span class="chip chip-color">Color</span> <span class="chip chip-color" style="background-color: #000000;">Default: <i>#000000FF</i></span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span> 

Specifies the color for receivers's title messages.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Chat%20View%22,%20%22name%22:%20%22Receivers%20Title%20Color%22,%20%22getter%22:%20true%7D"></div>
<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Chat%20View%22,%20%22name%22:%20%22Receivers%20Title%20Color%22,%20%22getter%22:%20false%7D"></div>


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

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Chat%20View%22,%20%22name%22:%20%22Scrollbar%22,%20%22getter%22:%20true%7D"></div>
<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Chat%20View%22,%20%22name%22:%20%22Scrollbar%22,%20%22getter%22:%20false%7D"></div>


### Senders Background Color

<span class="chip chip-color">Color</span> <span class="chip chip-color" style="background-color: #8BC24A;">Default: <i>#8BC24AFF</i></span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span> 

Specifies the background color for sender's messages.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Chat%20View%22,%20%22name%22:%20%22Senders%20Background%20Color%22,%20%22getter%22:%20true%7D"></div>
<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Chat%20View%22,%20%22name%22:%20%22Senders%20Background%20Color%22,%20%22getter%22:%20false%7D"></div>


### Senders Message Color

<span class="chip chip-color">Color</span> <span class="chip chip-color" style="background-color: #000000;">Default: <i>#000000FF</i></span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span> 

Specifies the color for sender's messages.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Chat%20View%22,%20%22name%22:%20%22Senders%20Message%20Color%22,%20%22getter%22:%20true%7D"></div>
<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Chat%20View%22,%20%22name%22:%20%22Senders%20Message%20Color%22,%20%22getter%22:%20false%7D"></div>


### Senders Title Color

<span class="chip chip-color">Color</span> <span class="chip chip-color" style="background-color: #000000;">Default: <i>#000000FF</i></span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span> 

Specifies the color for sender's title messages.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Chat%20View%22,%20%22name%22:%20%22Senders%20Title%20Color%22,%20%22getter%22:%20true%7D"></div>
<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Chat%20View%22,%20%22name%22:%20%22Senders%20Title%20Color%22,%20%22getter%22:%20false%7D"></div>


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

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Chat%20View%22,%20%22name%22:%20%22Swipeable%22,%20%22getter%22:%20true%7D"></div>
<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Chat%20View%22,%20%22name%22:%20%22Swipeable%22,%20%22getter%22:%20false%7D"></div>


### Timestamp Corner Radius

<span class="chip chip-number">Number</span> <span class="chip chip-number">Default: <i>5</i></span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span> 

<small>Available as ^^Advanced^^ Property</small>

### Timestamp Font Size

<span class="chip chip-number">Number</span> <span class="chip chip-number">Default: <i>14.0</i></span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span> 

<small>Available as ^^Advanced^^ Property</small>

### Timestamp Text Color

<span class="chip chip-color">Color</span> <span class="chip chip-color" style="background-color: #000000;">Default: <i>#000000FF</i></span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span> 

Specifies the color for the timestamp.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Chat%20View%22,%20%22name%22:%20%22Timestamp%20Text%20Color%22,%20%22getter%22:%20true%7D"></div>
<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Chat%20View%22,%20%22name%22:%20%22Timestamp%20Text%20Color%22,%20%22getter%22:%20false%7D"></div>


### Title Font Size

<span class="chip chip-number">Number</span> <span class="chip chip-number">Default: <i>14.0</i></span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span> 

<small>Available as ^^Advanced^^ Property</small>

### Visible

<span class="chip chip-boolean">Boolean</span> <span class="chip chip-boolean">Default: <i>True</i></span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span> 

Returns true iff the component is visible.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Chat%20View%22,%20%22name%22:%20%22Visible%22,%20%22getter%22:%20true%7D"></div>
<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Chat%20View%22,%20%22name%22:%20%22Visible%22,%20%22getter%22:%20false%7D"></div>


### Column

<span class="chip chip-number">Number</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Non-Visible</span> - 

Column property getter method.

### Height

<span class="chip chip-number">Number</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Blocks</span> 

Specifies the component's vertical height, measured in pixels.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Chat%20View%22,%20%22name%22:%20%22Height%22,%20%22getter%22:%20true%7D"></div>
<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Chat%20View%22,%20%22name%22:%20%22Height%22,%20%22getter%22:%20false%7D"></div>


### Height Percent

<span class="chip chip-number">Number</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Blocks</span> 

Specifies the component's vertical height as a percentageof the height of its parent Component.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Chat%20View%22,%20%22name%22:%20%22Height%20Percent%22,%20%22getter%22:%20false%7D"></div>


### Row

<span class="chip chip-number">Number</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Non-Visible</span> - 

Row property getter method.

### Width

<span class="chip chip-number">Number</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Blocks</span> 

Specifies the component's horizontal width, measured in pixels.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Chat%20View%22,%20%22name%22:%20%22Width%22,%20%22getter%22:%20true%7D"></div>
<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Chat%20View%22,%20%22name%22:%20%22Width%22,%20%22getter%22:%20false%7D"></div>


### Width Percent

<span class="chip chip-number">Number</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Blocks</span> 

Specifies the component's horizontal width as a percentageof the Width of its parent Component.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Chat%20View%22,%20%22name%22:%20%22Width%20Percent%22,%20%22getter%22:%20false%7D"></div>
