// Select HTML elements in DOM
const quizArea = document.getElementById('quiz-area');
const scoreArea = document.getElementById('score-area');
const timer = document.getElementById('timer');
const timerBar = document.getElementById('timer-bar');
const timerProgress = document.getElementById('timer-progress');
const question = document.getElementById('question');
const questionImage = document.getElementById('question-image');
const answersChoices = document.getElementById('answers-choices');
const choiceA = document.getElementById('A');
const choiceB = document.getElementById('B');
const choiceC = document.getElementById('C');

// Variables
let progress = 0; // The number of questions answered
let correct = 0; // The number of correct answers
let wrong = 0; // The number of wrong answers
let currentQuestion = 0; // The index of the current question

/** Questions array
 * Each question is an object with the following properties:
 * text: the question
 * image: the image to display with the question
 * choices: an array of possible answers
 * answer: the correct answer
 */
const questions = [
    {
        text: "Who painted the famous artwork The Starry Night?",
        image: "assets/images/arts.png",
        choices: ["Vincent van Gogh", "Pablo Picasso", "Salvador Dalí"],
        answer: "Vincent van Gogh",
    },
    {
        text: "Who sculpted the famous statue “David”? ",
        image: "assets/images/arts.png",
        choices: ["Michelangelo", "Leonardo da Vinci", "Donatello"],
        answer: "Michelangelo",
    },
    {
        text: "Who known for painding the Sistine Chapel?",
        image: "assets/images/arts.png",
        choices: ["Leonardo da Vinci", "Michelangelo", "Raphael"],
        answer: "Michelangelo",
    },
    {
        text: "Which river is the longest in the world?",
        image: "assets/images/geography.png",
        choices: ["Nile", "Amazon", "Yangtze"],
        answer: "Nile",
    },
    {
        text: "Which mountain range spans across several countries in South America?",
        image: "assets/images/geography.png",
        choices: ["Andes", "Alps", "Himalayas"],
        answer: "Andes",
    },
    {
        text: "Which African country is known as the Land of a Thousand Hills?",
        image: "assets/images/geography.png",
        choices: ["Kenya", "Rwanda", "Ethiopia"],
        answer: "Rwanda",
    },
    {
        text: "Who was the first woman to fly solo across the Atlantic Ocean?",
        image: "assets/images/history.png",
        choices: ["Amelia Earhart", "Bessie Coleman", "Harriet Quimby"],
        answer: "Amelia Earhart",
    },
    {
        text: "Who was the first President of the United States?",
        image: "assets/images/history.png",
        choices: ["George Washington", "Abraham Lincoln", "Thomas Jefferson"],
        answer: "George Washington",
    },
    {
        text: "Which ancient Egyptian king established a cult to Aton, a sun god?",
        image: "assets/images/history.png",
        choices: ["Akhenaten", "Ramses II", "Hatshepsut"],
        answer: "Akhenaten",
    },
    {
        text: "Who is the author of Harry Potter?",
        image: "assets/images/literature.png",
        choices: ["J.R.R. Tolkien", "George R.R. Martin", "J.K. Rowling"],
        answer: "J.K. Rowling",
    },
    {
        text: "Who wrote the novel 1984, a dystopian classic?",
        image: "assets/images/literature.png",
        choices: ["George Orwell", "Aldous Huxley", "Ray Bradbury"],
        answer: "George Orwell",
    },
    {
        text: "Who is the author of the Bridgerton series?",
        image: "assets/images/literature.png",
        choices: ["Julia Quinn", "Jane Austen", "Charlotte Brontë"],
        answer: "Julia Quinn",
    },
    {
        text: "Which musical instrument is associated with Johann Sebastian Bach?",
        image: "assets/images/music.png",
        choices: ["Violin", "Piano", "Organ"],
        answer: "Organ",
    },
    {
        text: "Who is known as the King of Pop?",
        image: "assets/images/music.png",
        choices: ["Michael Jackson", "Elvis Presley", "Madonna"],
        answer: "Michael Jackson",
    },
    {
        text: "Which legendary band is known for hit We Will Rock You?",
        image: "assets/images/music.png",
        choices: ["The Beatles", "Queen", "Led Zeppelin"],
        answer: "Queen",
    },
    {
        text: "What is the chemical symbol for gold?",
        image: "assets/images/science.png",
        choices: ["Au", "Ag", "Fe"],
        answer: "Au",
    },
    {
        text: "What is the chemical symbol for water?",
        image: "assets/images/science.png",
        choices: ["H2O", "CO2", "O2"],
        answer: "H2O",
    },
    {
        text: "What gas do plants absorb during photosynthesis?",
        image: "assets/images/science.png",
        choices: ["Oxygen", "Carbon dioxide", "Nitrogen"],
        answer: "Carbon dioxide",
    },
    {
        text: "In which sport would you perform a slam dunk?",
        image: "assets/images/sports.png",
        choices: ["Football", "Basketball", "Tennis"],
        answer: "Basketball",
    },
    {
        text: "Which sport did David Beckham play?",
        image: "assets/images/sports.png",
        choices: ["Football", "Rugby", "Cricket"],
        answer: "Football",
    },
    {
        text: "Who won gold in the 200m at the Rio Olympics?",
        image: "assets/images/sports.png",
        choices: ["Usain Bolt", "Carl Lewis", "Michael Johnson"],
        answer: "Usain Bolt",
    },
]; 

/** Function to display questions
 * Get current question from questions array
 *  Select a random question from questions array
 * Set the question text and image
 * Set the answer choices
 */
function displayQuestion() {
    let q = questions[currentQuestion = Math.floor(Math.random() * questions.length)];
    question.textContent = q.text;
    questionImage.querySelector("img").src = q.image;
    choiceA.querySelector("p").textContent = q.choices[0];
    choiceB.querySelector("p").textContent = q.choices[1];
    choiceC.querySelector("p").textContent = q.choices[2];

}


/** Function to decrement timer
 * Reduce the timer width by the timer speed
 * Set the timer progress width
 * Check if the timer is 0
 * Stop the timer
 */
function decrementTimer() {

}

/** Function to check answers
 * Get the current question from questions array
 * Check if the choice is correct answer
 * Mark correct or wrong
 * Go to next question
 */
function checkAnswer(choice) {
    let q = questions[currentQuestion];
    if (choice === q.answer) {
        markCorrect();
    } else {
        markWrong();
    }
    nextQuestion();

}

/** Function to mark correct answer
 * Increase the correct score
 * Update the correct element
 */
function markCorrect() {   
    correct++;
    document.getElementById("correct").textContent = correct;
}

/** Function to mark wrong answer
 * Increase the wrong score
 * Update the wrong element
 */
function markWrong() {    
    wrong++;
    document.getElementById("wrong").textContent = wrong;
}

/** Function to go to next question
 * Increment the progress and cur
 * Update the progress element
 * Checck if more questions left
 * Display the next question
 */
function nextQuestion() {
    currentQuestion++;
    progress++;
    document.getElementById("progress").textContent = progress;
    if (currentQuestion < questions.length) {
        displayQuestion();
    }

}

/** Function to end game
 * 
 * 
 */
function endGame() {

}

// Event listeners for answer choices
choiceA.addEventListener("click", function () {
    checkAnswer(choiceA.querySelector("p").textContent);
});
choiceB.addEventListener("click", function () {
    checkAnswer(choiceB.querySelector("p").textContent);
});
choiceC.addEventListener("click", function () {
    checkAnswer(choiceC.querySelector("p").textContent);
});

// Call the function to display the first questions
displayQuestion();