

// Product dinamic filler
function productFiller(soaps) {
    var productContainer = document.getElementById("product-container");
    var productElements = "";
    productElements += '<div class="item-container">';
    for (var i = 0; i < soaps.length; i++) {
        productElements += '<div class="item" name="' + soaps[i].name + '" id="' + soaps[i].id + '"><img class="product-image" src="images/' + soaps[i].name + '.jpg" onclick="showInfo()"><br><h5>' + soaps[i].name + '</h5><br><div class="product-price">' + soaps[i].price + 'Ft </div><button class="product-button" onclick="showInfo()"> Bővebben </button><br><br><label for="' + soaps[i].id + 'num" class="product-q-label">Mennyiség:</label><br><input type="number" class="product-num" id="' + soaps[i].id + 'num"><br><br><button class="item-basket" onclick="addToBasket2()"> Kosárba!<span class="glyphicon glyphicon-shopping-cart" aria-hidden="true"></span></button></div>'
        productContainer.innerHTML = productElements;
    }
    productContainer.innerHTML += '<div id="finishBuying"><button onclick="finishBuying()" id="finishBuyingBtn"><a href="#menubutton4">Vásárlás befejezése</a></button></div>';
}

// Menu opening
function openMenu(event) {
    var tabcontent = document.getElementsByClassName("dropbtn");
    for (var i = 0; i < tabcontent.length; i++) {
        opensideBars(event.target.id);
    }
}

var homeContainer = document.querySelector(".slideshow-container");
var productPage = document.getElementById("product-container");
var productDescPage = document.getElementById("product-description-container");
var soapSorter = document.getElementById("soapSorter");
var soapFinder = document.getElementById("soapSearcher");
var soapSearcher = document.getElementById("searchDiv");
var Basket = document.getElementById("price-container-main");
var finishBuyingDiv = document.getElementById("finishBuying");
var gyik = document.querySelector(".gyik");
var soapDesc = document.querySelector(".homemade-soap-desc");
var regForm = document.querySelector(".registration");
var contactDiv = document.getElementById("contact");

function opensideBars(id) {
    switch (id) {
        case "menubutton1":
            homeContainer.style.display = "block";
            gyik.style.display = "none";
            soapDesc.style.display = "none";
            soapSearcher.style.display = "none";
            loginForm.style.display = "none";
            soapSorter.style.display = "none";
            productPage.style.display = "none";
            Basket.style.display = "none";
            productDescPage.style.display = "none";
            finishBuyingDiv.style.display = "none";

            regForm.style.display = "none";
            contactDiv.style.display = "none";
            break;
        case "menubutton2":
            soapSearcher.style.display = "block";
            soapSorter.style.display = "block";
            productPage.style.display = "block";
            homeContainer.style.display = "none";
            Basket.style.display = "none";
            productDescPage.style.display = "none";
            finishBuyingDiv.style.display = "block";
            gyik.style.display = "none";
            soapDesc.style.display = "none";
            loginForm.style.display = "none";
            regForm.style.display = "none";
            contactDiv.style.display = "none";
            break;
        case "menubutton3":
            soapDesc.style.display = "block";
            Basket.style.display = "none";
            soapSearcher.style.display = "none";
            soapSorter.style.display = "none";
            productPage.style.display = "none";
            homeContainer.style.display = "none";
            productDescPage.style.display = "none";
            finishBuyingDiv.style.display = "none";
            gyik.style.display = "none";
            loginForm.style.display = "none";
            regForm.style.display = "none";
            contactDiv.style.display = "none";
            break;
        case "menubutton4":
            Basket.style.display = "block";
            contactDiv.style.display = "none";
            soapDesc.style.display = "none";
            gyik.style.display = "none";
            soapSearcher.style.display = "none";
            soapSorter.style.display = "none";
            productPage.style.display = "none";
            homeContainer.style.display = "none";
            productDescPage.style.display = "none";
            finishBuyingDiv.style.display = "none";
            gyik.style.display = "none";
            loginForm.style.display = "none";
            regForm.style.display = "none";

            break;
        case "menubutton5":
            contactDiv.style.display = "none";
            gyik.style.display = "block";
            soapSearcher.style.display = "none";
            soapSorter.style.display = "none";
            productPage.style.display = "none";
            homeContainer.style.display = "none";
            Basket.style.display = "none";
            productDescPage.style.display = "none";
            finishBuyingDiv.style.display = "none";
            soapDesc.style.display = "none";
            loginForm.style.display = "none";
            regForm.style.display = "none";

            break;
        case "menubutton6":
            contactDiv.style.display = "block";
            gyik.style.display = "none";
            Basket.style.display = "none";
            soapSearcher.style.display = "none";
            soapSorter.style.display = "none";
            productPage.style.display = "none";
            homeContainer.style.display = "none";
            productDescPage.style.display = "none";
            finishBuyingDiv.style.display = "none";

            loginForm.style.display = "none";
            regForm.style.display = "none";
            break;
    }
}
// Login and registration
var loginForm = document.querySelector(".login");
function login() {
    loginForm.style.display = "block";
    Basket.style.display = "none";
    soapSearcher.style.display = "none";
    soapSorter.style.display = "none";
    productPage.style.display = "none";
    homeContainer.style.display = "none";
    productDescPage.style.display = "none";
    finishBuyingDiv.style.display = "none";
    gyik.style.display = "none";
    contactDiv.style.display = "none";
    sendDatas;
}
function sendDatas() {
    loginForm.style.display = "none";
    opensideBars("menubutton1");
}
function registration() {
    regForm.style.display = "block";
    loginForm.style.display = "none";
    Basket.style.display = "none";
    soapSearcher.style.display = "none";
    soapSorter.style.display = "none";
    productPage.style.display = "none";
    homeContainer.style.display = "none";
    productDescPage.style.display = "none";
    finishBuyingDiv.style.display = "none";
    gyik.style.display = "none";
    contactDiv.style.display = "none";
    sendRegDatas;
}
function sendregDatas() {
    regForm.style.display = "none";
    opensideBars("menubutton1");
}
// Sort by name

