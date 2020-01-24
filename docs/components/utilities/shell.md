# Shell

| Category | Requires | Version |
|:--------:|:-------:|:--------:|
|**Utilities**|<span class="chip chip-any">API 19, Android 4.4 - 4.4.4 KitKat</span>|<span class="chip chip-number">2</span>|

:mag: {>>Non-Visible component<<}

## Overview

A non-visible component that executes shell commands and checks the device''s root status.

??? example "Permissions"
    * [android.permission.READ_EXTERNAL_STORAGE](https://developer.android.com/reference/android/Manifest.permission.html#READ_EXTERNAL_STORAGE)
    * [android.permission.WRITE_EXTERNAL_STORAGE](https://developer.android.com/reference/android/Manifest.permission.html#WRITE_EXTERNAL_STORAGE)

## Events

### Got Output

Read output after executing shell command

<div class="block" ai2-block="event" not-rendered="true" value="%7B%22componentName%22:%20%22Shell%22,%20%22name%22:%20%22Got%20Output%22,%20%22param%22:%20%5B%22out%22%5D%7D"></div>

| Params | []() |
|--------|------|
|out|<span class="chip chip-text">Text</span>|

## Methods

### Execute

Executes shell commands. To get output, use "GotOutput" event block.

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22Shell%22,%20%22name%22:%20%22Execute%22,%20%22output%22:%20false,%20%22param%22:%20%5B%22in%22%5D%7D"></div>

| Params | []() |
|--------|------|
|in|<span class="chip chip-text">Text</span>|

### Has Super User Apk Installed

<span class="chip chip-boolean">Returns: <i>Boolean</i></span>

Returns TRUE if one of 6 known root packages or varients is installed. The name of the package is not returned, so the user does not know which package name to change. Developed by Cian.

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22Shell%22,%20%22name%22:%20%22Has%20Super%20User%20Apk%20Installed%22,%20%22output%22:%20true,%20%22param%22:%20%5B%5D%7D"></div>

### Is Rooted

<span class="chip chip-boolean">Returns: <i>Boolean</i></span>

Returns true if Phone is Rooted

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22Shell%22,%20%22name%22:%20%22Is%20Rooted%22,%20%22output%22:%20true,%20%22param%22:%20%5B%5D%7D"></div>

### Is System User

<span class="chip chip-boolean">Returns: <i>Boolean</i></span>

This returns TRUE if the system user is running the application, and could be a sign of a rooted device. Developed by Cian.

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22Shell%22,%20%22name%22:%20%22Is%20System%20User%22,%20%22output%22:%20true,%20%22param%22:%20%5B%5D%7D"></div>
