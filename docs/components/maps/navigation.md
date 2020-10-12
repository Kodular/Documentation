# Navigation

| Category | Requires | Version |
|:--------:|:-------:|:--------:|
|**Maps**|<span class="chip chip-any">Vaild Api Key</span>|<span class="chip chip-number">1</span>|

## Overview

Generate directions between two locations using a service called hrrps://openrouteservice.org . Note: For this component to work correctly, provide a vaild API key from that service.

??? example "Permissions"
    

## Events

### Got Directions

Triggered when the Openrouteservice returns the directions.



| Params | []() |
|--------|------|
|directions|<span class="chip chip-number">-</span>|
|points|<span class="chip chip-number">-</span>|
|distance|<span class="chip chip-number">Number</span>|
|duration|<span class="chip chip-number">Number</span>|

## Methods

### Request Directions

Requests directions from routing service.


## Properties

### API Key

<span style="user-select: none; white-space:pre-wrap;"><span class="chip chip-text">Text</span> :heavy_minus_sign: <span class="chip chip-rw">Write</span>  - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span></span>

API Key for Open Route Service

### End Latitude
  
<span style="user-select: none; white-space:pre-wrap;"><span class="chip chip-number">Number</span> </span> :heavy_minus_sign: <span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span>  - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span></span>

The Latitude of End Location.

### End Location

<span style="user-select: none; white-space:pre-wrap;"><span class="chip chip-number">Number</span> </span> :heavy_minus_sign: <span class="chip chip-rw">Write</span>  - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span></span>

Set the End Location.

### End Longitude

<span style="user-select: none; white-space:pre-wrap;"><span class="chip chip-number">Number</span> </span> :heavy_minus_sign: <span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span>  - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span></span>

The Longitude of end Location.

### Language

<span style="user-select: none; white-space:pre-wrap;"><span class="chip chip-number">Number</span> </span> :heavy_minus_sign: <span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span>  - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span></span>

The language to use for textual directions.

### Response Content

<span style="user-select: none; white-space:pre-wrap;"><span class="chip chip-dictonaries">Dictonaries</span> </span> :heavy_minus_sign: <span class="chip chip-rw">Read</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span></span>

Content of the last response as a directory.


### Start Latitude

<span style="user-select: none; white-space:pre-wrap;"><span class="chip chip-number">Number</span> </span> :heavy_minus_sign: <span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span>  - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span></span>

The latitude of the start location.

### Start Location

<span style="user-select: none; white-space:pre-wrap;"><span class="chip chip-number">Number</span> </span> :heavy_minus_sign: <span class="chip chip-rw">Write</span>  - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span></span>

Set the start location.

### Start Longitude

<span style="user-select: none; white-space:pre-wrap;"><span class="chip chip-number">Number</span> </span> :heavy_minus_sign: <span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span>  - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span></span>

The longitude of start location.

### Transportation Method

<span style="user-select: none; white-space:pre-wrap;"><span class="chip chip-number">Number</span> </span> :heavy_minus_sign: <span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span>  - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span></span>

The transportation method used for determining the route.