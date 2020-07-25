"use strict";

const start = () => {
    const parent = document.querySelector(`.shop__flex-container`);

    const firstResponse = document.querySelector(`.header .nav__link`).getAttribute(`data-category`);

    handlerNavLink();
    showSearch();

    //загрузка бритвы и лезвия как main page 

    window.addEventListener("DOMContentLoaded", () => {
        getResource(firstResponse)
        .then(data => createFilter(data, parent));

        getResource(firstResponse)
        .then(data => createCards(data, parent, firstResponse));
    });
}

//addEventListener для линков
const handlerNavLink = () => {
    const link = document.querySelectorAll(`.header .nav .nav__link`);
    link.forEach(item => item.addEventListener(`click`, showProducts))
};

//показываем продукты
const showProducts = (e) => {
    const parent = document.querySelector(`.shop__flex-container`);
    parent.innerHTML = ' ';

    const target = e.target;
    //ищем категорию на которую нажали
    const category = target.getAttribute(`data-category`);
    //запрашиваем данные с сервера через category 
    getResource(category)
        .then(data => {
            createFilter(data, parent)
            createCards(data, parent, category)
        })
}

//Создаём картки для наших товаров
const createCards = (arr, parent, category) => {
    //удаляем парент при нажатии
    const checkCards = document.querySelector('.shop__cards');
    if(checkCards) {
        checkCards.remove();
    }

    const shopCards = document.createElement(`div`);
    shopCards.classList.add(`shop__cards`);
    shopCards.id = category;
    parent.appendChild(shopCards);

    arr.forEach(item => {
        createCard(item, shopCards, arr);
    });
}

const createCard = (item, parent, arr) => {

    const productCard = document.createElement(`div`);

    productCard.classList.add(`product`);

    productCard.innerHTML = `

        <div class="product__img-container" data-id=${item.id}>
                <img src="${item.img}" alt="" class="product__img">
        </div>
        <div class="product__content" data-id=${item.id}>
                <h3 class="product__title">
                    ${item.name}
                </h3>
                <p class="product__price">
                    ${item.price}$
                </p>
                <div class="product__buttons">
                    <button class="btn btn--black">Shop now</button>
                    <button class="btn btn--plus"></button>
                </div>
`;
    parent.appendChild(productCard);

    //исправить !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
    document.querySelectorAll(`.product__img`).forEach(item => { item.style.width = `100%` });

    productCard.addEventListener(`click`, handlerProductItem.bind(null, arr))

}

//нажатие на товар, переход на детальную информацию о товаре
const handlerProductItem = (arr, event) => {
    const target = event.target;

    //handler на элементы которые не будут нас переносить на 2 страницу 
    if (target.tagName === `BUTTON` || target.className === `product` || target.className === `product__img-container` || target.className === `product__content`) {
        return;
    }

    const selectedProductId = target.parentNode.getAttribute(`data-id`);

    const selectedProduct = arr.find((element) => {
        return element.id === Number(selectedProductId);
    });

    showDetailInfo(selectedProduct);
}


//отображение страници с товаром
const showDetailInfo = (item) => {

    document.querySelector(`.shop .wrapper .shop-content .shop__flex-container`).innerHTML = ``;
    const parent = document.querySelector(`.shop__flex-container`);
    const productCard = document.createElement(`div`);

    productCard.classList.add(`product-info`);

    productCard.innerHTML = `
    <div class="product-info__img">
        <img src=${item.img} alt="product img"/>
    </div>
    <div class="product-info__info">
        <div class="product-info__link-container">
            <a class="product-info__link product-info__link--active">Описание</a>
            <a class="product-info__link">Отзывы</a>
        </div>
        <div class="product-info__title-container">
            <h2 class="product-info__title">${item.name}</h2>
            <p class="product-info__description">${item.descriptions}</p>
        </div>
        <div class="product-info__price-container">
            <p class="product-info__price">${item.price}$</p>
            <button class="btn btn--plus"></button>
        </div>
    </div>
    `;

    parent.appendChild(productCard);
}