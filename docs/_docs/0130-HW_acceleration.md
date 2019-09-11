---
title: "HW Acceleration"
permalink: /docs/hw_acceleration/
excerpt: "High level introduction to HW acceleration"
variable:
  - platform: windows
    name: Windows
  - platform: macos
    name: macOS
last_modified_at: 2019-05-28

general:
  content:
    - title: HW Acceleration at Edge
general_links:
  content:
    - image_path: /assets/images/AI_Channel9_HW_acceleration.PNG
      alt: ""
      title: ""
      excerpt: ""
      btn_label: " "
      url: https://channel9.msdn.com/Shows/Internet-of-Things-Show/Hardware-Acceleration-for-AI-at-the-Edge

---

HW Acceleration as a term refers to a concept where a device offloads some of the computing task from CPU to a hardware components that are specifically designed to run certain type of apps and workloads faster. 

### Why is hardware acceleration important?

Intelligent Edge device that is expected to run complex AI algorithms in a device fasts needs the best hardware capabilities for doing so. For example AI model that analyzes video stream needs to be able to process tens of frames per second. Traditional CPU does not perform well under that kind of workload. Additional processsor also allow CPU to focus on running more basics operations.

## CPU

CPU is a general purpose processor and designed to do calculations related to general computing very well. Most / all edge devices will have a CPU to run standard computing workloads.  The OS that you select, as well as the Azure IoT runtime and associated components, will all run on the CPU.  Additionally, for very basic AI applications, you may be able to run your AI model directly on the CPU.  For most AI applications, your model will need to run on specialized hardware for performance and latency.

### Options for HW acceleration

Here are the most common options for HW acceleration at the edge

![HW Acceleration]({{ '/assets/images/AI_hw_acceleration.PNG' | relative_url }})

## GPU - Graphics Processing Unit

GPU was originally designed to improve 2D and 3D rendering times, but nowadays it has multiple applications for example in scienticic research area. Compared to CPU, GPU has thousands of small cores that are designed to run calculations in parallel.

## FPGA - Field Programmable Gate Array

FPGA is an integrated circuit that is designed to the re-programmable where are CPU, GPU and DSP are application specific and cannot be programmed again. Essentially FPGA is not a processor like the others and doesn't run a program stored in it's memory. It's benefit is the ability to reprogram it and optimize it to unique tasks that processors are not designed for. FPGAs are also energy efficient compared to for example GPUs. Currently FPGAs are more popular in the heavier edge / gateway devices like Azure Databox Edge than in light edge devices like sensors.

## DSP (Digital Signal Processor)

DSP is a custom intergrated circuit that is optimized from performance point of view for a specific application it's expected to run. DSP often provides the best available performance, but it's a fixed purpose solution that can't be reprogrammed.

## VPU - Vision Processing Unit

A variant of the above technologies, the term VPU is gaining adoption as a term to describe hardware components that are specizlied for Vision AI and related applications.

### Check out Channel9 video that talk about HW acceleration at Edge

<div class="white">
<div class="feature__wrapper">
  <div class="landing-page-videos">
{% include feature_row_1 id="general_links" %}
  </div>
</div>
</div>
