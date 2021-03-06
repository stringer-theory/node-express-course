const express = require('express');
const app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.json());

const mockUserData=[
    {name:'Mark'},
    {name:'Jill'}
    ]
    app.get('/users', function(req,res){
            res.json({
                success: true,
                message: 'successfully got users. Nice!',
                users: mockUserData
            })
    })

// colons are used as variables that be viewed in the params    
app.get('/users/:id',function(req,res){
    console.log(req.params.id)
    res.json({
        success: true,
        message: 'got one user',
        user: req.params.id
    })
})

app.post('/login',function(req,res){
    const username=req.body.username;
    const password=req.body.password;

    const mockUsername="billyTheKid";
    const mockPassword="superSecret";

    if (username===mockUsername && password===mockPassword){
         res.json({
              success: true,
              message: 'password and username match!',
              token: 'encrypted token goes here'
         })
    } else {
         res.json({
              success: false,
              message: 'password and username do not match'
         })
    }
})

app.get('/getUserByNum/:num',function(req,res){
    console.log(req.params.num)
    console.log(mockUserData[req.params.num])
    res.json({
        success: true,
        message: 'looked up one user',
        user: mockUserData[req.params.num]
    })
})


app.listen(8000,function(){
    console.log("server is running")
    })
       