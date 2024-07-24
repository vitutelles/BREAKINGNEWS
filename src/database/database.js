import mongoose from "mongoose";

const connectDatabase = () => {
    console.log("wait connecting to the database")

    mongoose.connect(process.env.MONGO_URI,
        { useNewUrlParser: true, useUnifiedTopology: true }
    ).then(() => console.log("MongoDB Atlas Connected")).catch((error) => console.log
    (error))

};




export default  connectDatabase;