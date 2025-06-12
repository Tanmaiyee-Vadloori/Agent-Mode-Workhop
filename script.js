// Enhanced Indian Restaurant Website - JavaScript
// All functionality in pure frontend with localStorage persistence

// Restaurant Menu Data - Enhanced with more details
const menuItems = [
    // North Indian Dishes
    {
        id: 1,
        name: "Butter Chicken",
        description: "Tender chicken pieces marinated in yogurt and spices, cooked in a rich, creamy tomato-based curry with butter and cream",
        price: 320,
        image: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?w=400&h=300&fit=crop",
        category: "north",
        cuisine: "North Indian",
        spiceLevel: "Medium",
        rating: 4.8,
        preparationTime: "25 mins",
        ingredients: ["Chicken", "Tomatoes", "Cream", "Butter", "Spices"],
        isVeg: false,
        popular: true
    },
    {
        id: 2,
        name: "Paneer Makhani",
        description: "Fresh cottage cheese cubes in a rich, creamy tomato gravy with aromatic spices and a touch of sweetness",
        price: 280,
        image: "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?w=400&h=300&fit=crop",
        category: "north",
        cuisine: "North Indian",
        spiceLevel: "Mild",
        rating: 4.6,
        preparationTime: "20 mins",
        ingredients: ["Paneer", "Tomatoes", "Cream", "Cashews", "Spices"],
        isVeg: true,
        popular: true
    },
    {
        id: 3,
        name: "Tandoori Chicken",
        description: "Marinated chicken grilled to perfection in our traditional tandoor oven, served with mint chutney",
        price: 350,
        image: "https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?w=400&h=300&fit=crop",
        category: "north",
        cuisine: "North Indian",
        spiceLevel: "Medium",
        rating: 4.9,
        preparationTime: "30 mins",
        ingredients: ["Chicken", "Yogurt", "Tandoori Spices", "Mint"],
        isVeg: false,
        popular: true
    },
    {
        id: 4,
        name: "Dal Makhani",
        description: "Slow-cooked black lentils with kidney beans, simmered overnight with butter, cream and aromatic spices",
        price: 220,
        image: "https://images.unsplash.com/photo-1585325701165-6bdc8b8b83c9?w=400&h=300&fit=crop",
        category: "north",
        cuisine: "North Indian",
        spiceLevel: "Mild",
        rating: 4.7,
        preparationTime: "45 mins",
        ingredients: ["Black Lentils", "Kidney Beans", "Butter", "Cream"],
        isVeg: true,
        popular: false
    },
    {
        id: 5,
        name: "Garlic Naan",
        description: "Soft, fluffy bread infused with fresh garlic and herbs, baked fresh in our tandoor oven",
        price: 55,
        image: "https://images.unsplash.com/photo-1586190848861-99aa4a171e90?w=400&h=300&fit=crop",
        category: "north",
        cuisine: "North Indian",
        spiceLevel: "None",
        rating: 4.5,
        preparationTime: "15 mins",
        ingredients: ["Flour", "Garlic", "Herbs", "Butter"],
        isVeg: true,
        popular: false
    },
    {
        id: 6,
        name: "Chicken Biryani",
        description: "Fragrant basmati rice layered with spiced chicken, saffron, and caramelized onions, cooked to perfection",
        price: 380,
        image: "https://images.unsplash.com/photo-1563379091339-03246963d51a?w=400&h=300&fit=crop",
        category: "north",
        cuisine: "North Indian",
        spiceLevel: "Medium",
        rating: 4.8,
        preparationTime: "40 mins",
        ingredients: ["Basmati Rice", "Chicken", "Saffron", "Onions", "Spices"],
        isVeg: false,
        popular: true
    },
    {
        id: 7,
        name: "Rogan Josh",
        description: "Traditional Kashmiri lamb curry with aromatic spices, yogurt, and a hint of fennel powder",
        price: 420,
        image: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=400&h=300&fit=crop",
        category: "north",
        cuisine: "North Indian",
        spiceLevel: "High",
        rating: 4.6,
        preparationTime: "50 mins",
        ingredients: ["Lamb", "Yogurt", "Kashmiri Spices", "Fennel"],
        isVeg: false,
        popular: false
    },
    {
        id: 8,
        name: "Chole Bhature",
        description: "Spicy chickpea curry served with fluffy deep-fried bread, garnished with onions and pickle",
        price: 180,
        image: "https://images.unsplash.com/photo-1606491956689-2ea866880c84?w=400&h=300&fit=crop",
        category: "north",
        cuisine: "North Indian",
        spiceLevel: "Medium",
        rating: 4.4,
        preparationTime: "25 mins",
        ingredients: ["Chickpeas", "Flour", "Spices", "Oil"],
        isVeg: true,
        popular: false
    },

    // South Indian Dishes
    {
        id: 9,
        name: "Masala Dosa",
        description: "Crispy rice and lentil crepe filled with spiced potato curry, served with sambar and coconut chutney",
        price: 120,
        image: "https://images.unsplash.com/photo-1668236543090-82eba5ee5976?w=400&h=300&fit=crop",
        category: "south",
        cuisine: "South Indian",
        spiceLevel: "Medium",
        rating: 4.7,
        preparationTime: "20 mins",
        ingredients: ["Rice", "Lentils", "Potatoes", "Coconut", "Curry Leaves"],
        isVeg: true,
        popular: true
    },
    {
        id: 10,
        name: "Idli Sambar",
        description: "Soft steamed rice cakes served with tangy lentil curry and coconut chutney",
        price: 80,
        image: "https://images.unsplash.com/photo-1630383249896-424e482df921?w=400&h=300&fit=crop",
        category: "south",
        cuisine: "South Indian",
        spiceLevel: "Mild",
        rating: 4.5,
        preparationTime: "15 mins",
        ingredients: ["Rice", "Lentils", "Coconut", "Tamarind"],
        isVeg: true,
        popular: true
    },
    {
        id: 11,
        name: "Chicken Chettinad",
        description: "Spicy Tamil Nadu style chicken curry with black pepper, coconut, and traditional Chettinad spices",
        price: 340,
        image: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=400&h=300&fit=crop",
        category: "south",
        cuisine: "South Indian",
        spiceLevel: "High",
        rating: 4.8,
        preparationTime: "35 mins",
        ingredients: ["Chicken", "Black Pepper", "Coconut", "Chettinad Spices"],
        isVeg: false,
        popular: true
    },
    {
        id: 12,
        name: "Sambar Rice",
        description: "Comforting rice mixed with tangy lentil curry, vegetables, and South Indian spices",
        price: 140,
        image: "https://images.unsplash.com/photo-1596797038530-2c107229654b?w=400&h=300&fit=crop",
        category: "south",
        cuisine: "South Indian",
        spiceLevel: "Medium",
        rating: 4.3,
        preparationTime: "20 mins",
        ingredients: ["Rice", "Lentils", "Vegetables", "Tamarind", "Spices"],
        isVeg: true,
        popular: false
    },
    {
        id: 13,
        name: "Rava Uttapam",
        description: "Thick pancake made from semolina and rice batter, topped with vegetables and herbs",
        price: 110,
        image: "https://images.unsplash.com/photo-1630383249896-424e482df921?w=400&h=300&fit=crop",
        category: "south",
        cuisine: "South Indian",
        spiceLevel: "Mild",
        rating: 4.4,
        preparationTime: "18 mins",
        ingredients: ["Semolina", "Rice", "Vegetables", "Herbs"],
        isVeg: true,
        popular: false
    },
    {
        id: 14,
        name: "Kerala Fish Curry",
        description: "Traditional Kerala fish curry cooked in coconut milk with curry leaves, ginger, and spices",
        price: 380,
        image: "https://images.unsplash.com/photo-1585325701165-6bdc8b8b83c9?w=400&h=300&fit=crop",
        category: "south",
        cuisine: "South Indian",
        spiceLevel: "Medium",
        rating: 4.6,
        preparationTime: "30 mins",
        ingredients: ["Fish", "Coconut Milk", "Curry Leaves", "Ginger", "Spices"],
        isVeg: false,
        popular: false
    },

    // Appetizers
    {
        id: 15,
        name: "Vegetable Samosa",
        description: "Crispy golden pastry triangles filled with spiced potatoes, peas, and aromatic herbs",
        price: 60,
        image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?w=400&h=300&fit=crop",
        category: "appetizers",
        cuisine: "Indian",
        spiceLevel: "Medium",
        rating: 4.6,
        preparationTime: "10 mins",
        ingredients: ["Potatoes", "Peas", "Flour", "Spices"],
        isVeg: true,
        popular: true
    },
    {
        id: 16,
        name: "Mixed Pakoras",
        description: "Assorted vegetable fritters in seasoned chickpea batter, served hot with mint chutney",
        price: 85,
        image: "https://images.unsplash.com/photo-1606491956689-2ea866880c84?w=400&h=300&fit=crop",
        category: "appetizers",
        cuisine: "Indian",
        spiceLevel: "Medium",
        rating: 4.5,
        preparationTime: "12 mins",
        ingredients: ["Mixed Vegetables", "Chickpea Flour", "Spices"],
        isVeg: true,
        popular: false
    },
    {
        id: 17,
        name: "Chicken Tikka Starter",
        description: "Succulent chicken pieces marinated in yogurt and spices, grilled in tandoor and served sizzling",
        price: 290,
        image: "https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?w=400&h=300&fit=crop",
        category: "appetizers",
        cuisine: "North Indian",
        spiceLevel: "Medium",
        rating: 4.7,
        preparationTime: "25 mins",
        ingredients: ["Chicken", "Yogurt", "Tandoori Spices"],
        isVeg: false,
        popular: true
    },
    {
        id: 18,
        name: "Masala Papadum",
        description: "Crispy lentil wafers topped with onions, tomatoes, and spices, served with mint chutney",
        price: 45,
        image: "https://images.unsplash.com/photo-1596797038530-2c107229654b?w=400&h=300&fit=crop",
        category: "appetizers",
        cuisine: "Indian",
        spiceLevel: "Mild",
        rating: 4.2,
        preparationTime: "5 mins",
        ingredients: ["Lentil Wafers", "Onions", "Tomatoes", "Spices"],
        isVeg: true,
        popular: false
    },

    // Desserts
    {
        id: 19,
        name: "Gulab Jamun",
        description: "Soft, spongy milk dumplings soaked in aromatic sugar syrup flavored with cardamom and rose water",
        price: 85,
        image: "https://images.unsplash.com/photo-1571115764595-644a1f56a55c?w=400&h=300&fit=crop",
        category: "desserts",
        cuisine: "Indian",
        spiceLevel: "None",
        rating: 4.8,
        preparationTime: "15 mins",
        ingredients: ["Milk Powder", "Sugar", "Cardamom", "Rose Water"],
        isVeg: true,
        popular: true
    },
    {
        id: 20,
        name: "Kulfi Falooda",
        description: "Traditional Indian ice cream with pistachios and cardamom, served with vermicelli and rose syrup",
        price: 95,
        image: "https://images.unsplash.com/photo-1551024601-bec78aea704b?w=400&h=300&fit=crop",
        category: "desserts",
        cuisine: "Indian",
        spiceLevel: "None",
        rating: 4.7,
        preparationTime: "10 mins",
        ingredients: ["Milk", "Pistachios", "Cardamom", "Vermicelli", "Rose Syrup"],
        isVeg: true,
        popular: true
    }
];

