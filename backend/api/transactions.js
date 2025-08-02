// transactions.js - Backend API for transactions
const Database = require('../database');

class TransactionAPI {
    static getAll() {
        return Database.get('anekamarket_transactions');
    }

    static create(transaction) {
        const transactions = this.getAll();
        
        // Validasi transaksi
        if (!transaction.items || transaction.items.length === 0) {
            throw new Error('Transaction must have at least one item');
        }
        
        // Generate transaction ID
        transaction.id = 'TRX' + Date.now();
        transaction.date = new Date();
        
        transactions.unshift(transaction);
        Database.set('anekamarket_transactions', transactions);
        
        return transaction;
    }

    static getByDateRange(startDate, endDate) {
        const transactions = this.getAll();
        return transactions.filter(t => {
            const date = new Date(t.date);
            return date >= startDate && date <= endDate;
        });
    }
}

module.exports = TransactionAPI;
