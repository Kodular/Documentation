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

[[Method('Clock', 'Add Days', True, 'instant', 'quantity')]]

{>>Returns `InstantInTime`<<}

| Params | []() |
|--------|------|
|instant|Instantintime|
|quantity|Number|


An instant in time some days after the argument

### Add Duration

[[Method('Clock', 'Add Duration', True, 'instant', 'quantity')]]

{>>Returns `InstantInTime`<<}

| Params | []() |
|--------|------|
|instant|Instantintime|
|quantity|Number|


An instant in time some duration after the argument

### Add Hours

[[Method('Clock', 'Add Hours', True, 'instant', 'quantity')]]

{>>Returns `InstantInTime`<<}

| Params | []() |
|--------|------|
|instant|Instantintime|
|quantity|Number|


An instant in time some hours after the argument

### Add Minutes

[[Method('Clock', 'Add Minutes', True, 'instant', 'quantity')]]

{>>Returns `InstantInTime`<<}

| Params | []() |
|--------|------|
|instant|Instantintime|
|quantity|Number|


An instant in time some minutes after the argument

### Add Months

[[Method('Clock', 'Add Months', True, 'instant', 'quantity')]]

{>>Returns `InstantInTime`<<}

| Params | []() |
|--------|------|
|instant|Instantintime|
|quantity|Number|


An instant in time some months after the argument

### Add Seconds

[[Method('Clock', 'Add Seconds', True, 'instant', 'quantity')]]

{>>Returns `InstantInTime`<<}

| Params | []() |
|--------|------|
|instant|Instantintime|
|quantity|Number|


An instant in time some seconds after the argument

### Add Weeks

[[Method('Clock', 'Add Weeks', True, 'instant', 'quantity')]]

{>>Returns `InstantInTime`<<}

| Params | []() |
|--------|------|
|instant|Instantintime|
|quantity|Number|


An instant in time some weeks after the argument

### Add Years

[[Method('Clock', 'Add Years', True, 'instant', 'quantity')]]

{>>Returns `InstantInTime`<<}

| Params | []() |
|--------|------|
|instant|Instantintime|
|quantity|Number|


An instant in time some years after the argument

### Day Of Month

[[Method('Clock', 'Day Of Month', True, 'instant')]]

{>>Returns `number`<<}

| Params | []() |
|--------|------|
|instant|Instantintime|


The day of the month

### Duration

[[Method('Clock', 'Duration', True, 'start', 'end')]]

{>>Returns `number`<<}

| Params | []() |
|--------|------|
|start|Instantintime|
|end|Instantintime|


Milliseconds elapsed between instants

### Duration To Days

[[Method('Clock', 'Duration To Days', True, 'duration')]]

{>>Returns `number`<<}

| Params | []() |
|--------|------|
|duration|Number|


convert duration to days

### Duration To Hours

[[Method('Clock', 'Duration To Hours', True, 'duration')]]

{>>Returns `number`<<}

| Params | []() |
|--------|------|
|duration|Number|


convert duration to hours

### Duration To Minutes

[[Method('Clock', 'Duration To Minutes', True, 'duration')]]

{>>Returns `number`<<}

| Params | []() |
|--------|------|
|duration|Number|


convert duration to minutes

### Duration To Seconds

[[Method('Clock', 'Duration To Seconds', True, 'duration')]]

{>>Returns `number`<<}

| Params | []() |
|--------|------|
|duration|Number|


convert duration to seconds

### Duration To Weeks

[[Method('Clock', 'Duration To Weeks', True, 'duration')]]

{>>Returns `number`<<}

| Params | []() |
|--------|------|
|duration|Number|


convert duration to weeks

### Format Date

[[Method('Clock', 'Format Date', True, 'instant', 'pattern')]]

{>>Returns `text`<<}

| Params | []() |
|--------|------|
|instant|Instantintime|
|pattern|Text|


Text representing the date of an instant in the specified pattern

### Format Date Time

[[Method('Clock', 'Format Date Time', True, 'instant', 'pattern')]]

{>>Returns `text`<<}

| Params | []() |
|--------|------|
|instant|Instantintime|
|pattern|Text|


Text representing the date and time of an instant in the specified pattern

### Format Time

[[Method('Clock', 'Format Time', True, 'instant')]]

{>>Returns `text`<<}

| Params | []() |
|--------|------|
|instant|Instantintime|


Text representing the time of an instant

### Get Millis

[[Method('Clock', 'Get Millis', True, 'instant')]]

