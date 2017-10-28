const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.json(
    	[
	        {
	        	schoolName: 'Marlboro Middle School',
	        	degree: 'Middle School Degree',
	        	favoriteClass: 'Biology',
	        	favoriteMemory: 'I remember running cross country and having fun at practices.',
	        },
	        {
	        	schoolName: 'Colts Neck High School',
	        	degree: 'High School Degree',
	        	favoriteClass: 'Spanish III',
	        	favoriteMemory: 'I remember going to a volley ball tournament that was a lot of fun.',
	        },
			{
	        	schoolName: 'Stevens Institute of Technology',
	        	degree: 'Bachelor\'s Degree',
	        	favoriteClass: 'Carribean Literature',
	        	favoriteMemory: 'I remember staying up all night to study for a final and then falling asleep during it because I was so tired.',
	        },
        ]
    );
});
module.exports = router;