---
title: "Find ML models"
permalink: /docs/find_ml/
excerpt: "Find ML models"
variable:
  - platform: windows
    name: Windows
  - platform: macos
    name: macOS
last_modified_at: 2019-06-14
---

## Using existing models

Deep Neural Network (DNN) models are very complicated and in order to receive an adequate performance they are often required to be run in an HW accelerated chip such as GPU or DSP. Due to the underlying complexity they are often also specific to certain hardware architecture. AI frameworks are used to represent AI models An AI model is build using a neural network and an AI framework such are ONNX or Tensorflo

## Model conversion

AI models can often be converted to allow running them in the specific hardware. However, it's extremely important to understand that the hardware needs to support also the neural network model that is used in the model.

[Convert to ONNX](https://github.com/microsoft/OLive/tree/master/docker-images/onnx-converter){:target="_blank"}
- Use ONNX Converter Image to convert other major model frameworks to ONNX. Supported frameworks are currently
  - CNTK, CoreML, Keras, scikit-learn, Tensorflow, PyTorch

## Model Zoos

Model Zoos are collections of AI models that can be run as such or improved to meet specific user's needs. 

[ONNX Model Zoo](https://github.com/onnx/models){:target="_blank"}

[Model Zoo](https://modelzoo.co/){:target="_blank"}

[Tensorflow  detection model zoo](https://github.com/tensorflow/models/blob/master/research/object_detection/g3doc/detection_model_zoo.md){:target="_blank"}

[Caffe Model Zoo](https://github.com/BVLC/caffe/wiki/Model-Zoo){:target="_blank"}

[Caffe2 Model Zoo](https://caffe2.ai/docs/zoo.html){:target="_blank"}


