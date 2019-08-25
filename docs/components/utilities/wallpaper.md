# Wallpaper

## Overview

The **Wallpaper** component can be used to get and set the device's wallpaper.


## Properties

### Desired Minimum Height
![](/assets/images/components/utilities/wallpaper/p_desired-minimum-height.png)

\[ Getter only | Blocks only \]  
`Type: Number`

The least wallpaper height that is preferred by the device. Wallpaper assets with heights smaller than this value may not show up correctly
in the device's lock screen and/or home screen.


### Desired Minimum Width
![](/assets/images/components/utilities/wallpaper/p_desired-minimum-width.png)

\[ Getter only | Blocks only \]  
`Type: Number`

The least wallpaper width that is preferred by the device. Wallpaper assets with widths smaller than this value may not show up correctly
in the device's lock screen and/or home screen.


### Is Set Wallpaper Allowed
![](/assets/images/components/utilities/wallpaper/p_is-set-wallpaper-allowed.png)

\[ Getter only | Blocks only \]  
`Type: Boolean`

Determines if the app has the required permissions to set the device's wallpaper.

* `True` - The app can set the wallpaper.
* `False` - The app does not have the permissions to perform wallpaper actions.

!!! caution
    This property will work only on devices running Android 7.0 (Nougat) or later.


### Is Wallpaper Supported
![](/assets/images/components/utilities/wallpaper/p_is-wallpaper-supported.png)

\[ Getter only | Blocks only \]  
`Type: Boolean`

Determines if the device supports setting/getting the wallpaper.

* `True` - The device supports wallpaper actions.
* `False` - The device does not support wallpaper actions.

!!! caution
    This property will work only on devices running Android 6.0 (Marshmallow) or later.


### Save Wallpaper As
![](/assets/images/components/utilities/wallpaper/d_save-wallpaper-as.png) ![](/assets/images/components/utilities/wallpaper/p_save-wallpaper-as.png)

\[ Setter only \]  
`Type: Boolean`

The name of the file the wallpaper will be saved as after [Get Wallpaper](#get-wallpaper) is called and the current wallpaper is fetched.


## Methods

### Clear
![](/assets/images/components/utilities/wallpaper/m_clear.png)

\[ None \]

Resets the home screen's current wallpaper to the system default. 


### Clear Wallpaper
![](/assets/images/components/utilities/wallpaper/m_clear-wallpaper.png)

\[ None \]

Resets the lock and home screens' wallpapers to the system default.
 


### Get Wallpaper
![](/assets/images/components/utilities/wallpaper/m_get-wallpaper.png)

\[ None \]

Returns the full path to the currently set wallpaper. The path can be accessed from the [Got Wallpaper](#got-wallpaper) event.


### Set Lock Screen Wallpaper
![](/assets/images/components/utilities/wallpaper/m_set-lock-screen-wallpaper.png)

\[ Text `image` \]

Sets the wallpaper of the lock screen to the image that has been passed as a parameter.

Params           |  []()       
---------------- | ------- 
`image`          | **Text:**  The full path to the new wallpaper image.

!!! caution
    This property will work only on devices running Android 7.0 (Nougat) or later.


### Set Wallpaper
![](/assets/images/components/utilities/wallpaper/m_set-wallpaper.png)

\[ Text `image` \]

Sets the wallpaper of the lock and home screens to the image that has been passed as a parameter.

Params           |  []()       
---------------- | ------- 
`image`          | **Text:**  The full path to the new wallpaper image.

## Events

### Got Wallpaper
![](/assets/images/components/utilities/wallpaper/e_got-wallpaper.png)

\[ Text `picture` \]

Triggers when [Get Wallpaper](#get-wallpaper) has been called, and the system wallpaper has been fetched.

Params             |  []()       
------------------ | ------- 
`picture`          | **Text:**  The full path to the current wallpaper of the device.


### Wallpaper Changed
![](/assets/images/components/utilities/wallpaper/e_wallpaper-changed.png)

\[ Boolean `success` \]

Triggers after [Set Wallpaper](#set-wallpaper) has been called. This event contains the result of the [Set Wallpaper](#set-wallpaper) operation.

Params             |  []()       
------------------ | ------- 
`success`          | **Boolean:**  `True` if the wallpaper has been successfully changed, `False` if there was an error in the operation.


### Wallpaper Cleared
![](/assets/images/components/utilities/wallpaper/e_wallpaper-cleared.png)

\[ None \]

Triggers after [Clear Wallpaper](#clear-wallpaper) has been called, and the device's wallpaper has been reset to the system default.