// Global Variables
let cart = [];
let cartCount = 0;
let currentFilter = 'all';
let currentSearchQuery = '';
let displayedItems = 12; // For lazy loading

// DOM Elements
const loadingScreen = document.getElementById('loadingScreen');
const navbar = document.getElementById('navbar');
const menuGrid = document.getElementById('menuGrid');
const cartItems = document.getElementById('cartItems');
const cartTotal = document.getElementById('cartTotal');
const cartCountElement = document.getElementById('cartCount');
const cartTotalNav = document.getElementById('cartTotalNav');
const cartSidebar = document.getElementById('cartSidebar');
const cartOverlay = document.getElementById('cartOverlay');
const cartSubtotal = document.getElementById('cartSubtotal');
const cartTax = document.getElementById('cartTax');
const cartFinalTotal = document.getElementById('cartFinalTotal');
const cartSummary = document.getElementById('cartSummary');
const checkoutBtn = document.getElementById('checkoutBtn');
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('navMenu');
const searchInput = document.getElementById('menuSearch');
const searchClear = document.querySelector('.search-clear');
const modalOverlay = document.getElementById('modalOverlay');
const modalContent = document.getElementById('modalContent');
const notificationContainer = document.getElementById('notificationContainer');

// Initialize Website
document.addEventListener('DOMContentLoaded', function() {
    initializeWebsite();
});

