<script>
function reveal() {
var reveals = document.querySelectorAll(".qwerty8.ijZHsr");


for (var i = 0; i < reveals.length; i++) {
var windowHeight = window.innerHeight;
var elementTop = reveals[i].getBoundingClientRect().top;
var elementVisible = 150;


if (elementTop < windowHeight - elementVisible) {
document.querySelector("body > section.qwerty0.dPsZaY > div.qwerty5.ffCCAC > div > div > img").classList.add("active");
console.log(elementTop,windowHeight - elementVisible);
} else {
document.querySelector("body > section.qwerty0.dPsZaY > div.qwerty5.ffCCAC > div > div > img").classList.remove("active");
}
}
}

window.addEventListener("scroll", reveal);
</script>