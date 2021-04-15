<?php
include('common.php');
outputHeaderNav();
?>


<main>
    <div id="finalscore"></div>
    <div class="GameCanvas">
        <div class="container">
            <div id="question-container" class="hide">
                <div id="question">When You Are Ready Click Start!</div>
                <div id="answerbuttons" class="btn-grid">
                    <button class="btn">Answer 1</button>
                    <button class="btn">Answer 2</button>
                    <button class="btn">Answer 3</button>
                    <button class="btn">Answer 4</button>
                </div>
            </div>
            <div class="controls">
                <button id="startbtn" class="startbtn btn">Start</button>
                <button id="nextbtn" class="nextbtn btn hide">Next</button>
            </div>
        </div>
    </div>
</main>


<?php
outputFooter();
?>