import React from 'react';

class DisplayEmpComponent extends React.Component {
    render() {
        return(
            <tr>
                <td>{this.props.emp.empId}</td>
                <td>{this.props.emp.empName}</td>
                <td>{this.props.EMPCOMPANY}</td>
            </tr>
        )
    }
}

export default DisplayEmpComponent;