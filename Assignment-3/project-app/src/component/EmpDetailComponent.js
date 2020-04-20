import React from 'react';
import DisplayEmpComponent from './DisplayEmpComponent';

class EmpDetailComponent extends React.Component {
    constructor(props) {
        super(props);
        const empDetails = [
            {
                empId: '1009200',
                empName: 'Aryan Halapara'
            },
            {
                empId: '1009201',
                empName: 'Omkar Shinde'
            },
            {
                empId: '1009202',
                empName: 'Hardik Solanki'
            }
        ]
        this.state = {
            empDetails
        }
    }
    render() {
        return (
            <table>
                <thead>
                    <tr>
                        <th>Employee ID</th>
                        <th>Employee Name</th>
                        <th>Company</th>
                    </tr>
                </thead>
                <tbody>
                    {this.state.empDetails.map((emp, index) => {
                        return <DisplayEmpComponent
                            key={index}
                            emp={emp}
                            EMPCOMPANY='Yash Technologies Pvt Ltd' />
                    })}
                </tbody>
            </table>
        )
    }
}

export default EmpDetailComponent;