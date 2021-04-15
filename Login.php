<?php
include('common.php');
outputHeaderNav();
?>

<!-- The class for the login page -->
<main>
    <div class="loginbutton">
        <h1>Welcome Back !!</h1>
        <form>
            <label for="fname">Email Adress:</label><br>
            <input type="text" id="Lemail" name="Lname" placeholder="Enter email"><br>
            <label for="lname">Password:</label><br>
            <input type="text" id="Lpass" name="Lpass" placeholder="Enter password"><br><br>
        </form>
        <button id="theloginbutton">Login</button>
    </div>
</main>


<?php
outputFooter();
?>