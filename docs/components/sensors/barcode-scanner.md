# Barcode Scanner

<p>Component for using the Barcode Scanner to read a barcode</p>
<h3>Properties</h3>
<dl>
  <dt><code><em>Result</em></code></dt>
  <dd>Text result of the previous scan.</dd>
  <dt><code><em>UseExternalScanner</em></code></dt>
  <dd>If true App Inventor will look for and use an external scanning program such as "Bar Code Scanner."</dd>
</dl>
<h3>Events</h3>
<dl>
  <dt><code>AfterScan(text result)</code></dt>
  <dd>Indicates that the scanner has read a (text) result and provides the result</dd>
</dl>
<h3>Methods</h3>
<dl>
  <dt><code>DoScan()</code></dt>
  <dd>Begins a barcode scan, using the camera. When the scan is complete, the AfterScan event will be raised.</dd>
</dl>
