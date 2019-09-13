---
title: "Neural networks and ML framework"
permalink: /docs/frameworks/
excerpt: "Neural networks and ML framework"
variable:
  - platform: windows
    name: Windows
  - platform: macos
    name: macOS
last_modified_at: 2019-09-14
---

### Neural networks

AI models, especially ones for vision that transform a camera input into labels and objects, use often neural networks. Neural network is a series of highly connected algorithms that mimic the way human brains operate in order to recognize relatioships and pattern in a data set. Neural networks are used to cluster and classify data. 

Deep neural networks (DNN) are neural networks with additional complexity in terms of having multiple layers between inputs and outputs. [SqueezeNet](https://en.wikipedia.org/wiki/SqueezeNet){:target="_blank"} is an example of DNN.

### ML Frameworks

There are different training frameworks used by the data science community. These frameworks are used to build, i.e. train, deep learning models using their libraries with the data (training data). The framework libraries are used to represent the details of the underlying machine learning algorithms in the model. Examples of training frameworks are Tensorflow, Pytorch and Caffe2.

These frameworks also have inteference engines that are used to execute the deep neural network models. The inference engine is also referred to as the runtime. This runtime is capable of translating the operators in the DNN model into computation steps that are executed when input data is provided to the model.

### Selecting a neural network and ML framework

When creating a complex AI model being able to select a correct neural network and ML framework is essential. This is generally a complex area and we will targeting to provide additional information and guidance in the near future. Especially for vision there the frameworks may have different performace and accuracy with certain use cases like facial recognition, anomaly detection, activity recognition. The underlying complexity also often makes the AI model hardware dependent. Microsoft, among other companies, is solving this problem with ONNX.