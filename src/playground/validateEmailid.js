var validate = require("validate.js");

const from="a@a.com";
var constraints = {
    emailId: {
      presence: true,
      length: {
          minimum:7,
          message: 'TOO SHORT TO BE AN EMAIL'

      },
      pattern:/([a-zA-Z0-9]+)(@)+([a-zA-Z0-9]+)(\.com)$/,
      message: 'NOT A VALID EMAIL',

    }
  };
  

  validate({emailId:'a@a.com'},constraints)