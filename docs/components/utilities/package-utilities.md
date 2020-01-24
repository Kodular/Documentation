# Package Utilities

| Category | Requires | Version |
|:--------:|:-------:|:--------:|
|**Utilities**|<span class="chip chip-any">API 19, Android 4.4 - 4.4.4 KitKat</span>|<span class="chip chip-number">3</span>|

:mag: {>>Non-Visible component<<}

## Overview

A non-visible component that retrieves information about other applications on the device.

??? example "Permissions"
    * [android.permission.READ_EXTERNAL_STORAGE](https://developer.android.com/reference/android/Manifest.permission.html#READ_EXTERNAL_STORAGE)
    * [android.permission.WRITE_EXTERNAL_STORAGE](https://developer.android.com/reference/android/Manifest.permission.html#WRITE_EXTERNAL_STORAGE)

## Methods

### App Name From

<span class="chip chip-text">Returns: <i>Text</i></span>

Returns the name from the given package name.

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22Package%20Utilities%22,%20%22name%22:%20%22App%20Name%20From%22,%20%22output%22:%20true,%20%22param%22:%20%5B%22package%20Name%22%5D%7D"></div>

| Params | []() |
|--------|------|
|package Name|<span class="chip chip-text">Text</span>|

### Get Package Icon

<span class="chip chip-text">Returns: <i>Text</i></span>

Try to show the application icon of the given package name. If the application cannot be found, "Package not found" is the output.

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22Package%20Utilities%22,%20%22name%22:%20%22Get%20Package%20Icon%22,%20%22output%22:%20true,%20%22param%22:%20%5B%22package%20Name%22%5D%7D"></div>

| Params | []() |
|--------|------|
|package Name|<span class="chip chip-text">Text</span>|

### Is Package Installed

<span class="chip chip-boolean">Returns: <i>Boolean</i></span>

Returns true if a package (app) is installed.

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22Package%20Utilities%22,%20%22name%22:%20%22Is%20Package%20Installed%22,%20%22output%22:%20true,%20%22param%22:%20%5B%22package%20Name%22%5D%7D"></div>

| Params | []() |
|--------|------|
|package Name|<span class="chip chip-text">Text</span>|

### Is Permission Granted

<span class="chip chip-boolean">Returns: <i>Boolean</i></span>

Check whether a particular package has been granted a particular permission.

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22Package%20Utilities%22,%20%22name%22:%20%22Is%20Permission%20Granted%22,%20%22output%22:%20true,%20%22param%22:%20%5B%22permission%20Name%22,%20%22package%20Name%22%5D%7D"></div>

| Params | []() |
|--------|------|
|permission Name|<span class="chip chip-text">Text</span>|
|package Name|<span class="chip chip-text">Text</span>|

### Version Code From

<span class="chip chip-number">Returns: <i>Number</i></span>

This block will returns the version code of the package name. Returns '-1' if the package is not installed.

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22Package%20Utilities%22,%20%22name%22:%20%22Version%20Code%20From%22,%20%22output%22:%20true,%20%22param%22:%20%5B%22package%20Name%22%5D%7D"></div>

| Params | []() |
|--------|------|
|package Name|<span class="chip chip-text">Text</span>|

### Version Name From

<span class="chip chip-text">Returns: <i>Text</i></span>

This block will returns the version name of the package name. Returns 'Package not found' if the package is not installed.

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22Package%20Utilities%22,%20%22name%22:%20%22Version%20Name%20From%22,%20%22output%22:%20true,%20%22param%22:%20%5B%22package%20Name%22%5D%7D"></div>

| Params | []() |
|--------|------|
|package Name|<span class="chip chip-text">Text</span>|

## Properties

### App Name

<span class="chip chip-text">Text</span><span style="user-select: none;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span class="chip chip-rw">Read</span><span style="user-select: none;">&nbsp;</span>-<span style="user-select: none;">&nbsp;</span><span class="chip chip-bd">Blocks</span><span style="user-select: none;">&nbsp;</span>

Returns the name from the current running app.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Package%20Utilities%22,%20%22name%22:%20%22App%20Name%22,%20%22getter%22:%20true%7D"></div>

### Package Name

<span class="chip chip-text">Text</span><span style="user-select: none;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span class="chip chip-rw">Read</span><span style="user-select: none;">&nbsp;</span>-<span style="user-select: none;">&nbsp;</span><span class="chip chip-bd">Blocks</span><span style="user-select: none;">&nbsp;</span>

Returns the package name from the current running app.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Package%20Utilities%22,%20%22name%22:%20%22Package%20Name%22,%20%22getter%22:%20true%7D"></div>

### Version Code

<span class="chip chip-number">Number</span><span style="user-select: none;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span class="chip chip-rw">Read</span><span style="user-select: none;">&nbsp;</span>-<span style="user-select: none;">&nbsp;</span><span class="chip chip-bd">Blocks</span><span style="user-select: none;">&nbsp;</span>

This block will returns the version code of the current running app.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Package%20Utilities%22,%20%22name%22:%20%22Version%20Code%22,%20%22getter%22:%20true%7D"></div>

### Version Name

<span class="chip chip-text">Text</span><span style="user-select: none;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span class="chip chip-rw">Read</span><span style="user-select: none;">&nbsp;</span>-<span style="user-select: none;">&nbsp;</span><span class="chip chip-bd">Blocks</span><span style="user-select: none;">&nbsp;</span>

This block will returns the version name of the current running app.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Package%20Utilities%22,%20%22name%22:%20%22Version%20Name%22,%20%22getter%22:%20true%7D"></div>
