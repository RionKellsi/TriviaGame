// Create an array of objects (questions) then another array of answers provide correct answer pulling from array index
var gameQuestions = [{
    question: "Ser Jaime Lannister is often referred to as....",
    answerList: ["Prince", "KingSlayer", "KnightSlayer", "Lord Lannister"],
    answer: 1,
    gif: "assets/images/question1.gif"
}, {
    question: "What is the name of the sword gifted to Arya Stark by her half brother, Jon Snow?",
    answerList: ["Ice", "Oathkeeper", "Needle", "Widowswail"],
    answer: 2,
    gif: "assets/images/question2.gif"
}, {
    question: "Where is the seat of House Stark?",
    answerList: ["Highgarden", "Casterly Rock", "Kings Landing", "Winterfell"],
    answer: 3,
    gif: "assets/images/question3.gif"
}, {
    question: "How Did Viserys Targaryen die?",
    answerList: ["Stabbed in the heart", "Beheading", "With a melted golden crown", "Burned alive"],
    answer: 2,
    gif: "assets/images/question4.gif"
}, {
    question: "Who hosted the Red Wedding?",
    answerList: ["Cersei Lannister", "Walder Frey", "Rhaegar Targaryen", "Eddard Stark"],
    answer: 1,
    gif: "assets/images/question5.gif"
},{
    question: "How does King Joffery Die?",
    answerList: ["In battle", "Shot with a crossbow", "Poisoned at his wedding feast", "Strangled in his sleep"],
    answer: 2,
    gif: "assets/images/question6.gif"
}, {
    question: "What is the battle between Jon Snow and Ramsay Bolton known as?",
    answerList: ["Battle of Winterfell", "Battle of The Bastards", "Battle of The Throne", "Battle of The Land"],
    answer: 1,
    gif: "assets/images/question7.gif"
}, {
    question: "Who was the first character to kill a Whitewalker in thousands of years?",
    answerList: ["Jon Snow", "Jaime Lannister", "Brandon Stark", "Samwell Tarly"],
    answer: 3,
    gif: "assets/images/question8.gif"
}, {
    question: "What is the name of the ancestral seat of House Targaryen?",
    answerList: ["Dragonstone", "Dragoncastle", "Dragonpalace,", "Dragonmouth"],
    answer: 0,
    gif: "assets/images/question9.gif"
}, {
    question: "What is the leader of the White Walkers known as?",
    answerList: ["The Ice King", "The Night King", "The White King", "King of the White Walkers"],
    answer: 1,
    gif: "assets/images/question10.gif"
}, {
    question: "What are the names of Daenerys Targaryen's three dragons?",
    answerList: ["Dragon,Little Finger,Tyrell", "Drogon,Rhaegal,Viserion", "Khal,Grey Worm,Snow", "Drogo,Rhaegar,Viserys"],
    answer: 1,
    gif: "assets/images/question11.gif"
}, {
    question: "What are the only ways to kill a White Walker?",
    answerList: ["Dragonglass & Valyrian Steel", "Dragonglass & Dismemberment", "Fire & Dismememberment", "Dragonglass & Fire"],
    answer: 0,
    gif: "assets/images/question12.gif"
}, {
    question: "What is the name of Jon Snow's direwolf?",
    answerList: ["Grey Wind", "Summer", "Shaggydog", "Ghost"],
    answer: 3,
    gif: "assets/images/question13.gif"
}, {
    question: "What is Arya's punishment for stealing from the Many-Face God?",
    answerList: ["Death", "Blindness", "Memory Loss", "Starvation"],
    answer: 1,
    gif: "assets/images/question14.gif"
}, {
    question: "The Night King was created using a dagger made of:",
    answerList: ["Valyrian Steel", "Blue Ice", "Steel", "Dragonglass"],
    answer: 3,
    gif: "assets/images/question15.gif"
}, {
    question: "Dead creatures revived by White Walkers are known as:",
    answerList: ["Walkers", "Zombies", "Wights", "White Walkers"],
    answer: 2,
    gif: "assets/images/question16.gif"
}, {
    question: "When expecting her child, Daenerys Targaryen must do what as apart of a special Dothraki ceremony?",
    answerList: ["Eat dragon eggs", "Eat the raw heart of a stallion", "Drink the blood of her husband", "Sacrifice her horse"],
    answer: 1,
    gif: "assets/images/question17.gif"
}, {
    question: "Who is the father of Cersei Lannister's children?",
    answerList: ["Robert Baratheon", "Eddard Stark", "Jaime Lannister", "Petyr Baelish"],
    answer: 2,
    gif: "assets/images/question18.gif"
}, {
    question: "What distinct feature does Brienne of Tarth recall about the entity that killed Renly Baratheon?",
    answerList: ["It had Stannis Baratheon's face", "It had Melisandre's face", "He was killed with Valyrian Steel", "The name of the poison"],
    answer: 0,
    gif: "assets/images/question19.gif"
}, {
    question: "Who is Jon Snow's mother?",
    answerList: ["Catelyn Stark", "A prostitute", "Lyanna Stark", "Cersei Lannister"],
    answer: 2,
    gif: "assets/images/question20.gif"
}, {
    question: "Which Stark sibling has a hit list?",
    answerList: ["Sansa Stark", "Arya Stark", "Rob Stark", "Brandon Stark"],
    answer: 1,
    gif: "assets/images/question21.gif"
}];

