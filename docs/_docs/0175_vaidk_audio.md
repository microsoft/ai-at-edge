---
title: "Enable audio and train an audio ML model"
permalink: /docs/vaidk_audio/
excerpt: "Enable audio and train an audio ML model"
variable:
  - platform: windows
    name: Windows
  - platform: macos
    name: macOS
comments: 
  provider: "disqus"
  disqus: 
    shortname: https-azure-github-io-vision-ai-devkit-pages-docs-community-pr.disqus.com
last_modified_at: 2019-09-4
---
[<-- Back to project listing]({{ '/docs/hw_examples/' | relative_url }})
<html>
<br><br>
<table><tr><td><b>Summary</b></td></tr>
<tr><td>
This project uniquely utilizes the Vision AI Developer Kit to aid in training a Neural Network based on features extracted from audio files. In this sample use case, the water level of a fountain can be determined by using audio classification through a machine learning model based on the sound produced by water splashing into a larger volume of different depths. This demonstrates both how audio can be used in some cases as a cheaper alternative to vision with 360° field coverage that is still possible using the DevKit and how to train a model using the Azure Machine Learning Service.  <br> </td></tr>
</table></html>
<!-- 
<video width="640" height="480" controls>
  <source src="videos/vaidk-audio-github walkthrough.mp4" type="video/mp4">
Your browser does not support this video tag.
</video>

<!-- <video width="640" height="480" controls>
  <source src="videos/videoaisolutionwalkthrough.mp4" type="video/mp4">
Your browser does not support this video tag.
</video> --> 

<html><table>
<tr><td>
<b> Implementation </b> </td></tr>
<tr><td>
This project following a 5-step process to acquire, label, train, build and push to the Vision AI Devkit, as shown below.
</td></tr>
<tr>
<td><img src="{{'assets/images/audiosteps.png' | relative_url}}"></td>
</tr>
</table></html>


<html><table>
<tr>
    <td width = "50%"> <b> Software and Services used</b> </td>
    <td width = "50%"> <b> Hardware </b> </td> 
    <td rowspan="24"></td> </tr>
 <tr>
    <td> <ul type="disc" >
            <li>Azure IoT Edge</li>
            <li>Docker Desktop</li>
            <li>Azure Machine Learning</li>
            <li>Visual Studio Code</li>
            <li>Python</li>
         </ul> 
   </td> 
    <td> <ul type="disc">
            <li>Vision AI DevKit</li>
         </ul>
   </td>
</tr> 
</table></html>  

<html><table>
<tr><td><b> Repository </b></td></tr>
<tr><td>
Find all relevant information for full implementation of this product <a href="https://aka.ms/waterlevel-saye/" target="_blank">here</a>. <br>
Users are always encouraged to innovate and continue to improve the functionality of current projects. 
</td></tr>
<tr><td>
<b> Future Improvements and Project Suggestions </b> </td></tr>
<tr><td>
This sample demonstrates one very linear way to train a model in a very controlled environment with just a few thousand audio files.  Future improvements might include: <ol>
<li>Modifying the AudioCapture module to read and write TWINs</li>
<li>Modifying the AudioInferece module to include updates for audio modules</li>
<li>Modifying the Label script to use a small model to later label non linear sample files</li>
<li>Modify the AudioCapture module to collect files and incorporate the pipeline capability of the Azure Machine Learning Service</li>
</ol>

 <br>
  Feel free to fork the project and contribute back any improvements or suggestions. Contributors and maintainers are encouraged.
</td></tr>
</table></html>

<html><table>
<tr><td width="30%"><b> About the Creator </b> </td></tr>
<tr><td rowspan="2" width="30%"> <img src="{{'assets/images/saye.png' | relative_url}}"> </td></tr>
<td width = "70%">
Kevin Saye is an IoT Architect and a student of AI.  From soldering resistors to writing code for MCUs to scaling out with MPP solutions, he is squarely focused on that thing he was meant to do in life, IoT.  He regularly publishes ‘how to’ articles, based on customer, partner and personal experiences and challenges – with the goal to share and enable peers in the community. <br>
He can be followed at: <a href="https://kevinsaye.wordpress.com/" target="_blank"> https://kevinsaye.wordpress.com/ </a>. <br>
<br>
You can also learn more about what Kevin is working on <a href="https://github.com/ksaye/" target="_blank">here</a>.
</td>
</table></html>

<!-- <div id="disqus_thread"></div>
<script>

/**
*  RECOMMENDED CONFIGURATION VARIABLES: EDIT AND UNCOMMENT THE SECTION BELOW TO INSERT DYNAMIC VALUES FROM YOUR PLATFORM OR CMS.
*  LEARN WHY DEFINING THESE VARIABLES IS IMPORTANT: https://disqus.com/admin/universalcode/#configuration-variables*/
/*
var disqus_config = function () {
this.page.url = https://azure.github.io/Vision-AI-DevKit-Pages/docs/community_project03#;  // Replace PAGE_URL with your page's canonical URL variable
this.page.identifier = community_project_03; // Replace PAGE_IDENTIFIER with your page's unique identifier variable
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


