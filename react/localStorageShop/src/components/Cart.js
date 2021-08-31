import React, { Component } from 'react'

export default class Cart extends Component {
    render() {
        
        return (
            <div className='cart'>
                <h2>cart</h2>
                <h3>{this.props.order.length === 0 ? "empty" : this.props.order.length }</h3>
                <ul className='cart-list'>
                    {this.props.order.map((item, i) => <div key={i} className='cart-div'><li key={i}>
                        {/* {console.log(this.props.order[i])} */}
                        <img src={item.src} alt={item.title}></img>
                        <h2>{item.title}</h2>
                        <p>{item.price}</p>
                        <button onClick={()=> this.props.delete(i)} >delete</button>
                    </li>
                    </div>
                    )}
                    <h2>total price : { this.props.order.reduce((total , item)=> total + item.price,0  )}</h2>
                </ul>
            </div>
        )
    }
}
