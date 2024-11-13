import "./styles/styles.css";
import "./styles/_card.css";

const menuItems = {
    coffee: {
        title: 'Coffee & Espresso',
        items: ['Americano', 'Latte', 'Cappucino', 'Mocha']
    },
    refreshers: {
        title: 'Teas & Refreshers',
        items: ['Matcha Latte', 'Chai Latte', 'Iced Lemonade', 'Berry Smoothie']
    },
    lightBites: {
        title: 'Light Bites',
        items: ['Avocado Toast', 'Grilled Cheese', 'Caesar Salad']
    }
}

export const renderMenuPage = () => {
    const contentDiv = document.querySelector('#content');

    const menuCard = document.createElement('div');
    menuCard.classList.add('card', 'w-50', 'p-3');

    Object.entries(menuItems).forEach(([category, { title, items }]) => {
        const menuSection = generateMenuSection(category, title, items);
        menuCard.appendChild(menuSection);
    });

    contentDiv.appendChild(menuCard);
}

function generateMenuSection(category, title, items) {
    const menuDiv = document.createElement('div');
    menuDiv.classList.add(category);

    const menuHeader = generateCardHeader(title);
    const menuList = generateList(items);

    menuDiv.appendChild(menuHeader);
    menuDiv.appendChild(menuList);

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