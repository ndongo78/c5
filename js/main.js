
import {logger,factory} from "./functions.js";

import hello  from "./functions.js";
document.title="C5"


/*const myPara1=document.getElementById(("paragraph"))
const myPrara=document.querySelector("p")
const mesParagraphs=document.querySelectorAll("p")
const myPrara2=document.getElementsByTagName("para")
const myPrara3=document.getElementsByTagName("p")*/

// document.body.style.background="#000"

//? selectionner tous les li disponible dans page html

/*const list=document.querySelectorAll("li");*/
//const list=document.getElementsByTagName("li")
const firstLi=document.querySelector(("ul :first-child"))
 /*firstLi.textContent="Cerise";
firstLi.innerText="Banana"*/
/*firstLi.innerHTML="Banana"*/
// const myPrara=document.querySelector("p")
// myPrara.innerText="Bonjour les gens";
// myPrara.style.background="red";
// myPrara.style.fontSize="20px"

//creer une div
/*const newDiv=document.createElement("div");
newDiv.setAttribute("id","newDiv");
newDiv.innerText="Bonjour je suis creer depuis javascript"

const body=document.body;

body.append(newDiv)

const div=document.getElementById("newDiv")*/

const body=document.body;
const legumes=document.getElementById("legumes")
const fruits=document.getElementById("fruits")
/*const firstChild=body.firstElementChild;*/
//methode de recuperer des enfants
/*const firstChild=body.children[0]*/
/*const firstLegume=legumes.lastElementChild;
*/
/*const childrens=fruits.children;

Array.from(childrens).forEach(element =>element.style.background="green")*/

/*const newLi=document.createElement("li")
newLi.innerText="Banana";
newLi.style.color="green"

fruits.after(newLi)
fruits.children[0].remove()*/
/*fruits.insertAdjacentElement("afterend",newLi)*/

//? creer un list de noms de trois  de animaux inserer les dans  dans div avec la classe element1

/*const myDiv=document.querySelector((".element1"));
const ul=document.createElement("ul")*/


/*const li1=document.createElement("li");
li1.innerText="Chien"
const li2=document.createElement("li");
li2.innerText="Chat"
const li3=document.createElement("li");
li3.innerText="Souri"
ul.append(li1)
ul.append(li2)
ul.append(li3)*/
/*
const li1=factory("li","Chat")
const li2=factory("li","Souri")
const li3=factory("li","Chien")

ul.append(li1)
ul.append(li2)
/!*ul.append(li3)*!/
/!*ul.prepend(li3)*!/
ul.insertAdjacentElement("afterbegin",li3)
myDiv.append(ul)
*/

/*ul.children[1].style.color="red"*/
/*li1.nextElementSibling.style.color="red";*/
/*li1.remove()*/

/*const myLink=document.querySelector("a")
myLink.setAttribute("href","https://facebook.com")*/
/*const img=document.querySelector("img")
/!*img.setAttribute("src","../logo.jpg")*!/
img.alt="logo"*/

/*
//cette fonction permet de detecter quel touche a été clicker

const btn=document.querySelector("button")
const myDiv=document.querySelector(".element1")

let y=0;
let x=0;

window.addEventListener("keyup",(e)=>{
    switch (e.key) {
        case  "ArrowDown":
            y +=5;
            myDiv.style.top= y+"px";
            break;
        case  "ArrowUp":
            y -=5;
            myDiv.style.top= y+"px";
            break;
        case  "ArrowRight":
            x +=5;
            myDiv.style.left= x+"px"
            break;
        case  "ArrowLeft":
            x -=5;
            myDiv.style.left= x+"px"
            break;
    }
})
*/
//? lorsque le user click sur le button ajouter un nouveau fruit dans la list des fruits
//? inserer l'element en premier position de la list

//selction le ul
/*
const monUl=document.querySelector("ul");
const btnEl=document.querySelector("button")

/!*element.addEventListener(evementDuDom,(event)=>{})*!/

btnEl.addEventListener("click",(event)=>{
  /!*  const newFruit=document.createElement("li")
    newFruit.innerText="Banana";
    monUl.prepend(newFruit)*!/
    //methode2 avec la reutilisablite du code ou fonction factory
    const newFruit=factory("li","banana")
    monUl.prepend(newFruit)
    /!*document.body.style.backgroundColor="lightgreen"*!/
})
btnEl.addEventListener("mouseover",(event)=>{
    document.body.style.backgroundColor="lightgreen"
})
btnEl.addEventListener("mouseleave",(event)=>{
    document.body.style.backgroundColor="#ffff"
})
*/

const form=document.querySelector("form")
const formInput=document.querySelector("input")
const monUl=document.querySelector("ul");
// recuperer les donnees saisi dans un input
/*formInput.addEventListener("change",(e)=>{
    logger(formInput.value)
})*/

//recupérer les donneees des input lorsque le form est submit et ajouter le nouveau element dans le dom
form.addEventListener("submit",(e)=>{
    e.preventDefault();
    const newFruit =factory("li",formInput.value)
    const span=factory("span","x")
    span.setAttribute("id","delete")
    span.addEventListener("click",(e)=>{
        e.currentTarget.parentNode.remove()
    })
    newFruit.append(span)
    monUl.prepend(newFruit)
    formInput.value="";
});

/*const allSpan=document.querySelectorAll("span");
logger(allSpan)

allSpan.forEach(element=>element.addEventListener("click",(e)=>alert("click")))*/

/*allSpan.forEach(span=>{
    logger(span)
    span.addEventListener("click",(event)=>{
        /!*span.parentNode.remove()*!/
        event.currentTarget.parentNode.remove();
    })
})*/






