---
title: "Solution examples"
permalink: /docs/solution_examples/
excerpt: "Example solutions"
variable:
  - platform: windows
    name: Windows
  - platform: macos
    name: macOS
last_modified_at: 2019-05-28

---

## Example hardware topologies for end-2-end solutions

Following examples introduce different options for setting up the hardware environment and related Azure solution for end to end customer scenario. In the beginning of each example there is an illustration in which hardware element different tasks are executed. In the intelligent edge scenarios running an AI model, generating insights and triggering an action based on insights happens in the edge device instead of in the cloud.

![Legend]({{ '/assets/images/ICON_legend.PNG' | relative_url }})

### Workplace safety in manufacturing site

| **Use case** | **IoT device (sensor)** | **Edge device** | **(Edge) Gateway Appliances** | **Azure Stack** | **Azure Cloud** |
| :----------- |
| **IoT Device + Gateway + Cloud** | ![Generate]({{ '/assets/images/ICON_generate_data.PNG' | relative_url }}) | | ![Run]({{ '/assets/images/ICON_run.PNG' | relative_url }})![Insights]({{ '/assets/images/ICON_insights.PNG' | relative_url }})![Actions]({{ '/assets/images/ICON_actions.PNG' | relative_url }})| | ![Manage]({{ '/assets/images/ICON_manage.PNG' | relative_url }})![Train]({{ '/assets/images/ICON_train.PNG' | relative_url }}) |

A manufacturing site has regulatory requirements regarding employees wearing safety gear like hard hats in specific areas in the factory floor. The team responsible for workplace safety wants to get automatically notified in case there is a person violating the workplace safety code. Getting full video coverage requires 30 cameras to be installed on site. It was decided that the most efficient solution from maintenance and cost effectiveness point of view was to install brownfield cameras that do not have data processing capability and have them stream picture to a cluster of gateways. Each gateway can run 8 parallel AI models to analyze the video stream for 8 different cameras. The AI model is trained to identify people who work in specified areas without proper safety gear. 

The inferencing output, information of all the people they detect, is directed to another module that runs in a gateway appliance and handles the downstream processing (insights). Once there is a violation detected the system automatically takes action and alerts the workplace safety team. This all is operated by a cluster of smart gateway appliances. The processing also includes sending the summary of people and time they are detected to Azure cloud for long time storage and reporting (for example % of people violating safety regulations, calculation of traffic in different area in factory etc). 

Azure cloud is used to control the gateway appliances and modules that run in them. The Vision AI model that runs on the gateway appliances is also continuously re-trained with real images for the factory floor to improve the accuracy of the Vision AI model.

### Monitoring wildlife in a remote location

| **Use case** | **IoT device (sensor)** | **Edge device** | **(Edge) Gateway Appliances** | **Azure Stack** | **Azure Cloud** |
| :----------- |
| **Edge Device + Cloud** | | ![Generate]({{ '/assets/images/ICON_generate_data.PNG' | relative_url }})![Run]({{ '/assets/images/ICON_run.PNG' | relative_url }})![Insights]({{ '/assets/images/ICON_insights.PNG' | relative_url }})![Actions]({{ '/assets/images/ICON_actions.PNG' | relative_url }})| | | ![Manage]({{ '/assets/images/ICON_manage.PNG' | relative_url }})![Train]({{ '/assets/images/ICON_train.PNG' | relative_url }}) |

A research team has setup an intelligent edge camera to monitor a location in the river where they suspect that a rare wild animal comes to drink. This animal is generally seldom seen, but there is enough photographic materials to train an AI model. The camera gets its power from solar energy and using cellular network to communicate with cloud, so it is self-sufficient and doesn't require constant maintenance. In order to minimize the network traffic the camera runs an AI model is trained to recognize the specific animal. Camera optimizes the network traffic by only sending the picture of the animal to cloud for further analysis.