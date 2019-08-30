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

### Traditional IoT architecture
In a traditional Internet of Things (IoT) device setup a device that has one or multiple sensors sends all the data it’s generates to cloud for insights and actions. These insights often include refining the data set and running AI models in the cloud in order to for example identify anomalies. Insights are followed by actions taken based on the analysis of the data. Some of the actions are communicated to the device (or to another device) where as some are performed in the cloud. 

![Standard IoT architecture]({{ '/assets/images/AI_IoT.png' | relative_url }})

Traditional Internet of Things architecture

## Intelligent Edge
Intelligent Edge is a term used to refer bringing the cloud intelligent (processing AI algorithms, taking actions based on the data) to the device itself. In this set up services are typically defined in the cloud, containerized and deployed to one or many devices. Being able run “AI@Edge” has multiple benefits:

### Faster decision making:
-There are multiple scenarios where a device cannot wait for the round trip to cloud and back for actions. A perfect example as a self-driving car that needs to make decisions locally in milliseconds

### Offline scenarios:
-When AI algorithms are processed locally in a device the device can operate without network connection. This is beneficial in the areas where network connection is unreliable or the device is moving and known to loose network connection periodically

### Event based cloud connection:
-While sensors like temperature sensor generate relatively small amount of data there are other sensors like cameras that generate plenty. Sending a full video stream to cloud for analysis can be cumbersome and expensive depending on the available network connection etc. Running AI in the device enables only selected data to be send. The smart camera can for example be configured to send only pictures of selected objects it recognizes.

### Data pre-processing in a device:
-A typical intelligent edge device sends pre-processed data to the cloud. This has multiple potential benefits such as less data is transferred overall. Being able to pre-process data can avoid also privacy concerns. For example a camera that counts people in a public venue like train station doesn’t have to stream picture to cloud, but can only send back the totals for reporting and longer term trend analysis.

Here is a simplified high level Intelligent Edge device architecture

![Standard IoT architecture]({{ '/assets/images/AI_Intelligent_Edge.png' | relative_url }})

Intelligent Edge device architecture
