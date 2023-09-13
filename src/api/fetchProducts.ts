import axios from 'axios';

const fetchData = async() => {
    const data = await axios.get('https://fakestoreapi.com/products')
        .then((response) => {
            return response.data;
        });
    return data;
}

export default fetchData;