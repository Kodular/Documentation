# Spreadsheet

| Category | Requires | Version |
|:--------:|:-------:|:--------:|
|**Storage**|<span class="chip chip-any">API 19, Android 4.4 - 4.4.4 KitKat</span>|<span class="chip chip-number">1</span>|

:mag: {>>Non-visible component<<}

## Overview

A non-visible component that provides access to the Airtable spreadsheet storage  
Component credits\: <a href\="https\://community.kodular.io/u/jerin_jacob" target\="_blank">Jerin Jacob</a>

??? example "Permissions"
    * [android.permission.INTERNET](https://developer.android.com/reference/android/Manifest.permission.html#INTERNET)


## Events

### Cell Changed

Triggered when changing cell data. ResponseCode is a number

[[Event('Spreadsheet', 'Cell Changed', 'responseCode')]]

| Params | []() |
|--------|------|
|response Code|<span class="chip chip-number">Number</span>|


### Deleted Row By Number

Triggered when destroying a row. ResponseCode is a number

[[Event('Spreadsheet', 'Deleted Row By Number', 'responseCode')]]

| Params | []() |
|--------|------|
|response Code|<span class="chip chip-number">Number</span>|


### Got All Rows

Triggered when getting all rows. ResponseCode is a number, ResponseContent is a string

[[Event('Spreadsheet', 'Got All Rows', 'responseCode', 'responseContent', 'totalRows')]]

| Params | []() |
|--------|------|
|response Code|<span class="chip chip-number">Number</span>|
|response Content|<span class="chip chip-text">Text</span>|
|total Rows|<span class="chip chip-number">Number</span>|


### Got Cell

Triggered when receiving cell data. ResponseCode is a number, the other ones are strings

[[Event('Spreadsheet', 'Got Cell', 'responseCode', 'value', 'rowId', 'createdTime')]]

| Params | []() |
|--------|------|
|response Code|<span class="chip chip-number">Number</span>|
|value|<span class="chip chip-text">Text</span>|
|row Id|<span class="chip chip-text">Text</span>|
|created Time|<span class="chip chip-text">Text</span>|


### Got Column

Triggered when receiving column data. ResponseCode is a number, the other ones are lists

[[Event('Spreadsheet', 'Got Column', 'responseCode', 'values', 'rowIds', 'createdTimes')]]

| Params | []() |
|--------|------|
|response Code|<span class="chip chip-number">Number</span>|
|values|<span class="chip chip-list">List</span>|
|row Ids|<span class="chip chip-list">List</span>|
|created Times|<span class="chip chip-list">List</span>|


### Got Row

Triggered when receiving row data. ResponseCode is a number, Values is a list

[[Event('Spreadsheet', 'Got Row', 'responseCode', 'values')]]

| Params | []() |
|--------|------|
|response Code|<span class="chip chip-number">Number</span>|
|values|<span class="chip chip-list">List</span>|


### Row Created

Triggered when creating a row. ResponseCode is a number

[[Event('Spreadsheet', 'Row Created', 'responseCode')]]

| Params | []() |
|--------|------|
|response Code|<span class="chip chip-number">Number</span>|


### Row Updated

Triggered when updating a row. ResponseCode is a number

[[Event('Spreadsheet', 'Row Updated', 'responseCode')]]

| Params | []() |
|--------|------|
|response Code|<span class="chip chip-number">Number</span>|


## Methods

### Create Row

Creates a new row

[[Method('Spreadsheet', 'Create Row', False, 'columnNames', 'values')]]

| Params | []() |
|--------|------|
|column Names|<span class="chip chip-list">List</span>|
|values|<span class="chip chip-list">List</span>|


### Delete Row

Deletes the given row

[[Method('Spreadsheet', 'Delete Row', False, 'rowNumber')]]

| Params | []() |
|--------|------|
|row Number|<span class="chip chip-number">Number</span>|


### Get All Rows

Gets all rows

[[Method('Spreadsheet', 'Get All Rows', False)]]

### Get Cell

Gets cell data

[[Method('Spreadsheet', 'Get Cell', False, 'rowNumber', 'columnName')]]

| Params | []() |
|--------|------|
|row Number|<span class="chip chip-number">Number</span>|
|column Name|<span class="chip chip-text">Text</span>|


### Get Column

Gets column data

[[Method('Spreadsheet', 'Get Column', False, 'columnName', 'maxRecord')]]

| Params | []() |
|--------|------|
|column Name|<span class="chip chip-text">Text</span>|
|max Record|<span class="chip chip-number">Number</span>|


### Get Row

Gets row data

[[Method('Spreadsheet', 'Get Row', False, 'rowNumber')]]

| Params | []() |
|--------|------|
|row Number|<span class="chip chip-number">Number</span>|


### Set Cell

Changes the value of a cell

[[Method('Spreadsheet', 'Set Cell', False, 'rowNumber', 'columnName', 'value')]]

| Params | []() |
|--------|------|
|row Number|<span class="chip chip-number">Number</span>|
|column Name|<span class="chip chip-text">Text</span>|
|value|<span class="chip chip-text">Text</span>|


### Update Row by Number

Updates the given row data

[[Method('Spreadsheet', 'Update Row by Number', False, 'rowNumber', 'columnNames', 'values')]]

| Params | []() |
|--------|------|
|row Number|<span class="chip chip-number">Number</span>|
|column Names|<span class="chip chip-list">List</span>|
|values|<span class="chip chip-list">List</span>|


## Properties

### API Key

<span class="chip chip-text">Text</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span> 

Your apiKey

[[PropertyBlockGetterAndSetter('Spreadsheet', 'API Key')]]

### Base ID

<span class="chip chip-text">Text</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span> 

[[PropertyBlockGetterAndSetter('Spreadsheet', 'Base ID')]]

### Table Name

<span class="chip chip-text">Text</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span> 

[[PropertyBlockGetterAndSetter('Spreadsheet', 'Table Name')]]

### View Name

<span class="chip chip-text">Text</span> <span class="chip chip-text">Default: <i>Grid view</i></span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span> 

[[PropertyBlockGetterAndSetter('Spreadsheet', 'View Name')]]