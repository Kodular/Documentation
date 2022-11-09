# File

{>> Non-Visible component<<}

| Category | Requires | Version |
|:--------:|:-------:|:--------:|
|**Storage**|<span class="chip chip-any">API 21, Android 5.0 Lollipop</span>|<span class="chip chip-number">8</span>|

## Overview

Non-visible component for storing and retrieving files. Use this component to write or read files on your device. The default behaviour is to write files to the private data directory associated with your App. The Companion is special cased to write files to a public directory for debugging. Use the More information link to read more about how the File component uses paths and scopes to manage access to files.

## Events

### After File Saved

Event indicating that the contents of the file have been written.

<div class="block" ai2-block="event" not-rendered="true" value="%7B%22componentName%22:%20%22File%22,%20%22name%22:%20%22After%20File%20Saved%22,%20%22param%22:%20%5B%22file%20Name%22%5D%7D"></div>

| Params | []() |
|--------|------|
|file Name|<span class="chip chip-text">Text</span>|

### After Unzip

Event indicating that the zip file have been created.

<div class="block" ai2-block="event" not-rendered="true" value="%7B%22componentName%22:%20%22File%22,%20%22name%22:%20%22After%20Unzip%22,%20%22param%22:%20%5B%5D%7D"></div>

### After Zip

Event indicating that the zip file have been created.

<div class="block" ai2-block="event" not-rendered="true" value="%7B%22componentName%22:%20%22File%22,%20%22name%22:%20%22After%20Zip%22,%20%22param%22:%20%5B%5D%7D"></div>

### Directory Created

:warning: ==**Deprecated**==

Event indicating that there was a directory created. The return value is 'true' or 'false'.

<div class="block" ai2-block="event" not-rendered="true" value="%7B%22componentName%22:%20%22File%22,%20%22name%22:%20%22Directory%20Created%22,%20%22param%22:%20%5B%22is%20Directory%20Created%22%5D%7D"></div>

| Params | []() |
|--------|------|
|is Directory Created|<span class="chip chip-boolean">Boolean</span>|

### Got Text

Event indicating that the contents from the file have been read.

<div class="block" ai2-block="event" not-rendered="true" value="%7B%22componentName%22:%20%22File%22,%20%22name%22:%20%22Got%20Text%22,%20%22param%22:%20%5B%22text%22%5D%7D"></div>

| Params | []() |
|--------|------|
|text|<span class="chip chip-text">Text</span>|

### On Zip Failure

Event indicating that there was any failure on zip or unzip a file.

<div class="block" ai2-block="event" not-rendered="true" value="%7B%22componentName%22:%20%22File%22,%20%22name%22:%20%22On%20Zip%20Failure%22,%20%22param%22:%20%5B%22error%20Message%22%5D%7D"></div>

| Params | []() |
|--------|------|
|error Message|<span class="chip chip-text">Text</span>|

## Methods

### Append To File

Appends text to the end of a file storage, creating the file if it does not exist. See the help text under SaveFile for information about where files are written.

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22File%22,%20%22name%22:%20%22Append%20To%20File%22,%20%22output%22:%20false,%20%22param%22:%20%5B%22text%22,%20%22file%20Name%22%5D%7D"></div>

| Params | []() |
|--------|------|
|text|<span class="chip chip-text">Text</span>|
|file Name|<span class="chip chip-text">Text</span>|

### Copy

:warning: ==**Deprecated**==

Copy a file. If input path started with two // (slashes) then it's a asset file. You can not copy a file into the assets directory. Use CopyFile instead.

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22File%22,%20%22name%22:%20%22Copy%22,%20%22output%22:%20false,%20%22param%22:%20%5B%22input%22,%20%22output%22%5D%7D"></div>

| Params | []() |
|--------|------|
|input|<span class="chip chip-text">Text</span>|
|output|<span class="chip chip-text">Text</span>|

### Copy File

<span class="chip chip-boolean">Returns: <i>Boolean</i></span>

Copy the contents from the first file to the second file.

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22File%22,%20%22name%22:%20%22Copy%20File%22,%20%22output%22:%20true,%20%22param%22:%20%5B%22from%20Scope%22,%20%22from%20File%20Name%22,%20%22to%20Scope%22,%20%22to%20File%20Name%22%5D%7D"></div>

