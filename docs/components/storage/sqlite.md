# SQLite

| Category | Requires | Version |
|:--------:|:-------:|:--------:|
|**Storage**|<span class="chip chip-any">API 19, Android 4.4 - 4.4.4 KitKat</span>|<span class="chip chip-number">1</span>|

:mag: {>>Non-visible component<<}

## Overview

A non-visible component that accesses the application''s SQLite database.   
Component credits\: Carlos Pedroza

## Events

### After Execution

Event handler after the SQL statement is executed, returns whether the execution was succesful.

[[Event('SQLite', 'After Execution', 'wasExecuted')]]

| Params | []() |
|--------|------|
|was Executed|<span class="chip chip-boolean">Boolean</span>|


### After Query

Event handler after the RawQuery or Query is executed and returns a list with the selected data and number of records.

[[Event('SQLite', 'After Query', 'result', 'numberOfRecords')]]

| Params | []() |
|--------|------|
|result|<span class="chip chip-list">List</span>|
|number Of Records|<span class="chip chip-number">Number</span>|


### Error Occurred

Event handler when an error ocurred, returns a string with a message from the error.

[[Event('SQLite', 'Error Occurred', 'message')]]

| Params | []() |
|--------|------|
|message|<span class="chip chip-text">Text</span>|


## Methods

### Clear Database

Clears the database to version 1. Use only while developing, this shouldn't be use on production.

[[Method('SQLite', 'Clear Database', False)]]

### Delete

<span class="chip chip-number">Returns: <i>Number</i></span> 

Executes pre-compiled DELETE statement with specified parameters. Parameters: 1) String table - Name of the table. 2) String whereClause - Optional WHERE clause to apply when deleting (Example: 'ID = ?'), pasing an empty a string will delete all rows. 3) List whereArgs - List with arguments for the WHERE clause. These arguments will be replaced by '?' in the whereClause. Returns the number of rows affected if a whereClause is passed in, 0 otherwise.

[[Method('SQLite', 'Delete', True, 'table', 'whereClause', 'whereArgs')]]

| Params | []() |
|--------|------|
|table|<span class="chip chip-text">Text</span>|
|where Clause|<span class="chip chip-text">Text</span>|
|where Args|<span class="chip chip-list">List</span>|


### Get Path

<span class="chip chip-text">Returns: <i>Text</i></span> 

Returns the path to the database

[[Method('SQLite', 'Get Path', True)]]

### Insert

<span class="chip chip-number">Returns: <i>Number</i></span> 

Executes pre-compiled INSERT statement with specified parameters. Parameters: 1) String table - Name of the table. 2) YailList columns - List with the columns that will contain the data to be inserted in the database. 3) YailList values - List with the data to be inserted in the database. Returns the row ID of the newly inserted row, or -1 if an error occurred.

[[Method('SQLite', 'Insert', True, 'table', 'columns', 'values')]]

| Params | []() |
|--------|------|
|table|<span class="chip chip-text">Text</span>|
|columns|<span class="chip chip-list">List</span>|
|values|<span class="chip chip-list">List</span>|


### Multiple SQL

Execute Multiple SQL Statement asynchronously and returns whether the transaction was successful in the AfterExecution Event Handler. Use it when returned data isn't needed. Parameter: 1 ) List of SQL.

[[Method('SQLite', 'Multiple SQL', False, 'list')]]

| Params | []() |
|--------|------|
|list|<span class="chip chip-list">List</span>|


### Query

Executes pre-compiled QUERY statement with specified parameters. Parameters: 1) String table: Name of the table. 2) YailList columns: List of which columns to return, passing an empty list will return all columns. 3) String selection: Filter declaring which rows to return, formatted as an SQL WHERE clause, passing an empty string will return all rows. 4) YailList selectionArgs: List with the arguments that will replace onto '?' in the selection filter. 5) String groupBy: A filter declaring how to group rows, formatted as an SQL GROUP BY clause (excluding the GROUP BY itself), passing an empty string will cause the row to not be grouped. 6) String having: A filter declare which row groups to include if row grouping is being used, passing an empty string will cause all row groups to be included. 7) String orderBy: How to order the rows, formatted as an SQL ORDER BY clause (excluding the ORDER BY itself), passing an empty string will use the default sort order (unordered). 8) String limit: Limits the number of rows returned by the query, formatted as LIMIT clause, passing an empty string denotes no LIMIT clause. The result query is available in the AfterQuery event handler

[[Method('SQLite', 'Query', False, 'table', 'columns', 'selection', 'selectionArgs', 'groupBy', 'having', 'orderBy', 'limit')]]

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

[[Method('SQLite', 'Raw Query', False, 'sql', 'selectionArgs')]]

| Params | []() |
|--------|------|
|sql|<span class="chip chip-text">Text</span>|
|selection Args|<span class="chip chip-list">List</span>|


### Replace

<span class="chip chip-number">Returns: <i>Number</i></span> 

Executes pre-compiled REPLACE OR INSERT INTO statement with specified parameters. Parameters: 1) String table - Name of the table. 2) YailList columns - List with the columns that will contain the data to be replaced in the database. 3) YailList values - List with the data to be replaced in the database. Returns the row ID of the newly replaced row, or -1 if an error occurred.

[[Method('SQLite', 'Replace', True, 'table', 'columns', 'values')]]

| Params | []() |
|--------|------|
|table|<span class="chip chip-text">Text</span>|
|columns|<span class="chip chip-list">List</span>|
|values|<span class="chip chip-list">List</span>|


### Single SQL

Execute a Single SQL Statement asynchronously and returns whether the transaction was successful in the AfterExecution Event Handler. Use it when returned data isn't needed. Parameter: 1) String sql.

[[Method('SQLite', 'Single SQL', False, 'sql')]]

| Params | []() |
|--------|------|
|sql|<span class="chip chip-text">Text</span>|


### Update

<span class="chip chip-number">Returns: <i>Number</i></span> 

Executes pre-compiled UPDATE statement with specified parameters. Parameters: 1) String table - Name of the table. 2) YailList columns - List with the columns that will contain the data to be inserted in the database. 3) YailList values - List with the data to be inserted in the database. 4) String whereClause - optional WHERE clause to apply when updating, leave an empty string to update all rows. Include ?s, which will be updated by the values from whereArgs. 5) YailList whereArgs - List with the columns that will contain the data to be updated in the database. Returns the row ID of the newly inserted row, or -1 if an error occurred.

[[Method('SQLite', 'Update', True, 'table', 'columns', 'values', 'whereClause', 'whereArgs')]]

| Params | []() |
|--------|------|
|table|<span class="chip chip-text">Text</span>|
|columns|<span class="chip chip-list">List</span>|
|values|<span class="chip chip-list">List</span>|
|where Clause|<span class="chip chip-text">Text</span>|
|where Args|<span class="chip chip-list">List</span>|


## Properties

### Return Header

<span class="chip chip-boolean">Boolean</span> <span class="chip chip-boolean">Default: <i>false</i></span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span> 

Returns whether the header row should be returned in the result of a Select statement.

[[PropertyBlockGetterAndSetter('SQLite', 'Return Header')]]

### Suppress Toast

<span class="chip chip-boolean">Boolean</span> <span class="chip chip-boolean">Default: <i>false</i></span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span> 

Returns whether Success Toast should be suppressed.

[[PropertyBlockGetterAndSetter('SQLite', 'Suppress Toast')]]