# Bottom Sheet

## Overview
The **Bottom Sheet** component is used to display a modal-like dialog with the contents that can be 
populated from a [Layout](/component/layout) or can be set to show just a single Component.

These modal-like **Bottom Sheet**s  are usually used as an alternative to menu or as a simple dialog.

<br><br>
![Linear Progressbar](/assets/images/components/user-interface/linear-progressbar/preview.gif){: class="preview-img"}


A determinate progressbar fills from 0% to 100%.
An indeterminate progress bar moves in a fixed path, growing and shrinking in size.
{: .img-caption }



## Properties

### Dim Background

_**\(** Getter + Setter **\)**  
`Type: Boolean`_

Determines whether the **Bottom Sheet** is highlighted by dimming the background(as shown in the preview) when it is visible.

Options              | []()
-------------------- | ------------
`true `              | The background is dimmed.
`false `             | The **Bottom Sheet** has the same illuminance level and background is not dimmed



## Methods


### Hide Dialog

_**\(** None **\)**_

Hide the **Bottom Sheet** that is currently visible on the Screen.


### Register Component As Dialog

_**\(** Component `component` **\)**_

Set the component that will be shown in the **Bottom Sheet**.
It can be any User Visible components like a Button or a Label.

Params               | []()
-------------------- | ---------- 
`component`          | **Component:**  The component to be shown. This is set using the `Component` type block.(Found as the last of the among all the blocks of a component. )


### Register Layout As Dialog

_**\(** Layout `layout` **\)**_

Set the layout that will be shown in the **Bottom Sheet**.
This is similar to [Register Component As Dialog](#register-component-as-dialog), but the difference
is that this can be used to set the entire arrangements(such as Vertical or Horizontal Arrangement)
to be shown in the **Bottom Sheet** instead of a single component.

Params               | []()
-------------------- | ---------- 
`layout`             | **Layout:**  The Layout(Arrangement) to be shown. This is set using the `Component`type block.(Found as the last of the among all the blocks of an arrangement. )


### Show Dialog

_**\(** None **\)**_

Display the **Bottom Sheet** on the Screen.

!!! caution "Note"
    Before this Method is used, the contents of the **Bottom Sheet** must be set using either [Register Component As Dialog](#register-component-as-dialog) or [Register Layout As Dialog](#register-layout-as-dialog)

## Events

### Closed

_**\(** None **\)**_

Indicates that the **Bottom Sheet** has been dismissed and closed.


### Opened

_**\(** None **\)**_

Indicates that the **Bottom Sheet** is opened and now visible on the Screen.
