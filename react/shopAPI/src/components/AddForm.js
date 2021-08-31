import React from 'react';

class AddForm extends React.Component {
    nameRef = React.createRef();
    priceRef = React.createRef();
    statusRef = React.createRef();
    descRef = React.createRef();
    imageRef = React.createRef();
     createProduct = (e) => {
         e.preventDefault();
         const products = {
            name : this.nameRef.current.value,
            price : this.priceRef.current.value,
            status : this.statusRef.current.value,
            desc : this.descRef.current.value,
            image : this.imageRef.current.value,
         }
         this.props.addProduct(products);
         e.currentTarget.reset();
     }

     render() {
            return (
                        <form className='form-invintory' onSubmit={this.createProduct}>
                            <input ref={this.nameRef} name= 'name' type='text' placeholder='name'/>
                            <input ref={this.priceRef} name= 'price' type='text' placeholder='name'/>
                            <select ref={this.statusRef} name='status'>
                                <option value='avalible'>avalible</option>
                                <option value='unavalible'>unavalible</option>
                            </select>
                            <textarea ref={this.descRef} name= 'desc' placeholder='desc'></textarea>
                        <input ref={this.imageRef} name='image' type='text' />
                        <button>send</button>
                        </form>
            )
    }

}
export default AddForm;