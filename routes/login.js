var express = require('express');
var router = express.Router();
var loginSchema = require('./models/loginSchema')

/* GET users listing. */
router.post('/', function(req, res, next) {
  try{
    const data = loginSchema(req.body);
    data.save();    
    res.json("Data received successsfully");

  }catch(e){

  }
});

router.post('/newUser',async function(req,res,next){
  const {name , password}= req.body;
  try{
     const user =await loginSchema.findOne({name : name})
     if(!user){
      return res.json("user not found")
     }
    
     if(user.password !== password){
      return res.json("password mismatch")
    } 

   

    
       return res.json("success")

    
   

  }catch(e){

  }
})

router.get('/newUser', function(req, res, next) {
  res.json("New user api work corretly")
});

module.exports = router;
