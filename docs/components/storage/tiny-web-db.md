# Tiny Web DB

| Category | Requires | Version |
|:--------:|:-------:|:--------:|
|Storage|API 19, Android 4.4 - 4.4.4 KitKat|2|

:mag: {>>Non-visible component<<}

## Overview

A non-visible component that communicates with a web service to store and retrieve information.

## Events

### Got Value

[[Event('Tiny Web DB', 'Got Value', 'tagFromWebDB', 'valueFromWebDB')]]

| Params | []() |
|--------|------|
|tag From Web DB|Text|
|value From Web DB|Any|


Indicates that a GetValue server request has succeeded.

### Value Stored

[[Event('Tiny Web DB', 'Value Stored')]]

Event indicating that a StoreValue server request has succeeded.

### Web Service Error

[[Event('Tiny Web DB', 'Web Service Error', 'message')]]

| Params | []() |
|--------|------|
|message|Text|


Indicates that the communication with the Web service signaled an error.

## Methods

### Get Value

[[Method('Tiny Web DB', 'Get Value', False, 'tag')]]

| Params | []() |
|--------|------|
|tag|Text|


GetValue asks the Web service to get the value stored under the given tag.

### Store Value

[[Method('Tiny Web DB', 'Store Value', False, 'tag', 'valueToStore')]]

| Params | []() |
|--------|------|
|tag|Text|
|value To Store|Any|


Asks the Web service to store the given value under the given tag.

## Properties

### Service URL

<span class="chip chip-text">Text</span> <span class="chip chip-text">Default: <i>http://tinywebdb.builder.makeroid.io</i></span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span> 

Returns the URL of the web service database.

[[PropertyBlockGetterAndSetter('Tiny Web DB', 'Service URL')]]