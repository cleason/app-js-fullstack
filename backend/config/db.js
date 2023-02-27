const mongoose = require("mongoose");

const connectDB = async () => {
    try {
        mongoose.set("strictQuery", false);
        mongoose.connect(process.env.MONGO_URI, () =>
            console.log("La base de donnée mongoDB est connecté")
            );
    } catch (err) {
        console.log(err);
        process.exit();
    }
};

module.exports = connectDB;
