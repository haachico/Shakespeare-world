const btnTranslate = document.querySelector(".btn");
const textInput = document.querySelector(".text-input");
const textOutput = document.querySelector(".text-output");

const serverURL = "https://api.funtranslations.com/translate/shakespeare.json";

function getTranslationURL(input) {
  return serverURL + "?" + "text=" + input;
}

function errorHandler() {
  alert(`Server Error! Please try again in sometime`);
}
function clickHandler() {
  const textTyped = textInput.value;
  fetch(getTranslationURL(textTyped))
    .then((response) => response.json())
    .then((json) => {
      const translatedText = json.contents.translated;
      console.log(translatedText);
      textOutput.innerText = translatedText;
    })
    .catch(errorHandler);
}

btnTranslate.addEventListener("click", clickHandler);
