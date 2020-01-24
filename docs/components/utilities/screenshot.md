# Screenshot

| Category | Requires | Version |
|:--------:|:-------:|:--------:|
|Utilities|API 19, Android 4.4 - 4.4.4 KitKat|2|

:mag: {>>Non-visible component<<}

## Overview

A non-visible component that takes a screenshot of the content currently visible on the device''s screen.

??? example "Permissions"
    * [android.permission.READ_EXTERNAL_STORAGE](https://developer.android.com/reference/android/Manifest.permission.html#READ_EXTERNAL_STORAGE)
    * [android.permission.WRITE_EXTERNAL_STORAGE](https://developer.android.com/reference/android/Manifest.permission.html#WRITE_EXTERNAL_STORAGE)


## Events

### Got Screenshot

Event to detect that a screenshot was made by the user. Returns the image path to the taken screenshot.

[[Event('Screenshot', 'Got Screenshot', 'image')]]

| Params | []() |
|--------|------|
|image|<span class="chip chip-text">Text</span>|


## Methods

### Take Screenshot

Take a screenshot of the current visible screen.

[[Method('Screenshot', 'Take Screenshot', False)]]

## Properties

### Allow Screenshots

<span class="chip chip-boolean">Boolean</span> <span class="chip chip-boolean">Default: <i>True</i></span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span> 

This feature allows users of your app to make or ban screenshots of their app. If disabled and a person tries to make a screenshot, they will receive then a default system message that this is not possible.

[[PropertyBlockGetterAndSetter('Screenshot', 'Allow Screenshots')]]

### Dim Amount

<span class="chip chip-number">Number</span> <span class="chip chip-number">Default: <i>0.5</i></span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span> 

Set the amount of dim behind the preview window if ShowPreview(...) is enabled. Use '0.0' for no dim and '1.0' for full dim.

[[PropertyBlockGetterAndSetter('Screenshot', 'Dim Amount')]]

### File Name

<span class="chip chip-text">Text</span> <span class="chip chip-text">Default: <i>Screenshot.png</i></span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span> 

This will be the name for the taken screenshot image file.

[[PropertyBlockGetterAndSetter('Screenshot', 'File Name')]]

### Use Large Notification

<span class="chip chip-boolean">Boolean</span> <span class="chip chip-boolean">Default: <i>False</i></span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span> 

This will display the notification in a big style.

[[PropertyBlockGetterAndSetter('Screenshot', 'Use Large Notification')]]

### Show Notification Share Button

<span class="chip chip-boolean">Boolean</span> <span class="chip chip-boolean">Default: <i>True</i></span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span> 

If enabled you will see a notification with a share button after the screenshot is taken.

[[PropertyBlockGetterAndSetter('Screenshot', 'Show Notification Share Button')]]

### Notification Share Title

<span class="chip chip-text">Text</span> <span class="chip chip-text">Default: <i>Share</i></span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span> 

This will set the notification share button text if the option "Show Notification" is enabled.

[[PropertyBlockGetterAndSetter('Screenshot', 'Notification Share Title')]]

### Notification Title

<span class="chip chip-text">Text</span> <span class="chip chip-text">Default: <i>Screenshot..</i></span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span> 

This will set the notification title if the option "Show Notification" is enabled.

[[PropertyBlockGetterAndSetter('Screenshot', 'Notification Title')]]

### Show Notification

<span class="chip chip-boolean">Boolean</span> <span class="chip chip-boolean">Default: <i>False</i></span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span> 

If enabled you will see a notification in the statusbar after the screenshot is taken.

[[PropertyBlockGetterAndSetter('Screenshot', 'Show Notification')]]

### Show Preview

<span class="chip chip-boolean">Boolean</span> <span class="chip chip-boolean">Default: <i>True</i></span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span> 

If enabled you will see a short preview animation after the screenshot is taken.

[[PropertyBlockGetterAndSetter('Screenshot', 'Show Preview')]]

### Are Permissions Granted

<span class="chip chip-boolean">Boolean</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> - <span class="chip chip-bd">Blocks</span> 

Returns true if the write and read permission is granted, else false.

[[PropertyBlockGetter('Screenshot', 'Are Permissions Granted')]]

### is Read Permission Granted

<span class="chip chip-boolean">Boolean</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> - <span class="chip chip-bd">Blocks</span> 

Returns true if the read permission is granted, else false.

[[PropertyBlockGetter('Screenshot', 'is Read Permission Granted')]]

### is Write Permission Granted

<span class="chip chip-boolean">Boolean</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> - <span class="chip chip-bd">Blocks</span> 

Returns true if the write permission is granted, else false.

[[PropertyBlockGetter('Screenshot', 'is Write Permission Granted')]]