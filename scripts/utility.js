// get element value function
function getElementValue(elementId){
    const element = document.getElementById(elementId);
    const elementValueString = element.innerText;
    const elementValue = parseFloat(elementValueString);
    return elementValue;
}
// set element values function
function setElementValue(elementId,newValue){
    document.getElementById(elementId).innerText = newValue;
}
// add product names to cart function
function addNameToCart(name){
    const addItemsDiv = document.getElementById('add-name-to-cart');
    const countOfElements = addItemsDiv.childElementCount;

    const p = document.createElement('p');
    p.classList.add('my-2');
    p.classList.add('text-xl');
    p.classList.add('font-medium');

    p.innerHTML = `
        ${countOfElements+1}. ${name}
    `
    addItemsDiv.appendChild(p);
}

function getProductPrice(target){
    const productPriceString = target.childNodes[3].childNodes[5].childNodes[0].innerText;
    const productPrice = parseFloat(productPriceString);
    return productPrice;
}