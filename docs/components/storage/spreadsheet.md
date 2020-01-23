# Spreadsheet

| Category | Requires | Version |
|:--------:|:-------:|:--------:|
|Storage|API 19, Android 4.4 - 4.4.4 KitKat|1|

:mag: {>>Non-visible component<<}

## Overview

A non-visible component that provides access to the Airtable spreadsheet storage  
Component credits\: <a href\="https\://community.kodular.io/u/jerin_jacob" target\="_blank">Jerin Jacob</a>

## Events

### Cell Changed

[[Event('Spreadsheet', 'Cell Changed', 'responseCode')]]

| Params | []() |
|--------|------|
|response Code|Number|


Triggered when changing cell data. ResponseCode is a number

### Deleted Row By Number

[[Event('Spreadsheet', 'Deleted Row By Number', 'responseCode')]]

| Params | []() |
|--------|------|
|response Code|Number|


Triggered when destroying a row. ResponseCode is a number

### Got All Rows

[[Event('Spreadsheet', 'Got All Rows', 'responseCode', 'responseContent', 'totalRows')]]

| Params | []() |
|--------|------|
|response Code|Number|
|response Content|Text|
|total Rows|Number|


Triggered when getting all rows. ResponseCode is a number, ResponseContent is a string

### Got Cell

[[Event('Spreadsheet', 'Got Cell', 'responseCode', 'value', 'rowId', 'createdTime')]]

| Params | []() |
|--------|------|
|response Code|Number|
|value|Text|
|row Id|Text|
|created Time|Text|


Triggered when receiving cell data. ResponseCode is a number, the other ones are strings

### Got Column

[[Event('Spreadsheet', 'Got Column', 'responseCode', 'values', 'rowIds', 'createdTimes')]]

| Params | []() |
|--------|------|
|response Code|Number|
|values|List|
|row Ids|List|
|created Times|List|


Triggered when receiving column data. ResponseCode is a number, the other ones are lists

### Got Row

[[Event('Spreadsheet', 'Got Row', 'responseCode', 'values')]]

| Params | []() |
|--------|------|
|response Code|Number|
|values|List|


Triggered when receiving row data. ResponseCode is a number, Values is a list

### Row Created

[[Event('Spreadsheet', 'Row Created', 'responseCode')]]

| Params | []() |
|--------|------|
|response Code|Number|


Triggered when creating a row. ResponseCode is a number

### Row Updated

[[Event('Spreadsheet', 'Row Updated', 'responseCode')]]

| Params | []() |
|--------|------|
|response Code|Number|


Triggered when updating a row. ResponseCode is a number

## Methods

### Create Row

[[Method('Spreadsheet', 'Create Row', False, 'columnNames', 'values')]]

| Params | []() |
|--------|------|
|column Names|List|
|values|List|


Creates a new row

### Delete Row

[[Method('Spreadsheet', 'Delete Row', False, 'rowNumber')]]

| Params | []() |
|--------|------|
|row Number|Number|


Deletes the given row

### Get All Rows

[[Method('Spreadsheet', 'Get All Rows', False)]]

Gets all rows

### Get Cell

[[Method('Spreadsheet', 'Get Cell', False, 'rowNumber', 'columnName')]]

| Params | []() |
|--------|------|
|row Number|Number|
|column Name|Text|


Gets cell data

### Get Column

[[Method('Spreadsheet', 'Get Column', False, 'columnName', 'maxRecord')]]

| Params | []() |
|--------|------|
|column Name|Text|
|max Record|Number|


Gets column data

### Get Row

[[Method('Spreadsheet', 'Get Row', False, 'rowNumber')]]

| Params | []() |
|--------|------|
|row Number|Number|


Gets row data

### Set Cell

[[Method('Spreadsheet', 'Set Cell', False, 'rowNumber', 'columnName', 'value')]]

| Params | []() |
|--------|------|
|row Number|Number|
|column Name|Text|
|value|Text|


Changes the value of a cell

### Update Row by Number

[[Method('Spreadsheet', 'Update Row by Number', False, 'rowNumber', 'columnNames', 'values')]]

| Params | []() |
|--------|------|
|row Number|Number|
|column Names|List|
|values|List|


Updates the given row data

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