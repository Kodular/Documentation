# SQLite

| Category | Requires | Version |
|:--------:|:-------:|:--------:|
|**Storage**|<span class="chip chip-any">API 19, Android 4.4 - 4.4.4 KitKat</span>|<span class="chip chip-number">1</span>|

:mag: {>>Non-Visible component<<}

## Overview

A non-visible component that accesses the application''s SQLite database.   
Component credits\: Carlos Pedroza

## Events

### After Execution

Event handler after the SQL statement is executed, returns whether the execution was succesful.

<div class="block" ai2-block="event" not-rendered="true" value="%7B%22componentName%22:%20%22SQLite%22,%20%22name%22:%20%22After%20Execution%22,%20%22param%22:%20%5B%22was%20Executed%22%5D%7D"></div>

| Params | []() |
|--------|------|
|was Executed|<span class="chip chip-boolean">Boolean</span>|

### After Query

Event handler after the RawQuery or Query is executed and returns a list with the selected data and number of records.

<div class="block" ai2-block="event" not-rendered="true" value="%7B%22componentName%22:%20%22SQLite%22,%20%22name%22:%20%22After%20Query%22,%20%22param%22:%20%5B%22result%22,%20%22number%20Of%20Records%22%5D%7D"></div>

| Params | []() |
|--------|------|
|result|<span class="chip chip-list">List</span>|
|number Of Records|<span class="chip chip-number">Number</span>|

### Error Occurred

Event handler when an error ocurred, returns a string with a message from the error.

<div class="block" ai2-block="event" not-rendered="true" value="%7B%22componentName%22:%20%22SQLite%22,%20%22name%22:%20%22Error%20Occurred%22,%20%22param%22:%20%5B%22message%22%5D%7D"></div>

| Params | []() |
|--------|------|
|message|<span class="chip chip-text">Text</span>|

## Methods

### Clear Database

Clears the database to version 1. Use only while developing, this shouldn't be use on production.

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22SQLite%22,%20%22name%22:%20%22Clear%20Database%22,%20%22output%22:%20false,%20%22param%22:%20%5B%5D%7D"></div>

### Delete

<span class="chip chip-number">Returns: <i>Number</i></span>

Executes pre-compiled DELETE statement with specified parameters. Parameters: 1) String table - Name of the table. 2) String whereClause - Optional WHERE clause to apply when deleting (Example: 'ID = ?'), pasing an empty a string will delete all rows. 3) List whereArgs - List with arguments for the WHERE clause. These arguments will be replaced by '?' in the whereClause. Returns the number of rows affected if a whereClause is passed in, 0 otherwise.

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22SQLite%22,%20%22name%22:%20%22Delete%22,%20%22output%22:%20true,%20%22param%22:%20%5B%22table%22,%20%22where%20Clause%22,%20%22where%20Args%22%5D%7D"></div>

| Params | []() |
|--------|------|
|table|<span class="chip chip-text">Text</span>|
|where Clause|<span class="chip chip-text">Text</span>|
|where Args|<span class="chip chip-list">List</span>|

### Get Path

<span class="chip chip-text">Returns: <i>Text</i></span>

Returns the path to the database

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22SQLite%22,%20%22name%22:%20%22Get%20Path%22,%20%22output%22:%20true,%20%22param%22:%20%5B%5D%7D"></div>

### Insert

<span class="chip chip-number">Returns: <i>Number</i></span>

Executes pre-compiled INSERT statement with specified parameters. Parameters: 1) String table - Name of the table. 2) YailList columns - List with the columns that will contain the data to be inserted in the database. 3) YailList values - List with the data to be inserted in the database. Returns the row ID of the newly inserted row, or -1 if an error occurred.

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22SQLite%22,%20%22name%22:%20%22Insert%22,%20%22output%22:%20true,%20%22param%22:%20%5B%22table%22,%20%22columns%22,%20%22values%22%5D%7D"></div>

| Params | []() |
|--------|------|
|table|<span class="chip chip-text">Text</span>|
|columns|<span class="chip chip-list">List</span>|
|values|<span class="chip chip-list">List</span>|

### Multiple SQL

Execute Multiple SQL Statement asynchronously and returns whether the transaction was successful in the AfterExecution Event Handler. Use it when returned data isn't needed. Parameter: 1 ) List of SQL.

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22SQLite%22,%20%22name%22:%20%22Multiple%20SQL%22,%20%22output%22:%20false,%20%22param%22:%20%5B%22list%22%5D%7D"></div>

| Params | []() |
|--------|------|
|list|<span class="chip chip-list">List</span>|

### Query

Executes pre-compiled QUERY statement with specified parameters. Parameters: 1) String table: Name of the table. 2) YailList columns: List of which columns to return, passing an empty list will return all columns. 3) String selection: Filter declaring which rows to return, formatted as an SQL WHERE clause, passing an empty string will return all rows. 4) YailList selectionArgs: List with the arguments that will replace onto '?' in the selection filter. 5) String groupBy: A filter declaring how to group rows, formatted as an SQL GROUP BY clause (excluding the GROUP BY itself), passing an empty string will cause the row to not be grouped. 6) String having: A filter declare which row groups to include if row grouping is being used, passing an empty string will cause all row groups to be included. 7) String orderBy: How to order the rows, formatted as an SQL ORDER BY clause (excluding the ORDER BY itself), passing an empty string will use the default sort order (unordered). 8) String limit: Limits the number of rows returned by the query, formatted as LIMIT clause, passing an empty string denotes no LIMIT clause. The result query is available in the AfterQuery event handler

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22SQLite%22,%20%22name%22:%20%22Query%22,%20%22output%22:%20false,%20%22param%22:%20%5B%22table%22,%20%22columns%22,%20%22selection%22,%20%22selection%20Args%22,%20%22group%20By%22,%20%22having%22,%20%22order%20By%22,%20%22limit%22%5D%7D"></div>

