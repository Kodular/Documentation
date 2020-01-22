# Phone Call

| Category | Version | Requires |
|:--------:|:-------:|:--------:|
|Social|2|API 19 - Android 4.4 - 4.4.4 KitKat|

:mag: {>>Non-visible component<<}

## Overview

_<p>A non-visible component that makes a phone call to the number specified in the <code>PhoneNumber</code> property, which can be set either in the Designer or Blocks Editor. The component has a <code>MakePhoneCall</code> method, enabling the program to launch a phone call.</p><p>Often, this component is used with the <code>ContactPicker</code> component, which lets the user select a contact from the ones stored on the phone and sets the <code>PhoneNumber</code> property to the contact's phone number.</p><p>To directly specify the phone number (e.g., 650-555-1212), set the <code>PhoneNumber</code> property to a Text with the specified digits (e.g., "6505551212").  Dashes, dots, and parentheses may be included (e.g., "(650)-555-1212") but will be ignored; spaces may not be included.</p>_

## Events

### Incoming Call Answered

[[Event('Phone Call', 'Incoming Call Answered', 'phoneNumber')]]

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |phone Number|`text`|


_Event indicating that an incoming phone call is answered. phoneNumber is the incoming call phone number._

### Phone Call Ended

[[Event('Phone Call', 'Phone Call Ended', 'status phoneNumber')]]

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |status|`number`|
    |phone Number|`text`|


_Event indicating that a phone call has ended. If status is 1, incoming call is missed or rejected; if status is 2, incoming call is answered before hanging up; if status is 3, outgoing call is hung up. phoneNumber is the ended call phone number._

### Phone Call Started

[[Event('Phone Call', 'Phone Call Started', 'status phoneNumber')]]

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |status|`number`|
    |phone Number|`text`|


_Event indicating that a phonecall has started. If status is 1, incoming call is ringing; if status is 2, outgoing call is dialled. phoneNumber is the incoming/outgoing phone number._

## Methods

### MakePhoneCall

[[Method('Phone Call', 'MakePhoneCall', false)]]

_Makes a phone call using the number in the PhoneNumber property._

## Properties

### Phone Number

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Phone Call', 'Phone Number')]]

| Type |
|:----:|
|text|

_PhoneNumber property getter method._