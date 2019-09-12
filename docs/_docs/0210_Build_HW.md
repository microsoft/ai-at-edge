---
title: "Build Hardware for Vision@Edge"
permalink: /docs/buildhardware/
excerpt: "General hardware landing page"
variable:
  - platform: windows
    name: Windows
  - platform: macos
    name: macOS
last_modified_at: 2019-06-14
---

## General

These pages offer guidance and best practices when building intelligent edge hardware - hardware that is able to run AI models, process data and take actions without a roundtrip to the cloud. 

### Silicon selection

The first step in designing AI hardware for the Edge is to work with Silicon provider to determine what type of boards, SoCs, MCUs will be needed in a solution. A good starting point is to leverage hardware development kits from a Silicon partner that will allow you to prototype the solution.

### Select Operating System

Read about operating system options for [IoT Edge devices]({{ '/docs/os/' | relative_url }})

### Hardware acceleration

A key consideration when selecting and building hardware is to ensure that the hardware is capable of running AI models locally, as opposed to relying on cloud connectivity.  A key value proposition to AI hardware at the Edge is having the AI model run on speciazlied hardware locally which allows for fast or realtime inferencing on the device.  For example, when creating a Vision AI solution, you may want the inferencing to occur in realtime with every frame the camera captures.  In that scenario, while training and managing the model is still best suited for the cloud, the model itself can be offloaded to dedicated hardware or hardware accelerated if you select the right components for the Edge hardware solution. This is often included in the development kit as a DSP or FPGA, but will likely be referred to under the specific brand the Silicon provider uses.

Read more about [Hardware acceleration]({{ '/docs/hw_acceleration/' | relative_url }})

### Hardware considerations for IoT Edge Runtime

In addition to selecting and developing hardware with AI acceleration in mind, you should also take into account the system requirements to support the IoT Edge Runtime which will manage enable cloud connectivity and management for the device.  As a best practice we recommend running your application in a container so you should ensure the hardware supports a container engine.  For detailed information on system requirements and containers with IoT Edge runtime, see the documentation for [Platform Support](https://docs.microsoft.com/en-us/azure/iot-edge/support){:target="_blank"}

### Plan for deploying devices at scale

When using development kits or deploying prototype devices, you may be relying on setting up each device individually which would be difficult to manage once you are ready to deploy at scale.  When you're ready to deploy at scale, you should leverage technologies such as DPS that ease deployment and ensure that devices are production ready.  For more information, consult the following resources.  
- [DPS Overview](https://docs.microsoft.com/en-us/azure/iot-dps/index){:target="_blank"}
- [IoT provisioning with DPS](https://docs.microsoft.com/en-us/azure/iot-edge/how-to-auto-provision-simulated-device-linux){:target="_blank"}
- [Prepare to deploy your IoT Edge solution in production](https://docs.microsoft.com/en-us/azure/iot-edge/production-checklist){:target="_blank"}

### Security considerations

Both for security and deploying at scale, we leverage technologies such as TPMs and HSMs.  For more information see [Securing Azure IoT Edge](https://docs.microsoft.com/en-us/azure/iot-edge/security){:target="_blank"}

### Certify

Finally, when you're ready to certify your device for Azure IoT Edge, read more about [certification]({{ '/docs/certify/' | relative_url }}). Azure IoT certified devices can be found from [Azure Device Catalog](https://catalog.azureiotsolutions.com/){:target="_blank"} improving their discoverability among potential solution builders and end users.

