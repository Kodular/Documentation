# Clock

| Category | Requires | Version |
|:--------:|:-------:|:--------:|
|**Sensors**|<span class="chip chip-any">API 19, Android 4.4 - 4.4.4 KitKat</span>|<span class="chip chip-number">4</span>|

:mag: {>>Non-Visible component<<}

## Overview

Non-visible component that provides the instant in time using the internal clock on the phone. It can fire a timer at regularly set intervals and perform time calculations, manipulations, and conversions.

 

Methods to convert an instant to text are also available. Acceptable patterns are empty string, MM/DD/YYYY HH:mm:ss a, or MMM d, yyyyHH:mm. The empty string will provide the default format, which is "MMM d, yyyy HH:mm:ss a" for FormatDateTime "MMM d, yyyy" for FormatDate. To see all possible format, please see <a _target="_blank" href="https://docs.oracle.com/javase/7/docs/api/java/text/SimpleDateFormat.html">here</a>.

## Events

### Timer

Timer has gone off.

<div class="block" ai2-block="event" not-rendered="true" value="%7B%22componentName%22:%20%22Clock%22,%20%22name%22:%20%22Timer%22,%20%22param%22:%20%5B%5D%7D"></div>

## Methods

### Add Days

<span class="chip chip-unknown">Returns: <i>Instantintime</i></span>

An instant in time some days after the argument

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22Clock%22,%20%22name%22:%20%22Add%20Days%22,%20%22output%22:%20true,%20%22param%22:%20%5B%22instant%22,%20%22quantity%22%5D%7D"></div>

| Params | []() |
|--------|------|
|instant|<span class="chip chip-unknown">Instantintime</span>|
|quantity|<span class="chip chip-number">Number</span>|

### Add Duration

<span class="chip chip-unknown">Returns: <i>Instantintime</i></span>

An instant in time some duration after the argument

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22Clock%22,%20%22name%22:%20%22Add%20Duration%22,%20%22output%22:%20true,%20%22param%22:%20%5B%22instant%22,%20%22quantity%22%5D%7D"></div>

| Params | []() |
|--------|------|
|instant|<span class="chip chip-unknown">Instantintime</span>|
|quantity|<span class="chip chip-number">Number</span>|

### Add Hours

<span class="chip chip-unknown">Returns: <i>Instantintime</i></span>

An instant in time some hours after the argument

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22Clock%22,%20%22name%22:%20%22Add%20Hours%22,%20%22output%22:%20true,%20%22param%22:%20%5B%22instant%22,%20%22quantity%22%5D%7D"></div>

| Params | []() |
|--------|------|
|instant|<span class="chip chip-unknown">Instantintime</span>|
|quantity|<span class="chip chip-number">Number</span>|

### Add Minutes

<span class="chip chip-unknown">Returns: <i>Instantintime</i></span>

An instant in time some minutes after the argument

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22Clock%22,%20%22name%22:%20%22Add%20Minutes%22,%20%22output%22:%20true,%20%22param%22:%20%5B%22instant%22,%20%22quantity%22%5D%7D"></div>

| Params | []() |
|--------|------|
|instant|<span class="chip chip-unknown">Instantintime</span>|
|quantity|<span class="chip chip-number">Number</span>|

### Add Months

<span class="chip chip-unknown">Returns: <i>Instantintime</i></span>

An instant in time some months after the argument

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22Clock%22,%20%22name%22:%20%22Add%20Months%22,%20%22output%22:%20true,%20%22param%22:%20%5B%22instant%22,%20%22quantity%22%5D%7D"></div>

| Params | []() |
|--------|------|
|instant|<span class="chip chip-unknown">Instantintime</span>|
|quantity|<span class="chip chip-number">Number</span>|

### Add Seconds

<span class="chip chip-unknown">Returns: <i>Instantintime</i></span>

An instant in time some seconds after the argument

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22Clock%22,%20%22name%22:%20%22Add%20Seconds%22,%20%22output%22:%20true,%20%22param%22:%20%5B%22instant%22,%20%22quantity%22%5D%7D"></div>

| Params | []() |
|--------|------|
|instant|<span class="chip chip-unknown">Instantintime</span>|
|quantity|<span class="chip chip-number">Number</span>|

### Add Weeks

<span class="chip chip-unknown">Returns: <i>Instantintime</i></span>

An instant in time some weeks after the argument

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22Clock%22,%20%22name%22:%20%22Add%20Weeks%22,%20%22output%22:%20true,%20%22param%22:%20%5B%22instant%22,%20%22quantity%22%5D%7D"></div>

| Params | []() |
|--------|------|
|instant|<span class="chip chip-unknown">Instantintime</span>|
|quantity|<span class="chip chip-number">Number</span>|

