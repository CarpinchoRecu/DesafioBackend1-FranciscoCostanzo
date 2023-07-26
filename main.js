class ProductManager {
    constructor() {
        this.products = [];
    }
    getProducts() {
        return this.products;
    }

    getProductById(id) {
        let product = this.products.find((prod) => prod.id == id);

        if (product) {
            return product;
        }
        return "Not Found";
    }

    addProduct(product) {
        if (this.products.find((prod) => prod.code == product.code)) {
            return "Producto ya presente con este codigo";
        }

        if (product.code != "" || product.stock >= 0) {
            this.products.push(product);
        } else {
            return "No puedo cargar un producto vacio";
        }
    }
}

class Product {
    constructor(title, description, price, thumbnail, code, stock) {
        this.title = title;
        this.description = description;
        this.price = price;
        this.thumbnail = thumbnail;
        this.code = code;
        this.stock = stock;
        this.id = Product.incrementarID();
    }
    static incrementarID() {
        if (this.idIncrement) {
            this.idIncrement++;
        } else {
            this.idIncrement = 1;
        }
        return this.idIncrement;
    }
}

const product1 = new Product("Arroz", "Rico", 1000, "", "123", 20);
const product2 = new Product("Arroz", "Rico", 1000, "", "456", 20);

const productManager = new ProductManager();

productManager.addProduct(product1);
productManager.addProduct(product2);

console.log(productManager.getProducts());
console.log(productManager.getProductById(2));
