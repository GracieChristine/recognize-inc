//  Language Selection
var langs = [
    ["Afrikaans", ["af-ZA"]],
    ["Bahasa Indonesia", ["id-ID"]],
    ["Bahasa Melayu", ["ms-MY"]],
    ["Català", ["ca-ES"]],
    ["Čeština", ["cs-CZ"]],
    ["Deutsch", ["de-DE"]],
  ["English", ["en-AU", "Australia"],
        ["en-CA", "Canada"],
        ["en-IN", "India"],
        ["en-NZ", "New Zealand"],
        ["en-ZA", "South Africa"],
        ["en-GB", "United Kingdom"],
        ["en-US", "United States"]
  ],
  ["Español", ["es-AR", "Argentina"],
        ["es-BO", "Bolivia"],
        ["es-CL", "Chile"],
        ["es-CO", "Colombia"],
        ["es-CR", "Costa Rica"],
        ["es-EC", "Ecuador"],
        ["es-SV", "El Salvador"],
        ["es-ES", "España"],
        ["es-US", "Estados Unidos"],
        ["es-GT", "Guatemala"],
        ["es-HN", "Honduras"],
        ["es-MX", "México"],
        ["es-NI", "Nicaragua"],
        ["es-PA", "Panamá"],
        ["es-PY", "Paraguay"],
        ["es-PE", "Perú"],
        ["es-PR", "Puerto Rico"],
        ["es-DO", "República Dominicana"],
        ["es-UY", "Uruguay"],
        ["es-VE", "Venezuela"]
  ],
    ["Euskara", ["eu-ES"]],
    ["Français", ["fr-FR"]],
    ["Galego", ["gl-ES"]],
    ["Hrvatski", ["hr_HR"]],
    ["IsiZulu", ["zu-ZA"]],
    ["Íslenska", ["is-IS"]],
  ["Italiano", ["it-IT", "Italia"],
        ["it-CH", "Svizzera"]
  ],
    ["Magyar", ["hu-HU"]],
    ["Nederlands", ["nl-NL"]],
    ["Norsk bokmål", ["nb-NO"]],
    ["Polski", ["pl-PL"]],
  ["Português", ["pt-BR", "Brasil"],
        ["pt-PT", "Portugal"]
  ],
    ["Română", ["ro-RO"]],
    ["Slovenčina", ["sk-SK"]],
    ["Suomi", ["fi-FI"]],
    ["Svenska", ["sv-SE"]],
    ["Türkçe", ["tr-TR"]],
    ["български", ["bg-BG"]],
    ["Pусский", ["ru-RU"]],
    ["Српски", ["sr-RS"]],
    ["한국어", ["ko-KR"]],
  ["中文", ["cmn-Hans-CN", "普通话 (中国大陆)"],
        ["cmn-Hans-HK", "普通话 (香港)"],
        ["cmn-Hant-TW", "中文 (台灣)"],
        ["yue-Hant-HK", "粵語 (香港)"]
  ],
    ["日本語", ["ja-JP"]],
    ["Lingua latīna", ["la"]]
];

for (var i = 0; i < langs.length; i++) {
  select_language.options[i] = new Option(langs[i][0], i);
}
select_language.selectedIndex = 6;
updateCountry();
select_dialect.selectedIndex = 6;
showInfo("info_start");

//  Update Country List per Selected Language
function updateCountry() {
  for (var j = select_dialect.options.length - 1; j >= 0; j--) {
    select_dialect.remove(j);
  }
  var list = langs[select_language.selectedIndex];

  for (var k = 1; k < list.length; k++) {
    select_dialect.options.add(new Option(list[k][1], list[k][0]));
  }
  select_dialect.style.visibility = list[1].length === 1 ? "hidden" : "visible";
}

var emailCreation = false;
var finalTranscription = "";
var recognizing = false;
var ignoreOnend;
var startTimeStamp;

