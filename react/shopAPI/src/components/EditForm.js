import React, { Component } from 'react'

export default class EditForm extends Component {
    changeHandler = (e) => {
        const updatedForm = { ...this.props.product }
        updatedForm[e.currentTarget.name] = e.currentTarget.value;
        this.props.updateForm (this.props.index , updatedForm)
    }
    createProduct = (e) => {
        e.preventDefault();
    }
    deletHandler = () => {
        this.props.deletProduct(this.props.index);
    }
    render() {
        return (
                <form className='form-invintory' onSubmit={this.createProduct}>
                <input onChange={this.changeHandler} name='name' type='text' placeholder='name' defaultValue={ this.props.product.name }/>
                <input onChange={this.changeHandler}  name= 'price' type='text' placeholder='name' defaultValue={ this.props.product.price } />
                <select onChange={this.changeHandler}  name='status' defaultValue={ this.props.product.status }>
                    <option value='available'>avalible</option>
                    <option value='unavailable'>unavalible</option>
                </select>
                <textarea onChange={this.changeHandler}  name= 'desc' placeholder='desc' defaultValue={ this.props.product.desc }></textarea>
                <input onChange={this.changeHandler} name='image' type='text' defaultValue={this.props.product.image} />
                <button onClick={this.deletHandler}>Delet product</button>
                </form>
        )
    }
}
