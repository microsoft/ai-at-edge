---
title: "Intelligent Closed-Circuit TV with Azure and NVIDIA® Jetson Nano™"
permalink: /docs/jetson_tsi/
excerpt: "Intelligent Closed-Circuit TV"
variable:
  - platform: windows
    name: Windows
  - platform: macos
    name: macOS
last_modified_at: 2019-10-09
---
[<-- Back to project listing]({{ '/docs/hw_examples/' | relative_url }})

<html>
<br>
<table><tr bgcolor="#68adc4"><td colspan="2"><b>
<a href="https://www.nvidia.com/en-us/autonomous-machines/embedded-systems/jetson-nano/" target="_blank">NVIDIA® Jetson Nano™</a></b>
<tr><td>
NVIDIA® Jetson Nano™ Developer Kit is a small, powerful computer that lets you run multiple neural networks in parallel for applications like image classification, object detection, segmentation, and speech processing. All in an easy-to-use platform that runs in as little as 5 watts. It opens new worlds of embedded IoT applications, including entry-level Network Video Recorders (NVRs), home robots, and intelligent gateways with full analytics capabilities. 
</td>
<td width="30%">
<img src="{{'assets/images/devices_jetson_nano.jpg' | relative_url}}">
<!-- ![Jetson Nano]({{ '/assets/images/devices_jetson_nano.jpg' | relative_url }})  -->
</td></tr>
<tr bgcolor="#68adc4"><td colspan="2"><b>
Solution example
</b></td></tr>
<tr><td colspan="2">
This example leverages GPU accelerated IoT Edge workloads on NVIDIA® Jetson Nano™. These small form-factor IoT devices come equipped with an onboard GPU to enable complex video, machine learning, and AI powered solutions. We will show how we can build out containerized software packages as modules for these devices using Azure IoT Edge to produce configurations that can be deployed from Microsoft Azure to devices in the field using tooling in Visual Studio Code.
</td></tr>
<tr><td colspan="2">
This will culminate with an Intelligent Edge Hands-On-Lab that will walk through the process of deploying an IoT Edge module to an NVIDIA® Jetson Nano™ device to allow for detection of objects in YouTube videos, RTSP streams, HoloLens Mixed Reality Capture, or an attached web cam while pushing detected object results into Azure Time Series Insights for archival and analysis. After completing this you will have the ability to develop and deploy Intelligent Video Applications backed by Microsoft Azure IoT Services to real-world devices.
</td></tr>
<tr><td colspan="2">
Access GitHub to <a href="http://aka.ms/IntelligentEdgeHOL" target="_blank">get started</a> 
</td></tr><tr><td>
<iframe src="https://channel9.msdn.com/Shows/Internet-of-Things-Show/The-Intelligent-Edge-by-Microsoft/player" width="480" height="270" allowFullScreen frameBorder="0" title="The Intelligent Edge by Microsoft - Microsoft Channel 9 Video"></iframe>
</td></tr>
<tr><td>
<img src="{{'/assets/images/jetson_tsi.jpg' | relative_url}}" alt="Person recognition example"><br>
Time Series Insights example<br>
<img src="{{'/assets/images/jetson_tsi_ui.jpg' | relative_url}}" alt="Time Series Insights example">
</td></tr>