| Params | []() |
|--------|------|
|from Scope|<span class="chip chip-unknown">Com.google.appinventor.components.common.filescopeenum</span>|
|from File Name|<span class="chip chip-text">Text</span>|
|to Scope|<span class="chip chip-unknown">Com.google.appinventor.components.common.filescopeenum</span>|
|to File Name|<span class="chip chip-text">Text</span>|

### Create Directory

:warning: ==**Deprecated**==

Create a new directory. Use MakeDirectory instead.

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22File%22,%20%22name%22:%20%22Create%20Directory%22,%20%22output%22:%20false,%20%22param%22:%20%5B%22directory%22%5D%7D"></div>

| Params | []() |
|--------|------|
|directory|<span class="chip chip-text">Text</span>|

### Delete

Deletes a file from storage. Prefix the filename with / to delete a specific file in the SD card, for instance /myFile.txt. will delete the file /sdcard/myFile.txt. If the file does not begin with a /, then the file located in the programs private storage will be deleted. Starting the file with // is an error because assets files cannot be deleted.

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22File%22,%20%22name%22:%20%22Delete%22,%20%22output%22:%20false,%20%22param%22:%20%5B%22file%20Name%22%5D%7D"></div>

| Params | []() |
|--------|------|
|file Name|<span class="chip chip-text">Text</span>|

### Exists

<span class="chip chip-boolean">Returns: <i>Boolean</i></span>

Tests whether the path exists in the given scope.

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22File%22,%20%22name%22:%20%22Exists%22,%20%22output%22:%20true,%20%22param%22:%20%5B%22scope%22,%20%22path%22%5D%7D"></div>

| Params | []() |
|--------|------|
|scope|<span class="chip chip-unknown">Com.google.appinventor.components.common.filescopeenum</span>|
|path|<span class="chip chip-text">Text</span>|

### File Size

<span class="chip chip-number">Returns: <i>Number</i></span>

Get file size

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22File%22,%20%22name%22:%20%22File%20Size%22,%20%22output%22:%20true,%20%22param%22:%20%5B%22file%22%5D%7D"></div>

| Params | []() |
|--------|------|
|file|<span class="chip chip-text">Text</span>|

### Get File Name

<span class="chip chip-text">Returns: <i>Text</i></span>

Get file name

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22File%22,%20%22name%22:%20%22Get%20File%20Name%22,%20%22output%22:%20true,%20%22param%22:%20%5B%22file%22%5D%7D"></div>

| Params | []() |
|--------|------|
|file|<span class="chip chip-text">Text</span>|

### Get Free Space

<span class="chip chip-number">Returns: <i>Number</i></span>

Get Free Space

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22File%22,%20%22name%22:%20%22Get%20Free%20Space%22,%20%22output%22:%20true,%20%22param%22:%20%5B%22path%22%5D%7D"></div>

| Params | []() |
|--------|------|
|path|<span class="chip chip-text">Text</span>|

### Get Total Space

<span class="chip chip-number">Returns: <i>Number</i></span>

Get total space

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22File%22,%20%22name%22:%20%22Get%20Total%20Space%22,%20%22output%22:%20true,%20%22param%22:%20%5B%22path%22%5D%7D"></div>

| Params | []() |
|--------|------|
|path|<span class="chip chip-text">Text</span>|

### Is Directory

<span class="chip chip-boolean">Returns: <i>Boolean</i></span>

Tests whether the path named in the given scope is a directory.

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22File%22,%20%22name%22:%20%22Is%20Directory%22,%20%22output%22:%20true,%20%22param%22:%20%5B%22scope%22,%20%22path%22%5D%7D"></div>

| Params | []() |
|--------|------|
|scope|<span class="chip chip-unknown">Com.google.appinventor.components.common.filescopeenum</span>|
|path|<span class="chip chip-text">Text</span>|

### Is File

<span class="chip chip-boolean">Returns: <i>Boolean</i></span>

Check whether the path is a file

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22File%22,%20%22name%22:%20%22Is%20File%22,%20%22output%22:%20true,%20%22param%22:%20%5B%22path%22%5D%7D"></div>

