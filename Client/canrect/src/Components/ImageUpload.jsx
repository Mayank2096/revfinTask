import React, { useState } from "react";
import axios from 'axios';
function ImageUpload(){

    const [image, setImage] =useState('');

    function handleImage(event){
        console.log(event.target.files);
        setImage(event.target.files[0]);
    }

    async function handlePost(){

        const formData = new formData();
        formData.append('image',image);
        // put url
        const result = await axios.post("url", formData)
                                    .then((res)=>{console.log(res);})
                                    .catch((error) =>{console.log(error); })
        console.log(result);
    }

return(
        <>    
            <form action="/upload" method="POST">
                <input type="file" name='file' onChange={handleImage} />
                <button onClick={handlePost}>Submit</button>
            </form>
        </>
)

}

export default ImageUpload;