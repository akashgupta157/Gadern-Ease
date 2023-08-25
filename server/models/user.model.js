const mongoose = require("mongoose");
const user = mongoose.Schema(
    {
        name: String,
        email: { type: String, unique: true },
        password: String,
        profilePicture: {
            type: String,
            default:
                "https://t3.ftcdn.net/jpg/03/46/83/96/360_F_346839683_6nAPzbhpSkIpb8pmAwufkC7c5eD7wYws.jpg",
        }
    }
);
const UserModel = mongoose.model("UserModel", user);
module.exports = { UserModel };