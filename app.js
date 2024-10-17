let who = ["the dog", "my granma", "his turtle", "my bird"];
let what = ["eat", "pissed", "crushed", "broked"];
let when = [
  "before the class",
  "right in time",
  "when I finished",
  "during my lunch",
  "while I was praying",
];

function generate_random_excuse() {
  let random_who_index = Math.floor(Math.random() * who.length);
  let random_what_index = Math.floor(Math.random() * what.length);
  let random_when_index = Math.floor(Math.random() * when.length);

  return (
    who[random_who_index] + " " + what[random_what_index] + " " + when[random_when_index]
  );
}

console.log(generate_random_excuse());
