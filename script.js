
const config = {
  base: {
    espresso: { name: "Espresso", price: 18 + "DH"  },
    filtre: { name: "Filtre", price: 16 +"DH" }
  },
  taille: {
    s: { name: "S · 150 ml", price: 1 +"DH"  },
    m: { name: "M · 250 ml", price: 4 +"DH" },
    l: { name: "L · 350 ml", price: 8 +"DH" }
  },
  lait: {
    vache: { name: "Lait de vache", price: 1 +"DH" },
    avoine: { name: "Lait d'avoine", price: 4 +"DH" },
    amande: { name: "Lait d'amande", price: 5  +"DH"}
  },
  supplements: {
    caramel: { name: "Caramel", price: 3 +"DH"},
    vanille: { name: "Vanille", price: 3 +"DH" }
  }
};

// const baseNames=document.querySelectorAll(".base-name");
// baseNames[0].textContent=config.base.espresso.name;
// baseNames[1].textContent=config.base.filtre.name;

// const tailleName=document.querySelectorAll(".taille-name");
// tailleName[0].textContent=config.taille.s.name;
// tailleName[1].textContent=config.taille.m.name;

for (const config_key in config) {
  
for (const key in config[config_key]) {
      
  const Names=document.querySelector(`.${config_key}-${key}-name` );
    if( Names)
Names.innerHTML=config[config_key][key].name;
    const price=document.querySelector(`.${config_key}-${key}-price` );

      if(price)
price.textContent=config[config_key][key].price;

}

}





// let ajouterPanier=document.querySelector(".ajouterPanier");
// let creeAutreCafee=document.querySelector(".but-pg2");

// function nonePage1(event){
//     event.preventDefault();
//     page1.remove()
// }
// ajouterPanier.addEventListener("click",nonePage1);

// function nonePage2(){
//     page2.remove()
// }
// creeAutreCafee.addEventListener("click",nonePage2);
let page1 = document.querySelector(".main-Principal");
let page2 = document.querySelector(".main-secondair");
let pag12 =document.querySelector(".last-main");
let ajouterPanier=document.querySelector(".ajouterPanier");


 ajouterPanier.addEventListener("click",() => {
  
    page1.classList.add("hidden");
    pag12.classList.add("hidden");
    page2.classList.remove("hidden");
 })

 

 let creeAutreCafee=document.querySelector(".but-pg2");

 creeAutreCafee.addEventListener("click",() => {
  
    page1.classList.remove("hidden");
    pag12.classList.remove("hidden");
    page2.classList.add("hidden");
 })
    













// for (const config_key in config) {
//     for (const key in config){
//         const Nam=document.querySelector(`.${config_key}-${key}-name`);
//         if(Nam)
//             Nam.innerHTML=config[config_key][key].name;
//         const pri=document.querySelector(`.${config_key}-${key}-price`);
//         if(pri)
//             pri.innerHTML=config[config_key][key].price;
//     }
    
    
// }



let summ=document.querySelector('.summ');
let prixTotale=document.querySelector(".prixTotal");

let inputs = document.querySelectorAll('input');

inputs.forEach(inp => {
    inp.addEventListener("change",claculeOption);
});

let orderTicket = [];
  
function claculeOption(event){
    // select all checked items
    let selectedItems = document.querySelectorAll("input")
    let sum = 0 ;
    orderTicket = [];
    selectedItems.forEach(input => {
        if(input.checked) {
            // get price
            let name = input.parentElement.querySelector("span").textContent;
            let price = Number(input.parentElement.querySelector("p").textContent.replace("DH",""));
            orderTicket.push({name, price})
            sum += price;
        }
    })
    // sum
    summ.textContent= sum + " ,00 DH";
    prixTotale.textContent=sum + " ,00 DH";

    // console.log(sum, orderTicket);
    //
}
















 





 
 
 
 
 
 



let label = document.querySelectorAll('label');




function click(event){
    for(let i =0 ;i< label.length ; i++){
        label[i].parentElement.style.outline = "none";
        label[i].parentElement.style.background = "#fff";
    }
    event.target.parentElement.parentElement.style.outline = "5px solid #394B32  " ;
    event.target.parentElement.parentElement.style.cssText = `
        background-color : #E9EEDC ;
    ` 


    console.log(event);
}

for(let i = 0 ;i < label.length ; i++){
        label[i].firstElementChild.onclick = click;
}

