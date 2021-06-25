const hamburger = document.querySelector(".fas");
const navigation = document.querySelector("nav");


hamburger.onclick = function expandNav () {
    if (navigation.style.display === "none") {
        return navigation.style.display = "block";
    }
    return navigation.style.display = "none";

;
}
