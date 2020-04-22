---
title: "Custom Object Detection with CSI IR Camera on NVIDIA Jetson"
permalink: /docs/jetson_object_detection/
excerpt: "Custom Object Detection with CSI IR Camera on NVIDIA Jetson"
variable:
  - platform: windows
    name: Windows
  - platform: macos
    name: macOS
comments: 
  provider: "disqus"
  disqus: 
    shortname: https-azure-github-io-vision-ai-devkit-pages-docs-community-pr.disqus.com
last_modified_at: 2020-04-21
---
<br>
[<-- Back to project listing]({{ '/docs/hw_examples/' | relative_url }})
<html>
<table><tr><td><b>Summary</b></td></tr>
<tr><td>
In this project, we will demonstrate how to use a Camera Serial Interface (CSI) Infrared (IR) Camera on the <a href="https://developer.nvidia.com/embedded/jetson-nano-developer-kit" target="_blank">NVIDIA Jetson Nano</a> with <a href="https://azure.microsoft.com/en-us/services/cognitive-services/?WT.mc_id=hackster-csicamera-pdecarlo" target="_blank">Microsoft Cognitive Services</a>, <a href="https://azure.microsoft.com/en-us/services/iot-edge/?WT.mc_id=hackster-csicamera-pdecarlo" target="_blank">Azure IoT Edge</a>, and <a href="https://azure.microsoft.com/en-us/services/iot-central/?WT.mc_id=hackster-csicamera-pdecarlo" target="_blank">Azure IoT Central</a>. This setup will allow us to accurately capture images at any time of day, to be analyzed in real-time using a custom object detection model with reporting to the cloud. Specifically, we will cover techniques in this article that will allow us to interact with the CSI hardware and access the host X11 windowing system from a containerized IoT Edge workload. 
<br><br>
This will give us the baseline knowledge to modify an existing solution to operate with new hardware, namely the <a href="https://www.amazon.com/gp/product/B07TT9Q4YL/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=B07TT9Q4YL&linkCode=as2&tag=wincnetdeve-20&linkId=5e14ee60c6366004b51c6e247e26724a" target="_blank">IMX219-77IR 8-Megapixels Infrared Night Vision IR Camera Module</a> to allow consistent image capture regardless of lighting conditions. With our camera properly configured, we will then demonstrate how to apply a custom object detection model to the image stream. We will then package our application as a containerized <a href="https://azure.microsoft.com/en-us/services/iot-edge/?WT.mc_id=hackster-csicamera-pdecarlo" target="_blank">IoT Edge</a> deployment with reporting into <a href="https://azure.microsoft.com/en-us/services/iot-central/?WT.mc_id=hackster-csicamera-pdecarlo" target="_blank">Azure IoT Central</a>. 
<br><br>
At the end, you will leave with the knowledge to create an end-to-end edge-to-cloud object detection solution that can be modified to a variety of use cases.
<br> </td></tr>
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
            <li><a href="https://www.hackster.io/microsoft/products/microsoft-azure?ref=project-c6d315" target="_blank">Microsoft Azure</a></li>
            <li><a href="https://www.hackster.io/microsoft/products/azure-iot-edge?ref=project-c6d315" target="_blank">Microsoft Azure IoT Edge</a></li>
            <li><a href="https://azure.microsoft.com/en-us/services/iot-central/?WT.mc_id=hackster-csicamera-pdecarlo" target="_blank">Microsoft Azure IoT Central</a></li>
            <li><a href="https://azure.microsoft.com/en-us/services/cognitive-services/?WT.mc_id=hackster-csicamera-pdecarlo" target="_blank">Microsoft Cognitive Services</a></li>
         </ul> 
   </td> 
    <td> <ul type="disc">
            <li><a href="https://www.amazon.com/gp/product/B084DSDDLT/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=B084DSDDLT&linkCode=as2&tag=wincnetdeve-20&linkId=e90f748eddae789cd7aafe1e81bc0b7d" target="_blank">NVIDIA Jetson Nano Developer Kit</a></li>
            <li><a href="https://www.amazon.com/gp/product/B07TT9Q4YL/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=B07TT9Q4YL&linkCode=as2&tag=wincnetdeve-20&linkId=5e14ee60c6366004b51c6e247e26724a" target="_blank">IMX219-77IR 8-Megapixels Infrared Night Vision IR Camera Module</a></li>
         </ul>
   </td>
</tr> 
</table></html>  

<html><table>
<tr><td><b> Repository </b></td></tr>
<tr><td>
A full write-up on how to reproduce this project can be found <a href="https://www.hackster.io/pjdecarlo/custom-object-detection-with-csi-ir-camera-on-nvidia-jetson-c6d315" target="_blank">here</a>. <br>
</td></tr>
<tr><td>
<b> Future Improvements and Project Suggestions </b> </td></tr>
<tr><td>
Readers are encouraged to innovate and improve the functionality of this project by modifying to their use case.  If you are able to add support for additional image capture devices, leverage a new feature in DeepStream or IoT Central, or build a custom object detection model for something unique, please share your results in the comments!
</td></tr>
</table></html>

<html><table>
<tr><td width="30%"><b> About the Creator </b> </td></tr>
<tr><td rowspan="2" width="30%"> <img src="{{'assets/images/Paul_DeCarlo_Headshot.jpg' | relative_url}}"> </td></tr>
<td width = "70%">
Paul DeCarlo is a Microsoft Cloud Advocate and Professor for the Bauer College of Business at the University of Houston. His current technology interests focus on Internet of Things, Cloud Applications, and development of AIOT solutions using small form-factor GPU accelerated IoT devices from NVIDIA.  During time off, he enjoys taking care of his thirteen trees, riding mountain bikes, and taking care of his dog – Chief and cat - Kitty.  You can learn more about what Paul is working on <a href="https://github.com/toolboc" target="_blank">here</a>.
</td>
</table></html>


