# Keyguard Manager

## Overview

The **Keyguard Manager** component can be used to authorize users using one of the security measures (PIN, fingerprint, etc.) set on their devices.


## Properties

### Description
![](/assets/images/components/utilities/keyguard-manager/d_description.png) ![](/assets/images/components/utilities/keyguard-manager/p_description.png)

\[ Getter + Setter \]  
`Type: Text`

The description text shown to the user in the authorization screen.


### Title
![](/assets/images/components/utilities/keyguard-manager/d_title.png) ![](/assets/images/components/utilities/keyguard-manager/p_title.png)

\[ Getter + Setter \]  
`Type: Text`

The title of the authorization screen shown to the user.


### Is Device Locked
![](/assets/images/components/utilities/keyguard-manager/p_is-device-locked.png)

\[ Getter only | Blocks only \]  
`Type: Boolean`

Determines if the device is currently locked and requires the user's PIN, fingerprint, or facial identification to be unlocked.

* `True` - The device is locked.
* `False` - The device is unlocked.

!!! caution
    This property will work only on devices running Android 5.1 (Lollipop) or later.


### Is Device Secure
![](/assets/images/components/utilities/keyguard-manager/p_is-device-secure.png)

\[ Getter only | Blocks only \]  
`Type: Boolean`

Determines if a security option (like a PIN, fingerprint, or voice) is currently being used to secure the device. If this property is `False`, then the [Is Device Locked](#is-device-locked) property **cannot** be `True`, but the opposite needn't be the case. 

* `True` - The device is currently being secured using an authorization measure.
* `False` - The device has no currently set security options.

!!! caution
    This property will work only on devices running Android 6.0 (Marshmallow) or later.


### Is Keyguard Locked
![](/assets/images/components/utilities/keyguard-manager/p_is-keyguard-locked.png)

\[ Getter only | Blocks only \]  
`Type: Boolean`

Determines if the screen is showing over a lock screen. This block can return `True` only if the app can run when locked (can be set using [Show When Locked](#show-when-locked)). 

* `True` - The keyguard has been locked.
* `False` - The keyguard is unlocked and the user has already been authorized.

!!! info
		A locked keyguard does not mean a locked device. For example, in devices where "on body detection" is turned on, switching the screen off can lock the keyguard but not the device.


### Is Keyguard Secure
![](/assets/images/components/utilities/keyguard-manager/p_is-keyguard-secure.png)

\[ Getter only | Blocks only \]  
`Type: Boolean`

Determines if the keyguard has been secured using a device security measure. To check if the device has security options enabled, use the [Is Device Secure](#is-device-secure) block. 

* `True` - The keyguard is currently being secured using an authorization measure.
* `False` - The keyguard has no currently set security options.


## Methods

### Request Dismiss Keyguard
![](/assets/images/components/utilities/keyguard-manager/m_request-dismiss-keyguard.png)

\[ None \]

Dismisses the keyguard if the device is currently locked, and prompts the user to unlock the device if it was locked manually. Results of the dismissal operation can be accessed from the [On Dismiss Keyguard Request](#on-dismiss-keyguard-request) block. 

!!! caution
    This method will work only on devices running Android 8.0 (Oreo) or later.


### Show Authentication Screen
![](/assets/images/components/utilities/keyguard-manager/m_show-authentication-screen.png)

\[ None \]

Shows the user an authorization screen. The user can choose to use any of the security options set on their device to authorize themselves. Alternately, they can also choose to cancel the authorization request. If the user is successfully authorized, the [On Authentication Request](#on-authentication-request) event is triggered.


### Show When Locked
![](/assets/images/components/utilities/keyguard-manager/m_show-when-locked.png)

\[ Boolean `enabled` \]

Specifies whether the screen should be shown even if the device is currently locked.
 
Params             |  []()       
------------------ | ------- 
`enabled`          | **Boolean:**  `True` if the screen is to be shown above the lock screen, `False` otherwise.


## Events

### On Authentication Request
![](/assets/images/components/utilities/keyguard-manager/e_on-authentication-request.png)

\[ Boolean `is Authenticated` \]

Triggers when [Show Authentication Screen](#show-authentication-screen) has been called, and the user has finished the authentication process.

Params             |  []()       
------------------ | ------- 
`is Authenticated` | **Boolean:**  `True` if the user has been authorized, `False` if the authorization request failed or if the user chose to cancel.


### On Dismiss Keyguard Request
![](/assets/images/components/utilities/keyguard-manager/e_on-dismiss-keyguard-request.png)

\[ Boolean `succeeded`, Boolean `cancelled` \]

Triggers after [Request Dismiss Keyguard](#request-dismiss-keyguard) has been called.

Params             |  []()       
------------------ | ------- 
`succeeded`        | **Boolean:**  `True` if the keyguard was dismissed after the user entered their authorization credentials (like a PIN or fingerprint), `False` otherwise.
`cancelled`        | **Boolean:**  `True` if the keyguard was dismissed without the user having to enter their credentials, `False` otherwise.