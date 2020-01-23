# Notification

| Category | Requires | Version |
|:--------:|:-------:|:--------:|
|Experimental|API 19, Android 4.4 - 4.4.4 KitKat|1|

:mag: {>>Non-visible component<<}

## Overview

A non-visible component that sends a notification to the user''s device.

## Methods

### Are Notification Enabled

[[Method('Notification', 'Are Notification Enabled', True)]]

{>>Returns `boolean`<<}

Check wether the app can send Notifications

### Big Picture Notification

[[Method('Notification', 'Big Picture Notification', False, 'notificationID', 'title', 'message', 'bigPicture', 'startValue', 'removeOnClick')]]

| Params | []() |
|--------|------|
|notification ID|Number|
|title|Text|
|message|Text|
|big Picture|Text|
|start Value|Text|
|remove On Click|Boolean|


Send a normal notification

### Cancel All Notifications

[[Method('Notification', 'Cancel All Notifications', False)]]

Cancel all Notifications

### Cancel Notification

[[Method('Notification', 'Cancel Notification', False, 'id')]]

| Params | []() |
|--------|------|
|id|Number|


Cancel a Notification with an id

### Normal Notification

[[Method('Notification', 'Normal Notification', False, 'notificationID', 'title', 'message', 'startValue', 'removeOnClick')]]

| Params | []() |
|--------|------|
|notification ID|Number|
|title|Text|
|message|Text|
|start Value|Text|
|remove On Click|Boolean|


Send a normal notification

### Simple Notification

[[Method('Notification', 'Simple Notification', False, 'title', 'message')]]

| Params | []() |
|--------|------|
|title|Text|
|message|Text|


Send a simple notification

## Properties

### Priority

<span class="chip chip-number">Number</span> <span class="chip chip-number">Default: <i>1</i></span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span> 

Set the priority level. 1 = "Default", 2 = "high", 3 = "low", 4 = "max", 5 = "min"

[[PropertyBlockGetterAndSetter('Notification', 'Priority')]]

### Visibility

<span class="chip chip-number">Number</span> <span class="chip chip-number">Default: <i>1</i></span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span> 

Set the visibility property. 1 = "public", 2 = "private", 3 = "secret".

[[PropertyBlockGetterAndSetter('Notification', 'Visibility')]]