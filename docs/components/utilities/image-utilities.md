# Image Utilities

## Overview
**Image Utilities** is a non-visible component which can load images asynchronous to the specified component. This reduces the loading time of the image making your apps faster.

## Methods

### Load Image Async

![Load Image Async](/assets/images/components/utilities/image-utilities/m_load-image-async.png)

\[ Component `component`, Text `path` \]

Aynchronously loads an image from the given path in the specified component. Asynchronous loading does not block the main UI thread of the app, meaning your app won't temporarily stop responding to user input.

Params               |  []()       
-------------------- | ------- 
`component`          | **Component:**  The component inside which the image has to be loaded
`path`               | **Text:** The path to the image which has to be loaded. The image can be from the app's Assets, an external directory on the device, or from a URL on the internet. 

!!! tip
    It is recommended to use this method when loading large or several images from the internet. Your app will continue to be responsive as the images load in the background.