---
title: "Run ONNX model with OpenVINO™ in Intel® powered hardware"
permalink: /docs/onnx_openvino/
excerpt: "Run ONNX model with OpenVINO™ in Intel® powered hardware"
variable:
  - platform: windows
    name: Windows
  - platform: macos
    name: macOS
last_modified_at: 2019-11-04
---

## Run ONNX models with OpenVINO™ in Intel® powered hardware

<html><table><tr bgcolor="#68adc4"><td colspan="2"><b>
Intel® powered developer kits for ONNX and Azure IoT
<tr><td colspan="2">
<b>Get good, better or best</b> Intel® powered developer kits come with multiple CPU choices - Atom™, Core™ and Xeon™. You can select to use the one that best fits your use case
</td></tr>
<tr><td><a href="https://software.intel.com/en-us/iot/hardware/up-squared-ai-vision-dev-kit" target="_blank">UP Squared* AI Vision X Developer Kit</a> that comes with Intel’s Atom™ processor is a high performance kit that provides a clear path to production, simple set up and configuration with pre-installed Ubuntu OS, expanded I/O to help with rapid prototyping, and a means to incorporate complex and advanced libraries in an intuitive fashion. This  kit provides Computer vision and deep learning from prototype to production.
</td>
<td width="30%">
<img src="{{'assets/images/devices_up2.png' | relative_url}}" alt="UP Squared">
</td></tr>
<tr><td><a href="https://software.intel.com/en-us/iot/hardware/iei-tank-dev-kit-core" target="_blank">IEI* Tank AIoT Developer Kit</a> ships with either Core™ (i5/i7) or Xeon™ (E3) processor with an optional vision accelerator that enables analysis of more than 16 video streams, deep neural network (DNN) inferencing for AI at the edge and comes with consistent APIs and runtimes across cameras, edge appliances, and cloud solutions. This  kit provides commercial production-ready development with deep learning, computer vision and AI.
</td>
<td width="30%">
<img src="{{'assets/images/devices_tank2.png' | relative_url}}" alt="Tank">
</td></tr>
<tr><td><a href="https://www.ieiworld.com/en/product/model.php?II=606" target="_blank">FLEX-BX200</a> FLEX-BX200 ships with Intel® Core™ i7/i5/i3 Pentium® processor. It is an AI hardware ready system ideal for deep learning and inference computing to help you get faster, deeper insights into your customers and your business. IEI’s FLEX-BX200 supports graphics cards, Intel FPGA acceleration cards, and Intel VPU acceleration cards, to provide additional computational power plus an end-to-end solution to run your tasks more efficiently. This kit provides  enormous computational power to perform accurate inference and prediction in near-real time, especially in harsh environments.
</td>
<td width="30%">
<img src="{{'assets/images/devices_flex.png' | relative_url}}" alt="FLEX-BX200">
</td></tr>
<tr><td><a href="https://www.aaeon.com/en/p/vision-system-box-pc-boxer-6841m" target="_blank">AAEON BOXER-6841M</a> enables turnkey development on the AAEON IoT platform, which is based on Azure services and enables developers and system integrators to quickly evaluate their solutions. You can order it with 6th / 7th Generation Intel® Core™ processor.
</td>
<td width="30%">
<img src="{{'assets/images/devices_boxer.png' | relative_url}}" alt="Boxer">
</td></tr>
<tr bgcolor="#68adc4"><td colspan="2"><b>
Solution example
</b></td></tr>
<tr><td colspan="2">
Intel and Microsoft joined forces to create development tools that make it easier for you to use the cloud, the edge or both, depending on your need. The latest is an execution provider (EP) plugin that integrates two valuable tools: the Intel Distribution of <a href="https://software.intel.com/en-us/openvino-toolkit" target="_blank">OpenVINO™ toolkit</a> and <a href="https://onnx.ai/" target="_blank">Open Neural Network Exchange</a> (ONNX) Runtime. The goal is to give you the ability to write once and deploy everywhere — in the cloud or at the edge. 
Read <a href="https://blogs.intel.com/iot/2019/08/21/intel-and-microsoft-advance-edge-to-cloud-inference-for-ai/#gs.5vaef1" target="_blank">Intel's blog</a> regarding advancing edge to cloud inferencing for AI.
</td></tr>
<tr><td colspan="2">
This solution example provides step by step instructions for enabling <a href="https://onnx.ai/" target="_blank">ONNX</a> with on Intel powered devices. ONNX is an open format to represent deep learning models. With ONNX, AI developers can more easily move models between state-of-the-art tools and choose the combination that is best for them. ONNX is developed and supported by a community of partners.
</td></tr>
<tr><td colspan="2">
<a href="https://github.com/Azure-Samples/onnxruntime-iot-edge/blob/master/README-ONNXRUNTIME-OpenVINO.md" target="_blank">Tutorial for deploying ONNX Runtime with OpenVINO™</a> 
</td></tr>
<tr><td colspan="2">
<a href="https://github.com/Azure-Samples/onnxruntime-iot-edge" target="_blank">Deployment with ONNX Runtime with Azure IoT Edge</a> 
</td></tr>
<tr><td colspan="2">
<a href="https://github.com/intel/Edge-Analytics-FaaS/tree/R1_2019/Azure-IoT-Edge/OnnxRuntimemd" target="_blank">Edge Analytics FaaS with OpenVINO™ and ONNX with docker containers</a> 
</td></tr>
<tr><td><b>
ONNX with UP Squared solution diagram</b>
<img src="{{'/assets/images/devices_onnx_up2.png' | relative_url}}" alt="Enable ONNX with UP Squared" width="100%">
</td></tr>
