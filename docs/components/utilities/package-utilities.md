# Package Utilities

| Category | Requires | Version |
|:--------:|:-------:|:--------:|
|**Utilities**|<span class="chip chip-any">API 19, Android 4.4 - 4.4.4 KitKat</span>|<span class="chip chip-number">3</span>|

:mag: {>>Non-visible component<<}

## Overview

A non-visible component that retrieves information about other applications on the device.

??? example "Permissions"
    * [android.permission.READ_EXTERNAL_STORAGE](https://developer.android.com/reference/android/Manifest.permission.html#READ_EXTERNAL_STORAGE)
    * [android.permission.WRITE_EXTERNAL_STORAGE](https://developer.android.com/reference/android/Manifest.permission.html#WRITE_EXTERNAL_STORAGE)


## Methods

### App Name From

<span class="chip chip-text">Returns: <i>Text</i></span> 

Returns the name from the given package name.

[[Method('Package Utilities', 'App Name From', True, 'packageName')]]

| Params | []() |
|--------|------|
|package Name|<span class="chip chip-text">Text</span>|


### Get Package Icon

<span class="chip chip-text">Returns: <i>Text</i></span> 

Try to show the application icon of the given package name. If the application cannot be found, "Package not found" is the output.

[[Method('Package Utilities', 'Get Package Icon', True, 'packageName')]]

| Params | []() |
|--------|------|
|package Name|<span class="chip chip-text">Text</span>|


### Is Package Installed

<span class="chip chip-boolean">Returns: <i>Boolean</i></span> 

Returns true if a package (app) is installed.

[[Method('Package Utilities', 'Is Package Installed', True, 'packageName')]]

| Params | []() |
|--------|------|
|package Name|<span class="chip chip-text">Text</span>|


### Version Code From

<span class="chip chip-number">Returns: <i>Number</i></span> 

This block will returns the version code of the package name. Returns '-1' if the package is not installed.

[[Method('Package Utilities', 'Version Code From', True, 'packageName')]]

| Params | []() |
|--------|------|
|package Name|<span class="chip chip-text">Text</span>|


### Version Name From

<span class="chip chip-text">Returns: <i>Text</i></span> 

This block will returns the version name of the package name. Returns 'Package not found' if the package is not installed.

[[Method('Package Utilities', 'Version Name From', True, 'packageName')]]

| Params | []() |
|--------|------|
|package Name|<span class="chip chip-text">Text</span>|


### Is Permission Granted

<span class="chip chip-boolean">Returns: <i>Boolean</i></span> 

Check whether a particular package has been granted a particular permission.

[[Method('Package Utilities', 'Is Permission Granted', True, 'permissionName', 'packageName')]]

| Params | []() |
|--------|------|
|permission Name|<span class="chip chip-text">Text</span>|
|package Name|<span class="chip chip-text">Text</span>|


## Properties

### App Name

<span class="chip chip-text">Text</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> - <span class="chip chip-bd">Blocks</span> 

Returns the name from the current running app.

[[PropertyBlockGetter('Package Utilities', 'App Name')]]

### Package Name

<span class="chip chip-text">Text</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> - <span class="chip chip-bd">Blocks</span> 

Returns the package name from the current running app.

[[PropertyBlockGetter('Package Utilities', 'Package Name')]]

### Version Code

<span class="chip chip-number">Number</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> - <span class="chip chip-bd">Blocks</span> 

This block will returns the version code of the current running app.

[[PropertyBlockGetter('Package Utilities', 'Version Code')]]

### Version Name

<span class="chip chip-text">Text</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> - <span class="chip chip-bd">Blocks</span> 

This block will returns the version name of the current running app.

[[PropertyBlockGetter('Package Utilities', 'Version Name')]]