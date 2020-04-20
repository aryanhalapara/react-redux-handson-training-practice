import React from 'react';

class OddComponent extends React.Component  {
    render() {
        return (
            <span>  {this.props.n} </span>
        );
    }
}

export default OddComponent;