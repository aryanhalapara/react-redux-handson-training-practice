import React from 'react';

class EvenComponent extends React.Component  {
    render() {
        return (
            <span>  {this.props.n} </span>
        );
    }
}

export default EvenComponent;