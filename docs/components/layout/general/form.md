# Form

| Category | Version | Requires |
|:--------:|:-------:|:--------:|
|Layout > General|42|API 19 - Android 4.4 - 4.4.4 KitKat|

## Overview

Top-level component containing all other components in the program.

## Events

### Back Pressed

[[Event('Form', 'Back Pressed')]]

Device back button pressed.

### Error Occurred

[[Event('Form', 'Error Occurred', 'component', 'functionName', 'errorNumber', 'message')]]

??? tip "Parameters"

    | Name | Type |
    |------|------|
    |component|`component`|
    |function Name|`text`|
    |error Number|`number`|
    |message|`text`|


Event raised when an error occurs. Only some errors will raise this condition. For those errors, the system will show a notification by default. You can use this event handler to prescribe an error behavior different than the default.

### Got Received Shared

[[Event('Form', 'Got Received Shared', 'type', 'value')]]

??? tip "Parameters"

    | Name | Type |
    |------|------|
    |type|`number`|
    |value|`text`|


Event to detect that a user shared content to your app throw the sharing dialog of any other app. Type stand for integer. 0 = nothing shared, 1 = audio, 2 = image, 3 = text or 4 = video

### Initialize

[[Event('Form', 'Initialize')]]

Screen starting

### Keyboard Visibility Changed

[[Event('Form', 'Keyboard Visibility Changed', 'isKeyboardVisible')]]

??? tip "Parameters"

    | Name | Type |
    |------|------|
    |is Keyboard Visible|`boolean`|


Event will be invoked if the keyboard was visible or invisible.

### Menu Initialize

[[Event('Form', 'Menu Initialize')]]

Event to detect when the menu has loaded. Set here your blocks like TitleBarIcon or AddMenuItem.

### Menu Item Selected

[[Event('Form', 'Menu Item Selected', 'menuItem')]]

??? tip "Parameters"

    | Name | Type |
    |------|------|
    |menu Item|`text`|


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

??? tip "Parameters"

    | Name | Type |
    |------|------|
    |other Screen Name|`text`|
    |result|`any`|


Event raised when another screen has closed and control has returned to this screen.

### Permission Denied

[[Event('Form', 'Permission Denied', 'component', 'functionName', 'permissionName')]]

??? tip "Parameters"

    | Name | Type |
    |------|------|
    |component|`component`|
    |function Name|`text`|
    |permission Name|`text`|


Event to handle when the app user has denied a needed permission.

### Permission Granted

[[Event('Form', 'Permission Granted', 'permissionName')]]

??? tip "Parameters"

    | Name | Type |
    |------|------|
    |permission Name|`text`|


Event to handle when the app user has granted a needed permission. This event is only run when permission is   granted in response to the AskForPermission method.

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

??? tip "Parameters"

    | Name | Type |
    |------|------|
    |icon|`text`|
    |name|`text`|


The event returns the 'icon' or 'name' of the selected icon.

### Title Bar Back Button Clicked

[[Event('Form', 'Title Bar Back Button Clicked')]]

Event to detect when a menu item has been selected.

## Methods

### AddMenuItem

_Block preview not available_

??? tip "Parameters"

    | Name | Type |
    |------|------|
    |menu Item|`list`|


Add a new item to the menu. Use the 'make a list' block.

### AddMenuItemWithIcon

_Block preview not available_

??? tip "Parameters"

    | Name | Type |
    |------|------|
    |menu Item|`text`|
    |menu Icon|`text`|


Add a new item with a icon on the left side to the menu. This function does not use the make a list block. If you want more items with icon then use this block again.

### AddTitleBarIcon

_Block preview not available_

??? tip "Parameters"

    | Name | Type |
    |------|------|
    |icon|`text`|
    |name|`text`|


Add a new action icon to the TitleBar. You will see a toast message on a long click with your choosen name. Add this block to the "MenuInitialize" event.

### ArePermissionsGranted

_Block preview not available_

{>>Returns `boolean`<<}

Returns true if ALL needed app permissions were granted, else false.

### AskForPermission

_Block preview not available_

??? tip "Parameters"

    | Name | Type |
    |------|------|
    |permission Name|`text`|


Ask the user to grant access to a dangerous permission.

### CanWriteSystemSettings

_Block preview not available_

{>>Returns `boolean`<<}

Returns true if the app can write system settings, else it returns false. It will return true automatic for devices with android version below 6 (API 23).

### HideKeyboard

_Block preview not available_

Hide the keyboard.

### LockSideMenu

_Block preview not available_

Use this block to lock the side menu. This means the user can not open the side menu until the side menu unlock block is used.

### MoveTaskToBack

_Block preview not available_

Move task to back. That means it will minimize your current app.

### OpenAppSettings

