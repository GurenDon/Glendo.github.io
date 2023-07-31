let mybutton = document.getElementById("ScrollTopBtn");
window.onscroll = function() {scrollFunction()};
function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}function topFunction() {
  document.documentElement.scrollTop = 0;
}

var stroke = prompt("What stroke do you want to learn").toLowerCase()
if (stroke == "freestyle"){
    alert("Great! please visit the Freestyle page in our styles")
} else if (stroke == "breaststroke") {
    alert("I suggest you to HEAVILY reconsider")
} else if (stroke != "freestyle" && stroke!='' ){
    alert("Cool! keep it up!")
} else if (stroke==''){
    alert("ok bro")
}


const carousel = document.querySelector(".carousel"),
firstImg = carousel.querySelectorAll("img") [0];
arrowIcons = document.querySelectorAll(".wrapper i");

let isDragStart = false, prevPageX, prevScrollLeft, positionDiff;

const showHideIcons = () => {
    //showing and hiding icons according to left value of carousel//
    let scrollWidth = carousel.scrollWidth - carousel.clientWidth; //get de max scrollable width//
    arrowIcons[0].style.display = carousel.scrollLeft == 0 ? "none" : "block";
    arrowIcons[1].style.display = carousel.scrollLeft == scrollWidth ? "none" : "block";
    or 
    if(carousel.scrollLeft == 0) {
        arrowIcons[0].style.display = "none";
    } else {
        arrowIcons[1].style.display = "block";
    }
}


arrowIcons.forEach(icon => {
    icon.addEventListener("click", () => {
        let firstImgWidth = firstImg.clientWidth + 14;
        carousel.scrollLeft += icon.id == "left" ? - firstImgWidth : firstImgWidth;
        setTimeout(() => showHideIcons(), 60);
        or 
        if(icon.id == "left") {
            carousel.scrollLeft -= firstImgWidth;
        } else {
            carousel.scrollLeft += firstImgWidth;
        }
    });
});

const autoSlide = () => {
    positionDiff = Math.abs(positionDiff); //turning positive values to negative for positive results :)
    let firstImgWidth = firstImg.clientWidth + 14;
    //getting the Val Difference adds or reduce value so the images will slide to the middle
    let valDifference = firstImgWidth - positionDiff;
    or
    if(positionDiff > firstImgWidth / 3) {
        carousel.scrollLeft += valDifference;
    } else {
        carousel.scrollLeft -= positionDiff;
    }

    if(carousel.scrollLeft > prevScrollLeft) { //user scrollingu righto
        return carousel.scrollLeft += positionDiff > firstImgWidth / 3 ? valDifference : -positionDiff;
    } //user scrollingu lefto
    carousel.scrollLeft -= positionDiff > firstImgWidth / 3 ? valDifference : -positionDiff;

}

const dragStart = (e) => {
    isDragStart = true;
    prevPageX = e.pageX || e.touchend[0].pageX;
    prevScrollLeft = carousel.scrollLeft;
}

const dragging = (e) => {
    if(!isDragStart) return;
    e.preventDefault();
    carousel.classList.add("dragging");
    let positionDiff = (e.pageX || e.touchend[0].pageX)- prevPageX;
    carousel.scrollLeft = prevScrollLeft - positionDiff;
    showHideIcons();
}

const dragStop = () => {
    isDragStart = false;
    carousel.classList.remove("dragging");
    autoSlide();
}

carousel.addEventListener("mousedown", dragStart);
carousel.addEventListener("touchstart", dragStart);

carousel.addEventListener("mousemove", dragging);
carousel.addEventListener("touchmove", dragging);

carousel.addEventListener("mouseup", dragStop);
carousel.addEventListener("mouseleave", dragStop);
carousel.addEventListener("touchend", dragStop);