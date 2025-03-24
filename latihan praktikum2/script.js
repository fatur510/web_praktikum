const questions = [
    {
        question: "Apa paralel minor dari kunci C mayor?",
        options: ["A minor", "B Diminished", "C minor", "D mayor"],
        correct: 0
    },
    {
        question: "Kunci C mayor memiliki berapa nada #?",
        options: ["0", "1", "7", "3"],
        correct: 0
    },
    {
        question: "Interval chord Mayor adalah...",
        options: ["1-3b-5", "1-2-5", "1-4-5", "1-3-5"],
        correct: 3
    },
    {
        question: "Pengertian nada # adalah...",
        options: ["Nada kosong", "Nada yang diturunkan setengah", "Nada yang dinaikkan setengah", "Nada tinggi"],
        correct: 2
    },
    {
        question: "Pengertian dari BPM adalah...",
        options: ["Nada rendah", "Ketukan per menit", "Ketukan per detik", "Suara tinggi"],
        correct: 1
    },
    {
        question: "Progresi Chord Canon In D dipopulerkan oleh...",
        options: ["Mozart", "Beethoven", "Pachelbel", "Theodore"],
        correct: 2
    },
    {
        question: "Memainkan dua nada atau lebih secara bersamaan merupakan pengertian dari...",
        options: ["Modulasi", "Harmoni", "Bernyanyi bersama", "Interval"],
        correct: 1
    },
    {
        question: "Pengertian dari Interval?",
        options: ["Jarak antar nada", "Menaikkan nada", "Menurukan nada", "Harmonisasi nada"],
        correct: 0
    },
    {
        question: "Not penyusun chord B minor adalah??",
        options: ["B-C-D", "B-D-G", "B-D-E", "B-C-G"],
        correct: 2
    },
    {
        question: "Interval tangga nada diatonis Mayor adalah...",
        options: ["1 - ½ - ½ - 1 - 1 - 1 - ½", "½ - 1 - ½ - 1 - 1 - 1 - ½", "1 - 1 - ½ - 1 - ½ - 1 - ½", "1 - 1 - ½ - 1 - 1 - 1 - ½"],
        correct: 3
    }
];

let currentQuestionIndex = 0;

function loadQuestion() {
    const questionElement = document.getElementById("question");
    const optionsElement = document.getElementById("options");
    const feedbackElement = document.getElementById("feedback");
    const nextButton = document.getElementById("nextBtn");
   
    feedbackElement.textContent = "";
    feedbackElement.style.color = "";
    nextButton.style.display = "none";

   
    const currentQuestion = questions[currentQuestionIndex];
    questionElement.textContent = currentQuestion.question;
 

    optionsElement.innerHTML = "";

    
    currentQuestion.options.forEach((option, index) => {
        const button = document.createElement("button");
        button.textContent = `${String.fromCharCode(65 + index)}. ${option}`;
        button.className = "btn btn-outline-primary option-btn";
        button.onclick = () => checkAnswer(index);
        optionsElement.appendChild(button);
    });
}

function checkAnswer(selectedIndex) {
    const feedbackElement = document.getElementById("feedback");
    const nextButton = document.getElementById("nextBtn");
    const currentQuestion = questions[currentQuestionIndex];

    if (selectedIndex === currentQuestion.correct) {
        feedbackElement.textContent = "Jawaban Benar!";
        feedbackElement.style.color = "green";
        score= + 1
    } else {
        feedbackElement.textContent = "Jawaban Salah!";
        feedbackElement.style.color = "red";
        score= + 0
    }

    
    nextButton.style.display = "block";
}

function nextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex >= questions.length) {
        currentQuestionIndex = 0; 
    }
    loadQuestion();
}


window.onload = loadQuestion;