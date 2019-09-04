var searchBtn = document.querySelector(".searchBtn");
var addTobasketBtn = document.querySelector(".addBtn");
var displayTotalCost = document.querySelector(".showTotalCost");
var showShoeobject = document.querySelector(".table");
var dropDownForColor = document.querySelector(".selectShoeColor");
var dropDownForBrand = document.querySelector(".selectShoeBrand");
var dropDownForSize = document.querySelector(".selectShoeSize");

var getFactory = ShoeCatalogueFactory();

function showShoeItem(){
// alert("CODE!")
}

function addingToBasket(){
// alert("CODE!")
}

searchBtn.addEventListener('click', showShoeItem);
addTobasketBtn.addEventListener('click', addingToBasket);