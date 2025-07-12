import { v2 as cloudinary } from 'cloudinary';
import productModel from '../models/productModel.js';

// function for add products
const addProduct = async (req, res) => {
    try {
        const { name, description, price, category, subCategory, sizes, bestseller } = req.body

        // Get the files
        const image1 = req.files.image1 && req.files.image1[0]
        const image2 = req.files.image2 && req.files.image2[0]
        const image3 = req.files.image3 && req.files.image3[0]
        const image4 = req.files.image4 && req.files.image4[0]

        const images = [image1, image2, image3, image4].filter((item) => item !== undefined);

        // If using Option 1 (disk storage)
        // Extract image URLs
        const imagesUrl = await Promise.all(
            images.map(async (item) => {
                // Make sure file exists and has a path
                if (!item || !item.path) {
                    console.log("Missing file or path:", item);
                    return null;
                }

                try {
                    let result = await cloudinary.uploader.upload(item.path, {
                        resource_type: "image",
                        folder: "upload"
                    });
                    console.log("Cloudinary result:", result);
                    return result.secure_url;
                } catch (uploadError) {
                    console.error("Cloudinary upload error:", uploadError);
                    throw uploadError;
                }
            })
        ).then(urls => urls.filter(url => url !== null));

        // If using Option 2 (Cloudinary storage)
        // The URLs are already in the file object
        /*
        const imagesUrl = images.map(item => item.path);
        */

        const productData = {
            name,
            description,
            price: Number(price),
            image: imagesUrl,
            category,
            subCategory,
            sizes: JSON.parse(sizes),
            bestseller: bestseller === "true" ? true : false,
            date: Date.now()
        }

        console.log("Product data:", productData);

        const product = new productModel(productData);
        await product.save();

        res.json({ success: true, message: "Product added successfully" });
    } catch (error) {
        console.error("Error in addProduct:", error);
        res.json({ success: false, message: error.message });
    }
}

// function for list products
const listProducts = async (req, res) => {
    try {
        const products = await productModel.find({});
        res.json({ success: true, products });
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message });
    }
}

// function for remove products
const removeProduct = async (req, res) => {
    try {
        await productModel.findByIdAndDelete(req.body.id);
        res.json({ success: true, message: "Product removed successfully" });
    } catch (error) {
        
        console.log(error);
        res.json({ success: false, message: error.message });
    }
}

// function for single products
const singleProduct = async (req, res) => {
    try {
        const { productId } = req.body
        const product = await productModel.findById(productId)
        res.json({ success: true , product })
        
    } catch (error) {
        
        console.log(error);
        res.json({ success: false, message: error.message });
        
    }
}

export { addProduct, listProducts, removeProduct, singleProduct };
