const inputNomElement=document.querySelector("#validationCustom01")
const inputPriceElement=document.querySelector("#inputPrix")
const inputUrlImage=document.querySelector("#inputUrl")
const inputPorcentagElement=document.querySelector("#inputPorcentage")
const inputDateFinElement=document.querySelector("#inputDate")

const ButNext=document.querySelector("#nextbtn")

const NomChamp=document.querySelector('.nomChamp')
const PriceChamp=document.querySelector('.priceChamp')
const UrlChamp=document.querySelector('.urlChamp')
const PorcentageChamp=document.querySelector('.PorcentageChamp')
const DateChamp=document.querySelector('.DateChamp')

 const Partie1=document.querySelector("#section1")
 const Partie2=document.querySelector("#section2")


let CheksName=document.createElement('p')
    
let ChekPrice=document.createElement('p')

let ChekUrl=document.createElement('p')

let ChekPorcentage=document.createElement('p')

let ChekDate=document.createElement('p')




ButNext.addEventListener("click",()=>{
    // console.log("salam")
          CheksName.textContent=""
        if(ValideName(inputNomElement.value)==false){
         CheksName.textContent="champs Invalide"
          CheksName.style.color = "red"
           NomChamp.appendChild(CheksName)
    }

         ChekPrice.textContent=""
    if(ValidePrice(inputPriceElement.value)==false){
        ChekPrice.textContent="champs Invalide"
          ChekPrice.style.color = "red"
         PriceChamp.appendChild(ChekPrice)
    }
          ChekUrl.textContent=""
    if(ValideUrlImage(inputUrlImage.value)==false){
          ChekUrl.textContent="champs Invalide"
          ChekUrl.style.color = "red"
        UrlChamp.appendChild(ChekUrl)
    }
         ChekPorcentage.textContent=""
   if(ValidePorcentage(inputPorcentagElement.value)==false){
        ChekPorcentage.textContent="champs Invalide"
          ChekPorcentage.style.color = "red"
        PorcentageChamp.appendChild(ChekPorcentage)
   }
         ChekDate.textContent=""
   if(ValideDateFin(inputDateFinElement.value)==false){
          ChekDate.textContent="champs Invalide"
         ChekDate.style.color = "red"
       DateChamp.appendChild(ChekDate)
   }

   if((ValideName(inputNomElement.value)==true)&& (ValidePrice(inputPriceElement.value)==true)&& (ValideUrlImage(inputUrlImage.value)==true) &&(ValidePorcentage(inputPorcentagElement.value)==true)&& (ValideDateFin(inputDateFinElement.value)==true))
        {
  Partie1.classList.add("hideen")
    Partie2.classList.remove("hideen")
        }
  
    
})


  



   ///Valid Regex//////
function ValideName(name){
     const regex = /^[A-Za-z]+$/;
     return regex.test(name)
}
// console.log(ValideName("anas"))
function ValidePrice(price){
    const regex = /^(?!0+$)\d+(\.\d+)?$/;
    return regex.test(price.trim())
}
function ValideUrlImage(Url){
    const regex = /(https?:\/\/[^\s"']+\.(?:jpg|jpeg|png|gif|webp|svg))/
    return regex.test(Url)
}
function ValidePorcentage(Porcentage){
      const regex = /^(100(\.0{1,2})?|(\d{1,2}(\.\d{1,2})?))$/
      return regex.test(Porcentage.trim())

}
function ValideDateFin(date){
    if(date==""){
        return false}
        
    const dateNew= new Date();
    const dateFin=new Date(date);
    return !(dateFin<dateNew)
    // if (){
    //  return false
    // }
    // else{
    //     return true;
    // }

}


const inputPromotion=document.querySelector(".InputPromotion")
const DivPorcentage=document.querySelector("#divPorcentage")
const DivDate=document.querySelector("#DivDate")

inputPromotion.addEventListener("change",()=>{
    if(inputPromotion.checked){
          DivPorcentage.classList.remove("hideen")
   DivDate.classList.remove("hideen")
    }
    else{
          DivPorcentage.classList.add("hideen")
   DivDate.classList.add("hideen")
    }
 
})
    






const Partie3=document.querySelector("#section3")
const butEnregestrer=document.querySelector("#btnEregister")
const butRetourP1=document.querySelector("#btnReteurP1")

butRetourP1.addEventListener("click",()=>{
    Partie2.classList.add("hideen")
    Partie1.classList.remove("hideen")
})

butEnregestrer.addEventListener("click",()=>{
    Partie2.classList.add("hideen")
    Partie3.classList.remove("hideen")
})

