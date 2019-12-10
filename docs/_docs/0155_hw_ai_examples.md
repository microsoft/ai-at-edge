---
# layout: archive
title: "Examples combining AI model and hardware"
permalink: /docs/hw_examples/
author_profile: false
---

### Get started with community project examples

Here is a list of product examples using a proven and tested combination of hardware and AI model. Most of the examples are stored in specific GitHub instances and contain the assets and instructions to get you started. You will need the hardware to go with the example.

{% assign pageTag = "vision" %}

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
