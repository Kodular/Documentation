# Linear Progressbar

## Overview
A Progressbar is used to visually indicate the user the progress of some task, such as a download, data transfer etc.

A **determinate progress bar** is used to indicate the progress of an task whose exact value of  progress is known for eg. the percentage of a file download, number of files transferred.

A **indeterminate progress bar** is used in situations where the extent of the task is unknown  or the progress of the task cannot be determined in a way that could be expressed as a percentage, for example, when a request to a server is being processed where we don't know the exact value of progress, but there is a need to indicate to the user that the task is in progress.

<br><br>
![Linear Progressbar](/assets/images/components/user-interface/linear-progressbar/preview.gif){: class="preview-img"}


A determinate progressbar fills from 0% to 100%.  
An indeterminate progress bar moves in a fixed path, growing and shrinking in size.
{: .img-caption }

!!! tip
    Use progressbars in a non-interupptive manner.


## Properties

### Indeterminate

![](/assets/images/components/user-interface/linear-progressbar/d_indeterminate.png) ![](/assets/images/components/user-interface/linear-progressbar/p_indeterminate.png)

_**\(** Getter + Setter **\)**  
`Type: Boolean`_

Determines whether the progress bar is to be displayed in the **indeterminate** mode.
(See [_Overview_](#overview) for the difference between **determinate** and **indeterminate** modes.)

Options              | []()
-------------------- | ------------
`true `              | The progressbar is in **indeterminate** mode.
`false `             | The progressbar is in **determinate** mode.


### Indeterminate Color

![](/assets/images/components/user-interface/linear-progressbar/d_indeterminate-color.png) ![](/assets/images/components/user-interface/linear-progressbar/p_indeterminate-color.png)

_**\(** Getter + Setter **\)**  
`Type: Color`_

The color in which the indeterminate progress bar is displayed, if the [_Indeterminate_](#indeterminate) property is set to _true_. Has no effect on the apperance of the **determinate** progress bar.


### Maximum

![](/assets/images/components/user-interface/linear-progressbar/d_maximum.png) ![](/assets/images/components/user-interface/linear-progressbar/p_maximum.png)

_**\(** Getter + Setter **\)**  
`Type: Number`_

The upper range of the progress bar in **determinate** mode (i.e when the **Indeterminate** property is set to _false_.)  

The default value is _100_


### Minimum

![](/assets/images/components/user-interface/linear-progressbar/d_minimum.png) ![](/assets/images/components/user-interface/linear-progressbar/p_minimum.png)

_**\(** Getter + Setter **\)**  
`Type: Number`_

The lower range of the progress bar in **determinate** mode (i.e when the **Indeterminate** property is set to _false_.)  

The default value is _0_  

!!! caution "Note"
    This property can be set only on devices using Android Oreo or newer versions.
    Setting this method has no effect on devices using older versions of Android.


### Progress

![](/assets/images/components/user-interface/linear-progressbar/p_progress.png)

_**\(** Getter + Setter | Blocks**\)**  
`Type: Number`_

The current progress value of the progress bar in **determinate** mode (i.e when the  [_Indeterminate_](#indeterminate) property is set to _false_). When using _Getter_, returns 0 if **Indeterminate** is set to _true_


{!includes/visible-property.md!}


{!includes/width-property.md!}



## Methods


### Increment Progress By

![](/assets/images/components/user-interface/linear-progressbar/m_increment-progress-by.png)

_**\(** Number value **\)**_

Increases the value progress by the given value.


Params               |  []()       
-------------------- | ------- 
`value`              | **Number:**  The amount by which progress should be increased.


## Events

### Progress Changed

![](/assets/images/components/user-interface/linear-progressbar/e_progress-changed.png)

_**\(** Number progress **\)**_

Indicates that the value of the progress bar has changed.

Params               | []()
-------------------- | ---------- 
`progress`           | **Number:**  The current value of the progressbar.This is 0 if the progressbar is in **indeterminate** mode.


