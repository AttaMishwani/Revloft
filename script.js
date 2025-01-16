let caseOneUnvisible = document.getElementById("case-one-unvisible")
let casetwoUnvisible = document.getElementById("case-two-unvisible")
let casethreeUnvisible = document.getElementById("case-three-unvisible")
let closeCase = document.getElementsByClassName("close-icon");


const HandleCaseOpen = (index) => {
    // console.log("hello paksitam")
    if (index === 1) {
        caseOneUnvisible.classList.add("active")
    } else if (index === 2) {
        casetwoUnvisible.classList.add("active")
    }
    else if (index === 3) {
        casethreeUnvisible.classList.add("active")
    }
    // console.log("hello world")
}

Array.from(closeCase).forEach(element => {
    element.addEventListener("click", () => {
        console.log("Close button clicked");
        parentElement.classList.remove("active");
    });
});



var swiper = new Swiper(".mySwiper", {
    effect: "cards",
    grabCursor: true,
});