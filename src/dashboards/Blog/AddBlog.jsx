import Select from 'react-select';

import { useState } from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
// import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { baseUrl } from '../../baseurl/baseUrl';

const AddBlog = () => {
    // const navigate = useNavigate();
    const [selectedImage, setSelectedImage] = useState(null);

    const [selectedCategories, setSelectedCategories] = useState([]);
    const [title, setTitle] = useState('');
    const [upazila, setUpazila] = useState('');
    const [author, setAuthor] = useState('');
    const [content, setContent] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);
    const modules = {
        toolbar: [
            [{ 'header': '1' }, { 'font': [] }],
            [{ 'list': 'ordered' }, { 'list': 'bullet' }],
            ['bold', 'italic', 'underline'],
            ['link', 'image'],
            [{ 'color': [] }, { 'background': [] }], [{ 'align': [] }],
            ['clean']
        ],
    };

    const categoryOptions = [
        { value: 'জাতীয়', label: 'জাতীয়' },
        { value: 'রাজনীতি', label: 'রাজনীতি' },
        { value: 'বাংলাদেশ', label: 'বাংলাদেশ' },
        { value: 'সারাবিশ্ব', label: 'সারাবিশ্ব' },
        { value: 'বিশেষ প্রতিবেদন', label: 'বিশেষ প্রতিবেদন' },
        { value: 'চাকরি', label: 'চাকরি' },
        { value: 'ক্রাইম', label: 'ক্রাইম' },
        { value: 'ঢাকা', label: '  ঢাকা' },
        { value: 'চট্টগ্রাম', label: '  চট্টগ্রাম' },
        { value: 'রাজশাহী', label: '  রাজশাহী' },
        { value: 'খুলনা', label: '  খুলনা' },
        { value: 'বরিশাল', label: '  বরিশাল' },
        { value: 'সিলেট', label: '  সিলেট' },
        { value: 'খেলার খবর', label: '  খেলার খবর' },
        { value: 'রংপুর', label: '  রংপুর' },
        { value: 'ময়মনসিংহ', label: '  ময়মনসিংহ' },
        { value: 'অন্যান্য', label: 'অন্যান্য' },
    ];

    const handleCategoryChange = (selectedOptions) => {
        setSelectedCategories(selectedOptions);
    };

    const selectedCategoryValues = selectedCategories.map(category => category.value);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        let bannerUrl = '';
        if (selectedImage) {
            const formData = new FormData();
            formData.append('image', selectedImage);

            try {
                const response = await fetch(`${baseUrl}/upload`, {
                    method: 'POST',
                    body: formData,
                });

                if (response.ok) {
                    const data = await response.json();
                    console.log(data.imageUrl);
                    bannerUrl = data.imageUrl; // Set bannerUrl here
                } else {
                    console.error('Error uploading image:', response.status);
                }
            } catch (error) {
                console.error('Error uploading image:', error);
            }
        }

        const blogData = {
            banner: bannerUrl,
            title,
            upazila,
            author,
            selectedCategoryValues,
            content,
            date: new Date()
        };
         console.log(blogData);
        fetch(`${baseUrl}/news`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(blogData)
        }).then(res => res.json()).then(data => {
            // console.log(blogData);
            if (data.insertedId) {
                Swal.fire(
                    'success!',
                    'News Added successfully!',
                    'success'
                )
                setIsSubmitting(false)
                // navigate('/dashboard');
            }
        })

    };

    return (
        <div className='content-wrapper'>
            <div className='content-header'>

                <Form onSubmit={handleSubmit}>
                    <FormGroup>
                        <Label className='font-monospace fs-5 text-primary' for="title">Title:</Label>
                        <Input className='border-success-subtle' type="text" name="title" id="title" required value={title} onChange={(e) => setTitle(e.target.value)} />
                    </FormGroup>

                    <div className='row'>



                        <div className='col-md-4'>
                            <Label className='font-monospace fs-5 text-primary' for="Categories">Categories:</Label>
                            <Select
                                options={categoryOptions}
                                isMulti
                                value={selectedCategories}
                                onChange={handleCategoryChange}
                                required
                            />

                        </div>


                        <FormGroup className='col-md-4'>
                            <Label className='font-monospace fs-5 text-primary' for="author">Author:</Label>
                            <Input className='border-success-subtle' type="text" name="author" id="author" required value={author} onChange={(e) => setAuthor(e.target.value)} />
                        </FormGroup>

                        <FormGroup className='col-md-4'>
                            <Label className='font-monospace fs-5 text-primary' for="upazila">Related Upazila:</Label>
                            <Input className='border-success-subtle' type="text" name="upazila" id="upazila" value={upazila} onChange={(e) => setUpazila(e.target.value)} />
                        </FormGroup>



                    </div>

                    <FormGroup>
                        <Label className='font-monospace fs-5 text-primary' for="banner">Banner:</Label>
                        <Input className='border-success-subtle' accept="image/*" name="banner" id="banner" type='file' onChange={(e) => setSelectedImage(e.target.files[0])} required />
                    </FormGroup>

                    <FormGroup className='bg-white px-2'>
                        <Label className='font-monospace fs-5 text-primary' for="content">Content:</Label>
                        <ReactQuill theme="snow"
                            style={{ height: '260px', paddingBottom: '61px' }}
                            value={content} onChange={setContent} modules={modules} />
                    </FormGroup>

                    <Button color="primary" className='' disabled={isSubmitting} type="submit">
                        {isSubmitting ? 'Submitting...' : 'Submit '}
                    </Button>
                </Form>

            </div>
        </div>
    );
};

export default AddBlog;
