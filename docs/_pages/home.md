---
layout: splash
permalink: /
title:
header:
  overlay_color: "white"
  overlay_image: /assets/images/MAIN_overlay.PNG
  # image: /assets/images/MAIN_camera.png
  actions:
    - label: "Learn more"
      url: "/docs/aiatedge/"
    # - label: "Join the community"
    #   url: "https://techcommunity.microsoft.com/t5/IoT-Devices/bd-p/HardwareEngineering"
title: PREVIEW - Welcome to the AI@Edge community!
excerpt:
  Find the resources you need to create solutions using intelligence at the edge through combinations of hardware, machine learning (ML), artificial intelligence (AI) and Microsoft Azure services.
 
visionatedge_links:
  class: "light-gray"

ai_edge_basics:
  content:
    - title: "What is AI@Edge community"
      excerpt:  AI@Edge community portal is a collection of resources that allow you develop assets and solutions that combine hardware, machine learning / artificial intelligence (AI) and Microsoft Azure services enabling intelligence in the edge!  Whether you are a seasoned professional or taking your first steps to IoT, whether you are building intelligent edge hardware, creating end-2-end solutions by combining hardware, software and services, data scientics developing machine learning models or a software developer this community will help you to identify opportunities, get started fast with examples and partner with other professionals to create awesome solutions.
      image_path: /assets/images/MAIN_example.PNG
      image_url: /docs/examples
      alt: Access examples
      btn_label: "Learn more"
      url: /docs/aiatedge
      btn_class: "btn--primary"

general_links:
  title: AI@Edge
  content:
    - image_path: assets/images/Newpost1.png
      alt: ""
      title: "What is AI@Edge?"
      excerpt: "See how a device taking advantage of AI@Edge differs from a traditional IoT device"
      url: "/docs/aiatedge/"
    - image_path: assets/images/Newpost5.png
      alt: ""
      title: "Choosing a hardware topology"
      excerpt: "Get an overview of the different hardware topologies supported by Microsoft AI@Edge solutions"
      url: "/docs/terminology/"
    - image_path: assets/images/Newpost4.png
      alt: ""
      title: "Get started"
      excerpt: "Start your project planning with these examples of AI@Edge hardware, machine learning, and solution demos"
      url: "/docs/examples/"

solutions_links:
  title: I want to
  content:
    # - image_path: assets/images/MAIN_build_hardware.PNG
    - image_path: assets/images/Newpost3.png
      alt: ""
      title: "Find or build an AI@Edge Device"
      excerpt: "Find existing hardware and developer kits, or use resources and best practices to  build intelligent edge capable hardware"
      url: "/docs/hardware/"
    # - image_path: /assets/images/MAIN_ai2.PNG
    - image_path: /assets/images/Newpost6.png
      alt: ""
      title: "Train an AI/ML model"
      excerpt: "To take advantage of the faster inference times an AI@Edge device can provide, learn more about ML models, the ML frameworks supported by different devices, and the tools used for training the models"
      url: "/docs/machine_learning/"
    # - image_path: /assets/images/MAIN_azure_iot.PNG
    - image_path: assets/images/Newpost2.png
      alt: ""
      title: "Operate and maintain an AI@Edge solution"
      excerpt: "To take advantage of the fast turn around, offine capabilities and filtered data AI@Edge device offer, Azure IoT Edge enables you to conatinerize, deploy, and manage cloud services to your AI@Edge device"
      url: "/docs/azureiot/"

partner_links:
  title: Become part of the community
  content:
    - image_path: assets/images/MAIN_community.PNG
      alt: ""
      title: "Join the AI@Edge community"
      excerpt: Hear the latest solution and services news from Azure and Windows IoT, share your thoughts, and get help from the community
      url: "https://techcommunity.microsoft.com/t5/Internet-of-Things-IoT/ct-p/IoT"
    - image_path: /assets/images/MAIN_events.PNG
      alt: ""
      title: "Participate in Live Events"
      excerpt: "Learn about in-person events and conferences related to AI@Edge topics"
      url: "/docs/liveevents/"
    - image_path: /assets/images/MAIN_tutorials.PNG
      alt: ""
      title: "Help us, help you"
      excerpt: "Sign up for customer and partner research"
      url: "/docs/signup/"
---
{% include feature_row_1 id="general_links" %}
{% include feature_row_1 id="solutions_links" %}
<!-- <div class="bgimg"> -->
{% include feature_row_1 id="partner_links" %}
<!-- </div> -->
