import React, {useState, FC, useEffect} from 'react';
import {Navbar} from "../components/Navbar";
import Footer from "../components/Footer";
import ProductItem from "../components/ProductItem";
import {Button} from "../components/ui-components/Button";
import {fetchOneProduct} from "../api/fetchProducts";
import {useTranslation} from 'react-i18next';

interface SingleProductPageProps {
    setCartItems?: any,
    snackBarIsOpen: boolean,
    setSnackBarIsOpen: React.Dispatch<React.SetStateAction<boolean>>,
    snackBarInfo: string,
    setSnackBarInfo: React.Dispatch<React.SetStateAction<string>>,
    setSnackBarMessage: React.Dispatch<React.SetStateAction<string>>,
    currentUser: any,
    setCurrentUser: any,
}

const SingleProductPage:FC<SingleProductPageProps> = (props) => {
    const {t, i18n} = useTranslation();
    const { setCartItems, snackBarIsOpen,
            setSnackBarIsOpen, setSnackBarInfo, snackBarInfo,
            setSnackBarMessage, currentUser, setCurrentUser } = props;
    const [actualProduct, setActualProduct] = useState(
        {id: "", price: 0, description: 'null', quantity: 0, name:'null', category:'null', imgSrc:'null', rating:0}
    );

    //getting ID of current product
    const getCurrentId = () => {
        const url = window.location.href;
        let tempId = "" ;
        let currentId = "";
        for(let i = url.length-1; url[i] !== "/"; i--) {
            tempId += url[i];
        }
        for(let j = tempId.length-1; j >= 0; j--) {
            currentId += tempId[j];
        }
        return currentId;
    }

    const fetchProduct = async () => {
        const product = await fetchOneProduct(getCurrentId());
        if(product) {
            setActualProduct((prevState) => {
                return {id: product.id,
                    quantity: product.quantity,
                    price: product.price,
                    description: product.description,
                    name: product.title,
                    category: product.category,
                    imgSrc:product.image,
                    rating:product.rating,
                }
            });
        }
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
            <Navbar currentUser={currentUser} isOnMainPage={false}  />
            {actualProduct && actualProduct.id ?
                <ProductItem onSinglePage={true}
                             rating={actualProduct.rating}
                             id={actualProduct.id }
                             imgSrc={actualProduct.imgSrc}
                             quantity={actualProduct.quantity}
                             className={"single"}
                             price={actualProduct.price}
                             description={actualProduct.description}
                             name={actualProduct.name}
                             category={actualProduct.category} />
                : <h1>Loading...</h1>
            }
            <Button onClick={addToCart}  className={"default"} buttonText={t("Add to cart")}/>
            <Footer />
        </div>
    );
};

export default SingleProductPage;