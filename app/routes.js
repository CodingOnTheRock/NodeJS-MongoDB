// create a new express routers
const express = require('express'),
  router = express.Router(),
  mainController = require('./controllers/main.controller'),
  eventsController = require('./controllers/events.controller');

// export router
module.exports = router;

// export routers
router.get('/', mainController.showHome);
router.get('/events', eventsController.showEvents);
router.get('/events/:slug', eventsController.showEvent);

// seed events
// router.get('/events/seed', eventsController.seedEvents);
