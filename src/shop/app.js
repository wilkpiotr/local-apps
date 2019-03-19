import products from './product';
import {isInCart, clearCart} from './cart'

export const initApp = () => {
    getProducts(); 
    handleIconCart();
    clearCart();
};

const handleIconCart = () => {
    const icons = Array.from(document.querySelectorAll('a[data-id]'));
    icons.forEach(icon => {
        icon.addEventListener('click', (e) => {
            const product = products.find(product => {
                return product.id.toString() === icon.dataset.id;
            });
            isInCart(product);
        })
    })
};

const getProducts = () => {
    const productsContainer = document.getElementById('products');
    productsContainer.innerHTML = products.reduce((html, product) => {
      return `${html} 
        <div class="box product" id="${product.id}">
          <article class="media">
            <div class="media-left">
              <figure class="image is-64x64">
                <img src="${product.img}" alt="Image">
              </figure>
            </div>
            <div class="media-content">
              <div class="content">
                <p>
                  <strong>${product.name}</strong><small> for only </small><b>${product.price}</b>
                  <br>
                  ${product.description}
                </p>
              </div>
              <nav class="level is-mobile">
                <div class="level-left">
                  <a class="level-item product-button-buy" data-id="${product.id}">
                    <span class="icon is-small"><i class="fas fa-shopping-cart"></i></span>
                  </a>
                </div>
              </nav>
            </div>
          </article>
        </div>`
    },"")
  };