const  tamilChars = [
  [
    { letter: "அ", ereading: "a", word: "அம்மா" },
    { letter: "க", ereading: "ka", word: "கண்" },
    { letter: "ங", ereading: "ṅa", word: "சிங்கம்" },
    { letter: "ச", ereading: "ca", word: "சக்கரம்" },
    { letter: "ஞ", ereading: "ña", word: "ஞாபகம்" },
    { letter: "ட", ereading: "ṭa", word: "குடம்" },
    { letter: "ண", ereading: "ṇa", word: " பணம்" },
    { letter: "த", ereading: "ta", word: "தங்கம்" },
    { letter: "ந", ereading: "na", word: "நத்தை" },
    { letter: "ப", ereading: "pa", word: "பம்பரம்" },
    { letter: "ம", ereading: "ma", word: "மரம்" },
    { letter: "ய", ereading: "ya", word: "யமுனை" },
    { letter: "ர", ereading: "ra", word: "மரம்" },
    { letter: "ல", ereading: "la", word: "லட்டு" },
    { letter: "வ", ereading: "va", word: "வட்டம்" },
    { letter: "ழ", ereading: "zha", word: "பழம்" },
    { letter: "ள", ereading: "ḷa", word: "பள்ளம்" },
    { letter: "ற", ereading: "ṟa", word: "பறவை" },
    { letter: "ன", ereading: "ṇa", word: "கனவு" }
  ],
  [
    {
      "letter": "ஆ",
      "ereading": "aa",
      "word": "ஆடு"
    },
  {
    "letter": "கா",
    "ereading": "kaa",
    "word": "காடு"
  },
  {
    "letter": "ஙா",
    "ereading": "ṅaa",
    "word": "பாம்பு"
  },
  {
    "letter": "சா",
    "ereading": "caa",
    "word": "சாப்பாடு"
  },
  {
    "letter": "ஞா",
    "ereading": "ñaa",
    "word": "ஞாபகம்"
  },
  {
    "letter": "டா",
    "ereading": "ṭaa",
    "word": "டாட்டா"
  },
  {
    "letter": "ணா",
    "ereading": "ṇaa",
    "word": "அண்ணா"
  },
  {
    "letter": "தா",
    "ereading": "taa",
    "word": "தாமரை"
  },
  {
    "letter": "நா",
    "ereading": "naa",
    "word": "நாக்கு"
  },
  {
    "letter": "பா",
    "ereading": "paa",
    "word": "பாக்கு"
  },
  {
    "letter": "மா",
    "ereading": "maa",
    "word": "மாம்பழம்"
  },
  {
    "letter": "யா",
    "ereading": "yaa",
    "word": "யானை"
  },
  {
    "letter": "ரா",
    "ereading": "raa",
    "word": "ராட்டினம்"
  },
  {
    "letter": "லா",
    "ereading": "laa",
    "word": "லாடம்"
  },
  {
    "letter": "வா",
    "ereading": "vaa",
    "word": "வாழை"
  },
  {
    "letter": "ழா",
    "ereading": "zha",
    "word": "பழா"
  },
  {
    "letter": "ளா",
    "ereading": "ḷaa",
    "word": "வாழை"
  },
  {
    "letter": "றா",
    "ereading": "ṟaa",
    "word": "புறா"
  },
  {
    "letter": "னா",
    "ereading": "ṇaa",
    "word": "பேசினான்"
  }
],
[
  { letter: "இ", ereading: "i", word: "இலை" },
  { letter: "கி", ereading: "ki", word: "கிண்ணம்" },
  { letter: "ஙி", ereading: "ṅi", word: "சிங்கம்" },
  { letter: "சி", ereading: "ci", word: "சிகப்பு" },
  { letter: "ஞி", ereading: "ñi", word: "ஞானம்" },
  { letter: "டி", ereading: "ṭi", word: "கடி" },
  { letter: "ணி", ereading: "ṇi", word: "மணி" },
  { letter: "தி", ereading: "ti", word: "திங்கள்" },
  { letter: "நி", ereading: "ni", word: "நிலா" },
  { letter: "பி", ereading: "pi", word: "பிறை" },
  { letter: "மி", ereading: "mi", word: "மிடடாய்" },
  { letter: "யி", ereading: "yi", word: "மயில்" },
  { letter: "ரி", ereading: "ri", word: "ரிஷி" },
  { letter: "லி", ereading: "li", word: "லில்லி" },
  { letter: "வி", ereading: "vi", word: "விளக்கு" },
  { letter: "ழி", ereading: "zhi", word: "மொழி" },
  { letter: "ளி", ereading: "ḷi", word: "வளி" },
  { letter: "றி", ereading: "ṟi", word: "பறவை" },
  { letter: "னி", ereading: "ṇi", word: "அவன்" }
],
 [
  { letter: "ஈ", ereading: "ii", word: "ஈக்கள்" },
  { letter: "கீ", ereading: "kii", word: "கீரை" },
  { letter: "ஙீ", ereading: "ṅii", word: "ஙீற்று" },
  { letter: "சீ", ereading: "cii", word: "சீப்பு" },
  { letter: "ஞீ", ereading: "ñii", word: "ஞீறு" },
  { letter: "டீ", ereading: "ṭii", word: "டீ" },
  { letter: "ணீ", ereading: "ṇii", word: "கண்ணீர்" },
  { letter: "தீ", ereading: "tii", word: "தீ" },
  { letter: "நீ", ereading: "nii", word: "நீர்" },
  { letter: "பீ", ereading: "pii", word: "பீப்பாய்" },
  { letter: "மீ", ereading: "mii", word: "மீன்" },
  { letter: "யீ", ereading: "yii", word: "யீ" },
  { letter: "ரீ", ereading: "rii", word: "ரீங்காரம்" },
  { letter: "லீ", ereading: "lii", word: "லீவு" },
  { letter: "வீ", ereading: "vii", word: "வீடு" },
  { letter: "ழீ", ereading: "zhii", word: "ழீ" },
  { letter: "ளீ", ereading: "ḷii", word: "ளீ" },
  { letter: "றீ", ereading: "ṟii", word: "றீ" },
  { letter: "னீ", ereading: "ṇii", word: "அவன்" }
],[
  { letter: "உ", ereading: "u", word: "உப்பு" },
  { letter: "கு", ereading: "ku", word: "குழந்தை" },
  { letter: "ஙு", ereading: "ṅu", word: "குங்குமம்" },
  { letter: "சு", ereading: "cu", word: "சுவர்" },
  { letter: "ஞு", ereading: "ñu", word: "ஞானம்" },
  { letter: "டு", ereading: "ṭu", word: "டுப்பாட்டா" },
  { letter: "ணு", ereading: "ṇu", word: "கண்ணீர்" },
  { letter: "து", ereading: "tu", word: "துணி" },
  { letter: "நு", ereading: "nu", word: "நுரை" },
  { letter: "பு", ereading: "pu", word: "புத்தகம்" },
  { letter: "மு", ereading: "mu", word: "முயல்" },
  { letter: "யு", ereading: "yu", word: "யூகிக்க" },
  { letter: "ரு", ereading: "ru", word: "மரு" },
  { letter: "லு", ereading: "lu", word: "லேசான" },
  { letter: "வு", ereading: "vu", word: "வௌவால்" },
  { letter: "ழு", ereading: "zhu", word: "விழுது" },
  { letter: "ளு", ereading: "ḷu", word: "வாழைப்பழம்" },
  { letter: "று", ereading: "ṟu", word: "முறுக்கு" },
  { letter: "னு", ereading: "ṇu", word: "அவன்" }
],[
  { letter: "ஊ", ereading: "uu", word: "ஊசி" },
  { letter: "கூ", ereading: "kuu", word: "கூரை" },
  { letter: "ஙூ", ereading: "ṅuu", word: "ஙூ" },
  { letter: "சூ", ereading: "cuu", word: "சூரியன்" },
  { letter: "ஞூ", ereading: "ñuu", word: "ஞூ" },
  { letter: "டூ", ereading: "ṭuu", word: "டூ" },
  { letter: "ணூ", ereading: "ṇuu", word: "ணூ" },
  { letter: "தூ", ereading: "tuu", word: "தூசி" },
  { letter: "நூ", ereading: "nuu", word: "நூல்" },
  { letter: "பூ", ereading: "puu", word: "பூ" },
  { letter: "மூ", ereading: "muu", word: "மூன்று" },
  { letter: "யூ", ereading: "yuu", word: "யூகிக்க" },
  { letter: "ரூ", ereading: "ruu", word: "ரூபாய்" },
  { letter: "லூ", ereading: "luu", word: "லூ" },
  { letter: "வூ", ereading: "vu", word: "வூ" },
  { letter: "ழூ", ereading: "zhuu", word: "ழூ" },
  { letter: "ளூ", ereading: "ḷuu", word: "ளூ" },
  { letter: "றூ", ereading: "ṟuu", word: "றூ" },
  { letter: "னூ", ereading: "ṇuu", word: "னூ" }
],
[
  { letter: "எ", ereading: "e", word: "எறும்பு" },
  { letter: "கெ", ereading: "ke", word: "கொம்பு" },
  { letter: "ஙெ", ereading: "ṅe", word: "ஙொ" },
  { letter: "செ", ereading: "ce", word: "செடி" },
  { letter: "ஞெ", ereading: "ñe", word: "ஞொ̃" },
  { letter: "டெ", ereading: "ṭe", word: "டெலிவிஷன்" },
  { letter: "ணெ", ereading: "ṇe", word: "ணெய்" },
  { letter: "தெ", ereading: "te", word: "தென்றல்" },
  { letter: "நெ", ereading: "ne", word: "நெல்" },
  { letter: "பெ", ereading: "pe", word: "பெரிய" },
  { letter: "மெ", ereading: "me", word: "மெத்தை" },
  { letter: "யெ", ereading: "ye", word: "யெழில்" },
  { letter: "ரெ", ereading: "re", word: "ரெயில்" },
  { letter: "லெ", ereading: "le", word: "லெமன்" },
  { letter: "வெ", ereading: "ve", word: "வெள்ளம்" },
  { letter: "ழெ", ereading: "zhe", word: "ழெ" },
  { letter: "ளெ", ereading: "ḷe", word: "ளெ" },
  { letter: "றெ", ereading: "ṟe", word: "றெ" },
  { letter: "னெ", ereading: "ṇe", word: "னெ" }
],[
  { letter: "ஏ", ereading: "e", word: "ஏடு" },
  { letter: "கே", ereading: "ke", word: "கேள்வி" },
  { letter: "ஙே", ereading: "ṅe", word: "ஙே" },
  { letter: "சே", ereading: "ce", word: "சேவை" },
  { letter: "ஞே", ereading: "ñe", word: "ஞேயம்" },
  { letter: "டே", ereading: "ṭe", word: "டேபிள்" },
  { letter: "ணே", ereading: "ṇe", word: "கண்ணீர்" },
  { letter: "தே", ereading: "te", word: "தேர்வு" },
  { letter: "நே", ereading: "ne", word: "நேர்மை" },
  { letter: "பே", ereading: "pe", word: "பேச்சு" },
  { letter: "மே", ereading: "me", word: "மேகம்" },
  { letter: "யே", ereading: "ye", word: "யேசு" },
  { letter: "ரே", ereading: "re", word: "ரேடியோ" },
  { letter: "லே", ereading: "le", word: "லேசான" },
  { letter: "வே", ereading: "ve", word: "வேலை" },
  { letter: "ழே", ereading: "zhe", word: "ழே" },
  { letter: "ளே", ereading: "ḷe", word: "ளே" },
  { letter: "றே", ereading: "ṟe", word: "றே" },
  { letter: "னே", ereading: "ṇe", word: "னே" }
],[
  { letter: "ஐ", ereading: "ai", word: "ஐயோ" },
  { letter: "கை", ereading: "kai", word: "கை" },
  { letter: "ஙை", ereading: "ṅai", word: "ஙை" },
  { letter: "சை", ereading: "cai", word: "சைக்கிள்" },
  { letter: "ஞை", ereading: "ñai", word: "ஞை" },
  { letter: "டை", ereading: "ṭai", word: "டை" },
  { letter: "ணை", ereading: "ṇai", word: "கண்ணீர்" },
  { letter: "தை", ereading: "tai", word: "தை" },
  { letter: "நை", ereading: "nai", word: "நை" },
  { letter: "பை", ereading: "pai", word: "பை" },
  { letter: "மை", ereading: "mai", word: "மை" },
  { letter: "யை", ereading: "yai", word: "யை" },
  { letter: "ரை", ereading: "rai", word: "ரை" },
  { letter: "லை", ereading: "lai", word: "லை" },
  { letter: "வை", ereading: "vai", word: "வை" },
  { letter: "ழை", ereading: "zhai", word: "ழை" },
  { letter: "ளை", ereading: "ḷai", word: "ளை" },
  { letter: "றை", ereading: "ṟai", word: "றை" },
  { letter: "னை", ereading: "ṇai", word: "னை" }
],[
  { letter: "ஒ", ereading: "o", word: "ஒரு" },
  { letter: "கொ", ereading: "ko", word: "கொம்பு" },
  { letter: "ஙொ", ereading: "ṅo", word: "ஙொ" },
  { letter: "சொ", ereading: "co", word: "சொல்" },
  { letter: "ஞொ", ereading: "ño", word: "ஞொ" },
  { letter: "டொ", ereading: "ṭo", word: "டொ" },
  { letter: "ணொ", ereading: "ṇo", word: "கண்ணீர்" },
  { letter: "தொ", ereading: "to", word: "தொலைபேசி" },
  { letter: "நொ", ereading: "no", word: "நொய்" },
  { letter: "பொ", ereading: "po", word: "பொருள்" },
  { letter: "மொ", ereading: "mo", word: "மொழி" },
  { letter: "யொ", ereading: "yo", word: "யொ" },
  { letter: "ரொ", ereading: "ro", word: "ரொட்டி" },
  { letter: "லொ", ereading: "lo", word: "லொ" },
  { letter: "வொ", ereading: "vo", word: "வொ" },
  { letter: "ழொ", ereading: "zho", word: "ழொ" },
  { letter: "ளொ", ereading: "ḷo", word: "ளொ" },
  { letter: "றொ", ereading: "ṟo", word: "றொ" },
  { letter: "னொ", ereading: "ṇo", word: "னொ" }
],[
  { letter: "ஓ", ereading: "o", word: "ஓணம்" },
  { letter: "கோ", ereading: "ko", word: "கோவில்" },
  { letter: "ஙோ", ereading: "ṅo", word: "ஙோ" },
  { letter: "சோ", ereading: "co", word: "சோறு" },
  { letter: "ஞோ", ereading: "ño", word: "ஞோ" },
  { letter: "டோ", ereading: "ṭo", word: "டோ" },
  { letter: "ணோ", ereading: "ṇo", word: "கண்ணீர்" },
  { letter: "தோ", ereading: "to", word: "தோட்டம்" },
  { letter: "நோ", ereading: "no", word: "நோய்" },
  { letter: "போ", ereading: "po", word: "போக" },
  { letter: "மோ", ereading: "mo", word: "மோர்" },
  { letter: "யோ", ereading: "yo", word: "யோகா" },
  { letter: "ரோ", ereading: "ro", word: "ரோஜா" },
  { letter: "லோ", ereading: "lo", word: "லோகம்" },
  { letter: "வோ", ereading: "vo", word: "வோட்டு" },
  { letter: "ழோ", ereading: "zho", word: "ழோ" },
  { letter: "ளோ", ereading: "ḷo", word: "ளோ" },
  { letter: "றோ", ereading: "ṟo", word: "றோ" },
  { letter: "னோ", ereading: "ṇo", word: "னோ" }
],[
  { letter: "ஔ", ereading: "au", word: "ஔவை" },
  { letter: "கௌ", ereading: "kau", word: "கௌரவம்" },
  { letter: "ஙௌ", ereading: "ṅau", word: "ஙௌ" },
  { letter: "சௌ", ereading: "cau", word: "சௌபாக்கியம்" },
  { letter: "ஞௌ", ereading: "ñau", word: "ஞௌ" },
  { letter: "டௌ", ereading: "ṭau", word: "டௌ" },
  { letter: "ணௌ", ereading: "ṇau", word: "கண்ணீர்" },
  { letter: "தௌ", ereading: "tau", word: "தௌ" },
  { letter: "நௌ", ereading: "nau", word: "நௌ" },
  { letter: "பௌ", ereading: "pau", word: "பௌத்தம்" },
  { letter: "மௌ", ereading: "mau", word: "மௌனம்" },
  { letter: "யௌ", ereading: "yau", word: "யௌவனம்" },
  { letter: "ரௌ", ereading: "rau", word: "ரௌத்திரம்" },
  { letter: "லௌ", ereading: "lau", word: "லௌகீகம்" },
  { letter: "வௌ", ereading: "vau", word: "வௌ" },
  { letter: "ழௌ", ereading: "zhau", word: "ழௌ" },
  { letter: "ளௌ", ereading: "ḷau", word: "ளௌ" },
  { letter: "றௌ", ereading: "ṟau", word: "றௌ" },
  { letter: "னௌ", ereading: "ṇau", word: "னௌ" }
]
];

