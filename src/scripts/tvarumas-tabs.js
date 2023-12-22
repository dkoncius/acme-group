const openCloseBtns = document.querySelectorAll(".open-close");
const tabsContent = document.querySelectorAll(".tab-content");
const isOpen = new Array(openCloseBtns.length).fill(false); // Array to track open state

openCloseBtns.forEach((btn, index) => {
    btn.addEventListener("click", function() {
        if (isOpen[index]) {
            // Close the tab
            btn.classList.remove("active");
            tabsContent[index].classList.remove("show");
            isOpen[index] = false; // Update the open state
        } else {
            // Open the clicked tab
            this.classList.add("active");
            tabsContent[index].classList.add("show");
            isOpen[index] = true; // Update the open state
        }
    });
});

// First load
openCloseBtns[0].classList.add("active")
tabsContent[0].classList.add("show")
isOpen[0] = true;



// const openCloseBtns = document.querySelectorAll(".open-close");
// const tabsContent = document.querySelectorAll(".tab-content");

// openCloseBtns.forEach((btn, index) => {
//     btn.addEventListener("click", function() {
//         openCloseBtns.forEach((btn, idx) => {
//             btn.classList.remove("active");
//             tabsContent[idx].classList.remove("show");
//         });

//         // Open the clicked tab
//         this.classList.add("active");
//         tabsContent[index].classList.add("show");
//     });
// });

// // First load
// openCloseBtns[0].classList.add("active")
// tabsContent[0].classList.add("show")