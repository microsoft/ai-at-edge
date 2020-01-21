---
title: "Enable remote interaction and telemetry for DeepStream on NVIDIA® Jetson Devices for use with Azure IoT Central"
permalink: /docs/jetson_iot_central/
excerpt: "Enable remote interaction and telemetry for DeepStream on NVIDIA® Jetson Devices for use with Azure IoT Central"
variable:
  - platform: windows
    name: Windows
  - platform: macos
    name: macOS
last_modified_at: 2019-10-25
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
This project contains a set of IoT PnP applications (<a href="https://github.com/toolboc/azure-iot-nvidia-jetson-deepstream-pnp/tree/master/nvidia-jetson-dcs" target="_blank">nvidia-jetson-dcs</a> & <a href="https://github.com/toolboc/azure-iot-nvidia-jetson-deepstream-pnp/tree/master/nvidia-jetson-dps" target="_blank">nvidia-jetson-dps</a>) to enable remote interaction and telemetry for <a href="https://developer.nvidia.com/deepstream-sdk" target="_blank">DeepStream</a> on <a href="https://www.nvidia.com/en-us/autonomous-machines/embedded-systems/" target="_blank">NVIDIA® Jetson Devices</a> for use with <a href="https://docs.microsoft.com/en-us/azure/iot-central/?WT.mc_id=github-deepstreampnp-pdecarlo" target="_blank">Azure IoT Central</a>.
</td></tr>
<tr><td colspan="2">
The nvidia-jetson-dcs application accomplishes this using a device connection string for connecting to an <a href="https://docs.microsoft.com/en-us/azure/iot-hub/tutorial-connectivity#create-an-iot-hub?WT.mc_id=github-deepstreampnp-pdecarlo" target="_blank">Azure IoT Hub</a> instance, while the nvidia-jetson-dps application leverages the Azure IoT <a href="https://docs.microsoft.com/en-us/azure/iot-dps/?WT.mc_id=github-deepstreampnp-pdecarlo" target="_blank">Device Provisioning Service</a> within IoT Central to create a self-provisioning device.
</td></tr>
<tr><td colspan="2">
Access the tutorial in GitHub to <a href="https://github.com/toolboc/azure-iot-nvidia-jetson-deepstream-pnp" target="_blank">get started</a> 
</td></tr>
<tr><td>
IoT Central dashboard view example
<img src="{{'/assets/images/jetson_iot_central.png' | relative_url}}" alt="IoT Central dashboard">
</td></tr>

