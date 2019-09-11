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
    - image_path: /assets/images/HW_intelligent_camera.PNG
      alt: ""
      title: "Edge device"
      excerpt: "A device that can do inferencing and IoT Edge within the device itself is edge. In this case the camera is capable of processing data and making decisions based on what it sees."
      btn_label: " "
    - image_path: /assets/images/HW_intelligent_gateway.PNG
      alt: ""
      title: "Edge appliance"
      excerpt: "Edge appliance, intelligent gateway, refers to a solution where the sensor device (like camera) is does not perform data processing, but sends all the information to a gateway device that is responsible for processing the data. One gateway device can be connected to one of many sensor devices"
      btn_label: " "
    - image_path: /assets/images/HW_regular_sensor.PNG
      alt: ""
      title: "Brownfield sensor"
      excerpt: "Brownfield sensor refers to any device that can connect and transfer data to a gateway device. It is not capable of running IoT Edge and AI models and sends a full data set forward to an intelligent gateway or directly to cloud"
      btn_label: " "
# hardware:
#   content:
#     - title: AI@Edge Hardware
# hardware_links:
#   content:
#     - image_path: assets/images/MAIN_build_hardware.PNG
#       alt: ""
#       title: "Build hardware"
#       excerpt: "Find resources and best practices for building intelligent edge capable hardware. See options for SOCs, Operating Systems and learn about Certifying your devices for Azure"
#       btn_label: " "
#       url: "/docs/buildhardware/"
#     - image_path: /assets/images/MAIN_find_hardware.PNG
#       alt: ""
#       title: "Find hardware"
#       excerpt: "Find hardware that fits to your solution. See the portfolio of intelligent edge cameras and intelligent gateways. See the showcased devices and find code examples to get started in minutes"
#       btn_label: " "
#       url: "/docs/hardwarelist/"
#     - image_path: /assets/images/MAIN_devkits.PNG
#       alt: ""
#       title: "Developer Kits"
#       excerpt: "Want to get a quick start for your camera project or do a proof of concept? Find developer kits that can be used as a target devices for testing your machine learning model and learn about the Azure IoT services"
#       btn_label: " "
#       url: "/docs/devkits/"     
---

## General

In the AI@Edge portal Microsoft provides best practices for building AI@Edge hardware and helps you find an existing hardware with sample solutions to get a quick start for building a solution.

### Hardware categories

An optimal end to end solution following intelligent edge principles can be set up in multiple different ways. In the context of intelligent edge hardware the primary implementation options are a) Edge devices and b) IoT Devices with Edge appliances. Some devices that would be qualified as regular sensor meaning that they don't have capabilities to run IoT Edge and AI models in the device will be also showcased in these pages in the context of a gateway solution that is proven to work with them

{% include feature_row_1 id="featured_kits" %}

<!-- <div class="white">
<div class="feature__wrapper">
    <h2 style="text-align: center;" class="landing-page-videos-title">Solutions</h2>
    <div class="landing-page-videos">
{% include feature_row_1 id="hardware_links" %}
  </div>
</div>
</div> -->
