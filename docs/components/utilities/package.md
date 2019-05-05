# Package

## Overview
**Package** is a non-visible component that allows users to get some information about the application packages. 

## Properties

### App Name

![App Name](/assets/images/components/utilities/package/p_app-name.png)

_**\(** Getter only**\)**_

`Type: Number`

Returns the name of the currrent running application.

### Package Name

![Package Name](/assets/images/components/utilities/package/p_package-name.png)

_**\(** Getter only**\)**_

`Type: Number`

Returns the package name of the currrent running application.

### Version Code

![Version Code](/assets/images/components/utilities/package/p_version-code.png)

_**\(** Getter only**\)**_

`Type: Number`

Returns the version code of the currrent running application.

### Version Name

![Version Name](/assets/images/components/utilities/package/p_version-name.png)

_**\(** Getter only**\)**_

`Type: Alphanumerical

Returns the version name of the currrent running application.

## Methods

### App Name From

![App Name From](/assets/images/components/user-interface/utilities/package/m_app-name-from.png)

_**\(** Text `package Name` **\)**_

Returns the name of the app from the given package name.

Params               |  []()       
-------------------- | ------- 
`package Name`       | **Text:**  The package name of the app whose name has to be returned. For example, io.kodular.myfirstapp

### Get Package Icon

![Get Package Icon](/assets/images/components/user-interface/utilities/package/m_get-package-icon.png)

_**\(** Text `package Name` **\)**_

Returns the icon of the app from the given package name.

Params               |  []()       
-------------------- | ------- 
`package Name`       | **Text:**  The package name of the app whose name has to be returned. For example, io.kodular.myfirstapp

### Is Package Installed

![Is Package Installed](/assets/images/components/user-interface/utilities/package/m_is-package-installed.png)

_**\(** Text `package Name` **\)**_

Returns true if the package (app) is installed.

Params               |  []()       
-------------------- | ------- 
`package Name`       | **Text:**  The package name of the app whose name has to be returned. For example, io.kodular.myfirstapp

### Version Code From

![Version Code From](/assets/images/components/user-interface/utilities/package/m_version-code-from.png)

_**\(** Text `package Name` **\)**_

Returns the version code of the app from the given package name.

Params               |  []()       
-------------------- | ------- 
`package Name`       | **Text:**  The package name of the app whose name has to be returned. For example, io.kodular.myfirstapp

### Version Name From

![Version Name From](/assets/images/components/user-interface/utilities/package/m_version-name-from.png)

_**\(** Text `package Name` **\)**_

Returns the version name of the app from the given package name.

Params               |  []()       
-------------------- | ------- 
`package Name`       | **Text:**  The package name of the app whose name has to be returned. For example, io.kodular.myfirstapp

### Is Permission Granted

![Is Permission Granted](/assets/images/components/user-interface/utilities/package/m_is-permission-granted.png)

_**\(** Text `permission Name`, Text `package Name` **\)**_

Returns the version code of the app from the given package name.

Params               |  []()       
-------------------- | ------- 
`permission Name`    | **Text:** The name of the permision that has to be checked. For example, READ_CALENDER.
`package Name`       | **Text:**  The package name of the app whose name has to be returned. For example, io.kodular.myfirstapp















