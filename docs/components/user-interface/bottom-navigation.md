

# Bottom Navigation

Bottom Navigation menu is used as a way to provide movement through the primary destinations of your app.
It is used to navigate between the top-level sections of an app.

For example, if your app is for displaying the various files in the storage, you can have a **Bottom Navigation** menu for
the showing various files in one section, only the audio files in one section, only the video files in one section, only the documents 
in one section. Now this is a right usage of **Bottom Navigation** menu, since these are the main sections of this particular app and
they facilitate navigation thorough them. 

It is recommended that this be used only to provide the navigation to the main sections of your app
to make the app better in terms of user experience.


<br><br>
![Preview of bottom nav](/assets/images/components/user-interface/bottom-navigation/preview.png){: class="preview-img"}

Bottom Navigation menu
{: .img-caption}


## Anatomy

* `title` - The name of the menu item that will shown in the Bottom Navigation menu.
* `image` - The icon that will be shown above the `title`
<br><br>
![Anatomy of bottom nav](/assets/images/components/user-interface/bottom-navigation/anatomy.png){: class="preview-img"}

The structure of Bottom Navigation menu item
{: .img-caption}



## Properties

### Background Color

_**\(** Getter + Setter **\)**    
`Type: Color`_

The background color of the **Bottom Navigation Menu**.


### Selected Color

_**\(** Getter + Setter **\)**    
`Type: Color`_

The color of the selected item of the **Bottom Navigation Menu**.


### Unselected Color

_**\(** Getter + Setter **\)**    
`Type: Color`_

The color of the unselected items of the Bottom Navigation Menu


{!includes/visible-property.md!}


## Methods


### Add Item
_**\(**  Number `id`, Text `title`, Asset `image`  **\)**_

Adds an item to the **Bottom Navigation** menu.s\

Params               | []() 
-------------------- | ---------- 
`id`                 | **Number:** The `item` added to the Bottom Navigation is identified with this ID. Should be unique for every `item` added.
`title`              | **Text:** The title text to show in the menu
`image`              | **Text:** The icon to show above the `title`


### Remove All Items
_**\(**  None  **\)**_

Removes all items from the **Bottom Navigation**.


### Remove Item
_**\(**  Number `id`  **\)**_

Removes a specific item from the **Bottom Navigation**.

Params               | []() 
-------------------- | ---------- 
`id`                 | **Number:** The ID of the `item` which is to be removed.


### Select Item
_**\(**  Number `id`  **\)**_

Selects a particular item from the **Bottom Navigation**.

Params               | []() 
-------------------- | ---------- 
`id`                 | **Number:** The ID of the `item` to be selected.


### Update Item
_**\(**  Number `id`, Text `title`, Asset `image`  **\)**_

Updates the text and image of an item which is already existing with a specific ID in the **Bottom Navigation**.

Params               | []() 
-------------------- | ---------- 
`id`                 | **Number:** The ID of the `item` to be updated.
`title`              | **Text:** The new title to be set instead of the old one.
`image`              | **Asset:** The image that is updated instead of the previous one.


## Events


### Item Selected
_**\(**  Number `id`, Text `title`  **\)**_

Indicates that an `item` has been selected(clicked by the user) from the **Bottom Navigation**.

Params               | []() 
-------------------- | ---------- 
`id`                 | **Number:** The ID of the `item` that was selected.
`title`              | **Text:** The title of the `item` that was selected.
