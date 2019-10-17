---
title: "Find ML models"
permalink: /docs/find_ml/
excerpt: "Find ML models"
variable:
  - platform: windows
    name: Windows
  - platform: macos
    name: macOS
last_modified_at: 2019-10-17
---

### Using existing models

Deep Neural Network (DNN) models are often  complex, so in order to achieve their optimum performance, they should run in an HW accelerated chip such as GPU or DS. Due to the underlying complexity they are often also specific to certain hardware architecture. If you have an existing IoT Edge and are looking for example models, start by checking which neural networks and ML frameworks are supported.

### Model conversion

AI models can often be converted to allow running them in the specific hardware. However, it's extremely important to understand that the inferencing engine in the hardware needs to support also the neural network model that is used in the model.

[Convert to ONNX](https://github.com/microsoft/OLive/tree/master/docker-images/onnx-converter){:target="_blank"}
- Use ONNX Converter Image to convert other major model frameworks to ONNX. Supported frameworks are currently
  - CNTK, CoreML, Keras, scikit-learn, Tensorflow, PyTorch

### Model Zoos

Model Zoos are collections of AI models that can be run as such or improved to meet specific user's needs. 

[ONNX Model Zoo](https://github.com/onnx/models){:target="_blank"}

[Model Zoo](https://modelzoo.co/){:target="_blank"}

[Tensorflow  detection model zoo](https://github.com/tensorflow/models/blob/master/research/object_detection/g3doc/detection_model_zoo.md){:target="_blank"}

[Caffe Model Zoo](https://github.com/BVLC/caffe/wiki/Model-Zoo){:target="_blank"}

[Caffe2 Model Zoo](https://caffe2.ai/docs/zoo.html){:target="_blank"}


