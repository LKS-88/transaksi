let currentCart = JSON.parse(localStorage.getItem(STORAGE_KEYS.CART)) || {
    items: [],
    subtotal: 0,
    discount: 0,
    donation: 0,
    shipping: 0,
    total: 0
};

function updateCart() {
    // Calculate cart totals...
    localStorage.setItem(STORAGE_KEYS.CART, JSON.stringify(currentCart));
    return currentCart;
}

function createTransaction(transactionData) {
    const transactions = getTransactions();
    transactions.unshift(transactionData);
    saveTransactions(transactions);
    return transactionData;
}

// ... other transaction related functions ...
