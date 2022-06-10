import React, { Fragment } from 'react';
import { PropTypes } from 'prop-types';

//Funcional Component
const  PrimeraApp = ( {saludo, subtitulo} ) => {


    return  (
        <Fragment>
            <h1>{ saludo }</h1>
            <p>{subtitulo}</p>
        </Fragment>  
    );
}

PrimeraApp.propTypes = {
    saludo : PropTypes.string.isRequired 
}
PrimeraApp.defaultProps = {
    subtitulo: 'Mi primera app en React'
}

export default PrimeraApp;