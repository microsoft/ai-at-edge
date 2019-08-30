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

An end-2-end intelligent edge IoT solution consists of services that run AI models, process data to generate insights and take action locally in the hardware that is located in the field. The solution can operate without cloud connectivy. Typically solution still transfer refined set of data to the cloud for furhter processing and long time storage. Below is a introduction of most common Azure services that are used in intelligent edge solutions.

![Standard IoT architecture]({{ '/assets/images/AI_Intelligent_Edge.png' | relative_url }})

## Reference architectures

<a href="https://azure.microsoft.com/en-us/blog/azure-iot-reference-architecture-update/">Azure IoT Reference Architecture</a>  aims to accelerate customers building IoT Solutions on Azure by providing a proven production ready architecture, with proven technology implementation choices, and with links to Solution Accelerator reference architecture implementations such as Remote Monitoring and Connected Factory. The document offers an overview of the IoT space, recommended subsystem factoring for scalable IoT solutions, prescriptive technology recommendations per subsystems, and detailed sections per subsystem that explore use cases and technology alternatives.


## Azure IoT Hub 

<a href="https://azure.microsoft.com/en-us/services/iot-hub/">Azure IoT Hub</a> is a cloud service that acts as a central message hub for bi-directional communication between IoT cloud applications and the connected devices. Azure IoT Hub enables reliable and secure communications between millions of IoT devices and a cloud-hosted solution backend. 

<a href="https://docs.microsoft.com/en-us/azure/iot-hub/iot-hub-devguide-sdks">Azure IoT Hub in Microsoft Docs</a>

## Azure IoT Edge

<a href="https://azure.microsoft.com/en-us/services/iot-edge/">Azure IoT Edge</a> builds on top of IoT Hub. This service is used to analyze data on devices, at the edge, instead of in the cloud. IoT Edge enables devices to spend less time sending messages to the cloud so they can react more quickly to changes in status.

<a href="https://docs.microsoft.com/en-us/azure/iot-edge/">Azure IoT Edge in Microsoft Docs</a>


