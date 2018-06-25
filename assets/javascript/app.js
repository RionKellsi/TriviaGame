// Create Game of Thrones Questions in Array's with the correct answer pulling from the Array
var gameQuestions = [{
    question: "Ser Jaime Lannister is often referred to as....",
    answerList: ["Prince", "KingSlayer", "KnightSlayer", "Lord Lannister"],
    answer: 1
},{
    question: "What is the name of the sword gifted to Arya Stark by her half brother, Jon Snow?",
    answerList: ["Ice","Oathkeeper","Needle","Widowswail"],
    answer: 2
},{
    question: "Where is the seat of House Stark?",
    answerList: ["Highgarden","Casterly Rock","Kings Landing", "Winterfell"],
    answer: 3
},{
    question: "How Did Viserys Targaryen die?",
    answerList: ["Stabbed in the heart", "Beheading", "With a melted golden crown", "Burned alive"],
    answer:2
},{
    question: "Who hosted the Red Wedding?",
    answerList: ["Cersei Lannister","Walder Frey","Rhaegar Targaryen", "Eddard Stark"],
    answer: 1
},{
    question: "How does King Joffery Die?",
    answerList: ["In battle", "Shot with a crossbow", "Poisoned at his wedding feast", "Strangled in his sleep"],
    answer: 2
}, { 
    question: "What is the battle between Jon Snow and Ramsay Bolton known as?",
    answerList: ["Battle of Winterfell", "Battle of The Bastards", "Battle of The Throne", "Battle of The Land"],
    answer: 1
},{
    question: "Who was the first character to kill a Whitewalker in thousands of years?",
    answerList: ["Jon Snow", "Jaime Lannister", "Brandon Stark", "Samwell Tarly"],
    answer: 3
},{
    question: "What is the name of the ancestral seat of House Targaryen?",
    answerList: ["Dragonstone", "Dragoncastle", "Dragonpalace,", "Dragonmouth"],
    answer: 0
},{
    question: "What is the leader of the White Walkers known as?",
    answerList: ["The Ice King", "The Night King", "The White King", "King of the White Walkers"],
    answer: 1
},{
    question: "What are the names of Daenerys Targaryen's three dragons?",
    answerList: ["Dragon,Little Finger,Tyrell","Drogon,Rhaegal,Viserion","Khal,Grey Worm,Snow","Drogo,Rhaegar,Viserys"],
    answer: 1
},{
    question: "What are the only ways to kill a White Walker?",
    answerList: ["Dragonglass & Valyrian Steel", "Dragonglass & Dismemberment", "Fire & Dismememberment", "Dragonglass & Fire"],
    answer: 0
},{
    question: "What is the name of Jon Snow's direwolf?",
    answerList: ["Grey Wind", "Summer", "Shaggydog", "Ghost"],
    answer: 3
},{
    question: "What is Arya's punishment for stealing from the Many-Face God?",
    answerList: ["Death", "Blindness", "Memory Loss","Starvation"],
    answer: 1
},{
    question: "The Night King was created using a dagger made of:",
    answerList: ["Valyrian Steel", "Blue Ice", "Steel", "Dragonglass"],
    answer: 3
},{
    question: "Dead creatures revived by White Walkers are known as:",
    answerList: ["Walkers", "Zombies", "Wights", "White Walkers"],
    answer: 2
},{
    question: "When expecting her child, Daenerys Targaryen must do what as apart of a special Dothraki ceremony?",
    answerList: ["Eat dragon eggs","Eat the raw heart of a stallion","Drink the blood of her husband","Sacrifice her horse"],
    answer: 1
},{
    question: "Who is the father of Cersei Lannister's children?",
    answerList: ["Robert Baratheon","Eddard Stark","Jaime Lannister", "Petyr Baelish"],
    answer: 2
},{
    question: "What distinct feature does Brienne of Tarth recall about the entity that killed Renly Baratheon?",
    answerList: ["It had Stannis Baratheon's face", "It had Melisandre's face","He was killed with Valyrian Steel","The name of the poison"],
    answer: 0
},{
    question: "Who is Jon Snow's mother?",
    answerList: ["Catelyn Stark","A prostitute", "Lyanna Stark", "Cersei Lannister"],
    answer: 2
},{
    question: "Which Stark sibling has a hit list?",
    answerList: ["Sansa Stark", "Arya Stark","Rob Stark","Brandon Stark"],
    answer: 1

}];

console.log(gameQuestions);


//theme song play & pause
var audioElement = document.createElement("audio");
audioElement.setAttribute("src", "https://soundcloud.com/game-of-thrones-songs/game-of-thrones-game-of-thrones");

$("playBtn").on("click", function(){
    audioElement.play();
});
$("#pauseBtn").on("click", function(){
    audioElement.pause();
});

