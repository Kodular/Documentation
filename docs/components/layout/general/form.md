# Form

| Category | Requires | Version |
|:--------:|:-------:|:--------:|
|Layout > General|API 19, Android 4.4 - 4.4.4 KitKat|42|

## Overview

Top-level component containing all other components in the program.

## Events

### Back Pressed

[[Event('Form', 'Back Pressed')]]

Device back button pressed.

### Error Occurred

[[Event('Form', 'Error Occurred', 'component', 'functionName', 'errorNumber', 'message')]]

| Params | []() |
|--------|------|
|component|Component|
|function Name|Text|
|error Number|Number|
|message|Text|


Event raised when an error occurs. Only some errors will raise this condition. For those errors, the system will show a notification by default. You can use this event handler to prescribe an error behavior different than the default.

### Got Received Shared

[[Event('Form', 'Got Received Shared', 'type', 'value')]]

| Params | []() |
|--------|------|
|type|Number|
|value|Text|


Event to detect that a user shared content to your app throw the sharing dialog of any other app. Type stand for integer. 0 = nothing shared, 1 = audio, 2 = image, 3 = text or 4 = video

### Initialize

[[Event('Form', 'Initialize')]]

Screen starting

### Keyboard Visibility Changed

[[Event('Form', 'Keyboard Visibility Changed', 'isKeyboardVisible')]]

| Params | []() |
|--------|------|
|is Keyboard Visible|Boolean|


Event will be invoked if the keyboard was visible or invisible.

### Menu Initialize

[[Event('Form', 'Menu Initialize')]]

Event to detect when the menu has loaded. Set here your blocks like TitleBarIcon or AddMenuItem.

### Menu Item Selected

[[Event('Form', 'Menu Item Selected', 'menuItem')]]

| Params | []() |
|--------|------|
|menu Item|Text|


Event to detect when a menu item has been selected.

### On App Pause

[[Event('Form', 'On App Pause')]]

The system calls this method as the first indication that the user is leaving your activity (though it does not always mean the activity is being destroyed).

### On App Resume

[[Event('Form', 'On App Resume')]]

When the activity enters the Resumed state, it comes to the foreground, and then the system invokes this event.

### On App Stop

[[Event('Form', 'On App Stop')]]

When your activity is no longer visible to the user, it has entered the Stopped state, and the system invokes this event.

### Other Screen Closed

[[Event('Form', 'Other Screen Closed', 'otherScreenName', 'result')]]

| Params | []() |
|--------|------|
|other Screen Name|Text|
|result|Any|


Event raised when another screen has closed and control has returned to this screen.

### Permission Denied

[[Event('Form', 'Permission Denied', 'component', 'functionName', 'permissionName')]]

| Params | []() |
|--------|------|
|component|Component|
|function Name|Text|
|permission Name|Text|


Event to handle when the app user has denied a needed permission.

### Permission Granted

[[Event('Form', 'Permission Granted', 'permissionName')]]

| Params | []() |
|--------|------|
|permission Name|Text|


Event to handle when the app user has granted a needed permission. This event is only run when permission isgranted in response to the AskForPermission method.

### Screen Orientation Changed

[[Event('Form', 'Screen Orientation Changed')]]

Screen orientation changed

### Side Menu Closed

[[Event('Form', 'Side Menu Closed')]]

Event will be invoked if the side menu was closed.

### Side Menu Opened

[[Event('Form', 'Side Menu Opened')]]

Event will be invoked if the side menu was opened.

### Title Bar Icon Selected

[[Event('Form', 'Title Bar Icon Selected', 'icon', 'name')]]

| Params | []() |
|--------|------|
|icon|Text|
|name|Text|


The event returns the 'icon' or 'name' of the selected icon.

### Title Bar Back Button Clicked

[[Event('Form', 'Title Bar Back Button Clicked')]]

Event to detect when a menu item has been selected.

## Methods

### Add Menu Item

[[Method('Form', 'Add Menu Item', False, 'menuItem')]]

| Params | []() |
|--------|------|
|menu Item|List|


Add a new item to the menu. Use the 'make a list' block.

### Add Menu Item With Icon