{>>Returns `number`<<}

| Params | []() |
|--------|------|
|instant|Instantintime|


The instant in time measured as milliseconds since 1970.

### Hour

[[Method('Clock', 'Hour', True, 'instant')]]

{>>Returns `number`<<}

| Params | []() |
|--------|------|
|instant|Instantintime|


The hour of the day

### Make Date

[[Method('Clock', 'Make Date', True, 'year', 'month', 'day')]]

{>>Returns `InstantInTime`<<}

| Params | []() |
|--------|------|
|year|Number|
|month|Number|
|day|Number|


Allows the user to set the clock to be a date value
Valid values for the month field are 1-12 and 1-31 for the day field.

### Make Instant

[[Method('Clock', 'Make Instant', True, 'from')]]

{>>Returns `InstantInTime`<<}

| Params | []() |
|--------|------|
|from|Text|


An instant in time specified by MM/dd/YYYY hh:mm:ss or MM/dd/YYYY or hh:mm

### Make Instant From Millis

[[Method('Clock', 'Make Instant From Millis', True, 'millis')]]

{>>Returns `InstantInTime`<<}

| Params | []() |
|--------|------|
|millis|Number|


An instant in time specified by the milliseconds since 1970.

### Make Instant From Parts

[[Method('Clock', 'Make Instant From Parts', True, 'year', 'month', 'day', 'hour', 'minute', 'second')]]

{>>Returns `InstantInTime`<<}

| Params | []() |
|--------|------|
|year|Number|
|month|Number|
|day|Number|
|hour|Number|
|minute|Number|
|second|Number|


Allows the user to set the date and time to be displayed when the clock opens
Valid values for the month field are 1-12 and 1-31 for the day field.

### Make Time

[[Method('Clock', 'Make Time', True, 'hour', 'minute', 'second')]]

{>>Returns `InstantInTime`<<}

| Params | []() |
|--------|------|
|hour|Number|
|minute|Number|
|second|Number|


Allows the user to set the time of the clock - Valid format is hh:mm:ss

### Minute

[[Method('Clock', 'Minute', True, 'instant')]]

{>>Returns `number`<<}

| Params | []() |
|--------|------|
|instant|Instantintime|


The minute of the hour

### Month

[[Method('Clock', 'Month', True, 'instant')]]

{>>Returns `number`<<}

| Params | []() |
|--------|------|
|instant|Instantintime|


The month of the year represented as a number from 1 to 12)

### Month Name

[[Method('Clock', 'Month Name', True, 'instant')]]

{>>Returns `text`<<}

| Params | []() |
|--------|------|
|instant|Instantintime|


The name of the month

### Now

[[Method('Clock', 'Now', True)]]

{>>Returns `InstantInTime`<<}

The current instant in time read from phone's clock

### Second

[[Method('Clock', 'Second', True, 'instant')]]

{>>Returns `number`<<}

| Params | []() |
|--------|------|
|instant|Instantintime|


The second of the minute

### System Time

[[Method('Clock', 'System Time', True)]]

{>>Returns `number`<<}

The phone's internal time

### Weekday

[[Method('Clock', 'Weekday', True, 'instant')]]

{>>Returns `number`<<}

| Params | []() |
|--------|------|
|instant|Instantintime|


The day of the week represented as a number from 1 (Sunday) to 7 (Saturday)

### Weekday Name

[[Method('Clock', 'Weekday Name', True, 'instant')]]

{>>Returns `text`<<}

| Params | []() |
|--------|------|
|instant|Instantintime|


The name of the day of the week

### Year

[[Method('Clock', 'Year', True, 'instant')]]

{>>Returns `number`<<}

| Params | []() |
|--------|------|
|instant|Instantintime|


The year

## Properties

### Timer Always Fires

<span class="chip chip-boolean">Boolean</span> <span class="chip chip-boolean">Default: <i>True</i></span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span> 

Will fire even when application is not showing on the screen if true

[[PropertyBlockGetterAndSetter('Clock', 'Timer Always Fires')]]

### Timer Enabled

<span class="chip chip-boolean">Boolean</span> <span class="chip chip-boolean">Default: <i>True</i></span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span> 

Fires timer if true

[[PropertyBlockGetterAndSetter('Clock', 'Timer Enabled')]]

### Timer Interval

<span class="chip chip-number">Number</span> <span class="chip chip-number">Default: <i>1000</i></span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span> 

Interval between timer events in ms

[[PropertyBlockGetterAndSetter('Clock', 'Timer Interval')]]