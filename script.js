function displayPoem(response) {
  console.log("Poem generated");

  new Typewriter("#poem", {
    strings: response.data.answer,
    cursor: "",
    autoStart: true,
    delay: 1,
  });
}

function generatePoem(event) {
  event.preventDefault();

  let userInstructions = document.querySelector("#user-input");

  let apiKey = "6f3448c5bececa337o296fb422t09c35";
  let context =
    "You are a poem expert and love to write short poems. Your purpose is to generate a four line poem in the format of basic HTML and ensure each line is separate. Please make sure to only include the poem, and no other symbols. Do not include a title for the poems generated. Please make sure to follow user instructions. Sign each generated poem with 'SheCodes AI' inside a <strong> element";
  let prompt = `User instructions: Generate a poem about ${userInstructions.value}`;
  let apiURL = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  console.log("Generating poem");
  console.log(`${prompt}`);
  console.log(`Context: ${context}`);

  axios.get(apiURL).then(displayPoem);
}

let poemForm = document.querySelector("#form-input");
poemForm.addEventListener("submit", generatePoem);
