const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/Savaari',{
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(()=> console.log("Database Connected"))
.catch((err)=> console.log('Connection error in databse \n', err))