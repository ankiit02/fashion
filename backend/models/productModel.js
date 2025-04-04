import mongoose from "mongoose";

// schema is a structure using that create data in DB

const productSchema = new mongoose.Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    image: { type: Array, required: true },
    category: { type: String, required: false },
    subCategory: { type: String, required: true },
    sizes: {type: Array, required: true },
    bestseller: { type: Boolean },
    date: { type: Number, required: true }
})

const productModel = mongoose.models.product || mongoose.model("product",productSchema);

export default productModel

