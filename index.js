import express from "express";

const app = express()

function success(){
    console.log("Project Started");
    
}

// app ekata get request ekak awoth wena wade
app.get("/",
    () => {
        console.log("Get request received");
    }
)

// app ekata post request ekak awoth wena wade
// app.post("/",
//     ()=>{
//         console.log("Post Request received");
//     }
// )

// app.listen(5000, success) // run wenna ptn gnnwa
// 5000 kiynne port number eka

// http request
    // 1. Get
    // 2. Post
    // 3. Delete
    // 4. Put 