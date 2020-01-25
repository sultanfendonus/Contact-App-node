const mongoose = require('mongoose');

const Schema = mongoose.Schema;


const ContactSchema = new Schema({
    name : {
        type: String,
        required: true
    },
    mobileNumber: {
        type: String,
        required : true
    }
});

ContactSchema.pre('save', function(next) {
    let user = this;

    if((user.mobileNumber.length === 11 || user.mobileNumber.length === 14) && (user.mobileNumber.startsWith('+880') || user.mobileNumber.startsWith('01'))){
        next()
    }else {
        next(new Error('Invalid mobile number'));
    }
});


const Contact = mongoose.model('contact', ContactSchema);

module.exports = Contact;
