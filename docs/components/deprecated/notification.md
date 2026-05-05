# Notification

{>> Non-Visible component<<}

| Category | Requires | Version |
|:--------:|:-------:|:--------:|
|**Deprecated**|<span class="chip chip-any">API 21, Android 5.0 Lollipop</span>|<span class="chip chip-number">1</span>|

!!! danger "Deprecated component"
    This component is deprecated. Projects that still contain it will fail to build until it is removed. You can still load existing projects in the Designer and live-test them with the Companion while you migrate, but APK and AAB builds are blocked. Look for an up-to-date replacement in the active component palette.

## Overview

A non-visible component that sends a notification to the user''s device.

## Methods

### Are Notification Enabled

<span class="chip chip-boolean">Returns: <i>Boolean</i></span>

Check whether the app can send Notifications

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22Notification%22,%20%22name%22:%20%22Are%20Notification%20Enabled%22,%20%22output%22:%20true,%20%22param%22:%20%5B%5D%7D"></div>

### Cancel All Notifications

Cancel all Notifications

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22Notification%22,%20%22name%22:%20%22Cancel%20All%20Notifications%22,%20%22output%22:%20false,%20%22param%22:%20%5B%5D%7D"></div>

### Cancel Notification

Cancel a Notification with an id

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22Notification%22,%20%22name%22:%20%22Cancel%20Notification%22,%20%22output%22:%20false,%20%22param%22:%20%5B%22id%22%5D%7D"></div>

| Params | []() |
|--------|------|
|id|<span class="chip chip-number">Number</span>|

### Notification Builder Android Car

Set the accent color for Android Car devices

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22Notification%22,%20%22name%22:%20%22Notification%20Builder%20Android%20Car%22,%20%22output%22:%20false,%20%22param%22:%20%5B%22accent%20Color%22%5D%7D"></div>

| Params | []() |
|--------|------|
|accent Color|<span class="chip chip-number">Number</span>|

### Notification Builder Android Wear

Set the background image for Android Wear devices

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22Notification%22,%20%22name%22:%20%22Notification%20Builder%20Android%20Wear%22,%20%22output%22:%20false,%20%22param%22:%20%5B%22background%20Image%22%5D%7D"></div>

| Params | []() |
|--------|------|
|background Image|<span class="chip chip-text">Text</span>|

### Notification Builder Auto Cancel

Set whether the notification should me removed after the user clicks on it.

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22Notification%22,%20%22name%22:%20%22Notification%20Builder%20Auto%20Cancel%22,%20%22output%22:%20false,%20%22param%22:%20%5B%22auto%20Cancel%22%5D%7D"></div>

| Params | []() |
|--------|------|
|auto Cancel|<span class="chip chip-boolean">Boolean</span>|

### Notification Builder Big Picture

Set the big picture for the notification

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22Notification%22,%20%22name%22:%20%22Notification%20Builder%20Big%20Picture%22,%20%22output%22:%20false,%20%22param%22:%20%5B%22big%20Picture%22%5D%7D"></div>

| Params | []() |
|--------|------|
|big Picture|<span class="chip chip-text">Text</span>|

### Notification Builder Notification ID

Set the notification id.

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22Notification%22,%20%22name%22:%20%22Notification%20Builder%20Notification%20ID%22,%20%22output%22:%20false,%20%22param%22:%20%5B%22id%22%5D%7D"></div>

| Params | []() |
|--------|------|
|id|<span class="chip chip-number">Number</span>|

### Notification Builder Priority

Set the notification builder priority. 1 = "Default", 2 = "high", 3 = "low", 4 = "max", 5 = "min"

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22Notification%22,%20%22name%22:%20%22Notification%20Builder%20Priority%22,%20%22output%22:%20false,%20%22param%22:%20%5B%22priority%22%5D%7D"></div>

| Params | []() |
|--------|------|
|priority|<span class="chip chip-number">Number</span>|

### Notification Builder Send

Send the notification that you build

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22Notification%22,%20%22name%22:%20%22Notification%20Builder%20Send%22,%20%22output%22:%20false,%20%22param%22:%20%5B%5D%7D"></div>

### Notification Builder Start

Start building a new notification

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22Notification%22,%20%22name%22:%20%22Notification%20Builder%20Start%22,%20%22output%22:%20false,%20%22param%22:%20%5B%22title%22,%20%22message%22%5D%7D"></div>

| Params | []() |
|--------|------|
|title|<span class="chip chip-text">Text</span>|
|message|<span class="chip chip-text">Text</span>|

### Notification Builder Start Value

Set the start value of the notification.

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22Notification%22,%20%22name%22:%20%22Notification%20Builder%20Start%20Value%22,%20%22output%22:%20false,%20%22param%22:%20%5B%22start%20Value%22%5D%7D"></div>

| Params | []() |
|--------|------|
|start Value|<span class="chip chip-text">Text</span>|

### Notification Builder Visibility

Set the notification builder visibility. 1 = "public", 2 = "private", 3 = "secret".

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22Notification%22,%20%22name%22:%20%22Notification%20Builder%20Visibility%22,%20%22output%22:%20false,%20%22param%22:%20%5B%22visibility%22%5D%7D"></div>

| Params | []() |
|--------|------|
|visibility|<span class="chip chip-number">Number</span>|

### Send Advanced Notification

Send a advanced notification (Android Wear Support)

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22Notification%22,%20%22name%22:%20%22Send%20Advanced%20Notification%22,%20%22output%22:%20false,%20%22param%22:%20%5B%22id%22,%20%22title%22,%20%22message%22,%20%22start%20Value%22,%20%22time%20On%22,%20%22time%20Off%22%5D%7D"></div>

| Params | []() |
|--------|------|
|id|<span class="chip chip-number">Number</span>|
|title|<span class="chip chip-text">Text</span>|
|message|<span class="chip chip-text">Text</span>|
|start Value|<span class="chip chip-text">Text</span>|
|time On|<span class="chip chip-number">Number</span>|
|time Off|<span class="chip chip-number">Number</span>|

### Send Notification

Send a notification

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22Notification%22,%20%22name%22:%20%22Send%20Notification%22,%20%22output%22:%20false,%20%22param%22:%20%5B%22title%22,%20%22message%22%5D%7D"></div>

| Params | []() |
|--------|------|
|title|<span class="chip chip-text">Text</span>|
|message|<span class="chip chip-text">Text</span>|

## Properties

### Priority

<span style="user-select: none; white-space:pre-wrap;"><span class="chip chip-number">Number</span> <span class="chip chip-number">Default: <i>1</i></span> :heavy_minus_sign: <span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span>  - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span></span>

Set the priority level. 1 = "Default", 2 = "high", 3 = "low", 4 = "max", 5 = "min"

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Notification%22,%20%22name%22:%20%22Priority%22,%20%22getter%22:%20true%7D"></div>
<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Notification%22,%20%22name%22:%20%22Priority%22,%20%22getter%22:%20false%7D"></div>

### Visibility

<span style="user-select: none; white-space:pre-wrap;"><span class="chip chip-number">Number</span> <span class="chip chip-number">Default: <i>1</i></span> :heavy_minus_sign: <span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span>  - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span></span>

Set the visibility property. 1 = "public", 2 = "private", 3 = "secret".

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Notification%22,%20%22name%22:%20%22Visibility%22,%20%22getter%22:%20true%7D"></div>
<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Notification%22,%20%22name%22:%20%22Visibility%22,%20%22getter%22:%20false%7D"></div>
