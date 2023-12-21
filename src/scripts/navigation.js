const defaultColor = "#01494e";
const colors = [
{ color: "#00917D", background: "#E6F5E4", cursor: "/icons/cursor-green.svg"},
{ color: "#15276A", background: "#E7ECFF", cursor: "/icons/cursor-blue.svg" },
{ color: "#00917D", background: "#E6F5E4", cursor: "/icons/cursor-green.svg" },
{ color: "#CCA099", background: "#EEE9E6", cursor: "/icons/cursor-burgundy.svg" },
{ color: "#00917D", background: "#E6F5E4", cursor: "/icons/cursor-green.svg" }
];

const links = document.querySelectorAll(".link");
const header = document.querySelector("header")
const logo = document.querySelector(".logo")

const menu = document.getElementById("menu")
const expandedMenu = document.getElementById("expandedMenu")
const mainContent = document.getElementById("mainContent")

const logoPathAll = document.querySelectorAll(".logo svg g path")
const menuText = menu.querySelector("span")
const line = menu.querySelector(".line")
const bubble = menu.querySelector(".bubble")
const language = document.getElementById("language") 


let clicked = false
let initialTextColor
let initialBgColor

const changeHeaderColors = () => {
    const languageElement = document.querySelector(".language")
    

    if(!clicked) {
        initialTextColor = language.style.color
        initialBgColor = language.style.backgroundColor

        console.log(language.style.backgroundColor)

        logoPathAll.forEach(path => path.style.fill = "#004A4E")
        menuText.style.color = "#004A4E"
        line.style.background = "#004A4E"
        bubble.style.background = "#004A4E"
        language.style.background = "#004A4E"
        language.style.color = "#E6F5E4"
        
        
    } else {
        logoPathAll.forEach(path => path.style.fill = initialBgColor)
        menuText.style.color = initialBgColor
        line.style.background = initialBgColor
        bubble.style.background = initialBgColor
        language.style.background = initialBgColor
        language.style.color = initialTextColor
    }
  
  
}

menu.addEventListener("click", function(){
    // Change colors
    changeHeaderColors()


    if(!clicked) {
    expandedMenu.style.display = "block"
    mainContent.style.display = "none"
    document.body.style.minHeight = "100vh"
    this.querySelector("span:first-of-type").innerText = "uždaryti"
    
    bubble.innerHTML = 
    `
    <div class="x">
            <span class="line"></span>
            <span class="line"></span>
    </div>
    `;
    clicked = true

    } else {
    expandedMenu.style.display = "none"
    mainContent.style.display = "block"
    this.querySelector("span:first-of-type").innerText = "menu"
    bubble.innerHTML = ''
    clicked = false
    }

})

links.forEach((link, index) => {
link.addEventListener("mouseover", function() {

    // Reset cursor style for all links
    for (let x of links) {
    x.style.cursor = 'auto'; // Correct variable name

    // Reset Colors
    let span = x.querySelector("span");
    if (span) {
        span.style.color = defaultColor;
    }

    let svg = x.querySelector("svg");
    svg.style.transform = "rotate(0deg)";

    let fillElement = x.querySelector("svg .fill");
    fillElement.style.setProperty('fill', defaultColor);
    }

    // Add custom style for the hovered link
    const cursorImageUrl = colors[index].cursor; // Correct property name
    this.style.cursor = `url(${cursorImageUrl}), pointer`;
    console.log(this)
    console.log(this.style.cursor)
    header.style.cursor = `url(${cursorImageUrl}), pointer`;
    logo.style.cursor = `url(${cursorImageUrl}), pointer`;

    const selectedColor = colors[index].color;
    this.querySelector("span").style.color = selectedColor;

    let svg = this.querySelector("svg");
    svg.style.transform = "rotate(180deg)";

    let fillElement = this.querySelector("svg .fill");
    if (fillElement) {
    fillElement.style.setProperty('fill', selectedColor);
    }

    this.parentNode.parentNode.style.background = colors[index].background;
});
});
