import express from "express";
import mongoose from "mongoose";

const app = express()

function success(){
    console.log("Project Started");
    
}

app.use(express.json); // middle man

const connectionString = "mongodb+srv://admin:123@cluster0.arkyzdz.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
mongoose.connect(connectionString);

// app ekata get request ekak awoth wena wade
app.get("/",
     (req,res) => {
        //console.log("Get request received");
        console.log(req.body)
        let gender = "Mr. "
        if(req.body.gender == "Female"){
            gender = "Mrs. "
        }

        res.json(
        {
            message: "Message from res.json " + gender
        }
        )
    }
)

// app ekata post request ekak awoth wena wade
app.post("/",
    ()=>{
        console.log("Post Request received");
    }
)

app.listen(5000, success) // run wenna ptn gnnwa
// 5000 kiynne port number eka

console.log("Checking JS File")

// http request
    // 1. Get
    // 2. Post
    // 3. Delete
    // 4. Put 

console.log("MErn Start day 03");