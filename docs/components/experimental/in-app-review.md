# In-App Review

{>> Non-Visible component<<}

| Category | Requires | Version |
|:--------:|:-------:|:--------:|
|**Experimental**|<span class="chip chip-any">API 21, Android 5.0 Lollipop</span>|<span class="chip chip-number">1</span>|

## Overview

A non-visible component that lets the user review the app within the app.   
Note\: For this component to work correctly, set the MIN API to 21 (Android 5).

??? example "Permissions"
    * [android.permission.INTERNET](https://developer.android.com/reference/android/Manifest.permission.html#INTERNET)
    * [android.permission.FOREGROUND_SERVICE](https://developer.android.com/reference/android/Manifest.permission.html#FOREGROUND_SERVICE)

## Events

### Initialized

Use this event to check if the app is ready to request the user to review

<div class="block" ai2-block="event" not-rendered="true" value="%7B%22componentName%22:%20%22In-App%20Review%22,%20%22name%22:%20%22Initialized%22,%20%22param%22:%20%5B%5D%7D"></div>

### Review Closed

Use this event to know when the review popup was closed (this triggers always, even if the user did not review)

<div class="block" ai2-block="event" not-rendered="true" value="%7B%22componentName%22:%20%22In-App%20Review%22,%20%22name%22:%20%22Review%20Closed%22,%20%22param%22:%20%5B%5D%7D"></div>

## Methods

### Request Review

Launch the flow for a user to review the app

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22In-App%20Review%22,%20%22name%22:%20%22Request%20Review%22,%20%22output%22:%20false,%20%22param%22:%20%5B%5D%7D"></div>

## Properties

### Is Ready

<span style="user-select: none; white-space:pre-wrap;"><span class="chip chip-boolean">Boolean</span> :heavy_minus_sign: <span class="chip chip-rw">Read</span>  - <span class="chip chip-bd">Blocks</span></span>

Check if the InApp Review component is ready to request a review

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22In-App%20Review%22,%20%22name%22:%20%22Is%20Ready%22,%20%22getter%22:%20true%7D"></div>

### Test Mode

<span style="user-select: none; white-space:pre-wrap;"><span class="chip chip-boolean">Boolean</span> <span class="chip chip-boolean">Default: <i>false</i></span> :heavy_minus_sign: <span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span>  - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span></span>

Whether it is testing mode enabled or not.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22In-App%20Review%22,%20%22name%22:%20%22Test%20Mode%22,%20%22getter%22:%20true%7D"></div>
<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22In-App%20Review%22,%20%22name%22:%20%22Test%20Mode%22,%20%22getter%22:%20false%7D"></div>
