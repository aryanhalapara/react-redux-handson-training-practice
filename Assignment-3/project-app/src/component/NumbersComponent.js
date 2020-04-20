import React from 'react';
import OddComponent from './EvenComponent';
import EvenComponent from './OddComponent';

class NumbersComponent extends React.Component {
    constructor(props) {
        super(props);
        const numbers = [12, 29, 8, 7, 4, 10, 90, 48, 94, 37, 29, 96, 34, 52, 76, 56, 45, 54, 32, 2, 93, 76]
        this.state = {
            numbers
        }
    }

    render() {
        return (
            <section>
                <div> Odd Numbers
                    {
                        this.state.numbers.map((n, index) => {
                            if (n % 2 === 0) {
                                return <OddComponent key={index} n={n}></OddComponent>
                            }
                        })
                    }
                </div>
                <div> Even Numbers
                    {
                        this.state.numbers.map((n, index) => {
                            if (n % 2 !== 0) {
                                return <EvenComponent key={index} n={n}></EvenComponent>
                            }
                        })
                    }
                </div>
            </section>
        );
    }
}

export default NumbersComponent;