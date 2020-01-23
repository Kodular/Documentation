# File

| Category | Requires | Version |
|:--------:|:-------:|:--------:|
|Storage|API 19, Android 4.4 - 4.4.4 KitKat|5|

:mag: {>>Non-visible component<<}

## Overview

Non-visible component for storing and retrieving files. Use this component to write or read files on your device. The default behaviour is to write files to the private data directory associated with your App. The Companion is special cased to write files to /sdcard/Makeroid/data to facilitate debugging. If the file path starts with a slash (/), then the file is created relative to /sdcard. For example writing a file to /myFile.txt will write the file in /sdcard/myFile.txt.

??? example "Permissions"
    * [android.permission.READ_EXTERNAL_STORAGE](https://developer.android.com/reference/android/Manifest.permission.html#android.permission.READ_EXTERNAL_STORAGE)
    * [android.permission.WRITE_EXTERNAL_STORAGE](https://developer.android.com/reference/android/Manifest.permission.html#android.permission.WRITE_EXTERNAL_STORAGE)


## Events

### After File Saved

Event indicating that the contents of the file have been written.

[[Event('File', 'After File Saved', 'fileName')]]

| Params | []() |
|--------|------|
|file Name|<span class="chip chip-text">Text</span>|


### After Unzip

Event indicating that the zip file have been created.

[[Event('File', 'After Unzip')]]

### After Zip

Event indicating that the zip file have been created.

[[Event('File', 'After Zip')]]

### Directory Created

Event indicating that there was a directory created. The return value is 'true' or 'false'.

[[Event('File', 'Directory Created', 'isDirectoryCreated')]]

| Params | []() |
|--------|------|
|is Directory Created|<span class="chip chip-boolean">Boolean</span>|


### Got Text

Event indicating that the contents from the file have been read.

[[Event('File', 'Got Text', 'text')]]

| Params | []() |
|--------|------|
|text|<span class="chip chip-text">Text</span>|


### On Zip Failure

Event indicating that there was any failure on zip or unzip a file.

[[Event('File', 'On Zip Failure', 'errorMessage')]]

| Params | []() |
|--------|------|
|error Message|<span class="chip chip-text">Text</span>|


## Methods

### Append To File

Appends text to the end of a file storage, creating the file if it does not exist. See the help text under SaveFile for information about where files are written.

[[Method('File', 'Append To File', False, 'text', 'fileName')]]

| Params | []() |
|--------|------|
|text|<span class="chip chip-text">Text</span>|
|file Name|<span class="chip chip-text">Text</span>|


### Copy

Copy file

[[Method('File', 'Copy', False, 'input', 'output')]]

| Params | []() |
|--------|------|
|input|<span class="chip chip-text">Text</span>|
|output|<span class="chip chip-text">Text</span>|


### Create Directory

Create a new directory.

[[Method('File', 'Create Directory', False, 'directory')]]

| Params | []() |
|--------|------|
|directory|<span class="chip chip-text">Text</span>|


### Delete

Deletes a file from storage. Prefix the filename with / to delete a specific file in the SD card, for instance /myFile.txt. will delete the file /sdcard/myFile.txt. If the file does not begin with a /, then the file located in the programs private storage will be deleted. Starting the file with // is an error because assets files cannot be deleted.

[[Method('File', 'Delete', False, 'fileName')]]

| Params | []() |
|--------|------|
|file Name|<span class="chip chip-text">Text</span>|


### Exists

<span class="chip chip-boolean">Returns: <i>Boolean</i></span> 

Check whether a file exists

[[Method('File', 'Exists', True, 'file')]]

| Params | []() |
|--------|------|
|file|<span class="chip chip-text">Text</span>|


### File Size

<span class="chip chip-number">Returns: <i>Number</i></span> 

Get file size

[[Method('File', 'File Size', True, 'file')]]

| Params | []() |
|--------|------|
|file|<span class="chip chip-text">Text</span>|


### Get File Name

<span class="chip chip-text">Returns: <i>Text</i></span> 

Get file name

[[Method('File', 'Get File Name', True, 'file')]]

| Params | []() |
|--------|------|
|file|<span class="chip chip-text">Text</span>|


### Get Free Space

<span class="chip chip-number">Returns: <i>Number</i></span> 

Get Free Space

[[Method('File', 'Get Free Space', True, 'path')]]

| Params | []() |
|--------|------|
|path|<span class="chip chip-text">Text</span>|


### Get Total Space

<span class="chip chip-number">Returns: <i>Number</i></span> 

Get total space

[[Method('File', 'Get Total Space', True, 'path')]]

| Params | []() |
|--------|------|
|path|<span class="chip chip-text">Text</span>|


### Is Directory

<span class="chip chip-boolean">Returns: <i>Boolean</i></span> 

Check whether the path is a directory

[[Method('File', 'Is Directory', True, 'path')]]

| Params | []() |
|--------|------|
|path|<span class="chip chip-text">Text</span>|


### Is File

<span class="chip chip-boolean">Returns: <i>Boolean</i></span> 

Check whether the path is a file

[[Method('File', 'Is File', True, 'path')]]

| Params | []() |
|--------|------|
|path|<span class="chip chip-text">Text</span>|


### Move

<span class="chip chip-boolean">Returns: <i>Boolean</i></span> 

Move file

[[Method('File', 'Move', True, 'input', 'output')]]

| Params | []() |
|--------|------|
|input|<span class="chip chip-text">Text</span>|
|output|<span class="chip chip-text">Text</span>|


### Read From

Reads text from a file in storage. Prefix the filename with / to read from a specific file on the SD card. for instance /myFile.txt will read the file /sdcard/myFile.txt. To read assets packaged with an application (also works for the Companion) start the filename with // (two slashes). If a filename does not start with a slash, it will be read from the applications private storage (for packaged apps) and from /sdcard/AppInventor/data for the Companion.

[[Method('File', 'Read From', False, 'fileName')]]

| Params | []() |
|--------|------|
|file Name|<span class="chip chip-text">Text</span>|


### Save File

Saves text to a file. If the filename begins with a slash (/) the file is written to the sdcard. For example writing to /myFile.txt will write the file to /sdcard/myFile.txt. If the filename does not start with a slash, it will be written in the programs private data directory where it will not be accessible to other programs on the phone. There is a special exception for the AI Companion where these files are written to /sdcard/AppInventor/data to facilitate debugging. Note that this block will overwrite a file if it already exists
If you want to add content to a file use the append block.

[[Method('File', 'Save File', False, 'text', 'fileName')]]

| Params | []() |
|--------|------|
|text|<span class="chip chip-text">Text</span>|
|file Name|<span class="chip chip-text">Text</span>|


### Unzip

Unzip a file with or without a password. If you dont need a passwort then let it empty.

[[Method('File', 'Unzip', False, 'targetZipFilePath', 'destinationFolderPath', 'password')]]

| Params | []() |
|--------|------|
|target Zip File Path|<span class="chip chip-text">Text</span>|
|destination Folder Path|<span class="chip chip-text">Text</span>|
|password|<span class="chip chip-text">Text</span>|


### Zip

Create a zip file with or without a password.

[[Method('File', 'Zip', False, 'targetPath', 'destinationFilePath', 'password')]]

| Params | []() |
|--------|------|
|target Path|<span class="chip chip-text">Text</span>|
|destination File Path|<span class="chip chip-text">Text</span>|
|password|<span class="chip chip-text">Text</span>|