[[Method('Form', 'Add Menu Item With Icon', False, 'menuItem', 'menuIcon')]]

| Params | []() |
|--------|------|
|menu Item|Text|
|menu Icon|Text|


Add a new item with a icon on the left side to the menu. This function does not use the make a list block. If you want more items with icon then use this block again.

### Add Title Bar Icon

[[Method('Form', 'Add Title Bar Icon', False, 'icon', 'name')]]

| Params | []() |
|--------|------|
|icon|Text|
|name|Text|


Add a new action icon to the TitleBar. You will see a toast message on a long click with your choosen name. Add this block to the "MenuInitialize" event.

### Are Permissions Granted

[[Method('Form', 'Are Permissions Granted', True)]]

{>>Returns `boolean`<<}

Returns true if ALL needed app permissions were granted, else false.

### Ask For Permission

[[Method('Form', 'Ask For Permission', False, 'permissionName')]]

| Params | []() |
|--------|------|
|permission Name|Text|


Ask the user to grant access to a dangerous permission.

### Can Write System Settings

[[Method('Form', 'Can Write System Settings', True)]]

{>>Returns `boolean`<<}

Returns true if the app can write system settings, else it returns false. It will return true automatic for devices with android version below 6 (API 23).

### Hide Keyboard

[[Method('Form', 'Hide Keyboard', False)]]

Hide the keyboard.

### Lock Side Menu

[[Method('Form', 'Lock Side Menu', False)]]

Use this block to lock the side menu. This means the user can not open the side menu until the side menu unlock block is used.

### Move Task To Back

[[Method('Form', 'Move Task To Back', False)]]

Move task to back. That means it will minimize your current app.

### Open App Settings

[[Method('Form', 'Open App Settings', False)]]

Opens the settings screen of the app. Useful if 'Are Permissions Granted' has returned false.

### Open System Write Settings

[[Method('Form', 'Open System Write Settings', False)]]

Opens the app's system settings page. This works only for devices with android 6+.

### Remove Side Menu

[[Method('Form', 'Remove Side Menu', False)]]

Remove a first created side menu. This block will be usefull if you need to update a side menu dynamically. You can use this block too to test a side menu in the companion. Add then this block above of the 'Side Menu' block.

### Remove Title Bar Icons

[[Method('Form', 'Remove Title Bar Icons', False)]]

Remove all added action icons from the TitleBar.

### Reset Options Menu

[[Method('Form', 'Reset Options Menu', False)]]

Reset the menu back to its default

### Show About Application

[[Method('Form', 'Show About Application', False)]]

Show the dialog which shows when pressing the "About This Application" button in the menu.

### Show Keyboard

[[Method('Form', 'Show Keyboard', False)]]

Show the keyboard

### Side Menu

[[Method('Form', 'Side Menu', False, 'layout')]]

| Params | []() |
|--------|------|
|layout|Component|


Create a Side Menu. Set to "layout" your layout that will be then your side menu. Use as example a vertical arrangement. Your choosen layout will be then removed from the screen and only visible in the side menu."Information": This block works on companion only if you add a side menu on button click.Don’t add it in companion on "screen initialize event". Else the companion will crash.Do NOT use this block with the Side Menu Layout component

### Side Menu Close

[[Method('Form', 'Side Menu Close', False)]]

If you had set your side menu then you can use this block to close it as example with a button click.

### Side Menu Open

[[Method('Form', 'Side Menu Open', False)]]

If you had set your side menu then you can use this block to open it as example with a button click.

### Task Description

[[Method('Form', 'Task Description', False, 'text', 'color')]]

| Params | []() |
|--------|------|
|text|Text|
|color|Number|


Sets information describing the task with this activity for presentation inside the Recents System UI. You will see the settings if the device API is &gt;= 21 and you minimize the app.

### Unlock Side Menu

[[Method('Form', 'Unlock Side Menu', False)]]

Use this block to unlock the side menu. This means the user can now open again the side menu.

### Version Code

[[Method('Form', 'Version Code', True)]]

{>>Returns `number`<<}

This block will returns the version code

### Version Name

