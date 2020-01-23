# Notifier

| Category | Requires | Version |
|:--------:|:-------:|:--------:|
|User Interface|API 19, Android 4.4 - 4.4.4 KitKat|11|

:mag: {>>Non-visible component<<}

## Overview

The Notifier component displays alert dialogs, messages, and temporary alerts, and creates Android log entries through the following methods: 

*    ShowMessageDialog: displays a message which the user must dismiss by pressing a button.
*    ShowChooseDialog: displays a message two buttons to let the user choose one of two responses, for example, yes or no, after which the AfterChoosing event is raised.
*    ShowTextDialog: lets the user enter text in response to the message, after which the AfterTextInput event is raised. <li> ShowPasswordDialog: lets the user enter password in response to the message, after which the AfterTextInput event is raised. <li> ShowAlert: displays a temporary alert that goes away by itself after a short time.</li><li> ShowProgressDialog: displays an alert with a loading spinner that cannot be dismissed by the user. It can only be dismissed by using the DismissProgressDialog block.</li><li> CustomMessageDialog: New version to display dialogs with icon and in fullscreen mode.</li><li> CustomChooseDialog: New version to display choose dialogs with icon and in fullscreen mode.<li> LightTheme: To display the dialogs in a light or dark theme.</li><li> ShowLightbox: Displays a png or gif file from assets or from web url in a dialog.</li><li> ShowLinearProgress: Shows a progress dialog with a horizontal progress bar.</li><li> ShowSpinningProgress: Shows a spinning progress dialog.</li><li> UpdateProgress: Change the current value of the linear progress dialog.</li><li> ShowRadioListDialog: Shows a radio list dialog with a list of options.</li><li> ShowCheckboxListDialog: Shows a picker dialog with a list of options.</li><li> ShowListPicker: Shows a list picker dialog.</li><li> ShowTextInputDialog: Show a text input dialog.</li><li> ShowImageDialog: Show a image dialog. Animation types like "*.gif" are not supported.</li><li> ShowNumberPicker: Shows a number picker dialog that enables the user to select a number from a predefined range.</li><li> ShowWordPicker: Shows a word picker dialog that enables the user to select a number from a predefined word.</li><li> DismissProgressDialog: Dismisses the progress dialog displayed by ShowProgressDialog.</li><li> DismissSpinningProgress: Dismisses the progress dialog displayed by ShowSpinningProgress.</li><li> DismissLinearProgress: Dismisses the progress dialog displayed by ShowLinearProgress.</li><li> LogError: logs an error message to the Android log. </li><li> LogInfo: logs an info message to the Android log.</li><li> LogWarning: logs a warning message to the Android log.</li><li>The messages in the dialogs can be formatted using the following HTML tags:&lt;b&gt;, &lt;big&gt;, &lt;blockquote&gt;, &lt;br&gt;, &lt;cite&gt;, &lt;dfn&gt;, &lt;div&gt;, &lt;em&gt;, &lt;small&gt;, &lt;strong&gt;, &lt;sub&gt;, &lt;sup&gt;, &lt;tt&gt;. &lt;u&gt;</li><li>You can also use the font tag to specify color, for example, &lt;font color="blue"&gt;. Some of the available color names are aqua, black, blue, fuchsia, green, grey, lime, maroon, navy, olive, purple, red, silver, teal, white, and yellow</li></li></li>

