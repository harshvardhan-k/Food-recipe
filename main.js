const searchBtn=document.getElementById('search_btn')
const appID="733c2933"
const applicationKey="76043d55d1239843424a94d6d2edebd7"
const searchBtnSpecific=document.getElementById('search_btn_specific')
const form1=document.getElementById('search_box')
//form1.addEventListener('submit',logSubmit)
const bod=document.getElementById('content');


form1.addEventListener('submit',async function(event){
  event.preventDefault();
  var order=document.getElementById('search_food').value
  console.log(order);
  let response=await fetch(`https://api.edamam.com/api/recipes/v2?type=public&app_id=${appID}&app_key=${applicationKey}&q=${order}`)
    console.log(response)
    let data=await response.json()
    console.log(data)
    bod.innerHTML="";
    useData(data);
})

//searchBtn.addEventListener('click',()=>{
/*function logSubmit(event){
    console.log('Button Pressed');
    console.log(event.value);
    //let order=document.getElementById("search_food").value
    //console.log(order);
    //sendreq(order);
}*/
/*async function sendreq(order){
  //let response=await fetch(`https://api.edamam.com/api/recipes/v2?type=public&mealType=Breakfast&q=pasta&app_id=733c2933&app_key=76043d55d1239843424a94d6d2edebd7`)  
  let response=await fetch(`https://api.edamam.com/api/recipes/v2?type=public&app_id=${appID}&app_key=${applicationKey}&q=${order}`)
    console.log(response)
    let data=await response.json()
    console.log(data)
    useData(data);
}*/
searchBtnSpecific.addEventListener('click',()=>{
    console.log('Button Pressed');
    //let order=document.getElementById("search_food_specific").value
    let diet=document.getElementById("diet").value
    let health=document.getElementById("health").value
    let cuisineType=document.getElementById("cuisineType").value
    let mealType=document.getElementById("mealType").value
    let dishType=document.getElementById("dishType").value
    //console.log(order);
    console.log(dishType)
    bod.innerHTML="";
    sendreqSpecific(diet,health,cuisineType,mealType,dishType);
})
async function sendreqSpecific(diet,health,cuisineType,mealType,dishType){
  //let response=await fetch(`https://api.edamam.com/api/recipes/v2?type=public&mealType=Breakfast&q=${order}&health=${health}&diet=${diet}&cuisineType=${cuisineType}&mealTpye=${mealType}&dishType=${dishType}&app_id=733c2933&app_key=76043d55d1239843424a94d6d2edebd7`)  
  //let response=await fetch(`https://api.edamam.com/api/recipes/v2?type=public&app_id=${appID}&app_key=${applicationKey}&q=${order}&diet=${diet}&health=${health}&mealType=${mealType}&dishType=${dishType}&cuisineType=${cuisineType}`)  
  //let response=await fetch(`https://api.edamam.com/search?app_id=${appID}&app_key=${applicationKey}&q=${order}`)
  let str=`https://api.edamam.com/api/recipes/v2?type=public&app_id=92a5f6e6&app_key=87bbd6ce781d92f595620022908e1043`;
  if(diet){
    str+=`&diet=${diet}`
  }
  if(health){
    str+=`&health=${health}`
  }
  if(mealType){
    str+=`&mealType=${mealType}`
  }
  if(cuisineType){
    str+=`&cuisineType=${cuisineType}`
  }
  if(mealType){
    str+=`&mealType=${mealType}`
  }
  if(dishType){
    str+=`&dishType=${dishType}`
  }
  str+=`&imageSize=SMALL`
  //str=`https://api.edamam.com/api/recipes/v2?type=public&app_id=733c2933&app_key=76043d55d1239843424a94d6d2edebd7&dishType=Bread`;
  let response=await fetch(str)  
  console.log(dishType)
    console.log(response)
    let data=await response.json()
    console.log(data)
    useData(data);
}
function useData(data){
    const len=data.hits.length;
    for(let i=0;i<len;i++){
    document.querySelector('#content').innerHTML+=`
    <div class="card" id="unique" >
  <img src="${data.hits[i].recipe.image}" class="card-img-top" alt="...">
  <div class="card-body">
  <div class="container">
    <h5 class="card-title">${data.hits[i].recipe.label}</h5>
    
  </div>
  <div ind="arrange">
    <p class="card-text" maxlength="20">Diet Labels: <i>${data.hits[i].recipe.dietLabels.length > 0 ? data.hits[i].recipe.dietLabels:"No data found"}</i></p>
    <p class="card-text1" maxlength="10">Health Labels: <i>${data.hits[i].recipe.healthLabels}</i></p>
    </div>
    <a href="${data.hits[i].recipe.url}" class="btn btn-primary">Recipe</a>
  </div>
</div>


    `
    }

}