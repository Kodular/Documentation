
# Proximity Sensor
 
  
## Overview 
A sensor component that can measure the proximity of an object (in cm) relative to the view screen of a device. This sensor is typically used to determine whether a handset is being held up to a person's ear i.e. lets you determine how far away an object is from a device. Many devices return the absolute distance, in cm, but some return only near and far values. In this case, the sensor usually reports its maximum range value in the far state and a lesser value in the near state. It reports the 
following value: 

-   **Distance**: The distance from the object to the device.   
  
## Properties   
  
### Enabled    
![image](url)   
[ Getter + Setter ]    
`Type: Boolean`   
   
If enabled, then device will listen for changes in proximity.   
   
### Keep Running When On Pause   
![image](url)   
[ Getter + Setter ]  
`Type: Boolean`  
   
If set to true, it will keep sensing for proximity changes even when the app is not visible.   
    
### Distance  
![image](url)   
[ Getter Only]  
`Type: Number`   
   
  
Returns the distance from the object to the device.   
   
### MaximumRange  
![image](url)  
[ Getter Only]   
  
  
Reports the Maximum Range of the device's proximity sensor.   
  
### Available   
![image](url)   
[ Getter Only]   
`Type: Number`  

Reports whether or not the device has a proximity sensor.   
   
## Events   
![image](url)    
   
### Proximity Changed (distance)   
`None`  
    
Called when the distance (in cm) of the object to the device changes.   

