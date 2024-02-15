const  quizData = {
  uyirYeluthu :[
    {
      "letter": "அ",
      "ereading": "a"
    },
    {
      "letter": "ஆ",
      "ereading": "aa"
    },
    {
      "letter": "இ",
      "ereading": "i"
    },
    {
      "letter": "ஈ",
      "ereading": "ee"
    },
    {
      "letter": "உ",
      "ereading": "u"
    },
    {
      "letter": "ஊ",
      "ereading": "oo"
    },
    {
      "letter": "எ",
      "ereading": "e"
    },
    {
      "letter": "ஏ",
      "ereading": "ae"
    },
    {
      "letter": "ஐ",
      "ereading": "ai"
    },
    {
      "letter": "ஒ",
      "ereading": "o"
    },
    {
      "letter": "ஓ",
      "ereading": "o"
    },
    {
      "letter": "ஔ",
      "ereading": "au"
    },
    {
      "letter": "ஃ",
      "ereading": "h"
    }
  ],
  meiYeluthu :[
    {
      "letter": "க",
      "ereading": "ka"
    },
    {
      "letter": "ங",
      "ereading": "ṅa"
    },
    {
      "letter": "ச",
      "ereading": "ca"
    },
    {
      "letter": "ஞ",
      "ereading": "ña"
    },
    {
      "letter": "ட",
      "ereading": "ṭa"
    },
    {
      "letter": "ண",
      "ereading": "ṇa"
    },
    {
      "letter": "த",
      "ereading": "ta"
    },
    {
      "letter": "ந",
      "ereading": "na"
    },
    {
      "letter": "ப",
      "ereading": "pa"
    },
    {
      "letter": "ம",
      "ereading": "ma"
    },
    {
      "letter": "ய",
      "ereading": "ya"
    },
    {
      "letter": "ர",
      "ereading": "ra"
    },
    {
      "letter": "ல",
      "ereading": "la"
    },
    {
      "letter": "வ",
      "ereading": "va"
    },
    {
      "letter": "ழ",
      "ereading": "zha"
    },
    {
      "letter": "ள",
      "ereading": "ḷa"
    },
    {
      "letter": "ற",
      "ereading": "ṟa"
    },
    {
      "letter": "ன",
      "ereading": "ṇa"
    }
  ],
  uyirMeiYeluthu:[
    {
      "letter": "கா",
      "ereading": "kaa"
    },
    {
      "letter": "ஙா",
      "ereading": "nha"
    }
  ],
  ikuLetters:[
    {
      "letter": "க்",
      "ereading": "k"
    },
    {
      "letter": "ங்",
      "ereading": "ng"
    },
    {
      "letter": "ச்",
      "ereading": "c"
    },
    {
      "letter": "ஞ்",
      "ereading": "nj"
    },
    {
      "letter": "ட்",
      "ereading": "t"
    },
    {
      "letter": "ண்",
      "ereading": "N"
    },
    {
      "letter": "த்",
      "ereading": "t"
    },
    {
      "letter": "ந்",
      "ereading": "n"
    },
    {
      "letter": "ப்",
      "ereading": "p"
    },
    {
      "letter": "ம்",
      "ereading": "m"
    },
    {
      "letter": "ய்",
      "ereading": "y"
    },
    {
      "letter": "ர்",
      "ereading": "r"
    },
    {
      "letter": "ல்",
      "ereading": "l"
    },
    {
      "letter": "வ்",
      "ereading": "v"
    },
    {
      "letter": "ழ்",
      "ereading": "zha"
    },
    {
      "letter": "ள்",
      "ereading": "L"
    },
    {
      "letter": "ன்",
      "ereading": "n"
    },
  ]
};

let currentQuestion = 0;
let isRandom = true;
let quizQuestions = [];
let totalQuestion = 0;
let questionType = null;

function init(){
  isRandom = $("#is-random").is(":checked");
  questionType = $( "#question-type" ).val();
   console.log(" init random " + isRandom);
   quizQuestions = [];
   if(questionType=="allTamilLetters"){
    quizQuestions=quizQuestions.concat(quizData.uyirYeluthu);
    quizQuestions=quizQuestions.concat(quizData.ikuLetters);
    quizQuestions=quizQuestions.concat(quizData.meiYeluthu);
    quizQuestions=quizQuestions.concat(quizData.uyirMeiYeluthu);
   } else {
    quizQuestions = quizData[questionType];
   }
   totalQuestion = quizQuestions.length;
   console.log(" quizQuestions " + quizQuestions);

   loadQuestion();
}

function saveSettings(){
  questionType = $( "#question-type" ).val();
  console.log(" questionType " + questionType);
  init();
}


function loadQuestion() {
  console.log(" currunt q number is " + currentQuestion);
  const question = quizQuestions[currentQuestion];
  $("#question-title").text(question.letter);
  $("#quiz-image").attr("src", question.img); // Assuming "img" property in each question

}

function getNextQuestion(){
  if(!isRandom){
    console.log(" get next question " + currentQuestion);
    if (currentQuestion >= (totalQuestion-1)) {
      currentQuestion = 0;
    } else {
      currentQuestion++;
    }
  } else {
    console.log(" loading random que");
    currentQuestion = Math.floor(Math.random() * totalQuestion);
  }
  return  currentQuestion;
}

function getPrevQuestion(){
  if(!isRandom){
    console.log(" get next question " + currentQuestion);
    if (currentQuestion <= 0) {
      currentQuestion = totalQuestion-1;
    } else {
      currentQuestion--;
    }
  } else {
    console.log(" loading random que");
    currentQuestion = Math.floor(Math.random() * totalQuestion);
  }
  return  currentQuestion;
}




$(document).ready(function() {
  init();
  

  $("#next-button").click(function() {
    console.log(" Next Value");
    getNextQuestion();
    loadQuestion();
  });

  $("#prev-button").click(function() {
    getPrevQuestion();
    loadQuestion();
  });


  $("#is-random").click(function(){
    isRandom = $("#is-random").is(":checked");
    console.log(" random valu" + isRandom);
  });


  $('#settings-modal').on('hidden.bs.modal', function (e) {
    saveSettings(); // Call the saveSettings function when the modal is closed
  });
  


});
