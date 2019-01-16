# Tab Layout


## Overview
A **Tab Layout** is a swipeable visible component where you can add tabs. It provides horizontal layout to display tabs on the screen.

<br><br>
![Tab Layout](/assets/images/components/user-interface/tab-layout/TabLayout.gif)

A demo of **Tab Layout**.


## Properties

### Get Current Tab

![Get Current Tab](/assets/images/components/user-interface/tab-layout/p_getcurrenttab.jpg)

_**\(** Getter only **\)**
`Type: Text`_

Returns the current selected tab.


### Select Tab

![Select Tab](/assets/images/components/user-interface/tab-layout/p_selecttab.jpg)

_**\(** Setter only **\)**
`Type: Text`_

Selects a tab which is then the active tab.


### Tabs Active Text Colour

![Tabs Active Text Colour](/assets/images/components/user-interface/tab-layout/p_tabactivetextcolor.jpg)

_**\(** Getter + Setter **\)**
`Type: Colour`_

Determines text's colour of the current active tab.


### Tabs Background Colour

![Tabs Background Colour](/assets/images/components/user-interface/tab-layout/p_tabsbackgroundcolor.jpg)

_**\(** Getter + Setter **\)**
`Type: Colour`_

Determines background colour of tabs.


### Tabs Indicator Colour

![Tabs Indicator Colour](/assets/images/components/user-interface/tab-layout/p_tabsindicatorcolor.jpg)

_**\(** Getter + Setter **\)**
`Type: Colour`_

Determines indicator colour of the tabs.


### Tabs Mode

![Tabs Mode](/assets/images/components/user-interface/tab-layout/p_tabsmode.jpg)

_**\(** Getter + Setter **\)**
`Type: Number`_

Determines the mode of the tabs. If no mode is set, 'scrollable' is set as default. Use '0' for 'Scrollable and '1' for 'Fixed'.


### Tabs Text Colour

![Tabs Text Colour](/assets/images/components/user-interface/tab-layout/p_tabstextcolor.jpg)

_**\(** Getter + Setter **\)**
`Type: Colour`_

Determines text's colour of not selected tab.


### Visible

![Visible](/assets/images/components/user-interface/tab-layout/p_visible.jpg)

_**\(** Getter + Setter **\)**
`Type: Boolean`_

Determines wheather the tabs are visible on the screen or not.


### Width

![Width](/assets/images/components/user-interface/tab-layout/p_width.jpg)

_**\(** Getter + Setter **\)**
`Type: Number`_

Determines the width with which the tabs are displayed.


### Width Percent

![Width Percent](/assets/images/components/user-interface/tab-layout/p_widthpercent.jpg)

_**\(** Setter only **\)**
`Type: Number`_

Determines the width with which the tabs are displayed in terms of precentage of the whole screen width.


## Methods

### Add New Tab

![Add New Tab](/assets/images/components/user-interface/tab-layout/m_addnewtab.jpg)

_**\(** Text `name`, Text `icon`**\)**_

Adds a new tab to the **Tab Layout**.

Params               | []()
-------------------- | ------------
`name `              | **Text:** The name of the tab.
`icon `              | **Text:** The name of the image that you want to set as icon of the tab. Leave blank if you don't want an icon.

!!! caution "Note"
    The image that you want to set as the icon of a tab must be uploaded to the assets.


### Add New Tab At

![Add New Tab At](/assets/images/components/user-interface/tab-layout/m_addnewtabat.jpg)

_**\(** Text `name`, Text `icon`, Number `position`**\)**_

Adds a new tab to the **Tab Layout** at the given position.

Params               | []()
-------------------- | ------------
`name `              | **Text:** The name of the tab.
`icon `              | **Text:** The name of the image that you want to set as icon of the tab. Leave blank if you don't want an icon.
`position `          | **Number:** The position of the tab. For example, 3.




    

### Count Tabs

![Count Tabs](/assets/images/components/user-interface/tab-layout/m_counttabs.jpg)

_**\(**None**\)**_

Returns the number of current added tabs.


### Remove All Tabs

![Remove All Tabs](/assets/images/components/user-interface/tab-layout/m_removealltabs.jpg)

_**\(**None**\)**_

Removes all the tabs from **Tab Layout**.


### Remove All Tab At

![Remove All Tabs At](/assets/images/components/user-interface/tab-layout/m_removealltabat.jpg)

_**\(** Number `position`**\)**_

Removes the given tab the tabs from **Tab Layout**.


## Events

### Tab Item Selected

![Tab Item Selected](/assets/images/components/user-interface/tab-layout/e_tabitemselected.jpg)

_**\(** Text `tab`, Number `position`**\)**_

Indicates that a item in **Tab Layout** is selected.

Params               | []()
-------------------- | ------------
`tab`                | **Text:** The name of the tab.
`position`           | **Number:** The position of the tab. For example, 3.
