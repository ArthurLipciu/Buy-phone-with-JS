// const  ACCESORY_PRICE = 9.99;
//
// var bank_balance = 302.13;
// var amount = 99.99;
//
// amount = amount * 2;
//
// //Можем ли мы позволить себе дополнительную покупку
// if ( amount < bank_balance ) {
//     console.log( "Я возьму дополнительный товар" );
//     amount = amount + ACCESORY_PRICE;
// }
// else {
//     console.log( "No, thanks");
// }
// //_______________________________________________________________________
// var numOfCustomers = 10;
// while (numOfCustomers > 0) {
//     console.log( "Чем я могу помочь вам?" + numOfCustomers);
//     //помощь покупателю
//     numOfCustomers = numOfCustomers - 1;
// }
//
// //против
//
// do {
//     console.log( "чем я могу вам помочь?" );
//     //помощь покупателю
//     numOfCustomers = numOfCustomers - 1;
// } while (numOfCustomers >0);
//
//
// // _________________________WHILE DO...WHILE______________________________________________
//
// var i = 0;
//
// while (true) {
//     if ((i <= 9) === false) {
//         break;
//     }
//
//     console.log( i );
//     i = i + 1;
// }
//
// //________________________________FOR_______________________________________
//
// for (var b = 0; b <= 12; b = b + 1) {
//     console.log( b );
// }

//________________________________Function_______________________________________
// function printAmountt() {
//     console.log( amount.toFixed( 2 ) );
// }
//
// var amount = 99.99;
//
// printAmountt(); // "99.99"
// amount = amount * 2;
// printAmount(); //"199.98"
//
// function printAmountt(amt) {
//     console.log( amt.toFixed( 2 ) );
// }
//
// function formatAmountt() {
//     return "$" + amount.toFixed( 2 );
// }
//
// var amount = 99.99;
// printAmountt( amount * 2);
//
// amount = formatAmountt();
// console.log( amount );

// const TAX_RATE = 0.08;
//
// function calculateFinalPurchaseAmount(amt) {
//     // Вычисляем новую сумму с налогом
//     amt = amt + (amt * TAX_RATE);
//
//     // Возвращаем новую сумму
//     return amt;
// }
//
// var amount = 99.99;
//
// amount = calculateFinalPurchaseAmount( amount );
//console.log( amount.toFixed(2));

// --------------Область видимости -------------------------------------
//
// function one() {
//     //эта переменная принадлежит только функции 1
//     var a = 13;
//     console.log( a );
// }
//
// function two() {
//     //эта a принадлежит только функции 2
//     var a =23;
//     console.log( a );
// }
//
// one();  //13
// two(); //23


//Также, область видимости может быть вложена внутрь другой области видимости

// function outer() {
//     var a = 1;
//
//     function inner() {
//         var b = 2;
//
//         // здесь у нас есть доступ и к `a`, и к `b`
//         console.log( a + b ); //3
//     }
//
//     inner();
//
//     // здесь у нас есть доступ только к  `a`
//     console.log( a );   //1
// }
//
// outer();
