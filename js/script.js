const  tamilChars = [
    [
      { letter: "அ", ereading: "a", word: "அம்மா" },
      { letter: "க", ereading: "ka", word: "கண்" },
      { letter: "ங", ereading: "ṅa", word: "அங்ஙனம்" },
      { letter: "ச", ereading: "ca", word: "சக்கரம்" },
      { letter: "ஞ", ereading: "ña", word: "ஞமலி" },
      { letter: "ட", ereading: "ṭa", word: "குடம்" },
      { letter: "ண", ereading: "ṇa", word: "பணம்" },
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
      {"letter":"ஆ","ereading":"aa","word":"ஆடு"},
      {"letter":"கா","ereading":"kaa","word":"காடு"},
      {"letter":"ஙா","ereading":"ṅaa","word":"ஙாவரம்"},
      {"letter":"சா","ereading":"caa","word":"சாப்பாடு"},
      {"letter":"ஞா","ereading":"ñaa","word":"ஞானி"},
      {"letter":"டா","ereading":"ṭaa","word":"டாட்டா"},
      {"letter":"ணா","ereading":"ṇaa","word":"அண்ணா"},
      {"letter":"தா","ereading":"taa","word":"தாமரை"},
      {"letter":"நா","ereading":"naa","word":"நாக்கு"},
      {"letter":"பா","ereading":"paa","word":"பாக்கு"},
      {"letter":"மா","ereading":"maa","word":"மாம்பழம்"},
      {"letter":"யா","ereading":"yaa","word":"யானை"},
      {"letter":"ரா","ereading":"raa","word":"ராட்டினம்"},
      {"letter":"லா","ereading":"laa","word":"லாடம்"},
      {"letter":"வா","ereading":"vaa","word":"வாழை"},
      {"letter":"ழா","ereading":"zha","word":"விழா"},
      {"letter":"ளா","ereading":"ḷaa","word":"காளான்"},
      {"letter":"றா","ereading":"ṟaa","word":"புறா"},
      {"letter":"னா","ereading":"ṇaa","word":"பேனா"}
    ],
  [
    { letter: "இ", ereading: "i", word: "இலை" },
    { letter: "கி", ereading: "ki", word: "கிண்ணம்" },
    { letter: "ஙி", ereading: "ṅi", word: "ஙிங்கலந்தன" },
    { letter: "சி", ereading: "ci", word: "சிங்கம்" },
    { letter: "ஞி", ereading: "ñi", word: "ஞிமிறு" },
    { letter: "டி", ereading: "ṭi", word: "படி" },
    { letter: "ணி", ereading: "ṇi", word: "மணி" },
    { letter: "தி", ereading: "ti", word: "திருவிழா" },
    { letter: "நி", ereading: "ni", word: "நிலா" },
    { letter: "பி", ereading: "pi", word: "பிறை" },
    { letter: "மி", ereading: "mi", word: "மிடடாய்" },
    { letter: "யி", ereading: "yi", word: "மயில்" },
    { letter: "ரி", ereading: "ri", word: "ரிஷி" },
    { letter: "லி", ereading: "li", word: "லில்லி" },
    { letter: "வி", ereading: "vi", word: "விளக்கு" },
    { letter: "ழி", ereading: "zhi", word: "மொழி" },
    { letter: "ளி", ereading: "ḷi", word: "பள்ளி" },
    { letter: "றி", ereading: "ṟi", word: "பறவை" },
    { letter: "னி", ereading: "ṇi", word: "கனி" }
  ],
   [
    { letter: "ஈ", ereading: "ii", word: "ஈட்டி" },
    { letter: "கீ", ereading: "kii", word: "கீரை" },
    { letter: "ஙீ", ereading: "ṅii", word: "ஙீத்தலே" },
    { letter: "சீ", ereading: "cii", word: "சீப்பு" },
    { letter: "ஞீ", ereading: "ñii", word: "ஞீலி" },
    { letter: "டீ", ereading: "ṭii", word: "டீ" },
    { letter: "ணீ", ereading: "ṇii", word: "கண்ணீர்" },
    { letter: "தீ", ereading: "tii", word: "தீ" },
    { letter: "நீ", ereading: "nii", word: "நீர்" },
    { letter: "பீ", ereading: "pii", word: "பீப்பாய்" },
    { letter: "மீ", ereading: "mii", word: "மீன்" },
    { letter: "யீ", ereading: "yii", word: "நுரையீரல்" },
    { letter: "ரீ", ereading: "rii", word: "ரிங்காரம்" },
    { letter: "லீ", ereading: "lii", word: "புரூஸ்லீ" },
    { letter: "வீ", ereading: "vii", word: "வீடு" },
    { letter: "ழீ", ereading: "zhii", word: "தோழீ" },
    { letter: "ளீ", ereading: "ḷii", word: "சுளீர்" },
    { letter: "றீ", ereading: "ṟii", word: "புற்றீசல்" },
    { letter: "னீ", ereading: "ṇii", word: "தேனீ" }
  ],[
    { letter: "உ", ereading: "u", word: "உப்பு" },
    { letter: "கு", ereading: "ku", word: "குழந்தை" },
    { letter: "ஙு", ereading: "ṅu", word: "குங்குமம்" },
    { letter: "சு", ereading: "cu", word: "சுவர்" },
    { letter: "ஞு", ereading: "ñu", word: "உரிஞு" },
    { letter: "டு", ereading: "ṭu", word: "சாப்பாடு" },
    { letter: "ணு", ereading: "ṇu", word: "அணு" },
    { letter: "து", ereading: "tu", word: "துணி" },
    { letter: "நு", ereading: "nu", word: "நுங்கு" },
    { letter: "பு", ereading: "pu", word: "புத்தகம்" },
    { letter: "மு", ereading: "mu", word: "முயல்" },
    { letter: "யு", ereading: "yu", word: "யுக்தி" },
    { letter: "ரு", ereading: "ru", word: "மரு" },
    { letter: "லு", ereading: "lu", word: "வல்லுனர்" },
    { letter: "வு", ereading: "vu", word: "கதவு" },
    { letter: "ழு", ereading: "zhu", word: "விழுது" },
    { letter: "ளு", ereading: "ḷu", word: "கொள்ளு" },
    { letter: "று", ereading: "ṟu", word: "முறுக்கு" },
    { letter: "னு", ereading: "ṇu", word: "பனுவலர்" }
  ],[
    { letter: "ஊ", ereading: "uu", word: "ஊசி" },
    { letter: "கூ", ereading: "kuu", word: "கூரை" },
    { letter: "ஙூ", ereading: "ṅuu", word: "ஙூஙென" },
    { letter: "சூ", ereading: "cuu", word: "சூரியன்" },
    { letter: "ஞூ", ereading: "ñuu", word: "ஞூறு" },
    { letter: "டூ", ereading: "ṭuu", word: "கார்ட்டூன்" },
    { letter: "ணூ", ereading: "ṇuu", word: "தொண்ணூறு" },
    { letter: "தூ", ereading: "tuu", word: "தூண்டில்" },
    { letter: "நூ", ereading: "nuu", word: "நூல்" },
    { letter: "பூ", ereading: "puu", word: "பூ" },
    { letter: "மூ", ereading: "muu", word: "மூளை" },
    { letter: "யூ", ereading: "yuu", word: "யூரோ" },
    { letter: "ரூ", ereading: "ruu", word: "ரூபாய்" },
    { letter: "லூ", ereading: "luu", word: "கல்லூரி" },
    { letter: "வூ", ereading: "vu", word: "நினைவூட்டு" },
    { letter: "ழூ", ereading: "zhuu", word: "ழூரி" },
    { letter: "ளூ", ereading: "ḷuu", word: "உள்ளூர்" },
    { letter: "றூ", ereading: "ṟuu", word: "சிற்றூர்" },
    { letter: "னூ", ereading: "ṇuu", word: "வானூர்தி" }
  ],
  [
    { letter: "எ", ereading: "e", word: "எறும்பு" },
    { letter: "கெ", ereading: "ke", word: "கெண்டி" },
    { letter: "ஙெ", ereading: "ṅe", word: "ஙெ" },
    { letter: "செ", ereading: "ce", word: "செடி" },
    { letter: "ஞெ", ereading: "ñe", word: "ஞெகிழ்" },
    { letter: "டெ", ereading: "ṭe", word: "டெலிவிஷன்" },
    { letter: "ணெ", ereading: "ṇe", word: "எண்ணெய்" },
    { letter: "தெ", ereading: "te", word: "தென்றல்" },
    { letter: "நெ", ereading: "ne", word: "நெல்" },
    { letter: "பெ", ereading: "pe", word: "பெண்" },
    { letter: "மெ", ereading: "me", word: "மெத்தை" },
    { letter: "யெ", ereading: "ye", word: "ஒலியெழுப்பு" },
    { letter: "ரெ", ereading: "re", word: "ரெட்டை" },
    { letter: "லெ", ereading: "le", word: "லெமன்" },
    { letter: "வெ", ereading: "ve", word: "வெள்ளம்" },
    { letter: "ழெ", ereading: "zhe", word: "ழெ" },
    { letter: "ளெ", ereading: "ḷe", word: "வெள்ளென" },
    { letter: "றெ", ereading: "ṟe", word: "சிற்றெறும்பு" },
    { letter: "னெ", ereading: "ṇe", word: "பதினெட்டு" }
  ],[
    { letter: "ஏ", ereading: "e", word: "ஏணி" },
    { letter: "கே", ereading: "ke", word: "கேடயம்" },
    { letter: "ஙே", ereading: "ṅe", word: "ஙேதி" },
    { letter: "சே", ereading: "ce", word: "சேவல்" },
    { letter: "ஞே", ereading: "ñe", word: "ஞேயம்" },
    { letter: "டே", ereading: "ṭe", word: "ஊக்கமது கைவிடேல்" },
    { letter: "ணே", ereading: "ṇe", word: "கண்ணீர்" },
    { letter: "தே", ereading: "te", word: "தேர்வு" },
    { letter: "நே", ereading: "ne", word: "நேரம்" },
    { letter: "பே", ereading: "pe", word: "பேனா" },
    { letter: "மே", ereading: "me", word: "மேகம்" },
    { letter: "யே", ereading: "ye", word: "யேசு" },
    { letter: "ரே", ereading: "re", word: "ரேடியோ" },
    { letter: "லே", ereading: "le", word: "லேசான" },
    { letter: "வே", ereading: "ve", word: "வேலை" },
    { letter: "ழே", ereading: "zhe", word: "கீழே" },
    { letter: "ளே", ereading: "ḷe", word: "உள்ளே" },
    { letter: "றே", ereading: "ṟe", word: "தருகிறேன்" },
    { letter: "னே", ereading: "ṇe", word: "பதினேழு" }
  ],[
    { letter: "ஐ", ereading: "ai", word: "ஐந்து" },
    { letter: "கை", ereading: "kai", word: "கை" },
    { letter: "ஙை", ereading: "ṅai", word: "ஙை" },
    { letter: "சை", ereading: "cai", word: "சைக்கிள்" },
    { letter: "ஞை", ereading: "ñai", word: "மஞ்ஞை" },
    { letter: "டை", ereading: "ṭai", word: "ஆடை" },
    { letter: "ணை", ereading: "ṇai", word: "கண்ணீர்" },
    { letter: "தை", ereading: "tai", word: "தை" },
    { letter: "நை", ereading: "nai", word: "நைல் நதி" },
    { letter: "பை", ereading: "pai", word: "பை" },
    { letter: "மை", ereading: "mai", word: "மை" },
    { letter: "யை", ereading: "yai", word: "ஆசிரியை" },
    { letter: "ரை", ereading: "rai", word: "தாமரை" },
    { letter: "லை", ereading: "lai", word: "அலை" },
    { letter: "வை", ereading: "vai", word: "வைத்தியர்" },
    { letter: "ழை", ereading: "zhai", word: "வாழை" },
    { letter: "ளை", ereading: "ḷai", word: "மூளை" },
    { letter: "றை", ereading: "ṟai", word: "பிறை" },
    { letter: "னை", ereading: "ṇai", word: "பனை" }
  ],[
    { letter: "ஒ", ereading: "o", word: "ஒட்டகம்" },
    { letter: "கொ", ereading: "ko", word: "கொள்ளு" },
    { letter: "ஙொ", ereading: "ṅo", word: "ஙொ" },
    { letter: "சொ", ereading: "co", word: "சொல்" },
    { letter: "ஞொ", ereading: "ño", word: "ஞொள்கு" },
    { letter: "டொ", ereading: "ṭo", word: "டொயோட்டா" },
    { letter: "ணொ", ereading: "ṇo", word: "கண்ணீர்" },
    { letter: "தொ", ereading: "to", word: "தொலைபேசி" },
    { letter: "நொ", ereading: "no", word: "நொய்யல் ஆறு" },
    { letter: "பொ", ereading: "po", word: "பொருட்காட்சி" },
    { letter: "மொ", ereading: "mo", word: "மொழி" },
    { letter: "யொ", ereading: "yo", word: "கையொலி" },
    { letter: "ரொ", ereading: "ro", word: "ரொட்டி" },
    { letter: "லொ", ereading: "lo", word: "வவ்வாலொட்டி" },
    { letter: "வொ", ereading: "vo", word: "கரவொலி" },
    { letter: "ழொ", ereading: "zho", word: "ஏழொத்து" },
    { letter: "ளொ", ereading: "ḷo", word: "வெள்ளொத்தாழிசை" },
    { letter: "றொ", ereading: "ṟo", word: "சொற்றொடர்" },
    { letter: "னொ", ereading: "ṇo", word: "வானொலி" }
  ],[
    { letter: "ஓ", ereading: "o", word: "ஓடம்" },
    { letter: "கோ", ereading: "ko", word: "கோவில்" },
    { letter: "ஙோ", ereading: "ṅo", word: "ஙோ" },
    { letter: "சோ", ereading: "co", word: "சோறு" },
    { letter: "ஞோ", ereading: "ño", word: "ஞோ" },
    { letter: "டோ", ereading: "ṭo", word: "புளுட்டோ" },
    { letter: "ணோ", ereading: "ṇo", word: "கண்ணோட்டம்" },
    { letter: "தோ", ereading: "to", word: "தோட்டம்" },
    { letter: "நோ", ereading: "no", word: "நோக்கம்" },
    { letter: "போ", ereading: "po", word: "போட்டி" },
    { letter: "மோ", ereading: "mo", word: "மோர்" },
    { letter: "யோ", ereading: "yo", word: "யோகா" },
    { letter: "ரோ", ereading: "ro", word: "ரோஜா" },
    { letter: "லோ", ereading: "lo", word: "லோங்கன்" },
    { letter: "வோ", ereading: "vo", word: "வோட்டு" },
    { letter: "ழோ", ereading: "zho", word: "காழோர்" },
    { letter: "ளோ", ereading: "ḷo", word: "வெள்ளோலை" },
    { letter: "றோ", ereading: "ṟo", word: "பெற்றோர்" },
    { letter: "னோ", ereading: "ṇo", word: "அவனோ" }
  ],[
    { letter: "ஔ", ereading: "au", word: "ஔவை" },
    { letter: "கௌ", ereading: "kau", word: "கௌளி" },
    { letter: "ஙௌ", ereading: "ṅau", word: "ஙௌ" },
    { letter: "சௌ", ereading: "cau", word: "சௌபாக்கியம்" },
    { letter: "ஞௌ", ereading: "ñau", word: "ஞௌ" },
    { letter: "டௌ", ereading: "ṭau", word: "கண்டௌதம்" },
    { letter: "ணௌ", ereading: "ṇau", word: "ணௌ" },
    { letter: "தௌ", ereading: "tau", word: "தௌசாரம்" },
    { letter: "நௌ", ereading: "nau", word: "நௌவி" },
    { letter: "பௌ", ereading: "pau", word: "பௌத்தம்" },
    { letter: "மௌ", ereading: "mau", word: "மௌனம்" },
    { letter: "யௌ", ereading: "yau", word: "யௌவனம்" },
    { letter: "ரௌ", ereading: "rau", word: "ரௌத்திரம்" },
    { letter: "லௌ", ereading: "lau", word: "லௌகீகம்" },
    { letter: "வௌ", ereading: "vau", word: "வௌவால்" },
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
        tamilChars.forEach(elements => {
          elements.forEach(element => {
            quizQuestions.push(element);
          });
        });
      break; tamilChars.forEach(elements => {
            elements.forEach(element => {
              quizQuestions.push(element);
            });
          });
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
    $("#quiz-image").attr("src", "img/"+question.word+".jpg"); // Assuming "img" property in each question
  
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