//  Speech API Recognition Begins...
if (!("webkitSpeechRecognition" in window)) {
  upgrade();
}
else {
  start_button.style.display = "inline-block";
  var recognition = new webkitSpeechRecognition();

  //  Controls whether continuous results are returned for each recognition or only a single result. Defaults to single (false.)
  recognition.continuous = true;

  //  Controls whether interim results should be returned (true) or not (false). Interim results are results that are not yet final.
  recognition.interimResults = true;

  //  Fired when the speech recognition service has begun listening to incoming audio with intent to recognize grammars associated with the current SpeechRecognition.
  recognition.onstart = function() {
    recognizing = true;
    showInfo("info_speak_now");
    start_img.src = "img/speech/mic-animate.gif";
  };

  //  Fired when a speech recognition error occurs.
  recognition.onerror = function(event) {
    if (event.error === "no-speech") {
      start_img.src = "img/speech/mic.gif";
      showInfo("info_no_speech");
      ignoreOnend = true;
    }
    if (event.error === "audio-capture") {
      start_img.src = "img/speech/mic.gif";
      showInfo("info_no_microphone");
      ignoreOnend = true;
    }
    if (event.error === "not-allowed") {
      if (event.timeStamp - startTimeStamp < 100) {
        showInfo("info_blocked");
      }
      else {
        showInfo("info_denied");
      }
      ignoreOnend = true;
    }
  };

  //  Fired when the speech recognition service has disconnected.
  recognition.onend = function() {
    recognizing = false;
    if (ignoreOnend) {
      return;
    }
    start_img.src = "img/speech/mic.gif";
    if (!finalTranscription) {
      showInfo("info_start");

      return;
    }
    showInfo("");
    if (window.getSelection) {
      window.getSelection().removeAllRanges();
      var range = document.createRange();

      range.selectNode(document.getElementById("final_span"));
      window.getSelection().addRange(range);
    }
    if (emailCreation) {
      emailCreation = false;
      createEmail();
    }
  };

  //  Fired when the speech recognition service returns a result — a word or phrase has been positively recognized and this has been communicated back to the app.
  recognition.onresult = function(event) {
    var interimTranscript = "";

    for (var i2 = event.resultIndex; i2 < event.results.length; i2++) {
      if (event.results[i2].isFinal) {
        finalTranscription += event.results[i2][0].transcript;
      }
      else {
        interimTranscript += event.results[i2][0].transcript;
      }
    }
    finalTranscription = capitalize(finalTranscription);
    final_span.innerHTML = linebreak(finalTranscription);

    // console.log("Final Result...", final_span.innerHTML);
    text.innerHTML = linebreak(finalTranscription);
    interim_span.innerHTML = linebreak(interimTranscript);
    if (finalTranscription || interimTranscript) {
      showButtons("inline-block");
    }
  };
}

function upgrade() {
  start_button.style.visibility = "hidden";
  showInfo("info_upgrade");
}

var twoLiners = /\n\n/g;
var oneLiner = /\n/g;

//  Starts New Paragraph when say "New Paragraph"
function linebreak(newP) {
  return newP.replace(twoLiners, "<p></p>").replace(oneLiner, "<br>");
}

var firstChar = /\S/;

//  Capitalize First Character of the Sentence.
function capitalize(singleWord) {
  return singleWord.replace(firstChar, function(transcribeMessage) {
    return transcribeMessage.toUpperCase();
  });
}

//  Creating Email Functionality
function createEmail() {
  var newEmail = finalTranscription.indexOf("\n");

  if (newEmail < 0 || newEmail >= 80) {
    newEmail = 40 + finalTranscription.substring(40).indexOf(" ");
  }
  var subject = encodeURI(finalTranscription.substring(0, newEmail));
  var body = encodeURI(finalTranscription.substring(newEmail + 1));

  window.location.href = "mailto:?subject=" + subject + "&body=" + body;
}

//  Copying Functionality
function copyButton() {
  if (recognizing) {
    recognizing = false;
    recognition.stop();
  }
  copy_button.style.display = "none";
  copy_info.style.display = "inline-block";
  showInfo("");
}

//  Emailing Functionality
function emailButton() {
  if (recognizing) {
    emailCreation = true;
    recognizing = false;
    recognition.stop();
  }
  else {
    createEmail();
  }
  email_button.style.display = "none";
  email_info.style.display = "inline-block";
  showInfo("");
}

//  Start Recognition Functionality
function startButton(event) {
  if (recognizing) {
    recognition.stop();

    return;
  }
  finalTranscription = "";
  recognition.lang = select_dialect.value;
  recognition.start();
  ignoreOnend = false;
  final_span.innerHTML = "";
  interim_span.innerHTML = "";
  start_img.src = "img/speech/mic-slash.gif";
  showInfo("info_allow");
  showButtons("none");
  startTimeStamp = event.timeStamp;
}

//  Alter Displaying Info
function showInfo(infoMessage) {
  if (infoMessage) {
    for (var child = info.firstChild; child; child = child.nextSibling) {
      if (child.style) {
        child.style.display = child.id === infoMessage ? "inline" : "none";
      }
    }
    info.style.visibility = "visible";
  }
  else {
    info.style.visibility = "hidden";
  }
}

var current_style;

//  Show Copy & Email Buttons after Transcription is Complete
function showButtons(style) {
  if (style === current_style) {
    return;
  }
  current_style = style;
  copy_button.style.display = style;
  email_button.style.display = style;
  copy_info.style.display = "none";
  email_info.style.display = "none";
}
