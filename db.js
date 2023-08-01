const mongoose = require('mongoose');

const USER = 'felixopm1997';
const PASSWORD = 'tgEoojrJElG78W25';
const DATABASE_NAME = 'Proyecto';


const URL = `mongodb+srv://${USER}:${PASSWORD}@cluster0.ntz7wrc.mongodb.net/${DATABASE_NAME}?retryWrites=true&w=majority`;
mongoose.connect(URL)
.then(() => {
    console.log('Database connected!');
})
.catch((error)=> {
    console.log('Error connecting:', error);
});






