# Notifier

| Category | Requires | Version |
|:--------:|:-------:|:--------:|
|**User Interface**|<span class="chip chip-any">API 19, Android 4.4 - 4.4.4 KitKat</span>|<span class="chip chip-number">11</span>|

:mag: {>>Non-Visible component<<}

## Overview

The Notifier component displays alert dialogs, messages, and temporary alerts, and creates Android log entries through the following methods: 

*    ShowMessageDialog: displays a message which the user must dismiss by pressing a button.
*    ShowChooseDialog: displays a message two buttons to let the user choose one of two responses, for example, yes or no, after which the AfterChoosing event is raised.
*    ShowTextDialog: lets the user enter text in response to the message, after which the AfterTextInput event is raised. <li> ShowPasswordDialog: lets the user enter password in response to the message, after which the AfterTextInput event is raised. <li> ShowAlert: displays a temporary alert that goes away by itself after a short time.</li><li> ShowProgressDialog: displays an alert with a loading spinner that cannot be dismissed by the user. It can only be dismissed by using the DismissProgressDialog block.</li><li> CustomMessageDialog: New version to display dialogs with icon and in fullscreen mode.</li><li> CustomChooseDialog: New version to display choose dialogs with icon and in fullscreen mode.<li> LightTheme: To display the dialogs in a light or dark theme.</li><li> ShowLightbox: Displays a png or gif file from assets or from web url in a dialog.</li><li> ShowLinearProgress: Shows a progress dialog with a horizontal progress bar.</li><li> ShowSpinningProgress: Shows a spinning progress dialog.</li><li> UpdateProgress: Change the current value of the linear progress dialog.</li><li> ShowRadioListDialog: Shows a radio list dialog with a list of options.</li><li> ShowCheckboxListDialog: Shows a picker dialog with a list of options.</li><li> ShowListPicker: Shows a list picker dialog.</li><li> ShowTextInputDialog: Show a text input dialog.</li><li> ShowImageDialog: Show a image dialog. Animation types like "*.gif" are not supported.</li><li> ShowNumberPicker: Shows a number picker dialog that enables the user to select a number from a predefined range.</li><li> ShowWordPicker: Shows a word picker dialog that enables the user to select a number from a predefined word.</li><li> DismissProgressDialog: Dismisses the progress dialog displayed by ShowProgressDialog.</li><li> DismissSpinningProgress: Dismisses the progress dialog displayed by ShowSpinningProgress.</li><li> DismissLinearProgress: Dismisses the progress dialog displayed by ShowLinearProgress.</li><li> LogError: logs an error message to the Android log. </li><li> LogInfo: logs an info message to the Android log.</li><li> LogWarning: logs a warning message to the Android log.</li><li>The messages in the dialogs can be formatted using the following HTML tags:&lt;b&gt;, &lt;big&gt;, &lt;blockquote&gt;, &lt;br&gt;, &lt;cite&gt;, &lt;dfn&gt;, &lt;div&gt;, &lt;em&gt;, &lt;small&gt;, &lt;strong&gt;, &lt;sub&gt;, &lt;sup&gt;, &lt;tt&gt;. &lt;u&gt;</li><li>You can also use the font tag to specify color, for example, &lt;font color="blue"&gt;. Some of the available color names are aqua, black, blue, fuchsia, green, grey, lime, maroon, navy, olive, purple, red, silver, teal, white, and yellow</li></li></li>

