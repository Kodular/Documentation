# File

| Category | Version | Requires |
|:--------:|:-------:|:--------:|
|Storage|5|API 19 - Android 4.4 - 4.4.4 KitKat|

:mag: {>>Non-visible component<<}

## Overview

_Non-visible component for storing and retrieving files. Use this component to write or read files on your device. The default behaviour is to write files to the private data directory associated with your App. The Companion is special cased to write files to /sdcard/Makeroid/data to facilitate debugging. If the file path starts with a slash (/), then the file is created relative to /sdcard. For example writing a file to /myFile.txt will write the file in /sdcard/myFile.txt._

## Events

### After File Saved

[[Event('File', 'After File Saved', 'fileName')]]

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |file Name|`text`|


_Event indicating that the contents of the file have been written._

### After Unzip

[[Event('File', 'After Unzip')]]

_Event indicating that the zip file have been created._

### After Zip

[[Event('File', 'After Zip')]]

_Event indicating that the zip file have been created._

### Directory Created

[[Event('File', 'Directory Created', 'isDirectoryCreated')]]

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |is Directory Created|`boolean`|


_Event indicating that there was a directory created. The return value is 'true' or 'false'._

### Got Text

[[Event('File', 'Got Text', 'text')]]

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |text|`text`|


_Event indicating that the contents from the file have been read._

### On Zip Failure

[[Event('File', 'On Zip Failure', 'errorMessage')]]

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |error Message|`text`|


_Event indicating that there was any failure on zip or unzip a file._

## Methods

### AppendToFile

[[Method('File', 'AppendToFile', false, 'text fileName')]]

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |text|`text`|
    |file Name|`text`|


_Appends text to the end of a file storage, creating the file if it does not exist. See the help text under SaveFile for information about where files are written._

### Copy

[[Method('File', 'Copy', false, 'input output')]]

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |input|`text`|
    |output|`text`|


_Copy file_

### CreateDirectory

[[Method('File', 'CreateDirectory', false, 'directory')]]

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |directory|`text`|


_Create a new directory._

### Delete

[[Method('File', 'Delete', false, 'fileName')]]

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |file Name|`text`|


_Deletes a file from storage. Prefix the filename with / to delete a specific file in the SD card, for instance /myFile.txt. will delete the file /sdcard/myFile.txt. If the file does not begin with a /, then the file located in the programs private storage will be deleted. Starting the file with // is an error because assets files cannot be deleted._

### Exists

[[Method('File', 'Exists', true, 'file')]]

{>>Returns `boolean`<<}

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |file|`text`|


_Check whether a file exists_

### FileSize

[[Method('File', 'FileSize', true, 'file')]]

{>>Returns `number`<<}

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |file|`text`|


_Get file size_

### GetFileName

[[Method('File', 'GetFileName', true, 'file')]]

{>>Returns `text`<<}

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |file|`text`|


_Get file name_

### GetFreeSpace

[[Method('File', 'GetFreeSpace', true, 'path')]]

{>>Returns `number`<<}

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |path|`text`|


_Get Free Space_

### GetTotalSpace

[[Method('File', 'GetTotalSpace', true, 'path')]]

{>>Returns `number`<<}

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |path|`text`|


_Get total space_

### IsDirectory

[[Method('File', 'IsDirectory', true, 'path')]]

{>>Returns `boolean`<<}

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |path|`text`|


_Check whether the path is a directory_

### IsFile

[[Method('File', 'IsFile', true, 'path')]]

{>>Returns `boolean`<<}

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |path|`text`|


_Check whether the path is a file_

### Move

[[Method('File', 'Move', true, 'input output')]]

{>>Returns `boolean`<<}

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |input|`text`|
    |output|`text`|


_Move file_

### ReadFrom

[[Method('File', 'ReadFrom', false, 'fileName')]]

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |file Name|`text`|


_Reads text from a file in storage. Prefix the filename with / to read from a specific file on the SD card. for instance /myFile.txt will read the file /sdcard/myFile.txt. To read assets packaged with an application (also works for the Companion) start the filename with // (two slashes). If a filename does not start with a slash, it will be read from the applications private storage (for packaged apps) and from /sdcard/AppInventor/data for the Companion._

### SaveFile

[[Method('File', 'SaveFile', false, 'text fileName')]]

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |text|`text`|
    |file Name|`text`|


_Saves text to a file. If the filename begins with a slash (/) the file is written to the sdcard. For example writing to /myFile.txt will write the file to /sdcard/myFile.txt. If the filename does not start with a slash, it will be written in the programs private data directory where it will not be accessible to other programs on the phone. There is a special exception for the AI Companion where these files are written to /sdcard/AppInventor/data to facilitate debugging. Note that this block will overwrite a file if it already exists.

If you want to add content to a file use the append block._

### Unzip

[[Method('File', 'Unzip', false, 'targetZipFilePath destinationFolderPath password')]]

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |target Zip File Path|`text`|
    |destination Folder Path|`text`|
    |password|`text`|


_Unzip a file with or without a password. If you dont need a passwort then let it empty._

### Zip

[[Method('File', 'Zip', false, 'targetPath destinationFilePath password')]]

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |target Path|`text`|
    |destination File Path|`text`|
    |password|`text`|


_Create a zip file with or without a password._