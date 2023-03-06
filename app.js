const container = document.getElementsByClassName("container")[0];
const icon = document.getElementById("icon");
const groceryItems = document.getElementById("grocery-items");
const userInput = document.getElementById("user-input");

icon.addEventListener("click", () => {
    groceryItems.innerHTML = "";
    localStorage.clear();
});

userInput.addEventListener("keydown", (event) => {
    if(event.key === "Enter") {
        addItem()
    }
});

window.addEventListener("load", () => {
    const savedItems = localStorage.getItem("groceryItems");
    if (savedItems) {
        groceryItems.innerHTML = savedItems;
    }

    groceryItems.querySelectorAll("li").forEach(item => {
        item.addEventListener("click", () => {
            item.style.textDecoration = item.style.textDecoration ? "" : "line-through";
            saveItems();
        })
    })
});


function addItem() {
    let item = document.createElement("li");
    item.innerHTML = userInput.value;

    item.addEventListener("click", () => {
        item.style.textDecoration = item.style.textDecoration ? "" : "line-through";
        saveItems();
    })

    groceryItems.insertAdjacentElement("beforeend", item);
    saveItems();
    userInput.value = "";
}

function saveItems () {
    localStorage.setItem("groceryItems", groceryItems.innerHTML);
}