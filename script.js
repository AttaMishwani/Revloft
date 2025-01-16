let caseOneUnvisible = document.getElementById("case-one-unvisible")
let casetwoUnvisible = document.getElementById("case-two-unvisible")
let casethreeUnvisible = document.getElementById("case-three-unvisible")
let closeCase = document.getElementsByClassName("close-icon");


const HandleCaseOpen = (index) => {

    if (index === 1) {
        caseOneUnvisible.classList.add("active")
    } else if (index === 2) {
        casetwoUnvisible.classList.add("active")
    }
    else if (index === 3) {
        casethreeUnvisible.classList.add("active")
    }

}

const handleCloseCase = (index) => {
    if (index === 1) {
        caseOneUnvisible.classList.remove("active")
    } else if (index === 2) {
        casetwoUnvisible.classList.remove("active")
    } else if (index === 3) {
        casethreeUnvisible.classList.remove("active")
    }
}




var swiper = new Swiper(".mySwiper", {
    effect: "cards",
    grabCursor: true,
});