import {v2 as cloudinary} from 'cloudinary';
import { response } from 'express';
import fs from 'fs';




 // Configuration
    cloudinary.config({ 
        cloud_name: process.env.CLOUDINARY_CLOUD_NAME || 'your_cloud_name', // Click 'View API Keys' above to copy your cloud name
        api_key: process.env.CLOUDINARY_API_KEY || '481858576454849', // Click 'View API Keys' above to copy your API key 
        api_secret: process.env.CLOUDINARY_API_SECRET 
    });




    const uploadOnCloudinary = async (localFilePath)=>{
        try {
            if(!localFilePath) return null;

            //upload file on cloudinary

            cloudinary.uploader.upload(localFilePath, {resource_type:"auto"})
            console.log("File uploaded successfully to Cloudinary",  response.url);
            return response;
          

        } catch (error) {
            fs.unlinkSync(localFilePath); // delete file from local storage
            return null;
            
        }
    }

    

export {uploadOnCloudinary}