"use strict";

const filtersRadioData = [
    {value: 'from expensive to cheap'},
    {value: 'from cheap to expensive'},
]

function getBrandName(arrProduct) {
    const dataUnique = new Map();

    arrProduct.forEach((item) => dataUnique.set(item.brand,item.brand));
    return dataUnique;
}

// const getAttrCategory = () => {
//     const navLink = document.querySelectorAll('.nav__link');
//     navLink.forEach((item) => item.addEventListener('click',() => event.target.getAttribute('dataCategory')
//     ));
// }

function showFilter() {

    const navLink = document.querySelectorAll('.nav__link');
    navLink.forEach((item) => item.addEventListener('click',() => event.target.getAttribute('dataCategory')
    ));

    const parentShop = document.querySelector('.shop-content');

    // const flexContainer = {
    //     type: "div",
    //     className: 'shop__flex-container',
    //     parent: parentShop,
    // }
    // const flexContainerElem = createElement(flexContainer)

    const flexContainerElem = document.querySelector('.shop__flex-container')

    // filter brand name
    
    const bladesRazorsBrandArr = getBrandName(dataBladesRazors);

    const filters = {
        type: "aside",
        className: 'filters',
        id: 'filters',
        parent: flexContainerElem,
    }
    const filtersElem = createElement(filters);

    const  filtersHeader = {
        type: "div",
        className: 'filters__header',
        parent: filtersElem,
    }
    const filtersHeaderElem = createElement(filtersHeader);

    const filtersTitle = {
        type: "h2",
        className: 'shop__title',
        text: 'Filters',
        parent: filtersHeaderElem,
    }
    const filtersTitleElem = createElement(filtersTitle);

    const filtersContent = {
        type: "div",
        className: 'filters__content',
        parent: filtersElem,
    }
    const filtersContentElem = createElement(filtersContent);

    const filtersBlock = {
        type: "div",
        className: 'filters__block',
        parent: filtersContentElem,
    }
    const filtersBlockElem = createElement(filtersBlock);

    const filtersBlockTitle = {
        type: "h2",
        text: "Choose something",
        className: 'filters__title',
        parent: filtersBlockElem,
    }
    const filtersTitleBlockElem = createElement(filtersBlockTitle);

    //create checkbox
    bladesRazorsBrandArr.forEach(function(item) {
        const chooseFilter = {
            type: "div",
            className: 'choose-service__item filters__item',
            parent: filtersBlockElem,
        }
        const chooseFilterElem = createElement(chooseFilter);
    
        const filterInput1 = {
            type: "input",
            attrs: {name: item,type: 'checkbox',},
            id: item,
            className: 'choose-service__input',
            parent: chooseFilterElem,
        }
        createElement(filterInput1);
    
        const labelFiltr1 = {
            type: "label",
            forAttr: item,
            className: 'choose-service__checkbox',
            parent: chooseFilterElem,
        }
        createElement(labelFiltr1);
    
        const textFiltr1 = {
            type: "label",
            forAttr: item,
            className: 'choose-master__text',
            text: item,
            parent: chooseFilterElem,
        }
        createElement(textFiltr1);
    })

    
    // filter radio title
    createElement(filtersBlockTitle);

    // filter radio create
    filtersRadioData.forEach(function(item) {
        const filterPrice = {
            type: "div",
            className: 'choose-service__item filters__item',
            parent: filtersBlockElem,
        }
        const filterPriceElem = createElement(filterPrice);
    
        const filterRadio = {
            type: "input",
            attrs: {name: `choose-master__item`,type: 'radio'},
            id: `master-${filtersRadioData.indexOf(item)}`,
            className: 'choose-master__radio',
            parent: filterPriceElem,
        }
        createElement(filterRadio);
    
        const labelFiltrRadio = {
            type: "label",
            forAttr: `master-${filtersRadioData.indexOf(item)}`,
            className: 'choose-master__label',
            parent: filterPriceElem,
        }
        createElement(labelFiltrRadio);
    
        const textFiltrRadio = {
            type: "label",
            forAttr: `master-${filtersRadioData.indexOf(item)}`,
            className: 'choose-master__text',
            text: item.value, 
            parent: filterPriceElem,
        }

        createElement(textFiltrRadio);
    })

    // btn submit
    const btnOkContainer = {
        type: "div",
        className: 'filters__btn-submit', 
        parent: filtersElem,
    }

    const btnOkElem = createElement(btnOkContainer);

    const btnOk = {
        type: "button",
        className: 'btn btn--black',
        text: 'SHOW', 
        parent: btnOkElem,
    }

    createElement(btnOk);
}