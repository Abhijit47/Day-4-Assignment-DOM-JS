const headingContent= document.querySelectorAll("h1");
const paragraphContent = document.querySelectorAll("p");
const body = document.getElementsByTagName("body");

addEventListener('click', () => {
    body[0].style.backgroundColor = "black";
    headingContent[0].style.color = "white";
    headingContent[0].style.backgroundColor= "black";
    paragraphContent[0].style.color = "white";
});
