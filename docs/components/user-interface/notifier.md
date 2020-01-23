# Notifier

| Category | Version | Requires |
|:--------:|:-------:|:--------:|
|User Interface|11|API 19, Android 4.4 - 4.4.4 KitKat|

:mag: {>>Non-visible component<<}

## Overview

The Notifier component displays alert dialogs, messages, and temporary alerts, and creates Android log entries through the following methods: 

*    ShowMessageDialog: displays a message which the user must dismiss by pressing a button.
*    ShowChooseDialog: displays a message two buttons to let the user choose one of two responses, for example, yes or no, after which the AfterChoosing event is raised.
*    ShowTextDialog: lets the user enter text in response to the message, after which the AfterTextInput event is raised. <li> ShowPasswordDialog: lets the user enter password in response to the message, after which the AfterTextInput event is raised. <li> ShowAlert: displays a temporary alert that goes away by itself after a short time.</li><li> ShowProgressDialog: displays an alert with a loading spinner that cannot be dismissed by the user. It can only be dismissed by using the DismissProgressDialog block.</li><li> CustomMessageDialog: New version to display dialogs with icon and in fullscreen mode.</li><li> CustomChooseDialog: New version to display choose dialogs with icon and in fullscreen mode.<li> LightTheme: To display the dialogs in a light or dark theme.</li><li> ShowLightbox: Displays a png or gif file from assets or from web url in a dialog.</li><li> ShowLinearProgress: Shows a progress dialog with a horizontal progress bar.</li><li> ShowSpinningProgress: Shows a spinning progress dialog.</li><li> UpdateProgress: Change the current value of the linear progress dialog.</li><li> ShowRadioListDialog: Shows a radio list dialog with a list of options.</li><li> ShowCheckboxListDialog: Shows a picker dialog with a list of options.</li><li> ShowListPicker: Shows a list picker dialog.</li><li> ShowTextInputDialog: Show a text input dialog.</li><li> ShowImageDialog: Show a image dialog. Animation types like "*.gif" are not supported.</li><li> ShowNumberPicker: Shows a number picker dialog that enables the user to select a number from a predefined range.</li><li> ShowWordPicker: Shows a word picker dialog that enables the user to select a number from a predefined word.</li><li> DismissProgressDialog: Dismisses the progress dialog displayed by ShowProgressDialog.</li><li> DismissSpinningProgress: Dismisses the progress dialog displayed by ShowSpinningProgress.</li><li> DismissLinearProgress: Dismisses the progress dialog displayed by ShowLinearProgress.</li><li> LogError: logs an error message to the Android log. </li><li> LogInfo: logs an info message to the Android log.</li><li> LogWarning: logs a warning message to the Android log.</li><li>The messages in the dialogs can be formatted using the following HTML tags:&lt;b&gt;, &lt;big&gt;, &lt;blockquote&gt;, &lt;br&gt;, &lt;cite&gt;, &lt;dfn&gt;, &lt;div&gt;, &lt;em&gt;, &lt;small&gt;, &lt;strong&gt;, &lt;sub&gt;, &lt;sup&gt;, &lt;tt&gt;. &lt;u&gt;</li><li>You can also use the font tag to specify color, for example, &lt;font color="blue"&gt;. Some of the available color names are aqua, black, blue, fuchsia, green, grey, lime, maroon, navy, olive, purple, red, silver, teal, white, and yellow</li></li></li>

## Events

### After Choosing

[[Event('Notifier', 'After Choosing', 'choice')]]

| Params | []() |
|--------|------|
|choice|Text|


Event to detect that a user have done his selection.

### After Message Dialog

[[Event('Notifier', 'After Message Dialog', 'title')]]

| Params | []() |
|--------|------|
|title|Text|


Event to detect that a user clicked on a button from the "Show Custom Message Dialog". Use the "title" response to know which dialog the user has clicked.

### After Text Input

[[Event('Notifier', 'After Text Input', 'response')]]

| Params | []() |
|--------|------|
|response|Text|


Event to detect that a user have done his text input in the "Show Text Dialog".

### Checkbox Selection

[[Event('Notifier', 'Checkbox Selection', 'id', 'selection')]]

| Params | []() |
|--------|------|
|id|Number|
|selection|List|


