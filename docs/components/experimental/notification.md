# Notification

| Category | Requires | Version |
|:--------:|:-------:|:--------:|
|**Experimental**|<span class="chip chip-any">API 19, Android 4.4 - 4.4.4 KitKat</span>|<span class="chip chip-number">1</span>|

:mag: {>>Non-Visible component<<}

## Overview

A non-visible component that sends a notification to the user''s device.

## Methods

### Are Notification Enabled

<span class="chip chip-boolean">Returns: <i>Boolean</i></span> 

Check wether the app can send Notifications

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22Notification%22,%20%22name%22:%20%22Are%20Notification%20Enabled%22,%20%22output%22:%20true,%20%22params%22:%20%5B%5D%7D"></div>


### Big Picture Notification

Send a normal notification

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22Notification%22,%20%22name%22:%20%22Big%20Picture%20Notification%22,%20%22output%22:%20false,%20%22params%22:%20%5B%22notification%20ID%22,%20%22title%22,%20%22message%22,%20%22big%20Picture%22,%20%22start%20Value%22,%20%22remove%20On%20Click%22%5D%7D"></div>


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

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22Notification%22,%20%22name%22:%20%22Cancel%20All%20Notifications%22,%20%22output%22:%20false,%20%22params%22:%20%5B%5D%7D"></div>


### Cancel Notification

Cancel a Notification with an id

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22Notification%22,%20%22name%22:%20%22Cancel%20Notification%22,%20%22output%22:%20false,%20%22params%22:%20%5B%22id%22%5D%7D"></div>


| Params | []() |
|--------|------|
|id|<span class="chip chip-number">Number</span>|


### Normal Notification

Send a normal notification

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22Notification%22,%20%22name%22:%20%22Normal%20Notification%22,%20%22output%22:%20false,%20%22params%22:%20%5B%22notification%20ID%22,%20%22title%22,%20%22message%22,%20%22start%20Value%22,%20%22remove%20On%20Click%22%5D%7D"></div>


| Params | []() |
|--------|------|
|notification ID|<span class="chip chip-number">Number</span>|
|title|<span class="chip chip-text">Text</span>|
|message|<span class="chip chip-text">Text</span>|
|start Value|<span class="chip chip-text">Text</span>|
|remove On Click|<span class="chip chip-boolean">Boolean</span>|


### Simple Notification

Send a simple notification

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22Notification%22,%20%22name%22:%20%22Simple%20Notification%22,%20%22output%22:%20false,%20%22params%22:%20%5B%22title%22,%20%22message%22%5D%7D"></div>


| Params | []() |
|--------|------|
|title|<span class="chip chip-text">Text</span>|
|message|<span class="chip chip-text">Text</span>|


## Properties

### Priority

<span class="chip chip-number">Number</span><span style="user-select: none;">&nbsp;</span><span class="chip chip-number">Default: <i>1</i></span><span style="user-select: none;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span class="chip chip-rw">Read</span><span style="user-select: none;">&nbsp;</span><span class="chip chip-rw">Write</span><span style="user-select: none;">&nbsp;</span>-<span style="user-select: none;">&nbsp;</span><span class="chip chip-bd">Designer</span><span style="user-select: none;">&nbsp;</span><span class="chip chip-bd">Blocks</span><span style="user-select: none;">&nbsp;</span>

Set the priority level. 1 = "Default", 2 = "high", 3 = "low", 4 = "max", 5 = "min"

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Notification%22,%20%22name%22:%20%22Priority%22,%20%22getter%22:%20true%7D"></div>
<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Notification%22,%20%22name%22:%20%22Priority%22,%20%22getter%22:%20false%7D"></div>


### Visibility

<span class="chip chip-number">Number</span><span style="user-select: none;">&nbsp;</span><span class="chip chip-number">Default: <i>1</i></span><span style="user-select: none;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span class="chip chip-rw">Read</span><span style="user-select: none;">&nbsp;</span><span class="chip chip-rw">Write</span><span style="user-select: none;">&nbsp;</span>-<span style="user-select: none;">&nbsp;</span><span class="chip chip-bd">Designer</span><span style="user-select: none;">&nbsp;</span><span class="chip chip-bd">Blocks</span><span style="user-select: none;">&nbsp;</span>

Set the visibility property. 1 = "public", 2 = "private", 3 = "secret".

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Notification%22,%20%22name%22:%20%22Visibility%22,%20%22getter%22:%20true%7D"></div>
<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Notification%22,%20%22name%22:%20%22Visibility%22,%20%22getter%22:%20false%7D"></div>
