const article = {
  title: "How to code",
  description: "You can learn to code. Error is nothing to be afraid of.",
};
const button = document.querySelector("button");

button.addEventListener("click", (event) => {
  button.textContent = `Click : ${event.detail}`;
});
