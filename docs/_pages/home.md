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
title: Welcome to the AI@Edge community pages!
excerpt:
  Find the resources you need to create solutions using intelligence at the edge through combinations of hardware, machine learning (ML), artificial intelligence (AI) and Microsoft Azure services.

projects:
  title: Get started with example projects
  content:
    - image_path: assets/images/PM_sweater.png
      alt: "Ugly Christmas sweater project"
      title: "Ugly Christmas sweater project"
      excerpt: Christmas project - build ugly sweater with Raspberry Pi and Twitter controlled LEDs
      url: "/docs/uglysweater/"
    - image_path: assets/images/PM_deepstream.png
      alt: "Inference up to 8 video streams!"
      title: "Inference up to 8 video streams!"
      excerpt: Turn your installed RSTP cameras into sensors with NVIDIA® DeepStream and Jetson Nano™
      url: "/docs/jetson_deepstream/"
    - image_path: /assets/images/PM_workplace.PNG
      alt: "Use vision AI in workplace safety"
      title: "Use vision AI in workplace safety"
      excerpt: "Get started with Vision AI Developer Kit and workplace safety"
      url: "/docs/workplace_safety/"
    - image_path: /assets/images/PM_rpi_cluster.PNG
      alt: "Build an intelligent edge cluster"
      title: "Build an 'intelligent edge' cluster"
      excerpt: "Build a intelligent edge cluster using Kubernetes and Raspberry Pi"
      url: "/docs/rpi_kubernetes/"
    - image_path: /assets/images/PM_openvino.PNG
      alt: "Use ONNX and Open Vino"
      title: "Use ONNX and Open Vino"
      excerpt: "Start a solution building with Intel® powered developer kits"
      url: "/docs/onnx_openvino/"
    - image_path: /assets/images/PM_retail.PNG
      alt: "Detect empty shelves in retail"
      title: "Detect empty shelves in retail"
      excerpt: "Build a void detection solution using Databox Edge"
      url: "/docs/databox/"
    - image_path: /assets/images/PM_alarm.PNG
      alt: "Create Intelligent Alarm"
      title: "Create Intelligent Alarm"
      excerpt: "Use Vision AI Developer Kit to create and intelligent Alarm"
      url: "/docs/intelligent_alarm/"
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
      alt: "Find or build an AI@Edge Devic"
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

