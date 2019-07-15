import React from 'react';
import './../../styles/components/expensestable.css';
import ReactTable from 'react-table';
import './../../styles/components/react-table.css'
import Adminlinks from './Adminlinks'
import './../../styles/components/adminlinks.css'
import axios from 'axios'
import {connect} from 'react-redux';


 class Adminexpensetable extends React.Component {

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
          width:  600,

          },
              {
          Header: 'Amount in INR',
          accessor: 'amountininr',
        },{
          Header: 'Amount in USD',
          accessor: 'amountinus',

        },{
          Header: 'Receipt Link',
          accessor: 'receiptlocation',
          width:  600,


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
      })
      .catch(error => {
          console.log('ERROR OCCURED:-' + error);
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
            // getTdProps={(state, rowInfo, column, instance) => {
            //   return {
            //     onClick: (e, handleOriginal) => {
                 
            //       console.log('A Td Element was clicked!')
            //       console.log('it produced this event:', e)
            //       console.log('It was in this column:', column[''])
            //       console.log('It was in this row:', rowInfo)
            //       console.log('It was in this table instance:', instance)
           
            //       IMPORTANT! React-Table uses onClick internally to trigger
            //       events like expanding SubComponents and pivots.
            //       By default a custom 'onClick' handler will override this functionality.
            //       If you want to fire the original onClick handler, call the
            //       'handleOriginal' function.
            //       if (handleOriginal) {
            //         if (column['Header']=='Receipt Link') {
            //           console.log('REDIRECT TO :-'+rowInfo.row.receiptlocation)
            //           axios
            //           .get(
            //               './getreceipt',
                        
            //               { withCredentials: true }
            //           )
            //           .then(res => {
            //               console.log('EMP CLAIM DATA BACK FROM SERVER:-' + JSON.stringify(res.data));
            //               this.setState({
            //                 data: this.state.data.concat(res.data)
            //               })
                           
            //               console.log('data :-'+JSON.stringify(this.state.data))
            //           })
            //           .catch(error => {
            //               console.log('ERROR OCCURED:-' + error);
            //               alert('FAILED TO SAVE DATA ON MONGO SERVER');
            //           });                      handleOriginal();
                      

                    // }

                  // }
                // }
              // }
            // }}
          />
    
        </div>
      );
    }
};



export default connect()(Adminexpensetable)
