import React from 'react';
import ProjectDetailComponent from './ProjectDetailComponent';
import CustomerComponent from './CustomerComponent';
import NumbersComponent from './NumbersComponent';
import EmpDetailComponent from './EmpDetailComponent';

function AppContainerComponent() {
  return (
    <div className="container">
        <h3>Project Details</h3>
        <ProjectDetailComponent></ProjectDetailComponent>
        <h3>Q3).Create a React demo to display employee details as EmpId, EmpName, and EmpCompany.Here EmpCompany should be accepted as default value and should get print by default and also need to validate EmpId.</h3>
        <EmpDetailComponent></EmpDetailComponent>
        <h3>Q4).Create a React demo to create an array of numbers and listing all even and odd numbers from the list.</h3>
        <NumbersComponent></NumbersComponent>
        <h3>Q5).Create an array of objects with CustomerID, CustomerName, and CustomerAddress.Extract Customer names starting with ’A’ and Customer address with India.</h3>
        <CustomerComponent></CustomerComponent>
    </div>
  );
}

export default AppContainerComponent;
