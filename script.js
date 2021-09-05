document.addEventListener("keydown", (e) => {
    if(e.code === "Space")
    {
        dinosaur = document.getElementById("dinosaur");
        dinosaur.classList.add("animate");
        setTimeout(() =>{
            dinosaur.classList.remove("animate");
        }, 500);
    }

});

//Initializing score to zero
usr_score = 0;
passed_through = true;

setInterval(() => {
    dinosaur = document.getElementById("dinosaur");
    game_over = document.getElementById("gameover");
    hurdle = document.getElementById("hurdle");

    dino_xaxis = parseInt(window.getComputedStyle(dinosaur, null).getPropertyValue("left"));
    dino_yaxis = parseInt(window.getComputedStyle(dinosaur, null).getPropertyValue("top"));
    hurdle_xaxis = parseInt(window.getComputedStyle(hurdle, null).getPropertyValue("left"));
    hurdle_yaxis = parseInt(window.getComputedStyle(hurdle, null).getPropertyValue("top"));

    // Taking absolute distance values
    abs_valuex = Math.abs(dino_xaxis - hurdle_xaxis);
    abs_valuey = Math.abs(dino_yaxis - hurdle_yaxis);
    console.log(abs_valuex, abs_valuey);
    if(abs_valuex < 100 && abs_valuey <= 85)
    {
        game_over.style.visibility = 'visible';
        hurdle.classList.remove('move');
        alert("Game Over!!");
    }
    else if(abs_valuex < 132 && passed_through)
    {
            usr_score++;
            add_score(usr_score);
            passed_through = false;
            setTimeout(() => {
                passed_through = true;
            }, 1000);

            // Manipulating Animation duration to make it fast
            setTimeout(() => {
                animation_duration = parseFloat(window.getComputedStyle(hurdle, null).getPropertyValue('animation-duration'));
                new_duration = animation_duration - 2;
                hurdle.style.animationDuration = new_duration + 's';
            }, 500);
        }

    }, 10);

// updating score
function add_score(usr_score)
{
    document.getElementById(score);
    score.innerHTML = "Score: " + usr_score;
}