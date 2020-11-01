let favouriteFoods = ["Chicken Salad", "Chakalaka", "Sea Food Okro Soup"];

favouriteFoods[1];

favouriteFoods[2] = "Nsala Soup";

let formerFavoriteFood = favouriteFoods.shift();

favouriteFoods.push("Stir Fry Vegetables");

favouriteFoods.unshift("Mongolian Spaghetti")

let arr = [2, 3, 4, 5];
arr.splice(1,1);

let radioActivity = arr = ["alpha", "gamma", "delta"];
arr.splice(1, 0, "beta");

let replaceNegatives = [10,-10,-5,-3,2,1] ;
replaceNegatives.splice(0,4,10, 9, 8, 7, 6, 5, 4, 3);