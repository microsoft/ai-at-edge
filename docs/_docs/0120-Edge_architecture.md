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

## Azure Intelligent Edge and Cloud taxonomy

While Intelligent Edge ultimately refers to the ability to run AI models, generate insights and take actions locally without relying to the cloud for data processing there is a wide spectrum of hardware options available for implementing an end to end solution. Below matrixes represent Microsoft's primary solution portfolio for different type of use cases. Typical end to end intelligent edge solution is a combination of multiple device categories and includes also cloud. Azure Sphere and IoT Devices represent a light edge and are incapable of running IoT Edge and containerized services. In the context of intelligent edge the require a smart gateway solution for further data processing, insights and actions.

![Edge taxonomy]({{ '/assets/images/MSFT_edge_taxonomy.PNG' | relative_url }})

| **Microcontrollers** | **IoT devices** | **Edge devices** | **Edge appliances** | **Edge Cloud** | **Hyperscale Cloud** |
| :----------- |
| **Azure Sphere** | **Azure IoT Device SDK** | **Azure IoT Edge** | **Azure Data Box Edge** | **Azure Stack** | **Azure Regions** |
| Highly-secured, connected Azure Sphere MCU running our OS and services | Industry specific sensors and devices from partners | Deploy and manage Azure services in containers on any IoT device | AI-Enabled, Storage and compute Azure Edge appliance | Cloud Consistent Edge | Full Range Hyperscale Cloud Services |
| 3P Low-cost MCUs running FreeRTOS and our Azure Device Services | 1000+ Azure IoT certified devices and growing | AI, AzureML, Azure Stream Analytics and more | 3P WinSvr or Linux plus IoT Edge | Edge and Disconnected Scenarios | Tiered Service availability: Heroes > Hubs > Satellites |
|  |  | RPi through Intel Xeon procs | | Regulatory Requirements | Open Source Based Services & Tools |
|  |  | Windows, WinSvr, Linux | | Cloud app model on-premises | |


## Intelligent Edge and Cloud capabilities mapped to Microsoft solutions

Below is a mapping of technical capabilities and architectural options to Microsoft provided solutions.


| **Legend** | **Icon** | **Description** |
| :----------- |
| **Train** | ![Train]({{ '/assets/images/ICON_train.PNG' | relative_url }}) | <html><table width="50%"><tr><td>Ability to train AI models that are targeted to be run on the edge device </td></tr></table></html>|
| **Run** | ![Run]({{ '/assets/images/ICON_run.PNG' | relative_url }}) | Ability to run an AI model |
| **Collect data** | ![Collect]({{ '/assets/images/ICON_collect_data.PNG' | relative_url }}) |  |
| **Generate data** | ![Generate]({{ '/assets/images/ICON_generate_data.PNG' | relative_url }}) | Ability to generate data even by having needed sensor in a device or a direct feed from an "dumb" sensor |
| **Manage devices** | ![Manage]({{ '/assets/images/ICON_manage.PNG' | relative_url }}) | Ability to manage edge devices |


<!-- | **Functions** | **Train** | **Run** | **Collect data** | **Generate data** | **Manage devices** |
| :----------- |
| **Legend** | ![Train]({{ '/assets/images/ICON_train.PNG' | relative_url }}) | ![Run]({{ '/assets/images/ICON_run.PNG' | relative_url }}) | ![Collect]({{ '/assets/images/ICON_collect_data.PNG' | relative_url }}) | ![Generate]({{ '/assets/images/ICON_generate_data.PNG' | relative_url }}) | ![Manage]({{ '/assets/images/ICON_manage.PNG' | relative_url }}) |
| **Icon** | Ability to train AI models that are targeted to be run on the edge device |  Ability to run an AI model | | Ability to generate data even by having needed sensor  -->

