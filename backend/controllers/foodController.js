import foodModel from "../models/foodModel.js";

import fs from 'fs';

//add from item

const addFood=async(req,res)=>{
     let image_filename=`${req.file.filename}`;

     const food=new foodModel({
        name:req.body.name,
        description:req.body.description,
        price:req.body.price,
       
        category:req.body.category,
         image:image_filename
     })

     try{
        await food.save();
        res.status(200).json({success:true,message:"Food item added successfully"})
     }catch(error){
        console.log(error);
        res.status(500).json({success:false,message:"Failed to add food item",error:error.message})
     }

}

//food list
const listFood=async(req,res)=>{
 try {
    const foods = await foodModel.find({});
    res.status(200).json({success:true,data:foods});
 }catch(error){
    console.log(error);
    res.status(500).json({success:false,message:"Failed to fetch food items",error:error.message})
 }

}

//remove food item - extra feature


const removeFood=async(req,res)=>{
 try {
    const food  =await foodModel.findById(req.body.id);
    fs.unlink(`uploads/${food.image}`,()=>{});

    await foodModel.findByIdAndDelete(req.body.id);
    res.status(200).json({success:true,message:"Food item removed successfully"});
 }catch(error){
    console.log(error);
    res.status(500).json({success:false,message:"Failed to remove food item",error:error.message});
}

 }

export {addFood,listFood,removeFood};