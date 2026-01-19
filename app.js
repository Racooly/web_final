function checkCookieConsent() {
    const consent = localStorage.getItem('cookieConsent');
    const notification = document.getElementById('cookieNotification');
    
    if (!consent) {
        setTimeout(() => {
            notification.classList.add('show');
        }, 1000); 
    }
}

    function acceptCookies() {
        localStorage.setItem('cookieConsent', 'accepted');
        hideCookieNotification();
        alert('Thank you! Cookies have been accepted.');
    }

    
    function declineCookies() {
        localStorage.setItem('cookieConsent', 'declined');
        hideCookieNotification();
        alert('Cookies have been declined.');
    }

    
    function hideCookieNotification() {
        const notification = document.getElementById('cookieNotification');
        notification.style.animation = 'slideDown 0.5s ease-out';
        
        setTimeout(() => {
            notification.classList.remove('show');
        }, 500);
    }

    

    
    document.addEventListener('DOMContentLoaded', checkCookieConsent);


const user = document.getElementById('userLogo')
const regCont = document.getElementById('registerCont')

user.addEventListener('click', ()=>{
    regCont.classList.toggle('active')
})

const Burger = document.getElementById('burger')
const closeB = document.getElementById('Close')
const burgerMenu = document.getElementById('burger_menu')

Burger.addEventListener('click', ()=>{
    burgerMenu.classList.add('activated')
})

closeB.addEventListener('click', ()=>{
    burgerMenu.classList.remove('activated')
})

const firstName = document.getElementById('firstName')
const lastName = document.getElementById('lastName')
const password = document.getElementById('password') 
const button = document.getElementById('button')
const checkbox = document.getElementById('checkbox')
const firstNameError = document.getElementById('firstNameError')
const lastNameError = document.getElementById('lstError')
const passError = document.getElementById('passError')
const checkboxError = document.getElementById('policy')
const eyeOpen = document.getElementById('eyeOpen')
const eyeClose = document.getElementById('eyeClosed')

button.addEventListener('click', ()=>{
    firstName.value =='' ? firstNameError.innerHTML = 'Please fill out this field' : firstNameError.innerHTML = ''
    lastName.value == '' ? lastNameError.innerHTML = 'Please fill out this field' : lastNameError.innerHTML = ''
    password.value == '' ? passError.innerHTML = 'Please fill out this field' :  passError.innerHTML = ''
    !checkbox.checked ? checkboxError.innerHTML = 'Please accept privacy policy' : checkboxError.innerHTML =''
})

eyeOpen.addEventListener('click', ()=>{
    eyeClose.style.display = "inline"
    eyeOpen.style.display = "none"
    password.type = "text"
})
eyeClose.addEventListener('click', ()=>{
    eyeOpen.style.display = "inline"
    eyeClose.style.display = "none"
    password.type = "password"
})

async function loadProducts() {
    const popularsSection = document.querySelector('.Populars');
    
    try {
    
        const response = await fetch('https://dummyjson.com/products/category/laptops');
        
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const data = await response.json();
        const products = data.products.slice(0, 6);
        
    
        popularsSection.innerHTML = '';
        

        products.forEach(product => {
            const card = createProductCard(product);
            popularsSection.appendChild(card);
        });
        
    } catch (error) {
        console.error('Error loading products:', error);
        popularsSection.innerHTML = '<div class="error">Failed to load products. Please try again later.</div>';
    }
}


function createProductCard(product) {

    const card = document.createElement('div');
    card.className = 'card';
    

    const img = document.createElement('img');
    img.src = product.thumbnail;
    img.alt = product.title;
    
    
    const cardInfo = document.createElement('div');
    cardInfo.className = 'card-info';
    

    const priceDiv = document.createElement('div');
    priceDiv.className = 'price';
    const priceP = document.createElement('p');
    priceP.textContent = `$${product.price.toFixed(2)}`;
    priceDiv.appendChild(priceP);
    

    const descP = document.createElement('p');
    descP.className = 'desc';
    descP.textContent = product.title.length > 50 
        ? product.title.substring(0, 50) + '...' 
        : product.title;
    

    cardInfo.appendChild(priceDiv);
    cardInfo.appendChild(descP);
    card.appendChild(img);
    card.appendChild(cardInfo);
    
    return card;
}
document.addEventListener('DOMContentLoaded', loadProducts);


const scrollToTopBtn = document.getElementById('scrollToTopBtn');
    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 300) {
            scrollToTopBtn.classList.add('show');
        } else {
            scrollToTopBtn.classList.remove('show');
        }
    });
    scrollToTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
    