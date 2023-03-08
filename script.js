function clickEvent(first, last) {
  if (first.value.length) {
    document.getElementById(last).focus();
  }
}
let arr = [];
let value;

for (let i = 1; i <= 6; i++) {
  document.getElementById(`k${i}`).addEventListener("input", (e) => {
    let val = e.target.value;
    arr[i - 1] = val;

    fun(`k${i - 1}`, `k${i}`, val);

    value = parseInt(arr[0] + arr[1] + arr[2] + arr[3] + arr[4] + arr[5]);
    console.log(value);
  });
}

function fun(firstId, nextId, value) {
  document.getElementById(nextId).addEventListener("keydown", (e) => {
    if (value == null || value == "") {
      if (e.keyCode == 8) {
        document.getElementById(firstId).focus();
      }
    } else {
      document.getElementById(nextId).focus();
    }
  });
}