_Block preview not available_

Opens the settings screen of the app. Useful if 'Are Permissions Granted' has returned false.

### OpenSystemWriteSettings

_Block preview not available_

Opens the app's system settings page. This works only for devices with android 6+.

### RemoveSideMenu

_Block preview not available_

Remove a first created side menu. This block will be usefull if you need to update a side menu dynamically. You can use this block too to test a side menu in the companion. Add then this block above of the 'Side Menu' block.

### RemoveTitleBarIcons

_Block preview not available_

Remove all added action icons from the TitleBar.

### ResetMenu

_Block preview not available_

Reset the menu back to its default

### ShowAboutApplication

_Block preview not available_

Show the dialog which shows when pressing the "About This Application" button in the menu.

### ShowKeyboard

_Block preview not available_

Show the keyboard

### SideMenu

_Block preview not available_

??? tip "Parameters"

    | Name | Type |
    |------|------|
    |layout|`component`|


Create a Side Menu. Set to "layout" your layout that will be then your side menu. Use as example a vertical arrangement. Your choosen layout will be then removed from the screen and only visible in the side menu."Information": This block works on companion only if you add a side menu on button click.Don’t add it in companion on "screen initialize event". Else the companion will crash.Do NOT use this block with the Side Menu Layout component

### SideMenuClose

_Block preview not available_

If you had set your side menu then you can use this block to close it as example with a button click.

### SideMenuOpen

_Block preview not available_

If you had set your side menu then you can use this block to open it as example with a button click.

### TaskDescription

_Block preview not available_

??? tip "Parameters"

    | Name | Type |
    |------|------|
    |text|`text`|
    |color|`number`|


Sets information describing the task with this activity for presentation inside the Recents System UI. You will see the settings if the device API is &gt;= 21 and you minimize the app.

### UnlockSideMenu

_Block preview not available_

Use this block to unlock the side menu. This means the user can now open again the side menu.

### VersionCode

_Block preview not available_

{>>Returns `number`<<}

This block will returns the version code

### VersionName

_Block preview not available_

{>>Returns `text`<<}

This block will returns the version name

## Properties

### About Screen

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Form', 'About Screen')]]

| Type |
|:----:|
|text|

Information about the screen. It appears when "About this Application" is selected from the system menu. Use it to inform people about your app. In multiple screen apps, each screen has its own AboutScreen info.

### About Screen Background Color

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Form', 'About Screen Background Color')]]

| Type | Default |
|:----:|:-------:|
|number|&HFF444444|

_No description available_

### About Screen Light Theme

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Form', 'About Screen Light Theme')]]

| Type | Default |
|:----:|:-------:|
|boolean|False|

_No description available_

### About Screen Title

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Form', 'About Screen Title')]]

| Type | Default |
|:----:|:-------:|
|text|About this application|

Define the title of the about application option.

### Accent Color

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Form', 'Accent Color')]]

| Type | Default |
|:----:|:-------:|
|number|&HFFFF4081|

This is the accent color used for highlights and other user interface accents.

### Align Horizontal

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Form', 'Align Horizontal')]]

| Type | Default |
|:----:|:-------:|
|number|1|

A number that encodes how contents of the screen are aligned horizontally. The choices are: 1 = left aligned, 2 = horizontally centered, 3 = right aligned.

### Align Vertical

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Form', 'Align Vertical')]]

| Type | Default |
|:----:|:-------:|
|number|1|

A number that encodes how the contents of the arrangement are aligned vertically. The choices are: 1 = aligned at the top, 2 = vertically centered, 3 = aligned at the bottom. Vertical alignment has no effect if the screen is scrollable.

### App ID

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Form', 'App ID')]]

| Type |
|:----:|
|text|

The unique APP_ID for the user (which is generated by GWT and stored in Datastore)

### App Name

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Form', 'App Name')]]

| Type |
|:----:|
|text|

This is the display name of the installed application in the phone.If the AppName is blank, it will be set to the name of the project when the project is built.

### Background Color

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Form', 'Background Color')]]

| Type | Default |
|:----:|:-------:|
|number|&HFFFFFFFF|

BackgroundColor property getter method.

### Background Image

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Form', 'Background Image')]]

| Type |
|:----:|
|text|

The screen background image.

### Close Screen Animation

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Form', 'Close Screen Animation')]]

| Type | Default |
|:----:|:-------:|
|text|default|

The animation for closing current screen and returning to the previous screen. Valid options are default, fade, zoom, slidehorizontal, slidevertical, and none

### High Quality Images

<small>Available as ^^Advanced^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Form', 'High Quality Images')]]

| Type | Default |
|:----:|:-------:|
|boolean|False|

If set to true, pictures will be loaded in high quality.

### Icon

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Form', 'Icon')]]

