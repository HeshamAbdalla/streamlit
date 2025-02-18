const express = require('express');
const router = express.Router();
const axios = require('axios');

router.get('/top-streams', async (req, res) => {
    try {
        const response = await axios.get('https://api.twitch.tv/helix/streams', {
        headers: {
            'Client-ID': process.env.TWITCH_CLIENT_ID,
            'Authorization': `Bearer ${process.env.TWITCH_ACCESS_TOKEN}`
        },
        params: { first: 1 }
        });

        res.json(response.data.data[0]);
    } catch (error) {
        console.error(error);
        res.status(500).send('Server error');
    }
    });
    
module.exports = router;

