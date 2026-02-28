function checkNumber() {
  let n = document.getElementById("numberInput").value;
  document.getElementById("result").innerText = (n % 2 == 0) ? "EVEN" : "ODD";
}
