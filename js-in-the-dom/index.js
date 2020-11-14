const formBtn = document.getElementById('close-form')
const form = document.querySelector('.form')

function toggler() {
  if (formBtn.innerText === 'X') {
    formBtn.innerText = '+'
    form.classList.toggle('hide')
  } else {
    formBtn.innerText = 'X'
    form.classList.toggle('hide')
  }
}

const nameInput = document.getElementById('name')

const emailInput = document.getElementById('email')

const formContainer = document.querySelector('.form-container')


const emailList = []

function validateForm() {
  if (nameInput.value == false && emailInput.value == false) {
    nameInput.style.border = '2px red solid'
    emailInput.style.border = '2px red solid'
    alert('you must enter a name and an email address to subscribe!')
  } 
  else if (nameInput.value == false) {
    nameInput.style.border = '2px red solid'
    alert('please enter a name to subscribe')
  } else if (emailInput.value == false) {
    emailInput.style.border = '2px red solid'
    alert('please enter an email to subscribe')
  } else {
    emailList.push({name: nameInput.value, email: emailInput.value})
    displayThankYou()
  }
}

form.addEventListener('submit', (event) => {
  event.preventDefault()
  validateForm()
})

function displayThankYou () {
  
  formContainer.innerText = 'Thank you for subscribing!'
  setTimeout((cb, time) => {
    formContainer.remove()
  }, 3000);
}

nameInput.addEventListener('change', () => nameInput.style.border = 'none')
emailInput.addEventListener('change', () => emailInput.style.border = 'none')

const cart = document.createElement('div')
const main = document.querySelector('main')

let cartItems = 0

function addToCart() {
  if (cartItems === 0) {
    cartItems = 1
    cart.setAttribute('class', 'cart-display')
    cart.innerText = 'Your Cart: 1 item'
    main.appendChild(cart)
  } else {
    cartItems += 1
    cart.innerText = `Your Cart: ${cartItems} items`
  }
}