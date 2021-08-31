import React, { Component } from 'react';
import Data from './components/Data'

class App extends Component {
    state = {
        number: 2,
        newNumber : 0
    }
    inputChange = (e) => {
        this.setState({number : Number(e.currentTarget.value)})
    }
    handleSubmit = (e) => {
        e.preventDefault();
    }
    handleClick = (e) => {
        this.setState ({newNumber : Number(this.state.number)})
    }
    render() {
        const users = [];
        for (let i = 0; i <= this.state.newNumber; i++){
            users.push(<Data/>)
        }
        return (
            <div className='pc-container'>
                <form onSubmit={this.handleSubmit}>
                    <input type='text' onChange={this.inputChange} />
                    <button onClick={this.handleClick}>click Me</button>
                </form>
                <h1>enter a number</h1>
                <div>
                    {users}
                </div>
            </div>
        );
    }
}

export default App;
