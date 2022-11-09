# Navigation

{>> Non-Visible component<<}

| Category | Requires | Version |
|:--------:|:-------:|:--------:|
|**Maps**|<span class="chip chip-any">API 21, Android 5.0 Lollipop</span>|<span class="chip chip-number">2</span>|

## Overview

A non-visible component that generates directions between two locations using a service called https\://openrouteservice.org. Note\: For this component to work correctly, provide a valid API key from that service.

??? example "Permissions"
    * [android.permission.INTERNET](https://developer.android.com/reference/android/Manifest.permission.html#INTERNET)

## Events

### Got Directions

Event triggered when the Openrouteservice returns the directions.

<div class="block" ai2-block="event" not-rendered="true" value="%7B%22componentName%22:%20%22Navigation%22,%20%22name%22:%20%22Got%20Directions%22,%20%22param%22:%20%5B%22directions%22,%20%22points%22,%20%22distance%22,%20%22duration%22%5D%7D"></div>

| Params | []() |
|--------|------|
|directions|<span class="chip chip-list">List</span>|
|points|<span class="chip chip-list">List</span>|
|distance|<span class="chip chip-number">Number</span>|
|duration|<span class="chip chip-number">Number</span>|

## Methods

### Request Directions

Request directions from the routing service.

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22Navigation%22,%20%22name%22:%20%22Request%20Directions%22,%20%22output%22:%20false,%20%22param%22:%20%5B%5D%7D"></div>

## Properties

### API Key

<span style="user-select: none; white-space:pre-wrap;"><span class="chip chip-text">Text</span> :heavy_minus_sign: <span class="chip chip-rw">Write</span>  - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span></span>

API Key for Open Route Service.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Navigation%22,%20%22name%22:%20%22API%20Key%22,%20%22getter%22:%20false%7D"></div>

### End Latitude

<span style="user-select: none; white-space:pre-wrap;"><span class="chip chip-number">Number</span> <span class="chip chip-number">Default: <i>0.0</i></span> :heavy_minus_sign: <span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span>  - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span></span>

The latitude of the end location.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Navigation%22,%20%22name%22:%20%22End%20Latitude%22,%20%22getter%22:%20true%7D"></div>
<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Navigation%22,%20%22name%22:%20%22End%20Latitude%22,%20%22getter%22:%20false%7D"></div>

### End Location

<span style="user-select: none; white-space:pre-wrap;"><span class="chip chip-component">Component</span> :heavy_minus_sign: <span class="chip chip-rw">Write</span>  - <span class="chip chip-bd">Blocks</span></span>

Set the end location.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Navigation%22,%20%22name%22:%20%22End%20Location%22,%20%22getter%22:%20false%7D"></div>

### End Longitude

<span style="user-select: none; white-space:pre-wrap;"><span class="chip chip-number">Number</span> <span class="chip chip-number">Default: <i>0.0</i></span> :heavy_minus_sign: <span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span>  - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span></span>

The longitude of the end location.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Navigation%22,%20%22name%22:%20%22End%20Longitude%22,%20%22getter%22:%20true%7D"></div>
<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Navigation%22,%20%22name%22:%20%22End%20Longitude%22,%20%22getter%22:%20false%7D"></div>

### Language

<span style="user-select: none; white-space:pre-wrap;"><span class="chip chip-text">Text</span> <span class="chip chip-text">Default: <i>en</i></span> :heavy_minus_sign: <span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span>  - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span></span>

The language to use for textual directions.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Navigation%22,%20%22name%22:%20%22Language%22,%20%22getter%22:%20true%7D"></div>
<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Navigation%22,%20%22name%22:%20%22Language%22,%20%22getter%22:%20false%7D"></div>

### Response Content

<span style="user-select: none; white-space:pre-wrap;"><span class="chip chip-unknown">Dictionary</span> :heavy_minus_sign: <span class="chip chip-rw">Read</span>  - <span class="chip chip-bd">Blocks</span></span>

Content of the last response as a dictionary.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Navigation%22,%20%22name%22:%20%22Response%20Content%22,%20%22getter%22:%20true%7D"></div>

### Start Latitude

<span style="user-select: none; white-space:pre-wrap;"><span class="chip chip-number">Number</span> <span class="chip chip-number">Default: <i>0.0</i></span> :heavy_minus_sign: <span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span>  - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span></span>

The latitude of the start location.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Navigation%22,%20%22name%22:%20%22Start%20Latitude%22,%20%22getter%22:%20true%7D"></div>
<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Navigation%22,%20%22name%22:%20%22Start%20Latitude%22,%20%22getter%22:%20false%7D"></div>

### Start Location

<span style="user-select: none; white-space:pre-wrap;"><span class="chip chip-component">Component</span> :heavy_minus_sign: <span class="chip chip-rw">Write</span>  - <span class="chip chip-bd">Blocks</span></span>

Set the start location.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Navigation%22,%20%22name%22:%20%22Start%20Location%22,%20%22getter%22:%20false%7D"></div>

### Start Longitude

<span style="user-select: none; white-space:pre-wrap;"><span class="chip chip-number">Number</span> <span class="chip chip-number">Default: <i>0.0</i></span> :heavy_minus_sign: <span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span>  - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span></span>

The longitude of the start location.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Navigation%22,%20%22name%22:%20%22Start%20Longitude%22,%20%22getter%22:%20true%7D"></div>
<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Navigation%22,%20%22name%22:%20%22Start%20Longitude%22,%20%22getter%22:%20false%7D"></div>

### Transportation Method

<span style="user-select: none; white-space:pre-wrap;"><span class="chip chip-text">Text</span> <span class="chip chip-text">Default: <i>foot-walking</i></span> :heavy_minus_sign: <span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span>  - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span></span>

The transportation method used for determining the route.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Navigation%22,%20%22name%22:%20%22Transportation%20Method%22,%20%22getter%22:%20true%7D"></div>
<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Navigation%22,%20%22name%22:%20%22Transportation%20Method%22,%20%22getter%22:%20false%7D"></div>
