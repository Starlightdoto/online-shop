import React, {useState, FC, useEffect} from 'react';
import {Navbar} from "../components/Navbar";
import Footer from "../components/Footer";
import ProductItem from "../components/ProductItem";
import {Button} from "../components/ui-components/Button";
import {fetchOneProduct} from "../api/fetchProducts";
import {useTranslation} from 'react-i18next';

interface SingleProductPageProps {
    //@ts-ignore
    setCartItems?,
    snackBarIsOpen: boolean,
    setSnackBarIsOpen: React.Dispatch<React.SetStateAction<boolean>>,
}

const SingleProductPage:FC<SingleProductPageProps> = (props) => {
    const {t, i18n} = useTranslation();
    const { setCartItems, snackBarIsOpen, setSnackBarIsOpen} = props;
    const [actualProduct, setActualProduct] = useState(
        {id: null, price: 0, description: 'null', name:'null', category:'null', imgSrc:'null', rating:0}
    );

    const url = window.location.href;
    const productId = url.substring(url.length-1);

    const fetchProduct = async () => {
        const product = await fetchOneProduct(productId);
        setActualProduct((prevState) => {
            return {id: product.id,
                    price: product.price,
                    description: product.description,
                    name: product.title,
                    category: product.category,
                    imgSrc:product.image,
                    rating:product.rating.rate,
            }
        });
    }

    const addToCart = () => {
        setCartItems((prevState:any) => {
            return [...prevState, actualProduct]
        });
        setSnackBarIsOpen(true);
    }

    useEffect(() => {
        fetchProduct();
    }, []);

    return (
        <div>
            <Navbar isOnMainPage={false}  />
            {actualProduct && actualProduct.id ?
                <ProductItem onSinglePage={true} rating={actualProduct.rating} id={actualProduct.id } imgSrc={actualProduct.imgSrc} className={"single"} price={actualProduct.price} description={actualProduct.description} name={actualProduct.name} category={actualProduct.category} />
                : <h1>Loading...</h1>
            }
            <Button onClick={addToCart}  className={"default"} buttonText={t("Add to cart")}/>
            <Footer />
        </div>
    );
};

export default SingleProductPage;