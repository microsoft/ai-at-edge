---
title: "Detect empty shelves in retail store with Azure Databox Edge"
permalink: /docs/databox/
excerpt: "Detect empty shelves in retail store with Azure Databox Edge"
variable:
  - platform: windows
    name: Windows
  - platform: macos
    name: macOS
last_modified_at: 2019-10-20
---
[<-- Back to project listing]({{ '/docs/hw_examples/' | relative_url }})

<html>
<br>
<table><tr bgcolor="#68adc4"><td colspan="2"><b>
<a href="https://azure.microsoft.com/en-us/services/databox/edge/" target="_blank">Azure Databox Edge</a></b>
<tr><td>
Azure Databox is an example of a smart gateway solution that brings together the edge functions you need: compute, preprocessing, machine learning, and data transfer. It is most suitable for solutions where there is a need to handle inputs from several different sensors and process data either for fast insights and actions or to refine and limit the size of the data set that eventually gets sent to the cloud. 
</td>
<td width="20%">
<img src="{{'/assets/images/devices_databox-edge.png' | relative_url}}">
</td></tr>
<tr><td>
Data Box Edge is a 1U rackmountable appliance. For more information take a look at the <a href="https://azure.microsoft.com/mediahandler/files/resourcefiles/azure-data-box-edge-datasheet/Azure%20Data%20Box%20Edge%20Datasheet.pdf" target="_blank">Fact sheet</a>
</td></tr>
<tr bgcolor="#68adc4"><td colspan="2"><b>
Solution example
</b></td></tr>
<tr><td colspan="2">
Get started quickly with a void detection example for retail. This solution is used to detect empty shelves in the retail store and alerting the staff. Assets can be found from <a href="https://github.com/Azure-Samples/azure-intelligent-edge-patterns/tree/master/edge-ai-void-detection" target="_blank">Intelligent Edge patterns GitHub</a>
</td></tr>
<tr><td>
Standard IoT architecture
<img src="{{'/assets/images/devices_databox_architecture.png' | relative_url}}" alt="Standard IoT architecture" width="100%">
</td></tr>