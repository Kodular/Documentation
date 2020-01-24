# Notification

| Category | Requires | Version |
|:--------:|:-------:|:--------:|
|**Experimental**|<span class="chip chip-any">API 19, Android 4.4 - 4.4.4 KitKat</span>|<span class="chip chip-number">1</span>|

:mag: {>>Non-visible component<<}

## Overview

A non-visible component that sends a notification to the user''s device.

## Methods

### Are Notification Enabled

<span class="chip chip-boolean">Returns: <i>Boolean</i></span> 

Check wether the app can send Notifications

[[Method('Notification', 'Are Notification Enabled', True)]]

### Big Picture Notification

Send a normal notification

[[Method('Notification', 'Big Picture Notification', False, 'notificationID', 'title', 'message', 'bigPicture', 'startValue', 'removeOnClick')]]

| Params | []() |
|--------|------|
|notification ID|<span class="chip chip-number">Number</span>|
|title|<span class="chip chip-text">Text</span>|
|message|<span class="chip chip-text">Text</span>|
|big Picture|<span class="chip chip-text">Text</span>|
|start Value|<span class="chip chip-text">Text</span>|
|remove On Click|<span class="chip chip-boolean">Boolean</span>|


### Cancel All Notifications

Cancel all Notifications

[[Method('Notification', 'Cancel All Notifications', False)]]

### Cancel Notification

Cancel a Notification with an id

[[Method('Notification', 'Cancel Notification', False, 'id')]]

| Params | []() |
|--------|------|
|id|<span class="chip chip-number">Number</span>|


### Normal Notification

Send a normal notification

[[Method('Notification', 'Normal Notification', False, 'notificationID', 'title', 'message', 'startValue', 'removeOnClick')]]

| Params | []() |
|--------|------|
|notification ID|<span class="chip chip-number">Number</span>|
|title|<span class="chip chip-text">Text</span>|
|message|<span class="chip chip-text">Text</span>|
|start Value|<span class="chip chip-text">Text</span>|
|remove On Click|<span class="chip chip-boolean">Boolean</span>|


### Simple Notification

Send a simple notification

[[Method('Notification', 'Simple Notification', False, 'title', 'message')]]

| Params | []() |
|--------|------|
|title|<span class="chip chip-text">Text</span>|
|message|<span class="chip chip-text">Text</span>|


## Properties

### Priority

<span class="chip chip-number">Number</span> <span class="chip chip-number">Default: <i>1</i></span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span> 

Set the priority level. 1 = "Default", 2 = "high", 3 = "low", 4 = "max", 5 = "min"

[[PropertyBlockGetterAndSetter('Notification', 'Priority')]]

### Visibility

<span class="chip chip-number">Number</span> <span class="chip chip-number">Default: <i>1</i></span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span> 

Set the visibility property. 1 = "public", 2 = "private", 3 = "secret".

[[PropertyBlockGetterAndSetter('Notification', 'Visibility')]]