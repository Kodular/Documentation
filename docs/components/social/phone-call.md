# Phone Call

| Category | Requires | Version |
|:--------:|:-------:|:--------:|
|**Social**|<span class="chip chip-any">API 19, Android 4.4 - 4.4.4 KitKat</span>|<span class="chip chip-number">2</span>|

:mag: {>>Non-Visible component<<}

## Overview

A non-visible component that makes a phone call to the number specified in the `` PhoneNumber `` property, which can be set either in the Designer or Blocks Editor. The component has a `` MakePhoneCall `` method, enabling the program to launch a phone call.

Often, this component is used with the `` ContactPicker `` component, which lets the user select a contact from the ones stored on the phone and sets the `` PhoneNumber `` property to the contact's phone number.

To directly specify the phone number (e.g., 650-555-1212), set the `` PhoneNumber `` property to a Text with the specified digits (e.g., "6505551212"). Dashes, dots, and parentheses may be included (e.g., "(650)-555-1212") but will be ignored; spaces may not be included.

??? example "Permissions"
    * [android.permission.CALL_PHONE](https://developer.android.com/reference/android/Manifest.permission.html#CALL_PHONE)
    * [android.permission.READ_PHONE_STATE](https://developer.android.com/reference/android/Manifest.permission.html#READ_PHONE_STATE)

## Events

### Incoming Call Answered

Event indicating that an incoming phone call is answered. phoneNumber is the incoming call phone number.

<div class="block" ai2-block="event" not-rendered="true" value="%7B%22componentName%22:%20%22Phone%20Call%22,%20%22name%22:%20%22Incoming%20Call%20Answered%22,%20%22param%22:%20%5B%22phone%20Number%22%5D%7D"></div>

| Params | []() |
|--------|------|
|phone Number|<span class="chip chip-text">Text</span>|

### Phone Call Ended

Event indicating that a phone call has ended. If status is 1, incoming call is missed or rejected; if status is 2, incoming call is answered before hanging up; if status is 3, outgoing call is hung up. phoneNumber is the ended call phone number.

<div class="block" ai2-block="event" not-rendered="true" value="%7B%22componentName%22:%20%22Phone%20Call%22,%20%22name%22:%20%22Phone%20Call%20Ended%22,%20%22param%22:%20%5B%22status%22,%20%22phone%20Number%22%5D%7D"></div>

| Params | []() |
|--------|------|
|status|<span class="chip chip-number">Number</span>|
|phone Number|<span class="chip chip-text">Text</span>|

### Phone Call Started

Event indicating that a phonecall has started. If status is 1, incoming call is ringing; if status is 2, outgoing call is dialled. phoneNumber is the incoming/outgoing phone number.

<div class="block" ai2-block="event" not-rendered="true" value="%7B%22componentName%22:%20%22Phone%20Call%22,%20%22name%22:%20%22Phone%20Call%20Started%22,%20%22param%22:%20%5B%22status%22,%20%22phone%20Number%22%5D%7D"></div>

| Params | []() |
|--------|------|
|status|<span class="chip chip-number">Number</span>|
|phone Number|<span class="chip chip-text">Text</span>|

## Methods

### Make Phone Call

Makes a phone call using the number in the PhoneNumber property.

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22Phone%20Call%22,%20%22name%22:%20%22Make%20Phone%20Call%22,%20%22output%22:%20false,%20%22param%22:%20%5B%5D%7D"></div>

## Properties

### Phone Number

<span style="user-select: none; white-space:pre-wrap;"><span class="chip chip-text">Text</span> :heavy_minus_sign: <span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span>  - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span></span>

PhoneNumber property getter method.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Phone%20Call%22,%20%22name%22:%20%22Phone%20Number%22,%20%22getter%22:%20true%7D"></div>
<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Phone%20Call%22,%20%22name%22:%20%22Phone%20Number%22,%20%22getter%22:%20false%7D"></div>
