---
title: "Vision AI Dev provisioning with Azure IoT Central PnP module"
permalink: /docs/vaidk_iot_central/
excerpt: "Vision AI Dev provisioning with Azure IoT Central PnP module"
variable:
  - platform: windows
    name: Windows
  - platform: macos
    name: macOS
comments: 
  provider: "disqus"
  disqus: 
    shortname: https-azure-github-io-vision-ai-devkit-pages-docs-community-pr.disqus.com
last_modified_at: 2020-03-19
---
<br>
[<-- Back to project listing]({{ '/docs/hw_examples/' | relative_url }})
<html>
<table><tr><td><b>Summary</b></td></tr>
<tr><td>
This project is an example implementation for the Microsoft Vision AI Dev Kit built to be an Azure IoT Central module. It includes a full implementation of how a device participates with the Azure IoT Central platform including telemetry, state, events, properties, and custom commands. You can even update your AI vision model from your IoT Central app.

This project is implemented as a NodeJS micro service and React Web client. The web client allows the user to interact directly with the device to control it as well as experiment with Custom Vision AI models. A static version of the web client bundle is included in the ./client_dist folder.<br> </td></tr>
</table></html>
<html><table>
<tr><td>
<b> Implementation </b> </td></tr>
</table></html>


<html><table>
<tr>
    <td width = "50%"> <b> Software and Services used</b> </td>
    <td width = "50%"> <b> Hardware </b> </td> 
    <td rowspan="24"></td> </tr>
 <tr>
    <td> <ul type="disc" >
            <li>Azure IoT Central</li>
            <li>Visual Studio Code</li>
            <li>NodeJS 10x (with NPM)</li>
            <li>Android Debug Bridge (ADB) tools</li>
         </ul> 
   </td> 
    <td> <ul type="disc">
            <li>Vision AI DevKit</li>
         </ul>
   </td>
</tr> 
</table></html>  

<html><table>
<tr><td><b> Repository </b></td></tr>
<tr><td>
Find all relevant information for full implementation of this product <a href="https://github.com/sseiber/iotc-pnp-aidevkit-module" target="_blank">here</a>. <br>
Users are always encouraged to innovate and continue to improve the functionality of current projects. 
</td></tr>
<tr><td>
<b> Future Improvements and Project Suggestions </b> </td></tr>
<tr><td>
Feel free to fork the project and contribute back any improvements or suggestions. Contributors and maintainers are encouraged.
</td></tr>
</table></html>

<html><table>
<tr><td width="30%"><b> About the Creator </b> </td></tr>
<tr><td rowspan="2" width="30%"> <img src="{{'assets/images/scott.PNG' | relative_url}}"> </td></tr>
<td width = "70%">
Scott Seiber is a long-time Microsoft software engineer who is focused on the cross-section of hardware and software. He is currently working in the Azure IoT organization, enabling partners with their digital transformations.
You can learn more about what Scott is working on <a href="https://github.com/sseiber" target="_blank">here</a>.
</td>
</table></html>


