# Spreadsheet

| Category | Version | Requires |
|:--------:|:-------:|:--------:|
|Storage|1|API 19 - Android 4.4 - 4.4.4 KitKat|

:mag: {>>Non-visible component<<}

## Overview

_A non-visible component that provides access to the Airtable spreadsheet storage<br>Component credits\: <a href\="https\://community.kodular.io/u/jerin_jacob" target\="_blank">Jerin Jacob</a>_

## Properties

### API Key

<small>Available as Common Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Spreadsheet', 'API Key')]]

| Type |
|:----:|
|text|

Your apiKey

### Base ID

<small>Available as Common Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Spreadsheet', 'Base ID')]]

| Type |
|:----:|
|text|

_No description available_

### Table Name

<small>Available as Common Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Spreadsheet', 'Table Name')]]

| Type |
|:----:|
|text|

_No description available_

### View Name

<small>Available as Common Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Spreadsheet', 'View Name')]]

| Type | Default |
|:----:|:-------:|
|text|Grid view|

_No description available_

## Methods

### CreateRow



[[Method('Spreadsheet', 'CreateRow', false, 'columnNames values')]]

**Parameters**

| Name | Type |
|------|------|
|column Names|`list`|
|values|`list`|


Creates a new row

### DeleteRowNum



[[Method('Spreadsheet', 'DeleteRowNum', false, 'rowNumber')]]

**Parameters**

| Name | Type |
|------|------|
|row Number|`number`|


Deletes the given row

### GetAllRows



[[Method('Spreadsheet', 'GetAllRows', false)]]

Gets all rows

### GetCell



[[Method('Spreadsheet', 'GetCell', false, 'rowNumber columnName')]]

**Parameters**

| Name | Type |
|------|------|
|row Number|`number`|
|column Name|`text`|


Gets cell data

### GetColumn



[[Method('Spreadsheet', 'GetColumn', false, 'columnName maxRecord')]]

**Parameters**

| Name | Type |
|------|------|
|column Name|`text`|
|max Record|`number`|


Gets column data

### GetRow



[[Method('Spreadsheet', 'GetRow', false, 'rowNumber')]]

**Parameters**

| Name | Type |
|------|------|
|row Number|`number`|


Gets row data

### SetCell



[[Method('Spreadsheet', 'SetCell', false, 'rowNumber columnName value')]]

**Parameters**

| Name | Type |
|------|------|
|row Number|`number`|
|column Name|`text`|
|value|`text`|


Changes the value of a cell

### UpdateRowByNum



[[Method('Spreadsheet', 'UpdateRowByNum', false, 'rowNumber columnNames values')]]

**Parameters**

| Name | Type |
|------|------|
|row Number|`number`|
|column Names|`list`|
|values|`list`|


Updates the given row data