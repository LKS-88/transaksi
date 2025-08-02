// auth.js - Backend API untuk autentikasi
const Database = require('../database');
const CryptoJS = require('crypto-js');

const STORAGE_KEYS = {
    USERS: 'anekamarket_users',
    USER: 'anekamarket_user'
};

class AuthAPI {
    static login(username, password) {
        const users = Database.get(STORAGE_KEYS.USERS);
        const user = users.find(u => u.username === username);
        
        if (!user) {
            return { success: false, message: 'Username tidak ditemukan' };
        }

        const hashedPassword = CryptoJS.SHA256(password).toString();
        if (hashedPassword !== user.password) {
            return { success: false, message: 'Password salah' };
        }

        Database.set(STORAGE_KEYS.USER, user);
        return { success: true, user };
    }

    static logout() {
        Database.set(STORAGE_KEYS.USER, null);
        return { success: true };
    }

    static verifyAdmin(password) {
        const users = Database.get(STORAGE_KEYS.USERS);
        const admin = users.find(u => u.username === 'admin');
        const hashedPassword = CryptoJS.SHA256(password).toString();
        
        if (hashedPassword !== admin.password) {
            return { success: false, message: 'Password admin salah' };
        }
        
        return { success: true };
    }

    static getCurrentUser() {
        return Database.get(STORAGE_KEYS.USER);
    }
}

module.exports = AuthAPI;
