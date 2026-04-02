// ShopHub E-Commerce Platform JavaScript

// Cart functionality
let cart = {
    items: 0,
    wishlist: 0
};

// Initialize cart from localStorage
function initCart() {
    const savedCart = localStorage.getItem('shopHub_cart');
    if (savedCart) {
        cart = JSON.parse(savedCart);
    }
    updateCartBadges();
}

// Update cart badge displays
function updateCartBadges() {
    const cartBadges = document.querySelectorAll('.badge');
    if (cartBadges.length > 0) {
        cartBadges[0].textContent = cart.wishlist; // Wishlist badge
        cartBadges[1].textContent = cart.items;     // Cart badge
    }
}

// Save cart to localStorage
function saveCart() {
    localStorage.setItem('shopHub_cart', JSON.stringify(cart));
}

// Add to cart functionality
function addToCart(event) {
    if (event.target.classList.contains('btn-add-cart')) {
        event.preventDefault();
        cart.items++;
        saveCart();
        updateCartBadges();
        
        // Show feedback
        const originalText = event.target.textContent;
        event.target.textContent = '✓ Added!';
        event.target.style.background = 'var(--success)';
        
        setTimeout(() => {
            event.target.textContent = originalText;
            event.target.style.background = '';
        }, 2000);
    }
}

// Add to wishlist functionality
function addToWishlist(event) {
    if (event.target.classList.contains('btn-secondary-small')) {
        event.preventDefault();
        if (event.target.textContent.includes('❤️')) {
            cart.wishlist++;
            event.target.style.color = 'var(--danger)';
        } else {
            cart.wishlist--;
            event.target.style.color = '';
        }
        saveCart();
        updateCartBadges();
    }
}

// Search functionality
function initSearch() {
    const searchInput = document.querySelector('.search-input');
    const searchBtn = document.querySelector('.search-btn');
    
    if (searchBtn) {
        searchBtn.addEventListener('click', () => {
            const query = searchInput.value.trim();
            if (query) {
                console.log('Searching for:', query);
                // Add your search logic here
            }
        });
        
        searchInput?.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                searchBtn.click();
            }
        });
    }
}

// Newsletter form handling
function initNewsletter() {
    const newsletterForm = document.querySelector('.newsletter-form');
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const email = newsletterForm.querySelector('input').value;
            if (email) {
                alert('Thank you for subscribing! Check your email for special offers.');
                newsletterForm.reset();
            }
        });
    }
}

// Contact form handling
function initContactForm() {
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const formData = new FormData(contactForm);
            const data = Object.fromEntries(formData);
            console.log('Form submitted:', data);
            alert('Thank you for contacting us! We will get back to you soon.');
            contactForm.reset();
        });
    }
}

// Price range slider
function initPriceSlider() {
    const slider = document.querySelector('input[type="range"]');
    if (slider) {
        slider.addEventListener('input', (e) => {
            const priceVal = document.querySelector('#price-val');
            if (priceVal) {
                priceVal.textContent = '$' + e.target.value;
            }
        });
    }
}

// Smooth scrolling for navigation
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
}

// Product card hover effects
function initProductCards() {
    const cards = document.querySelectorAll('.product-card');
    cards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.transition = 'all 0.3s ease';
        });
    });
}

// Category card interactions
function initCategoryCards() {
    const categoryCards = document.querySelectorAll('.category-card');
    categoryCards.forEach(card => {
        card.addEventListener('click', () => {
            const category = card.querySelector('h3').textContent;
            console.log('Navigating to category:', category);
            // Add navigation logic here
        });
    });
}

// Pagination
function initPagination() {
    const paginationLinks = document.querySelectorAll('.pagination-link');
    paginationLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            paginationLinks.forEach(l => l.classList.remove('active'));
            link.classList.add('active');
            console.log('Page changed to:', link.textContent);
            // Add pagination logic here
        });
    });
}

// Sort functionality
function initSort() {
    const sortSelect = document.querySelector('.sort-by select');
    if (sortSelect) {
        sortSelect.addEventListener('change', (e) => {
            console.log('Sorting by:', e.target.value);
            // Add sorting logic here
        });
    }
}

// Filter functionality
function initFilters() {
    const filterButtons = document.querySelectorAll('.filter-group input');
    filterButtons.forEach(button => {
        button.addEventListener('change', () => {
            console.log('Filters updated');
            // Add filter logic here
        });
    });
}

// Add to cart batch event listener
function initCartListeners() {
    document.addEventListener('click', addToCart);
    document.addEventListener('click', addToWishlist);
}

// Navbar sticky effects
function initNavbar() {
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 100) {
            navbar?.style.boxShadow = '0 8px 24px rgba(0,0,0,0.15)';
        } else {
            navbar?.style.boxShadow = '';
        }
    });
}

// Initialize all features when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    initCart();
    initSearch();
    initNewsletter();
    initContactForm();
    initPriceSlider();
    initSmoothScroll();
    initProductCards();
    initCategoryCards();
    initPagination();
    initSort();
    initFilters();
    initCartListeners();
    initNavbar();
    
    console.log('ShopHub E-Commerce Platform initialized successfully!');
});

// Add some utility functions
function formatPrice(price) {
    return '$' + price.toFixed(2);
}

function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Log page views
window.addEventListener('load', () => {
    const currentPage = document.title;
    console.log('Page loaded:', currentPage);
});