import React, { useState, useEffect } from "react";

import { db } from "../../utils/firebase";
import { useStateValue } from "../../context/stateProvider";
import './styles/orders.css';
import Order from "../Order";

const Orders = () => {
    const [orders, setOrders] = useState([]);
    const [{ basket, user }, dispatch] = useStateValue();

    useEffect(() => {
        // console.log(user)
        if (user) {
            db
                .collection('users')
                .doc(user?.uid)
                .collection('orders')
                // orderBy based on the day created in descending order
                .orderBy('created', 'desc')
                .onSnapshot(snapshot => (
                    setOrders(snapshot.docs.map(doc => ({
                        id: doc.id,
                        data: doc.data()
                    })))

                ))

        } else {
            setOrders([]);
        }

    }, [user]);


    return (
        <div className="orders">
            <h1>Your Orders</h1>

            <div className="orders__order">
                {orders?.map(order => (
                    <Order order={order} />
                ))}
            </div>
        </div>

    );
    ;
}

export default Orders;