

export const logger =(text)=>console.log(text);

export  default function hello(message){
    alert(message)
}

export const factory=(li,text)=>{
    const newLi=document.createElement(li);
    newLi.innerText=text;
    return newLi;
}