// console.log(gameQuestions);

// create a function to hide the gis div
$(function () {
    $("#gif").hide();
    $("#endGame").hide();
});

// Create buttons for Game
//Start Button
$("#startBtn").on("click", function () {
    $(this).hide();
    $("#gif").hide();
    $("#startImg").hide();
    newGame();
});
//Start Over Button
$("#startOverBtn").on("click", function () {
    $(this).hide();
    $("#gif").hide();
    $("#startImg").hide();
    newGame();
});

//create an object containing game messages
var messages = {
    correct: "That's what I do, I drink and I know things",
    wrong: "The Lannisters send their regards",
    timeEnd: "Anyone can be killed",
    endGame: "Winter is here!"
};

//Create game variables to be used in functions 
var currentQuestion;
var correctAnswer;
var userSelect;
var wrongAnswer;
var answered;
var unanswered;
var seconds;
var time;


// first function -- create a function to start a new game
function newGame() {
    //empty divs
    $("#endMessage").empty();
    $("#correctAnswers").empty();
    $("#incorrectAnswers").empty();
    $("#unanswered").empty();
    $("#gif").empty();
    //game variables that are to be counted
    currentQuestion = 0;
    correctAnswer = 0;
    wrongAnswer = 0;
    unanswered = 0;
    newQuestion();
}

//second function -- create a function for a new question
function newQuestion() {
    // make all answers divs empty
    $("#message").empty();
    $("#correctedAnswer").empty();
    $("#gif").empty();
    answered = true;

    //set up questions & answerList
    //current questions #
    $("#currentQuestion").html("Question #" + (currentQuestion + 1) + '/' + gameQuestions.length);
    //question
    $(".question").html("<h2>" + gameQuestions[currentQuestion].question + "<h2>");

    //create a forloop that lists choices and selects user choice
    for (var i = 0; i < 4; i++) {
        //create a new div for answer choices using the answerList
        var choices = $("<div>");
        choices.text(gameQuestions[currentQuestion].answerList[i]);
        choices.attr({ "data-index": i });
        choices.addClass("userChoice");
        //put choices in the answerList div
        $(".answerList").append(choices);
    }

    countdown();

    //pause time when an answer is selected
    $(".userChoice").on("click", function () {
        userSelect = $(this).data("index");
        clearInterval(time);
        answersPage();
    });
}

// Create countdown for each question.
// create a countdown function of 15 seconds
function countdown() {
    seconds = 15;
    $("#timeLeft").html("<h3>Time Remaining: " + seconds + "</h3>");
    answered = true;
    time = setInterval(showCountdown, 1000);
}

function showCountdown() {
    seconds--;
    $("#timeLeft").html("<h3>Time Remaining:" + " " + seconds + "</h3>");
    if (seconds < 1) {
        clearInterval(time);
        answered = false;
        answersPage();
    }
}



function answersPage() {
    $("#currentQuestion").empty();
    $(".userChoice").empty();
    $(".question").empty();

    //display correct answer 
    //create a variable to show the correct answer
    var correctAnswerText = gameQuestions[currentQuestion].answerList[gameQuestions[currentQuestion].answer];
    //create a variable to display answer
    var correctAnswerIndex = gameQuestions[currentQuestion].answer;

    var gameGifs = gameQuestions[currentQuestion].gif;

    //here i tried to add the corrisponding GIF to the answer
    // var answerGifs = gameQuestions[currentQuestion].gif;
    // $('#gif').html('<img src = "assets/images/' + gifs[currentQuestion] + '.gif');

    //correct - incorrect - unanswered 
    //use if,else if, else statement 
    //count Correct and Incorrect answers - but hide until end of game (++)
    if ((userSelect == correctAnswerIndex) && (answered == true)) {
        correctAnswer++;
        $("#message").html(messages.correct);
        $("#gif").html("<img src=" + gameGifs + "</img>");
        // $("#gif").html(answerGifs);
    } else if ((userSelect != correctAnswerIndex) && (answered == true)) {
        wrongAnswer++;
        $("#message").html(messages.wrong);
        $("#correctedAnswer").html("The correct answer is: " + correctAnswerText);
        $("#gif").html("<img src=" + gameGifs + "</img>");
    } else {
        unanswered++;
        $("#message").html(messages.timeEnd);
        $("#correctedAnswer").html("The correct answer is: " + correctAnswerText);
        $("#gif").html("<img src=" + gameGifs + "</img>");
        answered = true;
    }
    // timer run through the game without user input
    if (currentQuestion == (gameQuestions.length - 1)) {
        setTimeout(score, 3000)
    } else {
        currentQuestion++;
        setTimeout(newQuestion, 3000);
    }
}

function score() {
    $("#timeLeft").empty();
    $("#message").empty();
    $("#correctedAnswer").empty();
    $("#endGame").show();


    $("#endMessage").html(messages.endGame);
    $("#correctAnswers").html("Correct Answers: " + correctAnswer);
    $("#incorrectAnswers").html("Incorrect Answers: " + wrongAnswer);
    $("#unanswered").html("Unanswered: " + unanswered);

    //create a button to reset the game with out refreshing the page
    $("#startOverBtn").addClass("reset");
    $("#startOverBtn").show();
    $("#startOverBtn").html("Try your luck again?");

    $("#startOverBtn").on("click", function(){
        $("#endGame").hide();
    })

};