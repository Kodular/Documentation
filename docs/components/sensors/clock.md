# Clock

| Category | Version | Requires |
|:--------:|:-------:|:--------:|
|Sensors|4|API 19 - Android 4.4 - 4.4.4 KitKat|

:mag: {>>Non-visible component<<}

## Overview

_<p>Non-visible component that provides the instant in time using the internal clock on the phone. It can fire a timer at regularly set intervals and perform time calculations, manipulations, and conversions.</p> <p>Methods to convert an instant to text are also available. Acceptable patterns are empty string, MM/DD/YYYY HH:mm:ss a, or MMM d, yyyyHH:mm. The empty string will provide the default format, which is "MMM d, yyyy HH:mm:ss a" for FormatDateTime "MMM d, yyyy" for FormatDate. To see all possible format, please see <a href="https://docs.oracle.com/javase/7/docs/api/java/text/SimpleDateFormat.html" _target="_blank">here</a>. </p> _

## Events

### Timer

[[Event('Clock', 'Timer')]]

_Timer has gone off._

## Methods

### AddDays

[[Method('Clock', 'AddDays', true, 'instant quantity')]]

{>>Returns `InstantInTime`<<}

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |instant|`InstantInTime`|
    |quantity|`number`|


_An instant in time some days after the argument_

### AddDuration

[[Method('Clock', 'AddDuration', true, 'instant quantity')]]

{>>Returns `InstantInTime`<<}

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |instant|`InstantInTime`|
    |quantity|`number`|


_An instant in time some duration after the argument_

### AddHours

[[Method('Clock', 'AddHours', true, 'instant quantity')]]

{>>Returns `InstantInTime`<<}

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |instant|`InstantInTime`|
    |quantity|`number`|


_An instant in time some hours after the argument_

### AddMinutes

[[Method('Clock', 'AddMinutes', true, 'instant quantity')]]

{>>Returns `InstantInTime`<<}

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |instant|`InstantInTime`|
    |quantity|`number`|


_An instant in time some minutes after the argument_

### AddMonths

[[Method('Clock', 'AddMonths', true, 'instant quantity')]]

{>>Returns `InstantInTime`<<}

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |instant|`InstantInTime`|
    |quantity|`number`|


_An instant in time some months after the argument_

### AddSeconds

[[Method('Clock', 'AddSeconds', true, 'instant quantity')]]

{>>Returns `InstantInTime`<<}

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |instant|`InstantInTime`|
    |quantity|`number`|


_An instant in time some seconds after the argument_

### AddWeeks

[[Method('Clock', 'AddWeeks', true, 'instant quantity')]]

{>>Returns `InstantInTime`<<}

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |instant|`InstantInTime`|
    |quantity|`number`|


_An instant in time some weeks after the argument_

### AddYears

[[Method('Clock', 'AddYears', true, 'instant quantity')]]

{>>Returns `InstantInTime`<<}

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |instant|`InstantInTime`|
    |quantity|`number`|


_An instant in time some years after the argument_

### DayOfMonth

[[Method('Clock', 'DayOfMonth', true, 'instant')]]

{>>Returns `number`<<}

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |instant|`InstantInTime`|


_The day of the month_

### Duration

[[Method('Clock', 'Duration', true, 'start end')]]

{>>Returns `number`<<}

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |start|`InstantInTime`|
    |end|`InstantInTime`|


_Milliseconds elapsed between instants_

### DurationToDays

[[Method('Clock', 'DurationToDays', true, 'duration')]]

{>>Returns `number`<<}

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |duration|`number`|


_convert duration to days_

### DurationToHours

[[Method('Clock', 'DurationToHours', true, 'duration')]]

{>>Returns `number`<<}

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |duration|`number`|


_convert duration to hours_

### DurationToMinutes

[[Method('Clock', 'DurationToMinutes', true, 'duration')]]

{>>Returns `number`<<}

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |duration|`number`|


_convert duration to minutes_

### DurationToSeconds

[[Method('Clock', 'DurationToSeconds', true, 'duration')]]

{>>Returns `number`<<}

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |duration|`number`|


_convert duration to seconds_

### DurationToWeeks

[[Method('Clock', 'DurationToWeeks', true, 'duration')]]

{>>Returns `number`<<}

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |duration|`number`|


_convert duration to weeks_

### FormatDate

