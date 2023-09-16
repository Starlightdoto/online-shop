import axios from 'axios';

const fetchAllProducts = async(limit?:string) => {
    const data = await axios.get(`https://fakestoreapi.com/products?limit=${limit}`)
        .then((response) => {
            return response.data;
        });
    return data;
}

export const fetchOneProduct = async(id:string) => {
    const product = await axios.get(`https://fakestoreapi.com/products/${id}`)
        .then((response) => {
            return response.data;
        })
    return product;
}

export const fetchOneCategory = async (category: string) => {
    const categoryProducts = await axios.get(`https://fakestoreapi.com/products/category/${category}`)
        .then((response) => {
            return response.data;
        })
    return categoryProducts;
}

export default fetchAllProducts;