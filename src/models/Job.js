const mongoose = require('mongoose');

const jobScheema = new mongoose.Schema({
    title:{type:String,required:true},
    company:{type: mongoose.Schema.Types.ObjectId, ref:'Employer'},
    loaction: String,
    skillsRequired: String,
    salary: {type: Number, required: true},
    postedAt: {type:Date, default:Date.now},


});
module.exports = mongoose.model('Job', jobScheema);
