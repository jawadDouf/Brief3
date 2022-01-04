const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.smallMenu');
    burger.addEventListener('click',() =>{
      nav.classList.toggle('active');
    });
}
navSlide();
//Functions
function carsCreator(i,src,carName,carCarburant,carBoite,tarif,type){
  const oneCar = document.querySelector('#invisibleCar');
  const extraCar = oneCar.cloneNode(true);
  mainDiv.append(extraCar);
  extraCar.setAttribute("id",i);
  const imgSelector = "#"+i+ "> img";
  const image = document.querySelector(imgSelector);
  image.setAttribute("src",src);
  const carNameSelector = "#" + i +"> h6";
  const carName2 = document.querySelector(carNameSelector);
  carName2.textContent = carName;
  const carbSelector = "#"+i+"> .carburant";
  const carburantFeature = document.querySelector(carbSelector);
  carburantFeature.textContent =carCarburant;
  const boiteSelector = "#"+i+" > .boite";
  const boite = document.querySelector(boiteSelector);
  boite.textContent = carBoite;
  const tarifSelector = "#"+i+"> #tarifPerDay";
  const b = document.querySelector(tarifSelector);
  b.textContent = tarif;
  const typeSelector = "#"+i+"> #type";
  const typeCar = document.querySelector(typeSelector);
  typeCar.textContent = type;
  typeCar.style.display = "none";
  listOfCars.push(extraCar);
}
function filterEvent(filterBy,filter,name,selector){
    filterBy.addEventListener('click' , () => {
      filter.innerHTML =name;
      filter.style.color = "#D93600";
      for(let i = 0;i<listOfCars.length;i++){
         const type= listOfCars[i].querySelector(selector);  
        if(type.innerHTML != name){
          listOfCars[i].remove();
        }
      }
    })
    }
//select elements from the html page
const mainDiv = document.querySelector('#listOfCars');
var listOfCars = Array.from(mainDiv.children);
const subMenuCar = document.querySelector('.subMenuCar');
const carburantFilter = document.querySelector('#filterCar');
const essence = document.querySelector('.subMenuCar > #essence'); 
const diesel = document.querySelector('.subMenuCar > #diesel'); 
const electrique = document.querySelector('.subMenuCar > #electrique'); 
const hybrid = document.querySelector('.subMenuCar > #hybrid'); 
const subMenuVit= document.querySelector('.subMenuVit');
const boiteFilter = document.querySelector('#filterVit');
const manuelle = document.querySelector('.subMenuVit> #manuelle'); 
const automatique = document.querySelector('.subMenuVit > #automatique'); 
const motocycle = document.querySelector('.subMenu > #j');   
const vehiculeFilter = document.querySelector('#filterVeh');
const compact = document.querySelector('.subMenu > #compact');   
const citadin = document.querySelector('.subMenu > #citadin');  
const utilitaire = document.querySelector('.subMenu > #utilitaire');  
const berlin = document.querySelector('.subMenu > #berlin');  
const camion = document.querySelector('.subMenu > #camion');  
const engin = document.querySelector('.subMenu > #engin');  
//the code
filterEvent(motocycle,vehiculeFilter,"Motocycle","#type");
filterEvent(compact,vehiculeFilter,"Compact","#type");
filterEvent(citadin,vehiculeFilter,"Citadin","#type");
filterEvent(utilitaire,vehiculeFilter,"Utilitaire","#type");
filterEvent(berlin,vehiculeFilter,"Berlin","#type");
filterEvent(camion,vehiculeFilter,"Camion","#type");
filterEvent(engin,vehiculeFilter,"Engin de chantier","#type");
filterEvent(essence,carburantFilter,"essence",".carburant");
filterEvent(diesel,carburantFilter,"diesel",".carburant");
filterEvent(electrique,carburantFilter,"electrique",".carburant");
filterEvent(hybrid,carburantFilter,"hybrid",".carburant");
filterEvent(automatique,boiteFilter,"automatique",".boite");
filterEvent(manuelle,boiteFilter,"manuelle",".boite");
carsCreator("extraCar7","Car One.webp","Renault clio 2014","essence","manuelle","13.6 £","Citadin");
carsCreator("extraCar8","Renault Logan 2020.jpeg","Renault Logan 2020.","diesel","automatique","16.8 £","Citadin");
carsCreator("extraCar9","Skoda fabia 2021.jpeg" ,"Skoda fabia 2021","essence","automatique","15.96 £","Citadin");
carsCreator("extraCar10","Renault megan 2018.jpeg","Renault megane 2018","essence","manuelle","13.6 £","Citadin");
carsCreator("extraCar11","Kia picanto 2019.jpeg","Kia picanto 2019.","essence","automatique","15.96 £","Citadin");
carsCreator("extraCar12","Dacia Dokker 2018.jpeg" ,"Dacia Dokker 2018","diesel","manuelle","19.36 £","Utilitaire");
carsCreator("extraCar13","Land rover Range Rover 2015.jpeg","Land rover Range Rover 2015.","hybrid","automatique","15.96 £","Citadin");
carsCreator("extraCar14","renault clio 2018.jpeg"  ,"renault clio 2018","diesel","automatique","16.8 £","Citadin");
carsCreator("extraCar3","Kia Soluto 2021.jpeg","Kia Soluto 2021","hybrid","automatique","15.8£","Citadin");
carsCreator("extraCar4","Compact cargo van.webp","Compact cargo van","diesel","automatique","19.6£","Compact");
carsCreator("extraCar5","chivrolet express.webp","chivrolet express","hybrid","automatique","17.92£","Compact");
carsCreator("extraCar6","mitsubichi Fuso.jpg","mitsubichi Fuso","diesel","automatique","350£","Camion");
carsCreator("extraMoto","peageot Tweet 2021.jpeg","peageot Tweet 125cc 2021","essence","Normal","11.4£","Motocycle");
carsCreator("extraMoto1","Yamaha FZS 2021.jpeg","Yamaha FZS 2021","essence","Normal","11.4£","Motocycle");
carsCreator("extraMoto2","Aprilia atlantic 125 2021.jpeg","Aprilia atlantic 125 2021","essence","Normal","11.4£","Motocycle");
carsCreator("extraMoto3","SYM VS 125 2021.jpeg","Sym vs 125 2021","essence","Normal","11.4£","Motocycle");
  


