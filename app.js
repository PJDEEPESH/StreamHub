
require('dotenv').config(); 
const express = require("express")
const cors = require("cors")
const collection = require("./mongo");

const app = express()
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cors())


app.get('/',cors(),(req,res)=>{

})

app.post('/',async(req,res)=>{

    const{email,password} = req.body

    try {
        const check = await collection.findOne({email:email})

        if(check){
            const pcheck = await collection.findOne({email:email,password:password})
            if(pcheck){
                res.json("exist")
            }
            else{
                res.json("wrong")
            }
        }
        else{
            res.json("not exist")
        }
    } catch (e) {
        res.json("not exist")
    }
})

app.post('/signup',async(req,res)=>{

    const{email,password} = req.body

    const data = {
        email:email, 
        password:password,
    }

    try {
        const check = await collection.findOne({email:email})

        if(check){
            res.json(req.body)
        }
        else{
            await collection.insertMany([data]);
            res.json("not exist")
        }
    } catch (e){
        console.log(e);
    }
})

app.listen(8000,()=>{
    console.log("port connected")
})
