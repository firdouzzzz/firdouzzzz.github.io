const cursor = document.querySelector(".custom-cursor");
const links = document.querySelectorAll("a");

document.addEventListener("mousemove", (e) => {
  cursor.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
});