var express = require('express');
var router = express.Router();
const knex = require('knex')(require('../knexfile.js')['development']);

// Use the line below for production
// const knex = require('knex')(require('../knexfile.js')[process.env.NODE_ENV]);

router.get('/', function(req, res) {
  knex.select().table('blogs')
  .then(response => res.status(200).json(response))
  .catch(err => res.status(404).send("There was an error"))
});

router.post('/', (req, res) => {
  knex('blogs').insert(req.body)
      .then(response => {
      console.log(response)
      res.status(200).send("added blog")
      })
      .catch(err => {
      console.log(err)
      res.status(404).send("There was an error")
      })

});

router.put('/', (req, res) => {
  knex('blogs')
    .where('blog_id', '=', req.body.blog_id)
    .update(req.body)
    .then(response => {
    console.log(response)
    res.status(200).send("updated blog")
    })
    .catch(err => {
    console.log(err)
    res.status(404).send("There was an error")
    })
 
});

router.delete('/', (req, res) => {
if (req.body.blog_id) {
  knex('blogs')
  .where('blog_id', '=', req.body.blog_id)
  .del()
  .then(() => res.status(200).send("Blog deleted"))
  .catch(err => res.status(404).send("There was error, maybe the blog_id was invalid"))
} else {
  res.status(400).send("must have a blog_id")
}
});

module.exports = router;