Invoked after user has finished selecting items from the Checkbox picker. Returns a list of indices of the selected items in the order of selection. Returns a list having -1 if cancel was pressed.

### Custom Dialog Selection

[[Event('Notifier', 'Custom Dialog Selection', 'selection')]]

| Params | []() |
|--------|------|
|selection|Text|


Event to detect that the user has pressed a button from the custom dialog. It returns then the text of the button that was pressed.

### Got Custom Choose Dialog

[[Event('Notifier', 'Got Custom Choose Dialog', 'id', 'choice')]]

| Params | []() |
|--------|------|
|id|Number|
|choice|Text|


Event to detect that a user have done his selection in the CustomChooseDialog.

### Got Text Input From Dialog

[[Event('Notifier', 'Got Text Input From Dialog', 'id', 'response')]]

| Params | []() |
|--------|------|
|id|Number|
|response|Text|


Event to detect that a user have done his text input in the "Show Text Input Dialog".

### Image Dialog Closed

[[Event('Notifier', 'Image Dialog Closed', 'id')]]

| Params | []() |
|--------|------|
|id|Number|


Event to detect that the user has watched the image dialog.

### Lightbox Closed

[[Event('Notifier', 'Lightbox Closed', 'id')]]

| Params | []() |
|--------|------|
|id|Number|


Event to detect that a user have closed the Lightbox.

### Linear Progress Dismissed

[[Event('Notifier', 'Linear Progress Dismissed')]]

Event to detect that the linear progress dialog was dismissed.

### List Picker Selection

[[Event('Notifier', 'List Picker Selection', 'id', 'item')]]

| Params | []() |
|--------|------|
|id|Number|
|item|Text|


Event to get the picked list selection from the List Picker.

### Number Picker Selection

[[Event('Notifier', 'Number Picker Selection', 'id', 'selection')]]

| Params | []() |
|--------|------|
|id|Number|
|selection|Number|


Event to detect that the user has selected a number from the number picker dialog.

### Radio Selection

[[Event('Notifier', 'Radio Selection', 'id', 'listIndex')]]

| Params | []() |
|--------|------|
|id|Number|
|list Index|Number|


Event invoked when user has selected an option from the radio button picker. Outputs the index of the selected item. Returns -1 if cancel was pressed.

### Word Picker Selection

[[Event('Notifier', 'Word Picker Selection', 'id', 'selection')]]

| Params | []() |
|--------|------|
|id|Number|
|selection|Text|


Event to detect that the user has selected a word from the word picker dialog.

## Methods

### Create Custom Dialog

[[Method('Notifier', 'Create Custom Dialog', False, 'component', 'title', 'buttonText', 'cancelButtonText', 'cancelable')]]

| Params | []() |
|--------|------|
|component|Component|
|title|Text|
|button Text|Text|
|cancel Button Text|Text|
|cancelable|Boolean|


Show whatever you want in a dialog. You can use as example arrangements, or images or whatever you want. Your chosen layout will be then removed from the screen and only visible in custom dialog. You can use the "Light Theme" property to have a light or dark background. Or you enable "Use Background Color" property to use the background color property as background dialog color. Please make sure the layout you want to use is visible.

### Custom Choose Dialog

[[Method('Notifier', 'Custom Choose Dialog', False, 'id', 'message', 'title', 'button1Text', 'button2Text', 'cancelButtonText', 'icon', 'cancelable', 'fullscreen')]]

| Params | []() |
|--------|------|
|id|Number|
|message|Text|
|title|Text|
|button1 Text|Text|
|button2 Text|Text|
|cancel Button Text|Text|
|icon|Text|
|cancelable|Boolean|
|fullscreen|Boolean|


Shows a dialog box with two buttons, from which the user can choose. If cancelable is true there will be an additional CANCEL button. Pressing a button will raise the GotCustomChooseDialog event. The "choice" parameter to GotCustomChooseDialog will be the text on the button that was pressed, or "Cancel" if the CANCEL button was pressed. You can use the "Light Theme" property to have a light or dark background. Or you enable "Use Background Color" property to use the background color property as background dialog color. Use the 'Show Custom Dialog' block to the show the created custom dialog. The added component must be visible on screen. After you used this block here it will be removed automatic from screen and will be only visible again after you have shown the custom dialog.

