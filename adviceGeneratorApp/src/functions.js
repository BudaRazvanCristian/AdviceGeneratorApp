const incarcaAdvice = () => {
  fetch(ADRESA_API, { method: "GET" })
    .then((response) => response.json())
    .then((data) => {
      document.getElementsByClassName("id")[0].innerHTML = data.slip.id;
      document.getElementsByClassName(
        "main_advice"
      )[0].innerHTML = `"${data.slip.advice}"`;
    })
    .catch((error) => console.error("Error: " + error));
};
