---
layout: splash
permalink: /
title:
header:
  overlay_color: "white"
  overlay_image: /assets/images/MAIN_overlay.png
  # image: /assets/images/MAIN_camera.png
  actions:
    - label: "Learn more"
      url: "/docs/aiatedge/"
    # - label: "Join the community"
    #   url: "https://techcommunity.microsoft.com/t5/IoT-Devices/bd-p/HardwareEngineering"
title: Welcome to AI@Edge community!
excerpt:
  The AI@Edge Community portal can help you find the resources you need to create solutions using intelligence at the edge through combinations of hardware, machine learning (ML), artificial intelligence (AI) and Microsoft Azure services.
 
visionatedge_links:
  class: "light-gray"

ai_edge_basics:
  content:
    - title: "What is AI@Edge community"
      excerpt:  AI@Edge community portal is a collection of resources that allow you develop assets and solutions that combine hardware, machine learning / artificial intelligence (AI) and Microsoft Azure services enabling intelligence in the edge!  Whether you are a seasoned professional or taking your first steps to IoT, whether you are building intelligent edge hardware, creating end-2-end solutions by combining hardware, software and services, data scientics developing machine learning models or a software developer this community will help you to identify opportunities, get started fast with examples and partner with other professionals to create awesome solutions.
      image_path: /assets/images/MAIN_example.png
      image_url: /docs/examples
      alt: Access examples
      btn_label: "Learn more"
      url: /docs/aiatedge
      btn_class: "btn--primary"

general:
  content:
    - title: AI@Edge
general_links:
  content:
    - image_path: assets/images/MAIN_aiatedge.png
      background_image: assets/images/MAIN_aiatedge.png
      alt: ""
      title: "What is AI@Edge?"
      excerpt: "See how a device taking advantage of AI@Edge differs from a traditional IoT device"
      btn_label: " "
      url: "/docs/aiatedge/"
    - image_path: assets/images/MAIN_light_heavy.PNG
      alt: ""
      title: "Choosing a hardware topology"
      excerpt: "Get an overview of the different hardware topologies supported by Microsoft AI@Edge solutions"
      btn_label: " "
      url: "/docs/terminology/"
    - image_path: assets/images/MAIN_examples_icon.png
      alt: ""
      title: "Get started"
      excerpt: "Start you project planning with these examples of AI@Edge hardware, machine learning, and solution demos"
      btn_label: " "
      url: "/docs/examples/"

solutions:
  content:
    - title: Vision@Edge Hardware
solutions_links:
  content:
    - image_path: assets/images/MAIN_build_hardware.png
      alt: ""
      title: "Find or build an AI@Edge Device"
      excerpt: "Find existing hardware and developer kits, or use resources and best practices to  build intelligent edge capable hardware"
      btn_label: " "
      url: "/docs/hardware/"
    - image_path: /assets/images/MAIN_ai2.png
      alt: ""
      title: "Train an AI/ML model"
      excerpt: "To take advantage of the faster inference times an AI@Edge device can provide, learn more about ML models, the ML frameworks supported by different devices, and the tools used for training the models"
      btn_label: " "
      url: "/docs/machine_learning/"
    - image_path: /assets/images/MAIN_azure_iot.png
      alt: ""
      title: "Operate and maintain an AI@Edge solution"
      excerpt: "To take advantage of the fast turn around, offine capabilities and filtered data AI@Edge device offer, Azure IoT Edge enables you to conatinerize, deploy, and manage cloud services to your AI@Edge device"
      btn_label: " "
      url: "/docs/azureiot/"

interact:
  content:
    - title: Become part of the community
partner_links:
  content:
    - image_path: assets/images/MAIN_community.png
      alt: ""
      title: "Join the AI@Edge community"
      excerpt: Hear the latest solution and services news from Azure and Windows IoT, share your thoughts, and get help from the community
      btn_label: " "
      url: "https://techcommunity.microsoft.com/t5/Internet-of-Things-IoT/ct-p/IoT"
    - image_path: /assets/images/MAIN_events.png
      alt: ""
      title: "Participate in Live Events"
      excerpt: "Learn about in-person events and conferences related to AI@Edge topics"
      btn_label: " "
      url: "/docs/liveevents/"
    - image_path: /assets/images/MAIN_tutorials.png
      alt: ""
      title: "Tutorials and labs"
      excerpt: "Improve your AI@Edge knowledge"
      btn_label: " "
      url: "/docs/tutorials/"
---
<!-- 
{% include feature_row id="ai_edge_basics" type="left" %} -->

<!-- <div class="bgimg"> -->
<div class="light-gray">
<div class="feature__wrapper">
    <h2 style="text-align: center;" class="landing-page-videos-title">AI@Edge</h2>
    <div class="landing-page-videos">
{% include feature_row_1 id="general_links" %}
    </div>
</div>
</div>
<div class="white">
<div class="feature__wrapper">
    <h2 style="text-align: center;" class="landing-page-videos-title">Solutions</h2>
    <div class="landing-page-videos">
{% include feature_row_1 id="solutions_links" %}
  </div>
</div>
</div>
<!-- <div class="light-gray">
<div class="feature__wrapper">
    <h2 style="text-align: center;" class="landing-page-videos-title">Software and services</h2>
  <div class="landing-page-videos">
{% include feature_row_1 id="software_links" %}
  </div>
</div>
</div> -->
<div class="white">
<div class="feature__wrapper">
    <h2 style="text-align: center;" class="landing-page-videos-title">Interact</h2>
  <div class="landing-page-videos">
{% include feature_row_1 id="partner_links" %}
  </div>
</div>
</div>
