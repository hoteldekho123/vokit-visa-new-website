// Create a <style> tag
const styleSheet = document.createElement("style");
document.head.appendChild(styleSheet);

// Generate dynamic font size classes
let css = "";

// Define responsive breakpoints
const breakpoints = {
  sm: 576,
  md: 768,
  lg: 992,
  xl: 1200,
};

// Generate font-size classes
for (let i = 1; i <= 100; i++) {
  // Base font size class
  css += `.font-${i} { font-size: ${i}px; }`;

  // Responsive classes
  for (const [key, value] of Object.entries(breakpoints)) {
    css += `
      @media (min-width: ${value}px) {
        .${key}\\:font-${i} { font-size: ${i}px; }
      }
    `;
  }
}

// Add generated CSS to the <style> tag
styleSheet.type = "text/css";
styleSheet.textContent = css;


// // on scorll navbar
window.onscroll = function () {
  scrollFunction();
};
var first = true;
function scrollFunction() {
  if (document.body.scrollTop > 350 || document.documentElement.scrollTop > 350) {
      document.getElementById("navbar").classList.add('fixed-navbar');
      document.getElementById("scrolltop").classList.add('fixed-scroll');
  }
  else {
      document.getElementById("navbar").classList.remove('fixed-navbar');
      document.getElementById("scrolltop").classList.remove('fixed-scroll');
  }
}