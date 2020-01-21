---
title: "Workplace Safety Identification"
permalink: /docs/workplace_safety/
excerpt: "Ensuring worplace safety using Custom Vision ML and Azure services"
variable:
  - platform: windows
    name: Windows
  - platform: macos
    name: macOS
comments: 
  provider: "disqus"
  disqus: 
    shortname: https-azure-github-io-vision-ai-devkit-pages-docs-community-pr.disqus.com
last_modified_at: 2019-08-21
---
[<-- Back to project listing]({{ '/docs/hw_examples/' | relative_url }})

<html>
<br>
<table><tr><td><b>Summary</b></td></tr>
<tr><td>
This project demonstrates the implementation of a Custom Vision ML model to the Vision AI DevKit to identify the presence of workplace safety equipment such as hardhats, vests, and safety glasses. As each object is detected, the information is stored and an alarm is triggered when a person that is not wearing the specified eqipment is detected in the frame.  <br> </td></tr>
</table></html>

<img src="{{'assets/images/WorkplaceSafetyarch.jpg' | relative_url}}">

<html><table>
<tr><td>
<b> Implementation </b> </td></tr>
<tr><td>
<b>IoT Hub</b> identifies the detected object data from the device and sends data to the cloud to further process using downstream services. <br>
<b>Stream Analytics</b> reads the data from the incoming event hub in IoT hub and parses the JSON and stores information into Azure SQL and Blob Storage. The incoming data set is deflated from JSON format to a structured format for further analysis. <br>
<b>Azure SQL</b> database stores detected object data (including time of detection) for generation of interpretive charts displayed on the website and Power BI reporting. The data is only kept for a 6 months to yearlong time frame. <br>
<b>Blob Storage</b> in Azure stores the same data for long term storage. Data older than one year or more is kept for auditing records and compliance. <br>
<b>Web App Dashboard</b> uses Azure SQL data to display the information on the webpage.
</td></tr>
</table></html>

<html> <table>
<tr>
<td width="50%"><img src="{{'assets/images/workplace_detectionscreen.png' | relative_url}}"></td>
<td width="50%"> <img src="{{'assets/images/workplace_graphs.png' | relative_url}}"> </td>
</tr>
</table></html>


<html><table>
<tr>
    <td width = "50%"> <b> Software and Services used</b> </td>
    <td width = "50%"> <b> Hardware </b> </td> 
    <td rowspan="24"></td> </tr>
 <tr>
    <td> <ul type="disc" >
            <li>Custom Vision</li>
            <li>Azure Stream Analytics</li>
            <li>Azure SQL database</li>
            <li>Azure App Services</li>
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
Find all relevant information, including code, pictures used for model training, and the Custom Vision model file for full implementation of this product <a href="https://aka.ms/workplacesafety-kreshnan" target="_blank">here</a>. <br>
Users are always encouraged to innovate and continue to improve the functionality of current projects. 
</td></tr>
<tr><td>
<b> Future Improvements and Project Suggestions </b> </td></tr>
<tr><td>
This project has many different opportunities for improvement by other developers. The Custom Vision AI model could be further trained with additional images to identify equipment more accurately in a variety of scenarios or a system could be implemented to view images on the cloud before pushing specific pictures to train the Custom Vision model. Other opportunities could include: adding object tracking capabilities, enabling alerts to businesses or systems upon a safety violation, or adjusting the model or processing based on different industrial use cases.  
 <br>
  Feel free to fork the project and contribute back any improvements or suggestions. Contributors and maintainers are encouraged.
</td></tr>
</table></html>

<html><table>
<tr><td width="30%"><b> About the Creator </b> </td></tr>
<tr><td rowspan="2" width="30%"> <img src="{{'assets/images/balapfp.jpg' | relative_url}}"> </td></tr>
<td width = "70%">
Balamurugan Balakreshnan help customers by providing thought leadership in their Digital Transformation using Cloud, AI, ML, IoT, Block Chain.
<br>
You can learn more about what Bala is working on <a href="https://github.com/balakreshnan" target="_blank">here</a>.
</td>
</table></html>

<!-- <div id="disqus_thread"></div>
<script>

/**
*  RECOMMENDED CONFIGURATION VARIABLES: EDIT AND UNCOMMENT THE SECTION BELOW TO INSERT DYNAMIC VALUES FROM YOUR PLATFORM OR CMS.
*  LEARN WHY DEFINING THESE VARIABLES IS IMPORTANT: https://disqus.com/admin/universalcode/#configuration-variables*/
/*
var disqus_config = function () {
this.page.url = https://azure.github.io/Vision-AI-DevKit-Pages/docs/community_project02#;  // Replace PAGE_URL with your page's canonical URL variable
this.page.identifier = community_project_02; // Replace PAGE_IDENTIFIER with your page's unique identifier variable
};
*/
(function() { // DON'T EDIT BELOW THIS LINE
var d = document, s = d.createElement('script');
s.src = 'https://https-azure-github-io-vision-ai-devkit-pages.disqus.com/embed.js';
s.setAttribute('data-timestamp', +new Date());
(d.head || d.body).appendChild(s);
})();
</script>
<noscript>Please enable JavaScript to view the <a href="https://disqus.com/?ref_noscript">comments powered by Disqus.</a></noscript> -->
                            


