const express = require('express');
const cors = require('cors')
const app = express();

app.use(cors());
app.use(express.json());
const port = 5000;
app.get('/',(req,res) =>{
    res.send('hi World')
})

const users = [
    {id:1,name:"satay",email:"d@gms"},
    {id:2,name:"aatay",email:"ad@gms"},
    {id:3,name:"watay",email:"sdd@gms"},
    {id:4,name:"uatay",email:"dsd@gms"},
    {id:5,name:"yatay",email:"dsd@gms"},
]

app.get('/users',(req,res)=>{
    search = req.query.search;
    if(search){
        const searchresult = users.filter(user =>
            user.name.toLowerCase().includes(search));
        res.send(searchresult);
        console.log(search)
    }
    
    else{
        res.send(users)
    }
})
app.post('/users',(req,res)=>{
    newUser = req.body;
    newUser.id = users.length;
    users.push(newUser);
    console.log('hitting post',req.body);
    // res.send('inside post')
    res.json(newUser);
})
app.get('/users/:id',(req,res)=>{
    const indexid = req.params.id;
    const user = users[indexid]
    res.send(user)
})
app.listen(port, () =>{
    console.log("listening to port", port);
});