function initializeWebsite() {
    // Show loading screen with progress
    simulateLoading();
    
    // Load cart from localStorage
    loadCartFromStorage();
    
    // Display menu items
    displayMenuItems(getFilteredItems());
    
    // Setup event listeners
    setupEventListeners();
    
    // Initialize navigation
    initializeNavigation();
    
    // Setup intersection observer for animations
    setupScrollAnimations();
    
    // Setup form validation
    setupFormValidation();
}

// Loading Screen Animation
function simulateLoading() {
    let progress = 0;
    const progressBar = document.querySelector('.loading-progress');
    
    const loadingInterval = setInterval(() => {
        progress += Math.random() * 15;
        if (progress > 100) progress = 100;
        
        progressBar.style.width = progress + '%';
        
        if (progress >= 100) {
            clearInterval(loadingInterval);
            setTimeout(() => {
                loadingScreen.classList.add('hidden');
                document.body.style.overflow = 'auto';
                // Trigger entrance animations
                triggerEntranceAnimations();
            }, 500);
        }
    }, 100);
}

function triggerEntranceAnimations() {
    // Add entrance animations for hero elements
    const heroElements = document.querySelectorAll('.hero-text > *');
    heroElements.forEach((element, index) => {
        element.style.animationDelay = `${index * 0.2}s`;
        element.classList.add('fade-in');
    });
}

