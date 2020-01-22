# GoogleSpreadsheet

| Category | Version | Requires |
|:--------:|:-------:|:--------:|
|Deprecated|1|API 19 - Android 4.4 - 4.4.4 KitKat|

:mag: {>>Non-visible component<<}

## Overview

This is a component that allows you to read your Google Spreadsheet data using CloudStitch. <p>CloudStitch allows you to setup a project, that links to your Google Spreadsheet. <p>This component allows you to easily read / insert Spreadsheet data

## Events

### after Action

[[Event('GoogleSpreadsheet', 'after Action', 'wasSuccess message action')]]

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |was Success|`boolean`|
    |message|`text`|
    |action|`text`|


Triggered after an actions such as storing data has occurred.

## Methods

### GetCellData

[[Method('GoogleSpreadsheet', 'GetCellData', true, 'columnName rowNumber')]]

{>>Returns `text`<<}

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |column Name|`text`|
    |row Number|`number`|


For the given columnName and rowNumber, retrieves the spreadsheet cell data

### GetColumnData

[[Method('GoogleSpreadsheet', 'GetColumnData', true, 'columnName')]]

{>>Returns `list`<<}

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |column Name|`text`|


Retrieves all data for an entire column

### GetRowData

[[Method('GoogleSpreadsheet', 'GetRowData', true, 'rowNumber')]]

{>>Returns `list`<<}

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |row Number|`number`|


Retrieves data for a specific row number

### GetSpreadsheetData

[[Method('GoogleSpreadsheet', 'GetSpreadsheetData', false)]]

For the given ApiEndpoint and Spreadsheet, retrieves all data from the spreadsheet.

### StoreData

[[Method('GoogleSpreadsheet', 'StoreData', false, 'dataToStore')]]

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |data To Store|`text`|


Stores data into spreadsheet. dataToStore must be in json format. Will trigger AfterAction

## Properties

### ApiEndpoint

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('GoogleSpreadsheet', 'ApiEndpoint')]]

| Type | Default |
|:----:|:-------:|
|text|Enter the Cloudstitch API Endpoint|

The Cloudstitch API endpoint.

### Sheet Name

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('GoogleSpreadsheet', 'Sheet Name')]]

| Type | Default |
|:----:|:-------:|
|text|Enter Spreadsheet name|

The Google spreadsheet name