//Create game variables
var currentQuestion;
var correctAnswer;
var userSelect;
var wrongAnswer;
var answered;
var unanswered;
var seconds;
var time;

//create game messages
var messages = {
     correct: "That's what I do, I drink and I know things",
     wrong: "The Lannisters send their regards",
     timeEnd: "Anyone can be killed",
     endGame: "Winter is coming"
};


// Create buttons for Game
//Start Button
$("#startBtn").on("click", function(){
    $(this).hide();
    newGame();
});
//Start Over Button
$("#startOverBtn").on("click", function(){
    $(this).hide();
    newGame();
});

// create a function to start a new game
function newGame(){
    $("#endMessage").empty();
    $("#correctAnswers").empty();
    $("#incorrectAnswers").empty();
    $("#unanswered").empty();
    currentQuestion = 0;
    correctAnswer = 0;
    wrongAnswer = 0;
    unanswered = 0;
    newQuestion();
}

//create a function for a new question
function newQuestion(){
    $("#message").empty();
    $("#correctedAnswer").empty();
    $("#gif").empty();
    answered = true;

    //set up questions & answerList
    //questions
    $("#currentQuestion").html("Question #" + (currentQuestion+1)+'/'+ gameQuestions.length);
    $(".question").html("<h2>" + gameQuestions[currentQuestion].question + "<h2>");
    //create a forloop that lists choices
    for(var i =0; i< 4; i++){
        var choices = $("<div>");
        choices.text(gameQuestions[currentQuestion].answerList[i]);
        choices.attr({"data-index": i});
        choices.addClass("userChoice");
        //put choices in the answerList div
        $(".answerList").append(choices);
    }

    countdown();
    //pause time when an answer is selected
    $(".userChoice").on("click", function(){
        userSelect = $(this).data("index");
        clearInterval(time);
        answersPage();
    });
}

// Create countdown for each question.
// create a countdown function of 20 seconds
function countdown(){
    seconds = 20;
    $("#timeLeft").html("<h3>Time Remaining: " + seconds + "</h3>");
    answered = true;
    time = setInterval(showCountdown, 1000);
}

function showCountdown(){
    seconds--;
    $("#timeLeft").html("<h3>Time Remaining:" + " " + seconds + "</h3>");
    if(seconds < 1){
        clearInterval(time);
        answered = false;
        answersPage();
    }
}

// create a variable for the gif div 
var gifPics = $("#gif");

//insert API url as a variable
var queryURL = "https://api.giphy.com/v1/gifs/search?api_key=UMZFEkf6P6W54LNRtti6a6SHpWHuoFST&q=Game Of Thrones&limit=25&offset=0&rating=R&lang=en";
var correctGif = "https://media0.giphy.com/media/11clOWGCHzWG7C/200.gif"

$.ajax({
    url: correctGif,
    method: "GET"
}).then(function(response) {
    $("#gif").html(response)
})



function answersPage(){
    $("#currentQuestion").empty();
    //clear the question page
    $(".userChoice").empty();
    $(".question").empty();

    //display correct answer 
    //create a variable to show the correct answer
    var correctAnswerText = gameQuestions[currentQuestion].answerList[gameQuestions[currentQuestion].answer];
    //create a variable to display answer
    var correctAnswerIndex = gameQuestions[currentQuestion].answer;

    //correct - incorrect - unanswered 
    //use if,else if, else statement 
    // Tally Correct and Incorrect answers - but hide until end of game (++)
    if((userSelect == correctAnswerIndex) && (answered == true)){
        correctAnswer++; 
        $("#message").html(messages.correct);
    } else if ((userSelect != correctAnswerIndex) && (answered == true)){
        wrongAnswer++;
        $("#message").html(messages.wrong);
        $("#correctedAnswer").html("The correct answer was: " + correctAnswerText);
    } else {
        unanswered++;
        $("#message").html(messages.timeEnd);
        $("#correctedAnswer").html("The correct answer was: " + correctAnswerText);
        answered = true;
    }
    // create game timers
    if(currentQuestion == (gameQuestions.length-1)){
        setTimeout(score, 3000)
    } else {
        currentQuestion++;
        setTimeout(newQuestion, 5000);
    }
}

function score(){
    $("#timeLeft").empty();
    $("#message").empty();
    $("#correctedAnswer").empty();
    $("#gif").empty();

    $("#endMessage").html(messages.endGame);
    $("#correctAnswers").html("Correct Answers: " + correctAnswer);
    $("#incorrectAnswers").html("Incorrect Answers: " + wrongAnswer);
    $("#unanswered").html("Unanswered: " + unanswered);
 
    //create a button to reset the game with out refreshing the page
    $("#startOverBtn").addClass("reset");
    $("#startOverBtn").show();
    $("#startOverBtn").html("Try your luck again?");
}

 

 

