const Contact = require('../models/Contact');

module.exports = {
    async create(req, res, next) {

        try {
            const userProp = req.body;
            const contact = new Contact(userProp)

            const response = await contact.save()
            res.send(response)

        } catch (err){
            next(err)
        }
    },
    async get(req, res, next) {

        try {
            const mobileNumber = req.query.mobileNumber
            const contact = await Contact.findOne({mobileNumber})
            if(contact){
                res.send(contact)
            }else {
                res.send({message: 'No contact found!'})
            }


        } catch (err){
            next(err)
        }
    },

    async getAll(req, res, next) {
        try {
            const allContacts = await Contact.find({})
            res.send(allContacts)
        } catch (err){
            next(err)
        }
    },
    async delete(req, res, next) {
        try {
            const mobileNumber = req.body.mobileNumber
            await Contact.findOneAndRemove({mobileNumber})
            res.send({message: 'Number deleted successfully'})
        } catch (err){
            next(err)
        }
    },
    async update(req, res, next) {
        try {
            const mobileNumber = req.body.mobileNumber
            const newMobileNumber = req.body.newMobileNumber
            await Contact.findOneAndUpdate({mobileNumber},{mobileNumber: newMobileNumber})
            res.send({message: 'Number updated successfully'})
        } catch (err){
            next(err)
        }
    },


};
