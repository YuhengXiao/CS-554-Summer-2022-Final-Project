const express = require('express');
const router = express.Router();
const data = require('../data');
const imagesData = data.images;
let { ObjectId } = require('mongodb');
const xss = require('xss');

router.post('/setImage', async (req,res) =>{
	try 
	{
		console.log("out", req.body);
		const image = await imagesData.setImage(req.body.text);
		//console.log(image);
		//res.json(image);
	} 
	catch (e) 
	{
		res.status(404).json({error: e});
	}
});

router.get('/getAllUnapprovedImages', async (req,res) =>{

});

router.post('/approveImageByImageId/:id', async (req,res) =>{

});

router.get('/getAllApprovedImages', async (req,res) =>{

});

router.get('/getImageByImageId/:id', async (req,res) =>{

});

router.get('/getImageByUserId/:id', async (req,res) =>{

});

router.post('/editImageByImageId/:id', async (req,res) =>{

});

router.post('/deleteImageByImageId/:id', async (req,res) =>{

});


module.exports = router;