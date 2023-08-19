function addProduct(target){
    // console.log(target.childNodes[3].childNodes[5].childNodes[0]);
    const productPriceString = target.childNodes[3].childNodes[5].childNodes[0].innerText;
    const productPrice = parseFloat(productPriceString);

    // get and set new product prices
    let totalPrice = getElementValue('previous-total-price');
    let discountAmount = getElementValue('discount-amount');
    let totalAfterDiscount = getElementValue('total-after-discount');
    totalPrice = totalPrice + productPrice;
    totalAfterDiscount = totalPrice - discountAmount;
    if(totalPrice>0){
        document.getElementById('btn-purchase').removeAttribute('disabled');
    }
    setElementValue('previous-total-price',totalPrice.toFixed(2));
    setElementValue('total-after-discount',totalAfterDiscount.toFixed(2));
    // console.log(productPrice, typeof productPrice);
    // console.log(target.childNodes[3].childNodes[3].innerText);
    // add product names to cart
    const productNameString = target.childNodes[3].childNodes[3].innerText;
    addNameToCart(productNameString);
}

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