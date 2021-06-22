// Leave the next line, the form must be assigned to a variable named 'form' in order for the exercise test to pass
const form = document.querySelector('form');
const shoppingList = document.querySelector('#list');
form.addEventListener('submit' , function(e) {
    e.preventDefault();
    const quantity = this.elements.qty.value;
    const product = this.elements.product.value;
    
    const newOrder = document.createElement('li');
    newOrder.innerText = (`${quantity} ${product}`)
    shoppingList.appendChild(newOrder);
    form.reset();
})