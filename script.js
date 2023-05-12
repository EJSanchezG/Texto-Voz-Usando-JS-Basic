let boton = document.querySelector("button");
let texto = document.querySelector("textarea");

boton.addEventListener("click", () => {
  let voz = new SpeechSynthesisUtterance(texto.value)
  speechSynthesis.speak(voz);
})