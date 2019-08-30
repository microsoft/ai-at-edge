---
title: "Light Edge vs. Heavy Edge"
permalink: /docs/light_vs_heavy/
excerpt: "High level introduction to edge architecture"
variable:
  - platform: windows
    name: Windows
  - platform: macos
    name: macOS
last_modified_at: 2019-05-28
---

## Microsoft Edge taxonomy

![Edge taxonomy]({{ '/assets/images/MSFT_edge_taxonomy.PNG' | relative_url }})

| Microcontrollers | IoT devices | Edge devices | Edge appliances | Edge Cloud | Hyperscale Cloud |
| :----------- |
| **Azure Sphere** | **Azure IoT Device SDK** | **Azure IoT Edge** | **Azure Data Box Edge** | **Azure Stack** | **Azure Regions** |
| Highly-secured, connected Azure Sphere MCU running our OS and services | Industry specific sensors and devices from partners | Deploy and manage Azure services in containers on any IoT device | AI-Enabled, Storage and compute Azure Edge appliance | Cloud Consistent Edge | Full Range Hyperscale Cloud Services |
| 3P Low-cost MCUs running FreeRTOS and our Azure Device Services | 1000+ Azure IoT certified devices and growing | AI, AzureML, Azure Stream Analytics and more | 3P WinSvr or Linux plus IoT Edge | Edge and Disconnected Scenarios | Tiered Service availability: Heroes > Hubs > Satellites |
|  |  | RPi through Intel Xeon procs | | Regulatory Requirements | Open Source Based Services & Tools |
|  |  | Windows, WinSvr, Linux | | Cloud app model on-premises | |