### Custom Message Dialog

[[Method('Notifier', 'Custom Message Dialog', False, 'message', 'title', 'buttonText', 'icon', 'fullscreen')]]

| Params | []() |
|--------|------|
|message|Text|
|title|Text|
|button Text|Text|
|icon|Text|
|fullscreen|Boolean|


Show a Message Dialog. You can use the "Light Theme" property to have a light or dark background. Or you enable "Use Background Color" property to use the background color property as background dialog color.

### Dismiss Custom Dialog

[[Method('Notifier', 'Dismiss Custom Dialog', False)]]

Use this block to dismiss the created custom dialog.the custom dialog.

### Dismiss Linear Progress

[[Method('Notifier', 'Dismiss Linear Progress', False)]]

Dismiss a previously displayed LinearProgress box

### Dismiss Progress Dialog

[[Method('Notifier', 'Dismiss Progress Dialog', False)]]

Dismiss a previously displayed ProgressDialog box

### Dismiss Spinning Progress

[[Method('Notifier', 'Dismiss Spinning Progress', False)]]

Dismiss a previously displayed SpinningProgress box

### Log Error

[[Method('Notifier', 'Log Error', False, 'message')]]

| Params | []() |
|--------|------|
|message|Text|


Writes an error message to the Android system log. See the Google Android documentation for how to access the log.

### Log Info

[[Method('Notifier', 'Log Info', False, 'message')]]

| Params | []() |
|--------|------|
|message|Text|


Writes an information message to the Android log.

### Log Warning

[[Method('Notifier', 'Log Warning', False, 'message')]]

| Params | []() |
|--------|------|
|message|Text|


Writes a warning message to the Android log. See the Google Android documentation for how to access the log.

### Show Alert

[[Method('Notifier', 'Show Alert', False, 'notice')]]

| Params | []() |
|--------|------|
|notice|Text|


Show a alert "toast" message.

### Show Checkbox List Dialog

[[Method('Notifier', 'Show Checkbox List Dialog', False, 'id', 'title', 'options', 'buttonText', 'cancelButtonText', 'cancelable', 'icon', 'fullscreen')]]

| Params | []() |
|--------|------|
|id|Number|
|title|Text|
|options|List|
|button Text|Text|
|cancel Button Text|Text|
|cancelable|Boolean|
|icon|Text|
|fullscreen|Boolean|


Shows a picker dialog with a list of options of whichmore than one can be chosen. Invokes the 'AfterMultiSelection' event. You can use the "Light Theme" property to have a light or dark background. Or you enable "Use Background Color" property to use the background color property as background dialog color.

### Show Choose Dialog

[[Method('Notifier', 'Show Choose Dialog', False, 'message', 'title', 'button1Text', 'button2Text', 'cancelable')]]

| Params | []() |
|--------|------|
|message|Text|
|title|Text|
|button1 Text|Text|
|button2 Text|Text|
|cancelable|Boolean|


Shows a dialog box with two buttons, from which the user can choose. If cancelable is true there will be an additional CANCEL button. Pressing a button will raise the AfterChoosing event. The "choice" parameter to AfterChoosing will be the text on the button that was pressed, or "Cancel" if the CANCEL button was pressed.

### Show Custom Dialog

[[Method('Notifier', 'Show Custom Dialog', False)]]

Show the custom dialog. Dont forget that you have first to create the custom dialog.

### Show Image Dialog

[[Method('Notifier', 'Show Image Dialog', False, 'id', 'title', 'image', 'buttonText')]]

| Params | []() |
|--------|------|
|id|Number|
|title|Text|
|image|Text|
|button Text|Text|


Show a image dialog. Animation types like "*.gif" are not supported. You can use the "Light Theme" property to have a light or dark background. Or you enable "Use Background Color" property to use the background color property as background dialog color.

### Show Lightbox

[[Method('Notifier', 'Show Lightbox', False, 'id', 'image')]]

| Params | []() |
|--------|------|
|id|Number|
|image|Text|


Displays a lightbox. You can use images like "*.png" or "*,gif" from assets folder or from a web url.

### Show Linear Progress

