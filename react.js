let title= document.getElementById('title')
let price = document.getElementById('price')

let taxes = document.getElementById('taxes')

let ads = document.getElementById('ads')
let discount = document.getElementById('discount')


let total = document.getElementById('total')

let count = document.getElementById('count')


let category = document.getElementById('category')

let submit = document.getElementById('submit')




// get total

function gettotal() {
  if(price.value != ""){
    let result = (+price.value + +taxes.value + +ads.value) - +discount.value
    total.innerHTML = result
    total.style.background = '#040'
  }
  else{
    total.innerHTML = "";
    total.style.background = '#a00d02'
  }
}









//create produc

let datapro;
if(localStorage.product != null){
    datapro = JSON.parse(localStorage.product)
}else{
    datapro = [];
}

submit.onclick = function(){
    let nowpro = {
        title:title.value,
        price:price.value,
        taxes:taxes.value,
        ads:ads.value,
        discount:discount.value,
        total:total.innerHTML,
        count:count.value,
        category:category.value,


    }
    datapro.push(nowpro)
    localStorage.setItem('product',         JSON.stringify(datapro)      )
    cleardata()
}








// save data 





// clear oll

function cleardata(){
    title.value = "";
    price.value = "";
    taxes.value = "";
    ads.value = "";
    discount.value = ""
    total.innerHTML = "";
    count.value = "";
    category.value = "";


}



// read


//cont






//delete
//upgrade 
//search 
// clean data