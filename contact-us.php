<!DOCTYPE html><html><head><meta charset="windows-1252">
 <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0">
 
 <title>Contact Us</title>
 <link rel="stylesheet" type="text/css" href="css/reset.css">
 <link rel="stylesheet" type="text/css" href="css/style.css">
 <script src="js/api.js"></script>
 <script type="text/javascript">
 var RecaptchaOptions = {
    theme : 'white'
 };
 $(document).ready(function() { 
	var options = { 
		target: '#alert',
	}; 
	$('#contactForm').ajaxForm(options); 
}); 
 </script>

<script type="text/javascript">
// <![CDATA[
jQuery(document).ready(function(){
  $('#contactform').submit(function(){          
    var action = $(this).attr('action');
    $.post(action, { 
      name: $('#name').val(),
      email: $('#email').val(),
      subject2: $('#subject2').val(),
      message: $('#message').val()
    },
      function(data){
        $('#contactform #submit').attr('disabled','');
        $('.response').remove();
        $('#contactform').before('<p class="response">'+data+'</p>');
        $('.response').slideDown();
        if(data=='Thank you very much. Our staff will contact you.') $('#contactform').slideUp();
      }
    ); 
    return false;
  });
});
// ]]>
</script>


 <script src="js/respond.src.js"></script>
 <!--[if lt IE 9]>
 <script src="http://html5shim.googlecode.com/svn/trunk/html5.js"></script>
<![endif]-->
 </head>
 <body>
<div style="width:100%; overflow:hidden;"><img src="images/multiple-line.png"></div>
<div align="center">
   <div id="frame"> 
    <!--main-1024-start--> 
    <!--header-start-->
    <div id="social-media" align="center"><img src="images/social-media-logo.png" border="0" usemap="#Map">
       <map name="Map">
        <area shape="rect" coords="4,5,35,30" href="https://www.facebook.com/AbsorbTechnologies.co" target="_blank">
        <area shape="rect" coords="47,4,85,30" href="https://twitter.com/absorbtechnolog" target="_blank">
      </map>
     </div>
    <div id="logo"><a href="index.html"><img src="images/logo.png" width="191" height="78"></a></div>
    <div id="small-line"></div>
    <div class="menu">
       <ul>
        <li><a href="website-design-and-development.html">Portfolio</a></li>
        <li><a href="about-us.html">About Us</a></li>
        <li><a href="our-team.html">Our Team</a></li>
        <li><a href="news.html">News</a></li>
        <li><a href="contact-us.php" style="background:none;">Contact Us</a></li>
      </ul>
     </div>
    <div class="clear"></div>
    <div id="big-line"></div>
    <div class="clear"></div>
    <div id="welcome"></div>
    <!--header-end-->
    <div class="clear"></div>
    <div class="container">
       <div class="partleft">
        <h2>Contact Us</h2>
        <!--<p class="normal-text"><strong>US Office:-</strong> </p>
        <p class="normal-text">6265 Jericho Turnpike Commack NY 11725, USA</p>
        <br>
        <p class="normal-text">Tel: +1-973-997-8787.</p>
        <br>
        <p class="normal-text"><strong>Pakistan Office:-</strong></p>-->
		<p class="normal-text"><strong>Head  Office:-</strong></p>
        <p class="normal-text">101 - Farid Tower. 19-Temple Road,
           Lahore, Pakistan.</p>
        <br>
        <p class="normal-text">Tel: +92-42-37353216<br>
           Fax: +92-42-37356061<br>
           URL: www.absorbtechnologies.com<br>
           Email: info@absorbtechnologies.com</p>
        <div class="message">
           <div id="alert"></div>
         </div>
      </div>
       <div class="partright">
        <h2>Query Form</h2>
        <form action="contact.php" method="post" id="contactForm">
           <table width="" border="0" cellpadding="0" cellspacing="5">
            <tbody><tr>
               <td colspan="2"><input type="text" onblur="if(this.value=='')this.value='Name:';" onfocus="if(this.value=='Name:')this.value='';" value="Name:" class="textbox" name="name" id="name"></td>
             </tr>
            <tr>
               <td>&nbsp;</td>
               <td height="10"></td>
             </tr>
            <tr>
               <td colspan="2"><input type="text" onblur="if(this.value=='')this.value='Email:';" onfocus="if(this.value=='Email:')this.value='';" value="Email:" class="textbox" name="email" id="email"></td>
             </tr>
            <tr>
               <td>&nbsp;</td>
               <td height="10">&nbsp;</td>
             </tr>
             <tr>
               <td colspan="2"><input type="text" onblur="if(this.value=='')this.value='Subject:';" onfocus="if(this.value=='Subject:')this.value='';" value="Subject:" class="textbox" name="subject2" id="subject2"></td>
             </tr>
            <tr>
               <td>&nbsp;</td>
               <td height="10"></td>
             </tr>
            <tr>
               <td colspan="2" height="120" valign="top"><textarea name="message" id="message" class="On-Site" onfocus="if(this.value=='message:')this.value='';" onblur="if(this.value=='')this.value='message:';" maxlength="100"></textarea></td>
             </tr>
             <tr>
               <td>&nbsp;</td>
               <td height="10"></td>
             </tr>
             <tr>
              <td colspan="2"><div class="g-recaptcha" data-sitekey="6LcD8A0TAAAAAOeBmMr7RH5DjA9USWZxSxEMgnhK"></div></td></tr>
              <tr>
               <td>&nbsp;</td>
               <td height="10"></td>
             </tr>
            <!--<tr>
               <td height="10" colspan="2"></td>
             </tr>-->
            <tr>
               <td>&nbsp;</td>
               <td height="50"><input type="submit" value="Send" class="btn"></td>
             </tr>
            <tr>
               <td>&nbsp;</td>
               <td><div class="message">
                   <div id="alert"></div>
                 </div></td>
             </tr>
          </tbody></table>
         </form>
      </div>
     </div>
    <div class="clear"></div>
    <!--main-1024-end--> 
  </div>
 </div>
<!--footer-start-->
<div class="footer">
   <div class="fFrame">
    <div class="spanLeft">
       <ul>
        <li><a href="index.html" class="active">Home</a></li>
        <li><a href="about-us.html">About Us</a></li>
        <li><a href="our-team.html">Our Team</a></li>
        <li><a href="news.html">News</a></li>
        <li><a href="contact-us.php">Contact Us</a></li>
        <div class="clear"></div>
      </ul>
       <p>© Copyright 2008-<script>document.write(new Date().getFullYear())</script> Absorb Technologies. All rights reserved.</p>
       <div class="clear"></div>
     </div>
    <div class="spanRight">
       <ul>
        <li><a href="" class="active" title="Home">Stay Connected</a></li>
        <div class="clear"></div>
      </ul>
       <div class="fb"><a href="https://www.facebook.com/AbsorbTechnologies.co" target="_blank"></a></div>
       <div class="tw"><a href="https://twitter.com/absorbtechnolog" target="_blank"></a></div>
       <div class="g"><a href="http://pk.linkedin.com/pub/absorb-technologies/71/680/30a/" target="_blank"></a></div>
       <div class="in"><a href="https://plus.google.com/103792561103743153651/" target="_blank"></a></div>
       <div class="clear"></div>
     </div>
    <div class="clear"></div>
  </div>
 </div>
<!--footer-end-->

</body></html>