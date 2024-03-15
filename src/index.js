import "./styles.css";

document.addEventListener("DOMContentLoaded", () => {
  const icons = document.querySelectorAll(".icon");
  icons.forEach((icon) => {
    if (icon.closest("a").visited) {
      icon.style.fill = "purple"; // Change the color for visited links
    } else {
      icon.style.fill = "black"; // Default color for unvisited links
    }
  });
});