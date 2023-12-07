const buttons = document.querySelectorAll("button")
const tabs = document.querySelectorAll(".tab")
const contentLeft = document.querySelectorAll(".content-left")

for(let i = 0; i < buttons.length; i++){
    buttons[i].addEventListener("click", function(){
        // Remove active class from buttons
        for(let x of buttons){
            x.classList.remove("active")
        }
        // Add active class to button
        this.classList.add("active")

        // Hide tabs
        for(let x of tabs){
            x.classList.remove("opened")
        }

        // Show tab
        tabs[i].classList.add("opened")

        // Tabs animation
        for(let x of contentLeft){
            x.classList.remove("content-left-animation")
        }

        setTimeout(() => {
            tabs[i].querySelector(".content-left").classList.add("content-left-animation")
        }, 200)
    })
}

// First load
buttons[0].classList.add("active")
tabs[0].classList.add("opened")
tabs[0].querySelector(".content-left").classList.add("content-left-animation")