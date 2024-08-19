const quizData = [
    {
        question: "How many bones does an adult human have?",
        options:["201","224","206","203",],
        correct: 2,
    },
    {
        question: "Name the smallest bone in human body",
        options:["Femur","Stapes","Radius","Coccyx",],
        correct: 1,  
    },
    {
        question: "Which is the weakest bone in the body?",
        options:["Talus","Phalanges","Fibula","Clavicle",],
        correct: 3,
    },
    {
        question: "Name the only movable bone in the skull",
        options:["Mandible","Maxilla","Zygomatic","Ethmoid",],
        correct: 0,
    },
    {
        question: "How many bones make up the human spine?",
        options:["24","34","33","27",],
        correct: 2,
    },
];


const quiz = document.querySelector("#quiz");
const answerElm = document.querySelectorAll(" .answer");
const [questionElm, option_1, option_2, option_3, option_4] =
 document.querySelectorAll("#question, .option_1, .option_2, .option_3, .option_4");
 const submitBtn = document.querySelector("#submit");

 let currentQuiz = 0;
 let score = 0;


 const loadQuiz = () => {
    const {question, options} = quizData[currentQuiz];
    console.log(question);

    questionElm.innerText = question;
    options.forEach(
        (curOption, index) => (window[`option_${index + 1}`].innerText = curOption)
    );
 };

loadQuiz();


const getSelectedOption = () => {
    let ans_index;
    answerElm.forEach((curOption, index) => {
        if (curOption.checked) {
            ans_index = index;
        }
    });
    return ans_index;
};

const deselectedAnswers =() => {
    return answerElm.forEach((curElem) => curElem.checked = false);
};

submitBtn.addEventListener("click", () => {
    const selectedOptionIndex = getSelectedOption();
    console.log(selectedOptionIndex);

    if (selectedOptionIndex === quizData[currentQuiz].correct) {
        score += 1;
    }

    currentQuiz++;

    if(currentQuiz < quizData.length) {
        deselectedAnswers();
        loadQuiz();
    }
    else {
        quizData.innerHTML = `
        <div class = "result">
            <h2>Your Score:${score}/${quizData.length} Correct Answers</h2>
            <p>Congratulations on completing the quiz!</p>
            <button class="reload-button" onclick="location.reload()">Play Again</button>
        </div>
        `;
    }
});