// Menu Display Functions
function displayMenuItems(items) {
    if (!menuGrid) return;
    
    // Clear existing items
    menuGrid.innerHTML = '';
    
    // Get items to display (for pagination)
    const itemsToShow = items.slice(0, displayedItems);
    
    itemsToShow.forEach((item, index) => {
        const menuItemElement = createMenuItemElement(item, index);
        menuGrid.appendChild(menuItemElement);
    });
    
    // Setup lazy loading for images
    setupLazyLoading();
    
    // Show/hide load more button
    toggleLoadMoreButton(items.length > displayedItems);
}

function createMenuItemElement(item, index) {
    const menuItem = document.createElement('div');
    menuItem.className = 'menu-item';
    menuItem.setAttribute('data-category', item.category);
    menuItem.style.animationDelay = `${index * 0.1}s`;
    
    const spiceLevelText = item.spiceLevel !== 'None' ? 
        `<div class="spice-level">${item.spiceLevel}</div>` : '';
    
    const popularBadge = item.popular ? 
        `<div class="popular-badge">⭐ Popular</div>` : '';
    
    const vegIcon = item.isVeg ? '🟢' : '🔴';
    
    menuItem.innerHTML = `
        <div class="menu-item-image">
            <img src="${item.image}" alt="${item.name}" loading="lazy">
            <div class="cuisine-tag">${item.cuisine}</div>
            ${spiceLevelText}
            ${popularBadge}
            <div class="item-overlay">
                <button class="quick-view-btn" onclick="showItemModal(${item.id})">
                    <i class="fas fa-eye"></i> Quick View
                </button>
            </div>
        </div>
        <div class="menu-item-content">
            <div class="item-header">
                <h3>${item.name} ${vegIcon}</h3>
                <div class="rating">
                    <span class="stars">${generateStars(item.rating)}</span>
                    <span class="rating-text">${item.rating}</span>
                </div>
            </div>
            <p class="menu-item-description">${item.description}</p>
            <div class="item-meta">
                <span class="prep-time"><i class="fas fa-clock"></i> ${item.preparationTime}</span>
                <span class="spice-indicator">🌶️ ${item.spiceLevel}</span>
            </div>
            <div class="menu-item-footer">
                <span class="price">₹${item.price}</span>
                <button class="add-to-cart-btn" onclick="addToCart(${item.id})">
                    <i class="fas fa-plus"></i>
                    <span>Add to Cart</span>
                </button>
            </div>
        </div>
    `;
    
    return menuItem;
}

function generateStars(rating) {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    let stars = '';
    
    for (let i = 0; i < fullStars; i++) {
        stars += '⭐';
    }
    if (hasHalfStar) {
        stars += '⭐';
    }
    
    return stars;
}

