import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import TextInput from './TextInput';
import SelectInput from './SelectInput';
import UploadImage from './UploadImage';

const categories = [
    { label: 'Select Category', value: '' },
    { label: 'Accessories', value: 'accessories' },
    { label: 'Dress', value: 'dress' },
    { label: 'Footwares', value: 'footwares' },
    { label: 'Perfumes', value: 'perfumes' }
];

const colors = [
    { label: 'Select Color', value: '' },
    { label: 'Black', value: 'black' },
    { label: 'Red', value: 'red' },
    { label: 'Gold', value: 'gold' },
    { label: 'Blue', value: 'blue' },
    { label: 'Silver', value: 'silver' },
    { label: 'Beige', value: 'beige' },
    { label: 'Green', value: 'green' },
    { label: 'Brown', value: 'brown' }
];

const AddProduct = () => {

    const { user } = useSelector((state) => state.auth);

    const [product, setProduct] = useState({
        name: '',
        category: '',
        color: '',
        price: '',
        description: ''
    });

    const [image, setImage] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setProduct({
            ...product,
            [name]: value
        });
    };

    const handleSubmit = () => {

    }

    return (
        <div className='container mx-auto mt-8 border p-5' >
            <h2 className='text-2xl font-bold mb-6'>Add New Product</h2>
            <form onSubmit={handleSubmit} className='space-y-4'>
                <TextInput label="Product Name" name="name" value={product.name} onChange={handleChange} type='text' placeholder="Product Name" />
                <SelectInput label="Category" name="category" value={product.category} onChange={handleChange} options={categories}/>
                <SelectInput label="Color" name="color" value={product.color} onChange={handleChange} options={colors}/>
                <TextInput label="Price" name="price" type="number" placeholder="1000" value={product.price} onChange={handleChange} />
                <UploadImage name="image" id="image" value={e => setImage(e.target.value)} placeholder='Image' setImage={setImage}/>
            </form>
        </div>
    )
}

export default AddProduct