# Checkbox

A **checkbox** is a GUI widget that allows the user to make a binary choice, i.e. a choice between one of two possible mutually exclusive options. For example, the user may have to answer 'yes' \(checked\) or 'no' \(not checked\) on a simple yes/no question.

Often, a series of checkboxes are presented, each representing different options. Then the user may select several of the choices. 

The difference between a Radio button and a checkbox is that a checkbox allows the user to select multiple options from a set, while a Radio Button allows the user to select only one option from a set.



## Properties

{!includes/bgcolor-property.md!}


### Checkbox Color
_**\(** Getter + Setter **\)**  
`Type: Color`_

The color of the checkbox displayed. This determines only the color of the checkbox and 
not its text.
See _[Text Color](#text-color)_ for the color of the text.


### Checked
_**\(** Getter + Setter **\)**  
`Type: Boolean`_

Determines whether the **Checkbox** is checked or not.
`true` if checked, `false` otherwise. 


{!includes/height-property.md!}


{!includes/text-property.md!}


{!includes/visible-property.md!}


{!includes/width-property.md!}


## Events


### Changed
_**\(** None **\)**_

Indicates that the user has checked or unchecked the **Checkbox**.
Use the `Getter` block of _[Checked](#checked)_ property inside this Event's block to know the current status.


### Got Focus
_**\(** None **\)**_

Indicates the has been cursor moved over the **Checkbox** so it is now possible to click it.


### Lost Focus
_**\(** None **\)**_

Indicates the cursor moved away from the **Checkbox** so it is now no longer possible to click it.