??? example "Permissions"
    * [android.permission.INTERNET](https://developer.android.com/reference/android/Manifest.permission.html#android.permission.INTERNET)


## Events

### After Choosing

Event to detect that a user have done his selection.

[[Event('Notifier', 'After Choosing', 'choice')]]

| Params | []() |
|--------|------|
|choice|<span class="chip chip-text">Text</span>|


### After Message Dialog

Event to detect that a user clicked on a button from the "Show Custom Message Dialog". Use the "title" response to know which dialog the user has clicked.

[[Event('Notifier', 'After Message Dialog', 'title')]]

| Params | []() |
|--------|------|
|title|<span class="chip chip-text">Text</span>|


### After Text Input

Event to detect that a user have done his text input in the "Show Text Dialog".

[[Event('Notifier', 'After Text Input', 'response')]]

| Params | []() |
|--------|------|
|response|<span class="chip chip-text">Text</span>|


### Checkbox Selection

Invoked after user has finished selecting items from the Checkbox picker. Returns a list of indices of the selected items in the order of selection. Returns a list having -1 if cancel was pressed.

[[Event('Notifier', 'Checkbox Selection', 'id', 'selection')]]

| Params | []() |
|--------|------|
|id|<span class="chip chip-number">Number</span>|
|selection|<span class="chip chip-list">List</span>|


### Custom Dialog Selection

Event to detect that the user has pressed a button from the custom dialog. It returns then the text of the button that was pressed.

[[Event('Notifier', 'Custom Dialog Selection', 'selection')]]

| Params | []() |
|--------|------|
|selection|<span class="chip chip-text">Text</span>|


### Got Custom Choose Dialog

Event to detect that a user have done his selection in the CustomChooseDialog.

[[Event('Notifier', 'Got Custom Choose Dialog', 'id', 'choice')]]

| Params | []() |
|--------|------|
|id|<span class="chip chip-number">Number</span>|
|choice|<span class="chip chip-text">Text</span>|


### Got Text Input From Dialog

Event to detect that a user have done his text input in the "Show Text Input Dialog".

[[Event('Notifier', 'Got Text Input From Dialog', 'id', 'response')]]

| Params | []() |
|--------|------|
|id|<span class="chip chip-number">Number</span>|
|response|<span class="chip chip-text">Text</span>|


### Image Dialog Closed

Event to detect that the user has watched the image dialog.

[[Event('Notifier', 'Image Dialog Closed', 'id')]]

| Params | []() |
|--------|------|
|id|<span class="chip chip-number">Number</span>|


### Lightbox Closed

Event to detect that a user have closed the Lightbox.

[[Event('Notifier', 'Lightbox Closed', 'id')]]

| Params | []() |
|--------|------|
|id|<span class="chip chip-number">Number</span>|


### Linear Progress Dismissed

Event to detect that the linear progress dialog was dismissed.

[[Event('Notifier', 'Linear Progress Dismissed')]]

### List Picker Selection

Event to get the picked list selection from the List Picker.

[[Event('Notifier', 'List Picker Selection', 'id', 'item')]]

| Params | []() |
|--------|------|
|id|<span class="chip chip-number">Number</span>|
|item|<span class="chip chip-text">Text</span>|


### Number Picker Selection

Event to detect that the user has selected a number from the number picker dialog.

[[Event('Notifier', 'Number Picker Selection', 'id', 'selection')]]

| Params | []() |
|--------|------|
|id|<span class="chip chip-number">Number</span>|
|selection|<span class="chip chip-number">Number</span>|


### Radio Selection

Event invoked when user has selected an option from the radio button picker. Outputs the index of the selected item. Returns -1 if cancel was pressed.

[[Event('Notifier', 'Radio Selection', 'id', 'listIndex')]]

| Params | []() |
|--------|------|
|id|<span class="chip chip-number">Number</span>|
|list Index|<span class="chip chip-number">Number</span>|


### Word Picker Selection

Event to detect that the user has selected a word from the word picker dialog.

[[Event('Notifier', 'Word Picker Selection', 'id', 'selection')]]

| Params | []() |
|--------|------|
|id|<span class="chip chip-number">Number</span>|
|selection|<span class="chip chip-text">Text</span>|


## Methods

### Create Custom Dialog

Show whatever you want in a dialog. You can use as example arrangements, or images or whatever you want. Your chosen layout will be then removed from the screen and only visible in custom dialog. You can use the "Light Theme" property to have a light or dark background. Or you enable "Use Background Color" property to use the background color property as background dialog color. Please make sure the layout you want to use is visible.

[[Method('Notifier', 'Create Custom Dialog', False, 'component', 'title', 'buttonText', 'cancelButtonText', 'cancelable')]]

| Params | []() |
|--------|------|
|component|<span class="chip chip-component">Component</span>|
|title|<span class="chip chip-text">Text</span>|
|button Text|<span class="chip chip-text">Text</span>|
|cancel Button Text|<span class="chip chip-text">Text</span>|
|cancelable|<span class="chip chip-boolean">Boolean</span>|


### Custom Choose Dialog

Shows a dialog box with two buttons, from which the user can choose. If cancelable is true there will be an additional CANCEL button. Pressing a button will raise the GotCustomChooseDialog event. The "choice" parameter to GotCustomChooseDialog will be the text on the button that was pressed, or "Cancel" if the CANCEL button was pressed. You can use the "Light Theme" property to have a light or dark background. Or you enable "Use Background Color" property to use the background color property as background dialog color. Use the 'Show Custom Dialog' block to the show the created custom dialog. The added component must be visible on screen. After you used this block here it will be removed automatic from screen and will be only visible again after you have shown the custom dialog.

[[Method('Notifier', 'Custom Choose Dialog', False, 'id', 'message', 'title', 'button1Text', 'button2Text', 'cancelButtonText', 'icon', 'cancelable', 'fullscreen')]]

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

[[Method('Notifier', 'Custom Message Dialog', False, 'message', 'title', 'buttonText', 'icon', 'fullscreen')]]

| Params | []() |
|--------|------|
|message|<span class="chip chip-text">Text</span>|
|title|<span class="chip chip-text">Text</span>|
|button Text|<span class="chip chip-text">Text</span>|
|icon|<span class="chip chip-text">Text</span>|
|fullscreen|<span class="chip chip-boolean">Boolean</span>|


### Dismiss Custom Dialog

Use this block to dismiss the created custom dialog.the custom dialog.

[[Method('Notifier', 'Dismiss Custom Dialog', False)]]

### Dismiss Linear Progress

Dismiss a previously displayed LinearProgress box

[[Method('Notifier', 'Dismiss Linear Progress', False)]]

### Dismiss Progress Dialog

Dismiss a previously displayed ProgressDialog box

[[Method('Notifier', 'Dismiss Progress Dialog', False)]]

### Dismiss Spinning Progress

Dismiss a previously displayed SpinningProgress box

[[Method('Notifier', 'Dismiss Spinning Progress', False)]]

### Log Error

Writes an error message to the Android system log. See the Google Android documentation for how to access the log.

[[Method('Notifier', 'Log Error', False, 'message')]]

| Params | []() |
|--------|------|
|message|<span class="chip chip-text">Text</span>|


### Log Info

Writes an information message to the Android log.

[[Method('Notifier', 'Log Info', False, 'message')]]

| Params | []() |
|--------|------|
|message|<span class="chip chip-text">Text</span>|


### Log Warning

Writes a warning message to the Android log. See the Google Android documentation for how to access the log.

[[Method('Notifier', 'Log Warning', False, 'message')]]

| Params | []() |
|--------|------|
|message|<span class="chip chip-text">Text</span>|


### Show Alert

Show a alert "toast" message.

[[Method('Notifier', 'Show Alert', False, 'notice')]]

| Params | []() |
|--------|------|
|notice|<span class="chip chip-text">Text</span>|


### Show Checkbox List Dialog

Shows a picker dialog with a list of options of whichmore than one can be chosen. Invokes the 'AfterMultiSelection' event. You can use the "Light Theme" property to have a light or dark background. Or you enable "Use Background Color" property to use the background color property as background dialog color.

[[Method('Notifier', 'Show Checkbox List Dialog', False, 'id', 'title', 'options', 'buttonText', 'cancelButtonText', 'cancelable', 'icon', 'fullscreen')]]

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

[[Method('Notifier', 'Show Choose Dialog', False, 'message', 'title', 'button1Text', 'button2Text', 'cancelable')]]

| Params | []() |
|--------|------|
|message|<span class="chip chip-text">Text</span>|
|title|<span class="chip chip-text">Text</span>|
|button1 Text|<span class="chip chip-text">Text</span>|
|button2 Text|<span class="chip chip-text">Text</span>|
|cancelable|<span class="chip chip-boolean">Boolean</span>|


### Show Custom Dialog

Show the custom dialog. Dont forget that you have first to create the custom dialog.

[[Method('Notifier', 'Show Custom Dialog', False)]]

### Show Image Dialog

Show a image dialog. Animation types like "*.gif" are not supported. You can use the "Light Theme" property to have a light or dark background. Or you enable "Use Background Color" property to use the background color property as background dialog color.

[[Method('Notifier', 'Show Image Dialog', False, 'id', 'title', 'image', 'buttonText')]]

| Params | []() |
|--------|------|
|id|<span class="chip chip-number">Number</span>|
|title|<span class="chip chip-text">Text</span>|
|image|<span class="chip chip-text">Text</span>|
|button Text|<span class="chip chip-text">Text</span>|


### Show Lightbox

Displays a lightbox. You can use images like "*.png" or "*,gif" from assets folder or from a web url.

[[Method('Notifier', 'Show Lightbox', False, 'id', 'image')]]

| Params | []() |
|--------|------|
|id|<span class="chip chip-number">Number</span>|
|image|<span class="chip chip-text">Text</span>|


### Show Linear Progress

Shows a progress dialog with a horizontal progress bar. Can be dismissed by user if 'cancelable' is set to true. If indeterminate is true, maxValue and the 'UpdateProgress' method will have no effect. You can use the "Light Theme" property to have a light or dark background. Or you enable "Use Background Color" property to use the background color property as background dialog color.

[[Method('Notifier', 'Show Linear Progress', False, 'message', 'title', 'cancelable', 'indeterminate', 'maxValue', 'icon')]]

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

[[Method('Notifier', 'Show List Picker', False, 'id', 'title', 'itemsList', 'icon', 'fullscreen')]]

| Params | []() |
|--------|------|
|id|<span class="chip chip-number">Number</span>|
|title|<span class="chip chip-text">Text</span>|
|items List|<span class="chip chip-list">List</span>|
|icon|<span class="chip chip-text">Text</span>|
|fullscreen|<span class="chip chip-boolean">Boolean</span>|


### Show Message Dialog

Show a Message Dialog.

[[Method('Notifier', 'Show Message Dialog', False, 'message', 'title', 'buttonText')]]

| Params | []() |
|--------|------|
|message|<span class="chip chip-text">Text</span>|
|title|<span class="chip chip-text">Text</span>|
|button Text|<span class="chip chip-text">Text</span>|


### Show Number Picker

Shows a number picker dialog that enables the user to select a number from a predefined range. You can use the "Use Background Color" property to use the background color property as background dialog color.

[[Method('Notifier', 'Show Number Picker', False, 'id', 'title', 'buttonText', 'cancelButtonText', 'minValue', 'maxValue', 'startValue')]]

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

[[Method('Notifier', 'Show Password Dialog', False, 'message', 'title', 'cancelable')]]

| Params | []() |
|--------|------|
|message|<span class="chip chip-text">Text</span>|
|title|<span class="chip chip-text">Text</span>|
|cancelable|<span class="chip chip-boolean">Boolean</span>|


### Show Progress Dialog

Shows a dialog box with an optional title and message (use empty strings if they are not wanted). This dialog box contains a spinning artifact to indicate that the program is working. It cannot be canceled by the user but must be dismissed by the App Inventor Program by using the DismissProgressDialog block.

[[Method('Notifier', 'Show Progress Dialog', False, 'message', 'title')]]

| Params | []() |
|--------|------|
|message|<span class="chip chip-text">Text</span>|
|title|<span class="chip chip-text">Text</span>|


### Show Radio List Dialog

Shows a radio list dialog with a list of options of which only one can be chosen. You can use the "Light Theme" property to have a light or dark background. Or you enable "Use Background Color" property to use the background color property as background dialog color.

[[Method('Notifier', 'Show Radio List Dialog', False, 'id', 'title', 'options', 'chooseButtonText', 'cancelable', 'cancelButtonText', 'selection', 'icon', 'fullscreen')]]

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

[[Method('Notifier', 'Show Spinning Progress', False, 'message', 'title', 'cancelable', 'icon')]]

| Params | []() |
|--------|------|
|message|<span class="chip chip-text">Text</span>|
|title|<span class="chip chip-text">Text</span>|
|cancelable|<span class="chip chip-boolean">Boolean</span>|
|icon|<span class="chip chip-text">Text</span>|


### Show Text Dialog

Shows a dialog box where the user can enter text, after which the AfterTextInput event will be raised. If cancelable is true there will be an additional CANCEL button. Entering text will raise the AfterTextInput event. The "response" parameter to AfterTextInput will be the text that was entered, or "Cancel" if the CANCEL button was pressed.

[[Method('Notifier', 'Show Text Dialog', False, 'message', 'title', 'cancelable')]]

| Params | []() |
|--------|------|
|message|<span class="chip chip-text">Text</span>|
|title|<span class="chip chip-text">Text</span>|
|cancelable|<span class="chip chip-boolean">Boolean</span>|


### Show Text Input Dialog

Show a text input dialog. Possible input types are: "1= Normal text", "2= Password text", "3= Person name", "4= Email adress", "5|6= Number", "7= Password number" or "8= datetime". You can use the "Light Theme" property to have a light or dark background. Or you enable "Use Background Color" property to use the background color property as background dialog color.

[[Method('Notifier', 'Show Text Input Dialog', False, 'id', 'title', 'defaultText', 'icon', 'hint', 'fullscreen', 'cancelable', 'inputType', 'buttonText', 'cancelButtonText', 'textColor', 'hintColor')]]

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

[[Method('Notifier', 'Show Word Picker', False, 'id', 'title', 'buttonText', 'cancelButtonText', 'itemsList')]]

| Params | []() |
|--------|------|
|id|<span class="chip chip-number">Number</span>|
|title|<span class="chip chip-text">Text</span>|
|button Text|<span class="chip chip-text">Text</span>|
|cancel Button Text|<span class="chip chip-text">Text</span>|
|items List|<span class="chip chip-list">List</span>|


### Update Progress

Change the current value of the linear progress dialog. Has no effect if "indeterminate" is set to true.

[[Method('Notifier', 'Update Progress', False, 'value')]]

| Params | []() |
|--------|------|
|value|<span class="chip chip-number">Number</span>|


## Properties

### Background Color

<span class="chip chip-number">Number</span> <span class="chip chip-number" style="background-color: #444444;">Default: <i>#444444FF</i></span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span> 

Specifies the background color for alerts (not dialogs).

[[PropertyBlockGetterAndSetter('Notifier', 'Background Color')]]

### Dim Amount

<span class="chip chip-number">Number</span> <span class="chip chip-number">Default: <i>0.5</i></span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span> 

 <small>Available as ^^Advanced^^ Property</small>

Set the amount of dim behind the dialog window. Use '0.0' for no dim and '1.0' for full dim.

[[PropertyBlockGetterAndSetter('Notifier', 'Dim Amount')]]

### Light Theme

<span class="chip chip-boolean">Boolean</span> <span class="chip chip-boolean">Default: <i>False</i></span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span> 

Gets the current theme

[[PropertyBlockGetterAndSetter('Notifier', 'Light Theme')]]

### Linkify

<span class="chip chip-boolean">Boolean</span> <span class="chip chip-boolean">Default: <i>False</i></span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span> 

If set to true will attempt to make text clickable where possible; e.g. hyperlinks, phone numbers. Can not be used for Progress Dialogs.

[[PropertyBlockGetterAndSetter('Notifier', 'Linkify')]]

### Notifier Length

<span class="chip chip-number">Number</span> <span class="chip chip-number">Default: <i>1</i></span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Non-Visible</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span> 

specifies the length of time that the alert is shown -- either "short" or "long".

[[PropertyBlockGetterAndSetter('Notifier', 'Notifier Length')]]

### Text Color

<span class="chip chip-number">Number</span> <span class="chip chip-number" style="background-color: #FFFFFF;">Default: <i>#FFFFFFFF</i></span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span> 

Specifies the text color for alerts or for dialogs message.

[[PropertyBlockGetterAndSetter('Notifier', 'Text Color')]]

### Text Font Typeface

<span class="chip chip-number">Number</span> <span class="chip chip-number">Default: <i>0</i></span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Non-Visible</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span> 

[[PropertyBlockGetterAndSetter('Notifier', 'Text Font Typeface')]]

### Text Font Typeface Import

<span class="chip chip-text">Text</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span> 

 <small>Available as ^^Advanced^^ Property</small>

Set a custom font.

[[PropertyBlockGetterAndSetter('Notifier', 'Text Font Typeface Import')]]

### Title Color

<span class="chip chip-number">Number</span> <span class="chip chip-number" style="background-color: #FFFFFF;">Default: <i>#FFFFFFFF</i></span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span> 

Specifies the title text color for dialogs.

[[PropertyBlockGetterAndSetter('Notifier', 'Title Color')]]

### Title Font Typeface

<span class="chip chip-number">Number</span> <span class="chip chip-number">Default: <i>0</i></span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Non-Visible</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span> 

[[PropertyBlockGetterAndSetter('Notifier', 'Title Font Typeface')]]

### Title Font Typeface Import

<span class="chip chip-text">Text</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span> 

 <small>Available as ^^Advanced^^ Property</small>

Set a custom font.

[[PropertyBlockGetterAndSetter('Notifier', 'Title Font Typeface Import')]]

### Use Background Color

<span class="chip chip-boolean">Boolean</span> <span class="chip chip-boolean">Default: <i>True</i></span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span> 

If enabled the dialog will use the color from the "Background Color"-option. Else it will use the theme (light or dark).

[[PropertyBlockGetterAndSetter('Notifier', 'Use Background Color')]]