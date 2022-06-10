import React, { Fragment, useState } from 'react';
import { PropTypes } from 'prop-types';


//Funcional Component
const CounterApp = ( {value}) => {

    const [ counter, setCounter] = useState(value);


    const hadleAdd = () => {
        // setCounter(counter + 1);
        setCounter( (c) => c + 1 );
    }

    const hadleSubstract = () => {
        setCounter (counter - 1);
    }

    const hadleReset = () => {
        setCounter ( value);
    }

    return (
        <Fragment>
            <h1>CounterApp</h1>
            <p> {counter} </p>
            <button onClick={ hadleAdd } >+1</button>
            <button onClick={ hadleReset } >Reset</button>
            <button onClick={ hadleSubstract } >-1</button>
        </Fragment>
    )
}

CounterApp.propTypes = {
    value: PropTypes.number
}

export default CounterApp;