// Filter and Search Functions
function filterMenu(category) {
    currentFilter = category;
    displayedItems = 12; // Reset pagination
    
    // Update active button
    document.querySelectorAll('.category-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    document.querySelector(`[data-category="${category}"]`).classList.add('active');
    
    // Display filtered items with animation
    const filteredItems = getFilteredItems();
    animateItemTransition(() => {
        displayMenuItems(filteredItems);
    });
}

function searchMenu() {
    currentSearchQuery = searchInput.value.toLowerCase();
    displayedItems = 12; // Reset pagination
    
    // Show/hide clear button
    searchClear.style.display = currentSearchQuery ? 'block' : 'none';
    
    // Display filtered items
    const filteredItems = getFilteredItems();
    animateItemTransition(() => {
        displayMenuItems(filteredItems);
    });
}

function clearSearch() {
    searchInput.value = '';
    currentSearchQuery = '';
    searchClear.style.display = 'none';
    
    const filteredItems = getFilteredItems();
    animateItemTransition(() => {
        displayMenuItems(filteredItems);
    });
}

function getFilteredItems() {
    let items = menuItems;
    
    // Filter by category
    if (currentFilter !== 'all') {
        items = items.filter(item => item.category === currentFilter);
    }
    
    // Filter by search query
    if (currentSearchQuery) {
        items = items.filter(item => 
            item.name.toLowerCase().includes(currentSearchQuery) ||
            item.description.toLowerCase().includes(currentSearchQuery) ||
            item.cuisine.toLowerCase().includes(currentSearchQuery) ||
            item.ingredients.some(ingredient => 
                ingredient.toLowerCase().includes(currentSearchQuery)
            )
        );
    }
    
    return items;
}

function animateItemTransition(callback) {
    const items = document.querySelectorAll('.menu-item');
    items.forEach(item => item.classList.add('hidden'));
    
    setTimeout(() => {
        callback();
        setTimeout(() => {
            const newItems = document.querySelectorAll('.menu-item');
            newItems.forEach(item => item.classList.remove('hidden'));
        }, 50);
    }, 300);
}

function loadMoreItems() {
    displayedItems += 8;
    const filteredItems = getFilteredItems();
    displayMenuItems(filteredItems);
}

function toggleLoadMoreButton(show) {
    const loadMoreContainer = document.querySelector('.load-more-container');
    if (loadMoreContainer) {
        loadMoreContainer.style.display = show ? 'block' : 'none';
    }
}

// Modal Functions
function showItemModal(itemId) {
    const item = menuItems.find(menuItem => menuItem.id === itemId);
    if (!item) return;
    
    const vegIcon = item.isVeg ? '🟢 Vegetarian' : '🔴 Non-Vegetarian';
    
    modalContent.innerHTML = `
        <div class="modal-item">
            <button class="modal-close" onclick="closeModal()">
                <i class="fas fa-times"></i>
            </button>
            <div class="modal-image">
                <img src="${item.image}" alt="${item.name}">
                <div class="modal-badges">
                    ${item.popular ? '<span class="popular-badge">⭐ Popular</span>' : ''}
                    <span class="cuisine-badge">${item.cuisine}</span>
                </div>
            </div>
            <div class="modal-details">
                <div class="modal-header">
                    <h2>${item.name}</h2>
                    <div class="rating">
                        <span class="stars">${generateStars(item.rating)}</span>
                        <span class="rating-text">${item.rating}/5</span>
                    </div>
                </div>
                <p class="modal-description">${item.description}</p>
                <div class="modal-meta">
                    <div class="meta-item">
                        <i class="fas fa-clock"></i>
                        <span>Prep Time: ${item.preparationTime}</span>
                    </div>
                    <div class="meta-item">
                        <i class="fas fa-pepper-hot"></i>
                        <span>Spice Level: ${item.spiceLevel}</span>
                    </div>
                    <div class="meta-item">
                        <i class="fas fa-leaf"></i>
                        <span>${vegIcon}</span>
                    </div>
                </div>
                <div class="ingredients">
                    <h4>Ingredients:</h4>
                    <div class="ingredient-tags">
                        ${item.ingredients.map(ingredient => 
                            `<span class="ingredient-tag">${ingredient}</span>`
                        ).join('')}
                    </div>
                </div>
                <div class="modal-footer">
                    <div class="modal-price">₹${item.price}</div>
                    <div class="quantity-selector">
                        <button onclick="changeModalQuantity(-1)">-</button>
                        <span id="modalQuantity">1</span>
                        <button onclick="changeModalQuantity(1)">+</button>
                    </div>
                    <button class="modal-add-to-cart" onclick="addToCartFromModal(${item.id})">
                        <i class="fas fa-cart-plus"></i>
                        Add to Cart
                    </button>
                </div>
            </div>
        </div>
    `;
    
    modalOverlay.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    modalOverlay.classList.remove('active');
    document.body.style.overflow = 'auto';
}

function changeModalQuantity(change) {
    const quantityElement = document.getElementById('modalQuantity');
    let quantity = parseInt(quantityElement.textContent);
    quantity += change;
    if (quantity < 1) quantity = 1;
    if (quantity > 10) quantity = 10;
    quantityElement.textContent = quantity;
}

function addToCartFromModal(itemId) {
    const quantity = parseInt(document.getElementById('modalQuantity').textContent);
    const item = menuItems.find(menuItem => menuItem.id === itemId);
    
    for (let i = 0; i < quantity; i++) {
        addToCart(itemId);
    }
    
    closeModal();
    showNotification(`${quantity} x ${item.name} added to cart!`, 'success');
}

// Cart Functions
function addToCart(itemId) {
    const item = menuItems.find(menuItem => menuItem.id === itemId);
    const existingItem = cart.find(cartItem => cartItem.id === itemId);
    
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({...item, quantity: 1});
    }
    
    updateCartDisplay();
    saveCartToStorage();
    showNotification(`${item.name} added to cart!`, 'success');
    
    // Add visual feedback
    const button = event.target.closest('.add-to-cart-btn');
    if (button) {
        button.style.transform = 'scale(0.95)';
        setTimeout(() => {
            button.style.transform = 'scale(1)';
        }, 150);
    }
}

