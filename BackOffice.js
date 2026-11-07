const inputNomElement=document.querySelector("#validationCustom01")
const inputPriceElement=document.querySelector("#inputPrix")
const inputUrlImage=document.querySelector("#inputUrl")
const inputPorcentagElement=document.querySelector("#inputPorcentage")
const inputDateFinElement=document.querySelector("#inputDate")
const inputDescriptionElemnet=document.querySelector("#inputDescription")

const ButNext=document.querySelector("#nextbtn")

const NomChamp=document.querySelector('.nomChamp')
const PriceChamp=document.querySelector('.priceChamp')
const UrlChamp=document.querySelector('.urlChamp')
const PorcentageChamp=document.querySelector('.PorcentageChamp')
const DateChamp=document.querySelector('.DateChamp')

 const Partie1=document.querySelector("#section1")
 const Partie2=document.querySelector("#section2")
                    
const inputPromotion=document.querySelector(".InputPromotion")
 
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
 ChekDate.textContent=""
 if(inputPromotion.checked){
   if(ValidePorcentage(inputPorcentagElement.value)==false){
        ChekPorcentage.textContent="champs Invalide"
          ChekPorcentage.style.color = "red"
        PorcentageChamp.appendChild(ChekPorcentage)
 }
 
          
   if(ValideDateFin(inputDateFinElement.value)==false){
          ChekDate.textContent="champs Invalide"
         ChekDate.style.color = "red"
       DateChamp.appendChild(ChekDate)
   }


   }
    
        


   if((ValideName(inputNomElement.value)==true) &&(ValidePrice(inputPriceElement.value)==true)&& (ValideUrlImage(inputUrlImage.value)==true)  &&   ( !inputPromotion.checked || ((ValidePorcentage(inputPorcentagElement.value)==true)&& (ValideDateFin(inputDateFinElement.value)==true))))
        {
  Partie1.classList.add("hideen")
    Partie2.classList.remove("hideen")
        }
        affichage()
  
    
})





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
 ///RECUPERATION DES affichage Html  Premier Section Pour Stoker//////////////////////
//  SECTION1
const AffichageImage=document.querySelector("#Affichage-img")
 const affichageNome=document.querySelector(".Affichage-Nom")
 const  affichagePrix=document.querySelector(".Affichage-Prix")
 const  AfichegeDescription=document.querySelector(".Afichege-Description")
 const AfichagePorcentage=document.querySelector(".Afichage-Porcentage")
 const AffichageDate=document.querySelector(".Affichage-Date")

// SECTION2
const AffichageOrigineGrains=document.querySelector(".Affichage-OrigineGrains")
const affichageIntensite=document.querySelector(".affichage-Intensite")
const AffichageTemperature=document.querySelector(".Affichage-Temperature")


const Afichagesmall=document.querySelector(".Afichage-small")
const AfichageMedieum=document.querySelector(".Afichage-Medieum")
const AfichageLarge=document.querySelector(".Afichage-Large")
const AfichageVache=document.querySelector(".Afichage-Vache")
const AfichageAvoine=document.querySelector(".Afichage-Avoine")
const AfichageSoja=document.querySelector(".Afichage-Soja")
const AfichageAmande=document.querySelector(".Afichage-Amande")
const AfichageVanille=document.querySelector(".Afichage-Vanille")
const AfichageCaramel=document.querySelector(".Afichage-Caramel")
const AfichageNoisette=document.querySelector(".Afichage-Noisette")



