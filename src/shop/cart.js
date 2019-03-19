const addProductToCart = (product) => {
    const productsListInCart = document.querySelector('tbody');
    productsListInCart.appendChild(createTableRow(product))
    renderCartPrice(product.price).increaseCartPrice();
    btnMinus(product)
};

const createTableRow = (product) => {
    const tableRow = document.createElement('tr');
    tableRow.innerHTML = `<td>${product.name}</td>
        <td>1</td>
        <td>
            <a class="remove-cart-item">
                <i class="fas fa-minus-square"></i>
            </a>
        </td>`;
    return tableRow;
};

const renderCartPrice = (price) => {
    let cartPrice = document.querySelector('#cart-price strong')
    return {
        increaseCartPrice: () => {
            const newPrice = parseInt(cartPrice.textContent) + price; 
            cartPrice.textContent = parseInt(newPrice).toFixed(2)
        },
        decreaseCartPrice: () => {
            const newPrice = parseInt(cartPrice.textContent) - price; 
            cartPrice.textContent = parseInt(newPrice).toFixed(2)
        },
        clearCartPrice: () => {return cartPrice.textContent = 0}
    }
};

export const isInCart = (item) => {
    const productsInCart = Array.from(document.querySelectorAll('tr td:first-child'));
    const isProductinCart = productsInCart.find(product => { 
        return product.textContent === item.name;
    })
    if (isProductinCart) {
        isProductinCart.nextElementSibling.textContent++;
        renderCartPrice(item.price).increaseCartPrice()
    }   else addProductToCart(item);
};

export const clearCart = () => {
    const clearBtn = document.querySelector('#clear-cart');
    const price = document.querySelector('#cart-price strong');
    const productsListInCart = document.querySelector('tbody');
    clearBtn.addEventListener('click', (e) => {
        price.textContent = '0.00';
        productsListInCart.textContent = ''
    })
}

const btnMinus = (product) => {
    const productsListInCart = document.querySelector('tbody');
    const btns = Array.from(document.querySelectorAll('tr td:last-child'));
    btns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            if (checkCondition(e.currentTarget, product.name)) {
                productsListInCart.removeChild(e.currentTarget.parentElement);
                renderCartPrice(product.price).decreaseCartPrice()
            } 
            else if (checkConditionTwo(e.currentTarget, product.name)) {
                renderCartPrice(product.price).decreaseCartPrice();
                parseInt(e.currentTarget.previousElementSibling.textContent--);
            }
        })
    });
};

const checkCondition = (e, name) => {
    return parseInt(e.previousElementSibling.innerText) === 1
    && name === e.previousElementSibling.previousElementSibling.textContent
};
const checkConditionTwo = (e, name) => {
    return parseInt(e.previousElementSibling.innerText) > 1
    && name === e.previousElementSibling.previousElementSibling.textContent
};