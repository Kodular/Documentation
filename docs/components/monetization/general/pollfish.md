# Pollfish

{>> Non-Visible component<<}

| Category | Requires | Version |
|:--------:|:-------:|:--------:|
|**Monetization > General**|<span class="chip chip-any">API 19, Android 4.4 - 4.4.4 KitKat</span>|<span class="chip chip-number">1</span>|

## Overview

A non-visible component that allows publishers to incentivize/reward their app''s users for completing a survey. Rewarding users for completing surveys is a great approach since it increases engagement and retention in an app.

??? example "Permissions"
    * [android.permission.INTERNET](https://developer.android.com/reference/android/Manifest.permission.html#INTERNET)

## Events

### Survey Closed

Called when Pollfish Survey was closed.

<div class="block" ai2-block="event" not-rendered="true" value="%7B%22componentName%22:%20%22Pollfish%22,%20%22name%22:%20%22Survey%20Closed%22,%20%22param%22:%20%5B%5D%7D"></div>

### Survey Completed

Called when Pollfish survey was completed. surveyInfo is CSV list containing CPA, LOI, IR. Empty for Survey Offerwall.

<div class="block" ai2-block="event" not-rendered="true" value="%7B%22componentName%22:%20%22Pollfish%22,%20%22name%22:%20%22Survey%20Completed%22,%20%22param%22:%20%5B%22survey%20Info%22%5D%7D"></div>

| Params | []() |
|--------|------|
|survey Info|<span class="chip chip-text">Text</span>|

### Survey Not Available

Called when Pollfish Survey was not available.

<div class="block" ai2-block="event" not-rendered="true" value="%7B%22componentName%22:%20%22Pollfish%22,%20%22name%22:%20%22Survey%20Not%20Available%22,%20%22param%22:%20%5B%5D%7D"></div>

### Survey Opened

Called when Survey was opened.

<div class="block" ai2-block="event" not-rendered="true" value="%7B%22componentName%22:%20%22Pollfish%22,%20%22name%22:%20%22Survey%20Opened%22,%20%22param%22:%20%5B%5D%7D"></div>

### Survey Received

Called when device receives survey and user can be prompted to start the survey.surveyInfo is CSV list containing CPA, LOI, IR. Empty for Survey Offerwall.

<div class="block" ai2-block="event" not-rendered="true" value="%7B%22componentName%22:%20%22Pollfish%22,%20%22name%22:%20%22Survey%20Received%22,%20%22param%22:%20%5B%22survey%20Info%22%5D%7D"></div>

| Params | []() |
|--------|------|
|survey Info|<span class="chip chip-text">Text</span>|

### User Not Eligible

Called when Pollfish user was not eligible.

<div class="block" ai2-block="event" not-rendered="true" value="%7B%22componentName%22:%20%22Pollfish%22,%20%22name%22:%20%22User%20Not%20Eligible%22,%20%22param%22:%20%5B%5D%7D"></div>

### User Rejected

Called when Pollfish user was rejected.

<div class="block" ai2-block="event" not-rendered="true" value="%7B%22componentName%22:%20%22Pollfish%22,%20%22name%22:%20%22User%20Rejected%22,%20%22param%22:%20%5B%5D%7D"></div>

## Methods

### Show Survey

Show Survey

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22Pollfish%22,%20%22name%22:%20%22Show%20Survey%22,%20%22output%22:%20false,%20%22param%22:%20%5B%5D%7D"></div>

## Properties

### API Key

<span style="user-select: none; white-space:pre-wrap;"><span class="chip chip-text">Text</span> :heavy_minus_sign: <span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span>  - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span></span>

Returns value of Pollfish API Key

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Pollfish%22,%20%22name%22:%20%22API%20Key%22,%20%22getter%22:%20true%7D"></div>
<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Pollfish%22,%20%22name%22:%20%22API%20Key%22,%20%22getter%22:%20false%7D"></div>

### Survey Mode

<span style="user-select: none; white-space:pre-wrap;"><span class="chip chip-text">Text</span> <span class="chip chip-text">Default: <i>Single Survey</i></span> :heavy_minus_sign: <span class="chip chip-rw">Read</span>  - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span></span>

Survey mode. It can either be Single Survey or Survey Offerwall

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Pollfish%22,%20%22name%22:%20%22Survey%20Mode%22,%20%22getter%22:%20true%7D"></div>

### Test Mode

<span style="user-select: none; white-space:pre-wrap;"><span class="chip chip-boolean">Boolean</span> <span class="chip chip-boolean">Default: <i>True</i></span> :heavy_minus_sign: <span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span>  - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span></span>

If you want to test the component then set this property to true and before publishing to Play Store, set back to false.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Pollfish%22,%20%22name%22:%20%22Test%20Mode%22,%20%22getter%22:%20true%7D"></div>
<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Pollfish%22,%20%22name%22:%20%22Test%20Mode%22,%20%22getter%22:%20false%7D"></div>
