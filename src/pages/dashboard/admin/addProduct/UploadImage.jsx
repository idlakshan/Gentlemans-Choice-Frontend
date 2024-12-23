
import React, { useState } from 'react'
import axios from 'axios';
import { getBaseUrl } from '../../../../utils/baseURL';
import { toast } from 'sonner';

const UploadImage = ({ name, setImage }) => {
    const [loading, setLoading] = useState(false);
    const [url, setUrl] = useState("");


    //base64 function
    const convertBase64 = (file) => {
        return new Promise((resolve, reject) => {
            const fileReader = new FileReader();
            fileReader.readAsDataURL(file);
            fileReader.onload = () => {
                resolve(fileReader.result)
            }
            fileReader.onerror = (error) => {
                reject(error)
            }
        })
    }

    //request to upload file
    const uploadSingleImage = (base64) => {
        setLoading(true);
        axios.post(`${getBaseUrl()}/uploadImage`, { image: base64 }).then((res) => {
            const imageUrl = res.data;
            setUrl(imageUrl);
            toast.success("Image uploaded successfully");
            setImage(imageUrl)

        }).then(() => setLoading(false)).catch((error) => {
            console.log("Error uploading image " + error);
            setLoading(false)
        })
    }

    const uploadImage = async (event) => {
        const files = event.target.files;

        if (files.length === 1) {
            const base64 = await convertBase64(files[0]);
            uploadSingleImage(base64);
            return
        }

        const base64s = [];
        for (let i = 0; i < files.length; i++) {
            const base = await convertBase64[files[i]];
            base64s.push(base);

        }

    }

    return (
        <div>
            <label htmlFor={name}>Upload Image</label>
            <input type="file"
                name={name}
                id={name}
                onChange={uploadImage}
                className='add-product-InputCSS' />

            {
                loading && (
                    <div className='mt-2 text-sm text-green-600'>Product uploading...</div>
                )
            }

            {
                url && (
                    <div className='mt-2 text-sm text-green-600'>
                        <p>Image uploaded successfully!</p>
                        <img src={url} alt="Image" />

                    </div>
                )
            }

        </div>
    )
}

export default UploadImage