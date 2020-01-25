# Screenshot

| Category | Requires | Version |
|:--------:|:-------:|:--------:|
|**Utilities**|<span class="chip chip-any">API 19, Android 4.4 - 4.4.4 KitKat</span>|<span class="chip chip-number">2</span>|

:mag: {>>Non-Visible component<<}

## Overview

A non-visible component that takes a screenshot of the content currently visible on the device''s screen.

??? example "Permissions"
    * [android.permission.READ_EXTERNAL_STORAGE](https://developer.android.com/reference/android/Manifest.permission.html#READ_EXTERNAL_STORAGE)
    * [android.permission.WRITE_EXTERNAL_STORAGE](https://developer.android.com/reference/android/Manifest.permission.html#WRITE_EXTERNAL_STORAGE)

## Events

### Got Screenshot

Event to detect that a screenshot was made by the user. Returns the image path to the taken screenshot.

<div class="block" ai2-block="event" not-rendered="true" value="%7B%22componentName%22:%20%22Screenshot%22,%20%22name%22:%20%22Got%20Screenshot%22,%20%22param%22:%20%5B%22image%22%5D%7D"></div>

| Params | []() |
|--------|------|
|image|<span class="chip chip-text">Text</span>|

## Methods

### Take Screenshot

Take a screenshot of the current visible screen.

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22Screenshot%22,%20%22name%22:%20%22Take%20Screenshot%22,%20%22output%22:%20false,%20%22param%22:%20%5B%5D%7D"></div>

## Properties

### Allow Screenshots

<span style="user-select: none; white-space:pre-wrap;"><span class="chip chip-boolean">Boolean</span> <span class="chip chip-boolean">Default: <i>True</i></span>          <span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span>&#32;</span>

This feature allows users of your app to make or ban screenshots of their app. If disabled and a person tries to make a screenshot, they will receive then a default system message that this is not possible.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Screenshot%22,%20%22name%22:%20%22Allow%20Screenshots%22,%20%22getter%22:%20false%7D"></div>

### Are Permissions Granted

<span style="user-select: none; white-space:pre-wrap;"><span class="chip chip-boolean">Boolean</span>          <span class="chip chip-rw">Read</span> - <span class="chip chip-bd">Blocks</span>&#32;</span>

Returns true if the write and read permission is granted, else false.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Screenshot%22,%20%22name%22:%20%22Are%20Permissions%20Granted%22,%20%22getter%22:%20true%7D"></div>

### Dim Amount

<span style="user-select: none; white-space:pre-wrap;"><span class="chip chip-number">Number</span> <span class="chip chip-number">Default: <i>0.5</i></span>          <span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span>&#32;</span>

Set the amount of dim behind the preview window if ShowPreview(...) is enabled. Use '0.0' for no dim and '1.0' for full dim.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Screenshot%22,%20%22name%22:%20%22Dim%20Amount%22,%20%22getter%22:%20true%7D"></div>
<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Screenshot%22,%20%22name%22:%20%22Dim%20Amount%22,%20%22getter%22:%20false%7D"></div>

### File Name

<span style="user-select: none; white-space:pre-wrap;"><span class="chip chip-text">Text</span> <span class="chip chip-text">Default: <i>Screenshot.png</i></span>          <span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span>&#32;</span>

This will be the name for the taken screenshot image file.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Screenshot%22,%20%22name%22:%20%22File%20Name%22,%20%22getter%22:%20true%7D"></div>
<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Screenshot%22,%20%22name%22:%20%22File%20Name%22,%20%22getter%22:%20false%7D"></div>

### is Read Permission Granted

<span style="user-select: none; white-space:pre-wrap;"><span class="chip chip-boolean">Boolean</span>          <span class="chip chip-rw">Read</span> - <span class="chip chip-bd">Blocks</span>&#32;</span>

Returns true if the read permission is granted, else false.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Screenshot%22,%20%22name%22:%20%22is%20Read%20Permission%20Granted%22,%20%22getter%22:%20true%7D"></div>

### is Write Permission Granted

<span style="user-select: none; white-space:pre-wrap;"><span class="chip chip-boolean">Boolean</span>          <span class="chip chip-rw">Read</span> - <span class="chip chip-bd">Blocks</span>&#32;</span>

Returns true if the write permission is granted, else false.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Screenshot%22,%20%22name%22:%20%22is%20Write%20Permission%20Granted%22,%20%22getter%22:%20true%7D"></div>

### Notification Share Title

<span style="user-select: none; white-space:pre-wrap;"><span class="chip chip-text">Text</span> <span class="chip chip-text">Default: <i>Share</i></span>          <span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span>&#32;</span>

This will set the notification share button text if the option "Show Notification" is enabled.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Screenshot%22,%20%22name%22:%20%22Notification%20Share%20Title%22,%20%22getter%22:%20true%7D"></div>
<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Screenshot%22,%20%22name%22:%20%22Notification%20Share%20Title%22,%20%22getter%22:%20false%7D"></div>

### Notification Title

<span style="user-select: none; white-space:pre-wrap;"><span class="chip chip-text">Text</span> <span class="chip chip-text">Default: <i>Screenshot..</i></span>          <span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span>&#32;</span>

This will set the notification title if the option "Show Notification" is enabled.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Screenshot%22,%20%22name%22:%20%22Notification%20Title%22,%20%22getter%22:%20true%7D"></div>
<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Screenshot%22,%20%22name%22:%20%22Notification%20Title%22,%20%22getter%22:%20false%7D"></div>

### Show Notification

<span style="user-select: none; white-space:pre-wrap;"><span class="chip chip-boolean">Boolean</span> <span class="chip chip-boolean">Default: <i>False</i></span>          <span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span>&#32;</span>

If enabled you will see a notification in the statusbar after the screenshot is taken.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Screenshot%22,%20%22name%22:%20%22Show%20Notification%22,%20%22getter%22:%20true%7D"></div>
<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Screenshot%22,%20%22name%22:%20%22Show%20Notification%22,%20%22getter%22:%20false%7D"></div>

### Show Notification Share Button

<span style="user-select: none; white-space:pre-wrap;"><span class="chip chip-boolean">Boolean</span> <span class="chip chip-boolean">Default: <i>True</i></span>          <span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span>&#32;</span>

If enabled you will see a notification with a share button after the screenshot is taken.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Screenshot%22,%20%22name%22:%20%22Show%20Notification%20Share%20Button%22,%20%22getter%22:%20true%7D"></div>
<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Screenshot%22,%20%22name%22:%20%22Show%20Notification%20Share%20Button%22,%20%22getter%22:%20false%7D"></div>

### Show Preview

<span style="user-select: none; white-space:pre-wrap;"><span class="chip chip-boolean">Boolean</span> <span class="chip chip-boolean">Default: <i>True</i></span>          <span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span>&#32;</span>

If enabled you will see a short preview animation after the screenshot is taken.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Screenshot%22,%20%22name%22:%20%22Show%20Preview%22,%20%22getter%22:%20true%7D"></div>
<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Screenshot%22,%20%22name%22:%20%22Show%20Preview%22,%20%22getter%22:%20false%7D"></div>

### Use Large Notification

<span style="user-select: none; white-space:pre-wrap;"><span class="chip chip-boolean">Boolean</span> <span class="chip chip-boolean">Default: <i>False</i></span>          <span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span>&#32;</span>

This will display the notification in a big style.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Screenshot%22,%20%22name%22:%20%22Use%20Large%20Notification%22,%20%22getter%22:%20true%7D"></div>
<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Screenshot%22,%20%22name%22:%20%22Use%20Large%20Notification%22,%20%22getter%22:%20false%7D"></div>
