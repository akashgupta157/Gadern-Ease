const express = require("express");
const postModel = require("../models/post.model");
const { authMiddleware } = require("../middlewares/auth.middleware");
const postRouter = express.Router();

// TO GET ALL POST
postRouter.get("/", async (req, res) => {
  // to get all the blog posts searching by english_name has been applied
  const { q, flower_color, growth_height, light, garden_style } = req.query;
  // const page=req.query.page || 1;
  // const limit=req.query.limit || 6;
  // const toSkip=limit*(page-1)
  let query = {};
  if (q) {
    query.english_name = { $regex: q, $options: "i" };
  }
  if (q) {
    query.english_name = { $regex: q, $options: "i" };
  }

  if (flower_color) {
    query["factSheet.flower_color"] = flower_color;
  }

  if (growth_height) {
    query["factSheet.growth_height"] = growth_height;
  }

  if (light) {
    query["factSheet.light"] = light;
  }

  if (garden_style) {
    query["factSheet.garden_style"] = garden_style;
  }
  try {
    const posts = await postModel.find(query); //.skip(toSkip).limit(limit);
    res.status(200).send(posts);
  } catch (error) {
    res.status(500).send({ error: "Internal Server Error" });
  }
});
// GET A PARTICULAR POST
postRouter.get("/:id", async (req, res) => {
  // to get a particular post
  const { id } = req.params;
  try {
    const post = await postModel.findOne({ _id: id });
    res.status(200).send(post);
  } catch (error) {
    res.status(500).send({ error: "Internal Server Error" });
  }
});

// CREATE
postRouter.post("/add", authMiddleware, async (req, res) => {
  try {
    // console.log(req.name)
    const newPost = new postModel({
      ...req.body,
      userName: req.name,
      userId: req.userId,
    });
    await newPost.save();
    res.send({ message: "Data added" });
  } catch (error) {
    res.send({ error: error.message });
  }
});

// TO GET POST BASED ON THEIR CATEGORY
postRouter.get("/plant/:category", async (req, res) => {
  // filter based on category
  const { category } = req.params;
  const { flower_color, growth_height, light, garden_style } = req.query;
  // const page=req.query.page || 1;
  // const limit=req.query.limit || 6;
  // const toSkip=limit*(page-1)
  let query = { category };

  if (flower_color) {
    query["factSheet.flower_color"] = flower_color;
  }
  if (growth_height) {
    query["factSheet.growth_height"] = growth_height;
  }
  if (light) {
    query["factSheet.light"] = light;
  }

  if (garden_style) {
    query["factSheet.garden_style"] = garden_style;
  }
  // console.log("Query:", query); // Log the query
  // console.log("Params:", req.params); // Log the params
  try {
    const posts = await postModel.find(query); //.skip(toSkip).limit(limit);
    res.status(200).send(posts);
  } catch (error) {
    console.error("Error:", error); // Log the error
    res.status(500).send({ error: "Internal Server Error" });
  }
});

// UPDATE
postRouter.patch("/update/:id", authMiddleware, async (req, res) => {
  //to make changes in the post
  const { id } = req.params;
  const post = await postModel.findOne({ _id: id });
  try {
    if (req.body.userName !== post.userName) {
      res.send({ msg: "You are not authorizes to make changes" });
    } else {
      await postModel.findByIdAndUpdate({ _id: id }, { ...req.body });
      res.status(201).send({ msg: `Post with _id:${id} has been updated` });
    }
  } catch (error) {
    res.status(500).send({ error: "Internal Server Error" });
  }
});

// DELETE
postRouter.delete("/delete/:id", authMiddleware, async (req, res) => {
  // to delete a post
  const { id } = req.params;
  const post = await postModel.findOne({ _id: id });
  try {
    if (req.body.userName !== post.userName) {
      res.send({ msg: "You are not authorizes to make changes" });
    } else {
      await postModel.findByIdAndDelete({ _id: id });
      res.status(200).send({ msg: `Post with _id:${id} has been deleted` });
    }
  } catch (error) {
    res.status(500).send({ error: "Internal Server Error" });
  }
});

postRouter.post("/like/:id", async (req, res) => {
  const { id } = req.params;
  const userId = req.body.id;
  try {
    const post = await postModel.findOne({ _id: id });
    if (!post) {
      return res.status(404).send({ error: "Post not found" });
    }
    if (post.likedBy.includes(userId)) {
      return res.send({ message: "You have already liked this post" });
    }
    post.likes += 1;
    post.likedBy.push(userId);
    await post.save();
    res.status(200).send({ message: "Post liked successfully" });
    // res.status(200).send({ post });
  } catch (error) {
    res.status(500).send({ error });
  }
});

module.exports = { postRouter };
