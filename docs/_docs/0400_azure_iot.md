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

Azure provides many key components to end-2-end AI@Edge solution and Azure IoT services :
![Azure components]({{ '/assets/images/azure_services.PNG' | relative_url }})
1.	[Azure IoT Edge]({{ '/docs/iot_edge/' | relative_url }}){:target="_blank"} enables running applications in containers in a device and pre-processing the data before sending it to cloud making an edge device “intelligent”
2.	[IoT Hub]({{ '/docs/iot_hub/' | relative_url }}){:target="_blank"} is a cloud service that acts as a central message hub for bi-directional communication between IoT cloud applications and connected devices
3.	[Containerize Azure services]({{ '/docs/containerized_services/' | relative_url }}){:target="_blank"} - Some cloud services such as Azure Stream Analytics and Azure Blob Storage can be defined in cloud and run in a container in IoT Edge devices
4.	IoT Hub integrates with multiple Azure services in the cloud that are essential for end-2-end intelligent edge solution. These solutions include for example additional reporting and management services, analytics services for further processing the data and long time storage ("cold path"). 

Read more about [Azure IoT services](https://azure.microsoft.com/en-us/overview/iot/){:target="_blank"} and [building IoT solutions with Azure](https://discover.microsoft.com/azure-iot-building-solutions-dev-guide/){:target="_blank"}.

### Data insight - hot path vs. cold path

**Hot path** refers to immediate processing and actions taken based on the telemetry data that IoT solution generates. In intelligent edge scenario hot path of typically managed in the edge devices as opposed to in the cloud.

The term **cold path** is used for processing data that has been aggregated and stored, as opposed to data that is streaming into the system in real time.

Lear more about [data insights](https://discover.microsoft.com/azure-iot-building-solutions-dev-guide/insights/){:target="_blank"} and available solution options for both hot and cold path data processing.

### Reference architectures

[Azure IoT Reference Architecture Guide](https://azure.microsoft.com/en-us/blog/azure-iot-reference-architecture-update/){:target="_blank"}  aims to accelerate the building of IoT Solutions with Azure by providing proven production ready architecture and proven technology implementation choices. You will find links to Solution Accelerator reference architecture implementations, including *Remote Monitoring* and *Connected Factory*, as well as an overview of the IoT space, recommended subsystem factoring for scalable IoT solutions, prescriptive technology recommendations per subsystems, and detailed sections per subsystem exploring use cases and technology alternatives.




