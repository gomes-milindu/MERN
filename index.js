import express from "express";
import mongoose from "mongoose";

const app = express()

function success(){
    console.log("Project Started");
    
}

app.use(express.json); // middle man

const connectionString = "mongodb+srv://admin:123@cluster0.arkyzdz.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

mongoose.connect(connectionString).then(
    ()=>{
        console.log("Database Succesfully Connected");
        // then eka athule hari giyoth wenna ona wade
    }
).catch(
    ()=>{
        console.log("Database Connected Failed");
        // waradunoth wena wade
    }
)

// app ekata get request ekak awoth wena wade
app.get("/",
     (req,res) => {
        
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
const studentSchema = new mongoose.Schema(
    {
        name:String,
        age:Number,
        city: String
    }
)

const Student = mongoose.model("Student",studentSchema) // student collection ekai backend ekai athara wada krnne meya haraha
// collection eke nama saha data save wena wyuhaya


// app ekata post request ekak awoth wena wade
app.post("/",
    ()=>{
        
         console.log(req.body);
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

