# Clock

| Category | Version | Requires |
|:--------:|:-------:|:--------:|
|Sensors|4|API 19 - Android 4.4 - 4.4.4 KitKat|

:mag: {>>Non-visible component<<}

## Overview

Non-visible component that provides the instant in time using the internal clock on the phone. It can fire a timer at regularly set intervals and perform time calculations, manipulations, and conversions.

 

Methods to convert an instant to text are also available. Acceptable patterns are empty string, MM/DD/YYYY HH:mm:ss a, or MMM d, yyyyHH:mm. The empty string will provide the default format, which is "MMM d, yyyy HH:mm:ss a" for FormatDateTime "MMM d, yyyy" for FormatDate. To see all possible format, please see <a _target="_blank" href="https://docs.oracle.com/javase/7/docs/api/java/text/SimpleDateFormat.html">here</a>. 

 

## Events

### Timer

[[Event('Clock', 'Timer')]]

Timer has gone off.

## Methods

### AddDays

[[Method('Clock', 'AddDays', true, 'instant quantity')]]

{>>Returns `InstantInTime`<<}

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |instant|`InstantInTime`|
    |quantity|`number`|


An instant in time some days after the argument

### AddDuration

[[Method('Clock', 'AddDuration', true, 'instant quantity')]]

{>>Returns `InstantInTime`<<}

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |instant|`InstantInTime`|
    |quantity|`number`|


An instant in time some duration after the argument

### AddHours

[[Method('Clock', 'AddHours', true, 'instant quantity')]]

{>>Returns `InstantInTime`<<}

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |instant|`InstantInTime`|
    |quantity|`number`|


An instant in time some hours after the argument

### AddMinutes

[[Method('Clock', 'AddMinutes', true, 'instant quantity')]]

{>>Returns `InstantInTime`<<}

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |instant|`InstantInTime`|
    |quantity|`number`|


An instant in time some minutes after the argument

### AddMonths

[[Method('Clock', 'AddMonths', true, 'instant quantity')]]

{>>Returns `InstantInTime`<<}

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |instant|`InstantInTime`|
    |quantity|`number`|


An instant in time some months after the argument

### AddSeconds

[[Method('Clock', 'AddSeconds', true, 'instant quantity')]]

{>>Returns `InstantInTime`<<}

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |instant|`InstantInTime`|
    |quantity|`number`|


An instant in time some seconds after the argument

### AddWeeks

[[Method('Clock', 'AddWeeks', true, 'instant quantity')]]

{>>Returns `InstantInTime`<<}

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |instant|`InstantInTime`|
    |quantity|`number`|


An instant in time some weeks after the argument

### AddYears

[[Method('Clock', 'AddYears', true, 'instant quantity')]]

{>>Returns `InstantInTime`<<}

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |instant|`InstantInTime`|
    |quantity|`number`|


An instant in time some years after the argument

### DayOfMonth

[[Method('Clock', 'DayOfMonth', true, 'instant')]]

{>>Returns `number`<<}

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |instant|`InstantInTime`|


The day of the month

### Duration

[[Method('Clock', 'Duration', true, 'start end')]]

{>>Returns `number`<<}

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |start|`InstantInTime`|
    |end|`InstantInTime`|


Milliseconds elapsed between instants

### DurationToDays

[[Method('Clock', 'DurationToDays', true, 'duration')]]

{>>Returns `number`<<}

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |duration|`number`|


convert duration to days

### DurationToHours

[[Method('Clock', 'DurationToHours', true, 'duration')]]

{>>Returns `number`<<}

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |duration|`number`|


convert duration to hours

### DurationToMinutes

[[Method('Clock', 'DurationToMinutes', true, 'duration')]]

{>>Returns `number`<<}

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |duration|`number`|


convert duration to minutes

### DurationToSeconds

[[Method('Clock', 'DurationToSeconds', true, 'duration')]]

{>>Returns `number`<<}

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |duration|`number`|


convert duration to seconds

### DurationToWeeks

