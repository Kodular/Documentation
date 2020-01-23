# Clock

| Category | Version | Requires |
|:--------:|:-------:|:--------:|
|Sensors|4|API 19, Android 4.4 - 4.4.4 KitKat|

:mag: {>>Non-visible component<<}

## Overview

Non-visible component that provides the instant in time using the internal clock on the phone. It can fire a timer at regularly set intervals and perform time calculations, manipulations, and conversions.

 

Methods to convert an instant to text are also available. Acceptable patterns are empty string, MM/DD/YYYY HH:mm:ss a, or MMM d, yyyyHH:mm. The empty string will provide the default format, which is "MMM d, yyyy HH:mm:ss a" for FormatDateTime "MMM d, yyyy" for FormatDate. To see all possible format, please see <a _target="_blank" href="https://docs.oracle.com/javase/7/docs/api/java/text/SimpleDateFormat.html">here</a>. 

 

## Events

### Timer

[[Event('Clock', 'Timer')]]

Timer has gone off.

## Methods

### Add Days

_Block preview not available_

{>>Returns `InstantInTime`<<}

??? tip "Parameters"

    | Name | Type |
    |------|------|
    |instant|`InstantInTime`|
    |quantity|`number`|


An instant in time some days after the argument

### Add Duration

_Block preview not available_

{>>Returns `InstantInTime`<<}

??? tip "Parameters"

    | Name | Type |
    |------|------|
    |instant|`InstantInTime`|
    |quantity|`number`|


An instant in time some duration after the argument

### Add Hours

_Block preview not available_

{>>Returns `InstantInTime`<<}

??? tip "Parameters"

    | Name | Type |
    |------|------|
    |instant|`InstantInTime`|
    |quantity|`number`|


An instant in time some hours after the argument

### Add Minutes

_Block preview not available_

{>>Returns `InstantInTime`<<}

??? tip "Parameters"

    | Name | Type |
    |------|------|
    |instant|`InstantInTime`|
    |quantity|`number`|


An instant in time some minutes after the argument

### Add Months

_Block preview not available_

{>>Returns `InstantInTime`<<}

??? tip "Parameters"

    | Name | Type |
    |------|------|
    |instant|`InstantInTime`|
    |quantity|`number`|


An instant in time some months after the argument

### Add Seconds

_Block preview not available_

{>>Returns `InstantInTime`<<}

??? tip "Parameters"

    | Name | Type |
    |------|------|
    |instant|`InstantInTime`|
    |quantity|`number`|


An instant in time some seconds after the argument

### Add Weeks

_Block preview not available_

{>>Returns `InstantInTime`<<}

??? tip "Parameters"

    | Name | Type |
    |------|------|
    |instant|`InstantInTime`|
    |quantity|`number`|


An instant in time some weeks after the argument

### Add Years

_Block preview not available_

{>>Returns `InstantInTime`<<}

??? tip "Parameters"

    | Name | Type |
    |------|------|
    |instant|`InstantInTime`|
    |quantity|`number`|


An instant in time some years after the argument

### Day Of Month

_Block preview not available_

{>>Returns `number`<<}

??? tip "Parameters"

    | Name | Type |
    |------|------|
    |instant|`InstantInTime`|


The day of the month

### Duration

_Block preview not available_

{>>Returns `number`<<}

??? tip "Parameters"

    | Name | Type |
    |------|------|
    |start|`InstantInTime`|
    |end|`InstantInTime`|


Milliseconds elapsed between instants

### Duration To Days

_Block preview not available_

{>>Returns `number`<<}

??? tip "Parameters"

    | Name | Type |
    |------|------|
    |duration|`number`|


convert duration to days

### Duration To Hours

_Block preview not available_

{>>Returns `number`<<}

??? tip "Parameters"

    | Name | Type |
    |------|------|
    |duration|`number`|


convert duration to hours

### Duration To Minutes

_Block preview not available_

{>>Returns `number`<<}

??? tip "Parameters"

    | Name | Type |
    |------|------|
    |duration|`number`|


convert duration to minutes

### Duration To Seconds

_Block preview not available_

{>>Returns `number`<<}

??? tip "Parameters"

    | Name | Type |
    |------|------|
    |duration|`number`|


convert duration to seconds

### Duration To Weeks

_Block preview not available_

{>>Returns `number`<<}

??? tip "Parameters"

    | Name | Type |
    |------|------|
    |duration|`number`|


convert duration to weeks

### Format Date

_Block preview not available_

{>>Returns `text`<<}

??? tip "Parameters"

    | Name | Type |
    |------|------|
    |instant|`InstantInTime`|
    |pattern|`text`|


