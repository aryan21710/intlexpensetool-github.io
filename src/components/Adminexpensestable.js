import React from 'react';
import './../../styles/components/expensestable.css';
import ReactTable from 'react-table';
import './../../styles/components/react-table.css'
import Adminlinks from './Adminlinks'
import './../../styles/components/adminlinks.css'

export default()=>{

   
       const columns=  [
			{
				Header: 'Emp Name',
				accessor: 'empname', // String-based value accessors!
			},
			{
				Header: 'Date',
				accessor: 'date',
			},
			{
				Header: 'Expense Description',
				accessor: 'expensedescription',
            },
            {
				Header: 'Amount in INR',
				accessor: 'amountininr',
			},{
				Header: 'Amount in USD',
				accessor: 'amountinus',
			},{
				Header: 'Receipts and Attachment',
				accessor: 'receiptsandattachment',
			},
        ];
        
     const data= {
            empname: JSON.parse(localStorage.getItem('data')).name,
            date: JSON.parse(localStorage.getItem('data')).createdAt,
            expensedescription: JSON.parse(localStorage.getItem('data')).text,
            amountininr: JSON.parse(localStorage.getItem('data')).amount,
            amountinus: JSON.parse(localStorage.getItem('data')).amount,
            receiptsandattachment: JSON.parse(localStorage.getItem('data')).email,
        }
    


    return (
        <div className="admindashboard">
        <Adminlinks/>
          <ReactTable
            className="-striped -highlight"
            data={[data]}
            resolveData={data => data.map(row => row)}
            columns={columns}
            defaultSorted={[
              {
                id: 'this.state.category',
                desc: true,
              },
            ]}
          />
    
        </div>
      );

 
};
