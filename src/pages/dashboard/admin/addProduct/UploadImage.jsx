import React from 'react'

const UploadImage = ({ name, setImage }) => {
    return (
        <div>
            <label htmlFor={name}>Upload Image</label>
            <input type="file"
                name={name}
                id={name}
                className='add-product-InputCSS' />

        </div>
    )
}

export default UploadImage