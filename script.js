
const config = {
  base: {
    espresso: { name: "Espresso", price: 18 +"DH"  },
    filtre: { name: "Filtre", price: 16 +"DH" }
  },
  taille: {
    s: { name: "S · 150 ml", price: 1 +"DH"  },
    m: { name: "M · 250 ml", price: 4 +"DH" },
    l: { name: "L · 350 ml", price: 8 +"DH" }
  },
  lait: {
    vache: { name: "Lait de vache", price: 0 +"DH" },
    avoine: { name: "Lait d'avoine", price: 4 +"DH" },
    amande: { name: "Lait d'amande", price: 5  +"DH"}
  },
  supplements: {
    caramel: { name: "Caramel", price: 3 +"DH"},
    vanille: { name: "Vanille", price: 3 +"DH" }
  }
};
const baseNames =document.querySelectorAll(".box-1 div label .option-name");
baseNames[0].innerHTML=config.base.espresso.name;
baseNames[1].innerHTML=config.base.filtre.name;

const basePrice=document.querySelectorAll(".box-1 div label .option-price");
basePrice[0].innerHTML=config.base.espresso.price;
basePrice[1].innerHTML=config.base.filtre.price;

const tailleNames =document.querySelectorAll(".box-2 div label .taille-name");
tailleNames[0].innerHTML=config.taille.s.name;
tailleNames[1].innerHTML=config.taille.m.name;
tailleNames[2].innerHTML=config.taille.l.name;

const taillePrice =document.querySelectorAll(".box-2 div label .taille-price");
taillePrice[0].innerHTML=config.taille.s.price;
taillePrice[1].innerHTML=config.taille.m.price;
taillePrice[2].innerHTML=config.taille.l.price;

const laitNames=document.querySelectorAll(".box-3 div label .lait-Name");
laitNames[0].innerHTML=config.lait.vache.name;
laitNames[1].innerHTML=config.lait.avoine.name;
laitNames[2].innerHTML=config.lait.amande.name;

const laitPrice=document.querySelectorAll(".box-3 div label .lait-price");
laitPrice[0].innerHTML=config.lait.vache.price;
laitPrice[1].innerHTML=config.lait.avoine.price;
laitPrice[2].innerHTML=config.lait.amande.price;

const supplementNames=document.querySelectorAll(".box-4 div label .Touche-Name");
supplementNames[0].innerHTML=config.supplements.caramel.name;
supplementNames[1].innerHTML=config.supplements.vanille.name;

const supplementPrice=document.querySelectorAll(".box-4 div label .Touche-Price");
supplementPrice[0].innerHTML=config.supplements.caramel.price;
supplementPrice[1].innerHTML=config.supplements.vanille.price;

















 





 
 
 
 
 
 
let label = document.querySelectorAll('label');




function click(event){
    for(let i =0 ;i< label.length ; i++){
        label[i].parentElement.style.outline = "none";
        label[i].parentElement.style.background = "#fff";
    }
    event.target.parentElement.parentElement.style.outline = "5px solid #394B32  " ;
    event.target.parentElement.parentElement.style.cssText = `
        background-color : #E9EEDC;
    ` 


    console.log(event);
}

for(let i = 0 ;i < label.length ; i++){
        label[i].firstElementChild.onclick = click;
}

