const dropdownMenu = document.getElementById("dropdownMenu")
const dropdownMenuBottom = document.getElementById("dropdownMenuBottom")



dropdownMenu.addEventListener("click", () => {
    dropdownMenuBottom.classList.toggle("show")
})