const overlay = document.getElementById('overlay');
const model = document.querySelector('.model');
const closeButton = document.querySelector('.closeButton')

overlay.addEventListener('click', () => {
  model.classList.remove('active');
  overlay.classList.remove('active');  
  })
closeButton.addEventListener('click', () => {
    model.classList.remove('active');
    overlay.classList.remove('active');  
    })
    let tarifToCount ;
document.querySelectorAll('.reserve').forEach(button => {
    button.addEventListener('click', () => {
      overlay.classList.add('active');  
      model.classList.add('active');    
      const b = button.closest('.oneCar');
      console.log(b.getAttribute("id"));
      const chosenCarId = "#"+b.getAttribute("id")+"> #tarifPerDay";
      const tarifOfChosenCar =document.querySelector(chosenCarId);
      tarifToCount = parseFloat(tarifOfChosenCar.innerHTML);
    })
  })
const currentDate = new Date();
const modelBody = document.querySelector('.model-body')
const oneInput =document.querySelector('.model-body > .oneInput')
const secondInput = oneInput.cloneNode(true);
secondInput.setAttribute("id","input2");
const suivantPickUp = document.querySelector('.oneInput > .suivant1');
suivantPickUp.addEventListener('click', () => {
  const inputPickUp = document.querySelector('.oneInput > #pickUp');

  if(inputPickUp.value == "" || inputPickUp.valueAsDate < currentDate){
    inputPickUp.style.borderColor = "red";  
  }else{
    inputPickUp.style.borderColor = "black";  
    model.style.height= "40%";
    const inputTitle2 = document.createElement('p');
    inputTitle2.innerHTML="Drop-off date";
    modelBody.append(inputTitle2);
    modelBody.append(secondInput);
    const debutDate = inputPickUp.valueAsDate;
    const suivantDropOff = document.querySelector('#input2 > button');
   suivantDropOff.addEventListener('click', () => {
    const inputDropUp = document.querySelector('#input2 > #pickUp');
  if(inputDropUp.value == "" || inputDropUp.valueAsDate < inputPickUp){
    inputDropUp.style.borderColor = "red";  
  }else{
    inputDropUp.style.borderColor = "black";  
    const endDate = inputDropUp.valueAsDate;
    console.log(tarifToCount);
    const tarifFinal = ((endDate-debutDate)/(1000*3600*24))*tarifToCount;
    model.style.height= "50%";
    const messageFinal = document.createElement('p');
    messageFinal.textContent= "Gontratulations , you got to pay "+ tarifFinal +" £";
    messageFinal.style.marginTop ="20px";
    messageFinal.style.marginRight ="2px";
    modelBody.append(messageFinal);
  }  
}
  )
}
})





