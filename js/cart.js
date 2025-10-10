const cart = function () {
        const cartBtn = document.querySelector('.button-cart')
    const cart = document.getSelector('#modal-cart')
    const closeBtn = cart.querySelector('.model-close')

    console.log(cart);
    console.log(cartBtn);

    cartBtn.addEventListener('click', function () {
        console.log('click')
    })

    cartBtn.addEventListener('click', function () {
        cart.style.display = 'flex'
    })

    cartBtn.addEventListener('click', function () {
        cart.style.display = ''
    })
}

cart()