| Type |
|:----:|
|text|

Specifies the name of the application icon.

### Keep Screen On

<small>Available as ^^Advanced^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Form', 'Keep Screen On')]]

| Type | Default |
|:----:|:-------:|
|boolean|False|

Keep the device's screen turned on and bright.

### Min SDK (Min. Android Version)

<small>Available as ^^Advanced^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Form', 'Min SDK (Min. Android Version)')]]

| Type | Default |
|:----:|:-------:|
|number|19|

_No description available_

### Navigation Bar Color

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Form', 'Navigation Bar Color')]]

| Type | Default |
|:----:|:-------:|
|number|&HFF000000|

Set navigation bar color. This will work starting from API Level 21 (Android Lollipop)

### Open Screen Animation

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Form', 'Open Screen Animation')]]

| Type | Default |
|:----:|:-------:|
|text|default|

The animation for switching to another screen. Valid options are default, fade, zoom, slidehorizontal, slidevertical, and none

### Package Name

<small>Available as ^^Advanced^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Form', 'Package Name')]]

| Type |
|:----:|
|text|

Set a custom PackageName for the app

### Primary Color / Title Bar

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Form', 'Primary Color / Title Bar')]]

| Type | Default |
|:----:|:-------:|
|number|&HFF3F51B5|

This is the primary color used for Material UI elements, such as the ActionBar.

### Primary Color Dark / Status Bar

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Form', 'Primary Color Dark / Status Bar')]]

| Type | Default |
|:----:|:-------:|
|number|&HFF303F9F|

This is the primary color used for darker elements in Material UI.

### RTL Support

<small>Available as ^^Advanced^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Form', 'RTL Support')]]

| Type | Default |
|:----:|:-------:|
|boolean|False|

_No description available_

### Receive Shared Files

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Form', 'Receive Shared Files')]]

| Type |
|:----:|
|text|

_No description available_

### Screen Orientation

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Form', 'Screen Orientation')]]

| Type | Default |
|:----:|:-------:|
|text|unspecified|

The requested screen orientation, specified as a text value. Commonly used values are landscape, portrait, sensor, user and unspecified. See the Android developer documentation for ActivityInfo.Screen_Orientation for the complete list of possible settings.

### Scrollable

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Form', 'Scrollable')]]

| Type | Default |
|:----:|:-------:|
|boolean|False|

When checked, there will be a vertical scrollbar on the screen, and the height of the application can exceed the physical height of the device. When unchecked, the application height is constrained to the height of the device.

### Show Lists As Json

<small>Available as ^^Advanced^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Form', 'Show Lists As Json')]]

| Type | Default |
|:----:|:-------:|
|boolean|False|