function removeFromCart(itemId) {
    const item = cart.find(cartItem => cartItem.id === itemId);
    cart = cart.filter(cartItem => cartItem.id !== itemId);
    
    updateCartDisplay();
    saveCartToStorage();
    showNotification(`${item.name} removed from cart`, 'error');
}

function updateQuantity(itemId, change) {
    const item = cart.find(cartItem => cartItem.id === itemId);
    if (item) {
        item.quantity += change;
        if (item.quantity <= 0) {
            removeFromCart(itemId);
        } else {
            updateCartDisplay();
            saveCartToStorage();
        }
    }
}

function updateCartDisplay() {
    cartCount = cart.reduce((total, item) => total + item.quantity, 0);
    cartCountElement.textContent = cartCount;
    
    // Calculate totals
    const subtotal = cart.reduce((total, item) => total + (item.price * item.quantity), 0);
    const deliveryFee = subtotal > 0 ? 50 : 0;
    const tax = Math.round(subtotal * 0.05);
    const finalTotal = subtotal + deliveryFee + tax;
    
    // Update navigation cart display
    cartTotalNav.textContent = subtotal;
    
    // Update cart sidebar
    cartItems.innerHTML = '';
    
    if (cart.length === 0) {
        cartItems.innerHTML = `
            <div class="empty-cart">
                <div class="empty-cart-icon">🛒</div>
                <h4>Your cart is empty</h4>
                <p>Add some delicious items to get started!</p>
            </div>
        `;
        cartSummary.style.display = 'none';
        checkoutBtn.disabled = true;
    } else {
        cart.forEach(item => {
            const cartItemElement = createCartItemElement(item);
            cartItems.appendChild(cartItemElement);
        });
        
        // Update summary
        cartSubtotal.textContent = subtotal;
        cartTax.textContent = tax;
        cartFinalTotal.textContent = finalTotal;
        cartSummary.style.display = 'block';
        checkoutBtn.disabled = false;
    }
    
    cartTotal.textContent = finalTotal;
}

function createCartItemElement(item) {
    const cartItem = document.createElement('div');
    cartItem.className = 'cart-item';
    
    cartItem.innerHTML = `
        <div class="cart-item-image">
            <img src="${item.image}" alt="${item.name}">
        </div>
        <div class="cart-item-details">
            <div class="cart-item-name">${item.name}</div>
            <div class="cart-item-price">₹${item.price} × ${item.quantity}</div>
            <div class="cart-item-total">Total: ₹${item.price * item.quantity}</div>
            <div class="quantity-controls">
                <button class="quantity-btn" onclick="updateQuantity(${item.id}, -1)">-</button>
                <span class="quantity">${item.quantity}</span>
                <button class="quantity-btn" onclick="updateQuantity(${item.id}, 1)">+</button>
                <button class="remove-btn" onclick="removeFromCart(${item.id})" title="Remove item">
                    <i class="fas fa-trash"></i>
                </button>
            </div>
        </div>
    `;
    
    return cartItem;
}

function toggleCart() {
    cartSidebar.classList.toggle('active');
    cartOverlay.classList.toggle('active');
    document.body.style.overflow = cartSidebar.classList.contains('active') ? 'hidden' : 'auto';
}

function closeCart() {
    cartSidebar.classList.remove('active');
    cartOverlay.classList.remove('active');
    document.body.style.overflow = 'auto';
}

function clearCart() {
    if (cart.length === 0) return;
    
    if (confirm('Are you sure you want to clear your cart?')) {
        cart = [];
        updateCartDisplay();
        saveCartToStorage();
        showNotification('Cart cleared successfully', 'error');
    }
}

