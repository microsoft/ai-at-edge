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
  AI@Edge community portal is a collection of resources that allow you develop assets and solutions that combine hardware, machine learning / artificial intelligence (AI) and Microsoft Azure services enabling intelligence in the edge!
 
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
      alt: ""
      title: "What is AI@Edge?"
      excerpt: "What is the difference between traditional IoT device and intelligent edge"
      btn_label: " "
      url: "/docs/aiatedge/"
    - image_path: assets/images/MAIN_light_heavy.PNG
      alt: ""
      title: "Choosing the right HW architecture patterns"
      excerpt: "Read about high level HW architecture options for implementation intelligent edge solution"
      btn_label: " "
      url: "/docs/terminology/"
    - image_path: assets/images/MAIN_examples_icon.png
      alt: ""
      title: "Get started with examples"
      excerpt: "Get start quickly with hardward, machine learning or solution building by using a collection of examples"
      btn_label: " "
      url: "/docs/examples/"

solutions:
  content:
    - title: Vision@Edge Hardware
solutions_links:
  content:
    - image_path: assets/images/MAIN_build_hardware.png
      alt: ""
      title: "Build or find an AI@Edge Device"
      excerpt: "Find resources and best practices for building intelligent edge capable hardware or find existing hardware or developer kits to get started with software development"
      btn_label: " "
      url: "/docs/hardware/"
    - image_path: /assets/images/MAIN_ai2.png
      alt: ""
      title: "Train an AI model"
      excerpt: "Edge devices are capable of running machine learning models in a device itself resulting to faster inferencing times. Learn about machine learning models, frameworks supported by different devices and tools for training models"
      btn_label: " "
      url: "/docs/machine_learning/"
    - image_path: /assets/images/MAIN_azure_iot.png
      alt: ""
      title: "Operate and maintain an AI@Edge solution"
      excerpt: "Train in the cloud, Run on a device. Run containerized cloud services in a device for faster turnaround time, offline capabilities and funnel the data that eventually gets sent to the cloud. IoT Edge enables running several services that are typically run in cloud also in an edge device"
      btn_label: " "
      url: "/docs/azureiot/"

interact:
  content:
    - title: Become part of the community
partner_links:
  content:
    - image_path: assets/images/MAIN_community.png
      alt: ""
      title: "Join AI@Edge community"
      excerpt: Join Microsoft's Internet of Things community. Hear the latest solution and services news from Azure and Windows IoT, share your thoughts, get help by asking questions and help others
      btn_label: " "
      url: "https://techcommunity.microsoft.com/t5/Internet-of-Things-IoT/ct-p/IoT"
    - image_path: /assets/images/MAIN_events.png
      alt: ""
      title: "Participate to Live Events"
      excerpt: "See the AI@Edge related live events with Microsoft's presence. Join and discuss about the topics of your interested face to face"
      btn_label: " "
      url: "/docs/liveevents/"
    - image_path: /assets/images/MAIN_tutorials.png
      alt: ""
      title: "Learn using Tutorials and labs"
      excerpt: "Get started quickly by following easy to use tutorials and labs."
      btn_label: " "
      url: "/docs/tutorials/"
---
<!-- 
{% include feature_row id="ai_edge_basics" type="left" %} -->



<!-- <div class="white">
<div class="feature__wrapper">
  <h2 style="text-align: center;" font-size="1.25em" class="landing-page-videos-title">What is AI@Edge Community?</h2>
  <h3 style="text-align: center;" class="landing-page-videos-title">Vision@Edge community portal is a collection of resources that allow you develop assets and solutions that utilize cameras and are intelligent in the edge!
  Whether you are a seasoned professional or taking your first steps to IoT, whether you are building intelligent edge hardware, creating end-2-end solutions by combining hardware, software and services, data scientics developing machine learning models or a software developer this community will help you to identify opportunities, get started fast with examples and partner with other professionals to create awesome solutions.</h3>
  <div class="landing-page-videos">
{% include feature_row id="visionatedge_links" type="single" %}
</div>
</div> -->
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
