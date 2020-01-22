# File

| Category | Version | Requires |
|:--------:|:-------:|:--------:|
|Storage|5|API 19 - Android 4.4 - 4.4.4 KitKat|

:mag: {>>Non-visible component<<}

## Overview

_Non-visible component for storing and retrieving files. Use this component to write or read files on your device. The default behaviour is to write files to the private data directory associated with your App. The Companion is special cased to write files to /sdcard/Makeroid/data to facilitate debugging. If the file path starts with a slash (/), then the file is created relative to /sdcard. For example writing a file to /myFile.txt will write the file in /sdcard/myFile.txt._

## Methods

### AppendToFile



[[Method('File', 'AppendToFile', false, 'text fileName')]]

**Parameters**

| Name | Type |
|------|------|
|text|`text`|
|file Name|`text`|


Appends text to the end of a file storage, creating the file if it does not exist. See the help text under SaveFile for information about where files are written.

### Copy



[[Method('File', 'Copy', false, 'input output')]]

**Parameters**

| Name | Type |
|------|------|
|input|`text`|
|output|`text`|


Copy file

### CreateDirectory



[[Method('File', 'CreateDirectory', false, 'directory')]]

**Parameters**

| Name | Type |
|------|------|
|directory|`text`|


Create a new directory.

### Delete



[[Method('File', 'Delete', false, 'fileName')]]

**Parameters**

| Name | Type |
|------|------|
|file Name|`text`|


Deletes a file from storage. Prefix the filename with / to delete a specific file in the SD card, for instance /myFile.txt. will delete the file /sdcard/myFile.txt. If the file does not begin with a /, then the file located in the programs private storage will be deleted. Starting the file with // is an error because assets files cannot be deleted.

### Exists



[[Method('File', 'Exists', true, 'file')]]

{>>Returns `boolean`<<}


**Parameters**

| Name | Type |
|------|------|
|file|`text`|


Check whether a file exists

### FileSize



[[Method('File', 'FileSize', true, 'file')]]

{>>Returns `number`<<}


**Parameters**

| Name | Type |
|------|------|
|file|`text`|


Get file size

### GetFileName



[[Method('File', 'GetFileName', true, 'file')]]

{>>Returns `text`<<}


**Parameters**

| Name | Type |
|------|------|
|file|`text`|


Get file name

### GetFreeSpace



[[Method('File', 'GetFreeSpace', true, 'path')]]

{>>Returns `number`<<}


**Parameters**

| Name | Type |
|------|------|
|path|`text`|


Get Free Space

### GetTotalSpace



[[Method('File', 'GetTotalSpace', true, 'path')]]

{>>Returns `number`<<}


**Parameters**

| Name | Type |
|------|------|
|path|`text`|


Get total space

### IsDirectory



[[Method('File', 'IsDirectory', true, 'path')]]

{>>Returns `boolean`<<}


**Parameters**

| Name | Type |
|------|------|
|path|`text`|


Check whether the path is a directory

### IsFile



[[Method('File', 'IsFile', true, 'path')]]

{>>Returns `boolean`<<}


**Parameters**

| Name | Type |
|------|------|
|path|`text`|


Check whether the path is a file

### Move



[[Method('File', 'Move', true, 'input output')]]

{>>Returns `boolean`<<}


**Parameters**

| Name | Type |
|------|------|
|input|`text`|
|output|`text`|


Move file

### ReadFrom



[[Method('File', 'ReadFrom', false, 'fileName')]]

**Parameters**

| Name | Type |
|------|------|
|file Name|`text`|


Reads text from a file in storage. Prefix the filename with / to read from a specific file on the SD card. for instance /myFile.txt will read the file /sdcard/myFile.txt. To read assets packaged with an application (also works for the Companion) start the filename with // (two slashes). If a filename does not start with a slash, it will be read from the applications private storage (for packaged apps) and from /sdcard/AppInventor/data for the Companion.

### SaveFile



[[Method('File', 'SaveFile', false, 'text fileName')]]

**Parameters**

| Name | Type |
|------|------|
|text|`text`|
|file Name|`text`|


Saves text to a file. If the filename begins with a slash (/) the file is written to the sdcard. For example writing to /myFile.txt will write the file to /sdcard/myFile.txt. If the filename does not start with a slash, it will be written in the programs private data directory where it will not be accessible to other programs on the phone. There is a special exception for the AI Companion where these files are written to /sdcard/AppInventor/data to facilitate debugging. Note that this block will overwrite a file if it already exists.

If you want to add content to a file use the append block.

### Unzip



[[Method('File', 'Unzip', false, 'targetZipFilePath destinationFolderPath password')]]

**Parameters**

| Name | Type |
|------|------|
|target Zip File Path|`text`|
|destination Folder Path|`text`|
|password|`text`|


Unzip a file with or without a password. If you dont need a passwort then let it empty.

### Zip



[[Method('File', 'Zip', false, 'targetPath destinationFilePath password')]]

**Parameters**

| Name | Type |
|------|------|
|target Path|`text`|
|destination File Path|`text`|
|password|`text`|


Create a zip file with or without a password.