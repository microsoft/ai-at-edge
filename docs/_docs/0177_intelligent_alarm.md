---
title: "Intelligent Alarm Solution"
permalink: /docs/intelligent_alarm/
excerpt: "Intelligent Alarm Solution"
variable:
  - platform: windows
    name: Windows
  - platform: macos
    name: macOS
comments: 
  provider: "disqus"
  disqus: 
    shortname: https-azure-github-io-vision-ai-devkit-pages-docs-community-pr.disqus.com
last_modified_at: 2019-10-07
---
[<-- Back to project listing]({{ '/docs/hw_examples/' | relative_url }})

<html>
<br><br>
<a href="https://microsoft.github.io/ai-at-edge/docs/hw_examples/" target="_blank"><-- Bact to project listing</a><br>
<table><tr><td><b>Summary</b></td></tr>
<tr><td width="75%">
Intelligent Alarm project utilizes Vision AI DevKit to create captures of persons arriving to monitored area. These captures are further processed using Face API in order to identify entrants, while processing results can be surfaced thru chat bot. Intelligent Alarm is also capable of alert invocation either as chat bot proactive message or thru SMS.
</td><td width="25%">
<img src="{{'assets/images/intelligent_alarm.jpg' | relative_url}}">
</td></tr>
<tr><td colspan="2">
These capabilities make this project perfect base for example for automated card/chip less attendance systems with alerting capabilities or even as the name says for alarm solution :).<br>
In comparison to DevKit <a href=" https://azure.microsoft.com/en-us/services/cognitive-services/face/" target="_blank">Integration with Azure Face API Services project</a> this solutions implements different way of image capture on Vision AI DevKit (using node.js). It also utilizes cloud for further image processing and data storing and it provides alerting and presentation layer built using Conversational AI. On the contrary DevKit Integration with Azure Face API Services project meant to deliver standalone edge device capable of Face API invocation. 
<br> </td></tr>
</table></html>

<html><table>
<tr><td>
<b> Implementation </b> </td></tr>
<tr><td>
There are two important parts to the solution. First is intelligent edge device - Vision AI DevKit. Thanks to default custom vision model, it is capable (almost out of the box) to detect persons. If such event occurs, it captures the image and uploads it to Azure Storage for further processing (face identification).  <br>
Second part to the solution is cloud based backend and presentation layer. Backend, built using Azure Functions and Cosmos DB, is responsible for further image analysis, data storing and data access. Presentation layer is built as conversational AI interface using Bot Framework.
<br>

<img src="{{'assets/images/PROJECT_intelligent_alarm.png' | relative_url}}">

</td></tr>
</table></html>
<html><table>
<tr>
    <td width = "50%"> <b> Software and Services used</b> </td>
    <td width = "50%"> <b> Hardware </b> </td> 
    <td rowspan="24"></td> </tr>
 <tr>
    <td> <ul type="disc" >
            <li>Azure IoT Edge</li>
            <li>IoT Hub</li>
            <li>Azure Storage</li>
            <li>Azure Functions</li>
            <li>Face API</li>
            <li>Cosmos DB</li>
            <li>Twilio</li>
            <li>Bot Framework</li>
            <li>LUIS</li>
            <li>C#</li>
            <li>Node.js</li>
         </ul> 
   </td> 
    <td> <ul type="disc">
            <li>Vision AI DevKit camera</li>
         </ul>
   </td>
</tr> 
</table></html>  

<html><table>
<tr><td><b> Repository </b></td></tr>
<tr><td>
Find all relevant information, including code, for full implementation of this product <a href="https://github.com/MarekLani/VisionDevKit-Intelligent-Alarm" target="_blank">here</a>. <br>
Users are always encouraged to innovate and continue to improve the functionality of current projects. 
</td></tr>
<tr><td>
<b> Future Improvements and Project Suggestions </b> </td></tr>
<tr><td>
Solution was built as pet project and so there certainly are several areas for improvements:<br>
<li>Replace Cosmos with <a href="https://azure.microsoft.com/en-us/services/sql-database/" target="_blank">Azure SQL Database</a></li>
<li>Improvement for logic determining when the image will be captured and sent for further processing. Ideally, solution should limit number of pictures per entrant and per entry that are being sent up to the cloud, while it should be uploading pictures with visible faces. There haven’t been done much work in this area yet.</li>
<li>Solution is missing console for Face API person group training</li>
<li>Solution is not supporting multi tenancy at this point, neither multi user usage</li>
<li>LUIS model might be trained more extensively and support more intents</li>
<li>Once Face API is exportable also to docker container compatible with ARM devices, the plan is to run face identification directly on the Vision AI DevKit</li>

</td></tr>
</table></html>

<html><table>
<tr><td width="30%"><b> About the Creator </b> </td></tr>
<tr><td rowspan="2" width="30%"> <img src="{{'assets/images/PERSON_marek.png' | relative_url}}"> </td></tr>
<tr><td width = "70%">
Marek Lani is Software Engineer working closely with Microsoft customers on their projects with ultimate goal to make them even more successful using latest Azure services. Marek is tech evangelist by heart, with passion for IoT, Serverless, Cognitive Services, Conversational AI…
<br>
The check out more of Marek's projects please visit his <a href="https://github.com/MarekLani" target="_blank">GitHub</a>
</td></tr>
</table></html>


<!-- <div id="disqus_thread"></div>
<script>

/**
*  RECOMMENDED CONFIGURATION VARIABLES: EDIT AND UNCOMMENT THE SECTION BELOW TO INSERT DYNAMIC VALUES FROM YOUR PLATFORM OR CMS.
*  LEARN WHY DEFINING THESE VARIABLES IS IMPORTANT: https://disqus.com/admin/universalcode/#configuration-variables*/
/*
var disqus_config = function () {
this.page.url = https://azure.github.io/Vision-AI-DevKit-Pages/docs/community_project02#;  // Replace PAGE_URL with your page's canonical URL variable
this.page.identifier = community_project_05; // Replace PAGE_IDENTIFIER with your page's unique identifier variable
};
*/
(function() { // DON'T EDIT BELOW THIS LINE
var d = document, s = d.createElement('script');
s.src = 'https://https-azure-github-io-vision-ai-devkit-pages.disqus.com/embed.js';
s.setAttribute('data-timestamp', +new Date());
(d.head || d.body).appendChild(s);
})();
</script>
<noscript>Please enable JavaScript to view the <a href="https://disqus.com/?ref_noscript">comments powered by Disqus.</a></noscript>


 -->
