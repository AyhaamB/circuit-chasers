const mongoose = require('mongoose');
//JPYHO91uHZbIrRoi
//mongodb+srv://Dheeraj:JPYHO91uHZbIrRoi@cluster0.kmlkcyb.mongodb.net/?retryWrites=true&w=majority
console.log(process.env.MONGODB_URI)
// mongoose.connect(process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/circuit-chasers');
mongoose.connect('mongodb+srv://Dheeraj:JPYHO91uHZbIrRoi@cluster0.kmlkcyb.mongodb.net/circuit-chasers?retryWrites=true&w=majority');
module.exports = mongoose.connection;