If false, lists will be converted to strings using Lisp notation, i.e., as symbols separated by spaces, e.g., (a 1 b2 (c d). If true, lists will appear as in Json or Python, e.g. ["a", 1, "b", 2, ["c", "d"]]. This property appears only in Screen 1, and the value for Screen 1 determines the behavior for all screens. The property defaults to "false" meaning that the App Inventor programmer must explicitly set it to "true" if JSON/Python syntax is desired. At some point in the future we will alter the system so that new projects are created with this property set to "true" by default. Existing projects will not be impacted. The App Inventor programmer can also set it back to "false" in newer projects if desired.

### Show Navigation Bar

<small>Available as ^^Experimental^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Form', 'Show Navigation Bar')]]

| Type | Default |
|:----:|:-------:|
|boolean|True|

Show/Hide Navigation Bar

### Show Options Menu

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Form', 'Show Options Menu')]]

| Type | Default |
|:----:|:-------:|
|boolean|True|

_No description available_

### Show Status Bar

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Form', 'Show Status Bar')]]

| Type | Default |
|:----:|:-------:|
|boolean|True|

The status bar is the topmost bar on the screen. This property reports whether the status bar is visible.

### Sizing

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Form', 'Sizing')]]

| Type | Default |
|:----:|:-------:|
|text|Responsive|

If set to fixed, screen layouts will be created for a single fixed-size screen and autoscaled. If set to responsive, screen layouts will use the actual resolution of the device. See the documentation on responsive design in App Inventor for more information. This property appears on Screen1 only and controls the sizing for all screens in the app.

### Splash Enabled

<small>Available as ^^Advanced^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Form', 'Splash Enabled')]]

| Type | Default |
|:----:|:-------:|
|boolean|True|

If set to true the user will see a splash screen while the app is loading the content.

### Splash Image

<small>Available as ^^Advanced^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Form', 'Splash Image')]]

| Type |
|:----:|
|text|

_No description available_

### Theme

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Form', 'Theme')]]

| Type | Default |
|:----:|:-------:|
|text|AppTheme|

Sets the theme used by the application.

### Title

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Form', 'Title')]]

| Type |
|:----:|
|text|

The caption for the form, which apears in the title bar

### Title Bar Font Typeface

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Form', 'Title Bar Font Typeface')]]

| Type | Default |
|:----:|:-------:|
|number|0|

_No description available_

### Title Bar Subtitle

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Form', 'Title Bar Subtitle')]]

| Type |
|:----:|
|text|

Set the TitleBar's subtitle.

### Title Bar Typeface Import

<small>Available as ^^Advanced^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Form', 'Title Bar Typeface Import')]]

| Type |
|:----:|
|text|

Set a custom font.

### Title Visible

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Form', 'Title Visible')]]

| Type | Default |
|:----:|:-------:|
|boolean|True|

The title bar is the top gray bar on the screen. This property reports whether the title bar is visible.

### Tutorial URL

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Form', 'Tutorial URL')]]

| Type |
|:----:|
|text|

A URL to use to populate the Tutorial Sidebar while editing a project. Used as a teaching aid.

### Version Code

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Form', 'Version Code')]]

| Type | Default |
|:----:|:-------:|
|number|1|

An integer value which must be incremented each time a new Android Application Package File (APK) is created for the Google Play Store.

### Version Name

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Form', 'Version Name')]]

| Type | Default |
|:----:|:-------:|
|text|1.0|

A string which can be changed to allow Google Play Store users to distinguish between different versions of the App.

### Drawer Arrow Icon Color

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Form', 'Drawer Arrow Icon Color')]]

| Type | Default |
|:----:|:-------:|
|number|None|

Set the drawer arrow icon color.

### Height

:eyes: Read-Only property
[[PropertyBlockGetter('Form', 'Height')]]

| Type | Default |
|:----:|:-------:|
|number|None|

Screen height (y-size).

### Is Companion

:eyes: Read-Only property
[[PropertyBlockGetter('Form', 'Is Companion')]]

| Type | Default |
|:----:|:-------:|
|boolean|None|

This block will return true, if you are running your project current in the companion application. Else it will return false.

### is Side Menu Added

:eyes: Read-Only property
[[PropertyBlockGetter('Form', 'is Side Menu Added')]]

| Type | Default |
|:----:|:-------:|
|boolean|None|

Returns true if a side menu is added to the screen.

### is Side Menu Open

:eyes: Read-Only property
[[PropertyBlockGetter('Form', 'is Side Menu Open')]]

| Type | Default |
|:----:|:-------:|
|boolean|None|

Returns true if a side menu is current open. Else it will return false.

### Navigation Bar Light Icons

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Form', 'Navigation Bar Light Icons')]]

| Type | Default |
|:----:|:-------:|
|boolean|None|

This option tells the system to use dark navigation bar icons, useful for lighter colored navigation bars. Works only for devices with API &gt;= 26.

### Navigation Icon Color

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Form', 'Navigation Icon Color')]]

| Type | Default |
|:----:|:-------:|
|number|None|

Set the navigation icon color.

### Options Menu Icon Color

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Form', 'Options Menu Icon Color')]]

| Type | Default |
|:----:|:-------:|
|number|None|

Set the options menu icon color.

### Show Title Bar Back Button

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Form', 'Show Title Bar Back Button')]]

| Type | Default |
|:----:|:-------:|
|boolean|None|

If true it will show in the TitleBar a back button only if no side menu was added. If a side menu was added it will remove the ‘hamburger’-menu icon but the side menu can still be opened.

### Status Bar Color

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Form', 'Status Bar Color')]]

| Type | Default |
|:----:|:-------:|
|number|None|

Set status bar color. This will work starting from API Level 21 (Android Lollipop

### Status Bar Light Icons

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Form', 'Status Bar Light Icons')]]

| Type | Default |
|:----:|:-------:|
|boolean|None|

This option tells the system to use dark statusbar icons, useful for lighter colored status bars. Works only for devices with API &gt;= 23.

### Title Bar Color

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Form', 'Title Bar Color')]]

| Type | Default |
|:----:|:-------:|
|number|None|

Set title bar color

### Title Bar Text Color

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Form', 'Title Bar Text Color')]]

| Type | Default |
|:----:|:-------:|
|number|None|

Set a custom color for the TitleBar text.

### Width

:eyes: Read-Only property
[[PropertyBlockGetter('Form', 'Width')]]

| Type | Default |
|:----:|:-------:|
|number|None|

Screen width (x-size).

### is Keyboard Visible

:eyes: Read-Only property
[[PropertyBlockGetter('Form', 'is Keyboard Visible')]]

| Type | Default |
|:----:|:-------:|
|boolean|None|

Returns the status of the keyboard. If the keyboard is visible then the result is true.