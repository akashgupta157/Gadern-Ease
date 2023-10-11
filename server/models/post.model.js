const mongoose = require("mongoose");
const post = mongoose.Schema(
  {
    english_name: String,
    botanical_name: String,
    description: String,
    image: String,
    category: String,
    factSheet: {
      flower_color: String,
      growth_height: String,
      light: String,
      garden_style: String,
    },
    origin: String,
    location: String,
    fertilizing: String,
    diseases_pests: String,
    userId: String,
    userName: String,
    likes: {
      type: Number,
      default: 0,
    },
    likedBy: [String],
  },
  {
    timestamps: true,
  }
);
const postModel = mongoose.model("post", post);
module.exports = postModel;
