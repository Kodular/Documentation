# File

| Category | Version | Requires |
|:--------:|:-------:|:--------:|
|Storage|5|API 19 - Android 4.4 - 4.4.4 KitKat|

:mag: {>>Non-visible component<<}

## Overview

Non-visible component for storing and retrieving files. Use this component to write or read files on your device. The default behaviour is to write files to the private data directory associated with your App. The Companion is special cased to write files to /sdcard/Makeroid/data to facilitate debugging. If the file path starts with a slash (/), then the file is created relative to /sdcard. For example writing a file to /myFile.txt will write the file in /sdcard/myFile.txt.

## Events

### After File Saved

[[Event('File', 'After File Saved', 'fileName')]]

??? tip "Parameters"

    | Name | Type |
    |------|------|
    |file Name|`text`|


Event indicating that the contents of the file have been written.

### After Unzip

[[Event('File', 'After Unzip')]]

Event indicating that the zip file have been created.

### After Zip

[[Event('File', 'After Zip')]]

Event indicating that the zip file have been created.

### Directory Created

[[Event('File', 'Directory Created', 'isDirectoryCreated')]]

??? tip "Parameters"

    | Name | Type |
    |------|------|
    |is Directory Created|`boolean`|


Event indicating that there was a directory created. The return value is 'true' or 'false'.

### Got Text

[[Event('File', 'Got Text', 'text')]]

??? tip "Parameters"

    | Name | Type |
    |------|------|
    |text|`text`|


Event indicating that the contents from the file have been read.

### On Zip Failure

[[Event('File', 'On Zip Failure', 'errorMessage')]]

??? tip "Parameters"

    | Name | Type |
    |------|------|
    |error Message|`text`|


Event indicating that there was any failure on zip or unzip a file.

## Methods

### AppendToFile

_Block preview not available_

??? tip "Parameters"

    | Name | Type |
    |------|------|
    |text|`text`|
    |file Name|`text`|


Appends text to the end of a file storage, creating the file if it does not exist. See the help text under SaveFile for information about where files are written.

### Copy

_Block preview not available_

??? tip "Parameters"

    | Name | Type |
    |------|------|
    |input|`text`|
    |output|`text`|


Copy file

### CreateDirectory

_Block preview not available_

??? tip "Parameters"

    | Name | Type |
    |------|------|
    |directory|`text`|


Create a new directory.

### Delete

_Block preview not available_

??? tip "Parameters"

    | Name | Type |
    |------|------|
    |file Name|`text`|


Deletes a file from storage. Prefix the filename with / to delete a specific file in the SD card, for instance /myFile.txt. will delete the file /sdcard/myFile.txt. If the file does not begin with a /, then the file located in the programs private storage will be deleted. Starting the file with // is an error because assets files cannot be deleted.

### Exists

_Block preview not available_

{>>Returns `boolean`<<}

??? tip "Parameters"

    | Name | Type |
    |------|------|
    |file|`text`|


Check whether a file exists

### FileSize

_Block preview not available_

{>>Returns `number`<<}

??? tip "Parameters"

    | Name | Type |
    |------|------|
    |file|`text`|


Get file size

### GetFileName

_Block preview not available_

{>>Returns `text`<<}

??? tip "Parameters"

    | Name | Type |
    |------|------|
    |file|`text`|


Get file name

### GetFreeSpace

_Block preview not available_

{>>Returns `number`<<}

??? tip "Parameters"

    | Name | Type |
    |------|------|
    |path|`text`|


Get Free Space

### GetTotalSpace

_Block preview not available_

{>>Returns `number`<<}

??? tip "Parameters"

    | Name | Type |
    |------|------|
    |path|`text`|


Get total space

### IsDirectory

_Block preview not available_

{>>Returns `boolean`<<}

??? tip "Parameters"

    | Name | Type |
    |------|------|
    |path|`text`|


Check whether the path is a directory

### IsFile

_Block preview not available_

{>>Returns `boolean`<<}

??? tip "Parameters"

    | Name | Type |
    |------|------|
    |path|`text`|


Check whether the path is a file

### Move

_Block preview not available_

{>>Returns `boolean`<<}

??? tip "Parameters"

    | Name | Type |
    |------|------|
    |input|`text`|
    |output|`text`|


Move file

### ReadFrom

_Block preview not available_

??? tip "Parameters"

    | Name | Type |
    |------|------|
    |file Name|`text`|


Reads text from a file in storage. Prefix the filename with / to read from a specific file on the SD card. for instance /myFile.txt will read the file /sdcard/myFile.txt. To read assets packaged with an application (also works for the Companion) start the filename with // (two slashes). If a filename does not start with a slash, it will be read from the applications private storage (for packaged apps) and from /sdcard/AppInventor/data for the Companion.

### SaveFile

_Block preview not available_

??? tip "Parameters"

    | Name | Type |
    |------|------|
    |text|`text`|
    |file Name|`text`|


Saves text to a file. If the filename begins with a slash (/) the file is written to the sdcard. For example writing to /myFile.txt will write the file to /sdcard/myFile.txt. If the filename does not start with a slash, it will be written in the programs private data directory where it will not be accessible to other programs on the phone. There is a special exception for the AI Companion where these files are written to /sdcard/AppInventor/data to facilitate debugging. Note that this block will overwrite a file if it already exists.    If you want to add content to a file use the append block.

### Unzip

_Block preview not available_

??? tip "Parameters"

    | Name | Type |
    |------|------|
    |target Zip File Path|`text`|
    |destination Folder Path|`text`|
    |password|`text`|


Unzip a file with or without a password. If you dont need a passwort then let it empty.

### Zip

_Block preview not available_

??? tip "Parameters"

    | Name | Type |
    |------|------|
    |target Path|`text`|
    |destination File Path|`text`|
    |password|`text`|


Create a zip file with or without a password.