<?php
include('common.php');
outputHeaderNav();
?>

<!-- this main body contains the contacts us content -->
<main>
    <div class="Contactus">
        <h1>Follow My Social Media and Get In Touch </h1>
        <form action="index.php" target="_blank" method="get">
            <label for="fname">Full Name:</label><br>
            <input type="text" id="fname" name="fname" placeholder="type here.."><br>
            <label for="lname">Email:</label><br>
            <input type="text" id="lname" name="lname"><br><br>
            <div class="Message">
                <label for="lname">Message:</label><br>
                <input type="text" id="lname" name="lname"><br><br> </div>
            <button class="ContactButton">Submit</button>
        </form>
    </div>
    <div class="Rights">
        <h2>This Wesbite is Developed </h2>
        <h2>By Mohamad Alissa;</h2>
    </div>
</main>

<?php
outputFooter();
?>