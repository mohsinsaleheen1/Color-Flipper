const getcolor = () => {
  let randomnum = Math.floor(Math.random() * 16777215);
  let randomcode = "#" + randomnum.toString(16);
  document.body.style.backgroundColor = randomcode;
  document.getElementById("txt").innerHTML = randomcode;
};
document.getElementById("btn").addEventListener("click", getcolor);
