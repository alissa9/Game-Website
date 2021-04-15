<?php
include('common.php');
outputHeaderNav();
?>


<main>
    <div class="signupbutton">
        <h1>Create A New Account</h1>
        <p>Please fill in the form to create an account!</p>
        <label for="fname">Name:</label><br>
        <input type="text" id="Sname" name="Sname" placeholder="Enter Name"><br>
        <label for="fname">Email:</label><br>
        <input type="text" id="Semail" name="Semail" placeholder="Enter Email"><br>
        <label for="fpass">password:</label><br>
        <input type="text" id="Spass" name="Spass" placeholder="Enter Password"><br><br>
        <label for="fnumber">Phone Number:</label><br>
        <input type="text" id="Snumber" name="Snumber" placeholder="Enter Number"><br>
        <button id="thesignupbutton" onclick="Signup()">Sign Up</button>
    </div>
</main>

<?php
outputFooter();
?>