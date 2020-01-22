# Fusiontables Control

| Category | Version | Requires |
|:--------:|:-------:|:--------:|
|Storage|4|API 19 - Android 4.4 - 4.4.4 KitKat|

:mag: {>>Non-visible component<<}

## Overview

_<p>A non-visible component that communicates with Google Fusion Tables. Fusion Tables let you store, share, query and visualize data tables; this component lets you query, create, and modify these tables.</p> <p>This component uses the <a href="https://developers.google.com/fusiontables/docs/v2/getting_started" target="_blank">Fusion Tables API V2.0</a>. <p>Applications using Fusion Tables must authentication to Google's servers. There are two ways this can be done. The first way uses an API Key which you the developer obtain (see below). With this approach end-users must also login to access a Fusion Table. The second approach is to use a Service Account. With this approach you create credentials and a special "Service Account Email Address" which you obtain from the <a href="https://code.google.com/apis/console/" target="_blank">Google APIs Console</a>. You then tell the Fusion Table Control the name of the Service Account Email address and upload the secret key as an asset to your application and set the KeyFile property to point at this file. Finally you check the "UseServiceAuthentication" checkbox in the designer. When using a Service Account, end-users do not need to login to use Fusion Tables, your service account authenticates all access.</p> <p>To get an API key, follow these instructions.</p> <ol><li>Go to your <a href="https://code.google.com/apis/console/" target="_blank">Google APIs Console</a> and login if necessary.</li><li>Select the <i>Services</i> item from the menu on the left.</li><li>Choose the <i>Fusiontables</i> service from the list provided and turn it on.</li><li>Go back to the main menu and select the <i>API Access</i> item. </li></ol><p>Your API Key will be near the bottom of that pane in the section called "Simple API Access".You will have to provide that key as the value for the <i>ApiKey</i> property in your Fusiontables app.</p><p>Once you have an API key, set the value of the <i>Query</i> property to a valid Fusiontables SQL query and call <i>SendQuery</i> to execute the query.  App Inventor will send the query to the Fusion Tables server and the <i>GotResult</i> block will fire when a result is returned from the server.Query results will be returned in CSV format, and can be converted to list format using the "list from csv table" or "list from csv row" blocks.</p><p>Note that you do not need to worry about UTF-encoding the query. But you do need to make sure the query follows the syntax described in <a href="https://developers.google.com/fusiontables/docs/v2/getting_started" target="_blank">the reference manual</a>, which means that things like capitalization for names of columns matters, and that single quotes must be used around column names if there are spaces in them.</p>_

## Properties

### API Key

<small>Available as Common Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Fusiontables Control', 'API Key')]]

| Type |
|:----:|
|text|

Setter for the app developer's API key.

### Key File

<small>Available as Common Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Fusiontables Control', 'Key File')]]

| Type |
|:----:|
|text|

Specifies the path of the private key file.  This key file is used to get access to the FusionTables API.

### Loading Dialog Message

<small>Available as Common Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Fusiontables Control', 'Loading Dialog Message')]]

| Type | Default |
|:----:|:-------:|
|text|Please wait loading...|

Setter for the loading dialog's message.

### Query

<small>Available as Common Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Fusiontables Control', 'Query')]]

| Type | Default |
|:----:|:-------:|
|text|show tables|

The query to send to the Fusion Tables API. <p>For legal query formats and examples, see the <a href="https://developers.google.com/fusiontables/docs/v2/getting_started" target="_blank">Fusion Tables API v2.0 reference manual</a>.</p> <p>Note that you do not need to worry about UTF-encoding the query. But you do need to make sure it follows the syntax described in the reference manual, which means that things like capitalization for names of columns matters, and that single quotes need to be used around column names if there are spaces in them.</p>

### Service Account Email

<small>Available as Common Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Fusiontables Control', 'Service Account Email')]]

| Type |
|:----:|
|text|

The Service Account Email Address when service account authentication is in use.

### Show Loading Dialog

<small>Available as Common Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Fusiontables Control', 'Show Loading Dialog')]]

| Type | Default |
|:----:|:-------:|
|boolean|True|

Setter for the loading dialog's visibility.

### Use Service Authentication

<small>Available as Common Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Fusiontables Control', 'Use Service Authentication')]]

| Type | Default |
|:----:|:-------:|
|boolean|False|

Indicates whether a service account should be used for authentication