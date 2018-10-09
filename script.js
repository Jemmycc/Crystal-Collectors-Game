

$(document).ready(function () {
    $("audio#audio-welcome")[0].play()

    var targetNumber;
    var wins = 0;
    var losses = 0;
    var totalScore;
    var minNumber = 10;
    var maxNumber = 100;
    var but01;
    var but02;
    var but03;
    var but04;


    reset();

    function reset() {
        totalScore = 0;
        $("#total-score").text("");

        targetNumber = Math.floor(Math.random() * (maxNumber - minNumber) + minNumber);
        $("#target-number").html(targetNumber)

        but01 = Math.floor(Math.random() * (targetNumber / 4) + 1);
        but02 = Math.floor(Math.random() * (targetNumber / 4) + 1);
        but03 = Math.floor(Math.random() * (targetNumber / 4) + 1);
        but04 = Math.floor(Math.random() * (targetNumber / 4) + 1);
    }

    $("#button-1").on("click", function () {
        updateScore(but01)
        $("audio#sound-one")[0].play()
    });

    $("#button-2").on("click", function () {
        updateScore(but02)
        $("audio#sound-two")[0].play()
    });

    $("#button-3").on("click", function () {
        updateScore(but03)
        $("audio#sound-three")[0].play()
    });

    $("#button-4").on("click", function () {
        updateScore(but04)
        $("audio#sound-four")[0].play()
    });

    // $("#button-4").on("click", function () {
    //     updateScore += $(but01);
    //     $("#total-score").html(totalScore);

    // })

    function updateScore(val) {
        totalScore += val;
        $("#total-score").html(totalScore);

        if (totalScore == targetNumber) {
            wins++;
            $("#wins").html(wins);
            $("audio#sound-five")[0].play()
            reset();
        }

        else if (totalScore > targetNumber) {
            alert("You lose!");
            losses++;
            $("#losses").html(losses);
            reset();
        }
    }
});

