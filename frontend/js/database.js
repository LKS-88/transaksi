// Data storage
const STORAGE_KEYS = {
    PRODUCTS: 'anekamarket_products',
    CATEGORIES: 'anekamarket_categories',
    CUSTOMERS: 'anekamarket_customers',
    TRANSACTIONS: 'anekamarket_transactions',
    USER: 'anekamarket_user',
    CART: 'anekamarket_cart',
    SETTINGS: 'anekamarket_settings',
    USERS: 'anekamarket_users',
    STOCK_HISTORY: 'anekamarket_stock_history'
};

// Default admin user (username: admin, password: Admin.13579)
const DEFAULT_ADMIN = {
    id: 'U001',
    username: 'admin',
    password: CryptoJS.SHA256('Admin.13579').toString(),
    name: 'Administrator',
    role: 'admin'
};

// Default cashier user (username: kasir, password: kasir123)
const DEFAULT_CASHIER = {
    id: 'U002',
    username: 'kasir',
    password: CryptoJS.SHA256('kasir123').toString(),
    name: 'Kasir',
    role: 'cashier'
};

// Initialize data
function initializeData() {
    // Check if users exist, if not create default users
    let users = JSON.parse(localStorage.getItem(STORAGE_KEYS.USERS)) || [];
    
    if (!users.find(u => u.username === 'admin')) {
        users.push(DEFAULT_ADMIN);
    }
    
    if (!users.find(u => u.username === 'kasir')) {
        users.push(DEFAULT_CASHIER);
    }
    
    localStorage.setItem(STORAGE_KEYS.USERS, JSON.stringify(users));
    
    // Initialize other data if not exists
    if (!localStorage.getItem(STORAGE_KEYS.PRODUCTS)) {
        localStorage.setItem(STORAGE_KEYS.PRODUCTS, JSON.stringify([]));
    }
    
    // ... rest of initialization ...
}

// Data access functions
function getProducts() {
    return JSON.parse(localStorage.getItem(STORAGE_KEYS.PRODUCTS)) || [];
}

function saveProducts(products) {
    localStorage.setItem(STORAGE_KEYS.PRODUCTS, JSON.stringify(products));
}

// ... similar functions for other data types ...

// Format currency
function formatCurrency(amount) {
    return 'Rp ' + amount.toFixed(0).replace(/\d(?=(\d{3})+$)/g, '$&.');
}
