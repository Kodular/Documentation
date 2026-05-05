# GoogleSpreadsheet

{>> Non-Visible component<<}

| Category | Requires | Version |
|:--------:|:-------:|:--------:|
|**Deprecated**|<span class="chip chip-any">API 21, Android 5.0 Lollipop</span>|<span class="chip chip-number">1</span>|

!!! danger "Deprecated component"
    This component is deprecated. Projects that still contain it will fail to build until it is removed. You can still load existing projects in the Designer and live-test them with the Companion while you migrate, but APK and AAB builds are blocked. Look for an up-to-date replacement in the active component palette.

## Overview

This is a component that allows you to read your Google Spreadsheet data using CloudStitch. 

CloudStitch allows you to setup a project, that links to your Google Spreadsheet. 

This component allows you to easily read / insert Spreadsheet data

??? example "Permissions"
    * [android.permission.INTERNET](https://developer.android.com/reference/android/Manifest.permission.html#INTERNET)

## Events

### after Action

Triggered after an actions such as storing data has occurred.

<div class="block" ai2-block="event" not-rendered="true" value="%7B%22componentName%22:%20%22GoogleSpreadsheet%22,%20%22name%22:%20%22after%20Action%22,%20%22param%22:%20%5B%22was%20Success%22,%20%22message%22,%20%22action%22%5D%7D"></div>

| Params | []() |
|--------|------|
|was Success|<span class="chip chip-boolean">Boolean</span>|
|message|<span class="chip chip-text">Text</span>|
|action|<span class="chip chip-text">Text</span>|

## Methods

### Get Cell Data

<span class="chip chip-text">Returns: <i>Text</i></span>

For the given columnName and rowNumber, retrieves the spreadsheet cell data

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22GoogleSpreadsheet%22,%20%22name%22:%20%22Get%20Cell%20Data%22,%20%22output%22:%20true,%20%22param%22:%20%5B%22column%20Name%22,%20%22row%20Number%22%5D%7D"></div>

| Params | []() |
|--------|------|
|column Name|<span class="chip chip-text">Text</span>|
|row Number|<span class="chip chip-number">Number</span>|

### Get Column Data

<span class="chip chip-list">Returns: <i>List</i></span>

Retrieves all data for an entire column

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22GoogleSpreadsheet%22,%20%22name%22:%20%22Get%20Column%20Data%22,%20%22output%22:%20true,%20%22param%22:%20%5B%22column%20Name%22%5D%7D"></div>

| Params | []() |
|--------|------|
|column Name|<span class="chip chip-text">Text</span>|

### Get Row Data

<span class="chip chip-list">Returns: <i>List</i></span>

Retrieves data for a specific row number

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22GoogleSpreadsheet%22,%20%22name%22:%20%22Get%20Row%20Data%22,%20%22output%22:%20true,%20%22param%22:%20%5B%22row%20Number%22%5D%7D"></div>

| Params | []() |
|--------|------|
|row Number|<span class="chip chip-number">Number</span>|

### Get Spreadsheet Data

For the given ApiEndpoint and Spreadsheet, retrieves all data from the spreadsheet.

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22GoogleSpreadsheet%22,%20%22name%22:%20%22Get%20Spreadsheet%20Data%22,%20%22output%22:%20false,%20%22param%22:%20%5B%5D%7D"></div>

### Store Data

Stores data into spreadsheet. dataToStore must be in json format. Will trigger AfterAction

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22GoogleSpreadsheet%22,%20%22name%22:%20%22Store%20Data%22,%20%22output%22:%20false,%20%22param%22:%20%5B%22data%20To%20Store%22%5D%7D"></div>

| Params | []() |
|--------|------|
|data To Store|<span class="chip chip-text">Text</span>|

## Properties

### ApiEndpoint

<span style="user-select: none; white-space:pre-wrap;"><span class="chip chip-text">Text</span> <span class="chip chip-text">Default: <i>Enter the Cloudstitch API Endpoint</i></span> :heavy_minus_sign: <span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span>  - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span></span>

The Cloudstitch API endpoint.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22GoogleSpreadsheet%22,%20%22name%22:%20%22ApiEndpoint%22,%20%22getter%22:%20true%7D"></div>
<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22GoogleSpreadsheet%22,%20%22name%22:%20%22ApiEndpoint%22,%20%22getter%22:%20false%7D"></div>

### Sheet Name

<span style="user-select: none; white-space:pre-wrap;"><span class="chip chip-text">Text</span> <span class="chip chip-text">Default: <i>Enter Spreadsheet name</i></span> :heavy_minus_sign: <span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span>  - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span></span>

The Google spreadsheet name

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22GoogleSpreadsheet%22,%20%22name%22:%20%22Sheet%20Name%22,%20%22getter%22:%20true%7D"></div>
<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22GoogleSpreadsheet%22,%20%22name%22:%20%22Sheet%20Name%22,%20%22getter%22:%20false%7D"></div>
