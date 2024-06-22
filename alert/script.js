let main1 = document.querySelector(".main1")
main1.addEventListener("click", function () {
    alert("hello");
});
function getRandomColor() {
  let val1 = Math.ceil (0 + Math.random () * 255);
  let val2 = Math.ceil (0 + Math.random () * 255);
  let val3 = Math.ceil (0 + Math.random () * 255);
  return `rgb(${val1}, ${val2}, ${val3})`;
}
let c = setInterval (() => {
  document.querySelector ('.main1').style.background = getRandomColor ();
}, 1000);
console.log (c);
