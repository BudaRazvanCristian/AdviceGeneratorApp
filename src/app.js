const ADRESA_API = "https://api.adviceslip.com/advice";

window.onload = () => {
  const button = document.getElementsByClassName("main_button")[0];

  if (button) {
    button.addEventListener("click", () => {
      incarcaAdvice();
    });
  }

  
  incarcaAdvice();
};