| **Use case** | **Edge device** | **Data Box Edge** | **Azure Stack** | **Azure Cloud** |
| :----------- |
| **Edge device + Cloud** | ![Run]({{ '/assets/images/ICON_run.PNG' | relative_url }})![Generate]({{ '/assets/images/ICON_generate_data.PNG' | relative_url }}) | | | ![Manage]({{ '/assets/images/ICON_manage.PNG' | relative_url }})![Train]({{ '/assets/images/ICON_train.PNG' | relative_url }})![Collect]({{ '/assets/images/ICON_collect_data.PNG' | relative_url }})![Run]({{ '/assets/images/ICON_run.PNG' | relative_url }}) |
| **Edge device + Gateway + Cloud** | ![Run]({{ '/assets/images/ICON_run.PNG' | relative_url }})![Generate]({{ '/assets/images/ICON_generate_data.PNG' | relative_url }}) | ![Run]({{ '/assets/images/ICON_run.PNG' | relative_url }})![Generate]({{ '/assets/images/ICON_generate_data.PNG' | relative_url }})![Collect]({{ '/assets/images/ICON_collect_data.PNG' | relative_url }}) | | ![Manage]({{ '/assets/images/ICON_manage.PNG' | relative_url }})![Train]({{ '/assets/images/ICON_train.PNG' | relative_url }})![Collect]({{ '/assets/images/ICON_collect_data.PNG' | relative_url }})![Run]({{ '/assets/images/ICON_run.PNG' | relative_url }}) |
| **Disconnected IoT + on Prem Cloud** | ![Run]({{ '/assets/images/ICON_run.PNG' | relative_url }})![Generate]({{ '/assets/images/ICON_generate_data.PNG' | relative_url }}) | | ![Manage]({{ '/assets/images/ICON_manage.PNG' | relative_url }})![Train]({{ '/assets/images/ICON_train.PNG' | relative_url }})![Collect]({{ '/assets/images/ICON_collect_data.PNG' | relative_url }})![Run]({{ '/assets/images/ICON_run.PNG' | relative_url }}) | |
| **Edge Device + on Prem Cloud + Cloud** | ![Run]({{ '/assets/images/ICON_run.PNG' | relative_url }})![Generate]({{ '/assets/images/ICON_generate_data.PNG' | relative_url }}) | | ![Manage]({{ '/assets/images/ICON_manage.PNG' | relative_url }})![Train]({{ '/assets/images/ICON_train.PNG' | relative_url }})![Collect]({{ '/assets/images/ICON_collect_data.PNG' | relative_url }})![Run]({{ '/assets/images/ICON_run.PNG' | relative_url }}) | ![Manage]({{ '/assets/images/ICON_manage.PNG' | relative_url }})![Train]({{ '/assets/images/ICON_train.PNG' | relative_url }})![Collect]({{ '/assets/images/ICON_collect_data.PNG' | relative_url }})![Run]({{ '/assets/images/ICON_run.PNG' | relative_url }}) |
| ***Disconnected Composable  Edge** | ![Run]({{ '/assets/images/ICON_run.PNG' | relative_url }})![Generate]({{ '/assets/images/ICON_generate_data.PNG' | relative_url }}) | ![Run]({{ '/assets/images/ICON_run.PNG' | relative_url }})![Generate]({{ '/assets/images/ICON_generate_data.PNG' | relative_url }})![Collect]({{ '/assets/images/ICON_collect_data.PNG' | relative_url }}) | | ![Manage]({{ '/assets/images/ICON_manage.PNG' | relative_url }})![Train]({{ '/assets/images/ICON_train.PNG' | relative_url }})![Collect]({{ '/assets/images/ICON_collect_data.PNG' | relative_url }})![Run]({{ '/assets/images/ICON_run.PNG' | relative_url }})|
| ***Connected Composable  Edge** | ![Run]({{ '/assets/images/ICON_run.PNG' | relative_url }})![Generate]({{ '/assets/images/ICON_generate_data.PNG' | relative_url }}) | ![Run]({{ '/assets/images/ICON_run.PNG' | relative_url }})![Generate]({{ '/assets/images/ICON_generate_data.PNG' | relative_url }})![Collect]({{ '/assets/images/ICON_collect_data.PNG' | relative_url }}) | ![Manage]({{ '/assets/images/ICON_manage.PNG' | relative_url }})![Train]({{ '/assets/images/ICON_train.PNG' | relative_url }})![Collect]({{ '/assets/images/ICON_collect_data.PNG' | relative_url }})![Run]({{ '/assets/images/ICON_run.PNG' | relative_url }}) | ![Manage]({{ '/assets/images/ICON_manage.PNG' | relative_url }})![Train]({{ '/assets/images/ICON_train.PNG' | relative_url }})![Collect]({{ '/assets/images/ICON_collect_data.PNG' | relative_url }})![Run]({{ '/assets/images/ICON_run.PNG' | relative_url }})|
