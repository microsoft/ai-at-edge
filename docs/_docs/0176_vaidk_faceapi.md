---
title: "Vision AI Dev Kit utilizing Azure Cognitive Services Face API for Face detection "
permalink: /docs/face_api/
excerpt: "Face API integration"
variable:
  - platform: windows
    name: Windows
  - platform: macos
    name: macOS
comments: 
  provider: "disqus"
  disqus: 
    shortname: https-azure-github-io-vision-ai-devkit-pages-docs-community-pr.disqus.com
last_modified_at: 2019-09-11
---
[<-- Back to project listing]({{ '/docs/hw_examples/' | relative_url }})

<html><br><br>
<table><tr><td><b>Summary</b></td></tr>
<tr><td>
This is a quick proof of concept integrating the power of Azure Cognitive Services in the cloud with initial real time object detection running on the intelligent edge device.<br>
This project builds on the basic features already installed in the Vision AI DevKit getting started Module. Using the default ML model for object detection, this project takes a screenshot when one or more people are detected in frame. It then sends the screenshot to the configured Azure Cognitive Services Face API using the provided Face API URL endpoint and subscription key for face detection results. 
<br> </td></tr>
</table></html>

<html><table>
<tr><td>
<b> Implementation </b> </td></tr>
<tr><td>
More details about the Face API can be found <a href=" https://azure.microsoft.com/en-us/services/cognitive-services/face/" target="_blank"> here</a>. <br>
After detecting one or more people in frame a screenshot is taken and the image is sent via a https post request to url endpoint “detect”. Once the Face API receives the image it will return the following inference results: <br>

“Detect one or more human faces in an image and get back face rectangles for where in the image the faces are, along with face attributes which contain machine learning-based predictions of facial features. The face attribute features available are: Age, Emotion, Gender, Pose, Smile, and Facial Hair along with 27 landmarks for each face in the image.” <br>

The results are saved in a locally available json file and a subset are annotated onto the screenshot which is then saved locally. The results can be viewed using the following links: <br>
http://CameraIP:1080/media/Azure_Face_Api_Result.json <br>
http://CameraIP:1080/media/Azure_Face_Api_Result.jpg.

</td></tr>
</table></html>

<html> <table>
<tr>
<td ><img src="{{'assets/images/faceapi.png' | relative_url}}"></td>
</tr>
</table></html>


<html><table>
<tr>
    <td width = "50%"> <b> Software and Services used</b> </td>
    <td width = "50%"> <b> Hardware </b> </td> 
    <td rowspan="24"></td> </tr>
 <tr>
    <td> <ul type="disc" >
            <li>Azure Cognitive Services Face API</li>
            <li>Python</li>
            <li>Visual Studio Code</li>
            <li>Azure IoT Edge</li>
            <li>Android Debug Bridge (ADB) tools</li>
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
Find all relevant information, including code, for full implementation of this product <a href="https://aka.ms/faceapi-grob" target="_blank">here</a>. <br>
Users are always encouraged to innovate and continue to improve the functionality of current projects. 
</td></tr>
<tr><td>
<b> Future Improvements and Project Suggestions </b> </td></tr>
<tr><td>
Like mentioned above this is a quick proof of concept integrating the power of Azure Cognitive Services in the cloud with initial inference running on the intelligent edge device. The Azure face API has many more features in addition to “detect” documented <a href="https://westus.dev.cognitive.microsoft.com/docs/services/563879b61984550e40cbbe8d/operations/563879b61984550f30395236 " target="_blank">here</a>. <br>
Using the above API documentation extending the features of this project should be straight forward. One example would be to verify the identity of the person in frame.
</td></tr>
</table></html>

<html><table>
<tr><td width="30%"><b> About the Creator </b> </td></tr>
<tr><td rowspan="2" width="30%"> <img src="{{'assets/images/grob.jpg' | relative_url}}"> </td></tr>
<tr><td width = "70%">
David Grob recently completed an Electrical Engineering Bachelor’s Specializing in Computer Engineering and is currently enrolled in an Electrical and Computer Engineering Master’s program at Georgia Tech. He has completed undergrad research at Seattle University spanning Computer Vision, data analytics automation, Machine Learning, and co-authored two well-received Conference Papers presented at IEEE International Conference on Data Mining (ICDM) and International Conference on Signal Processing Systems (ICPS)—November 2018.
<br>
You can find his publications for <a href="https://doi.org/10.1109/ICDMW.2018.00134" target="_blank"> ICDM </a> and <a href="https://doi.org/10.1117/12.2521856" target="_blank"> ICPS </a> here.
</td></tr>
</table></html>


<div id="disqus_thread"></div>
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



