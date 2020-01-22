# Clock

| Category | Version | Requires |
|:--------:|:-------:|:--------:|
|Sensors|4|API 19 - Android 4.4 - 4.4.4 KitKat|

:mag: {>>Non-visible component<<}

## Overview

_<p>Non-visible component that provides the instant in time using the internal clock on the phone. It can fire a timer at regularly set intervals and perform time calculations, manipulations, and conversions.</p> <p>Methods to convert an instant to text are also available. Acceptable patterns are empty string, MM/DD/YYYY HH:mm:ss a, or MMM d, yyyyHH:mm. The empty string will provide the default format, which is "MMM d, yyyy HH:mm:ss a" for FormatDateTime "MMM d, yyyy" for FormatDate. To see all possible format, please see <a href="https://docs.oracle.com/javase/7/docs/api/java/text/SimpleDateFormat.html" _target="_blank">here</a>. </p> _

## Properties

### Timer Always Fires

<small>Available as Common Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Clock', 'Timer Always Fires')]]

| Type | Default |
|:----:|:-------:|
|boolean|True|

Will fire even when application is not showing on the screen if true

### Timer Enabled

<small>Available as Common Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Clock', 'Timer Enabled')]]

| Type | Default |
|:----:|:-------:|
|boolean|True|

Fires timer if true

### Timer Interval

<small>Available as Common Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Clock', 'Timer Interval')]]

| Type | Default |
|:----:|:-------:|
|number|1000|

Interval between timer events in ms