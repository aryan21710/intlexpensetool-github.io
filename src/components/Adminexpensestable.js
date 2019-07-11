import React from 'react';
import './../../styles/components/expensestable.css';
import ReactTable from 'react-table';
import './../../styles/components/react-table.css'
import Adminlinks from './Adminlinks'
import './../../styles/components/adminlinks.css'
import axios from 'axios'
import { runInThisContext } from 'vm';


export default class Adminexpensetable extends React.Component {

    constructor(props) {
      super (props) 
      this.state = {
        data:[]
      }
      
      this.columns=  [
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
    }

    componentDidMount() {


      console.log('INSIDE SELECTOR componentDidMount TO POST DATA TO SERVER')
      axios
      .get(
          './getdata',
        
          { withCredentials: true }
      )
      .then(res => {
          console.log('EMP CLAIM DATA BACK FROM SERVER:-' + JSON.stringify(res.data));
          this.setState({
            data: this.state.data.concat(res.data)
          })
           
          console.log('data :-'+JSON.stringify(this.state.data))
        //   data= {
        //     empname: 'nasndsmn',
        //     date: 'fmf',
        //     expensedescription: 'dmmdfnfd',
        //     amountininr: 'dmdfmds',
        //     amountinus: 'dndnfdmfn',
        //     receiptsandattachment: 'dfnfndsmnfd',
        // }
      })
      .catch(error => {
          console.log('ERROR OCCURED:-' + error);
          alert('FAILED TO SAVE DATA ON MONGO SERVER');
      });


    }

   
        
    
    
    render() {
      console.log('INSIDE SELECTOR render')

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
