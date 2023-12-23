const dropdownMenu = document.getElementById("dropdownMenu")
const dropdownMenuBottom = document.getElementById("dropdownMenuBottom")



dropdownMenu.addEventListener("click", () => {
    dropdownMenu.classList.toggle("show")
    dropdownMenuBottom.classList.toggle("show")
})