# EV3 Sound

| Category | Requires | Version |
|:--------:|:-------:|:--------:|
|LEGO® MINDSTORMS® > EV3|API 19, Android 4.4 - 4.4.4 KitKat|1|

:mag: {>>Non-visible component<<}

## Overview

A component that provides a high-level interface to sound functionalities on LEGO MINDSTORMS EV3 robot.

??? example "Permissions"
    * [android.permission.INTERNET](https://developer.android.com/reference/android/Manifest.permission.html#android.permission.INTERNET)
    * [android.permission.READ_EXTERNAL_STORAGE](https://developer.android.com/reference/android/Manifest.permission.html#android.permission.READ_EXTERNAL_STORAGE)
    * [android.permission.WRITE_EXTERNAL_STORAGE](https://developer.android.com/reference/android/Manifest.permission.html#android.permission.WRITE_EXTERNAL_STORAGE)


## Methods

### Play Tone

Make the robot play a tone.

[[Method('EV3 Sound', 'Play Tone', False, 'volume', 'frequency', 'milliseconds')]]

| Params | []() |
|--------|------|
|volume|<span class="chip chip-number">Number</span>|
|frequency|<span class="chip chip-number">Number</span>|
|milliseconds|<span class="chip chip-number">Number</span>|


### Stop Sound

Stop any sound on the robot.

[[Method('EV3 Sound', 'Stop Sound', False)]]

## Properties

### Bluetooth Client

<span class="chip chip-component">Component</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span> 

The BluetoothClient component that should be used for communication.

[[PropertyBlockGetterAndSetter('EV3 Sound', 'Bluetooth Client')]]