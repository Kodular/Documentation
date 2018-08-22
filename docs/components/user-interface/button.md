# Button


## Overview

A button is a basic UI element with which the user can interact with your apps by tapping or 
clicking on it to perform an action.


<br><br>
![Preview of button](/assets/images/components/user-interface/button/preview.png){: class="preview-img"}

A typical button
{: .img-caption}


## Properties

{!includes/bgcolor-property.md!}

!!! caution ""
    If the _[Image](#image)_ property is set, then this is overriden.


### Border Shadow

![](/assets/images/components/user-interface/button/d_border-shadow.png)

_**\(** Advanced | Setter only | Designer**\)**  
`Type: Color`_

The color of ripple effect when touching the button.


{!includes/enabled-property.md!}


{!includes/all-font-properties.md!}


{!includes/height-property.md!}


### Image

![](/assets/images/components/user-interface/button/d_image.png) ![](/assets/images/components/user-interface/button/p_image.png)

_**\(** Getter + Setter **\)**  
`Type: Asset`_ 

The image that is displayed on the button as a background.

!!! caution ""
    This property overrides the [Background Color](#background-color) property.


### Rotation Angle

![](/assets/images/components/user-interface/button/d_rotation-angle.png) ![](/assets/images/components/user-interface/button/p_rotation-angle.png)

_**\(** Getter + Setter **\)**  
`Type: Number`_ 

The degrees that the **Button** is rotated around the pivot point. Increasing values result in clockwise rotation.


### Shape

![](/assets/images/components/user-interface/button/d_shape.png)

_**\(** Setter only | Designer**\)**  
`Type: Text`_ 

The shape of the **Button**.

Options              | []()
-------------------- | ------------
`Default`            | The default shape of the button i.e a standard button.
`Rectangular`        | The button is in rectangular shape , similar to `Default` shape.
`Rounded`            | The corners of the button are rounded giving it a shape like rounded rectangle.
`Oval   `            | The **Button** is in the shape of an oval.


### Show Feedback

![](/assets/images/components/user-interface/button/d_show-feedback.png) ![](/assets/images/components/user-interface/button/p_show-feedback.png)

_**\(** Advanced | Getter + Setter **\)**  
`Type: Number`_ 

Determines whether the **Button** shows a visual feedback for a button that has an image as background.


### Touch Color

![](/assets/images/components/user-interface/button/d_touch-color.png) ![](/assets/images/components/user-interface/button/p_touch-color.png)

_**\(** Advanced | Setter only **\)**  
`Type: Color`_

The color of ripple effect when touching the button.


{!includes/text-property.md!}


{!includes/width-property.md!}


{!includes/visible-property.md!}



## Methods

### Button Click

![](/assets/images/components/user-interface/button/m_button-click.png)

_**\(** None **\)**_ 

Perform a Button click. The Click event is also fired when this method is executed.

### Set Shadow

![](/assets/images/components/user-interface/button/m_set-shadow.png)

_**\(** Number `x`, Number `y`, Number `radius`, Color `color` **\)**_ 

Adds a shadow to the button.

Params           |  []()       
---------------- | ------- 
`x`              | **Number:**  The x-displacement of the shadow.
`y`              | **Number:**  The y-displacement of the shadow.
`radius`         | **Number:**  The radius of the shadow.
`color`          | **Color:**  The color of the shadow.


### With Icon from Font Awesome

![](/assets/images/components/user-interface/button/m_with-icon-from-font-awesome.png)

_**\(** Text `position`, Text `icon Name`, Color `icon Color`, Number `padding`, Number `size` **\)**_ 

Inserts an icon from [Font Awesome](https://fontawesome.com/v4.7.0) in the button.

Params           |  []()       
---------------- | ------- 
`position`       | **Text:** The position of the icon. It can be `Left`, `Right`, `Top` or `Bottom`
`icon Name`      | **Text:** The Font Awesome icon name or code. See [Font Awesome Cheetsheet](https://fontawesome.com/v4.7.0/cheatsheet/) for available codes.
`icon Color`     | **Color:** The color of the icon.
`padding`        | **Number:** The padding of the icon.
`size`           | **Number:** The size of the icon.


### With Icon from Material Font

![](/assets/images/components/user-interface/button/m_with-icon-from-material-font.png)

_**\(** Text `position`, Text `icon Name`, Color `icon Color`, Number `padding`, Number `size` **\)**_ 

Inserts an icon from [Material Font](https://material.io/icons) in the button.

Params           |  []()       
---------------- | ------- 
`position`       | **Text:** The position of the icon. It can be `Left`, `Right`, `Top` or `Bottom`
`icon Name`      | **Text:** The Material Icon name. See [Material Icons](https://material.io/icons/) for available icons.
`icon Color`     | **Color:** The color of the icon.
`padding`        | **Number:** The padding of the icon.
`size`           | **Number:** The size of the icon.


### With Icon from Picture

![](/assets/images/components/user-interface/button/m_with-icon-from-picture.png)

_**\(** Text `position`, Asset `picture`, Number `padding`, Number `width`, Number `height` **\)**_ 

Inserts an icon from an uploaded image in the button.

Params           |  []()       
---------------- | ------- 
`position`       | **Text:** The position of the icon. It can be `Left`, `Right`, `Top` or `Bottom`
`picture`        | **Asset:** The name of the uploaded image
`padding`        | **Number:** The padding of the icon.
`width`          | **Number:** The width of the icon.
`height`         | **Number:** The height of the icon.



## Events

### Click

![](/assets/images/components/user-interface/button/e_click.png)

_**\(** None **\)**_ 

Indicates that the user has clicked the button \(i.e pressed and released\)


### Got Focus

![](/assets/images/components/user-interface/button/e_got-focus.png)

_**\(** None **\)**_

Indicates the has been cursor moved over the button so it is now possible to click it.


### Long Click

![](/assets/images/components/user-interface/button/e_long-click.png)

_**\(** None **\)**_

Indicates that the user has clicked and held down the button. _Click_ event is not 
fired when the Button is long clicked.


### Lost Focus

![](/assets/images/components/user-interface/button/e_lost-focus.png)

_**\(** None **\)**_

Indicates the cursor moved away from the button so it is now no longer possible to click it.


### Touch Down

![](/assets/images/components/user-interface/button/e_touch-down.png)

_**\(** None **\)**_

Indicates that the button was pressed down.


### Touch Up

![](/assets/images/components/user-interface/button/e_touch-up.png)

_**\(** None **\)**_

Indicates that a button has been released.
