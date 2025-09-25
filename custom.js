function onClickThemeButton() {
  /*alert("Hello, World!"); */
  nome = prompt("Qual o seu nome?")
  alert("Olá, " + nome)
  toggleTheme();
}

document.getElementById("theme-btn").addEventListener("click", onClickThemeButton);