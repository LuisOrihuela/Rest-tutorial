const express = require('express');
const router = express.Router();
const Post = require('../models/Post');

//Get back all the posts
router.get('/', (req,res)=>{
  Post.find()
    .then(data =>{
      res.json(data);
    })
    .catch(err=>console.log(err))

});

//Submits a
router.post('/', (req,res)=>{
  let title = req.body.title;
  let description = req.body.description
  Post.create({
    title,
    description
  })
  .then(data=>{
    res.json(data)
  })
  .catch(error=> console.error(error)
  )  
})

//GEt specific post
router.get('/:postId', (req,res)=>{
  Post.findById(req.params.postId)
  .then(data=>{
    res.json(data)
  })
  .catch(err=> console.log(err))
})

//Delete post
router.delete('/:postId', (req,res)=>{
  Post.remove({_id: req.params.postId})
    .then(deletedpost => res.json(deletedpost))
})

//Update a post
router.patch('/:postId', (req,res)=>{
  Post.updateOne(
    {_id: req.params.postId},
    {$set:{title: req.body.title} })
    .then(updatedPost => res.json(updatedPost))   
    .catch(err=> res.json(err)); 
})
module.exports = router;