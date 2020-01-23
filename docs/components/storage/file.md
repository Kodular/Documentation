# File

| Category | Version | Requires |
|:--------:|:-------:|:--------:|
|Storage|5|API 19, Android 4.4 - 4.4.4 KitKat|

:mag: {>>Non-visible component<<}

## Overview

Non-visible component for storing and retrieving files. Use this component to write or read files on your device. The default behaviour is to write files to the private data directory associated with your App. The Companion is special cased to write files to /sdcard/Makeroid/data to facilitate debugging. If the file path starts with a slash (/), then the file is created relative to /sdcard. For example writing a file to /myFile.txt will write the file in /sdcard/myFile.txt.

## Events

### After File Saved

[[Event('File', 'After File Saved', 'fileName')]]

| Params | []() |
|--------|------|
|file Name|Text|


Event indicating that the contents of the file have been written.

### After Unzip

[[Event('File', 'After Unzip')]]

Event indicating that the zip file have been created.

### After Zip

[[Event('File', 'After Zip')]]

Event indicating that the zip file have been created.

### Directory Created

[[Event('File', 'Directory Created', 'isDirectoryCreated')]]

| Params | []() |
|--------|------|
|is Directory Created|Boolean|


Event indicating that there was a directory created. The return value is 'true' or 'false'.

### Got Text

[[Event('File', 'Got Text', 'text')]]

| Params | []() |
|--------|------|
|text|Text|


Event indicating that the contents from the file have been read.

### On Zip Failure

[[Event('File', 'On Zip Failure', 'errorMessage')]]

| Params | []() |
|--------|------|
|error Message|Text|


Event indicating that there was any failure on zip or unzip a file.

## Methods

### Append To File

[[Method('File', 'Append To File', False, 'text', 'fileName')]]

| Params | []() |
|--------|------|
|text|Text|
|file Name|Text|


Appends text to the end of a file storage, creating the file if it does not exist. See the help text under SaveFile for information about where files are written.

### Copy

[[Method('File', 'Copy', False, 'input', 'output')]]

| Params | []() |
|--------|------|
|input|Text|
|output|Text|


Copy file

### Create Directory

[[Method('File', 'Create Directory', False, 'directory')]]

| Params | []() |
|--------|------|
|directory|Text|


Create a new directory.

### Delete

[[Method('File', 'Delete', False, 'fileName')]]

| Params | []() |
|--------|------|
|file Name|Text|


Deletes a file from storage. Prefix the filename with / to delete a specific file in the SD card, for instance /myFile.txt. will delete the file /sdcard/myFile.txt. If the file does not begin with a /, then the file located in the programs private storage will be deleted. Starting the file with // is an error because assets files cannot be deleted.

### Exists

[[Method('File', 'Exists', True, 'file')]]

{>>Returns `boolean`<<}

| Params | []() |
|--------|------|
|file|Text|


Check whether a file exists

### File Size

[[Method('File', 'File Size', True, 'file')]]

{>>Returns `number`<<}

| Params | []() |
|--------|------|
|file|Text|


Get file size

### Get File Name

[[Method('File', 'Get File Name', True, 'file')]]

{>>Returns `text`<<}

| Params | []() |
|--------|------|
|file|Text|


Get file name

### Get Free Space

[[Method('File', 'Get Free Space', True, 'path')]]

{>>Returns `number`<<}

| Params | []() |
|--------|------|
|path|Text|


Get Free Space

### Get Total Space

[[Method('File', 'Get Total Space', True, 'path')]]

{>>Returns `number`<<}

| Params | []() |
|--------|------|
|path|Text|


Get total space

### Is Directory

[[Method('File', 'Is Directory', True, 'path')]]

{>>Returns `boolean`<<}

| Params | []() |
|--------|------|
|path|Text|


Check whether the path is a directory

### Is File

[[Method('File', 'Is File', True, 'path')]]

{>>Returns `boolean`<<}

| Params | []() |
|--------|------|
|path|Text|


Check whether the path is a file

### Move

[[Method('File', 'Move', True, 'input', 'output')]]

{>>Returns `boolean`<<}

| Params | []() |
|--------|------|
|input|Text|
|output|Text|


Move file

### Read From

[[Method('File', 'Read From', False, 'fileName')]]

| Params | []() |
|--------|------|
|file Name|Text|


Reads text from a file in storage. Prefix the filename with / to read from a specific file on the SD card. for instance /myFile.txt will read the file /sdcard/myFile.txt. To read assets packaged with an application (also works for the Companion) start the filename with // (two slashes). If a filename does not start with a slash, it will be read from the applications private storage (for packaged apps) and from /sdcard/AppInventor/data for the Companion.

### Save File

[[Method('File', 'Save File', False, 'text', 'fileName')]]

| Params | []() |
|--------|------|
|text|Text|
|file Name|Text|


Saves text to a file. If the filename begins with a slash (/) the file is written to the sdcard. For example writing to /myFile.txt will write the file to /sdcard/myFile.txt. If the filename does not start with a slash, it will be written in the programs private data directory where it will not be accessible to other programs on the phone. There is a special exception for the AI Companion where these files are written to /sdcard/AppInventor/data to facilitate debugging. Note that this block will overwrite a file if it already exists
If you want to add content to a file use the append block.

### Unzip

[[Method('File', 'Unzip', False, 'targetZipFilePath', 'destinationFolderPath', 'password')]]

| Params | []() |
|--------|------|
|target Zip File Path|Text|
|destination Folder Path|Text|
|password|Text|


Unzip a file with or without a password. If you dont need a passwort then let it empty.

### Zip

[[Method('File', 'Zip', False, 'targetPath', 'destinationFilePath', 'password')]]

| Params | []() |
|--------|------|
|target Path|Text|
|destination File Path|Text|
|password|Text|


Create a zip file with or without a password.