function sortByNameInc() {
    for (var i = 0; i < soaps.length - 1; i++) {
        for (var j = i + 1; j < soaps.length; j++) {
            if (soaps[i].name.localeCompare(soaps[j].name) > 0) {
                var temp = [soaps[i], soaps[j]];
                soaps[i] = temp[1];
                soaps[j] = temp[0];
            }
        }
    }
    productFiller(soaps);
}

function sortByNameDec() {
    for (var i = 0; i < soaps.length - 1; i++) {
        for (var j = i + 1; j < soaps.length; j++) {
            if (soaps[i].name.localeCompare(soaps[j].name) < 0) {
                var temp = [soaps[i], soaps[j]];
                soaps[i] = temp[1];
                soaps[j] = temp[0];
            }
        }
    }
    productFiller(soaps);
}

function sortByPriceInc() {
    for (var i = 0; i < soaps.length - 1; i++) {
        for (var j = i + 1; j < soaps.length; j++) {
            if (soaps[i].price > soaps[j].price) {
                var temp = [soaps[i], soaps[j]];
                soaps[i] = temp[1];
                soaps[j] = temp[0];
            }
        }
    }
    productFiller(soaps);
}

// Sort by price
function sortByPriceDec() {
    for (var i = 0; i < soaps.length - 1; i++) {
        for (var j = i + 1; j < soaps.length; j++) {
            if (soaps[i].price < soaps[j].price) {
                var temp = [soaps[i], soaps[j]];
                soaps[i] = temp[1];
                soaps[j] = temp[0];
            }
        }
    }
    productFiller(soaps);
}
//Product to basket
var finalPrice = 0;
var itemObject;
function addToBasket2() {
    itemObject = {};
    var item = event.target;
    var itemDiv = item.parentElement;

    if (itemDiv.tagName != "DIV") {
        ItemDiv = itemDiv.parentElement;
    }
    var itemId = itemDiv.getAttribute('id');
    var item;
    for (var i = 0; i < soaps.length; i++) {
        if (soaps[i].id == itemId) {
            item = soaps[i];

        }
    }
    var quantityInput = itemDiv.querySelector('.product-num').value;

    itemObject.id = item.id;
    itemObject.name = item.name;
    itemObject.quantity = quantityInput;
    itemObject.price = item.price;
    itemObject.pic = '<img class="item-small-pic" src="images/' + item.name + '.jpg">';
    if (itemObject.quantity > 0) {
        sentItemCounter(itemObject);
    } else {
        alert("válassz mennyiséget!");
    }
}
var output = [];
var message = "";
var list = document.getElementById("price-container");

