const img = document.createElement("img");
const ul = document.getElementById("ul");
const btn =document.querySelector(".btn")


const ShowImg = ()=>{
fetch("https://xkcd.now.sh/?comic=latest")
.then(res => res.json())
.then(data =>{ img.src =data.img
ul.appendChild(img)})

.catch(er => console.log(er));
}
btn.addEventListener("click", ShowImg);