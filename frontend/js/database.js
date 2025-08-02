const STORAGE_KEYS = {
    PRODUCTS: 'anekamarket_products',
    CATEGORIES: 'anekamarket_categories',
    USERS: 'anekamarket_users',
    TRANSACTIONS: 'anekamarket_transactions',
    SETTINGS: 'anekamarket_settings'
};

const Database = {
    init: function() {
        // Initialize default data jika belum ada
        if (!localStorage.getItem(STORAGE_KEYS.USERS)) {
            const defaultAdmin = {
                id: 'U001',
                username: 'admin',
                password: CryptoJS.SHA256('Admin.13579').toString(),
                name: 'Administrator',
                role: 'admin'
            };
            
            const defaultCashier = {
                id: 'U002',
                username: 'kasir',
                password: CryptoJS.SHA256('kasir123').toString(),
                name: 'Kasir',
                role: 'cashier'
            };
            
            localStorage.setItem(STORAGE_KEYS.USERS, JSON.stringify([defaultAdmin, defaultCashier]));
        }
        
        // Inisialisasi lainnya
        ['PRODUCTS', 'CATEGORIES', 'TRANSACTIONS', 'SETTINGS'].forEach(key => {
            if (!localStorage.getItem(STORAGE_KEYS[key])) {
                localStorage.setItem(STORAGE_KEYS[key], JSON.stringify([]));
            }
        });
    },

    // User operations
    getUsers: function() {
        return JSON.parse(localStorage.getItem(STORAGE_KEYS.USERS)) || [];
    },
    
    // Product operations
    getProducts: function() {
        return JSON.parse(localStorage.getItem(STORAGE_KEYS.PRODUCTS)) || [];
    },
    
    saveProducts: function(products) {
        localStorage.setItem(STORAGE_KEYS.PRODUCTS, JSON.stringify(products));
    },
    
    // ... operasi database lainnya
};

// Initialize database saat pertama kali load
Database.init();

export default Database;
