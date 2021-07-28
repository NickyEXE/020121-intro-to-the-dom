document.addEventListener("DOMContentLoaded", app)

app()

function app(){
  document.querySelector("h1").innerText += "!"
}

console.log("cheese defined after var", cheese)
