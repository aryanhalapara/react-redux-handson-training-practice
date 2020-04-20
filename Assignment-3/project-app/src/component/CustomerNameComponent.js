import React from 'react';

class CustomerNameComponent extends React.Component {
    render() {
        return (
            <tr>
                <td>{this.props.customer.customerID}</td>
                <td>{this.props.customer.customerName}</td>
                <td>{this.props.customer.customerAddress}</td>
            </tr>
        );
    }
}

export default CustomerNameComponent;