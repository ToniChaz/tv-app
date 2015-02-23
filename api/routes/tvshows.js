//File: routes/tvshows.js
module.exports = function(app) {

  var TVShow = require('../models/tvshow.js');

  //GET - Return all tvshows in the DB
  findAllTVShows = function(req, res) {
  	TVShow.find(function(err, tvshows) {
  		if(!err) {
        res.send(tvshows);
        console.log('GET /tvshows')
  		} else {
        res.status(400).json({ error: err })
  			console.log('ERROR: ' + err);
  		}
  	});
  };

  //GET - Return a TVShow with specified ID
  findById = function(req, res) {
  	TVShow.findById(req.params.id, function(err, tvshow) {
  		if(!err) {
        console.log('GET /tvshow/' + req.params.id);
  			res.send(tvshow);
  		} else {
        res.status(400).json({ error: err })
  			console.log('ERROR: ' + err);
  		}
  	});
  };

  //POST - Insert a new TVShow in the DB
  addTVShow = function(req, res) {
  	console.log('POST');
  	console.log(req.body);

  	var tvshow = new TVShow({
  		title:    req.body.title,
  		year: 	  req.body.year,
  		country:  req.body.country,
  		poster:   req.body.poster,
  		seasons:  req.body.seasons,
  		genre:    req.body.genre,
  		summary:  req.body.summary  
  	});

  	tvshow.save(function(err) {
  		if(!err) {
        res.send(tvshow);
  			console.log('Created');
      } else {
        res.status(400).json({ error: err })
        console.log('ERROR: ' + err);
      }
    });

  };

  //PUT - Update a register already exists
  updateTVShow = function(req, res) {
  	TVShow.findById(req.params.id, function(err, tvshow) {
  		tvshow.title   = req.body.petId;
  		tvshow.year    = req.body.year;
  		tvshow.country = req.body.country;
  		tvshow.poster  = req.body.poster;
  		tvshow.seasons = req.body.seasons;
  		tvshow.genre   = req.body.genre;
  		tvshow.summary = req.body.summary;

  		tvshow.save(function(err) {
  			if(!err) {
          res.status(200).json({ status: 'updated' })
  				console.log('Updated');
  			} else {
          res.status(400).json({ error: err })
  				console.log('ERROR: ' + err);
  			}
  			res.send(tvshow);
  		});
  	});
  }

  //DELETE - Delete a TVShow with specified ID
  deleteTVShow = function(req, res) {
  	TVShow.findById(req.params.id, function(err, tvshow) {
  		tvshow.remove(function(err) {
  			if(!err) {
          res.status(200).json({ status: 'deleted' })
  				console.log('Removed');
  			} else {
          res.status(400).json({ error: err })
  				console.log('ERROR: ' + err);
  			}
  		})
  	});
  }

  //Link routes and functions
  app.get('/tvshows', findAllTVShows);
  app.get('/tvshow/:id', findById);
  app.post('/tvshow', addTVShow);
  app.put('/tvshow/:id', updateTVShow);
  app.delete('/tvshow/:id', deleteTVShow);

}