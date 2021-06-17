var clicks = 0;

let onClickButtons = () => {
  const audio = new Audio();
  audio.preload = "auto";
  audio.src = "./Кровосток - Куртец.mp3";
  audio.play();
};

let onClickButton = (el) => {
  clicks++;
  if (clicks >= 5) {
    el.innerHTML = "Да заебал уже кликать успокойся нахуй";
    el.setAttribute("class", "red");
  } else {
    el.innerHTML = "Вы нажали на кнопку " + String(clicks) + " раз";
  }
};

let clickButton = () => {
  var textareaData = document.getElementById("wooo");
  if (textareaData.value === "Hello" || textareaData.value === "hello") {
    console.log("Hello");
  } else {
    console.log("i not understand what you want about me");
  }
};

onChangeTextarea = (el) => {
  switch (el.value) {
    case "red":
      el.style.background = "red";
      break;
    case "blue":
      el.style.background = "blue";
      break;
    case "green":
      el.style.background = "green";
      break;
  }
};
