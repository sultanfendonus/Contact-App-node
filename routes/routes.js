const ContactController = require('../controllers/contact_controller');

module.exports = (app) => {
  app.post('/api/contact', ContactController.create)
  app.get('/api/contact',ContactController.get)
  app.get('/api/contact/all',ContactController.getAll)
  app.put('/api/contact',ContactController.update)
  app.delete('/api/contact',ContactController.delete)
};
