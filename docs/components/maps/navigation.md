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

<div class="block" ai2-block="event" value=%22%7B%22componentName%22%3A%20%22Navigation%22%2C%20%22name%22%3A%20%22Got%20Directions%22%2C%20%22param%22%3A%20%5B%22directions%22%2C%22points%22%2C%22distance%22%2C%22duration%22%5D%7D%22></div>

| Params | []() |
|--------|------|
|directions|<span class="chip chip-number">-</span>|
|points|<span class="chip chip-number">-</span>|
|distance|<span class="chip chip-number">Number</span>|
|duration|<span class="chip chip-number">Number</span>|

## Methods

### Request Directions

Requests directions from routing service.

<div class="block" ai2-block="method" value=%22%7B%22componentName%22%3A%20%22Navigation%22%2C%20%22name%22%3A%20%22Request%20Direction%22%2C%20%22output%22%3A%20false%2C%20%22param%22%3A%20%5B%5D%7D%22></div>

## Properties

### API Key

<span style="user-select: none; white-space:pre-wrap;"><span class="chip chip-text">Text</span> :heavy_minus_sign: <span class="chip chip-rw">Write</span>  - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span></span>

API Key for Open Route Service

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22%3A%20%22Navigation%22%2C%20%22name%22%3A%20%22API%20Key%22%2C%20%22getter%22%3A%20false%7D"></div>

### End Latitude
  
<span style="user-select: none; white-space:pre-wrap;"><span class="chip chip-number">Number</span> </span> :heavy_minus_sign: <span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span>  - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span></span>

The Latitude of End Location.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22%3A%20%22Navigation%22%2C%20%22name%22%3A%20%22End%20Latitude%22%2C%20%22getter%22%3A%20true%7D"></div>
<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22%3A%20%22Navigation%22%2C%20%22name%22%3A%20%22End%20Latitude%22%2C%20%22getter%22%3A%20false%7D"></div>

### End Location

<span style="user-select: none; white-space:pre-wrap;"><span class="chip chip-number">Number</span> </span> :heavy_minus_sign: <span class="chip chip-rw">Write</span>  - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span></span>

Set the End Location.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22%3A%20%22Navigation%22%2C%20%22name%22%3A%20%22End%20Location%22%2C%20%22getter%22%3A%20false%7D"></div>

### End Longitude

<span style="user-select: none; white-space:pre-wrap;"><span class="chip chip-number">Number</span> </span> :heavy_minus_sign: <span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span>  - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span></span>

The Longitude of end Location.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22%3A%20%22Navigation%22%2C%20%22name%22%3A%20%22End%20Longitude%22%2C%20%22getter%22%3A%20true%7D"></div>
<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22%3A%20%22Navigation%22%2C%20%22name%22%3A%20%22End%20Longitude%22%2C%20%22getter%22%3A%20false%7D"></div>

### Language

<span style="user-select: none; white-space:pre-wrap;"><span class="chip chip-number">Number</span> </span> :heavy_minus_sign: <span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span>  - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span></span>

The language to use for textual directions.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22%3A%20%22Navigation%22%2C%20%22name%22%3A%20%22Language%22%2C%20%22getter%22%3A%20true%7D%0A"></div>

### Response Content

<span style="user-select: none; white-space:pre-wrap;"><span class="chip chip-dictonaries">Dictonaries</span> </span> :heavy_minus_sign: <span class="chip chip-rw">Read</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span></span>

Content of the last response as a directory.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22%3A%20%22Navigation%22%2C%20%22name%22%3A%20%22Response%20Content%22%2C%20%22getter%22%3A%20true%7D%0A"></div>

### Start Latitude

<span style="user-select: none; white-space:pre-wrap;"><span class="chip chip-number">Number</span> </span> :heavy_minus_sign: <span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span>  - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span></span>

The latitude of the start location.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22%3A%20%22Navigation%22%2C%20%22name%22%3A%20%22Start%20Latitude%22%2C%20%22getter%22%3A%20true%7D"></div>
<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22%3A%20%22Navigation%22%2C%20%22name%22%3A%20%22Start%20Latitude%22%2C%20%22getter%22%3A%20false%7D"></div>

### Start Location

<span style="user-select: none; white-space:pre-wrap;"><span class="chip chip-number">Number</span> </span> :heavy_minus_sign: <span class="chip chip-rw">Write</span>  - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span></span>

Set the start location.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22%3A%20%22Navigation%22%2C%20%22name%22%3A%20%22Start%20Location%22%2C%20%22getter%22%3A%20false%7D"></div>

### Start Longitude

<span style="user-select: none; white-space:pre-wrap;"><span class="chip chip-number">Number</span> </span> :heavy_minus_sign: <span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span>  - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span></span>

The longitude of start location.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22%3A%20%22Navigation%22%2C%20%22name%22%3A%20%22Start%20Longitude%22%2C%20%22getter%22%3A%20true%7D"></div>
<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22%3A%20%22Navigation%22%2C%20%22name%22%3A%20%22Start%20Longitude%22%2C%20%22getter%22%3A%20false%7D"></div>

### Transportation Method

<span style="user-select: none; white-space:pre-wrap;"><span class="chip chip-number">Number</span> </span> :heavy_minus_sign: <span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span>  - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span></span>

The transportation method used for determining the route.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22%3A%20%22Navigation%22%2C%20%22name%22%3A%20%22Transportation%20Method%22%2C%20%22getter%22%3A%20true%7D"></div>
<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22%3A%20%22Navigation%22%2C%20%22name%22%3A%20%22Transportation%20Method%22%2C%20%22getter%22%3A%20false%7D"></div>