### Add Years

<span class="chip chip-unknown">Returns: <i>Instantintime</i></span>

An instant in time some years after the argument

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22Clock%22,%20%22name%22:%20%22Add%20Years%22,%20%22output%22:%20true,%20%22param%22:%20%5B%22instant%22,%20%22quantity%22%5D%7D"></div>

| Params | []() |
|--------|------|
|instant|<span class="chip chip-unknown">Instantintime</span>|
|quantity|<span class="chip chip-number">Number</span>|

### Day Of Month

<span class="chip chip-number">Returns: <i>Number</i></span>

The day of the month

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22Clock%22,%20%22name%22:%20%22Day%20Of%20Month%22,%20%22output%22:%20true,%20%22param%22:%20%5B%22instant%22%5D%7D"></div>

| Params | []() |
|--------|------|
|instant|<span class="chip chip-unknown">Instantintime</span>|

### Duration

<span class="chip chip-number">Returns: <i>Number</i></span>

Milliseconds elapsed between instants

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22Clock%22,%20%22name%22:%20%22Duration%22,%20%22output%22:%20true,%20%22param%22:%20%5B%22start%22,%20%22end%22%5D%7D"></div>

| Params | []() |
|--------|------|
|start|<span class="chip chip-unknown">Instantintime</span>|
|end|<span class="chip chip-unknown">Instantintime</span>|

### Duration To Days

<span class="chip chip-number">Returns: <i>Number</i></span>

convert duration to days

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22Clock%22,%20%22name%22:%20%22Duration%20To%20Days%22,%20%22output%22:%20true,%20%22param%22:%20%5B%22duration%22%5D%7D"></div>

| Params | []() |
|--------|------|
|duration|<span class="chip chip-number">Number</span>|

### Duration To Hours

<span class="chip chip-number">Returns: <i>Number</i></span>

convert duration to hours

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22Clock%22,%20%22name%22:%20%22Duration%20To%20Hours%22,%20%22output%22:%20true,%20%22param%22:%20%5B%22duration%22%5D%7D"></div>

| Params | []() |
|--------|------|
|duration|<span class="chip chip-number">Number</span>|

### Duration To Minutes

<span class="chip chip-number">Returns: <i>Number</i></span>

convert duration to minutes

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22Clock%22,%20%22name%22:%20%22Duration%20To%20Minutes%22,%20%22output%22:%20true,%20%22param%22:%20%5B%22duration%22%5D%7D"></div>

| Params | []() |
|--------|------|
|duration|<span class="chip chip-number">Number</span>|

### Duration To Seconds

<span class="chip chip-number">Returns: <i>Number</i></span>

convert duration to seconds

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22Clock%22,%20%22name%22:%20%22Duration%20To%20Seconds%22,%20%22output%22:%20true,%20%22param%22:%20%5B%22duration%22%5D%7D"></div>

| Params | []() |
|--------|------|
|duration|<span class="chip chip-number">Number</span>|

### Duration To Weeks

<span class="chip chip-number">Returns: <i>Number</i></span>

convert duration to weeks

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22Clock%22,%20%22name%22:%20%22Duration%20To%20Weeks%22,%20%22output%22:%20true,%20%22param%22:%20%5B%22duration%22%5D%7D"></div>

| Params | []() |
|--------|------|
|duration|<span class="chip chip-number">Number</span>|

### Format Date

<span class="chip chip-text">Returns: <i>Text</i></span>

Text representing the date of an instant in the specified pattern

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22Clock%22,%20%22name%22:%20%22Format%20Date%22,%20%22output%22:%20true,%20%22param%22:%20%5B%22instant%22,%20%22pattern%22%5D%7D"></div>

| Params | []() |
|--------|------|
|instant|<span class="chip chip-unknown">Instantintime</span>|
|pattern|<span class="chip chip-text">Text</span>|

### Format Date Time

<span class="chip chip-text">Returns: <i>Text</i></span>

Text representing the date and time of an instant in the specified pattern

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22Clock%22,%20%22name%22:%20%22Format%20Date%20Time%22,%20%22output%22:%20true,%20%22param%22:%20%5B%22instant%22,%20%22pattern%22%5D%7D"></div>

| Params | []() |
|--------|------|
|instant|<span class="chip chip-unknown">Instantintime</span>|
|pattern|<span class="chip chip-text">Text</span>|

### Format Time

<span class="chip chip-text">Returns: <i>Text</i></span>

Text representing the time of an instant

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22Clock%22,%20%22name%22:%20%22Format%20Time%22,%20%22output%22:%20true,%20%22param%22:%20%5B%22instant%22%5D%7D"></div>

