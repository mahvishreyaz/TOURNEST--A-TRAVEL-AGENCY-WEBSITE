const express = require("express");
const app=express();
const path=require("path");
const hbs=require("hbs");
const collection=require("./mongodb")

const templatePath=path.join(__dirname,'../mahvish')

app.use(express.json())
app.set("view engine", "hbs")
app.set("views",templatePath)
app.use(express.urlencoded({extended:false}))

app.get("/",(req,res)=>{
    res.render("login")
});

app.get("/signup", (req, res) => {
    res.render("signup");
  });
  
app.post("/signup",async (req,res)=>{
    const data={
        fname:req.body.fname,
        lname:req.body.lname,
        email:req.body.email,
        password:req.body.password
    }
    await collection.insertMany(data)

    res.render('login')
        
});

app.post("/login",async (req,res)=>{
    
    try{
        const check=await collection.findOne({email: req.body.email})
        if(check.password===req.body.password){
            res.render("home")
        }
        else{
            res.send("wrong password")
        }
    }
    catch{
        res.send("wrong details")
    }
        
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});