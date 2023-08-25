const express=require("express");
const postModel = require("../models/post.model");
const postRouter=express.Router();

// TO GET ALL POST
postRouter.get("/",async(req,res)=>{ // to get all the blog posts searching by english_name has been applied
    const {q}=req.query;
    let query={}
    if(q){
        query.english_name={$regex:q,$options:"i"}
    }
    try {
        const posts=await postModel.find(query);
        res.status(200).send(posts)
    } catch (error) {
        res.status(500).send({"error":"Internal Server Error"})
    }
})

// TO GET POST BASED ON THEIR CATEGORY
postRouter.get("/:category",async(req,res)=>{ // filter based on Category
    const {category}=req.params
    try {
        const posts=await postModel.find({category:category});
        res.status(200).send(posts)
    } catch (error) {
        res.status(500).send({"error":"Internal Server Error"})
    }
})
// GET A PARTICULAR POST
postRouter.get("/:id",async(req,res)=>{ // to get a particular post
    const {id}=req.params;
    try {
        const post=await postModel.findOne({_id:id});
        res.status(200).send(post)
    } catch (error) {
        res.status(500).send({"error":"Internal Server Error"})
    }
})


// UPDATE
postRouter.patch("/update/:id",async(req,res)=>{ // to make any changes in a post
    const {id}=req.params;
    const post=await postModel.findOne({_id:id})
    try {
        if(req.body.userName!==post.userName){
            res.send({"msg":"You are not authorizes to make changes"})
        }else{
            await postModel.findByIdAndUpdate({_id:id},{...req.body})
            res.status(201).send({"msg":`Post with _id:${id} has been updated`})
        }
    } catch (error) {
        res.status(500).send({"error":"Internal Server Error"})
    }
})

// DELETE
postRouter.delete("/delete/:id",async(req,res)=>{ // to delete a post
    const {id}=req.params;
    const post=await postModel.findOne({_id:id})
    try {
        if(req.body.userName!==post.userName){
            res.send({"msg":"You are not authorizes to make changes"})
        }else{
            await postModel.findByIdAndDelete({_id:id})
            res.status(200).send({"msg":`Post with _id:${id} has been deleted`})
        }
    } catch (error) {
        res.status(500).send({"error":"Internal Server Error"})
    }
})






module.exports={postRouter}