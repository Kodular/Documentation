# Package Utilities

| Category | Version | Requires |
|:--------:|:-------:|:--------:|
|Utilities|3|API 19, Android 4.4 - 4.4.4 KitKat|

:mag: {>>Non-visible component<<}

## Overview

A non-visible component that retrieves information about other applications on the device.

## Methods

### App Name From

[[Method('Package Utilities', 'App Name From', True, 'packageName')]]

{>>Returns `text`<<}

| Params | []() |
|--------|------|
|package Name|Text|


Returns the name from the given package name.

### Get Package Icon

[[Method('Package Utilities', 'Get Package Icon', True, 'packageName')]]

{>>Returns `text`<<}

| Params | []() |
|--------|------|
|package Name|Text|


Try to show the application icon of the given package name. If the application cannot be found, "Package not found" is the output.

### Is Package Installed

[[Method('Package Utilities', 'Is Package Installed', True, 'packageName')]]

{>>Returns `boolean`<<}

| Params | []() |
|--------|------|
|package Name|Text|


Returns true if a package (app) is installed.

### Version Code From

[[Method('Package Utilities', 'Version Code From', True, 'packageName')]]

{>>Returns `number`<<}

| Params | []() |
|--------|------|
|package Name|Text|


This block will returns the version code of the package name. Returns '-1' if the package is not installed.

### Version Name From

[[Method('Package Utilities', 'Version Name From', True, 'packageName')]]

{>>Returns `text`<<}

| Params | []() |
|--------|------|
|package Name|Text|


This block will returns the version name of the package name. Returns 'Package not found' if the package is not installed.

### Is Permission Granted

[[Method('Package Utilities', 'Is Permission Granted', True, 'permissionName', 'packageName')]]

{>>Returns `boolean`<<}

| Params | []() |
|--------|------|
|permission Name|Text|
|package Name|Text|


Check whether a particular package has been granted a particular permission.

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