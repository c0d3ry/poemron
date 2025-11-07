function generatePoem(event) {
  event.preventDefault();

  new Typewriter("#poem", {
    strings: "The poem will be generated here",
    cursor: "",
    autoStart: true,
    delay: 1,
  });
}

let poemForm = document.querySelector("#form-input");
poemForm.addEventListener("submit", generatePoem);
