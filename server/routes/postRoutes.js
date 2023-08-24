const express=require("express");
const postModel = require("../models/post.model");
const postRouter=express.Router();


postRouter.get("/",async(req,res)=>{
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

postRouter.get("/:category",async(req,res)=>{ // filter based on Category
    const {category}=req.params
    try {
        const posts=await postModel.find({category:category});
        res.status(200).send(posts)
    } catch (error) {
        res.status(500).send({"error":"Internal Server Error"})
    }
})

postRouter.get("/:category",async(req,res)=>{ // filter based on Category
    const {category}=req.params
    try {
        const posts=await postModel.find({category:category});
        res.status(200).send(posts)
    } catch (error) {
        res.status(500).send({"error":"Internal Server Error"})
    }
})

postRouter.get("/:id",async(req,res)=>{
    const {id}=req.params;
    try {
        const post=await postModel.findOne({_id:id});
        res.status(200).send(post)
    } catch (error) {
        res.status(500).send({"error":"Internal Server Error"})
    }
})

postRouter.post("/add",async(req,res)=>{
    try {
        const newPost=new postModel(req.body);
        await newPost.save();
        res.status(201).send({'msg':"New Post has been created"})
    } catch (error) {
        res.status(500).send({"error":"Internal Server Error"})
    }
})
postRouter.patch("/update/:id",async(req,res)=>{
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


postRouter.delete("/delete/:id",async(req,res)=>{
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