| Params | []() |
|--------|------|
|path|<span class="chip chip-text">Text</span>|

### List Directory

<span class="chip chip-list">Returns: <i>List</i></span>

Get a list of files and directories in the given directory.

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22File%22,%20%22name%22:%20%22List%20Directory%22,%20%22output%22:%20true,%20%22param%22:%20%5B%22scope%22,%20%22directory%20Name%22%5D%7D"></div>

| Params | []() |
|--------|------|
|scope|<span class="chip chip-unknown">Com.google.appinventor.components.common.filescopeenum</span>|
|directory Name|<span class="chip chip-text">Text</span>|

### Make Directory

<span class="chip chip-boolean">Returns: <i>Boolean</i></span>

Create a new directory for storing files. The semantics of this method are such that it willreturn true if the directory exists at its completion. This can mean that the directory alreadyexisted prior to the call.

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22File%22,%20%22name%22:%20%22Make%20Directory%22,%20%22output%22:%20true,%20%22param%22:%20%5B%22scope%22,%20%22directory%20Name%22%5D%7D"></div>

| Params | []() |
|--------|------|
|scope|<span class="chip chip-unknown">Com.google.appinventor.components.common.filescopeenum</span>|
|directory Name|<span class="chip chip-text">Text</span>|

### Make Full Path

<span class="chip chip-text">Returns: <i>Text</i></span>

Converts the scope and path into a single string for other components.

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22File%22,%20%22name%22:%20%22Make%20Full%20Path%22,%20%22output%22:%20true,%20%22param%22:%20%5B%22scope%22,%20%22path%22%5D%7D"></div>

| Params | []() |
|--------|------|
|scope|<span class="chip chip-unknown">Com.google.appinventor.components.common.filescopeenum</span>|
|path|<span class="chip chip-text">Text</span>|

### Move

:warning: ==**Deprecated**==

<span class="chip chip-boolean">Returns: <i>Boolean</i></span>

Move a file. You can not move asset files. Use MoveFile instead.

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22File%22,%20%22name%22:%20%22Move%22,%20%22output%22:%20true,%20%22param%22:%20%5B%22input%22,%20%22output%22%5D%7D"></div>

| Params | []() |
|--------|------|
|input|<span class="chip chip-text">Text</span>|
|output|<span class="chip chip-text">Text</span>|

### Move File

<span class="chip chip-boolean">Returns: <i>Boolean</i></span>

Move a file from one location to another.

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22File%22,%20%22name%22:%20%22Move%20File%22,%20%22output%22:%20true,%20%22param%22:%20%5B%22from%20Scope%22,%20%22from%20File%20Name%22,%20%22to%20Scope%22,%20%22to%20File%20Name%22%5D%7D"></div>

| Params | []() |
|--------|------|
|from Scope|<span class="chip chip-unknown">Com.google.appinventor.components.common.filescopeenum</span>|
|from File Name|<span class="chip chip-text">Text</span>|
|to Scope|<span class="chip chip-unknown">Com.google.appinventor.components.common.filescopeenum</span>|
|to File Name|<span class="chip chip-text">Text</span>|

### Read From

Reads text from a file in storage. Prefix the filename with / to read from a specific file on the SD card. for instance /myFile.txt will read the file /sdcard/myFile.txt. To read assets packaged with an application (also works for the Companion) start the filename with // (two slashes). If a filename does not start with a slash, it will be read from the applications private storage (for packaged apps) and from /sdcard/AppInventor/data for the Companion.

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22File%22,%20%22name%22:%20%22Read%20From%22,%20%22output%22:%20false,%20%22param%22:%20%5B%22file%20Name%22%5D%7D"></div>

| Params | []() |
|--------|------|
|file Name|<span class="chip chip-text">Text</span>|

### Remove Directory

<span class="chip chip-boolean">Returns: <i>Boolean</i></span>

Remove a directory from the file system. If recursive is true, then everything is removed. Ifrecursive is false, only the directory is removed and only if it is empty.

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22File%22,%20%22name%22:%20%22Remove%20Directory%22,%20%22output%22:%20true,%20%22param%22:%20%5B%22scope%22,%20%22directory%20Name%22,%20%22recursive%22%5D%7D"></div>

