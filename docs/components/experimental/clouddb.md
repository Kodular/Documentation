# CloudDB

| Category | Version | Requires |
|:--------:|:-------:|:--------:|
|Experimental|1|API 19 - Android 4.4 - 4.4.4 KitKat|

:mag: {>>Non-visible component<<}

## Overview

_Non-visible component that communicates with CloudDB server to store and retrieve information._

## Properties

### Default Redis Server

<small>Available as Common Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('CloudDB', 'Default Redis Server')]]

| Type |
|:----:|
|text|

The Default Redis Server to use.

### Project ID

<small>Available as Common Property</small>

:eyes: Read-Only property
[[PropertyBlockGetter('CloudDB', 'Project ID')]]

| Type |
|:----:|
|text|

Gets the ProjectID for this CloudDB project.

### Redis Port

<small>Available as Common Property</small>

:eyes: Read-Only property
[[PropertyBlockGetter('CloudDB', 'Redis Port')]]

| Type | Default |
|:----:|:-------:|
|number|6381|

The Redis Server port to use. Defaults to 6381

### Redis Server

<small>Available as Common Property</small>

:eyes: Read-Only property
[[PropertyBlockGetter('CloudDB', 'Redis Server')]]

| Type | Default |
|:----:|:-------:|
|text|DEFAULT|

The Redis Server to use to store data. A setting of "DEFAULT" means that the MIT server will be used.

### Token

<small>Available as Common Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('CloudDB', 'Token')]]

| Type |
|:----:|
|text|

This field contains the authentication token used to login to the backed Redis server. For the "DEFAULT" server, do not edit this value, the system will fill it in for you. A system administrator may also provide a special value to you which can be used to share data between multiple projects from multiple people. If using your own Redis server, set a password in the server's config and enter it here.

### Use SSL

<small>Available as Common Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('CloudDB', 'Use SSL')]]

| Type | Default |
|:----:|:-------:|
|boolean|True|

Set to true to use SSL to talk to CloudDB/Redis server. This should be set to True for the "DEFAULT" server.