[[Method('Notifier', 'Show Linear Progress', False, 'message', 'title', 'cancelable', 'indeterminate', 'maxValue', 'icon')]]

| Params | []() |
|--------|------|
|message|Text|
|title|Text|
|cancelable|Boolean|
|indeterminate|Boolean|
|max Value|Number|
|icon|Text|


Shows a progress dialog with a horizontal progress bar. Can be dismissed by user if 'cancelable' is set to true. If indeterminate is true, maxValue and the 'UpdateProgress' method will have no effect. You can use the "Light Theme" property to have a light or dark background. Or you enable "Use Background Color" property to use the background color property as background dialog color.

### Show List Picker

[[Method('Notifier', 'Show List Picker', False, 'id', 'title', 'itemsList', 'icon', 'fullscreen')]]

| Params | []() |
|--------|------|
|id|Number|
|title|Text|
|items List|List|
|icon|Text|
|fullscreen|Boolean|


Shows a list picker dialog. You can use the "Light Theme" property to have a light or dark background. Or you enable "Use Background Color" property to use the background color property as background dialog color.

### Show Message Dialog

[[Method('Notifier', 'Show Message Dialog', False, 'message', 'title', 'buttonText')]]

| Params | []() |
|--------|------|
|message|Text|
|title|Text|
|button Text|Text|


Show a Message Dialog.

### Show Number Picker

[[Method('Notifier', 'Show Number Picker', False, 'id', 'title', 'buttonText', 'cancelButtonText', 'minValue', 'maxValue', 'startValue')]]

| Params | []() |
|--------|------|
|id|Number|
|title|Text|
|button Text|Text|
|cancel Button Text|Text|
|min Value|Number|
|max Value|Number|
|start Value|Number|


Shows a number picker dialog that enables the user to select a number from a predefined range. You can use the "Use Background Color" property to use the background color property as background dialog color.

### Show Password Dialog

[[Method('Notifier', 'Show Password Dialog', False, 'message', 'title', 'cancelable')]]

| Params | []() |
|--------|------|
|message|Text|
|title|Text|
|cancelable|Boolean|


Shows a dialog box where the user can enter password (input is masked), after which the AfterTextInput event will be raised. If cancelable is true there will be an additional CANCEL button. Entering password will raise the AfterTextInput event. The "response" parameter to AfterTextInput will be the entered password, or "Cancel" if CANCEL button was pressed.

### Show Progress Dialog

[[Method('Notifier', 'Show Progress Dialog', False, 'message', 'title')]]

| Params | []() |
|--------|------|
|message|Text|
|title|Text|


Shows a dialog box with an optional title and message (use empty strings if they are not wanted). This dialog box contains a spinning artifact to indicate that the program is working. It cannot be canceled by the user but must be dismissed by the App Inventor Program by using the DismissProgressDialog block.

### Show Radio List Dialog

[[Method('Notifier', 'Show Radio List Dialog', False, 'id', 'title', 'options', 'chooseButtonText', 'cancelable', 'cancelButtonText', 'selection', 'icon', 'fullscreen')]]

| Params | []() |
|--------|------|
|id|Number|
|title|Text|
|options|List|
|choose Button Text|Text|
|cancelable|Boolean|
|cancel Button Text|Text|
|selection|Number|
|icon|Text|
|fullscreen|Boolean|


Shows a radio list dialog with a list of options of which only one can be chosen. You can use the "Light Theme" property to have a light or dark background. Or you enable "Use Background Color" property to use the background color property as background dialog color.

### Show Spinning Progress

[[Method('Notifier', 'Show Spinning Progress', False, 'message', 'title', 'cancelable', 'icon')]]

| Params | []() |
|--------|------|
|message|Text|
|title|Text|
|cancelable|Boolean|
|icon|Text|


Shows a spinning progress dialog which can be dismissed by the user if 'cancelable' is set to true. You can use the "Light Theme" property to have a light or dark background. Or you enable "Use Background Color" property to use the background color property as background dialog color.

### Show Text Dialog

[[Method('Notifier', 'Show Text Dialog', False, 'message', 'title', 'cancelable')]]

| Params | []() |
|--------|------|
|message|Text|
|title|Text|
|cancelable|Boolean|


