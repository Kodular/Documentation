# Temperature Sensor

## Overview
  
A non-visible Component that measures the temperature of air surrounding the device in unit of degree Celsius.

  
## Properties

  

### Enabled 
[ Getter + Setter ]  
`Type: Boolean`       

![image](url)  

Determin whether the temperature sensor is enabled.(if checked or set to true it enables the sensor.)  
The [Getter] block return data in following way

* `True` - If the temperature sensor is enabled. 
* `False` - If the device temperature sensor is disabled. 


  
### Available 
[ Getter Only ]  
`Type: Boolean`     
![image](url)   

Check if the device has a temperature sensor. 
* `True` - If the device contain a temperature sensor. 
* `False` - If the device does not contain a temperature sensor. 




### Temperature 
[ Getter Only ]  
`Type: Number`      
![image](url)   

Return the temperature in degree Celsius.
## Events  
### Temperature Changed  
[ Number `Tempereature` ]   
![image](url)  
Event that fires when temperature is changed.  

Params           |  []()       
---------------- | ------- 
`Temperature`          | **Number:**  Return new temperature value when temperature get changed.
