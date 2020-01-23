# Phone Call

| Category | Version | Requires |
|:--------:|:-------:|:--------:|
|Social|2|API 19 - Android 4.4 - 4.4.4 KitKat|

:mag: {>>Non-visible component<<}

## Overview

A non-visible component that makes a phone call to the number specified in the `` PhoneNumber `` property, which can be set either in the Designer or Blocks Editor. The component has a `` MakePhoneCall `` method, enabling the program to launch a phone call.

Often, this component is used with the `` ContactPicker `` component, which lets the user select a contact from the ones stored on the phone and sets the `` PhoneNumber `` property to the contact's phone number.

To directly specify the phone number (e.g., 650-555-1212), set the `` PhoneNumber `` property to a Text with the specified digits (e.g., "6505551212"). Dashes, dots, and parentheses may be included (e.g., "(650)-555-1212") but will be ignored; spaces may not be included.

## Events

### Incoming Call Answered

[[Event('Phone Call', 'Incoming Call Answered', 'phoneNumber')]]

??? tip "Parameters"

    | Name | Type |
    |------|------|
    |phone Number|`text`|


Event indicating that an incoming phone call is answered. phoneNumber is the incoming call phone number.

### Phone Call Ended

[[Event('Phone Call', 'Phone Call Ended', 'status', 'phoneNumber')]]

??? tip "Parameters"

    | Name | Type |
    |------|------|
    |status|`number`|
    |phone Number|`text`|


Event indicating that a phone call has ended. If status is 1, incoming call is missed or rejected; if status is 2, incoming call is answered before hanging up; if status is 3, outgoing call is hung up. phoneNumber is the ended call phone number.

### Phone Call Started

[[Event('Phone Call', 'Phone Call Started', 'status', 'phoneNumber')]]

??? tip "Parameters"

    | Name | Type |
    |------|------|
    |status|`number`|
    |phone Number|`text`|


Event indicating that a phonecall has started. If status is 1, incoming call is ringing; if status is 2, outgoing call is dialled. phoneNumber is the incoming/outgoing phone number.

## Methods

### MakePhoneCall

[[Method('Phone Call', 'MakePhoneCall', false)]]

Makes a phone call using the number in the PhoneNumber property.

## Properties

### Phone Number

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Phone Call', 'Phone Number')]]

| Type |
|:----:|
|text|

PhoneNumber property getter method.