| Params | []() |
|--------|------|
|table|<span class="chip chip-text">Text</span>|
|columns|<span class="chip chip-list">List</span>|
|selection|<span class="chip chip-text">Text</span>|
|selection Args|<span class="chip chip-list">List</span>|
|group By|<span class="chip chip-text">Text</span>|
|having|<span class="chip chip-text">Text</span>|
|order By|<span class="chip chip-text">Text</span>|
|limit|<span class="chip chip-text">Text</span>|

### Raw Query

Executes the provided rawQuery Statement asynchronously. Returns a YailList with the selected data and number of records in the AfterQuery Event. Parameter: 1) String sql. 2) YailList selectionArgs: List with the arguments that will replace '?' in where clause in the query, to prevent SQL injections

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22SQLite%22,%20%22name%22:%20%22Raw%20Query%22,%20%22output%22:%20false,%20%22param%22:%20%5B%22sql%22,%20%22selection%20Args%22%5D%7D"></div>

| Params | []() |
|--------|------|
|sql|<span class="chip chip-text">Text</span>|
|selection Args|<span class="chip chip-list">List</span>|

### Replace

<span class="chip chip-number">Returns: <i>Number</i></span>

Executes pre-compiled REPLACE OR INSERT INTO statement with specified parameters. Parameters: 1) String table - Name of the table. 2) YailList columns - List with the columns that will contain the data to be replaced in the database. 3) YailList values - List with the data to be replaced in the database. Returns the row ID of the newly replaced row, or -1 if an error occurred.

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22SQLite%22,%20%22name%22:%20%22Replace%22,%20%22output%22:%20true,%20%22param%22:%20%5B%22table%22,%20%22columns%22,%20%22values%22%5D%7D"></div>

| Params | []() |
|--------|------|
|table|<span class="chip chip-text">Text</span>|
|columns|<span class="chip chip-list">List</span>|
|values|<span class="chip chip-list">List</span>|

### Single SQL

Execute a Single SQL Statement asynchronously and returns whether the transaction was successful in the AfterExecution Event Handler. Use it when returned data isn't needed. Parameter: 1) String sql.

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22SQLite%22,%20%22name%22:%20%22Single%20SQL%22,%20%22output%22:%20false,%20%22param%22:%20%5B%22sql%22%5D%7D"></div>

| Params | []() |
|--------|------|
|sql|<span class="chip chip-text">Text</span>|

### Update

<span class="chip chip-number">Returns: <i>Number</i></span>

Executes pre-compiled UPDATE statement with specified parameters. Parameters: 1) String table - Name of the table. 2) YailList columns - List with the columns that will contain the data to be inserted in the database. 3) YailList values - List with the data to be inserted in the database. 4) String whereClause - optional WHERE clause to apply when updating, leave an empty string to update all rows. Include ?s, which will be updated by the values from whereArgs. 5) YailList whereArgs - List with the columns that will contain the data to be updated in the database. Returns the row ID of the newly inserted row, or -1 if an error occurred.

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22SQLite%22,%20%22name%22:%20%22Update%22,%20%22output%22:%20true,%20%22param%22:%20%5B%22table%22,%20%22columns%22,%20%22values%22,%20%22where%20Clause%22,%20%22where%20Args%22%5D%7D"></div>

| Params | []() |
|--------|------|
|table|<span class="chip chip-text">Text</span>|
|columns|<span class="chip chip-list">List</span>|
|values|<span class="chip chip-list">List</span>|
|where Clause|<span class="chip chip-text">Text</span>|
|where Args|<span class="chip chip-list">List</span>|

## Properties

### Return Header

<span style="user-select: none;"><span class="chip chip-boolean">Boolean</span>&#32;<span class="chip chip-boolean">Default: <i>false</i></span>&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;<span class="chip chip-rw">Read</span>&#32;<span class="chip chip-rw">Write</span>&#32;-&#32;<span class="chip chip-bd">Designer</span>&#32;<span class="chip chip-bd">Blocks</span>&#32;</span>

Returns whether the header row should be returned in the result of a Select statement.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22SQLite%22,%20%22name%22:%20%22Return%20Header%22,%20%22getter%22:%20true%7D"></div>
<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22SQLite%22,%20%22name%22:%20%22Return%20Header%22,%20%22getter%22:%20false%7D"></div>

### Suppress Toast

<span style="user-select: none;"><span class="chip chip-boolean">Boolean</span>&#32;<span class="chip chip-boolean">Default: <i>false</i></span>&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;<span class="chip chip-rw">Read</span>&#32;<span class="chip chip-rw">Write</span>&#32;-&#32;<span class="chip chip-bd">Designer</span>&#32;<span class="chip chip-bd">Blocks</span>&#32;</span>

Returns whether Success Toast should be suppressed.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22SQLite%22,%20%22name%22:%20%22Suppress%20Toast%22,%20%22getter%22:%20true%7D"></div>
<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22SQLite%22,%20%22name%22:%20%22Suppress%20Toast%22,%20%22getter%22:%20false%7D"></div>
