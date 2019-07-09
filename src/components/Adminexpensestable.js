import React from 'react';
import './../../styles/components/expensestable.css';
import ReactTable from 'react-table';
import './../../styles/components/react-table.css'
import Adminlinks from './Adminlinks'
import './../../styles/components/adminlinks.css'



export default class Adminexpensestable extends React.Component {

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
          <ReactTable
            className="-striped -highlight"
            data={this.state.data}
            columns={this.columns}
            defaultSorted={[
              {
                id: 'this.state.category',
                desc: true,
              },
            ]}
          />
    
        </div>
      );
}
 
};
