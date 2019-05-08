( function() {
  const myQuestions = [
    
      { question: "A system program that combines the separately compiled modules of a program into a form suitable for execution",
      answers: {
        a: "assembler",
        b: "linking loader",
        c: "cross compiler",
        d: "load and go"
      },
      correctAnswer: "b"
    },
    {
      question: "Which of the following addressing modes, facilitates access to an operand<br>whose location is defined relative to the beginning of the data structure in which it appears?",
      answers: {
        a: "ascending",
        b: "sorting",
        c: "index",
        d:"indirect"
      },
      correctAnswer: "c"
    },
    {
      question: "While running DOS on a PC, which command would be used to duplicate the entire diskette?",
      answers: {
        a: "COPY",
        b: "DISKCOPY",
        c: "TYPE",
        d: "CHKDSK"
      },
      correctAnswer: "b"
    },
    {
      question: "The principle of locality of reference justifies the use of",
      answers: {
        a: "reenterable",
        b: "non reusable",
        c: "virtual memory",
        d: "cache memory"
      },
      correctAnswer: "d"
    }, {
      question: "The register or main memory location which contains the effective address of the operand is known as",
      answers: {
        a: "pointer",
        b: "indexed register",
        c: "special location",
        d: "scratch pad"
      },
      correctAnswer: "a"
    }
      
      
      
      
      
      
      
      
      
      
      
      
      
  ];

  function buildQuiz() {
    // we'll need a place to store the HTML output
    const output = [];

    // for each question...
    myQuestions.forEach((currentQuestion, questionNumber) => {
      // we'll want to store the list of answer choices
      const answers = [];

      // and for each available answer...
      for (letter in currentQuestion.answers) {
        // ...add an HTML radio button
        answers.push(
          `<label>
             <input type="radio" name="question${questionNumber}" value="${letter}">
              ${letter} :
              ${currentQuestion.answers[letter]}
           </label>`
        );
      }

      // add this question and its answers to the output
      output.push(
        `<div class="slide">
           <div class="question"> ${currentQuestion.question} </div>
           <div class="answers"> ${answers.join("")} </div>
         </div>`
      );
    });

    // finally combine our output list into one string of HTML and put it on the page
    quizContainer.innerHTML = output.join("");
  }

  function showResults() {
    // gather answer containers from our quiz
    const answerContainers = quizContainer.querySelectorAll(".answers");

    // keep track of user's answers
    let numCorrect = 0;

    // for each question...
    myQuestions.forEach((currentQuestion, questionNumber) => {
      // find selected answer
      const answerContainer = answerContainers[questionNumber];
      const selector = `input[name=question${questionNumber}]:checked`;
      const userAnswer = (answerContainer.querySelector(selector) || {}).value;

      // if answer is correct
      if (userAnswer === currentQuestion.correctAnswer) {
        // add to the number of correct answers
        numCorrect++;

        // color the answers green
        answerContainers[questionNumber].style.color = "lightgreen";
      } else {
        // if answer is wrong or blank
        // color the answers red
        answerContainers[questionNumber].style.color = "red";
      }
    });

    // show number of correct answers out of total
    resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length}`;
  }

  function showSlide(n) {
    slides[currentSlide].classList.remove("active-slide");
    slides[n].classList.add("active-slide");
    currentSlide = n;
    
    if (currentSlide === 0) {
      previousButton.style.display = "none";
    } else {
      previousButton.style.display = "inline-block";
    }
    
    if (currentSlide === slides.length - 1) {
      nextButton.style.display = "none";
      submitButton.style.display = "inline-block";
    } else {
      nextButton.style.display = "inline-block";
      submitButton.style.display = "none";
    }
  }

  function showNextSlide() {
    showSlide(currentSlide + 1);
  }

  function showPreviousSlide() {
    showSlide(currentSlide - 1);
  }

  const quizContainer = document.getElementById("quiz");
  const resultsContainer = document.getElementById("results");
  const submitButton = document.getElementById("submit");

  // display quiz right away
  buildQuiz();

  const previousButton = document.getElementById("previous");
  const nextButton = document.getElementById("next");
  const slides = document.querySelectorAll(".slide");
  let currentSlide = 0;

  showSlide(0);

  // on submit, show results
  submitButton.addEventListener("click", showResults);
  previousButton.addEventListener("click", showPreviousSlide);
  nextButton.addEventListener("click", showNextSlide);
})();

var timer=60;
var min=0;
var sec=0;
function startTimer(){
    min=parseInt(timer/60);
    sec=parseInt(timer%60);
    if(timer<=0){
        
        window.location=close;
        
    }
    document.getElementById("time").innerHTML="<br>Time Left:  <br> " +min.toString()+" : "+sec.toString();
    timer--;
    setTimeout(function(){
        startTimer();
        
    }, 1000)
}