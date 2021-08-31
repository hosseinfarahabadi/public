import React ,{Component} from 'react'

class Shop extends Component {
    myData = React.createRef();
    goToShop = (e) => {
        e.preventDefault();
        console.log(this.myData.current.value)
        const urlPath = this.myData.current.value;
        this.props.history.push(`/shop/${urlPath}`)
    }
    render() {
        return (
            <form className='shop-form' onSubmit={this.goToShop}>
                <h2>Enter Shop Name</h2>
                <input required ref={this.myData} type='text' placeholder='Shop Name' />
                <button type='submit'>visit shop</button>
            </form>
        )
    }
}
export default Shop;
