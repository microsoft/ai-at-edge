---
title: "What is AI@Edge?"
permalink: /docs/aiatedge/
excerpt: "General introduction to AI@Edge"
variable:
  - platform: windows
    name: Windows
  - platform: macos
    name: macOS
last_modified_at: 2019-09-30
---

## Traditional IoT architecture

![Standard IoT architecture]({{ '/assets/images/AI_IoT2.PNG' | relative_url }})

In a traditional Internet of Things (IoT) architecture, a device has one or more sensors sending all collected data to the cloud, where processing for insight and action occurs. This processing often includes refining the data set and running AI models in the cloud to, for example, identify anomalies. Generated insights are followed by actions taken based on the analysis of the data. Actions may be communicated back to the device (or to another device) or performed in the cloud.

## Intelligent Edge

![AI@Edge architecture]({{ '/assets/images/AI_Intelligent_Edge2.PNG' | relative_url }})

The Intelligent Edge brings the processing of AI algorithms and the taking of resulting actions to the device itself. Cloud Services can be defined, containerized, and deployed to one (or many) devices. Being able to run “AI@Edge” has multiple benefits:

### Faster decision making

- There are multiple scenarios where a device cannot wait for the round trip to the cloud and back for actions. One example is a self-driving car that needs to make decisions locally in milliseconds.

### Offline operation

- When AI algorithms are processed locally, the device can operate without an active network connection. This is beneficial in the areas where connectivity is unreliable, or the device is moving in and out of network connection.

### Event based cloud connection

- While some sensors (e.g. temperature) generate relatively small amounts of data, other sensors (e.g. cameras) can quickly generate gigabytes. Sending a full video stream to the cloud for analysis can be cumbersome and expensive. Running AI in the device itself enables can result in only important data being sent to the cloud. For example, a smart camera can be configured to send only pictures of recognized objects.

### Addressing privacy concerns

- Being able to pre-process data can avoid privacy concerns. For example, a camera that counts people in a public venue like a train station doesn’t need to stream the images taken to the cloud, but can send only the totals for reporting and trend analysis.
