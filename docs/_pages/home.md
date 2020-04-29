---
layout: splash
permalink: /
title:
header:
  overlay_color: "white"
  overlay_image: /assets/images/MAIN_overlay.PNG
  actions:
    - label: "Learn more"
      url: "/docs/aiatedge/"
title: Welcome to AI@Edge Community!
excerpt:
  Find the resources you need to create solutions using intelligence at the edge through combinations of hardware, machine learning (ML), artificial intelligence (AI) and Microsoft Azure services.

projects:
  title: Get started with our latest projects
  content:
    - image_path: /assets/images/JetsonObjectDetectionPreview.png
      alt: "Custom Object Detection with Jetson Nano"
      title: "Custom Object Detection with Jetson Nano"
      excerpt: Detect any thing at any time using a Camera Serial Interface Infrared Camera on an NVIDIA Jetson Nano with Azure IoT and Cognitive Services.
      url: /docs/jetson_object_detection/
    - image_path: /assets/images/projects-iot-central.jpg
      alt: "Azure IoT Central PnP Provisioning"
      title: "Azure IoT Central PnP Provisioning"
      excerpt: Learn how to connect and manage Vision AI Dev Kit with Azure IoT Central PnP module
      url: /docs/vaidk_iot_central/
    - image_path: /assets/images/rpi_basic.jpg
      alt: "Azure IoT Edge on Raspian Buster"
      title: "Azure IoT Edge on Raspian Buster"
      excerpt: Azure IoT Edge on Raspian Buster
      url: /docs/rpi_buster
    - image_path: /assets/images/ONNX_project.PNG
      alt: "Run ONNX model with Jetson Nano"
      title: "Run ONNX model with Jetson Nano"
      excerpt: Get started with ONNX framework and NVIDIA Jetson Nano
      url: /docs/jetsonnano/
    - image_path: /assets/images/rpi-cluster.PNG
      alt: "Kubernetes Cluster on Raspberry Pi"
      title: "Kubernetes Cluster on Raspberry Pi"
      excerpt: Build a Kubernetes "Intelligent Edge" Cluster on Raspberry Pi
      url: /docs/rpi_kubernetes/
    - image_path: /assets/images/WN_audio.PNG
      alt: "Audio based anomaly detection"
      title: "Audio based anomaly detection"
      excerpt: Learn how to record audio samples and create an audio AI model
      url: /docs/water_level/
    - image_path: /assets/images/WinML.PNG
      alt: "Run ONNX and WinML on Windows"
      title: "Run ONNX and WinML on Windows"
      excerpt: Run Windows ML inferencing in an Azure IoT Edge module running on Windows
      url: /docs/winml/
    - image_path: /assets/images/PM_all.png
      alt: "See all example projects"
      title: "See all example projects"
      excerpt: "See full example project list involving multiple different devices and solution areas"
      url: "/docs/hw_examples/"


visionatedge_links:
  class: "light-gray"

general_links:
  title: I want to
  content:
    - image_path: assets/images/Newpost3.png
      alt: "Find or build an AI@Edge Device"
      title: "Find or build an AI@Edge Device"
      excerpt: "Find existing hardware and developer kits, or use resources and best practices to  build intelligent edge capable hardware"
      url: "/docs/hardware/"
    - image_path: /assets/images/newpost6.png
      alt: "Build an AI/ML model"
      title: "Build an AI/ML model"
      excerpt: "Take advantage of the faster inference times an AI@Edge device offers by learning more about ML models, the ML frameworks supported by different devices, and the tools used for training models"
      url: "/docs/ai/"
    - image_path: assets/images/projects.PNG
      alt: "Get started"
      title: "Get started"
      excerpt: "Ready to go? Get started with concrete examples that provide you an example of running AI model in a device"
      url: "/docs/hw_examples/"
      
      
solutions_links:
  title: Learn more
  content:
    - image_path: assets/images/Newpost1.png
      alt: "What is AI@Edge"
      title: "What is AI@Edge?"
      excerpt: "See how a device taking advantage of AI@Edge differs from a traditional IoT device"
      url: "/docs/aiatedge/"
    - image_path: assets/images/MAIN_onnx.PNG
      alt: "Get started with ONNX"
      title: "Get started with ONNX"
      excerpt: "ONNX is an open format to represent both deep learning and traditional models. ONNX helps to solve the challenge of hardware dependency related to AI models and enables deploying same AI models to several HW accelerated targets"
      url: "/docs/onnx/"
    - image_path: assets/images/Newpost2.png
      alt: "Operate and maintain an AI@Edge solution"
      title: "Operate and maintain an AI@Edge solution"
      excerpt: "To take advantage of the fast turn around, offine capabilities and filtered data AI@Edge devices offer, Azure IoT Edge helps containerize, deploy, and manage cloud services"
      url: "/docs/azureiot/"

partner_links:
  title: Become part of the community
  content:
    - image_path: assets/images/community.png
      alt: "Join the AI@Edge community"
      title: "Join the AI@Edge community"
      excerpt: Hear the latest solution and services news for Azure and Windows IoT, share your thoughts, and get help from the community
      url: "https://techcommunity.microsoft.com/t5/IoT-Devices/bd-p/HardwareEngineering"
    - image_path: /assets/images/events.png
      alt: "Participate in Live Events"
      title: "Participate in Live Events"
      excerpt: "Learn about in-person events and conferences covering AI@Edge"
      url: "/docs/liveevents/"
    - image_path: /assets/images/calls.png
      alt: "Dial in to calls"
      title: "Dial in to calls"
      excerpt: "Join bi-weekly Intelligent Edge Brief calls"
      url: "/docs/telcos/"
---

{% include feature_row_c id="projects" %}
{% include feature_row_1 id="general_links" %}
{% include feature_row_1 id="solutions_links" %}
<!-- <div class="bgimg"> -->
{% include feature_row_1 id="partner_links" %}
<!-- </div> -->

