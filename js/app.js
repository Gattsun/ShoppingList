
const addButton = document.getElementById('add');
const itemName = document.querySelector('#item-name');
const itemCalories = document.querySelector('#item-calories');
const itemType = document.querySelector('#item-type');
const itemPrice = document.querySelector('#item-price');
const totalSpanItems = document.querySelector('.total-items');
const totalSpanCalories = document.querySelector('.total-calories')
const totalSpanPrice = document.querySelector('.total-price')
const list = document.querySelector('#item-list');
let totalCalories = 0;
let totalItems = 0;
let totalPrice = 0;



addButton.addEventListener('click', (event)=> {
    let itemNameDisplay = itemName.value; 
    let itemCaloriesDisplay = parseInt(itemCalories.value); 
    let itemTypeDisplay = itemType.value;
    let itemAmount = totalSpanItems.value;
    let itemPriceDisplay = parseInt(itemPrice.value);
    totalPrice = totalPrice + itemPriceDisplay;
    totalSpanPrice.innerHTML = totalPrice;
    totalItems = totalItems + 1;
    totalSpanItems.innerHTML = totalItems;
    totalCalories = totalCalories + itemCaloriesDisplay; 
    totalSpanCalories.innerHTML = totalCalories;


   
    let listItem = document.createElement('li');
    listItem.classList.add('colletion-item');
    let text = `Item: ${itemNameDisplay}.   Type: ${itemTypeDisplay}.   Calories: ${itemCaloriesDisplay}.   Price: ${itemPriceDisplay} €.`;
    listItem.appendChild(document.createTextNode(text));
    console.log(listItem);
    list.appendChild(listItem);
     
    itemName.value = '';
    itemCalories.value = '';
    itemPrice.value = '';
    itemType.value = '';


    console.log('Item:', typeof(mealName));
    console.log('Calories:', typeof(mealCalories));
    console.log('Type:', typeof(itemType));
    console.log('Price:', typeof(itemPrice));
    console.log('Total Calories:', totalCalories);
    console.log('Total Items:', itemAmount);
    console.log('Total Price:', itemPrice, '€');

    event.preventDefault();
});