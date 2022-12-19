import './OrderList.css'
import React from 'react';

const OrderList = (props) => {
    const { orders } = props;

    
    return (
        <div className='orderList'>
            <h2>Order List</h2>
            <h4>Items Ordered: {orders.length}</h4>
        </div>
    );
};

export default OrderList;