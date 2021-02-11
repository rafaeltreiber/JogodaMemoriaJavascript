const match = {
  positions: [],
  revealed: [],
  firstAttempt: true,
  firstAttemptValue: 0,
  firstAttemptPosition: 0,
  secondAttemptPosition: 0,
  attempts: 0,
  soundFinished: true,
};

const image1 = document.querySelector(".imagem1");
image1.style.width = "70px";
image1.style.height = "70px";
//image1.src = './img/macaco.jpg'

const image2 = document.querySelector(".imagem2");
image2.style.width = "70px";
image2.style.height = "70px";
//image2.src = './img/cavalo.jpg'

const image3 = document.querySelector(".imagem3");
image3.style.width = "70px";
image3.style.height = "70px";
//image1.src = './img/macaco.jpg'

const image4 = document.querySelector(".imagem4");
image4.style.width = "70px";
image4.style.height = "70px";
//image1.src = './img/macaco.jpg'

const image5 = document.querySelector(".imagem5");
image5.style.width = "70px";
image5.style.height = "70px";
//image1.src = './img/macaco.jpg'

const image6 = document.querySelector(".imagem6");
image6.style.width = "70px";
image6.style.height = "70px";
//image1.src = './img/macaco.jpg'

const image7 = document.querySelector(".imagem7");
image7.style.width = "70px";
image7.style.height = "70px";
//image1.src = './img/macaco.jpg'

const image8 = document.querySelector(".imagem8");
image8.style.width = "70px";
image8.style.height = "70px";

const image9 = document.querySelector(".imagem9");
image9.style.width = "70px";
image9.style.height = "70px";

const image10 = document.querySelector(".imagem10");
image10.style.width = "70px";
image10.style.height = "70px";

const image11 = document.querySelector(".imagem11");
image11.style.width = "70px";
image11.style.height = "70px";

const image12 = document.querySelector(".imagem12");
image12.style.width = "70px";
image12.style.height = "70px";

const image13 = document.querySelector(".imagem13");
image13.style.width = "70px";
image13.style.height = "70px";

const image14 = document.querySelector(".imagem14");
image14.style.width = "70px";
image14.style.height = "70px";

const image15 = document.querySelector(".imagem15");
image15.style.width = "70px";
image15.style.height = "70px";

const image16 = document.querySelector(".imagem16");
image16.style.width = "70px";
image16.style.height = "70px";

const image17 = document.querySelector(".imagem17");
image17.style.width = "70px";
image17.style.height = "70px";

const image18 = document.querySelector(".imagem18");
image18.style.width = "70px";
image18.style.height = "70px";

const image19 = document.querySelector(".imagem19");
image19.style.width = "70px";
image19.style.height = "70px";

const image20 = document.querySelector(".imagem20");
image20.style.width = "70px";
image20.style.height = "70px";

const image21 = document.querySelector(".imagem21");
image21.style.width = "70px";
image21.style.height = "70px";

const image22 = document.querySelector(".imagem22");
image22.style.width = "70px";
image22.style.height = "70px";

const image23 = document.querySelector(".imagem23");
image23.style.width = "70px";
image23.style.height = "70px";

const image24 = document.querySelector(".imagem24");
image24.style.width = "70px";
image24.style.height = "70px";

const image25 = document.querySelector(".imagem25");
image25.style.width = "70px";
image25.style.height = "70px";

const image26 = document.querySelector(".imagem26");
image26.style.width = "70px";
image26.style.height = "70px";

const image27 = document.querySelector(".imagem27");
image27.style.width = "70px";
image27.style.height = "70px";

const image28 = document.querySelector(".imagem28");
image28.style.width = "70px";
image28.style.height = "70px";

const image29 = document.querySelector(".imagem29");
image29.style.width = "70px";
image29.style.height = "70px";

const image30 = document.querySelector(".imagem30");
image30.style.width = "70px";
image30.style.height = "70px";

const image31 = document.querySelector(".imagem31");
image31.style.width = "70px";
image31.style.height = "70px";

const image32 = document.querySelector(".imagem32");
image32.style.width = "70px";
image32.style.height = "70px";

const image33 = document.querySelector(".imagem33");
image33.style.width = "70px";
image33.style.height = "70px";

