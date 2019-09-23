---
title: "Microsoft's Edge terminology"
permalink: /docs/terminology/
excerpt: "Microsoft's Edge terminology"
variable:
  - platform: windows
    name: Windows
  - platform: macos
    name: macOS
last_modified_at: 2019-05-28
---

## Azure Intelligent Edge and Cloud terminology

While Intelligent Edge and AI@Edge ultimately refer to the ability to run AI models, generate insights and take actions locally without relying to the cloud for data processing there is a wide spectrum of hardware options available for implementing an end to end solution. 

Below matrixes represent Microsoft's primary solution portfolio for different type of use cases. Typical end to end intelligent edge solution is a combination of multiple device categories and includes also cloud. Azure Sphere and IoT Devices represent a light edge and are incapable of running IoT Edge and containerized services. However, they are often included to an end-2-end solution intelligent edge solution. In the context of intelligent edge they require a smart gateway solution for further data processing, insights and actions.

![Edge taxonomy]({{ '/assets/images/MSFT_edge_taxonomy.PNG' | relative_url }})

| **Microcontrollers** | **IoT devices** | **Edge devices** | **Edge appliances** | **Edge Cloud** | **Hyperscale Cloud** |
| :----------- |
| **Azure Sphere** | **Azure IoT Device SDK** | **Azure IoT Edge** | **Azure Data Box Edge** | **Azure Stack** | **Azure Regions** |
| Highly-secured, connected Azure Sphere MCU running our OS and services | Industry specific sensors and devices from partners | Deploy and manage Azure services in containers on any IoT device | AI-Enabled, Storage and compute Azure Edge appliance | Cloud Consistent Edge | Full Range Hyperscale Cloud Services |
| 3P Low-cost MCUs running FreeRTOS and our Azure Device Services | 1000+ Azure IoT certified devices and growing | AI, AzureML, Azure Stream Analytics and more | 3P WinSvr or Linux plus IoT Edge | Edge and Disconnected Scenarios | Tiered Service availability: Heroes > Hubs > Satellites |
|  |  | RPi through Intel Xeon procs | | Regulatory Requirements | Open Source Based Services & Tools |
|  |  | Windows, WinSvr, Linux | | Cloud app model on-premises | |

### Microcontrollers - [Azure Sphere](https://azure.microsoft.com/en-us/services/azure-sphere/)
Azure Sphere brings together the best of Microsoft’s expertise in cloud, software, and silicon—resulting in a unique approach to security that starts in the silicon and extends to the cloud. Together, Azure Sphere MCUs, The Azure Sphere OS, and our Azure Sphere Security Service provide a foundation of security and connectivity that lets you create intelligent products and experiences that customers love—and get them to market quickly—at a price point that enables IoT at scale.

[Azure Sphere](https://docs.microsoft.com/en-us/azure-sphere/){:target="_blank"} in Microsoft docs

Check out Channel 9 video about **Running AI on IoT microcontroller devices with ELL**
<iframe src="https://channel9.msdn.com/Shows/Internet-of-Things-Show/Running-AI-on-IoT-microcontroller-devices-with-ELL/player" width="640" height="360" allowFullScreen frameBorder="0" title="Running AI on IoT microcontroller devices with ELL - Microsoft Channel 9 Video"></iframe>

### IoT Devices - [Device SDKs](https://docs.microsoft.com/en-us/azure/iot-hub/iot-hub-devguide-sdks)

IoT Devices refers to sensors that are capable of gathering and transferring data, but not powerful enough to run AI models and process data in a device. In very simple terms, they don't run IoT Edge runtime and enables running containerized services. Device SDKs enable you to build apps that run on your IoT devices. These apps send telemetry to your IoT hub, and optionally receive messages, job, method, or twin updates from your IoT hub. You can connect virtually any device to IoT Hub by leveraging different device SDKs.

### Edge devices

Edge device is a device that has one or multiple sensors and is capable of running AI model, process data and take actions without a roundtrip to cloud.

A typical Edge device is described [here.]({{ '/docs/aiatedge/' | relative_url }}){:target="_blank"}

### Edge appliances - [Azure Databox Edge](https://docs.microsoft.com/en-us/azure/databox-online/data-box-edge-overview){:target="_blank"}

Edge appliances refes to gateway devices that do not sensors themselves to be able to generate data for example to measure temporatute or pressure, listen audio or record video. Edge appliances require sensors to be connected to them. The benefit of using these devices is that they are often capable for taking input from several sensors simultaneously and running several AI models in parallel.

### Edge cloud - [Microsoft Azure Stack](https://azure.microsoft.com/en-us/overview/azure-stack/){:target="_blank"}

Edge cloud means running cloud infrastructure in an on-premise location instead of cloud. Edge cloud can run Azure cloud services, control edge devices and do complex data processing using locally managed hardware in a server room.

**Microsoft Azure Stack** is an extension of Azure that brings the innovation of cloud computing to build and deploy hybrid applications anywhere. 

Read more about [Hybrid-Cloud solutions](https://azure.microsoft.com/en-us/solutions/hybrid-cloud-app/)