| Params | []() |
|--------|------|
|scope|<span class="chip chip-unknown">Com.google.appinventor.components.common.filescopeenum</span>|
|directory Name|<span class="chip chip-text">Text</span>|
|recursive|<span class="chip chip-boolean">Boolean</span>|

### Save File

Saves text to a file. If the filename begins with a slash (/) the file is written to the sdcard. For example writing to /myFile.txt will write the file to /sdcard/myFile.txt. If the filename does not start with a slash, it will be written in the programs private data directory where it will not be accessible to other programs on the phone. There is a special exception for the AI Companion where these files are written to /sdcard/AppInventor/data to facilitate debugging. Note that this block will overwrite a file if it already exists
If you want to add content to a file use the append block.

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22File%22,%20%22name%22:%20%22Save%20File%22,%20%22output%22:%20false,%20%22param%22:%20%5B%22text%22,%20%22file%20Name%22%5D%7D"></div>

| Params | []() |
|--------|------|
|text|<span class="chip chip-text">Text</span>|
|file Name|<span class="chip chip-text">Text</span>|

### Unzip

Unzip a file with or without a password. If you dont need a passwort then let it empty.

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22File%22,%20%22name%22:%20%22Unzip%22,%20%22output%22:%20false,%20%22param%22:%20%5B%22target%20Zip%20File%20Path%22,%20%22destination%20Folder%20Path%22,%20%22password%22%5D%7D"></div>

| Params | []() |
|--------|------|
|target Zip File Path|<span class="chip chip-text">Text</span>|
|destination Folder Path|<span class="chip chip-text">Text</span>|
|password|<span class="chip chip-text">Text</span>|

### Zip

Create a zip file with or without a password.

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22File%22,%20%22name%22:%20%22Zip%22,%20%22output%22:%20false,%20%22param%22:%20%5B%22target%20Path%22,%20%22destination%20File%20Path%22,%20%22password%22%5D%7D"></div>

| Params | []() |
|--------|------|
|target Path|<span class="chip chip-text">Text</span>|
|destination File Path|<span class="chip chip-text">Text</span>|
|password|<span class="chip chip-text">Text</span>|

## Properties

### Default Scope

<span style="user-select: none; white-space:pre-wrap;"><span class="chip chip-unknown">Com.google.appinventor.components.common.filescopeenum</span> <span class="chip chip-unknown">Default: <i>App</i></span> :heavy_minus_sign: <span class="chip chip-rw">Write</span>  - <span class="chip chip-bd">Designer</span></span>

Specifies the default scope for files accessed using the File component. The App scope shouldwork for most apps. Legacy mode can be used for apps that predate the newer constraints inAndroid on app file access.

### Read Permission

<span style="user-select: none; white-space:pre-wrap;"><span class="chip chip-boolean">Boolean</span> <span class="chip chip-boolean">Default: <i>False</i></span> :heavy_minus_sign: <span class="chip chip-rw">Write</span>  - <span class="chip chip-bd">Designer</span></span>

A designer-only property that can be used to enable read access to file storage outside of theapp-specific directories.

### Scope

<span style="user-select: none; white-space:pre-wrap;"><span class="chip chip-unknown">Com.google.appinventor.components.common.filescopeenum</span> :heavy_minus_sign: <span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span>  - <span class="chip chip-bd">Blocks</span></span>

Indicates the current scope for operations such as ReadFrom and SaveFile.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22File%22,%20%22name%22:%20%22Scope%22,%20%22getter%22:%20true%7D"></div>
<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22File%22,%20%22name%22:%20%22Scope%22,%20%22getter%22:%20false%7D"></div>

### Write Permission

<span style="user-select: none; white-space:pre-wrap;"><span class="chip chip-boolean">Boolean</span> <span class="chip chip-boolean">Default: <i>False</i></span> :heavy_minus_sign: <span class="chip chip-rw">Write</span>  - <span class="chip chip-bd">Designer</span></span>

A designer-only property that can be used to enable write access to file storage outside of theapp-specific directories.
