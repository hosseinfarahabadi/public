import React, { Component } from 'react';
import Tutorial from './Tutorial';
import Order from './Order';
import Invintory from './Invintory';
import samples from './samples';
import Header from './Header';


class App extends Component {
    state = {
        products: {},
        order : {}
    }
    
    addProduct = (product) => {
        const products = { ...this.state.products };
        products[`product${Date.now()}`] = product;
        this.setState(() => {
            return {products}
        })
    }
    loadSample = () => {
        this.setState(()=>{
            return {products : samples}
        })
    }
    addProductToOrder = (key) => {
        const order = { ...this.state.order };
        order[key] = order[key] + 1 || 1;
        this.setState(() => {
            return {order}
        })
    }
    updateForm = (key , updatedForm) => {
        const products = { ...this.state.products };
        products[key] = updatedForm;
        this.setState({products})
    }
    deletProduct = (key) => {
        const products = { ...this.state.products };
        delete products[key];
        this.setState({products})
    }
    removeOrder = (key) => {
        let order = { ...this.state.order };
         delete order[key];
        this.setState({order})
    }
    removeAllOrder = () => {
        let order = { ...this.state.order };
         order = {};
        this.setState({order})        
    }
    render() {
        return (
            <div className='primary-wrapper'>
                <div className='tutorial'>
                    <Header/>
                    <ul>
                        {console.log(Object.keys(this.state.products))}
                        {Object.keys(this.state.products).map(key => <Tutorial addProductToOrder={this.addProductToOrder} key={key} index = {key} details={
                            this.state.products[key]
                        }/>)}
                    </ul>
                </div>
                <Order removeAllOrder={this.removeAllOrder} removeOrder = {this.removeOrder} product = {this.state.products} order = {this.state.order} />
                <Invintory deletProduct = {this.deletProduct} updateForm ={this.updateForm} product ={this.state.products} addProduct={this.addProduct} loadSample={ this.loadSample }/>
            </div>
        )
    }
}
export default App;