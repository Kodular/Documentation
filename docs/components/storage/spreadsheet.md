# Spreadsheet

| Category | Requires | Version |
|:--------:|:-------:|:--------:|
|**Storage**|<span class="chip chip-any">API 19, Android 4.4 - 4.4.4 KitKat</span>|<span class="chip chip-number">1</span>|

:mag: {>>Non-Visible component<<}

## Overview

A non-visible component that provides access to the Airtable spreadsheet storage  
Component credits\: <a href\="https\://community.kodular.io/u/jerin_jacob" target\="_blank">Jerin Jacob</a>

??? example "Permissions"
    * [android.permission.INTERNET](https://developer.android.com/reference/android/Manifest.permission.html#INTERNET)

## Events

### Cell Changed

Triggered when changing cell data. ResponseCode is a number

<div class="block" ai2-block="event" not-rendered="true" value="%7B%22componentName%22:%20%22Spreadsheet%22,%20%22name%22:%20%22Cell%20Changed%22,%20%22param%22:%20%5B%22response%20Code%22%5D%7D"></div>

| Params | []() |
|--------|------|
|response Code|<span class="chip chip-number">Number</span>|

### Deleted Row By Number

Triggered when destroying a row. ResponseCode is a number

<div class="block" ai2-block="event" not-rendered="true" value="%7B%22componentName%22:%20%22Spreadsheet%22,%20%22name%22:%20%22Deleted%20Row%20By%20Number%22,%20%22param%22:%20%5B%22response%20Code%22%5D%7D"></div>

| Params | []() |
|--------|------|
|response Code|<span class="chip chip-number">Number</span>|

### Got All Rows

Triggered when getting all rows. ResponseCode is a number, ResponseContent is a string

<div class="block" ai2-block="event" not-rendered="true" value="%7B%22componentName%22:%20%22Spreadsheet%22,%20%22name%22:%20%22Got%20All%20Rows%22,%20%22param%22:%20%5B%22response%20Code%22,%20%22response%20Content%22,%20%22total%20Rows%22%5D%7D"></div>

| Params | []() |
|--------|------|
|response Code|<span class="chip chip-number">Number</span>|
|response Content|<span class="chip chip-text">Text</span>|
|total Rows|<span class="chip chip-number">Number</span>|

### Got Cell

Triggered when receiving cell data. ResponseCode is a number, the other ones are strings

<div class="block" ai2-block="event" not-rendered="true" value="%7B%22componentName%22:%20%22Spreadsheet%22,%20%22name%22:%20%22Got%20Cell%22,%20%22param%22:%20%5B%22response%20Code%22,%20%22value%22,%20%22row%20Id%22,%20%22created%20Time%22%5D%7D"></div>

| Params | []() |
|--------|------|
|response Code|<span class="chip chip-number">Number</span>|
|value|<span class="chip chip-text">Text</span>|
|row Id|<span class="chip chip-text">Text</span>|
|created Time|<span class="chip chip-text">Text</span>|

### Got Column

Triggered when receiving column data. ResponseCode is a number, the other ones are lists

<div class="block" ai2-block="event" not-rendered="true" value="%7B%22componentName%22:%20%22Spreadsheet%22,%20%22name%22:%20%22Got%20Column%22,%20%22param%22:%20%5B%22response%20Code%22,%20%22values%22,%20%22row%20Ids%22,%20%22created%20Times%22%5D%7D"></div>

| Params | []() |
|--------|------|
|response Code|<span class="chip chip-number">Number</span>|
|values|<span class="chip chip-list">List</span>|
|row Ids|<span class="chip chip-list">List</span>|
|created Times|<span class="chip chip-list">List</span>|

### Got Row

Triggered when receiving row data. ResponseCode is a number, Values is a list

<div class="block" ai2-block="event" not-rendered="true" value="%7B%22componentName%22:%20%22Spreadsheet%22,%20%22name%22:%20%22Got%20Row%22,%20%22param%22:%20%5B%22response%20Code%22,%20%22values%22%5D%7D"></div>

| Params | []() |
|--------|------|
|response Code|<span class="chip chip-number">Number</span>|
|values|<span class="chip chip-list">List</span>|

### Row Created

Triggered when creating a row. ResponseCode is a number

<div class="block" ai2-block="event" not-rendered="true" value="%7B%22componentName%22:%20%22Spreadsheet%22,%20%22name%22:%20%22Row%20Created%22,%20%22param%22:%20%5B%22response%20Code%22%5D%7D"></div>

| Params | []() |
|--------|------|
|response Code|<span class="chip chip-number">Number</span>|

### Row Updated

Triggered when updating a row. ResponseCode is a number

<div class="block" ai2-block="event" not-rendered="true" value="%7B%22componentName%22:%20%22Spreadsheet%22,%20%22name%22:%20%22Row%20Updated%22,%20%22param%22:%20%5B%22response%20Code%22%5D%7D"></div>

| Params | []() |
|--------|------|
|response Code|<span class="chip chip-number">Number</span>|

## Methods

### Create Row

Creates a new row

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22Spreadsheet%22,%20%22name%22:%20%22Create%20Row%22,%20%22output%22:%20false,%20%22param%22:%20%5B%22column%20Names%22,%20%22values%22%5D%7D"></div>

| Params | []() |
|--------|------|
|column Names|<span class="chip chip-list">List</span>|
|values|<span class="chip chip-list">List</span>|

### Delete Row

Deletes the given row

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22Spreadsheet%22,%20%22name%22:%20%22Delete%20Row%22,%20%22output%22:%20false,%20%22param%22:%20%5B%22row%20Number%22%5D%7D"></div>

| Params | []() |
|--------|------|
|row Number|<span class="chip chip-number">Number</span>|

### Get All Rows

Gets all rows

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22Spreadsheet%22,%20%22name%22:%20%22Get%20All%20Rows%22,%20%22output%22:%20false,%20%22param%22:%20%5B%5D%7D"></div>

### Get Cell

Gets cell data

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22Spreadsheet%22,%20%22name%22:%20%22Get%20Cell%22,%20%22output%22:%20false,%20%22param%22:%20%5B%22row%20Number%22,%20%22column%20Name%22%5D%7D"></div>

| Params | []() |
|--------|------|
|row Number|<span class="chip chip-number">Number</span>|
|column Name|<span class="chip chip-text">Text</span>|

### Get Column

Gets column data

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22Spreadsheet%22,%20%22name%22:%20%22Get%20Column%22,%20%22output%22:%20false,%20%22param%22:%20%5B%22column%20Name%22,%20%22max%20Record%22%5D%7D"></div>

| Params | []() |
|--------|------|
|column Name|<span class="chip chip-text">Text</span>|
|max Record|<span class="chip chip-number">Number</span>|

### Get Row

Gets row data

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22Spreadsheet%22,%20%22name%22:%20%22Get%20Row%22,%20%22output%22:%20false,%20%22param%22:%20%5B%22row%20Number%22%5D%7D"></div>

| Params | []() |
|--------|------|
|row Number|<span class="chip chip-number">Number</span>|

### Set Cell

Changes the value of a cell

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22Spreadsheet%22,%20%22name%22:%20%22Set%20Cell%22,%20%22output%22:%20false,%20%22param%22:%20%5B%22row%20Number%22,%20%22column%20Name%22,%20%22value%22%5D%7D"></div>

| Params | []() |
|--------|------|
|row Number|<span class="chip chip-number">Number</span>|
|column Name|<span class="chip chip-text">Text</span>|
|value|<span class="chip chip-text">Text</span>|

### Update Row by Number

Updates the given row data

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22Spreadsheet%22,%20%22name%22:%20%22Update%20Row%20by%20Number%22,%20%22output%22:%20false,%20%22param%22:%20%5B%22row%20Number%22,%20%22column%20Names%22,%20%22values%22%5D%7D"></div>

| Params | []() |
|--------|------|
|row Number|<span class="chip chip-number">Number</span>|
|column Names|<span class="chip chip-list">List</span>|
|values|<span class="chip chip-list">List</span>|

## Properties

### API Key

<span style="user-select: none; white-space:pre-wrap;"><span class="chip chip-text">Text</span>          <span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span>&#32;</span>

Your apiKey

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Spreadsheet%22,%20%22name%22:%20%22API%20Key%22,%20%22getter%22:%20true%7D"></div>
<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Spreadsheet%22,%20%22name%22:%20%22API%20Key%22,%20%22getter%22:%20false%7D"></div>

### Base ID

<span style="user-select: none; white-space:pre-wrap;"><span class="chip chip-text">Text</span>          <span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span>&#32;</span>

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Spreadsheet%22,%20%22name%22:%20%22Base%20ID%22,%20%22getter%22:%20true%7D"></div>
<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Spreadsheet%22,%20%22name%22:%20%22Base%20ID%22,%20%22getter%22:%20false%7D"></div>

### Table Name

<span style="user-select: none; white-space:pre-wrap;"><span class="chip chip-text">Text</span>          <span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span>&#32;</span>

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Spreadsheet%22,%20%22name%22:%20%22Table%20Name%22,%20%22getter%22:%20true%7D"></div>
<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Spreadsheet%22,%20%22name%22:%20%22Table%20Name%22,%20%22getter%22:%20false%7D"></div>

### View Name

<span style="user-select: none; white-space:pre-wrap;"><span class="chip chip-text">Text</span> <span class="chip chip-text">Default: <i>Grid view</i></span>          <span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span>&#32;</span>

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Spreadsheet%22,%20%22name%22:%20%22View%20Name%22,%20%22getter%22:%20true%7D"></div>
<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Spreadsheet%22,%20%22name%22:%20%22View%20Name%22,%20%22getter%22:%20false%7D"></div>