[[Method('Form', 'Version Name', True)]]

{>>Returns `text`<<}

This block will returns the version name

## Properties

### About Screen

<span class="chip chip-text">Text</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span> 

Information about the screen. It appears when "About this Application" is selected from the system menu. Use it to inform people about your app. In multiple screen apps, each screen has its own AboutScreen info.

[[PropertyBlockGetterAndSetter('Form', 'About Screen')]]

### About Screen Background Color

<span class="chip chip-number">Number</span> <span class="chip chip-number">Default: <i>&HFF444444</i></span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span> 

[[PropertyBlockGetterAndSetter('Form', 'About Screen Background Color')]]

### About Screen Light Theme

<span class="chip chip-boolean">Boolean</span> <span class="chip chip-boolean">Default: <i>False</i></span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span> 

[[PropertyBlockGetterAndSetter('Form', 'About Screen Light Theme')]]

### About Screen Title

<span class="chip chip-text">Text</span> <span class="chip chip-text">Default: <i>About this application</i></span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span> 

Define the title of the about application option.

[[PropertyBlockGetterAndSetter('Form', 'About Screen Title')]]

### Accent Color

<span class="chip chip-number">Number</span> <span class="chip chip-number">Default: <i>&HFFFF4081</i></span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Non-Visible</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span> 

This is the accent color used for highlights and other user interface accents.

[[PropertyBlockGetterAndSetter('Form', 'Accent Color')]]

### Align Horizontal

<span class="chip chip-number">Number</span> <span class="chip chip-number">Default: <i>1</i></span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span> 

A number that encodes how contents of the screen are aligned horizontally. The choices are: 1 = left aligned, 2 = horizontally centered, 3 = right aligned.

[[PropertyBlockGetterAndSetter('Form', 'Align Horizontal')]]

### Align Vertical

<span class="chip chip-number">Number</span> <span class="chip chip-number">Default: <i>1</i></span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span> 

A number that encodes how the contents of the arrangement are aligned vertically. The choices are: 1 = aligned at the top, 2 = vertically centered, 3 = aligned at the bottom. Vertical alignment has no effect if the screen is scrollable.

[[PropertyBlockGetterAndSetter('Form', 'Align Vertical')]]

### App ID

<span class="chip chip-text">Text</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Non-Visible</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span> 

The unique APP_ID for the user (which is generated by GWT and stored in Datastore)

[[PropertyBlockGetterAndSetter('Form', 'App ID')]]

### App Name

<span class="chip chip-text">Text</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Non-Visible</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span> 

This is the display name of the installed application in the phone.If the AppName is blank, it will be set to the name of the project when the project is built.

[[PropertyBlockGetterAndSetter('Form', 'App Name')]]

### Background Color

<span class="chip chip-number">Number</span> <span class="chip chip-number">Default: <i>&HFFFFFFFF</i></span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span> 

BackgroundColor property getter method.

[[PropertyBlockGetterAndSetter('Form', 'Background Color')]]

### Background Image

<span class="chip chip-text">Text</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span> 

The screen background image.

[[PropertyBlockGetterAndSetter('Form', 'Background Image')]]

### Close Screen Animation

<span class="chip chip-text">Text</span> <span class="chip chip-text">Default: <i>default</i></span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span> 

The animation for closing current screen and returning to the previous screen. Valid options are default, fade, zoom, slidehorizontal, slidevertical, and none

[[PropertyBlockGetterAndSetter('Form', 'Close Screen Animation')]]

### High Quality Images

<span class="chip chip-boolean">Boolean</span> <span class="chip chip-boolean">Default: <i>False</i></span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span> 

 <small>Available as ^^Advanced^^ Property</small>

If set to true, pictures will be loaded in high quality.

[[PropertyBlockGetterAndSetter('Form', 'High Quality Images')]]

### Icon

<span class="chip chip-text">Text</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Non-Visible</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span> 

Specifies the name of the application icon.

[[PropertyBlockGetterAndSetter('Form', 'Icon')]]

### Keep Screen On

<span class="chip chip-boolean">Boolean</span> <span class="chip chip-boolean">Default: <i>False</i></span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span> 

 <small>Available as ^^Advanced^^ Property</small>

