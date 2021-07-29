// document.body.innerHTML+="<div class='cats-list'></div>"
// or...

const dom = {cats: []}

dom.catsList = document.createElement("div")
dom.catsList.classList.add("cats-list")
document.body.appendChild(dom.catsList)

cats.forEach(appendCat)

function appendCat(cat){
  const catCard = document.createElement("div")
  catCard.classList.add("cat-card")
  dom.catsList.appendChild(catCard)
  const name = document.createElement("p")
  name.innerText = cat.name
  const img = document.createElement("img")
  img.src = cat.image
  img.alt = cat.name
  const description = document.createElement("p")
  description.innerText = cat.description
  catCard.append(name, img, description)

  // dom.cats.push(catCard)
  // catCard.macavitize = function(){
  //   img.src = "./macavity.gif"
  // }

  // catsList.innerHTML += `
  // <div class="cat-card">
  //   <p>${cat.name}</p>
  //   <img src=${cat.image} alt=${cat.name}/>
  //   <p>${cat.description}</p>
  // </div>
  // `

}
