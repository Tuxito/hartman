const express = require('express');
const router = express.Router();


const gear = {
  "userId": 1,
  "id": 1,
  "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
  "body": "quia et suscipit suscipit recusandae consequuntur expedita et cum reprehenderit molestiae ut ut quas totam nostrum rerum est autem sunt rem eveniet architecto"
}


/* GET api listing. */
router.get('/', (req, res) => {
  res.send('api works');
});



// Get all posts
router.get('/gears', (req, res) => {
  // Get posts from the mock api
  // This should ideally be replaced with a service that connects to MongoDB
  console.log("gears : " + gear.title);

  res.status(200).json(gear);
 
});

module.exports = router;