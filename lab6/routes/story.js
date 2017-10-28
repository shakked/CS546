const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.json({
        storyTitle: 'That Time I Decided to Build an Instagram Analytics Wesbite',
        story: 'I\'m very interested in Instagram and social media analytics. In the past two years, I’ve had ample opportunity to discuss Instagram marketing with social media specialists are influencers. In these conversations, I’ve learned that for such professionals, the web is a more versatile platform than both iOS and Android. Consequently, I’ve decided to build a web app that offers affordable and insightful Instagram analytics.\nUndoubtedly, this is a massive undertaking that will require an immense amount of time to build. I’m hoping to be able to launch a cloåsed, free version of the service in early Fall. My goal with this platform is to empower businesses and influencers with the critical information they need to grow their pages. Growing a page is hard work. It requires creativity and exhausting consistency. With this web app, I’m striving to simplify it all. This web-app will be your one stop shop for everything Instagram.',
    })
});
module.exports = router;