let {mainCourse,sideDishes,beverages,aboutIndianFood}= require("./IndianRestaurant");
let ChineseRestaurant =require("./ChineseRestaurant")

console.log(mainCourse);
console.log(sideDishes);
console.log(beverages);
aboutIndianFood ();

console.log(ChineseRestaurant.maindishesh);
console.log(ChineseRestaurant.sidedishes);
console.log(ChineseRestaurant.drinks);
ChineseRestaurant.aboutChineseFood();