function checkout() {
    if (cart.length === 0) {
        showNotification('Your cart is empty!', 'error');
        return;
    }
    
    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const itemCount = cart.reduce((sum, item) => sum + item.quantity, 0);
    const orderSummary = cart.map(item => `${item.name} × ${item.quantity}`).join(', ');
    
    // Simulate order processing
    showNotification('Processing your order...', 'info');
    
    setTimeout(() => {
        // Save order to order history
        const order = {
            id: Date.now(),
            items: [...cart],
            total: total + 50 + Math.round(total * 0.05), // Including delivery and tax
            timestamp: new Date().toISOString(),
            status: 'confirmed'
        };
        
        saveOrderToStorage(order);
        
        // Clear cart
        cart = [];
        updateCartDisplay();
        closeCart();
        
        // Show success message
        showNotification(
            `Order placed successfully! ✅\n${itemCount} items • ₹${order.total}\nEstimated delivery: 30-45 minutes`, 
            'success'
        );
        
        // Simulate order tracking
        simulateOrderTracking(order.id);
        
    }, 2000);
}

function simulateOrderTracking(orderId) {
    const stages = [
        { status: 'Order Confirmed', time: 0 },
        { status: 'Preparing Food', time: 5000 },
        { status: 'Out for Delivery', time: 15000 },
        { status: 'Delivered', time: 25000 }
    ];
    
    stages.forEach((stage, index) => {
        setTimeout(() => {
            if (index < stages.length - 1) {
                showNotification(`Order #${orderId}: ${stage.status}`, 'info');
            } else {
                showNotification(`Order #${orderId}: ${stage.status}! 🎉\nThank you for dining with Spice Palace!`, 'success');
            }
        }, stage.time);
    });
}

// Storage Functions
function saveCartToStorage() {
    localStorage.setItem('spicePalaceCart', JSON.stringify(cart));
}

function loadCartFromStorage() {
    const savedCart = localStorage.getItem('spicePalaceCart');
    if (savedCart) {
        cart = JSON.parse(savedCart);
        updateCartDisplay();
    }
}

function saveOrderToStorage(order) {
    let orders = JSON.parse(localStorage.getItem('spicePalaceOrders') || '[]');
    orders.unshift(order);
    // Keep only last 10 orders
    orders = orders.slice(0, 10);
    localStorage.setItem('spicePalaceOrders', JSON.stringify(orders));
}

// Notification System
function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    
    // Handle multi-line messages
    const lines = message.split('\n');
    notification.innerHTML = lines.map(line => `<div>${line}</div>`).join('');
    
    notificationContainer.appendChild(notification);
    
    // Auto remove after 5 seconds
    setTimeout(() => {
        notification.style.transform = 'translateX(100%)';
        notification.style.opacity = '0';
        setTimeout(() => {
            if (notification.parentNode) {
                notificationContainer.removeChild(notification);
            }
        }, 300);
    }, 5000);
    
    // Click to dismiss
    notification.addEventListener('click', () => {
        notification.style.transform = 'translateX(100%)';
        notification.style.opacity = '0';
        setTimeout(() => {
            if (notification.parentNode) {
                notificationContainer.removeChild(notification);
            }
        }, 300);
    });
}

// Navigation Functions
function initializeNavigation() {
    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
                
                // Close mobile menu if open
                navMenu.classList.remove('active');
                hamburger.classList.remove('active');
                document.body.style.overflow = 'auto';
            }
        });
    });
    
    // Active navigation link highlighting
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('section[id]');
    
    window.addEventListener('scroll', () => {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (window.scrollY >= sectionTop - 100) {
                current = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    });
}

