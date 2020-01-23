# Clock

| Category | Requires | Version |
|:--------:|:-------:|:--------:|
|Sensors|API 19, Android 4.4 - 4.4.4 KitKat|4|

:mag: {>>Non-visible component<<}

## Overview

Non-visible component that provides the instant in time using the internal clock on the phone. It can fire a timer at regularly set intervals and perform time calculations, manipulations, and conversions.

 

Methods to convert an instant to text are also available. Acceptable patterns are empty string, MM/DD/YYYY HH:mm:ss a, or MMM d, yyyyHH:mm. The empty string will provide the default format, which is "MMM d, yyyy HH:mm:ss a" for FormatDateTime "MMM d, yyyy" for FormatDate. To see all possible format, please see <a _target="_blank" href="https://docs.oracle.com/javase/7/docs/api/java/text/SimpleDateFormat.html">here</a>. 

 

## Events

### Timer

Timer has gone off.

[[Event('Clock', 'Timer')]]

## Methods

### Add Days

<span class="chip chip-InstantInTime">Returns: <i>Instantintime</i></span> 

An instant in time some days after the argument

[[Method('Clock', 'Add Days', True, 'instant', 'quantity')]]

| Params | []() |
|--------|------|
|instant|<span class="chip chip-InstantInTime">Instantintime</span>|
|quantity|<span class="chip chip-number">Number</span>|


### Add Duration

<span class="chip chip-InstantInTime">Returns: <i>Instantintime</i></span> 

An instant in time some duration after the argument

[[Method('Clock', 'Add Duration', True, 'instant', 'quantity')]]

| Params | []() |
|--------|------|
|instant|<span class="chip chip-InstantInTime">Instantintime</span>|
|quantity|<span class="chip chip-number">Number</span>|


### Add Hours

<span class="chip chip-InstantInTime">Returns: <i>Instantintime</i></span> 

An instant in time some hours after the argument

[[Method('Clock', 'Add Hours', True, 'instant', 'quantity')]]

| Params | []() |
|--------|------|
|instant|<span class="chip chip-InstantInTime">Instantintime</span>|
|quantity|<span class="chip chip-number">Number</span>|


### Add Minutes

<span class="chip chip-InstantInTime">Returns: <i>Instantintime</i></span> 

An instant in time some minutes after the argument

[[Method('Clock', 'Add Minutes', True, 'instant', 'quantity')]]

| Params | []() |
|--------|------|
|instant|<span class="chip chip-InstantInTime">Instantintime</span>|
|quantity|<span class="chip chip-number">Number</span>|


### Add Months

<span class="chip chip-InstantInTime">Returns: <i>Instantintime</i></span> 

An instant in time some months after the argument

[[Method('Clock', 'Add Months', True, 'instant', 'quantity')]]

| Params | []() |
|--------|------|
|instant|<span class="chip chip-InstantInTime">Instantintime</span>|
|quantity|<span class="chip chip-number">Number</span>|


### Add Seconds

<span class="chip chip-InstantInTime">Returns: <i>Instantintime</i></span> 

An instant in time some seconds after the argument

[[Method('Clock', 'Add Seconds', True, 'instant', 'quantity')]]

| Params | []() |
|--------|------|
|instant|<span class="chip chip-InstantInTime">Instantintime</span>|
|quantity|<span class="chip chip-number">Number</span>|


### Add Weeks

<span class="chip chip-InstantInTime">Returns: <i>Instantintime</i></span> 

An instant in time some weeks after the argument

[[Method('Clock', 'Add Weeks', True, 'instant', 'quantity')]]

| Params | []() |
|--------|------|
|instant|<span class="chip chip-InstantInTime">Instantintime</span>|
|quantity|<span class="chip chip-number">Number</span>|


### Add Years

<span class="chip chip-InstantInTime">Returns: <i>Instantintime</i></span> 

An instant in time some years after the argument

[[Method('Clock', 'Add Years', True, 'instant', 'quantity')]]

| Params | []() |
|--------|------|
|instant|<span class="chip chip-InstantInTime">Instantintime</span>|
|quantity|<span class="chip chip-number">Number</span>|


### Day Of Month

<span class="chip chip-number">Returns: <i>Number</i></span> 

