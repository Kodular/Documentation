# Shell

## Overview

The **Shell** component can be used to run shell commands and to check for superuser access.


## Methods

### Has Super User Apk Installed
![](/assets/images/components/utilities/shell/m_has-super-user-apk-installed.png)

\[ None \]

Returns `True` if any of the six super user access APKs are installed in the device, `False` otherwise.


### Execute
![](/assets/images/components/utilities/shell/m_execute.png)

\[ Text `in` \]

Executes the shell command that has been passed to the method.

Params           |  []()       
---------------- | ------- 
`in`             | **Text:**  The command to be executed.


### Is Rooted
![](/assets/images/components/utilities/shell/m_is-rooted.png)

\[ None \]

Returns `True` if the device has root access, `False` otherwise.


### Is System User
![](/assets/images/components/utilities/shell/m_is-system-user.png)

\[ None \]

Returns `True` if the current user is a system user, `False` otherwise. 

!!! tip
    It is highly likely that the device has been rooted if this method returns true. It is thus recommended that you also check for
    root access using the [Is Rooted](#is-rooted) method.
    

## Events

### Got Output
![](/assets/images/components/utilities/shell/e_get-output.png)

\[ Text `out` \] 

Triggers after a shell command called from [Execute](#execute) has finished executing.

Params             |  []()       
------------------ | ------- 
`out`              | **Text:**  The output after the shell command has finished executing.
