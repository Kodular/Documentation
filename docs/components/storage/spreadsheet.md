# Spreadsheet

| Category | Version | Requires |
|:--------:|:-------:|:--------:|
|Storage|1|API 19 - Android 4.4 - 4.4.4 KitKat|

:mag: {>>Non-visible component<<}

## Overview

_A non-visible component that provides access to the Airtable spreadsheet storage<br>Component credits\: <a href\="https\://community.kodular.io/u/jerin_jacob" target\="_blank">Jerin Jacob</a>_

## Events

### Cell Changed

[[Event('Spreadsheet', 'Cell Changed', 'responseCode')]]

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |response Code|`number`|


_Triggered when changing cell data. ResponseCode is a number_

### Deleted Row By Number

[[Event('Spreadsheet', 'Deleted Row By Number', 'responseCode')]]

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |response Code|`number`|


_Triggered when destroying a row. ResponseCode is a number_

### Got All Rows

[[Event('Spreadsheet', 'Got All Rows', 'responseCode responseContent totalRows')]]

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |response Code|`number`|
    |response Content|`text`|
    |total Rows|`number`|


_Triggered when getting all rows. ResponseCode is a number, ResponseContent is a string_

### Got Cell

[[Event('Spreadsheet', 'Got Cell', 'responseCode value rowId createdTime')]]

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |response Code|`number`|
    |value|`text`|
    |row Id|`text`|
    |created Time|`text`|


_Triggered when receiving cell data. ResponseCode is a number, the other ones are strings_

### Got Column

[[Event('Spreadsheet', 'Got Column', 'responseCode values rowIds createdTimes')]]

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |response Code|`number`|
    |values|`list`|
    |row Ids|`list`|
    |created Times|`list`|


_Triggered when receiving column data. ResponseCode is a number, the other ones are lists_

### Got Row

[[Event('Spreadsheet', 'Got Row', 'responseCode values')]]

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |response Code|`number`|
    |values|`list`|


_Triggered when receiving row data. ResponseCode is a number, Values is a list_

### Row Created

[[Event('Spreadsheet', 'Row Created', 'responseCode')]]

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |response Code|`number`|


_Triggered when creating a row. ResponseCode is a number_

### Row Updated

[[Event('Spreadsheet', 'Row Updated', 'responseCode')]]

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |response Code|`number`|


_Triggered when updating a row. ResponseCode is a number_

## Methods

### CreateRow

[[Method('Spreadsheet', 'CreateRow', false, 'columnNames values')]]

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |column Names|`list`|
    |values|`list`|


_Creates a new row_

### DeleteRowNum

[[Method('Spreadsheet', 'DeleteRowNum', false, 'rowNumber')]]

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |row Number|`number`|


_Deletes the given row_

### GetAllRows

[[Method('Spreadsheet', 'GetAllRows', false)]]

_Gets all rows_

### GetCell

[[Method('Spreadsheet', 'GetCell', false, 'rowNumber columnName')]]

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |row Number|`number`|
    |column Name|`text`|


_Gets cell data_

### GetColumn

[[Method('Spreadsheet', 'GetColumn', false, 'columnName maxRecord')]]

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |column Name|`text`|
    |max Record|`number`|


_Gets column data_

### GetRow

[[Method('Spreadsheet', 'GetRow', false, 'rowNumber')]]

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |row Number|`number`|


_Gets row data_

### SetCell

[[Method('Spreadsheet', 'SetCell', false, 'rowNumber columnName value')]]

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |row Number|`number`|
    |column Name|`text`|
    |value|`text`|


_Changes the value of a cell_

### UpdateRowByNum

[[Method('Spreadsheet', 'UpdateRowByNum', false, 'rowNumber columnNames values')]]

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |row Number|`number`|
    |column Names|`list`|
    |values|`list`|


_Updates the given row data_

## Properties

### API Key

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Spreadsheet', 'API Key')]]

| Type |
|:----:|
|text|

_Your apiKey_

### Base ID

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Spreadsheet', 'Base ID')]]

| Type |
|:----:|
|text|

_No description available_

### Table Name

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Spreadsheet', 'Table Name')]]

| Type |
|:----:|
|text|

_No description available_

### View Name

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Spreadsheet', 'View Name')]]

| Type | Default |
|:----:|:-------:|
|text|Grid view|

_No description available_