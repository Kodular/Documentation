# Snackbar

## Overview
Snackbars are used in to provide feedback about an operation performed in the app.  
They show a message at the bottom of the screen and lower left part of the screen on larger screens.  

Snackbars are shown above all the other visible components on the screen.
Only one **Snackbar** can be visible at any given time.

There are two components in a **Snackbar**:

1. `Message` - The text that is shown on the **Snackbar**.
2. `Action Button` - An optional button that can be shown on the right end of the **Snackbar**.  
A click on this button can be detected with the [Click](#click) event.

<br><br>
![Snackbar](/assets/images/components/user-interface/snackbar/preview.png){: class="preview-img"}


An example Snackbar with an `Action Button`.
{: .img-caption }


## Properties

### BackgroundColor

_**\(** Getter + Setter **\)**    
`Type: Color`_

The background color with which the **Snackbar** is shown.


### Button Text Color

_**\(** Getter + Setter **\)**  
`Type: Color`_

The color of the text of the `Action button`, if the `Action button` is shown in the **Snackbar**.

### Duration

_**\(** Setter Only **\)** **\(** Designer Only **\)**_


The time duration for which the **Snackbar** is visible and shown on the screen.

Options              | []()
-------------------- | ------------
`Indefinite`         | Show the **Snackbar** indefinitely. It will be shown until it is dismissed or another **Snackbar** is shown.  
`Short`              | Show the **Snackbar** for a short duration.
`Long`               | Show the **Snackbar** for a long duration.

## Methods


### Dismiss
_**\(**  None  **\)**_

Dismisses i.e hides the **Snackbar** that is being shown on the screen.
[On Dismissed](#on-dismissed) event is called with the `event` text as _Manual_.


### Show
_**\(**  Text `message`  **\)**_

Shows the **Snackbar** with the message specified.

Params               | []() 
-------------------- | ---------- 
`message`            | **Text:** The message that will be shown in the Snackbar. This message can be formatted as HTML .


### Show With Button
_**\(**  Text `message`, Text `buttonText`  **\)**_

Shows the **Snackbar** with an `Action Button`. `Action Button` is the button shown on the right side of the  
inside the **Snackbar**, which when clicked, fires the [Clicked](#clicked) event.

Params               | []() 
-------------------- | ---------- 
`message`            | **Text:** The message that will be shown in the Snackbar. This message can be formatted as HTML .
`buttonText`         | **Text:** The text that will be shown on the `Action Button` of the **Snackbar**.


## Events


### Click
_**\(**  None  **\)**_

Indicates that the user has clicked the `Action Button` on the **Snackbar**.


### On Dismissed
_**\(**  Text `event`  **\)**_

Indicates that the **Snackbar** has been dismissed.

Params               | []() 
-------------------- | ---------- 
`event`              | **Text:** The event through which the **Snackbar** was dimissed. It can be any of the following options: <br><br> <li> _ACTION_ - Dismissed with the click on the `Action Button`. </li><br> <li> _CONSECUTIVE_ - Dismissed with another **Snackbar** shown.</li><br><li> _MANUAL_ - Dismissed by calling [Dismiss](#dismiss) method. </li><br><li> _SWIPE_ - Dismissed by a swipe on the screen by the user.  </li><br><li> _TIMEOUT_ - Dismissed after the timeout of the duration set in [Duration](#duration).


### On Shown
_**\(**  None  **\)**_

Indicates that the  **Snackbar** is shown on the screen.
