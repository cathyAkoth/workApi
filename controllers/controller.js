const productRepository = require('../repository')
exports.createProduct = async (req, res) => {
    try {
        let candidate = {
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            image: req.body.image,
            nationality: req.body.nationality,
            email: req.body.email,
            phoneNumber: req.body.phoneNumber,

            price: req.body.price,
            // image: req.file.path
        }
        let product = await productRepository.createProduct({
            ...candidate
        });
        res.status(200).json({
            status: true,
            data: product,
        })
    } catch (err) {
        console.log(err)
        res.status(500).json({
            error: err,
            status: false,
        })
    }
}
exports.getProducts = async (req, res) => {
    try {
        let products = await productRepository.products();
        res.status(200).json({
            status: true,
            data: products,
        })
    } catch (err) {
        console.log(err)
        res.status(500).json({
            error: err,
            status: false,
        })
    }
}

exports.getProductById = async (req, res) => {
    try {
        let id = req.params.id
        let productDetails = await productRepository.productById(id);
        res.status(200).json({
            status: true,
            data: productDetails,
        })
    } catch (err) {
        res.status(500).json({
            status: false,
            error: err
        })
    }
}

exports.updateProductById = async(req, res) => {
    
    let {id} = req.params
    let productDetails = await productRepository.productById(id);
    if(!productDetails) {
        return res.status(404).json({
            message: "verification not found"
        }) 
    }
    await productRepository(id);
    return res.json({
        message: "candidate verification  updated successfully"
    })
}

exports.removeProduct = async (req, res) => {
    try {
        let id = req.params.id
        let productDetails = await productRepository.removeProduct(id)
        res.status(200).json({
            status: true,
            data: productDetails,
        })
    } catch (err) {
        res.status(500).json({
            status: false,
            error: err
        })
    }
}