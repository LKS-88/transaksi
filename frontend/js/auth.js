let currentUser = JSON.parse(localStorage.getItem(STORAGE_KEYS.USER)) || null;

function login(username, password) {
    const users = JSON.parse(localStorage.getItem(STORAGE_KEYS.USERS)) || [];
    const user = users.find(u => u.username === username);
    
    if (!user) {
        return { success: false, message: 'Username tidak ditemukan' };
    }
    
    const hashedPassword = CryptoJS.SHA256(password).toString();
    
    if (hashedPassword !== user.password) {
        return { success: false, message: 'Password salah' };
    }
    
    currentUser = user;
    localStorage.setItem(STORAGE_KEYS.USER, JSON.stringify(currentUser));
    return { success: true, user };
}

function logout() {
    currentUser = null;
    localStorage.removeItem(STORAGE_KEYS.USER);
    return { success: true };
}

function isAdmin() {
    return currentUser && currentUser.role === 'admin';
}

// ... other auth related functions ...
