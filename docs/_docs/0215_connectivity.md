---
title: "Connectivity"
permalink: /docs/connectivity/
excerpt: "High level introduction to Connectivity"
variable:
  - platform: windows
    name: Windows
  - platform: macos
    name: macOS
last_modified_at: 2020-04-21

---

## Introduction

IoT connectivity has many flavors. Understanding what technology should be used in any given environment or application is not trivial and many times there are several good choices. The goal of this documentation is to give you a short overview on connecting a solution to Azure IoT platform and give you pointers to the work we have done with our partners to make the connectivity enablement easier. This is now focusing on wireless connectivity.  

On high level wireless technologies can be divided into unlicensed and licensed. Licensed usually means that you are paying somebody to host the network you will be using, like it is the case with all cellular technologies. This distinction is used in the [summary table](https://microsoft.github.io/ai-at-edge/docs/connectivitytable/) to split the technologies.


Another high level consideration before jumping into the details is the protocol layers that the wireless technology offers. Some of the very low power wireless technologies do not have a full IP stack in the leaf devices. This usually means that the leaf devices themselves cannot directly connect to cloud, like Azure IoT HUB. There has to be a protocol conversion in between i.e. some sort of gateway that can talk to the leaf devices and then it has an IP stack that can be used to connect to the cloud. 

## What are the key questions when selecting connectivity
Here we have a list of questions to start your journey to select the connectivity:
- Is your device battery powered? If yes, how long does the battery have to last?
  - This is essential and rules out some of the connectivity technologies
- What is the range needed?
  - Max Range is often given in optimal environment and that is rarely the case in real life, so you should also consider if you are implementing in rural vs urban environment? Underground, inside or outside? Are there other RF systems around?
- How reliable the connection must be? Can you loose a message at any point?
  - What happens to the system if it goes offline for a while? 
- What is the number of end points needed for the solution?
  - Some technologies have a limit to the number of devices in certain areas.
- What are the data rates needed for both uplink and downlink? 
  - Take into account potential configuration or SW updates too.
- Security, what are the main attack vectors?
  - You have to be able to trust the data your device sends otherwise it becomes useless, right?
- How do you plan to manage your connectivity do you outsource or set it up yourself?
  - Setting up the network and optimizing it requires engineering work and maintenance vs you buy it as a service.
- Cost constraints for connectivity and the system in general?
  - especially, if you vision your solution to scale into large volumes, then individual HW and connectivity costs become important, otherwise not so much.
- Does your solution need mobility for the end devices?
  - Very few connectivity technologies can cope with mobility of the device.

## Summary table on Wireless IoT Technologies

Here is a good starting point for comparing specifications of different technologies:
[summary table](https://microsoft.github.io/ai-at-edge/docs/connectivitytable/)


## Security considerations
Security is a complex topic, but it becomes easier to crasp if you divide it into meaningful pieces. IoT deployments can be divided into the following categories:
- <b>Device security</b>: Securing the IoT device while it is deployed in the wild.
- <b>Conneciton security</b>: Ensuring all data transmitted between the IoT device and IoT Hub is confidential and tamper-proof.
- <b>Cloud security</b>: Providing a means to secure data while it moves through, and is stored in the cloud.
When designing each element of the IoT system it is important to understand what are the potential threads to the system and then add appropriate defenses against them. More about this here:
[Internet of Things (IoT) security architecture](https://docs.microsoft.com/en-us/azure/iot-fundamentals/iot-security-architecture){:target="_blank"}

If you purely look at the connection and its security it has 2 layers:
1.  Wireless Layer encryption: If we are talking about wireless connectivity, we have to consider encrypting the over the air transmissions. This is part of the protocol usually, but you have to make sure it is enabled in the right way and the "secret" that is used for encrypting is not exposed outside the system. Examples are Wi-Fi AES passphrase or the encryption key Kc that is derived from SIM cards Authentication Ki.
2.  IP layer encryption: In the IP stack, we have TLS (Transport Layer Security) that is used to create an encrypted tunnel between the IoT device/gateway and the cloud gateway. For Azure IoT TLS is mandatory.

### Azure Sphere
Microsoft offers a very comprehensive security solution called Azure Sphere. Azure Sphere is managed solution for securing any connection from edge to cloud. More info about this can be found here:
[Azure Sphere](https://azure.microsoft.com/en-us/services/azure-sphere){:target="_blank"}


## Cost considerations
Many times the radio module or HW costs are getting most of the attention, which is ok, if the volumes are really high (100k). But usually radio module costs are small percentage of the overall life cycle costs. There are costs like installation, maintenance, data and possible certifications that are on top of the SW/FW design, development and testing.
 
When it comes to connectivity and costs, there are several technologies that offer easy to adopt models, where you get devices that are ready to be used, but the costs are coming from the actual data (or device) usage over time. For example, Sigfox and all cellular technologies can offer such a "Device as a Service" model. Operators are having new business models that offers Device As A Service, where you can select from a portfolio of IoT devices and if those suit your needs you only pay a monthly fee and get to use them without too much hassle. 

New cellular IoT Technologies are more expensive per megabyte than the phone data plans of today, so understanding how much data your system will be using is essential. This has to also take into account the potential configurations or updates that you would be sending over the air.

Sometimes it makes sense to collect the data using unlicensed technologies like Bluetooth or Lora and then use a gateway to optimize what actually gets sent into the cloud. Here we of course are making the system more complex as for example Bluetooth and LoRa require a protocol conversion before their data is to be sent to the cloud. You also make the device management in general a little more complex.

## More about cellular connectivity
Cellular technology is widely used in IoT today and the new LPWAN (Low Power Wide Area Network) standards like LTE-M and NB-IoT are growing significantly. Cellular connectivity despite the inevitable data costs has some clear advantages, like the built in security because of the SIM, ubiquitous coverage and wide variety of HW available. 5G is also promising a lot (low latency, high data rates and high density) for certain IoT scenarios, although the technology is not fully available today.

Cellular connectivity is fairly regulated as it is using licensed frequency spectrum and you always have network operator that wants to somehow control the quality of the devices that are connecting to its network. The complexity of this regulatory aspect is hidden at least a little as the cellular module vendors handle this, but if you alter the reference design that module vendors have cerified, the approval process may become a significant factor in the go to market timeline. 

### Cellular for heavier edge device
If your device is not battery powered and has a higher level OS like Linux or Windows, you have a good selection of cellular modems, that can be connected either via USB, PCI or ethernet to your solution. The cellular Modem HW vendor usually has a driver that you can simply take into use and it integrates as part of your HLOS (High Level OS like Linux or Windows) networking stack and you have connectivity. In this case, the task is to understand how you obtain the SIM cards and what carrier or connectivity provider you need to work in order to fulfill your needs. On top the driver, you also need to configure the access point information to your device based on the contracts you have with the connectivity provider(s). 

In above scenario, you still want to understand what data rates your system requires. Depending on the local coverage and the data rate you need, there are modems that support all or some of these different cellular technologies like 2G (GSM/GPRS/EDGE), 3G (UMTS/HSDPA) or different flavors of LTE.  Cat 1 LTE being the simplest traditional LTE technology, which should be available everywhere you have LTE coverage. Higher Cat versions are optimizing operator network cell size and giving more bandwidth for the connected devices. Usually the higher LTE Categories mandate several antennas and radio features and thus are mostly used by the cellphones, which can benefit from those better.

### AT Commands
AT (Attention) commands are the way most radio modules can be controlled. AT commands are simple Aschii commands starting with "AT" in addition to the specific command and the needed parameter. For example, common command for setting up Access Point is "AT+QICSGP=1,1,"soracom.io","sora","sora",1", where soracom.io is the APN etc. Even the higher level drivers can be broken down to pieces that basically just send AT commands to the modem and convert the responses back to the way networking stack can understand it. Although basic AT commands are almost the same no matter what module you select, there are differences and you have to always follow the module vendors AT commend specification, if you are not working with HLOS and a dedicated driver for your radio modem.

### Cellular connectivity for leaf devices with lower data rates and power constraints
LTE Cat M1 or in short LTE-M is really the IoT optimized version of LTE. And LTE-M is not available everywhere where traditional LTE is. Operators are making efforts to enable it in their networks, but you have to check the local coverage. GSMA hosts a fairly good overview of the current coverage for LTE-M and NB-IoT here: 

[GSMAcoveragemap](https://www.gsma.com/iot/deployment-map/){:target="_blank"}

LTE-M allows you to set up a full PDP (Packet Data Protocol) context to the PDN (Packet Data Network) and it allows the device to obtain full IP address. With this and the IP stack in the device you can connect to Azure IoT platform without any intermediate gateways. This simplifies the picture. LTE-M is already optimized for power, but it can still handle reasonable data rates in the order of one Megabyte per sec, if environment allows.

NB-IoT (Narrow Band IoT) is then totally different from LTE or LTE-M. NB-IoT is really aiming to be the most power efficient of all Cellular technologies and it requires more updates to the network than LTE-M. NB-IoT is actually using the control plane/channel of the cellular network. So the control plane is there to handle device paging, mobility and other features that are a must for wireless network and its devices to function. Now, some of these control plane channels are repurposed to allow low data rate IoT data to go through them. Control plane is not designed for large amounts of data, so NB-IoT will always have a limited data rate. But this approach enables NB-IoT to have the frequency band be on the lowest possible (depending on the carrier) and as we know lower frequencies tend to propagate further, which increases the range. But there is a downside to this, many of the operators that offer NB-IoT have a gateway between the NB-IoT device and internet. This makes it impossible to directly connect to the device. 

![NB-IoT]({{ '/assets/images/NB-IoT-pic.png' | relative_url }})

This is not always the case, but if it is you have to build your solutions taking into account that you do not have direct access to your device.

One thing to note here also is the fact that these low power cellular technologies require a special SIM card in many regions. So the SIM that you have for your Mobile phone does not necessarily work, but you have to contact your local operator to obtain a dedicated SIM card.

## Connectivity and Azure
You can use pretty much what ever connectivity technology you want to connect to Azure IoT as long as the protocol running on top of the IP stack is using MQTT, AMQP or HTTP. Those are the protocols that IoT HUB supports today. IoT HUB is the IoT cloud gateway that is the foundation of Azure IoT platform. If your devices do not support those protocols natively, you have to implement a protocol translation somewhere in the system. Also Transport Layer Security TLS is required for connecting to Azure IoT.

Our Device SDK similarly has ready-made support for the protocols mentioned above or if you are using Azure IoT Edge runtime the IoT HUB module connects to IoT HUB using one of those protocols also. Our Device SDK allows you to easily add features for device provisioning and take advantage of the device twin that is hosted in IoT HUB by default. You can find all relevant info related to the SDKs here:

[Generic starting page for SDKs](https://docs.microsoft.com/en-us/azure/iot-hub/iot-hub-devguide-sdks){:target="_blank"}

[How to port on to other platforms](https://github.com/Azure/azure-c-shared-utility/blob/master/devdoc/porting_guide.md){:target="_blank"}

## Connectivity partners

Microsoft is working with several connectivity providers to help getting devices connected to Azure, so this list will be growing.

<b> Twilio </b>

Twilio enables you to use your SIM as the authentication root of trust by having separate certificates stored in the SIM. These can be used to authenticate your device to Azure IoT Device Provisioning service. More in Twilio GitHub:

[Twilio GitHub](https://github.com/twilio/breakout-trust-onboard){:target="_blank"}

<b> ARM Pelion </b>

We are working with ARM Pelion to enable simplified global cellular IoT SIMs and secure provisioning that is integrated into Azure IoT SaaS product called IoT Central. More info here: 

[ARM Pelion in Azure Marketplace](https://azuremarketplace.microsoft.com/en-us/marketplace/apps/streamtechnologieslimited.arm-pelion?tab=Overview){:target="_blank"}


## Devices and Connectivity devkits
In general, you can find a lot of sample code in GitHub, by just searching using key words. We also have Azure IoT Devices Catalog that has a list of certified devices that have been validated to connect to Azure IoT HUB:

[Azure Certified for IoT Device Catalog](https://catalog.azureiotsolutions.com/){:target="_blank"}

In the table below are some devkits that we have worked with to enable easy connectivity to Azure with clear steps and guidance.

| <font size="+1">Technology</font> | <font size="+1">Microsoft partner devkits supporting easy connection to Azure IoT </font> | |
| --- | --- | ---|
| <b>5G</b> | Coming soon | |
| <b>LTE-M and NB-IoT</b> | [Quectel BG95 cellular devkit](https://catalog.azureiotsolutions.com/details?title=Quectel-BG95&source=all-devices-page){:target="_blank"} | ![QuectelBG95]({{ '/assets/images/QuectelB95_thmb.png' | relative_url }}) |
| <b>LTE-M and NB-IoT</b> | [Renesas AE Cloud Kit](https://www.renesas.com/us/en/products/synergy/hardware/kits/ae-cloud2.html#productInfo){:target="_blank"} | ![Renesaskit]({{ '/assets/images/Renesas LTE Cloud kit_thmb.png' | relative_url }}) |
| <b>LTE-M and NB-IoT</b> | [LTE cellular to cloud Pack with STM32L496 ](https://www.st.com/en/evaluation-tools/p-l496g-cell02.html?ecmp=tt7639_gl_link_jul2018){:target="_blank"} | ![STM32L496]({{ '/assets/images/STM32L496_thmb.png' | relative_url }}) |
| <b>Wi-Fi</b>| [Azure IoT kit](https://microsoft.github.io/azure-iot-developer-kit/){:target="_blank"} | ![AzureIoTKit]({{ '/assets/images/Azure IoT devkit_thmb.png' | relative_url }}) |
| <b>LTE-M and NB-IoT</b> | [Verizon LTE ST Micro kit ](https://www.avnet.com/shop/us/products/avnet-engineering-services/verizon-st-lte-kit-3074457345640094168?aka_re=2)| | |
| <b>LoRaWAN</b> | [LoraWan kit](https://github.com/Azure/iotedge-lorawan-starterkit) | | |
| <b>Bluetooth</b> | [ST Sensor Tile kit](https://docs.microsoft.com/en-us/azure/iot-central/core/howto-connect-sensortile) | | |
| <b>LTE-M and NB-IoT</b> | [PyCom devkit](https://github.com/jimbobbennett/PyCom-AzureIoTHub)|  |  |
| <b>RPMA Ingenu</b>| [RPMA kit](https://microsoft.github.io/techcasestudies/iot/azure%20app%20service/azure%20functions/2016/12/29/ingenu.html)| |  |


