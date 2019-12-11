---
title: "Get started with ONNX"
permalink: /docs/onnx_get_started/
excerpt: "Get started with ONNX"
variable:
  - platform: windows
    name: Windows
  - platform: macos
    name: macOS
last_modified_at: 2019-11-06
---

### Get started with ONNX

Train an ONNX model using [Azure Machine Learning](https://github.com/Azure/MachineLearningNotebooks/tree/master/how-to-use-azureml/deployment/onnx){:target="_blank"}.

### Convert your model to ONNX

[Convert to ONNX](https://github.com/microsoft/OLive/tree/master/docker-images/onnx-converter){:target="_blank"}
- Use ONNX Converter Image to convert other major model frameworks to ONNX. Supported frameworks are currently
  - CNTK, CoreML, Keras, scikit-learn, Tensorflow, PyTorch

### Get started with examples

Here is a list of product examples using a ONNX and tested combination of hardware and AI model. 

{% assign pageTag = "onnx" %}

<div class="grid__wrapper grid__catalog">

  {% assign projects = '' | split: '' %} {% comment %} Empty array {% endcomment %}

  {% for project in site.projects %}
  
    {% comment %} Collect all the multi-part projects based on the presence of the part attribute of the file {% endcomment %}
    {% if project.part != nil and project.part == 1 %}
      {% assign projects = projects | push: project %}
      
    {% comment %} Collect all the single page projects {% endcomment %}
    {% elsif project.part == nil %}
      {% assign projects = projects | push: project %}
    
    {% endif %}

  {% endfor %}


  {% for post in projects %}
    {% for tag in post.tags %}
    {% if tag contains pageTag %}
       {% include archive-single.html type="grid" %}
    {% endif %}
    {% endfor %}
 {% endfor %}
</div>


| **Want to publish your own example?** |
| Send email to [aiedge@microsoft.com](mailto:aiedge@microsoft.com) |
