---
title: "Get started with speech"
permalink: /docs/speech/
excerpt: "Get started with speech"
variable:
  - platform: windows
    name: Windows
  - platform: macos
    name: macOS
last_modified_at: 2019-09-30
---

### Microsoft's speech services

The Speech Services by [Cognitive Services](https://azure.microsoft.com/en-us/services/cognitive-services/){:target="_blank"} are the unification of speech-to-text, text-to-speech, and speech-translation into a single Azure subscription. It's easy to speech enable your applications, tools, and devices with the [Speech SDK](https://docs.microsoft.com/en-us/azure/cognitive-services/speech-service/speech-sdk-reference){:target="_blank"}, [Speech Devices SDK](https://aka.ms/sdsdk-quickstart){:target="_blank"}, or [REST APIs](https://docs.microsoft.com/en-us/azure/cognitive-services/speech-service/rest-apis){:target="_blank"}.

![Speech architecture]({{ '/assets/images/speech_architecture.PNG' | relative_url }})

### Speech-to-text

[Speech-to-text](https://docs.microsoft.com/en-us/azure/cognitive-services/speech-service/speech-to-text){:target="_blank"} from Azure Speech Services, enables real-time transcription of audio streams into text that your applications, tools, or devices can consume, display, and take action on as command input. This service is powered by the same recognition technology that Microsoft uses for Cortana and Office products, and works seamlessly with the translation and text-to-speech. 

### Text-to-speech

[Text-to-speech](https://docs.microsoft.com/en-us/azure/cognitive-services/speech-service/text-to-speech){:target="_blank"} from Azure Speech Services is a service that enables your applications, tools, or devices to convert text into natural human-like synthesized speech. Choose from standard and neural voices, or create your own custom voice unique to your product or brand.

### See also:
- [Speech translation](https://docs.microsoft.com/en-us/azure/cognitive-services/speech-service/speech-translation){:target="_blank"}
- [Voice-first virtual assistants preview](https://docs.microsoft.com/en-us/azure/cognitive-services/speech-service/voice-first-virtual-assistants){:target="_blank"}

### Get started with Custom Speech service

What is [Custom Speech](https://docs.microsoft.com/en-us/azure/cognitive-services/speech-service/how-to-custom-speech){:target="_blank"}?
Access [Custom Speech portal](https://speech.microsoft.com/portal){:target="_blank"}

### Get started with a device and speech

Get Speech Devices SDK and find suitable development kits [here](https://docs.microsoft.com/en-us/azure/cognitive-services/speech-service/get-speech-devices-sdk){:target="_blank"}.

### Testing a speech platform device

The signal paths and architecture used for testing a Microsoft Windows Speech Platform device are described below:
![Speech testing]({{ '/assets/images/speech_testing.PNG' | relative_url }})

Capture streams represent audio signals acquired by integrated microphone(s), and pre-processed for use by a speech recognition engine or keyword spotter.
Render streams represent audio signals destined for playback via device speakers or playback accessories, and enable echo cancellation algorithm functionality.