[[Method('Clock', 'FormatDate', true, 'instant pattern')]]

{>>Returns `text`<<}

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |instant|`InstantInTime`|
    |pattern|`text`|


_Text representing the date of an instant in the specified pattern_

### FormatDateTime

[[Method('Clock', 'FormatDateTime', true, 'instant pattern')]]

{>>Returns `text`<<}

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |instant|`InstantInTime`|
    |pattern|`text`|


_Text representing the date and time of an instant in the specified pattern_

### FormatTime

[[Method('Clock', 'FormatTime', true, 'instant')]]

{>>Returns `text`<<}

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |instant|`InstantInTime`|


_Text representing the time of an instant_

### GetMillis

[[Method('Clock', 'GetMillis', true, 'instant')]]

{>>Returns `number`<<}

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |instant|`InstantInTime`|


_The instant in time measured as milliseconds since 1970._

### Hour

[[Method('Clock', 'Hour', true, 'instant')]]

{>>Returns `number`<<}

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |instant|`InstantInTime`|


_The hour of the day_

### MakeDate

[[Method('Clock', 'MakeDate', true, 'year month day')]]

{>>Returns `InstantInTime`<<}

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |year|`number`|
    |month|`number`|
    |day|`number`|


_Allows the user to set the clock to be a date value.
Valid values for the month field are 1-12 and 1-31 for the day field._

### MakeInstant

[[Method('Clock', 'MakeInstant', true, 'from')]]

{>>Returns `InstantInTime`<<}

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |from|`text`|


_An instant in time specified by MM/dd/YYYY hh:mm:ss or MM/dd/YYYY or hh:mm_

### MakeInstantFromMillis

[[Method('Clock', 'MakeInstantFromMillis', true, 'millis')]]

{>>Returns `InstantInTime`<<}

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |millis|`number`|


_An instant in time specified by the milliseconds since 1970._

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


_Allows the user to set the date and time to be displayed when the clock opens.
Valid values for the month field are 1-12 and 1-31 for the day field._

### MakeTime

[[Method('Clock', 'MakeTime', true, 'hour minute second')]]

{>>Returns `InstantInTime`<<}

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |hour|`number`|
    |minute|`number`|
    |second|`number`|


_Allows the user to set the time of the clock - Valid format is hh:mm:ss_

### Minute

[[Method('Clock', 'Minute', true, 'instant')]]

{>>Returns `number`<<}

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |instant|`InstantInTime`|


_The minute of the hour_

### Month

[[Method('Clock', 'Month', true, 'instant')]]

{>>Returns `number`<<}

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |instant|`InstantInTime`|


_The month of the year represented as a number from 1 to 12)_

### MonthName

[[Method('Clock', 'MonthName', true, 'instant')]]

{>>Returns `text`<<}

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |instant|`InstantInTime`|


_The name of the month_

### Now

[[Method('Clock', 'Now', true)]]

{>>Returns `InstantInTime`<<}

_The current instant in time read from phone's clock_

### Second

[[Method('Clock', 'Second', true, 'instant')]]

{>>Returns `number`<<}

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |instant|`InstantInTime`|


_The second of the minute_

### SystemTime

[[Method('Clock', 'SystemTime', true)]]

{>>Returns `number`<<}

_The phone's internal time_

### Weekday

[[Method('Clock', 'Weekday', true, 'instant')]]

{>>Returns `number`<<}

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |instant|`InstantInTime`|


_The day of the week represented as a number from 1 (Sunday) to 7 (Saturday)_

### WeekdayName

[[Method('Clock', 'WeekdayName', true, 'instant')]]

{>>Returns `text`<<}

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |instant|`InstantInTime`|


_The name of the day of the week_

### Year

[[Method('Clock', 'Year', true, 'instant')]]

{>>Returns `number`<<}

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |instant|`InstantInTime`|


_The year_

## Properties

### Timer Always Fires

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Clock', 'Timer Always Fires')]]

| Type | Default |
|:----:|:-------:|
|boolean|True|

_Will fire even when application is not showing on the screen if true_

### Timer Enabled

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Clock', 'Timer Enabled')]]

| Type | Default |
|:----:|:-------:|
|boolean|True|

_Fires timer if true_

### Timer Interval

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Clock', 'Timer Interval')]]

| Type | Default |
|:----:|:-------:|
|number|1000|

_Interval between timer events in ms_