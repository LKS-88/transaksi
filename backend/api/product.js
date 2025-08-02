const Database = require('../database');

class ProductAPI {
    static getAll() {
        return Database.get('anekamarket_products');
    }

    static create(product) {
        const products = this.getAll();
        products.unshift(product);
        Database.set('anekamarket_products', products);
        return product;
    }
}

module.exports = ProductAPI;