Keep the device's screen turned on and bright.

[[PropertyBlockGetterAndSetter('Form', 'Keep Screen On')]]

### Min SDK (Min. Android Version)

<span class="chip chip-number">Number</span> <span class="chip chip-number">Default: <i>19</i></span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Non-Visible</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span> 

 <small>Available as ^^Advanced^^ Property</small>

[[PropertyBlockGetterAndSetter('Form', 'Min SDK Min. Android Version')]]

### Navigation Bar Color

<span class="chip chip-number">Number</span> <span class="chip chip-number">Default: <i>&HFF000000</i></span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span> 

Set navigation bar color. This will work starting from API Level 21 (Android Lollipop)

[[PropertyBlockGetterAndSetter('Form', 'Navigation Bar Color')]]

### Open Screen Animation

<span class="chip chip-text">Text</span> <span class="chip chip-text">Default: <i>default</i></span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span> 

The animation for switching to another screen. Valid options are default, fade, zoom, slidehorizontal, slidevertical, and none

[[PropertyBlockGetterAndSetter('Form', 'Open Screen Animation')]]

### Package Name

<span class="chip chip-text">Text</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Non-Visible</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span> 

 <small>Available as ^^Advanced^^ Property</small>

Set a custom PackageName for the app

[[PropertyBlockGetterAndSetter('Form', 'Package Name')]]

### Primary Color / Title Bar

<span class="chip chip-number">Number</span> <span class="chip chip-number">Default: <i>&HFF3F51B5</i></span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Non-Visible</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span> 

This is the primary color used for Material UI elements, such as the ActionBar.

[[PropertyBlockGetterAndSetter('Form', 'Primary Color / Title Bar')]]

### Primary Color Dark / Status Bar

<span class="chip chip-number">Number</span> <span class="chip chip-number">Default: <i>&HFF303F9F</i></span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Non-Visible</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span> 

This is the primary color used for darker elements in Material UI.

[[PropertyBlockGetterAndSetter('Form', 'Primary Color Dark / Status Bar')]]

### RTL Support

<span class="chip chip-boolean">Boolean</span> <span class="chip chip-boolean">Default: <i>False</i></span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Non-Visible</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span> 

 <small>Available as ^^Advanced^^ Property</small>

[[PropertyBlockGetterAndSetter('Form', 'RTL Support')]]

### Receive Shared Files

<span class="chip chip-text">Text</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Non-Visible</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span> 

[[PropertyBlockGetterAndSetter('Form', 'Receive Shared Files')]]

### Screen Orientation

<span class="chip chip-text">Text</span> <span class="chip chip-text">Default: <i>unspecified</i></span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span> 

The requested screen orientation, specified as a text value. Commonly used values are landscape, portrait, sensor, user and unspecified. See the Android developer documentation for ActivityInfo.Screen_Orientation for the complete list of possible settings.

[[PropertyBlockGetterAndSetter('Form', 'Screen Orientation')]]

### Scrollable

<span class="chip chip-boolean">Boolean</span> <span class="chip chip-boolean">Default: <i>False</i></span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span> 

When checked, there will be a vertical scrollbar on the screen, and the height of the application can exceed the physical height of the device. When unchecked, the application height is constrained to the height of the device.

[[PropertyBlockGetterAndSetter('Form', 'Scrollable')]]

### Show Lists As Json

<span class="chip chip-boolean">Boolean</span> <span class="chip chip-boolean">Default: <i>False</i></span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Non-Visible</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span> 

 <small>Available as ^^Advanced^^ Property</small>

