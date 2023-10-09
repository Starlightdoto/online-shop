import React, {FC, useState} from 'react';
import {NavLink} from "react-router-dom";
//@ts-ignore
import {Button} from "./ui-components/Button";
import DeleteIcon from '@mui/icons-material/Delete';
import {useTranslation} from 'react-i18next';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import ItemCounter from "./ui-components/ItemCounter";

interface ProductItemProps {
    id:string,
    imgSrc?: string,
    rating:number,
    name: string,
    quantity?: number,
    price: number,
    description: string,
    category:string,
    className: string,
    classNameAdditional?: string,
    removeItem?: any,
    onSinglePage?:boolean,
    addItemToCart?: any,
    itemCount?: number,
    setItemCount?: React.Dispatch<React.SetStateAction<number>>,
}

const ProductItem:FC<ProductItemProps> = (props) => {
    const {t, i18n} = useTranslation();
    const { name,
            className,
            removeItem,
            classNameAdditional,
            imgSrc,
            quantity = 0,
            price,
            description,
            category, id,
            rating, onSinglePage,
            addItemToCart} = props;

    const [itemCount, setItemCount] = useState<number>(0);


    return (
        <div>
            {classNameAdditional === "cart" ?
                <div className={`productItem-${classNameAdditional}`}>
                    <img className={`productImage-${className}`} src={imgSrc} alt=""/>
                    <NavLink style={{textDecoration:"none", color:"white"}} to={`/product/${id}`}><h3 className={"productName-grid"}>{name}</h3></NavLink>
                    <h4>{t('Price')}: ${price}</h4>
                    <h4>{t('Category')}: {category}</h4>
                    <h4>{t('Rating')}: {rating}</h4>
                    <h4 className={`productItemDescription-${className}`}>{t('Description')}: {description}</h4>
                    <div className={'cartItemButtonsContainer'}>
                        <ItemCounter itemCount={itemCount} setItemCount={setItemCount} />
                        <Button onClick={() => removeItem(id)}  className={"remove"}><DeleteIcon /></Button>
                    </div>
                </div>
            : <div className={`productItem-${className}`}>
                    <img className={`productImage-${className}`} src={imgSrc} alt=""/>
                    {!onSinglePage ? <Button  onClick={() => {
                        addItemToCart(id, price, description, name, category, imgSrc, rating);
                    }} className={"default"} ><AddShoppingCartIcon /></Button> : null }
                    <NavLink style={{textDecoration:"none", color:"white"}} to={`/product/${id}`}><h3 className={"productName-grid"}>{name}</h3></NavLink>
                    <h4>{t('Quantity')}: {quantity}</h4>
                    <h4>{t('Price')}: ${price}</h4>
                    <h4>{t('Category')}: {category}</h4>
                    <h4>{t('Rating')}: {rating}</h4>
                    <h4 className={`productItemDescription-${className}`}>{t('Description')}: {description}</h4>

                </div>
            }
        </div>
    );
};

export default ProductItem;