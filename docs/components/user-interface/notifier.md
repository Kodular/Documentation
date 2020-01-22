# Notifier

| Category | Version | Requires |
|:--------:|:-------:|:--------:|
|User Interface|11|API 19 - Android 4.4 - 4.4.4 KitKat|

:mag: {>>Non-visible component<<}

## Overview

_The Notifier component displays alert dialogs, messages, and temporary alerts, and creates Android log entries through the following methods: <ul><li> ShowMessageDialog: displays a message which the user must dismiss by pressing a button.</li><li> ShowChooseDialog: displays a message two buttons to let the user choose one of two responses, for example, yes or no, after which the AfterChoosing event is raised.</li><li> ShowTextDialog: lets the user enter text in response to the message, after which the AfterTextInput event is raised. <li> ShowPasswordDialog: lets the user enter password in response to the message, after which the AfterTextInput event is raised. <li> ShowAlert: displays a temporary  alert that goes away by itself after a short time.</li><li> ShowProgressDialog: displays an alert with a loading spinner that cannot be dismissed by the user. It can only be dismissed by using the DismissProgressDialog block.</li><li> CustomMessageDialog: New version to display dialogs with icon and in fullscreen mode.</li><li> CustomChooseDialog: New version to display choose dialogs with icon and in fullscreen mode.<li> LightTheme: To display the dialogs in a light or dark theme.</li><li> ShowLightbox: Displays a png or gif file from assets or from web url in a dialog.</li><li> ShowLinearProgress: Shows a progress dialog with a horizontal progress bar.</li><li> ShowSpinningProgress: Shows a spinning progress dialog.</li><li> UpdateProgress: Change the current value of the linear progress dialog.</li><li> ShowRadioListDialog: Shows a radio list dialog with a list of options.</li><li> ShowCheckboxListDialog: Shows a picker dialog with a list of options.</li><li> ShowListPicker: Shows a list picker dialog.</li><li> ShowTextInputDialog: Show a text input dialog.</li><li> ShowImageDialog: Show a image dialog. Animation types like "*.gif" are not supported.</li><li> ShowNumberPicker: Shows a number picker dialog that enables the user to select a number from a predefined range.</li><li> ShowWordPicker: Shows a word picker dialog that enables the user to select a number from a predefined word.</li><li> DismissProgressDialog: Dismisses the progress dialog displayed by ShowProgressDialog.</li><li> DismissSpinningProgress: Dismisses the progress dialog displayed by ShowSpinningProgress.</li><li> DismissLinearProgress: Dismisses the progress dialog displayed by ShowLinearProgress.</li><li> LogError: logs an error message to the Android log. </li><li> LogInfo: logs an info message to the Android log.</li><li> LogWarning: logs a warning message to the Android log.</li><li>The messages in the dialogs can be formatted using the following HTML tags:&lt;b&gt;, &lt;big&gt;, &lt;blockquote&gt;, &lt;br&gt;, &lt;cite&gt;, &lt;dfn&gt;, &lt;div&gt;, &lt;em&gt;, &lt;small&gt;, &lt;strong&gt;, &lt;sub&gt;, &lt;sup&gt;, &lt;tt&gt;. &lt;u&gt;</li><li>You can also use the font tag to specify color, for example, &lt;font color="blue"&gt;.  Some of the available color names are aqua, black, blue, fuchsia, green, grey, lime, maroon, navy, olive, purple, red, silver, teal, white, and yellow</li></ul>_

## Events

### After Choosing

[[Event('Notifier', 'After Choosing', 'choice')]]

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |choice|`text`|


_Event to detect that a user have done his selection._

### After Message Dialog

[[Event('Notifier', 'After Message Dialog', 'title')]]

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |title|`text`|


_Event to detect that a user clicked on a button from the "Show Custom Message Dialog". Use the "title" response to know which dialog the user has clicked._

### After Text Input

[[Event('Notifier', 'After Text Input', 'response')]]

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |response|`text`|


