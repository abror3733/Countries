
const countries = [
  {
    id: 1,
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Flag_of_Germany.svg/2560px-Flag_of_Germany.svg.png",
    name: "Germany",
    population: "81,770,900",
    region: "Europe",
    capital: "Berlin"
  },
  {
    id: 2,
    img: "https://upload.wikimedia.org/wikipedia/en/thumb/9/9a/Flag_of_Spain.svg/1200px-Flag_of_Spain.svg.png",
    name: "Spain",
    population: "323,947,000",
    region: "Europe",
    capital: "Madrid"
  },
  {
    id: 3,
    img: "https://upload.wikimedia.org/wikipedia/en/thumb/0/05/Flag_of_Brazil.svg/640px-Flag_of_Brazil.svg.png",
    name: "Brazil",
    population: "206,135,893",
    region: "Americas",
    capital: "Brasília"
  },
  {
    id: 4,
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/Flag_of_Iceland.svg/1024px-Flag_of_Iceland.svg.png",
    name: "Iceland",
    population: "334,300",
    region: "Europe",
    capital: "Reykjavík"
  },
  {
    id: 5,
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Flag_of_Afghanistan_%282013%E2%80%932021%29.svg/1024px-Flag_of_Afghanistan_%282013%E2%80%932021%29.svg.png",
    name: "Afghanistan",
    population: "27,657,145",
    region: "Asia",
    capital: "Kabul"
  },
  {
    id: 6,
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/Flag_of_Uzbekistan.svg/1280px-Flag_of_Uzbekistan.svg.png",
    name: "Uzbekistan",
    population: "35,482,369",
    region: "Asia",
    capital: "Tashkent"
  },
  {
    id: 7,
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/Flag_of_Albania.svg/2560px-Flag_of_Albania.svg.png",
    name: "Albania",
    population: "2,886,026",
    region: "Europe",
    capital: "Tirana"
  },
  {
    id: 8,
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Flag_of_Algeria.svg/1280px-Flag_of_Algeria.svg.png",
    name: "Algeria",
    population: "40,400,000",
    region: "Africa",
    capital: "Algiers"
  },
]


let elCountrieList = document.querySelector(".hero__countries")
let elHeroSelect = document.querySelector(".hero__select")
let elModalWrapper =document.querySelector(".modal-wrapper")
let elModal = document.querySelector(".modal")

// Render Counrty start 

function renderCountry(arr){
  elCountrieList.innerHTML =""
  let sortArr =arr.sort((a,b) => a.name < b.name ? -1 : 1)
  sortArr.map(item =>{
    let elItem =document.createElement("li")
    elItem.classList.add("hero__item")

    elItem.innerHTML = `
    <img class = "hero__img" src=${item.img} alt = "Country img" width = "100%" height="200px" />
    <h2 class = "hero__name">Country :${item.name}</h2>
    <p class ="hero__population">Popation :${item.population}</p>
    <p class ="hero__region">Region :${item.region}</p>
    <p class ="hero__capital">Capital :${item.capital}</p>

    <div class ="hero__item-btn">
    <button id =${item.id} class ="hero__like-btn">   <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-heart" viewBox="0 0 16 16">
    <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143q.09.083.176.171a3 3 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15"/>
  </svg></button>
    <button id =${item.id} class ="hero__basket-btn">    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-cart4" viewBox="0 0 16 16">
    <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5M3.14 5l.5 2H5V5zM6 5v2h2V5zm3 0v2h2V5zm3 0v2h1.36l.5-2zm1.11 3H12v2h.61zM11 8H9v2h2zM8 8H6v2h2zM5 8H3.89l.5 2H5zm0 5a1 1 0 1 0 0 2 1 1 0 0 0 0-2m-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0m9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2m-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0"/>
    </svg></button>
    <button onclick ="moreBtnClicked(${item.id})" id =${item.id} class ="hero__more-btn">
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-three-dots" viewBox="0 0 16 16">
  <path d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3"/>
</svg></button>
    </div>
    `
    elCountrieList.appendChild(elItem)
  })
}
renderCountry(countries)
// Render Counrty end
// Modal start 
function moreBtnClicked(clickedId){
 elModalWrapper.classList.add("open-modal")
 const data = countries.find(item=> item.id == clickedId)
 elModal.innerHTML =`
 <div class ="modal__img-wrapper">
 <img class = "hero__img modal-img" src=${data.img} alt = "Country img" width = "100%" height="200px" />
 </div>
 <div class="modal__text-wrapper">
 <h2 class = "hero__name">Country :${data.name}</h2>
 <p class ="hero__population">Popation :${data.population}</p>
 <p class ="hero__region">Region :${data.region}</p>
 <p class ="hero__capital">Capital :${data.capital}</p>
 </div>
 `
 console.log(data);
}
elModalWrapper.addEventListener("click",function(evt){
  if(evt.target.id == "modal-wrapper"){
    elModalWrapper.classList.remove("open-modal")
  }
})

// Modal end
// Hero select start 

function renderSelectOptions(arr){
  arr.map(item=>{
    let elOption =document.createElement("option")
    elOption.textContent = item.name
    elOption.setAttribute("value", item.id)

    elHeroSelect.appendChild(elOption)
  })
}
renderSelectOptions(countries)

elHeroSelect.addEventListener("change",function(evt){
  const clickid = evt.target.value;
  if(clickid == 0){
    renderCountry(countries)
  }
  else{
    const filteredArr =countries.filter(item=> item.id == clickid)
    renderCountry(filteredArr)
  }
})

// Hero select end