function affichage(){

// SECTION 1
    AffichageImage.src=inputUrlImage.value
affichageNome.textContent=inputNomElement.value
affichagePrix.textContent=inputPriceElement.value +"DH"
AfichegeDescription.textContent=inputDescriptionElemnet.value

  AfichagePorcentage.textContent=""
  AffichageDate.textContent= ""
if(inputPromotion.checked){
    AfichagePorcentage.textContent=" Porcentage " +  inputPorcentagElement.value +"%"
AffichageDate.textContent= "Date Fin  " + inputDateFinElement.value
}



// SECTION2

AffichageOrigineGrains.textContent= selectForm.options[selectForm.selectedIndex].value

affichageIntensite.textContent="Inrensite"+inputRange.value

AffichageTemperature.textContent=""
if(inputChaude.checked){
    AffichageTemperature.textContent=inputChaude.value
}
if(inputClace.checked){
AffichageTemperature.textContent=inputClace.value
}



Afichagesmall.textContent=""
if(inputChek1.checked){
Afichagesmall.textContent=inputChek1.value
}
AfichageMedieum.textContent=""
if(inputChek2.checked){
AfichageMedieum.textContent=inputChek2.value
}
    AfichageLarge.textContent=""
if(inputChek3.checked){
    AfichageLarge.textContent=inputChek3.value
}
AfichageVache.textContent=""
if(inputOption1.checked){
    AfichageVache.textContent=inputOption1.value
}

AfichageAvoine.textContent=""
if(inputOption2.checked){
    AfichageAvoine.textContent=inputOption2.value
}
  AfichageSoja.textContent=""
if(inputOption3.checked){
    AfichageSoja.textContent=inputOption3.value
}
  AfichageAmande.textContent=""
if(inputOption4.checked){
    AfichageAmande.textContent=inputOption4.value
}
AfichageVanille.textContent=""
if(inputSuplement1.checked){
    AfichageVanille.textContent=inputSuplement1.value
}
AfichageCaramel.textContent=""
if(inputSuplement2.checked){
    AfichageCaramel.textContent=inputSuplement2.value
}
AfichageNoisette.textContent=""
if(inputSuplement3.checked){
    AfichageNoisette.textContent=inputSuplement3.value
}


}



    






const Partie3=document.querySelector("#section3")


const butEnregestrer=document.querySelector("#btnEregister")
const butRetourP1=document.querySelector("#btnReteurP1")



butRetourP1.addEventListener("click",()=>{
     
    
             Partie2.classList.add("hideen")
             Partie1.classList.remove("hideen")
    
        
  
})




const selectForm=document.querySelector("#select")


const inputRange=document.querySelector(".inputRange")
const inputChaude=document.querySelector("#flexRadioDefault1")
const inputClace=document.querySelector("#flexRadioDefault2")

const inputChek1=document.querySelector("#btncheck1")
const inputChek2=document.querySelector("#btncheck2")
const inputChek3=document.querySelector("#btncheck3")
const inputOption1=document.querySelector("#btncheck4")
const inputOption2=document.querySelector("#btncheck5")
const inputOption3=document.querySelector("#btncheck6")
const inputOption4=document.querySelector("#btncheck7")

const inputSuplement1=document.querySelector("#btncheck8")
const inputSuplement2=document.querySelector("#btncheck9")
const inputSuplement3=document.querySelector("#btncheck10")


const SlectMessage=document.querySelector(".MessageSelect")
const TailleMeassage=document.querySelector(".MessageTaille")
const OptionMessage=document.querySelector(".OptionMessage")
const SuplementMessage=document.querySelector(".SuplementMessage")


let CheksSelect=document.createElement('p')
let ChekRange=document.createElement('p')
let CheTaille=document.createElement('p')
let CheOption=document.createElement('p')
let CheSuplement=document.createElement('p')



butEnregestrer.addEventListener("click",()=>{
         CheksSelect.textContent=""
     if(selectForm.value==""){
       CheksSelect.textContent="champs Invalide"
          CheksSelect.style.color = "red"
          SlectMessage.appendChild(CheksSelect)
        }
        CheTaille.textContent=""
        if(inputChek1.checked==false && inputChek2.checked==false && inputChek3.checked==false){
         CheTaille.textContent="champs Invalide"
         CheTaille.style.color = "red"
         TailleMeassage.appendChild(CheTaille)

        }
           CheOption.textContent=""
       if (inputOption1.checked==false && inputOption2.checked==false && inputOption3.checked==false && inputOption4.checked==false){
        CheOption.textContent="champs Invalide"
         CheOption.style.color = "red"
         OptionMessage.appendChild(CheOption)

       }
         CheSuplement.textContent=""
       if(inputSuplement1.checked==false && inputSuplement2.checked==false && inputSuplement3.checked==false){
          CheSuplement.textContent="champs Invalide"
         CheSuplement.style.color = "red"
         SuplementMessage.appendChild(CheSuplement)
       }
       
    if((selectForm.value !=="")
&&(inputChek1.checked==true || inputChek2.checked==true || inputChek3.checked==true)
&& (inputOption1.checked==true ||  inputOption2.checked==true ||  inputOption3.checked==true ||  inputOption4.checked==true)
&& (inputSuplement1.checked==true ||  inputSuplement2.checked==true ||  inputSuplement3.checked==true) ){
                                Partie2.classList.add("hideen")
                                Partie3.classList.remove("hideen")
}
        

        
       affichage()


    
})

