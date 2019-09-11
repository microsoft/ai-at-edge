---
title: "Machine Learning"
permalink: /docs/machine_learning/
excerpt: "Machine Learning"
variable:
  - platform: windows
    name: Windows
  - platform: macos
    name: macOS
last_modified_at: 2019-06-14

---

## What is machine learning?

In short machine learning is a science that provides a computer the ability to learn without being explicitly programmed. It's based on the usage of algorithms that analyze data, learn from it and make a specified prediction. Running machine learning models requires often a lot of computing power and it is common to run them algorithms, AI models, in the cloud. Edge computing brings that capability to the devices.

In the context of AI@Edge the machine learning models are run in containers that are deployed to the devices using Azure IoT Hub.

## Creating an AI model 

There are number of standard steps required to run AI model in an edge device.

![ML flow]({{ '/assets/images/ML_flow.png' | relative_url }})

<!-- 

### Gather data

AI models for vision and sound require data for training purposes. Professional model may require thousands of samples

-->

## Characteristics of main machine learning use cases

| | **Vision** | **Audio** | **Telemetry** |
| :----------- |
| | ![Vision]({{ '/assets/images/ICON_vision.png' | relative_url }}) | ![Audio]({{ '/assets/images/ICON_audio.png' | relative_url }}) | ![Telemetry]({{ '/assets/images/ICON_telemetry.png' | relative_url }}) |
| **Summary** | Vision AI is specialized machine learning for images and video that allows you to transform camera input into labels and objects that you can use in your applications and busineses logic. | Machine learning solutions for audio can be further categorized into two main subcategories - speech to text used for example by smart assistant and anomaly detection based on sound | Telemetry refers to numeric data received from multiple different kinds of sensors. Telemetry data can reflect for example temperature or pressure. |
| **Typical use cases** | Workplace safety, Retail, Quality control (anommaly detection), Smart home/building/city, Access control | Speech to text, anomaly detection (predective maintenance) | 
| **Main challenges** | Large amounts of data, HW acceleration needed for real time inferencing | Speech to text: Microphone and model dependency, Acquiring audio transcription data for training,  | Building a model often requires in depth machine learning knowledge. Limited amount of tools available. |



<!-- ## Custom vision - get started with Vision AI

Vision AI is specialized machine learning for images and video that allows you to transform camera input into labels and objects that you can use in your applications and business logic.  -->