If false, lists will be converted to strings using Lisp notation, i.e., as symbols separated by spaces, e.g., (a 1 b2 (c d). If true, lists will appear as in Json or Python, e.g. ["a", 1, "b", 2, ["c", "d"]]. This property appears only in Screen 1, and the value for Screen 1 determines the behavior for all screens. The property defaults to "false" meaning that the App Inventor programmer must explicitly set it to "true" if JSON/Python syntax is desired. At some point in the future we will alter the system so that new projects are created with this property set to "true" by default. Existing projects will not be impacted. The App Inventor programmer can also set it back to "false" in newer projects if desired.

[[PropertyBlockGetterAndSetter('Form', 'Show Lists As Json')]]

### Show Navigation Bar

<span class="chip chip-boolean">Boolean</span> <span class="chip chip-boolean">Default: <i>True</i></span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span> 

 <small>Available as ^^Experimental^^ Property</small>

Show/Hide Navigation Bar

[[PropertyBlockGetterAndSetter('Form', 'Show Navigation Bar')]]

### Show Options Menu

<span class="chip chip-boolean">Boolean</span> <span class="chip chip-boolean">Default: <i>True</i></span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Non-Visible</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span> 

[[PropertyBlockGetterAndSetter('Form', 'Show Options Menu')]]

### Show Status Bar

<span class="chip chip-boolean">Boolean</span> <span class="chip chip-boolean">Default: <i>True</i></span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span> 

The status bar is the topmost bar on the screen. This property reports whether the status bar is visible.

[[PropertyBlockGetterAndSetter('Form', 'Show Status Bar')]]

### Sizing

<span class="chip chip-text">Text</span> <span class="chip chip-text">Default: <i>Responsive</i></span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Non-Visible</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span> 

If set to fixed, screen layouts will be created for a single fixed-size screen and autoscaled. If set to responsive, screen layouts will use the actual resolution of the device. See the documentation on responsive design in App Inventor for more information. This property appears on Screen1 only and controls the sizing for all screens in the app.

[[PropertyBlockGetterAndSetter('Form', 'Sizing')]]

### Splash Enabled

<span class="chip chip-boolean">Boolean</span> <span class="chip chip-boolean">Default: <i>True</i></span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Non-Visible</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span> 

 <small>Available as ^^Advanced^^ Property</small>

If set to true the user will see a splash screen while the app is loading the content.

[[PropertyBlockGetterAndSetter('Form', 'Splash Enabled')]]

### Splash Image

<span class="chip chip-text">Text</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Non-Visible</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span> 

 <small>Available as ^^Advanced^^ Property</small>

[[PropertyBlockGetterAndSetter('Form', 'Splash Image')]]

### Theme

<span class="chip chip-text">Text</span> <span class="chip chip-text">Default: <i>AppTheme</i></span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Non-Visible</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span> 

Sets the theme used by the application.

[[PropertyBlockGetterAndSetter('Form', 'Theme')]]

### Title

<span class="chip chip-text">Text</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span> 

The caption for the form, which apears in the title bar

[[PropertyBlockGetterAndSetter('Form', 'Title')]]

### Title Bar Font Typeface

<span class="chip chip-number">Number</span> <span class="chip chip-number">Default: <i>0</i></span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Non-Visible</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span> 

[[PropertyBlockGetterAndSetter('Form', 'Title Bar Font Typeface')]]

### Title Bar Subtitle

<span class="chip chip-text">Text</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span> 

Set the TitleBar's subtitle.

[[PropertyBlockGetterAndSetter('Form', 'Title Bar Subtitle')]]

### Title Bar Typeface Import

<span class="chip chip-text">Text</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span> 

 <small>Available as ^^Advanced^^ Property</small>

Set a custom font.

[[PropertyBlockGetterAndSetter('Form', 'Title Bar Typeface Import')]]

### Title Visible

<span class="chip chip-boolean">Boolean</span> <span class="chip chip-boolean">Default: <i>True</i></span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span> 

The title bar is the top gray bar on the screen. This property reports whether the title bar is visible.

[[PropertyBlockGetterAndSetter('Form', 'Title Visible')]]

### Tutorial URL

<span class="chip chip-text">Text</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Non-Visible</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span> 

A URL to use to populate the Tutorial Sidebar while editing a project. Used as a teaching aid.

[[PropertyBlockGetterAndSetter('Form', 'Tutorial URL')]]

### Version Code

<span class="chip chip-number">Number</span> <span class="chip chip-number">Default: <i>1</i></span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Non-Visible</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span> 

An integer value which must be incremented each time a new Android Application Package File (APK) is created for the Google Play Store.

[[PropertyBlockGetterAndSetter('Form', 'Version Code')]]

### Version Name

<span class="chip chip-text">Text</span> <span class="chip chip-text">Default: <i>1.0</i></span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Non-Visible</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span> 

A string which can be changed to allow Google Play Store users to distinguish between different versions of the App.

[[PropertyBlockGetterAndSetter('Form', 'Version Name')]]

### Drawer Arrow Icon Color

<span class="chip chip-number">Number</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Blocks</span> 

Set the drawer arrow icon color.

[[PropertyBlockGetterAndSetter('Form', 'Drawer Arrow Icon Color')]]

### Height

<span class="chip chip-number">Number</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> - <span class="chip chip-bd">Blocks</span> 

Screen height (y-size).

[[PropertyBlockGetter('Form', 'Height')]]

### Is Companion

<span class="chip chip-boolean">Boolean</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> - <span class="chip chip-bd">Blocks</span> 

This block will return true, if you are running your project current in the companion application. Else it will return false.

[[PropertyBlockGetter('Form', 'Is Companion')]]

### is Side Menu Added

<span class="chip chip-boolean">Boolean</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> - <span class="chip chip-bd">Blocks</span> 

Returns true if a side menu is added to the screen.

[[PropertyBlockGetter('Form', 'is Side Menu Added')]]

### is Side Menu Open

<span class="chip chip-boolean">Boolean</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> - <span class="chip chip-bd">Blocks</span> 

Returns true if a side menu is current open. Else it will return false.

[[PropertyBlockGetter('Form', 'is Side Menu Open')]]

### Navigation Bar Light Icons

<span class="chip chip-boolean">Boolean</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Blocks</span> 

This option tells the system to use dark navigation bar icons, useful for lighter colored navigation bars. Works only for devices with API &gt;= 26.

[[PropertyBlockGetterAndSetter('Form', 'Navigation Bar Light Icons')]]

### Navigation Icon Color

<span class="chip chip-number">Number</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Blocks</span> 

Set the navigation icon color.

[[PropertyBlockGetterAndSetter('Form', 'Navigation Icon Color')]]

### Options Menu Icon Color

<span class="chip chip-number">Number</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Blocks</span> 

Set the options menu icon color.

[[PropertyBlockGetterAndSetter('Form', 'Options Menu Icon Color')]]

### Show Title Bar Back Button

<span class="chip chip-boolean">Boolean</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Blocks</span> 

If true it will show in the TitleBar a back button only if no side menu was added. If a side menu was added it will remove the ‘hamburger’-menu icon but the side menu can still be opened.

[[PropertyBlockGetterAndSetter('Form', 'Show Title Bar Back Button')]]

### Status Bar Color

<span class="chip chip-number">Number</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Blocks</span> 

Set status bar color. This will work starting from API Level 21 (Android Lollipop

[[PropertyBlockGetterAndSetter('Form', 'Status Bar Color')]]

### Status Bar Light Icons

<span class="chip chip-boolean">Boolean</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Blocks</span> 

This option tells the system to use dark statusbar icons, useful for lighter colored status bars. Works only for devices with API &gt;= 23.

[[PropertyBlockGetterAndSetter('Form', 'Status Bar Light Icons')]]

### Title Bar Color

<span class="chip chip-number">Number</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Blocks</span> 

Set title bar color

[[PropertyBlockGetterAndSetter('Form', 'Title Bar Color')]]

### Title Bar Text Color

<span class="chip chip-number">Number</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Blocks</span> 

Set a custom color for the TitleBar text.

[[PropertyBlockGetterAndSetter('Form', 'Title Bar Text Color')]]

### Width

<span class="chip chip-number">Number</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> - <span class="chip chip-bd">Blocks</span> 

Screen width (x-size).

[[PropertyBlockGetter('Form', 'Width')]]

### is Keyboard Visible

<span class="chip chip-boolean">Boolean</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> - <span class="chip chip-bd">Blocks</span> 

Returns the status of the keyboard. If the keyboard is visible then the result is true.

[[PropertyBlockGetter('Form', 'is Keyboard Visible')]]