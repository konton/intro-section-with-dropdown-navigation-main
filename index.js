const featurebtn = document.getElementById("features")
const companybtn = document.getElementById("company")
const fcon = document.getElementById("fcontent")
const ccon = document.getElementById("ccontent")
const login = document.getElementById("id")
const register = document.getElementById("register")
const mfeaturebtn = document.getElementById("mfeatures")
const mcompanybtn = document.getElementById("mcompany")
const mfcon = document.getElementById("mfcontent")
const mccon = document.getElementById("mccontent")

featurebtn.addEventListener("click", (e)=>{
    e.preventDefault()
    ccon.classList.add('hide')
    fcon.classList.toggle('hide')
})

companybtn.addEventListener('click', (e)=>{
    e.preventDefault();
    fcon.classList.add('hide')
    ccon.classList.toggle('hide')
})

mfeaturebtn.addEventListener("click", (e)=>{
    e.preventDefault()
    mccon.classList.add('hide')
    mfcon.classList.toggle('show')
})

mcompanybtn.addEventListener('click', (e)=>{
    e.preventDefault();
    mfcon.classList.add('hide')
    mccon.classList.toggle('show')
})

function openNav() {
    document.getElementById("mySidenav").style.width = "200px";
}
  
  /* Set the width of the side navigation to 0 */
function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}
