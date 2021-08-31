import React, { Component } from 'react'
import AddForm from './AddForm'
import EditForm from './EditForm'

export default class Invintory extends Component {
    render() {
        return (
            <div className='invintory'>
                <h2>invintory</h2>
                <AddForm addProduct={this.props.addProduct} />
                <h2>Edit product</h2>
                {Object.keys(this.props.product).map((key)=> <EditForm key={key} index={key} updateForm={this.props.updateForm} deletProduct = {this.props.deletProduct} product={this.props.product[key]} />)}
                <button className='load-sample' onClick={this.props.loadSample}>Load Sample</button>
            </div>
        )
    }
}
