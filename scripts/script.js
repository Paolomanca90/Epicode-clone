//array quest
const questions = [
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question: "What does CPU stand for?",
    correct_answer: "Central Processing Unit",
    incorrect_answers: [
      "Central Process Unit",
      "Computer Personal Unit",
      "Central Processor Unit",
    ],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question:
      "In the programming language Java, which of these keywords would you put on a variable to make sure it doesn&#039;t get modified?",
    correct_answer: "Final",
    incorrect_answers: ["Static", "Private", "Public"],
  },
  {
    category: "Science: Computers",
    type: "boolean",
    difficulty: "easy",
    question: "The logo for Snapchat is a Bell.",
    correct_answer: "False",
    incorrect_answers: ["True"],
  },
  {
    category: "Science: Computers",
    type: "boolean",
    difficulty: "easy",
    question:
      "Pointers were not used in the original C programming language; they were added later on in C++.",
    correct_answer: "False",
    incorrect_answers: ["True"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question:
      "What is the most preferred image format used for logos in the Wikimedia database?",
    correct_answer: ".svg",
    incorrect_answers: [".png", ".jpeg", ".gif"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question: "In web design, what does CSS stand for?",
    correct_answer: "Cascading Style Sheet",
    incorrect_answers: [
      "Counter Strike: Source",
      "Corrective Style Sheet",
      "Computer Style Sheet",
    ],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question:
      "What is the code name for the mobile operating system Android 7.0?",
    correct_answer: "Nougat",
    incorrect_answers: ["Ice Cream Sandwich", "Jelly Bean", "Marshmallow"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question: "On Twitter, what is the character limit for a Tweet?",
    correct_answer: "140",
    incorrect_answers: ["120", "160", "100"],
  },
  {
    category: "Science: Computers",
    type: "boolean",
    difficulty: "easy",
    question: "Linux was first created as an alternative to Windows XP.",
    correct_answer: "False",
    incorrect_answers: ["True"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question:
      "Which programming language shares its name with an island in Indonesia?",
    correct_answer: "Java",
    incorrect_answers: ["Python", "C", "Jakarta"],
  },
];

let maxSeconds = 1;
let nowSeconds = maxSeconds;
const sec = document.getElementById("seconds");
sec.innerText = maxSeconds;

let questDid = [];
let rightQuestions = 0;
let answered = "";

const timer = () => {
  if (nowSeconds > 0) {
    nowSeconds = nowSeconds - 1;
    sec.innerText = nowSeconds;
  } else {
    // alert("tempo esaurito");
    quest();
    nowSeconds = maxSeconds;
    sec.innerText = nowSeconds;
    // clearInterval(myTimer);
  }
};

// da riattivare, bloccata mette noie
const myTimer = setInterval(timer, 1000);

const shuffle = (array) => {
  let currentIndex = array.length,
    randomIndex;

  // While there remain elements to shuffle.
  while (currentIndex != 0) {
    // Pick a remaining element.
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  return array;
};

const myAnswer = () => {};

const nextButton = document.getElementById("nextButton");
const buttonNext = () => {
  if (answered !== "") {
    nowSeconds = maxSeconds;
    if (answered) rightQuestions = rightQuestions + 1;
    if (questDid.length < questions.length) {
      quest();
    }
    if (questDid.length > questions.length) {
      endTest();
    }

    answered = "";
  }
};

nextButton.addEventListener("click", buttonNext);

const endTest = () => {
  alert("Testi finito, rightQuestions: " + rightQuestions);
  console.log("questDid ", questDid);
  clearInterval(myTimer);
};

const answersButton = function (a, c) {
  if (a === c) {
    answered = true;
  } else {
    answered = false;
  }
};

const quest = () => {
  let rnd = Math.floor(Math.random() * questions.length);
  if (questDid.length < questions.length) {
    if (!questDid.includes(rnd)) {
      nowSeconds = maxSeconds;
      sec.innerText = nowSeconds;
      questDid.push(rnd);
      console.log(rnd);
      const myQuestPlace = document.getElementById("my-question");
      myQuestPlace.replaceChildren();
      const questMain = document.createElement("h2");
      questMain.innerText = questions[rnd].question;
      myQuestPlace.appendChild(questMain);
      let answersList = [];
      answersList.push(questions[rnd].correct_answer);
      answersList.push(...questions[rnd].incorrect_answers);
      shuffle(answersList);
      answersList.forEach((a) => {
        const answers = document.createElement("p");
        answers.innerText = a;
        myQuestPlace.appendChild(answers);
        answers.addEventListener("click", () => {
          answersButton(answers.innerText, questions[rnd].correct_answer);
        });
      });
    } else quest();
  } else {
    endTest();
  }
};
quest();

// dovrebbe caricare array da url ma non funziona
// const question = () => {
//   const questionQ = document.createElement("h2");
//   url_string =
//     "https://opentdb.com/api.php?amount=10&category=18&difficulty=easy";
//   url = new URL(url_string);
//   options = url.searchParams.getAll("[]");

//   console.log(options);
// };
// question();

// Funzione bottone proceed in welcome.html che porta alla pagina benchmark.html
function proceed() {
  // Reindirizza l'utente alla pagina delle domande
  window.location.href = "benchmark.html";
}
