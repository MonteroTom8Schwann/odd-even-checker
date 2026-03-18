function check() {
  const n = document.getElementById("num").value;
  const result = document.getElementById("result");

  if (n === "") {
    result.innerText = "Please enter a number.";
    result.style.color = "#e74c3c";
    return;
  }

  if (n % 2 === 0) {
    result.innerText = "EVEN";
    result.style.color = "#2ecc71";
  } else {
    result.innerText = "ODD";
    result.style.color = "#e74c3c";
  }
}
