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


### High Quality Images

_**\(** Getter + Setter **\)**    
`Type: Boolean`_

Determines whether the images should be loaded in High Quality or whether there can be intenal optimizations to render the images.  
If set to `True`, then it images are loaded as High Quality, if set to `False`, it isn't so.

!!! note
    This is a app-level setting i.e determines the behaviour of how the images are loaded
    thorughout the whole app.


### Is Companion

_**\(** Getter only **\)**  **\(** Blocks only **\)**   
`Type: Boolean`_

Whether the app is in development mode, i.e whether it is being run on the Kodular Companion or is it being run as a standalone app installed through the exported APK.
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


### Open Screen Animation

_**\(** Getter + Setter **\)**    
`Type: Text`_

The animation for switching to another screen. Valid options are default, fade, zoom, slidehorizontal, slidevertical, and none


### Screen Orientation

_**\(** Getter + Setter **\)**    
`Type: Text`_

The requested screen orientation, specified as a text value.  Commonly used values are landscape, portrait, sensor, user and unspecified.  See the Android developer documentation for ActivityInfo.Screen_Orientation for the complete list of possible settings.


### Scrollable

_**\(** Getter + Setter **\)**    
`Type: Boolean`_

Determines whether the app screen can be scrolled vertically to view contents below, if it overflows the screen.

* `True` - There will be a vertical scrollbar on the screen, and the height of the application can exceed the physical height of the device.
* `False` - The application height is constrained to the height of the device.


### Show Options Menu
_**\(** Designer Only **\)**_

Whether to show the options menu or not.


### Show Navigation Bar

_**\(** Getter + Setter **\)**    
`Type: Boolean`_

Determines whether the Navigation Bar is shown or not.


### Show Status Bar

_**\(** Getter + Setter **\)**    
`Type: Boolean`_

Determines whether the Status Bar (i.e the topmost bar on the screen) is shown or not.


### Show Title Bar Back Button

_**\(** Getter + Setter **\)**  **\(** Blocks only **\)**   
`Type: Boolean`_

If true it will show in the Title Bar a back button only if no side menu was added. If a side menu was added it will remove the ‘hamburger’-menu icon but the side menu can still be opened.


### Status Bar Color

_**\(** Getter + Setter **\)**  **\(** Blocks only **\)**   
`Type: Number`_

Set status bar color. This will work starting from API Level 21 (Android Lollipop


### Status Bar Light Icons

_**\(** Getter + Setter **\)**  **\(** Blocks only **\)**   
`Type: Boolean`_

This option tells the system to use dark status bar icons, useful for lighter colored status bars. Works only for devices with API >= 23.


### Title

_**\(** Getter + Setter **\)**    
`Type: Text`_

The caption for the form, which appears in the title bar


### Title Bar Color

_**\(** Setter only **\)**  **\(** Blocks only **\)**   
`Type: Number`_

Set title bar color


### Title Bar Font Typeface
**\(** Designer Only **\)**  

The font of the text shown on the Title Bar i.e the bar where the Screen Title is shown.


### Title Bar Subtitle

_**\(** Getter + Setter **\)**    
`Type: Text`_

Set the Title Bar's subtitle.


### Title Bar Typeface Import

_**\(** Setter only **\)**    
`Type: Text`_

Set a custom font.


### Title Visible

_**\(** Getter + Setter **\)**    
`Type: Boolean`_

The title bar is the top gray bar on the screen. This property reports whether the title bar is visible.


### Title Bar Text Color

_**\(** Getter + Setter **\)**  **\(** Blocks only **\)**   
`Type: Number`_

Set a custom color for the TitleBar text.


### Width

_**\(** Getter only **\)**  **\(** Blocks only **\)**   
`Type: Number`_

The screen width of the device on the which the app is being run on.

## Screen1 Only Properties

### What is Screen1?

Screen1 is the name of the default screen that is present on any given app.
It is the screen that is automatically opened whenever an app is opened from the launcher menu of a device.  
Any workflow of the app should begin from the Screen1 and continue from there to the appropriate locations.

In addition, Screen1 is also used to set some of the app-wide properties.  
They are discussed below.


### Accent Color
_**\(** Designer Only **\)**  
`Type: Color`_

The Accent color that will be used throughout the app.


### App Name
_**\(** Designer Only **\)**  
`Type: Text`_

The name of the App.  This will be the name used when exported as an APK and
when installed in a user's device. This name will appear on the device's launcher.


### Icon
_**\(** Designer Only **\)**  
`Type: Text`_

The icon which will be shown in the device's launcher after the app is installed on the device. It is recommended to use a PNG image of dimensions 120x120.


### Min SDK
_**\(** Designer Only **\)**_

The minimum SDK level that the app can be run on.
Note that the app is not install-able on devices running with a version lower than the
selected version.


### Package Name
_**\(** Designer Only **\)**  
`Type: Text`_

It is the unique name by which your app is identified with.

!!! quote "[App ID - Android Developer docs](https://developer.android.com/studio/build/application-id)"
    Every Android app has a unique application ID that looks like a Java package name, such as `com.example.myapp`. This ID uniquely identifies your app on the device and in Google Play Store. If you want to upload a new version of your app, the application ID  must be the same as the original APK—if you change the application ID, Google Play Store treats   the APK as a completely different app. So once you publish your app, you should never change the application ID.


### Primary Color
_**\(** Designer Only **\)**  
`Type: Color`_

The Primary color that will be used throughout the app.


### Primary Color Dark
_**\(** Designer Only **\)**  
`Type: Color`_

The darkened version of the Primary Color that will be used throughout the app.


### RTL Support
_**\(** Designer Only **\)**_

Whether to support RTL languages in the app or not.


### Show Lists As Json
_**\(** Designer Only **\)**_

This is used to show lists as [JSON](https://en.wikipedia.org/wiki/JSON) instead of pairs in the app


### Sizing
_**\(** Designer Only **\)**_

The mode if Sizing used for all the components used in the app

* `Fixed` - The given size as specified in the component's height and width properties will be irrespective of the
            the device's screen size
* `Responsive` - The size of the components adapts to the size of the device's screen.


### Splash Enabled
_**\(** Designer Only **\)**_

Whether to show the Splash Screen or not.
Splash Screen is the temporary screen that will be shown whilst your app is being loaded for opening.


### Splash Icon
_**\(** Designer Only **\)**  
`Type: Asset`_

The image that will be shown on the Splash Screen if [Splash Enabled](#splash-enabled) is set to `True`.


### Theme
_**\(** Designer Only **\)**_

The theme that will be followed for showing certain components on the app.


### Tutorial URL
_**\(** Designer Only **\)**_

This is useful when you writing a tutorial and want to share a link to a webpage when the app is opened.
(Currently, only Kodular links are allowed.)


### Version Code
_**\(** Designer Only **\)**  
`Type: Number`_

The version code is used by the OS to determine if the app is an updated version (if it is already installed) and by Google Play. So whenever you are publishing to the Play Store, you should increment it.


### Version Name
_**\(** Designer Only **\)**  
`Type: Text`_

Unlike Version Code, Version Name can be any text and will appear in some places of the device, for example in the
App Settings menu of the device etc.
