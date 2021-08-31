
import React, { Component } from 'react'

export default class Tutorial extends Component {

    btnHandeler = () => {
        this.props.addProductToOrder(this.props.index)
    }
    render() {

        const { name, price, status, image, desc } = this.props.details;
        const isAvailable = status === 'available';
        return (
            <div className='product-container'>
                <img src={image} alt='img'></img>
                <div className='product-detail'>
                    <h2 className='product-name'><span>{name}</span><span className='price'>{price}</span></h2>
                    <p>{desc}</p>
                    <p>{status}</p>
                    <button onClick={this.btnHandeler} disabled={!isAvailable} className='add-to-order'>{isAvailable ? 'add to order' : 'sold out'}</button>
                </div>

            </div>

        )
    }
}
 