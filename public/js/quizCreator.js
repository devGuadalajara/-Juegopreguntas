var socket = io();
var questionNum = 1;

function updateDatabase()
{
    var questions = [];
    var name = document.getElementById('name').value;

    for(var i = 1; i <= questionNum; i++){
        var question = document.getElementById('q' + i).value;
        var answer1 = document.getElementById(i + 'a1').value;
        var answer2 = document.getElementById(i + 'a2').value;
        var answer3 = document.getElementById(i + 'a3').value;
        var answer4 = document.getElementById(i + 'a4').value;
        var correct = document.getElementById('correct' + i).value;
        var answers = [answer1, answer2, answer3, answer4];
        questions.push({"question": question, "answers": answers, "correct": correct})
    }
    
    var quiz = {id: 0, "name": name, "questions": questions};
    socket.emit('newQuiz', quiz);
}

function addQuestion()
{
    questionNum += 1;
    
    var questionsDiv = document.getElementById('allQuestions');
    
    var newQuestionDiv = document.createElement("div");
    
    var questionLabel = document.createElement('label');
    var questionField = document.createElement('input');
    
    var answer1Label = document.createElement('label');
    var answer1Field = document.createElement('input');
    
    var answer2Label = document.createElement('label');
    var answer2Field = document.createElement('input');
    
    var answer3Label = document.createElement('label');
    var answer3Field = document.createElement('input');
    
    var answer4Label = document.createElement('label');
    var answer4Field = document.createElement('input');
    
    var correctLabel = document.createElement('label');
    var correctField = document.createElement('input');

    questionLabel.innerHTML = "❔❓❔❓ #️⃣" + String(questionNum) + ": ";
    questionLabel.setAttribute('class', 'col-form-label col-form-label');
    questionField.setAttribute('class', 'form-control');
    questionField.setAttribute('id', 'q' + String(questionNum));
    questionField.setAttribute('type', 'text');
    questionLabel.setAttribute('class', 'h2');
    
    answer1Label.innerHTML = "Opcion 1 🔺: ";
    answer1Label.setAttribute('class', 'h3');
    answer2Label.innerHTML = "Opcion 2 ⭐: ";
    answer2Label.setAttribute('class', 'h3');
    answer3Label.innerHTML = "Opcion 3 🔴: ";
    answer3Label.setAttribute('class', 'h3');
    answer4Label.innerHTML = "Opcion 4 ☂️: ";
    answer4Label.setAttribute('class', 'h3');
    correctLabel.innerHTML = "Opcion correcta es: (1-4): ";
    
    answer1Field.setAttribute('id', String(questionNum) + "a1");
    answer1Field.setAttribute('type', 'text');
    answer1Field.setAttribute('class', 'form-control col-6');

    answer2Field.setAttribute('id', String(questionNum) + "a2");
    answer2Field.setAttribute('type', 'text');
    answer2Field.setAttribute('class', 'form-control col-6');

    answer3Field.setAttribute('id', String(questionNum) + "a3");
    answer3Field.setAttribute('type', 'text');
    answer3Field.setAttribute('class', 'form-control col-6');

    answer4Field.setAttribute('id', String(questionNum) + "a4");
    answer4Field.setAttribute('type', 'text');
    answer4Field.setAttribute('class', 'form-control col-6');

    correctField.setAttribute('id', 'correct' + String(questionNum));
    correctField.setAttribute('type', 'number');
    correctField.setAttribute('min', '1');
    correctField.setAttribute('max', '4');
    correctField.setAttribute('class', 'form-control');
    
    newQuestionDiv.setAttribute('id', 'question-field');
    
    newQuestionDiv.appendChild(questionLabel);
    newQuestionDiv.appendChild(questionField);

    newQuestionDiv.appendChild(answer1Label);
    newQuestionDiv.appendChild(answer1Field);
    newQuestionDiv.appendChild(answer2Label);
    newQuestionDiv.appendChild(answer2Field);

    newQuestionDiv.appendChild(answer3Label);
    newQuestionDiv.appendChild(answer3Field);
    newQuestionDiv.appendChild(answer4Label);
    newQuestionDiv.appendChild(answer4Field);

    newQuestionDiv.appendChild(correctLabel);
    newQuestionDiv.appendChild(correctField);

    questionsDiv.appendChild(newQuestionDiv);
    
    newQuestionDiv.style.backgroundColor = randomColor();
}

function cancelQuiz()
{
    if (confirm("Estas seguro que deseas salir?? (Esto borrara todo tu progreso)")) {
        window.location.href = "../";
    }
}

socket.on('startGameFromCreator', function(data){
    window.location.href = "../../host/?id=" + data;
});

function randomColor()
{
    var colors = ['#4CAF50', '#f94a1e', '#3399ff', '#ff9933'];
    var randomNum = Math.floor(Math.random() * 4);
    return colors[randomNum];
}

function setBGColor()
{
    var randColor = randomColor();
    document.getElementById('question-field').style.backgroundColor = randColor;
}









