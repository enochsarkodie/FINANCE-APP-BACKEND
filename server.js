const express = require('express');
const mongoose = require ('mongoose')
const errorHandler = require('./middleware/errorHandler');
const dotenv = require ('dotenv').config();
const cors = require("cors");
const app = express();
const port = process.env.PORT 

//middlewares 
app.use(express.json());
app.use(cors({credentials:true, origin:"http://localhost:3000"}));
app.use("/api/user", require("./Routes/userRoutes"));
app.use("/api/userProfile/",require("./routes/userProfileRoutes"));
app.use("/api/currentUser/transaction", require('./routes/transactionRoutes'));
app.use(errorHandler);

// database connection
mongoose.connect('mongodb+srv://enochsarkodie07:efLt8KZldTbAx3Xv@cluster0.tdgmzv5.mongodb.net/',{
    // useNewUrlParser:true,
    // useUnifiedTopology:true
})
.then(() => {
    app.listen(port, () => {
        console.log(`app listening on port ${port}`)
      });
    console.log('db connection successful')
}).catch ((error)=>{
   console.log(error)
});



//