# Fusiontables Control

| Category | Requires | Version |
|:--------:|:-------:|:--------:|
|**Storage**|<span class="chip chip-any">API 19, Android 4.4 - 4.4.4 KitKat</span>|<span class="chip chip-number">4</span>|

:mag: {>>Non-Visible component<<}

## Overview

A non-visible component that communicates with Google Fusion Tables. Fusion Tables let you store, share, query and visualize data tables; this component lets you query, create, and modify these tables.

 

This component uses the <a href="https://developers.google.com/fusiontables/docs/v2/getting_started" target="_blank">Fusion Tables API V2.0</a>. 

Applications using Fusion Tables must authentication to Google's servers. There are two ways this can be done. The first way uses an API Key which you the developer obtain (see below). With this approach end-users must also login to access a Fusion Table. The second approach is to use a Service Account. With this approach you create credentials and a special "Service Account Email Address" which you obtain from the <a href="https://code.google.com/apis/console/" target="_blank">Google APIs Console</a>. You then tell the Fusion Table Control the name of the Service Account Email address and upload the secret key as an asset to your application and set the KeyFile property to point at this file. Finally you check the "UseServiceAuthentication" checkbox in the designer. When using a Service Account, end-users do not need to login to use Fusion Tables, your service account authenticates all access.

 

To get an API key, follow these instructions.

 

1.   Go to your <a href="https://code.google.com/apis/console/" target="_blank">Google APIs Console</a> and login if necessary.
2.   Select the _Services_ item from the menu on the left.
3.   Choose the _Fusiontables_ service from the list provided and turn it on.
4.   Go back to the main menu and select the _API Access_ item. 

Your API Key will be near the bottom of that pane in the section called "Simple API Access".You will have to provide that key as the value for the _ApiKey_ property in your Fusiontables app.

Once you have an API key, set the value of the _Query_ property to a valid Fusiontables SQL query and call _SendQuery_ to execute the query. App Inventor will send the query to the Fusion Tables server and the _GotResult_ block will fire when a result is returned from the server.Query results will be returned in CSV format, and can be converted to list format using the "list from csv table" or "list from csv row" blocks.

Note that you do not need to worry about UTF-encoding the query. But you do need to make sure the query follows the syntax described in <a href="https://developers.google.com/fusiontables/docs/v2/getting_started" target="_blank">the reference manual</a>, which means that things like capitalization for names of columns matters, and that single quotes must be used around column names if there are spaces in them.

