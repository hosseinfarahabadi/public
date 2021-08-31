import React, { Component } from 'react'

export default class Order extends Component {

    renderOrder = (key) => {
        // const removeHandeler = () => {
        //     this.props.deletProduct(key);
        // }
        const product = this.props.product[key];
        const order = this.props.order[key];
        const isAvailable = product && product.status === 'available';
        if (!isAvailable) {
            return '';
        }
        return <li className='order-section-li' key={key}><span>{product.name}</span><span className='price'>{parseInt(product.price)} IIR</span><i onClick={() => this.props.removeOrder(key)} className='fa fa-times' aria-hidden="true"></i><br /><p>Number : {order}</p></li>

        
    }


    render() {
        const orderIds = Object.keys(this.props.order);
        const total = orderIds.reduce((prevTotal, key) => {
            const product = this.props.product[key];
            const order = this.props.order[key];
            const isAvailable = product && product.status === 'available';
            if (isAvailable) {
                return prevTotal + (order * parseInt(product.price) );
            }
            return prevTotal;
        }, 0)
        return (
            
            <div className='order'>
                <h2>this is Order</h2>
                <ul className='order-section-wrapper'>
                    {orderIds.map(this.renderOrder)}
                    { total !==0 ? <li className='total'><span>Total Price </span> <span className='price'>{ total } IRR</span> </li> : '' }
                    
                </ul>
                <button onClick={() => this.props.removeAllOrder()}>remove all</button>
            </div>
        )
    }
}

