import "./styles/styles.css";
import "./styles/_card.css";

export const renderMenuPage = () => {
    const contentDiv = document.querySelector('#content');

    const menuCard = document.createElement('div');
    menuCard.classList.add('card', 'w-50', 'p-3');

    const coffeeMenu = generateCoffeeMenu();

    const refreshersMenu = generateRefreshersMenu();

    const lightBitesMenu = generateLightBitesMenu();

    menuCard.appendChild(coffeeMenu);
    menuCard.appendChild(refreshersMenu);
    menuCard.appendChild(lightBitesMenu);
    contentDiv.appendChild(menuCard);
}

function generateCoffeeMenu() {
    const menuCoffeeDiv = generateDiv("coffee");
    const menuCoffeeHeader = generateCardHeader('Coffee & Espresso');
    const menuCoffeeList = generateList(['Americano', 'Latte', 'Cappucino', 'Mocha']);

    
    menuCoffeeDiv.appendChild(menuCoffeeHeader);
    menuCoffeeDiv.appendChild(menuCoffeeList);

    return menuCoffeeDiv;
}

function generateRefreshersMenu() {
    const menuRefreshersDiv = generateDiv("refreshers");
    const menuRefreshersHeader = generateCardHeader('Teas & Refreshers');
    const menuRefreshersList = generateList(['Matcha Latte', 'Chai Latte', 'Iced Lemonade', 'Berry Smoothie']);

    
    menuRefreshersDiv.appendChild(menuRefreshersHeader);
    menuRefreshersDiv.appendChild(menuRefreshersList);

    return menuRefreshersDiv;
}

function generateLightBitesMenu() {
    const menuLightBitesDiv = generateDiv("light-bites");
    const menuLightBitesHeader = generateCardHeader('Light Bites');
    const menuLightBitesList = generateList(['Avocado Toast', 'Grilled Cheese', 'Caesar Salad']);

    
    menuLightBitesDiv.appendChild(menuLightBitesHeader);
    menuLightBitesDiv.appendChild(menuLightBitesList);

    return menuLightBitesDiv;
}

function generateDiv(category) {
    const menuDiv = document.createElement('div');
    menuDiv.classList.add(category);
    return menuDiv;
}

function generateCardHeader(categoryHead) {
    const menuCategoryHeader = document.createElement('div');
    menuCategoryHeader.classList.add('card-header','custom-card');
    menuCategoryHeader.textContent = categoryHead;
    return menuCategoryHeader;
}

function generateList(categoryItems) {
    const category = document.createElement('ul');
    category.classList.add('list-group', 'list-group-flush');

    categoryItems.forEach(item => {
        const itemList = document.createElement('li');   
        itemList.classList.add('list-group-item');
        itemList.textContent = item;
        
        category.appendChild(itemList);
    });
    return category;
}