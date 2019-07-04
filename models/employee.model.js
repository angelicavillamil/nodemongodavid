const moongose = require('mongoose');

var employeeSchema = new moongose.Schema({
    fullName: {
        type: String
   },
   email: {
       type: String
   },
   mobile: {
       type: String
   },
   city: {
       type: String
   }
});

moongose.model('Employee', employeeSchema);