| Params | []() |
|--------|------|
|instant|<span class="chip chip-unknown">Instantintime</span>|

### Get Millis

<span class="chip chip-number">Returns: <i>Number</i></span>

The instant in time measured as milliseconds since 1970.

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22Clock%22,%20%22name%22:%20%22Get%20Millis%22,%20%22output%22:%20true,%20%22param%22:%20%5B%22instant%22%5D%7D"></div>

| Params | []() |
|--------|------|
|instant|<span class="chip chip-unknown">Instantintime</span>|

### Hour

<span class="chip chip-number">Returns: <i>Number</i></span>

The hour of the day

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22Clock%22,%20%22name%22:%20%22Hour%22,%20%22output%22:%20true,%20%22param%22:%20%5B%22instant%22%5D%7D"></div>

| Params | []() |
|--------|------|
|instant|<span class="chip chip-unknown">Instantintime</span>|

### Make Date

<span class="chip chip-unknown">Returns: <i>Instantintime</i></span>

Allows the user to set the clock to be a date value
Valid values for the month field are 1-12 and 1-31 for the day field.

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22Clock%22,%20%22name%22:%20%22Make%20Date%22,%20%22output%22:%20true,%20%22param%22:%20%5B%22year%22,%20%22month%22,%20%22day%22%5D%7D"></div>

| Params | []() |
|--------|------|
|year|<span class="chip chip-number">Number</span>|
|month|<span class="chip chip-number">Number</span>|
|day|<span class="chip chip-number">Number</span>|

### Make Instant

<span class="chip chip-unknown">Returns: <i>Instantintime</i></span>

An instant in time specified by MM/dd/YYYY hh:mm:ss or MM/dd/YYYY or hh:mm

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22Clock%22,%20%22name%22:%20%22Make%20Instant%22,%20%22output%22:%20true,%20%22param%22:%20%5B%22from%22%5D%7D"></div>

| Params | []() |
|--------|------|
|from|<span class="chip chip-text">Text</span>|

### Make Instant From Millis

<span class="chip chip-unknown">Returns: <i>Instantintime</i></span>

An instant in time specified by the milliseconds since 1970.

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22Clock%22,%20%22name%22:%20%22Make%20Instant%20From%20Millis%22,%20%22output%22:%20true,%20%22param%22:%20%5B%22millis%22%5D%7D"></div>

| Params | []() |
|--------|------|
|millis|<span class="chip chip-number">Number</span>|

### Make Instant From Parts

<span class="chip chip-unknown">Returns: <i>Instantintime</i></span>

Allows the user to set the date and time to be displayed when the clock opens
Valid values for the month field are 1-12 and 1-31 for the day field.

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22Clock%22,%20%22name%22:%20%22Make%20Instant%20From%20Parts%22,%20%22output%22:%20true,%20%22param%22:%20%5B%22year%22,%20%22month%22,%20%22day%22,%20%22hour%22,%20%22minute%22,%20%22second%22%5D%7D"></div>

| Params | []() |
|--------|------|
|year|<span class="chip chip-number">Number</span>|
|month|<span class="chip chip-number">Number</span>|
|day|<span class="chip chip-number">Number</span>|
|hour|<span class="chip chip-number">Number</span>|
|minute|<span class="chip chip-number">Number</span>|
|second|<span class="chip chip-number">Number</span>|

### Make Time

<span class="chip chip-unknown">Returns: <i>Instantintime</i></span>

Allows the user to set the time of the clock - Valid format is hh:mm:ss

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22Clock%22,%20%22name%22:%20%22Make%20Time%22,%20%22output%22:%20true,%20%22param%22:%20%5B%22hour%22,%20%22minute%22,%20%22second%22%5D%7D"></div>

| Params | []() |
|--------|------|
|hour|<span class="chip chip-number">Number</span>|
|minute|<span class="chip chip-number">Number</span>|
|second|<span class="chip chip-number">Number</span>|

### Minute

<span class="chip chip-number">Returns: <i>Number</i></span>

The minute of the hour

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22Clock%22,%20%22name%22:%20%22Minute%22,%20%22output%22:%20true,%20%22param%22:%20%5B%22instant%22%5D%7D"></div>

| Params | []() |
|--------|------|
|instant|<span class="chip chip-unknown">Instantintime</span>|

### Month

<span class="chip chip-number">Returns: <i>Number</i></span>

The month of the year represented as a number from 1 to 12)

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22Clock%22,%20%22name%22:%20%22Month%22,%20%22output%22:%20true,%20%22param%22:%20%5B%22instant%22%5D%7D"></div>

| Params | []() |
|--------|------|
|instant|<span class="chip chip-unknown">Instantintime</span>|

