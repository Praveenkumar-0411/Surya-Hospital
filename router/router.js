const express = require('express');
const router = express.Router();

const signUpTemplateCopy = require('../model/Signupmodel');


router.post("/signup",(request,response)=>
{
      const sam = new signUpTemplateCopy({
        name:request.body.name,
        email:request.body.email,
        contact:request.body.contact,
        age:request.body.age,
        jobRole:request.body.jobRole
      })
      sam.save().then(data=>
      {
        response.json(data);
        console.log('Data added successfully');
      }).catch(error=>
      {
          response.json(error)
      })
})

module.exports=router;