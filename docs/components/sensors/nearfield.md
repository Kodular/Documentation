# Near Field

Non-visible component to provide NFC capabilities. For now this component supports the reading and writing of text tags only (if supported by the device).  

In order to read and write text tags, the component must have its ReadMode property set to True or False respectively.  

Note: This component will only work on Screen1 of any app created by App Inventor distribution.  

## Properties
`LastMessage`  
`ReadMode`  
`TextToWrite`    
`WriteType`
## Event  
`TagRead(text message)`  
  Indicates that a new tag has been detected. Currently this is only a plain text tag.  
Event for TagWritten  
## Methods  
none  