const image34 = document.querySelector(".imagem34");
image34.style.width = "70px";
image34.style.height = "70px";

const image35 = document.querySelector(".imagem35");
image35.style.width = "70px";
image35.style.height = "70px";

const image36 = document.querySelector(".imagem36");
image36.style.width = "70px";
image36.style.height = "70px";

function generateMatrix() {
  // Escolher uma posição aleatória da matriz
  // Verificar se essa posição é 0
  // Se for, gravar o próximo número em uma sequencia de 0 a 17 lá.
  // Fazer isso duas vezes para cada número

  let position;

  // Até a metade da matriz porque são dois números repetidos sempre
  for (let a = 0; a < 18; a++) {
    // Para cada número vai repetir o processo duas vezes
    for (let b = 0; b < 2; b++) {
      // Sai sorteando uma posição aleatória da matriz
      position = Math.round(Math.random() * 36);

      // Enquanto não achar uma posição sem nenhum número gravado ainda, sorteie um novo número
      while (match.positions[position] != 0)
        position = Math.round(Math.random() * 36);

      // Agora que achamos uma posição vazia, gravamos o número atual nela
      match.positions[position] = a;
    }
  }
}

function getdrawingImage(value) {
  switch (match.revealed[value]) {
    case false:
      return "./img/interrogacao.jpg";
    case true:
      return getImageName(match.positions[value]);
  }
}

function getImageName(value) {
  switch (value) {
    case 0:
      return "./img/aguia.jpg";
    case 1:
      return "./img/alce.jpg";
    case 2:
      return "./img/bode.jpg";
    case 3:
      return "./img/cachorro.png";
    case 4:
      return "./img/cavalo.jpg";
    case 5:
      return "./img/coruja.jpg";
    case 6:
      return "./img/gato.jpg";
    case 7:
      return "./img/girafa.jpg";
    case 8:
      return "./img/golfinho.jpg";
    case 9:
      return "./img/jacare.jpg";
    case 10:
      return "./img/leao.jpg";
    case 11:
      return "./img/macaco.jpg";
    case 12:
      return "./img/panda.jpg";
    case 13:
      return "./img/pavao.jpg";
    case 14:
      return "./img/pombo.jpg";
    case 15:
      return "./img/urso.jpg";
    case 16:
      return "./img/vaca.jpg";
    case 17:
      return "./img/zebra.jpg";
  }
}

function populateImgSrcs() {
  image1.src = getdrawingImage(0);
  image2.src = getdrawingImage(1);
  image3.src = getdrawingImage(2);
  image4.src = getdrawingImage(3);
  image5.src = getdrawingImage(4);
  image6.src = getdrawingImage(5);
  image7.src = getdrawingImage(6);
  image8.src = getdrawingImage(7);
  image9.src = getdrawingImage(8);
  image10.src = getdrawingImage(9);
  image11.src = getdrawingImage(10);
  image12.src = getdrawingImage(11);
  image13.src = getdrawingImage(12);
  image14.src = getdrawingImage(13);
  image15.src = getdrawingImage(14);
  image16.src = getdrawingImage(15);
  image17.src = getdrawingImage(16);
  image18.src = getdrawingImage(17);
  image19.src = getdrawingImage(18);
  image20.src = getdrawingImage(19);
  image21.src = getdrawingImage(20);
  image22.src = getdrawingImage(21);
  image23.src = getdrawingImage(22);
  image24.src = getdrawingImage(23);
  image25.src = getdrawingImage(24);
  image26.src = getdrawingImage(25);
  image27.src = getdrawingImage(26);
  image28.src = getdrawingImage(27);
  image29.src = getdrawingImage(28);
  image30.src = getdrawingImage(29);
  image31.src = getdrawingImage(30);
  image32.src = getdrawingImage(31);
  image33.src = getdrawingImage(32);
  image34.src = getdrawingImage(33);
  image35.src = getdrawingImage(34);
  image36.src = getdrawingImage(35);
}

const rightAudio = document.querySelector(".right");
const wrongAudio = document.querySelector(".wrong");

rightAudio.addEventListener("ended", () => {
  match.soundFinished = true;
});

