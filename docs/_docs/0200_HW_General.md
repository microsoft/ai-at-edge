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

# hardware:
#   content:
#     - title: AI@Edge Hardware
# featured_kits:
#   content:
#     - image_path: /assets/images/HW_intelligent_camera.PNG
#       alt: ""
#       title: "Edge device"
#       excerpt: "A device that can do inferencing and IoT Edge within the device itself is edge. In this case the camera is capable of processing data and making decisions based on what it sees."
#       btn_label: " "
#     - image_path: /assets/images/HW_intelligent_gateway.PNG
#       alt: ""
#       title: "Edge appliance"
#       excerpt: "Edge appliance, intelligent gateway, refers to a solution where the sensor device (like camera) is does not perform data processing, but sends all the information to a gateway device that is responsible for processing the data. One gateway device can be connected to one of many sensor devices"
#       btn_label: " "
#     - image_path: /assets/images/HW_regular_sensor.PNG
#       alt: ""
#       title: "Brownfield sensor"
#       excerpt: "Brownfield sensor refers to any device that can connect and transfer data to a gateway device. It is not capable of running IoT Edge and AI models and sends a full data set forward to an intelligent gateway or directly to cloud"
#       btn_label: " "
---

### Intelligent edge hardware

An optimal end to end solution following intelligent edge principles can be set up in multiple  ways. In the context of intelligent edge hardware the primary implementation options are a) Edge devices and b) IoT Devices with Edge appliances (smart gateways). The term 'smart gateway" spans over any edge device that needs a data feed from a sensor and can do inferencing and take actions based on the feed. See examples of the [hardware topology]({{ '/docs/hw_topology_examples/' | relative_url }}) in end-2-end solutions. 

[Build hardware]({{ '/docs/buildhardware/' | relative_url }})

[Find hardware]({{ '/docs/hardwarelist/' | relative_url }})


<!-- ### Hardware categories

An optimal end to end solution following intelligent edge principles can be set up in multiple different ways. In the context of intelligent edge hardware the primary implementation options are a) Edge devices and b) IoT Devices with Edge appliances. Some devices that would be qualified as regular sensor meaning that they don't have capabilities to run IoT Edge and AI models in the device will be also showcased in these pages in the context of a gateway solution that is proven to work with them

{% include feature_row_1 id="featured_kits" %} -->
