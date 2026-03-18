function check() {
  let n = document.getElementById("numberInput").value;

  if (n === "") {
    document.getElementById("result").innerText = "Please enter a number.";
    return;
  }

  if (n % 2 == 0) {
    document.getElementById("result").innerText = "EVEN";
  } else {
    document.getElementById("result").innerText = "ODD";
  }
}
