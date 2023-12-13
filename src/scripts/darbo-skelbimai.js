const sectionJobs = document.querySelector(".section-jobs")
const otherJobs = document.querySelector(".other-jobs")
const jobs = document.querySelectorAll(".job")
console.log(jobs.length)

if(!jobs.length){
    otherJobs.innerHTML = ""
    sectionJobs.innerHTML =
    `
    <div class="jobs-main" >  
        <div class="no-job" style="max-width: 1400px">  
            <h2 class="no-job-title">Šiuo metu darbo skelbimų nėra</h2>
            <p class="no-job-description">Jorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. </p>
            <a class="button-outline" href="kontaktai.html">
                <span>Kontaktai</span>
            <img class="button-outline-icon" src="/karjera/arrow.svg" alt="">
          </a>
        </div>
    </div>
    `
}