// Authentication and user management
const STORAGE_KEYS = {
    USER: 'anekamarket_user',
    USERS: 'anekamarket_users'
};

// Default users
const DEFAULT_ADMIN = {
    id: 'U001',
    username: 'admin',
    password: CryptoJS.SHA256('Admin.13579').toString(),
    name: 'Administrator',
    role: 'admin'
};

const DEFAULT_CASHIER = {
    id: 'U002',
    username: 'kasir',
    password: CryptoJS.SHA256('kasir123').toString(),
    name: 'Kasir',
    role: 'cashier'
};

// Initialize users
function initializeUsers() {
    let users = JSON.parse(localStorage.getItem(STORAGE_KEYS.USERS)) || [];
    
    if (!users.find(u => u.username === 'admin')) {
        users.push(DEFAULT_ADMIN);
    }
    
    if (!users.find(u => u.username === 'kasir')) {
        users.push(DEFAULT_CASHIER);
    }
    
    localStorage.setItem(STORAGE_KEYS.USERS, JSON.stringify(users));
}

// Login/logout functions
function handleLogin(username, password) {
    // Implementation
}

function handleLogout() {
    // Implementation
}

// Admin verification
function verifyAdminPassword(password, action) {
    // Implementation
}