wrongAudio.addEventListener("ended", () => {
  match.revealed[match.firstAttemptPosition] = false;
  match.revealed[match.secondAttemptPosition] = false;
  populateImgSrcs();
  match.soundFinished = true;
});

function revealImage(value) {
  if (match.revealed[value] || !match.soundFinished) return;

  match.revealed[value] = true;
  populateImgSrcs();

  if (match.firstAttempt) {
    match.firstAttempt = false;
    match.firstAttemptValue = match.positions[value];
    match.firstAttemptPosition = value;
    return;
  } else {
    match.secondAttemptPosition = value;
    match.firstAttempt = true;
    match.attempts++;
    match.soundFinished = false;

    if (match.positions[value] == match.positions[match.firstAttemptPosition]) {
      rightAudio.play();
    } else {
      wrongAudio.play();
    }

    verifyFinish();
  }
}

const finishMessage = document.querySelector(".finishMessage");
const replayButton = document.querySelector(".playAgain");
replayButton.addEventListener("click", () => {
  init();  
});

function verifyFinish() {
  let finish = 0;
  for (let a = 0; a < 36; a++) {
    if (match.revealed[a] == false) finish++;
  }

  if (finish > 0) return;

  finishMessage.innerText = `Parabéns, você venceu após ${match.attempts} tentativas!`;
  finishMessage.style.display = "inline";
  replayButton.style.display = "inline";
}

image1.addEventListener("click", () => {
  revealImage(0);
});

image2.addEventListener("click", () => {
  revealImage(1);
});

image3.addEventListener("click", () => {
  revealImage(2);
});

image4.addEventListener("click", () => {
  revealImage(3);
});

image5.addEventListener("click", () => {
  revealImage(4);
});

image6.addEventListener("click", () => {
  revealImage(5);
});

image7.addEventListener("click", () => {
  revealImage(6);
});

image8.addEventListener("click", () => {
  revealImage(7);
});

image9.addEventListener("click", () => {
  revealImage(8);
});

image10.addEventListener("click", () => {
  revealImage(9);
});

image11.addEventListener("click", () => {
  revealImage(10);
});

image12.addEventListener("click", () => {
  revealImage(11);
});

image13.addEventListener("click", () => {
  revealImage(12);
});

image14.addEventListener("click", () => {
  revealImage(13);
});

image15.addEventListener("click", () => {
  revealImage(14);
});

image16.addEventListener("click", () => {
  revealImage(15);
});

image17.addEventListener("click", () => {
  revealImage(16);
});

image18.addEventListener("click", () => {
  revealImage(17);
});

image19.addEventListener("click", () => {
  revealImage(18);
});

image20.addEventListener("click", () => {
  revealImage(19);
});

image21.addEventListener("click", () => {
  revealImage(20);
});

image22.addEventListener("click", () => {
  revealImage(21);
});

image23.addEventListener("click", () => {
  revealImage(22);
});

image24.addEventListener("click", () => {
  revealImage(23);
});

image25.addEventListener("click", () => {
  revealImage(24);
});

image26.addEventListener("click", () => {
  revealImage(25);
});

image27.addEventListener("click", () => {
  revealImage(26);
});

image28.addEventListener("click", () => {
  revealImage(27);
});

image29.addEventListener("click", () => {
  revealImage(28);
});

image30.addEventListener("click", () => {
  revealImage(29);
});

image31.addEventListener("click", () => {
  revealImage(30);
});

image32.addEventListener("click", () => {
  revealImage(31);
});

image33.addEventListener("click", () => {
  revealImage(32);
});

image34.addEventListener("click", () => {
  revealImage(33);
});

image35.addEventListener("click", () => {
  revealImage(34);
});

image36.addEventListener("click", () => {
  revealImage(35);
});

function setup() {
  for (let a = 0; a < 36; a++) {
    match.positions[a] = 0;
    match.revealed[a] = false;
  }
  match.attempts = 0;
  match.firstAttempt = true;
  match.firstAttemptPosition = 0;
  match.firstAttemptValue = 0;
  match.secondAttemptPosition = 0;
  match.soundFinished = true;
  replayButton.style.display = "none";
  finishMessage.style.display = "none";
}
function init() {
  setup();
  generateMatrix();
  populateImgSrcs();
}

init();
