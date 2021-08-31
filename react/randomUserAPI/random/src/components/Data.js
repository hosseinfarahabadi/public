
import React, { Component } from 'react';

class Data extends Component {
    state = {
        users: [],
        isNameActiv : '',
        isAddressActiv : '',
        isPhoneActiv : '',
        isBirthdayActiv : '',
        isLockActiv: '',
        isNameGreen:'',
        isAddressGreen:'',
        isPhoneGreen:'',
        isBirthdayGreen:'',
        isLockGreen:''
    }
    componentDidMount() {
        fetch('https://randomuser.me/api/?results=')
            .then(response => response.json())
            .then(data => {
                this.setState({users : data.results})
            });
    }
    iconNameHandler = () => {
        this.setState({
            isNameActiv: 'active',
            isAddressActiv: 'none',
            isPhoneActiv: 'none',
            isBirthdayActiv: 'none',
            isLockActiv: 'none',
            isNameGreen: 'green',
            isAddressGreen:'none',
            isPhoneGreen:'none',
            isBirthdayGreen:'none',
            isLockGreen:'none'
        })
    }
    iconAddressHandler = () => {
        this.setState({
            isNameActiv: 'none',
            isAddressActiv: 'active',
            isPhoneActiv: 'none',
            isBirthdayActiv: 'none',
            isLockActiv: 'none',
            isNameGreen: 'none',
            isAddressGreen:'green',
            isPhoneGreen:'none',
            isBirthdayGreen:'none',
            isLockGreen:'none'
        })
    }
    iconPhoneHandeler = () => {
        this.setState({
            isNameActiv: 'none',
            isAddressActiv: 'none',
            isPhoneActiv: 'active',
            isBirthdayActiv: 'none',
            isLockActiv: 'none',
            isAddressGreen:'none',
            isPhoneGreen:'green',
            isBirthdayGreen:'none',
            isLockGreen:'none'
        })
    }
    iconBirthdayHandeler = () => {
        this.setState({
            isNameActiv: 'none',
            isAddressActiv: 'none',
            isPhoneActiv: 'none',
            isBirthdayActiv: 'active',
            isLockActiv: 'none',
            isAddressGreen:'none',
            isPhoneGreen:'none',
            isBirthdayGreen:'green',
            isLockGreen:'none'
        })
    }
    iconLockHandeler = () => {
        this.setState({
            isNameActiv: 'none',
            isAddressActiv: 'none',
            isPhoneActiv: 'none',
            isBirthdayActiv: 'none',
            isLockActiv: 'active',
            isAddressGreen:'none',
            isPhoneGreen:'none',
            isBirthdayGreen:'none',
            isLockGreen:'green'
        })
    }
    render() {
        return (
            <ul className='pc-wrapper'>
                {this.state.users.map((user, index) =>
                    <li className='pc-user-list-li' key={index}>
                        <p className='pc-user-age'>age {user.dob.age}</p>
                        <img src={user.picture.large} alt={user.name.first}></img>
                        <div className={`pc-user-section ${this.state.isNameActiv} active`} >
                            <p className='pc-user-welcome'>hi,my name is</p>
                            <div className='pc-user-info'>
                                <span>{user.name.first} </span><span> {user.name.last}</span>
                            </div>
                        </div>
                        <div className={`pc-user-section ${this.state.isAddressActiv}`}>
                            <p className='pc-user-welcome'>hi,my Address is</p>
                            <div className='pc-user-info'>
                                <span>{user.location.street.number} </span><span> {user.location.street.name}</span>
                            </div>
                        </div>
                        <div className={`pc-user-section ${this.state.isPhoneActiv}`}>
                            <p className='pc-user-welcome'>hi,my phone is</p>
                            <div className='pc-user-info'>
                                <span>{user.phone} </span>
                            </div>
                        </div>
                        <div className={`pc-user-section ${this.state.isBirthdayActiv}`}>
                            <p className='pc-user-welcome'>hi,my Address is</p>
                            <div className='pc-user-info'>
                                <span>{user.registered.date} </span>
                            </div>
                        </div>
                        <div className={`pc-user-section ${this.state.isLockActiv}`}>
                            <p className='pc-user-welcome'>hi,my Address is</p>
                            <div className='pc-user-info pc-user-username'>
                                <span >Username : {user.login.username} </span><span>Passeword : {user.login.password}</span>
                            </div>
                        </div>
                        <div className='pc-user-info-swich'>
                            <i onMouseEnter={this.iconNameHandler} className={`fa fa-user-circle-o pc-user-icon ${this.state.isNameGreen}`}></i>
                            <i onMouseEnter={ this.iconAddressHandler } className={`fa fa-map pc-user-icon ${this.state.isAddressGreen}`}></i>
                            <i onMouseEnter={ this.iconPhoneHandeler } className={`fa fa-phone-square pc-user-icon ${this.state.isPhoneGreen}`}></i>
                            <i onMouseEnter={ this.iconBirthdayHandeler } className={`fa fa-birthday-cake pc-user-icon ${this.state.isBirthdayGreen}`}></i>
                            <i onMouseEnter={ this.iconLockHandeler } className={`fa fa-lock pc-user-icon ${this.state.isLockGreen}`}></i>
                        </div>
                    </li>
                )}
            </ul>
        );
    }
}

export default Data;
   

