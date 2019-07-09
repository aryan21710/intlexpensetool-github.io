import React from 'react';
import './../../styles/components/expensestable.css';
import ReactTable from 'react-table';
import './../../styles/components/react-dates.css';
import Adminlinks from './Adminlinks'

export default class Dashboard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
        };
        this.columns=  [
			{
				Header: 'Emp Name',
				accessor: 'Emp Name', // String-based value accessors!
			},
			{
				Header: 'Date',
				accessor: 'Date',
			},
			{
				Header: 'Expense Description',
				accessor: 'Expense Description',
            },
            {
				Header: 'Amount in INR',
				accessor: 'Amount in INR',
			},{
				Header: 'Amount in USD',
				accessor: 'Amount in US',
			},{
				Header: 'Receipts and Attachment',
				accessor: 'Receipts and Attachment',
			},
		];
      }
    
	render() {
		return (
                <div className="admindashboard">
                    <Adminlinks/>
                    <h1> THIS PAGE IS UNDER CONSTRUCTION.. PLEASE VISIT AFTER FEW DAYS</h1>
				</div>
		
		);
	}
}