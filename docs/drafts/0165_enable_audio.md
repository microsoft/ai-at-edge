---
title: "Audio based anomaly detection"
permalink: /docs/water_level/
excerpt: "Audio based anomaly detection"
variable:
  - platform: windows
    name: Windows
  - platform: macos
    name: macOS
last_modified_at: 2019-09-02
---
[<-- Back to project listing]({{ '/docs/hw_examples/' | relative_url }})
<html>
<br>
<table><tr bgcolor="#68adc4"><td colspan="2"><b>
<a href="https://www.visionaidevkit.com" target="_blank">Vision AI Developer Kit</a></b>
<tr><td>
Allthough Vision AI Developer Kit is by definition a smart camera it comes with 2 microphones and is able to run AI models for audio with its CPU 
</td>
<td width="30%">
<img src="{{'assets/images/DEVKIT_vaidk_small.png' | relative_url}}">
</td></tr>
<tr bgcolor="#68adc4"><td colspan="2"><b>
Solution example
</b></td></tr>
<tr><td colspan="2">
This project uniquely utilizes the Vision AI Developer Kit to aid in training a Neural Network based on features extracted from audio files. In this sample use case, the water level of a fountain can be determined by using audio classification through a machine learning model based on the sound produced by water splashing into a larger volume of different depths. This demonstrates both how audio can be used in some cases as a cheaper alternative to vision with 360° field coverage that is still possible using the DevKit and how to train a model using the Azure Machine Learning Service. Clone project source code from
</td></tr>
<tr><td colspan="2">
Clone project source code from <a href="https://github.com/ksaye/vision-ai-developer-kit-audio" target="_blank">GitHub</a> 
</td></tr>
<tr><td>
Basic audio training process introduced in this example
<img src="{{'/assets/images/audio.png' | relative_url}}" alt="Audio training process">
</td><td>
While this example is implemented using Vision AI Developer Kit most of the components can be reused in any hardware. Anomaly detection based on sound can be applied to many industry used like predictive maintenance.
</td></tr>