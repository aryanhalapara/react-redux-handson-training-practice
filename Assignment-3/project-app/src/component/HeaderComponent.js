import React from 'react';
import logo from '../logo.svg';
import UserNameComoponent from './UserNameComponent';
class HeaderComponent extends React.Component {
    render() {
        return (
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <div className="App-menu">
                    <span>Home</span>
                    <span>About</span>
                    <span>Service</span>
                    <span>Contact</span>
                </div>
                <div className='user-details'>
                    <UserNameComoponent userName="Aryan Halapara"></UserNameComoponent>
                </div>
            </header>
        )
    }
}

export default HeaderComponent;