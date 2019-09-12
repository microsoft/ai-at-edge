---
title: "AI@Edge"
permalink: /docs/aiatedge/
excerpt: "General introduction to AI@Edge community"
variable:
  - platform: windows
    name: Windows
  - platform: macos
    name: macOS
last_modified_at: 2019-05-28
---

## What is AI@Edge?

## Traditional IoT architecture
In a traditional Internet of Things (IoT) device setup a device that has one or multiple sensors sends all the data it generates to the cloud for insights and actions. These insights often include refining the data set and running AI models in the cloud in order to, for example, identify anomalies. Insights are followed by actions taken based on the analysis of the data. Some of the actions are communicated to the device (or to another device) while others are performed in the cloud.

![Standard IoT architecture]({{ '/assets/images/AI_IoT.PNG' | relative_url }})

Traditional Internet of Things architecture

## Intelligent Edge
Intelligent Edge is a term used to refer bringing the capabilities that have traditionally existed in the cloud, processing AI algorithms and taking actions based on the data, to the device itself. In this set up services are typically defined in the cloud, containerized and deployed to one or many devices. Being able to run “AI@Edge” has multiple benefits:

### Faster decision making:
- There are multiple scenarios where a device cannot wait for the round trip to the cloud and back for actions. A perfect example would be a self-driving car that needs to make decisions locally in milliseconds.

### Offline scenarios:
- When AI algorithms are processed locally in a device the device can operate without network connection. This is beneficial in the areas where network connectivity is unreliable, or the device is moving and known to lose network connection periodically.

### Event based cloud connection:
- While sensors such as the temperature sensor generate relatively small amounts of data, there are other sensors like cameras that generate plenty. Sending a full video stream to the cloud for analysis can be cumbersome and expensive depending on the available network connection and other factors. Running AI in the device enables only selected data to be sent. For example, the smart camera can be configured to send only pictures of the selected objects it recognizes.

### Data pre-processing in a device:
- A typical intelligent edge device sends pre-processed data to the cloud. This has multiple potential benefits such as less data is transferred overall. Being able to pre-process data can also avoid privacy concerns. For example, a camera that counts people in a public venue like a train station doesn’t have to stream the picture to the cloud, but can only send back the totals for reporting and longer term trend analysis.

Here is a simplified high level Intelligent Edge device architecture

![Standard IoT architecture]({{ '/assets/images/AI_Intelligent_Edge.PNG' | relative_url }})

Intelligent Edge device architecture
