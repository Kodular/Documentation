# Resource Utilities

## Overview

The **Resource Utilities** component can be used to add string resources to your application's strings.xml file. This component is mainly used for internationalizing the text in your application.


## Properties

### Resource File From Asset
![](/assets/images/components/utilities/resource-utilities/d_resource-file-from-asset.png) ![](/assets/images/components/utilities/resource-utilities/p_resource-file-from-asset.png)

\[ Getter  + Setter \]  
`Type: Asset`

The name of the resource XML file from the app's Assets.


### Resource File From Path
![](/assets/images/components/utilities/resource-utilities/d_resource-file-from-path.png) ![](/assets/images/components/utilities/resource-utilities/p_resource-file-from-path.png)

\[ Getter  + Setter \]  
`Type: Text`

The full path to the resource XML file located in an external directory.

## Methods

### Get String From Asset
![](/assets/images/components/utilities/resource-utilities/m_get-string-from-asset.png)

\[ Text `resource Name`, Text `if Resource Not Found Use` \]

Fetches the resource by its name in the resources file that is in the app's Assets.

Params                      |  []()       
--------------------------- | ------- 
`resource Name`             | **Text:**  The name of the resource that is to be fetched.
`if Resource Not Found Use` | **Text:**  The fallback text to be used in case the resource name doesn't exist in the resources file.


### Get String From Path
![](/assets/images/components/utilities/resource-utilities/m_get-string-from-path.png)

\[ Text `resource Name`, Text `if Resource Not Found Use` \]

Fetches the resource by its name in the resources file that is in an external directory.

Params                      |  []()       
--------------------------- | ------- 
`resource Name`             | **Text:**  The name of the resource that is to be fetched.
`if Resource Not Found Use` | **Text:**  The fallback text to be used in case the resource name doesn't exist in the resources file.