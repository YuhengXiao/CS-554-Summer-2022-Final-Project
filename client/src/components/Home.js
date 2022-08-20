import React, { useState } from "react";
var Tesseract = require('tesseract.js');
const helpers = require('./helpers');
const multer = require('multer');
const path = require('path');
const Jimp = require('jimp');

const Home = () => {
  const [name, setName] = useState("");
  const [selectedFile, setSelectedFile] = useState(null);
  const [fileText, setFileText] = useState("Empty");
	
  try
	{
		/*
		let upload = multer({ storage: storage, fileFilter: helpers.imageFilter }).single('submitted_image');
		
		upload(req, res, function(err) 
		{
			if (req.fileValidationError) 
			{
				console.log("HERE 2.1");
				// res.redirect('/hov');
			}
			else if (!req.file) 
			{
				console.log("HERE 2.2");
				//res.redirect('/hov');
			}
			else if (err instanceof multer.MulterError) 
			{
				console.log("HERE 2.3");
				//res.redirect('/hov');
			}
			else if (err) 
			{
				console.log("HERE 2.4");
				//res.redirect('/hov');
			}
			res.redirect('/addweapons/jimp?valid=' + 
				req.file.path + '$/' + 
				req.body.submitted_scale_h + '$/' + 
				req.body.submitted_scale_w + '$/' + 
				req.body.submitted_brightness);
		});
		*/
	}
	catch (e) 
	{
		console.log("FAIL :" + e);
	}
	
	const onImageChange = (e) => {
    const [file] = e.target.files;
		
		var passedVariable = file;
		
		Tesseract.recognize(passedVariable, 'eng',
		{ 
			logger: m => console.log(m) 
		}).then(({ data: { text } }) => 
		{
			setFileText(text);
			//var parsedTextObj = parseInfo(text);
			//console.log(JSON.stringify(parsedTextObj));
			//res.render('posts/hovmaps', {output: parsedTextObj, path: passedVariable.substr(7)});
		})
		
    setSelectedFile(URL.createObjectURL(file));
  };
	
	const uploadText = async (e) => {
    console.log("GOING IN: ", fileText);
		var jsonData = JSON.stringify({"text": fileText});
		var formData = new FormData();
    formData.append('json1', JSON.stringify(jsonData));
		console.log("GOING IN 2: ", JSON.stringify(jsonData));
		
		fetch('http://localhost:3001/images/setImage/', 
		{
      method: 'POST', 
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json',
			},
      mode: 'cors', 
      body: jsonData

    })
  };
	
	return (
		<form>
			<input type="file" onChange={onImageChange} />
			
			<br />
      
			<img src={selectedFile} alt="" />
			
			<br />
      
			<label id="image-text">{fileText}</label>
			
			<br />
			<br />
			
			<button className="submit_button" type="submit" onClick={uploadText}>Submit</button>
		</form>
  );
};

export default Home;










/*


<form method="POST" enctype="multipart/form-data" id="upload_image" action="/home">

			<label class="image_label" for="submitted_image">File:
			
			
			
			
			<input
				type="file"
				id="submitted_image"
				accept="image/png, image/jpeg"
				required
				value={selectedFile}
				onChange={(e) => setSelectedFile(e.target.files[0])}
			/>
		
			<img src={selectedFile} alt=""></img>
			
			
			
			
				
      </label>
			
			<br />
			
			<button class="submit_button" type="submit" onclick="toggleText()">Submit</button>
			
			
		
		</form>
		
		*/