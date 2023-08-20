/* Add product names and prices to cart function */
function addProduct(target) {
    // get product price
    const productPriceString = target.childNodes[3].childNodes[5].childNodes[0].innerText;
    const productPrice = parseFloat(productPriceString);

    // get and set new total product prices
    let totalPrice = getElementValue('previous-total-price');
    let discountAmount = getElementValue('discount-amount');
    let totalAfterDiscount = getElementValue('total-after-discount');

    totalPrice += productPrice;
    totalAfterDiscount = totalPrice - discountAmount;
    // applyDiscount();

    // enable make purchase button
    if (totalPrice > 0) {
        document.getElementById('btn-purchase').removeAttribute('disabled');
    }
    // enable apply button
    if (totalPrice >= 200) {
        document.getElementById('btn-apply').removeAttribute('disabled');
    }

    setElementValue('previous-total-price', totalPrice.toFixed(2));
    setElementValue('total-after-discount', totalAfterDiscount.toFixed(2));

    // add product name to cart
    const productNameString = target.childNodes[3].childNodes[3].innerText;
    addNameToCart(productNameString);
}
/* 
// click SELL200 button to add the code to the input field
function clickToAddCoupon(target){
    const couponCodeString = target.innerText;
    const inputCouponField = document.getElementById('input-coupon-code');
    inputCouponField.value = couponCodeString;
}
 */

// Apply 20% discount by clicking the apply button
function applyDiscount() {
    const couponCodeString = document.getElementById('input-coupon-code').value;
    // const productPrice = getProductPrice()
    if (couponCodeString === 'SELL200') {
        let totalPrice = getElementValue('previous-total-price');
        let totalAfterDiscount = getElementValue('total-after-discount');
        const discountTwenty = totalPrice * 0.2;
        totalAfterDiscount = totalPrice - discountTwenty;
        setElementValue('discount-amount', discountTwenty.toFixed(2));
        setElementValue('total-after-discount',totalAfterDiscount.toFixed(2));
    }
}