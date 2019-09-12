---
title: "Machine Learning"
permalink: /docs/machine_learning/
excerpt: "Machine Learning"
variable:
  - platform: windows
    name: Windows
  - platform: macos
    name: macOS
last_modified_at: 2019-06-14

---

## What is machine learning?

In short machine learning is a science that provides a computer the ability to learn without being explicitly programmed. It's based on the usage of algorithms that analyze data, learn from it and make a specified prediction. Running machine learning models requires often a lot of computing power and it is common to run them algorithms, AI models, in the cloud. Edge computing brings that capability to the devices.

In the context of AI@Edge the machine learning models are run in containers that are deployed to the devices using Azure IoT Hub.

## Creating an AI model 

There are number of standard steps required to run AI model in an edge device. Here is an example of a typical process for creating an AI model.

![ML flow]({{ '/assets/images/ML_flow.PNG' | relative_url }})

<!-- 

### Gathering and labeling data

AI models for vision and sound require data for training purposes. Professional model may require thousands of samples. For vision training data should be taken if possible from the actual location where the camera(s) will be used in production. Also taking into account different lighting conditions and other variable with the target of being able to generate as comprehensive data set as possible is important.

Labeling refers to an act of giving meaning to a data. In practice it's indicating what data represent by labeling objects in a picture or label sound sample.

Depending on the use case it's recommended that part of the data set is preserved for validating the model.

### Training 

Develop scripts

-->

### Tools

Microsoft offers multiple tools for training, packaging and deploying the model. 

[Custom Vision](https://www.customvision.ai/){:target="_blank"} offers an easy to use UI for creation Vision AI model.

[Jupyter Notebook](https://jupyter.org/){:target="_blank"} are commonly used by data scientists for developing machine learning models. Many of the machine learning communities and community projects provide a set of Jupyter Notebooks to get started with the specific ML model.
- [Azure Notebooks](https://notebooks.azure.com/){:target="_blank"} provides online access to Jupyter notebooks running in the cloud on Microsoft Azure. The portal also contains a comprehensive set of default projects to get started with Jupyter Notebooks. See [Azure Notebooks documentation](https://docs.microsoft.com/en-us/azure/notebooks/){:target="_blank"}
- Jupyter Notebooks can be run using local hardware like laptop or creating Notebook VM (Virtual MAchine) in [Azure Machine Learning Workspace](https://docs.microsoft.com/en-us/azure/machine-learning/service/how-to-manage-workspace){:target="_blank"}.

Other possible solution include:
- [Azure Machine Learning SDK for Python](https://docs.microsoft.com/en-us/python/api/overview/azure/ml/intro?view=azure-ml-py){:target="_blank"} enables python based development.
- Automate your machine learning activities with the [Azure Machine Learning CLI](https://docs.microsoft.com/en-us/azure/machine-learning/service/reference-azure-machine-learning-cli){:target="_blank"}.
- Write code in Visual Studio Code with [Azure Machine Learning VS Code extension](https://docs.microsoft.com/en-us/azure/machine-learning/service/how-to-vscode-tools){:target="_blank"}
- Use the [visual interface (preview) for Azure Machine Learning service](https://docs.microsoft.com/en-us/azure/machine-learning/service/ui-concept-visual-interface){:target="_blank"} to perform the workflow steps without writing code.


## Characteristics of main machine learning use cases

| | **Vision** | **Audio** | **Telemetry** |
| :----------- |
| | ![Vision]({{ '/assets/images/ICON_vision.PNG' | relative_url }}) | ![Audio]({{ '/assets/images/ICON_audio.PNG' | relative_url }}) | ![Telemetry]({{ '/assets/images/ICON_telemetry.PNG' | relative_url }}) |
| **Summary** | Vision AI is specialized machine learning for images and video that allows you to transform camera input into labels and objects that you can use in your applications and busineses logic. | Machine learning solutions for audio can be further categorized into two main subcategories - speech to text used for example by smart assistant and anomaly detection based on sound | Telemetry refers to numeric data received from multiple different kinds of sensors. Telemetry data can reflect for example temperature or pressure. |
| **Typical use cases** | Workplace safety, Retail, Quality control (anommaly detection), Smart home/building/city, Access control | Speech to text, anomaly detection (predective maintenance) | Anomaly detection, Predective maintenance |
| **Main challenges** | Large amounts of data, HW acceleration needed for real time inferencing | Speech to text: Microphone and model dependency, Acquiring audio transcription data for training | Building a model often requires in depth machine learning knowledge. Limited amount of tools available. |



<!-- ## Custom vision - get started with Vision AI

Vision AI is specialized machine learning for images and video that allows you to transform camera input into labels and objects that you can use in your applications and business logic.  -->