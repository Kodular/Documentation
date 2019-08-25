# Screenshot

## Overview

The **Screenshot** component can, among many other things, be used to take screenshots of the current screen.

## Properties

### Allow Screenshots
![](/assets/images/components/utilities/screenshot/d_allow-screenshots.png) ![](/assets/images/components/utilities/screenshot/p_allow-screenshots.png)

\[ Setter only \]  
`Type: Boolean`

Determines if the user can take screenshots of the current screen.

* `True` - The user can take screenshots of the current screen.
* `False` - The user will see a "Screenshots blocked" notice when the they try to take a screenshot of the current screen. 


### Dim Amount
![](/assets/images/components/utilities/screenshot/d_dim-amount.png) ![](/assets/images/components/utilities/screenshot/p_dim-amount.png)

\[ Getter + Setter \]  
`Type: Number`

The amount by which the space behind the screenshot preview should be dimmed. `0.0` corresponds to no dimming of the background, and `1.0` will completely blacken the background.


### File Name
![](/assets/images/components/utilities/screenshot/d_file-name.png) ![](/assets/images/components/utilities/screenshot/p_file-name.png)

\[ Getter + Setter \]  
`Type: Text`

The name by which the screenshot taken will be saved. You can also specify the full path of the image to store it in an external directory. The file name is "Screenshot.png" by default.


### Use Large Notification
![](/assets/images/components/utilities/screenshot/d_use-large-notification.png) ![](/assets/images/components/utilities/screenshot/p_use-large-notification.png)

\[ Getter + Setter \]  
`Type: Boolean`

Determines the size of the notification that is sent to the user (if [Show Notification](#show-notification) is set to `True`) after the screenshot is taken.

* `True` - A large notification is shown to the user with the notification title and a preview of the screenshot that was taken.
* `False` - A small notification is shown to the user with only the notification title.


### Show Notification Share Button
![](/assets/images/components/utilities/screenshot/d_show-notification-share-button.png) ![](/assets/images/components/utilities/screenshot/p_show-notification-share-button.png)

\[ Getter + Setter \]  
`Type: Boolean`

Determines if a `Share` button is to be included in the notification that is sent to the user (if [Show Notification](#show-notification) is set to `True`) after the screenshot is taken.

* `True` - A `Share` button is included in the notification, clicking on which will bring up the system's Sharing menu.
* `False` - No `Share` icon will be shown to the user.


### Notification Share Title
![](/assets/images/components/utilities/screenshot/d_notification-share-title.png) ![](/assets/images/components/utilities/screenshot/p_notification-share-title.png)

\[ Getter + Setter \]  
`Type: Text`

The text of the `Share` button that is sent to the user if [Show Notification Share Button](#show-notification-share-button) is set to `True`.

![share-preview](/assets/images/components/utilities/screenshot/pr_share-menu.png#phone)

Share menu triggered after the `Share` button was clicked.
{: .img-caption}


### Notification Title
![](/assets/images/components/utilities/screenshot/d_notification-title.png) ![](/assets/images/components/utilities/screenshot/p_notification-title.png)

\[ Getter + Setter \]  
`Type: Text`

The title of the notification that is sent to the user (if [Show Notification](#show-notification) is set to `True`) after a screenshot has been taken.


### Show Notification
![](/assets/images/components/utilities/screenshot/d_show-notification.png) ![](/assets/images/components/utilities/screenshot/p_show-notification.png)

\[ Getter + Setter \]  
`Type: Boolean`

Determines if the user should be sent a notification after a screenshot has been taken.

* `True` - A notification is sent to the user.
* `False` - No notification is sent to the user.

![notification-preview](/assets/images/components/utilities/screenshot/pr_notification.png#phone)

Small notification (top) and large notification (bottom).
{: .img-caption}


### Show Preview
![](/assets/images/components/utilities/screenshot/d_show-preview.png) ![](/assets/images/components/utilities/screenshot/p_show-preview.png)

\[ Getter + Setter \]  
`Type: Boolean`

Determines if the user should be shown a preview of the screenshot that was just taken.

* `True` - A preview of the screenshot is shown to the user.
* `False` - No preview of the screenshot is shown to the user.

![screenshot-preview](/assets/images/components/utilities/screenshot/pr_preview.png#phone)

Screenshot preview.
{: .img-caption}


### Are Permissions Granted
![](/assets/images/components/utilities/screenshot/p_are-permissions-granted.png)

\[ Getter | Blocks only \]  
`Type: Boolean`

Determines if the app has been given permissions to read and write the device's external storage.

* `True` - Read/write permissions have been granted.
* `False` - Permissions have not been granted.


### Is Read Permission Granted
![](/assets/images/components/utilities/screenshot/p_is-read-permission-granted.png)

\[ Getter | Blocks only \]  
`Type: Boolean`

Determines if the app has been given permissions to read from the device's external storage.

* `True` - Read permissions have been granted.
* `False` - Permissions have not been granted.


### Is Write Permission Granted
![](/assets/images/components/utilities/screenshot/p_is-write-permission-granted.png)

\[ Getter | Blocks only \]  
`Type: Boolean`

Determines if the app has been given permissions to write to the device's external storage.

* `True` - Write permissions have been granted.
* `False` - Permissions have not been granted.

## Methods

### Take Screenshot
![](/assets/images/components/utilities/screenshot/m_take-screenshot.png)

\[ None \]

Takes a screenshot of the currently open screen.

## Events

### Got Screenshot
![](/assets/images/components/utilities/screenshot/e_got-screenshot.png)

\[ Text `image` \]

Triggers when the screenshot that was taken has been saved to the device's storage.

Params           |  []()       
---------------- | ------- 
`image`          | **Text:**  The path to the screenshot that was just taken.