The day of the month

[[Method('Clock', 'Day Of Month', True, 'instant')]]

| Params | []() |
|--------|------|
|instant|<span class="chip chip-InstantInTime">Instantintime</span>|


### Duration

<span class="chip chip-number">Returns: <i>Number</i></span> 

Milliseconds elapsed between instants

[[Method('Clock', 'Duration', True, 'start', 'end')]]

| Params | []() |
|--------|------|
|start|<span class="chip chip-InstantInTime">Instantintime</span>|
|end|<span class="chip chip-InstantInTime">Instantintime</span>|


### Duration To Days

<span class="chip chip-number">Returns: <i>Number</i></span> 

convert duration to days

[[Method('Clock', 'Duration To Days', True, 'duration')]]

| Params | []() |
|--------|------|
|duration|<span class="chip chip-number">Number</span>|


### Duration To Hours

<span class="chip chip-number">Returns: <i>Number</i></span> 

convert duration to hours

[[Method('Clock', 'Duration To Hours', True, 'duration')]]

| Params | []() |
|--------|------|
|duration|<span class="chip chip-number">Number</span>|


### Duration To Minutes

<span class="chip chip-number">Returns: <i>Number</i></span> 

convert duration to minutes

[[Method('Clock', 'Duration To Minutes', True, 'duration')]]

| Params | []() |
|--------|------|
|duration|<span class="chip chip-number">Number</span>|


### Duration To Seconds

<span class="chip chip-number">Returns: <i>Number</i></span> 

convert duration to seconds

[[Method('Clock', 'Duration To Seconds', True, 'duration')]]

| Params | []() |
|--------|------|
|duration|<span class="chip chip-number">Number</span>|


### Duration To Weeks

<span class="chip chip-number">Returns: <i>Number</i></span> 

convert duration to weeks

[[Method('Clock', 'Duration To Weeks', True, 'duration')]]

| Params | []() |
|--------|------|
|duration|<span class="chip chip-number">Number</span>|


### Format Date

<span class="chip chip-text">Returns: <i>Text</i></span> 

Text representing the date of an instant in the specified pattern

[[Method('Clock', 'Format Date', True, 'instant', 'pattern')]]

| Params | []() |
|--------|------|
|instant|<span class="chip chip-InstantInTime">Instantintime</span>|
|pattern|<span class="chip chip-text">Text</span>|


### Format Date Time

<span class="chip chip-text">Returns: <i>Text</i></span> 

Text representing the date and time of an instant in the specified pattern

[[Method('Clock', 'Format Date Time', True, 'instant', 'pattern')]]

| Params | []() |
|--------|------|
|instant|<span class="chip chip-InstantInTime">Instantintime</span>|
|pattern|<span class="chip chip-text">Text</span>|


### Format Time

<span class="chip chip-text">Returns: <i>Text</i></span> 

Text representing the time of an instant

[[Method('Clock', 'Format Time', True, 'instant')]]

| Params | []() |
|--------|------|
|instant|<span class="chip chip-InstantInTime">Instantintime</span>|


### Get Millis

<span class="chip chip-number">Returns: <i>Number</i></span> 

The instant in time measured as milliseconds since 1970.

[[Method('Clock', 'Get Millis', True, 'instant')]]

| Params | []() |
|--------|------|
|instant|<span class="chip chip-InstantInTime">Instantintime</span>|


### Hour

<span class="chip chip-number">Returns: <i>Number</i></span> 

The hour of the day

[[Method('Clock', 'Hour', True, 'instant')]]

| Params | []() |
|--------|------|
|instant|<span class="chip chip-InstantInTime">Instantintime</span>|


### Make Date

<span class="chip chip-InstantInTime">Returns: <i>Instantintime</i></span> 

Allows the user to set the clock to be a date value
Valid values for the month field are 1-12 and 1-31 for the day field.

[[Method('Clock', 'Make Date', True, 'year', 'month', 'day')]]

| Params | []() |
|--------|------|
|year|<span class="chip chip-number">Number</span>|
|month|<span class="chip chip-number">Number</span>|
|day|<span class="chip chip-number">Number</span>|


### Make Instant

<span class="chip chip-InstantInTime">Returns: <i>Instantintime</i></span> 