Text representing the date of an instant in the specified pattern

### Format Date Time

_Block preview not available_

{>>Returns `text`<<}

??? tip "Parameters"

    | Name | Type |
    |------|------|
    |instant|`InstantInTime`|
    |pattern|`text`|


Text representing the date and time of an instant in the specified pattern

### Format Time

_Block preview not available_

{>>Returns `text`<<}

??? tip "Parameters"

    | Name | Type |
    |------|------|
    |instant|`InstantInTime`|


Text representing the time of an instant

### Get Millis

_Block preview not available_

{>>Returns `number`<<}

??? tip "Parameters"

    | Name | Type |
    |------|------|
    |instant|`InstantInTime`|


The instant in time measured as milliseconds since 1970.

### Hour

_Block preview not available_

{>>Returns `number`<<}

??? tip "Parameters"

    | Name | Type |
    |------|------|
    |instant|`InstantInTime`|


The hour of the day

### Make Date

_Block preview not available_

{>>Returns `InstantInTime`<<}

??? tip "Parameters"

    | Name | Type |
    |------|------|
    |year|`number`|
    |month|`number`|
    |day|`number`|


Allows the user to set the clock to be a date value
Valid values for the month field are 1-12 and 1-31 for the day field.

### Make Instant

_Block preview not available_

{>>Returns `InstantInTime`<<}

??? tip "Parameters"

    | Name | Type |
    |------|------|
    |from|`text`|


An instant in time specified by MM/dd/YYYY hh:mm:ss or MM/dd/YYYY or hh:mm

### Make Instant From Millis

_Block preview not available_

{>>Returns `InstantInTime`<<}

??? tip "Parameters"

    | Name | Type |
    |------|------|
    |millis|`number`|


An instant in time specified by the milliseconds since 1970.

### Make Instant From Parts

_Block preview not available_

{>>Returns `InstantInTime`<<}

??? tip "Parameters"

    | Name | Type |
    |------|------|
    |year|`number`|
    |month|`number`|
    |day|`number`|
    |hour|`number`|
    |minute|`number`|
    |second|`number`|


Allows the user to set the date and time to be displayed when the clock opens
Valid values for the month field are 1-12 and 1-31 for the day field.

### Make Time

_Block preview not available_

{>>Returns `InstantInTime`<<}

??? tip "Parameters"

    | Name | Type |
    |------|------|
    |hour|`number`|
    |minute|`number`|
    |second|`number`|


Allows the user to set the time of the clock - Valid format is hh:mm:ss

### Minute

_Block preview not available_

{>>Returns `number`<<}

??? tip "Parameters"

    | Name | Type |
    |------|------|
    |instant|`InstantInTime`|


The minute of the hour

### Month

_Block preview not available_

{>>Returns `number`<<}

??? tip "Parameters"

    | Name | Type |
    |------|------|
    |instant|`InstantInTime`|


The month of the year represented as a number from 1 to 12)

### Month Name

_Block preview not available_

{>>Returns `text`<<}

??? tip "Parameters"

    | Name | Type |
    |------|------|
    |instant|`InstantInTime`|


The name of the month

### Now

_Block preview not available_

{>>Returns `InstantInTime`<<}

The current instant in time read from phone's clock

### Second

_Block preview not available_

{>>Returns `number`<<}

??? tip "Parameters"

    | Name | Type |
    |------|------|
    |instant|`InstantInTime`|


The second of the minute

### System Time

_Block preview not available_

{>>Returns `number`<<}

The phone's internal time

### Weekday

_Block preview not available_

{>>Returns `number`<<}

??? tip "Parameters"

    | Name | Type |
    |------|------|
    |instant|`InstantInTime`|


The day of the week represented as a number from 1 (Sunday) to 7 (Saturday)

### Weekday Name

_Block preview not available_

{>>Returns `text`<<}

??? tip "Parameters"

    | Name | Type |
    |------|------|
    |instant|`InstantInTime`|


The name of the day of the week

### Year

_Block preview not available_

{>>Returns `number`<<}

??? tip "Parameters"

    | Name | Type |
    |------|------|
    |instant|`InstantInTime`|


The year

## Properties

### Timer Always Fires

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Clock', 'Timer Always Fires')]]

| Type | Default |
|:----:|:-------:|
|boolean|True|

Will fire even when application is not showing on the screen if true

### Timer Enabled

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Clock', 'Timer Enabled')]]

| Type | Default |
|:----:|:-------:|
|boolean|True|

Fires timer if true

### Timer Interval

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Clock', 'Timer Interval')]]

| Type | Default |
|:----:|:-------:|
|number|1000|

Interval between timer events in ms