Shows a dialog box where the user can enter text, after which the AfterTextInput event will be raised. If cancelable is true there will be an additional CANCEL button. Entering text will raise the AfterTextInput event. The "response" parameter to AfterTextInput will be the text that was entered, or "Cancel" if the CANCEL button was pressed.

### Show Text Input Dialog

[[Method('Notifier', 'Show Text Input Dialog', False, 'id', 'title', 'defaultText', 'icon', 'hint', 'fullscreen', 'cancelable', 'inputType', 'buttonText', 'cancelButtonText', 'textColor', 'hintColor')]]

| Params | []() |
|--------|------|
|id|Number|
|title|Text|
|default Text|Text|
|icon|Text|
|hint|Text|
|fullscreen|Boolean|
|cancelable|Boolean|
|input Type|Number|
|button Text|Text|
|cancel Button Text|Text|
|text Color|Number|
|hint Color|Number|


Show a text input dialog. Possible input types are: "1= Normal text", "2= Password text", "3= Person name", "4= Email adress", "5|6= Number", "7= Password number" or "8= datetime". You can use the "Light Theme" property to have a light or dark background. Or you enable "Use Background Color" property to use the background color property as background dialog color.

### Show Word Picker

[[Method('Notifier', 'Show Word Picker', False, 'id', 'title', 'buttonText', 'cancelButtonText', 'itemsList')]]

| Params | []() |
|--------|------|
|id|Number|
|title|Text|
|button Text|Text|
|cancel Button Text|Text|
|items List|List|


Shows a word picker dialog that enables the user to select a number from a predefined word. You can use the "Use Background Color" property to use the background color property as background dialog color.

### Update Progress

[[Method('Notifier', 'Update Progress', False, 'value')]]

| Params | []() |
|--------|------|
|value|Number|


Change the current value of the linear progress dialog. Has no effect if "indeterminate" is set to true.

## Properties

### Background Color

<span class="chip chip-number">Number</span> <span class="chip chip-number">Default: <i>&HFF444444</i></span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span> 

Specifies the background color for alerts (not dialogs).

[[PropertyBlockGetterAndSetter('Notifier', 'Background Color')]]

### Dim Amount

 <small>Available as ^^Advanced^^ Property</small>

<span class="chip chip-number">Number</span> <span class="chip chip-number">Default: <i>0.5</i></span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span> 

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

<span class="chip chip-number">Number</span> <span class="chip chip-number">Default: <i>&HFFFFFFFF</i></span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span> 

Specifies the text color for alerts or for dialogs message.

[[PropertyBlockGetterAndSetter('Notifier', 'Text Color')]]

### Text Font Typeface

<span class="chip chip-number">Number</span> <span class="chip chip-number">Default: <i>0</i></span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Non-Visible</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span> 

[[PropertyBlockGetterAndSetter('Notifier', 'Text Font Typeface')]]

### Text Font Typeface Import

 <small>Available as ^^Advanced^^ Property</small>

<span class="chip chip-text">Text</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span> 

Set a custom font.

[[PropertyBlockGetterAndSetter('Notifier', 'Text Font Typeface Import')]]

### Title Color

<span class="chip chip-number">Number</span> <span class="chip chip-number">Default: <i>&HFFFFFFFF</i></span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span> 

Specifies the title text color for dialogs.

[[PropertyBlockGetterAndSetter('Notifier', 'Title Color')]]

### Title Font Typeface

<span class="chip chip-number">Number</span> <span class="chip chip-number">Default: <i>0</i></span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Non-Visible</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span> 

[[PropertyBlockGetterAndSetter('Notifier', 'Title Font Typeface')]]

### Title Font Typeface Import

 <small>Available as ^^Advanced^^ Property</small>

<span class="chip chip-text">Text</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span> 

Set a custom font.

[[PropertyBlockGetterAndSetter('Notifier', 'Title Font Typeface Import')]]

### Use Background Color

<span class="chip chip-boolean">Boolean</span> <span class="chip chip-boolean">Default: <i>True</i></span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span> 

If enabled the dialog will use the color from the "Background Color"-option. Else it will use the theme (light or dark).

[[PropertyBlockGetterAndSetter('Notifier', 'Use Background Color')]]