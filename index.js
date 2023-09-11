const button = document
  .querySelector("#button")
  .addEventListener("click", () => {
    let temp = document.getElementById("temperatura");
    let texto = document.getElementById("texto");
    let type = document.getElementsByName("type");

    let convertidoC = 0;
    let convertidoF = 0;
    let convertidoK = 0;

    if (temp.value == "") {
      texto.innerText = "Digite uma temperatura!";
    } else {
      type.forEach((selected) => {
        if (selected.checked) {
          temp = Number(temp.value);
          if (selected.value == "celsius") {
            convertidoF = temp * (9 / 5) + 32;
            convertidoK = temp + 273.15;
            texto.innerHTML =
              "A temperatura convertida em Farenheit é " +
              convertidoF.toFixed(2) +
              ".<br> A temperatura convertida em Kelvin é " +
              convertidoK.toFixed(2) +
              ".";
          }
          if (selected.value == "farenheit") {
            convertidoC = ((temp - 32) * 5) / 9;
            convertidoK = ((temp - 32) * 5) / 9 + 273.15;
            texto.innerHTML =
              "A temperatura convertida em Celsius é " +
              convertidoC.toFixed(2) +
              ".<br> A temperatura convertida em Kelvin é " +
              convertidoK.toFixed(2) +
              ".";
          }
          if (selected.value == "kelvin") {
            convertidoC = temp - 273.15;
            convertidoF = (9 / 5) * (temp - 273) + 32;
            texto.innerHTML =
              "A temperatura convertida em Celsius é " +
              convertidoC.toFixed(2) +
              ".<br> A temperatura convertida em Farenheit é " +
              convertidoF.toFixed(2) +
              ".";
          }
        }
      });
    }
  });
