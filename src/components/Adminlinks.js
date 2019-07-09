import React from 'react';
import {NavLink} from 'react-router-dom';
import './../../styles/components/adminlinks.css'


export default ()=>{
        return (
			<div className="navLinks">
				<NavLink to='/expensestable' activeClassName='is-active' activeStyle={{ color: 'red' }} exact={true}>
					<button>EMPLOYEE CLAIM TABLE</button>
				</NavLink>
				<NavLink to='/summarytable' activeClassName='is-active' activeStyle={{ color: 'red' }}>
					<button>SUMMARY TABLE</button>
				</NavLink>
			</div>
		
	    );
    }

  
