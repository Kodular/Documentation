# Screenshot

| Category | Version | Requires |
|:--------:|:-------:|:--------:|
|Utilities|2|API 19 - Android 4.4 - 4.4.4 KitKat|

:mag: {>>Non-visible component<<}

## Overview

A non-visible component that takes a screenshot of the content currently visible on the device''s screen.

## Events

### Got Screenshot

[[Event('Screenshot', 'Got Screenshot', 'image')]]

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |image|`text`|


Event to detect that a screenshot was made by the user. Returns the image path to the taken screenshot.

## Methods

### TakeScreenshot

[[Method('Screenshot', 'TakeScreenshot', false)]]

Take a screenshot of the current visible screen.

## Properties

### Allow Screenshots

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Screenshot', 'Allow Screenshots')]]

| Type | Default |
|:----:|:-------:|
|boolean|True|

This feature allows users of your app to make or ban screenshots of their app. If disabled and a person tries to make a screenshot, they will receive then a default system message that this is not possible.

### Dim Amount

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Screenshot', 'Dim Amount')]]

| Type | Default |
|:----:|:-------:|
|number|0.5|

Set the amount of dim behind the preview window if ShowPreview(...) is enabled. Use '0.0' for no dim and '1.0' for full dim.

### File Name

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Screenshot', 'File Name')]]

| Type | Default |
|:----:|:-------:|
|text|Screenshot.png|

This will be the name for the taken screenshot image file.

### Use Large Notification

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Screenshot', 'Use Large Notification')]]

| Type | Default |
|:----:|:-------:|
|boolean|False|

This will display the notification in a big style.

### Show Notification Share Button

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Screenshot', 'Show Notification Share Button')]]

| Type | Default |
|:----:|:-------:|
|boolean|True|

If enabled you will see a notification with a share button after the screenshot is taken.

### Notification Share Title

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Screenshot', 'Notification Share Title')]]

| Type | Default |
|:----:|:-------:|
|text|Share|

This will set the notification share button text if the option "Show Notification" is enabled.

### Notification Title

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Screenshot', 'Notification Title')]]

| Type | Default |
|:----:|:-------:|
|text|Screenshot..|

This will set the notification title if the option "Show Notification" is enabled.

### Show Notification

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Screenshot', 'Show Notification')]]

| Type | Default |
|:----:|:-------:|
|boolean|False|

If enabled you will see a notification in the statusbar after the screenshot is taken.

### Show Preview

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Screenshot', 'Show Preview')]]

| Type | Default |
|:----:|:-------:|
|boolean|True|

If enabled you will see a short preview animation after the screenshot is taken.

### Are Permissions Granted

:eyes: Read-Only property
[[PropertyBlockGetter('Screenshot', 'Are Permissions Granted')]]

| Type | Default |
|:----:|:-------:|
|boolean|None|

Returns true if the write and read permission is granted, else false.

### is Read Permission Granted

:eyes: Read-Only property
[[PropertyBlockGetter('Screenshot', 'is Read Permission Granted')]]

| Type | Default |
|:----:|:-------:|
|boolean|None|

Returns true if the read permission is granted, else false.

### is Write Permission Granted

:eyes: Read-Only property
[[PropertyBlockGetter('Screenshot', 'is Write Permission Granted')]]

| Type | Default |
|:----:|:-------:|
|boolean|None|

Returns true if the write permission is granted, else false.