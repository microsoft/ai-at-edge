---
title: "Deploy an ONNX to a Windows device"
permalink: /docs/winml/
excerpt: "Deploy a custom vision model to a Windows device"
variable:
  - platform: windows
    name: Windows
  - platform: macos
    name: macOS
last_modified_at: 2019-11-25
---

## Deploy an ONNX model to Windows device 

<html><table><tr bgcolor="#68adc4"><td colspan="2"><b>
<a href="https://docs.microsoft.com/en-us/windows/ai/windows-ml/" target="_blank">AI on Windows IoT Core</a></b>
<tr><td>
Windows 10 IoT Core is a version of Windows 10 that is optimized for smaller devices with or without a display that run on both ARM and x86/x64 devices.
</td>
<td width="30%">
<img src="{{'assets/images/windows_logo.PNG' | relative_url}}">
</td></tr>
<tr bgcolor="#68adc4"><td colspan="2"><b>
Solution example
</b></td></tr>
<tr><td colspan="2">
We will download the ONNX model from Custom Vision, add some .NET components and deploy the model in a docker container to a device running Azure IoT Edge on Windows 10 IoT Core.

Images will be captured from a camera on our edge device with inferencing happening at the edge using Windows ML and sending our results through Azure IoT Hub. Finally, we will visualize the results using Azure Time Series Insights.
</td></tr>
<tr><td colspan="2">
Do the system <a href="https://github.com/jcoliz/WindowsAiEdgeLabCV/blob/master/Setup%20Guide.md" target="_blank">setup preparations</a> 
Access the lab in GitHub to <a href="https://github.com/jcoliz/WindowsAiEdgeLabCV" target="_blank">get started</a> 
</td></tr>
<tr><td>
Architecture
<img src="{{'/assets/images/winmliot.png' | relative_url}}" alt="Project arcitecture">
</td></tr>

