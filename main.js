const num = document.getElementById("number");
const system = document.getElementById("system");

const submit = document.getElementById("submit");
submit.onclick = () => {
  console.log(system.value);
  console.log(num.value);
};
