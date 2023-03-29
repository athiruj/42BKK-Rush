
const about_nav = document.getElementById("about_nav")
const skills_nav = document.getElementById("skills_nav")
const contacts_nav = document.getElementById("contacts_nav")

const about = document.getElementById("about")
const contacts = document.getElementById("contacts")
const skills = document.getElementById("skills")

console.log(about)

about_nav.addEventListener("click", ()=>{
  
  about.style.display = "block"; 
  contacts.style.display = "none";
  skills.style.display = "none";
})

skills_nav.addEventListener("click", ()=>{
  about.style.display = "none";
  skills.style.display = "flex";
  contacts.style.display = "none";
})

contacts_nav.addEventListener("click", ()=>{
  
  about.style.display = "none";
  skills.style.display = "none";
  contacts.style.display = "flex";
})
