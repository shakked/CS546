const express = require('express');
var router = express.Router();

router.get('/', (req, res) => {
    res.json({
        name: 'Zachary Shakked',
        biography: 'I\'m currently a senior at Stevens Institute of Technology in Hoboken, New Jersey. I am majoring in Computer Science and want to be an entrepreneur. I hope to work for myself because I don\'t enjoy working for other people.\nI recently moved to my own apartment. I no longer live through Stevens housing. This is really nice because I have my own room. My apartment is close to the PATH station which makes going to New York City easy. Going to class takes about 15 minutes.',
        favoriteShows: ['Game of Thrones', 'Better Call Saul', 'The Wirte'],
        hobbies: ['Building iOS Apps', 'Reading Magazines and Books', 'Playing Games']
    })
});
module.exports = router;