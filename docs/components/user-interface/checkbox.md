# Checkbox

A **checkbox** is a GUI widget that allows the user to make a binary choice, i.e. a choice between one of two possible mutually exclusive options. For example, the user may have to answer 'yes' \(checked\) or 'no' \(not checked\) on a simple yes/no question.

Often, a series of checkboxes are presented, each representing different options. Then the user may select several of the choices. 

The difference between a Radio button and a checkbox is that a checkbox allows the user to select multiple options from a set, while a Radio Button allows the user to select only one option from a set.



## Properties

{!includes/bgcolor-property.md!}


### Checkbox Color

![](/assets/images/components/user-interface/checkbox/d_checkbox-color.png) ![](/assets/images/components/user-interface/checkbox/p_checkbox-color.png)

_**\(** Getter + Setter **\)**  
`Type: Color`_

The color of the checkbox displayed. This determines only the color of the checkbox and 
not its text.
See _[Text Color](#text-color)_ for the color of the text.


### Checked

![](/assets/images/components/user-interface/checkbox/d_checked.png) ![](/assets/images/components/user-interface/checkbox/p_checked.png)

_**\(** Getter + Setter **\)**  
`Type: Boolean`_

Determines whether the **Checkbox** is checked or not.
`true` if checked, `false` otherwise.

{!includes/enabled-property.md!}

{!includes/text-property.md!}

{!includes/height-property.md!}

{!includes/width-property.md!}

{!includes/visible-property.md!}

## Methods

### Set Shadow

![](/assets/images/components/user-interface/checkbox/m_set-shadow.jpg)

_**\(** Number `x`, Number `y`, Number `radius`, Color `color` **\)**_ 

Adds a shadow to the checkbox.

Params           |  []()       
---------------- | ------- 
`x`              | **Number:**  The x-displacement of the shadow.
`y`              | **Number:**  The y-displacement of the shadow.
`radius`         | **Number:**  The radius of the shadow.
`color`          | **Color:**  The color of the shadow.


## Events


### Changed

![](/assets/images/components/user-interface/checkbox/e_changed.png)

_**\(** None **\)**_

Indicates that the user has checked or unchecked the **Checkbox**.
Use the `Getter` block of _[Checked](#checked)_ property inside this Event's block to know the current status.


### Got Focus

![](/assets/images/components/user-interface/checkbox/e_got-focus.png)

_**\(** None **\)**_

Indicates the has been cursor moved over the **Checkbox** so it is now possible to click it.


### Lost Focus

![](/assets/images/components/user-interface/checkbox/e_lost-focus.png)

_**\(** None **\)**_

Indicates the cursor moved away from the **Checkbox** so it is now no longer possible to click it.