_Event to detect that a user have done his text input in the "Show Text Dialog"._

### Checkbox Selection

[[Event('Notifier', 'Checkbox Selection', 'id selection')]]

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |id|`number`|
    |selection|`list`|


_Invoked after user has finished selecting items from the Checkbox picker. Returns a list of indices of the selected items in the order of selection. Returns a list having -1 if cancel was pressed._

### Custom Dialog Selection

[[Event('Notifier', 'Custom Dialog Selection', 'selection')]]

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |selection|`text`|


_Event to detect that the user has pressed a button from the custom dialog. It returns then the text of the button that was pressed._

### Got Custom Choose Dialog

[[Event('Notifier', 'Got Custom Choose Dialog', 'id choice')]]

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |id|`number`|
    |choice|`text`|


_Event to detect that a user have done his selection in the CustomChooseDialog._

### Got Text Input From Dialog

[[Event('Notifier', 'Got Text Input From Dialog', 'id response')]]

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |id|`number`|
    |response|`text`|


_Event to detect that a user have done his text input in the "Show Text Input Dialog"._

### Image Dialog Closed

[[Event('Notifier', 'Image Dialog Closed', 'id')]]

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |id|`number`|


_Event to detect that the user has watched the image dialog._

### Lightbox Closed

[[Event('Notifier', 'Lightbox Closed', 'id')]]

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |id|`number`|


_Event to detect that a user have closed the Lightbox._

### Linear Progress Dismissed

[[Event('Notifier', 'Linear Progress Dismissed')]]

_Event to detect that the linear progress dialog was dismissed._

### List Picker Selection

[[Event('Notifier', 'List Picker Selection', 'id item')]]

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |id|`number`|
    |item|`text`|


_Event to get the picked list selection from the List Picker._

### Number Picker Selection

[[Event('Notifier', 'Number Picker Selection', 'id selection')]]

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |id|`number`|
    |selection|`number`|


_Event to detect that the user has selected a number from the number picker dialog._

### Radio Selection

[[Event('Notifier', 'Radio Selection', 'id listIndex')]]

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |id|`number`|
    |list Index|`number`|


_Event invoked when user has selected an option from the radio button picker. Outputs the index of the selected item. Returns -1 if cancel was pressed._

### Word Picker Selection

[[Event('Notifier', 'Word Picker Selection', 'id selection')]]

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |id|`number`|
    |selection|`text`|


_Event to detect that the user has selected a word from the word picker dialog._

## Methods

### CreateCustomDialog

[[Method('Notifier', 'CreateCustomDialog', false, 'component title buttonText cancelButtonText cancelable')]]

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |component|`component`|
    |title|`text`|
    |button Text|`text`|
    |cancel Button Text|`text`|
    |cancelable|`boolean`|


_Show whatever you want in a dialog. You can use as example arrangements, or images or whatever you want. Your chosen layout will be then removed from the screen and only visible in custom dialog. You can use the "Light Theme" property to have a light or dark background. Or you enable "Use Background Color" property to use the background color property as background dialog color. Please make sure the layout you want to use is visible._

### CustomChooseDialog

[[Method('Notifier', 'CustomChooseDialog', false, 'id message title button1Text button2Text cancelButtonText icon cancelable fullscreen')]]

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |id|`number`|
    |message|`text`|
    |title|`text`|
    |button1 Text|`text`|
    |button2 Text|`text`|
    |cancel Button Text|`text`|
    |icon|`text`|
    |cancelable|`boolean`|
    |fullscreen|`boolean`|


_Shows a dialog box with two buttons, from which the user can choose.  If cancelable is true there will be an additional CANCEL button. Pressing a button will raise the GotCustomChooseDialog event.  The "choice" parameter to GotCustomChooseDialog will be the text on the button that was pressed, or "Cancel" if the  CANCEL button was pressed. You can use the "Light Theme" property to have a light or dark background. Or you enable "Use Background Color" property to use the background color property as background dialog color. Use the 'Show Custom Dialog' block to the show the created custom dialog. The added component must be visible on screen. After you used this block here it will be removed automatic from screen and will be only visible again after you have shown the custom dialog._

