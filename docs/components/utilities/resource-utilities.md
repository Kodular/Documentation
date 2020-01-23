# Resource Utilities

| Category | Version | Requires |
|:--------:|:-------:|:--------:|
|Utilities|1|API 19 - Android 4.4 - 4.4.4 KitKat|

:mag: {>>Non-visible component<<}

## Overview

A non-visible component that loads string resources from a file.

## Methods

### GetStringContentByName

:warning: ==**Deprecated**==

_Block preview not available_

{>>Returns `text`<<}

??? tip "Parameters"

    | Name | Type |
    |------|------|
    |resource Name|`text`|
    |if Resource Not Found Use|`text`|


This block is deprecated and will be removed soon. Use instead 'Get String From Asset' or 'Get String From Path'.

### GetStringFromAsset

_Block preview not available_

{>>Returns `text`<<}

??? tip "Parameters"

    | Name | Type |
    |------|------|
    |resource Name|`text`|
    |if Resource Not Found Use|`text`|


Get the text from a asset resource file. Make sure you uploaded a file at 'Resource File From Asset' property.

### GetStringFromPath

_Block preview not available_

{>>Returns `text`<<}

??? tip "Parameters"

    | Name | Type |
    |------|------|
    |resource Name|`text`|
    |if Resource Not Found Use|`text`|


Get the text from a path resource file. Make sure you added a file path at 'Resource File From Path' property. The path can be too a link to a url.

## Properties

### Resource File From Asset

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Resource Utilities', 'Resource File From Asset')]]

| Type |
|:----:|
|text|

Set the file which is used as resource file. The file must be stored in the assets folder.

### Resource File From Path

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Resource Utilities', 'Resource File From Path')]]

| Type |
|:----:|
|text|

Set the file which is used as resource file. The file path must be valid to any file you want to use. The path can be too a link to a url.