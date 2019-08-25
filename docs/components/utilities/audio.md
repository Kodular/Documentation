# Audio


## Overview

The **Audio** component can be used to handle the device's audio and ringer settings. It can also be used to set the sound settings of individual components.


## Properties

### Get Audio Mode
![](/assets/images/components/utilities/audio/p_get-audio-mode.png)

\[ Getter only | Blocks only \]  
`Type: Text`

The current audio mode of the device.

Options              | []()
-------------------- | ------------
`NORMAL`             | The device is currently in the normal audio mode.
`RINGTONE`           | The ringtone of the device is currently playing, indicating an incoming call is being signaled.
`CALL`               | The device is currently engaged in a telephony call.
`COMMUNICATION`      | The device is currently engaged in a VoIP or chat communication.


### Show UI
![](/assets/images/components/utilities/audio/d_show-ui.png) ![](/assets/images/components/utilities/audio/p_show-ui.png)

\[ Getter + Setter \]  
`Type: Boolean`

Determines if the system's audio manager UI is to be shown when audio manager actions are performed.

* `True` - The system's audio manager UI will be visible.
* `False` - The system's audio manager UI will be hidden.

![](/assets/images/components/utilities/audio/pr_show-ui.gif#phone)
Device UI shown when changing the volume percentage using the [Volume Music](#volume-music) block.
{: .img-caption}


### Volume Alarm
![](/assets/images/components/utilities/audio/p_volume-alarm.png)

\[ Getter + Setter | Blocks only \]  
`Type: Number`

The volume of the device's alarm sounds in percentage.


### Volume Music
![](/assets/images/components/utilities/audio/p_volume-music.png)

\[ Getter + Setter | Blocks only \]  
`Type: Number`

The volume of the device's music and other ambient sounds in percentage.


### Volume Ring
![](/assets/images/components/utilities/audio/p_volume-ring.png)

\[ Getter + Setter | Blocks only \]  
`Type: Number`

The volume of the device's ringtone in percentage.


## Methods

### Is Sound Effects Enabled
![](/assets/images/components/utilities/audio/m_is-audio-effects-enabled.png)

\[ Component `component` \]

Returns `True` if sound effects (click and touch sounds) for the component are enabled, `False` otherwise.

Params           |  []()       
---------------- | ------- 
`component`      | **Component:**  The component of which the audio status is to be returned.


### Ringer Mode Normal
![](/assets/images/components/utilities/audio/m_ringer-mode-normal.png)

\[ None \]

Sets the device's ringer mode to `NORMAL`. All audio will play normally once this method is called.


### Ringer Mode Silent
![](/assets/images/components/utilities/audio/m_ringer-mode-silent.png)

\[ None \] 

Sets the device's ringer mode to `SILENT`. All audio will be silenced once this method is called.


### Ringer Mode Vibrate
![](/assets/images/components/utilities/audio/m_ringer-mode-vibrate.png)

\[ None \] 

Sets the device's ringer mode to `VIBRATE`. All audio will be silenced but vibrations permitted once this method is called.


### Sound Effects Enabled
![](/assets/images/components/utilities/audio/m_sound-effects-enabled.png)

\[ Component `component`, Boolean `enabled` \] 

Sets the sound effect status of the component passed to the method. If `True`, click and touch sounds will play as normal. If `False`, all sounds originating from interactions with the component will be silenced.

Params           |  []()       
---------------- | ------- 
`component`      | **Component:**  The component of which the audio status is to be set.
`enabled`        | **Boolean:**  `True` if sounds are to be enabled for the component, `False` otherwise.



## Events

### Error Occurred
![](/assets/images/components/utilities/audio/e_error-occurred.png)

\[ Text `error Message` \] 

Triggers when an error occurred in changing the audio settings of the device.

Params             |  []()       
------------------ | ------- 
`error Message`    | **Text:**  The message of the error that occurred
