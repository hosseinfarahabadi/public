import React, { Component } from 'react'

export default class Product extends Component {
    render() {
        return (
            <div className='product'>
                <h2>product</h2>
                <ul className='product-list'>
                    {this.props.product.map((item, index) => <li  key={index}>
                        <img src={item.src} alt={item.title}></img>
                        <h2>{item.title}</h2>
                        <p>{item.price}</p>
                        <button onClick={() => this.props.addToCart(item)}>Add to cart</button>
                    </li>)}
                </ul>
            </div>
        )
    }
}
