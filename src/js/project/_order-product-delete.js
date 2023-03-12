
export const deleteOrderProduct = () => {
    if (document.querySelector('.order-product__delete')) {
        const deleteButton = document.querySelector('.order-product__delete');
        const product = document.querySelector('.order-product');

        deleteButton.addEventListener('click', () => {
            product.classList.add('order-product--hidden')
        })
    }
}