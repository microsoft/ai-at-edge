---
title: "Azure services"
permalink: /docs/azureiot/
excerpt: "Azure services"
variable:
  - platform: windows
    name: Windows
  - platform: macos
    name: macOS
last_modified_at: 2019-06-14
---

## Azure IoT and Intelligent Edge

An end-2-end intelligent edge IoT solution will have software or services running AI models to process data and generate insights, taking action locally without requiring a round trip to the cloud. A refined data set may be sent to the cloud for further processing and long time storage.

![Standard IoT architecture]({{ '/assets/images/AI_Intelligent_Edge.PNG' | relative_url }})

## Reference architectures

The <a href="https://azure.microsoft.com/en-us/blog/azure-iot-reference-architecture-update/">Azure IoT Reference Architecture Guide</a>  aims to accelerate the building of IoT Solutions with Azure by providing proven production ready architecture and proven technology implementation choices. You will find links to Solution Accelerator reference architecture implementations, including *Remote Monitoring* and *Connected Factory*. The Azure IoT Reference Architecture provides an overview of the IoT space, recommended subsystem factoring for scalable IoT solutions, prescriptive technology recommendations per subsystems, and detailed sections per subsystem exploring use cases and technology alternatives.

## Azure IoT Hub

<a href="https://azure.microsoft.com/en-us/services/iot-hub/">Azure IoT Hub</a> is a cloud service that acts as a central message hub for bi-directional communication between IoT cloud applications and connected devices. Azure IoT Hub enables reliable and secure communications between millions of IoT devices and the cloud-hosted backend.

<a href="https://docs.microsoft.com/en-us/azure/iot-hub/iot-hub-devguide-sdks">Azure IoT Hub documentation</a>

## Azure IoT Edge

<a href="https://azure.microsoft.com/en-us/services/iot-edge/">Azure IoT Edge</a>, built on top of Azure IoT Hub, is used to analyze data on devices, at the edge, instead of in the cloud. IoT Edge enables devices to spend less time sending messages to the cloud, enabling faster reaction to changes in status.

<a href="https://docs.microsoft.com/en-us/azure/iot-edge/">Azure IoT Edge documentation</a>