### CustomMessageDialog

[[Method('Notifier', 'CustomMessageDialog', false, 'message title buttonText icon fullscreen')]]

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |message|`text`|
    |title|`text`|
    |button Text|`text`|
    |icon|`text`|
    |fullscreen|`boolean`|


_Show a Message Dialog. You can use the "Light Theme" property to have a light or dark background. Or you enable "Use Background Color" property to use the background color property as background dialog color._

### DismissCustomDialog

[[Method('Notifier', 'DismissCustomDialog', false)]]

_Use this block to dismiss the created custom dialog.the custom dialog._

### DismissLinearProgress

[[Method('Notifier', 'DismissLinearProgress', false)]]

_Dismiss a previously displayed LinearProgress box_

### DismissProgressDialog

[[Method('Notifier', 'DismissProgressDialog', false)]]

_Dismiss a previously displayed ProgressDialog box_

### DismissSpinningProgress

[[Method('Notifier', 'DismissSpinningProgress', false)]]

_Dismiss a previously displayed SpinningProgress box_

### LogError

[[Method('Notifier', 'LogError', false, 'message')]]

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |message|`text`|


_Writes an error message to the Android system log. See the Google Android documentation for how to access the log._

### LogInfo

[[Method('Notifier', 'LogInfo', false, 'message')]]

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |message|`text`|


_Writes an information message to the Android log._

### LogWarning

[[Method('Notifier', 'LogWarning', false, 'message')]]

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |message|`text`|


_Writes a warning message to the Android log. See the Google Android documentation for how to access the log._

### ShowAlert

[[Method('Notifier', 'ShowAlert', false, 'notice')]]

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |notice|`text`|


_Show a alert "toast" message._

### ShowCheckboxListDialog

[[Method('Notifier', 'ShowCheckboxListDialog', false, 'id title options buttonText cancelButtonText cancelable icon fullscreen')]]

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |id|`number`|
    |title|`text`|
    |options|`list`|
    |button Text|`text`|
    |cancel Button Text|`text`|
    |cancelable|`boolean`|
    |icon|`text`|
    |fullscreen|`boolean`|


_Shows a picker dialog with a list of options of whichmore than one can be chosen. Invokes the 'AfterMultiSelection' event. You can use the "Light Theme" property to have a light or dark background. Or you enable "Use Background Color" property to use the background color property as background dialog color._

### ShowChooseDialog

[[Method('Notifier', 'ShowChooseDialog', false, 'message title button1Text button2Text cancelable')]]

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |message|`text`|
    |title|`text`|
    |button1 Text|`text`|
    |button2 Text|`text`|
    |cancelable|`boolean`|


_Shows a dialog box with two buttons, from which the user can choose.  If cancelable is true there will be an additional CANCEL button. Pressing a button will raise the AfterChoosing event.  The "choice" parameter to AfterChoosing will be the text on the button that was pressed, or "Cancel" if the  CANCEL button was pressed._

### ShowCustomDialog

[[Method('Notifier', 'ShowCustomDialog', false)]]

_Show the custom dialog. Dont forget that you have first to create the custom dialog._

### ShowImageDialog

[[Method('Notifier', 'ShowImageDialog', false, 'id title image buttonText')]]

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |id|`number`|
    |title|`text`|
    |image|`text`|
    |button Text|`text`|


_Show a image dialog. Animation types like "*.gif" are not supported. You can use the "Light Theme" property to have a light or dark background. Or you enable "Use Background Color" property to use the background color property as background dialog color._

### ShowLightbox

[[Method('Notifier', 'ShowLightbox', false, 'id image')]]

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |id|`number`|
    |image|`text`|


_Displays a lightbox. You can use images like "*.png" or "*,gif" from assets folder or from a web url._

### ShowLinearProgress