An instant in time specified by MM/dd/YYYY hh:mm:ss or MM/dd/YYYY or hh:mm

[[Method('Clock', 'Make Instant', True, 'from')]]

| Params | []() |
|--------|------|
|from|<span class="chip chip-text">Text</span>|


### Make Instant From Millis

<span class="chip chip-InstantInTime">Returns: <i>Instantintime</i></span> 

An instant in time specified by the milliseconds since 1970.

[[Method('Clock', 'Make Instant From Millis', True, 'millis')]]

| Params | []() |
|--------|------|
|millis|<span class="chip chip-number">Number</span>|


### Make Instant From Parts

<span class="chip chip-InstantInTime">Returns: <i>Instantintime</i></span> 

Allows the user to set the date and time to be displayed when the clock opens
Valid values for the month field are 1-12 and 1-31 for the day field.

[[Method('Clock', 'Make Instant From Parts', True, 'year', 'month', 'day', 'hour', 'minute', 'second')]]

| Params | []() |
|--------|------|
|year|<span class="chip chip-number">Number</span>|
|month|<span class="chip chip-number">Number</span>|
|day|<span class="chip chip-number">Number</span>|
|hour|<span class="chip chip-number">Number</span>|
|minute|<span class="chip chip-number">Number</span>|
|second|<span class="chip chip-number">Number</span>|


### Make Time

<span class="chip chip-InstantInTime">Returns: <i>Instantintime</i></span> 

Allows the user to set the time of the clock - Valid format is hh:mm:ss

[[Method('Clock', 'Make Time', True, 'hour', 'minute', 'second')]]

| Params | []() |
|--------|------|
|hour|<span class="chip chip-number">Number</span>|
|minute|<span class="chip chip-number">Number</span>|
|second|<span class="chip chip-number">Number</span>|


### Minute

<span class="chip chip-number">Returns: <i>Number</i></span> 

The minute of the hour

[[Method('Clock', 'Minute', True, 'instant')]]

| Params | []() |
|--------|------|
|instant|<span class="chip chip-InstantInTime">Instantintime</span>|


### Month

<span class="chip chip-number">Returns: <i>Number</i></span> 

The month of the year represented as a number from 1 to 12)

[[Method('Clock', 'Month', True, 'instant')]]

| Params | []() |
|--------|------|
|instant|<span class="chip chip-InstantInTime">Instantintime</span>|


### Month Name

<span class="chip chip-text">Returns: <i>Text</i></span> 

The name of the month

[[Method('Clock', 'Month Name', True, 'instant')]]

| Params | []() |
|--------|------|
|instant|<span class="chip chip-InstantInTime">Instantintime</span>|


### Now

<span class="chip chip-InstantInTime">Returns: <i>Instantintime</i></span> 

The current instant in time read from phone's clock

[[Method('Clock', 'Now', True)]]

### Second

<span class="chip chip-number">Returns: <i>Number</i></span> 

The second of the minute

[[Method('Clock', 'Second', True, 'instant')]]

| Params | []() |
|--------|------|
|instant|<span class="chip chip-InstantInTime">Instantintime</span>|


### System Time

<span class="chip chip-number">Returns: <i>Number</i></span> 

The phone's internal time

[[Method('Clock', 'System Time', True)]]

### Weekday

<span class="chip chip-number">Returns: <i>Number</i></span> 

The day of the week represented as a number from 1 (Sunday) to 7 (Saturday)

[[Method('Clock', 'Weekday', True, 'instant')]]

| Params | []() |
|--------|------|
|instant|<span class="chip chip-InstantInTime">Instantintime</span>|


### Weekday Name

<span class="chip chip-text">Returns: <i>Text</i></span> 

The name of the day of the week

[[Method('Clock', 'Weekday Name', True, 'instant')]]

| Params | []() |
|--------|------|
|instant|<span class="chip chip-InstantInTime">Instantintime</span>|


### Year

<span class="chip chip-number">Returns: <i>Number</i></span> 

The year

[[Method('Clock', 'Year', True, 'instant')]]

| Params | []() |
|--------|------|
|instant|<span class="chip chip-InstantInTime">Instantintime</span>|


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