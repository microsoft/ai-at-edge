---
title: "Operate and maintain an AI@Edge solution"
permalink: /docs/azureiot/
excerpt: "Operate and maintain an AI@Edge solution"
variable:
  - platform: windows
    name: Windows
  - platform: macos
    name: macOS
last_modified_at: 2019-09-16
---

### Azure IoT and Intelligent Edge

Azure provides many key components to end-2-end AI@Edge solution:
![Azure components]({{ '/assets/images/azure_services.PNG' | relative_url }})
1.	Azure IoT Edge enables running applications in containers in a device and pre-processing the data before sending it to cloud making an edge device “intelligent”
2.	IoT Hub is a cloud service that acts as a central message hub for bi-directional communication between IoT cloud applications and connected devices
3.	Some cloud services such as Azure Stream Analytics and Azure Blob Storage can be defined in cloud and run in a container in IoT Edge devices
4.	IoT Hub integrates with multiple Azure services in the cloud that are essential for end-2-end intelligent edge solution. This solutions include for example additional reporting and management services, analytics services for further processing the data and long time storage.

### Enable AI@Edge with Azure IoT Edge

<a href="https://azure.microsoft.com/en-us/services/iot-edge/">Azure IoT Edge</a>, built on top of Azure IoT Hub, is used to analyze data on devices, at the edge, without relying on a cloud connection. Azure IoT Edge enables devices to spend less time sending messages to the cloud, providing faster reaction to local monitored changes.

<a href="https://docs.microsoft.com/en-us/azure/iot-edge/">Azure IoT Edge documentation</a>

### Control devices using Azure IoT Hub

<a href="https://azure.microsoft.com/en-us/services/iot-hub/">Azure IoT Hub</a> is a cloud service that acts as a central message hub for bi-directional communication between IoT cloud applications and connected devices. Azure IoT Hub enables reliable and secure communications between millions of IoT devices and a cloud-hosted backend.

<a href="https://docs.microsoft.com/en-us/azure/iot-hub/iot-hub-devguide-sdks">Azure IoT Hub documentation</a>

### Reference architectures

The <a href="https://azure.microsoft.com/en-us/blog/azure-iot-reference-architecture-update/">Azure IoT Reference Architecture Guide</a>  aims to accelerate the building of IoT Solutions with Azure by providing proven production ready architecture and proven technology implementation choices. You will find links to Solution Accelerator reference architecture implementations, including *Remote Monitoring* and *Connected Factory*, as well as an overview of the IoT space, recommended subsystem factoring for scalable IoT solutions, prescriptive technology recommendations per subsystems, and detailed sections per subsystem exploring use cases and technology alternatives.




