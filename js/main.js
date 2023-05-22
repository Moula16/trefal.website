const button1 = document.getElementById("button1");
const button2 = document.getElementById("button2");

const linkUrl = "../fil-trefile.html";
button1.addEventListener("click", function() {
  window.open(linkUrl, "_blank");
});

button2.addEventListener("click", function() {
  window.open(linkUrl, "_blank");
});
const button3 = document.getElementById("button3");
const button4 = document.getElementById("button4");

const linkUrl2 = "../treillis-soude.html";
button3.addEventListener("click", function() {
  window.open(linkUrl2, "_blank");
});

button4.addEventListener("click", function() {
  window.open(linkUrl2, "_blank");
});

// ==================================================

var scrollButton = document.getElementById("scrollBtn");

    // Show the button when user scrolls down 20px from the top of the document
    window.onscroll = function() {
      scrollFunction();
    };

    function scrollFunction() {
      if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        scrollButton.style.display = "block";
      } else {
        scrollButton.style.display = "none";
      }
    }

    // Scroll to top when the button is clicked
    function scrollToTop() {
      document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
      document.body.scrollTop = 0; // For Safari
    }