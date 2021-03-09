import '../App.css';
import React from 'react';
import Header from './Header';
import Number from './Number';
import ThankYou from './ThankYou';

const App = () => {

    const phoneNumber = localStorage.getItem('phoneNumber');

    if(phoneNumber){
        return(
            <div align="center">
                <Header />
                <ThankYou/>
            </div>
        )
    }
    else{
        return(
            <div align="center">
                <Header />
                <Number/>
            </div>
        )
    }
}

export default App;