??? example "Permissions"
    * [android.permission.INTERNET](https://developer.android.com/reference/android/Manifest.permission.html#INTERNET)

## Events

### After Choosing

Event to detect that a user have done his selection.

<div class="block" ai2-block="event" not-rendered="true" value="%7B%22componentName%22:%20%22Notifier%22,%20%22name%22:%20%22After%20Choosing%22,%20%22param%22:%20%5B%22choice%22%5D%7D"></div>

| Params | []() |
|--------|------|
|choice|<span class="chip chip-text">Text</span>|

### After Message Dialog

Event to detect that a user clicked on a button from the "Show Custom Message Dialog". Use the "title" response to know which dialog the user has clicked.

<div class="block" ai2-block="event" not-rendered="true" value="%7B%22componentName%22:%20%22Notifier%22,%20%22name%22:%20%22After%20Message%20Dialog%22,%20%22param%22:%20%5B%22title%22%5D%7D"></div>

| Params | []() |
|--------|------|
|title|<span class="chip chip-text">Text</span>|

### After Text Input

Event to detect that a user have done his text input in the "Show Text Dialog".

<div class="block" ai2-block="event" not-rendered="true" value="%7B%22componentName%22:%20%22Notifier%22,%20%22name%22:%20%22After%20Text%20Input%22,%20%22param%22:%20%5B%22response%22%5D%7D"></div>

| Params | []() |
|--------|------|
|response|<span class="chip chip-text">Text</span>|

### Checkbox Selection

Invoked after user has finished selecting items from the Checkbox picker. Returns a list of indices of the selected items in the order of selection. Returns a list having -1 if cancel was pressed.

<div class="block" ai2-block="event" not-rendered="true" value="%7B%22componentName%22:%20%22Notifier%22,%20%22name%22:%20%22Checkbox%20Selection%22,%20%22param%22:%20%5B%22id%22,%20%22selection%22%5D%7D"></div>

| Params | []() |
|--------|------|
|id|<span class="chip chip-number">Number</span>|
|selection|<span class="chip chip-list">List</span>|

### Custom Dialog Selection

Event to detect that the user has pressed a button from the custom dialog. It returns then the text of the button that was pressed.

<div class="block" ai2-block="event" not-rendered="true" value="%7B%22componentName%22:%20%22Notifier%22,%20%22name%22:%20%22Custom%20Dialog%20Selection%22,%20%22param%22:%20%5B%22selection%22%5D%7D"></div>

| Params | []() |
|--------|------|
|selection|<span class="chip chip-text">Text</span>|

### Got Custom Choose Dialog

Event to detect that a user have done his selection in the CustomChooseDialog.

<div class="block" ai2-block="event" not-rendered="true" value="%7B%22componentName%22:%20%22Notifier%22,%20%22name%22:%20%22Got%20Custom%20Choose%20Dialog%22,%20%22param%22:%20%5B%22id%22,%20%22choice%22%5D%7D"></div>

| Params | []() |
|--------|------|
|id|<span class="chip chip-number">Number</span>|
|choice|<span class="chip chip-text">Text</span>|

### Got Text Input From Dialog

Event to detect that a user have done his text input in the "Show Text Input Dialog".

<div class="block" ai2-block="event" not-rendered="true" value="%7B%22componentName%22:%20%22Notifier%22,%20%22name%22:%20%22Got%20Text%20Input%20From%20Dialog%22,%20%22param%22:%20%5B%22id%22,%20%22response%22%5D%7D"></div>

| Params | []() |
|--------|------|
|id|<span class="chip chip-number">Number</span>|
|response|<span class="chip chip-text">Text</span>|

### Image Dialog Closed

Event to detect that the user has watched the image dialog.

<div class="block" ai2-block="event" not-rendered="true" value="%7B%22componentName%22:%20%22Notifier%22,%20%22name%22:%20%22Image%20Dialog%20Closed%22,%20%22param%22:%20%5B%22id%22%5D%7D"></div>

| Params | []() |
|--------|------|
|id|<span class="chip chip-number">Number</span>|

### Lightbox Closed

Event to detect that a user have closed the Lightbox.

<div class="block" ai2-block="event" not-rendered="true" value="%7B%22componentName%22:%20%22Notifier%22,%20%22name%22:%20%22Lightbox%20Closed%22,%20%22param%22:%20%5B%22id%22%5D%7D"></div>

| Params | []() |
|--------|------|
|id|<span class="chip chip-number">Number</span>|

### Linear Progress Dismissed

Event to detect that the linear progress dialog was dismissed.

<div class="block" ai2-block="event" not-rendered="true" value="%7B%22componentName%22:%20%22Notifier%22,%20%22name%22:%20%22Linear%20Progress%20Dismissed%22,%20%22param%22:%20%5B%5D%7D"></div>

### List Picker Selection

Event to get the picked list selection from the List Picker.

<div class="block" ai2-block="event" not-rendered="true" value="%7B%22componentName%22:%20%22Notifier%22,%20%22name%22:%20%22List%20Picker%20Selection%22,%20%22param%22:%20%5B%22id%22,%20%22item%22%5D%7D"></div>

| Params | []() |
|--------|------|
|id|<span class="chip chip-number">Number</span>|
|item|<span class="chip chip-text">Text</span>|

### Number Picker Selection

Event to detect that the user has selected a number from the number picker dialog.

<div class="block" ai2-block="event" not-rendered="true" value="%7B%22componentName%22:%20%22Notifier%22,%20%22name%22:%20%22Number%20Picker%20Selection%22,%20%22param%22:%20%5B%22id%22,%20%22selection%22%5D%7D"></div>

| Params | []() |
|--------|------|
|id|<span class="chip chip-number">Number</span>|
|selection|<span class="chip chip-number">Number</span>|

### Radio Selection

Event invoked when user has selected an option from the radio button picker. Outputs the index of the selected item. Returns -1 if cancel was pressed.

<div class="block" ai2-block="event" not-rendered="true" value="%7B%22componentName%22:%20%22Notifier%22,%20%22name%22:%20%22Radio%20Selection%22,%20%22param%22:%20%5B%22id%22,%20%22list%20Index%22%5D%7D"></div>

| Params | []() |
|--------|------|
|id|<span class="chip chip-number">Number</span>|
|list Index|<span class="chip chip-number">Number</span>|

### Word Picker Selection

Event to detect that the user has selected a word from the word picker dialog.

<div class="block" ai2-block="event" not-rendered="true" value="%7B%22componentName%22:%20%22Notifier%22,%20%22name%22:%20%22Word%20Picker%20Selection%22,%20%22param%22:%20%5B%22id%22,%20%22selection%22%5D%7D"></div>

| Params | []() |
|--------|------|
|id|<span class="chip chip-number">Number</span>|
|selection|<span class="chip chip-text">Text</span>|

## Methods

### Create Custom Dialog

Show whatever you want in a dialog. You can use as example arrangements, or images or whatever you want. Your chosen layout will be then removed from the screen and only visible in custom dialog. You can use the "Light Theme" property to have a light or dark background. Or you enable "Use Background Color" property to use the background color property as background dialog color. Please make sure the layout you want to use is visible.

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22Notifier%22,%20%22name%22:%20%22Create%20Custom%20Dialog%22,%20%22output%22:%20false,%20%22param%22:%20%5B%22component%22,%20%22title%22,%20%22button%20Text%22,%20%22cancel%20Button%20Text%22,%20%22cancelable%22%5D%7D"></div>

| Params | []() |
|--------|------|
|component|<span class="chip chip-component">Component</span>|
|title|<span class="chip chip-text">Text</span>|
|button Text|<span class="chip chip-text">Text</span>|
|cancel Button Text|<span class="chip chip-text">Text</span>|
|cancelable|<span class="chip chip-boolean">Boolean</span>|

### Custom Choose Dialog

Shows a dialog box with two buttons, from which the user can choose. If cancelable is true there will be an additional CANCEL button. Pressing a button will raise the GotCustomChooseDialog event. The "choice" parameter to GotCustomChooseDialog will be the text on the button that was pressed, or "Cancel" if the CANCEL button was pressed. You can use the "Light Theme" property to have a light or dark background. Or you enable "Use Background Color" property to use the background color property as background dialog color. Use the 'Show Custom Dialog' block to the show the created custom dialog. The added component must be visible on screen. After you used this block here it will be removed automatic from screen and will be only visible again after you have shown the custom dialog.

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22Notifier%22,%20%22name%22:%20%22Custom%20Choose%20Dialog%22,%20%22output%22:%20false,%20%22param%22:%20%5B%22id%22,%20%22message%22,%20%22title%22,%20%22button1%20Text%22,%20%22button2%20Text%22,%20%22cancel%20Button%20Text%22,%20%22icon%22,%20%22cancelable%22,%20%22fullscreen%22%5D%7D"></div>

| Params | []() |
|--------|------|
|id|<span class="chip chip-number">Number</span>|
|message|<span class="chip chip-text">Text</span>|
|title|<span class="chip chip-text">Text</span>|
|button1 Text|<span class="chip chip-text">Text</span>|
|button2 Text|<span class="chip chip-text">Text</span>|
|cancel Button Text|<span class="chip chip-text">Text</span>|
|icon|<span class="chip chip-text">Text</span>|
|cancelable|<span class="chip chip-boolean">Boolean</span>|
|fullscreen|<span class="chip chip-boolean">Boolean</span>|

### Custom Message Dialog

Show a Message Dialog. You can use the "Light Theme" property to have a light or dark background. Or you enable "Use Background Color" property to use the background color property as background dialog color.

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22Notifier%22,%20%22name%22:%20%22Custom%20Message%20Dialog%22,%20%22output%22:%20false,%20%22param%22:%20%5B%22message%22,%20%22title%22,%20%22button%20Text%22,%20%22icon%22,%20%22fullscreen%22%5D%7D"></div>

| Params | []() |
|--------|------|
|message|<span class="chip chip-text">Text</span>|
|title|<span class="chip chip-text">Text</span>|
|button Text|<span class="chip chip-text">Text</span>|
|icon|<span class="chip chip-text">Text</span>|
|fullscreen|<span class="chip chip-boolean">Boolean</span>|

### Dismiss Custom Dialog

Use this block to dismiss the created custom dialog.the custom dialog.

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22Notifier%22,%20%22name%22:%20%22Dismiss%20Custom%20Dialog%22,%20%22output%22:%20false,%20%22param%22:%20%5B%5D%7D"></div>

### Dismiss Linear Progress

Dismiss a previously displayed LinearProgress box

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22Notifier%22,%20%22name%22:%20%22Dismiss%20Linear%20Progress%22,%20%22output%22:%20false,%20%22param%22:%20%5B%5D%7D"></div>

### Dismiss Progress Dialog

Dismiss a previously displayed ProgressDialog box

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22Notifier%22,%20%22name%22:%20%22Dismiss%20Progress%20Dialog%22,%20%22output%22:%20false,%20%22param%22:%20%5B%5D%7D"></div>

### Dismiss Spinning Progress

Dismiss a previously displayed SpinningProgress box

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22Notifier%22,%20%22name%22:%20%22Dismiss%20Spinning%20Progress%22,%20%22output%22:%20false,%20%22param%22:%20%5B%5D%7D"></div>

### Log Error

Writes an error message to the Android system log. See the Google Android documentation for how to access the log.

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22Notifier%22,%20%22name%22:%20%22Log%20Error%22,%20%22output%22:%20false,%20%22param%22:%20%5B%22message%22%5D%7D"></div>

| Params | []() |
|--------|------|
|message|<span class="chip chip-text">Text</span>|

### Log Info

Writes an information message to the Android log.

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22Notifier%22,%20%22name%22:%20%22Log%20Info%22,%20%22output%22:%20false,%20%22param%22:%20%5B%22message%22%5D%7D"></div>

| Params | []() |
|--------|------|
|message|<span class="chip chip-text">Text</span>|

### Log Warning

Writes a warning message to the Android log. See the Google Android documentation for how to access the log.

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22Notifier%22,%20%22name%22:%20%22Log%20Warning%22,%20%22output%22:%20false,%20%22param%22:%20%5B%22message%22%5D%7D"></div>

| Params | []() |
|--------|------|
|message|<span class="chip chip-text">Text</span>|

### Show Alert

Show a alert "toast" message.

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22Notifier%22,%20%22name%22:%20%22Show%20Alert%22,%20%22output%22:%20false,%20%22param%22:%20%5B%22notice%22%5D%7D"></div>

| Params | []() |
|--------|------|
|notice|<span class="chip chip-text">Text</span>|

### Show Checkbox List Dialog

Shows a picker dialog with a list of options of whichmore than one can be chosen. Invokes the 'AfterMultiSelection' event. You can use the "Light Theme" property to have a light or dark background. Or you enable "Use Background Color" property to use the background color property as background dialog color.

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22Notifier%22,%20%22name%22:%20%22Show%20Checkbox%20List%20Dialog%22,%20%22output%22:%20false,%20%22param%22:%20%5B%22id%22,%20%22title%22,%20%22options%22,%20%22button%20Text%22,%20%22cancel%20Button%20Text%22,%20%22cancelable%22,%20%22icon%22,%20%22fullscreen%22%5D%7D"></div>

| Params | []() |
|--------|------|
|id|<span class="chip chip-number">Number</span>|
|title|<span class="chip chip-text">Text</span>|
|options|<span class="chip chip-list">List</span>|
|button Text|<span class="chip chip-text">Text</span>|
|cancel Button Text|<span class="chip chip-text">Text</span>|
|cancelable|<span class="chip chip-boolean">Boolean</span>|
|icon|<span class="chip chip-text">Text</span>|
|fullscreen|<span class="chip chip-boolean">Boolean</span>|

### Show Choose Dialog

Shows a dialog box with two buttons, from which the user can choose. If cancelable is true there will be an additional CANCEL button. Pressing a button will raise the AfterChoosing event. The "choice" parameter to AfterChoosing will be the text on the button that was pressed, or "Cancel" if the CANCEL button was pressed.

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22Notifier%22,%20%22name%22:%20%22Show%20Choose%20Dialog%22,%20%22output%22:%20false,%20%22param%22:%20%5B%22message%22,%20%22title%22,%20%22button1%20Text%22,%20%22button2%20Text%22,%20%22cancelable%22%5D%7D"></div>

| Params | []() |
|--------|------|
|message|<span class="chip chip-text">Text</span>|
|title|<span class="chip chip-text">Text</span>|
|button1 Text|<span class="chip chip-text">Text</span>|
|button2 Text|<span class="chip chip-text">Text</span>|
|cancelable|<span class="chip chip-boolean">Boolean</span>|

### Show Custom Dialog

Show the custom dialog. Dont forget that you have first to create the custom dialog.

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22Notifier%22,%20%22name%22:%20%22Show%20Custom%20Dialog%22,%20%22output%22:%20false,%20%22param%22:%20%5B%5D%7D"></div>

### Show Image Dialog

Show a image dialog. Animation types like "*.gif" are not supported. You can use the "Light Theme" property to have a light or dark background. Or you enable "Use Background Color" property to use the background color property as background dialog color.

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22Notifier%22,%20%22name%22:%20%22Show%20Image%20Dialog%22,%20%22output%22:%20false,%20%22param%22:%20%5B%22id%22,%20%22title%22,%20%22image%22,%20%22button%20Text%22%5D%7D"></div>

| Params | []() |
|--------|------|
|id|<span class="chip chip-number">Number</span>|
|title|<span class="chip chip-text">Text</span>|
|image|<span class="chip chip-text">Text</span>|
|button Text|<span class="chip chip-text">Text</span>|

### Show Lightbox

Displays a lightbox. You can use images like "*.png" or "*,gif" from assets folder or from a web url.

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22Notifier%22,%20%22name%22:%20%22Show%20Lightbox%22,%20%22output%22:%20false,%20%22param%22:%20%5B%22id%22,%20%22image%22%5D%7D"></div>

| Params | []() |
|--------|------|
|id|<span class="chip chip-number">Number</span>|
|image|<span class="chip chip-text">Text</span>|

### Show Linear Progress

Shows a progress dialog with a horizontal progress bar. Can be dismissed by user if 'cancelable' is set to true. If indeterminate is true, maxValue and the 'UpdateProgress' method will have no effect. You can use the "Light Theme" property to have a light or dark background. Or you enable "Use Background Color" property to use the background color property as background dialog color.

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22Notifier%22,%20%22name%22:%20%22Show%20Linear%20Progress%22,%20%22output%22:%20false,%20%22param%22:%20%5B%22message%22,%20%22title%22,%20%22cancelable%22,%20%22indeterminate%22,%20%22max%20Value%22,%20%22icon%22%5D%7D"></div>

| Params | []() |
|--------|------|
|message|<span class="chip chip-text">Text</span>|
|title|<span class="chip chip-text">Text</span>|
|cancelable|<span class="chip chip-boolean">Boolean</span>|
|indeterminate|<span class="chip chip-boolean">Boolean</span>|
|max Value|<span class="chip chip-number">Number</span>|
|icon|<span class="chip chip-text">Text</span>|

### Show List Picker

Shows a list picker dialog. You can use the "Light Theme" property to have a light or dark background. Or you enable "Use Background Color" property to use the background color property as background dialog color.

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22Notifier%22,%20%22name%22:%20%22Show%20List%20Picker%22,%20%22output%22:%20false,%20%22param%22:%20%5B%22id%22,%20%22title%22,%20%22items%20List%22,%20%22icon%22,%20%22fullscreen%22%5D%7D"></div>

| Params | []() |
|--------|------|
|id|<span class="chip chip-number">Number</span>|
|title|<span class="chip chip-text">Text</span>|
|items List|<span class="chip chip-list">List</span>|
|icon|<span class="chip chip-text">Text</span>|
|fullscreen|<span class="chip chip-boolean">Boolean</span>|

### Show Message Dialog

Show a Message Dialog.

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22Notifier%22,%20%22name%22:%20%22Show%20Message%20Dialog%22,%20%22output%22:%20false,%20%22param%22:%20%5B%22message%22,%20%22title%22,%20%22button%20Text%22%5D%7D"></div>

| Params | []() |
|--------|------|
|message|<span class="chip chip-text">Text</span>|
|title|<span class="chip chip-text">Text</span>|
|button Text|<span class="chip chip-text">Text</span>|

### Show Number Picker

Shows a number picker dialog that enables the user to select a number from a predefined range. You can use the "Use Background Color" property to use the background color property as background dialog color.

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22Notifier%22,%20%22name%22:%20%22Show%20Number%20Picker%22,%20%22output%22:%20false,%20%22param%22:%20%5B%22id%22,%20%22title%22,%20%22button%20Text%22,%20%22cancel%20Button%20Text%22,%20%22min%20Value%22,%20%22max%20Value%22,%20%22start%20Value%22%5D%7D"></div>

| Params | []() |
|--------|------|
|id|<span class="chip chip-number">Number</span>|
|title|<span class="chip chip-text">Text</span>|
|button Text|<span class="chip chip-text">Text</span>|
|cancel Button Text|<span class="chip chip-text">Text</span>|
|min Value|<span class="chip chip-number">Number</span>|
|max Value|<span class="chip chip-number">Number</span>|
|start Value|<span class="chip chip-number">Number</span>|

### Show Password Dialog

Shows a dialog box where the user can enter password (input is masked), after which the AfterTextInput event will be raised. If cancelable is true there will be an additional CANCEL button. Entering password will raise the AfterTextInput event. The "response" parameter to AfterTextInput will be the entered password, or "Cancel" if CANCEL button was pressed.

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22Notifier%22,%20%22name%22:%20%22Show%20Password%20Dialog%22,%20%22output%22:%20false,%20%22param%22:%20%5B%22message%22,%20%22title%22,%20%22cancelable%22%5D%7D"></div>

| Params | []() |
|--------|------|
|message|<span class="chip chip-text">Text</span>|
|title|<span class="chip chip-text">Text</span>|
|cancelable|<span class="chip chip-boolean">Boolean</span>|

### Show Progress Dialog

Shows a dialog box with an optional title and message (use empty strings if they are not wanted). This dialog box contains a spinning artifact to indicate that the program is working. It cannot be canceled by the user but must be dismissed by the App Inventor Program by using the DismissProgressDialog block.

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22Notifier%22,%20%22name%22:%20%22Show%20Progress%20Dialog%22,%20%22output%22:%20false,%20%22param%22:%20%5B%22message%22,%20%22title%22%5D%7D"></div>

| Params | []() |
|--------|------|
|message|<span class="chip chip-text">Text</span>|
|title|<span class="chip chip-text">Text</span>|

### Show Radio List Dialog

Shows a radio list dialog with a list of options of which only one can be chosen. You can use the "Light Theme" property to have a light or dark background. Or you enable "Use Background Color" property to use the background color property as background dialog color.

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22Notifier%22,%20%22name%22:%20%22Show%20Radio%20List%20Dialog%22,%20%22output%22:%20false,%20%22param%22:%20%5B%22id%22,%20%22title%22,%20%22options%22,%20%22choose%20Button%20Text%22,%20%22cancelable%22,%20%22cancel%20Button%20Text%22,%20%22selection%22,%20%22icon%22,%20%22fullscreen%22%5D%7D"></div>

| Params | []() |
|--------|------|
|id|<span class="chip chip-number">Number</span>|
|title|<span class="chip chip-text">Text</span>|
|options|<span class="chip chip-list">List</span>|
|choose Button Text|<span class="chip chip-text">Text</span>|
|cancelable|<span class="chip chip-boolean">Boolean</span>|
|cancel Button Text|<span class="chip chip-text">Text</span>|
|selection|<span class="chip chip-number">Number</span>|
|icon|<span class="chip chip-text">Text</span>|
|fullscreen|<span class="chip chip-boolean">Boolean</span>|

### Show Spinning Progress

Shows a spinning progress dialog which can be dismissed by the user if 'cancelable' is set to true. You can use the "Light Theme" property to have a light or dark background. Or you enable "Use Background Color" property to use the background color property as background dialog color.

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22Notifier%22,%20%22name%22:%20%22Show%20Spinning%20Progress%22,%20%22output%22:%20false,%20%22param%22:%20%5B%22message%22,%20%22title%22,%20%22cancelable%22,%20%22icon%22%5D%7D"></div>

| Params | []() |
|--------|------|
|message|<span class="chip chip-text">Text</span>|
|title|<span class="chip chip-text">Text</span>|
|cancelable|<span class="chip chip-boolean">Boolean</span>|
|icon|<span class="chip chip-text">Text</span>|

### Show Text Dialog

Shows a dialog box where the user can enter text, after which the AfterTextInput event will be raised. If cancelable is true there will be an additional CANCEL button. Entering text will raise the AfterTextInput event. The "response" parameter to AfterTextInput will be the text that was entered, or "Cancel" if the CANCEL button was pressed.

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22Notifier%22,%20%22name%22:%20%22Show%20Text%20Dialog%22,%20%22output%22:%20false,%20%22param%22:%20%5B%22message%22,%20%22title%22,%20%22cancelable%22%5D%7D"></div>

| Params | []() |
|--------|------|
|message|<span class="chip chip-text">Text</span>|
|title|<span class="chip chip-text">Text</span>|
|cancelable|<span class="chip chip-boolean">Boolean</span>|

### Show Text Input Dialog

Show a text input dialog. Possible input types are: "1= Normal text", "2= Password text", "3= Person name", "4= Email adress", "5|6= Number", "7= Password number" or "8= datetime". You can use the "Light Theme" property to have a light or dark background. Or you enable "Use Background Color" property to use the background color property as background dialog color.

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22Notifier%22,%20%22name%22:%20%22Show%20Text%20Input%20Dialog%22,%20%22output%22:%20false,%20%22param%22:%20%5B%22id%22,%20%22title%22,%20%22default%20Text%22,%20%22icon%22,%20%22hint%22,%20%22fullscreen%22,%20%22cancelable%22,%20%22input%20Type%22,%20%22button%20Text%22,%20%22cancel%20Button%20Text%22,%20%22text%20Color%22,%20%22hint%20Color%22%5D%7D"></div>

| Params | []() |
|--------|------|
|id|<span class="chip chip-number">Number</span>|
|title|<span class="chip chip-text">Text</span>|
|default Text|<span class="chip chip-text">Text</span>|
|icon|<span class="chip chip-text">Text</span>|
|hint|<span class="chip chip-text">Text</span>|
|fullscreen|<span class="chip chip-boolean">Boolean</span>|
|cancelable|<span class="chip chip-boolean">Boolean</span>|
|input Type|<span class="chip chip-number">Number</span>|
|button Text|<span class="chip chip-text">Text</span>|
|cancel Button Text|<span class="chip chip-text">Text</span>|
|text Color|<span class="chip chip-number">Number</span>|
|hint Color|<span class="chip chip-number">Number</span>|

### Show Word Picker

Shows a word picker dialog that enables the user to select a number from a predefined word. You can use the "Use Background Color" property to use the background color property as background dialog color.

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22Notifier%22,%20%22name%22:%20%22Show%20Word%20Picker%22,%20%22output%22:%20false,%20%22param%22:%20%5B%22id%22,%20%22title%22,%20%22button%20Text%22,%20%22cancel%20Button%20Text%22,%20%22items%20List%22%5D%7D"></div>

| Params | []() |
|--------|------|
|id|<span class="chip chip-number">Number</span>|
|title|<span class="chip chip-text">Text</span>|
|button Text|<span class="chip chip-text">Text</span>|
|cancel Button Text|<span class="chip chip-text">Text</span>|
|items List|<span class="chip chip-list">List</span>|

### Update Progress

Change the current value of the linear progress dialog. Has no effect if "indeterminate" is set to true.

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22Notifier%22,%20%22name%22:%20%22Update%20Progress%22,%20%22output%22:%20false,%20%22param%22:%20%5B%22value%22%5D%7D"></div>

| Params | []() |
|--------|------|
|value|<span class="chip chip-number">Number</span>|

## Properties

### Background Color

<span style="user-select: none; white-space:pre-wrap;"><span class="chip chip-color">Color</span> <span class="chip chip-color">Default: <i>#444444FF</i>&nbsp;<span style="width: 15px; height: 15px; margin: auto; display: inline-block; border: 1px solid white; vertical-align: middle; border-radius: 3px; background-color: #444444;"></span></span> :heavy_minus_sign: <span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span>  - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span></span>

Specifies the background color for alerts (not dialogs).

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Notifier%22,%20%22name%22:%20%22Background%20Color%22,%20%22getter%22:%20true%7D"></div>
<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Notifier%22,%20%22name%22:%20%22Background%20Color%22,%20%22getter%22:%20false%7D"></div>

### Dim Amount

<small>Available as ^^Advanced^^ Property</small>

<span style="user-select: none; white-space:pre-wrap;"><span class="chip chip-number">Number</span> <span class="chip chip-number">Default: <i>0.5</i></span> :heavy_minus_sign: <span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span>  - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span></span>

Set the amount of dim behind the dialog window. Use '0.0' for no dim and '1.0' for full dim.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Notifier%22,%20%22name%22:%20%22Dim%20Amount%22,%20%22getter%22:%20true%7D"></div>
<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Notifier%22,%20%22name%22:%20%22Dim%20Amount%22,%20%22getter%22:%20false%7D"></div>

### Light Theme

<span style="user-select: none; white-space:pre-wrap;"><span class="chip chip-boolean">Boolean</span> <span class="chip chip-boolean">Default: <i>False</i></span> :heavy_minus_sign: <span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span>  - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span></span>

Gets the current theme

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Notifier%22,%20%22name%22:%20%22Light%20Theme%22,%20%22getter%22:%20true%7D"></div>
<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Notifier%22,%20%22name%22:%20%22Light%20Theme%22,%20%22getter%22:%20false%7D"></div>

### Linkify

<span style="user-select: none; white-space:pre-wrap;"><span class="chip chip-boolean">Boolean</span> <span class="chip chip-boolean">Default: <i>False</i></span> :heavy_minus_sign: <span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span>  - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span></span>

If set to true will attempt to make text clickable where possible; e.g. hyperlinks, phone numbers. Can not be used for Progress Dialogs.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Notifier%22,%20%22name%22:%20%22Linkify%22,%20%22getter%22:%20true%7D"></div>
<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Notifier%22,%20%22name%22:%20%22Linkify%22,%20%22getter%22:%20false%7D"></div>

### Notifier Length

<span style="user-select: none; white-space:pre-wrap;"><span class="chip chip-number">Number</span> <span class="chip chip-number">Default: <i>1</i></span> :heavy_minus_sign: <span class="chip chip-rw">Write</span>  - <span class="chip chip-bd">Designer</span></span>

specifies the length of time that the alert is shown -- either "short" or "long".

### Text Color

<span style="user-select: none; white-space:pre-wrap;"><span class="chip chip-color">Color</span> <span class="chip chip-color">Default: <i>#FFFFFFFF</i>&nbsp;<span style="width: 15px; height: 15px; margin: auto; display: inline-block; border: 1px solid white; vertical-align: middle; border-radius: 3px; background-color: #FFFFFF;"></span></span> :heavy_minus_sign: <span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span>  - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span></span>

Specifies the text color for alerts or for dialogs message.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Notifier%22,%20%22name%22:%20%22Text%20Color%22,%20%22getter%22:%20true%7D"></div>
<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Notifier%22,%20%22name%22:%20%22Text%20Color%22,%20%22getter%22:%20false%7D"></div>

### Text Font Typeface

<span style="user-select: none; white-space:pre-wrap;"><span class="chip chip-number">Number</span> <span class="chip chip-number">Default: <i>0</i></span> :heavy_minus_sign: <span class="chip chip-rw">Write</span>  - <span class="chip chip-bd">Designer</span></span>

### Text Font Typeface Import

<small>Available as ^^Advanced^^ Property</small>

<span style="user-select: none; white-space:pre-wrap;"><span class="chip chip-text">Text</span> :heavy_minus_sign: <span class="chip chip-rw">Write</span>  - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span></span>

Set a custom font.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Notifier%22,%20%22name%22:%20%22Text%20Font%20Typeface%20Import%22,%20%22getter%22:%20false%7D"></div>

### Title Color

<span style="user-select: none; white-space:pre-wrap;"><span class="chip chip-color">Color</span> <span class="chip chip-color">Default: <i>#FFFFFFFF</i>&nbsp;<span style="width: 15px; height: 15px; margin: auto; display: inline-block; border: 1px solid white; vertical-align: middle; border-radius: 3px; background-color: #FFFFFF;"></span></span> :heavy_minus_sign: <span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span>  - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span></span>

Specifies the title text color for dialogs.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Notifier%22,%20%22name%22:%20%22Title%20Color%22,%20%22getter%22:%20true%7D"></div>
<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Notifier%22,%20%22name%22:%20%22Title%20Color%22,%20%22getter%22:%20false%7D"></div>

### Title Font Typeface

<span style="user-select: none; white-space:pre-wrap;"><span class="chip chip-number">Number</span> <span class="chip chip-number">Default: <i>0</i></span> :heavy_minus_sign: <span class="chip chip-rw">Write</span>  - <span class="chip chip-bd">Designer</span></span>

### Title Font Typeface Import

<small>Available as ^^Advanced^^ Property</small>

<span style="user-select: none; white-space:pre-wrap;"><span class="chip chip-text">Text</span> :heavy_minus_sign: <span class="chip chip-rw">Write</span>  - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span></span>

Set a custom font.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Notifier%22,%20%22name%22:%20%22Title%20Font%20Typeface%20Import%22,%20%22getter%22:%20false%7D"></div>

### Use Background Color

<span style="user-select: none; white-space:pre-wrap;"><span class="chip chip-boolean">Boolean</span> <span class="chip chip-boolean">Default: <i>True</i></span> :heavy_minus_sign: <span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span>  - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span></span>

If enabled the dialog will use the color from the "Background Color"-option. Else it will use the theme (light or dark).

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Notifier%22,%20%22name%22:%20%22Use%20Background%20Color%22,%20%22getter%22:%20true%7D"></div>
<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Notifier%22,%20%22name%22:%20%22Use%20Background%20Color%22,%20%22getter%22:%20false%7D"></div>
