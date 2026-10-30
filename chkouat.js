// 1. Le tableau global (Catalogue complet incluant les accessoires)
const coffeeProducts = [
  { id: "c1", name: "Espresso Intense", category: "Base", price: 2.50, image: "espresso.jpg" },
  { id: "c2", name: "Cappuccino Mousseux", category: "Classique", price: 4.00, image: "cappuccino.jpg" },
  { id: "c3", name: "Latte Caramel", category: "Gourmand", price: 4.50, image: "latte.jpg" },
  { id: "c4", name: "Flat White", category: "Classique", price: 3.80, image: "flatwhite.jpg" },
  { id: "c5", name: "Iced Matcha Latte", category: "Froid", price: 5.00, image: "matcha.jpg" },
  { id: "c6", name: "Cold Brew", category: "Froid", price: 4.20, image: "coldbrew.jpg" },
  { id: "c7", name: "Cookie Pépites", category: "Snack", price: 2.00, image: "cookie.jpg" },
  { id: "c8", name: "Mug Isotherme Noir", category: "Accessoire", price: 15.00, image: "mug.jpg" },
  { id: "c9", name: "Filtres Papier V60 (x100)", category: "Accessoire", price: 6.50, image: "filters.jpg" },
  { id: "c10", name: "Tote Bag 'Coffee Lover'", category: "Accessoire", price: 12.00, image: "totebag.jpg" }
];

// 2. Le tableau des produits dans le panier par défaut (avec un accessoire)
let coffeeCart = [
  { id: "c2", name: "Cappuccino Mousseux", price: 4.00 , quantity: 2, image: "cappuccino.jpg" },
  { id: "c3", name: "Latte Caramel", price: 4.50  , quantity: 1, image: "latte.jpg" },
  { id: "c8", name: "Mug Isotherme Noir", price: 15.00 , quantity: 1, image: "mug.jpg" }
];



//*********************** Create Cards PAge Chekout ******************************//



/*************************Partie Affichage************************** */
const listeCards=document.querySelector(".listeCards")


function createCards(item){
/*******Div Principale***************/
const card=document.createElement("div");
card.className="cards"
/******partie Image *********************/
const Img=document.createElement("img")
Img.className="cardsImg"
Img.src="assets/image/" +  item.image
/******Div 1:Nom et prenom  ************/
const div1=document.createElement("div")
div1.className="div1"
const cardsName=document.createElement("h4")
cardsName.className="cardsName"
cardsName.innerText=item.name
const cardsPrice=document.createElement("p")
cardsPrice.className="cardsPrice"
cardsPrice.innerText=item.price
div1.appendChild(cardsName)
div1.appendChild(cardsPrice)

/**********Div 2:Qantiti  et les button  ***********/


const div2=document.createElement("div")
div2.className="div2"
const cardsQuantity=document.createElement("span")
cardsQuantity.className="cardsQuantity"
cardsQuantity.innerText=item.quantity
const butPlus=document.createElement("button")
butPlus.className="But"
butPlus.textContent="+"
const butMoin=document.createElement("button")
butMoin.className="But"
butMoin.textContent="-"

div2.appendChild(butPlus)
div2.appendChild(cardsQuantity)
div2.appendChild(butMoin)

/************push in  div Pricipale *********/

card.appendChild(Img)
card.appendChild(div1)
card.appendChild(div2)



/********************************* Event Click sur les button */
butPlus.addEventListener("click",() => {
    
    let  quantity = ++item.quantity;
   cardsQuantity.textContent=quantity;
  affichage()
}
)

butMoin.addEventListener("click",()=>{
   if(item.quantity > 1){
let quantity=--item.quantity;
    
    cardsQuantity.textContent=quantity;
affichage()   
}
    
})

return card;

}









/*******************fonction d'affiche les elements******************/
const PrixTotalElement=document.querySelector(".prixTotale")

function affichage(){
   listeCards.innerHTML="" 
coffeeCart.forEach(Element => {
   
   const donneData=createCards(Element);
    listeCards.appendChild(donneData);
   PrixTotalElement.textContent=calculTotale()
    
});

}
 
affichage();





///*************Prix Totale */


function calculTotale(){
 let total=0;
    coffeeCart.forEach(element => {
        total +=element.price * element.quantity

    });
    return total;
}



////************************************Modal Rcherche*******************/
const ButModal=document.querySelector(".modale")



      const list = document.querySelector('.list')

      const inputRecherche = document.querySelector('input');

     
      inputRecherche.addEventListener('input' , () =>{

        
      const search = inputRecherche.value.toLowerCase(); // ""
          list.innerHTML  = "" ;  
   if(search ===""){//true
    list.innerHTML="<p>choisir un choix</p>"
    } 
      

    else{
        const result =  coffeeProducts.filter(product => 
          product.name.toLowerCase().includes(search)

      );
      

      result.forEach(product => {
        const productElement = document.createElement('div');
        productElement.className="divPracipale"

        const productname=document.createElement('span')
        productname.className="nome"

        const productPrice=document.createElement('span')
        productPrice.className="price"

        const buttonModal=document.createElement('button')
        buttonModal.className="buutModel"
        
        const spanButt=document.createElement('span')
        spanButt.textContent= " ajouter" ;
        buttonModal.appendChild(spanButt)



        productname.innerHTML = product.name ;
        productPrice.innerHTML=product.price;

       
        productElement.appendChild(productname);
        productElement.appendChild(productPrice);
        productElement.appendChild(buttonModal);

        list.appendChild(productElement);


      }) 
    }
     
     

      })



//******************************Event sur model********** */


const dialog=document.querySelector("#dialog")

ButModal.addEventListener("click",()=>{
    dialog.showModal()
})





/********************fonction create elemnt Pour ajouter***********/

function createElement(){

const card=document.createElement("div");
card.className="cards"
/******partie Image *********************/
const Img=document.createElement("img")
Img.className="cardsImg"
Img.src="assets/image/" +  item.image
/******Div 1:Nom et prenom  ************/
const div1=document.createElement("div")
div1.className="div1"
const cardsName=document.createElement("h4")
cardsName.className="cardsName"
cardsName.innerText=item.name
const cardsPrice=document.createElement("p")
cardsPrice.className="cardsPrice"
cardsPrice.innerText=item.price
div1.appendChild(cardsName)
div1.appendChild(cardsPrice)


card.appendChild(Img)
card.appendChild(div1)

    
};




///*******************************regex in input ******************************************** */
const Prenomlement=document.querySelector("#Prenom").value
const Nom=document.querySelector("#Nom").value
const email=document.querySelector("#email").value
const nmeroCarte=document.querySelectorAll("#nmeroCarte").values


//*********************form******************** */
const formElemnts=document.querySelector(".form")
formElemnts

////*****************Email */
const messageElemen=document.querySelector(".message")
const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
if (regex.test(email)) {
    messageElemen.textContent= "Valid Email address.";
} else {
    messageElemen.textContent="Invalid Email address.";
}
console.log(messageElemen)
//*************card */


