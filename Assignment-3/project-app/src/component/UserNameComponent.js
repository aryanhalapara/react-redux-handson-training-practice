import React from 'react';
class UserNameComoponent extends React.Component {
    render() {
        return (
            <p> Hello { this.props.userName } </p>
        )
    }
}

export default UserNameComoponent;