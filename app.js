const express = require('express')
const path =require('path')
const mongoose = require('mongoose')
const bodyParser=require('body-parser')
const port = 3000
const app=express()

app.use(bodyParser.urlencoded({extended: true}));
mongoose.connect("mongodb://localhost:27017/fitness-application")
.then(()=>{console.log("Database connected 🖇️ ✅")})
.catch(()=>{console.log("failed to connected ⚠️😖  ")})

const userSchema=new mongoose.Schema({
    email: String,
    username:String,
    name: String,
    password: String
});

const User=mongoose.model('User', userSchema);

app.use(express.static(path.join(__dirname, 'public')));
app.get('/',(req,res)=>{
     res.sendFile(path.join(__dirname, 'public','login.html'));   
       
});



app.post('/signup', async (req, res) => {
    try {
        const { name,username, password,email } = req.body;

        // Check if the user already exists
        const existingUser = await User.findOne({ username });
        const existingUser1 = await User.findOne({ email });
        console.log(existingUser1)
        if (existingUser1==email ) {
            return res.status(400).send('Username Already Registered!! Try With Other..!😢');
        }

        // Create a new user
        const newUser = new User({ email,username, name, password});
        await newUser.save();
        return res.sendFile(path.join(__dirname, "public", "login.html"));
    } catch (err) {
        return res.status(500).send(`Error occurred${err}`);
    }
});



app.post('/login', async(req, res) => {
try {
    const { username, password } = req.body;

    const user = await User.findOne({ username, password });
    if(!user) {
        return res.status(401).send('Invalid credentials');
    }
    return res.sendFile(path.join(__dirname, "public", "index.html"));
} 
catch (err) {
    return res.status(500).send(`Error occurred${err}`);
}
        
    
});

const appointmentSchema = new mongoose.Schema({
    name: String,
    email: String,
    trainerid: Number,
    gender: String,
    age: Number,
    date:Date,
    time: String,
    appointmenttype: String,
    appointmentphone: Number,
});

const Appointments = mongoose.model('Appointments', appointmentSchema);

app.post('/userappointment', async (req, res) => {
    try {
        const { name, email, trainerid, gender, age, date,time,appointmenttype,appointmentphone} = req.body;
        // Create a new user
        const newUser = new Appointments({ name, email, trainerid, gender, age, date,time,appointmenttype,appointmentphone });
        await newUser.save();
        console.log(newUser)
        res.sendFile(path.join(__dirname, 'public','asucces.html'));  
        // res.status(200).json("Appointment booked Succesfully!!")
        
       
    } catch (err) {
        return res.status(500).send(`Error occurred${err}`);
    } 
});

app.listen(port,()=>{
    console.log(`server running at ${port}`); 
})
