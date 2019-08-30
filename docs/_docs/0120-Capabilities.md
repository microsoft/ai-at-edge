---
title: "Hardware capabilities"
permalink: /docs/capabilities/
excerpt: "Hardware capabilities"
variable:
  - platform: windows
    name: Windows
  - platform: macos
    name: macOS
last_modified_at: 2019-05-28
---

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
