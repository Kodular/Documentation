# Spreadsheet

| Category | Version | Requires |
|:--------:|:-------:|:--------:|
|Storage|1|API 19 - Android 4.4 - 4.4.4 KitKat|

:mag: {>>Non-visible component<<}

## Overview

A non-visible component that provides access to the Airtable spreadsheet storage  
Component credits\: <a href\="https\://community.kodular.io/u/jerin_jacob" target\="_blank">Jerin Jacob</a>

## Events

### Cell Changed

[[Event('Spreadsheet', 'Cell Changed', 'responseCode')]]

??? tip "Parameters"

    | Name | Type |
    |------|------|
    |response Code|`number`|


Triggered when changing cell data. ResponseCode is a number

### Deleted Row By Number

[[Event('Spreadsheet', 'Deleted Row By Number', 'responseCode')]]

??? tip "Parameters"

    | Name | Type |
    |------|------|
    |response Code|`number`|


Triggered when destroying a row. ResponseCode is a number

### Got All Rows

[[Event('Spreadsheet', 'Got All Rows', 'responseCode', 'responseContent', 'totalRows')]]

??? tip "Parameters"

    | Name | Type |
    |------|------|
    |response Code|`number`|
    |response Content|`text`|
    |total Rows|`number`|


Triggered when getting all rows. ResponseCode is a number, ResponseContent is a string

### Got Cell

[[Event('Spreadsheet', 'Got Cell', 'responseCode', 'value', 'rowId', 'createdTime')]]

??? tip "Parameters"

    | Name | Type |
    |------|------|
    |response Code|`number`|
    |value|`text`|
    |row Id|`text`|
    |created Time|`text`|


Triggered when receiving cell data. ResponseCode is a number, the other ones are strings

### Got Column

[[Event('Spreadsheet', 'Got Column', 'responseCode', 'values', 'rowIds', 'createdTimes')]]

??? tip "Parameters"

    | Name | Type |
    |------|------|
    |response Code|`number`|
    |values|`list`|
    |row Ids|`list`|
    |created Times|`list`|


Triggered when receiving column data. ResponseCode is a number, the other ones are lists

### Got Row

[[Event('Spreadsheet', 'Got Row', 'responseCode', 'values')]]

??? tip "Parameters"

    | Name | Type |
    |------|------|
    |response Code|`number`|
    |values|`list`|


Triggered when receiving row data. ResponseCode is a number, Values is a list

### Row Created

[[Event('Spreadsheet', 'Row Created', 'responseCode')]]

??? tip "Parameters"

    | Name | Type |
    |------|------|
    |response Code|`number`|


Triggered when creating a row. ResponseCode is a number

### Row Updated

[[Event('Spreadsheet', 'Row Updated', 'responseCode')]]

??? tip "Parameters"

    | Name | Type |
    |------|------|
    |response Code|`number`|


Triggered when updating a row. ResponseCode is a number

## Methods

### CreateRow

[[Method('Spreadsheet', 'CreateRow', false, 'columnNames values')]]

??? tip "Parameters"

    | Name | Type |
    |------|------|
    |column Names|`list`|
    |values|`list`|


Creates a new row

### DeleteRowNum

[[Method('Spreadsheet', 'DeleteRowNum', false, 'rowNumber')]]

??? tip "Parameters"

    | Name | Type |
    |------|------|
    |row Number|`number`|


Deletes the given row

### GetAllRows

[[Method('Spreadsheet', 'GetAllRows', false)]]

Gets all rows

### GetCell

[[Method('Spreadsheet', 'GetCell', false, 'rowNumber columnName')]]

??? tip "Parameters"

    | Name | Type |
    |------|------|
    |row Number|`number`|
    |column Name|`text`|


Gets cell data

### GetColumn

[[Method('Spreadsheet', 'GetColumn', false, 'columnName maxRecord')]]

??? tip "Parameters"

    | Name | Type |
    |------|------|
    |column Name|`text`|
    |max Record|`number`|


Gets column data

### GetRow

[[Method('Spreadsheet', 'GetRow', false, 'rowNumber')]]

??? tip "Parameters"

    | Name | Type |
    |------|------|
    |row Number|`number`|


Gets row data

### SetCell

[[Method('Spreadsheet', 'SetCell', false, 'rowNumber columnName value')]]

??? tip "Parameters"

    | Name | Type |
    |------|------|
    |row Number|`number`|
    |column Name|`text`|
    |value|`text`|


Changes the value of a cell

### UpdateRowByNum

[[Method('Spreadsheet', 'UpdateRowByNum', false, 'rowNumber columnNames values')]]

??? tip "Parameters"

    | Name | Type |
    |------|------|
    |row Number|`number`|
    |column Names|`list`|
    |values|`list`|


Updates the given row data

## Properties

### API Key

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Spreadsheet', 'API Key')]]

| Type |
|:----:|
|text|

Your apiKey

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