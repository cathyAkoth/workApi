const Product = require("./models/model");
exports.products = async () => {
    const products = await Product.find();
    return products;
};
exports.productById = async id => {
    const product = await Product.findById(id);
    return product;
}
exports.createProduct = async candidate => {
    const newProduct = await Product.create(candidate);
    return newProduct
}
exports.removeProduct = async id => {
    const product = await Product.findByIdAndRemove(id);
    return product
}