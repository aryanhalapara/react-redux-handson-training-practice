import React from 'react';
import CustomerNameComponent from './CustomerNameComponent';

class CustomerComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = { customerDetails : [
            {
                customerID: '1',
                customerName: 'Aryan Halapara',
                customerAddress: 'Pune, India'
            },
            {
                customerID: '2',
                customerName: 'Sandip Halapara',
                customerAddress: 'Rajkot, India'
            },
            {
                customerID: '3',
                customerName: 'Aston John',
                customerAddress: 'California, US'
            },
            {
                customerID: '4',
                customerName: 'Smith',
                customerAddress: 'Melbourn, Australia'
            }]
        };

    }
    render() {
        return (
            <table>
                <thead>
                    <tr>
                        <th>Customer ID</th>
                        <th>Customer Name</th>
                        <th>Customer Address</th>
                    </tr>
                </thead>
                <tbody>
                    {this.state.customerDetails.filter((customer) => {
                        return customer.customerName.startsWith('A') && customer.customerAddress.includes('India');
                    }).map((filterdCuntomer) => {
                        return <CustomerNameComponent key={filterdCuntomer.customerName} customer={filterdCuntomer} /> 
                    })}
                    {/* {this.state.customerDetails.filter((customer) => {
                        return <CustomerNameComponent key={customer.customerName} customer={customer} />
                    })} */}
                </tbody>
            </table>
        );
    }
}

export default CustomerComponent;