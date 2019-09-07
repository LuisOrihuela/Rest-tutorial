const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors')
require('dotenv/config')

//Middlewares
app.use(cors());
app.use(bodyParser.json());  

//Import routes
const postsRoutes = require('./routes/posts');
app.use('/posts',postsRoutes)


//ROUTES
app.get('/',(req,res)=>{
  res.send("We are on home")
})


// Connect to DB in atlas
mongoose.connect(
  process.env.DB_Connection,
  {useNewUrlParser: true},
  (err)=> {
    if( err ) throw err
    console.log("Connected to DB",)
  }
  );
// mongoose.connect('mongodb://localhost/restTutorial', {useNewUrlParser: true})
//   .then( ()=>{
//     console.log("Connected to Mongo!");
//   })
//   .catch(err =>{
//     console.error('Error connecting to mongo', err);
//   })
app.listen(3000, console.log("Listening on port 3000"));