// Event Listeners Setup
function setupEventListeners() {
    // Mobile menu toggle
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
        
        // Prevent body scroll when menu is open
        document.body.style.overflow = navMenu.classList.contains('active') ? 'hidden' : 'auto';
    });
    
    // Close mobile menu when clicking outside
    document.addEventListener('click', (e) => {
        if (!navMenu.contains(e.target) && !hamburger.contains(e.target)) {
            navMenu.classList.remove('active');
            hamburger.classList.remove('active');
            document.body.style.overflow = 'auto';
        }
    });
    
    // Search input events
    if (searchInput) {
        searchInput.addEventListener('input', searchMenu);
        searchInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                searchMenu();
            }
        });
    }
    
    // Close cart when clicking overlay
    cartOverlay.addEventListener('click', closeCart);
    
    // Prevent cart from closing when clicking inside
    cartSidebar.addEventListener('click', (e) => {
        e.stopPropagation();
    });
    
    // Close modal when clicking overlay
    modalOverlay.addEventListener('click', (e) => {
        if (e.target === modalOverlay) {
            closeModal();
        }
    });
    
    // Navbar scroll effect
    window.addEventListener('scroll', () => {
        if (window.scrollY > 100) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
    
    // Keyboard navigation
    document.addEventListener('keydown', (e) => {
        // Escape key closes modals and cart
        if (e.key === 'Escape') {
            closeModal();
            closeCart();
            navMenu.classList.remove('active');
            hamburger.classList.remove('active');
            document.body.style.overflow = 'auto';
        }
    });
}

// Form Validation
function setupFormValidation() {
    const reservationForm = document.getElementById('reservationForm');
    
    if (reservationForm) {
        reservationForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const formData = {
                name: document.getElementById('customerName').value,
                email: document.getElementById('customerEmail').value,
                phone: document.getElementById('customerPhone').value,
                guests: document.getElementById('guestCount').value,
                date: document.getElementById('reservationDate').value,
                time: document.getElementById('reservationTime').value,
                requests: document.getElementById('specialRequests').value
            };
            
            // Basic validation
            if (!formData.name || !formData.email || !formData.phone || !formData.guests || !formData.date || !formData.time) {
                showNotification('Please fill in all required fields', 'error');
                return;
            }
            
            // Email validation
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(formData.email)) {
                showNotification('Please enter a valid email address', 'error');
                return;
            }
            
            // Date validation (no past dates)
            const selectedDate = new Date(formData.date);
            const today = new Date();
            today.setHours(0, 0, 0, 0);
            
            if (selectedDate < today) {
                showNotification('Please select a future date', 'error');
                return;
            }
            
            // Simulate reservation processing
            const submitBtn = this.querySelector('.submit-btn');
            const originalText = submitBtn.innerHTML;
            
            submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Processing...';
            submitBtn.disabled = true;
            
            setTimeout(() => {
                // Save reservation
                const reservation = {
                    ...formData,
                    id: Date.now(),
                    timestamp: new Date().toISOString(),
                    status: 'confirmed'
                };
                
                let reservations = JSON.parse(localStorage.getItem('spicePalaceReservations') || '[]');
                reservations.unshift(reservation);
                localStorage.setItem('spicePalaceReservations', JSON.stringify(reservations));
                
                // Reset form
                this.reset();
                
                // Show success message
                showNotification(
                    `Table reserved successfully! 🎉\nDate: ${formData.date}\nTime: ${formData.time}\nGuests: ${formData.guests}`, 
                    'success'
                );
                
                // Reset button
                submitBtn.innerHTML = originalText;
                submitBtn.disabled = false;
                
            }, 2000);
        });
        
        // Set minimum date to today
        const dateInput = document.getElementById('reservationDate');
        if (dateInput) {
            const today = new Date().toISOString().split('T')[0];
            dateInput.setAttribute('min', today);
        }
    }
}

// Scroll Animations
function setupScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Observe elements for scroll animations
    document.querySelectorAll('.feature-card, .info-card, .gallery-item').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'all 0.6s ease';
        observer.observe(el);
    });
}

// Lazy Loading for Images
function setupLazyLoading() {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src || img.src;
                img.classList.remove('lazy');
                observer.unobserve(img);
            }
        });
    });
    
    document.querySelectorAll('img[loading="lazy"]').forEach(img => {
        imageObserver.observe(img);
    });
}

// Utility Functions
function formatPrice(price) {
    return new Intl.NumberFormat('en-IN', {
        style: 'currency',
        currency: 'INR',
        minimumFractionDigits: 0
    }).format(price);
}

function formatDate(dateString) {
    return new Date(dateString).toLocaleDateString('en-IN', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
    });
}

// Privacy Policy Modal (placeholder)
function showPrivacyPolicy() {
    showNotification('Privacy Policy: We respect your privacy and protect your personal information. Contact us for more details.', 'info');
}

// Export functions for debugging (development only)
if (typeof window !== 'undefined') {
    window.restaurantApp = {
        cart,
        menuItems,
        addToCart,
        removeFromCart,
        clearCart,
        filterMenu,
        searchMenu,
        showNotification,
        getOrders: () => JSON.parse(localStorage.getItem('spicePalaceOrders') || '[]'),
        getReservations: () => JSON.parse(localStorage.getItem('spicePalaceReservations') || '[]')
    };
}

console.log('🍛 Spice Palace Restaurant loaded successfully!');
console.log('Available functions:', Object.keys(window.restaurantApp || {}));