### Month Name

<span class="chip chip-text">Returns: <i>Text</i></span>

The name of the month

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22Clock%22,%20%22name%22:%20%22Month%20Name%22,%20%22output%22:%20true,%20%22param%22:%20%5B%22instant%22%5D%7D"></div>

| Params | []() |
|--------|------|
|instant|<span class="chip chip-unknown">Instantintime</span>|

### Now

<span class="chip chip-unknown">Returns: <i>Instantintime</i></span>

The current instant in time read from phone's clock

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22Clock%22,%20%22name%22:%20%22Now%22,%20%22output%22:%20true,%20%22param%22:%20%5B%5D%7D"></div>

### Second

<span class="chip chip-number">Returns: <i>Number</i></span>

The second of the minute

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22Clock%22,%20%22name%22:%20%22Second%22,%20%22output%22:%20true,%20%22param%22:%20%5B%22instant%22%5D%7D"></div>

| Params | []() |
|--------|------|
|instant|<span class="chip chip-unknown">Instantintime</span>|

### System Time

<span class="chip chip-number">Returns: <i>Number</i></span>

The phone's internal time

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22Clock%22,%20%22name%22:%20%22System%20Time%22,%20%22output%22:%20true,%20%22param%22:%20%5B%5D%7D"></div>

### Weekday

<span class="chip chip-number">Returns: <i>Number</i></span>

The day of the week represented as a number from 1 (Sunday) to 7 (Saturday)

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22Clock%22,%20%22name%22:%20%22Weekday%22,%20%22output%22:%20true,%20%22param%22:%20%5B%22instant%22%5D%7D"></div>

| Params | []() |
|--------|------|
|instant|<span class="chip chip-unknown">Instantintime</span>|

### Weekday Name

<span class="chip chip-text">Returns: <i>Text</i></span>

The name of the day of the week

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22Clock%22,%20%22name%22:%20%22Weekday%20Name%22,%20%22output%22:%20true,%20%22param%22:%20%5B%22instant%22%5D%7D"></div>

| Params | []() |
|--------|------|
|instant|<span class="chip chip-unknown">Instantintime</span>|

### Year

<span class="chip chip-number">Returns: <i>Number</i></span>

The year

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22Clock%22,%20%22name%22:%20%22Year%22,%20%22output%22:%20true,%20%22param%22:%20%5B%22instant%22%5D%7D"></div>

| Params | []() |
|--------|------|
|instant|<span class="chip chip-unknown">Instantintime</span>|

## Properties

### Timer Always Fires

<span style="user-select: none;"><span class="chip chip-boolean">Boolean</span>&#32;<span class="chip chip-boolean">Default: <i>True</i></span>&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;<span class="chip chip-rw">Read</span>&#32;<span class="chip chip-rw">Write</span>&#32;-&#32;<span class="chip chip-bd">Designer</span>&#32;<span class="chip chip-bd">Blocks</span>&#32;</span>

Will fire even when application is not showing on the screen if true

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Clock%22,%20%22name%22:%20%22Timer%20Always%20Fires%22,%20%22getter%22:%20true%7D"></div>
<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Clock%22,%20%22name%22:%20%22Timer%20Always%20Fires%22,%20%22getter%22:%20false%7D"></div>

### Timer Enabled

<span style="user-select: none;"><span class="chip chip-boolean">Boolean</span>&#32;<span class="chip chip-boolean">Default: <i>True</i></span>&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;<span class="chip chip-rw">Read</span>&#32;<span class="chip chip-rw">Write</span>&#32;-&#32;<span class="chip chip-bd">Designer</span>&#32;<span class="chip chip-bd">Blocks</span>&#32;</span>

Fires timer if true

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Clock%22,%20%22name%22:%20%22Timer%20Enabled%22,%20%22getter%22:%20true%7D"></div>
<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Clock%22,%20%22name%22:%20%22Timer%20Enabled%22,%20%22getter%22:%20false%7D"></div>

### Timer Interval

<span style="user-select: none;"><span class="chip chip-number">Number</span>&#32;<span class="chip chip-number">Default: <i>1000</i></span>&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;<span class="chip chip-rw">Read</span>&#32;<span class="chip chip-rw">Write</span>&#32;-&#32;<span class="chip chip-bd">Designer</span>&#32;<span class="chip chip-bd">Blocks</span>&#32;</span>

Interval between timer events in ms

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Clock%22,%20%22name%22:%20%22Timer%20Interval%22,%20%22getter%22:%20true%7D"></div>
<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Clock%22,%20%22name%22:%20%22Timer%20Interval%22,%20%22getter%22:%20false%7D"></div>
