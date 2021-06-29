const hamburger = document.querySelector(".fas");
const navigation = document.querySelector("nav");


hamburger.onclick = function expandNav () {
    if (navigation.style.display === "none") {
        return navigation.style.display = "block";
    }
    return navigation.style.display = "none";

;
}


window.addEventListener("scroll", () => {
    const description = document.querySelector(".description");
    const reviews = document.querySelector(".review");
    
    if (window.scrollY >= 400) {
        description.classList.add("active-two");
    }
    else {
        description.classList.remove("active-two");
     }
    if (window.scrollY >= 600) {
     
        reviews.classList.add ("active-three");
    }
    else {
           reviews.classList.remove ("active-three");
    }

})

