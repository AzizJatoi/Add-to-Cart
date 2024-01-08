// import { initializeApp } from  "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js"

// import { getDatabase, ref, push, onValue, remove} from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js"


// const appSettings = {
//     databaseURL: "https://my-azeez-shopping-cart-default-rtdb.asia-southeast1.firebasedatabase.app/"

// }

// const app = initializeApp(appSettings)
// const database = getDatabase(app)
// const shoppingListInDB = ref(database, "shoppingList")
// const addButtonEl = document.getElementById("add-button")
// const inputFieldEl = document.getElementById("input-field")
// const shoppingListEl = document.getElementById("shopping-list")

// addButtonEl.addEventListener("click", function() {
//     let inputValue = inputFieldEl.value
//     push(shoppingListInDB, inputValue)
//     clearInputFieldEl()
// })

// onValue(shoppingListInDB, function(snapshot) {
//     if(snapshot.exists()) {
//     let itemsArray = Object.entries(snapshot.val())
//     clearShoppingListEl()
//     for(let i = 0 ; i < itemsArray.length; i++) {
//         let currentItem = itemsArray[i]
//         let currentItemID = currentItem[0]
//         let currentItemValue = currentItem[1]
//         appendItemToShoppingListEl(currentItem)
//         }
//     }  else {
//         shoppingListEl.innerHTML = "no items here... yet"
//     }

// })

// function appendItemToShoppingListEl(item) {
//     let itemID = item[0]
//     let itemValue = item[1]
//     let newEL = document.createElement("li")
//     newEL.textContent = itemValue
//     newEL.addEventListener("click", function() {
//         let exactLocationOfItemInDB = ref(database, `shoppingList/${itemID}`)
//         remove(exactLocationOfItemInDB )
//     })
//     shoppingListEl.append(newEL)
// }

// function clearInputFieldEl() {
//     inputFieldEl.innerHTML = ""
// }
// function clearShoppingListEl() {
//     shoppingListEl.textContent = ""
// }