[[Method('Notifier', 'ShowLinearProgress', false, 'message title cancelable indeterminate maxValue icon')]]

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |message|`text`|
    |title|`text`|
    |cancelable|`boolean`|
    |indeterminate|`boolean`|
    |max Value|`number`|
    |icon|`text`|


_Shows a progress dialog with a horizontal progress bar. Can be dismissed by user if 'cancelable' is set to true. If indeterminate is true, maxValue and the 'UpdateProgress' method will have no effect. You can use the "Light Theme" property to have a light or dark background. Or you enable "Use Background Color" property to use the background color property as background dialog color._

### ShowListPicker

[[Method('Notifier', 'ShowListPicker', false, 'id title itemsList icon fullscreen')]]

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |id|`number`|
    |title|`text`|
    |items List|`list`|
    |icon|`text`|
    |fullscreen|`boolean`|


_Shows a list picker dialog. You can use the "Light Theme" property to have a light or dark background. Or you enable "Use Background Color" property to use the background color property as background dialog color._

### ShowMessageDialog

[[Method('Notifier', 'ShowMessageDialog', false, 'message title buttonText')]]

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |message|`text`|
    |title|`text`|
    |button Text|`text`|


_Show a Message Dialog._

### ShowNumberPicker

[[Method('Notifier', 'ShowNumberPicker', false, 'id title buttonText cancelButtonText minValue maxValue startValue')]]

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |id|`number`|
    |title|`text`|
    |button Text|`text`|
    |cancel Button Text|`text`|
    |min Value|`number`|
    |max Value|`number`|
    |start Value|`number`|


_Shows a number picker dialog that enables the user to select a number from a predefined range. You can use the "Use Background Color" property to use the background color property as background dialog color._

### ShowPasswordDialog

[[Method('Notifier', 'ShowPasswordDialog', false, 'message title cancelable')]]

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |message|`text`|
    |title|`text`|
    |cancelable|`boolean`|


_Shows a dialog box where the user can enter password (input is masked), after which the AfterTextInput event will be raised.  If cancelable is true there will be an additional CANCEL button. Entering password will raise the AfterTextInput event.  The "response" parameter to AfterTextInput will be the entered password, or "Cancel" if CANCEL button was pressed._

### ShowProgressDialog

[[Method('Notifier', 'ShowProgressDialog', false, 'message title')]]

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |message|`text`|
    |title|`text`|


_Shows a dialog box with an optional title and message (use empty strings if they are not wanted). This dialog box contains a spinning artifact to indicate that the program is working. It cannot be canceled by the user but must be dismissed by the App Inventor Program by using the DismissProgressDialog block._

### ShowRadioListDialog

[[Method('Notifier', 'ShowRadioListDialog', false, 'id title options chooseButtonText cancelable cancelButtonText selection icon fullscreen')]]

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |id|`number`|
    |title|`text`|
    |options|`list`|
    |choose Button Text|`text`|
    |cancelable|`boolean`|
    |cancel Button Text|`text`|
    |selection|`number`|
    |icon|`text`|
    |fullscreen|`boolean`|


_Shows a radio list dialog with a list of options of which only one can be chosen. You can use the "Light Theme" property to have a light or dark background. Or you enable "Use Background Color" property to use the background color property as background dialog color._

### ShowSpinningProgress

[[Method('Notifier', 'ShowSpinningProgress', false, 'message title cancelable icon')]]

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |message|`text`|
    |title|`text`|
    |cancelable|`boolean`|
    |icon|`text`|


_Shows a spinning progress dialog which can be dismissed by the user if 'cancelable' is set to true. You can use the "Light Theme" property to have a light or dark background. Or you enable "Use Background Color" property to use the background color property as background dialog color._

### ShowTextDialog

[[Method('Notifier', 'ShowTextDialog', false, 'message title cancelable')]]

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |message|`text`|
    |title|`text`|
    |cancelable|`boolean`|


