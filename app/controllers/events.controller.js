const Event = require('../models/event');

module.exports = {
  // show all events
  showEvents: function(req, res){
    // create dummy events
    Event.find({}, function(err, events){
      if(err){
        res.send('Events not found');
      }

      // return a view with data
      res.render('pages/events', { events: events });
    });
  },

  // show single event
  showEvent: function(req, res){
    var name = req.originalUrl.replace("/events/", "");
    name = name.toLowerCase();

    // get a single event
    Event.findOne({ slug: name }, function(err, event){
      if(err){
        res.send('Event not found');
      }
      
      res.render('pages/event', { event: event });
    });

  },

  // seed our database
  seedEvents: function(req, res){
    // create somee events
    const events = [
      { name: 'Bastetball', description: 'Throwing into a basket.'},
      { name: 'Swimming', description: 'Michael Phelps is the fast fish' },
      { name: 'Weightlifting', description: 'Lifting heavy things up' }
    ];

    // use the Event model to insert/save
    for(event of events){
      var newEvent = new Event(event);
      newEvent.save();
    }

    // seeded
    res.send('Database seeded!');
  }
};
