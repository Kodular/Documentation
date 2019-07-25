# Barcode Scanner

Component for using the Barcode Scanner to read a barcode  

## Properties  
`Result`  
Text result of the previous scan.  

`UseExternalScanner`
If true Kodular will look for and use an external scanning program        such as "Bar Code Scanner."

## Events  
`AfterScan(text result)`  
Indicates that the scanner has read a (text) result and provides the result  

## Methods  
`DoScan()`    
Begins a barcode scan, using the camera. When the scan is complete, the AfterScan event will be raised.  
