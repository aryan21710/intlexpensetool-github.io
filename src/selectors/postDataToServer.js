import axios from 'axios'
export default (empData) => {
    console.log('INSIDE GETEMP DATA SELECTOR TO POST DATA TO SERVER')
    axios
    .post(
        './getdata',
        {
            empData   
        },

        { withCredentials: true }
    )
    .then(res => {
        console.log('RESPONSE BACK FROM SERVER:-' + JSON.stringify(res));
       
    })
    .catch(error => {
        console.log('ERROR OCCURED:-' + error);
        alert('FAILED TO SAVE DATA ON MONGO SERVER');
    });

          
}