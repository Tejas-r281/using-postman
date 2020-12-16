const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/olympics",{
    useCreateIndex:true,
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(()=>{
    console.log("connetion successful");
})
.catch((e)=>{
    console.log(` Some error has been occured ${e}`);
})