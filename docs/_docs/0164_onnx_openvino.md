---
title: "Run ONNX model with OpenVINO™ in Intel® powered hardware"
permalink: /docs/onnx_openvino/
excerpt: "Run ONNX model with OpenVINO™ in Intel® powered hardware"
variable:
  - platform: windows
    name: Windows
  - platform: macos
    name: macOS
last_modified_at: 2019-10-30
---

## Run ONNX models with OpenVINO™ in Intel® powered hardware

| **Intel® powered developer kits for ONNX and Azure IoT** |  |
| :----------- |
| **Get good, better or best** Intel® powered developer kits come with one or multiple CPU choices - Atom™, Core™ and Xeon™. You can select to use the one that best fits your use case |
| **[UP Squared* AI Vision X Developer Kit](https://software.intel.com/en-us/iot/hardware/up-squared-ai-vision-dev-kit){:target="_blank"}** that comes with Intel's Atom™ processor is a high performance kit that provides a clear path to production, simple set up and configuration with pre-installed Ubuntu OS, expanded I/O to help with rapid prototyping, and a means to incorporate complex and advanced libraries in an intuitive fashion. Computer vision and deep learning from prototype to production.  | ![UP2]({{ '/assets/images/devices_up2.png' | relative_url }})|
| **[IEI* Tank AIoT Developer Kit](https://software.intel.com/en-us/iot/hardware/iei-tank-dev-kit-core){:target="_blank"}** ships with either Core™ (i5/i7) or Xeon™ (E3) processor and with an optional vision accelerator and enables analysis of more than 16 video streams, deep neural network (DNN) inferencing for AI at the edge and comes with consistent APIs and runtimes across cameras, edge appliances, and cloud solutions. Commercial production-ready development with deep learning, computer vision and AI | ![Tank]({{ '/assets/images/devices_tank2.png' | relative_url }})| 
| **[FLEX-BX200](https://www.ieiworld.com/en/product/model.php?II=606){:target="_blank"}** ships with Intel® Core™ i7/i5/i3 and Pentium® processor and is an AI hardware ready system ideal for deep learning inference computing to help you get faster, deeper insights into your customers and your business. IEI’s FLEX-BX200 supports graphics cards, Intel FPGA acceleration cards, and Intel VPU acceleration cards, and provides additional computational power plus end-to-end solution to run your tasks more efficiently. Enormous computational power to perform accurate inference and prediction in near-real time, especially in harsh environments. | ![Flex]({{ '/assets/images/devices_flex.png' | relative_url }})| 
| **[AAEON BOXER-6841M](https://www.aaeon.com/en/p/vision-system-box-pc-boxer-6841m){:target="_blank"}** enables turnkey development on the AAEON IoT platform, which is based on Azure services and enables developers and system integrators to quickly evaluate their solutions. You can order it with 6th / 7th Generation Intel® Core™ processor | ![Boxer]({{ '/assets/images/devices_boxer.png' | relative_url }})| 

| Solution example |
| :----------- |
|  Intel and Microsoft joined forces to create development tools that make it easier for you to use the cloud, the edge or both, depending on your need. The latest is an execution provider (EP) plugin that integrates two valuable tools: the Intel Distribution of [OpenVINO™ toolkit](https://software.intel.com/en-us/openvino-toolkit){:target="_blank"} and [Open Neural Network Exchange](https://onnx.ai/){:target="_blank"} (ONNX) Runtime. The goal is to give you the ability to write once and deploy everywhere — in the cloud or at the edge. 
Read [Intel's blog](https://blogs.intel.com/iot/2019/08/21/intel-and-microsoft-advance-edge-to-cloud-inference-for-ai/#gs.5vaef1){:target="_blank"} regarding advancing edge to cloud inferencing for AI. |

| This solution example provides step by step instructions for enabling [ONNX](https://onnx.ai/){:target="_blank"} with on Intel powered devices. ONNX is an open format to represent deep learning models. With ONNX, AI developers can more easily move models between state-of-the-art tools and choose the combination that is best for them. ONNX is developed and supported by a community of partners. |
| [Tutorial for deploying ONNX Runtime with OpenVINO™](https://github.com/Azure-Samples/onnxruntime-iot-edge/blob/master/README-ONNXRUNTIME-OpenVINO.md){:target="_blank"} | 
| [Deployment with ONNX Runtime with Azure IoT Edge](https://github.com/Azure-Samples/onnxruntime-iot-edge){:target="_blank"} | 
| [Edge Analytics FaaS with OpenVINO™ and ONNX with docker containers](https://github.com/intel/Edge-Analytics-FaaS/tree/R1_2019/Azure-IoT-Edge/OnnxRuntime){:target="_blank"} |

| ONNX with UP Squared solution diagram |
| ![Enable ONNX with UP Squared]({{ '/assets/images/devices_onnx_up2.png' | relative_url }}) |

