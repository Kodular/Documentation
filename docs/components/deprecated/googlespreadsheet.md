# GoogleSpreadsheet

| Category | Version | Requires |
|:--------:|:-------:|:--------:|
|Deprecated|1|API 19 - Android 4.4 - 4.4.4 KitKat|

:mag: {>>Non-visible component<<}

## Overview

_This is a component that allows you to read your Google Spreadsheet data using CloudStitch. <p>CloudStitch allows you to setup a project, that links to your Google Spreadsheet. <p>This component allows you to easily read / insert Spreadsheet data_

## Events

### after Action

[[Event('GoogleSpreadsheet', 'after Action', 'wasSuccess message action')]]

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |was Success|`boolean`|
    |message|`text`|
    |action|`text`|


_Triggered after an actions such as storing data has occurred._

## Methods

### GetCellData

[[Method('GoogleSpreadsheet', 'GetCellData', true, 'columnName rowNumber')]]

{>>Returns `text`<<}

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |column Name|`text`|
    |row Number|`number`|


_For the given columnName and rowNumber, retrieves the spreadsheet cell data_

### GetColumnData

[[Method('GoogleSpreadsheet', 'GetColumnData', true, 'columnName')]]

{>>Returns `list`<<}

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |column Name|`text`|


_Retrieves all data for an entire column_

### GetRowData

[[Method('GoogleSpreadsheet', 'GetRowData', true, 'rowNumber')]]

{>>Returns `list`<<}

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |row Number|`number`|


_Retrieves data for a specific row number_

### GetSpreadsheetData

[[Method('GoogleSpreadsheet', 'GetSpreadsheetData', false)]]

_For the given ApiEndpoint and Spreadsheet, retrieves all data from the spreadsheet._

### StoreData

[[Method('GoogleSpreadsheet', 'StoreData', false, 'dataToStore')]]

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |data To Store|`text`|


_Stores data into spreadsheet. dataToStore must be in json format. Will trigger AfterAction_

## Properties

### ApiEndpoint

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('GoogleSpreadsheet', 'ApiEndpoint')]]

| Type | Default |
|:----:|:-------:|
|text|Enter the Cloudstitch API Endpoint|

_The Cloudstitch API endpoint._

### Sheet Name

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('GoogleSpreadsheet', 'Sheet Name')]]

| Type | Default |
|:----:|:-------:|
|text|Enter Spreadsheet name|

_The Google spreadsheet name_