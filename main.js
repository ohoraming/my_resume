const check = document.querySelector('#check');
const content = [
  document.querySelector(".project"),
  document.querySelector(".edu"),
  document.querySelector(".blog"),
  document.querySelector(".resume"),
  document.querySelector(".contact"),
  document.querySelector(".intro"),
];
let idx = 0;

function move(e) {
  switch (e.key) {
    case "ArrowRight":
      idx = (idx + 1) % content.length;
      check.style.cssText = `
        left: ${content[idx].offsetLeft}px;
        top: ${content[idx].offsetTop}px;
      `;
      break;
      case "ArrowLeft":
        idx = (idx - 1) % content.length;
        if (idx < 0) {
          idx += content.length
        }
        check.style.cssText = `
          left: ${content[idx].offsetLeft}px;
          top: ${content[idx].offsetTop}px;
        `;
      break;
    case "Enter":
      content[idx].click()
      break;
  }
}
window.addEventListener("keydown", move);
