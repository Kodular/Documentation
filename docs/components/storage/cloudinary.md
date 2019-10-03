# Cloudinary

## Overview

The **Cloudinary** component allows you to upload and store media assets (such as images, videos and audio) to [Cloudinary.com](https://cloudinary.com/){:target = "_blank"}

## Methods

### Upload Media
[[Method('Cloudinary', 'Upload Media', False, 'path')]]

Use this block to upload the specified media file to your Cloudinary media library


## Events

### Media Uploaded
[[Event('Cloudinary', 'Media Uploaded', 'response Content', 'url')]]

\[ Text `response Content`, Text `url` \]

Triggered when media is uploaded.

Params           |  []()       
---------------- | ------- 
`response Content`          | **Text:**  Tells you whether or not the media was successfully uploaded.
`url`          | **Text:**  The URL of the uploaded media file.