---
title: "Find more services from catalog"
permalink: /docs/catalog/
author_profile: false
variable:
  - platform: windows
    name: Windows
  - platform: macos
    name: macOS
last_modified_at: 2019-12-13
---

### Service catalog

Learn more about a variety of Azure services by browsing through a service catalog

{% assign pageTag = "catalog" %}

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
