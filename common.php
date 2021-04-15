<?php

//this header contain the logo , the navigation bar and the sign in/up button
function outputHeaderNav()
{

    echo '<!DOCTYPE html>
<html lang="en">

<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>index</title>
<link rel="stylesheet" href="CSS/style.css">
<link rel="stylesheet" href="CSS/Game.css">
<link rel="stylesheet" href="CSS/signup.css">
<link rel="stylesheet" href="CSS/index.css">
<link rel="stylesheet" href="CSS/leaderboard.css">
<link rel="stylesheet" href="CSS/contact.css">
<script defer src="script.js"></script>




</head>

<body>
    <header>
        <div class="logo"></div>
        <nav>
          <a href="index.php">HOME</a>
          <a href="Game.php">GAME</a>
          <a href="Leaderboard.php">LEADERBOARD</a>
          <a href="contact.php">CONTACT US</a>
          <div class="animation start-home"></div>
          </nav>

<!-- this class has got the login/signup buttons on the main page  -->

          <div class="user">
          <div class="signup"><a href="Signup.php">Sign Up</a></div>
          <div class="login"><a href="login.php">Login</a></div>
          </div>
      </header>';
}

// this funtion is to output the footer which it includes the social media links
function outputFooter()
{

    echo '<footer> 
<div class="Social">
<div class="facebook"><a href="https://www.facebook.com/profile.php?id=100006439277567" ><img src="images/Facebook.png" alt=""></a></div>
<div class="Snapchat"><a href="http://www.snapchat.com/add/realekki" ><img src="images/Snapchat.png" alt=""></a></div>
<div class="instagram"><a href="https://www.instagram.com/itz3isa/" ><img src="images/Instagram.png" alt=""></a></div>
<div class="twitter"><a href="https://twitter.com/itz3isa" ><img src="images/Twitter.png" alt=""></a></div>
<div class="Gmail"><a href="https://mail.google.com/mail/?view=cm&source=mailto&to=[m99alissa@gmail.com]" ><img src="images/Gmail.png" alt=""></a></div>
</div>

</footer>



</body> 
<script src="Registration.js"></script>
<script src="Script.js"></script>

</html>';
}