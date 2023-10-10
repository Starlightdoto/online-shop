import React, {FC} from 'react';
import OrderCard from "./OrderCard";
import OrdersIdPage from "../routes/OrdersIDPage";

interface OrdersListProps {
    orders: any[] | null,
}

const OrdersList:FC<OrdersListProps> = (props) => {
    const {orders} = props;
    return (
        <div>
            {orders?.map((order) => {
                return <OrderCard id={order.uid}
                                  price={order.price}
                                  date={order.date}
                                  status={order.status} />

            })
            }

        </div>

    );
};

export default OrdersList;