_Shows a dialog box where the user can enter text, after which the AfterTextInput event will be raised.  If cancelable is true there will be an additional CANCEL button. Entering text will raise the AfterTextInput event.  The "response" parameter to AfterTextInput will be the text that was entered, or "Cancel" if the CANCEL button was pressed._

### ShowTextInputDialog

[[Method('Notifier', 'ShowTextInputDialog', false, 'id title defaultText icon hint fullscreen cancelable inputType buttonText cancelButtonText textColor hintColor')]]

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |id|`number`|
    |title|`text`|
    |default Text|`text`|
    |icon|`text`|
    |hint|`text`|
    |fullscreen|`boolean`|
    |cancelable|`boolean`|
    |input Type|`number`|
    |button Text|`text`|
    |cancel Button Text|`text`|
    |text Color|`number`|
    |hint Color|`number`|


_Show a text input dialog. Possible input types are: "1= Normal text", "2= Password text", "3= Person name", "4= Email adress", "5|6= Number", "7= Password number" or "8= datetime". You can use the "Light Theme" property to have a light or dark background. Or you enable "Use Background Color" property to use the background color property as background dialog color._

### ShowWordPicker

[[Method('Notifier', 'ShowWordPicker', false, 'id title buttonText cancelButtonText itemsList')]]

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |id|`number`|
    |title|`text`|
    |button Text|`text`|
    |cancel Button Text|`text`|
    |items List|`list`|


_Shows a word picker dialog that enables the user to select a number from a predefined word. You can use the "Use Background Color" property to use the background color property as background dialog color._

### UpdateProgress

[[Method('Notifier', 'UpdateProgress', false, 'value')]]

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |value|`number`|


_Change the current value of the linear progress dialog. Has no effect if "indeterminate" is set to true._

## Properties

### Background Color

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Notifier', 'Background Color')]]

| Type | Default |
|:----:|:-------:|
|number|&HFF444444|

_Specifies the background color for alerts (not dialogs)._

### Dim Amount

<small>Available as ^^Advanced^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Notifier', 'Dim Amount')]]

| Type | Default |
|:----:|:-------:|
|number|0.5|

_Set the amount of dim behind the dialog window. Use '0.0' for no dim and '1.0' for full dim._

### Light Theme

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Notifier', 'Light Theme')]]

| Type | Default |
|:----:|:-------:|
|boolean|False|

_Gets the current theme_

### Linkify

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Notifier', 'Linkify')]]

| Type | Default |
|:----:|:-------:|
|boolean|False|

_If set to true will attempt to make text clickable where possible; e.g. hyperlinks, phone numbers. Can not be used for Progress Dialogs._

### Notifier Length

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Notifier', 'Notifier Length')]]

| Type | Default |
|:----:|:-------:|
|number|1|

_specifies the length of time that the alert is shown -- either "short" or "long"._

### Text Color

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Notifier', 'Text Color')]]

| Type | Default |
|:----:|:-------:|
|number|&HFFFFFFFF|

_Specifies the text color for alerts or for dialogs message._

### Text Font Typeface

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Notifier', 'Text Font Typeface')]]

| Type | Default |
|:----:|:-------:|
|number|0|

_No description available_

### Text Font Typeface Import

<small>Available as ^^Advanced^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Notifier', 'Text Font Typeface Import')]]

| Type |
|:----:|
|text|

_Set a custom font._

### Title Color

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Notifier', 'Title Color')]]

| Type | Default |
|:----:|:-------:|
|number|&HFFFFFFFF|

_Specifies the title text color for dialogs._

### Title Font Typeface

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Notifier', 'Title Font Typeface')]]

| Type | Default |
|:----:|:-------:|
|number|0|

_No description available_

### Title Font Typeface Import

<small>Available as ^^Advanced^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Notifier', 'Title Font Typeface Import')]]

| Type |
|:----:|
|text|

_Set a custom font._

### Use Background Color

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Notifier', 'Use Background Color')]]

| Type | Default |
|:----:|:-------:|
|boolean|True|

_If enabled the dialog will use the color from the "Background Color"-option. Else it will use the theme (light or dark)._