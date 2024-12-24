import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import TextInput from './TextInput';
import SelectInput from './SelectInput';
import UploadImage from './UploadImage';
import { toast } from 'sonner';
import { useAddProductMutation } from '../../../../redux/features/product/productApi';
import { useNavigate } from 'react-router-dom';

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
    const [addProduct,{isLoading,isError}]=useAddProductMutation();

    const { user } = useSelector((state) => state.auth);
   // console.log(user._id);
    

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
    const navigate=useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault();
     const priceValue = parseFloat(product.price);

        if (!product.name || !product.category || !product.color || !product.price || !product.description) {
            toast.error("Please fill all the fields");
            return;
        }
    
        try {
           // console.log('Submitting product...');
            
            const result = await addProduct({
                ...product,
                image: image,
                price:priceValue,
                author: user?._id,
            }).unwrap();
    
            console.log('Product added:', result);
    
            toast.success("Product added successfully");
            setProduct({
                name: '',
                category: '',
                color: '',
                price: '',
                description: ''
            });
            setImage('');
            navigate('/shop');
        } catch (error) {
            console.error('Failed to submit:', error);
            toast.error(error.data?.message || 'Failed to submit the product');
        }
    };
    

  

    return (
        <div className='container mx-auto mt-2 border p-5' >
            <h2 className='text-2xl font-bold mb-6'>Add New Product</h2>
            <form onSubmit={handleSubmit} className='space-y-4'>
                <TextInput label="Product Name" name="name" value={product.name} onChange={handleChange} type='text' placeholder="Product Name" />
                <SelectInput label="Category" name="category" value={product.category} onChange={handleChange} options={categories} />
                <SelectInput label="Color" name="color" value={product.color} onChange={handleChange} options={colors} />
                <TextInput label="Price" name="price" type="number" placeholder="1000" value={product.price} onChange={handleChange} />
                <UploadImage name="image" id="image" value={e => setImage(e.target.value)} placeholder='Image' setImage={setImage} />
                <div>
                    <label htmlFor="description" className='block text-sm font-medium text-gray-700'>Description</label>
                    <textarea name="description" id="description"
                        className='add-product-InputCSS'
                        value={product.description}
                        placeholder='Write a product description'
                        onChange={handleChange}
                    ></textarea>
                </div>

                <div>
                    <button type='submit'
                        className='add-product-btn'

                    >Add Product</button>
                </div>
            </form>
        </div>
    )
}

export default AddProduct