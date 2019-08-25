# Color Utilities


## Overview

The **Color Utilities** component can be used to manipulate colors and convert them from one format to another.


## Methods

### Convert Hex To Int
![](/assets/images/components/utilities/color-utilities/m_convert-hex-to-int.png)

\[ Text `hex Color` \]

Returns the Kodular integer representation of the hexadecimal color value.

Params           |  []()       
---------------- | ------- 
`hex Color`      | **Text:**  The hexadecimal color value (must be in the format `#` + `aa` + `rr` + `gg` + `bb`)

    
### Convert Int To Hex
![](/assets/images/components/utilities/color-utilities/m_convert-int-to-hex.png)

\[ Number `color` \]

Returns the hexadecimal representation of the integer color. The returned value will be in the format `aarrggbb`.

Params           |  []()       
---------------- | ------- 
`color`          | **Number:**  The integer value of the color.

!!! info
    Integer color codes are specific to App Inventor, and are used internally to manipulate components' color values. A list of common
    integer color codes can be found in the [App Inventor Color Chart](http://appinventor.mit.edu/explore/app-inventor-color-chart).
  
  
### Get Luminance
![](/assets/images/components/utilities/color-utilities/m_get-luminance.png)

\[ Number `color` \]

Returns the luminance of the color as a value between `0.0` and `1.0`. 
The luminance is measured as the Y value in the XYZ representation of the color.

Params           |  []()       
---------------- | ------- 
`color`          | **Number:**  The integer value of the color.

!!! info
    The CIE XYZ representation of a color is a 3D vector model of each of the three components of the color, where each vector is a
    scalar multiple of the unit vector describing its primary color. More information about CIE XYZ color spaces and colorimetry can be found in [this Medium Article](https://medium.com/hipster-color-science/a-beginners-guide-to-colorimetry-401f1830b65a) by Chandler Abraham. 
    
    
### Is Dark Color
![](/assets/images/components/utilities/color-utilities/m_is-dark-color.png)

\[ Number `color` \]

Returns `True` if the Luminance of the color is less than `0.5`, and `False` otherwise.

Params           |  []()       
---------------- | ------- 
`color`          | **Number:**  The integer value of the color.
    
    
### Set Alpha Value
![](/assets/images/components/utilities/color-utilities/m_set-alpha-value.png)

\[ Number `color`, Number `alpha` \]

Sets the alpha (transparency) value of the passed color.

Params           |  []()       
---------------- | ------- 
`color`          | **Number:**  The integer value of the color whose alpha value is to be set.
`alpha`          | **Number:**  An integer between `0` and `255`, where `0` is opaque and `255` is transparent.