# Screen

| Category | Requires | Version |
|:--------:|:-------:|:--------:|
|**Layout > General**|<span class="chip chip-any">API 21, Android 5.0 Lollipop</span>|<span class="chip chip-number">45</span>|

## Overview

Top-level component containing all other components in the program.

??? example "Permissions"
    * [android.permission.INTERNET](https://developer.android.com/reference/android/Manifest.permission.html#INTERNET)
    * [android.permission.ACCESS_NETWORK_STATE](https://developer.android.com/reference/android/Manifest.permission.html#ACCESS_NETWORK_STATE)
    * [android.permission.ACCESS_WIFI_STATE](https://developer.android.com/reference/android/Manifest.permission.html#ACCESS_WIFI_STATE)

    Screen is the top-most component in any app. All the other components are placed on a Screen.

    If you take the app as a book, the Screens can be regarded as the pages of a book and the other components as
    the various elements present on a page of a book, text, images etc.

![screen-book-analogy](/assets/images/components/screen/screen-book-analogy.png)

Screen &lt;--&gt; Book
{: .img-caption}

## Events

### Back Pressed

Device back button pressed.

<div class="block" ai2-block="event" not-rendered="true" value="%7B%22componentName%22:%20%22Screen%22,%20%22name%22:%20%22Back%20Pressed%22,%20%22param%22:%20%5B%5D%7D"></div>

### Error Occurred

Event raised when an error occurs. Only some errors will raise this condition. For those errors, the system will show a notification by default. You can use this event handler to prescribe an error behavior different than the default.

<div class="block" ai2-block="event" not-rendered="true" value="%7B%22componentName%22:%20%22Screen%22,%20%22name%22:%20%22Error%20Occurred%22,%20%22param%22:%20%5B%22component%22,%20%22function%20Name%22,%20%22error%20Number%22,%20%22message%22%5D%7D"></div>

| Params | []() |
|--------|------|
|component|<span class="chip chip-component">Component</span>|
|function Name|<span class="chip chip-text">Text</span>|
|error Number|<span class="chip chip-number">Number</span>|
|message|<span class="chip chip-text">Text</span>|

### Got Received Shared

Event to detect that a user shared content to your app throw the sharing dialog of any other app. Type stand for integer. 0 = nothing shared, 1 = audio, 2 = image, 3 = text or 4 = video

<div class="block" ai2-block="event" not-rendered="true" value="%7B%22componentName%22:%20%22Screen%22,%20%22name%22:%20%22Got%20Received%20Shared%22,%20%22param%22:%20%5B%22type%22,%20%22value%22%5D%7D"></div>

| Params | []() |
|--------|------|
|type|<span class="chip chip-number">Number</span>|
|value|<span class="chip chip-text">Text</span>|

### Initialize

Screen starting

<div class="block" ai2-block="event" not-rendered="true" value="%7B%22componentName%22:%20%22Screen%22,%20%22name%22:%20%22Initialize%22,%20%22param%22:%20%5B%5D%7D"></div>

### Keyboard Visibility Changed

Event will be invoked if the keyboard was visible or invisible. Note: This will not work if your app is in split screen or floating window mode.

<div class="block" ai2-block="event" not-rendered="true" value="%7B%22componentName%22:%20%22Screen%22,%20%22name%22:%20%22Keyboard%20Visibility%20Changed%22,%20%22param%22:%20%5B%22is%20Keyboard%20Visible%22%5D%7D"></div>

| Params | []() |
|--------|------|
|is Keyboard Visible|<span class="chip chip-boolean">Boolean</span>|

### Menu Initialize

Event to detect when the menu has loaded. Set here your blocks like TitleBarIcon or AddMenuItem.

<div class="block" ai2-block="event" not-rendered="true" value="%7B%22componentName%22:%20%22Screen%22,%20%22name%22:%20%22Menu%20Initialize%22,%20%22param%22:%20%5B%5D%7D"></div>

### Menu Item Selected

Event to detect when a menu item has been selected.

<div class="block" ai2-block="event" not-rendered="true" value="%7B%22componentName%22:%20%22Screen%22,%20%22name%22:%20%22Menu%20Item%20Selected%22,%20%22param%22:%20%5B%22menu%20Item%22%5D%7D"></div>

| Params | []() |
|--------|------|
|menu Item|<span class="chip chip-text">Text</span>|

### On App Pause

The system calls this method as the first indication that the user is leaving your activity (though it does not always mean the activity is being destroyed).

<div class="block" ai2-block="event" not-rendered="true" value="%7B%22componentName%22:%20%22Screen%22,%20%22name%22:%20%22On%20App%20Pause%22,%20%22param%22:%20%5B%5D%7D"></div>

### On App Resume

When the activity enters the Resumed state, it comes to the foreground, and then the system invokes this event.

<div class="block" ai2-block="event" not-rendered="true" value="%7B%22componentName%22:%20%22Screen%22,%20%22name%22:%20%22On%20App%20Resume%22,%20%22param%22:%20%5B%5D%7D"></div>

### On App Stop

When your activity is no longer visible to the user, it has entered the Stopped state, and the system invokes this event.

<div class="block" ai2-block="event" not-rendered="true" value="%7B%22componentName%22:%20%22Screen%22,%20%22name%22:%20%22On%20App%20Stop%22,%20%22param%22:%20%5B%5D%7D"></div>

### Other Screen Closed

Event raised when another screen has closed and control has returned to this screen.

<div class="block" ai2-block="event" not-rendered="true" value="%7B%22componentName%22:%20%22Screen%22,%20%22name%22:%20%22Other%20Screen%20Closed%22,%20%22param%22:%20%5B%22other%20Screen%20Name%22,%20%22result%22%5D%7D"></div>

| Params | []() |
|--------|------|
|other Screen Name|<span class="chip chip-text">Text</span>|
|result|<span class="chip chip-any">Any</span>|

### Permission Denied

Event to handle when the app user has denied a needed permission.

<div class="block" ai2-block="event" not-rendered="true" value="%7B%22componentName%22:%20%22Screen%22,%20%22name%22:%20%22Permission%20Denied%22,%20%22param%22:%20%5B%22component%22,%20%22function%20Name%22,%20%22permission%20Name%22%5D%7D"></div>

| Params | []() |
|--------|------|
|component|<span class="chip chip-component">Component</span>|
|function Name|<span class="chip chip-text">Text</span>|
|permission Name|<span class="chip chip-text">Text</span>|

### Permission Granted

Event to handle when the app user has granted a needed permission. This event is only run when permission isgranted in response to the AskForPermission method.

<div class="block" ai2-block="event" not-rendered="true" value="%7B%22componentName%22:%20%22Screen%22,%20%22name%22:%20%22Permission%20Granted%22,%20%22param%22:%20%5B%22permission%20Name%22%5D%7D"></div>

| Params | []() |
|--------|------|
|permission Name|<span class="chip chip-text">Text</span>|

### Screen Orientation Changed

Screen orientation changed

<div class="block" ai2-block="event" not-rendered="true" value="%7B%22componentName%22:%20%22Screen%22,%20%22name%22:%20%22Screen%20Orientation%20Changed%22,%20%22param%22:%20%5B%5D%7D"></div>

### Side Menu Closed

Event will be invoked if the side menu was closed.

<div class="block" ai2-block="event" not-rendered="true" value="%7B%22componentName%22:%20%22Screen%22,%20%22name%22:%20%22Side%20Menu%20Closed%22,%20%22param%22:%20%5B%5D%7D"></div>

### Side Menu Opened

Event will be invoked if the side menu was opened.

<div class="block" ai2-block="event" not-rendered="true" value="%7B%22componentName%22:%20%22Screen%22,%20%22name%22:%20%22Side%20Menu%20Opened%22,%20%22param%22:%20%5B%5D%7D"></div>

### Title Bar Back Button Clicked

Event to detect when a menu item has been selected.

<div class="block" ai2-block="event" not-rendered="true" value="%7B%22componentName%22:%20%22Screen%22,%20%22name%22:%20%22Title%20Bar%20Back%20Button%20Clicked%22,%20%22param%22:%20%5B%5D%7D"></div>

### Title Bar Icon Selected

The event returns the 'icon' or 'name' of the selected icon.

<div class="block" ai2-block="event" not-rendered="true" value="%7B%22componentName%22:%20%22Screen%22,%20%22name%22:%20%22Title%20Bar%20Icon%20Selected%22,%20%22param%22:%20%5B%22icon%22,%20%22name%22%5D%7D"></div>

| Params | []() |
|--------|------|
|icon|<span class="chip chip-text">Text</span>|
|name|<span class="chip chip-text">Text</span>|

## Methods

### Add Menu Item

Add a new item to the menu. Use the 'make a list' block.

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22Screen%22,%20%22name%22:%20%22Add%20Menu%20Item%22,%20%22output%22:%20false,%20%22param%22:%20%5B%22menu%20Item%22%5D%7D"></div>

| Params | []() |
|--------|------|
|menu Item|<span class="chip chip-list">List</span>|

### Add Menu Item With Icon

Add a new item with a icon on the left side to the menu. This function does not use the make a list block. If you want more items with icon then use this block again.

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22Screen%22,%20%22name%22:%20%22Add%20Menu%20Item%20With%20Icon%22,%20%22output%22:%20false,%20%22param%22:%20%5B%22menu%20Item%22,%20%22menu%20Icon%22%5D%7D"></div>

| Params | []() |
|--------|------|
|menu Item|<span class="chip chip-text">Text</span>|
|menu Icon|<span class="chip chip-text">Text</span>|

### Add Title Bar Icon

Add a new action icon to the TitleBar. You will see a toast message on a long click with your choosen name. Add this block to the "MenuInitialize" event.

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22Screen%22,%20%22name%22:%20%22Add%20Title%20Bar%20Icon%22,%20%22output%22:%20false,%20%22param%22:%20%5B%22icon%22,%20%22name%22%5D%7D"></div>

| Params | []() |
|--------|------|
|icon|<span class="chip chip-text">Text</span>|
|name|<span class="chip chip-text">Text</span>|

### Are Permissions Granted

<span class="chip chip-boolean">Returns: <i>Boolean</i></span>

Returns true if ALL needed app permissions were granted, else false.

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22Screen%22,%20%22name%22:%20%22Are%20Permissions%20Granted%22,%20%22output%22:%20true,%20%22param%22:%20%5B%5D%7D"></div>

### Ask For Permission

Ask the user to grant access to a dangerous permission.

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22Screen%22,%20%22name%22:%20%22Ask%20For%20Permission%22,%20%22output%22:%20false,%20%22param%22:%20%5B%22permission%20Name%22%5D%7D"></div>

| Params | []() |
|--------|------|
|permission Name|<span class="chip chip-text">Text</span>|

### Can Write System Settings

<span class="chip chip-boolean">Returns: <i>Boolean</i></span>

Returns true if the app can write system settings, else it returns false. It will return true automatic for devices with android version below 6 (API 23).

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22Screen%22,%20%22name%22:%20%22Can%20Write%20System%20Settings%22,%20%22output%22:%20true,%20%22param%22:%20%5B%5D%7D"></div>

### Hide Keyboard

Hide the keyboard.

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22Screen%22,%20%22name%22:%20%22Hide%20Keyboard%22,%20%22output%22:%20false,%20%22param%22:%20%5B%5D%7D"></div>

### Lock Side Menu

Use this block to lock the side menu. This means the user can not open the side menu until the side menu unlock block is used.

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22Screen%22,%20%22name%22:%20%22Lock%20Side%20Menu%22,%20%22output%22:%20false,%20%22param%22:%20%5B%5D%7D"></div>

### Move Task To Back

Move task to back. That means it will minimize your current app.

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22Screen%22,%20%22name%22:%20%22Move%20Task%20To%20Back%22,%20%22output%22:%20false,%20%22param%22:%20%5B%5D%7D"></div>

### Open App Settings

Opens the settings screen of the app. Useful if 'Are Permissions Granted' has returned false.

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22Screen%22,%20%22name%22:%20%22Open%20App%20Settings%22,%20%22output%22:%20false,%20%22param%22:%20%5B%5D%7D"></div>

### Open System Write Settings

Opens the app's system settings page. This works only for devices with android 6+.

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22Screen%22,%20%22name%22:%20%22Open%20System%20Write%20Settings%22,%20%22output%22:%20false,%20%22param%22:%20%5B%5D%7D"></div>

### Remove Side Menu

Remove a first created side menu. This block will be usefull if you need to update a side menu dynamically. You can use this block too to test a side menu in the companion. Add then this block above of the 'Side Menu' block.

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22Screen%22,%20%22name%22:%20%22Remove%20Side%20Menu%22,%20%22output%22:%20false,%20%22param%22:%20%5B%5D%7D"></div>

### Remove Title Bar Icons

Remove all added action icons from the TitleBar.

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22Screen%22,%20%22name%22:%20%22Remove%20Title%20Bar%20Icons%22,%20%22output%22:%20false,%20%22param%22:%20%5B%5D%7D"></div>

### Reset Options Menu

Reset the menu back to its default

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22Screen%22,%20%22name%22:%20%22Reset%20Options%20Menu%22,%20%22output%22:%20false,%20%22param%22:%20%5B%5D%7D"></div>

### Show About Application

Show the dialog which shows when pressing the "About This Application" button in the menu.

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22Screen%22,%20%22name%22:%20%22Show%20About%20Application%22,%20%22output%22:%20false,%20%22param%22:%20%5B%5D%7D"></div>

### Show Keyboard

Show the keyboard

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22Screen%22,%20%22name%22:%20%22Show%20Keyboard%22,%20%22output%22:%20false,%20%22param%22:%20%5B%5D%7D"></div>

### Side Menu

Create a Side Menu. Set to "layout" your layout that will be then your side menu. Use as example a vertical arrangement. Your choosen layout will be then removed from the screen and only visible in the side menu."Information": This block works on companion only if you add a side menu on button click.Don't add it in companion on "screen initialize event". Else the companion will crash.Do NOT use this block with the Side Menu Layout component

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22Screen%22,%20%22name%22:%20%22Side%20Menu%22,%20%22output%22:%20false,%20%22param%22:%20%5B%22layout%22%5D%7D"></div>

| Params | []() |
|--------|------|
|layout|<span class="chip chip-component">Component</span>|

### Side Menu Close

If you had set your side menu then you can use this block to close it as example with a button click.

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22Screen%22,%20%22name%22:%20%22Side%20Menu%20Close%22,%20%22output%22:%20false,%20%22param%22:%20%5B%5D%7D"></div>

### Side Menu Open

If you had set your side menu then you can use this block to open it as example with a button click.

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22Screen%22,%20%22name%22:%20%22Side%20Menu%20Open%22,%20%22output%22:%20false,%20%22param%22:%20%5B%5D%7D"></div>

### Task Description

Sets information describing the task with this activity for presentation inside the Recents System UI. You will see the settings if the device API is &gt;= 21 and you minimize the app.

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22Screen%22,%20%22name%22:%20%22Task%20Description%22,%20%22output%22:%20false,%20%22param%22:%20%5B%22text%22,%20%22color%22%5D%7D"></div>

| Params | []() |
|--------|------|
|text|<span class="chip chip-text">Text</span>|
|color|<span class="chip chip-number">Number</span>|

### Unlock Side Menu

Use this block to unlock the side menu. This means the user can now open again the side menu.

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22Screen%22,%20%22name%22:%20%22Unlock%20Side%20Menu%22,%20%22output%22:%20false,%20%22param%22:%20%5B%5D%7D"></div>

### Version Code

<span class="chip chip-number">Returns: <i>Number</i></span>

This block will returns the version code

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22Screen%22,%20%22name%22:%20%22Version%20Code%22,%20%22output%22:%20true,%20%22param%22:%20%5B%5D%7D"></div>

### Version Name

<span class="chip chip-text">Returns: <i>Text</i></span>

This block will returns the version name

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22Screen%22,%20%22name%22:%20%22Version%20Name%22,%20%22output%22:%20true,%20%22param%22:%20%5B%5D%7D"></div>

## Properties

### About Screen

<span style="user-select: none; white-space:pre-wrap;"><span class="chip chip-text">Text</span> :heavy_minus_sign: <span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span>  - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span></span>

Information about the screen. It appears when "About this Application" is selected from the system menu. Use it to inform people about your app. In multiple screen apps, each screen has its own AboutScreen info.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Screen%22,%20%22name%22:%20%22About%20Screen%22,%20%22getter%22:%20true%7D"></div>
<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Screen%22,%20%22name%22:%20%22About%20Screen%22,%20%22getter%22:%20false%7D"></div>

### About Screen Background Color

<span style="user-select: none; white-space:pre-wrap;"><span class="chip chip-color">Color</span> <span class="chip chip-color">Default: <i>#444444FF</i>&nbsp;<span style="width: 15px; height: 15px; margin: auto; display: inline-block; border: 1px solid white; vertical-align: middle; border-radius: 3px; background-color: #444444;"></span></span> :heavy_minus_sign: <span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span>  - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span></span>

Property for AboutScreenBackgroundColor

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Screen%22,%20%22name%22:%20%22About%20Screen%20Background%20Color%22,%20%22getter%22:%20true%7D"></div>
<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Screen%22,%20%22name%22:%20%22About%20Screen%20Background%20Color%22,%20%22getter%22:%20false%7D"></div>

### About Screen Light Theme

<span style="user-select: none; white-space:pre-wrap;"><span class="chip chip-boolean">Boolean</span> <span class="chip chip-boolean">Default: <i>False</i></span> :heavy_minus_sign: <span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span>  - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span></span>

Property for AboutScreenLightTheme

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Screen%22,%20%22name%22:%20%22About%20Screen%20Light%20Theme%22,%20%22getter%22:%20true%7D"></div>
<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Screen%22,%20%22name%22:%20%22About%20Screen%20Light%20Theme%22,%20%22getter%22:%20false%7D"></div>

### About Screen Title

<span style="user-select: none; white-space:pre-wrap;"><span class="chip chip-text">Text</span> <span class="chip chip-text">Default: <i>About this application</i></span> :heavy_minus_sign: <span class="chip chip-rw">Write</span>  - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span></span>

Define the title of the about application option.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Screen%22,%20%22name%22:%20%22About%20Screen%20Title%22,%20%22getter%22:%20false%7D"></div>

### Accent Color

<span style="user-select: none; white-space:pre-wrap;"><span class="chip chip-color">Color</span> <span class="chip chip-color">Default: <i>#FF4081FF</i>&nbsp;<span style="width: 15px; height: 15px; margin: auto; display: inline-block; border: 1px solid white; vertical-align: middle; border-radius: 3px; background-color: #FF4081;"></span></span> :heavy_minus_sign: <span class="chip chip-rw">Write</span>  - <span class="chip chip-bd">Designer</span></span>

This is the accent color used for highlights and other user interface accents.

### Accepted Shared File Types

<span style="user-select: none; white-space:pre-wrap;"><span class="chip chip-text">Text</span> :heavy_minus_sign: <span class="chip chip-rw">Write</span>  - <span class="chip chip-bd">Designer</span></span>

Property for ReceiveSharedText

### Align Horizontal

<span style="user-select: none; white-space:pre-wrap;"><span class="chip chip-number">Number</span> <span class="chip chip-number">Default: <i>1</i></span> :heavy_minus_sign: <span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span>  - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span></span>

A number that encodes how contents of the screen are aligned horizontally. The choices are: 1 = left aligned, 3 = horizontally centered, 2 = right aligned.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Screen%22,%20%22name%22:%20%22Align%20Horizontal%22,%20%22getter%22:%20true%7D"></div>
<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Screen%22,%20%22name%22:%20%22Align%20Horizontal%22,%20%22getter%22:%20false%7D"></div>

### Align Vertical

<span style="user-select: none; white-space:pre-wrap;"><span class="chip chip-number">Number</span> <span class="chip chip-number">Default: <i>1</i></span> :heavy_minus_sign: <span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span>  - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span></span>

A number that encodes how the contents of the arrangement are aligned vertically. The choices are: 1 = aligned at the top, 2 = vertically centered, 3 = aligned at the bottom. Vertical alignment has no effect if the screen is scrollable.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Screen%22,%20%22name%22:%20%22Align%20Vertical%22,%20%22getter%22:%20true%7D"></div>
<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Screen%22,%20%22name%22:%20%22Align%20Vertical%22,%20%22getter%22:%20false%7D"></div>

### App ID

<span style="user-select: none; white-space:pre-wrap;"><span class="chip chip-text">Text</span> :heavy_minus_sign: <span class="chip chip-rw">Write</span>  - <span class="chip chip-bd">Designer</span></span>

The unique APP_ID for the user (which is generated by GWT and stored in Datastore)

### App Name

<span style="user-select: none; white-space:pre-wrap;"><span class="chip chip-text">Text</span> :heavy_minus_sign: <span class="chip chip-rw">Write</span>  - <span class="chip chip-bd">Designer</span></span>

This is the display name of the installed application in the phone.If the AppName is blank, it will be set to the name of the project when the project is built.

### Background Color

<span style="user-select: none; white-space:pre-wrap;"><span class="chip chip-color">Color</span> <span class="chip chip-color">Default: <i>#FFFFFFFF</i>&nbsp;<span style="width: 15px; height: 15px; margin: auto; display: inline-block; border: 1px solid white; vertical-align: middle; border-radius: 3px; background-color: #FFFFFF;"></span></span> :heavy_minus_sign: <span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span>  - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span></span>

BackgroundColor property getter method.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Screen%22,%20%22name%22:%20%22Background%20Color%22,%20%22getter%22:%20true%7D"></div>
<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Screen%22,%20%22name%22:%20%22Background%20Color%22,%20%22getter%22:%20false%7D"></div>

### Background Image

<span style="user-select: none; white-space:pre-wrap;"><span class="chip chip-text">Text</span> :heavy_minus_sign: <span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span>  - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span></span>

The screen background image.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Screen%22,%20%22name%22:%20%22Background%20Image%22,%20%22getter%22:%20true%7D"></div>
<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Screen%22,%20%22name%22:%20%22Background%20Image%22,%20%22getter%22:%20false%7D"></div>

### Close Screen Animation

<span style="user-select: none; white-space:pre-wrap;"><span class="chip chip-text">Text</span> <span class="chip chip-text">Default: <i>default</i></span> :heavy_minus_sign: <span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span>  - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span></span>

The animation for closing current screen and returning to the previous screen. Valid options are default, fade, zoom, slidehorizontal, slidevertical, and none

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Screen%22,%20%22name%22:%20%22Close%20Screen%20Animation%22,%20%22getter%22:%20true%7D"></div>
<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Screen%22,%20%22name%22:%20%22Close%20Screen%20Animation%22,%20%22getter%22:%20false%7D"></div>

### Default File Scope

<span style="user-select: none; white-space:pre-wrap;"><span class="chip chip-unknown">Com.google.appinventor.components.common.filescopeenum</span> <span class="chip chip-unknown">Default: <i>App</i></span> :heavy_minus_sign: <span class="chip chip-rw">Write</span>  - <span class="chip chip-bd">Designer</span></span>

Specifies the default scope used when components access files. Note that the

### Drawer Arrow Icon Color

<span style="user-select: none; white-space:pre-wrap;"><span class="chip chip-number">Number</span> :heavy_minus_sign: <span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span>  - <span class="chip chip-bd">Blocks</span></span>

Set the drawer arrow icon color.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Screen%22,%20%22name%22:%20%22Drawer%20Arrow%20Icon%20Color%22,%20%22getter%22:%20true%7D"></div>
<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Screen%22,%20%22name%22:%20%22Drawer%20Arrow%20Icon%20Color%22,%20%22getter%22:%20false%7D"></div>

### Google Cloud Project Number

<span style="user-select: none; white-space:pre-wrap;"><span class="chip chip-text">Text</span> :heavy_minus_sign: <span class="chip chip-rw">Write</span>  - <span class="chip chip-bd">Designer</span></span>

Specifies the Google Cloud Project Number used for Play Integrity API

### Height

<span style="user-select: none; white-space:pre-wrap;"><span class="chip chip-number">Number</span> :heavy_minus_sign: <span class="chip chip-rw">Read</span>  - <span class="chip chip-bd">Blocks</span></span>

Screen height (y-size).

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Screen%22,%20%22name%22:%20%22Height%22,%20%22getter%22:%20true%7D"></div>

### High Quality Images

<small>Available as ^^Advanced^^ Property</small>

<span style="user-select: none; white-space:pre-wrap;"><span class="chip chip-boolean">Boolean</span> <span class="chip chip-boolean">Default: <i>False</i></span> :heavy_minus_sign: <span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span>  - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span></span>

If set to true, pictures will be loaded in high quality.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Screen%22,%20%22name%22:%20%22High%20Quality%20Images%22,%20%22getter%22:%20true%7D"></div>
<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Screen%22,%20%22name%22:%20%22High%20Quality%20Images%22,%20%22getter%22:%20false%7D"></div>

### Icon

<span style="user-select: none; white-space:pre-wrap;"><span class="chip chip-text">Text</span> :heavy_minus_sign: <span class="chip chip-rw">Write</span>  - <span class="chip chip-bd">Designer</span></span>

Specifies the name of the application icon.

### Is Companion

<span style="user-select: none; white-space:pre-wrap;"><span class="chip chip-boolean">Boolean</span> :heavy_minus_sign: <span class="chip chip-rw">Read</span>  - <span class="chip chip-bd">Blocks</span></span>

This block will return true, if you are running your project current in the companion application. Else it will return false.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Screen%22,%20%22name%22:%20%22Is%20Companion%22,%20%22getter%22:%20true%7D"></div>

### is Keyboard Visible

<span style="user-select: none; white-space:pre-wrap;"><span class="chip chip-boolean">Boolean</span> :heavy_minus_sign: <span class="chip chip-rw">Read</span>  - <span class="chip chip-bd">Blocks</span></span>

Returns the status of the keyboard. If the keyboard is visible then the result is true.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Screen%22,%20%22name%22:%20%22is%20Keyboard%20Visible%22,%20%22getter%22:%20true%7D"></div>

### is Side Menu Added

<span style="user-select: none; white-space:pre-wrap;"><span class="chip chip-boolean">Boolean</span> :heavy_minus_sign: <span class="chip chip-rw">Read</span>  - <span class="chip chip-bd">Blocks</span></span>

Returns true if a side menu is added to the screen.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Screen%22,%20%22name%22:%20%22is%20Side%20Menu%20Added%22,%20%22getter%22:%20true%7D"></div>

### is Side Menu Open

<span style="user-select: none; white-space:pre-wrap;"><span class="chip chip-boolean">Boolean</span> :heavy_minus_sign: <span class="chip chip-rw">Read</span>  - <span class="chip chip-bd">Blocks</span></span>

Returns true if a side menu is current open. Else it will return false.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Screen%22,%20%22name%22:%20%22is%20Side%20Menu%20Open%22,%20%22getter%22:%20true%7D"></div>

### Keep Screen On

<small>Available as ^^Advanced^^ Property</small>

<span style="user-select: none; white-space:pre-wrap;"><span class="chip chip-boolean">Boolean</span> <span class="chip chip-boolean">Default: <i>False</i></span> :heavy_minus_sign: <span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span>  - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span></span>

Keep the device's screen turned on and bright.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Screen%22,%20%22name%22:%20%22Keep%20Screen%20On%22,%20%22getter%22:%20true%7D"></div>
<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Screen%22,%20%22name%22:%20%22Keep%20Screen%20On%22,%20%22getter%22:%20false%7D"></div>

### Minimum SDK Level

<small>Available as ^^Advanced^^ Property</small>

<span style="user-select: none; white-space:pre-wrap;"><span class="chip chip-number">Number</span> <span class="chip chip-number">Default: <i>21</i></span> :heavy_minus_sign: <span class="chip chip-rw">Write</span>  - <span class="chip chip-bd">Designer</span></span>

Property for MinSdk

### Navigation Bar Color

<span style="user-select: none; white-space:pre-wrap;"><span class="chip chip-color">Color</span> <span class="chip chip-color">Default: <i>#000000FF</i>&nbsp;<span style="width: 15px; height: 15px; margin: auto; display: inline-block; border: 1px solid white; vertical-align: middle; border-radius: 3px; background-color: #000000;"></span></span> :heavy_minus_sign: <span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span>  - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span></span>

Set navigation bar color. This will work starting from API Level 21 (Android Lollipop)

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Screen%22,%20%22name%22:%20%22Navigation%20Bar%20Color%22,%20%22getter%22:%20true%7D"></div>
<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Screen%22,%20%22name%22:%20%22Navigation%20Bar%20Color%22,%20%22getter%22:%20false%7D"></div>

### Navigation Bar Light Icons

<span style="user-select: none; white-space:pre-wrap;"><span class="chip chip-boolean">Boolean</span> :heavy_minus_sign: <span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span>  - <span class="chip chip-bd">Blocks</span></span>

This option tells the system to use dark navigation bar icons, useful for lighter colored navigation bars. Works only for devices with API &gt;= 26.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Screen%22,%20%22name%22:%20%22Navigation%20Bar%20Light%20Icons%22,%20%22getter%22:%20true%7D"></div>
<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Screen%22,%20%22name%22:%20%22Navigation%20Bar%20Light%20Icons%22,%20%22getter%22:%20false%7D"></div>

### Navigation Icon Color

<span style="user-select: none; white-space:pre-wrap;"><span class="chip chip-number">Number</span> :heavy_minus_sign: <span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span>  - <span class="chip chip-bd">Blocks</span></span>

Set the navigation icon color.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Screen%22,%20%22name%22:%20%22Navigation%20Icon%20Color%22,%20%22getter%22:%20true%7D"></div>
<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Screen%22,%20%22name%22:%20%22Navigation%20Icon%20Color%22,%20%22getter%22:%20false%7D"></div>

### OneSignal App ID

<span style="user-select: none; white-space:pre-wrap;"><span class="chip chip-text">Text</span> :heavy_minus_sign: <span class="chip chip-rw">Write</span>  - <span class="chip chip-bd">Designer</span></span>

Property for OneSignalAppId

### Open Screen Animation

<span style="user-select: none; white-space:pre-wrap;"><span class="chip chip-text">Text</span> <span class="chip chip-text">Default: <i>default</i></span> :heavy_minus_sign: <span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span>  - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span></span>

The animation for switching to another screen. Valid options are default, fade, zoom, slidehorizontal, slidevertical, and none

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Screen%22,%20%22name%22:%20%22Open%20Screen%20Animation%22,%20%22getter%22:%20true%7D"></div>
<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Screen%22,%20%22name%22:%20%22Open%20Screen%20Animation%22,%20%22getter%22:%20false%7D"></div>

### Options Menu Icon Color

<span style="user-select: none; white-space:pre-wrap;"><span class="chip chip-number">Number</span> :heavy_minus_sign: <span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span>  - <span class="chip chip-bd">Blocks</span></span>

Set the options menu icon color.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Screen%22,%20%22name%22:%20%22Options%20Menu%20Icon%20Color%22,%20%22getter%22:%20true%7D"></div>
<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Screen%22,%20%22name%22:%20%22Options%20Menu%20Icon%20Color%22,%20%22getter%22:%20false%7D"></div>

### Package Name

<small>Available as ^^Advanced^^ Property</small>

<span style="user-select: none; white-space:pre-wrap;"><span class="chip chip-text">Text</span> :heavy_minus_sign: <span class="chip chip-rw">Write</span>  - <span class="chip chip-bd">Designer</span></span>

Set a custom PackageName for the app. Min 8 chars, max 35 chars, min 3 words, max 5 words, no special chars, only ASCII a-z and dots for separators

### Primary Color

<span style="user-select: none; white-space:pre-wrap;"><span class="chip chip-color">Color</span> <span class="chip chip-color">Default: <i>#3F51B5FF</i>&nbsp;<span style="width: 15px; height: 15px; margin: auto; display: inline-block; border: 1px solid white; vertical-align: middle; border-radius: 3px; background-color: #3F51B5;"></span></span> :heavy_minus_sign: <span class="chip chip-rw">Write</span>  - <span class="chip chip-bd">Designer</span></span>

This is the primary color used for Material UI elements, such as the ActionBar.

### Primary Color Dark

<span style="user-select: none; white-space:pre-wrap;"><span class="chip chip-color">Color</span> <span class="chip chip-color">Default: <i>#303F9FFF</i>&nbsp;<span style="width: 15px; height: 15px; margin: auto; display: inline-block; border: 1px solid white; vertical-align: middle; border-radius: 3px; background-color: #303F9F;"></span></span> :heavy_minus_sign: <span class="chip chip-rw">Write</span>  - <span class="chip chip-bd">Designer</span></span>

This is the primary color used for darker elements in Material UI.

### RTL Support

<small>Available as ^^Advanced^^ Property</small>

<span style="user-select: none; white-space:pre-wrap;"><span class="chip chip-boolean">Boolean</span> <span class="chip chip-boolean">Default: <i>False</i></span> :heavy_minus_sign: <span class="chip chip-rw">Write</span>  - <span class="chip chip-bd">Designer</span></span>

Property for RTLSupport

### Screen Orientation

<span style="user-select: none; white-space:pre-wrap;"><span class="chip chip-text">Text</span> <span class="chip chip-text">Default: <i>unspecified</i></span> :heavy_minus_sign: <span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span>  - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span></span>

The requested screen orientation, specified as a text value. Commonly used values are landscape, portrait, sensor, user and unspecified. See the Android developer documentation for ActivityInfo.Screen_Orientation for the complete list of possible settings.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Screen%22,%20%22name%22:%20%22Screen%20Orientation%22,%20%22getter%22:%20true%7D"></div>
<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Screen%22,%20%22name%22:%20%22Screen%20Orientation%22,%20%22getter%22:%20false%7D"></div>

### Scrollable

<span style="user-select: none; white-space:pre-wrap;"><span class="chip chip-boolean">Boolean</span> <span class="chip chip-boolean">Default: <i>False</i></span> :heavy_minus_sign: <span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span>  - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span></span>

When checked, there will be a vertical scrollbar on the screen, and the height of the application can exceed the physical height of the device. When unchecked, the application height is constrained to the height of the device.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Screen%22,%20%22name%22:%20%22Scrollable%22,%20%22getter%22:%20true%7D"></div>
<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Screen%22,%20%22name%22:%20%22Scrollable%22,%20%22getter%22:%20false%7D"></div>

### Show Lists As Json

<small>Available as ^^Advanced^^ Property</small>

<span style="user-select: none; white-space:pre-wrap;"><span class="chip chip-boolean">Boolean</span> <span class="chip chip-boolean">Default: <i>False</i></span> :heavy_minus_sign: <span class="chip chip-rw">Write</span>  - <span class="chip chip-bd">Designer</span></span>

If false, lists will be converted to strings using Lisp notation, i.e., as symbols separated by spaces, e.g., (a 1 b2 (c d). If true, lists will appear as in Json or Python, e.g. ["a", 1, "b", 2, ["c", "d"]]. This property appears only in Screen 1, and the value for Screen 1 determines the behavior for all screens. The property defaults to "false" meaning that the App Inventor programmer must explicitly set it to "true" if JSON/Python syntax is desired. At some point in the future we will alter the system so that new projects are created with this property set to "true" by default. Existing projects will not be impacted. The App Inventor programmer can also set it back to "false" in newer projects if desired.

### Show Navigation Bar

<small>Available as ^^Experimental^^ Property</small>

<span style="user-select: none; white-space:pre-wrap;"><span class="chip chip-boolean">Boolean</span> <span class="chip chip-boolean">Default: <i>True</i></span> :heavy_minus_sign: <span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span>  - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span></span>

Show/Hide Navigation Bar

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Screen%22,%20%22name%22:%20%22Show%20Navigation%20Bar%22,%20%22getter%22:%20true%7D"></div>
<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Screen%22,%20%22name%22:%20%22Show%20Navigation%20Bar%22,%20%22getter%22:%20false%7D"></div>

### Show Options Menu

<span style="user-select: none; white-space:pre-wrap;"><span class="chip chip-boolean">Boolean</span> <span class="chip chip-boolean">Default: <i>True</i></span> :heavy_minus_sign: <span class="chip chip-rw">Write</span>  - <span class="chip chip-bd">Designer</span></span>

Property for ShowOptionsMenu

### Show Status Bar

<span style="user-select: none; white-space:pre-wrap;"><span class="chip chip-boolean">Boolean</span> <span class="chip chip-boolean">Default: <i>True</i></span> :heavy_minus_sign: <span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span>  - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span></span>

The status bar is the topmost bar on the screen. This property reports whether the status bar is visible.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Screen%22,%20%22name%22:%20%22Show%20Status%20Bar%22,%20%22getter%22:%20true%7D"></div>
<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Screen%22,%20%22name%22:%20%22Show%20Status%20Bar%22,%20%22getter%22:%20false%7D"></div>

### Show Title Bar Back Button

<span style="user-select: none; white-space:pre-wrap;"><span class="chip chip-boolean">Boolean</span> :heavy_minus_sign: <span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span>  - <span class="chip chip-bd">Blocks</span></span>

If true it will show in the TitleBar a back button only if no side menu was added. If a side menu was added it will remove the ‘hamburger’-menu icon but the side menu can still be opened.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Screen%22,%20%22name%22:%20%22Show%20Title%20Bar%20Back%20Button%22,%20%22getter%22:%20true%7D"></div>
<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Screen%22,%20%22name%22:%20%22Show%20Title%20Bar%20Back%20Button%22,%20%22getter%22:%20false%7D"></div>

### Sizing

<span style="user-select: none; white-space:pre-wrap;"><span class="chip chip-text">Text</span> <span class="chip chip-text">Default: <i>Responsive</i></span> :heavy_minus_sign: <span class="chip chip-rw">Write</span>  - <span class="chip chip-bd">Designer</span></span>

If set to fixed, screen layouts will be created for a single fixed-size screen and autoscaled. If set to responsive, screen layouts will use the actual resolution of the device. See the documentation on responsive design in App Inventor for more information. This property appears on Screen1 only and controls the sizing for all screens in the app.

### Splash Image

<small>Available as ^^Advanced^^ Property</small>

<span style="user-select: none; white-space:pre-wrap;"><span class="chip chip-text">Text</span> :heavy_minus_sign: <span class="chip chip-rw">Write</span>  - <span class="chip chip-bd">Designer</span></span>

Property for SplashIcon

### Splash Screen

<small>Available as ^^Advanced^^ Property</small>

<span style="user-select: none; white-space:pre-wrap;"><span class="chip chip-boolean">Boolean</span> <span class="chip chip-boolean">Default: <i>True</i></span> :heavy_minus_sign: <span class="chip chip-rw">Write</span>  - <span class="chip chip-bd">Designer</span></span>

If set to true the user will see a splash screen while the app is loading the content.

### Status Bar Color

<span style="user-select: none; white-space:pre-wrap;"><span class="chip chip-number">Number</span> :heavy_minus_sign: <span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span>  - <span class="chip chip-bd">Blocks</span></span>

Set status bar color. This will work starting from API Level 21 (Android Lollipop

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Screen%22,%20%22name%22:%20%22Status%20Bar%20Color%22,%20%22getter%22:%20true%7D"></div>
<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Screen%22,%20%22name%22:%20%22Status%20Bar%20Color%22,%20%22getter%22:%20false%7D"></div>

### Status Bar Light Icons

<span style="user-select: none; white-space:pre-wrap;"><span class="chip chip-boolean">Boolean</span> :heavy_minus_sign: <span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span>  - <span class="chip chip-bd">Blocks</span></span>

This option tells the system to use dark statusbar icons, useful for lighter colored status bars. Works only for devices with API &gt;= 23.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Screen%22,%20%22name%22:%20%22Status%20Bar%20Light%20Icons%22,%20%22getter%22:%20true%7D"></div>
<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Screen%22,%20%22name%22:%20%22Status%20Bar%20Light%20Icons%22,%20%22getter%22:%20false%7D"></div>

### Theme

<span style="user-select: none; white-space:pre-wrap;"><span class="chip chip-text">Text</span> <span class="chip chip-text">Default: <i>AppTheme</i></span> :heavy_minus_sign: <span class="chip chip-rw">Write</span>  - <span class="chip chip-bd">Designer</span></span>

Sets the theme used by the application.

### Title

<span style="user-select: none; white-space:pre-wrap;"><span class="chip chip-text">Text</span> :heavy_minus_sign: <span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span>  - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span></span>

The caption for the form, which apears in the title bar

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Screen%22,%20%22name%22:%20%22Title%22,%20%22getter%22:%20true%7D"></div>
<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Screen%22,%20%22name%22:%20%22Title%22,%20%22getter%22:%20false%7D"></div>

### Title Bar Color

<span style="user-select: none; white-space:pre-wrap;"><span class="chip chip-number">Number</span> :heavy_minus_sign: <span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span>  - <span class="chip chip-bd">Blocks</span></span>

Set title bar color

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Screen%22,%20%22name%22:%20%22Title%20Bar%20Color%22,%20%22getter%22:%20true%7D"></div>
<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Screen%22,%20%22name%22:%20%22Title%20Bar%20Color%22,%20%22getter%22:%20false%7D"></div>

### Title Bar Font Typeface

<span style="user-select: none; white-space:pre-wrap;"><span class="chip chip-number">Number</span> <span class="chip chip-number">Default: <i>0</i></span> :heavy_minus_sign: <span class="chip chip-rw">Write</span>  - <span class="chip chip-bd">Designer</span></span>

Property for TitleBarFontTypeface

### Title Bar Subtitle

<span style="user-select: none; white-space:pre-wrap;"><span class="chip chip-text">Text</span> :heavy_minus_sign: <span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span>  - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span></span>

Set the TitleBar's subtitle.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Screen%22,%20%22name%22:%20%22Title%20Bar%20Subtitle%22,%20%22getter%22:%20true%7D"></div>
<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Screen%22,%20%22name%22:%20%22Title%20Bar%20Subtitle%22,%20%22getter%22:%20false%7D"></div>

### Title Bar Text Color

<span style="user-select: none; white-space:pre-wrap;"><span class="chip chip-number">Number</span> :heavy_minus_sign: <span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span>  - <span class="chip chip-bd">Blocks</span></span>

Set a custom color for the TitleBar text.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Screen%22,%20%22name%22:%20%22Title%20Bar%20Text%20Color%22,%20%22getter%22:%20true%7D"></div>
<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Screen%22,%20%22name%22:%20%22Title%20Bar%20Text%20Color%22,%20%22getter%22:%20false%7D"></div>

### Title Bar Typeface Import

<small>Available as ^^Advanced^^ Property</small>

<span style="user-select: none; white-space:pre-wrap;"><span class="chip chip-text">Text</span> :heavy_minus_sign: <span class="chip chip-rw">Write</span>  - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span></span>

Set a custom font.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Screen%22,%20%22name%22:%20%22Title%20Bar%20Typeface%20Import%22,%20%22getter%22:%20false%7D"></div>

### Title Visible

<span style="user-select: none; white-space:pre-wrap;"><span class="chip chip-boolean">Boolean</span> <span class="chip chip-boolean">Default: <i>True</i></span> :heavy_minus_sign: <span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span>  - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span></span>

The title bar is the top gray bar on the screen. This property reports whether the title bar is visible.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Screen%22,%20%22name%22:%20%22Title%20Visible%22,%20%22getter%22:%20true%7D"></div>
<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Screen%22,%20%22name%22:%20%22Title%20Visible%22,%20%22getter%22:%20false%7D"></div>

### Tutorial URL

<span style="user-select: none; white-space:pre-wrap;"><span class="chip chip-text">Text</span> :heavy_minus_sign: <span class="chip chip-rw">Write</span>  - <span class="chip chip-bd">Designer</span></span>

A URL to use to populate the Tutorial Sidebar while editing a project. Used as a teaching aid.

### Version Code

<span style="user-select: none; white-space:pre-wrap;"><span class="chip chip-number">Number</span> <span class="chip chip-number">Default: <i>1</i></span> :heavy_minus_sign: <span class="chip chip-rw">Write</span>  - <span class="chip chip-bd">Designer</span></span>

An integer value which must be incremented each time a new Android Application Package File (APK) is created for the Google Play Store.

### Version Name

<span style="user-select: none; white-space:pre-wrap;"><span class="chip chip-text">Text</span> <span class="chip chip-text">Default: <i>1.0</i></span> :heavy_minus_sign: <span class="chip chip-rw">Write</span>  - <span class="chip chip-bd">Designer</span></span>

A string which can be changed to allow Google Play Store users to distinguish between different versions of the App.

### Width

<span style="user-select: none; white-space:pre-wrap;"><span class="chip chip-number">Number</span> :heavy_minus_sign: <span class="chip chip-rw">Read</span>  - <span class="chip chip-bd">Blocks</span></span>

Screen width (x-size).

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Screen%22,%20%22name%22:%20%22Width%22,%20%22getter%22:%20true%7D"></div>