[[Method('Clock', 'DurationToWeeks', true, 'duration')]]

{>>Returns `number`<<}

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |duration|`number`|


convert duration to weeks

### FormatDate

[[Method('Clock', 'FormatDate', true, 'instant pattern')]]

{>>Returns `text`<<}

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |instant|`InstantInTime`|
    |pattern|`text`|


Text representing the date of an instant in the specified pattern

### FormatDateTime

[[Method('Clock', 'FormatDateTime', true, 'instant pattern')]]

{>>Returns `text`<<}

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |instant|`InstantInTime`|
    |pattern|`text`|


Text representing the date and time of an instant in the specified pattern

### FormatTime

[[Method('Clock', 'FormatTime', true, 'instant')]]

{>>Returns `text`<<}

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |instant|`InstantInTime`|


Text representing the time of an instant

### GetMillis

[[Method('Clock', 'GetMillis', true, 'instant')]]

{>>Returns `number`<<}

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |instant|`InstantInTime`|


The instant in time measured as milliseconds since 1970.

### Hour

[[Method('Clock', 'Hour', true, 'instant')]]

{>>Returns `number`<<}

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |instant|`InstantInTime`|


The hour of the day

### MakeDate

[[Method('Clock', 'MakeDate', true, 'year month day')]]

{>>Returns `InstantInTime`<<}

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |year|`number`|
    |month|`number`|
    |day|`number`|


Allows the user to set the clock to be a date value.
Valid values for the month field are 1-12 and 1-31 for the day field.

### MakeInstant

[[Method('Clock', 'MakeInstant', true, 'from')]]

{>>Returns `InstantInTime`<<}

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |from|`text`|


An instant in time specified by MM/dd/YYYY hh:mm:ss or MM/dd/YYYY or hh:mm

### MakeInstantFromMillis

[[Method('Clock', 'MakeInstantFromMillis', true, 'millis')]]

{>>Returns `InstantInTime`<<}

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |millis|`number`|


An instant in time specified by the milliseconds since 1970.

### MakeInstantFromParts

[[Method('Clock', 'MakeInstantFromParts', true, 'year month day hour minute second')]]

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


Allows the user to set the date and time to be displayed when the clock opens.
Valid values for the month field are 1-12 and 1-31 for the day field.

### MakeTime

[[Method('Clock', 'MakeTime', true, 'hour minute second')]]

{>>Returns `InstantInTime`<<}

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |hour|`number`|
    |minute|`number`|
    |second|`number`|


Allows the user to set the time of the clock - Valid format is hh:mm:ss

### Minute

[[Method('Clock', 'Minute', true, 'instant')]]

{>>Returns `number`<<}

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |instant|`InstantInTime`|


The minute of the hour

### Month

[[Method('Clock', 'Month', true, 'instant')]]

{>>Returns `number`<<}

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |instant|`InstantInTime`|


The month of the year represented as a number from 1 to 12)

### MonthName

[[Method('Clock', 'MonthName', true, 'instant')]]

{>>Returns `text`<<}

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |instant|`InstantInTime`|


The name of the month

### Now

[[Method('Clock', 'Now', true)]]

{>>Returns `InstantInTime`<<}

The current instant in time read from phone's clock

### Second

[[Method('Clock', 'Second', true, 'instant')]]

{>>Returns `number`<<}

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |instant|`InstantInTime`|


The second of the minute

### SystemTime

[[Method('Clock', 'SystemTime', true)]]

{>>Returns `number`<<}

The phone's internal time

### Weekday

[[Method('Clock', 'Weekday', true, 'instant')]]

{>>Returns `number`<<}

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |instant|`InstantInTime`|


The day of the week represented as a number from 1 (Sunday) to 7 (Saturday)

### WeekdayName

[[Method('Clock', 'WeekdayName', true, 'instant')]]

{>>Returns `text`<<}

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |instant|`InstantInTime`|


The name of the day of the week

### Year

[[Method('Clock', 'Year', true, 'instant')]]

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