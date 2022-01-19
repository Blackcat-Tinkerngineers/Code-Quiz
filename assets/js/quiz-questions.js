(function(){
    function buildQuiz(){
      // variable to store the HTML output
      const output = [];
  
      // for each question...
      myQuestions.forEach(
        (currentQuestion, questionNumber) => {
  
          // variable to store the list of possible answers
          const answers = [];
  
          // and for each available answer...
          for(letter in currentQuestion.answers){
  
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
            `<div class="question"> ${currentQuestion.question} </div>
            <div class="answers"> ${answers.join('')} </div>`
          );
        }
      );
  
      // finally combine our output list into one string of HTML and put it on the page
      quizContainer.innerHTML = output.join('');
    }
  
    function showResults(){
  
      // gather answer containers from our quiz
      const answerContainers = quizContainer.querySelectorAll('.answers');
  
      // keep track of user's answers
      let numCorrect = 0;
  
      // for each question...
      myQuestions.forEach( (currentQuestion, questionNumber) => {
  
        // find selected answer
        const answerContainer = answerContainers[questionNumber];
        const selector = `input[name=question${questionNumber}]:checked`;
        const userAnswer = (answerContainer.querySelector(selector) || {}).value;
  
        // if answer is correct
        if(userAnswer === currentQuestion.correctAnswer){
          // add to the number of correct answers
          numCorrect++;
  
          // color the answers green
          answerContainers[questionNumber].style.color = 'lightgreen';
        }
        // if answer is wrong or blank
        else{
          // color the answers red
          answerContainers[questionNumber].style.color = 'red';
        }
      });
  
      // show number of correct answers out of total
      resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length}`;
    }
  
    const quizContainer = document.getElementById('quiz');
    const resultsContainer = document.getElementById('results');
    const submitButton = document.getElementById('submit');
    const myQuestions = [
      {
            question: "What is the most preferred image format used for logos in the Wikimedia database?",
            answers: {
                a: ".png",
                b: ".jpeg",
                c: ".svg",
                d: ".gif",
            },
            correctAnswer: ".svg",
        },
        {
            question: "What is the code name for the mobile operating system Android 7.0?",
            answers: {
                a: "Ice Cream Sandwich",
                b: "Jelly Bean",
                c: "Nougat",
                d: "Marshmallow",
            },
            correctAnswer: "Nougat",

        },
        {
            question: "What is the domain name for the country Tuvalu?",
            answers: {
                a: ".tu",
                b: ".tt",
                c: ".tl",
                d: ".tv",
            },
            correctAnswer: ".tv",
        },
        {
            question: "What does LTS stand for in the software market?",
            answers: {
               a: "Long Taco Service",
               b: "Ludicrous Transfer Speed",
               c: "Ludicrous Turbo Speed",
               d: "Long Term Support"
            },
            correctAnswer: "Long Term Support",
        },
        {
            question: "In computing, what does MIDI stand for?",
            answers: {
               a: "Musical Interface of Digital Instruments",
               b: "Modular Interface of Digital Instruments",
               c: "Musical Instrument Data Interface",
               d: "Musical Instrument Digital Interface",
        },
            correctAnswer: "Musical Instrument Digital Interface",
        },
        {
            question: "What language does Node.js use?",
            answers: {
                a: "Java",
                b: "Java Source",
                c: "Joomla Source Code",
                d: "JavaScript",
            },
            correctAnswer: "JavaScript",
        }

    ];
  // Kick things off
  buildQuiz();

  // Event listeners
  submitButton.addEventListener('click', showResults);
})();