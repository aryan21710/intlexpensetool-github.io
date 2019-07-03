import React from 'react';
import './../../styles/components/header.css'
import logo from './../../public/images/logo1.png'
import { connect } from 'react-redux';



const Header=(props)=>{
    return (
        <div className="header">
            <img src={logo} onClick={()=>{
                    console.log('props:-' + JSON.stringify(props));

                // props.history.push('/')
            }}></img>
            <h1>Expense Manager Tool</h1>
            <p></p>
        </div>
    )
}

export default connect()(Header);


