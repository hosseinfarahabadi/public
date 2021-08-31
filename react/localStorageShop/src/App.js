import React, { Component } from 'react';
import Cart from './components/Cart'
import Product from './components/Product';
import data from './components/data'

export default class App extends Component {
  state = {
    product: data,
    order: localStorage.getItem('order') ? JSON.parse(localStorage.getItem('order')) : []
  }
  addToCart = (product) => {
    const order = [...this.state.order];
    order.push(product);
    this.setState({ order });
    localStorage.setItem('order' , JSON.stringify(order))
  }
  delete = (product) => {
    const order = [...this.state.order];
    order.splice(product , 1);
    this.setState({ order });
    localStorage.setItem('order' , JSON.stringify(order))
  }

  render() {
    console.log(Object.keys(this.state.product))
    return (
      <div className='wrapper'>
        <Product addToCart = {this.addToCart} product = {this.state.product} />
        <Cart delete={this.delete}  order ={this.state.order} />
      </div>
    )
  }
}

