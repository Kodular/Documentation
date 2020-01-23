# Package Utilities

| Category | Version | Requires |
|:--------:|:-------:|:--------:|
|Utilities|3|API 19 - Android 4.4 - 4.4.4 KitKat|

:mag: {>>Non-visible component<<}

## Overview

A non-visible component that retrieves information about other applications on the device.

## Methods

### AppNameFrom

_Block preview not available_

{>>Returns `text`<<}

??? tip "Parameters"

    | Name | Type |
    |------|------|
    |package Name|`text`|


Returns the name from the given package name.

### GetPackageIcon

_Block preview not available_

{>>Returns `text`<<}

??? tip "Parameters"

    | Name | Type |
    |------|------|
    |package Name|`text`|


Try to show the application icon of the given package name. If the application cannot be found, "Package not found" is the output.

### IsPackageInstalled

_Block preview not available_

{>>Returns `boolean`<<}

??? tip "Parameters"

    | Name | Type |
    |------|------|
    |package Name|`text`|


Returns true if a package (app) is installed.

### VersionCodeFrom

_Block preview not available_

{>>Returns `number`<<}

??? tip "Parameters"

    | Name | Type |
    |------|------|
    |package Name|`text`|


This block will returns the version code of the package name. Returns '-1' if the package is not installed.

### VersionNameFrom

_Block preview not available_

{>>Returns `text`<<}

??? tip "Parameters"

    | Name | Type |
    |------|------|
    |package Name|`text`|


This block will returns the version name of the package name. Returns 'Package not found' if the package is not installed.

### Is Permission Granted

_Block preview not available_

{>>Returns `boolean`<<}

??? tip "Parameters"

    | Name | Type |
    |------|------|
    |permission Name|`text`|
    |package Name|`text`|


Check whether a particular package has been granted a particular permission.

## Properties

### App Name

:eyes: Read-Only property
[[PropertyBlockGetter('Package Utilities', 'App Name')]]

| Type | Default |
|:----:|:-------:|
|text|None|

Returns the name from the current running app.

### Package Name

:eyes: Read-Only property
[[PropertyBlockGetter('Package Utilities', 'Package Name')]]

| Type | Default |
|:----:|:-------:|
|text|None|

Returns the package name from the current running app.

### Version Code

:eyes: Read-Only property
[[PropertyBlockGetter('Package Utilities', 'Version Code')]]

| Type | Default |
|:----:|:-------:|
|number|None|

This block will returns the version code of the current running app.

### Version Name

:eyes: Read-Only property
[[PropertyBlockGetter('Package Utilities', 'Version Name')]]

| Type | Default |
|:----:|:-------:|
|text|None|

This block will returns the version name of the current running app.