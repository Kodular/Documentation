# Form

| Category | Requires | Version |
|:--------:|:-------:|:--------:|
|**Layout > General**|<span class="chip chip-any">API 19, Android 4.4 - 4.4.4 KitKat</span>|<span class="chip chip-number">42</span>|

## Overview

Top-level component containing all other components in the program.

??? example "Permissions"
    * [android.permission.INTERNET](https://developer.android.com/reference/android/Manifest.permission.html#INTERNET)
    * [android.permission.ACCESS_NETWORK_STATE](https://developer.android.com/reference/android/Manifest.permission.html#ACCESS_NETWORK_STATE)
    * [android.permission.ACCESS_WIFI_STATE](https://developer.android.com/reference/android/Manifest.permission.html#ACCESS_WIFI_STATE)


## Events

### Back Pressed

Device back button pressed.

<div class="block" ai2-block="event" not-rendered="true" value="%7B%22componentName%22:%20%22Form%22,%20%22name%22:%20%22Back%20Pressed%22,%20%22params%22:%20%5B%5D%7D"></div>


### Error Occurred

Event raised when an error occurs. Only some errors will raise this condition. For those errors, the system will show a notification by default. You can use this event handler to prescribe an error behavior different than the default.

<div class="block" ai2-block="event" not-rendered="true" value="%7B%22componentName%22:%20%22Form%22,%20%22name%22:%20%22Error%20Occurred%22,%20%22params%22:%20%5B%22component%22,%20%22function%20Name%22,%20%22error%20Number%22,%20%22message%22%5D%7D"></div>

| Params | []() |
|--------|------|
|component|<span class="chip chip-component">Component</span>|
|function Name|<span class="chip chip-text">Text</span>|
|error Number|<span class="chip chip-number">Number</span>|
|message|<span class="chip chip-text">Text</span>|


### Got Received Shared

Event to detect that a user shared content to your app throw the sharing dialog of any other app. Type stand for integer. 0 = nothing shared, 1 = audio, 2 = image, 3 = text or 4 = video

<div class="block" ai2-block="event" not-rendered="true" value="%7B%22componentName%22:%20%22Form%22,%20%22name%22:%20%22Got%20Received%20Shared%22,%20%22params%22:%20%5B%22type%22,%20%22value%22%5D%7D"></div>

| Params | []() |
|--------|------|
|type|<span class="chip chip-number">Number</span>|
|value|<span class="chip chip-text">Text</span>|


### Initialize

Screen starting

<div class="block" ai2-block="event" not-rendered="true" value="%7B%22componentName%22:%20%22Form%22,%20%22name%22:%20%22Initialize%22,%20%22params%22:%20%5B%5D%7D"></div>


### Keyboard Visibility Changed

Event will be invoked if the keyboard was visible or invisible.

<div class="block" ai2-block="event" not-rendered="true" value="%7B%22componentName%22:%20%22Form%22,%20%22name%22:%20%22Keyboard%20Visibility%20Changed%22,%20%22params%22:%20%5B%22is%20Keyboard%20Visible%22%5D%7D"></div>

| Params | []() |
|--------|------|
|is Keyboard Visible|<span class="chip chip-boolean">Boolean</span>|


### Menu Initialize

Event to detect when the menu has loaded. Set here your blocks like TitleBarIcon or AddMenuItem.

<div class="block" ai2-block="event" not-rendered="true" value="%7B%22componentName%22:%20%22Form%22,%20%22name%22:%20%22Menu%20Initialize%22,%20%22params%22:%20%5B%5D%7D"></div>


### Menu Item Selected

Event to detect when a menu item has been selected.

<div class="block" ai2-block="event" not-rendered="true" value="%7B%22componentName%22:%20%22Form%22,%20%22name%22:%20%22Menu%20Item%20Selected%22,%20%22params%22:%20%5B%22menu%20Item%22%5D%7D"></div>

| Params | []() |
|--------|------|
|menu Item|<span class="chip chip-text">Text</span>|


### On App Pause

The system calls this method as the first indication that the user is leaving your activity (though it does not always mean the activity is being destroyed).

<div class="block" ai2-block="event" not-rendered="true" value="%7B%22componentName%22:%20%22Form%22,%20%22name%22:%20%22On%20App%20Pause%22,%20%22params%22:%20%5B%5D%7D"></div>


### On App Resume

When the activity enters the Resumed state, it comes to the foreground, and then the system invokes this event.

<div class="block" ai2-block="event" not-rendered="true" value="%7B%22componentName%22:%20%22Form%22,%20%22name%22:%20%22On%20App%20Resume%22,%20%22params%22:%20%5B%5D%7D"></div>


### On App Stop

When your activity is no longer visible to the user, it has entered the Stopped state, and the system invokes this event.

<div class="block" ai2-block="event" not-rendered="true" value="%7B%22componentName%22:%20%22Form%22,%20%22name%22:%20%22On%20App%20Stop%22,%20%22params%22:%20%5B%5D%7D"></div>


### Other Screen Closed

Event raised when another screen has closed and control has returned to this screen.

<div class="block" ai2-block="event" not-rendered="true" value="%7B%22componentName%22:%20%22Form%22,%20%22name%22:%20%22Other%20Screen%20Closed%22,%20%22params%22:%20%5B%22other%20Screen%20Name%22,%20%22result%22%5D%7D"></div>

| Params | []() |
|--------|------|
|other Screen Name|<span class="chip chip-text">Text</span>|
|result|<span class="chip chip-any">Any</span>|


### Permission Denied

Event to handle when the app user has denied a needed permission.

<div class="block" ai2-block="event" not-rendered="true" value="%7B%22componentName%22:%20%22Form%22,%20%22name%22:%20%22Permission%20Denied%22,%20%22params%22:%20%5B%22component%22,%20%22function%20Name%22,%20%22permission%20Name%22%5D%7D"></div>

| Params | []() |
|--------|------|
|component|<span class="chip chip-component">Component</span>|
|function Name|<span class="chip chip-text">Text</span>|
|permission Name|<span class="chip chip-text">Text</span>|


### Permission Granted

Event to handle when the app user has granted a needed permission. This event is only run when permission isgranted in response to the AskForPermission method.

<div class="block" ai2-block="event" not-rendered="true" value="%7B%22componentName%22:%20%22Form%22,%20%22name%22:%20%22Permission%20Granted%22,%20%22params%22:%20%5B%22permission%20Name%22%5D%7D"></div>

| Params | []() |
|--------|------|
|permission Name|<span class="chip chip-text">Text</span>|


### Screen Orientation Changed

Screen orientation changed

<div class="block" ai2-block="event" not-rendered="true" value="%7B%22componentName%22:%20%22Form%22,%20%22name%22:%20%22Screen%20Orientation%20Changed%22,%20%22params%22:%20%5B%5D%7D"></div>


### Side Menu Closed

Event will be invoked if the side menu was closed.

<div class="block" ai2-block="event" not-rendered="true" value="%7B%22componentName%22:%20%22Form%22,%20%22name%22:%20%22Side%20Menu%20Closed%22,%20%22params%22:%20%5B%5D%7D"></div>


### Side Menu Opened

Event will be invoked if the side menu was opened.

<div class="block" ai2-block="event" not-rendered="true" value="%7B%22componentName%22:%20%22Form%22,%20%22name%22:%20%22Side%20Menu%20Opened%22,%20%22params%22:%20%5B%5D%7D"></div>


### Title Bar Icon Selected

The event returns the 'icon' or 'name' of the selected icon.

<div class="block" ai2-block="event" not-rendered="true" value="%7B%22componentName%22:%20%22Form%22,%20%22name%22:%20%22Title%20Bar%20Icon%20Selected%22,%20%22params%22:%20%5B%22icon%22,%20%22name%22%5D%7D"></div>

| Params | []() |
|--------|------|
|icon|<span class="chip chip-text">Text</span>|
|name|<span class="chip chip-text">Text</span>|


### Title Bar Back Button Clicked

Event to detect when a menu item has been selected.

<div class="block" ai2-block="event" not-rendered="true" value="%7B%22componentName%22:%20%22Form%22,%20%22name%22:%20%22Title%20Bar%20Back%20Button%20Clicked%22,%20%22params%22:%20%5B%5D%7D"></div>


## Methods

### Add Menu Item

Add a new item to the menu. Use the 'make a list' block.

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22Form%22,%20%22name%22:%20%22Add%20Menu%20Item%22,%20%22output%22:%20false,%20%22params%22:%20%5B%22menu%20Item%22%5D%7D"></div>


| Params | []() |
|--------|------|
|menu Item|<span class="chip chip-list">List</span>|


### Add Menu Item With Icon

Add a new item with a icon on the left side to the menu. This function does not use the make a list block. If you want more items with icon then use this block again.

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22Form%22,%20%22name%22:%20%22Add%20Menu%20Item%20With%20Icon%22,%20%22output%22:%20false,%20%22params%22:%20%5B%22menu%20Item%22,%20%22menu%20Icon%22%5D%7D"></div>


| Params | []() |
|--------|------|
|menu Item|<span class="chip chip-text">Text</span>|
|menu Icon|<span class="chip chip-text">Text</span>|


### Add Title Bar Icon

Add a new action icon to the TitleBar. You will see a toast message on a long click with your choosen name. Add this block to the "MenuInitialize" event.

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22Form%22,%20%22name%22:%20%22Add%20Title%20Bar%20Icon%22,%20%22output%22:%20false,%20%22params%22:%20%5B%22icon%22,%20%22name%22%5D%7D"></div>


| Params | []() |
|--------|------|
|icon|<span class="chip chip-text">Text</span>|
|name|<span class="chip chip-text">Text</span>|


### Are Permissions Granted

<span class="chip chip-boolean">Returns: <i>Boolean</i></span> 

Returns true if ALL needed app permissions were granted, else false.

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22Form%22,%20%22name%22:%20%22Are%20Permissions%20Granted%22,%20%22output%22:%20true,%20%22params%22:%20%5B%5D%7D"></div>


### Ask For Permission

Ask the user to grant access to a dangerous permission.

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22Form%22,%20%22name%22:%20%22Ask%20For%20Permission%22,%20%22output%22:%20false,%20%22params%22:%20%5B%22permission%20Name%22%5D%7D"></div>


| Params | []() |
|--------|------|
|permission Name|<span class="chip chip-text">Text</span>|


### Can Write System Settings

<span class="chip chip-boolean">Returns: <i>Boolean</i></span> 

Returns true if the app can write system settings, else it returns false. It will return true automatic for devices with android version below 6 (API 23).

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22Form%22,%20%22name%22:%20%22Can%20Write%20System%20Settings%22,%20%22output%22:%20true,%20%22params%22:%20%5B%5D%7D"></div>


### Hide Keyboard

Hide the keyboard.

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22Form%22,%20%22name%22:%20%22Hide%20Keyboard%22,%20%22output%22:%20false,%20%22params%22:%20%5B%5D%7D"></div>


### Lock Side Menu

Use this block to lock the side menu. This means the user can not open the side menu until the side menu unlock block is used.

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22Form%22,%20%22name%22:%20%22Lock%20Side%20Menu%22,%20%22output%22:%20false,%20%22params%22:%20%5B%5D%7D"></div>


### Move Task To Back

Move task to back. That means it will minimize your current app.

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22Form%22,%20%22name%22:%20%22Move%20Task%20To%20Back%22,%20%22output%22:%20false,%20%22params%22:%20%5B%5D%7D"></div>


### Open App Settings

Opens the settings screen of the app. Useful if 'Are Permissions Granted' has returned false.

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22Form%22,%20%22name%22:%20%22Open%20App%20Settings%22,%20%22output%22:%20false,%20%22params%22:%20%5B%5D%7D"></div>


### Open System Write Settings

Opens the app's system settings page. This works only for devices with android 6+.

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22Form%22,%20%22name%22:%20%22Open%20System%20Write%20Settings%22,%20%22output%22:%20false,%20%22params%22:%20%5B%5D%7D"></div>


### Remove Side Menu

Remove a first created side menu. This block will be usefull if you need to update a side menu dynamically. You can use this block too to test a side menu in the companion. Add then this block above of the 'Side Menu' block.

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22Form%22,%20%22name%22:%20%22Remove%20Side%20Menu%22,%20%22output%22:%20false,%20%22params%22:%20%5B%5D%7D"></div>


### Remove Title Bar Icons

Remove all added action icons from the TitleBar.

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22Form%22,%20%22name%22:%20%22Remove%20Title%20Bar%20Icons%22,%20%22output%22:%20false,%20%22params%22:%20%5B%5D%7D"></div>


### Reset Options Menu

Reset the menu back to its default

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22Form%22,%20%22name%22:%20%22Reset%20Options%20Menu%22,%20%22output%22:%20false,%20%22params%22:%20%5B%5D%7D"></div>


### Show About Application

Show the dialog which shows when pressing the "About This Application" button in the menu.

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22Form%22,%20%22name%22:%20%22Show%20About%20Application%22,%20%22output%22:%20false,%20%22params%22:%20%5B%5D%7D"></div>


### Show Keyboard

Show the keyboard

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22Form%22,%20%22name%22:%20%22Show%20Keyboard%22,%20%22output%22:%20false,%20%22params%22:%20%5B%5D%7D"></div>


### Side Menu

Create a Side Menu. Set to "layout" your layout that will be then your side menu. Use as example a vertical arrangement. Your choosen layout will be then removed from the screen and only visible in the side menu."Information": This block works on companion only if you add a side menu on button click.Don’t add it in companion on "screen initialize event". Else the companion will crash.Do NOT use this block with the Side Menu Layout component

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22Form%22,%20%22name%22:%20%22Side%20Menu%22,%20%22output%22:%20false,%20%22params%22:%20%5B%22layout%22%5D%7D"></div>


| Params | []() |
|--------|------|
|layout|<span class="chip chip-component">Component</span>|


### Side Menu Close

If you had set your side menu then you can use this block to close it as example with a button click.

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22Form%22,%20%22name%22:%20%22Side%20Menu%20Close%22,%20%22output%22:%20false,%20%22params%22:%20%5B%5D%7D"></div>


### Side Menu Open

If you had set your side menu then you can use this block to open it as example with a button click.

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22Form%22,%20%22name%22:%20%22Side%20Menu%20Open%22,%20%22output%22:%20false,%20%22params%22:%20%5B%5D%7D"></div>


### Task Description

Sets information describing the task with this activity for presentation inside the Recents System UI. You will see the settings if the device API is &gt;= 21 and you minimize the app.

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22Form%22,%20%22name%22:%20%22Task%20Description%22,%20%22output%22:%20false,%20%22params%22:%20%5B%22text%22,%20%22color%22%5D%7D"></div>


| Params | []() |
|--------|------|
|text|<span class="chip chip-text">Text</span>|
|color|<span class="chip chip-number">Number</span>|


### Unlock Side Menu

Use this block to unlock the side menu. This means the user can now open again the side menu.

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22Form%22,%20%22name%22:%20%22Unlock%20Side%20Menu%22,%20%22output%22:%20false,%20%22params%22:%20%5B%5D%7D"></div>


### Version Code

<span class="chip chip-number">Returns: <i>Number</i></span> 

This block will returns the version code

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22Form%22,%20%22name%22:%20%22Version%20Code%22,%20%22output%22:%20true,%20%22params%22:%20%5B%5D%7D"></div>


### Version Name

<span class="chip chip-text">Returns: <i>Text</i></span> 

This block will returns the version name

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22Form%22,%20%22name%22:%20%22Version%20Name%22,%20%22output%22:%20true,%20%22params%22:%20%5B%5D%7D"></div>


## Properties

### About Screen

<span class="chip chip-text">Text</span><span style="user-select: none;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span class="chip chip-rw">Read</span><span style="user-select: none;">&nbsp;</span><span class="chip chip-rw">Write</span><span style="user-select: none;">&nbsp;</span>-<span style="user-select: none;">&nbsp;</span><span class="chip chip-bd">Designer</span><span style="user-select: none;">&nbsp;</span><span class="chip chip-bd">Blocks</span><span style="user-select: none;">&nbsp;</span>

Information about the screen. It appears when "About this Application" is selected from the system menu. Use it to inform people about your app. In multiple screen apps, each screen has its own AboutScreen info.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Form%22,%20%22name%22:%20%22About%20Screen%22,%20%22getter%22:%20true%7D"></div>
<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Form%22,%20%22name%22:%20%22About%20Screen%22,%20%22getter%22:%20false%7D"></div>


### About Screen Background Color

<span class="chip chip-color">Color</span><span style="user-select: none;">&nbsp;</span><span class="chip chip-color" style="background-color: #444444;">Default: <i>#444444FF</i></span><span style="user-select: none;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span class="chip chip-rw">Read</span><span style="user-select: none;">&nbsp;</span><span class="chip chip-rw">Write</span><span style="user-select: none;">&nbsp;</span>-<span style="user-select: none;">&nbsp;</span><span class="chip chip-bd">Designer</span><span style="user-select: none;">&nbsp;</span><span class="chip chip-bd">Blocks</span><span style="user-select: none;">&nbsp;</span>

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Form%22,%20%22name%22:%20%22About%20Screen%20Background%20Color%22,%20%22getter%22:%20true%7D"></div>
<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Form%22,%20%22name%22:%20%22About%20Screen%20Background%20Color%22,%20%22getter%22:%20false%7D"></div>


### About Screen Light Theme

<span class="chip chip-boolean">Boolean</span><span style="user-select: none;">&nbsp;</span><span class="chip chip-boolean">Default: <i>False</i></span><span style="user-select: none;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span class="chip chip-rw">Read</span><span style="user-select: none;">&nbsp;</span><span class="chip chip-rw">Write</span><span style="user-select: none;">&nbsp;</span>-<span style="user-select: none;">&nbsp;</span><span class="chip chip-bd">Designer</span><span style="user-select: none;">&nbsp;</span><span class="chip chip-bd">Blocks</span><span style="user-select: none;">&nbsp;</span>

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Form%22,%20%22name%22:%20%22About%20Screen%20Light%20Theme%22,%20%22getter%22:%20true%7D"></div>
<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Form%22,%20%22name%22:%20%22About%20Screen%20Light%20Theme%22,%20%22getter%22:%20false%7D"></div>


### About Screen Title

<span class="chip chip-text">Text</span><span style="user-select: none;">&nbsp;</span><span class="chip chip-text">Default: <i>About this application</i></span><span style="user-select: none;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span class="chip chip-rw">Write</span><span style="user-select: none;">&nbsp;</span>-<span style="user-select: none;">&nbsp;</span><span class="chip chip-bd">Designer</span><span style="user-select: none;">&nbsp;</span><span class="chip chip-bd">Blocks</span><span style="user-select: none;">&nbsp;</span>

Define the title of the about application option.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Form%22,%20%22name%22:%20%22About%20Screen%20Title%22,%20%22getter%22:%20false%7D"></div>


### Accent Color

<span class="chip chip-color">Color</span><span style="user-select: none;">&nbsp;</span><span class="chip chip-color" style="background-color: #FF4081;">Default: <i>#FF4081FF</i></span><span style="user-select: none;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span class="chip chip-rw">Write</span><span style="user-select: none;">&nbsp;</span>-<span style="user-select: none;">&nbsp;</span><span class="chip chip-bd">Designer</span><span style="user-select: none;">&nbsp;</span>

This is the accent color used for highlights and other user interface accents.


### Align Horizontal

<span class="chip chip-number">Number</span><span style="user-select: none;">&nbsp;</span><span class="chip chip-number">Default: <i>1</i></span><span style="user-select: none;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span class="chip chip-rw">Read</span><span style="user-select: none;">&nbsp;</span><span class="chip chip-rw">Write</span><span style="user-select: none;">&nbsp;</span>-<span style="user-select: none;">&nbsp;</span><span class="chip chip-bd">Designer</span><span style="user-select: none;">&nbsp;</span><span class="chip chip-bd">Blocks</span><span style="user-select: none;">&nbsp;</span>

A number that encodes how contents of the screen are aligned horizontally. The choices are: 1 = left aligned, 2 = horizontally centered, 3 = right aligned.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Form%22,%20%22name%22:%20%22Align%20Horizontal%22,%20%22getter%22:%20true%7D"></div>
<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Form%22,%20%22name%22:%20%22Align%20Horizontal%22,%20%22getter%22:%20false%7D"></div>


### Align Vertical

<span class="chip chip-number">Number</span><span style="user-select: none;">&nbsp;</span><span class="chip chip-number">Default: <i>1</i></span><span style="user-select: none;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span class="chip chip-rw">Read</span><span style="user-select: none;">&nbsp;</span><span class="chip chip-rw">Write</span><span style="user-select: none;">&nbsp;</span>-<span style="user-select: none;">&nbsp;</span><span class="chip chip-bd">Designer</span><span style="user-select: none;">&nbsp;</span><span class="chip chip-bd">Blocks</span><span style="user-select: none;">&nbsp;</span>

A number that encodes how the contents of the arrangement are aligned vertically. The choices are: 1 = aligned at the top, 2 = vertically centered, 3 = aligned at the bottom. Vertical alignment has no effect if the screen is scrollable.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Form%22,%20%22name%22:%20%22Align%20Vertical%22,%20%22getter%22:%20true%7D"></div>
<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Form%22,%20%22name%22:%20%22Align%20Vertical%22,%20%22getter%22:%20false%7D"></div>


### App ID

<span class="chip chip-text">Text</span><span style="user-select: none;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span class="chip chip-rw">Write</span><span style="user-select: none;">&nbsp;</span>-<span style="user-select: none;">&nbsp;</span><span class="chip chip-bd">Designer</span><span style="user-select: none;">&nbsp;</span>

The unique APP_ID for the user (which is generated by GWT and stored in Datastore)


### App Name

<span class="chip chip-text">Text</span><span style="user-select: none;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span class="chip chip-rw">Write</span><span style="user-select: none;">&nbsp;</span>-<span style="user-select: none;">&nbsp;</span><span class="chip chip-bd">Designer</span><span style="user-select: none;">&nbsp;</span>

This is the display name of the installed application in the phone.If the AppName is blank, it will be set to the name of the project when the project is built.


### Background Color

<span class="chip chip-color">Color</span><span style="user-select: none;">&nbsp;</span><span class="chip chip-color" style="background-color: #FFFFFF;">Default: <i>#FFFFFFFF</i></span><span style="user-select: none;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span class="chip chip-rw">Read</span><span style="user-select: none;">&nbsp;</span><span class="chip chip-rw">Write</span><span style="user-select: none;">&nbsp;</span>-<span style="user-select: none;">&nbsp;</span><span class="chip chip-bd">Designer</span><span style="user-select: none;">&nbsp;</span><span class="chip chip-bd">Blocks</span><span style="user-select: none;">&nbsp;</span>

BackgroundColor property getter method.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Form%22,%20%22name%22:%20%22Background%20Color%22,%20%22getter%22:%20true%7D"></div>
<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Form%22,%20%22name%22:%20%22Background%20Color%22,%20%22getter%22:%20false%7D"></div>


### Background Image

<span class="chip chip-text">Text</span><span style="user-select: none;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span class="chip chip-rw">Read</span><span style="user-select: none;">&nbsp;</span><span class="chip chip-rw">Write</span><span style="user-select: none;">&nbsp;</span>-<span style="user-select: none;">&nbsp;</span><span class="chip chip-bd">Designer</span><span style="user-select: none;">&nbsp;</span><span class="chip chip-bd">Blocks</span><span style="user-select: none;">&nbsp;</span>

The screen background image.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Form%22,%20%22name%22:%20%22Background%20Image%22,%20%22getter%22:%20true%7D"></div>
<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Form%22,%20%22name%22:%20%22Background%20Image%22,%20%22getter%22:%20false%7D"></div>


### Close Screen Animation

<span class="chip chip-text">Text</span><span style="user-select: none;">&nbsp;</span><span class="chip chip-text">Default: <i>default</i></span><span style="user-select: none;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span class="chip chip-rw">Read</span><span style="user-select: none;">&nbsp;</span><span class="chip chip-rw">Write</span><span style="user-select: none;">&nbsp;</span>-<span style="user-select: none;">&nbsp;</span><span class="chip chip-bd">Designer</span><span style="user-select: none;">&nbsp;</span><span class="chip chip-bd">Blocks</span><span style="user-select: none;">&nbsp;</span>

The animation for closing current screen and returning to the previous screen. Valid options are default, fade, zoom, slidehorizontal, slidevertical, and none

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Form%22,%20%22name%22:%20%22Close%20Screen%20Animation%22,%20%22getter%22:%20true%7D"></div>
<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Form%22,%20%22name%22:%20%22Close%20Screen%20Animation%22,%20%22getter%22:%20false%7D"></div>


### High Quality Images

<span class="chip chip-boolean">Boolean</span><span style="user-select: none;">&nbsp;</span><span class="chip chip-boolean">Default: <i>False</i></span><span style="user-select: none;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span class="chip chip-rw">Read</span><span style="user-select: none;">&nbsp;</span><span class="chip chip-rw">Write</span><span style="user-select: none;">&nbsp;</span>-<span style="user-select: none;">&nbsp;</span><span class="chip chip-bd">Designer</span><span style="user-select: none;">&nbsp;</span><span class="chip chip-bd">Blocks</span><span style="user-select: none;">&nbsp;</span>

<small>Available as ^^Advanced^^ Property</small>

If set to true, pictures will be loaded in high quality.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Form%22,%20%22name%22:%20%22High%20Quality%20Images%22,%20%22getter%22:%20true%7D"></div>
<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Form%22,%20%22name%22:%20%22High%20Quality%20Images%22,%20%22getter%22:%20false%7D"></div>


### Icon

<span class="chip chip-text">Text</span><span style="user-select: none;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span class="chip chip-rw">Write</span><span style="user-select: none;">&nbsp;</span>-<span style="user-select: none;">&nbsp;</span><span class="chip chip-bd">Designer</span><span style="user-select: none;">&nbsp;</span>

Specifies the name of the application icon.


### Keep Screen On

<span class="chip chip-boolean">Boolean</span><span style="user-select: none;">&nbsp;</span><span class="chip chip-boolean">Default: <i>False</i></span><span style="user-select: none;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span class="chip chip-rw">Read</span><span style="user-select: none;">&nbsp;</span><span class="chip chip-rw">Write</span><span style="user-select: none;">&nbsp;</span>-<span style="user-select: none;">&nbsp;</span><span class="chip chip-bd">Designer</span><span style="user-select: none;">&nbsp;</span><span class="chip chip-bd">Blocks</span><span style="user-select: none;">&nbsp;</span>

<small>Available as ^^Advanced^^ Property</small>

Keep the device's screen turned on and bright.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Form%22,%20%22name%22:%20%22Keep%20Screen%20On%22,%20%22getter%22:%20true%7D"></div>
<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Form%22,%20%22name%22:%20%22Keep%20Screen%20On%22,%20%22getter%22:%20false%7D"></div>


### Min SDK (Min. Android Version)

<span class="chip chip-number">Number</span><span style="user-select: none;">&nbsp;</span><span class="chip chip-number">Default: <i>19</i></span><span style="user-select: none;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span class="chip chip-rw">Write</span><span style="user-select: none;">&nbsp;</span>-<span style="user-select: none;">&nbsp;</span><span class="chip chip-bd">Designer</span><span style="user-select: none;">&nbsp;</span>

<small>Available as ^^Advanced^^ Property</small>


### Navigation Bar Color

<span class="chip chip-color">Color</span><span style="user-select: none;">&nbsp;</span><span class="chip chip-color" style="background-color: #000000;">Default: <i>#000000FF</i></span><span style="user-select: none;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span class="chip chip-rw">Read</span><span style="user-select: none;">&nbsp;</span><span class="chip chip-rw">Write</span><span style="user-select: none;">&nbsp;</span>-<span style="user-select: none;">&nbsp;</span><span class="chip chip-bd">Designer</span><span style="user-select: none;">&nbsp;</span><span class="chip chip-bd">Blocks</span><span style="user-select: none;">&nbsp;</span>

Set navigation bar color. This will work starting from API Level 21 (Android Lollipop)

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Form%22,%20%22name%22:%20%22Navigation%20Bar%20Color%22,%20%22getter%22:%20true%7D"></div>
<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Form%22,%20%22name%22:%20%22Navigation%20Bar%20Color%22,%20%22getter%22:%20false%7D"></div>


### Open Screen Animation

<span class="chip chip-text">Text</span><span style="user-select: none;">&nbsp;</span><span class="chip chip-text">Default: <i>default</i></span><span style="user-select: none;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span class="chip chip-rw">Read</span><span style="user-select: none;">&nbsp;</span><span class="chip chip-rw">Write</span><span style="user-select: none;">&nbsp;</span>-<span style="user-select: none;">&nbsp;</span><span class="chip chip-bd">Designer</span><span style="user-select: none;">&nbsp;</span><span class="chip chip-bd">Blocks</span><span style="user-select: none;">&nbsp;</span>

The animation for switching to another screen. Valid options are default, fade, zoom, slidehorizontal, slidevertical, and none

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Form%22,%20%22name%22:%20%22Open%20Screen%20Animation%22,%20%22getter%22:%20true%7D"></div>
<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Form%22,%20%22name%22:%20%22Open%20Screen%20Animation%22,%20%22getter%22:%20false%7D"></div>


### Package Name

<span class="chip chip-text">Text</span><span style="user-select: none;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span class="chip chip-rw">Write</span><span style="user-select: none;">&nbsp;</span>-<span style="user-select: none;">&nbsp;</span><span class="chip chip-bd">Designer</span><span style="user-select: none;">&nbsp;</span>

<small>Available as ^^Advanced^^ Property</small>

Set a custom PackageName for the app


### Primary Color / Title Bar

<span class="chip chip-color">Color</span><span style="user-select: none;">&nbsp;</span><span class="chip chip-color" style="background-color: #3F51B5;">Default: <i>#3F51B5FF</i></span><span style="user-select: none;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span class="chip chip-rw">Write</span><span style="user-select: none;">&nbsp;</span>-<span style="user-select: none;">&nbsp;</span><span class="chip chip-bd">Designer</span><span style="user-select: none;">&nbsp;</span>

This is the primary color used for Material UI elements, such as the ActionBar.


### Primary Color Dark / Status Bar

<span class="chip chip-color">Color</span><span style="user-select: none;">&nbsp;</span><span class="chip chip-color" style="background-color: #303F9F;">Default: <i>#303F9FFF</i></span><span style="user-select: none;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span class="chip chip-rw">Write</span><span style="user-select: none;">&nbsp;</span>-<span style="user-select: none;">&nbsp;</span><span class="chip chip-bd">Designer</span><span style="user-select: none;">&nbsp;</span>

This is the primary color used for darker elements in Material UI.


### RTL Support

<span class="chip chip-boolean">Boolean</span><span style="user-select: none;">&nbsp;</span><span class="chip chip-boolean">Default: <i>False</i></span><span style="user-select: none;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span class="chip chip-rw">Write</span><span style="user-select: none;">&nbsp;</span>-<span style="user-select: none;">&nbsp;</span><span class="chip chip-bd">Designer</span><span style="user-select: none;">&nbsp;</span>

<small>Available as ^^Advanced^^ Property</small>


### Receive Shared Files

<span class="chip chip-text">Text</span><span style="user-select: none;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span class="chip chip-rw">Write</span><span style="user-select: none;">&nbsp;</span>-<span style="user-select: none;">&nbsp;</span><span class="chip chip-bd">Designer</span><span style="user-select: none;">&nbsp;</span>


### Screen Orientation

<span class="chip chip-text">Text</span><span style="user-select: none;">&nbsp;</span><span class="chip chip-text">Default: <i>unspecified</i></span><span style="user-select: none;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span class="chip chip-rw">Read</span><span style="user-select: none;">&nbsp;</span><span class="chip chip-rw">Write</span><span style="user-select: none;">&nbsp;</span>-<span style="user-select: none;">&nbsp;</span><span class="chip chip-bd">Designer</span><span style="user-select: none;">&nbsp;</span><span class="chip chip-bd">Blocks</span><span style="user-select: none;">&nbsp;</span>

The requested screen orientation, specified as a text value. Commonly used values are landscape, portrait, sensor, user and unspecified. See the Android developer documentation for ActivityInfo.Screen_Orientation for the complete list of possible settings.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Form%22,%20%22name%22:%20%22Screen%20Orientation%22,%20%22getter%22:%20true%7D"></div>
<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Form%22,%20%22name%22:%20%22Screen%20Orientation%22,%20%22getter%22:%20false%7D"></div>


### Scrollable

<span class="chip chip-boolean">Boolean</span><span style="user-select: none;">&nbsp;</span><span class="chip chip-boolean">Default: <i>False</i></span><span style="user-select: none;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span class="chip chip-rw">Read</span><span style="user-select: none;">&nbsp;</span><span class="chip chip-rw">Write</span><span style="user-select: none;">&nbsp;</span>-<span style="user-select: none;">&nbsp;</span><span class="chip chip-bd">Designer</span><span style="user-select: none;">&nbsp;</span><span class="chip chip-bd">Blocks</span><span style="user-select: none;">&nbsp;</span>

When checked, there will be a vertical scrollbar on the screen, and the height of the application can exceed the physical height of the device. When unchecked, the application height is constrained to the height of the device.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Form%22,%20%22name%22:%20%22Scrollable%22,%20%22getter%22:%20true%7D"></div>
<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Form%22,%20%22name%22:%20%22Scrollable%22,%20%22getter%22:%20false%7D"></div>


### Show Lists As Json

<span class="chip chip-boolean">Boolean</span><span style="user-select: none;">&nbsp;</span><span class="chip chip-boolean">Default: <i>False</i></span><span style="user-select: none;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span class="chip chip-rw">Write</span><span style="user-select: none;">&nbsp;</span>-<span style="user-select: none;">&nbsp;</span><span class="chip chip-bd">Designer</span><span style="user-select: none;">&nbsp;</span>

<small>Available as ^^Advanced^^ Property</small>

If false, lists will be converted to strings using Lisp notation, i.e., as symbols separated by spaces, e.g., (a 1 b2 (c d). If true, lists will appear as in Json or Python, e.g. ["a", 1, "b", 2, ["c", "d"]]. This property appears only in Screen 1, and the value for Screen 1 determines the behavior for all screens. The property defaults to "false" meaning that the App Inventor programmer must explicitly set it to "true" if JSON/Python syntax is desired. At some point in the future we will alter the system so that new projects are created with this property set to "true" by default. Existing projects will not be impacted. The App Inventor programmer can also set it back to "false" in newer projects if desired.


### Show Navigation Bar

<span class="chip chip-boolean">Boolean</span><span style="user-select: none;">&nbsp;</span><span class="chip chip-boolean">Default: <i>True</i></span><span style="user-select: none;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span class="chip chip-rw">Read</span><span style="user-select: none;">&nbsp;</span><span class="chip chip-rw">Write</span><span style="user-select: none;">&nbsp;</span>-<span style="user-select: none;">&nbsp;</span><span class="chip chip-bd">Designer</span><span style="user-select: none;">&nbsp;</span><span class="chip chip-bd">Blocks</span><span style="user-select: none;">&nbsp;</span>

<small>Available as ^^Experimental^^ Property</small>

Show/Hide Navigation Bar

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Form%22,%20%22name%22:%20%22Show%20Navigation%20Bar%22,%20%22getter%22:%20true%7D"></div>
<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Form%22,%20%22name%22:%20%22Show%20Navigation%20Bar%22,%20%22getter%22:%20false%7D"></div>


### Show Options Menu

<span class="chip chip-boolean">Boolean</span><span style="user-select: none;">&nbsp;</span><span class="chip chip-boolean">Default: <i>True</i></span><span style="user-select: none;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span class="chip chip-rw">Write</span><span style="user-select: none;">&nbsp;</span>-<span style="user-select: none;">&nbsp;</span><span class="chip chip-bd">Designer</span><span style="user-select: none;">&nbsp;</span>


### Show Status Bar

<span class="chip chip-boolean">Boolean</span><span style="user-select: none;">&nbsp;</span><span class="chip chip-boolean">Default: <i>True</i></span><span style="user-select: none;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span class="chip chip-rw">Read</span><span style="user-select: none;">&nbsp;</span><span class="chip chip-rw">Write</span><span style="user-select: none;">&nbsp;</span>-<span style="user-select: none;">&nbsp;</span><span class="chip chip-bd">Designer</span><span style="user-select: none;">&nbsp;</span><span class="chip chip-bd">Blocks</span><span style="user-select: none;">&nbsp;</span>

The status bar is the topmost bar on the screen. This property reports whether the status bar is visible.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Form%22,%20%22name%22:%20%22Show%20Status%20Bar%22,%20%22getter%22:%20true%7D"></div>
<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Form%22,%20%22name%22:%20%22Show%20Status%20Bar%22,%20%22getter%22:%20false%7D"></div>


### Sizing

<span class="chip chip-text">Text</span><span style="user-select: none;">&nbsp;</span><span class="chip chip-text">Default: <i>Responsive</i></span><span style="user-select: none;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span class="chip chip-rw">Write</span><span style="user-select: none;">&nbsp;</span>-<span style="user-select: none;">&nbsp;</span><span class="chip chip-bd">Designer</span><span style="user-select: none;">&nbsp;</span>

If set to fixed, screen layouts will be created for a single fixed-size screen and autoscaled. If set to responsive, screen layouts will use the actual resolution of the device. See the documentation on responsive design in App Inventor for more information. This property appears on Screen1 only and controls the sizing for all screens in the app.


### Splash Enabled

<span class="chip chip-boolean">Boolean</span><span style="user-select: none;">&nbsp;</span><span class="chip chip-boolean">Default: <i>True</i></span><span style="user-select: none;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span class="chip chip-rw">Write</span><span style="user-select: none;">&nbsp;</span>-<span style="user-select: none;">&nbsp;</span><span class="chip chip-bd">Designer</span><span style="user-select: none;">&nbsp;</span>

<small>Available as ^^Advanced^^ Property</small>

If set to true the user will see a splash screen while the app is loading the content.


### Splash Image

<span class="chip chip-text">Text</span><span style="user-select: none;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span class="chip chip-rw">Write</span><span style="user-select: none;">&nbsp;</span>-<span style="user-select: none;">&nbsp;</span><span class="chip chip-bd">Designer</span><span style="user-select: none;">&nbsp;</span>

<small>Available as ^^Advanced^^ Property</small>


### Theme

<span class="chip chip-text">Text</span><span style="user-select: none;">&nbsp;</span><span class="chip chip-text">Default: <i>AppTheme</i></span><span style="user-select: none;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span class="chip chip-rw">Write</span><span style="user-select: none;">&nbsp;</span>-<span style="user-select: none;">&nbsp;</span><span class="chip chip-bd">Designer</span><span style="user-select: none;">&nbsp;</span>

Sets the theme used by the application.


### Title

<span class="chip chip-text">Text</span><span style="user-select: none;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span class="chip chip-rw">Read</span><span style="user-select: none;">&nbsp;</span><span class="chip chip-rw">Write</span><span style="user-select: none;">&nbsp;</span>-<span style="user-select: none;">&nbsp;</span><span class="chip chip-bd">Designer</span><span style="user-select: none;">&nbsp;</span><span class="chip chip-bd">Blocks</span><span style="user-select: none;">&nbsp;</span>

The caption for the form, which apears in the title bar

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Form%22,%20%22name%22:%20%22Title%22,%20%22getter%22:%20true%7D"></div>
<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Form%22,%20%22name%22:%20%22Title%22,%20%22getter%22:%20false%7D"></div>


### Title Bar Font Typeface

<span class="chip chip-number">Number</span><span style="user-select: none;">&nbsp;</span><span class="chip chip-number">Default: <i>0</i></span><span style="user-select: none;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span class="chip chip-rw">Write</span><span style="user-select: none;">&nbsp;</span>-<span style="user-select: none;">&nbsp;</span><span class="chip chip-bd">Designer</span><span style="user-select: none;">&nbsp;</span>


### Title Bar Subtitle

<span class="chip chip-text">Text</span><span style="user-select: none;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span class="chip chip-rw">Read</span><span style="user-select: none;">&nbsp;</span><span class="chip chip-rw">Write</span><span style="user-select: none;">&nbsp;</span>-<span style="user-select: none;">&nbsp;</span><span class="chip chip-bd">Designer</span><span style="user-select: none;">&nbsp;</span><span class="chip chip-bd">Blocks</span><span style="user-select: none;">&nbsp;</span>

Set the TitleBar's subtitle.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Form%22,%20%22name%22:%20%22Title%20Bar%20Subtitle%22,%20%22getter%22:%20true%7D"></div>
<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Form%22,%20%22name%22:%20%22Title%20Bar%20Subtitle%22,%20%22getter%22:%20false%7D"></div>


### Title Bar Typeface Import

<span class="chip chip-text">Text</span><span style="user-select: none;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span class="chip chip-rw">Write</span><span style="user-select: none;">&nbsp;</span>-<span style="user-select: none;">&nbsp;</span><span class="chip chip-bd">Designer</span><span style="user-select: none;">&nbsp;</span><span class="chip chip-bd">Blocks</span><span style="user-select: none;">&nbsp;</span>

<small>Available as ^^Advanced^^ Property</small>

Set a custom font.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Form%22,%20%22name%22:%20%22Title%20Bar%20Typeface%20Import%22,%20%22getter%22:%20false%7D"></div>


### Title Visible

<span class="chip chip-boolean">Boolean</span><span style="user-select: none;">&nbsp;</span><span class="chip chip-boolean">Default: <i>True</i></span><span style="user-select: none;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span class="chip chip-rw">Read</span><span style="user-select: none;">&nbsp;</span><span class="chip chip-rw">Write</span><span style="user-select: none;">&nbsp;</span>-<span style="user-select: none;">&nbsp;</span><span class="chip chip-bd">Designer</span><span style="user-select: none;">&nbsp;</span><span class="chip chip-bd">Blocks</span><span style="user-select: none;">&nbsp;</span>

The title bar is the top gray bar on the screen. This property reports whether the title bar is visible.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Form%22,%20%22name%22:%20%22Title%20Visible%22,%20%22getter%22:%20true%7D"></div>
<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Form%22,%20%22name%22:%20%22Title%20Visible%22,%20%22getter%22:%20false%7D"></div>


### Tutorial URL

<span class="chip chip-text">Text</span><span style="user-select: none;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span class="chip chip-rw">Write</span><span style="user-select: none;">&nbsp;</span>-<span style="user-select: none;">&nbsp;</span><span class="chip chip-bd">Designer</span><span style="user-select: none;">&nbsp;</span>

A URL to use to populate the Tutorial Sidebar while editing a project. Used as a teaching aid.


### Version Code

<span class="chip chip-number">Number</span><span style="user-select: none;">&nbsp;</span><span class="chip chip-number">Default: <i>1</i></span><span style="user-select: none;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span class="chip chip-rw">Write</span><span style="user-select: none;">&nbsp;</span>-<span style="user-select: none;">&nbsp;</span><span class="chip chip-bd">Designer</span><span style="user-select: none;">&nbsp;</span>

An integer value which must be incremented each time a new Android Application Package File (APK) is created for the Google Play Store.


### Version Name

<span class="chip chip-text">Text</span><span style="user-select: none;">&nbsp;</span><span class="chip chip-text">Default: <i>1.0</i></span><span style="user-select: none;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span class="chip chip-rw">Write</span><span style="user-select: none;">&nbsp;</span>-<span style="user-select: none;">&nbsp;</span><span class="chip chip-bd">Designer</span><span style="user-select: none;">&nbsp;</span>

A string which can be changed to allow Google Play Store users to distinguish between different versions of the App.


### Drawer Arrow Icon Color

<span class="chip chip-number">Number</span><span style="user-select: none;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span class="chip chip-rw">Read</span><span style="user-select: none;">&nbsp;</span><span class="chip chip-rw">Write</span><span style="user-select: none;">&nbsp;</span>-<span style="user-select: none;">&nbsp;</span><span class="chip chip-bd">Blocks</span><span style="user-select: none;">&nbsp;</span>

Set the drawer arrow icon color.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Form%22,%20%22name%22:%20%22Drawer%20Arrow%20Icon%20Color%22,%20%22getter%22:%20true%7D"></div>
<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Form%22,%20%22name%22:%20%22Drawer%20Arrow%20Icon%20Color%22,%20%22getter%22:%20false%7D"></div>


### Height

<span class="chip chip-number">Number</span><span style="user-select: none;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span class="chip chip-rw">Read</span><span style="user-select: none;">&nbsp;</span>-<span style="user-select: none;">&nbsp;</span><span class="chip chip-bd">Blocks</span><span style="user-select: none;">&nbsp;</span>

Screen height (y-size).

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Form%22,%20%22name%22:%20%22Height%22,%20%22getter%22:%20true%7D"></div>


### Is Companion

<span class="chip chip-boolean">Boolean</span><span style="user-select: none;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span class="chip chip-rw">Read</span><span style="user-select: none;">&nbsp;</span>-<span style="user-select: none;">&nbsp;</span><span class="chip chip-bd">Blocks</span><span style="user-select: none;">&nbsp;</span>

This block will return true, if you are running your project current in the companion application. Else it will return false.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Form%22,%20%22name%22:%20%22Is%20Companion%22,%20%22getter%22:%20true%7D"></div>


### is Side Menu Added

<span class="chip chip-boolean">Boolean</span><span style="user-select: none;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span class="chip chip-rw">Read</span><span style="user-select: none;">&nbsp;</span>-<span style="user-select: none;">&nbsp;</span><span class="chip chip-bd">Blocks</span><span style="user-select: none;">&nbsp;</span>

Returns true if a side menu is added to the screen.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Form%22,%20%22name%22:%20%22is%20Side%20Menu%20Added%22,%20%22getter%22:%20true%7D"></div>


### is Side Menu Open

<span class="chip chip-boolean">Boolean</span><span style="user-select: none;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span class="chip chip-rw">Read</span><span style="user-select: none;">&nbsp;</span>-<span style="user-select: none;">&nbsp;</span><span class="chip chip-bd">Blocks</span><span style="user-select: none;">&nbsp;</span>

Returns true if a side menu is current open. Else it will return false.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Form%22,%20%22name%22:%20%22is%20Side%20Menu%20Open%22,%20%22getter%22:%20true%7D"></div>


### Navigation Bar Light Icons

<span class="chip chip-boolean">Boolean</span><span style="user-select: none;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span class="chip chip-rw">Read</span><span style="user-select: none;">&nbsp;</span><span class="chip chip-rw">Write</span><span style="user-select: none;">&nbsp;</span>-<span style="user-select: none;">&nbsp;</span><span class="chip chip-bd">Blocks</span><span style="user-select: none;">&nbsp;</span>

This option tells the system to use dark navigation bar icons, useful for lighter colored navigation bars. Works only for devices with API &gt;= 26.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Form%22,%20%22name%22:%20%22Navigation%20Bar%20Light%20Icons%22,%20%22getter%22:%20true%7D"></div>
<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Form%22,%20%22name%22:%20%22Navigation%20Bar%20Light%20Icons%22,%20%22getter%22:%20false%7D"></div>


### Navigation Icon Color

<span class="chip chip-number">Number</span><span style="user-select: none;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span class="chip chip-rw">Read</span><span style="user-select: none;">&nbsp;</span><span class="chip chip-rw">Write</span><span style="user-select: none;">&nbsp;</span>-<span style="user-select: none;">&nbsp;</span><span class="chip chip-bd">Blocks</span><span style="user-select: none;">&nbsp;</span>

Set the navigation icon color.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Form%22,%20%22name%22:%20%22Navigation%20Icon%20Color%22,%20%22getter%22:%20true%7D"></div>
<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Form%22,%20%22name%22:%20%22Navigation%20Icon%20Color%22,%20%22getter%22:%20false%7D"></div>


### Options Menu Icon Color

<span class="chip chip-number">Number</span><span style="user-select: none;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span class="chip chip-rw">Read</span><span style="user-select: none;">&nbsp;</span><span class="chip chip-rw">Write</span><span style="user-select: none;">&nbsp;</span>-<span style="user-select: none;">&nbsp;</span><span class="chip chip-bd">Blocks</span><span style="user-select: none;">&nbsp;</span>

Set the options menu icon color.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Form%22,%20%22name%22:%20%22Options%20Menu%20Icon%20Color%22,%20%22getter%22:%20true%7D"></div>
<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Form%22,%20%22name%22:%20%22Options%20Menu%20Icon%20Color%22,%20%22getter%22:%20false%7D"></div>


### Show Title Bar Back Button

<span class="chip chip-boolean">Boolean</span><span style="user-select: none;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span class="chip chip-rw">Read</span><span style="user-select: none;">&nbsp;</span><span class="chip chip-rw">Write</span><span style="user-select: none;">&nbsp;</span>-<span style="user-select: none;">&nbsp;</span><span class="chip chip-bd">Blocks</span><span style="user-select: none;">&nbsp;</span>

If true it will show in the TitleBar a back button only if no side menu was added. If a side menu was added it will remove the ‘hamburger’-menu icon but the side menu can still be opened.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Form%22,%20%22name%22:%20%22Show%20Title%20Bar%20Back%20Button%22,%20%22getter%22:%20true%7D"></div>
<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Form%22,%20%22name%22:%20%22Show%20Title%20Bar%20Back%20Button%22,%20%22getter%22:%20false%7D"></div>


### Status Bar Color

<span class="chip chip-number">Number</span><span style="user-select: none;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span class="chip chip-rw">Read</span><span style="user-select: none;">&nbsp;</span><span class="chip chip-rw">Write</span><span style="user-select: none;">&nbsp;</span>-<span style="user-select: none;">&nbsp;</span><span class="chip chip-bd">Blocks</span><span style="user-select: none;">&nbsp;</span>

Set status bar color. This will work starting from API Level 21 (Android Lollipop

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Form%22,%20%22name%22:%20%22Status%20Bar%20Color%22,%20%22getter%22:%20true%7D"></div>
<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Form%22,%20%22name%22:%20%22Status%20Bar%20Color%22,%20%22getter%22:%20false%7D"></div>


### Status Bar Light Icons

<span class="chip chip-boolean">Boolean</span><span style="user-select: none;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span class="chip chip-rw">Read</span><span style="user-select: none;">&nbsp;</span><span class="chip chip-rw">Write</span><span style="user-select: none;">&nbsp;</span>-<span style="user-select: none;">&nbsp;</span><span class="chip chip-bd">Blocks</span><span style="user-select: none;">&nbsp;</span>

This option tells the system to use dark statusbar icons, useful for lighter colored status bars. Works only for devices with API &gt;= 23.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Form%22,%20%22name%22:%20%22Status%20Bar%20Light%20Icons%22,%20%22getter%22:%20true%7D"></div>
<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Form%22,%20%22name%22:%20%22Status%20Bar%20Light%20Icons%22,%20%22getter%22:%20false%7D"></div>


### Title Bar Color

<span class="chip chip-number">Number</span><span style="user-select: none;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span class="chip chip-rw">Read</span><span style="user-select: none;">&nbsp;</span><span class="chip chip-rw">Write</span><span style="user-select: none;">&nbsp;</span>-<span style="user-select: none;">&nbsp;</span><span class="chip chip-bd">Blocks</span><span style="user-select: none;">&nbsp;</span>

Set title bar color

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Form%22,%20%22name%22:%20%22Title%20Bar%20Color%22,%20%22getter%22:%20true%7D"></div>
<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Form%22,%20%22name%22:%20%22Title%20Bar%20Color%22,%20%22getter%22:%20false%7D"></div>


### Title Bar Text Color

<span class="chip chip-number">Number</span><span style="user-select: none;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span class="chip chip-rw">Read</span><span style="user-select: none;">&nbsp;</span><span class="chip chip-rw">Write</span><span style="user-select: none;">&nbsp;</span>-<span style="user-select: none;">&nbsp;</span><span class="chip chip-bd">Blocks</span><span style="user-select: none;">&nbsp;</span>

Set a custom color for the TitleBar text.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Form%22,%20%22name%22:%20%22Title%20Bar%20Text%20Color%22,%20%22getter%22:%20true%7D"></div>
<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Form%22,%20%22name%22:%20%22Title%20Bar%20Text%20Color%22,%20%22getter%22:%20false%7D"></div>


### Width

<span class="chip chip-number">Number</span><span style="user-select: none;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span class="chip chip-rw">Read</span><span style="user-select: none;">&nbsp;</span>-<span style="user-select: none;">&nbsp;</span><span class="chip chip-bd">Blocks</span><span style="user-select: none;">&nbsp;</span>

Screen width (x-size).

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Form%22,%20%22name%22:%20%22Width%22,%20%22getter%22:%20true%7D"></div>


### is Keyboard Visible

<span class="chip chip-boolean">Boolean</span><span style="user-select: none;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span class="chip chip-rw">Read</span><span style="user-select: none;">&nbsp;</span>-<span style="user-select: none;">&nbsp;</span><span class="chip chip-bd">Blocks</span><span style="user-select: none;">&nbsp;</span>

Returns the status of the keyboard. If the keyboard is visible then the result is true.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Form%22,%20%22name%22:%20%22is%20Keyboard%20Visible%22,%20%22getter%22:%20true%7D"></div>