let currentQuestion = 0;
let isRandom = true;
let quizQuestions = [];
let totalQuestion = 0;
let questionType = null;

function init(){
  currentQuestion = 0;
  quizQuestions = [];
  isRandom = $("#is-random").is(":checked");
  questionType = $( "#question-type" ).val();
   console.log(" init random " + isRandom);

  switch (questionType) {
    case 'allTamilLetters':
      break;
    case 'uyirYeluthu':
      tamilChars.forEach(element => {
        quizQuestions.push(element[0]);
      });

      break;
    case 'meiYeluthu':
        tamilChars[0].forEach(element => {
          quizQuestions.push(element);
        });
      break;
    case 'ikuLetters':
      break;
    case 'uyirMeiYeluthu':
        tamilChars.forEach(elements => {
          elements.forEach(element => {
            quizQuestions.push(element);
          });
        });
      break;
    default:
console.log(" quizQuestions " + quizQuestions);
  }
  //  quizQuestions = [];
  //  if(questionType=="allTamilLetters"){
  //   quizQuestions=quizQuestions.concat(quizData.uyirYeluthu);
  //   quizQuestions=quizQuestions.concat(quizData.ikuLetters);
  //   quizQuestions=quizQuestions.concat(quizData.meiYeluthu);
  //   quizQuestions=quizQuestions.concat(quizData.uyirMeiYeluthu);
  //  } else {
  //   quizQuestions = quizData[questionType];
  //  }
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
  $("#question-desc").text(question.word);
  $("#quiz-image").attr("src", "img/"+question.ereading+".jpg"); // Assuming "img" property in each question

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
