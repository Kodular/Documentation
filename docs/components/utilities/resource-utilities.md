# Resource Utilities

{>> Non-Visible component<<}

| Category | Requires | Version |
|:--------:|:-------:|:--------:|
|**Utilities**|<span class="chip chip-any">API 21, Android 5.0 Lollipop</span>|<span class="chip chip-number">1</span>|

## Overview

A non-visible component that loads string resources from a file.

??? example "Permissions"
    * [android.permission.INTERNET](https://developer.android.com/reference/android/Manifest.permission.html#INTERNET)
    * [android.permission.WRITE_EXTERNAL_STORAGE](https://developer.android.com/reference/android/Manifest.permission.html#WRITE_EXTERNAL_STORAGE)

## Methods

### Get String Content By Name

:warning: ==**Deprecated**==

<span class="chip chip-text">Returns: <i>Text</i></span>

This block is deprecated and will be removed soon. Use instead 'Get String From Asset' or 'Get String From Path'.

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22Resource%20Utilities%22,%20%22name%22:%20%22Get%20String%20Content%20By%20Name%22,%20%22output%22:%20true,%20%22param%22:%20%5B%22resource%20Name%22,%20%22if%20Resource%20Not%20Found%20Use%22%5D%7D"></div>

| Params | []() |
|--------|------|
|resource Name|<span class="chip chip-text">Text</span>|
|if Resource Not Found Use|<span class="chip chip-text">Text</span>|

### Get String From Asset

<span class="chip chip-text">Returns: <i>Text</i></span>

Get the text from a asset resource file. Make sure you uploaded a file at 'Resource File From Asset' property.

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22Resource%20Utilities%22,%20%22name%22:%20%22Get%20String%20From%20Asset%22,%20%22output%22:%20true,%20%22param%22:%20%5B%22resource%20Name%22,%20%22if%20Resource%20Not%20Found%20Use%22%5D%7D"></div>

| Params | []() |
|--------|------|
|resource Name|<span class="chip chip-text">Text</span>|
|if Resource Not Found Use|<span class="chip chip-text">Text</span>|

### Get String From Path

<span class="chip chip-text">Returns: <i>Text</i></span>

Get the text from a path resource file. Make sure you added a file path at 'Resource File From Path' property. The path can be too a link to a url.

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22Resource%20Utilities%22,%20%22name%22:%20%22Get%20String%20From%20Path%22,%20%22output%22:%20true,%20%22param%22:%20%5B%22resource%20Name%22,%20%22if%20Resource%20Not%20Found%20Use%22%5D%7D"></div>

| Params | []() |
|--------|------|
|resource Name|<span class="chip chip-text">Text</span>|
|if Resource Not Found Use|<span class="chip chip-text">Text</span>|

## Properties

### Resource File From Asset

<span style="user-select: none; white-space:pre-wrap;"><span class="chip chip-text">Text</span> :heavy_minus_sign: <span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span>  - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span></span>

Set the file which is used as resource file. The file must be stored in the assets folder.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Resource%20Utilities%22,%20%22name%22:%20%22Resource%20File%20From%20Asset%22,%20%22getter%22:%20true%7D"></div>
<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Resource%20Utilities%22,%20%22name%22:%20%22Resource%20File%20From%20Asset%22,%20%22getter%22:%20false%7D"></div>

### Resource File From Path

<span style="user-select: none; white-space:pre-wrap;"><span class="chip chip-text">Text</span> :heavy_minus_sign: <span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span>  - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span></span>

Set the file which is used as resource file. The file path must be valid to any file you want to use. The path can be too a link to a url.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Resource%20Utilities%22,%20%22name%22:%20%22Resource%20File%20From%20Path%22,%20%22getter%22:%20true%7D"></div>
<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Resource%20Utilities%22,%20%22name%22:%20%22Resource%20File%20From%20Path%22,%20%22getter%22:%20false%7D"></div>