??? example "Permissions"
    * [android.permission.GET_ACCOUNTS](https://developer.android.com/reference/android/Manifest.permission.html#GET_ACCOUNTS)
    * [android.permission.INTERNET](https://developer.android.com/reference/android/Manifest.permission.html#INTERNET)
    * [android.permission.USE_CREDENTIALS](https://developer.android.com/reference/android/Manifest.permission.html#USE_CREDENTIALS)
    * [android.permission.ACCOUNT_MANAGER](https://developer.android.com/reference/android/Manifest.permission.html#ACCOUNT_MANAGER)
    * [android.permission.READ_EXTERNAL_STORAGE](https://developer.android.com/reference/android/Manifest.permission.html#READ_EXTERNAL_STORAGE)
    * [android.permission.MANAGE_ACCOUNTS](https://developer.android.com/reference/android/Manifest.permission.html#MANAGE_ACCOUNTS)
    * [android.permission.WRITE_EXTERNAL_STORAGE](https://developer.android.com/reference/android/Manifest.permission.html#WRITE_EXTERNAL_STORAGE)

## Events

### Got Result

Indicates that the Fusion Tables query has finished processing, with a result. The result of the query will generally be returned in CSV format, and can be converted to list format using the "list from csv table" or "list from csv row" blocks.

<div class="block" ai2-block="event" not-rendered="true" value="%7B%22componentName%22:%20%22Fusiontables%20Control%22,%20%22name%22:%20%22Got%20Result%22,%20%22param%22:%20%5B%22result%22%5D%7D"></div>

| Params | []() |
|--------|------|
|result|<span class="chip chip-text">Text</span>|

## Methods

### Do Query

:warning: ==**Deprecated**==

DEPRECATED. This block is deprecated as of the end of 2012. Use SendQuery.

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22Fusiontables%20Control%22,%20%22name%22:%20%22Do%20Query%22,%20%22output%22:%20false,%20%22param%22:%20%5B%5D%7D"></div>

### Forget Login

Forget end-users login credentials. Has no effect on service authentication

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22Fusiontables%20Control%22,%20%22name%22:%20%22Forget%20Login%22,%20%22output%22:%20false,%20%22param%22:%20%5B%5D%7D"></div>

### Get Rows

Gets all the rows from a specified fusion table. The tableId field is the id of therequired fusion table. The columns field is a comma-separeted list of the columns to retrieve.

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22Fusiontables%20Control%22,%20%22name%22:%20%22Get%20Rows%22,%20%22output%22:%20false,%20%22param%22:%20%5B%22table%20ID%22,%20%22columns%22%5D%7D"></div>

| Params | []() |
|--------|------|
|table ID|<span class="chip chip-text">Text</span>|
|columns|<span class="chip chip-text">Text</span>|

### Get Rows With Conditions

Gets all the rows from a fusion table that meet certain conditions. The tableId field isthe id of the required fusion table. The columns field is a comma-separated list of the columns toretrieve. The conditions field specifies what rows to retrieve from the table, for example the rows in whicha particular column value is not null.

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22Fusiontables%20Control%22,%20%22name%22:%20%22Get%20Rows%20With%20Conditions%22,%20%22output%22:%20false,%20%22param%22:%20%5B%22table%20ID%22,%20%22columns%22,%20%22conditions%22%5D%7D"></div>

| Params | []() |
|--------|------|
|table ID|<span class="chip chip-text">Text</span>|
|columns|<span class="chip chip-text">Text</span>|
|conditions|<span class="chip chip-text">Text</span>|

### Insert Row

Inserts a row into the specified fusion table. The tableId field is the id of thefusion table. The columns is a comma-separated list of the columns to insert values into. The values field specifies what values to insert into each column.

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22Fusiontables%20Control%22,%20%22name%22:%20%22Insert%20Row%22,%20%22output%22:%20false,%20%22param%22:%20%5B%22table%20ID%22,%20%22columns%22,%20%22values%22%5D%7D"></div>

| Params | []() |
|--------|------|
|table ID|<span class="chip chip-text">Text</span>|
|columns|<span class="chip chip-text">Text</span>|
|values|<span class="chip chip-text">Text</span>|

### Send Query

Send the query to the Fusiontables server.

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22Fusiontables%20Control%22,%20%22name%22:%20%22Send%20Query%22,%20%22output%22:%20false,%20%22param%22:%20%5B%5D%7D"></div>

## Properties

### API Key

<span style="user-select: none; white-space:pre-wrap;"><span class="chip chip-text">Text</span>:heavy_minus_sign:<span class="chip chip-rw">Read</span><span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span><span class="chip chip-bd">Blocks</span></span>

Setter for the app developer's API key.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Fusiontables%20Control%22,%20%22name%22:%20%22API%20Key%22,%20%22getter%22:%20true%7D"></div>
<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Fusiontables%20Control%22,%20%22name%22:%20%22API%20Key%22,%20%22getter%22:%20false%7D"></div>

### Key File

<span style="user-select: none; white-space:pre-wrap;"><span class="chip chip-text">Text</span>:heavy_minus_sign:<span class="chip chip-rw">Read</span><span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span><span class="chip chip-bd">Blocks</span></span>

Specifies the path of the private key file. This key file is used to get access to the FusionTables API.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Fusiontables%20Control%22,%20%22name%22:%20%22Key%20File%22,%20%22getter%22:%20true%7D"></div>
<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Fusiontables%20Control%22,%20%22name%22:%20%22Key%20File%22,%20%22getter%22:%20false%7D"></div>

### Loading Dialog Message

<span style="user-select: none; white-space:pre-wrap;"><span class="chip chip-text">Text</span><span class="chip chip-text">Default: <i>Please wait loading...</i></span>:heavy_minus_sign:<span class="chip chip-rw">Read</span><span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span><span class="chip chip-bd">Blocks</span></span>

Setter for the loading dialog's message.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Fusiontables%20Control%22,%20%22name%22:%20%22Loading%20Dialog%20Message%22,%20%22getter%22:%20true%7D"></div>
<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Fusiontables%20Control%22,%20%22name%22:%20%22Loading%20Dialog%20Message%22,%20%22getter%22:%20false%7D"></div>

### Query

<span style="user-select: none; white-space:pre-wrap;"><span class="chip chip-text">Text</span><span class="chip chip-text">Default: <i>show tables</i></span>:heavy_minus_sign:<span class="chip chip-rw">Read</span><span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span><span class="chip chip-bd">Blocks</span></span>

The query to send to the Fusion Tables API. 

For legal query formats and examples, see the <a href="https://developers.google.com/fusiontables/docs/v2/getting_started" target="_blank">Fusion Tables API v2.0 reference manual</a>.

 

Note that you do not need to worry about UTF-encoding the query. But you do need to make sure it follows the syntax described in the reference manual, which means that things like capitalization for names of columns matters, and that single quotes need to be used around column names if there are spaces in them.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Fusiontables%20Control%22,%20%22name%22:%20%22Query%22,%20%22getter%22:%20true%7D"></div>
<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Fusiontables%20Control%22,%20%22name%22:%20%22Query%22,%20%22getter%22:%20false%7D"></div>

### Service Account Email

<span style="user-select: none; white-space:pre-wrap;"><span class="chip chip-text">Text</span>:heavy_minus_sign:<span class="chip chip-rw">Read</span><span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span><span class="chip chip-bd">Blocks</span></span>

The Service Account Email Address when service account authentication is in use.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Fusiontables%20Control%22,%20%22name%22:%20%22Service%20Account%20Email%22,%20%22getter%22:%20true%7D"></div>
<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Fusiontables%20Control%22,%20%22name%22:%20%22Service%20Account%20Email%22,%20%22getter%22:%20false%7D"></div>

### Show Loading Dialog

<span style="user-select: none; white-space:pre-wrap;"><span class="chip chip-boolean">Boolean</span><span class="chip chip-boolean">Default: <i>True</i></span>:heavy_minus_sign:<span class="chip chip-rw">Read</span><span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span><span class="chip chip-bd">Blocks</span></span>

Setter for the loading dialog's visibility.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Fusiontables%20Control%22,%20%22name%22:%20%22Show%20Loading%20Dialog%22,%20%22getter%22:%20true%7D"></div>
<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Fusiontables%20Control%22,%20%22name%22:%20%22Show%20Loading%20Dialog%22,%20%22getter%22:%20false%7D"></div>

### Use Service Authentication

<span style="user-select: none; white-space:pre-wrap;"><span class="chip chip-boolean">Boolean</span><span class="chip chip-boolean">Default: <i>False</i></span>:heavy_minus_sign:<span class="chip chip-rw">Read</span><span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span><span class="chip chip-bd">Blocks</span></span>

Indicates whether a service account should be used for authentication

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Fusiontables%20Control%22,%20%22name%22:%20%22Use%20Service%20Authentication%22,%20%22getter%22:%20true%7D"></div>
<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Fusiontables%20Control%22,%20%22name%22:%20%22Use%20Service%20Authentication%22,%20%22getter%22:%20false%7D"></div>
