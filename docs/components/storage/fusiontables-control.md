# Fusiontables Control

| Category | Requires | Version |
|:--------:|:-------:|:--------:|
|Storage|API 19, Android 4.4 - 4.4.4 KitKat|4|

:mag: {>>Non-visible component<<}

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

## Events

### Got Result

[[Event('Fusiontables Control', 'Got Result', 'result')]]

| Params | []() |
|--------|------|
|result|Text|


Indicates that the Fusion Tables query has finished processing, with a result. The result of the query will generally be returned in CSV format, and can be converted to list format using the "list from csv table" or "list from csv row" blocks.

## Methods

### Do Query

:warning: ==**Deprecated**==

[[Method('Fusiontables Control', 'Do Query', False)]]

DEPRECATED. This block is deprecated as of the end of 2012. Use SendQuery.

### Forget Login

[[Method('Fusiontables Control', 'Forget Login', False)]]

Forget end-users login credentials. Has no effect on service authentication

### Get Rows

[[Method('Fusiontables Control', 'Get Rows', False, 'tableId', 'columns')]]

| Params | []() |
|--------|------|
|table ID|Text|
|columns|Text|


Gets all the rows from a specified fusion table. The tableId field is the id of therequired fusion table. The columns field is a comma-separeted list of the columns to retrieve.

### Get Rows With Conditions

[[Method('Fusiontables Control', 'Get Rows With Conditions', False, 'tableId', 'columns', 'conditions')]]

| Params | []() |
|--------|------|
|table ID|Text|
|columns|Text|
|conditions|Text|


Gets all the rows from a fusion table that meet certain conditions. The tableId field isthe id of the required fusion table. The columns field is a comma-separated list of the columns toretrieve. The conditions field specifies what rows to retrieve from the table, for example the rows in whicha particular column value is not null.

### Insert Row

[[Method('Fusiontables Control', 'Insert Row', False, 'tableId', 'columns', 'values')]]

| Params | []() |
|--------|------|
|table ID|Text|
|columns|Text|
|values|Text|


Inserts a row into the specified fusion table. The tableId field is the id of thefusion table. The columns is a comma-separated list of the columns to insert values into. The values field specifies what values to insert into each column.

### Send Query

[[Method('Fusiontables Control', 'Send Query', False)]]

Send the query to the Fusiontables server.

## Properties

### API Key

<span class="chip chip-text">Text</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span> 

Setter for the app developer's API key.

[[PropertyBlockGetterAndSetter('Fusiontables Control', 'API Key')]]

### Key File

<span class="chip chip-text">Text</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span> 

Specifies the path of the private key file. This key file is used to get access to the FusionTables API.

[[PropertyBlockGetterAndSetter('Fusiontables Control', 'Key File')]]

### Loading Dialog Message

<span class="chip chip-text">Text</span> <span class="chip chip-text">Default: <i>Please wait loading...</i></span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span> 

Setter for the loading dialog's message.

[[PropertyBlockGetterAndSetter('Fusiontables Control', 'Loading Dialog Message')]]

### Query

<span class="chip chip-text">Text</span> <span class="chip chip-text">Default: <i>show tables</i></span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span> 

The query to send to the Fusion Tables API. 

For legal query formats and examples, see the <a href="https://developers.google.com/fusiontables/docs/v2/getting_started" target="_blank">Fusion Tables API v2.0 reference manual</a>.

 

Note that you do not need to worry about UTF-encoding the query. But you do need to make sure it follows the syntax described in the reference manual, which means that things like capitalization for names of columns matters, and that single quotes need to be used around column names if there are spaces in them.

[[PropertyBlockGetterAndSetter('Fusiontables Control', 'Query')]]

### Service Account Email

<span class="chip chip-text">Text</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span> 

The Service Account Email Address when service account authentication is in use.

[[PropertyBlockGetterAndSetter('Fusiontables Control', 'Service Account Email')]]

### Show Loading Dialog

<span class="chip chip-boolean">Boolean</span> <span class="chip chip-boolean">Default: <i>True</i></span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span> 

Setter for the loading dialog's visibility.

[[PropertyBlockGetterAndSetter('Fusiontables Control', 'Show Loading Dialog')]]

### Use Service Authentication

<span class="chip chip-boolean">Boolean</span> <span class="chip chip-boolean">Default: <i>False</i></span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span> 

Indicates whether a service account should be used for authentication

[[PropertyBlockGetterAndSetter('Fusiontables Control', 'Use Service Authentication')]]