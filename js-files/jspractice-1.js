const PURCHASE_TAX = 0.03;
const PURCHASE_TAX_FOR_PHONE = 0.01;
const PURCHASE_TAX_FOR_ACCESSORY = 0.01;

var price;
var phone = 100;
var allPrice = 100;
var samsung = 4352;
var nokia = 4982;
var iphone = 6955;
var accessory1 = 692;
var accessory2 = 512;
var accessory3 = 116;

if (allPrice > 101 ) {
    price = nokia + (nokia * (PURCHASE_TAX + PURCHASE_TAX_FOR_PHONE));
}

else if ( allPrice < 20 ) {
    price = samsung + (samsung * (PURCHASE_TAX + PURCHASE_TAX_FOR_PHONE));
}

else {
    price = iphone + (iphone * (PURCHASE_TAX + PURCHASE_TAX_FOR_PHONE));
}


console.log( price );
console.log( allPrice );