function sentItemCounter(object) {
    output.push('<div class="itemsInBasket" id="' + object.id + 'basket">' + object.pic + object.name + ', Ár: ' + object.price + ' Ft, Mennyiség: ' + object.quantity + 'db           ' + '<button onclick="deleteItem()" id="deleteBnt">Tétel törlése</button><hr></div>');
    finalPrice += object.price * object.quantity;
    message = '<hr><hr><strong>Végösszeg: ' + finalPrice + ' Ft</strong><br><br><button class="payingOk" onclick="payingOk()"><strong>Fizetek</strong></button><button class="deleteBasket" onclick="deleteBasket()"><strong>Kosár ürítése</strong></button>';
    list.innerHTML = output.join("") + message;
}

function finishBuying() {

    opensideBars("menubutton4");

}

function chooser(array, searched) {
    for (var i = 0; i < array.length; i++) {
        for (var j = 0; j < searched.length; j++) {
            if (array[i].id == searched[j]) {
                array[i].style.display = "block";
            }
        }
    }
}

function hideProducts(array) {
    for (var j = 0; j < array.length; j++) {
        array[j].style.display = "none";
    }
}

function searchResult(array) {
    var searched = [];
    var searchInput = document.getElementById("searchInput").value.toLowerCase();
    var productBoxes = document.querySelectorAll(".item");
    hideProducts(productBoxes);
    for (var i = 0; i < array.length; i++) {
        array[i].name.toLowerCase;
        if ((array[i].name.indexOf(searchInput) > -1) ||
            (array[i].ingredients.indexOf(searchInput) > -1) ||
            (array[i].liquid.indexOf(searchInput) > -1) ||
            (array[i].fragrance.indexOf(searchInput) > -1) ||
            (array[i].others.indexOf(searchInput) > -1)) {
            searched.push(array[i].id);
        }
    }
    chooser(productBoxes, searched);
}

function showProducts() {
    var productBoxes = document.querySelectorAll(".item");
    for (var j = 0; j < productBoxes.length; j++) {
        productBoxes[j].style.display = "block";
    }
}

productFiller(soaps);

// Details of item
function showInfo() {

    var item = event.target;
    var itemDiv = item.parentElement;

    if (itemDiv.tagName != "DIV") {
        ItemDiv = itemDiv.parentElement;
    }
    var itemId = itemDiv.getAttribute('id');
    var item;
    for (var i = 0; i < soaps.length; i++) {
        if (soaps[i].id == itemId) {
            item = soaps[i];
        }
    }
    var itemDesc = {};
    itemDesc.name = item.name;
    itemDesc.desc = item.ingredients;
    itemDesc.price = item.price;
    itemDesc.pic = '<img class="item-small-pic-desc" src="images/' + item.name + '.jpg">';
    productDescPage.innerHTML = '<button class="closeDescBtn" onclick="closeProductPage()">X</button><strong>' + itemDesc.pic + '<br>' + itemDesc.name + '</strong><br><br><strong>Összetevők: </strong>' + itemDesc.desc + '<br><button class="item-basket" onclick="addToBasket2()"> Kosárba!<span class="glyphicon glyphicon-shopping-cart2" aria-hidden="true"></span></button>';
    productDescPage.style.display = "block";
}

function closeProductPage() {
    productDescPage.style.display = "none";
}
function payingOk() {
    alert("Sajnos jelenleg a fizetés nem lehetséges, kérjük próbálkozzon később");
}
function deleteItem() {
    var deleteBox = event.target.parentElement;
    var deleteId = deleteBox.getAttribute("id");
    var replacedId = deleteId.replace('basket', "");
    for (var i = 0; i < itemObject.length; i++) {
        console.log(itemObject[i].price);
        if (itemObject[i].id == replacedId) {
            delete itemObject.id;
            delete itemObject.name;
            delete itemObject.quantity;
            delete itemObject.price;
            delete itemObject.pic;
            sentItemCounter(itemObject);

        }
    }
}

function deleteBasket() {
    itemObject = "";
    list.innerHTML = '<button onclick="backToShop()" id="backToShopBtn">Vissza a webshopba</button>';
}
function backToShop() {
    opensideBars("menubutton2");
}

opensideBars("menubutton1");
