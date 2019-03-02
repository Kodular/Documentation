# Screen

**Screen** is the top-most component in any app. All the other components are placed on a **Screen**.

If you take the app as a book, the Screens can be regarded as the pages of a book and the other components
as the various elements present on a page of a book, text, images etc.

<br>
 ![screen-book](/assets/images/components/screen/screen-book-analogy.png)

Screen <--> Book
{: .img-caption}

<br>

!!! warning
    This page is still in progress. You can check the description of blocks for help.
    However, you can check [**MIT App Inventor Documentation for Screen** here.](http://ai2.appinventor.mit.edu/reference/components/userinterface.html#Screen)

## Properties

### About Screen

_**\(** Getter + Setter **\)**    
`Type: Text`_

The information the about the screen.  
It appears when "About this Application" is selected from the system menu.
You can use it to inform people about your app and that particular screen.  


### About Screen Background Color

_**\(** Getter + Setter **\)**    
`Type: Color`_

The backaground color of the "About this application" dialog.



### About Screen Light Theme

_**\(** Getter + Setter **\)**    
`Type: Boolean`_

Specifies whether the "About This Application" dialog should appear in a light-themed mode or in dark mode.


### About Screen Title

_**\(** Setter only **\)**    
`Type: Text`_

The title of the dialog in which the "About Screen" information is displayed.
Default is `About This Application`.


### Align Horizontal

_**\(** Getter + Setter **\)**    
`Type: Number`_

The horizontal alignment of the contents of the **Screen**.  

!!! tip 
    _Use the numbers to set or change the alignment thorugh the Blocks_

Options              | []()
-------------------- | ------------
1: `Left`            | Horizontally left align the contents.
2: `Center`          | Horizontally center align the contents.
3: `Right`           | Horizontally right align the contents.



### Align Vertical

_**\(** Getter + Setter **\)**    
`Type: Number`_

The vertical alignment of the contents of the **Screen**.  

!!! tip 
    _Use the numbers to set or change the alignment thorugh the Blocks_

Options              | []()
-------------------- | ------------
1: `Top`             | Vertically top align the contents.
2: `Center`          | Vertically center align the contents.
3: `Bottom`          | Vertically right align the contents.




{!includes/bgcolor-property.md!}


### Background Image

_**\(** Getter + Setter **\)**    
`Type: Asset`_

The screen background image.
!!! caution
    This property overrides the  [_Background Color_](#background-color) property.
    Only the set image will be shown.


### Close Screen Animation

_**\(** Getter + Setter **\)**    
`Type: Text`_

The animation for closing current screen and returning  to the previous screen. Valid options are default, fade, zoom, slidehorizontal, slidevertical, and none

Options              | []()
-------------------- | ------------
1: `Default`         | The default animation.
2: `Fade`            | The screen fades and disappears.
3: `Zoom`            | The screen zooms out and disappears.
4: `Slide Horizontal`| The screen slides out horizontally and disappears.
5: `Slide Vertical`  | The screen slides out vertically and disappears.
6: `None`            | No screen animation.


### Height

_**\(** Getter only **\)**  **\(** Blocks only **\)**   
`Type: Number`_

The screen height of the device on the which the app is being run on.


### High Quality

_**\(** Getter + Setter **\)**    
`Type: Boolean`_

Determines whether the images should be loaded in High Quality or whether there can be intenal optimizations to 
render the images.  
If set to `True`, then it images are loaded as High Quality, if set to `False`, it isn't so.

!!! note
    This is a app-level setting i.e determines the behaviour of how the images are loaded
    thorughout the whole app.


### Is Companion

_**\(** Getter only **\)**  **\(** Blocks only **\)**   
`Type: Boolean`_

Whether the app is in development mode, i.e whether it is being run on the Kodular Companion or is it being run as 
a standalone app installed through the  exported APK.
`True` - Is run on Companion, `False` - Standalone app

This property is used to check and perform the same task that might be different in a Companion and on an APK.
(For example, for setting the `Assets` path for various properties.)

### Is Side Menu Added

_**\(** Getter only **\)**  **\(** Blocks only **\)**   
`Type: Boolean`_

Gives the info whether a Side Menu has been added to the Screen.

* `True` - Side menu has been added.
* `False` - Side menu has not been added.


### Is Side Menu Open

_**\(** Getter only **\)**  **\(** Blocks only **\)**   
`Type: Boolean`_

Gives the info whether the Side Menu is currently open or not.

* `True` - Side menu is open.
* `False` - Side menu is closed.



### Keep Screen On

_**\(** Getter + Setter **\)**    
`Type: Boolean`_

Determines whether the screen is to be kept on while the screen is open i.e don't let the display black out.


### Navigation Bar Color

_**\(** Getter + Setter **\)**    
`Type: Color`_

The color of the Navigation Bar(the one at the bottom of the screen with the Back, Home buttons).

!!! caution "Min Android Version"
    This will work on devices with Android 5.0 - Lollipop or newer versions. 



### Navigation Bar Light Icons

_**\(** Getter + Setter **\)**  **\(** Blocks only **\)**   
`Type: Boolean`_

This option tells the system to use dark navigation bar icons, useful for lighter colored navigation bars. Works only for devices with API >= 26.



### OpenScreenAnimation

_**\(** Getter + Setter **\)**    
`Type: Text`_

The animation for switching to another screen. Valid options are default, fade, zoom, slidehorizontal, slidevertical, and none



### ScreenOrientation

_**\(** Getter + Setter **\)**    
`Type: Text`_

The requested screen orientation, specified as a text value.  Commonly used values are landscape, portrait, sensor, user and unspecified.  See the Android developer documentation for ActivityInfo.Screen_Orientation for the complete list of possible settings.



### Scrollable

_**\(** Getter + Setter **\)**    
`Type: Boolean`_

Determines whether the app screen can be scrolled vertically to view contents below, if it overflows the screen.

* `True` - There will be a vertical scrollbar on the screen, and the height of the application can exceed the physical height of the device.
* `False` - The application height is constrained to the height of the device.


### Show Nav Bar

_**\(** Getter + Setter **\)**    
`Type: Boolean`_

Determines whether the Navigation Bar is shown or not.


### Show Status Bar

_**\(** Getter + Setter **\)**    
`Type: Boolean`_

Determines whether the Status Bar(i.e the topmost bar on the screen) is shown or not.


### Show Titlebar Back Button

_**\(** Getter + Setter **\)**  **\(** Blocks only **\)**   
`Type: Boolean`_

If true it will show in the TitleBar a back button only if no side menu was added. If a side menu was added it will remove the ‘hamburger’-menu icon but the side menu can still be opened.



### StatusBarColor

_**\(** Getter + Setter **\)**  **\(** Blocks only **\)**   
`Type: Number`_

Set status bar color. This will work starting from API Level 21 (Android Lollipop



### StatusbarLightIcons

_**\(** Getter + Setter **\)**  **\(** Blocks only **\)**   
`Type: Boolean`_

This option tells the system to use dark statusbar icons, useful for lighter colored status bars. Works only for devices with API >= 23.



### Title

_**\(** Getter + Setter **\)**    
`Type: Text`_

The caption for the form, which apears in the title bar



### TitleBarColor

_**\(** Setter only **\)**  **\(** Blocks only **\)**   
`Type: Number`_

Set title bar color



### TitleBarSubTitle

_**\(** Getter + Setter **\)**    
`Type: Text`_

Set the TitleBar's subtitle.



### TitleBarTypefaceImport

_**\(** Setter only **\)**    
`Type: Text`_

Set a custom font.



### TitleVisible

_**\(** Getter + Setter **\)**    
`Type: Boolean`_

The title bar is the top gray bar on the screen. This property reports whether the title bar is visible.



### TitlebarTextColor

_**\(** Getter + Setter **\)**  **\(** Blocks only **\)**   
`Type: Number`_

Set a custom color for the TitleBar text.



### Width

_**\(** Getter only **\)**  **\(** Blocks only **\)**   
`Type: Number`_

The screen width of the device on the which the app is being run on.


