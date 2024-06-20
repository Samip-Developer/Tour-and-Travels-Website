const open = document.querySelector("#btn1");
const close = document.querySelector("#btn2");
const addClass = document.querySelector(".navmenu");



btn1.addEventListener('click', () => {
    addClass.classList.add('p')
})

btn2.addEventListener('click', () => {
    addClass.classList.remove('p')
})


// Changing logo for the page 
function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  const phrases = ["Undiscovered", "Unfathomed", "Uninvestigated","Untraveled","Uncharted","Unknown"];
  const el = document.querySelector(".loop");

  let sleepTime = 100;

  let curPhraseIndex = 0;

  const writeLoop = async () => {
    while (true) {
      let curWord = phrases[curPhraseIndex];

      for (let i = 0; i < curWord.length; i++) {
        el.innerText = curWord.substring(0, i + 1);
        await sleep(sleepTime);
      }

      await sleep(sleepTime * 10);

      for (let i = curWord.length; i > 0; i--) {
        el.innerText = curWord.substring(0, i - 1);
        await sleep(sleepTime);
      }

      await sleep(sleepTime * 5);

      if (curPhraseIndex === phrases.length - 1) {
        curPhraseIndex = 0;
      } else {
        curPhraseIndex++;
      }
    }
  };

  writeLoop();