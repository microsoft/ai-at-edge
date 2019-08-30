---
title: "Vision@Edge Hardware"
permalink: /docs/hardware/
excerpt: "General hardware landing page"

variable:
  - platform: windows
    name: Windows
  - platform: macos
    name: macOS

last_modified_at: 2019-08-01

hardwardgeneral:
  class: "light-gray"

hardware:
  content:
    - title: Vision@Edge Hardware
featured_kits:
  content:
    - image_path: /assets/images/HW_intelligent_camera.png
      alt: ""
      title: "Intelligent camera"
      excerpt: "A camera that can do inferencing and IoT Edge within the device itself is called intelligent camera. In this case the camera is capable of processing data and making decisions based on what it sees."
      btn_label: " "
    - image_path: /assets/images/HW_intelligent_gateway.png
      alt: ""
      title: "Intelligent gateway"
      excerpt: "Intelligent gateway refers to a solution where the sensor device (like camera) is does not perform data processing, but send all the information to a gateway device that is responsible for processing the data. One gateway device can be connected to one of many sensor devices"
      btn_label: " "
    - image_path: /assets/images/HW_regular_sensor.png
      alt: ""
      title: "Brownfield sensor"
      excerpt: "Brownfield sensor refers to any device that can connect and transfer data to a gateway device. It is not capable of running IoT Edge and AI models and sends a full data set forward to an intelligent gateway or directly to cloud"
      btn_label: " "
     
---

## General

In the AI@Edge portal Microsoft provides best practices for building AI@Edge hardware and helps you find an existing hardware with sample solutions to get a quick start for building a solution.

### Hardware categories

An optimal IoT solution following intelligent edge principles can be set up in multiple different ways. In the context of intelligent edge hardware the primary implementation options are a) intelligent cameras and b) intelligent gateway. Some devices that would be qualified as regular sensor meaning that they don't have capabilities to run IoT Edge and AI models in the device will be also showcased in these pages in the context of a gateway solution that is proven to work with them

{% include feature_row_1 id="featured_kits" %}


