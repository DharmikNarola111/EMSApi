const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://admin:admin@drivetestdb.mc1cfxi.mongodb.net/?retryWrites=true&w=majority');
mongoose.connection.on("connected", function(){
    console.log("Application is connected to Databse");
})

