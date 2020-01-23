# Resource Utilities

| Category | Requires | Version |
|:--------:|:-------:|:--------:|
|Utilities|API 19, Android 4.4 - 4.4.4 KitKat|1|

:mag: {>>Non-visible component<<}

## Overview

A non-visible component that loads string resources from a file.

??? example "Permissions"
    * [android.permission.INTERNET](https://developer.android.com/reference/android/Manifest.permission.html#android.permission.INTERNET)
    * [android.permission.WRITE_EXTERNAL_STORAGE](https://developer.android.com/reference/android/Manifest.permission.html#android.permission.WRITE_EXTERNAL_STORAGE)


## Methods

### Get String Content By Name

:warning: ==**Deprecated**==

<span class="chip chip-text">Returns: <i>Text</i></span> 

This block is deprecated and will be removed soon. Use instead 'Get String From Asset' or 'Get String From Path'.

[[Method('Resource Utilities', 'Get String Content By Name', True, 'resourceName', 'ifResourceNotFoundUse')]]

| Params | []() |
|--------|------|
|resource Name|<span class="chip chip-text">Text</span>|
|if Resource Not Found Use|<span class="chip chip-text">Text</span>|


### Get String From Asset

<span class="chip chip-text">Returns: <i>Text</i></span> 

Get the text from a asset resource file. Make sure you uploaded a file at 'Resource File From Asset' property.

[[Method('Resource Utilities', 'Get String From Asset', True, 'resourceName', 'ifResourceNotFoundUse')]]

| Params | []() |
|--------|------|
|resource Name|<span class="chip chip-text">Text</span>|
|if Resource Not Found Use|<span class="chip chip-text">Text</span>|


### Get String From Path

<span class="chip chip-text">Returns: <i>Text</i></span> 

Get the text from a path resource file. Make sure you added a file path at 'Resource File From Path' property. The path can be too a link to a url.

[[Method('Resource Utilities', 'Get String From Path', True, 'resourceName', 'ifResourceNotFoundUse')]]

| Params | []() |
|--------|------|
|resource Name|<span class="chip chip-text">Text</span>|
|if Resource Not Found Use|<span class="chip chip-text">Text</span>|


## Properties

### Resource File From Asset

<span class="chip chip-text">Text</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span> 

Set the file which is used as resource file. The file must be stored in the assets folder.

[[PropertyBlockGetterAndSetter('Resource Utilities', 'Resource File From Asset')]]

### Resource File From Path

<span class="chip chip-text">Text</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span> 

Set the file which is used as resource file. The file path must be valid to any file you want to use. The path can be too a link to a url.

[[PropertyBlockGetterAndSetter('Resource Utilities', 'Resource File From Path')]]